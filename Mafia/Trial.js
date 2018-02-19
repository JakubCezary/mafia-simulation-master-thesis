/*******************************************************************************
 * The Trial event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Trial = new cLASS( {
  Name: "Trial",
  shortLabel: "T",
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
      var timeInPrison = rand.uniformInt( this.state.timeInPrisonMin,
        this.state.timeInPrisonMax );
      
      this.mafia.numCaptMaf -= 1;
      
      if (rand.uniform( 0.0, 1.0 ) < this.state.imprisonProb) {
        
        this.mafia.numPrisMaf += 1;
        sim.stat.imprisonCounter += 1;
        
        followupEvents.push( new ReleasePrison( {
          occTime: this.occTime + timeInPrison,
          mafia: this.mafia
        } ) );
        
      } else {
        this.mafia.numFreeMaf += 1;
      }
      
      return followupEvents;
    }
  }
} );
