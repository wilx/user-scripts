// ==UserScript==
// @name        hyphenator-for-czech-language
// @description Hyphenator for news sitez in Czech
// @version     1.0.179
// @author      wilx
// @homepage    https://github.com/wilx/user-scripts/hyphenator-for-czech-language
// @match       *://www.ceska-justice.cz/*
// @match       *://www.zdravotnickydenik.cz/*
// @match       *://*.ihned.cz/*
// @match       *://ihned.cz/*
// @match       *://*.hn.cz/*
// @match       *://hn.cz/*
// @match       *://*.ihned.news/*
// @match       *://ihned.news/*
// @match       *://*.hn.news/*
// @match       *://hn.news/*
// @match       *://*.aktualne.cz/*
// @match       *://www.ceskenoviny.cz/*
// @match       *://*.idnes.cz/*
// @match       *://*.reflex.cz/*
// @match       *://*.respekt.cz/*
// @match       *://*.ceskatelevize.cz/*
// @match       *://*.seznam.cz/*
// @match       *://*.seznamzpravy.cz/*
// @match       *://*.lidovky.cz/*
// @match       *://svobodneforum.cz/*
// @match       *://*.rozhlas.cz/*
// @match       *://mediahub.cz/*
// @match       *://*.novinky.cz/*
// @match       *://news.google.com/*
// @match       *://*.info.cz/*
// @match       *://*.tyden.cz/*
// @match       *://cs.wikipedia.org/*
// @match       *://www.echo24.cz/*
// @match       *://echo24.cz/*
// @match       *://*.parlamentnilisty.cz/*
// @match       *://*.forum24.cz/*
// @match       *://forum24.cz/*
// @match       *://*.euro.cz/*
// @match       *://euro.cz/*
// @match       *://*.zpovednice.cz/*
// @match       *://zpovednice.cz/*
// @match       *://*.e15.cz/*
// @match       *://e15.cz/*
// @match       *://*.neovlivni.cz/*
// @match       *://neovlivni.cz/*
// @match       *://www.sysifos.cz/*
// @match       *://*.denikreferendum.cz/*
// @match       *://denikreferendum.cz/*
// @match       *://*.neviditelnypes.lidovky.cz/*
// @match       *://neviditelnypes.lidovky.cz/*
// @match       *://*.denik.cz/*
// @match       *://denik.cz/*
// @match       *://*.irozhlas.cz/*
// @match       *://irozhlas.cz/*
// @match       *://*.epravo.cz/*
// @match       *://epravo.cz/*
// @match       *://www.ahaonline.cz/*
// @match       *://www.christnet.eu/*
// @match       *://tn.nova.cz/*
// @match       *://www.autoforum.cz/*
// @downloadURL https://github.com/wilx/user-scripts/raw/master/hyphenator-for-czech-language/output/hyphenator-for-czech-language.user.js
// @grant       none
// @namespace   https://github.com/wilx/user-scripts/hyphenator-for-czech-language
// @noframes
// @run-at      document-end
// @updateURL   https://github.com/wilx/user-scripts/raw/master/hyphenator-for-czech-language/output/hyphenator-for-czech-language.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9306
(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ },

/***/ 3506
(module, __unused_webpack_exports, __webpack_require__) {


var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ },

/***/ 7080
(module, __unused_webpack_exports, __webpack_require__) {


var has = (__webpack_require__(4402).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ },

/***/ 3463
(module) {


var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'string') return argument;
  throw new $TypeError('Argument is not a string');
};


/***/ },

/***/ 679
(module, __unused_webpack_exports, __webpack_require__) {


var isPrototypeOf = __webpack_require__(1625);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ },

/***/ 3972
(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (argument === undefined || isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object or undefined');
};


/***/ },

/***/ 8551
(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ },

/***/ 4154
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
module.exports = function (argument) {
  if (classof(argument) === 'Uint8Array') return argument;
  throw new $TypeError('Argument is not an Uint8Array');
};


/***/ },

/***/ 7811
(module) {


// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ },

/***/ 7394
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var uncurryThisAccessor = __webpack_require__(6706);
var classof = __webpack_require__(2195);

var ArrayBuffer = globalThis.ArrayBuffer;
var TypeError = globalThis.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = ArrayBuffer && uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ },

/***/ 3238
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var NATIVE_ARRAY_BUFFER = __webpack_require__(7811);
var arrayBufferByteLength = __webpack_require__(7394);

var DataView = globalThis.DataView;

module.exports = function (O) {
  if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
  try {
    // eslint-disable-next-line no-new -- thrower
    new DataView(O);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ },

/***/ 5169
(module, __unused_webpack_exports, __webpack_require__) {


var isDetached = __webpack_require__(3238);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isDetached(it)) throw new $TypeError('ArrayBuffer is detached');
  return it;
};


/***/ },

/***/ 4644
(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_ARRAY_BUFFER = __webpack_require__(7811);
var DESCRIPTORS = __webpack_require__(3724);
var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var hasOwn = __webpack_require__(9297);
var classof = __webpack_require__(6955);
var tryToString = __webpack_require__(6823);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineBuiltInAccessor = __webpack_require__(2106);
var isPrototypeOf = __webpack_require__(1625);
var getPrototypeOf = __webpack_require__(2787);
var setPrototypeOf = __webpack_require__(2967);
var wellKnownSymbol = __webpack_require__(8227);
var uid = __webpack_require__(3392);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = globalThis.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = globalThis.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (globalThis[NAME]) {
    createNonEnumerableProperty(globalThis[NAME].prototype, TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ },

/***/ 5370
(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ },

/***/ 7957
(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(6080);
var uncurryThis = __webpack_require__(9504);
var IndexedObject = __webpack_require__(7055);
var toObject = __webpack_require__(8981);
var toPropertyKey = __webpack_require__(6969);
var lengthOfArrayLike = __webpack_require__(6198);
var objectCreate = __webpack_require__(2360);
var arrayFromConstructorAndList = __webpack_require__(5370);

var $Array = Array;
var push = uncurryThis([].push);

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
};


/***/ },

/***/ 9617
(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ },

/***/ 9213
(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(6080);
var IndexedObject = __webpack_require__(7055);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var arraySpeciesCreate = __webpack_require__(1469);
var createProperty = __webpack_require__(4659);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ },

/***/ 4527
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ },

/***/ 7433
(module, __unused_webpack_exports, __webpack_require__) {


var isArray = __webpack_require__(4376);
var isConstructor = __webpack_require__(3517);
var isObject = __webpack_require__(34);
var wellKnownSymbol = __webpack_require__(8227);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ },

/***/ 1469
(module, __unused_webpack_exports, __webpack_require__) {


var arraySpeciesConstructor = __webpack_require__(7433);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ },

/***/ 1946
(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);
var lengthOfArrayLike = __webpack_require__(6198);
var toObject = __webpack_require__(8981);
var createProperty = __webpack_require__(4659);
var MapHelpers = __webpack_require__(2248);
var iterate = __webpack_require__(6223);

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  index = 0;
  iterate(map, function (value) {
    createProperty(result, index++, value);
  });
  return result;
};


/***/ },

/***/ 2804
(module) {


var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet = commonAlphabet + '+/';
var base64UrlAlphabet = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

module.exports = {
  i2c: base64Alphabet,
  c2i: inverse(base64Alphabet),
  i2cUrl: base64UrlAlphabet,
  c2iUrl: inverse(base64UrlAlphabet)
};


/***/ },

/***/ 6319
(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(8551);
var iteratorClose = __webpack_require__(9539);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ },

/***/ 2195
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ },

/***/ 6955
(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(2195);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ },

/***/ 7740
(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ },

/***/ 2211
(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ },

/***/ 2529
(module) {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ },

/***/ 6699
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ },

/***/ 6980
(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ },

/***/ 4659
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ },

/***/ 2106
(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ },

/***/ 6840
(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ },

/***/ 6279
(module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(6840);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ },

/***/ 9433
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ },

/***/ 3724
(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ },

/***/ 4055
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ },

/***/ 6837
(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ },

/***/ 5002
(module) {


module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ },

/***/ 8727
(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ },

/***/ 2839
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ },

/***/ 9519
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var userAgent = __webpack_require__(2839);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ },

/***/ 6193
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ },

/***/ 6518
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ },

/***/ 9039
(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ },

/***/ 6080
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(7476);
var aCallable = __webpack_require__(9306);
var NATIVE_BIND = __webpack_require__(616);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ },

/***/ 616
(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ },

/***/ 9565
(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ },

/***/ 350
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ },

/***/ 6706
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ },

/***/ 7476
(module, __unused_webpack_exports, __webpack_require__) {


var classofRaw = __webpack_require__(2195);
var uncurryThis = __webpack_require__(9504);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ },

/***/ 9504
(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ },

/***/ 944
(module) {


var $TypeError = TypeError;

module.exports = function (options) {
  var alphabet = options && options.alphabet;
  if (alphabet === undefined || alphabet === 'base64' || alphabet === 'base64url') return alphabet || 'base64';
  throw new $TypeError('Incorrect `alphabet` option');
};


/***/ },

/***/ 7751
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ },

/***/ 1767
(module) {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ },

/***/ 851
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);
var getMethod = __webpack_require__(5966);
var isNullOrUndefined = __webpack_require__(4117);
var Iterators = __webpack_require__(6269);
var wellKnownSymbol = __webpack_require__(8227);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ },

/***/ 81
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var getIteratorMethod = __webpack_require__(851);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ },

/***/ 5966
(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ },

/***/ 3789
(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var call = __webpack_require__(9565);
var toIntegerOrInfinity = __webpack_require__(1291);
var getIteratorDirect = __webpack_require__(1767);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ },

/***/ 4576
(module) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ },

/***/ 9297
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ },

/***/ 421
(module) {


module.exports = {};


/***/ },

/***/ 397
(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);

module.exports = getBuiltIn('document', 'documentElement');


/***/ },

/***/ 5917
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ },

/***/ 7055
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(2195);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ },

/***/ 3167
(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var setPrototypeOf = __webpack_require__(2967);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ },

/***/ 3706
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ },

/***/ 1181
(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(8622);
var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ },

/***/ 4209
(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ },

/***/ 4376
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(2195);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ },

/***/ 1108
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ },

/***/ 4901
(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ },

/***/ 3517
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var classof = __webpack_require__(6955);
var getBuiltIn = __webpack_require__(7751);
var inspectSource = __webpack_require__(3706);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ },

/***/ 2796
(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ },

/***/ 1563
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);
var hasOwn = __webpack_require__(9297);
var isNullOrUndefined = __webpack_require__(4117);
var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);

var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;

module.exports = function (it) {
  if (isNullOrUndefined(it)) return false;
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn(Iterators, classof(O));
};


/***/ },

/***/ 4117
(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ },

/***/ 34
(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ },

/***/ 3925
(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ },

/***/ 6395
(module) {


module.exports = false;


/***/ },

/***/ 757
(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ },

/***/ 507
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ },

/***/ 2652
(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(6080);
var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var isArrayIteratorMethod = __webpack_require__(4209);
var lengthOfArrayLike = __webpack_require__(6198);
var isPrototypeOf = __webpack_require__(1625);
var getIterator = __webpack_require__(81);
var getIteratorMethod = __webpack_require__(851);
var iteratorClose = __webpack_require__(9539);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ },

/***/ 1385
(module, __unused_webpack_exports, __webpack_require__) {


var iteratorClose = __webpack_require__(9539);

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ },

