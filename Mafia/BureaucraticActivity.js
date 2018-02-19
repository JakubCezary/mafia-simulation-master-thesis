/*******************************************************************************
 * The BureaucraticActivity event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var BureaucraticActivity = new cLASS( {
  Name: "BureaucraticActivity",
  shortLabel: "Ba",
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
      
      var trialDur = rand.uniformInt( this.state.timeTrialMin,
        this.state.timeTrialMax );
      
      followupEvents.push( new Trial( {
        occTime: this.occTime + trialDur,
        mafia: this.mafia,
        state: this.state
      } ) );
      
      followupEvents.push( new EndFreeTime( {
        occTime: this.occTime + this.state.timeFreeTime,
        state: this.state
      } ) );
      
      return followupEvents;
    }
  }
} );
