/*******************************************************************************
 * The ReleasePrison event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ReleasePrison = new cLASS( {
  Name: "ReleasePrison",
  shortLabel: "RP",
  supertypeName: "eVENT",
  properties: {
    "mafia": {
      range: "Mafia"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      this.mafia.numPrisMaf -= 1;
      this.mafia.numFreeMaf += 1;
      
      return followupEvents;
    }
  }
} );
