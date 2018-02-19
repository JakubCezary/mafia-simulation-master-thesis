/*******************************************************************************
 * The DemandPizzo event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var DemandPizzo = new cLASS( {
  Name: "DemandPizzo",
  shortLabel: "Dp",
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
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      var pizzoToPay;
      
      // when the Entrepreneur is under observation and the Officer
      // saw it and captured Mafiosi
      if ((this.state.entUnderObserv.includes( this.entrepreneur.id )) &&
          (rand.uniform( 0.0, 1.0 ) < this.state.seeAndCaptureProb)) {
        this.mafia.numCaptMaf += 1;
      } else {

        //calculate the pizzo amount based on wealth
        pizzoToPay = parseFloat( (this.mafia.pizzoPayPerc *
                                  this.entrepreneur.wealth).toFixed( 2 ) );
  
        // sometimes the Entrepreneur cannot sale products
        if (pizzoToPay > 1) {
    
          sim.stat.extortionCounter += 1;
    
          followupEvents.push( new ConsiderPayPizzo( {
            occTime: this.occTime +
                     this.entrepreneur.timePayPizzoConsideration,
            mafia: this.mafia,
            entrepreneur: this.entrepreneur,
            state: this.state,
            pizzoToPay: pizzoToPay
          } ) );
    
          followupEvents.push( new CheckPayment( {
            occTime: this.occTime + this.mafia.timeForPayment,
            mafia: this.mafia,
            entrepreneur: this.entrepreneur,
            state: this.state,
            pizzoToPay: pizzoToPay
          } ) );
        } else {
    
          sim.stat.lostExtortionCounter += 1;
    
        }
        
        // not capture, free after demanding pizzo
        this.mafia.numFreeMaf += 1;
      }
      
      return followupEvents;
    }
  }
} );
