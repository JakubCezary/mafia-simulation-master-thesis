/* jshint browser: true */
'use strict';

if (!window.localStorage || !("classList" in document.createElement("a"))) {
  alert("The browser you are using is out-dated! Update your browser or install a recent version of Firefox.");
  throw "Cannot run on this browser";
}

/**
 * Implements the trim function for browsers 
 * that don't support it natively
 */
if (!String.prototype.trim) {  
  String.prototype.trim = function () {  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
}
/**
 * Implement some ECMASCRIPT6 methods for browsers 
 * that don't support them natively
 */
if (!Number.isInteger) {
  Number.isInteger = function isInteger (nVal) {
    return typeof nVal === "number" && isFinite(nVal) && 
        nVal > -9007199254740992 && nVal < 9007199254740992 && 
        Math.floor(nVal) === nVal;
  };
}
if (!String.prototype.includes ) {
  String.prototype.includes = function () {
    return String.prototype.indexOf.apply( this, arguments ) !== -1;
  };
}
if (!Array.prototype.includes ) {
  Array.prototype.includes = function () {
    return Array.prototype.indexOf.apply( this, arguments ) !== -1;
  };
}
/**
 * Compute the max/min of an array
 * Notice that apply requires a context object, which is not really used
 * in the case of a static function such as Math.max
 */
Array.max = function (array) {
  return Math.max.apply( Math, array);
}; 
Array.min = function (array) {
  return Math.min.apply( Math, array);
};
/**
 * Clone an array
 */
Array.prototype.clone = function () {
  return this.slice(0);
};
/**
 * Merge an array with another one
 */
Array.prototype.merge = function (anotherArray) {
  return Array.prototype.push.apply( this, anotherArray);
};
/**
 * Test if an array is equal to another
 */
Array.prototype.isEqualTo = function (a2) {
  return (this.length === a2.length) && this.every( function( el, i) {
    return el === a2[i]; });
};
/**
 * Return an array of the values of an object
 */
Object.values = function (obj) {
  return Object.keys(obj).map( function (key) {
      return obj[key];
    });
};

/**
 * @fileOverview  Defines error classes (also called "exception" classes)
 * @author Gerd Wagner
 */

function ConstraintViolation( msg, culprit) {
  this.message = msg;
  if (culprit) this.culprit = culprit;
}
function NoConstraintViolation( v) {
  if (v !== undefined) this.checkedValue = v;
  this.message = "";
}
NoConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
NoConstraintViolation.prototype.constructor = NoConstraintViolation;

/*
 * Property Constraint Violations
 */
function MandatoryValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
MandatoryValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
MandatoryValueConstraintViolation.prototype.constructor = MandatoryValueConstraintViolation;

function RangeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RangeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RangeConstraintViolation.prototype.constructor = RangeConstraintViolation;

function StringLengthConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
StringLengthConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
StringLengthConstraintViolation.prototype.constructor = StringLengthConstraintViolation;

function IntervalConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
IntervalConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
IntervalConstraintViolation.prototype.constructor = IntervalConstraintViolation;

function PatternConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
PatternConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
PatternConstraintViolation.prototype.constructor = PatternConstraintViolation;

function UniquenessConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
UniquenessConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
UniquenessConstraintViolation.prototype.constructor = UniquenessConstraintViolation;

function CardinalityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
CardinalityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
CardinalityConstraintViolation.prototype.constructor = CardinalityConstraintViolation;

function ReferentialIntegrityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ReferentialIntegrityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ReferentialIntegrityConstraintViolation.prototype.constructor = ReferentialIntegrityConstraintViolation;

function FrozenValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
FrozenValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
FrozenValueConstraintViolation.prototype.constructor = FrozenValueConstraintViolation;

function OtherConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
OtherConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
OtherConstraintViolation.prototype.constructor = OtherConstraintViolation;

/*
 * Entity Type Constraint Violations
 */
function EntityTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
EntityTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
EntityTypeConstraintViolation.prototype.constructor = EntityTypeConstraintViolation;

function ModelClassConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ModelClassConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ModelClassConstraintViolation.prototype.constructor = ModelClassConstraintViolation;

function ViewConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ViewConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ViewConstraintViolation.prototype.constructor = ViewConstraintViolation;

function ObjectTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ObjectTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ObjectTypeConstraintViolation.prototype.constructor = ObjectTypeConstraintViolation;

function AgentTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
AgentTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
AgentTypeConstraintViolation.prototype.constructor = AgentTypeConstraintViolation;

function KindConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
KindConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
KindConstraintViolation.prototype.constructor = KindConstraintViolation;

function RoleConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RoleConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RoleConstraintViolation.prototype.constructor = RoleConstraintViolation;

/*******************************************************************************
 * @fileOverview A collection of utilities: methods, objects, etc used all over the code.
 * @author Mircea Diaconescu
 * @copyright Copyright © 2014 Gerd Wagner, Mircea Diaconescu et al, 
 *            Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @date July 08, 2014, 11:04:23
 * @license The MIT License (MIT)
 ******************************************************************************/
var util = {};  //typeof util === undefined ? {} : util;

/**
 * Serialize a Date object as an ISO date string
 * @return  YYYY-MM-DD
 */
util.createIsoDateString = function (d) {
  return d.toISOString().substring(0,10);
};
/**
 * Capitalize the first character of a string
 * @param {string} str
 * @return {string}
 */
util.capitalizeFirstChar = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Copy all own (property and method) slots of a number of untyped objects 
 * to a new untyped object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 */
util.mergeObjects = function () {
  var i = 0, k = 0, n = arguments.length, m = 0, 
      foundArrayArg = false,
      foundObjectArg = false, 
      arg = null, mergedResult,
      keys=[], key="";
  for (i = 0; i < n; i++) {
    arg = arguments[i];
    if (arg === undefined) {
      continue;
    }
    if (Array.isArray( arg)) {
      if (!foundObjectArg) {
        mergedResult = mergedResult ? mergedResult : [];
        foundArrayArg = true;
        mergedResult = mergedResult.concat( arg);
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Array with an Object! Expected Array arguments only!";
      }
    } else if (typeof arg === 'object') {
      if (!foundArrayArg) {
        mergedResult = mergedResult ? mergedResult : {};
        foundObjectArg = true;
        keys = Object.keys( arg);
        m = keys.length;
        for (k = 0; k < m; k++) {
          key = keys[k]; 
          mergedResult[key] = arg[key];
        }      
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Object with an Array! Expected Object arguments only!";
      }
    } else {
      throw "util.mergeObjects: only arguments of type Array or Object are allowed, but '" +
             typeof arguments[i] + "' type was found for argument number " + i;
    }
  }
  return mergedResult;
};

//***** NOT USED IN cLASSjs ************************
/**
 * Verifies if a value represents an integer or integer string
 * @param {string} x
 * @return {boolean}
 */
util.isIntegerString = function (x) {
  return typeof(x) === "string" && x.search(/^-?[0-9]+$/) == 0;
};
/**
 * Extract the data record part of an object. The extracted property values
 * are either primitive data values, Date objects, or arrays of primitive
 * data values.
 * @param {object} obj
 */
util.createRecordFromObject = function (obj) {
  var record={}, p="", val;
  for (p in obj) {
    val = obj[p];
    if (obj.hasOwnProperty(p) && (typeof(val) === "string" ||
            typeof(val) === "number" || typeof(val) === "boolean" ||
            val instanceof Date ||
            Array.isArray( val) &&  // array list of data values
            !val.some( function (el) {
              return typeof(el) === "object";
            })
        )) {
      if (val instanceof Date) record[p] = val.toISOString();
      else if (Array.isArray( val)) record[p] = val.slice(0);
      else record[p] = val;
    }
  }
  return record;
};
/**
 * Create a deep clone of a JS object
 * @param o  the object to be cloned
 * @return {object}
 */
util.cloneObject = function (o) {
  var clonedObj = Array.isArray(o) ? [] : {};
  Object.keys(o).forEach( function (key) {
    clonedObj[key] = (typeof o[key] === "object") ? util.cloneObject(o[key]) : o[key];
  });
  return clonedObj;
};

/**
 * Predefined class for creating enumerations as special JS objects.
 * @copyright Copyright 2014 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 * @constructor
 * @this {eNUMERATION}
 * @param {string} name  The name of the new enumeration data type.
 * @param {array} enumArg  The labels array or code list map of the enumeration
 *
 * An eNUMERATION has the following properties:
 * labels         an array list of label strings such that enumLabel = labels[enumIndex-1]
 * enumLitNames
 *
 */
/* globals eNUMERATION */
function eNUMERATION( name, enumArg) {
  var i = 0, lbl = "", LBL = "";
  if (typeof name !== "string") {
    throw new Error(
      "The first constructor argument of an enumeration must be a string!");
  }
  this.name = name;
  if (Array.isArray(enumArg)) {
    // a simple enum defined by a list of labels
    if (!enumArg.every(function (n) {
        return (typeof n === "string");
      })) {
      throw new Error("A list of enumeration labels as the second " +
        "constructor argument must be an array of strings!");
    }
    this.labels = enumArg;
    this.enumLitNames = this.labels;
    this.codeList = null;
  } else if (typeof enumArg === "object" && Object.keys(enumArg).length > 0) {
    // a code list defined by a map
    if (!Object.keys(enumArg).every(function (code) {
        return (typeof enumArg[code] === "string");
      })) {
      throw new Error("All values of a code list map must be strings!");
    }
    this.codeList = enumArg;
    // use codes as the names of enumeration literals
    this.enumLitNames = Object.keys( this.codeList);
    this.labels = this.enumLitNames.map(function (c) {
      return enumArg[c] + " (" + c + ")";
    });
  } else {
    throw new Error(
      "Invalid Enumeration constructor argument: " + enumArg);
  }
  this.MAX = this.enumLitNames.length;
  // generate the enumeration literals by capitalizing/normalizing the names
  for (i = 1; i <= this.enumLitNames.length; i++) {
    // replace " " and "-" with "_"
    lbl = this.enumLitNames[i - 1].replace(/( |-)/g, "_");
    // convert to array of words, capitalize them, and re-convert
    LBL = lbl.split("_").map(function (lblPart) {
      return lblPart.toUpperCase();
    }).join("_");
    // assign enumeration index
    this[LBL] = i;
  }
  // protect the enumeration from change attempts
  Object.freeze( this);
  // add new enumeration to the population of all enumerations
  eNUMERATION.instances[this.name] = this;
}
/*
 * Check if a value represents an enumeration literal or a valid index
 */
eNUMERATION.prototype.isValidEnumLitOrIndex = function (v) {
  return (Number.isInteger(v) && v > 0 && v < this.MAX);
};
/*
 * Serialize a list of enumeration literals/indexes as a list of
 * enumeration literal names
 */
eNUMERATION.prototype.enumIndexesToNames = function (a) {
  if (!Array.isArray(a)) {
    throw new Error(
      "The argument must be an Array!");
  }
  var listStr = a.map(function (enumInt) {
    return this.enumLitNames[enumInt - 1];
  }, this).join(", ");
  return listStr;
};
/*
 * Define a map of all enumerations as a class-level property
 */
eNUMERATION.instances = {};

 /*******************************************************************************
 * cLASS allows defining constructor-based JavaScript classes and
 * class hierarchies based on a declarative description of the form:
 *
 *   var MyObject = new cLASS({
 *     Name: "MyObject",
 *     supertypeName: "MySuperClass",
 *     properties: {
 *       "myAdditionalAttribute": {range:"Integer", label:"...", max: 7, ...}
 *     },
 *     methods: {
 *     }
 *   });
 *   var myObj = new MyObject({id: 1, myAdditionalAttribute: 7});
 *   // test if instance of MyObject
 *   if (myObj.constructor.Name ==="MyObject") ...
 *   // or, alternatively,
 *   if (myObj instanceof MyObject) ...
 *
 * Notice that it is assumed that a class has (or inherits) an "id" attribute
 *
 *
 * @copyright Copyright 2015-2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/* globals cLASS */
function cLASS (classSlots) {
  var propDs = classSlots.properties || {},  // property declarations
      methods = classSlots.methods || {},
      supertypeName = classSlots.supertypeName,
      superclass=null, constr=null,
      propsWithInitialValFunc = [];
  // check Class definition constraints
  if (supertypeName && !cLASS[supertypeName]) {
    throw "Specified supertype "+ supertypeName +" has not been defined!";
  }
  if (!Object.keys( propDs).every( function (p) {
        return (propDs[p].range !== undefined);
      }) ) {
    throw "No range defined for some property of class "+ classSlots.Name +" !";
  }
  // define new class as constructor function
  constr = function (instanceSlots) {
    if (supertypeName) {
      // invoke supertype constructor
      cLASS[supertypeName].call( this, instanceSlots);
    }
    // assign own properties
    Object.keys( propDs).forEach( function (p) {
      var range = propDs[p].range,
          val, rangeClasses=[], i=0, objRef=null, validationResult=null;
      if (typeof instanceSlots === "object" && instanceSlots[p]) {
        // property p has an initialization slot
        val = instanceSlots[p];
        validationResult = cLASS.check( p, propDs[p], val);
        if (!(validationResult instanceof NoConstraintViolation)) throw validationResult;
        // is range a class (or class disjunction)?
        if (typeof range === "string" && typeof val !== "object" &&
            (cLASS[range] || range.includes("|"))) {
          if (range.includes("|")) {
            rangeClasses = range.split("|");
            for (i=0; i < rangeClasses.length; i++) {
              objRef = cLASS[rangeClasses[i]].instances[String(val)];
              // convert IdRef to object reference
              if (objRef) { this[p] = objRef; break;}
            }
          } else {  // range is a class
            // convert IdRef to object reference
            this[p] = cLASS[range].instances[String(val)] || val;
          }
        } else this[p] = val;
        delete instanceSlots[p];
      } else if (propDs[p].initialValue !== undefined) {
        // no initialization slot, assign initial value
        if (typeof propDs[p].initialValue === "function") {
          propsWithInitialValFunc.push(p);
        } else this[p] = propDs[p].initialValue;
      } else if (!propDs[p].optional) {
        // assign default value to mandatory properties without an initialization slot
        if (cLASS.isIntegerType(range) || cLASS.isDecimalType(range)) {
          this[p] = 0;
        } else if (range === "String") {
          this[p] = "";
        } else if (range === "Boolean") {
          this[p] = false;
        } else if (typeof range === "string" && cLASS[range] ||
            typeof range === "object" && ["Array", "ArrayList"].includes(range["dataType"])) {
          this[p] = [];
        } else if (typeof range === "object" && range["dataType"] === "Map") {
          this[p] = {};
        }
      }
      // initialize historical properties
      if (propDs[p].historySize) {
        this.history = this.history || {};  // a map
        this.history[p] = propDs[p].decimalPlaces ?
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize,
                {decimalPlaces: propDs[p].decimalPlaces}) :
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize);
      }
    }, this);
    // call the functions for initial value expressions
    propsWithInitialValFunc.forEach( function (p) {
      this[p] = propDs[p].initialValue.call(this);
    }, this);
    // assign remaining fields not defined as properties by the object's class
    if (typeof( instanceSlots) === "object") {
      Object.keys( instanceSlots).forEach( function (f) {
        this[f] = instanceSlots[f];
      }, this);
    }
    // is the class not abstract and does the object have an ID slot?
    if (!classSlots.isAbstract && "id" in this) {
      // add new object to the population/extension of the class
      cLASS[classSlots.Name].instances[String(this.id)] = this;
    }
  };
  // assign class-level (meta-)properties
  constr.constructor = cLASS;
  constr.Name = classSlots.Name;
  if (classSlots.isAbstract) constr.isAbstract = true;
  if (classSlots.shortLabel) constr.shortLabel = classSlots.shortLabel;
  if (supertypeName) {
    constr.supertypeName = supertypeName;
    superclass = cLASS[supertypeName];
    // apply classical inheritance pattern
    constr.prototype = Object.create( superclass.prototype);
    constr.prototype.constructor = constr;
    // merge superclass property declarations with own property declarations
    constr.properties = Object.create( superclass.properties);
   //  assign own property declarations, possibly overriding super-props																		 
    Object.keys( propDs).forEach( function (p) {
      constr.properties[p] = propDs[p];
    });
  } else {  // if class is root class
    constr.properties = propDs;
    // overwrite and improve the standard toString method
    constr.prototype.toString = function () {
      var str1="", str2="", i=0;
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            propLabel = propDecl ? (propDecl.shortLabel || propDecl.label) : key,
            valStr = "";
        // is the slot of a declared reference property?
        if (propDecl && typeof propDecl.range === "string" && cLASS[propDecl.range]) {
          // is the property multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( this[key])) {
              valStr = this[key].map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( this[key]));
          } else {  // if the property is single-valued
            valStr = String( this[key].id);
          }
        } else if (typeof this[key] === "function") {
          // the slot is an instance-level method slot
          valStr = "a function";
        } else {  // the slot is an attribute slot or an undeclared reference property slot
          valStr = JSON.stringify( this[key]);
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
    // define a concise serialization method for logging
    constr.prototype.toLogString = function () {
      var str1="", str2="", i=0;
      var decimalPlaces = 2,
          roundFactor = Math.pow( 10, decimalPlaces);
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="";
        if (!propDecl || !propDecl.shortLabel) return;
        propLabel = propDecl.shortLabel;
        // if the property is a reference property?
        if (cLASS[propDecl.range]) {
          // if the reference property is multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( val)) {
              valStr = val.map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( val));
          } else {  // if the reference property is single-valued
            valStr = val.id;
          }
        } else {  // if the property is not a reference property
          if (typeof val === "number" && !Number.isInteger(val)) {
            valStr = JSON.stringify( Math.round( val * roundFactor) / roundFactor);
          } else valStr = JSON.stringify( val);
        }
        if (val !== undefined) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
  }
  // assign instance-level methods
  Object.keys( methods).forEach( function (m) {
    constr.prototype[m] = methods[m];
  });
  // store class/constructor as value associated with its name in a map
  cLASS[classSlots.Name] = constr;
  // initialize the class-level instances property
   if (!classSlots.isAbstract) {
     cLASS[classSlots.Name].instances = {};
   }
  // return the class/constructor as the object constructed with new
  return constr;
}
 /**
  * Determine if a type is an integer type.
  * @method
  * @author Gerd Wagner
  * @param {string|eNUMERATION} T  The type to be checked.
  * @return {boolean}
  */
