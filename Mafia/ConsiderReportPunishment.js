/*******************************************************************************
 * The ConsiderReportPunishment event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ConsiderReportPunishment = new cLASS( {
  Name: "ConsiderReportPunishment",
  shortLabel: "Rpp",
  supertypeName: "eVENT",
  properties: {
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
      var lossAftPun = 0;
      
      // Mafia as the punisher
      var mafiaPunRate = (this.entrepreneur.numPunishments /
                          this.entrepreneur.numNoPayments) || 0;
      
      //State as the protector
      var effectiveness = ( this.entrepreneur.numEffectiveRep /
                            this.entrepreneur.numPizzoRep );
      
      var compensation = (this.entrepreneur.numStateComp /
                          this.entrepreneur.numPunRep);
      
      //State protection rate
      //extent to which an Entrepreneur
      //perceives the State of being able to provide protection
      // from the Mafia
      
      var stateProRate = (0.5 * ( effectiveness + compensation)) ||
                         this.entrepreneur.defStateProRate;
      
      var probRep = (1 - mafiaPunRate) * stateProRate;
      
      var timeAssistance = rand.uniformInt( this.state.timeAssistanceMin,
        this.state.timeAssistanceMax );
      
      if (rand.uniform( 0.0, 1.0 ) < probRep) {
        
        this.entrepreneur.numPunRep += 1;
        sim.stat.reportedPunishmentsCounter += 1;
        
        if (this.entrepreneur.calcNotProducedProd > 0) {
          
          lossAftPun = this.entrepreneur.calcNotProducedProd * 0.5;
          this.entrepreneur.calcNotProducedProd = 0;
          
        } else {
          
          lossAftPun = this.entrepreneur.destProd * 1.0;
          this.entrepreneur.destProd = 0;
        }
        
        followupEvents.push( new Assist( {
          occTime: this.occTime + timeAssistance,
          entrepreneur: this.entrepreneur,
          state: this.state,
          lossAftPun: lossAftPun
        } ) );
        
      }
      
      return followupEvents;
    }
  }
} );
