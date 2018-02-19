/*******************************************************************************
 * The TransferGoods event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var TransferGoods = new cLASS( {
  Name: "TransferGoods",
  shortLabel: "Tg",
  supertypeName: "eVENT",
  properties: {
    "customer": {
      range: "Customer"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // Just transfer the goods
      // The allocation happened already, so no productAmount -- anymore
      followupEvents.push( new AppraiseTransaction( {
        occTime: this.occTime + 1,
        customer: this.customer,
        entrepreneur: this.entrepreneur,
        satisfaction: true
      } ) );
      
      return followupEvents;
    }
  }
} );
