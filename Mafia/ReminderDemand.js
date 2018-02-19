/*******************************************************************************
 * The ReminderDemand event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ReminderDemand = new cLASS( {
  Name: "ReminderDemand",
  shortLabel: "Rd",
  supertypeName: "eVENT",
  properties: {
    "mafia": {
      range: "Mafia"
    },
    "state": {
      range: "State"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // who is gonna pay?
      var entrepreneurToPay = this.mafia.considerDemandPizzo();
      
      if ((this.mafia.numFreeMaf > 0) && (entrepreneurToPay)) {
        this.mafia.numFreeMaf -= 1;
        
        followupEvents.push(
          new DemandPizzo( {
            occTime: this.occTime + 1,
            mafia: this.mafia,
            state: this.state,
            entrepreneur: entrepreneurToPay
          } ) );
        
      }
      
      return followupEvents;
    }
  }
} );

ReminderDemand.createNextEvent = function ( e ) {
  return new ReminderDemand( {
    occTime: e.occTime + e.mafia.timeToNextDem,
    mafia: e.mafia,
    state: e.state
  } );
};
