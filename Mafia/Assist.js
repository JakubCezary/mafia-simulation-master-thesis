/*******************************************************************************
 * The Assist event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Assist = new cLASS( {
  Name: "Assist",
  shortLabel: "A",
  supertypeName: "eVENT",
  properties: {
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "state": {
      range: "State"
    },
    "lossAftPun": {
      range: "Decimal"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      sim.stat.assistRequestCounter += 1;
      
      //check if the State is able to assist the Entrepreneur
      if (rand.uniform( 0.0, 1.0 ) < this.state.assistProb) {
        
        this.entrepreneur.numStateComp += 1;
        this.entrepreneur.wealth += this.lossAftPun;
        
        sim.stat.assistSuccessCounter += 1;
        sim.stat.assistAmount += this.lossAftPun;
      }
      
      return followupEvents;
    }
  }
} );
