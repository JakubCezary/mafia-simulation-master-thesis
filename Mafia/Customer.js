/*******************************************************************************
 * The Customer object class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Customer = new cLASS( {
  Name: "Customer",
  supertypeName: "oBJECT",
  properties: {
    "satEntr": {
      range: "NonNegativeInteger",
      minCard: 0,
      maxCard: Infinity
      //     shortLabel: "sE"
    },
    "prodAmountMin": {
      range: "NonNegativeInteger",
      label: "Minimal Products Amount"
    },
    "prodAmountMax": {
      range: "NonNegativeInteger",
      label: "Maximal Products Amount"
    },
    "timeNextVisitMin": {
      range: "NonNegativeInteger",
      label: "Minimal Time to Next Visit"
      //    shortLabel: "mintNV"
    },
    "timeNextVisitMax": {
      range: "NonNegativeInteger",
      label: "Maximal Time to Next Visit"
      //  shortLabel: "maxtNV"
    }
  },
  
  methods: {
    // method that determines the entrepreneur to buy from and the
    // amount of products
    "purchaseRequest": function () {
      var productsAmountToBuy = 0,
        satisfactions = {},
        satisfaction = 0.0,
        result = {};
      
      //between 1 and 5 products
      productsAmountToBuy = rand.uniformInt( this.prodAmountMin,
        this.prodAmountMax );
      
      // choose the Entrepreneur with whom the Customer were the
      // most satisfied so far
      satisfactions = this.satEntr;
      Object.keys( cLASS["Entrepreneur"].instances ).
             forEach( function ( objId ) {
               if ((satisfactions[objId] > satisfaction) ||
                   (satisfactions[objId] === satisfaction &&
                    rand.uniform( 0.0, 1.0 ) >= 0.5)) {
                 result = {
                   "entrepreneur": cLASS["Entrepreneur"].instances[objId],
                   "productsAmountToBuy": productsAmountToBuy
                 };
                 satisfaction = satisfactions[objId];
               }
             } );
      
      return result;
    }
  }
} );