cLASS.isIntegerType = function (T) {
  return typeof(T)==="string" && T.includes('Integer') ||
      T instanceof eNUMERATION;
};
 /**
  * Determine if a type is a decimal type.
  * @method
  * @author Gerd Wagner
  * @param {string} T  The type to be checked.
  * @return {boolean}
  */
 cLASS.isDecimalType = function (T) {
   return typeof(T)==="string" &&
       (T.includes("Decimal") || T.includes("UnitInterval"));
 };
 /**
  * Constants
  */
 cLASS.patterns = {
   // defined in WHATWG HTML5 specification
   EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   // proposed by Diego Perini (https://gist.github.com/729294)
   URL: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
   INT_PHONE_NO: /^\+(?:[0-9] ?){6,14}[0-9]$/
 };
 /**
  * Generic method for checking the integrity constraints defined in property declarations.
  * The values to be checked are first parsed/deserialized if provided as strings.
  * Copied from the cOMPLEXtYPE class of oNTOjs
  *
  * min/max: numeric (or string length) minimum/maximum
  * optional: true if property is single-valued and optional (false by default)
  * range: String|NonEmptyString|Integer|...
  * pattern: a regular expression to be matched
  * minCard/maxCard: minimum/maximum cardinality of a multi-valued property
  *     By default, maxCard is 1, implying that the property is single-valued, in which
  *     case minCard is meaningless/ignored. maxCard may be Infinity.
  *
  * @method
  * @author Gerd Wagner
  * @param {string} fld  The property for which a value is to be checked.
  * @param {object} decl  The property's declaration.
  * @param {string|number|boolean|object} val  The value to be checked.
  * @return {ConstraintViolation}  The constraint violation object.
  */
 cLASS.check = function (fld, decl, val, optParams) {
   var constrVio=null, valuesToCheck=[],
       msg = decl.patternMessage || "",
       minCard = decl.minCard || 0,  // by default, a multi-valued property is optional
       maxCard = decl.maxCard || 1,  // by default, a property is single-valued
       min = decl.min || 0, max = decl.max,
       range = decl.range,
       pattern = decl.pattern;
   // check Mandatory Value Constraint
   if (val === undefined || val === "") {
     if (decl.optional) return new NoConstraintViolation();
     else {
       return new MandatoryValueConstraintViolation(
           "A value for "+ fld +" is required!");
     }
   }
   if (maxCard === 1) {  // single-valued property
     valuesToCheck = [val];
   } else {  // multi-valued property
     // can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof( val) === "string") {
       valuesToCheck = val.split(",").map(function (el) {
         return el.trim();
       });
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays!");
     }
   }
   // convert integer strings to integers
   if (cLASS.isIntegerType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseInt( v);
     });
   }
   // convert decimal strings to decimal numbers
   if (cLASS.isDecimalType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseFloat( v);
     });
   }
   /*********************************************************************
    ***  Convert value strings to values and check range constraints ****
    ********************************************************************/
   switch (range) {
     case "String":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be strings!");
         }
       });
       break;
     case "NonEmptyString":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be non-empty strings!");
         }
       });
       break;
     case "Email":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.EMAIL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid email addresses!");
         }
       });
       break;
     case "URL":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.URL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid URLs!");
         }
       });
       break;
     case "PhoneNumber":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.INT_PHONE_NO.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid international phone numbers!");
         }
       });
       break;
     case "Integer":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be an integer!");
         }
       });
       break;
     case "NonNegativeInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 0) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a non-negative integer!");
         }
       });
       break;
     case "PositiveInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       });
       break;
     case "Number":
     case "Decimal":
     case "Percent":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         }
       });
       break;
     case "ClosedUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<0 || v>1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in [0,1]!");
         }
       });
       break;
     case "OpenUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<=0 || v>=1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in (0,1)!");
         }
       });
       break;
     case "Boolean":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string") {
           if (["true","yes"].includes(v)) valuesToCheck[i] = true;
           else if (["no","false"].includes(v)) valuesToCheck[i] = false;
           else constrVio = new RangeConstraintViolation("The value of "+ fld +
                 " must be either 'true'/'yes' or 'false'/'no'!");
         } else if (typeof v !== "boolean") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either 'true' or 'false'!");
         }
       });
       break;
     case "Date":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" &&
             (/\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/.test(v) ||
             !isNaN( Date.parse(v)))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date string. "+
               v +" is not admissible!");
         }
       });
       break;
     default:
       if (range instanceof eNUMERATION) {
         valuesToCheck.forEach( function (v) {
           if (!Number.isInteger( v) || v < 1 || v > range.MAX) {
             constrVio = new RangeConstraintViolation("The value "+ v +
                 " is not an admissible enumeration integer for "+ fld);
           }
         });
       } else if (Array.isArray( range)) {
         // *** Ad-hoc enumeration ***
         valuesToCheck.forEach( function (v) {
           if (range.indexOf(v) === -1) {
             constrVio = new RangeConstraintViolation("The "+ fld +" value "+ v +
                 " is not in value list "+ range.toString());
           }
         });
       } else if (!(typeof range === "string" && (cLASS[range] || range.includes("|")))) {
         if (typeof range === "object" && range.dataType !== undefined) {
           // the range is a (collection) datatype declaration record
           valuesToCheck.forEach(function (v) {
             var i = 0;
             if (typeof v !== "object") {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an object! " + JSON.stringify(v) + " is not admissible!");
             }
             switch (range.dataType) {
               case "Array":
                 if (!Array.isArray(v)) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 if (v.length !== range.size) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array of length " + range.size + "! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 for (i = 0; i < range.size; i++) {
                   if (!cLASS.isOfType(v[i], range.itemType)) {
                     constrVio = new RangeConstraintViolation("The items of " + fld +
                         " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                         " is not admissible!");
                   }
                 }
                 break;
             }
           });
         } else if (range === Object) {
           valuesToCheck.forEach(function (v) {
             if (!(v instanceof Object)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be a JS object! " + JSON.stringify(v) + " is not admissible!");
             }
           });
         }
       } else if (optParams && optParams.checkRefInt) {
         // the range is a cLASS or a cLASS disjunction
         valuesToCheck.forEach(function (v, i) {
           var rangeClasses = [];
           if (cLASS[range]) {
             if (v instanceof cLASS[range]) v = valuesToCheck[i] = v.id;  // convert to IdRef
             else if (typeof v === "string") v = valuesToCheck[i] = parseInt(v);
             // assuming that the ID reference represents an integer (ID)
             if (!Number.isInteger(v)) {
               constrVio = new RangeConstraintViolation("The value (" + val + ") of property '" +
                   fld + "' is not an integer!");
             }
             if (!cLASS[range].instances[String(v)]) {
               constrVio = new ReferentialIntegrityConstraintViolation("The value " + v + " of property '" +
                   fld + "' is not an ID of any " + range + " object!");
             }
           } else {  // a cLASS disjunction
             rangeClasses = range.split("|");
             // check referential integrity: val must be in some range class
             if (!rangeClasses.some(function (rc) {
                   return cLASS[rc].instances[String(v)];
                 })) {
               constrVio = ReferentialIntegrityConstraintViolation("The value " + val + " does not reference any of " +
                   range + "!");
             }
           }
         });
       }
   }
   // return constraint violation found in range switch
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check constraints that apply to several ranges  ***
    ********************************************************/
   if (range === "String" || range === "NonEmptyString") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v.length < min) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be smaller than "+ min);
       } else if (max !== undefined && v.length > max) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be greater than "+ max);
       } else if (pattern !== undefined && !pattern.test( v)) {
         constrVio = new PatternConstraintViolation( msg || v +
             "does not comply with the pattern defined for "+ fld);
       }
     });
   }
   if (range === "Integer" || range === "NonNegativeInteger" ||
       range === "PositiveInteger") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v < min) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be greater than "+ min);
       } else if (max !== undefined && v > max) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be smaller than "+ max);
       }
     });
   }
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check cardinality constraints  *********************
    ********************************************************/
   if (maxCard > 1) { // (a multi-valued property can be array-valued or map-valued)
     // check minimum cardinality constraint
     if (minCard > 0 && valuesToCheck.length < minCard) {
       return new CardinalityConstraintViolation("A collection of at least "+
           minCard +" values is required for "+ fld);
     }
     // check maximum cardinality constraint
     if (valuesToCheck.length > maxCard) {
       return new CardinalityConstraintViolation("A collection value for "+
           fld +" must not have more than "+ maxCard +" members!");
     }
   }
   val = maxCard === 1 ? valuesToCheck[0] : valuesToCheck;
   return new NoConstraintViolation( val);
 };
 /**
  * Convert property value to form field value.
  * @method
  * @author Gerd Wagner
  * @param {cLASS} Class  The domain of the property.
  * @param {string} prop  The property name.
  * @param {?} val  The value to be converted.
  * @return {boolean}
  */
 cLASS.convertPropValToStr = function ( Class, prop, val) {
   // make sure the eNUMERATION meta-class object can be checked if available
   var eNUMERATION = typeof eNUMERATION === "undefined" ? undefined : eNUMERATION;
   var range = Class.properties[prop].range;
   if (val === undefined) return "";
   if (eNUMERATION && range instanceof eNUMERATION) return range.labels[val-1];
   if (typeof val === "string") return val;
   if (["number","boolean"].includes( typeof(val))) return String( val);
   if (range === "Date") return util.createIsoDateString( val);
   // show the value of a reference property as an ID reference
   if (typeof range === "string" && cLASS[range]) return val["id"];
   // else
   return JSON.stringify( val);
 };
 /**
  * Check if a value is of some type.
  * @method
  * @author Gerd Wagner
  * @return {boolean}
  */
 cLASS.isOfType = function ( v, Type) {
   switch (Type) {
   case "String": return (typeof v === "string");
   case "NonEmptyString": return (typeof v === "string" && v.trim() !== "");
   case "Integer": return Number.isInteger(v);
   case "NonNegativeInteger": return (Number.isInteger(v) && v >= 0);
   case "PositiveInteger": return (Number.isInteger(v) && v > 0);
   case "Decimal": return (typeof v === "number");
   case "ClosedUnitInterval":
     return (typeof v === "number" && v>=0 && v<=1);
   case "OpenUnitInterval":
     return (typeof v === "number" && v>0 && v<1);
   default: return true;
 }
 };
 /**
  * Convert property value to form field value.
  * @method
  * @author Gerd Wagner
  * @param {eNTITYtYPE} ET  The domain of the property.
  * @param {string} prop  The property name.
  * @param {?} val  The value to be converted.
  * @return {boolean}
  */
 cLASS.convertPropValToString = function ( ET, prop, val) {
   var range = ET.properties[prop].range;
   if (val === undefined) return "";
   if (range instanceof eNUMERATION) return range.labels[val-1];
   if (typeof(val) === "string") return val;
   if (["number","boolean"].includes( typeof(val))) return String( val);
   if (range === "Date") return util.createIsoDateString( val);
   if (cLASS[range]) return val[range.standardIdAttr];
   // else
   return JSON.stringify( val);
 };

 /********************************************************
  ***  Collection datatypes  *****************************
  ********************************************************/
/*
 * cLASS datatypes, such as collection types, are defined in the form of
 * cOLLECTIONdATATYPE objects that specify the collection type, the
 * item type and the size of the collection.
 */
 cLASS.cOLLECTIONdATATYPE = function (typeName, itemType, size, optParams) {
   this.type = typeName;
   this.itemType = itemType;
   this.size = size;
   this.optParams = optParams;
 };
 cLASS.Array = function (itemType, size, optParams) {
  /*
  if (constraints) {
    return {dataType:"Array", itemType: itemType, size: size, constraints: constraints};
  } else return {dataType:"Array", itemType: itemType, size: size};
  */
  if (this instanceof cLASS.Array) {
    // called with new, so return an array object
    this.type = "Array";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.array = new Array( size);
  } else {
    // called without new, return an object representing an Array datatype
    return new cLASS.cOLLECTIONdATATYPE("Array",
        {itemType:itemType, size:size, optParams:optParams});
  }
 };
cLASS.ArrayList = function (itemType, constraints) {
   if (constraints) {
     return {dataType:"ArrayList", itemType: itemType, constraints: constraints};
   } else return {dataType:"ArrayList", itemType: itemType};
 };
cLASS.Map = function (itemType, constraints) {
  if (constraints) {
    return {dataType:"Map", itemType: itemType, constraints: constraints};
  } else return {dataType:"Map", itemType: itemType};
};

cLASS.RingBuffer = function (itemType, size, optParams) {
  if (this instanceof cLASS.RingBuffer) {
    // called with new, so return a ring buffer object
    this.type = "RingBuffer";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.first = 0;  // index of first item
    this.last = -1;  // index of last item
    this.buffer = new Array( size);
  } else {
    // called without new, return an object representing a RingBuffer datatype
    return new cLASS.cOLLECTIONdATATYPE("RingBuffer",
        {itemType:itemType, size:size, optParams:optParams});
  }
};
cLASS.RingBuffer.prototype.nmrOfItems = function () {
  if (this.last === -1) return 0;
  else if (this.first <= this.last) return this.last - this.first + 1;
  else return this.last + this.size - this.first + 1;
};
 cLASS.RingBuffer.prototype.add = function (item) {
   if (this.nmrOfItems() < this.size) {
     this.last++;  // still filling the buffer
   } else {  // buffer is full, move both pointers
     this.first = (this.first+1) % this.size;
     this.last = (this.last+1) % this.size;
   }
   this.buffer[this.last] = item;
 };
cLASS.RingBuffer.prototype.toString = function (n) {
  var i=0, str = "[", item, roundingFactor=1,
      N = this.nmrOfItems(),
      outputLen = n ? Math.min( n, N): N;
  if (N === 0) return " ";
  for (i=0; i < outputLen; i++) {
    item = this.buffer[(this.first+i) % this.size];
    // serialize enum values as labels
    if (this.itemType instanceof eNUMERATION) item = this.itemType.labels[item-1];
    else if (cLASS.isDecimalType( this.itemType)) {
      //decimalPlaces:
      roundingFactor = Math.pow( 10, this.decimalPlaces);
      item = Math.round( item * roundingFactor) / roundingFactor;
    }
    str += item;
    if (i < outputLen-1) str += ", ";
  }
  return str + "]";
 };
 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */

var dom = {
  /**
   * Create an element
   *
   * @param {string} elemType
   * @param {object} slots
   * @return {object}
   */
  createElement: function (elemType, slots) {
    var el = document.createElement( elemType);
    if (slots) {
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      if (slots.content) el.innerHTML = slots.content;
    }
    return el;
  },
   /**
    * Create a time element from a Date object
    *
    * @param {object} d
    * @return {object}
    */
   createTime: function (d) {
     var tEl = document.createElement("time");
     tEl.textContent = d.toLocaleDateString();
     tEl.setAttribute("datetime", d.toISOString());
     return tEl;
   },
   /**
    * Create an img element
    * 
    * @param {string} id
    * @param {string} classValues
    * @param {object} content
    * @return {object}
    */
    createImg: function (slots) {
      var el = document.createElement("img");
      el.src = slots.src;
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      return el;
    },
  /**
   * Create an option element
   * 
   * @param {object} content
   * @return {object}
   */
  createOption: function (slots) {
    var el = document.createElement("option");
    if (slots.text) el.textContent = slots.text;
    if (slots.value) el.value = slots.value;
    return el;
  },
  /**
   * Create a button element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {object} content
   * @return {object}
   */
  createButton: function (slots) {
    var el = document.createElement("button");
    el.type = "button";
    if (slots.id) el.id = slots.id;
    if (slots.name) el.name = slots.name;
    if (slots.classValues) el.className = slots.classValues;
    if (slots.handler) el.addEventListener( 'click', slots.handler);
    if (slots.content) el.innerHTML = slots.content;
    else el.textContent = slots.label || slots.name;
    return el;
  },
  /**
   * Create a labeled output field
   * 
   * @param {{labelText: string, name: string?, value: string?}}
   *        slots  The view definition slots.
   * @return {object}
   */
  createLabeledOutputField: function (slots) {
    var outpEl = document.createElement("output"),
        lblEl = document.createElement("label");
    if (slots.name) outpEl.name = slots.name;
    if (slots.value !== undefined) outpEl.value = slots.value;
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( outpEl);
    return lblEl;
  },
  /**
   * Create a labeled input field
   *
   * @param {{labelText: string, name: string?, type: string?,
   *          value: string?, disabled: string?}}
   *        slots  The view definition slots.
   * @return {object}
   */
  createLabeledInputField: function (slots) {
    var inpEl = document.createElement("input"),
        lblEl = document.createElement("label");
    if (slots.name) inpEl.name = slots.name;
    if (slots.type) inpEl.type = slots.type;
    if (slots.value !== undefined) inpEl.value = slots.value;
    if (slots.disabled) inpEl.disabled = "disabled";
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( inpEl);
    return lblEl;
  },
  /**
  * Create a radio button or checkbox element
  *
  * @param {{labelText: string, name: string?, type: string?,
  *          value: string?, disabled: string?}}
  *        slots  The view definition slots.
  * @return {object}
  */
  createLabeledChoiceControl: function (t,n,v,lbl) {
    var ccEl = document.createElement("input"),
        lblEl = document.createElement("label");
    ccEl.type = t;
    ccEl.name = n;
    ccEl.value = v;
    lblEl.appendChild( ccEl);
    lblEl.appendChild( document.createTextNode( lbl));
    return lblEl;
  },
  /**
  * Create a labeled select element
  *
  * @param {{labelText: string, name: string?, index: integer?}}
  *     slots  The view definition slots.
  * @return {object}
  */
  createLabeledSelectField: function (slots) {
    var selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        containerEl = document.createElement("div");
    if (slots.name) selEl.name = slots.name;
    if (slots.index !== undefined) selEl.index = slots.index;
    lblEl.textContent = slots.labelText;
    if (slots.classValues) containerEl.className = slots.classValues;
    lblEl.appendChild( selEl);
    containerEl.appendChild( lblEl);
    return containerEl;
  },
  /**
  * Create option elements from a map of option values (as keys)
  * to option strings and insert them into a selection list element
  *
  * @param {object} selEl  A select(ion list) element
  * @param {object} optTxts  An array of option text items
  */
  fillSelectWithOptions: function (selEl, optTxts) {
    selEl.innerHTML = "";
    selEl.add( dom.createOption({text:" --- ", value:""}), null);
    optTxts.forEach( function (txt,i) {
      selEl.add( dom.createOption({text: txt, value: i}), null);
    });
  }
};
 /**
  * Insert a new node/element after another one
  *
  * @return {object}  tbody element object
  */
dom.insertAfter = function (newNode, referenceNode) {
   referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling);
};

/**
 * @fileOverview  This file contains the definition of the class ObjectView.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Class for creating UI/view models based on "model objects". A UI/view model
 * consists of fields (typically based on model properties) and user action
 * types, defined as named JS methods (with a self-explaining name) that can
 * be used as event handlers for UI events.
 *
 * A view model may have a field order definition and field group definitions
 * in the constructor parameter "fields", which is processed into a "fields" map
 * of field definition records and a field order definition list "fieldOrder".
 * The constructor parameter "fields" may contain additional fields not based
 * on model object properties. When a view model is created without a "fields"
 * argument, the view fields are generated from the labeled properties of the
 * underlying model object.
 *
 * Each model object o (such as "sim") may have a pre-defined view (like
 * "simView"), which is stored as the map entry oes.ui[o.objName+"View"].
 *
 * A view (or 'view model') is a logical representation of the interaction
 * elements of a UI, which typically correspond to properties and methods
 * of a model object. A view consists of (input/output) fields and of user
 * action types, such as "run", "saveSimulationState", etc.
 *
 * A view field has an I/O mode of either "I/O" (input/output) or "O".
 * When a view is rendered, view fields are rendered as UI elements in the
 * following way:
 *
 * 1) ordinary fields as form fields (HTML input/output elements),
 * 2) Boolean fields as HTML checkbox-typed input elements,
 * 3) enumeration and reference fields as choice widgets (radio button groups or
 *    checkbox groups, HTML select elements or other selection list widgets)
 *
 * or as any HTML element that allows for text content, or as special UI widgets
 * (such as calendar date selection widgets or color pickers). User action
 * types are exposed in the form of HTML buttons or other actionable (e.g.
 * clickable) HTML elements.
 *
 * The DOM structure of a UI, and the values of its view-field-based elements,
 * are rendered by the view.render method at simulation startup time, while its
 * field values are subsequently synchronized with the help of a 2-way databinding
 * mechanism:
 * 1) Bottom-up: value changes of model object properties are directly propagated
 *    to corresponding UI fields; also value changes of view fields are propagated
 *    to corresponding UI fields.
 * 2) Top-down: value changes of UI fields are propagated to corresponding model
 *    object properties or view fields.
 *
 * A user action type is a named JS function where the name indicates the
 * intended meaning of the user action (such as "saveSimulationState"). It
 * binds a UI event type, such as clicking on a button, to a view method as
 * its "event handler".

 * TODO: When a view field is bound to a model object property, the value of
 * the corresponding form field is updated whenever the corresponding property
 * value of the model object is updated.
 *
 * View methods may be bound as handlers to an event type in a view.
 *
 * A view can be rendered in different ways:
 * 1) By creating all required DOM elements (form elements with controls), and
 *    appending them to the child elements of the body element, if the document
 *    does not contain suitable form elements.
 * 2) By accessing existing form elements and controls, just setting/updating their
 *    contents (and dynamic parts)
 *
 * Notice that slots.fields is an array of property names or view field declarations
 * while this.fields is a map of view field declarations.
 *
 * @constructor
 * @this {oBJECTvIEW}
 * @param {{modelObject: Object, fields: Array, methods: Map?}}
 *        slots  The view definition slots.
 *
 * Example invocation:
 
  var dataBinding = new oBJECTvIEW({
      modelObject: sim.scenario,
	  // create a horizontal field group
      fields: [["simulationEndTime", "stepDuration", "visualize", "createLog"]],
      userActions: {
        "run": function () {...}
	  }
  })	  
 
 */
