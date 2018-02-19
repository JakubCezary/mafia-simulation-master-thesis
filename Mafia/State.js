/*******************************************************************************
 * The State object class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var State = new cLASS( {
  Name: "State",
  supertypeName: "oBJECT",
  properties: {
    
    //Number of Free Officers, who can start new investigation
    "numFreeOff": {
      range: "NonNegativeInteger",
      label: "Number Free Officers"
      // shortLabel: "NfO"
    },
    "timeGenInv": {
      range: "NonNegativeInteger",
      label: "General Investigation Duration"
    },
    "timeBurActMin": {
      range: "NonNegativeInteger",
      label: "Bureaucracy Activity Duration Min"
    },
    "timeBurActMax": {
      range: "NonNegativeInteger",
      label: "Bureaucracy Activity Duration Max"
    },
    "timeTrialMin": {
      range: "NonNegativeInteger",
      label: "Trial Duration Min"
    },
    "timeTrialMax": {
      range: "NonNegativeInteger",
      label: "Trial Duration Max"
    },
    "timeSpecInvMin": {
      range: "NonNegativeInteger",
      label: "Time for Specific Investigation Min"
    },
    "timeSpecInvMax": {
      range: "NonNegativeInteger",
      label: "Time for Specific Investigation Max"
    },
    "timeFreeTime": {
      range: "NonNegativeInteger",
      label: "Free Time Duration"
    },
    "timeInPrisonMin": {
      range: "NonNegativeInteger",
      label: "Time In Prison Min"
    },
    "timeInPrisonMax": {
      range: "NonNegativeInteger",
      label: "Time In Prison Max"
    },
    //number compensations after punishment
    "numStateCompensations": {
      range: "NonNegativeInteger",
      label: "Number State Compensations"
    },
    "timeAssistanceMin": {
      range: "NonNegativeInteger",
      label: "Time For Assistance Min"
    },
    "timeAssistanceMax": {
      range: "NonNegativeInteger",
      label: "Time For Assistance Max"
    },
    // Array with all Entrepreneurs who aren't under observation currently
    "entToObserve": {
      range: "NonNegativeInteger",
      minCard: 0,
      maxCard: Infinity
    },
    // Array with all Entrepreneurs who are currently under observation
    "entUnderObserv": {
      range: "NonNegativeInteger",
      minCard: 0,
      maxCard: Infinity
    },
    // probability for seeing and capturing a mafioso during a
    // general investigation
    "seeAndCaptureProb": {
      range: "Decimal",
      label: "Probability See and Capture"
    },
    //probability for capturing a mafioso during a specific investigation
    "captureProb": {
      range: "Decimal",
      label: "Probability See and Capture"
    },
    "imprisonProb": {
      range: "Decimal",
      label: "Probability to Imprison"
    },
    "assistProb": {
      range: "Decimal",
      label: "Probability to assist an Entrepreneur"
    },
    "timeToNextGenInv": {
      range: "NonNegativeInteger",
      label: "Time General Investigation"
    },
    "mafia": {
      range: "Mafia"
    }
  },
  
  methods: {
    // method that determines the beginning of new general investigation
    "startGenInv": function () {
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      var entreId;
      
      if (this.entToObserve.length === 0) {
        this.entToObserve = Object.keys( entrepreneurs );
      }
      
      do {
        entreId = this.entToObserve.splice( rand.uniformInt( 0,
          this.entToObserve.length - 1 ), 1 );
      } while (this.entUnderObserv.includes( entreId ));
      
      //set the Entrepreneur under the observation
      this.entUnderObserv.push( entreId );
      
      return entrepreneurs[entreId];
    }
  }
} );
