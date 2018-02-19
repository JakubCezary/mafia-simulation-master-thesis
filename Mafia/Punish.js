/*******************************************************************************
 * The Punish event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Punish = new cLASS( {
  Name: "Punish",
  shortLabel: "P",
  supertypeName: "eVENT",
  properties: {
    "mafia": {
      range: "Mafia"
    },
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "state": {
      range: "State"
    }
  },

  methods: {
    "onEvent": function () {
      var followupEvents = [];

      // Draw one of two ways to punish
      var randomPunishment = rand.uniform( 0.0, 1.0 ) >= 0.5;

      this.entrepreneur.numPunishments += 1;
      sim.stat.punishmentCounter += 1;

      if (randomPunishment) {
        // destroy between 1 and 10 products
        this.entrepreneur.destProd = Math.round(
          this.entrepreneur.productsAmount *
          this.mafia.destroyedProdPerc );

        // if there are less products than
        // the amount Mafia wants to destroy
        // destroy every product
        if (this.entrepreneur.productsAmount <=
            this.entrepreneur.destProd) {
          this.entrepreneur.productsAmount = 0;

        } else {
          this.entrepreneur.productsAmount =
            this.entrepreneur.productsAmount -
            this.entrepreneur.destProd;
        }

      } else {
        // next timestep the entrepreneur will not able to produce any product
        this.entrepreneur.productive = false;
      }

      followupEvents.push( new ConsiderReportPunishment( {
        occTime: this.occTime + this.entrepreneur.timeReportingPunishment,
        entrepreneur: this.entrepreneur,
        state: this.state
      } ) );

      return followupEvents;
    }
  }
} );
