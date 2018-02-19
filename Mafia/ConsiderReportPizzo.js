/*******************************************************************************
 * The ConsiderReportPizzo event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ConsiderReportPizzo = new cLASS( {
  Name: "ConsiderReportPizzo",
  shortLabel: "Rp",
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
      
      var timeSpecInv = rand.uniformInt( this.state.timeSpecInvMin,
        this.state.timeSpecInvMax );
      
      // Mafia as the punisher
      var mafiaPunRate = (this.entrepreneur.numPunishments /
                          this.entrepreneur.numNoPayments) || 0;
      
      //State as the protector
      var effectiveness = ( this.entrepreneur.numEffectiveRep /
                            this.entrepreneur.numPizzoRep );
      
      var compensation = (this.entrepreneur.numStateComp /
                          this.entrepreneur.numPunRep);
      
      if ((effectiveness) && (!compensation)) {
        compensation = 0;
      } else if ((!effectiveness) && (compensation)) {
        effectiveness = 0;
      }
      
      //State protection rate
      //extent to which an Entrepreneur
      //perceives the State of being able to provide protection
      // from the Mafia
      var stateProRate = (0.5 * ( effectiveness + compensation)) ||
                         this.entrepreneur.defStateProRate;
      
      var probRep = (1 - mafiaPunRate) * stateProRate;
      
      if (rand.uniform( 0.0, 1.0 ) < probRep) {
        this.entrepreneur.numPizzoRep += 1;
        sim.stat.reportedPizzoCounter += 1;

        
        if (this.state.numFreeOff > 0) {
          this.state.numFreeOff -= 1;
          
          followupEvents.push( new StopSpecInv( {
            occTime: this.occTime + timeSpecInv,
            mafia: this.mafia,
            entrepreneur: this.entrepreneur,
            state: this.state
          } ) );
          
        }
        
      }
      
      return followupEvents;
    }
  }
} );
