/*******************************************************************************
 * Mafia simulation
 *
 * @copyright Copyright 2017 Jakub Lelo
 *            Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Jakub Lelo
 ******************************************************************************/
/*******************************************************
 Simulation Parameters
 ********************************************************/
//sim.scenario.name = "...";  // optional
//sim.scenario.title = "...";  // optional
sim.scenario.simulationEndTime = 8760;
sim.scenario.timeUnit = "h";
sim.scenario.idCounter = 11; // start value of auto IDs
sim.scenario.randomSeed = 2019;  // optional
sim.scenario.createLog = false;
//sim.scenario.suppressInitialStateUI = true;
/*******************************************************
 Simulation Model
 ********************************************************/
sim.model.name = "MafiaSimulation";
sim.model.title = "Mafia Simulation";
sim.model.systemNarrative =

"Mafia is a type of criminal organization that originates in Italy,"+
"more specifically in Sicily, by the end of the 19th century."+
"The Sicilian Mafia, also known as “Cosa Nostra”, spread out across the world."+
 "Nowadays, even groups that don’t have their roots in Sicily are recognized"+
  "as Mafia groups. For instance, gangs in China, Japan, Russia, Chechen,"+
   "Albania, Turkey and in other places, even though they do not have any"+
   "relation with the original Sicilian Mafia. In the south of Italy there are"+
   "also other Mafia-type criminal organizations and they are also "+
   "called “Mafia” (Dickie, 2004):"+
   "<br><br>"+
   "<li> the Sacra Corona Unita, in Puglia </li>"+
   "<li> the `Ndrangheta, in Calabria, </li>"+
   "<li> the Camorra, in Campania. </li>"+
   "<br><br>"+
   "Although the history of these organizations is interrelated and they have"+
   "a lot in common with the original Mafia, they are not completely the same."+
   "The original Mafia distinguishes itself by its power, hierarchical" +
   "organization and recognition. Something the other groups never even got"+
   "close to achieve. This explains why the Mafia term is widely used"+
   "internationally."+
    "<br><br>"+
    "Although the history of these organizations is interrelated and they have"+
     "a lot in common with the original Mafia, they are not completely the"+
     "same. The original Mafia distinguishes itself by its power, hierarchical"+
      "organization and recognition. Something the other groups never even got"+
      "close to achieve. This explains why the Mafia term is widely used"+
      "internationally. The Sicilian Mafia became known and successful due"+
      "their high level of violence and hierarchical organization. In"+
      "addition, it is a combination of a shadow state, illegal business and"+
      "sworn secret society like the Freemasons (Dickie, 2004). Some argue"+
      "that the Mafia has many similarities to the State:"+
      "<br><br>"+
      "<li> Pursue to control the area. They create a shadow government over"+
       "the people within the range of their area. </li>"+
      "<li> Taxes. Another similarity to a State is creating a kind of taxes"+
       "called “protection rackets” or “pizzo”. Although, it is different than"+
        "regular taxes; while the State demands taxes just for legal"+
        "activities, the Cosa Nostra does not distinguish between legal and"+
         "illegal activities and demands it from retailers and robbers"+
         "as well. For example, it might come to a situation when both the"+
         "owner of a car showroom and the gang of car thieves who prey on him"+
        "are protected by the Mafia. So only the Cosa Nostra has a guaranteed"+
        "benefit from the paid pizzo (Dickie, 2004). Pizzo guarantees the"+
            "Entrepreneur protection services in exchange. The extortion"+
            "provides the Mafia not only periodic payment collections in good"+
             "or services, but a monopolistic control over the territory and"+
              "local market as well (Daniele, 2009). </li>"+
      "<li> Power over life and death. The Mafia arrogates itself the right"+
      "to take the decisions about life and death of other persons. </li>"+
      "<br><br>"+