/***/ 9539
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var getMethod = __webpack_require__(5966);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ },

/***/ 9462
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var create = __webpack_require__(2360);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIns = __webpack_require__(6279);
var wellKnownSymbol = __webpack_require__(8227);
var InternalStateModule = __webpack_require__(1181);
var getMethod = __webpack_require__(5966);
var IteratorPrototype = (__webpack_require__(7657).IteratorPrototype);
var createIterResultObject = __webpack_require__(2529);
var iteratorClose = __webpack_require__(9539);
var iteratorCloseAll = __webpack_require__(1385);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (done) return createIterResultObject(undefined, true);
      if (state.inner) try {
        iteratorClose(state.inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (state.openIters) try {
        iteratorCloseAll(state.openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ },

/***/ 684
(module) {


// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ },

/***/ 4549
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ },

/***/ 7657
(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var create = __webpack_require__(2360);
var getPrototypeOf = __webpack_require__(2787);
var defineBuiltIn = __webpack_require__(6840);
var wellKnownSymbol = __webpack_require__(8227);
var IS_PURE = __webpack_require__(6395);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ },

/***/ 6269
(module) {


module.exports = {};


/***/ },

/***/ 6198
(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ },

/***/ 283
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ },

/***/ 2248
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ },

/***/ 6223
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var iterateSimple = __webpack_require__(507);
var MapHelpers = __webpack_require__(2248);

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};


/***/ },

/***/ 741
(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ },

/***/ 2603
(module, __unused_webpack_exports, __webpack_require__) {


var toString = __webpack_require__(655);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ },

/***/ 2360
(module, __unused_webpack_exports, __webpack_require__) {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8551);
var definePropertiesModule = __webpack_require__(6801);
var enumBugKeys = __webpack_require__(8727);
var hiddenKeys = __webpack_require__(421);
var html = __webpack_require__(397);
var documentCreateElement = __webpack_require__(4055);
var sharedKey = __webpack_require__(6119);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ },

/***/ 6801
(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var definePropertyModule = __webpack_require__(4913);
var anObject = __webpack_require__(8551);
var toIndexedObject = __webpack_require__(5397);
var objectKeys = __webpack_require__(1072);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ },

/***/ 4913
(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ },

/***/ 7347
(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ },

/***/ 8480
(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ },

/***/ 3717
(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ },

/***/ 2787
(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ },

/***/ 1625
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ },

/***/ 1828
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ },

/***/ 1072
(module, __unused_webpack_exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ },

/***/ 8773
(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ },

/***/ 2967
(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ },

/***/ 4270
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ },

/***/ 5031
(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ },

/***/ 7750
(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ },

/***/ 9286
(module, __unused_webpack_exports, __webpack_require__) {


var SetHelpers = __webpack_require__(4402);
var iterate = __webpack_require__(8469);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ },

/***/ 3440
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(result) <= otherRec.size) iterateSet(result, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(result, e)) remove(result, e);
  });
  return result;
};


/***/ },

/***/ 4402
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ },

/***/ 8750
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ },

/***/ 4449
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSet = __webpack_require__(8469);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator.iterator, 'normal', false);
  }) !== false;
};


/***/ },

/***/ 3838
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var size = __webpack_require__(5170);
var iterate = __webpack_require__(8469);
var getSetRecord = __webpack_require__(3789);

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ },

/***/ 8527
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var has = (__webpack_require__(4402).has);
var size = __webpack_require__(5170);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);
var iteratorClose = __webpack_require__(9539);

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator.iterator, 'normal', false);
  }) !== false;
};


/***/ },

/***/ 8469
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var iterateSimple = __webpack_require__(507);
var SetHelpers = __webpack_require__(4402);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ },

/***/ 4916
(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var createSetLikeWithInfinitySize = function (size) {
  return {
    size: size,
    has: function () {
      return true;
    },
    keys: function () {
      throw new Error('e');
    }
  };
};

module.exports = function (name, callback) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17 implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      // also covered engines with
      // https://bugs.webkit.org/show_bug.cgi?id=272679
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      if (!callback) return true;
      // early V8 implementation bug
      // https://issues.chromium.org/issues/351332634
      try {
        new Set()[name](createSetLikeWithInfinitySize(-Infinity));
        return false;
      } catch (error) {
        var set = new Set([1, 2]);
        return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
      }
    }
  } catch (error) {
    return false;
  }
};


/***/ },

/***/ 9835
(module) {


// Should get iterator record of a set-like object before cloning this
// https://bugs.webkit.org/show_bug.cgi?id=289430
module.exports = function (METHOD_NAME) {
  try {
    // eslint-disable-next-line es/no-set -- needed for test
    var baseSet = new Set();
    var setLike = {
      size: 0,
      has: function () { return true; },
      keys: function () {
        // eslint-disable-next-line es/no-object-defineproperty -- needed for test
        return Object.defineProperty({}, 'next', {
          get: function () {
            baseSet.clear();
            baseSet.add(4);
            return function () {
              return { done: true };
            };
          }
        });
      }
    };
    var result = baseSet[METHOD_NAME](setLike);

    return result.size === 1 && result.values().next().value === 4;
  } catch (error) {
    return false;
  }
};


/***/ },

/***/ 5170
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThisAccessor = __webpack_require__(6706);
var SetHelpers = __webpack_require__(4402);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ },

/***/ 3650
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ },

/***/ 4204
(module, __unused_webpack_exports, __webpack_require__) {


var aSet = __webpack_require__(7080);
var add = (__webpack_require__(4402).add);
var clone = __webpack_require__(9286);
var getSetRecord = __webpack_require__(3789);
var iterateSimple = __webpack_require__(507);

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ },

/***/ 6119
(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ },

/***/ 7629
(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4576);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.49.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ },

/***/ 5745
(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ },

/***/ 4495
(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(9519);
var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ },

/***/ 5610
(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ },

/***/ 5854
(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(2777);

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ },

/***/ 5397
(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ },

/***/ 1291
(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ },

/***/ 8014
(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ },

/***/ 8981
(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ },

/***/ 2777
(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ },

/***/ 6969
(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ },

/***/ 7650
(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isIterable = __webpack_require__(1563);
var isObject = __webpack_require__(34);

var Set = getBuiltIn('Set');

var isSetLike = function (it) {
  return isObject(it)
    && typeof it.size == 'number'
    && isCallable(it.has)
    && isCallable(it.keys);
};

// fallback old -> new set methods proposal arguments
module.exports = function (it) {
  if (isSetLike(it)) return it;
  return isIterable(it) ? new Set(it) : it;
};


/***/ },

/***/ 2140
(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ },

/***/ 655
(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ },

/***/ 6823
(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ },

/***/ 9948
(module, __unused_webpack_exports, __webpack_require__) {


var arrayFromConstructorAndList = __webpack_require__(5370);
var getTypedArrayConstructor = (__webpack_require__(4644).getTypedArrayConstructor);

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(getTypedArrayConstructor(instance), list);
};


/***/ },

/***/ 3392
(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ },

/***/ 9143
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);
var anObjectOrUndefined = __webpack_require__(3972);
var aString = __webpack_require__(3463);
var hasOwn = __webpack_require__(9297);
var base64Map = __webpack_require__(2804);
var getAlphabetOption = __webpack_require__(944);
var notDetached = __webpack_require__(5169);

var base64Alphabet = base64Map.c2i;
var base64UrlAlphabet = base64Map.c2iUrl;

var SyntaxError = globalThis.SyntaxError;
var TypeError = globalThis.TypeError;
var at = uncurryThis(''.charAt);

var skipAsciiWhitespace = function (string, index) {
  var length = string.length;
  for (;index < length; index++) {
    var chr = at(string, index);
    if (chr !== ' ' && chr !== '\t' && chr !== '\n' && chr !== '\f' && chr !== '\r') break;
  } return index;
};

var decodeBase64Chunk = function (chunk, alphabet, throwOnExtraBits) {
  var chunkLength = chunk.length;

  if (chunkLength < 4) {
    chunk += chunkLength === 2 ? 'AA' : 'A';
  }

  var triplet = (alphabet[at(chunk, 0)] << 18)
    + (alphabet[at(chunk, 1)] << 12)
    + (alphabet[at(chunk, 2)] << 6)
    + alphabet[at(chunk, 3)];

  var chunkBytes = [
    (triplet >> 16) & 255,
    (triplet >> 8) & 255,
    triplet & 255
  ];

  if (chunkLength === 2) {
    if (throwOnExtraBits && chunkBytes[1] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0]];
  }

  if (chunkLength === 3) {
    if (throwOnExtraBits && chunkBytes[2] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0], chunkBytes[1]];
  }

  return chunkBytes;
};

var writeBytes = function (bytes, elements, written) {
  var elementsLength = elements.length;
  for (var index = 0; index < elementsLength; index++) {
    bytes[written + index] = elements[index];
  }
  return written + elementsLength;
};

/* eslint-disable max-statements, max-depth -- TODO */
module.exports = function (string, options, into, maxLength) {
  aString(string);
  anObjectOrUndefined(options);
  var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
  var lastChunkHandling = options ? options.lastChunkHandling : undefined;

  if (lastChunkHandling === undefined) lastChunkHandling = 'loose';

  if (lastChunkHandling !== 'loose' && lastChunkHandling !== 'strict' && lastChunkHandling !== 'stop-before-partial') {
    throw new TypeError('Incorrect `lastChunkHandling` option');
  }

  if (into) notDetached(into.buffer);

  var stringLength = string.length;
  var bytes = into || [];
  var written = 0;
  var read = 0;
  var chunk = '';
  var index = 0;

  if (maxLength) while (true) {
    index = skipAsciiWhitespace(string, index);
    if (index === stringLength) {
      if (chunk.length > 0) {
        if (lastChunkHandling === 'stop-before-partial') {
          break;
        }
        if (lastChunkHandling === 'loose') {
          if (chunk.length === 1) {
            throw new SyntaxError('Malformed padding: exactly one additional character');
          }
          written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        } else {
          throw new SyntaxError('Missing padding');
        }
      }
      read = stringLength;
      break;
    }
    var chr = at(string, index);
    ++index;
    if (chr === '=') {
      if (chunk.length < 2) {
        throw new SyntaxError('Padding is too early');
      }
      index = skipAsciiWhitespace(string, index);
      if (chunk.length === 2) {
        if (index === stringLength) {
          if (lastChunkHandling === 'stop-before-partial') {
            break;
          }
          throw new SyntaxError('Malformed padding: only one =');
        }
        if (at(string, index) === '=') {
          ++index;
          index = skipAsciiWhitespace(string, index);
        }
      }
      if (index < stringLength) {
        throw new SyntaxError('Unexpected character after padding');
      }
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === 'strict'), written);
      read = stringLength;
      break;
    }
    if (!hasOwn(alphabet, chr)) {
      throw new SyntaxError('Unexpected character');
    }
    var remainingBytes = maxLength - written;
    if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
      // special case: we can fit exactly the number of bytes currently represented by chunk, so we were just checking for `=`
      break;
    }

    chunk += chr;
    if (chunk.length === 4) {
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
      chunk = '';
      read = index;
      if (written === maxLength) {
        break;
      }
    }
  }

  return { bytes: bytes, read: read, written: written };
};


/***/ },

/***/ 2303
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);