/* globals oBJECTvIEW */
var oBJECTvIEW = function (slots) {
  var properties={}; 
  
  if (!(slots.modelObject && (slots.modelObject instanceof Object))) {
    throw "Creating an object view requires a model object!";
  }
  this.modelObject = slots.modelObject;
  this.heading = slots.heading;
  properties = this.modelObject.properties;
  // Process the "slots.fields" array (or the properties map) into a "fields" map
  // of view field declarations and a field order definition array "fieldOrder"
  this.fields = {};
  this.fieldOrder = [];
  if (slots.suppressNoValueFields === undefined) this.suppressNoValueFields = true;
  else this.suppressNoValueFields = slots.suppressNoValueFields;
  if (slots.fields) {
    slots.fields.forEach( function (el) {
      var j=0, fld,
          fldGrp=[],
          fldOrdEl=[];
      // turn single field into singleton field group
      if (!Array.isArray( el)) fldGrp = [el];
      else fldGrp = el;        // field group
      for (j=0; j < fldGrp.length; j++) {
        fld = fldGrp[j];
        if (typeof(fld) === "string") {  // property field
          if (!properties[fld]) {
            throw new ViewConstraintViolation(
                "Property view field "+ fld +"does not correspond to a model property!");
          }
          if (this.suppressNoValueFields && this.modelObject[fld] === undefined) continue;
          // else
          this.fields[fld] = {
            label: properties[fld].label,
            hint: properties[fld].hint,
            range: properties[fld].range,
            inputOutputMode:"I/O"
          };
          fldOrdEl.push( fld);
        } else if (typeof(fld) === "object") {  // defined field
          this.fields[fld.name] = {
            label: fld.label,
            range: fld.range,
            inputOutputMode: fld.inputOutputMode
          };
          fldOrdEl.push( fld.name);
          if (fldGrp.derivationFunction) {
            this.fields[fld.name].derivationFunction = fld.derivationFunction;
          }
          if (fld.optional) this.fields[fld.name].optional = true;
        } else {  // neither property field nor defined field
          throw new ViewConstraintViolation(
              "Neither property field nor defined field: "+ fld);
        }
      }
      if (fldGrp.length === 1) this.fieldOrder.push( fldOrdEl[0]);
      else this.fieldOrder.push( fldOrdEl);
    }, this);
  } else {  // no view fields provided in construction slots
    // create view fields from labeled model properties
    Object.keys( properties).forEach( function (prop) {
      if (properties[prop].label &&
          (!this.suppressNoValueFields ||
           this.modelObject[prop] !== undefined ||
           properties[prop].dependsOn  !== undefined)) {
        this.fieldOrder.push( prop);
        this.fields[prop] = properties[prop];
        this.fields[prop]["inputOutputMode"] = "I/O";
      }
    }, this);
  }
  this.maxNmrOfEnumLitForChoiceButtonRendering =
      slots.maxNmrOfEnumLitForChoiceButtonRendering || 7;
  this.methods = slots.methods || {};
  this.userActions = slots.userActions || {};
  //this.fieldGroupSeparator = slots.fieldGroupSeparator || ", ";
  /**
   * Generic setter for view fields
   * this = view object
   * @method
   * @author Gerd Wagner
   * TODO: what about derived view fields?
   */
  this.methods.set = function (f,v) {
    var el=null, elems=null, i=0,
        mo = this.modelObject,
        properties = mo.properties,
        fldGrpSep = this.fieldGroupSeparator,
        range = properties[f].range,
        uiEl = this.dataBinding[this.viewMode][f];
    if (v === undefined) {
      if (properties[f] && properties[f].maxCard) v = [];
      else v = "";
      this[f] = v;
      return;
    }
    // assign view field
    if (Array.isArray(v)) this[f] = v.clone();
    else this[f] = v;
    // bottom-up data-binding: assign UI/form field
    if (uiEl.tagName === "INPUT" || uiEl.tagName === "OUTPUT") {
      if (!Array.isArray(v)) {
        uiEl.value = cLASS.convertPropValToString( mc, f, v);
      } else {
        v.forEach( function (el,i) {
          var ds = cLASS.convertPropValToString( mc, f, el);
          if (i===0) uiEl.value = ds;
          else uiEl.value += fldGrpSep + ds;
        });
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("radio-button-group")) {
      elems = uiEl.querySelectorAll("input[type='radio']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (el.value === String(v)) el.checked = true;
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("checkbox-group")) {
      elems = uiEl.querySelectorAll("input[type='checkbox']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (v.indexOf( parseInt( el.value)) > -1) el.checked = true;
        else el.checked = false;
      }
    } else if (uiEl.tagName === "SELECT" && uiEl.multiple !== "multiple") {
      uiEl.selectedIndex = v;
    } else {
      uiEl.setAttribute("data-value", v);
    }
  };
};
/**
 * Render the HTML form DOM of a model object's view model
 * this = view model object
 * @author Gerd Wagner
 * @method
 * @return {object} dataBinding
 */
oBJECTvIEW.prototype.render = function (parentEl) {
  var mo = this.modelObject,
      fields = this.fields,  // fields map
      fieldOrder = this.fieldOrder,  // field order array
      // a map for storing the bindings of UI elems to view fields
      dataBinding = {},
      userActions = this.userActions,
      validateOnInput = true,
      fldGrpSep = this.fieldGroupSeparator,
      maxELforButton = 7,
      uiContainerEl=null, footerEl=null, i=0;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, decl, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, decl, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, decl, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) mo[fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    fldEl.value = mo[fld] || "";
    fldEl.size = 7;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        mo[fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = mo[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // UI element to model property data binding (top-down)
        var btnEl = e.target, i=0,
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== mo[fld]) {
            mo[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            mo[fld] = undefined;
          }
        } else {  // checkbox
          i = mo[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            mo[fld].splice(i, 1);
          } else {  // add to value list
            mo[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptions( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          mo[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) mo[fld]++;
        } else if (fields[fld].range === "Date") {
          mo[fld] = new Date( selEl.value);
        } else {
          mo[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var range = fields[fld].range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= maxELforButton ||
            isArr && range.length <= maxELforButton) {
          containerEl = createChoiceButtonGroup( fld);
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fields[fld].dependsOn) {
        if (mo[fields[fld].dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fields[fld].dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      containerEl.appendChild( dom.createButton({
        name: usrAct,
        label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
        handler: userActions[usrAct]
      }));
      parentEl.appendChild( containerEl);
    });
  }
  /* ==================================================================== */
  /* MAIN CODE of render                                                  */
  /* ==================================================================== */

  uiContainerEl = dom.createElement(
      !parentEl ? "form":"div", {id: mo.objectName});
  if (this.heading) {
    uiContainerEl.appendChild( dom.createElement("h2", {content:this.heading}));
  }
  // store the object view's DOM element
  this.domElem = uiContainerEl;
  if (!parentEl) parentEl = document.querySelector("#uiContainerEl");
  if (!parentEl) {
    parentEl = document.body;
    footerEl = document.querySelector("html>body>footer");
    if (footerEl) {
      document.body.insertBefore( uiContainerEl, footerEl);
    } else {
      document.body.appendChild( uiContainerEl);
    }
  } else parentEl.appendChild( uiContainerEl);
  if (uiContainerEl.tagName === "FORM") {  // reset custom validity
    for (i=0; i < uiContainerEl.elements.length; i++) {
      uiContainerEl.elements[i].setCustomValidity("");
    }
    uiContainerEl.reset();
  }
  // create DOM elements for all UI/view fields
  createUiElemsForVmFields();
  // create DOM elements (like buttons) for all user actions of the UI/view model
  createUiElemsForUserActions( uiContainerEl);
  return dataBinding;  // a map of field names to corresponding DOM elements 
};
/**
 * Set up a tabular UI for defining the objects/population of a given cLASS
 * @author Gerd Wagner
 * @method
 * @return {object} classPopulationUI
 */
oBJECTvIEW.createClassPopulationWidget = function (Class, editableProperties) {
  var popTableEl = dom.createElement("table", {
    id: Class.Name + "-PopTable",
    classValues: "PopTable"
  });
  var headerRowEl=null, cell=null,
      tBody = document.createElement("tBody");
  var rowObjects=[], columnProperties=[];  // for mapping table cells to object slots
  if (editableProperties) columnProperties = editableProperties;
  else {
    Object.keys( Class.properties).forEach( function (p) {
      if (p !== "id" && p !== "name") columnProperties.push( p);
    });
  }
  popTableEl.appendChild( tBody);
  // store properties displayed in table  TODO: currently not used...
  popTableEl.setAttribute("data-properties", columnProperties.join(" "));
  // create table heading
  popTableEl.appendChild( document.createElement("thead"));
  headerRowEl = popTableEl.tHead.insertRow();
  cell = headerRowEl.insertCell();
  cell.textContent = Class.Name;
  cell.colSpan = Object.keys( Class.properties).length + 1;
  // create fixed "ID/Name" column heading
  headerRowEl = popTableEl.tHead.insertRow();
  headerRowEl.insertCell().textContent = "ID/Name";
  // create column headings for other columns
  Object.keys( Class.properties).forEach( function (p) {
    var c=null;
    if (columnProperties.includes( p)) {
      c = headerRowEl.insertCell();
      c.textContent = Class.properties[p].label || p;
    };
  });
  // create rows for all objects
  Object.keys( Class.instances).forEach( function (objIdStr,i) {
    var obj = Class.instances[objIdStr],
        rowEl = tBody.insertRow();
    // create object row
    rowObjects[i] = obj;
    // create property value cells for own properties TODO: support inherited properties
    rowEl.insertCell().textContent = obj.name ? obj.id +" / "+ obj.name : obj.id;
    Object.keys( Class.properties).forEach( function (p) {
      var c=null;
      if (columnProperties.includes( p)) {
        c = rowEl.insertCell();
        c.textContent = cLASS.convertPropValToStr( Class, p, obj[p]);
        // save value for being able to restore it
        c.setAttribute("data-oldVal", c.textContent);
        c.setAttribute("contenteditable","true");
        c.title = "Click to change!";
        c.addEventListener("blur", function (e) {
          var tdEl = e.target,
              val = tdEl.textContent,
              colNo = tdEl.cellIndex - 1, // skip first column (name/ID)
              rowNo = tdEl.parentElement.rowIndex - 2,  // rowIndex includes 2 tHead rows
              prop = columnProperties[colNo],
              constrVio = cLASS.check( prop, Class.properties[prop], val);
          if (constrVio.message) {
            alert( constrVio.message);
            tdEl.textContent = tdEl.getAttribute("data-oldVal");
          } else {
            val = constrVio.checkedValue;
            // update corresponding object slot
            rowObjects[rowNo][prop] = val;
            tdEl.setAttribute("data-oldVal", tdEl.textContent);
          }
        });
      };
    });
  });
  // create an AddRow button
  //oBJECTvIEW.createUiElemsForUserActions( popTableEl, this.userActions);
  return popTableEl;
};
/**
 * Create UI elements (like buttons) for all user actions of the view
 * depends on: fieldOrder
 * @method
 */
oBJECTvIEW.createUiElemsForUserActions = function (userActions) {
  var containerEl = dom.createElement("div", {
    classValues:"action-group"
  });
  Object.keys( userActions).forEach( function (usrAct) {
    containerEl.appendChild( dom.createButton({
      name: usrAct,
      label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
      handler: userActions[usrAct]
    }));
  });
  return containerEl;
};
/**
 * Render an HTML form based on a view model (an abstract UI definition)
 * @author Gerd Wagner
 * @method
 */
oBJECTvIEW.createUiFromViewModel = function (viewModel) {
  var outFields = viewModel.outputFields,  // map of field definitions
      inFields = viewModel.inputFields,  // map of field definitions
      fields = {},
      // list of field names or field name lists
      fieldOrder = viewModel.fieldOrder ||
          Object.keys( outFields).concat( Object.keys( inFields)),
      fieldValues = viewModel.fieldValues,
      userActions = viewModel.userActions,
      // a map for storing the bindings of DOM form elems to UI fields
      dataBinding = {},
      validateOnInput = viewModel.validateOnInput || true,
      fldGrpSep = viewModel.fieldGroupSeparator,
      uiContainerEl=null;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        fDecl = fields[fld];   // field declaration
    if (fDecl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) fieldValues[fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    if (typeof fDecl.fieldValue === "function") {
      fldEl.value = fDecl.fieldValue();
    } else fldEl.value = fDecl.fieldValue || "";
    fldEl.size = 7;
    if (fDecl.hint) lblEl.title = fDecl.hint;
    lblEl.textContent = fDecl.label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        fieldValues[fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = fieldValues[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // UI element to model property data binding (top-down)
        var btnEl = e.target, i=0,
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== fieldValues[fld]) {
            fieldValues[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            fieldValues[fld] = undefined;
          }
        } else {  // checkbox
          i = fieldValues[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            fieldValues[fld].splice(i, 1);
          } else {  // add to value list
            fieldValues[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptions( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          fieldValues[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) fieldValues[fld]++;
        } else if (fields[fld].range === "Date") {
          fieldValues[fld] = new Date( selEl.value);
        } else {
          fieldValues[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var range = fields[fld].range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= oBJECTvIEW.maxCardButtonGroup ||
            isArr && range.length <= oBJECTvIEW.maxCardButtonGroup) {
          containerEl.appendChild( createChoiceButtonGroup( fld));
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fields[fld].dependsOn) {
        if (fieldValues[fields[fld].dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fields[fld].dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      containerEl.appendChild( dom.createButton({
        name: usrAct,
        label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
        handler: userActions[usrAct]
      }));
      parentEl.appendChild( containerEl);
    });
  }
  /* ====================================================================
     M A I N
     ==================================================================== */
  if (!fieldValues) fieldValues = viewModel.fieldValues = {};
  Object.keys( outFields).forEach( function (fld) {
    outFields[fld].inputOutputMode = "O";
  });
  fields = util.mergeObjects( outFields, inFields);
  uiContainerEl = dom.createElement("form");
  if (viewModel.formID) uiContainerEl.id = viewModel.formID;
  if (viewModel.title) {
    uiContainerEl.appendChild( dom.createElement("h1", {content:viewModel.title}));
  }
  // store the view model's DOM element
  viewModel.domElem = uiContainerEl;
  /*
  if (uiContainerEl.tagName === "FORM") {  // reset custom validity
    for (i=0; i < uiContainerEl.elements.length; i++) {
      uiContainerEl.elements[i].setCustomValidity("");
    }
    uiContainerEl.reset();
  }
  */
  // create DOM elements for all UI/view fields
  createUiElemsForVmFields();
  // create DOM elements (like buttons) for all user actions of the UI/view model
  createUiElemsForUserActions( uiContainerEl);
  // store the view model's data binding (map field names to corresponding DOM elements)
  viewModel.dataBinding = dataBinding;
  return uiContainerEl;
};
oBJECTvIEW.maxCardButtonGroup = 7;


 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */

 /**
  * Create an expandable UI panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createExpandablePanel = function (slots) {
   var uiPanelEl = dom.createElement("div", slots);
   var mainContentEl = dom.createElement("div", {classValues:"mainContent"});
   var expandButtonEl = dom.createElement("button", {content:"+"});
   uiPanelEl.classList.add("expandablePanel");
   uiPanelEl.appendChild( dom.createElement("h2", {
     content:"<span>"+ slots.heading +"</span>"
   }));
   uiPanelEl.appendChild( mainContentEl);
   uiPanelEl.firstChild.insertBefore( expandButtonEl, uiPanelEl.firstChild.firstChild);
   expandButtonEl.addEventListener("click", function (e) {
     // toggle display of main content
     if (mainContentEl.style.display !== "none") {
       mainContentEl.style.display = "none";
       e.target.textContent = "+";
     }
     else {
       mainContentEl.style.display = "block";
       e.target.textContent = "−";
     }
     e.preventDefault();
   });
   uiPanelEl.style.overflowX = "auto";  // horizontal scrolling
   mainContentEl.style.display = "none";
   return uiPanelEl;
 };
 /**
  * Create a Modal Window/Panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createModal = function (slots) {
   var modalEl = dom.createElement("div", {classValues:"modal"}),
       overlayEl = dom.createElement("div", {id:"overlay"}),
       el=null, h1El=null;
   if (slots.id) modalEl.id = slots.id;
   modalEl.classList.add("modal");
   if (slots.classValues) modalEl.className += " "+ slots.classValues;
   if (!slots.title) slots.title = "No Title?";
   h1El = dom.createElement("h1", {content: "<span class='title'>"+ slots.title +"</span>"});
     //  "</span><span class='closeButton'>&times;</span>"});
   if (!slots.classValues.includes("action-required")) {
     el = dom.createElement("span", {classValues:"closeButton", content:"&times;"});
     el.addEventListener("click", function () {
       overlayEl.style.display = "none";
     });
     h1El.appendChild( el);
   }
   modalEl.appendChild( h1El);
   if (slots.fromElem) {
     modalEl.appendChild( slots.fromElem);
     slots.fromElem.classList.add("modal-body");
   } else {
     el = dom.createElement("div", {classValues:"modal-body"});
     if (slots.textContent) el.textContent = slots.textContent;
     modalEl.appendChild( el);
   }
   overlayEl.appendChild( modalEl);
   document.body.appendChild( overlayEl);
   return overlayEl;
 };
 /**
  * Create a Draggable Modal Window/Panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createDraggableModal = function (slots) {
   var overlayEl = dom.createModal( slots),
       modalEl = overlayEl.querySelector(".modal");
   // make the element draggable
   modalEl.draggable = true;
   if (!modalEl.id) modalEl.id = "dragMod";
   modalEl.addEventListener("dragstart", dom.handleDragStart);
   overlayEl.addEventListener("dragover", dom.handleDragOver);
   overlayEl.addEventListener("drop", dom.handleDrop);
   return overlayEl;
 };
 dom.handleDragStart = function (evt) {
   evt.dataTransfer.dropEffect = 'move';
   evt.dataTransfer.setData("text/plain", evt.target.id);
 };
 dom.handleDragOver = function (evt) {
   // allow dropping by preventing the default behavior
   evt.preventDefault();
 };
 dom.handleDrop = function (evt) {
   var elId = evt.dataTransfer.getData("text/plain"),
       el = document.getElementById( elId),
       x = evt.clientX, y = evt.clientY;
   evt.preventDefault();
   el.style.position = "absolute";
   el.style.left = x +"px";
   el.style.top = y +"px";
 };

/**
* SVG library
* @author Gerd Wagner
*/
var svg = {
  NS: "http://www.w3.org/2000/svg",  // namespace
  XLINK_NS: "http://www.w3.org/1999/xlink",
  /**
  * Create an SVG element
  * 
  * @param {object} params  a lsit of optional parameters
  * @return {node} svgElement
  */
  createSVG: function (params) {
    var el = document.createElementNS( svg.NS,"svg");
    el.setAttribute("version", "1.1");
    if (params.id) el.id = params.id;
    if (params.class) el.class = params.class;
    if (params.width) el.setAttribute("width", params.width);
    if (params.height) el.setAttribute("height", params.height);
    if (params.viewBox) el.setAttribute("viewBox", params.viewBox);
    return el;
  },
  createDefs: function () {
    return document.createElementNS( svg.NS,"defs");
  },
  setOptionalAttr: function (el, optParams) {
    if (optParams === undefined) optParams = {};
    if (optParams.id) el.id = optParams.id;
    if (optParams.class) el.class = optParams.class;
    el.setAttribute("stroke", optParams.stroke || "black");
    el.setAttribute("stroke-width", optParams.strokeWidth || "1");
    el.setAttribute("fill", optParams.fill || "white");
  },
  /**
  * Create a rect element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {object} optParams 
  *
  * @return (object)
  */
  createRect: function (x, y, width, height, optParams) {
    var el = document.createElementNS( svg.NS,"rect");
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a circle element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {string} color 
  *
  * @return (object)
  */
  createCircle: function ( cx, cy, r, optParams) {
    var el = document.createElementNS( svg.NS,"circle");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a line element 
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {string} color  the stroke color
   * @param {number} width 
   * @return {object}
   */
  createLine: function (x1, y1, x2, y2, optParams) {
    var el = document.createElementNS( svg.NS,"line");
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", x2);
    el.setAttribute("y2", y2);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a path element
   * 
   * @param {number} d  the path description
   * @param {string} color  the stroke color
   * @param {number} width  the stroke width
   * @return {object}
   */
  createPath: function (d, optParams) {
    var el = document.createElementNS( svg.NS,"path");
    el.setAttribute("d", d);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a group element
  * 
  * @return gNode
  */
  createGroup: function (optParams) {
    var el = document.createElementNS( svg.NS,"g");
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Function created for the node Text
  * @param {number} x start position
  * @param {number} y start position
  * @param {string} name the content of the node
  * @param {number} fontSize of the content
  * @param {string} color of the content
  * 
  * @return text object
  */
  createText: function ( x, y, txt, style) {
    var el = document.createElementNS( svg.NS,"text");
    el.textContent = txt;
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    if (style) el.style = style;  // el.setAttribute("style", style);
    return el;
  },
  createShape: function (shape, shapeAttributes, style, obj) {
    var el = document.createElementNS( svg.NS, shape);
    Object.keys( shapeAttributes).forEach( function (attrName) {
      var val;
      if (typeof shapeAttributes[attrName] === "function") {
        val = shapeAttributes[attrName](obj);
      } else val = shapeAttributes[attrName];
      el.setAttribute( attrName, val);
    })
    if (style) el.setAttribute("style", style);
    return el;
  },
  createShapeFromDefRec: function (shDefRec, obj) {
    var el = document.createElementNS( svg.NS, shDefRec.shapeName),
        shAttribs = shDefRec.shapeAttributes;
    Object.keys( shAttribs).forEach( function (attrName) {
      var val;
      if (typeof shAttribs[attrName] === "function") {
        val = shAttribs[attrName](obj);
      } else val = shAttribs[attrName];
      switch (attrName) {
      case "textContent":
        el.textContent = val;
        break;
      case "file":
        el.setAttributeNS( svg.XLINK_NS, "href", val);
        break;
      default:
        el.setAttribute( attrName, val);
        break;
      }
    })
    if (shDefRec.style) el.setAttribute("style", shDefRec.style);
    return el;
  },
  createImageFillPattern: function (id, file, optParams) {
    var patEl = document.createElementNS( svg.NS,"pattern"),
        imgEl = document.createElementNS( svg.NS,"image");
    if (!optParams) optParams = {};
    imgEl.setAttributeNS( svg.XLINK_NS, "href", file);
    imgEl.setAttribute("width", optParams.width || 20);
    imgEl.setAttribute("height", optParams.height || 20);
    patEl.appendChild( imgEl);
    patEl.id = id;
    patEl.setAttribute("patternUnits", "userSpaceOnUse");
    patEl.setAttribute("width", optParams.width || 20);
    patEl.setAttribute("height", optParams.height || 20);
    if (optParams.x) patEl.setAttribute("x", optParams.x);
    if (optParams.y) patEl.setAttribute("y", optParams.y);
    return patEl;
  }
};


/**
 * @fileOverview  A port of a C implementation of MT19937, providing a collection of classes
 * and methods used to generate random numbers and random variates. From the Random.js library
 * of SimJS.
 *
 * @copyright Copyright © 1997-2002, Makoto Matsumoto and Takuji Nishimura.
 * @license LGPL
 */


/*
 A C-program for MT19937, with initialization improved 2002/1/26.
 Coded by Takuji Nishimura and Makoto Matsumoto.

 Before using, initialize the state by using init_genrand(seed)
 or init_by_array(init_key, key_length).

 Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.

 3. The names of its contributors may not be used to endorse or promote
 products derived from this software without specific prior written
 permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// default non-seeded random stream based on Math.random
var rand = null;

/***
 * The following constructor function definition has been modified
 * Use new Date()).getTime() as seed for getting MT with a randomized seed
 */
var Random = function( seed) {
  if (seed === undefined) {
    this.random = Math.random;  // use the JS built-in RNG
  } else {  // use the Mersenne Twister
    if (!Number.isInteger( seed)) {
      throw new TypeError("Seed value must be an integer");
    }
    /* Period parameters */
    this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df;   /* constant vector a */
    this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
    this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

    this.mt = new Array(this.N); /* the array for the state vector */
    this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

    //this.init_genrand(seed);
    this.init_by_array([seed], 1);
  }
};

/* initializes mt[N] with a seed */
Random.prototype.init_genrand = function(s) {
  this.mt[0] = s >>> 0;
  for (this.mti=1; this.mti<this.N; this.mti++) {
    var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
    this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
        + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
    /* In the previous versions, MSBs of the seed affect   */
    /* only MSBs of the array mt[].                        */
    /* 2002/01/09 modified by Makoto Matsumoto             */
    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
Random.prototype.init_by_array = function(init_key, key_length) {
  var i, j, k;
  this.init_genrand(19650218);
  i=1; j=0;
  k = (this.N>key_length ? this.N : key_length);
  for (; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
        + init_key[j] + j; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++; j++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
    if (j>=key_length) j=0;
  }
  for (k=this.N-1; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
        - i; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
  }

  this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
};

/* generates a random number on [0,0xffffffff]-interval */
Random.prototype.genrand_int32 = function() {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) { /* generate N words at one time */
    var kk;

    if (this.mti == this.N+1)   /* if init_genrand() has not been called, */
      this.init_genrand(5489); /* a default initial seed is used */

    for (kk=0;kk<this.N-this.M;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    for (;kk<this.N-1;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
    this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

    this.mti = 0;
  }

  y = this.mt[this.mti++];

  /* Tempering */
  y ^= (y >>> 11);
  y ^= (y << 7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);

  return y >>> 0;
};

/* generates a random number on [0,0x7fffffff]-interval */
Random.prototype.genrand_int31 = function() {
  return (this.genrand_int32()>>>1);
};

/* generates a random number on [0,1]-real-interval */
Random.prototype.genrand_real1 = function() {
  return this.genrand_int32()*(1.0/4294967295.0);
  /* divided by 2^32-1 */
};

/* generates a random number on [0,1)-real-interval */
Random.prototype.random = function() {
  if (this.pythonCompatibility) {
    if (this.skip) {
      this.genrand_int32();
    }
    this.skip = true;
  }
  return this.genrand_int32()*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on (0,1)-real-interval */
Random.prototype.genrand_real3 = function() {
  return (this.genrand_int32() + 0.5)*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on [0,1) with 53-bit resolution*/
Random.prototype.genrand_res53 = function() {
  var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6;
  return(a*67108864.0+b)*(1.0/9007199254740992.0);
};

/* These real versions are due to Isaku Wada, 2002/01/09 added */


/**************************************************************************/
Random.prototype.LOG4 = Math.log(4.0);
Random.prototype.SG_MAGICCONST = 1.0 + Math.log(4.5);

Random.prototype.exponential = function (lambda) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("exponential() must "     // ARG_CHECK
        + " be called with 'lambda' parameter"); // ARG_CHECK
  }                                                   // ARG_CHECK

  var r = this.random();
  return -Math.log(r) / lambda;
};

Random.prototype.gamma = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("gamma() must be called"  // ARG_CHECK
        + " with alpha and beta parameters"); // ARG_CHECK
  }                                                   // ARG_CHECK

  /* Based on Python 2.6 source code of random.py.
   */

  if (alpha > 1.0) {
    var ainv = Math.sqrt(2.0 * alpha - 1.0);
    var bbb = alpha - this.LOG4;
    var ccc = alpha + ainv;

    while (true) {
      var u1 = this.random();
      if ((u1 < 1e-7) || (u > 0.9999999)) {
        continue;
      }
      var u2 = 1.0 - this.random();
      var v = Math.log(u1 / (1.0 - u1)) / ainv;
      var x = alpha * Math.exp(v);
      var z = u1 * u1 * u2;
      var r = bbb + ccc * v - x;
      if ((r + this.SG_MAGICCONST - 4.5 * z >= 0.0) || (r >= Math.log(z))) {
        return x * beta;
      }
    }
  } else if (alpha == 1.0) {
    var u = this.random();
    while (u <= 1e-7) {
      u = this.random();
    }
    return - Math.log(u) * beta;
  } else {
    while (true) {
      var u = this.random();
      var b = (Math.E + alpha) / Math.E;
      var p = b * u;
      if (p <= 1.0) {
        var x = Math.pow(p, 1.0 / alpha);
      } else {
        var x = - Math.log((b - p) / alpha);
      }
      var u1 = this.random();
      if (p > 1.0) {
        if (u1 <= Math.pow(x, (alpha - 1.0))) {
          break;
        }
      } else if (u1 <= Math.exp(-x)) {
        break;
      }
    }
    return x * beta;
  }

};

Random.prototype.normal = function (mu, sigma) {
  if (arguments.length != 2) {                          // ARG_CHECK
    throw new SyntaxError("normal() must be called"  // ARG_CHECK
        + " with mu and sigma parameters");      // ARG_CHECK
  }                                                    // ARG_CHECK

  var z = this.lastNormal;
  this.lastNormal = NaN;
  if (!z) {
    var a = this.random() * 2 * Math.PI;
    var b = Math.sqrt(-2.0 * Math.log(1.0 - this.random()));
    z = Math.cos(a) * b;
    this.lastNormal = Math.sin(a) * b;
  }
  return mu + z * sigma;
};

Random.prototype.pareto = function (alpha) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("pareto() must be called" // ARG_CHECK
        + " with alpha parameter");             // ARG_CHECK
  }                                                   // ARG_CHECK

  var u = this.random();
  return 1.0 / Math.pow((1 - u), 1.0 / alpha);
};

Random.prototype.triangular = function (lower, upper, mode) {
  // http://en.wikipedia.org/wiki/Triangular_distribution
  if (arguments.length != 3) {                         // ARG_CHECK
    throw new SyntaxError("triangular() must be called" // ARG_CHECK
        + " with lower, upper and mode parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK

  var c = (mode - lower) / (upper - lower);
  var u = this.random();

  if (u <= c) {
    return lower + Math.sqrt(u * (upper - lower) * (mode - lower));
  } else {
    return upper - Math.sqrt((1 - u) * (upper - lower) * (upper - mode));
  }
};

Random.prototype.uniform = function (lower, upper) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("uniform() must be called" // ARG_CHECK
        + " with lower and upper parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK
  return lower + this.random() * (upper - lower);
};
/***
 Added by Gerd Wagner (20160921)
 */
Random.prototype.uniformInt = function (lower, upper) {
  if (arguments.length != 2 ||
      !(Number.isInteger(lower) && Number.isInteger(upper))) {
    throw new SyntaxError("uniformInt() must be called"
        + " with lower and upper integer values");
  }
  return lower + Math.floor( this.random() * (upper - lower + 1));
};

Random.prototype.weibull = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("weibull() must be called" // ARG_CHECK
        + " with alpha and beta parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK
  var u = 1.0 - this.random();
  return alpha * Math.pow(-Math.log(u), 1.0 / beta);
};

/*******************************************************************************
 * This library file contains several OES foundation elements
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/*
 TODO
 - add oes.defaults:
   oes.defaults.license = "CC BY-SA";
 */
var oes = oes || {};
var sim = sim || {};

oes.defaults = {
  license: "CC BY-SA",
  imgFolder: "img/"
};
oes.predfinedProperties = ["shortLabel", "history"];

oes.Object = new cLASS({
  Name: "oBJECT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    "name": {range: "NonEmptyString", optional:true}
  },
  methods: {
    "toLogString": function () {
      var str1="", str2="", i=0;
      if (!this.constructor.shortLabel && !this.shortLabel) return "";
      else {  // show class name + object ID
        str1 = this.shortLabel || this.constructor.shortLabel +"-"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="", listOfActTypeNames=[];
        if (key==="activityState") {
          listOfActTypeNames = Object.keys( val);
          valStr = JSON.stringify( listOfActTypeNames.map( function (atn) {
            var shortLabel = cLASS[atn].shortLabel;
            return shortLabel || atn;
          }));
          propLabel = "actState";
        } else if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            // is the property multi-valued?
            if (propDecl.maxCard && propDecl.maxCard > 1) {
              if (Array.isArray( val)) {
                valStr = JSON.stringify( val.map( function (o) {return o.id;}));
              } else valStr = JSON.stringify( Object.keys( val));
            } else {  // if the property is single-valued
              valStr = val.id;
            }
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                         val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    }
  }
});
oes.Event = new cLASS({
  Name: "eVENT",
  isAbstract: true,
  properties: {
    // for events with duration: occTime = startTime + duration
    "occTime": {range: "NonNegativeNumber"},
    // only meaningful for events with duration
    "startTime": {range: "NonNegativeNumber", optional:true},
    "duration": {range: "NonNegativeNumber", optional:true}
  },
  methods: {
    "toEventString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      return this.toString() +"@"+ occT;
    }
  }
});
/**
 *  Activities are events having some duration and using resources. Their duration
 *  may be either pre-set to a fixed value or to a random value (in which case they
 *  have a scheduled end), or it may be determined by the occurrence of an activity
 *  end event that is caused by another simulation event (in which case they have an
 *  open end). The duration of a pre-set duration activity can be defined in 3 ways:
 *  either for all activities of some type AT by a) a class-level attribute
 *  AT.fixedDuration or b) a class-level method AT.randomDuration(), or
 *  c) by setting the attribute "duration" of its aCTIVITYsTART event.
 *
 *  Activities may consume, and also produce, resources. The actor(s)
 *  that (jointly) perform(s) an activity can be viewed as (a) special resource(s).
 *  At any simulation step there is a (possibly empty) set of ongoing activities.
 *  The objects that participate in an ongoing activity as resources are in a
 *  certain activity state (e.g., "printing", "service-performing"), in which they
 *  are no more available for other activities that try to allocate them as
 *  resources, if their resource role is exclusive/non-shareable.
 *
 *  For any resource of an activity, its utilization by that activity during
 *  a certain time period is measured by the simulator and can be included
 *  in the ex-post statistics.
 *
 *  An activity type is defined as a subtype of the OES class "aCTIVITY" with a
 *  mandatory class-level method "generateId" and a mandatory class-level attribute
 *  "resourceTypes", and an optional class-level method "randomDuration" or,
 *  alternatively, an optional class-level attribute "fixedDuration".
 *
 *  A pre-defined event type oes.ActivityStart is used for creating activity start
 *  events with a constructor parameter "resources" defining a resource roles map
 *  assigning resource object references to resource role names. When an activity
 *  start event occurs, a JS object representing the activity is created, the
 *  resource roles map is copied to corresponding property slots of the activity,
 *  and the value of the activityState property of all resource objects is updated
 *  by adding the activity type name (the activityState is a set/map of the names
 *  of those types of activities, in which the object is participating).
 */
oes.Activity = new cLASS({
  Name: "aCTIVITY",
  supertypeName: "eVENT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    // on activity creation resource roles are copied to corresp. property slots
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {}
});
oes.ActivityStart = new cLASS({
  Name: "aCTIVITYsTART",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "ActivityType"},  //TODO: should allow type names (like IdRefs)
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {
    "toString": function () {
      var str1 = "Start-" + (cLASS[ this.activityType].shortLabel ||
              cLASS[ this.activityType].Name),
          str2 = "";
      Object.keys( this.resources).forEach( function (resRole) {
        var resObj = this.resources[resRole];
        str2 += (resObj.name || String(resObj.id)) +", ";
      }, this);
      return str1 +"("+ str2.slice(0, -2) +")";
    }
  }
});
oes.ActivityEnd = new cLASS({
  Name: "aCTIVITYeND",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "ActivityType"},
    "activityIdRef": {range: "Integer"}
  },
  methods: {
    "toString": function () {
      var str1 = "End-" + (cLASS[ this.activityType].shortLabel ||
              cLASS[ this.activityType].Name),
          str2 = this.activityIdRef;
      return str1 +"-"+ str2;
    }
  }
});
/**
 * Processing nodes are objects that play an actor role in processing activities.
 * The definition of a processing node combines defining both an object (as actor)
 * and an implicit activity type, possibly with duration, resource types and
 * onActivityStart/onActivityEnd event rule methods.
 *
 * A simple processing node has an input queue for work objects and a successor
 * processing node. Work objects may be either of a generic type "wORKoBJECT" or
 * of a model-specific subtype of "wORKoBJECT" (such as "Customer").
 *
 * A processing node object may be defined with a value for its "fixedDuration"
 * property or with a "randomDuration" function, applying to its processing
 * activities. If neither a fixedDuration nor a randomDuration method are defined,
 * the exponential distribution with an event rate of 1 is used as a default
 * function for getting durations. By default, a processing node processes one
 * work object at a time, but it may also have its "capacity" attribute set to
 * a value greater than 1.
 *
 * In the general case, a processing node may have several input object types,
 * and an input queue for each of them, and either a successor processing node or
 * else an (automatically generated) output queue for each type of output object.
 * By default, when no explicit transformation of inputs to outputs is modeled by
 * specifying an outputTypes map, there is no transformation and it holds that
 * outputs = inputs.
 *
 * TODO: Add resourceTypes
 */
oes.ProcessingNode = new cLASS({
  Name: "pROCESSINGnODE",
  supertypeName: "oBJECT",
  properties: {
    "inputQueue": {range: "oBJECT", shortLabel:"inpQ", minCard: 0, maxCard: Infinity},
    "inputType": {range: "ObjectType", optional:true},  // default: "wORKoBJECT"
    "successorNode": {range: "pROCESSINGnODE|eXITnODE", optional:true},
    "fixedDuration": {range: "PositiveInteger", optional:true},
    "capacity": {range: "PositiveInteger", optional:true},
    // Ex: {"lemons": {type:"Lemon", quantity:2}, "ice": {type:"IceCubes", quantity:[0.2,"kg"]},...
    "inputTypes": {range: cLASS.Map( Object), optional:true},
    // Ex: {"lemonade": {type:"Lemonade", quantity:[1,"l"]}, ...
    "outputTypes": {range: cLASS.Map( Object), optional:true},
    // a map with output role names as keys
    "successorNodes": {range: cLASS.Map("pROCESSINGnODE|eXITnODE"), optional:true}
  },
  methods: {}
});
/**
 * Work Objects are generic objects that arrive at an entry node of a PN
 * and are processed at one or more processing nodes before they leave the
 * PN at an exit node.
 */
oes.WorkObject = new cLASS({
  Name: "wORKoBJECT",
  supertypeName: "oBJECT",
  properties: {
    "arrivalTime": { range: "Number", label: "Arrival time",
      shortLabel: "arrT"}
  }
});
/**
 * Processing Activities are activities that have inputs and outputs and are
 * performed by a processing node (as their actor). The input types/roles,
 * output types/roles and duration of a processing activity are defined in its
 * underlying processing node, which is associated via its "actor" property.
 *
 * A processing node object definition may have slots for defining a "fixedDuration"
 * attribute or a "randomDuration" method.
 */
oes.ProcessingActivity = new cLASS({
  Name: "pROCESSINGaCTIVITY",
  shortLabel: "ProcAct",  // for the log
  supertypeName: "aCTIVITY",
  properties: {
    "actor": {range: "pROCESSINGnODE"}
  },
  methods: {}
});
// define the exponential distribution as the default inter-arrival time
oes.ProcessingActivity.defaultEventRate = 1;
oes.ProcessingActivity.defaultDuration = function () {
  return rand.exponential(  oes.ProcessingActivity.defaultEventRate)
};

oes.ProcessingActivityStart = new cLASS({
  Name: "pROCESSINGaCTIVITYsTART",
  supertypeName: "aCTIVITYsTART",
  properties: {
    "actor": {range: "pROCESSINGnODE"}
  },
  methods: {}
});
oes.ProcessingActivityEnd = new cLASS({
  Name: "pROCESSINGaCTIVITYeND",
  supertypeName: "aCTIVITYeND",
  properties: {},
  methods: {}
});
/**
 * Entry nodes are objects that participate in exogenous arrival events
 * leading to the creation of work objects, which are either routed to a
 * successor node or pushed to an output queue. The definition of an entry
 * node combines defining both a (possibly spatial) object and an associated
 * implicit arrival event type, possibly with an "onArrival" event rule method.
 *
 * Entry node object definitions may include (1) a "successorNode" attribute slot
 * for assigning a successor node to which work objects are routed; (2) a
 * "maxNmrOfArrivals" attribute slot for defining a maximum number of arrival
 * events after which no more arrival events will be created (and, consequently,
 * the simulation may run out of future events); (3) either an "arrivalRate"
 * attribute slot for defining the event rate parameter of an exponential pdf
 * used for computing the time between two consecutive arrival events, or a per-
 * instance-defined "arrivalRecurrence" method slot for computing the recurrence
 * of arrival events; (4) a per-instance-defined "outputType" slot for defining
 * a custom output type (instead of the default "wORKoBJECT"). If neither an
 * "arrivalRate" nor an "arrivalRecurrence" method are defined, the exponential
 * distribution with an event rate of 1 is used as a default recurrence.
 *
 * Entry nodes have a built-in (read-only) statistics attribute "nmrOfArrivedObjects"
 * counting the number of objects that have arrived at the given entry node.
 *
 * TODO: If no successor node is defined for an entry node, an output queue is
 * automatically created.
 */
oes.EntryNode = new cLASS({
  Name: "eNTRYnODE",
  supertypeName: "oBJECT",
  properties: {
    "outputType": {range: "ObjectType", optional:true},  // default: "wORKoBJECT"
    "successorNode": {range: "pROCESSINGnODE", optional:true},
    "maxNmrOfArrivals": {range: "PositiveInteger", optional:true},
    "arrivalRate": {range: "Decimal", optional:true},
    "nmrOfArrivedObjects": {range: "NonNegativeInteger", optional:true}
  }
});
/**
 * Exit nodes are objects that participate in departure events leading to the
 * destruction of the departing object. The definition of an exit node combines
 * defining both a (possibly spatial) object and an associated implicit departure
 * event type, possibly with an "onDeparture" event rule method.
 *
 * Exit nodes have two built-in statistics attributes: (1) "nmrOfDepartedObjects"
 * counting the number of objects that have departed at the given exit node, and
 * (2) "cumulativeTimeInSystem" for adding up the times in system of all departed
 * objects.
 */
oes.ExitNode = new cLASS({
  Name: "eXITnODE",
  supertypeName: "oBJECT",
  properties: {
    "nmrOfDepartedObjects": {range: "NonNegativeInteger", optional:true},
    "cumulativeTimeInSystem": {range: "NonNegativeDecimal", optional:true}
  }
});
/**
 * Arrival events are associated with an entry node.
 * They may define a quantity of arrived work objects, which is 1 by default.
 * Viewing an arrival not as an arrival of work objects, but as an arrival of
 * a customer order, the quantity attribute would allow to define an order
 * quantity that results in the same quantity of work objects (or production
 * orders) pushed to the entry node's succeeding processing node.
 */
oes.Arrival = new cLASS({
  Name: "aRRIVAL",
  supertypeName: "eVENT",
  properties: {
    "entryNode": {range: "eNTRYnODE"},
    "quantity": {range: "PositiveInteger", optional:true}
  }
});
// define the exponential distribution as the default inter-arrival time
oes.Arrival.defaultEventRate = 1;
oes.Arrival.defaultRecurrence = function () {
  return rand.exponential( oes.Arrival.defaultEventRate);
};
/**
 * Departure events have two participants: an exit node and the departing object.
 */
oes.Departure = new cLASS({
  Name: "dEPARTURE",
  supertypeName: "eVENT",
  properties: {
    "exitNode": {range: "eXITnODE"},
    "workObject": {range: "wORKoBJECT"}
  }
});

oes.ExperimentType = new cLASS({
  Name: "eXPERIMENTtYPE",
  properties: {
    "id": {range: "PositiveInteger"},
    "name": {range: "NonEmptyString", optional:true},
    "scenarios": {range: "PositiveInteger", minCard:1, maxCard: Infinity },
  },
  methods: {
    "toLogString": function () {
    }
  }
});
/**
 * Define lists of predefined types as reserved names for constraint checks
 */
oes.predefinedObjectTypes = ["oBJECT","wORKoBJECT","pROCESSINGnODE","eNTRYnODE","eXITnODE"];
oes.predefinedEventTypes = ["eVENT","aCTIVITYsTART","aCTIVITYeND","aRRIVAL",
    "pROCESSINGaCTIVITYsTART","pROCESSINGaCTIVITYeND","dEPARTURE"];
oes.predefinedActivityTypes = ["aCTIVITY","pROCESSINGaCTIVITY"];

/******************************************************************************
 *** OES Model Objects scenario/model/statistics/etc. *************************
 ******************************************************************************/

// Define the schema of the model object "scenario"
sim.scenario = {
  objectName: "scenario",
  properties: {
    "simulationEndTime": {range:"Time", label:"End time:", hint:"Simulation end time"},
    "name": {range:"NonEmptyString", optional: true, label:"Name", hint:"Scenario name"},
    "title": {range:"NonEmptyString", optional: true, label:"Title", hint:"Scenario title"},
    "shortDescription": {range:"String", optional: true, label:"Scenario description",
        hint:"Short description of the simulation scenario"},
    "creator": {range:"String", optional: true, label:"Creator",
        hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
        hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
      hint:"Modification date"},
    "stepDuration": {range:"NonNegativeInteger", optional: true, label:"Step duration:"},
    "randomSeed": {range:"PositiveInteger", optional: true, label:"Random seed:"},
    "visualize": {range:"Boolean", optional: true, initialValue: true, label:"Visualization"},
    "createLog": {range:"Boolean", optional: true, label:"Log", hint:"Simulation log"}
    //"logOnly": {range:["Species","Animal"], maxCard:2, dependsOn:"createLog", label:"Restrict log to"},
  }
};
// Define the schema of the model object "sim"
sim.objectName = "sim";
sim.properties = {
  "step": {range:"NonNegativeInteger", label:"Step:", hint:"Simulation step"},
  "time": {range:"Number", label:"Time:", hint:"Simulation time"}
};
sim.space = {overlayGrid: {}};

// Define the schema of the observationUI
sim.scenario.observationUI = {
  objectName: "observationUI",
  canvas: {},
  properties: {
    "spaceView": {range: Object, label: "Space view"},
    "objectViews": {range: Object, label: "Object views"}
  }
};
// define the observationUI.monitor
sim.scenario.observationUI.monitor = {};
// Define the schema of the scenario.observationUI.spaceView
sim.scenario.observationUI.spaceView = {
  objectName: "spaceView",
  properties: {
    "type": {range: "NonEmptyString", label: "Space view type"},
    "gridCellSize": {range: "PositiveInteger", label: "Grid cell size"}
  }
};
// define the visualization record for non-spatial models
sim.scenario.observationUI.vis = {SVG:{}};

// define the objectViews definition map
sim.scenario.observationUI.objectViews = {};
// define the map for runtime objectViews
sim.objectViews = {};

// Define the schema of the model object "model"
sim.model.v = {};  // global variables
sim.model.f = {};  // global functions
oes.defineSimModelSchema = function () {
  sim.model.objectName = "model";
  sim.model.properties = {
    "name": {range:"NonEmptyString", label:"Name"},
    "title": {range:"NonEmptyString", label:"Title", hint:"Model title"},
    "shortDescription": {range:"String", optional: true, label:"Model description",
      hint:"Short description of the simulation model"},
    "systemNarrative": {range:"String", optional: true, label:"System narrative",
        hint:"Narrative of the system under investigation"},
    "license": {range:"String", optional: true, label:"License",
      hint:"Copyright license"},
    "creator": {range:"String", optional: true, label:"Creator",
      hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
      hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
      hint:"Modification date"},
    "time": {range:["discrete","continuous"], optional: true,
      label:"Time model", hint:"Either 'discrete' (default) or 'continuous'"},
    "timeUnit": {range:["ms","s","m","h","D","W","M","Y"], optional: true,
        label:"Time unit", hint:"A time unit like 'ms', 's' or 'm'"},
    "timeIncrement": {range:"Decimal", optional: true, label:"Time increment",
        hint:"By default: 1"},
    "objectTypes": {range: Array, label:"Object types"},
    "eventTypes": {range: Array, label:"Event types"},
    "activityTypes": {range: Array, optional: true, label:"Activity types"}
  };
  // Define the schema of the model object "model.space"
  sim.model.space.objectName = "spaceModel";
  sim.model.space.properties = {
      "type": {range:["1D-Grid","IntegerGrid","ObjectGrid","3D-Grid","1D","2D","3D"], label:"Space type"},
      "geometry": {range:["TOROIDAL","EUCLIDEAN"], optional: true, label:"Space geometry",
        hint:"Either 'TOROIDAL' (default) or 'EUCLIDEAN'"},
      "xMax": {range:"NonNegativeInteger", label:"Width", hint:"Maximum x value"},
      "yMax": {range:"NonNegativeInteger", optional: true, label:"Height", hint:"Maximum y value"},
      "zMax": {range:"NonNegativeInteger", optional: true, label:"Depth", hint:"Maximum z value"}
  };
};
// Define the schema of the model object "scenario.initialState"
sim.scenario.initialState = {
  objectName: "initialState",
  properties: {
    // a map, and therefore an instance of Object
    "objects": {range: Object, optional: true, label:"Initial objects"},
    // a map, and therefore an instance of Object
    "events": {range: Object, optional: true, label:"Initial events"}
  },
  check: function () {
    var errors=[];
    var isProcNetSim = this.objects &&
            Object.keys( this.objects).some( function (objIdStr) {
              return this.objects[objIdStr].typeName === "eNTRYnODE";
            }, this);
    if (!this.events && !isProcNetSim &&
        !(sim.model.timeIncrement || sim.model.OnEachTimeStep)) {
      errors.push("There must be at least one initial event when neither " +
          "a time increment nor an 'OnEachTimeStep' method has been defined.");
    }
    if (!this.objects) return;
    Object.keys( this.objects).forEach( function (objIdStr) {
      var slots={}, Class=null;
      // check object IDs
      if (String( parseInt( objIdStr)) !== objIdStr) {
        errors.push("An object has a non-integer ID: "+ objIdStr);
      }
      slots = this.objects[objIdStr];
      Class = cLASS[slots.typeName];
      Object.keys( slots).forEach( function (p) {
        var decl = Class.properties[p], constrVio=null;
        if (decl) {
          constrVio = cLASS.check( p, decl, slots[p]);
          if (!(constrVio instanceof NoConstraintViolation)) {
            errors.push( slots.typeName +"("+ objIdStr +"): "+ constrVio.message);
          }
        }
      });
    }, this);
    return errors;
  }
};
// Define the schema of the model object "scenario.initialStateUI"
sim.scenario.initialStateUI = {
  objectName: "initialStateUI",
  properties: {
    "editableProperties": {range: Object, label:"Editable properties"}
  },
  check: function () {
    if (!this.editableProperties) return;
    Object.keys( this.editableProperties).forEach( function (className) {
      // ...
    }, this);
  }
};
sim.scenario.initialStateUI.editableProperties = {};

/**
 * Check correctness of scenario/model definitions
 *
 * @method
 * @author Gerd Wagner
 */
oes.verifySimulation = function () {
  var errMsgs=[];

  function checkModelObject( mo) {  // mo = model object
    var props = mo.properties, errors=[];
    if (!props) {
      errors.push("The model object "+ mo.objectName +" does not have a declaration of 'properties'!");
      return;
    }
    // check property slots
    Object.keys( props).forEach( function (prop) {
      var constrVio = cLASS.check( prop, props[prop], mo[prop]);
      if (!(constrVio instanceof NoConstraintViolation)) {
        errors.push( constrVio.constructor.name +": "+ constrVio.message);
      }
    });
    if (mo.check) {  // invoke specific check method
      errors.merge( mo.check());
    }
    if (errors.length > 0) {
      errors.forEach( function (err, i) {
        errors[i] = "["+ mo.objectName +"] " + err;
      });
    }
    return errors;
  }
  // check model definition
  errMsgs.merge( checkModelObject( sim.model));
  // check SPACE model definition
  if (sim.model.space.type) {
    errMsgs.merge( checkModelObject( sim.model.space));
  }
  // check scenario definition
  errMsgs.merge( checkModelObject( sim.scenario));
  // check initial state definition
  errMsgs.merge( checkModelObject( sim.scenario.initialState));
  // check definitions of STATISTICS variables
  if (sim.model.statistics) {
    Object.keys( sim.model.statistics).forEach( function (varName) {
      var statVar = sim.model.statistics[varName],
          aggrFunc = statVar.aggregationFunction;
      // variable bound to specific object
      if (statVar.objectIdRef && !statVar.objectType) {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>: No objectType provided!");
      }
      // aggregation function must be defined
      if (aggrFunc && typeof( oes.stat[aggrFunc]) !== 'function') {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>: <code>"+ aggrFunc +
            "</code> is not an admissible aggregation function name!");
      }
      // variable is bound to an aggregate over an ObjectType population
      if (!statVar.objectIdRef && statVar.property && !(OT && cLASS[OT] && aggrFunc)) {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>:"+ (!OT ? " object type name missing!" :
                                 !cLASS[OT] ? " object type "+ OT +" not defined!" :
                                 !aggrFunc ? " aggregationFunction missing!":""));
      }
      //TODO: add further checks!
    });
  }
  return errMsgs;
};
/**
 * Set up front-end simulation environment
 *
 * @method
 * @author Gerd Wagner
 */
oes.setupFrontEndSimEnv = function () {
  oes.defineSimModelSchema();
  sim.initializeSimulator();
  // initialize space model
  if (sim.model.space.type) oes.space.initialize();
  sim.setupInitialState();
  // initialize statistics
  if (sim.model.statistics) oes.stat.initialize();
  // set up the UI
  oes.ui.setupUI();
  // visualize initial state (step 0)
  if (sim.scenario.visualize) oes.ui.visualizeStep();
};

/*******************************************************
 Simulation Log
********************************************************/
sim.logStep = function () {
  var systemStateInfo = "";
  var rowEl = sim.ui.logEl.insertRow();  // create new table row
  var simTime = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( sim.time * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          sim.time;
  systemStateInfo = Object.keys( sim.globalVars).reduce( function (serialization, varName, i) {
    var varDecl = sim.model.v[varName], slotSerialization="";
    if (varDecl.shortLabel) {
      slotSerialization = varDecl.shortLabel +": "+ sim.globalVars[varName];
      return i>0 ? serialization +", "+ slotSerialization : slotSerialization;
    } else return serialization;
  }, "");
  if (systemStateInfo && Object.keys( sim.objects).length > 0) systemStateInfo += ", ";
  systemStateInfo += Object.keys( sim.objects).reduce( function (serialization, objIdStr, i) {
    var o = sim.objects[objIdStr];
    if (o.shortLabel || o.constructor.shortLabel) {
      return i>0 ? serialization +", "+ o.toLogString() : o.toLogString();
    } else return serialization;
  }, "");
  rowEl.insertCell().textContent = String( simTime);
  rowEl.insertCell().textContent = systemStateInfo;
  rowEl.insertCell().textContent = sim.FEL.toString();
}
/*******************************************************************************
 * EventList maintains an ordered list of events
 * @copyright Copyright 2015-2016 Gerd Wagner
 *   Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
var oes = oes || {};
oes.EventList = function EventList(a) {
  this.events = Array.isArray(a) ? a : [];
 };
oes.EventList.prototype.add = function (e) {
  this.events.push( e);
  this.events.sort( function (e1, e2) {
    return e1.occTime - e2.occTime;
  });
};
oes.EventList.prototype.getNextOccurrenceTime = function () {
  if (this.events.length > 0) return this.events[0].occTime;
  else return 0;
};
oes.EventList.prototype.getNextEvent = function () {
  if (this.events.length > 0) return this.events[0];
  else return null;
};
oes.EventList.prototype.isEmpty = function () {
  return (this.events.length <= 0);
};
oes.EventList.prototype.removeNextEvents = function () {
  var nextTime=0, nextEvents=[];
  if (this.events.length === 0) return [];
  nextTime = this.events[0].occTime;
  while (this.events.length > 0 && this.events[0].occTime === nextTime) {
    nextEvents.push( this.events.shift());
  }
  return nextEvents;
};
oes.EventList.prototype.clear = function (e) {
  this.events = [];
};
oes.EventList.prototype.containsEventOfType = function (evtType) {
  return this.events.some( function (evt) {
    return evt.constructor.Name === evtType;
  });
};
oes.EventList.prototype.toString = function () {
  var str="";
  if (this.events.length > 0) {
    str = this.events.reduce( function (serialization, e) {
      return serialization +", "+ e.toEventString();
    }, "");
    str = str.slice(1);
  }
  return str;
};

/**
 * @fileOverview Variables and procedures for (ex-post) statitsics
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
// create namespace oes if not already created by some other "module"
if (typeof(oes) !== "object") var oes = {};
/**
 * Computation of the simulation statistics.
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */
oes.stat = {
  timeSeriesCompressionSteps: 1 // length of array values to be compressed into one value
};
sim.stat = {  // run-time statistics variables
  prevValue: {},
  timeSeries: {},
  resUtil: {}  // resource utilization
};

/**
 * Initialize the ex-post statistics
 */
oes.stat.initialize = function () {
  var aggReturnType = {  // stores the return types of various aggregation functions
    'avg': 'Decimal'
  };
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName],
        initialVal = statVar.initialValue || 0,
        OT="", objIdRefStr="", objectRef=null,
        propDecl="", globVar="";
    statVar.name = varName;
    // is the statistics variable bound to a global variable?
    if (statVar.globalVariable) {
      globVar = statVar.globalVariable;
      if (sim.model.v[globVar] === undefined)
        throw "[Statistics] Global variable "+ globVar +" has not been defined!";
      else if (typeof sim.model.v[globVar] === "object") {
        initialVal = sim.model.v[globVar].initialValue || 0;
      } else initialVal = sim.model.v[globVar];
    } else if (statVar.objectIdRef && statVar.property) {
      // the variable is bound to a specific object
      objIdRefStr = String( statVar.objectIdRef);
      if (statVar.objectType) OT = statVar.objectType;
      else OT = sim.objects[objIdRefStr].constructor.Name;
      objectRef = cLASS[OT].instances[objIdRefStr];
      if (objectRef) {
        statVar.objectRef = objectRef;  // store reference to the object
        // the statistics variable default range is the property range
        if (!statVar.range) {
          if (statVar.aggregationFunction &&
              aggReturnType[statVar.aggregationFunction]) {
            statVar.range = aggReturnType[statVar.aggregationFunction];
          } else {
            propDecl = cLASS[objectRef.constructor.Name].properties[statVar.property];
            statVar.range = propDecl.range;
          }
        }
        initialVal = objectRef[statVar.property];
      } else throw "No object found for objectIdRef"+ objIdRefStr +"in oes.stat.initialize";
    } else if (statVar.gridCellProperty && sim.space.grid) {
      // statistics variable for grid cell property
      if (!statVar.range) {
        if (statVar.aggregationFunction &&
          aggReturnType[statVar.aggregationFunction]) {
          statVar.range = aggReturnType[statVar.aggregationFunction];
        } else {
          propDecl = sim.space.grid[0][0].constructor.properties[statVar.gridCellProperty];
          if (propDecl)  statVar.range = propDecl.range;
        }
      }
    }
    // has the variable's time series to be stored/returned?
    if (statVar.showTimeSeries) {
      if (sim.timeIncrement === undefined){
        sim.stat.timeSeries[varName] = [[],[]];
      } else {
        sim.stat.timeSeries[varName] = [];
      }
    }
    // is variable bound to a time series aggregation?
    statVar.isBoundToTimeSeriesAggregate = (statVar.aggregationFunction &&
        (statVar.objectIdRef && statVar.property || statVar.globalVariable));
    // is variable bound to an aggregate over an ObjectType population?
    statVar.isBoundToPopulationAggregate =
        (!statVar.objectIdRef && statVar.property && OT);
    if (statVar.range) statVar.isIntegerType = cLASS.isIntegerType( statVar.range);
    else if (statVar.globalVariable && typeof sim.model.v[globVar] === "object" &&
             statVar.aggregationFunction && statVar.aggregationFunction !== "avg") {
      statVar.isIntegerType = cLASS.isIntegerType( sim.model.v[globVar].range);
    } else {
      statVar.isIntegerType = false;
    }
    // initialize runtime statistics variables in sim.stat
    if (statVar.isIntegerType) sim.stat[varName] = parseInt( initialVal);
    else sim.stat[varName] = initialVal;
    // store as previous value
    sim.stat.prevValue[varName] = sim.stat[varName];
  });
  // initialize resource utilization statistics
  if (sim.model.activityTypes) {
    sim.model.activityTypes.forEach( function (aT) {
      sim.stat.resUtil[aT] = {};
    });
  }
  // initialize PN statistics
  if (Object.keys( oes.ProcessingNode.instances).length > 0) {
    sim.stat.resUtil["pROCESSINGaCTIVITY"] = {};
  }
};

/**
 * The timeSeries arrays are limited in length for two reasons:
 * - large arrays results in slowing down the simulation
 * - we have limited pixels on the screen to show the statistics graphs
 *
 * Actually, the maximum length is limited to the number of pixels
 * available for the statistics graphs, so one time series value for
 * each one physical pixels. This is achieved by compressing the
 * array, averaging groups of values to one value.
 *
 * @param maxLength
 *    the maximum allowed length of the timeSeries array
 */
oes.stat.prepareTimeSeriesCompression = function (maxLength) {
  maxLength = maxLength || sim.scenario.simulationEndTime; // defaults to "no restriction - all steps"
  oes.stat.timeSeriesCompressionSteps = Math.floor(sim.scenario.simulationEndTime / maxLength);
  if (oes.stat.timeSeriesCompressionSteps < 1) oes.stat.timeSeriesCompressionSteps = 1;
  console.log("Statistics: timeSeriesCompressionSteps="
    + oes.stat.timeSeriesCompressionSteps + " (1 means no compression)");
};
/**
 * Reset the statistics variables. This means that any computed 
 * value is reset to the initial value and all the connection with 
 * object(s) references are recreated.
 */
oes.stat.reset = function () {
  oes.stat.initialize();
};

/**
 * Update the statistic variables at the end of each simulation step.
 */
oes.stat.updateStatistics = function () {
  var i=0, statVar=null,
      variables = Object.keys( sim.model.statistics),
      n = variables.length;
  for (i=0; i<n; i++) {
    statVar = sim.model.statistics[variables[i]];
    // computeOnlyAtEnd statistic variables are ignored at this point
    if (!statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  }
};

/**
 * Update a statistics variable X and assign the result to sim.stat["X"]
 * @param statVar  the statistics variable declaration
 */
oes.stat.updateStatisticsVariable = function (statVar) {
  var varName = statVar.name, valueAtCurrentStep = 0;
  var cellsOnX = 0, cellsOnY = 0, i = 0, j = 0;
  var grid = null;
  var sum = 0, pName = '';
  // expression/function is used to compute the value
  if (typeof statVar.expression === 'function') {
    valueAtCurrentStep = statVar.expression() || 0;
  } else if (statVar.globalVariable) { // value obtained from a global variable
    valueAtCurrentStep = sim.globalVars[statVar.globalVariable] || 0;
  } else if (statVar.objectRef) { // value obtained from an object property
    valueAtCurrentStep = statVar.objectRef[statVar.property] || 0;
  } else if (statVar.entryNode) { // PN statistics
    valueAtCurrentStep = statVar.entryNode.nmrOfArrivedObjects || 0;
  } else if (statVar.exitNode) { // PN statistics
    valueAtCurrentStep = statVar.exitNode.nmrOfDepartedObjects || 0;
  } else if (statVar.gridCellProperty) {
    grid = sim.space.grid;
    cellsOnX = grid.length;
    cellsOnY = grid[0].length;
    pName = statVar.gridCellProperty;
    for (i = 0; i < cellsOnX; i++) {
      for (j = 0; j < cellsOnY; j++) sum += (grid[i][j])[pName];
    }
    valueAtCurrentStep = sum / (cellsOnX * cellsOnY);
    if (statVar.aggregationFunction) {
      valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.stat.prevValue[varName], valueAtCurrentStep);
    }
  } else {  // value computed manually in the simulation scenario
    valueAtCurrentStep = sim.stat[varName];
  }
  //TODO: support TimeSeriesAggregate of PopulationAggregate
  if (statVar.isBoundToTimeSeriesAggregate) {
    valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.stat.prevValue[varName], valueAtCurrentStep);
  } else if (statVar.isBoundToPopulationAggregate) {
    valueAtCurrentStep = oes.stat.computePopulationAggregate(statVar);
  }
  // format integer values
  if (statVar.isIntegerType) sim.stat[varName] = parseInt( valueAtCurrentStep);
  else sim.stat[varName] = valueAtCurrentStep;
  // check if the variable's time series has to be stored/returned
  if (statVar.showTimeSeries) {
    if (sim.timeIncrement) {
      //sim.stat.timeSeries[varName][sim.step] = sim.stat[varName];
      sim.stat.timeSeries[varName].push( sim.stat[varName]);
      if (oes.stat.timeSeriesCompressionSteps > 1
          && sim.step % oes.stat.timeSeriesCompressionSteps === 0) {
        oes.stat.compressTimeSeries( sim.stat.timeSeries[varName]);
      }
    } else {  // next-event time progression
      sim.stat.timeSeries[varName][0][sim.step] = sim.time;
      // TODO: check how we can average steps for time progression case
      sim.stat.timeSeries[varName][1][sim.step] = sim.stat[varName];
      // TODO: check how we can average statistic values for time progression case
    }
  }
  // assign current value to previous value
  sim.stat.prevValue[varName] = sim.stat[varName];
};

/**
 * Compress time series to keep its length in a specified
 * range, avoiding long arrays that slow down the simulation.
 * @param ts
 *    the time series to compress
 */
oes.stat.compressTimeSeries = function (ts) {
  var avgLen = oes.stat.timeSeriesCompressionSteps;
  var i = 0, n = ts.length, avg = 0;
  // compute average value for the latest set, which will be compressed
  for (i = n - avgLen; i < n; i++) avg += ts[i];
  // remove averaged values and append the compressed (average) value
  ts.splice(n-avgLen-1, avgLen, avg /= avgLen);
};

/**
 * Compute a Population Aggregate
 */
oes.stat.computePopulationAggregate = function (statVar) {
  var OT = statVar.objectType,
      objIDs = Object.keys( cLASS[OT].instances),
      n = objIDs.length,
      aggrF = statVar.aggregationFunction,
      aggr=0, i=0;
  switch (aggrF) {
  case "min":
  case "max":
    for (i=0; i < n; i++) {
      aggr = Math[aggrF]( aggr, cLASS[OT].instances[String(id)][statVar.property]);
    }
    break;
  case "sum":
  case "avg":
    for (i=0; i < n; i++) {
      aggr += cLASS[OT].instances[String(id)][statVar.property];
    }
    if (aggrF === "avg") aggr = aggr/n;
    break;
  }
  return aggr;
};
/**
 * Compute the values of the statistic variables which are only required 
 * to be computed at the simulation end. This method has to be called when 
 * the simulation ends.
 */
oes.stat.computeOnlyAtEndStatistics = function () {
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName];
    if (statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  });
};

/**
 * Compute the <code>max</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.max = function (oldValue, newValue) {
  return Math.max( oldValue, newValue);
};

/**
 * Compute the <code>min</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.min = function (oldValue, newValue) {
  return Math.min( oldValue, newValue);
};
/**
 * Compute the <code>sum</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.sum = function (oldValue, newValue) {
  return oldValue + newValue;
};
/**
 * Compute the <code>avg</code> (average, arithmetic mean) aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.avg = function (oldValue, newValue) {
  if (sim.step >= 1) return (oldValue + (newValue - oldValue) / (sim.step + 1));
  else return oldValue;
};


/**
 * @fileOverview A JavaScript implementation of an Object-Event Simulator defined as
 * a JS object "sim". The simulator is associated with a simulation model (sim.model)
 * and one or more simulation scenarios (sim.scenarios).
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 *
 * Integrity *constraints* that must be satisfied at any simulation step can be defined
 * as Boolean functions in the map "model.constraints" with constraint names being the
 * keys. They are currently checked for the initial state only (in "setupInitialState").
 * In future versions there may be an option that constraints are checked in all
 * simulation steps for catching more model errors.
 */
/*
Improvements/extensions
v1
 - support real-time simulation enabled by realtimeFactor set to 1
 - improve oBJECTvIEW by allowing to specify a set of model objects like {"scen":sim.scenario, "mod":sim.mode} such that UI fields
   can be specified in the form of [["scen.simulationEndTime", "mod.timeUnits", "scen.stepDuration", ...]]
 - Support defining/using scenario parameters, e.g., for event rates or the space size, by declaring corresponding model variables
   (used, e.g., as distribution parameters in definitions of random variables) and binding scenario parameters to them
 - Support a concept of simulation experiment types based on scenario parameters (bound to model variables): 
   Allow defining a series of experiments by defining a sequence of sets of scenario parameter slots. Allow storing/comparing the 
   results of a series of experiments.
 - Refactor the simulation step/loop by parametrizing pre-defined events from an extension library (such as "PN Models")
 - Refactor for multi-threading with web workers
 - Add an "empirical" method to rand
 - Allow defining statistics per ObjectType::property, and not only per object.property
 - New model constraint check: prevent the use of pre-defined cLASS names ("aRRIVAL", etc.)

 - Implement support for the "recurrence" attribute of entry nodes
 - Allow setting a waiting timeout for the input queues of processing nodes (corresponding
   to AnyLogic's "Enable exit on timeout")
 - Implement support for the "capacity" attribute of processing nodes (by popping/forwarding
   more than one work objects)
 - Allow processing nodes to specify a maximum queue length (limited queue capacity)

 - Add observation UIs for visualizing variables in "monitors"
 - improve the initial state definition UI: 
   + add events
   + allowing adding/dropping objects in the ClassPopulationWidget
   + supporting enumeration attributes in the ClassPopulationWidget

 *** later ***
 - Event type priorities for developer-controlled event rule execution ordering
 - Add exploration model
 - Support using variants of the same model (sim.models)

v2
 - extend mODELcLASS with object pools
 - analyze use of global variables/procedures (use modules?)
 - concurrent event processing with deferred state changes
 - add agents
 - add participation model
 - UI for defining ex-post statistics
 */

/*******************************************************
 Initializations
 ********************************************************/
sim.ui = sim.ui || {}; // runtime UI components
/*******************************************************
 Add object to simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be added
 */
sim.addObject = function (o) {
  if (!(o instanceof oes.Object)) {
    console.log( o.toString() +" is not an oBJECT!");
    return;
  }
  if (!o.id) o.id = sim.idCounter++;
  sim.objects[String(o.id)] = o;
  if (o.name) {
    if (typeof o.name !== "string" ) {
      console.log("oBJECT "+ o.toString() +" has a non-string name"+ o.name);
      return;
    } else sim.namedObjects[o.name] = o;
  }
  return o;
};
sim.addObjects = function (objArr) {
  objArr.forEach( function (o) {sim.addObject(o)});
  return objArr;
};
/*******************************************************
 Remove an object from the set of simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be removed
 */
sim.removeObject = function (o) {
  if (!(o instanceof oes.Object)) {
    console.log( JSON.stringify(o) +" is not an OES object!");
    return;
  }
  if (!sim.objects[String(o.id)]) {
    console.log( JSON.stringify(o) +"@"+ sim.time +
        " has not been registered as a simulation object!");
    return;
  }
  delete sim.objects[String(o.id)];
};
sim.removeObjectById = function (id) {
  if (typeof id === "string") id = parseInt(id);
  if (!Number.isInteger( id)) {
    console.log( JSON.stringify(id) +" is not an integer!");
    return;
  }
  if (!sim.objects[String(id)]) {
    console.log( JSON.stringify(id) +" is not an ID of a registered simulation object!");
    return;
  }
  delete sim.objects[String(id)];
};
/*******************************************************
 Schedule an event by adding it to the FEL
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param e  the event to be scheduled
 */
sim.scheduleEvent = function (e) {
  if (e instanceof oes.Event) sim.FEL.add(e);
  else {
    console.log( e.toString() +" is not an eVENT!");
  }
};
/********************************************************
 * Set up initial state
 ********************************************************/
sim.setupInitialState = function () {
  var initState = sim.scenario.initialState,
      initialObjDefs = initState ? initState.objects : null,
      initialEvtDefs = initState ? initState.events : null;
  // complete model definition by setting objectTypes and eventTypes if not defined
  if (!sim.model.objectTypes) sim.model.objectTypes = [];
  if (!sim.model.eventTypes) sim.model.eventTypes = [];
  // clear initial state data structures
  sim.globalVars = {};  // a map of global variables accessible by name
  sim.objects = {};  // a map of all objects accessible by ID
  sim.namedObjects = {};  // a map of all objects accessible by a unique name
  sim.FEL.clear();
  sim.ongoingActivities = {};  // a map of all ongoing activities accessible by ID
  // clear the cLASS populations of object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    cLASS[objTypeName].instances = {};
  });
  // set up the map of global variables
  Object.keys( sim.model.v).forEach( function (varName) {
    if (typeof sim.model.v[varName] === "object") {
      sim.globalVars[varName] = sim.model.v[varName].initialValue;
    } else {
      sim.globalVars[varName] = sim.model.v[varName];
    }
  });
  // register initial objects
  if (initialObjDefs) {  // a map of object definitions
    Object.keys( initialObjDefs).forEach( function (idStr) {
      var objSlots = util.cloneObject( initialObjDefs[idStr]),
          objTypeName = objSlots.typeName,
          ObjType = cLASS[objTypeName], obj=null;
      // fatal error: object type class not found
      if (!ObjType) throw Error("Missing object type class '" + objTypeName + "'!");
      objSlots.id = parseInt(idStr);
      delete objSlots.typeName;  // remove typeName slot
      try {obj = new ObjType( objSlots);}
      catch (e) {
        console.log( e.constructor.name +": "+ e.message);
      }
      sim.addObject( obj);
    })
  }
  // convert ID references to object references (in a second pass)
  Object.keys( sim.objects).forEach( function (idStr) {
    var obj = sim.objects[idStr],
        props = cLASS[obj.constructor.Name].properties;
    Object.keys( obj).forEach( function (p) {
      if (!props[p]) {
        if (typeof obj[p] !== "function" && !oes.predfinedProperties.includes(p)) {
          console.log("Undeclared prop: "+ p +" for obj "+ idStr);
        }
        return;
      }
      var range = props[p].range, val = obj[p],
          rangeClasses=[];
      if (typeof(range) == "string" && typeof(val) !== "object" &&
          (cLASS[range] || range.includes("|"))) {
        if (range.includes("|")) {
          rangeClasses = range.split("|");
          // check referential integrity: val must be in some range class
          if (!rangeClasses.some( function (rc) {
                return cLASS[rc].instances[String(val)];
              })) {
            throw Error("Referential integrity violation: "+ val +" does not reference any of "+
                range +"!");
          }
        } else if (!cLASS[range].instances[String(val)]) {
            throw Error("Referential integrity violation: "+ val +" does not reference a "+ range +"!");
        }
        obj[p] = sim.objects[String(val)];
      }
    });
  });
  // schedule initial events
  if (initialEvtDefs) {  // an array of JS object definitions
    initialEvtDefs.forEach( function (evt) {
      var e = util.cloneObject( evt),  // clone event object definition
          evtTypeName = e.typeName,
          EvtType = cLASS[evtTypeName];
      // fatal error: event type class not found
      if (!EvtType) throw Error("Missing class for event type '" + evtTypeName + "'!");
      delete e.typeName;  // remove type slot
      sim.scheduleEvent( new EvtType( e));
    })
  }
  // schedule initial arrival events for the entry nodes of a PN
  Object.keys( oes.EntryNode.instances).forEach( function (en) {
    var occT=0, arrEvt=null;
    // has no recurrence function been defined?
    if (!en.recurrence) {
      // use the default recurrence
      occT = oes.Arrival.defaultRecurrence();
    } else {
      occT = en.recurrence();
    }
    arrEvt = new oes.Arrival({ occTime: occT, entryNode: en});
    sim.scheduleEvent( arrEvt);
  });

  // declare implicit statistics variables for PN entry node statistics
  if (Object.keys( oes.EntryNode.instances).length > 0 &&
      !sim.model.statistics) {
    sim.model.statistics = {};
  }
  Object.keys( oes.EntryNode.instances).forEach( function (nodeIdStr) {
    var entryNode = oes.EntryNode.instances[nodeIdStr],
        varName = entryNode.name + "_arrObj";
    entryNode.nmrOfArrivedObjects = 0;
    sim.model.statistics[varName] = {
      range: "NonNegativeInteger",
      label: "Arrived objects",
      entryNode: entryNode,
      computeOnlyAtEnd: true
    };
  });
  // declare implicit statistics variables for PN exit node statistics
  Object.keys( oes.ExitNode.instances).forEach( function (nodeIdStr) {
    var exitNode = oes.ExitNode.instances[nodeIdStr];
    exitNode.nmrOfDepartedObjects = 0;
    sim.model.statistics[exitNode.name + "_depObj"] = {
      range: "NonNegativeInteger",
      label: "Departed objects",
      exitNode: exitNode,
      computeOnlyAtEnd: true
    };
    exitNode.cumulativeTimeInSystem = 0;
    sim.model.statistics[exitNode.name + "_cumTime"] = {
      range: "Decimal",
      label: "Average time in system",
      exitNode: exitNode,
      computeOnlyAtEnd: true,
      decimalPlaces: 1,
      expression: function () {
        return exitNode.cumulativeTimeInSystem / exitNode.nmrOfDepartedObjects
      }
    }
  });

  // possibly set up additional items
  if (sim.scenario.setupInitialState) sim.scenario.setupInitialState();
  // check constraints
  if (sim.model.constraints) {
    Object.keys( sim.model.constraints).forEach( function (constrName) {
      var constraint = sim.model.constraints[constrName];
      if (!constraint()) alert( 'The constraint "'+ constrName +'" is violated in the initial state!');
    })
  }
};
/*************************************************************
 * Update initial state objects (after modifications via the UI)
 ************************************************************/
sim.updateInitialStateObjects = function () {
  // reset the initial objects map
  sim.scenario.initialState.objects = {};
  // loop over all object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    var objects = cLASS[objTypeName].instances;
    // loop over all instances of this object type
    Object.keys( objects).forEach( function (objIdStr) {
      var obj = objects[objIdStr],
          objRec = util.createRecordFromObject( obj);
      objRec.typeName = objTypeName;
      delete objRec.id;
      sim.scenario.initialState.objects[objIdStr] = objRec;
    });
  });
};
/*************************************************************
 * Initialize the simulator on start up
 ************************************************************/
sim.initializeSimulator = function () {
  var x=0;
  sim.FEL = new oes.EventList();  // the Future Events List (FEL)
  // set timeIncrement for fixed-increment time progression
  if (sim.model.timeIncrement) {
    sim.timeIncrement = sim.model.timeIncrement;
  } else {
    if (sim.model.OnEachTimeStep) sim.timeIncrement = 1;
  }
  if (sim.model.time === "continuous") {
    if (sim.model.timeRoundingDecimalPlaces) {
      sim.timeRoundingFactor = Math.pow( 10, sim.model.timeRoundingDecimalPlaces);
    } else {
      if (sim.timeIncrement) {  // fixed-increment time progression
        // determine rounding factor
        x = sim.timeIncrement - Math.trunc( sim.timeIncrement);
        if (x === 0) sim.timeRoundingFactor = 1;
        else if (x >= 0.1) sim.timeRoundingFactor = 10;
        else if (x >= 0.01) sim.timeRoundingFactor = 100;
        else sim.timeRoundingFactor = 1000;
      }
    }
    // define the minimal time delay until the next moment
    if (sim.model.nextMomentDeltaT) {
      sim.nextMomentDeltaT = sim.model.nextMomentDeltaT;
    } else if (sim.timeRoundingFactor) {
      sim.nextMomentDeltaT = 1 / sim.timeRoundingFactor;
    } else {  // default
      sim.nextMomentDeltaT = 0.000001;
    }
  } else {  // discrete time
    sim.nextMomentDeltaT = 1;
  }
  // set up a default random variate sampling method
  if (sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    // rand.initialize( sim.scenario.randomSeed);
    rand = new Random( sim.scenario.randomSeed);
  } else {  // use the JS built-in RNG
    // rand.initialize();
    rand = new Random();
  }
};
/*************************************************************
 * Initialize a simulation run
 ************************************************************/
sim.initializeSimulationRun = function () {
  sim.step = 0;  // simulation loop steps
  sim.time = 0;  // simulation time
  // get stepDuration from simulation scenario, or set to default value
  sim.stepDuration = sim.scenario.stepDuration || 0;
  // get ID counter from simulation scenario, or set to default value
  sim.idCounter = sim.scenario.idCounter || 1000;
  // set up a default random variate sampling method
  if (sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    rand = new Random( sim.scenario.randomSeed);
  } else {  // use the JS built-in RNG
    rand = new Random();
  }
  // Notice: the initial state is **visualized** before in oes.setupFrontEndSimEnv
  // log initial state
  if (sim.scenario.createLog && typeof sim.logStep === "function") sim.logStep();
  // create statistics for initial state
  if (sim.model.statistics) oes.stat.updateStatistics();
};
/*******************************************************
 Simulation Loop
********************************************************/
sim.run = function () {
  sim.initializeSimulationRun();
  sim.runStep();  // loops by self-invocation via setTimeout
};
/*******************************************************
 Simulation Step
********************************************************/
sim.runStep = function (followupEvents) {
  var nextEvents=[], followupEvt=null, i=0, j=0,
      EventClass=null, e=null, ActivityEndET=null, AT=null, a=null,
      WorkObject=null, o=null, slots={}, nextNode=null, occT=0,
      nextEvtTime = sim.FEL.getNextOccurrenceTime(),  // 0 if there is no next event
      stepStartTime = (new Date()).getTime(),
      totalStepTime = 0, stepDiffTimeDelay = 0,
      ui = sim.scenario.userInteractions,  // shortcut
      uiViewModel=null, eventTypeName="";
  function advanceSimulationTime () {
    // increment the step counter
    sim.step += 1;
    // advance simulation time
    if (sim.timeIncrement) {  // fixed-increment time progression
      if (nextEvtTime > sim.time && nextEvtTime < sim.time + sim.timeIncrement) {
        sim.time = nextEvtTime;
      } else {
        sim.time += sim.timeIncrement;
        if (sim.model.OnEachTimeStep) sim.model.OnEachTimeStep();
      }
    } else if (nextEvtTime > 0) {  // next-event time progression
      sim.time = nextEvtTime;
    }
    if (sim.model.time === "continuous" && sim.timeRoundingFactor) {
      sim.time = Math.round( sim.time * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
      nextEvtTime = Math.round( nextEvtTime * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
    }
    // update the sim-control UI via the fields' data binding to UI output elements
    sim.ui["sim"].dataBinding["time"].value = sim.time;
    sim.ui["sim"].dataBinding["step"].value = sim.step;
  }
  //-----------------------------------------------------
  if (sim.stopRequested) {   // interrupt simulation
    sim.stopRequested = false;
    oes.ui.updateUiOnStop();
    return;
  }
  if (sim.time >= sim.scenario.simulationEndTime)  {  // terminate simulation
    if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
    oes.ui.updateUiOnSimulationEnd();
    return;
  }
  if (followupEvents) {  // runStep was called from user action event handler
    // schedule follow-up events
    for (j=0; j < followupEvents.length; j++) {
      sim.FEL.add( followupEvents[j]);
    }
    // clear followUpEvents list
    followupEvents = [];
  } else {  // normal invocation of runStep
    followupEvents = [];
    advanceSimulationTime();
    // extract and process next events
    if (sim.time === nextEvtTime) {
      nextEvents = sim.FEL.removeNextEvents();
      for (i=0; i < nextEvents.length; i++) {
        e = nextEvents[i];
        eventTypeName = e.constructor.Name;
        // retrieve event class
        EventClass = cLASS[eventTypeName];
        // test if EventClass represents an exogenous event type
        if (EventClass.createNextEvent) {
          // create and schedule next exogenous event
          sim.FEL.add( EventClass.createNextEvent( e));
        }
        switch (eventTypeName) {
        case "aCTIVITYsTART":
        case "pROCESSINGaCTIVITYsTART":
          slots = {};
          if (eventTypeName === "aCTIVITYsTART") {
            AT = cLASS[e.activityType];
            ActivityEndET = oes.ActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (AT.fixedDuration) slots.duration = AT.fixedDuration;
            else if (AT.randomDuration) slots.duration = AT.randomDuration();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            AT = oes.ProcessingActivity;
            ActivityEndET = oes.ProcessingActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (e.actor.fixedDuration) slots.duration = e.actor.fixedDuration;
            else if (e.actor.randomDuration) slots.duration = e.actor.randomDuration();
            else slots.duration = oes.ProcessingActivity.defaultDuration();
            // make actor object a resource
            e.resources["actor"] = e.actor;
          }
          Object.keys( e.resources).forEach( function (resRole) {
            var resObj = e.resources[resRole];
            // copy resource def. slots as ref. prop. slots
            if (!slots[resRole]) slots[resRole] = resObj;
            // set activity state for resource object
            if (!resObj.activityState) resObj.activityState = {};
            resObj.activityState[e.activityType] = true;
          });
          slots.id = sim.idCounter++;  // activities need an ID
          slots.startTime = e.occTime;
          // create new activity
          a = new AT( slots);
          a.resources = e.resources;  // assign resources map
          sim.ongoingActivities[String( a.id)] = a;
          // if there is a onActivityStart procedure, execute it
          if (eventTypeName === "aCTIVITYsTART") {
            if (a.onActivityStart) followupEvents = a.onActivityStart();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            if (e.actor.onActivityStart) followupEvents = e.actor.onActivityStart();
          }
          if (a.duration) {  // schedule activity end event
            followupEvt = new ActivityEndET({
              occTime: e.occTime + a.duration,
              activityType: AT.Name,
              activityIdRef: a.id
            });
            if (e.actor) followupEvt.actor = e.actor;
            followupEvents.push( followupEvt);
          }
          break;
        case "aCTIVITYeND":
        case "pROCESSINGaCTIVITYeND":
          // retrieve activity
          a = sim.ongoingActivities[String( e.activityIdRef)];
          // if there is an onActivityEnd procedure, execute it
          if (eventTypeName === "aCTIVITYeND") {
            if (a.onActivityEnd) followupEvents = a.onActivityEnd();
          } else {  // if e is a pROCESSINGaCTIVITYeND event
            if (e.actor.onActivityEnd) followupEvents = e.actor.onActivityEnd();
          }
          // set occTime and duration if there was no pre-set duration
          if (!a.duration) {
            a.occTime = e.occTime;
            a.duration = a.occTime - a.startTime;
          }
          // compute resource utilization per resource role
          // and update the activity state of resource objects
          Object.keys( a.resources).forEach( function (resRole) {
            var objIdStr = String(a[resRole].id),
                resUtilMap = sim.stat.resUtil[e.activityType];
            if (resUtilMap[objIdStr] === undefined) resUtilMap[objIdStr] = 0;
            resUtilMap[objIdStr] += a.duration;
            delete a[resRole].activityState[e.activityType];
          });
          // drop activity from list of ongoing activities
          delete sim.ongoingActivities[String( e.activityIdRef)];
          if (eventTypeName === "pROCESSINGaCTIVITYeND") {
            // the successor node may be dynamically assigned by a.onActivityEnd()
            nextNode = e.actor.successorNode || a.successorNode;
            // pop object from the input queue
            o = e.actor.inputQueue.shift();
            // is the next node a processing node?
            if (nextNode.constructor.Name === "pROCESSINGnODE") {
              // push object to the input queue of the next node
              nextNode.inputQueue.push( o);
              // is the next processing node not busy?
              if (nextNode.inputQueue.length === 1) {
                followupEvents.push( new oes.ProcessingActivityStart({
                  occTime: e.occTime + sim.nextMomentDeltaT,
                  activityType: "pROCESSINGaCTIVITY",
                  actor: nextNode,
                  resources: a.resources || {}
                }));
              }
            } else {  // the next node is an exit node
              followupEvents.push( new oes.Departure({
                occTime: e.occTime + sim.nextMomentDeltaT,
                exitNode: nextNode,
                workObject: o
              }));
            }
            // are there more items in the input queue?
            if (e.actor.inputQueue.length > 0) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.actor,
                resources: a.resources || {}
              }));
            }
          }
          break;
        case "aRRIVAL":  // at an entry node
          if (e.entryNode.outputType) {
            WorkObject = cLASS[e.entryNode.outputType];
          } else {  // default
            WorkObject = oes.WorkObject;
          }
          // update statistics
          e.entryNode.nmrOfArrivedObjects++;
          // create newly arrived work object
          o = new WorkObject({arrivalTime: e.occTime});
          sim.addObject( o);
          // invoke onArrival event rule method
          if (e.entryNode.onArrival) followupEvents = e.entryNode.onArrival();
          if (e.entryNode.successorNode) {
            // push newly arrived object to the inputQueue of the next node
            e.entryNode.successorNode.inputQueue.push( o);
            // is the follow-up node not busy?
            if (e.entryNode.successorNode.inputQueue.length === 1) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.entryNode.successorNode,
                resources: e.entryNode.resources || {}
              }));
            }
          }
          // has an arrival recurrence function been defined for the entry node?
          if (e.entryNode.arrivalRecurrence) {
            occT = e.occTime + e.entryNode.arrivalRecurrence();
          } else {  // use the default recurrence
            occT = e.occTime + oes.Arrival.defaultRecurrence();
          }
          // schedule next aRRIVAL event
          if (!e.entryNode.maxNmrOfArrivals ||
              e.entryNode.nmrOfArrivedObjects < e.entryNode.maxNmrOfArrivals) {
            sim.scheduleEvent( new oes.Arrival({
              occTime: occT, entryNode: e.entryNode}));
          }
          break;
        case "dEPARTURE":
          // update statistics
          e.exitNode.nmrOfDepartedObjects++;
          e.exitNode.cumulativeTimeInSystem += e.occTime - e.workObject.arrivalTime;
          // invoke onDeparture event rule method
          if (e.exitNode.onDeparture) followupEvents = e.exitNode.onDeparture();
          // remove object from simulation
          sim.removeObject( e.workObject);
          break;
        default:  //***** all types of user-defined events *****
          // check if a user interaction has been triggered
          if (ui && ui[eventTypeName]) {
            // make sure that user interaction triggering event is last in list
            if (i === nextEvents.length - 1) {
              // check also the triggering event condition, if defined
              if (!ui[eventTypeName].trigEvtCondition || ui[eventTypeName].trigEvtCondition(e)) {
                sim.currentEvents[eventTypeName] = e;
                uiViewModel = ui[eventTypeName];
                Object.keys( uiViewModel.outputFields).forEach( function (outFldN) {
                  var fldEl = uiViewModel.dataBinding[outFldN],
                      val = uiViewModel.outputFields[outFldN].fieldValue;
                  if (typeof val === "function") fldEl.value = val();
                  else fldEl.value = val || "";
                });
                uiViewModel.domElem.style.display = "block";
                return;  // interrupt simulator & transfer control to UI
              }
            } else {
              e = nextEvents[nextEvents.length-1];
              nextEvents[nextEvents.length-1] = nextEvents[i];
            }
          }
          followupEvents = e.onEvent();
        }  // end of switch
        // render event appearances if defined
        if (sim.ui.animations && sim.ui.animations[eventTypeName]) {
          sim.ui.animations[eventTypeName].play();
        }
        // schedule follow-up events
        for (j=0; j < followupEvents.length; j++) {
          sim.FEL.add( followupEvents[j]);
        }
        // clear followUpEvents list
        followupEvents = [];
      }
    }
  }
  // update statistics
  if (sim.model.statistics) oes.stat.updateStatistics();
  // create simulation log
  if (sim.scenario.createLog && typeof sim.logStep === "function") sim.logStep();
  // update state visualization
  if (sim.scenario.visualize) oes.ui.visualizeStep();
  // end simulation if no time increment and no more events
  if (!sim.timeIncrement && sim.FEL.isEmpty()) {
    if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
    oes.ui.updateUiOnSimulationEnd();
    return;
  }
  // compute the time needed for executing this step
  totalStepTime = (new Date()).getTime() - stepStartTime;
  // check if we need some delay, because of the stepDuration parameter
  if (sim.stepDuration > totalStepTime) {
    stepDiffTimeDelay = sim.stepDuration - totalStepTime
  } else {
    /*if (sim.stepDuration > 0) {
     console.log("Duration of step "+ String( sim.step-1) +": "+ totalStepTime);
     }*/
    stepDiffTimeDelay = 0;
  }
  // continue simulation loop
  // in the browser, use setTimeout to prevent script blocking
  setTimeout( sim.runStep, stepDiffTimeDelay);
};
/**
 * User interface variables and procedures
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
var oes = oes || {};
oes.ui = {vis:{SVG:{}}};  // name space for generic UI procedures/functions
sim.ui = sim.ui || {};  // name space for scenario/model-specific UI settings

// flag used to create UI variations for Client or Server version of the simulation
oes.ui.fullUI = true;

/**
 * Create the UI page title with a link to the description page.
 * This method is overridden when the simulation runs on the NodeJS backend.
 */
