/*******************************************************************************
 * The Entrepreneur object class
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
var Entrepreneur = new cLASS({
    Name: "Entrepreneur",
    supertypeName: "oBJECT",
    properties: {
        // current wealth
        "wealth": {
            range: "Decimal",
            label: "Wealth",
            shortLabel: "w"
        },
        // current amount of products the Entrepreneur possesses
        "productsAmount": {
            range: "NonNegativeInteger",
            label: "Products Amount",
            shortLabel: "pA"
        },
        "producedProducts": {
            range: "NonNegativeInteger",
            label: "Produced Products",
            shortLabel: "pP"
        },
        "timeTransferGoodsMin": {
            range: "NonNegativeInteger",
            label: "Transfer Goods Min Time"
        },
        "timeReportingPizzoMin": {
            range: "NonNegativeInteger",
            label: "Time Reporting Pizzo Min"
        },
        "timeReportingPizzoMax": {
            range: "NonNegativeInteger",
            label: "Time Reporting Pizzo Max"
        },
        "timeTransferGoodsMax": {
            range: "NonNegativeInteger",
            label: "Transfer Goods Max Time"
        },
        //Time the Entrepreneur needs to decide if to pay or not to pay the
        // pizzo
        "timePayPizzoConsideration": {
            range: "NonNegativeInteger",
            label: "Time For Paying Pizzo Consideration"
        },
        "timeReportingPunishment": {
            range: "NonNegativeInteger",
            label: "Time For Reporting Punishment"
        },

        // How many times Mafia punished the Entrepreneur
        "numPunishments": {
            range: "NonNegativeInteger",
            label: "Number Punishments"
            //  shortLabel: "nPun"
        },
        // How many times the Entrepreneurs didn't pay
        "numNoPayments": {
            range: "NonNegativeInteger",
            label: "Number No Payments"
            //    shortLabel: "nNoPay"
        },
        "numPizzoRep": {
            range: "NonNegativeInteger",
            label: "Number Reported Pizzos"
            //shortLabel: "nRep"
        },
        //Number Imprisonments thanks to this Entrepreneur
        "numEffectiveRep": {
            range: "NonNegativeInteger",
            label: "Number Effective Reports"
            //  shortLabel: "nEffRep"
        },
        // Punishment
        "numStateComp": {
            range: "NonNegativeInteger",
            label: "Number State Compansations",
            shortLabel: "nStateComp"
        },
        "numPunRep": {
            range: "NonNegativeInteger",
            label: "Number Punishment Reports"
            //    shortLabel: "nPunRep"
        },
        // Production
        "productionSpeed": {
            range: "NonNegativeInteger",
            label: "Production Speed"
        },
        "productionCost": {
            range: "NonNegativeInteger",
            label: "Production Speed"
        },
        "productive": {
            range: "Boolean",
            label: "Productive"
        },
        "fasterProduction": {
            range: "Boolean",
            label: "Faster Production"
        },
        "acceleration": {
            range: "NonNegativeInteger",
            label: "Production Acceleration"

        },
        "price": {
            range: "NonNegativeInteger",
            label: "Product Price"
        },
        "calcNotProducedProd": {
            range: "NonNegativeInteger",
            label: "Calculated Not Producted Products"
        },
        "destProd": {
            range: "NonNegativeInteger",
            label: "Destroyed Products"
        },
        "timeProduceProducts": {
            range: "NonNegativeInteger",
            label: "Time Produce Products"
        },
        //The time for how long the production might be accelerated or blocked
        "timeBenPunProd": {
            range: "NonNegativeInteger",
            label: "Time Benefit Punishment Production"
        },
        "timeBenProdCounter": {
            range: "NonNegativeInteger",
            label: "Time Benefit Production Counter"
        },
        "timePunProdCounter": {
            range: "NonNegativeInteger",
            label: "Time Punishment Production Counter"
        },
        "state": {
            range: "State"
        },
        "defStateProRate": {
            range: "Decimal",
            label: "Default State Protection Rate"
        }
    }
});