var Uint8Array = globalThis.Uint8Array;
var SyntaxError = globalThis.SyntaxError;
var min = Math.min;
var stringMatch = uncurryThis(''.match);

module.exports = function (string, into) {
  var stringLength = string.length;
  if (stringLength % 2 !== 0) throw new SyntaxError('String should be an even number of characters');
  var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
  var bytes = into || new Uint8Array(maxLength);
  var segments = stringMatch(string, /.{2}/g);
  var written = 0;
  for (; written < maxLength; written++) {
    var result = +('0x' + segments[written] + '0');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (result !== result) {
      throw new SyntaxError('String should only contain hex characters');
    }
    bytes[written] = result >> 4;
  }
  return { bytes: bytes, read: written << 1 };
};


/***/ },

/***/ 7040
(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ },

/***/ 8686
(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ },

/***/ 8622
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ },

/***/ 8227
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(4576);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ },

/***/ 4114
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ },

/***/ 8111
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var anInstance = __webpack_require__(679);
var anObject = __webpack_require__(8551);
var isCallable = __webpack_require__(4901);
var getPrototypeOf = __webpack_require__(2787);
var defineBuiltInAccessor = __webpack_require__(2106);
var createProperty = __webpack_require__(4659);
var fails = __webpack_require__(9039);
var hasOwn = __webpack_require__(9297);
var wellKnownSymbol = __webpack_require__(8227);
var IteratorPrototype = (__webpack_require__(7657).IteratorPrototype);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ },

/***/ 2489
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);
var createIteratorProxy = __webpack_require__(9462);
var callWithSafeIterationClosing = __webpack_require__(6319);
var IS_PURE = __webpack_require__(6395);
var iteratorClose = __webpack_require__(9539);
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__(684);
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(4549);

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ },

/***/ 7588
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var iterate = __webpack_require__(2652);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var getIteratorDirect = __webpack_require__(1767);
var iteratorClose = __webpack_require__(9539);
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(4549);

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ },

/***/ 7642
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var difference = __webpack_require__(3440);
var fails = __webpack_require__(9039);
var setMethodAcceptSetLike = __webpack_require__(4916);

var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike('difference', function (result) {
  return result.size === 0;
});

var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function () {
  // https://bugs.webkit.org/show_bug.cgi?id=288595
  var setLike = {
    size: 1,
    has: function () { return true; },
    keys: function () {
      var index = 0;
      return {
        next: function () {
          var done = index++ > 1;
          if (baseSet.has(1)) baseSet.clear();
          return { done: done, value: 2 };
        }
      };
    }
  };
  // eslint-disable-next-line es/no-set -- testing
  var baseSet = new Set([1, 2, 3, 4]);
  // eslint-disable-next-line es/no-set-prototype-difference -- testing
  return baseSet.difference(setLike).size !== 3;
});

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  difference: difference
});


/***/ },

/***/ 8004
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var fails = __webpack_require__(9039);
var intersection = __webpack_require__(8750);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('intersection', function (result) {
  return result.size === 2 && result.has(1) && result.has(2);
}) || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ },

/***/ 3853
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isDisjointFrom = __webpack_require__(4449);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isDisjointFrom: isDisjointFrom
});


/***/ },

/***/ 5876
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isSubsetOf = __webpack_require__(3838);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSubsetOf: isSubsetOf
});


/***/ },

/***/ 2475
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var isSupersetOf = __webpack_require__(8527);
var setMethodAcceptSetLike = __webpack_require__(4916);

var INCORRECT = !setMethodAcceptSetLike('isSupersetOf', function (result) {
  return !result;
});

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSupersetOf: isSupersetOf
});


/***/ },

/***/ 5024
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var symmetricDifference = __webpack_require__(3650);
var setMethodGetKeysBeforeCloning = __webpack_require__(9835);
var setMethodAcceptSetLike = __webpack_require__(4916);

var FORCED = !setMethodAcceptSetLike('symmetricDifference') || !setMethodGetKeysBeforeCloning('symmetricDifference');

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  symmetricDifference: symmetricDifference
});


/***/ },

/***/ 1698
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var union = __webpack_require__(4204);
var setMethodGetKeysBeforeCloning = __webpack_require__(9835);
var setMethodAcceptSetLike = __webpack_require__(4916);

var FORCED = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  union: union
});


/***/ },

/***/ 9577
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(4644);
var isBigIntArray = __webpack_require__(1108);
var lengthOfArrayLike = __webpack_require__(6198);
var toIntegerOrInfinity = __webpack_require__(1291);
var toBigInt = __webpack_require__(5854);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var $RangeError = RangeError;

var PROPER_ORDER = function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// Bug in WebKit. It should truncate a negative fractional index to zero, but instead throws an error
var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && function () {
  try {
    // eslint-disable-next-line es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](-0.5, 1);
  } catch (error) {
    return true;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  var numericValue = isBigIntArray(O) ? toBigInt(value) : +value;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new (getTypedArrayConstructor(O))(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? numericValue : O[k];
  return A;
} }['with'], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);


/***/ },

/***/ 6632
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var $fromBase64 = __webpack_require__(9143);
var anUint8Array = __webpack_require__(4154);

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.setFromBase64 || !function () {
  var target = new Uint8Array([255, 255, 255, 255, 255]);
  try {
    target.setFromBase64('', null);
    return;
  } catch (error) { /* empty */ }
  // Webkit not throw an error on odd length string
  try {
    target.setFromBase64('a');
    return;
  } catch (error) { /* empty */ }
  try {
    target.setFromBase64('MjYyZg===');
  } catch (error) {
    return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
  }
}();

// `Uint8Array.prototype.setFromBase64` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.setfrombase64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  setFromBase64: function setFromBase64(string /* , options */) {
    anUint8Array(this);

    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, this, this.length);

    return { read: result.read, written: result.written };
  }
});


/***/ },

/***/ 4226
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var aString = __webpack_require__(3463);
var anUint8Array = __webpack_require__(4154);
var notDetached = __webpack_require__(5169);
var $fromHex = __webpack_require__(2303);

// Should not throw an error on length-tracking views over ResizableArrayBuffer
// https://issues.chromium.org/issues/454630441
function throwsOnLengthTrackingView() {
  try {
    // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- required for testing
    var rab = new ArrayBuffer(16, { maxByteLength: 1024 });
    // eslint-disable-next-line es/no-uint8array-prototype-setfromhex, es/no-typed-arrays -- required for testing
    new Uint8Array(rab).setFromHex('cafed00d');
  } catch (error) {
    return true;
  }
}

// `Uint8Array.prototype.setFromHex` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.setfromhex
if (globalThis.Uint8Array) $({ target: 'Uint8Array', proto: true, forced: throwsOnLengthTrackingView() }, {
  setFromHex: function setFromHex(string) {
    anUint8Array(this);
    aString(string);
    notDetached(this.buffer);
    var read = $fromHex(string, this).read;
    return { read: read, written: read / 2 };
  }
});


/***/ },

/***/ 9486
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);
var anObjectOrUndefined = __webpack_require__(3972);
var anUint8Array = __webpack_require__(4154);
var notDetached = __webpack_require__(5169);
var base64Map = __webpack_require__(2804);
var getAlphabetOption = __webpack_require__(944);

var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;

var charAt = uncurryThis(''.charAt);

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.toBase64 || !function () {
  try {
    var target = new Uint8Array();
    target.toBase64(null);
  } catch (error) {
    return true;
  }
}();

// `Uint8Array.prototype.toBase64` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.tobase64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  toBase64: function toBase64(/* options */) {
    var array = anUint8Array(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
    var omitPadding = !!options && !!options.omitPadding;
    notDetached(this.buffer);

    var result = '';
    var i = 0;
    var length = array.length;
    var triplet;

    var at = function (shift) {
      return charAt(alphabet, (triplet >> (6 * shift)) & 63);
    };

    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result += at(3) + at(2) + at(1) + at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result += at(3) + at(2) + at(1) + (omitPadding ? '' : '=');
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result += at(3) + at(2) + (omitPadding ? '' : '==');
    }

    return result;
  }
});


/***/ },

/***/ 456
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);
var anUint8Array = __webpack_require__(4154);
var notDetached = __webpack_require__(5169);

var numberToString = uncurryThis(1.1.toString);
var join = uncurryThis([].join);
var $Array = Array;

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.toHex || !(function () {
  try {
    var target = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]);
    return target.toHex() === 'ffffffffffffffff';
  } catch (error) {
    return false;
  }
})();

// `Uint8Array.prototype.toHex` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.tohex
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  toHex: function toHex() {
    anUint8Array(this);
    notDetached(this.buffer);
    var result = $Array(this.length);
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result[i] = hex.length === 1 ? '0' + hex : hex;
    }
    return join(result, '');
  }
});


/***/ },

/***/ 5509
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var aSet = __webpack_require__(7080);
var add = (__webpack_require__(4402).add);

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  addAll: function addAll(/* ...elements */) {
    var set = aSet(this);
    for (var k = 0, len = arguments.length; k < len; k++) {
      add(set, arguments[k]);
    } return set;
  }
});


/***/ },

/***/ 5223
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var aSet = __webpack_require__(7080);
var remove = (__webpack_require__(4402).remove);

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aSet(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ },

/***/ 321
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $difference = __webpack_require__(3440);

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  difference: function difference(other) {
    return call($difference, this, toSetLike(other));
  }
});


/***/ },

/***/ 1927
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var bind = __webpack_require__(6080);
var aSet = __webpack_require__(7080);
var iterate = __webpack_require__(8469);

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (!boundFunction(value, value, set)) return false;
    }, true) !== false;
  }
});


/***/ },

/***/ 1632
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var bind = __webpack_require__(6080);
var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var iterate = __webpack_require__(8469);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      if (boundFunction(value, value, set)) add(newSet, value);
    });
    return newSet;
  }
});


/***/ },

/***/ 4377
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var bind = __webpack_require__(6080);
var aSet = __webpack_require__(7080);
var iterate = __webpack_require__(8469);

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(set, function (value) {
      if (boundFunction(value, value, set)) return { value: value };
    }, true);
    return result && result.value;
  }
});


/***/ },

/***/ 6771
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $intersection = __webpack_require__(8750);

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  intersection: function intersection(other) {
    return call($intersection, this, toSetLike(other));
  }
});


/***/ },

/***/ 2516
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $isDisjointFrom = __webpack_require__(4449);

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isDisjointFrom: function isDisjointFrom(other) {
    return call($isDisjointFrom, this, toSetLike(other));
  }
});


/***/ },

/***/ 8931
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $isSubsetOf = __webpack_require__(3838);

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSubsetOf: function isSubsetOf(other) {
    return call($isSubsetOf, this, toSetLike(other));
  }
});


/***/ },

/***/ 2514
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $isSupersetOf = __webpack_require__(8527);

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSupersetOf: function isSupersetOf(other) {
    return call($isSupersetOf, this, toSetLike(other));
  }
});


/***/ },

/***/ 5694
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var uncurryThis = __webpack_require__(9504);
var aSet = __webpack_require__(7080);
var iterate = __webpack_require__(8469);
var toString = __webpack_require__(655);

var arrayJoin = uncurryThis([].join);
var push = uncurryThis([].push);

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  join: function join(separator) {
    var set = aSet(this);
    var sep = separator === undefined ? ',' : toString(separator);
    var array = [];
    iterate(set, function (value) {
      push(array, value);
    });
    return arrayJoin(array, sep);
  }
});