oes.ui.createPageTitleWithDescriptionLink = function() {
  var flyOverText="",
      simTitle = String( sim.scenario.title || sim.model.title),
      headerEL = document.querySelector("body > header"),
      pageTitleEl = document.querySelector("body > header > h1");
  // set UI page title
  if (!pageTitleEl) {
    pageTitleEl = document.createElement("h1");
    if (!headerEL) {
      headerEL = document.createElement("header");
      document.body.insertBefore( headerEL, document.body.firstElementChild);
    }
    headerEL.insertBefore( pageTitleEl, headerEL.firstElementChild);
  }
  pageTitleEl.innerHTML = "<span>"+ simTitle +"</span>" +
      "<div><a href='description.html'>Read more...</a></div>";
  flyOverText = sim.scenario.shortDescription || sim.model.shortDescription;
  if (flyOverText) pageTitleEl.title = flyOverText;
  if (simTitle.length > 38) pageTitleEl.style.fontSize = "140%";
};
/**
 * Create the UI page footer.
 */
oes.ui.createPageFooter = function() {
  var created = new Date( sim.model.created),
      modified = new Date( sim.model.modified),
      license = sim.model.license || oes.defaults.license,
      licenseLinks=[], el=null,
      contributions = sim.model.contributors ?
          ", with contributions by "+ sim.model.contributors : "",
      artworkCredits = sim.scenario.artworkCredits ?
          " | <a href='#' title='"+ sim.scenario.artworkCredits + "'>Artwork Credits</a>" : "";
  licenseLinks["CC BY"] = "https://creativecommons.org/licenses/by/4.0/";
  licenseLinks["CC BY-SA"] = "https://creativecommons.org/licenses/by-sa/4.0/";
  licenseLinks["CC BY-NC"] = "https://creativecommons.org/licenses/by-nc/4.0/";
  if (licenseLinks[license]) {
    license = "<a href='"+ licenseLinks[license] +"'>"+ license +"</a>";
  }
  if (!document.querySelector("body > footer")) {
    el = document.createElement("footer");
    el.innerHTML = "<hr/><p>" + "Copyright "+ sim.model.creator +" ("+ license +
        "), created on "+ created.toLocaleDateString() +", last modified on "+
        modified.toLocaleDateString() + contributions +
        artworkCredits + " | <a href='http://sim4edu.com/credits'>OESjs Credits</a>";
    // insert footer as the last child element of body
    document.body.appendChild( el);
  }
};

