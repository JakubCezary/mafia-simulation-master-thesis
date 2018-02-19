/*******************************************************************************
 * The ReminderGenInv event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ReminderGenInv = new cLASS( {
  Name: "ReminderGenInv",
  shortLabel: "Rgi",
  supertypeName: "eVENT",
  properties: {
    "state": {
      range: "State"
    },
    "mafia": {
      range: "Mafia"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      var entObs;
      if (this.state.numFreeOff > 0) {
        
        // entrepreneur to observe
        // beginning of the observation
        entObs = this.state.startGenInv();
        
        this.state.numFreeOff -= 1;
        //DemandPizzo in the meanwhile
        followupEvents.push( new CheckGenInv( {
          occTime: this.occTime + this.state.timeGenInv,
          state: this.state,
          entrepreneur: entObs,
          mafia: this.mafia
        } ) );
        
      }
      
      return followupEvents;
    }
  }
} );

// Any exogenous event type needs to define a static function "createNextEvent"
ReminderGenInv.createNextEvent = function ( e ) {
  return new ReminderGenInv( {
    occTime: e.occTime + e.state.timeToNextGenInv,
    state: e.state,
    mafia: e.mafia,
    entrepreneur: e.entrepreneur
  } );
};
