/*******************************************************************************
 * The Pay event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Pay = new cLASS( {
  Name: "Pay",
  shortLabel: "P",
  supertypeName: "eVENT",
  properties: {
    "customer": {
      range: "Customer"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "bill": {
      range: "Decimal"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      var timeTransferGoods = rand.uniformInt(
        this.entrepreneur.timeTransferGoodsMin,
        this.entrepreneur.timeTransferGoodsMax );
      
      // the Customer pays the Entrepreneur
      this.entrepreneur.wealth = this.entrepreneur.wealth + this.bill;
      
      followupEvents.push( new TransferGoods( {
        occTime: this.occTime + timeTransferGoods,
        customer: this.customer,
        entrepreneur: this.entrepreneur
      } ) );
      
      return followupEvents;
    }
  }
} );