/*******************************************************
 Set up the simulation UI
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupUI = function () {
  var el=null, errors=[],
      statistics = sim.model.statistics,
      createTimeSeriesChart = false;
  // initialize scenario and simulator views
  sim.ui["scenario"] = {};
  sim.ui["sim"] = {};
  /*********************************************************************
   Create title/headings
   **********************************************************************/
  // Set HTML title
  if (!document.title){
    document.title = "OES "+ (sim.scenario.name || sim.model.name);
  }
  oes.ui.createPageTitleWithDescriptionLink();
  /*********************************************************************
   Verify Simulation
  **********************************************************************/
  errors = oes.verifySimulation();
  if (errors.length > 0) {
    el = dom.createElement("div", {id:"errors"});
    el.appendChild( dom.createElement("h1", {content: "Errors"}));
    errors.forEach( function (err) {
      el.appendChild( dom.createElement("p", {content: err}));
    });
    document.body.insertBefore( el, document.body.firstElementChild);
  }
  /*********************************************************************
   UI for Visualization
   **********************************************************************/
  if (sim.scenario.visualize) oes.ui.setupVisualization();
  /*********************************************************************
   UI for User Interaction
   **********************************************************************/
  if (sim.scenario.userInteractions &&
      Object.keys( sim.scenario.userInteractions).length > 0) {
    oes.ui.setupUserInteraction();
  }
  /*******************************************************
   Set up the Event Appearances (Sound + Animations)
   *******************************************************/
  if (sim.scenario.observationUI.eventAppearances &&
      Object.keys( sim.scenario.observationUI.eventAppearances).length > 0) {
    oes.ui.setupEventAppearances();
  }
  /*********************************************************************
   Set up UI for Simulation (Scenario) Parameters
  **********************************************************************/
  sim.ui["scenario"] = new oBJECTvIEW({
      modelObject: sim.scenario,
      fields: [["simulationEndTime", "stepDuration", "visualize", "createLog"]],
      userActions: {
        "run": function () {
          var statFormEl = document.forms["expost-statistics"],
              statGraphWidth = 0;
          // hide simulation parameters and show simulator controls
          document.forms["scenario"].style.display = "none";
          document.forms["sim"].style.display = "block";
          // show simulation log table
          if (sim.scenario.createLog && oes.ui.fullUI) {
            sim.ui.logEl.parentNode.style.display = "table";
          }
          // disable continue and reset buttons
          document.forms["sim"].elements["continue"].disabled = true;
          document.forms["sim"].elements["restart"].disabled = true;
          // compute statistics compression factor
          if (statistics) {
            // since the width is not reported when display=none, we need to reset display
            statFormEl.style.display = "block";
            statGraphWidth = parseInt( getComputedStyle( statFormEl).width);
            statFormEl.style.display = "none";
            oes.stat.prepareTimeSeriesCompression( statGraphWidth);
          }
          // start simulator
          sim.run();
        }
      }
  });
  sim.ui["scenario"].dataBinding = sim.ui["scenario"].render();
  // show simulation time unit
  el = document.querySelector("form#scenario input[name*='simulationEndTime']");
  if (sim.model.timeUnit) {
    dom.insertAfter( document.createTextNode(" "+ sim.model.timeUnit), el);
  }
  // show step duration time unit (ms)
  el = document.querySelector("form#scenario input[name*='stepDuration']");
  if (el) dom.insertAfter( document.createTextNode(" ms"), el);

  // Example for setting a non-default label: sim.ui["scenario"].userActions["run"].label = "Run";

  /*********************************************************************
   Set up UI for modifying the initial state objects within scenario UI
   **********************************************************************/
  if (sim.scenario.initialState.objects && !sim.scenario.suppressInitialStateUI) {
    oes.ui.setupInitialStateObjectsUI( document.forms["scenario"]);
  }
  /*********************************************************************
   Set up UI for defining the space and space view within scenario UI
   **********************************************************************/
  if (sim.model.space.type) {
    oes.ui.setupSpaceDefUI( document.forms["scenario"]);
  }
  /*********************************************************************
   Observation UI
   *********************************************************************/
  // set up simulator control UI
  try {
    sim.ui["sim"] = new oBJECTvIEW({
      modelObject: sim,
      fields: [[
        { name: "step",
          label: sim.properties["step"].label,
          hint: sim.properties["step"].hint,
          range: sim.properties["step"].range,
          inputOutputMode: "O"},
        { name: "time",
          label: sim.properties["time"].label,
          hint: sim.properties["time"].hint,
          range: sim.properties["time"].range,
          inputOutputMode: "O"}
      ]],
      suppressNoValueFields: false,
      userActions: {
        "stop": function () {
          sim.stopRequested = true;
        },
        "continue": function () {
          document.forms["sim"].elements["stop"].disabled = false;
          sim.runStep();
        },
        "restart": function () {
          var expostStatisticsEl = document.getElementById("expost-statistics"),
              visCanvasEl = document.getElementById("visCanvas"),
              logEl = document.getElementById("simLogTbl");
          if (visCanvasEl) document.body.removeChild( visCanvasEl);
          if (expostStatisticsEl) document.body.removeChild( expostStatisticsEl);
          document.body.removeChild( document.getElementById("scenario"));
          document.body.removeChild( document.getElementById("sim"));
          if (logEl) document.body.removeChild( logEl);
          //oes.ui.reset();
          document.body.removeChild( document.getElementsByTagName("footer")[0]);
          oes.setupFrontEndSimEnv();
        }
      }
    });
    // render view and store its data binding
    sim.ui["sim"].dataBinding = sim.ui["sim"].render();
    el = document.querySelector("form#sim output[name*='time']");
    if (sim.model.timeUnit) {
      dom.insertAfter( document.createTextNode(" "+ sim.model.timeUnit), el);
    }
    document.forms["sim"].style.display = "none";
  } catch (e) {
    console.log( e.constructor.name +": "+ e.message);
  }
  //TODO: set up UI for ex-post statistics using oBJECTvIEW
  /*
  try {
    sim.ui["expoststat"] = new oBJECTvIEW({
      modelObject: sim.model.statistics,
      suppressNoValueFields: false,
      userActions: {
      }
    });
    // render view and store its data binding
    sim.ui["expoststat"].dataBinding = sim.ui["expoststat"].render();
    document.forms["expoststat"].style.display = "none";
  } catch (e) {
    console.log( e.constructor.name +": "+ e.message);
  }
  */
  /*********************************************************************
   Set up UI for ex-post statistics
  **********************************************************************/
  if (statistics) {
    el = dom.createElement("form", {id:"expost-statistics"});
    el.style.overflowX = "auto";  // horizontal scrolling
    Object.keys( statistics).forEach( function (statVar) {
      var lbl = statistics[statVar].label, contEl=null;
      if (lbl) {
        // turn it on when there is at least one showTimeSeries variable
        createTimeSeriesChart |= statistics[statVar].showTimeSeries;
        if (!statistics[statVar].showTimeSeries) {
          contEl = dom.createElement("div", {classValues:"I-O-field"});
          contEl.appendChild( dom.createLabeledOutputField({
            name: statVar, labelText: lbl}));
          el.appendChild( contEl);
        }
      }
    });
    dom.insertAfter( el, document.forms["sim"]);
    document.forms["expost-statistics"].style.display = "none";
    if (createTimeSeriesChart) {
      el = dom.createElement("div", {id:"time-series-chart"});
      document.forms["expost-statistics"].appendChild( el);
    }
  }
  /*********************************************************************
   Set up UI for showing the simulation log
   **********************************************************************/
  // create initially empty simulation log table
  el = document.getElementById("simLog");
  if (el) sim.ui.logEl = el;
  else {
    el = document.createElement("table");
    el.id="simLogTbl";
    el.innerHTML = "<thead><tr><th colspan='3'>Simulation Log</th></tr>" +
        "<tr><th>Time</th><th>System State</th>" +
        "<th>Future Events</th></tr></thead>";
    document.body.appendChild( el);
    sim.ui.logEl = dom.createElement("tbody",{id:"simLog"});
    el.appendChild( sim.ui.logEl);
    sim.ui.logEl.parentNode.style.display = "none";
  }
  el.style.overflowX = "auto";  // horizontal scrolling
  // hide UI components that are not relevant for backend simulations
  if (!oes.ui.fullUI) {
    el.style.display = "none";
    document.forms["sim"].elements["stop"].style.display = "none";
    document.forms["sim"].elements["continue"].style.display = "none";
  }
  oes.ui.createPageFooter();
};
/*******************************************************
 Reset front-end simulation environment
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.reset = function () {
  // display/hide UI panels
  document.forms["scenario"].style.display = "block";
  document.forms["sim"].style.display = "none";
  if (document.forms["expost-statistics"]) {
    document.forms["expost-statistics"].style.display = "none";
  }
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = false;
  document.forms["sim"].elements["continue"].disabled = false;
  // reset simulation log table
  sim.ui.logEl.parentNode.style.display = "none";
  sim.ui.logEl.innerHTML = "";
};
/*******************************************************
 Update Simulation UI on Stop
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.updateUiOnStop = function () {
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = true;
  document.forms["sim"].elements["continue"].disabled = false;
  document.forms["sim"].elements["restart"].disabled = false;
};
/*******************************************************
 Update Simulation UI on Simulation End
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.updateUiOnSimulationEnd = function () {
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = true;
  document.forms["sim"].elements["continue"].disabled = true;
  document.forms["sim"].elements["restart"].disabled = false;
  if (sim.model.statistics) {
    document.forms["expost-statistics"].style.display = "block";
    oes.ui.showExPostStatistics();
  }
};
/*******************************************************
 Show Ex-Post Statistics
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.showExPostStatistics = function () {
  var statistics = sim.model.statistics,
      chart=null, displayStr="",
      showTimeSeries=false,
      height=0, minusX=0, minusY= 0,
      width = sim.scenario.simulationEndTime,
      chartLabels = [];
  var chartSeries = [], dataT = [];
  // determine maximum time series value
  Object.keys( statistics).forEach( function (varName) {
    if (statistics[varName].showTimeSeries) {
      showTimeSeries = true;
      if (sim.timeIncrement !== undefined) {  // fixed-increment time progression
        height = Math.max( height, Array.max( sim.stat.timeSeries[varName]));
      } else {  // next-event time progression
        height = Math.max( height, Array.max( sim.stat.timeSeries[varName][1]));
      }
    }
  });
  height += height * 0.05;
  minusX = -width/20;
  minusY = -height/15;
  Object.keys( statistics).forEach( function (varName) {
    var lbl = statistics[varName].label,
        decPl = 2,  // default
        i=0, n=0,
        legendLabel = '';
    var dataY=[];
    if (lbl) {
      if (statistics[varName].showTimeSeries) {
        legendLabel = statistics[varName].label || varName;
        if (statistics[varName].unit)
          legendLabel += " (" + statistics[varName].unit + ")";
        chartLabels.push(legendLabel);
        if (sim.timeIncrement) {  // fixed-increment time progression
          dataY = sim.stat.timeSeries[varName];
          width = dataY.length;
          n = dataY.length;
          dataT = [];
          for (i=0; i < n; i++) {
            dataT.push(i * sim.timeIncrement * oes.stat.timeSeriesCompressionSteps);
          }
        } else {  // next-event time progression
          dataT = sim.stat.timeSeries[varName][0];
          dataY = sim.stat.timeSeries[varName][1];
          n = dataT.length;
          width = dataT[n-1];  // simulation end time
        }
        chartSeries.push({name: legendLabel, data: dataY});
      } else {
        if (!statistics[varName].isIntegerType) {
          if (statistics[varName].decimalPlaces) decPl =statistics[varName].decimalPlaces;
          displayStr = sim.stat[varName].toFixed( decPl);
        } else displayStr = String( sim.stat[varName]);
        if (statistics[varName].unit) displayStr += " " + statistics[varName].unit;
        document.forms["expost-statistics"].elements[varName].value = displayStr;
      }
    }
  });
  // show resource utilization statistics
  if (Object.keys( sim.stat.resUtil).length > 0) {
    document.forms["expost-statistics"].appendChild(
        dom.createElement("h2", {content:"Resource Utilization"})
    );
    Object.keys( sim.stat.resUtil).forEach( function (actT) {
      document.forms["expost-statistics"].appendChild(
          dom.createElement("h3", {content: actT})
      );
      Object.keys( sim.stat.resUtil[actT]).forEach( function (objIdStr) {
        //console.log(objIdStr +": "+ sim.stat.resUtil[actT][objIdStr]/sim.time);
        var objName = sim.objects[objIdStr].name || objIdStr,
            contEl = dom.createElement("div", {classValues:"I-O-field"}),
            resUtil = Math.round( sim.stat.resUtil[actT][objIdStr]/sim.time * 10000) / 100;
        contEl.appendChild( dom.createLabeledOutputField({ name: objIdStr,
            labelText: objName, value: String( resUtil) + " %"}));
        document.forms["expost-statistics"].appendChild( contEl);
      });
    });
  }
  if (showTimeSeries) {
    chart = new Chartist.Line('#time-series-chart', {
        labels: dataT,
        series: chartSeries
      }, {
        showPoint: false,
        lineSmooth: true,
        showArea: true,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            var interval = parseInt(dataT.length / 10);
            return index % interval === 0 ? value : null;
          }
        },
        axisY: { offset: 60},
        plugins: [
          Chartist.plugins.legend() // used to display chart legend
        ]}
    );
  }
};


/*******************************************************
 UI for defining the initial state
 *******************************************************/
