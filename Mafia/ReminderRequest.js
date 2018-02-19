/*******************************************************************************
 * The ReminderRequest event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ReminderRequest = new cLASS( {
  Name: "ReminderRequest",
  shortLabel: "Rr",
  supertypeName: "eVENT",
  properties: {
    "customer": {
      range: "Customer"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // entrepreneur to deal with
      var purchase = this.customer.purchaseRequest();
      
      followupEvents.push( new PurchaseAccept( {
        occTime: this.occTime + 1,
        customer: this.customer,
        entrepreneur: purchase["entrepreneur"],
        productsAmountToBuy: purchase["productsAmountToBuy"]
      } ) );
      
      return followupEvents;
    }
  }
} );

ReminderRequest.createNextEvent = function ( e ) {
  return new ReminderRequest( {
    occTime: e.occTime + rand.uniformInt( e.customer.timeNextVisitMin,
      e.customer.timeNextVisitMax ),
    customer: e.customer
  } );
};