/***/ },

/***/ 2774
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var bind = __webpack_require__(6080);
var aSet = __webpack_require__(7080);
var SetHelpers = __webpack_require__(4402);
var iterate = __webpack_require__(8469);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      add(newSet, boundFunction(value, value, set));
    });
    return newSet;
  }
});


/***/ },

/***/ 9536
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var aCallable = __webpack_require__(9306);
var aSet = __webpack_require__(7080);
var iterate = __webpack_require__(8469);

var $TypeError = TypeError;

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = aSet(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(set, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});


/***/ },

/***/ 1926
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var bind = __webpack_require__(6080);
var aSet = __webpack_require__(7080);
var iterate = __webpack_require__(8469);

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (boundFunction(value, value, set)) return true;
    }, true) === true;
  }
});


/***/ },

/***/ 4483
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $symmetricDifference = __webpack_require__(3650);

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  symmetricDifference: function symmetricDifference(other) {
    return call($symmetricDifference, this, toSetLike(other));
  }
});


/***/ },

/***/ 6215
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var toSetLike = __webpack_require__(7650);
var $union = __webpack_require__(4204);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  union: function union(other) {
    return call($union, this, toSetLike(other));
  }
});


/***/ },

/***/ 7350
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(4644);
var $filterReject = (__webpack_require__(9213).filterReject);
var fromSameTypeAndList = __webpack_require__(9948);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterReject', function filterReject(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
}, true);


/***/ },

/***/ 3241
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__(4644);
var $group = __webpack_require__(7957);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
exportTypedArrayMethod('groupBy', function groupBy(callbackfn /* , thisArg */) {
  var thisArg = arguments.length > 1 ? arguments[1] : undefined;
  return $group(aTypedArray(this), callbackfn, thisArg, getTypedArrayConstructor);
}, true);


/***/ },

/***/ 7302
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__(4644);
var lengthOfArrayLike = __webpack_require__(6198);
var isBigIntArray = __webpack_require__(1108);
var toAbsoluteIndex = __webpack_require__(5610);
var toBigInt = __webpack_require__(5854);
var toIntegerOrInfinity = __webpack_require__(1291);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var max = Math.max;
var min = Math.min;

// `%TypedArray%.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSpliced
exportTypedArrayMethod('toSpliced', function toSpliced(start, deleteCount /* , ...items */) {
  var O = aTypedArray(this);
  var C = getTypedArrayConstructor(O);
  var len = lengthOfArrayLike(O);
  var actualStart = toAbsoluteIndex(start, len);
  var argumentsLength = arguments.length;
  var k = 0;
  var insertCount, actualDeleteCount, thisIsBigIntArray, convertedItems, value, newLen, A;
  if (argumentsLength === 0) {
    insertCount = actualDeleteCount = 0;
  } else if (argumentsLength === 1) {
    insertCount = 0;
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    insertCount = argumentsLength - 2;
    if (insertCount) {
      convertedItems = new C(insertCount);
      thisIsBigIntArray = isBigIntArray(convertedItems);
      for (var i = 2; i < argumentsLength; i++) {
        value = arguments[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        convertedItems[i - 2] = thisIsBigIntArray ? toBigInt(value) : +value;
      }
    }
  }
  newLen = len + insertCount - actualDeleteCount;
  A = new C(newLen);

  for (; k < actualStart; k++) A[k] = O[k];
  for (; k < actualStart + insertCount; k++) A[k] = convertedItems[k - actualStart];
  for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

  return A;
}, true);


/***/ },

/***/ 5871
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var ArrayBufferViewCore = __webpack_require__(4644);
var arrayFromConstructorAndList = __webpack_require__(5370);
var $arrayUniqueBy = __webpack_require__(1946);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var arrayUniqueBy = uncurryThis($arrayUniqueBy);

// `%TypedArray%.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
  aTypedArray(this);
  return arrayFromConstructorAndList(getTypedArrayConstructor(this), arrayUniqueBy(this, resolver));
}, true);


/***/ },

