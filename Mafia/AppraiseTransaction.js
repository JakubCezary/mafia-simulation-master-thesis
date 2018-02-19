/*******************************************************************************
 * The AppraiseTransaction event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var AppraiseTransaction = new cLASS( {
  Name: "AppraiseTransaction",
  shortLabel: "At",
  supertypeName: "eVENT",
  properties: {
    "customer": {
      range: "Customer"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "satisfaction": {
      range: "Boolean"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // if he sold the products satisfaction of the Customer ++
      // otherwise --
      if (this.satisfaction &&
          this.customer.satEntr[this.entrepreneur.id] < 10) {
        this.customer.satEntr[this.entrepreneur.id] += 1;
      } else if (!this.satisfaction &&
                 this.customer.satEntr[this.entrepreneur.id] > 1) {
        this.customer.satEntr[this.entrepreneur.id] -= 1;
      }
      
      return followupEvents;
    }
  }
} );
