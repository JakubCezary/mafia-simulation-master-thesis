/*******************************************************************************
 * The Mafia object class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Mafia = new cLASS( {
  Name: "Mafia",
  supertypeName: "oBJECT",
  properties: {
    "timeToNextDem": {
      range: "NonNegativeInteger",
      label: "Time To Next Demand"
    },
    "numFreeMaf": {
      range: "NonNegativeInteger",
      label: "Number Free Mafiosi",
      shortLabel: "NcM"
    },
    "numCaptMaf": {
      range: "NonNegativeInteger",
      label: "Number Captured Mafiosi"
      // shortLabel: "NcM"
    },
    "numPrisMaf": {
      range: "NonNegativeInteger",
      label: "Number Imprisoned Mafiosi"
      // shortLabel: "NpM"
    },
    "toDemandEnt": {
      range: "NonNegativeInteger",
      minCard: 0,
      maxCard: Infinity
    },
    "extortionCheck": {
      range: "Boolean",
      minCard: 0,
      maxCard: Infinity
    },
    "timeForPayment": {
      range: "NonNegativeInteger",
      label: "Time For Payment"
    },
    "timeForBenPun": {
      range: "NonNegativeInteger",
      label: "Time For Benefit or Punish"
    },
    "pizzoBenPerc": {
      range: "Decimal",
      label: "Pizzo Benefit Percentage"
    },
    "pizzoPayPerc": {
      range: "Decimal",
      label: "Pizzo To Pay Percentage"
    },
    "benProb": {
      range: "Decimal",
      label: "Benfit Probability"
      
    },
    "punProb": {
      range: "Decimal",
      label: "Punishment Probability"
      
    },
    "destroyedProdPerc": {
      range: "Decimal",
      label: "Percentage of Destroyed Products"
      
    },
    "demandProb": {
      range: "Decimal",
      label: "Demand or Not Demand The Pizzo"
    }
  },
  
  methods: {
    //method that determinates the entrepreneur, who is supposed to pay
    "considerDemandPizzo": function () {
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      var entrepreneur, entreId = 0;
      
      // Determine if pizzo will or not be demanded
      if (rand.uniform( 0.0, 1.0 ) < this.demandProb) {
        
        //check if it's time to demand pizzo and if its from which
        // entrepreneur
        if (this.toDemandEnt.length === 0) {
          this.toDemandEnt = Object.keys( entrepreneurs );
        }
        
        entreId = this.toDemandEnt.splice( rand.uniformInt( 0,
          this.toDemandEnt.length - 1 ), 1 );
        
        entrepreneur = entrepreneurs[entreId];
      }
      
      return entrepreneur;
    },
    
    "paidExtortion": function ( id ) {
      this.extortionCheck[id] = true;
    }
  }
} );