/**
 * Set up UI for defining the objects of the initial state
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupInitialStateObjectsUI = function (parentEl) {
  var objTypes = sim.model.objectTypes.concat( oes.predefinedObjectTypes);  // an array
  var uiPanelEl = dom.createExpandablePanel({id:"InitialStateObjectsUI",
          heading:"Initial State"});
  var mainContentEl = uiPanelEl.lastElementChild;
  sim.scenario.initialStateUI = sim.scenario.initialStateUI || {};
  // create a ClassPopulationWidget for each object type
  objTypes.forEach( function (className) {
    var editProps=[], classPopWidget=null,
        Class = cLASS[className];
    if (!Class.instances || Object.keys( Class.instances).length === 0) return;
    if (sim.scenario.initialStateUI &&
        sim.scenario.initialStateUI.editableProperties &&
        sim.scenario.initialStateUI.editableProperties[className]) {
      editProps = sim.scenario.initialStateUI.editableProperties[className];
      classPopWidget = oBJECTvIEW.createClassPopulationWidget( Class, editProps);
    } else {
      classPopWidget = oBJECTvIEW.createClassPopulationWidget( Class);
    }
    mainContentEl.appendChild( classPopWidget);
  });
  sim.scenario.initialStateUI.userActions = {
    "applyChanges": function () {
      sim.updateInitialStateObjects();
      sim.setupInitialState();
      if (sim.scenario.visualize) {
        oes.ui.resetCanvas();
        oes.ui.visualizeStep();  // visualize initial state
      }
    }
  };
  sim.scenario.initialStateUI.userActions["applyChanges"].label = "Apply changes";
  // create buttons for userActions
  mainContentEl.appendChild( oBJECTvIEW.createUiElemsForUserActions(
      sim.scenario.initialStateUI.userActions
  ));
  parentEl.appendChild( uiPanelEl);
};
/*******************************************************
 UI for Space Definition
 *******************************************************/
