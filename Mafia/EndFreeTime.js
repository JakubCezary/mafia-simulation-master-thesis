/*******************************************************************************
 * The EndFreeTime event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var EndFreeTime = new cLASS( {
  Name: "EndFreeTime",
  shortLabel: "Eft",
  supertypeName: "eVENT",
  properties: {
    "state": {
      range: "State"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      this.state.numFreeOff += 1;
      
      return followupEvents;
    }
  }
} );
