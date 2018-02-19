/*******************************************************************************
 * The ProduceProducts event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ProduceProducts = new cLASS( {
  Name: "ProduceProducts",
  shortLabel: "Pps",
  supertypeName: "eVENT",
  properties: {
    "entrepreneur": {
      range: "Entrepreneur"
    }
  },
  
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      
      // Produce new products if it's not being blocked by Mafia
      if (this.entrepreneur.productive) {
        this.entrepreneur.producedProducts += 1;
        //faster production
        if ((this.entrepreneur.fasterProduction) &&
            (this.entrepreneur.wealth >= (this.entrepreneur.acceleration *
                                          this.entrepreneur.productionSpeed *
                                          this.entrepreneur.productionCost))) {
          
          this.entrepreneur.productsAmount += this.entrepreneur.acceleration *
                                              this.entrepreneur.productionSpeed;
          
          //production costs
          this.entrepreneur.wealth -= this.entrepreneur.acceleration *
                                      this.entrepreneur.productionSpeed *
                                      this.entrepreneur.productionCost;
          
          if (this.entrepreneur.timeBenProdCounter > 0) {
            this.entrepreneur.timeBenProdCounter -= 1;
          } else {
            this.entrepreneur.timeBenProdCounter =
              this.entrepreneur.timeBenPunProd;
            this.entrepreneur.fasterProduction = false;
          }
          
          // Produce with usual speed
        } else if (this.entrepreneur.wealth >=
                   (this.entrepreneur.productionSpeed *
                    this.entrepreneur.productionCost)) {
          
          this.entrepreneur.productsAmount += this.entrepreneur.productionSpeed;
          
          this.entrepreneur.wealth -= this.entrepreneur.productionCost *
                                      this.entrepreneur.productionSpeed;
          
        }
        
      } else {
        
        if (this.entrepreneur.timePunProdCounter > 0) {
          
          this.entrepreneur.timePunProdCounter -= 1;
          
        } else {
          this.entrepreneur.timePunProdCounter =
            this.entrepreneur.timeBenPunProd;
          
          this.entrepreneur.productive = true;
        }
        
        this.entrepreneur.calcNotProducedProd +=
          this.entrepreneur.productionSpeed;
      }
      
      return followupEvents;
    }
  }
} );

// Any exogenous event type needs to define a static function "createNextEvent"
ProduceProducts.createNextEvent = function ( e ) {
  return new ProduceProducts( {
    occTime: e.occTime + e.entrepreneur.timeProduceProducts,
    entrepreneur: e.entrepreneur
  } );
};