/**
 * Set up space definition UI
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupSpaceDefUI = function (parentEl) {
  var uiPanelEl = dom.createExpandablePanel({id:"spaceUI", heading:"Space"});
  var mainContentEl = uiPanelEl.lastElementChild;
  parentEl.appendChild( uiPanelEl);
  sim.ui["space"] = new oBJECTvIEW({
    modelObject: sim.model.space,
    fields: [["xMax", "yMax", "zMax"].slice(0,
        oes.space.dimensions[sim.model.space.type])],
    suppressNoValueFields: false,
    userActions: {
      "applyChanges": function () {
        sim.updateInitialStateObjects();
        oes.ui.resetCanvas();
        // visualize initial state (at start of step 0)
        if (sim.scenario.visualize) oes.ui.visualizeStep();
      }
    }
  });
  sim.ui["space"].userActions["applyChanges"].label = "Apply changes";
  // render view and store its data binding
  sim.ui["space"].dataBinding = sim.ui["space"].render( mainContentEl);
};
/*******************************************************
 Set up the Visualization
 *******************************************************/
oes.ui.setupVisualization = function () {
  if (sim.model.space.type) oes.ui.setupSpaceView();
  else if (sim.scenario.observationUI.type) {  // visualizing a non-spatial  model
    switch (sim.scenario.observationUI.type) {
      case "SVG":
        oes.ui.setupCanvas = oes.ui.vis.SVG.setup;
        oes.ui.resetCanvas = oes.ui.vis.SVG.reset;
        oes.ui.visualizeStep = oes.ui.vis.SVG.visualizeStep;
        break;
      default:
        console.log("Invalid visualization type: "+ sim.scenario.observationUI.visualType);
        sim.scenario.visualize = false;
    }
  }
  else sim.scenario.visualize = false;
  if (sim.scenario.visualize) oes.ui.setupCanvas();

}
/*******************************************************
 Set up the Space Visualization
 *******************************************************/
