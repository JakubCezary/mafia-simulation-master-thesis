/*******************************************************************************
 * The CheckPayment event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var CheckPayment = new cLASS( {
  Name: "CheckPayment",
  shortLabel: "Cp",
  supertypeName: "eVENT",
  properties: {
    "mafia": {
      range: "Mafia"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "state": {
      range: "State"
    },
    "pizzoToPay": {
      range: "Decimal"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // Mafia may not always punish for not paying the pizzo
      // or benefit for paying
      
      if (this.mafia.extortionCheck[this.entrepreneur.id] !== undefined) {
        
        // check if desired Entrepreneur paid the pizzo
        if (this.mafia.extortionCheck[this.entrepreneur.id]) {
          
          if (rand.uniform( 0.0, 1.0 ) < this.mafia.benProb) {
            
            followupEvents.push( new Benefit( {
              occTime: this.occTime + this.mafia.timeForBenPun,
              entrepreneur: this.entrepreneur,
              mafia: this.mafia,
              pizzoToPay: this.pizzoToPay
            } ) );
            
          }
          
        } else {
          this.entrepreneur.numNoPayments += 1;
          
          if (rand.uniform( 0.0, 1.0 ) < this.mafia.punProb) {
            
            followupEvents.push( new Punish( {
              occTime: this.occTime + this.mafia.timeForBenPun,
              entrepreneur: this.entrepreneur,
              state: this.state,
              mafia: this.mafia
            } ) );
            
          }
        }
      }
      
      //set the payment back to false for the next payment
      this.mafia.extortionCheck[this.entrepreneur.id] = false;
      
      return followupEvents;
    }
  }
} );
