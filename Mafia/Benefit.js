/*******************************************************************************
 * The Benefit event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Benefit = new cLASS( {
  Name: "Benefit",
  shortLabel: "B",
  supertypeName: "eVENT",
  properties: {
    "mafia": {
      range: "Mafia"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "pizzoToPay": {
      range: "Decimal"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      var benefitValue;
      
      // 50% chance true or false
      var randomBenefit = rand.uniform( 0.0, 1.0 ) >= 0.5;
      
      if (randomBenefit) {
        //calculate the amount of money that will be given back
        benefitValue = parseFloat( (this.mafia.pizzoBenPerc *
                                    this.pizzoToPay).toFixed( 2 ) );
        
        this.entrepreneur.wealth += benefitValue;
      } else {
        // Next time the entrepreneur produces, it doubles the amount of
        // products
        this.entrepreneur.fasterProduction = true;
      }
      return followupEvents;
    }
  }
} );