"Despite having so much in common, the Mafia does not build an alternative "+
"government, but only infiltrates the existing one and adjust it to its"+
"own aims (Dickie, 2004)."+
"<br><br>"+
"An organization like the Mafia gets powerful because of its money, however"+
 "the greater it is, the more money is needed to keep it under control. Most"+
  "of their financial assets is spent on bribing, for instance, lawyers,"+
   "judges, policemen, journalists, politicians and casual labors. The Mafia"+
    "created it “brand” and was a reliable partner in the illegal business as"+
     "trafficking and dealing the drugs."+
  "<br><br>"+
"The Mafia been choosing its members very carefully and made certain"+
"restrictions to their behavior. They are supposed to be discreet, obedient,"+
"cruel, and extraordinary violent."+
"Nevertheless, one of the most interesting thing about the Mafia is the fact,"+
 "that its true nature was not confirmed until 1992. It is remarkable that"+
  "an organized criminal group remained undetected for such a long period of"+
   "time. One of the reason was the cruel strategy of the Mafia. The witnesses"+
    "and government institutions (for example, the police and courts) have"+
     "been intimidated, bribed or killed in case they did not want to"+
     "cooperate with the Mafia. Another reason was the specific and restricted"+
      "information flow within and outside the organization. The Sicilian rule"+
       "called “omertà”, was Mafia’s code of silence, imposes the mafiosi"+
        "should not talk about their criminal actions to anybody outside"+
         "of the criminal organization, especially the police, magistrates"+
         "or politicians (Dickie, 2004)."



sim.model.shortDescription =
  " The model includes four entity types: Entrepreneur, State, Customer " +
  "and Mafia.  The entities influence each other. Entrepreneur as the" +
  "main matter is the only one, which has connection to all the other." +
  "Customer can communicate just with Entrepreneur. Mafia and State can " +
  "influence the Entrepreneur and each other." +

  "<p>Entrepreneur actors represent businessmen or liberal professionals. " +
  "They are the central actors in the model. There are actions of " +
  "different Entrepreneurs to observe, all their decisions are based on" +
  "economic considerations (cost-benefit analysis) and starts with the " +
  "beginning of the productions of their products, which continues " +
  "all the time. The Entrepreneurs are the sellers " +
  "and the producers at the same time. They start with the same capital " +
  "and use it and gained salary to produce further products.</p>" +

  "<p>The Customers are the buyers of the Entrepreneur's products. They " +
  "choose the Entrepreneurs to buy products from, " +
  "based on their previous experiences with them. At first a Customer " +
  "sends a request with the number of products that " +
  "he is willing to buy. The Entrepreneur must check his " +
  "warehouse to know how many products he is able to sell. " +
  "He can contract only all products the Customer is willing to buy " +
  "or none of them. After transferring the money, the products " +
  "will be sent.</p>" +

  "<p>The Mafia represents the Sicilian Mafia." +
  " In compare to Entrepreneurs and Customers the Mafiosi won’t be" +
  "considered as single persons, but one organization " +
  "and their actions influence each other. The main " +
  "task of Mafia is to parasitize on the hard work of Entrepreneurs " +
  "and demand “Pizzo” from them. Pizzo is protection money that that " +
  "the Entrepreneurs are supposed to pay them as an extortion. Mafia" +
  " demands the money regularly of every Entrepreneur, if there " +
  "are free Mafiosi available, the order isn’t known, but every" +
  "Entrepreneur will be bullied once every round, so there is no " +
  "possibility, that an Entrepreneur must pay twice in a row. The " +
  "Entrepreneurs decide on their own if they accept or decline the Pizzo, " +
  "but every decision they make has consequences, good or bad. If the " +
  "Entrepreneur decides to pay, he can (but don’t have to) get one of two " +
  "benefits. Either the next amount of produce products will be doubled or " +
  "he will get cashback from the last paid Pizzo. The Entrepreneurs " +
  "keeps the information about paid Pizzos. If he doesn't pay, he will be" +
  "punished: his next production does not succeed or Mafia destroys some " +
  "of his already produced products. Also the Entrepreneur has to decide " +
  "if he reports the pizzo or punishment to the State.</p>" +

  "<p>The last unit is the State, which represents the government " +
  "and its law enforcement institutions responsible for enforcing " +
  "anti-mafia laws. Alike Mafia, State consists of Officers who coexist. " +
  "The State pays money regularly in the Fondo di Solidarietà," +
  "which allows the compensation of Entrepreneurs that suffered damage " +
  "by Mafiosi and reported the activity. The Officers conduct a general " +
  "investigation regularly. They choose one of the Entrepreneurs to be " +
  "under a close monitoring and can interact in case of demanding pizzo " +
  "by Mafia. If the Officer sees the demand and is able to capture " +
  "the Mafiosi, he starts a bureaucratic activity to prepare the " +
  "evidences against the Mafiosi. After that the Officer gets some free " +
  "time and the trial against the Mafiosi starts. During the trial will " +
  "be determined if the captured Mafiosi will be prisoned (for much " +
  "longer time than being captured) or let free. When the Mafiosi is " +
  "being captured or prisoned, he is removed from the simulation for a " +
  "certain amount of time. Beside the general investigation, the Officers " +
  "may also conduct specific investigation if they will be asked for help " +
  "by the Entrepreneurs.</p>";

