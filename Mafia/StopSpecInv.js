/*******************************************************************************
 * The StopSpecInv event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var StopSpecInv = new cLASS( {
  Name: "StopSpecInv",
  shortLabel: "Ssi",
  supertypeName: "eVENT",
  properties: {
    "state": {
      range: "State"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "mafia": {
      range: "Mafia"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // when the State gathered proofs against Mafiosi
      // captured Mafiosi
      if ((rand.uniform( 0.0, 1.0 ) < this.state.captureProb) &&
          (this.mafia.numFreeMaf > 0)) {
        
        this.mafia.numCaptMaf += 1;
        this.mafia.numFreeMaf -= 1;
        this.entrepreneur.numEffectiveRep += 1;
        
        this.mafia.extortionCheck[this.entrepreneur.id] = undefined;
        
        sim.stat.specInvSuccessCounter += 1;
        
        followupEvents.push( new BureaucraticActivity( {
          occTime: this.occTime + 1,
          mafia: this.mafia,
          state: this.state
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
