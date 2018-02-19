/*******************************************************************************
 * The CheckGenInv event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var CheckGenInv = new cLASS( {
  Name: "CheckGenInv",
  shortLabel: "Cgi",
  supertypeName: "eVENT",
  properties: {
    "state": {
      range: "State"
    },
    "mafia": {
      range: "Mafia"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      var burActDur = rand.uniformInt( this.state.timeBurActMin,
        this.state.timeBurActMax );
      
      // Remove an Entrepreneur from observation
      this.state.entUnderObserv.splice(
        this.state.entUnderObserv.indexOf( this.entrepreneur.id ), 1 );
      
      if (this.mafia.numCaptMaf > 0) {
  
        sim.stat.genInvSuccessCounter += 1;
        
        followupEvents.push( new BureaucraticActivity( {
          occTime: this.occTime + burActDur,
          mafia: this.mafia,
          state: this.state,
          entrepreneur: this.entrepreneur
        } ) );
        
      } else {
        
        followupEvents.push( new EndFreeTime( {
          occTime: this.occTime + this.state.timeFreeTime,
          state: this.state
        } ) );
        
      }
      
      return followupEvents;
    }
  }
} );