// meta data
sim.model.source = "";
sim.model.license = "CC BY-NC";
sim.model.creator = "Jakub Lelo";
sim.model.created = "2017-05-09";
sim.model.modified = "2017-11-03";

sim.model.objectTypes = ["Customer", "Mafia", "Entrepreneur", "State"];
sim.model.eventTypes = ["DemandPizzo", "ConsiderPayPizzo", "Benefit",
                        "Punish", "ProduceProducts", "ReminderDemand",
                        "ReminderRequest", "PurchaseAccept", "Pay",
                        "AppraiseTransaction", "TransferGoods",
                        "BureaucraticActivity", "ReminderGenInv",
                        "CheckPayment", "ConsiderReportPizzo",
                        "ConsiderReportPunishment", "ReminderGenInv",
                        "CheckGenInv", "EndFreeTime", "ReleasePrison",
                        "Trial", "StopSpecInv", "Assist"
];

sim.model.v.initEntre = 3;
sim.model.v.numEntre = 100;

sim.model.v.initCustomer = sim.model.v.initEntre +
                           sim.model.v.numEntre;
sim.model.v.numCustomer = 200;

/*******************************************************
 Define Initial State
 ********************************************************/
sim.scenario.initialState.objects = {
  "1": {
    // Strong Mafia setting
    //typeName: "Mafia",
    //shortLabel: "ma",
    //name: "ma",
    //numFreeMaf: 20,
    //numCaptMaf: 0,
    //numPrisMaf: 0,
    //timeToNextDem: 16,
    //timeForPayment: 72,
    //timeForBenPun: 72,
    //demandProb: 0.9,
    //benProb: 0.2,
    //punProb: 0.9,
    //pizzoPayPerc: 0.10,
    //pizzoBenPerc: 0.05,
    //destroyedProdPerc: 0.90,
    //toDemandEnt: [],
    //extortionCheck: []

    //  Hidden Mafia setting
    typeName: "Mafia",
    shortLabel: "ma",
    name: "ma",
    numFreeMaf: 20,
    numCaptMaf: 0,
    numPrisMaf: 0,
    timeToNextDem: 8,
    timeForPayment: 72,
    timeForBenPun: 72,
    demandProb: 0.25,
    benProb: 0.8,
    punProb: 0.2,
    pizzoPayPerc: 0.10,
    pizzoBenPerc: 0.75,
    destroyedProdPerc: 0.20,
    toDemandEnt: [],
    extortionCheck: []
  },

  "2": {
    // Strong State setting
    // typeName: "State",
    // shortLabel: "st",
    // name: "st",
    // numFreeOff: 20,
    // timeGenInv: 168,
    // timeToNextGenInv: 168,
    // timeBurActMin: 24,
    // timeBurActMax: 72,
    // timeTrialMin: 84,
    // timeTrialMax: 252,
    // timeFreeTime: 336,
    // timeInPrisonMin: 2480,
    // timeInPrisonMax: 5660,
    // timeSpecInvMin: 24,
    // timeSpecInvMax: 168,
    // timeAssistanceMin: 24,
    // timeAssistanceMax: 72,
    // seeAndCaptureProb: 0.75,
    // captureProb: 0.9,
    // imprisonProb: 0.9,
    // assistProb: 0.9,
    // mafia: 1,
    // entToObserve: [],
    // entUnderObserv: []

    //Weak State setting
    typeName: "State",
    shortLabel: "st",
    name: "st",
    numFreeOff: 5,
    timeGenInv: 168,
    timeToNextGenInv: 336,
    timeBurActMin: 24,
    timeBurActMax: 72,
    timeTrialMin: 168,
    timeTrialMax: 504,
    timeFreeTime: 336,
    timeInPrisonMin: 1440,
    timeInPrisonMax: 2880,
    timeSpecInvMin: 24,
    timeSpecInvMax: 168,
    timeAssistanceMin: 24,
    timeAssistanceMax: 72,
    seeAndCaptureProb: 0.25,
    captureProb: 0.5,
    imprisonProb: 0.5,
    assistProb: 0.25,
    mafia: 1,
    entToObserve: [],
    entUnderObserv: []
  }
};

