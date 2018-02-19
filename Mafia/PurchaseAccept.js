/*******************************************************************************
 * The PurchaseAccept event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var PurchaseAccept = new cLASS( {
  Name: "PurchaseAccept",
  shortLabel: "Pa",
  supertypeName: "eVENT",
  properties: {
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "customer": {
      range: "Customer"
    },
    "productsAmountToBuy": {
      range: "Decimal"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      var bill = 0.0;
      
      if (this.entrepreneur.productsAmount >= this.productsAmountToBuy) {
        //able to sell the products to the customer
        
        // decrease the amount of products after accepting,
        // because the resources will be already allocated
        // no conflicts (accepting another request before decreasing
        // the amount of the products after the transfer
        this.entrepreneur.productsAmount =
          this.entrepreneur.productsAmount - this.productsAmountToBuy;
        
        sim.stat.soldProductsCounter += this.productsAmountToBuy;
        
        bill = this.entrepreneur.price * this.productsAmountToBuy;
        
        followupEvents.push( new Pay( {
            occTime: this.occTime + 1,
            customer: this.customer,
            entrepreneur: this.entrepreneur,
            bill: bill
          }
        ) );
        
      } else {
        //not able to sell the products for the Customer
        followupEvents.push( new AppraiseTransaction( {
          occTime: this.occTime + 1,
          customer: this.customer,
          entrepreneur: this.entrepreneur,
          satisfaction: false
        } ) );
      }
      
      return followupEvents;
    }
  }
} );