oes.ui.setupSpaceView = function () {
  if (sim.model.space.type === undefined) throw "No space type defined in *setupSpaceView*";
  switch (sim.model.space.type) {
    // TODO: use (detect?) correct references methods, when other than the DOM
    // visualization "modules" are implemented for IntegerGrid case.
  case "IntegerGrid":
    switch (sim.scenario.observationUI.spaceView.type) {
    case "threeDim":
      oes.ui.setupCanvas = oes.ui.space.threeDim.Babylon.setup;
      oes.ui.resetCanvas = oes.ui.space.threeDim.Babylon.reset;
      oes.ui.visualizeStep = oes.ui.space.threeDim.Babylon.render;
      break;
    default:
      oes.ui.setupCanvas = oes.ui.space.grid.setup;
      oes.ui.resetCanvas = oes.ui.space.grid.reset;
      oes.ui.visualizeStep = oes.ui.space.grid.i.dom.renderIntegerGrid;
    }
   break;
  // TODO: use (detect?) correct references methods, when other than the DOM
  // visualization "modules" are implemented for ObjectGrid case.
  case "ObjectGrid":
    oes.ui.setupCanvas = oes.ui.space.grid.o.dom.setupObjectGrid;
    oes.ui.resetCanvas = oes.ui.space.grid.reset;
    oes.ui.visualizeStep = oes.ui.space.grid.o.dom.renderObjectGrid;
    break;
  case "1D":
    switch (sim.scenario.observationUI.spaceView.type) {
    case "oneDimSVG":
      oes.ui.setupCanvas = oes.ui.space.oneDim.SVG.setup;
      oes.ui.resetCanvas = oes.ui.space.oneDim.SVG.reset;
      oes.ui.visualizeStep = oes.ui.space.oneDim.SVG.renderSimState;
      break;
    case "threeDim":
      oes.ui.setupCanvas = oes.ui.space.threeDim.Babylon.setup;
      oes.ui.resetCanvas = oes.ui.space.threeDim.Babylon.reset;
      oes.ui.visualizeStep = oes.ui.space.threeDim.Babylon.render;
      break;
    // defaults to oneDimSVG visualization
    default:
      oes.ui.setupCanvas = oes.ui.space.oneDim.SVG.setup;
      oes.ui.resetCanvas = oes.ui.space.oneDim.SVG.reset;
      oes.ui.visualizeStep = oes.ui.space.oneDim.SVG.renderSimState;
    }
    break;
  case "2D":
    oes.ui.setupCanvas = oes.ui.space.twoDim.Phaser.setup;
    oes.ui.resetCanvas = oes.ui.space.twoDim.Phaser.reset;
    oes.ui.visualizeStep = oes.ui.space.twoDim.Phaser.render;
    break;
  case "3D":
    // TODO: complete when a 3D space is supported.
    break;
  }
};

//------------------------------------------------------------------------------------------
//TODO: May be dropped?
/**
 * Create a view model for a "model object" and render a corresponding UI panel.
 * Like for model classes, also for model objects a model-based UI can be generated.
 * A model object has an "objectName" attribute and a "properties" attribute that
 * maps property names to property declarations. If there is a pre-defined view
 * for the given model object, it is used as the basis for the UI generation,
 * otherwise a default UI is generated.
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.createViewModelBasedUI = function (o) {
  var modObjView=null, dataBinding={};
  if (oes.ui[o.objectName+"View"]) {
    modObjView = oes.ui[o.objName+"View"];  // pre-defined view
  } else {  // ad-hoc view
    modObjView = new oBJECTvIEW({modelObject:o, suppressNoValueFields: true});
  }
  // render view
  dataBinding = modObjView.render();
  return dataBinding;
};

/*====================================================================================
    S V G
 ==================================================================================== */
oes.ui.vis.SVG.setup = function (containerEl) {
  var obsUI = sim.scenario.observationUI,
      fixedElems = obsUI.fixedElements,
      objViews = obsUI.objectViews,
      canvasWidth = obsUI.canvas.width || 600,
      canvasHeight = obsUI.canvas.height || 400,
      canvasSvgEl = svg.createSVG({id:"canvasSVG",
          width: canvasWidth, height: canvasHeight});
  var defsEl = svg.createDefs();
  // define SVG canvas
  sim.visualEl = dom.createElement("div",{id:"visCanvas", classValues:"uiBlock"});
  if (obsUI.canvas.style) sim.visualEl.style = obsUI.canvasStyle;
  sim.visualEl.appendChild( canvasSvgEl);
  canvasSvgEl.appendChild( defsEl);
  document.body.appendChild( sim.visualEl);
  if (fixedElems) {  // render fixed elements
    Object.keys( fixedElems).forEach( function (id) {
      var el=null;
      el = oes.ui.vis.SVG.createShapeFromDefRec( fixedElems[id]);
      canvasSvgEl.appendChild( el);
    });
  }
  if (objViews) {  // render initial object views
    Object.keys( sim.objects).forEach( function (id) {
      var el=null, shapeGroupEl=null, fp=null,
          obj = sim.objects[id],
          objView = objViews[id] || objViews[obj.name] || objViews[obj.constructor.Name];
      if (objView) {
        if (!Array.isArray( objView)) {  // single vis item definition record
          if (objView.shapeName) {
            if (objView.fillPatternImage) {
              fp = objView.fillPatternImage;
              if (!fp.file.includes("/")) {
                fp.file = oes.defaults.imgFolder + fp.file;
              }
              el = svg.createImageFillPattern( fp.id, fp.file);
              defsEl.appendChild( el);
              objView.style = "fill: url(#" + fp.id + ");" + objView.style;
            }
            el = svg.createShapeFromDefRec( objView, obj);  // cannot be "image"
            objView.element = el;
            canvasSvgEl.appendChild( el);
          } else {  // objView maps enum attribs to lists of visualization items
            Object.keys( objView).forEach( function (key) {
              var enumIndex = 0, currentEnumViewDefRec = [];
              if (key !== "object" && key !== "element") {  // ommit special view fields
                enumIndex = obj[key];  // key is enum attr name
                currentEnumViewDefRec = objView[key][enumIndex-1];
                objView[key].forEach( function (shDefRec) {
                  var el = oes.ui.vis.SVG.createShapeFromDefRec( shDefRec, obj);
                  el.style.display = "none";
                  shDefRec.element = el;
                  canvasSvgEl.appendChild( el);
                  if (shDefRec.canvasBackgroundColor) {
                    sim.visualEl.style.backgroundColor = shDefRec.canvasBackgroundColor;
                  }
                });
                objView[key].element = currentEnumViewDefRec.element;
                currentEnumViewDefRec.element.style.display = "block";
              }
            });
          }
        } else {  // objView is a list of vis item definition records
          objView.elements = [];
          shapeGroupEl = svg.createGroup();
          objView.forEach( function (objViewItem) {
            var txt="";
            if (objViewItem.shapeName) {
              if (objViewItem.fillPatternImage) {
                fp = objViewItem.fillPatternImage;
                if (!fp.file.includes("/")) {
                  fp.file = oes.defaults.imgFolder + fp.file;
                }
                el = svg.createImageFillPattern( fp.id, fp.file);
                defsEl.appendChild( el);
                objViewItem.style = "fill: url(#" + fp.id + ");" + objViewItem.style;
              }
              el = svg.createShape( objViewItem.shapeName,
                  objViewItem.shapeAttributes, objViewItem.style, obj);
            } else {  // objViewItem defines a text element
              if (typeof objViewItem.text === "function") txt = objViewItem.text( obj);
              else txt = objViewItem.text;
              el = svg.createText( objViewItem.x, objViewItem.y, txt, objViewItem.style)
            }
            objView.elements.push( el);
            shapeGroupEl.appendChild( el);
          });
          canvasSvgEl.appendChild( shapeGroupEl);
        }
        objView.object = obj;
      }
    });
  }
};
oes.ui.vis.SVG.reset = function () {
  oes.ui.vis.SVG.visualizeStep();  //TODO: replace with real reset code
};
oes.ui.vis.SVG.visualizeStep = function () {
  var obsUI = sim.scenario.observationUI,
      objViews = obsUI.objectViews;
  Object.keys( objViews).forEach( function (viewId) {
    var itemDefRec={}, shAttribs=[], el=null, i=0, val,
        objView = objViews[viewId];
    if (!Array.isArray( objView)) {  // single item view
      if (objView.shapeName) {
        el = objView.element;
        shAttribs = objView.shapeAttributes;
        Object.keys( shAttribs).forEach( function (attrName) {
          var val;
          // only expression-valued shape attributes need to be updated
          if (typeof shAttribs[attrName] === "function") {
            val = shAttribs[attrName]( objView.object);
            switch (attrName) {
            case "textContent":
              el.textContent = val;
              break;
            case "file":
              el.setAttributeNS( svg.XLINK_NS, "href", oes.defaults.imgFolder + val);
              break;
            default:
              el.setAttribute( attrName, val);
              break;
            }
          }
        });
      } else {  // objView maps enum attribs to lists of vis item def rec
        Object.keys( objView).forEach( function (key) {
          var enumIndex=0, currentEnumViewDefRec = {};
          // exclude properties that objView may also contain
          if (key !== "object" && key !== "element") {
            enumIndex = objView.object[key];
            if (Number.isInteger( enumIndex) && Array.isArray( objView[key]) &&
                enumIndex >= 1 && enumIndex <= objView[key].length) {
              currentEnumViewDefRec = objView[key][enumIndex-1];
              // hide previous enum view
              objView[key].element.style.display = "none";
              // display current enum view
              currentEnumViewDefRec.element.style.display = "block";
              // store current enum view element
              objView[key].element = currentEnumViewDefRec.element;
              if (currentEnumViewDefRec.canvasBackgroundColor) {
                sim.visualEl.style.backgroundColor = currentEnumViewDefRec.canvasBackgroundColor;
              }
            }
          }
        });
      }
    } else {  // objView is a list of view item definition records
      for (i=0; i < objView.length; i++) {
        itemDefRec = objView[i];
        el = objView.elements[i];
        if (itemDefRec.shapeName) {
          shAttribs = itemDefRec.shapeAttributes;
          Object.keys( shAttribs).forEach( function (attrName) {
            if (typeof shAttribs[attrName] === "function") {
              val = shAttribs[attrName]( objView.object);
              switch (attrName) {
              case "textContent":
                el.textContent = val;
                break;
              case "file":
                if (!val.includes("/")) {
                  val = oes.defaults.imgFolder + val;
                }
                el.setAttributeNS( svg.XLINK_NS, "href", val);
                break;
              default:
                el.setAttribute( attrName, val);
                break;
              }
            }
          });
        }
      }
    }
  });
};
oes.ui.vis.SVG.createShapeFromDefRec = function (shDefRec) {
  var fn = shDefRec.shapeAttributes.file;
  if (fn && !fn.includes("/")) {
    shDefRec.shapeAttributes.file = oes.defaults.imgFolder + fn;
  }
  return svg.createShapeFromDefRec( shDefRec);
};

/*******************************************************
 Set up the User Interaction Elements
 *******************************************************/
oes.ui.setupUserInteraction = function () {
  sim.ui.userInteractions = sim.ui.userInteractions || {};
  sim.currentEvents = {};  // map of current events by type
  Object.keys( sim.scenario.userInteractions).forEach( function (trigEvtTypeName) {
    var uiDefRec = sim.scenario.userInteractions[trigEvtTypeName],
        uiContainerEl=null, followupEvents=[],
        title = "";
    uiDefRec.inputFieldValues = {};
    uiDefRec.userActions = {
      "continue": function () {
        var inpFldValues={};
        Object.keys( uiDefRec.inputFields).forEach( function (inpFldName) {
          inpFldValues[inpFldName] = uiDefRec.inputFieldValues[inpFldName];
        });
        uiDefRec.domElem.style.display = "none";
        followupEvents = sim.currentEvents[trigEvtTypeName].onEvent( inpFldValues);
        sim.runStep( followupEvents);  // restart simulator
      }
    };
    uiDefRec.userActions["continue"].label = "Continue";
    title = uiDefRec.title;
    delete uiDefRec.title;
    uiContainerEl = oBJECTvIEW.createUiFromViewModel( uiDefRec);  // create form element
    uiContainerEl.querySelectorAll("input")[0].setAttribute("autofocus","true");
    uiDefRec.domElem = dom.createDraggableModal({fromElem: uiContainerEl,
        title:title, classValues:"action-required"});
/*
    footerEl = document.querySelector("html>body>footer");
    if (footerEl) {
      document.body.insertBefore( uiContainerEl, footerEl);
    } else {
      document.body.appendChild( uiContainerEl);
    }
*/
    uiDefRec.domElem.style.display = "none";
  })
};
/*******************************************************
 Set up the Event Appearances (Sound + Animations)
 *******************************************************/
oes.ui.setupEventAppearances = function () {
  var eventAppearances = sim.scenario.observationUI.eventAppearances;
  sim.ui.animations = sim.ui.animations || {};
  Object.keys( eventAppearances).forEach( function (trigEvtTypeName) {
    var evtAppearDefRec = eventAppearances[trigEvtTypeName],
        evtView = evtAppearDefRec.view,
        domElem=null, animation=null, timingDefRec={};
    if (evtView.imageFile) {
      domElem = document.createElement("img");
      if (!evtView.imageFile.includes("/")) {
        domElem.src = oes.defaults.imgFolder + evtView.imageFile;
      } else {
        domElem.src = evtView.imageFile;
      }
      if (evtView.style) domElem.style = evtView.style;
      sim.visualEl.appendChild( domElem);
    } else {
      domElem = evtView.domElem();
    }
    timingDefRec.duration = evtView.duration || 1000;
    if (evtView.iterations) timingDefRec.iterations = evtView.iterations;
    if (evtView.fill) timingDefRec.fill = evtView.fill;
    animation = domElem.animate( evtView.keyframes, timingDefRec);
    animation.pause();  // do not yet start the animation
    sim.ui.animations[trigEvtTypeName] = animation;  // store the animation handle
  });
};