sim.scenario.initialState.events = [
  {
    typeName: "ReminderGenInv",
    occTime: 1,
    state: 2,
    mafia: 1
  },
  {
    typeName: "ReminderDemand",
    occTime: 1,
    mafia: 1,
    state: 2
  }
];

sim.scenario.setupInitialState = function () {
  var i = 0, id = 0, satEntreV = [];
  var mafia = cLASS["Mafia"].instances["1"];

  for (i = 0; i < sim.model.v.numEntre; i += 1) {
    id = sim.model.v.initEntre + i;
    sim.addObject( new Entrepreneur( {
      id: id,
      typeName: "Entrepreneur",
      name: "ent" + i,
      wealth: 270.0,
      timePayPizzoConsideration: 24,
      timeReportingPizzoMin:24,
      timeReportingPizzoMax:48,
      timeReportingPunishment: 24,
      timeTransferGoodsMin: 72,
      timeTransferGoodsMax: 120,
      timeProduceProducts: 24,
      timeBenPunProd: 12,
      timeBenProdCounter: 12,
      timePunProdCounter: 12,
      productsAmount: 5,
      productionSpeed: 1,
      productionCost: 1,
      productedProducts: 0,
      calcNotProducedProd: 0,
      destProd: 0,
      productive: true,
      fasterProduction: false,
      acceleration: 2,
      numPunishments: 0,
      numNoPayments: 0,
      numPizzoRep: 0,
      numEffectiveRep: 0,
      price: 3,
      numStateComp: 0,
      numPunRep: 0,
      defStateProRate: 0.2
    } ) );

    sim.scheduleEvent( new ProduceProducts( {
        occTime: 1,
        entrepreneur: id
      }
    ) );

    mafia.extortionCheck[id] = false;
    satEntreV[id] = 5;
  }

  for (i = 0; i < sim.model.v.numCustomer; i += 1) {

    sim.addObject( new Customer( {
      id: sim.model.v.initCustomer + i,
      typeName: "Customer",
      name: "cus" + i,
      timeNextVisitMin: 168,
      timeNextVisitMax: 240,
      prodAmountMin: 5,
      prodAmountMax: 7,
      satEntr: satEntreV
    } ) );

    sim.scheduleEvent( new ReminderRequest( {
        occTime: 1,
        customer: sim.model.v.initCustomer + i
      }
    ) );
  }
};