/***/ 4979
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var getBuiltIn = __webpack_require__(7751);
var createPropertyDescriptor = __webpack_require__(6980);
var defineProperty = (__webpack_require__(4913).f);
var hasOwn = __webpack_require__(9297);
var anInstance = __webpack_require__(679);
var inheritIfRequired = __webpack_require__(3167);
var normalizeStringArgument = __webpack_require__(2603);
var DOMExceptionConstants = __webpack_require__(5002);
var clearErrorStack = __webpack_require__(6193);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/base uri */
/******/ 	(() => {
/******/ 		__webpack_require__.b = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(8111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(2489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(7642);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(8004);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(3853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(5876);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(2475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(5024);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(1698);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(9577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.uint8-array.set-from-base64.js
var es_uint8_array_set_from_base64 = __webpack_require__(6632);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.uint8-array.set-from-hex.js
var es_uint8_array_set_from_hex = __webpack_require__(4226);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.uint8-array.to-base64.js
var es_uint8_array_to_base64 = __webpack_require__(9486);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.uint8-array.to-hex.js
var es_uint8_array_to_hex = __webpack_require__(456);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(5509);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(5223);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(321);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(1927);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(1632);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(4377);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(6771);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(2516);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(8931);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(2514);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(5694);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(2774);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(9536);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(1926);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(4483);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(6215);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.filter-reject.js
var esnext_typed_array_filter_reject = __webpack_require__(7350);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.group-by.js
var esnext_typed_array_group_by = __webpack_require__(3241);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.to-spliced.js
var esnext_typed_array_to_spliced = __webpack_require__(7302);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.unique-by.js
var esnext_typed_array_unique_by = __webpack_require__(5871);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(4979);
;// ./node_modules/hyphenopoly/hyphenopoly.module.js
/**
 * @license MIT
 * Hyphenopoly.module.js 6.1.0 - hyphenation for node
 * ©2026  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */

const decode = (() => {
    const utf16ledecoder = new TextDecoder("utf-16le");
    return (ui16) => {
        return utf16ledecoder.decode(ui16);
    };
})();

/**
 * Create Object without standard Object-prototype
 * @returns {object} empty object
 */
const empty = () => {
    return Object.create(null);
};

const H = empty();

H.supportedLanguages = [
    "af",
    "as",
    "be",
    "bg",
    "bn",
    "ca",
    "cs",
    "cy",
    "da",
    "de",
    "de-x-syllable",
    "el-monoton",
    "el-polyton",
    "en-gb",
    "en-us",
    "eo",
    "es",
    "et",
    "eu",
    "fi",
    "fi-x-school",
    "fo",
    "fr",
    "fur",
    "ga",
    "gl",
    "gu",
    "hi",
    "hr",
    "hsb",
    "hu",
    "hy",
    "ia",
    "id",
    "is",
    "it",
    "ka",
    "kmr",
    "kn",
    "la",
    "lt",
    "lv",
    "mk",
    "ml",
    "mn-cyrl",
    "mr",
    "nb",
    "nl",
    "nn",
    "no",
    "oc",
    "or",
    "pa",
    "pi",
    "pl",
    "pms",
    "pt",
    "rm",
    "ro",
    "ru",
    "sh-cyrl",
    "sh-latn",
    "sk",
    "sl",
    "sq",
    "sr-cyrl",
    "sv",
    "ta",
    "te",
    "th",
    "tk",
    "tr",
    "uk",
    "zh-latn-pinyin"
];

const languages = new Map();

/**
 * Create a Map with a default Map behind the scenes. This mimics
 * kind of a prototype chain of an object, but without the object-
 * injection security risk.
 * @param {Map} defaultsMap - A Map with default values
 * @returns {Proxy} - A Proxy for the Map (dot-notation or get/set)
 */
function createMapWithDefaults(defaultsMap) {
    const userMap = new Map();

    /**
     * The get-trap: get the value from userMap or else from defaults
     * @param {string} key - The key to retrieve the value for
     * @returns {*} Value
     */
    function get(key) {
        return (userMap.has(key))
            ? userMap.get(key)
            : defaultsMap.get(key);
    }

    /**
     * The set-trap: set the value to userMap and don't touch defaults
     * @param {string} key - The key for the value
     * @param {*} value - The value
     * @returns {*} - The value set
     */
    function set(key, value) {
        userMap.set(key, value);
    }
    return new Proxy(defaultsMap, {
        // eslint-disable-next-line jsdoc/require-jsdoc
        "get": (_target, prop) => {
            if (prop === "set") {
                return set;
            }
            if (prop === "get") {
                return get;
            }
            return get(prop);
        }
    });
}

const events = empty();

(() => {
    // Events known to the system
    const definedEvents = new Map();

    /**
     * Create Event Object
     * @param {string} name The Name of the event
     * @param {Function|null} defFunc The default method of the event
     * @param {boolean} cancellable Is the default cancellable
     * @returns {undefined}
     */
    function define(name, defFunc, cancellable) {
        definedEvents.set(name, {
            cancellable,
            "default": defFunc,
            "register": []
        });
    }

    define(
        "error",
        (e) => {
            // eslint-disable-next-line no-console
            console.error(e.msg);
        },
        true
    );

    define(
        "engineReady",
        null,
        false
    );

    /**
     * Dispatch event <name> with arguments <data>
     * @param {string} name The name of the event
     * @param {object|undefined} data Data of the event
     * @returns {undefined}
     */
    function dispatch(name, data) {
        data.defaultPrevented = false;
        // eslint-disable-next-line jsdoc/require-jsdoc
        data.preventDefault = (() => {
            data.defaultPrevented = true;
        });
        definedEvents.get(name).register.forEach((currentHandler) => {
            currentHandler(data);
        });
        if (!data.defaultPrevented && definedEvents.get(name).default) {
            definedEvents.get(name).default(data);
        }
    }

    /**
     * Add EventListender <handler> to event <name>
     * @param {string} name The name of the event
     * @param {Function} handler Function to register
     * @returns {undefined}
     */
    function addListener(name, handler) {
        if (definedEvents.has(name)) {
            definedEvents.get(name).register.push(handler);
        } else {
            events.dispatch(
                "error",
                {"msg": `unknown Event "${name}" discarded`}
            );
        }
    }

    events.dispatch = dispatch;
    events.addListener = addListener;
})();

/**
 * Default loader emits error
 * @returns {null} - there's no default loader
 */
function defaultLoader() {
    events.dispatch("error", {
        "msg": "loader/loaderSync has not been configured."
    });
    return null;
}

const settings = createMapWithDefaults(new Map([
    ["compound", "hyphen"],
    ["exceptions", new Map()],
    ["hyphen", "\u00AD"],
    ["leftmin", 0],
    ["leftminPerLang", new Map()],
    ["loader", defaultLoader],
    ["loaderSync", defaultLoader],
    ["minWordLength", 6],
    ["mixedCase", true],
    ["normalize", false],
    ["orphanControl", 1],
    ["require", []],
    ["rightmin", 0],
    ["rightminPerLang", new Map()],
    ["substitute", new Map()],
    ["sync", false]
]));

/**
 * Create lang Object
 * @param {string} lang The language
 * @returns {object} The newly created lang object
 */
function createLangObj(lang) {
    if (!languages.has(lang)) {
        languages.set(lang, empty());
    }
    return languages.get(lang);
}

/**
 * Setup a language object (lo) and dispatch "engineReady"
 * @param {string} lang The language
 * @param {Function} hyphenateFunction The hyphenateFunction
 * @param {string} alphabet List of used characters
 * @param {number} patternLeftmin leftmin as defined in patterns
 * @param {number} patternRightmin rightmin as defined in patterns
 * @returns {undefined}
 */
function prepareLanguagesObj(
    lang,
    hyphenateFunction,
    alphabet,
    patternLeftmin,
    patternRightmin
) {
    alphabet = alphabet.replace(/\\*-/g, "\\-");
    const lo = createLangObj(lang);
    if (!lo.engineReady) {
        lo.cache = new Map();
        const exc = [];
        if (settings.exceptions.has(lang)) {
            exc.push(...settings.exceptions.get(lang).split(", "));
        }
        if (settings.exceptions.has("global")) {
            exc.push(...settings.exceptions.get("global").split(", "));
        }
        lo.exceptions = new Map(exc.map((e) => {
            return [e.replace(/-/g, ""), e];
        }));

        lo.alphabet = alphabet;
        lo.reNotAlphabet = RegExp(`[^${alphabet}]`, "i");
        lo.lm = Math.max(
            patternLeftmin,
            settings.leftmin,
            settings.leftminPerLang.get(lang) || 0
        );
        lo.rm = Math.max(
            patternRightmin,
            settings.rightmin,
            settings.rightminPerLang.get(lang) || 0
        );
        lo.hyphenate = hyphenateFunction;
        lo.engineReady = true;
    }
    events.dispatch("engineReady", {"msg": lang});
}

/**
 * Setup env for hyphenateFunction
 * @param {object} buf baseData
 * @param {Function} hyphenateFunc hyphenateFunction
 * @returns {Function} hyphenateFunction with closured environment
 */
function encloseHyphenateFunction(buf, hyphenateFunc) {
    const wordStore = new Uint16Array(buf, 0, 64);

    /**
     * The hyphenateFunction that encloses the env above
     * Copies the word to wasm-Memory, calls wasm.hyphenateFunc and reads
     * the hyphenated word from wasm-Memory (eventually replacing hyphenchar)
     * @param {string} word - the word that has to be hyphenated
     * @param {string} hyphencc - the hyphenate character
     * @param {number} leftmin - min number of chars to remain on line
     * @param {number} rightmin - min number of chars to go to new line
     * @returns {string} the hyphenated word
     */
    return ((word, hyphencc, leftmin, rightmin) => {
        wordStore.set([
            ...[...word].map((c) => {
                return c.charCodeAt(0);
            }),
            0
        ]);
        const len = hyphenateFunc(leftmin, rightmin, hyphencc);
        if (len > 0) {
            word = decode(new Uint16Array(buf, 0, len));
        }
        return word;
    });
}

/**
 * Instantiate Wasm Engine
 * @param {string} lang The language
 * @param {ArrayBuffer} wasmdata Uint8Array buffer
 */
function instantiateWasmEngine(lang, wasmdata) {
    /**
     * Register character substitutions in the .wasm-hyphenEngine
     * @param {number} alphalen - The length of the alphabet
     * @param {object} exp - Export-object of the hyphenEngine
     * @returns {number} - The new length of the alphabet
     */
    function registerSubstitutions(alphalen, exp) {
        if (settings.substitute.has(lang)) {
            const subst = settings.substitute.get(lang);
            subst.forEach((substituer, substituted) => {
                const substitutedU = substituted.toUpperCase();
                const substitutedUcc = (substitutedU === substituted)
                    ? 0
                    : substitutedU.charCodeAt(0);
                alphalen = exp.subst(
                    substituted.charCodeAt(0),
                    substitutedUcc,
                    substituer.charCodeAt(0)
                );
            });
        }
        return alphalen;
    }

    /**
     * Instantiate the hyphenEngine
     * @param {WebAssembly.Instance} inst - a wasm instance
     */
    function handleWasm(inst) {
        const exp = inst.exports;
        let alphalen = exp.lct.value;
        alphalen = registerSubstitutions(alphalen, exp);
        prepareLanguagesObj(
            lang,
            encloseHyphenateFunction(
                exp.mem.buffer,
                exp.hyphenate
            ),
            decode(new Uint16Array(exp.mem.buffer, 1664, alphalen)),
            exp.lmi.value,
            exp.rmi.value
        );
    }
    if (settings.sync) {
        const heInstance = new WebAssembly.Instance(
            new WebAssembly.Module(wasmdata)
        );
        handleWasm(heInstance);
    } else {
        WebAssembly.instantiate(wasmdata).then((res) => {
            handleWasm(res.instance);
        });
    }
}

/**
 * Read a .wasm file and call instantiateWasmEngine on success
 * @param {string} lang - The language
 * @returns {undefined}
 */
function loadHyphenEngine(lang) {
    const file = `${lang}.wasm`;
    // eslint-disable-next-line jsdoc/require-jsdoc
    const cb = (err, data) => {
        if (err) {
            events.dispatch("error", {
                "key": lang,
                "msg": `${lang}.wasm not found.`
            });
        } else {
            instantiateWasmEngine(lang, new Uint8Array(data).buffer);
        }
    };

    if (typeof settings.loader !== "function") {
        events.dispatch("error", {
            "msg": "Loader must be a function."
        });
        return;
    }

    if (settings.sync) {
        cb(null, settings.loaderSync(file, new URL('./patterns/', __webpack_require__.b)));
    } else {
        settings.loader(file, new URL('./patterns/', __webpack_require__.b)).then(
            (res) => {
                cb(null, res);
            },
            (err) => {
                cb(err, null);
            }
        );
    }
}

const wordHyphenatorPool = new Map();

/**
 * Factory for hyphenatorFunctions for a specific language and class
 * @param {object} lo Language-Object
 * @param {string} lang The language
 * @returns {Function} The hyphenate function
 */
function createWordHyphenator(lo, lang) {
    if (wordHyphenatorPool.has(lang)) {
        return wordHyphenatorPool.get(lang);
    }

    /**
     * HyphenateFunction for non-compound words
     * @param {string} word The word
     * @returns {string} The hyphenated word
     */
    function hyphenateNormal(word) {
        if (word.length > 61) {
            events.dispatch("error", {"msg": "found word longer than 61 characters"});
        } else if (!lo.reNotAlphabet.test(word)) {
            return lo.hyphenate(
                word,
                settings.hyphen.charCodeAt(0),
                lo.lm,
                lo.rm
            );
        }
        return word;
    }

    /**
     * HyphenateFunction for compound words
     * @param {string} word The word
     * @returns {string} The hyphenated compound word
     */
    function hyphenateCompound(word) {
        let joiner = "-";
        const parts = word.split(joiner).map((p) => {
            if (settings.compound !== "hyphen" &&
                p.length >= settings.minWordLength) {
                return createWordHyphenator(lo, lang)(p);
            }
            return p;
        });
        if (settings.compound !== "auto") {
            // Add Zero Width Space
            joiner += "\u200B";
        }
        return parts.join(joiner);
    }

    /**
     * Checks if a string is mixed case
     * @param {string} s The string
     * @returns {boolean} true if s is mixed case
     */
    function isMixedCase(s) {
        return Array.prototype.map.call(s, (c) => {
            return (c === c.toLowerCase());
        }).some((v, i, a) => {
            return (v !== a[0]);
        });
    }

    /**
     * HyphenateFunction for words (compound or not)
     * @param {string} word The word
     * @returns {string} The hyphenated word
     */
    function hyphenator(word) {
        let hw = lo.cache.get(word);
        if (!hw) {
            if (lo.exceptions.has(word)) {
                hw = lo.exceptions.get(word).replace(
                    /-/g,
                    settings.hyphen
                );
            } else if (!settings.mixedCase && isMixedCase(word)) {
                hw = word;
            } else if (word.includes("-")) {
                hw = hyphenateCompound(word);
            } else {
                hw = hyphenateNormal(word);
            }
            lo.cache.set(word, hw);
        }
        return hw;
    }
    wordHyphenatorPool.set(lang, hyphenator);
    return hyphenator;
}

const orphanController = (() => {
    /**
     * Function template
     * @param {string} ignore unused result of replace
     * @param {string} leadingWhiteSpace The leading whiteSpace
     * @param {string} lastWord The last word
     * @param {string} trailingWhiteSpace The trailing whiteSpace
     * @returns {string} Treated end of text
     */
    function controlOrphans(
        ignore,
        leadingWhiteSpace,
        lastWord,
        trailingWhiteSpace
    ) {
        let h = settings.hyphen;
        if (".\\+*?[^]$(){}=!<>|:-".indexOf(settings.hyphen) !== -1) {
            h = `\\${settings.hyphen}`;
        }
        if (settings.orphanControl === 3 && leadingWhiteSpace === " ") {
            // \u00A0 = no-break space (nbsp)
            leadingWhiteSpace = "\u00A0";
        }
        /* eslint-disable security/detect-non-literal-regexp */
        return leadingWhiteSpace + lastWord.replace(new RegExp(h, "g"), "") + trailingWhiteSpace;
        /* eslint-enable security/detect-non-literal-regexp */
    }
    return controlOrphans;
})();

/**
 * Encloses hyphenateTextFunction
 * @param {string} lang - The language
 * @returns {Function} The hyphenateText-function
 */
function createTextHyphenator(lang) {
    const lo = languages.get(lang);
    const wordHyphenator = (wordHyphenatorPool.has(lang))
        ? wordHyphenatorPool.get(lang)
        : createWordHyphenator(lo, lang);

    /*
     * Transpiled RegExp of
     * /[${alphabet}\p{Letter}-]{${minwordlength},}/gui
     */
    const reWord = RegExp(
        `[${lo.alphabet}a-z\u0300-\u036F\u0483-\u0487\u00DF-\u00F6\u00F8-\u00FE\u0101\u0103\u0105\u0107\u0109\u010D\u010F\u0111\u0113\u0117\u0119\u011B\u011D\u011F\u0123\u0125\u012B\u012F\u0131\u0135\u0137\u013C\u013E\u0142\u0144\u0146\u0148\u014D\u0151\u0153\u0155\u0159\u015B\u015D\u015F\u0161\u0165\u016B\u016D\u016F\u0171\u0173\u017A\u017C\u017E\u017F\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u0219\u021B\u02BC\u0390\u03AC-\u03CE\u03D0\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF\u03F2\u0430-\u044F\u0451-\u045C\u045E\u045F\u0491\u04AF\u04E9\u0561-\u0585\u0587\u0905-\u090C\u090F\u0910\u0913-\u0928\u092A-\u0930\u0932\u0933\u0935-\u0939\u093D\u0960\u0961\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A85-\u0A8B\u0A8F\u0A90\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AE0\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B60\u0B61\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60\u0D61\u0D7A-\u0D7F\u0E01-\u0E2E\u0E30\u0E32\u0E33\u0E40-\u0E45\u10D0-\u10F0\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1E0D\u1E37\u1E41\u1E43\u1E45\u1E47\u1E6D\u1F00-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB2-\u1FB4\u1FB6\u1FB7\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD2\u1FD3\u1FD6\u1FD7\u1FE2-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CC9\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E-]{${settings.minWordLength},}`, "gui"
    );

    /**
     * Hyphenate text
     * @param {string} text The text
     * @returns {string} Hyphenated text
     */
    return ((text) => {
        if (settings.normalize) {
            text = text.normalize("NFC");
        }
        let tn = text.replace(reWord, wordHyphenator);
        if (settings.orphanControl !== 1) {
            tn = tn.replace(
                /(\u0020*)(\S+)(\s*)$/,
                orphanController
            );
        }
        return tn;
    });
}

/**
 * API exposed config
 * @param {object} userConfig - the user supplied configuration
 * @returns {Map} - userConfig complemented with defaults
 */
H.config = ((userConfig) => {
    Object.entries(userConfig).forEach(([key, value]) => {
        switch (key) {
        case "exceptions":
        case "leftminPerLang":
        case "paths":
        case "rightminPerLang":
            Object.entries(value).forEach(([k, v]) => {
                settings.get(key).set(k, v);
            });
            break;
        case "substitute":
            Object.entries(value).forEach(([lang, subst]) => {
                settings.substitute.set(
                    lang,
                    new Map(Object.entries(subst))
                );
            });
            break;
        default:
            settings.set(key, value);
        }
    });
    if (settings.handleEvent) {
        Object.entries(settings.handleEvent).forEach(([name, fn]) => {
            events.addListener(name, fn);
        });
    }
    const result = new Map();
    if (settings.require.length === 0) {
        events.dispatch(
            "error",
            {"msg": "No language has been required. Setup config according to documenation."}
        );
    }
    settings.require.forEach((lang) => {
        if (settings.sync) {
            events.addListener("engineReady", (e) => {
                if (e.msg === lang) {
                    result.set(lang, createTextHyphenator(lang));
                }
            });
        } else {
            const prom = new Promise((resolve, reject) => {
                events.addListener("engineReady", (e) => {
                    if (e.msg === lang) {
                        resolve(createTextHyphenator(lang));
                    }
                });
                events.addListener("error", (e) => {
                    if (e.key === lang) {
                        reject(e.msg);
                    }
                });
            });
            result.set(lang, prom);
        }
        loadHyphenEngine(lang);
    });
    return result;
});

/* harmony default export */ const hyphenopoly_module = (H);

;// ./node_modules/hyphenopoly/patterns/cs.wasm
const cs_namespaceObject = "data:application/wasm;base64,AGFzbQEAAAABGwVgA39/fwF/YAF/AX9gAn9/AGACf38Bf2AAAAMJCAECAQAAAwAEBQMBAAEGEAN/AEECC38AQQMLfwFBAAsHLQYDbG1pAwADcm1pAwEDbGN0AwIFc3Vic3QAAwloeXBoZW5hdGUABgNtZW0CAAgBBwwBAQq0CQgSACAAQfGXAWxB55gBb0H/AXELRAEBfyAAEABBAnQiAigCgAMEQEGACCECA0AgAigCgAMEQCACQQRqIgJBgApOBEAACwwBCwsLIAIgAEEQdCABajYCgAMLVAECfyAAEABBAnQoAoADIgJFBEBB/wEPCyACQRB2IABGBEAgAkH/AXEPCwNAIAEvAYILIABHBEAgAUEEaiIBQYACTgRAQf8BDwsMAQsLIAEvAYALCzQAIAIQAiICQf8BRwRAIAAgAhABIAEEQCABIAIQAQsjAkEBdCAAOwGADSMCQQFqJAILIwILtQECBH4GfyABIQcDQCAIQQJIBEAgACAIaiEAA0AgACAJSgRAIAIgB0gEQEEADwtBwAAgBykDACIDe6drIgsgCWohCSAHQQhqIQcMAQsLIAMhBULBACADe30gACAJIAtra6x9IQYgAyEEA0AgBCAFhCIFQgF8IQQgBkIBfSIGQgBSDQALIAogByABa0EDdCAEeqdrQQFrIgwgCBshCiAIQQFqIQgMAQsLIAwgCmtBAWsgCkEIdGoLUQIBfgF/IAEgAEEGdUEDdGohAwNAIAEgA0gEQCACIAEpAwB7fCECIAFBCGohAQwBCwsgAEE/cSIABH4gAiABKQMAQsAAIACsfYh7fAUgAgunC6AEAQx/QYABQQBBgAL8CwBBAC8BACEIA0AgCARAIAgQAiIFQf8BRgRAQQAPCyADIAU6AIEBIANBAXQgCDsBgAIgA0EBaiIDQQF0LwEAIQgMAQsLIANBAmohDANAIAQgDEgEQCAEIQNBASEHA0AgAyAMSARAAkAgB0HwEkGYHRAEIgVBCHUgB2siByAFQf8BcWohBQNAIAUgB0oEQCAHLQCYHSADLQCAAUcEQCAHQQFqIQcMAgsLCyAFIAdGDQAgB0EDdSIFQQdqIAVBB3FBAXRrLQC4RkEHIAdBB3FrdUEBcQRAIAdBAWpBuMYAEAVB0MsAQc/WABAEIgZBCHVB0MsAEAUhBSAGQf8BcSEGIAVBAXUiCC0A0FYiDUEPcSANQQR2IAVBAXEiCRsgBGohCkEBIQ4DQCAGIA5KBEAgCQR/IAhBAWoiCC0A0FYiDUEEdgUgDUEPcQshBSAJQQFzIQkgBSAKLQDAAUoEQCAKIAU6AMABCyAOQQFqIQ4gCkEBaiEKDAELCwsgB0ECaiEHIANBAWohAwwCCwsLIARBAWohBAwBCwtBACEDIAxBAmsiBCABa0EBayEBA0AgAyAESARAIAMgC2pBAXQgA0EBdC8BgAI7AQAgAyAAQQFrTiABIANOcQRAIAMtAMIBQQFxBEAgC0EBaiILIANqQQF0IAI7AQALCyADQQFqIQMMAQsLIAMgC2pBAXRBADsBACAEIAtqC6QBAQV/QQEhAEHMESEBIwJBAXQkAkEuQQAQAQNAIAFB8BJIBEAgAS8BACECIAEvAQIiAwR/IAMQAgVB/wELIQQgAhACQf8BRwRAIAMgAhACEAEjAiADOwGADQUgBEH/AUYEQCACIAAQASADBEAgAyAAEAELBSACIAAQAQsjAiACOwGADSAAQQFqIQALIwJBAmokAiABQQRqIQEMAQsLIwJBAXUkAgsLqWMBAEGAEQuhY0h5cGhlbmF0aW9uIHBhdHRlcm5zIGZvciBDemVjaApDb3B5cmlnaHQgKEMpIDE5OTUgUGF2ZWwgYGV2ZQ1lawpsaWNlbmNlOiBHUExhAEEAYgBCAGMAQwBkAEQAZQBFAGYARgBnAEcAaABIAGkASQBqAEoAawBLAGwATABtAE0AbgBOAG8ATwBwAFAAcQBRAHIAUgBzAFMAdABUAHUAVQB2AFYAdwBXAHgAWAB5AFkAegBaAOEAwQDpAMkA7QDNAPMA0wD6ANoA/QDdAA0BDAEPAQ4BGwEaAUgBRwFZAVgBYQFgAWUBZAFvAW4BfgF9Af//9/////+////f////7//v////3////f/7v//3///////9////9//////3///3//v//7/////3/6///+////////7//7////////7///v//////v///u3/6//vf////f9/v////v/3/37///3/f399m96bv///9////Lvv/37b9f9fF9fwb7/33u97/9/dfuve///7//v//fhxPj7a/tft//4ZZxZv9a/O/9UeQp+zXP9+29//n/3vr//arxvbCf/7+/f+73//L/9f+/1/37/SVUin7fR3t3fd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FBMTABQDDhwgIAoCHQEPDwEVGyUWDgsJDAUQABQgFBYTJRUEFAEAAQ0BCBMAARUJDyMdIAkAACADCyUJIR0FDiEOHQsUAAEZABkAAAAAAAAAAP7+fgtrhhJD2uzeZn5Qif9Kfn/f/f/7+6ctl4N76Qove3t/7mupV/T3/7H773Kaf/Fe/ZO93Ubvaynnca+kU76oftL+3z/7/ICo2orWc/++9hFUf63Pd0H/L15v/v2q+Z/O/939j1D/AAg499wPduswAAIAAAgAAH9buVcOAWAUf/JfVQEAwH90gfr7qfV/s4vh9wFUsSiAGdnCvD4wgNH75TcU6fv+mMf/Qwrg33v/2nlvhZD6f0MAJoEDUMAiBKv/JIG57xiKO4A19r/n7R4YLojvvycC9wAOALOUKEFeF8SAMwFUQglZoEfcljkxLqfCPr+ABQmbIPPrIvx9KFAJALFv+xsQwQYEFULUcdenhqIZAAGhFwC6i8H62ugCuYEAiMwtWIQAP9FQyQCIvq3fubrWXfuN+vGv//89u/+7SeQHf2UpAUZ5/utv//uIdkCN/OH4+obV/vr3//gX3t90mH/Jz73/j//9//17DD7LGS6qxCjC////MIL96+0Hf+sD3/////+///+df/w6/7//v+////////6v/////9/f/3///91v//9v99++/////v+//97//P///t/7993/3/9/d7j/H/79f//+/////fv///f++/8v///n6/f97997//+///7////3//v///uw////////8/////r//3X///u9M/967/39P/6/////f/7/v/f34/f7////3v3/+////3/bf/3975f//f7/+///fPv7u/+b9/9JTv//3/Xu/////v//////3/9/+/6/////fv/vm//////1///////f/9////bd/1////31/+/+/////3f79dv7fv7////+3////z//3f/v/v/Pvv//f9r/2uv/AAAAAOASAPy2bdu2bdu2bW3btm3btm3bbbtt27Zt27betu3ttt3btm233bZt223bu73ttm3b3ra2bdu2bdu2bbbtbrdt23bbbdu2bdu2bdtve/du22273Xbb3Xbbttt2t+3edtu27e63bW/bu9tub73dtt1tu227tm3bbtv2dtu2bdu27bZt27bttm27227b3W3bbtu2bdtt27bdbdvett3dtm3btm27bdu2u93d27bbu7vdbnfbttu2bdu2t+1t27Ztt23btm1tu23bbtu2bdu27bZt223b7ra7bbvdtm2223bb7W677fd2291t227b27bttm3btm22bdu2bdu2bbbttm3btm3bbdu2bdu2bdvbtm3btm3btm3btm3btt1ttm3btm3btr3btu22bdtt27Zt27Zt27Ztbdu2bdu2bdvbtm3btm3btrZt27Zt27Zt27Ztu23bbdu2bdu2bdu2bW3btt1u27bb27Zt27Zt27a2bdu2bdu2bbZt27Zt27bb27Zt27Zt2/bbtm3bttu2bbZt27Zt27Zttm3btm3btt227W7btt1t29u2bdu227bttm3btm3btm1t27Zt27Zt29u2bdu2bdu2ttu23bvbbXe23bZt27Zt27Ztu23btm3bbdu2bdu2bdtt27Zt27bdtm3btm27bdu227Zt27Zt27a2bdu2bdu2bbZt23bbtm3bbdu2bdu2bdvdtm3btm3btm27bdv2tm2727Zt27Zt27bdbdu2bdu2bbZt27Ztd9u2tm23bdu2bdtt27Zt27Zt223btu22bdu227Zt27Zt27bbtm3btm27bbZt27Zt27Zt27Ztt23bttu2bdu2bdu2bbZt27Zt23bbbdu2bdu2bdtt27Zt23bbtm3btm3bbtu227Zt27Zt27bbtm3btm3bdtu2bbdt27Zttm3btm3btm1t27Zt27Zt29u2bdu2bdu2tm3btm3btm223bZt27Zt27Zt27Zt27btbdu2bdu2bdvbtm3btm3btrZt27Zt27Ztbdu2bdu2bdvbtm3btm3btrZt37Zt27Ztbdu2bdu2bdtt27Zt23vbtrZt27Zt27btbdu2bdu2bdvbtm3btm3btrZt27Zt27Zt27Zt27bbbtu2t23btu22bW3btm3btm3b27Zt27Zt27a2bdu2bdu2bbZt27Zt27bbtm3btm3bdttt27Zt27Zt29u2bdu2bdu2tm3btm3btm1t27btdrdt29tt27Ztu9u2bdu27bZt27a2bW/btm3btm3btm3btm3b27Zt27Zt27a2bdu2bdu2bW3btm3btm3b27Zt27Zt27a2bdu2bdu2bbZt27Zt27btbdu2bdu2bdvbtm3btm3btrZt27Zt27Zttm3btm27bdtt27Zt27Zt223bbdu2bdu227Zt27Zt27a2bdtut922bbZt23bbtm3b27Ztu922bdu2bdu2bdu2bbZtt23btm3bbdu2bdu2bdvbtm3btm3btrZt27Zt27Zt27bdtm27bdu2bdu2bdu2bW3btm3btm3b27Zt27Zt27bbtm3bttu2bdtt27Zt27Zttm3btm3btm22bdu2bdtu27Zt223btm3bbdu2bdu2bdvbtm27bdvutrZt27Zt27Zttm3btm3btt1t27Zt27Zt29u2bdu2bdu2tm3btm3btm3btm1727Zt27Zt27Zt27Ztbdu23bZtt+3btm3btm3btr1t27Zt27Ztdrdt27Zt27Zt27Zt27Zt29t2e9u2bdu227Zt27Zt27a2bdu2bdu2bW3btm3btm3b27Zt27Zt27bbtm3bbdu2bbZt27Zt27Ztbdu2bdu2bdvbtm3btm3btrZt27Zt27Ztbdu2bdu2bdv+3//7v23btgAAAADA//f/EQEBAQEBEQERARERAQEBAQEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiICEhISEhISEhICAhISEgICEREQERAhECAQISAhEgEBAhAgICAgECAQECAgICARICASIgEBAgECARECERAQIQERAhECAQISEQESAQEBAQECEBAgICARIgIREREREhECERERESESERICEgICAgICEgICECIQISEgICEgIhICECIRAiISAhERERERERESERERERERERIREhICESAhEgIQERAgIRICAgIQISAhAgICAQIBAhAgICAhEhICAhICICAgIQIgISEiAgIQIQIQICAgECAgICECAgISAhAgIBAhAgICAQIgIBAhAhAhIBAgECAhICAQICEgIQECAgICISAgICECECAhECAhAgISAhAgICECAgIiAgIREREiIRERERERIRERIREhESEQICECEgICAiECAgIiAhEREQIRAhAgICECERAgIRAgISISEgECARISAgESAQIBEgEBAiAgIBEgICECEBAgIBAgICAgIBAgIQIRIBEgECAgECEgIgISEhISEhISEhISEhISAgIQIQIgISAgISAgICISICICEiEiIgICAhESEhISEiICAgIQIhICISAiAhIgIgIgISAhICIQIhAgISAgIREREREhESEhISEhISEhIRERERERESERISEiEhISEhISEhISEhEREREREhERIRERECAQICEBAQICECARICAiAQEBAQIBAQIREREhIREhISAgICAhECECAiAgIhAgIQIQIBAiAhAhEgICECAgIQIgICECEgIQISEgIgICAgIREREiISEhICAhAhAhAgICECAhICESAgICMjEyMjIzMTMyIyExMTExMTExMTExMTExMTEyMTExISIhMTExMTExMTExMTEyMTExMTExMTExMjITExMTExMTExMTExMTExMTExMTExMTExMTEyETExMjIyMTIxMTExMTExMTExMTEwMjIjIjMwMDAhIiAzMDARMRIgIBAwICAwIBAQECExMSIhMSMSMSEiEiEwMREwESEQIRIBISMjISMjIjERMTExMjAhMTExMTExMTExMDERETEwMjEhIhIxERERERERERESEhISMTExMTExMTExMTExERERERERERERERExERERMTISMSMxEREREjEREREREREhIiEiEjIyMjIyMjIyIyMjIxMTIzExMiExMTIyMjIxETExMTExMTExMTESIDAyMjIiIjAgIQITEjEzIyMiISERIhERESESIxMSIzMTExMTExMTExMTExMSESMhERMhEhEjEyEREREjExMjExMTExMTExMTEyIiMjExMTExMTExMCMxEREREREhEyExMjESMjIxETExMTExMTIyMjExMDAwMDAwMDAjExMTEwMDIiIDIwMDAwMDASIBAQMCEgEjEiMBAQEBIhMSAyMDICIwITExMTIiIzEiIiIwIDIiEDEiMDAyMjIjIyIyMhISIjIyIyIxMhAyMiMCEgIDAyMgICExERISERIxMzIyEjISMSEyICIhMTExMTExMTExMTEhERERERERETExERERERExMjIxMhEyETIyMhIxMjIxMTEyITExMTEwMSAyMSISIyAyMjIjISIyAwMjIyIjEiMwIRMiAjMBAhIzESMRExEBEiMSEjMSMBATIjIwEBAwMjEzITEyMDAyMjIjEwMTAwMDAxMTAwMSERISEhISAgISEhEjIgMTEwESMBEQMCMwISEgMRAzMRERITIwICAiIBAQICAjAQMDAQECAgEBAQMTAgICERITEhMTExMTExMTExMTExMSEhITExMTEyETExMTEwMTExMTExMTExMTExMTExMTExMCMTEwETIRMTExMTExMTEyETExMTExMTIxMTExMTExMTExMTExMTEhMDIhICIyIzIhERIyMjIjIjIzIDAyMDAxMTAgMDEhISESEhMSExIiExMTExMTIhMTExMTEyMTExMTExMiIxMTExMhExMTExMjIyMjIyIyMiMjEhMjIyIyMjIjERMTExMTAwITExMTExMTExMTEwMjEwMyAyMiMyIyMTExMjEhIhERMhIxERERERERERExETExMTERERIhERExISMSEiMhEREREyMTExMTEyESExMTExMTExMTIyESIxIRExEREjIyMTExMTExMTEyMDERETEhMTIwMhExMTEhEDEwMjExMjERMTExERExMhERESMREREjIyEyERIxETExMTExMjExMjExMTExMTExMjExMTExMTIwMhIyAjMjMiMjEgICIRMzExMDExISEjISEiMTExMTAxETERERERITExMTExMTIwMiMDAzIkJCQkJCQkJCQkJCQkJCQkJCQzMkJCQzJCQkJENDJEQkRCQkJCQkMzMkJCQkJCQkMyQkJEQkJDNDNEMzIkJEMzJCQkJCQkJCQkJCQkJCQzJCQkJCQkJCQkM0JCQkM0QzNCQkRCQ0JCQkJCQkJCQkJCQkJCQkJCQ0NCQkNCQkJCQkJCQkJDQkJCQkJCQkJCQkJCQkJCQkJCQkJDQkJDQkJCQkJCQkQkIkJCQkJCQkJCQkJCQkJCQzJCQkJCQkIyQiJCIUFBQkJDQTMjExQDMjJCQkMiQjJCQkJCQkJCMkJCQzJBQkRCQkJCQiJCQkJCQkJBQUJBQkJBQjIiRDEyMjFCQjJBQkIyMUJCQkNDMkIxQUJCQjJCMkNBQUJCMkJCQ0NENEJCQSEhQSJCQkJDMkEhIURBMTEiNEJCQkJCQkIxM0NCRENEMkJCQ0BCQkBCQ0FCQkJEQkJCQkJDQDAEJCMjIyMiIiMkJCI0JCMzIyQkBDMkJBQUEhMURAQjIyMEBAQENDQEBCMkNDI0IyM0BAQ0JAQUFBMTEyQTFCQkMyMkIyQUJDQUFBIjJEIkFBQTEhMUJCQiEyQkIyREJCMTExMjEyMTFBQkJBQzIyQkJDMjMyQUIiQkJEMzFCIUJCQkFCQkJBQSFDQkFEIyMUMUFCQUFBQUFBQjIyMkIyQkFCQUQkNBQkJCQkJCMjJCQCJCQkJCQkRCQkJCQkJCQkJEQkFBQ0JBQkJEQkRCQkJDQkFBQDJCQkRCQUFBQkAyQkJDQkJCQkIyQzJCQkNCQjJCQEFBMEMTExMTBBQTBBQTFAMENBQUJCMkJCQiMkJCQUNCQUJBQkExQkRCQkIyQUJCQUFBQUMyQkAyQkJCQkJDQkJCMjIyMjIyMjIyMkMyMkJCQkJCQkJCQkJCQ0JBMTExMkRCQkMyQUMyIyFCMTRBQUFCQkFEFEJBRCQjIyQkIzIkJCQjIwMDIjIjIiQiMyQzJCQjJCQEMTBDFBMEExM0IyQiJCIyMEExMkRCQkIyMjJBQiMyQkEyQkNCMkJAQDJCQiJCQkMyMkJCQkJDMiJCQkJCMzAyQkJCREJCQUJBQjJCQjIyIkJDQkFDQUJCQkJCQkJCQkIyMjIyMkJCQkFDQkJAQzMyQzJCQkMzMkJCQEJCQkBDQUExQDFBMzIiQzBEQjFDQkFCQkJCQkJCRDJCQjJCQkIyMkIyM0JCQ0FCQ0IiQkJCNDMzIyMkJCQjNCMkNCMjJCQkFCQ0JCQDAiQjJCQkIzQkJCMkFCMkIyMkJCREMzMzJEQUEiQkFDMkMzMURCMjEyMkJBQUFBQUFCIkJCQ0JEIUNBQUJCMkQxQ0NBQxQzFBQkJCQjJBQUFBQUFCQUMyMjIyMjJCQkJCMUIyMzRCQjIyQjJCQkMxQjFDISJCMjIzMkQkFCQkJCMjIxQjIzQkMhQUJCQkJCQkJCQjJCREJCRDMzJCQEMkBDBEMkJCQkNCQkIyMjJCMjJARCMzNDMENBQUFBQkFCQkMzMkJCQzMzNDMzJEJCQkJCQkJCQkJCMkJCQkJAQTEyQUMiQkNCQjJCIzNCQTJCQkJCQkFCQkIzIjQDJCQkMyIjIyMkIwMzMyQzIyQzJCQUFCQkIyMzI0MzJCQkJDQkIyQkJCQkJDMTNDQ0JCQkNCQjNCQjIyQjJAQUBBQCRAQkJCQEJBMEMUExQTExMUBDExQTEyQTFDQjJCQzM0QkFCQEExIkBBQkAgQjBAQEJAMEFAMEEwIEFAMSEiQkRCMiIiQkBAQDAkQkJCQkRDNEJCQkJCQjNCQjJAI0BBQEIUJCQEBEMTFDQkNCMkJDQkBAQEAgIUFDREFBQTFAQUBEBBMTJCQkJCQkIyQkIxQUJCIkJCQkJCQkIgQEI0AhQSEhMkAzQkNBMkEyQjIxMkJCQjIyQkJCQkJCQyMTEyMjIyMiFBQUFBQTFBMUFCQjIyQkFBQUIyMzMyQ0I0IjJEIkJCQiAjBAQUJCQkJCQkJCRCIgQkEyQ0NCQkJCQkJCQkI0MUJCNBMzJCRERCQkIxQkJCQkJCMkJDQ0JCQjIzQkNCQkJDQkMiQkIyQkJDQ0IzQkNCQkNCRERCQkNCMkFBNDExQDFBMTFBQUJCQUAxQjIyM0E0QkExMUJBQTFEMTEyQkFBMjAzQTFCQUJDQkJCQSJCQkJCMkJCQEEzREJCQkJCMkQhMyMjExMyQkNCQTJDNCQkFBQkJDMTJCQkBDMkEyMUMzQkIyMkJCQjIyMjNCQkJDQiJCM0IyMEIyQkJCQkMgQDBCQkJDQkJCQkJCQkIiQkJDQzJBMwQwQkExM0FCQkFBQSFDQkJCMTJDMkJCQkIiQUJCQkJCRDNEM0MzMEUzQ0QzNDMzQzRDM0M1NDNDM0QyMUNCQkIyMUJAREBCQ0IxMEVAM0E1MjM0NDIyMkIyQkNDRTIyRUJFQDIzQEBAQEJCNEIxMkJCRTMzRDNFQUFENDQwQEQ0Q0IyQzQzM0JDQEJCM0NDJCNENCRUNBQ0Q0RUJCM0JCMjRDMzRCNUNDREVCQkRCMjAzMzAzQkNCMURBQUFAQUBAQUBBNDJCMEMzQTBDQEBBMUQyMjQyQkExNUFARUUyREExQUJCQjIzMjIyMjI1RUFBRENDRkRBRkVAQkREQ0VDQEJCQENDREFEQUFBQYiJiJiIGIiYmJiIGIiJiImIGIiJiImIGIiYmJiYgA==";
;// ./src/hyphenator-for-czech-language.js







































const CZECH_LANGUAGE = "cs";
const CZECH_TEST_WORD = "nejneobhospodarovavatelnejsimi";
const PROCESSED_ATTRIBUTE = "data-hyphenator-for-czech-language";
const SKIPPED_TAGS = new Set(["ABBR", "ACRONYM", "AUDIO", "BR", "BUTTON", "CODE", "IMG", "INPUT", "KBD", "LABEL", "MATH", "OPTION", "PRE", "SAMP", "SCRIPT", "STYLE", "SUB", "SUP", "SVG", "TEXTAREA", "VAR", "VIDEO"]);
function dataUrlToArrayBuffer(dataUrl) {
  const commaIndex = dataUrl.indexOf(",");
  const metadata = dataUrl.slice(0, commaIndex);
  const payload = dataUrl.slice(commaIndex + 1);
  if (metadata.endsWith(";base64")) {
    const binary = atob(payload);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i !== binary.length; ++i) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }
  const decoded = decodeURIComponent(payload);
  const bytes = new Uint8Array(decoded.length);
  for (let i = 0; i !== decoded.length; ++i) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes.buffer;
}
let czechHyphenatorPromise;
function getCzechHyphenator() {
  if (!czechHyphenatorPromise) {
    czechHyphenatorPromise = hyphenopoly_module.config({
      loader: async () => dataUrlToArrayBuffer(cs_namespaceObject),
      require: [CZECH_LANGUAGE]
    }).get(CZECH_LANGUAGE);
  }
  return czechHyphenatorPromise;
}
function getSelectedNodes() {
  const host = document.location.host;
  console.log("location.host: " + host);
  if (host.startsWith("www.ceska-justice.cz") || host.startsWith("www.zdravotnickydenik.cz")) {
    console.log("using rules for Ceska Justice");
    return document.body.querySelectorAll("article.post");
  }
  if (/^(.+\.)?(ihned|hn)\.(cz|news)$/.test(host)) {
    console.log("using rules for IHned");
    return document.body.querySelectorAll("article, .perex, div[id=main-content], div[id=content] h1, div.content-column, div.article, div.content");
  }
  if (host.endsWith(".aktualne.cz")) {
    console.log("using rules for Aktualne");
    return document.body.querySelectorAll("div.clanek, div.titulek-clanku, div.obsah, div.page");
  }
  if (host === "www.ceskenoviny.cz") {
    console.log("using rules for Ceske Noviny");
    return document.body.querySelectorAll("div.box-article");
  }
  if (host.endsWith(".idnes.cz")) {
    console.log("using rules for IDnes");
    return document.body.querySelectorAll("div.art-full, div.col, div.hp-b, div[id=main] div[id=content]");
  }
  if (host.endsWith(".reflex.cz")) {
    console.log("using rules for Reflex");
    return document.body.querySelectorAll("article");
  }
  if (host.endsWith(".respekt.cz")) {
    console.log("using rules for Respekt");
    return document.body.querySelectorAll("div.layout_content-text, div.layout_content-full");
  }
  if (host.endsWith(".ceskatelevize.cz")) {
    console.log("using rules for Ceska televize");
    return document.body.querySelectorAll("article, div[id=myPage] div[id=mainPanel]");
  }
  if (host.endsWith(".seznam.cz") || host.endsWith(".seznamzpravy.cz")) {
    console.log("using rules for Seznam");
    return document.body.querySelectorAll("main");
  }
  if (/^(.+\.)?neviditelnypes.lidovky\.cz$/.test(host)) {
    console.log("using rules for Neviditelny Pes");
    return document.body.querySelectorAll("div[id=art-full], div[id=col-c]");
  }
  if (host.endsWith(".lidovky.cz")) {
    console.log("using rules for Lidovky");
    return document.body.querySelectorAll("div[id=content]");
  }
  if (host === "svobodneforum.cz") {
    console.log("using rules for Svobodne forum");
    return document.body.querySelectorAll("main");
  }
  if (host.endsWith(".rozhlas.cz")) {
    console.log("using rules for Rozhlas");
    return document.body.querySelectorAll("div.main, div[id=main], div[id=aside]");
  }
  if (host === "mediahub.cz") {
    console.log("using rules for Mediahub");
    return document.body.querySelectorAll("section[id=section-content], section[id=section-sidebar], div.container");
  }
  if (host === "cs.wikipedia.org") {
    console.log("using rules for Ceska Wikipedia");
    return document.body.querySelectorAll("div[id=bodyContent]");
  }
  if (host.endsWith(".novinky.cz")) {
    console.log("using rules for Novinky");
    return document.body.querySelectorAll("div#szn-clanky main section, div#szn-clanky header, main section[data-dot=tpl-content]");
  }
  if (host.endsWith(".info.cz")) {
    console.log("using rules for Info");
    return document.body.querySelectorAll("article");
  }
  if (host.endsWith(".tyden.cz")) {
    console.log("using rules for Tyden");
    return document.body.querySelectorAll("div.article, div.articles");
  }
  if (/^(www\.)?echo24\.cz$/.test(host)) {
    console.log("using rules for Echo24");
    return document.body.querySelectorAll("div[id=content], article, section");
  }
  if (host.endsWith("parlamentnilisty.cz")) {
    console.log("using rules for Parlamentni Listy");
    return document.body.querySelectorAll("div[id=main]");
  }
  if (/^(.+\.)?forum24\.cz$/.test(host)) {
    console.log("using rules for Forum24");
    return document.body.querySelectorAll("article");
  }
  if (/^(.+\.)?euro\.cz$/.test(host)) {
    console.log("using rules for Euro.cz");
    return document.body.querySelectorAll("div[id=article]");
  }
  if (/^(.+\.)?e15\.cz$/.test(host)) {
    console.log("using rules for E15");
    return document.body.querySelectorAll("article");
  }
  if (/^(.+\.)?neovlivni\.cz$/.test(host)) {
    console.log("using rules for Neovlivni");
    return document.body.querySelectorAll("section");
  }
  if (/^www\.sysifos\.cz$/.test(host)) {
    console.log("using rules for sysifos.cz");
    document.documentElement.setAttribute("lang", CZECH_LANGUAGE);
    return document.body.querySelectorAll("div[id=blok005a]");
  }
  if (/^(.+\.)?denikreferendum\.cz$/.test(host)) {
    console.log("using rules for Denik Referendum");
    return document.body.querySelectorAll("div[id=content]");
  }
  if (/^(.+\.)?denik\.cz$/.test(host)) {
    console.log("using rules for Denik");
    return document.body.querySelectorAll("div.content");
  }
  if (/^(.+\.)?irozhlas\.cz$/.test(host)) {
    console.log("using rules for iRozhlas");
    return document.body.querySelectorAll("article");
  }
  if (/^(.+\.)?epravo\.cz$/.test(host)) {
    console.log("using rules for epravo.cz");
    return document.body.querySelectorAll(".article, .article-detail");
  }
  if (/^www\.ahaonline\.cz$/.test(host)) {
    console.log("using rules for ahaonline.cz");
    return document.body.querySelectorAll("article");
  }
  if (/^www\.christnet\.eu$/.test(host)) {
    console.log("using rules for christnet.eu");
    return document.body.querySelectorAll(".article-text");
  }
  if (/^tn\.nova\.cz$/.test(host)) {
    console.log("using rules for tn.nova.cz");
    return document.body.querySelectorAll("div.article");
  }
  if (/^www\.autoforum\.cz$/.test(host)) {
    console.log("using rules for autoforum.cz");
    return document.body.querySelectorAll("div.article-detail, div#content-right");
  }
  console.log("No rule matched.");
  return [];
}
function shouldSkipElement(node) {
  return node.nodeType === Node.ELEMENT_NODE && SKIPPED_TAGS.has(node.tagName);
}
function hasSkippedAncestor(node, root) {
  let element = node.parentElement;
  while (element && element !== root) {
    if (shouldSkipElement(element)) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}
function hyphenateTextNodes(root, hyphenateText) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(textNode) {
      if (!textNode.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = textNode.parentElement;
      if (!parent || parent.closest("[data-hyphenator-for-czech-language]") !== root || hasSkippedAncestor(textNode, root)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  textNodes.forEach(textNode => {
    textNode.nodeValue = hyphenateText(textNode.nodeValue);
  });
}
function prepareRoot(root) {
  if (root.getAttribute(PROCESSED_ATTRIBUTE) === "true" || shouldSkipElement(root)) {
    return false;
  }
  root.setAttribute(PROCESSED_ATTRIBUTE, "true");
  if (!root.getAttribute("lang")) {
    root.setAttribute("lang", CZECH_LANGUAGE);
  }
  return true;
}
async function hyphenatorForCzechLanguageOnSelectedSites() {
  console.log("Hyphenator here.");
  try {
    const nodes = Array.from(getSelectedNodes()).filter(prepareRoot);
    console.log("Got " + nodes.length + " nodes.");
    if (nodes.length === 0) {
      return;
    }
    const hyphenateText = await getCzechHyphenator();
    const sample = hyphenateText(CZECH_TEST_WORD);
    console.log("Czech Hyphenopoly sample: " + sample);
    nodes.forEach(node => {
      hyphenateTextNodes(node, hyphenateText);
    });
  } catch (error) {
    console.error("Hyphenator for Czech language failed.", error);
  }
}
hyphenatorForCzechLanguageOnSelectedSites();
/******/ })()
;
//# sourceMappingURL=hyphenator-for-czech-language.js.map