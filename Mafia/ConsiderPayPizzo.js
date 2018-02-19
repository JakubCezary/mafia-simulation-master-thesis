/*******************************************************************************
 * The ConsiderPayPizzo event class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var ConsiderPayPizzo = new cLASS( {
  Name: "ConsiderPayPizzo",
  shortLabel: "Cpp",
  supertypeName: "eVENT",
  properties: {
    "entrepreneur": {
      range: "Entrepreneur"
    },
    "mafia": {
      range: "Mafia"
    },
    "state": {
      range: "State"
    },
    "pizzoToPay": {
      range: "Decimal"
    }
  },

  methods: {
    "onEvent": function () {
      var followupEvents = [];

      var mafiaBenefit, benefitProd, benefitPayback;
      var mafPun, mafPunWarehouse, mafPunProd;
      var pay, notPay, convPay, convNotPay, IGpay;
      var timeForReportingPizzo;

      // Decide the Mafia benefit to assess
      benefitProd = parseFloat( (this.entrepreneur.timeBenPunProd *
                                 (this.entrepreneur.price -
                                  this.entrepreneur.productionCost)).toFixed(
        2 ) );

      benefitPayback = parseFloat( (this.mafia.pizzoBenPerc *
                                    this.pizzoToPay).toFixed( 2 ) );

      if (benefitProd > benefitPayback) {
        mafiaBenefit = benefitProd;
      } else {
        mafiaBenefit = benefitPayback;
      }

      // Calculate the pay inclination
      pay = mafiaBenefit - this.pizzoToPay;

      // Decide the Maia punishment to assess
      mafPunWarehouse = parseFloat( (this.entrepreneur.productsAmount *
                                     this.mafia.destroyedProdPerc *
                                     this.entrepreneur.price).toFixed( 2 ) );

      mafPunProd = parseFloat( (this.entrepreneur.productionSpeed *
                                this.entrepreneur.timeBenPunProd *
                                (this.entrepreneur.price -
                                 this.entrepreneur.productionCost)).toFixed(
        2 ) );

      if (mafPunWarehouse > mafPunProd) {
        mafPun = mafPunWarehouse;
      } else {
        mafPun = mafPunProd;
      }

      // Calculate the Not Pay inclination
      notPay = (-mafPun * (this.entrepreneur.numPunishments /
                           this.entrepreneur.numNoPayments)) || 0;

      // Normalize the pay and notPay values
      convPay = ((0.5 * Math.atan2( 0.01 * pay, 1 )) /
                 (Math.PI / 2)) + 0.5;
      convNotPay = ((0.5 * Math.atan2( 0.01 * notPay, 1 )) /
                    (Math.PI / 2)) + 0.5;
      IGpay = (convPay / (convPay + convNotPay)) || 0;

      // Decide to Pay Pizzo
      var x = rand.uniform( 0.0, 1.0 );
      if ((x < IGpay) &&
          ( this.entrepreneur.wealth >= this.pizzoToPay )) {

        this.entrepreneur.wealth -= this.pizzoToPay;

        this.mafia.paidExtortion( this.entrepreneur.id );

        sim.stat.paidPizzoCounter += 1;
        sim.stat.paidPizzoAmount += this.pizzoToPay;

        // Decide NOT to Pay Pizzo and evaluate reporting pizzo request
      } else {

        this.entrepreneur.numNoPayments += 1;
        sim.stat.notPaidPizzoCounter += 1;

        timeForReportingPizzo = rand.uniformInt(
          this.entrepreneur.timeReportingPizzoMin,
          this.entrepreneur.timeReportingPizzoMax );

        followupEvents.push( new ConsiderReportPizzo( {
          occTime: this.occTime + timeForReportingPizzo,
          mafia: this.mafia,
          entrepreneur: this.entrepreneur,
          state: this.state
        } ) );
      }

      return followupEvents;
    }
  }
} );