/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
  "extortionCounter": {
    range: "NonNegativeInteger",
    label: "Extortions",
    initialValue: 0
  },
  "lostExtortionCounter": {
    range: "NonNegativeInteger",
    label: "Lost Extortions",
    initialValue: 0
  },
  "paidPizzoCounter": {
    range: "NonNegativeInteger",
    label: "Paid Pizzo",
    shortLabel: "test",
    initialValue: 0
  },
  "notPaidPizzoCounter": {
    range: "NonNegativeInteger",
    label: "Not Paid Pizzo",
    initialValue: 0
  },
  "paidPizzoAmount": {
    range: "NonNegativeInteger",
    label: "Amount Paid Pizzo",
    initialValue: 0
  },
  "reportedPizzoCounter": {
    range: "NonNegativeInteger",
    label: "Reported Pizzo",
    initialValue: 0
  },
  "punishmentCounter": {
    range: "NonNegativeInteger",
    label: "Punishments",
    initialValue: 0
  },
  "reportedPunishmentsCounter": {
    range: "NonNegativeInteger",
    label: "Reported Punishments",
    initialValue: 0
  },
  "assistRequestCounter": {
    range: "NonNegativeInteger",
    label: "Assist Request",
    initialValue: 0
  },
  "imprisonCounter": {
    range: "NonNegativeInteger",
    label: "Imprisoned Mafiosi",
    initialValue: 0
  },

  "assistSuccessCounter": {
    range: "NonNegativeInteger",
    label: "Assist Provided",
    initialValue: 0
  },
  "assistAmount": {
    range: "NonNegativeInteger",
    label: "Amount Assist Provided",
    initialValue: 0
  },
  "genInvSuccessCounter": {
    range: "NonNegativeInteger",
    label: "Success General Inv",
    initialValue: 0
  },
  "specInvSuccessCounter": {
    range: "NonNegativeInteger",
    label: "Success Specific Inv",
    initialValue: 0
  },
  "soldProductsCounter": {
    range: "NonNegativeInteger",
    label: "Sold Products",
    initialValue: 0
  },
  "societyWealth": {
    range: "Decimal",
    label: "Society Wealth",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        total += entrepreneurs[objId].wealth;
      } );

      return total / Object.keys( entrepreneurs ).length;
    }
  },
  "producedProductsCounter": {
    range: "Decimal",
    label: "Produced products",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        total += entrepreneurs[objId].producedProducts;
      } );

      return total / Object.keys( entrepreneurs ).length;
    }
  },

  "wellBusinessCounter": {
    range: "NonNegativeInteger",
    label: "Successful Businesses",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if (entrepreneurs[objId].wealth > 270) {
          total += 1;
        }

      } );

      return total;
    }
  },

  "notWellBusinessCounter": {
    range: "NonNegativeInteger",
    label: "Unsuccessful Businesses",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if (entrepreneurs[objId].wealth <= 270) {

          total += 1;
        }

      } );

      return total;
    }
  },

  "repEntrWellCounter": {
    range: "NonNegativeInteger",
    label: "Success Reporting",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if ((entrepreneurs[objId].wealth > 270) &&
            ((entrepreneurs[objId].numPizzoRep > 0) ||
             (entrepreneurs[objId].numPunRep > 0))) {

          total += 1;
        }

      } );

      return total;
    }
  },

  "repEntrNotWellCounter": {
    range: "NonNegativeInteger",
    label: "Unsuccessful Reporting",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if ((entrepreneurs[objId].wealth <= 270) &&
            ((entrepreneurs[objId].numPizzoRep > 0) ||
             (entrepreneurs[objId].numPunRep > 0))) {

          total += 1;
        }

      } );

      return total;
    }
  },

  "notRepEntrWellCounter": {
    range: "NonNegativeInteger",
    label: "Successful Not Reporting",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if ((entrepreneurs[objId].wealth > 270) &&
            (entrepreneurs[objId].numPizzoRep === 0) &&
            (entrepreneurs[objId].numPunRep === 0)) {

          total += 1;
        }

      } );

      return total;
    }
  },

  "notRepEntrNotWellCounter": {
    range: "NonNegativeInteger",
    label: "Unsuccessful Not Reporting",
    initialValue: 0,
    computeOnlyAtEnd: true,
    expression: function () {
      var total = 0;
      var entrepreneurs = cLASS["Entrepreneur"].instances;
      Object.keys( entrepreneurs ).forEach( function ( objId ) {
        if ((entrepreneurs[objId].wealth <= 270) &&
            (entrepreneurs[objId].numPizzoRep === 0) &&
            (entrepreneurs[objId].numPunRep === 0)) {

          total += 1;
        }

      } );

      return total;
    }
  }
};
