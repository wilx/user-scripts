// ==UserScript==
// @name        hyphenator-for-czech-language
// @description Hyphenator for news sitez in Czech
// @version     1.0.177
// @author      wilx
// @homepage    https://github.com/wilx/user-scripts/hyphenator-for-czech-language
// @include     /^https?:\/\/www\.ceska-justice\.cz\/.*$/
// @include     /^https?:\/\/www\.zdravotnickydenik\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?(ihned|hn)\.(cz|news)\/.*$/
// @include     /^https?:\/\/.+\.aktualne\.cz\/.*$/
// @include     /^https?:\/\/www\.ceskenoviny\.cz\/.*$/
// @include     /^https?:\/\/.+\.idnes\.cz\/.*$/
// @include     /^https?:\/\/.+\.reflex\.cz\/.*$/
// @include     /^https?:\/\/.+\.respekt\.cz\/.*$/
// @include     /^https?:\/\/.+\.ceskatelevize\.cz\/.*$/
// @include     /^https?:\/\/.+\.seznam\.cz\/.*$/
// @include     /^https?:\/\/.+\.seznamzpravy\.cz\/.*$/
// @include     /^https?:\/\/.+\.lidovky\.cz\/.*$/
// @include     /^https?:\/\/svobodneforum\.cz\/.*$/
// @include     /^https?:\/\/.+\.rozhlas\.cz\/.*$/
// @include     /^https?:\/\/mediahub\.cz\/.*$/
// @include     /^https?:\/\/.+\.novinky\.cz\/.*$/
// @include     /^https?:\/\/news\.google\.com\/.*$/
// @include     /^https?:\/\/.+\.info\.cz\/.*$/
// @include     /^https?:\/\/.+\.tyden\.cz\/.*$/
// @include     /^https?:\/\/cs\.wikipedia\.org\/.*$/
// @include     /^https?:\/\/(www\.)?echo24\.cz\/.*$/
// @include     /^https?:\/\/.+\.parlamentnilisty\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?forum24\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?euro\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?zpovednice\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?e15\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?neovlivni\.cz\/.*$/
// @include     /^https?:\/\/www\.sysifos\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?denikreferendum\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?neviditelnypes.lidovky\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?denik\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?irozhlas\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?epravo\.cz\/.*$/
// @include     /^https?:\/\/www\.ahaonline\.cz\/.*$/
// @include     /^https?:\/\/www\.christnet\.eu\/.*$/
// @include     /^https?:\/\/tn\.nova\.cz\/.*$/
// @include     /^https?:\/\/www\.autoforum\.cz\/.*$/
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

/***/ 2140
(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8111);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7588);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9577);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6632);
/* harmony import */ var core_js_modules_es_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4226);
/* harmony import */ var core_js_modules_es_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9486);
/* harmony import */ var core_js_modules_es_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(456);
/* harmony import */ var core_js_modules_es_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7350);
/* harmony import */ var core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3241);
/* harmony import */ var core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7302);
/* harmony import */ var core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5871);
/* harmony import */ var core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_11__);












/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */
/* eslint no-unused-vars: "warn" */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */

console.log('Hyphenator here.');
function hyphenatorForCzechLanguageOnSelectedSites() {
  let nodes = [];
  const host = document.location.host;
  console.log('location.host: ' + host);
  if (host.startsWith('www.ceska-justice.cz') || host.startsWith('www.zdravotnickydenik.cz')) {
    console.log('using rules for Česká Justice');
    nodes = document.body.querySelectorAll('article.post');
  } else if (/^(.+\.)?(ihned|hn)\.(cz|news)$/.test(host)) {
    console.log('using rules for IHned');
    nodes = document.body.querySelectorAll('article, .perex, div[id=main-content], div[id=content] h1, div.content-column, div.article, div.content');
  } else if (host.endsWith('.aktualne.cz')) {
    console.log('using rules for Aktualne');
    nodes = document.body.querySelectorAll('div.clanek, div.titulek-clanku, div.obsah, div.page');
  } else if (host === 'www.ceskenoviny.cz') {
    console.log('using rules for České Noviny');
    nodes = document.body.querySelectorAll('div.box-article');
  } else if (host.endsWith('.idnes.cz')) {
    console.log('using rules for IDnes');
    nodes = document.body.querySelectorAll('div.art-full, div.col, div.hp-b, div[id=main] div[id=content]');
  } else if (host.endsWith('.reflex.cz')) {
    console.log('using rules for Reflex');
    nodes = document.body.querySelectorAll('article');
  } else if (host.endsWith('.respekt.cz')) {
    console.log('using rules for Respekt');
    nodes = document.body.querySelectorAll('div.layout_content-text, div.layout_content-full');
  } else if (host.endsWith('.ceskatelevize.cz')) {
    console.log('using rules for Česká televize');
    nodes = document.body.querySelectorAll('article, div[id=myPage] div[id=mainPanel]');
  } else if (host.endsWith('.seznam.cz') || host.endsWith('.seznamzpravy.cz')) {
    console.log('using rules for Seznam');
    nodes = document.body.querySelectorAll('main');
  } else if (/^(.+\.)?neviditelnypes.lidovky\.cz$/.test(host)) {
    console.log('using rules for Neviditelný Pes');
    nodes = document.body.querySelectorAll('div[id=art-full], div[id=col-c]');
  } else if (host.endsWith('.lidovky.cz')) {
    console.log('using rules for Lidovky');
    nodes = document.body.querySelectorAll('div[id=content]');
  } else if (host === 'svobodneforum.cz') {
    console.log('using rules for Svobodné fórum');
    nodes = document.body.querySelectorAll('main');
  } else if (host.endsWith('.rozhlas.cz')) {
    console.log('using rules for Rozhlas');
    nodes = document.body.querySelectorAll('div.main, div[id=main], div[id=aside]');
  } else if (host === 'mediahub.cz') {
    console.log('using rules for Mediahub');
    nodes = document.body.querySelectorAll('section[id=section-content], section[id=section-sidebar], div.container');
  } else if (host === 'cs.wikipedia.org') {
    console.log('using rules for Česká Wikipedia');
    nodes = document.body.querySelectorAll('div[id=bodyContent]');
  } else if (host.endsWith('.novinky.cz')) {
    console.log('using rules for Novinky');
    nodes = document.body.querySelectorAll('div#szn-clanky main section, div#szn-clanky header, main section[data-dot=tpl-content]');
  } else if (host.endsWith('.info.cz')) {
    console.log('using rules for Info');
    nodes = document.body.querySelectorAll('article');
  } else if (host.endsWith('.tyden.cz')) {
    console.log('using rules for Týden');
    nodes = document.body.querySelectorAll('div.article, div.articles');
  } else if (/^(www\.)?echo24\.cz$/.test(host)) {
    console.log('using rules for Echo24');
    nodes = document.body.querySelectorAll('div[id=content], article, section');
  } else if (host.endsWith('parlamentnilisty.cz')) {
    console.log('using rules for Parlamentni Listy');
    nodes = document.body.querySelectorAll('div[id=main]');
  } else if (/^(.+\.)?forum24\.cz$/.test(host)) {
    console.log('using rules for Forum24');
    nodes = document.body.querySelectorAll('article');
  } else if (/^(.+\.)?euro\.cz$/.test(host)) {
    console.log('using rules for Euro.cz');
    nodes = document.body.querySelectorAll('div[id=article]');
  } else if (/^(.+\.)?e15\.cz$/.test(host)) {
    console.log('using rules for E15');
    nodes = document.body.querySelectorAll('article');
  } else if (/^(.+\.)?neovlivni\.cz$/.test(host)) {
    console.log('using rules for Neovlivni');
    nodes = document.body.querySelectorAll('section');
  } else if (/^www\.sysifos\.cz$/.test(host)) {
    console.log('using rules for sisyfos.cz');
    document.getElementsByTagName('html')[0].setAttribute('lang', 'cs');
    nodes = document.body.querySelectorAll('div[id=blok005a]');
  } else if (/^(.+\.)?denikreferendum\.cz$/.test(host)) {
    console.log('using rules for Deník Referendum');
    nodes = document.body.querySelectorAll('div[id=content]');
  } else if (/^(.+\.)?denik\.cz$/.test(host)) {
    console.log('using rules for Deník');
    nodes = document.body.querySelectorAll('div.content');
  } else if (/^(.+\.)?irozhlas\.cz$/.test(host)) {
    console.log('using rules for iRozhlas');
    nodes = document.body.querySelectorAll('article');
  } else if (/^(.+\.)?epravo\.cz$/.test(host)) {
    console.log('using rules for epravo.cz');
    nodes = document.body.querySelectorAll('.article, .article-detail');
  } else if (/^www\.ahaonline\.cz$/.test(host)) {
    console.log('using rules for ahaonline.cz');
    nodes = document.body.querySelectorAll('article');
  } else if (/^www\.christnet\.eu$/.test(host)) {
    console.log('using rules for christnet.eu');
    nodes = document.body.querySelectorAll('.article-text');
  } else if (/^tn\.nova\.cz$/.test(host)) {
    console.log('using rules for tn.nova.cz');
    nodes = document.body.querySelectorAll('div.article');
  } else if (/^www\.autoforum\.cz$/.test(host)) {
    console.log('using rules for autoforum.cz');
    nodes = document.body.querySelectorAll('div.article-detail, div#content-right');
  } else {
    console.log('No rule matched.');
  }
  console.log('Got ' + nodes.length + ' nodes.');
  const hyphenateRe = /\bhyphenate\b/;
  for (let i = 0; i !== nodes.length; ++i) {
    const node = nodes[i];
    if (!hyphenateRe.test(node.className)) {
      node.className += ' hyphenate';
    }
  }

  /** @license Hyphenator 5.2.0(devel) - client side hyphenation for webbrowsers
  *  Copyright (C) 2015  Mathias Nater, Zürich (mathiasnater at gmail dot com)
  *  https://github.com/mnater/Hyphenator
  *
  *  Released under the MIT license
  *  http://mnater.github.io/Hyphenator/LICENSE.txt
  */

  /*
  * Comments are jsdoc3 formatted. See http://usejsdoc.org
  * Use mergeAndPack.html to get rid of the comments and to reduce the file size of this script!
  */

  /* The following comment is for JSLint: */
  /* jslint browser: true, multivar: true */

  /**
  * @desc Provides all functionality to do hyphenation, except the patterns that are loaded externally
  * @global
  * @namespace Hyphenator
  * @author Mathias Nater, <mathias@mnn.ch>
  * @version 5.2.0(devel)
  * @example
  * &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
  * &lt;script type = "text/javascript"&gt;
  *   Hyphenator.run();
  * &lt;/script&gt;
  */
  const Hyphenator = function (window) {
    'use strict';

    /**
    * @member Hyphenator~contextWindow
    * @access private
    * @desc
    * contextWindow stores the window for the actual document to be hyphenated.
    * If there are frames this will change.
    * So use contextWindow instead of window!
    */
    let contextWindow = window;

    /**
    * @member {Object.<string, Hyphenator~supportedLangs~supportedLanguage>} Hyphenator~supportedLangs
    * @desc
    * A generated key-value object that stores supported languages and meta data.
    * The key is the {@link http://tools.ietf.org/rfc/bcp/bcp47.txt bcp47} code of the language and the value
    * is an object of type {@link Hyphenator~supportedLangs~supportedLanguage}
    * @namespace Hyphenator~supportedLangs
    * @access private
    * //Check if language lang is supported:
    * if (supportedLangs.hasOwnProperty(lang))
    */
    const supportedLangs = function () {
      /**
       * @typedef {Object} Hyphenator~supportedLangs~supportedLanguage
       * @property {string} file - The name of the pattern file
       * @property {number} script - The script type of the language (e.g. 'latin' for english), this type is abbreviated by an id
       * @property {string} prompt - The sentence prompted to the user, if Hyphenator.js doesn't find a language hint
       */

      /**
      * @lends Hyphenator~supportedLangs
      */
      const r = {};
      /**
       * @method Hyphenator~supportedLangs~o
       * @desc
       * Sets a value of Hyphenator~supportedLangs
       * @access protected
       * @param {string} code The {@link http://tools.ietf.org/rfc/bcp/bcp47.txt bcp47} code of the language
       * @param {string} file The name of the pattern file
       * @param {Number} script A shortcut for a specific script: latin:0, cyrillic: 1, arabic: 2, armenian:3, bengali: 4, devangari: 5, greek: 6
       * gujarati: 7, kannada: 8, lao: 9, malayalam: 10, oriya: 11, persian: 12, punjabi: 13, tamil: 14, telugu: 15
       * @param {string} prompt The sentence prompted to the user, if Hyphenator.js doesn't find a language hint
       */
      const o = function (code, file, script, prompt) {
        r[code] = {
          file: file,
          script: script,
          prompt: prompt
        };
      };
      o('be', 'be.js', 1, 'Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:');
      o('ca', 'ca.js', 0, '');
      o('cs', 'cs.js', 0, 'Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:');
      o('da', 'da.js', 0, 'Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:');
      o('bn', 'bn.js', 4, '');
      o('de', 'de.js', 0, 'Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:');
      o('el', 'el-monoton.js', 6, '');
      o('el-monoton', 'el-monoton.js', 6, '');
      o('el-polyton', 'el-polyton.js', 6, '');
      o('en', 'en-us.js', 0, 'The language of this website could not be determined automatically. Please indicate the main language:');
      o('en-gb', 'en-gb.js', 0, 'The language of this website could not be determined automatically. Please indicate the main language:');
      o('en-us', 'en-us.js', 0, 'The language of this website could not be determined automatically. Please indicate the main language:');
      o('eo', 'eo.js', 0, 'La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:');
      o('es', 'es.js', 0, 'El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:');
      o('et', 'et.js', 0, 'Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:');
      o('fi', 'fi.js', 0, 'Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:');
      o('fr', 'fr.js', 0, 'La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:');
      o('ga', 'ga.js', 0, 'Níorbh fhéidir teanga an tsuímh a fháil go huathoibríoch. Cuir isteach príomhtheanga an tsuímh:');
      o('grc', 'grc.js', 6, '');
      o('gu', 'gu.js', 7, '');
      o('hi', 'hi.js', 5, '');
      o('hu', 'hu.js', 0, 'A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:');
      o('hy', 'hy.js', 3, 'Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝');
      o('it', 'it.js', 0, 'Lingua del sito sconosciuta. Indicare una lingua, per favore:');
      o('kn', 'kn.js', 8, 'ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:');
      o('la', 'la.js', 0, '');
      o('lt', 'lt.js', 0, 'Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:');
      o('lv', 'lv.js', 0, 'Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:');
      o('ml', 'ml.js', 10, 'ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:');
      o('nb', 'nb-no.js', 0, 'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
      o('no', 'nb-no.js', 0, 'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
      o('nb-no', 'nb-no.js', 0, 'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
      o('nl', 'nl.js', 0, 'De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:');
      o('or', 'or.js', 11, '');
      o('pa', 'pa.js', 13, '');
      o('pl', 'pl.js', 0, 'Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:');
      o('pt', 'pt.js', 0, 'A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:');
      o('ru', 'ru.js', 1, 'Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:');
      o('sk', 'sk.js', 0, '');
      o('sl', 'sl.js', 0, 'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:');
      o('sr-cyrl', 'sr-cyrl.js', 1, 'Језик овог сајта није детектован аутоматски. Молим вас наведите језик:');
      o('sr-latn', 'sr-latn.js', 0, 'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:');
      o('sv', 'sv.js', 0, 'Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:');
      o('ta', 'ta.js', 14, '');
      o('te', 'te.js', 15, '');
      o('tr', 'tr.js', 0, 'Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:');
      o('uk', 'uk.js', 1, 'Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:');
      o('ro', 'ro.js', 0, 'Limba acestui sit nu a putut fi determinată automat. Alege limba principală:');
      return r;
    }();

    /**
    * @member {Object} Hyphenator~locality
    * @desc
    * An object storing isBookmarklet, basePath and isLocal
    * @access private
    * @see {@link Hyphenator~loadPatterns}
    */
    const locality = function getLocality() {
      const r = {
        isBookmarklet: false,
        basePath: '//mnater.github.io/Hyphenator/',
        isLocal: false
      };
      const scripts = contextWindow.document.getElementsByTagName('script');
      let i = 0;
      let src;
      const len = scripts.length;
      let p;
      let currScript;
      while (i < len) {
        currScript = scripts[i];
        if (currScript.hasAttribute('src')) {
          src = currScript.src;
          p = src.indexOf('Hyphenator.js');
          if (p !== -1) {
            r.basePath = src.substring(0, p);
            if (src.indexOf('Hyphenator.js?bm=true') !== -1) {
              r.isBookmarklet = true;
            }
            if (window.location.href.indexOf(r.basePath) !== -1) {
              r.isLocal = true;
            }
            break;
          }
        }
        i += 1;
      }
      return r;
    }();

    /**
    * @member {string} Hyphenator~basePath
    * @desc
    * A string storing the basepath from where Hyphenator.js was loaded.
    * This is used to load the pattern files.
    * The basepath is determined dynamically in getLocality by searching all script-tags for Hyphenator.js
    * If the path cannot be determined {@link http://mnater.github.io/Hyphenator/} is used as fallback.
    * @access private
    * @see {@link Hyphenator~loadPatterns}
    */
    const basePath = locality.basePath;

    /**
    * @member {boolean} Hyphenator~isLocal
    * @access private
    * @desc
    * This is computed by getLocality.
    * isLocal is true, if Hyphenator is loaded from the same domain, as the webpage, but false, if
    * it's loaded from an external source (i.e. directly from github)
    */
    const isLocal = locality.isLocal;

    /**
    * @member {boolean} Hyphenator~documentLoaded
    * @access private
    * @desc
    * documentLoaded is true, when the DOM has been loaded. This is set by {@link Hyphenator~runWhenLoaded}
    */
    let documentLoaded = false;

    /**
    * @member {boolean} Hyphenator~persistentConfig
    * @access private
    * @desc
    * if persistentConfig is set to true (defaults to false), config options and the state of the
    * toggleBox are stored in DOM-storage (according to the storage-setting). So they haven't to be
    * set for each page.
    * @default false
    * @see {@link Hyphenator.config}
    */
    let persistentConfig = false;

    /**
    * @member {boolean} Hyphenator~doFrames
    * @access private
    * @desc
    * switch to control if frames/iframes should be hyphenated, too.
    * defaults to false (frames are a bag of hurt!)
    * @default false
    * @see {@link Hyphenator.config}
    */
    let doFrames = false;

    /**
    * @member {Object.<string,boolean>} Hyphenator~dontHyphenate
    * @desc
    * A key-value object containing all html-tags whose content should not be hyphenated
    * @access private
    */
    const dontHyphenate = {
      video: true,
      audio: true,
      script: true,
      code: true,
      pre: true,
      img: true,
      br: true,
      samp: true,
      kbd: true,
      var: true,
      abbr: true,
      acronym: true,
      sub: true,
      sup: true,
      button: true,
      option: true,
      label: true,
      textarea: true,
      input: true,
      math: true,
      svg: true,
      style: true
    };

    /**
    * @member {boolean} Hyphenator~enableCache
    * @desc
    * A variable to set if caching is enabled or not
    * @default true
    * @access private
    * @see {@link Hyphenator.config}
    */
    let enableCache = true;

    /**
    * @member {string} Hyphenator~storageType
    * @desc
    * A variable to define what html5-DOM-Storage-Method is used ('none', 'local' or 'session')
    * @default 'local'
    * @access private
    * @see {@link Hyphenator.config}
    */
    let storageType = 'local';

    /**
    * @member {Object|undefined} Hyphenator~storage
    * @desc
    * An alias to the storage defined in storageType. This is set by {@link Hyphenator~createStorage}.
    * Set by {@link Hyphenator.run}
    * @default null
    * @access private
    * @see {@link Hyphenator~createStorage}
    */
    let storage;

    /**
    * @member {boolean} Hyphenator~enableReducedPatternSet
    * @desc
    * A variable to set if storing the used patterns is set
    * @default false
    * @access private
    * @see {@link Hyphenator.config}
    * @see {@link Hyphenator.getRedPatternSet}
    */
    let enableReducedPatternSet = false;

    /**
    * @member {boolean} Hyphenator~enableRemoteLoading
    * @desc
    * A variable to set if pattern files should be loaded remotely or not
    * @default true
    * @access private
    * @see {@link Hyphenator.config}
    */
    let enableRemoteLoading = true;

    /**
    * @member {boolean} Hyphenator~displayToggleBox
    * @desc
    * A variable to set if the togglebox should be displayed or not
    * @default false
    * @access private
    * @see {@link Hyphenator.config}
    */
    let displayToggleBox = false;

    /**
    * @method Hyphenator~onError
    * @desc
    * A function that can be called upon an error.
    * @see {@link Hyphenator.config}
    * @access private
    */
    let onError = function (e) {
      // window.alert("Hyphenator.js says:\n\nAn Error occurred at " + e.fileName + ":" + e.lineNumber + ":\n" + e.message);
      console.error('Hyphenator.js says:\n\nAn Error occurred at ' + e.fileName + ':' + e.lineNumber + ':\n' + e.message);
    };

    /**
    * @method Hyphenator~onWarning
    * @desc
    * A function that can be called upon a warning.
    * @see {@link Hyphenator.config}
    * @access private
    */
    let onWarning = function (e) {
      window.console.log(e.message);
    };

    /**
    * @method Hyphenator~createElem
    * @desc
    * A function alias to document.createElementNS or document.createElement
    * @access private
    */
    function createElem(tagname, context) {
      context = context || contextWindow;
      let el;
      if (window.document.createElementNS) {
        el = context.document.createElementNS('http://www.w3.org/1999/xhtml', tagname);
      } else if (window.document.createElement) {
        el = context.document.createElement(tagname);
      }
      return el;
    }
    /**
    * @method Hyphenator~forEachKey
    * @desc
    * Calls the function f on every property of o
    * @access private
    */
    function forEachKey(o, f) {
      let k;
      if (Object.hasOwnProperty('keys')) {
        Object.keys(o).forEach(f);
      } else {
        for (k in o) {
          if (o.hasOwnProperty(k)) {
            f(k);
          }
        }
      }
    }

    /**
    * @member {boolean} Hyphenator~css3
    * @desc
    * A variable to set if css3 hyphenation should be used
    * @default false
    * @access private
    * @see {@link Hyphenator.config}
    */
    let css3 = false;

    /**
    * @method Hyphenator~css3_gethsupport
    * @desc
    * This function returns a {@link Hyphenator~css3_hsupport} object for the current UA
    * @type function
    * @access private
    * @see Hyphenator~css3_h9n
    */
    // eslint-disable-next-line camelcase
    function css3_gethsupport() {
      let support = false;
      const supportedBrowserLangs = {};
      let property = '';
      let checkLangSupport;
      const createLangSupportChecker = function (prefix) {
        const testStrings = [
        // latin: 0
        'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz',
        // cyrillic: 1
        'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
        // arabic: 2
        'أبتثجحخدذرزسشصضطظعغفقكلمنهوي',
        // armenian: 3
        'աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ',
        // bengali: 4
        'ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ',
        // devangari: 5
        'ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ',
        // greek: 6
        'αβγδεζηθικλμνξοπρσςτυφχψω',
        // gujarati: 7
        'બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ',
        // kannada: 8
        'ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ',
        // lao: 9
        'ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ',
        // malayalam: 10
        'ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ',
        // oriya: 11
        'ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ',
        // persian: 12
        'أبتثجحخدذرزسشصضطظعغفقكلمنهوي',
        // punjabi: 13
        'ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ',
        // tamil: 14
        'ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ',
        // telugu: 15
        'ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ'];
        const f = function (lang) {
          let shadow;
          let computedHeight;
          let bdy;
          let r;

          // check if lang has already been tested
          if (supportedBrowserLangs.hasOwnProperty(lang)) {
            r = supportedBrowserLangs[lang];
          } else if (supportedLangs.hasOwnProperty(lang)) {
            // create and append shadow-test-element
            bdy = window.document.getElementsByTagName('body')[0];
            shadow = createElem('div', window);
            shadow.id = 'Hyphenator_LanguageChecker';
            shadow.style.width = '5em';
            shadow.style.padding = '0';
            shadow.style.border = 'none';
            shadow.style[prefix] = 'auto';
            shadow.style.hyphens = 'auto';
            shadow.style.fontSize = '12px';
            shadow.style.lineHeight = '12px';
            shadow.style.wordWrap = 'normal';
            shadow.style.visibility = 'hidden';
            shadow.lang = lang;
            shadow.style['-webkit-locale'] = "'" + lang + "'";
            shadow.innerHTML = testStrings[supportedLangs[lang].script];
            bdy.appendChild(shadow);
            // measure its height
            computedHeight = shadow.offsetHeight;
            // remove shadow element
            bdy.removeChild(shadow);
            r = !!(computedHeight > 12);
            supportedBrowserLangs[lang] = r;
          } else {
            r = false;
          }
          return r;
        };
        return f;
      };
      let s;
      if (window.getComputedStyle) {
        s = window.getComputedStyle(window.document.getElementsByTagName('body')[0], null);
        if (s == null) {
          // Nothing to do here.
        } else if (s.hyphens !== undefined) {
          support = true;
          property = 'hyphens';
          checkLangSupport = createLangSupportChecker('hyphens');
        } else if (s['-webkit-hyphens'] !== undefined) {
          support = true;
          property = '-webkit-hyphens';
          checkLangSupport = createLangSupportChecker('-webkit-hyphens');
        } else if (s.MozHyphens !== undefined) {
          support = true;
          property = '-moz-hyphens';
          checkLangSupport = createLangSupportChecker('MozHyphens');
        } else if (s['-ms-hyphens'] !== undefined) {
          support = true;
          property = '-ms-hyphens';
          checkLangSupport = createLangSupportChecker('-ms-hyphens');
        }
      } // else we just return the initial values because ancient browsers don't support css3 anyway

      return {
        support: support,
        property: property,
        supportedBrowserLangs: supportedBrowserLangs,
        checkLangSupport: checkLangSupport
      };
    }

    /**
    * @typedef {Object} Hyphenator~css3_hsupport
    * @property {boolean} support - if css3-hyphenation is supported
    * @property {string} property - the css property name to access hyphen-settings (e.g. -webkit-hyphens)
    * @property {Object.<string, boolean>} supportedBrowserLangs - an object caching tested languages
    * @property {function} checkLangSupport - a method that checks if the browser supports a requested language
    */

    /**
    * @member {Hyphenator~css3_h9n} Hyphenator~css3_h9n
    * @desc
    * A generated object containing information for CSS3-hyphenation support
    * This is set by {@link Hyphenator~css3_gethsupport}
    * @default undefined
    * @access private
    * @see {@link Hyphenator~css3_gethsupport}
    * @example
    * //Check if browser supports a language
    * css3_h9n.checkLangSupport(&lt;lang&gt;)
    */
    // eslint-disable-next-line camelcase
    let css3_h9n;

    /**
    * @member {string} Hyphenator~hyphenateClass
    * @desc
    * A string containing the css-class-name for the hyphenate class
    * @default 'hyphenate'
    * @access private
    * @example
    * &lt;p class = "hyphenate"&gt;Text&lt;/p&gt;
    * @see {@link Hyphenator.config}
    */
    let hyphenateClass = 'hyphenate';

    /**
    * @member {string} Hyphenator~urlHyphenateClass
    * @desc
    * A string containing the css-class-name for the urlhyphenate class
    * @default 'urlhyphenate'
    * @access private
    * @example
    * &lt;p class = "urlhyphenate"&gt;Text&lt;/p&gt;
    * @see {@link Hyphenator.config}
    */
    let urlHyphenateClass = 'urlhyphenate';

    /**
    * @member {string} Hyphenator~classPrefix
    * @desc
    * A string containing a unique className prefix to be used
    * whenever Hyphenator sets a CSS-class
    * @access private
    */
    const classPrefix = 'Hyphenator' + Math.round(Math.random() * 1000);

    /**
    * @member {string} Hyphenator~hideClass
    * @desc
    * The name of the class that hides elements
    * @access private
    */
    const hideClass = classPrefix + 'hide';

    /**
    * @member {RegExp} Hyphenator~hideClassRegExp
    * @desc
    * RegExp to remove hideClass from a list of classes
    * @access private
    */
    const hideClassRegExp = new RegExp('\\s?\\b' + hideClass + '\\b', 'g');

    /**
    * @member {string} Hyphenator~hideClass
    * @desc
    * The name of the class that unhides elements
    * @access private
    */
    const unhideClass = classPrefix + 'unhide';

    /**
    * @member {RegExp} Hyphenator~hideClassRegExp
    * @desc
    * RegExp to remove unhideClass from a list of classes
    * @access private
    */
    const unhideClassRegExp = new RegExp('\\s?\\b' + unhideClass + '\\b', 'g');

    /**
    * @member {string} Hyphenator~css3hyphenateClass
    * @desc
    * The name of the class that hyphenates elements with css3
    * @access private
    */
    const css3hyphenateClass = classPrefix + 'css3hyphenate';

    /**
    * @member {CSSEdit} Hyphenator~css3hyphenateClass
    * @desc
    * The var where CSSEdit class is stored
    * @access private
    */
    let css3hyphenateClassHandle;

    /**
    * @member {string} Hyphenator~dontHyphenateClass
    * @desc
    * A string containing the css-class-name for elements that should not be hyphenated
    * @default 'donthyphenate'
    * @access private
    * @example
    * &lt;p class = "donthyphenate"&gt;Text&lt;/p&gt;
    * @see {@link Hyphenator.config}
    */
    let dontHyphenateClass = 'donthyphenate';

    /**
    * @member {number} Hyphenator~min
    * @desc
    * A number wich indicates the minimal length of words to hyphenate.
    * @default 6
    * @access private
    * @see {@link Hyphenator.config}
    */
    let min = 6;

    /**
    * @member {number} Hyphenator~leftmin
    * @desc
    * A number wich indicates the minimal length of characters before the first hyphenation.
    * This value is only used if it is greater than the value in the pattern file.
    * @default given by pattern file
    * @access private
    * @see {@link Hyphenator.config}
    */
    let leftmin = 0;

    /**
    * @member {number} Hyphenator~rightmin
    * @desc
    * A number wich indicates the minimal length of characters after the last hyphenation.
    * This value is only used if it is greater than the value in the pattern file.
    * @default given by pattern file
    * @access private
    * @see {@link Hyphenator.config}
    */
    let rightmin = 0;

    /**
    * @member {number} Hyphenator~rightmin
    * @desc
    * Control how compound words are hyphenated.
    * "auto": factory-made -> fac-tory-made ('old' behaviour of Hyphenator.js)
    * "all": factory-made -> fac-tory-[ZWSP]made ('made'.length < minWordLength)
    * "hyphen": factory-made -> factory-[ZWSP]made (Zero Width Space inserted after '-' to provide line breaking opportunity)
    * @default "auto"
    * @access private
    * @see {@link Hyphenator.config}
    */
    let compound = 'auto';

    /**
    * @member {number} Hyphenator~orphanControl
    * @desc
    * Control how the last words of a line are handled:
    * level 1 (default): last word is hyphenated
    * level 2: last word is not hyphenated
    * level 3: last word is not hyphenated and last space is non breaking
    * @default 1
    * @access private
    */
    let orphanControl = 1;

    /**
    * @member {boolean} Hyphenator~isBookmarklet
    * @desc
    * This is computed by getLocality.
    * True if Hyphanetor runs as bookmarklet.
    * @access private
    */
    const isBookmarklet = locality.isBookmarklet;

    /**
    * @member {string|null} Hyphenator~mainLanguage
    * @desc
    * The general language of the document. In contrast to {@link Hyphenator~defaultLanguage},
    * mainLanguage is defined by the client (i.e. by the html or by a prompt).
    * @access private
    * @see {@link Hyphenator~autoSetMainLanguage}
    */
    let mainLanguage = null;

    /**
    * @member {string|null} Hyphenator~defaultLanguage
    * @desc
    * The language defined by the developper. This language setting is defined by a config option.
    * It is overwritten by any html-lang-attribute and only taken in count, when no such attribute can
    * be found (i.e. just before the prompt).
    * @access private
    * @see {@link Hyphenator.config}
    * @see {@link Hyphenator~autoSetMainLanguage}
    */
    let defaultLanguage = '';

    /**
    * @member {ElementCollection} Hyphenator~elements
    * @desc
    * A class representing all elements (of type Element) that have to be hyphenated. This var is filled by
    * {@link Hyphenator~gatherDocumentInfos}
    * @access private
    */
    const elements = function () {
      /**
       * @constructor Hyphenator~elements~ElementCollection~Element
       * @desc represents a DOM Element with additional information
       * @access private
       */
      const makeElement = function (element) {
        return {
          /**
               * @member {Object} Hyphenator~elements~ElementCollection~Element~element
               * @desc A DOM Element
               * @access protected
               */
          element: element,
          /**
           * @member {boolean} Hyphenator~elements~ElementCollection~Element~hyphenated
           * @desc Marks if the element has been hyphenated
           * @access protected
           */
          hyphenated: false,
          /**
           * @member {boolean} Hyphenator~elements~ElementCollection~Element~treated
           * @desc Marks if information of the element has been collected but not hyphenated (e.g. dohyphenation is off)
           * @access protected
           */
          treated: false
        };
      };
      /**
       * @constructor Hyphenator~elements~ElementCollection
       * @desc A collection of Elements to be hyphenated
       * @access protected
       */
      const makeElementCollection = function () {
        /**
                 * @member {number} Hyphenator~elements~ElementCollection~counters
                 * @desc Array of [number of collected elements, number of hyphenated elements]
                 * @access protected
                 */
        const counters = [0, 0];
        /**
             * @member {Object.<string, Array.<Element>>} Hyphenator~elements~ElementCollection~list
             * @desc The collection of elements, where the key is a language code and the value is an array of elements
             * @access protected
             */
        const list = {};
        /**
             * @method Hyphenator~elements~ElementCollection.prototype~add
             * @augments Hyphenator~elements~ElementCollection
             * @access protected
             * @desc adds a DOM element to the collection
             * @param {Object} el - The DOM element
             * @param {string} lang - The language of the element
             */
        const add = function (el, lang) {
          const elo = makeElement(el);
          if (!list.hasOwnProperty(lang)) {
            list[lang] = [];
          }
          list[lang].push(elo);
          counters[0] += 1;
          return elo;
        };
        /**
             * @callback Hyphenator~elements~ElementCollection.prototype~each~callback fn - The callback that is executed for each element
             * @param {string} [k] The key (i.e. language) of the collection
             * @param {Hyphenator~elements~ElementCollection~Element} element
             */

        /**
             * @method Hyphenator~elements~ElementCollection.prototype~each
             * @augments Hyphenator~elements~ElementCollection
             * @access protected
             * @desc takes each element of the collection as an argument of fn
             * @param {Hyphenator~elements~ElementCollection.prototype~each~callback} fn - A function that takes an element as an argument
             */
        const each = function (fn) {
          forEachKey(list, function (k) {
            if (fn.length === 2) {
              fn(k, list[k]);
            } else {
              fn(list[k]);
            }
          });
        };
        return {
          counters: counters,
          list: list,
          add: add,
          each: each
        };
      };
      return makeElementCollection();
    }();

    /**
    * @member {Object.<sting, string>} Hyphenator~exceptions
    * @desc
    * An object containing exceptions as comma separated strings for each language.
    * When the language-objects are loaded, their exceptions are processed, copied here and then deleted.
    * Exceptions can also be set by the user.
    * @see {@link Hyphenator~prepareLanguagesObj}
    * @access private
    */
    const exceptions = {};

    /**
    * @member {Object.<string, boolean>} Hyphenator~docLanguages
    * @desc
    * An object holding all languages used in the document. This is filled by
    * {@link Hyphenator~gatherDocumentInfos}
    * @access private
    */
    const docLanguages = {};

    /**
    * @member {string} Hyphenator~url
    * @desc
    * A string containing a insane RegularExpression to match URL's
    * @access private
    */
    const url = '(?:\\w*:\/\/)?(?:(?:\\w*:)?(?:\\w*)@)?(?:(?:(?:[\\d]{1,3}\\.){3}(?:[\\d]{1,3}))|(?:(?:www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.(?:[a-z]{2,4})))(?::\\d*)?(?:\/[\\w#!:\\.?\\+=&%@!\\-]*)*';
    //      protocoll     usr     pwd                    ip               or                          host                 tld        port               path

    /**
    * @member {string} Hyphenator~mail
    * @desc
    * A string containing a RegularExpression to match mail-adresses
    * @access private
    */
    const mail = '[\\w-\\.]+@[\\w\\.]+';

    /**
    * @member {string} Hyphenator~zeroWidthSpace
    * @desc
    * A string that holds a char.
    * Depending on the browser, this is the zero with space or an empty string.
    * zeroWidthSpace is used to break URLs
    * @access private
    */
    const zeroWidthSpace = function () {
      let zws;
      const ua = window.navigator.userAgent.toLowerCase();
      zws = String.fromCharCode(8203); // Unicode zero width space
      if (ua.indexOf('msie 6') !== -1) {
        zws = ''; // IE6 doesn't support zws
      }
      if (ua.indexOf('opera') !== -1 && ua.indexOf('version/10.00') !== -1) {
        zws = ''; // opera 10 on XP doesn't support zws
      }
      return zws;
    }();

    /**
    * @method Hyphenator~onBeforeWordHyphenation
    * @desc
    * This method is called just before a word is hyphenated.
    * It is called with two parameters: the word and its language.
    * The method must return a string (aka the word).
    * @see {@link Hyphenator.config}
    * @access private
    * @param {string} word
    * @param {string} lang
    * @return {string} The word that goes into hyphenation
    */
    let onBeforeWordHyphenation = function (word) {
      return word;
    };

    /**
    * @method Hyphenator~onAfterWordHyphenation
    * @desc
    * This method is called for each word after it is hyphenated.
    * Takes the word as a first parameter and its language as a second parameter.
    * Returns a string that will replace the word that has been hyphenated.
    * @see {@link Hyphenator.config}
    * @access private
    * @param {string} word
    * @param {string} lang
    * @return {string} The word that goes into hyphenation
    */
    let onAfterWordHyphenation = function (word) {
      return word;
    };

    /**
    * @method Hyphenator~onHyphenationDone
    * @desc
    * A method to be called, when the last element has been hyphenated.
    * If there are frames the method is called for each frame.
    * Therefore the location.href of the contextWindow calling this method is given as a parameter
    * @see {@link Hyphenator.config}
    * @param {string} context
    * @access private
    */
    let onHyphenationDone = function (context) {
      return context;
    };

    /**
    * @name Hyphenator~selectorFunction
    * @desc
    * A function set by the user that has to return a HTMLNodeList or array of Elements to be hyphenated.
    * By default this is set to false so we can check if a selectorFunction is set…
    * @see {@link Hyphenator.config}
    * @see {@link Hyphenator~mySelectorFunction}
    * @default false
    * @type {function|boolean}
    * @access private
    */
    let selectorFunction = false;

    /**
    * @name Hyphenator~flattenNodeList
    * @desc
    * Takes a nodeList and returns an array with all elements that are not contained by another element in the nodeList
    * By using this function the elements returned by selectElements can be 'flattened'.
    * @see {@link Hyphenator~selectElements}
    * @param {nodeList} nl
    * @return {Array} Array of 'parent'-elements
    * @access private
    */
    function flattenNodeList(nl) {
      const parentElements = [];
      let i = 1;
      let j = 0;
      let isParent = true;
      parentElements.push(nl[0]); // add the first item, since this is always an parent

      while (i < nl.length) {
        // cycle through nodeList
        while (j < parentElements.length) {
          // cycle through parentElements
          if (parentElements[j].contains(nl[i])) {
            isParent = false;
            break;
          }
          j += 1;
        }
        if (isParent) {
          parentElements.push(nl[i]);
        }
        isParent = true;
        i += 1;
      }
      return parentElements;
    }

    /**
    * @method Hyphenator~mySelectorFunction
    * @desc
    * A function that returns a HTMLNodeList or array of Elements to be hyphenated.
    * By default it uses the classname ('hyphenate') to select the elements.
    * @access private
    */
    function mySelectorFunction(hyphenateClass) {
      let tmp;
      let el = [];
      let i = 0;
      if (window.document.getElementsByClassName) {
        el = contextWindow.document.getElementsByClassName(hyphenateClass);
      } else if (window.document.querySelectorAll) {
        el = contextWindow.document.querySelectorAll('.' + hyphenateClass);
      } else {
        tmp = contextWindow.document.getElementsByTagName('*');
        while (i < tmp.length) {
          if (tmp[i].className.indexOf(hyphenateClass) !== -1 && tmp[i].className.indexOf(dontHyphenateClass) === -1) {
            el.push(tmp[i]);
          }
          i += 1;
        }
      }
      return el;
    }

    /**
    * @method Hyphenator~selectElements
    * @desc
    * A function that uses either selectorFunction set by the user
    * or the default mySelectorFunction.
    * @access private
    */
    function selectElements() {
      let elems;
      if (selectorFunction) {
        elems = selectorFunction();
      } else {
        elems = mySelectorFunction(hyphenateClass);
      }
      if (elems.length !== 0) {
        elems = flattenNodeList(elems);
      }
      return elems;
    }

    /**
    * @member {string} Hyphenator~intermediateState
    * @desc
    * The visibility of elements while they are hyphenated:
    * 'visible': unhyphenated text is visible and then redrawn when hyphenated.
    * 'hidden': unhyphenated text is made invisible as soon as possible and made visible after hyphenation.
    * @default 'hidden'
    * @see {@link Hyphenator.config}
    * @access private
    */
    let intermediateState = 'hidden';

    /**
    * @member {string} Hyphenator~unhide
    * @desc
    * How hidden elements unhide: either simultaneous (default: 'wait') or progressively.
    * 'wait' makes Hyphenator.js to wait until all elements are hyphenated (one redraw)
    * With 'progressive' Hyphenator.js unhides elements as soon as they are hyphenated.
    * @see {@link Hyphenator.config}
    * @access private
    */
    let unhide = 'wait';

    /**
    * @member {Array.<Hyphenator~CSSEdit>} Hyphenator~CSSEditors
    * @desc A container array that holds CSSEdit classes
    * For each window object one CSSEdit class is inserted
    * @access private
    */
    const CSSEditors = [];

    /**
    * @constructor Hyphenator~CSSEdit
    * @desc
    * This class handles access and editing of StyleSheets.
    * Thanks to this styles (e.g. hiding and unhiding elements upon hyphenation)
    * can be changed in one place instead for each element.
    * @access private
    */
    function makeCSSEdit(w) {
      w = w || window;
      const doc = w.document;
      /**
       * @member {Object} Hyphenator~CSSEdit~sheet
       * @desc
       * A StyleSheet, where Hyphenator can write to.
       * If no StyleSheet can be found, lets create one.
       * @access private
       */
      const sheet = function () {
        let i = 0;
        const l = doc.styleSheets.length;
        let s;
        let element;
        let r = false;
        while (i < l) {
          s = doc.styleSheets[i];
          try {
            if (s.cssRules) {
              r = s;
              break;
            }
          } catch (ignore) {
            // Empty.
          }
          i += 1;
        }
        if (r === false) {
          element = doc.createElement('style');
          element.type = 'text/css';
          doc.getElementsByTagName('head')[0].appendChild(element);
          r = doc.styleSheets[doc.styleSheets.length - 1];
        }
        return r;
      }();

      /**
       * @typedef {Object} Hyphenator~CSSEdit~changes
       * @property {Object} sheet - The StyleSheet where the change was made
       * @property {number} index - The index of the changed rule
       */

      /**
       * @member {Array.<changes>} Hyphenator~CSSEdit~changes
       * @desc
       * Sets a CSS rule for a specified selector
       * @access private
       */
      const changes = [];

      /**
       * @typedef Hyphenator~CSSEdit~rule
       * @property {number} index - The index of the rule
       * @property {Object} rule - The style rule
       */
      /**
       * @method Hyphenator~CSSEdit~findRule
       * @desc
       * Searches the StyleSheets for a given selector and returns an object containing the rule.
       * If nothing can be found, false is returned.
       * @param {string} sel
       * @return {Hyphenator~CSSEdit~rule|false}
       * @access private
       */
      const findRule = function (sel) {
        let s;
        let rule;
        const sheets = w.document.styleSheets;
        let rules;
        let i = 0;
        let j = 0;
        let r = false;
        while (i < sheets.length) {
          s = sheets[i];
          try {
            // FF has issues here with external CSS (s.o.p)
            if (s.cssRules) {
              rules = s.cssRules;
            } else if (s.rules) {
              // IE < 9
              rules = s.rules;
            }
          } catch (ignore) {
            // Empty.
          }
          if (!!rules && !!rules.length) {
            while (j < rules.length) {
              rule = rules[j];
              if (rule.selectorText === sel) {
                r = {
                  index: j,
                  rule: rule
                };
              }
              j += 1;
            }
          }
          i += 1;
        }
        return r;
      };
      /**
       * @method Hyphenator~CSSEdit~addRule
       * @desc
       * Adds a rule to the {@link Hyphenator~CSSEdit~sheet}
       * @param {string} sel - The selector to be added
       * @param {string} rulesStr - The rules for the specified selector
       * @return {number} index of the new rule
       * @access private
       */
      const addRule = function (sel, rulesStr) {
        let i, r;
        if (sheet.insertRule) {
          if (sheet.cssRules) {
            i = sheet.cssRules.length;
          } else {
            i = 0;
          }
          r = sheet.insertRule(sel + '{' + rulesStr + '}', i);
        } else if (sheet.addRule) {
          // IE < 9
          if (sheet.rules) {
            i = sheet.rules.length;
          } else {
            i = 0;
          }
          sheet.addRule(sel, rulesStr, i);
          r = i;
        }
        return r;
      };
      /**
       * @method Hyphenator~CSSEdit~removeRule
       * @desc
       * Removes a rule with the specified index from the specified sheet
       * @param {Object} sheet - The style sheet
       * @param {number} index - the index of the rule
       * @access private
       */
      const removeRule = function (sheet, index) {
        if (sheet.deleteRule) {
          sheet.deleteRule(index);
        } else {
          // IE < 9
          sheet.removeRule(index);
        }
      };
      return {
        /**
         * @method Hyphenator~CSSEdit.setRule
         * @desc
         * Sets a CSS rule for a specified selector
         * @access public
         * @param {string} sel - Selector
         * @param {string} rulesString - CSS-Rules
         */
        setRule: function (sel, rulesString) {
          let i, cssText;
          const existingRule = findRule(sel);
          if (existingRule) {
            if (existingRule.rule.cssText) {
              cssText = existingRule.rule.cssText;
            } else {
              // IE < 9
              cssText = existingRule.rule.style.cssText.toLowerCase();
            }
            if (cssText !== sel + ' { ' + rulesString + ' }') {
              // cssText of the found rule is not uniquely selector + rulesString,
              if (cssText.indexOf(rulesString) !== -1) {
                // maybe there are other rules or IE < 9
                // clear existing def
                existingRule.rule.style.visibility = '';
              }
              // add rule and register for later removal
              i = addRule(sel, rulesString);
              changes.push({
                sheet: sheet,
                index: i
              });
            }
          } else {
            i = addRule(sel, rulesString);
            changes.push({
              sheet: sheet,
              index: i
            });
          }
        },
        /**
        * @method Hyphenator~CSSEdit.clearChanges
        * @desc
        * Removes all changes Hyphenator has made from the StyleSheets
        * @access public
        */
        clearChanges: function () {
          let change = changes.pop();
          while (change) {
            removeRule(change.sheet, change.index);
            change = changes.pop();
          }
        }
      };
    }

    /**
    * @member {string} Hyphenator~hyphen
    * @desc
    * A string containing the character for in-word-hyphenation
    * @default the soft hyphen
    * @access private
    * @see {@link Hyphenator.config}
    */
    let hyphen = String.fromCharCode(173);

    /**
    * @member {string} Hyphenator~urlhyphen
    * @desc
    * A string containing the character for url/mail-hyphenation
    * @default the zero width space
    * @access private
    * @see {@link Hyphenator.config}
    * @see {@link Hyphenator~zeroWidthSpace}
    */
    let urlhyphen = zeroWidthSpace;

    /**
    * @method Hyphenator~hyphenateURL
    * @desc
    * Puts {@link Hyphenator~urlhyphen} (default: zero width space) after each no-alphanumeric char that my be in a URL.
    * @param {string} url to hyphenate
    * @returns string the hyphenated URL
    * @access public
    */
    function hyphenateURL(url) {
      const tmp = url.replace(/([!#&,./:;?@_\-]+)/gi, '$&' + urlhyphen);
      const parts = tmp.split(urlhyphen);
      let i = 0;
      while (i < parts.length) {
        if (parts[i].length > 2 * min) {
          parts[i] = parts[i].replace(/(\w{3})(\w)/gi, '$1' + urlhyphen + '$2');
        }
        i += 1;
      }
      if (parts[parts.length - 1] === '') {
        parts.pop();
      }
      return parts.join(urlhyphen);
    }

    /**
    * @member {boolean} Hyphenator~safeCopy
    * @desc
    * Defines wether work-around for copy issues is active or not
    * @default true
    * @access private
    * @see {@link Hyphenator.config}
    * @see {@link Hyphenator~registerOnCopy}
    */
    let safeCopy = true;

    /**
    * @method Hyphenator~zeroTimeOut
    * @desc
    * defer execution of a function on the call stack
    * Analog to window.setTimeout(fn, 0) but without a clamped delay if postMessage is supported
    * @access private
    * @see {@link http://dbaron.org/log/20100309-faster-timeouts}
    */
    const zeroTimeOut = function () {
      if (window.postMessage && window.addEventListener) {
        return function () {
          const timeouts = [];
          const msg = 'Hyphenator_zeroTimeOut_message';
          const setZeroTimeOut = function (fn) {
            timeouts.push(fn);
            window.postMessage(msg, '*');
          };
          const handleMessage = function (event) {
            if (event.source === window && event.data === msg) {
              event.stopPropagation();
              if (timeouts.length > 0) {
                // var efn = timeouts.shift();
                // efn();
                timeouts.shift()();
              }
            }
          };
          window.addEventListener('message', handleMessage, true);
          return setZeroTimeOut;
        }();
      }
      return function (fn) {
        window.setTimeout(fn, 0);
      };
    }();

    /**
    * @member {Object} Hyphenator~hyphRunFor
    * @desc
    * stores location.href for documents where run() has been executed
    * to warn when Hyphenator.run() executed multiple times
    * @access private
    * @see {@link Hyphenator~runWhenLoaded}
    */
    const hyphRunFor = {};

    /**
    * @method Hyphenator~runWhenLoaded
    * @desc
    * A crossbrowser solution for the DOMContentLoaded-Event based on
    * <a href = "http://jquery.com/">jQuery</a>
    * I added some functionality: e.g. support for frames and iframes…
    * @param {Object} w the window-object
    * @param {function()} f the function to call when the document is ready
    * @access private
    */
    function runWhenLoaded(w, f) {
      let toplevel;
      const add = window.document.addEventListener ? 'addEventListener' : 'attachEvent';
      const rem = window.document.addEventListener ? 'removeEventListener' : 'detachEvent';
      const pre = window.document.addEventListener ? '' : 'on';
      function init(context) {
        if (hyphRunFor[context.location.href]) {
          onWarning(new Error('Warning: multiple execution of Hyphenator.run() – This may slow down the script!'));
        }
        contextWindow = context || window;
        f();
        hyphRunFor[contextWindow.location.href] = true;
      }
      function doScrollCheck() {
        try {
          // If IE is used, use the trick by Diego Perini
          // http://javascript.nwbox.com/IEContentLoaded/
          w.document.documentElement.doScroll('left');
        } catch (ignore) {
          window.setTimeout(doScrollCheck, 1);
          return;
        }
        // maybe modern IE fired DOMContentLoaded
        if (!hyphRunFor[w.location.href]) {
          documentLoaded = true;
          init(w);
        }
      }
      function doOnEvent(e) {
        let i = 0;
        let haveAccess;
        if (!!e && e.type === 'readystatechange' && w.document.readyState !== 'interactive' && w.document.readyState !== 'complete') {
          return;
        }

        // DOM is ready/interactive, but frames may not be loaded yet!
        // cleanup events
        w.document[rem](pre + 'DOMContentLoaded', doOnEvent, false);
        w.document[rem](pre + 'readystatechange', doOnEvent, false);

        // check frames
        const fl = w.frames.length;
        if (fl === 0 || !doFrames) {
          // there are no frames!
          // cleanup events
          w[rem](pre + 'load', doOnEvent, false);
          documentLoaded = true;
          init(w);
        } else if (doFrames && fl > 0) {
          // we have frames, so wait for onload and then initiate runWhenLoaded recursevly for each frame:
          if (!!e && e.type === 'load') {
            // cleanup events
            w[rem](pre + 'load', doOnEvent, false);
            while (i < fl) {
              // try catch isn't enough for webkit
              try {
                // opera throws only on document.toString-access
                haveAccess = w.frames[i].document.toString();
              } catch (ignore) {
                haveAccess = undefined;
              }
              if (haveAccess) {
                runWhenLoaded(w.frames[i], f);
              }
              i += 1;
            }
            init(w);
          }
        }
      }
      if (documentLoaded || w.document.readyState === 'complete') {
        // Hyphenator has run already (documentLoaded is true) or
        // it has been loaded after onLoad
        documentLoaded = true;
        doOnEvent({
          type: 'load'
        });
      } else {
        // register events
        w.document[add](pre + 'DOMContentLoaded', doOnEvent, false);
        w.document[add](pre + 'readystatechange', doOnEvent, false);
        w[add](pre + 'load', doOnEvent, false);
        toplevel = false;
        try {
          toplevel = !window.frameElement;
        } catch (ignore) {
          // Empty.
        }
        if (toplevel && w.document.documentElement.doScroll) {
          doScrollCheck(); // calls init()
        }
      }
    }

    /**
    * @method Hyphenator~getLang
    * @desc
    * Gets the language of an element. If no language is set, it may use the {@link Hyphenator~mainLanguage}.
    * @param {Object} el The first parameter is an DOM-Element-Object
    * @param {boolean} fallback The second parameter is a boolean to tell if the function should return the {@link Hyphenator~mainLanguage}
    * if there's no language found for the element.
    * @return {string} The language of the element
    * @access private
    */
    function getLang(el, fallback) {
      try {
        return el.getAttribute('lang') ? el.getAttribute('lang').toLowerCase() : el.getAttribute('xml:lang') ? el.getAttribute('xml:lang').toLowerCase() : el.tagName.toLowerCase() !== 'html' ? getLang(el.parentNode, fallback) : fallback ? mainLanguage : null;
      } catch (ignore) {
        // Empty.
      }
    }

    /**
    * @method Hyphenator~autoSetMainLanguage
    * @desc
    * Retrieves the language of the document from the DOM and sets the lang attribute of the html-tag.
    * The function looks in the following places:
    * <ul>
    * <li>lang-attribute in the html-tag</li>
    * <li>&lt;meta http-equiv = "content-language" content = "xy" /&gt;</li>
    * <li>&lt;meta name = "DC.Language" content = "xy" /&gt;</li>
    * <li>&lt;meta name = "language" content = "xy" /&gt;</li>
    * </li>
    * If nothing can be found a prompt using {@link Hyphenator~languageHint} and a prompt-string is displayed.
    * If the retrieved language is in the object {@link Hyphenator~supportedLangs} it is copied to {@link Hyphenator~mainLanguage}
    * @access private
    */
    function autoSetMainLanguage(w) {
      w = w || contextWindow;
      const el = w.document.getElementsByTagName('html')[0];
      const m = w.document.getElementsByTagName('meta');
      let i = 0;
      const getLangFromUser = function () {
        let ml;
        let text;
        const dH = 300;
        const dW = 450;
        const dX = Math.floor((w.outerWidth - 450) / 2) + window.screenX;
        const dY = Math.floor((w.outerHeight - 300) / 2) + window.screenY;
        let ul;
        let languageHint;
        if (!!window.showModalDialog && w.location.href.indexOf(basePath) !== -1) {
          ml = window.showModalDialog(basePath + 'modalLangDialog.html', supportedLangs, "dialogWidth: 450px; dialogHeight: 300px; dialogtop: " + dY + '; dialogleft: ' + dX + '; center: on; resizable: off; scroll: off;');
        } else {
          languageHint = function () {
            let r = '';
            forEachKey(supportedLangs, function (k) {
              r += k + ', ';
            });
            r = r.substring(0, r.length - 2);
            return r;
          }();
          ul = window.navigator.language || window.navigator.userLanguage;
          ul = ul.substring(0, 2);
          if (!!supportedLangs[ul] && supportedLangs[ul].prompt !== '') {
            text = supportedLangs[ul].prompt;
          } else {
            text = supportedLangs.en.prompt;
          }
          text += ' (ISO 639-1)\n\n' + languageHint;
          ml = window.prompt(window.unescape(text), ul).toLowerCase();
        }
        return ml;
      };
      mainLanguage = getLang(el, false);
      if (!mainLanguage) {
        while (i < m.length) {
          // <meta http-equiv = "content-language" content="xy">
          if (!!m[i].getAttribute('http-equiv') && m[i].getAttribute('http-equiv').toLowerCase() === 'content-language') {
            mainLanguage = m[i].getAttribute('content').toLowerCase();
          }
          // <meta name = "DC.Language" content="xy">
          if (!!m[i].getAttribute('name') && m[i].getAttribute('name').toLowerCase() === 'dc.language') {
            mainLanguage = m[i].getAttribute('content').toLowerCase();
          }
          // <meta name = "language" content = "xy">
          if (!!m[i].getAttribute('name') && m[i].getAttribute('name').toLowerCase() === 'language') {
            mainLanguage = m[i].getAttribute('content').toLowerCase();
          }
          i += 1;
        }
      }
      // get lang for frame from enclosing document
      if (!mainLanguage && doFrames && !!contextWindow.frameElement) {
        autoSetMainLanguage(window.parent);
      }
      // fallback to defaultLang if set
      if (!mainLanguage && defaultLanguage !== '') {
        mainLanguage = defaultLanguage;
      }
      // ask user for lang
      if (!mainLanguage) {
        mainLanguage = getLangFromUser();
      }
      el.lang = mainLanguage;
    }

    /**
    * @method Hyphenator~gatherDocumentInfos
    * @desc
    * This method runs through the DOM and executes the process()-function on:
    * - every node returned by the {@link Hyphenator~selectorFunction}.
    * @access private
    */
    function gatherDocumentInfos() {
      let elToProcess;
      let urlhyphenEls;
      let tmp;
      let i = 0;
      /**
      * @method Hyphenator~gatherDocumentInfos
      * @desc
      * This method copies the element to the elements-variable, sets its visibility
      * to intermediateState, retrieves its language and recursivly descends the DOM-tree until
      * the child-Nodes aren't of type 1
      * @param {Object} el a DOM element
      * @param {string} plang the language of the parent element
      * @param {boolean} isChild true, if the parent of el has been processed
      */
      function process(el, pLang, isChild) {
        let n;
        let j = 0;
        let hyphenate = true;
        let eLang;
        const useCSS3 = function () {
          css3hyphenateClassHandle = makeCSSEdit(contextWindow);
          css3hyphenateClassHandle.setRule('.' + css3hyphenateClass, css3_h9n.property + ': auto;');
          css3hyphenateClassHandle.setRule('.' + dontHyphenateClass, css3_h9n.property + ': manual;');
          if (eLang !== pLang && css3_h9n.property.indexOf('webkit') !== -1) {
            css3hyphenateClassHandle.setRule('.' + css3hyphenateClass, '-webkit-locale : ' + eLang + ';');
          }
          el.className = el.className + ' ' + css3hyphenateClass;
        };
        const useHyphenator = function () {
          // quick fix for test111.html
          // better: weight elements
          if (isBookmarklet && eLang !== mainLanguage) {
            return;
          }
          if (supportedLangs.hasOwnProperty(eLang)) {
            docLanguages[eLang] = true;
          } else {
            if (supportedLangs.hasOwnProperty(eLang.split('-')[0])) {
              // try subtag
              eLang = eLang.split('-')[0];
              docLanguages[eLang] = true;
            } else if (!isBookmarklet) {
              hyphenate = false;
              onError(new Error('Language "' + eLang + '" is not yet supported.'));
            }
          }
          if (hyphenate) {
            if (intermediateState === 'hidden') {
              el.className = el.className + ' ' + hideClass;
            }
            elements.add(el, eLang);
          }
        };
        isChild = isChild || false;
        if (el.lang && typeof el.lang == 'string') {
          eLang = el.lang.toLowerCase(); // copy attribute-lang to internal eLang
        } else if (!!pLang && pLang !== '') {
          eLang = pLang.toLowerCase();
        } else {
          eLang = getLang(el, true);
        }
        if (!isChild) {
          if (css3 && css3_h9n.support && !!css3_h9n.checkLangSupport(eLang)) {
            useCSS3();
          } else {
            useHyphenator();
          }
        } else {
          if (eLang !== pLang) {
            if (css3 && css3_h9n.support && !!css3_h9n.checkLangSupport(eLang)) {
              useCSS3();
            } else {
              useHyphenator();
            }
          } else {
            if (!css3 || !css3_h9n.support || !css3_h9n.checkLangSupport(eLang)) {
              useHyphenator();
            } // else do nothing
          }
        }
        n = el.childNodes[j];
        while (n) {
          if (n.nodeType === 1 && !dontHyphenate[n.nodeName.toLowerCase()] && n.className.indexOf(dontHyphenateClass) === -1 && n.className.indexOf(urlHyphenateClass) === -1 && !elToProcess[n]) {
            process(n, eLang, true);
          }
          j += 1;
          n = el.childNodes[j];
        }
      }
      function processUrlStyled(el) {
        let n;
        let j = 0;
        n = el.childNodes[j];
        while (n) {
          if (n.nodeType === 1 && !dontHyphenate[n.nodeName.toLowerCase()] && n.className.indexOf(dontHyphenateClass) === -1 && n.className.indexOf(hyphenateClass) === -1 && !urlhyphenEls[n]) {
            processUrlStyled(n);
          } else if (n.nodeType === 3) {
            n.data = hyphenateURL(n.data);
          }
          j += 1;
          n = el.childNodes[j];
        }
      }
      if (css3) {
        // eslint-disable-next-line camelcase
        css3_h9n = css3_gethsupport();
      }
      if (isBookmarklet) {
        elToProcess = contextWindow.document.getElementsByTagName('body')[0];
        process(elToProcess, mainLanguage, false);
      } else {
        if (!css3 && intermediateState === 'hidden') {
          CSSEditors.push(makeCSSEdit(contextWindow));
          CSSEditors[CSSEditors.length - 1].setRule('.' + hyphenateClass, 'visibility: hidden;');
          CSSEditors[CSSEditors.length - 1].setRule('.' + hideClass, 'visibility: hidden;');
          CSSEditors[CSSEditors.length - 1].setRule('.' + unhideClass, 'visibility: visible;');
        }
        elToProcess = selectElements();
        tmp = elToProcess[i];
        while (tmp) {
          process(tmp, '', false);
          i += 1;
          tmp = elToProcess[i];
        }
        urlhyphenEls = mySelectorFunction(urlHyphenateClass);
        i = 0;
        tmp = urlhyphenEls[i];
        while (tmp) {
          processUrlStyled(tmp);
          i += 1;
          tmp = urlhyphenEls[i];
        }
      }
      if (elements.counters[0] === 0) {
        // nothing to hyphenate or all hyphenated by css3
        i = 0;
        while (i < CSSEditors.length) {
          CSSEditors[i].clearChanges();
          i += 1;
        }
        onHyphenationDone(contextWindow.location.href);
      }
    }

    /**
    * @method Hyphenator~createCharMap
    * @desc
    * reads the charCodes from lo.characters and stores them in a bidi map:
    * charMap.int2code =  [0: 97, //a
    *                      1: 98, //b
    *                      2: 99] //c etc.
    * charMap.code2int = {"97": 0, //a
    *                     "98": 1, //b
    *                     "99": 2} //c etc.
    * @access private
    * @param {Object} language object
    */
    function makeCharMap() {
      const int2code = [];
      const code2int = {};
      const add = function (newValue) {
        if (!code2int[newValue]) {
          int2code.push(newValue);
          code2int[newValue] = int2code.length - 1;
        }
      };
      return {
        int2code: int2code,
        code2int: code2int,
        add: add
      };
    }

    /**
    * @constructor Hyphenator~ValueStore
    * @desc Storage-Object for storing hyphenation points (aka values)
    * @access private
    */
    function makeValueStore(len) {
      const indexes = (() => {
        const arr = new Uint32Array(3);
        arr[0] = 1; // start position of a value set
        arr[1] = 1; // next index
        arr[2] = 1; // last index with a significant value
        return arr;
      })();
      const keys = new Uint8Array(len);
      const add = function (p) {
        keys[indexes[1]] = p;
        indexes[2] = indexes[1];
        indexes[1] += 1;
      };
      const add0 = function () {
        // just do a step, since array is initialized with zeroes
        indexes[1] += 1;
      };
      const finalize = function () {
        const start = indexes[0];
        keys[indexes[2] + 1] = 255; // mark end of pattern
        indexes[0] = indexes[2] + 2;
        indexes[1] = indexes[0];
        return start;
      };
      return {
        keys: keys,
        add: add,
        add0: add0,
        finalize: finalize
      };
    }

    /**
    * @method Hyphenator~convertPatternsToArray
    * @desc
    * converts the patterns to a (typed, if possible) array as described by Liang:
    *
    * 1. Create the CharMap: an alphabet of used character codes mapped to an int (e.g. a: "97" -> 0)
    *    This map is bidirectional:
    *    charMap.code2int is an object with charCodes as keys and corresponging ints as values
    *    charMao.int2code is an array of charCodes at int indizes
    *    the length of charMao.int2code is equal the length of the alphabet
    *
    * 2. Create a ValueStore: (typed) array that holds "values", i.e. the digits extracted from the patterns
    *    The first value set starts at index 1 (since the trie is initialized with zeroes, starting at 0 would create errors)
    *    Each value set ends with a value of 255; trailing 0's are not stored. So pattern values like e.g. "010200" will become […,0,1,0,2,255,…]
    *    The ValueStore-Object manages handling of indizes automatically. Use ValueStore.add(p) to add a running value.
    *    Use ValueStore.finalize() when the last value of a pattern is added. It will add the final 255, prepare the valueStore for new values
    *    and return the starting index of the pattern.
    *    To prevent doubles we could temporarly store the values in a object {value: startIndex} and only add new values,
    *    but this object deoptimizes very fast (new hidden map for each entry); here we gain speed and pay memory
    *
    * 3. Create and zero initialize a (typed) array to store the trie. The trie uses two slots for each entry/node:
    *    i: a link to another position in the array or -1 if the pattern ends here or more rows have to be added.
    *    i + 1: a link to a value in the ValueStore or 0 if there's no value for the path to this node.
    *    Although the array is one-dimensional it can be described as an array of "rows",
    *    where each "row" is an array of length trieRowLength (see below).
    *    The first entry of this "row" represents the first character of the alphabet, the second a possible link to value store,
    *    the third represents the second character of the alphabet and so on…
    *
    * 4. Initialize trieRowLength (length of the alphabet * 2)
    *
    * 5. Now we apply extract to each pattern collection (patterns of the same length are collected and concatenated to one string)
    *    extract goes through these pattern collections char by char and adds them either to the ValueStore (if they are digits) or
    *    to the trie (adding more "rows" if necessary, i.e. if the last link pointed to -1).
    *    So the first "row" holds all starting characters, where the subsequent rows hold the characters that follow the
    *    character that link to this row. Therefor the array is dense at the beginning and very sparse at the end.
    *
    *
    * @access private
    * @param {Object} language object
    */
    function convertPatternsToArray(lo) {
      let trieNextEmptyRow = 0;
      let i;
      const extract = function (patternSizeInt, patterns) {
        let charPos = 0;
        let charCode;
        let mappedCharCode = 0;
        let rowStart = 0;
        let nextRowStart = 0;
        let prevWasDigit = false;
        while (charPos < patterns.length) {
          charCode = patterns.charCodeAt(charPos);
          if ((charPos + 1) % patternSizeInt != 0) {
            // more to come…
            if (charCode <= 57 && charCode >= 49) {
              // charCode is a digit
              valueStore.add(charCode - 48);
              prevWasDigit = true;
            } else {
              // charCode is alphabetical
              if (!prevWasDigit) {
                valueStore.add0();
              }
              prevWasDigit = false;
              if (nextRowStart === -1) {
                nextRowStart = trieNextEmptyRow + trieRowLength;
                trieNextEmptyRow = nextRowStart;
                indexedTrie[rowStart + mappedCharCode * 2] = nextRowStart;
              }
              mappedCharCode = charMapc2i[charCode];
              rowStart = nextRowStart;
              nextRowStart = indexedTrie[rowStart + mappedCharCode * 2];
              if (nextRowStart === 0) {
                indexedTrie[rowStart + mappedCharCode * 2] = -1;
                nextRowStart = -1;
              }
            }
          } else {
            // last part of pattern
            if (charCode <= 57 && charCode >= 49) {
              // the last charCode is a digit
              valueStore.add(charCode - 48);
              indexedTrie[rowStart + mappedCharCode * 2 + 1] = valueStore.finalize();
            } else {
              // the last charCode is alphabetical
              if (!prevWasDigit) {
                valueStore.add0();
              }
              valueStore.add0();
              if (nextRowStart === -1) {
                nextRowStart = trieNextEmptyRow + trieRowLength;
                trieNextEmptyRow = nextRowStart;
                indexedTrie[rowStart + mappedCharCode * 2] = nextRowStart;
              }
              mappedCharCode = charMapc2i[charCode];
              rowStart = nextRowStart;
              if (indexedTrie[rowStart + mappedCharCode * 2] === 0) {
                indexedTrie[rowStart + mappedCharCode * 2] = -1;
              }
              indexedTrie[rowStart + mappedCharCode * 2 + 1] = valueStore.finalize();
            }
            rowStart = 0;
            nextRowStart = 0;
            prevWasDigit = false;
          }
          charPos += 1;
        }
      }; /*,
         prettyPrintIndexedTrie = function (rowLength) {
           var s = "0: ",
               idx;
           for (idx = 0; idx < indexedTrie.length; idx += 1) {
               s += indexedTrie[idx];
               s += ",";
               if ((idx + 1) % rowLength === 0) {
                   s += "\n" + (idx + 1) + ": ";
               }
           }
           console.log(s);
         }; */

      lo.charMap = makeCharMap();
      i = 0;
      while (i < lo.patternChars.length) {
        lo.charMap.add(lo.patternChars.charCodeAt(i));
        i += 1;
      }
      const charMapc2i = lo.charMap.code2int;
      const valueStore = makeValueStore(lo.valueStoreLength);
      lo.valueStore = valueStore;
      lo.indexedTrie = new Int32Array(lo.patternArrayLength * 2);
      const indexedTrie = lo.indexedTrie;
      const trieRowLength = lo.charMap.int2code.length * 2;
      forEachKey(lo.patterns, function (i) {
        extract(parseInt(i, 10), lo.patterns[i]);
      });
      // prettyPrintIndexedTrie(lo.charMap.int2code.length * 2);
    }

    /**
    * @method Hyphenator~recreatePattern
    * @desc
    * Recreates the pattern for the reducedPatternSet
    * @param {string} pattern The pattern (chars)
    * @param {string} nodePoints The nodePoints (integers)
    * @access private
    * @return {string} The pattern (chars and numbers)
    */
    function recreatePattern(pattern, nodePoints) {
      const r = [];
      const c = pattern.split('');
      let i = 0;
      while (i <= c.length) {
        if (nodePoints[i] && nodePoints[i] !== 0) {
          r.push(nodePoints[i]);
        }
        if (c[i]) {
          r.push(c[i]);
        }
        i += 1;
      }
      return r.join('');
    }

    /**
    * @method Hyphenator~convertExceptionsToObject
    * @desc
    * Converts a list of comma seprated exceptions to an object:
    * 'Fortran,Hy-phen-a-tion' -> {'Fortran':'Fortran','Hyphenation':'Hy-phen-a-tion'}
    * @access private
    * @param {string} exc a comma separated string of exceptions (without spaces)
    * @return {Object.<string, string>}
    */
    function convertExceptionsToObject(exc) {
      const w = exc.split(', ');
      const r = {};
      let i = 0;
      const l = w.length;
      let key;
      while (i < l) {
        key = w[i].replace(/-/g, '');
        if (!r.hasOwnProperty(key)) {
          r[key] = w[i];
        }
        i += 1;
      }
      return r;
    }

    /**
    * @method Hyphenator~loadPatterns
    * @desc
    * Checks if the requested file is available in the network.
    * Adds a &lt;script&gt;-Tag to the DOM to load an externeal .js-file containing patterns and settings for the given language.
    * If the given language is not in the {@link Hyphenator~supportedLangs}-Object it returns.
    * One may ask why we are not using AJAX to load the patterns. The XMLHttpRequest-Object
    * has a same-origin-policy. This makes the Bookmarklet impossible.
    * @param {string} lang The language to load the patterns for
    * @access private
    * @see {@link Hyphenator~basePath}
    */
    function loadPatterns(lang, cb) {
      let location;
      let xhr;
      let head;
      let script;
      let done = false;
      if (supportedLangs.hasOwnProperty(lang) && !Hyphenator.languages[lang]) {
        location = basePath + 'patterns/' + supportedLangs[lang].file;
      } else {
        return;
      }
      if (isLocal && !isBookmarklet) {
        // check if 'location' is available:
        xhr = new XMLHttpRequest();
        xhr.open('HEAD', location, true);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 2) {
            if (xhr.status >= 400) {
              onError(new Error('Could not load\n' + location));
              delete docLanguages[lang];
              return;
            }
            xhr.abort();
          }
        };
        xhr.send(null);
      }
      if (createElem) {
        head = window.document.getElementsByTagName('head').item(0);
        script = createElem('script', window);
        script.src = location;
        script.type = 'text/javascript';
        script.charset = 'utf8';
        script.onreadystatechange = function () {
          if (!done && (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete')) {
            done = true;
            cb();

            // Handle memory leak in IE
            script.onreadystatechange = null;
            script.onload = null;
            if (head && script.parentNode) {
              head.removeChild(script);
            }
          }
        };
        script.onload = script.onreadystatechange;
        head.appendChild(script);
      }
    }

    /**
    * @method Hyphenator~prepareLanguagesObj
    * @desc
    * Adds some feature to the language object:
    * - cache
    * - exceptions
    * Converts the patterns to a trie using {@link Hyphenator~convertPatterns}
    * @access private
    * @param {string} lang The language of the language object
    */
    function prepareLanguagesObj(lang) {
      const lo = Hyphenator.languages[lang];
      let wrd;
      if (!lo.prepared) {
        if (enableCache) {
          lo.cache = {};
          // Export
          // lo['cache'] = lo.cache;
        }
        if (enableReducedPatternSet) {
          lo.redPatSet = {};
        }
        if (leftmin > lo.leftmin) {
          lo.leftmin = leftmin;
        }
        if (rightmin > lo.rightmin) {
          lo.rightmin = rightmin;
        }
        // add exceptions from the pattern file to the local 'exceptions'-obj
        if (lo.hasOwnProperty('exceptions')) {
          Hyphenator.addExceptions(lang, lo.exceptions);
          delete lo.exceptions;
        }
        // copy global exceptions to the language specific exceptions
        if (exceptions.hasOwnProperty('global')) {
          if (exceptions.hasOwnProperty(lang)) {
            exceptions[lang] += ', ' + exceptions.global;
          } else {
            exceptions[lang] = exceptions.global;
          }
        }
        // move exceptions from the the local 'exceptions'-obj to the 'language'-object
        if (exceptions.hasOwnProperty(lang)) {
          lo.exceptions = convertExceptionsToObject(exceptions[lang]);
          delete exceptions[lang];
        } else {
          lo.exceptions = {};
        }
        convertPatternsToArray(lo);
        wrd = '[\\w' + lo.specialChars + lo.specialChars.normalize('NFD') + String.fromCharCode(173) + String.fromCharCode(8204) + '-]{' + min + ',}';
        lo.genRegExp = new RegExp('(' + wrd + ')|(' + url + ')|(' + mail + ')', 'gi');
        lo.prepared = true;
      }
    }

    /****
    * @method Hyphenator~prepare
    * @desc
    * This funtion prepares the Hyphenator~Object: If RemoteLoading is turned off, it assumes
    * that the patternfiles are loaded, all conversions are made and the callback is called.
    * If storage is active the object is retrieved there.
    * If RemoteLoading is on (default), it loads the pattern files and repeatedly checks Hyphenator.languages.
    * If a patternfile is loaded the patterns are stored in storage (if enabled),
    * converted to their object style and the lang-object extended.
    * Finally the callback is called.
    * @access private
    */
    function prepare(callback) {
      let tmp1;
      function languagesLoaded() {
        forEachKey(docLanguages, function (l) {
          if (Hyphenator.languages.hasOwnProperty(l)) {
            delete docLanguages[l];
            if (storage) {
              storage.setItem(l, window.JSON.stringify(Hyphenator.languages[l]));
            }
            prepareLanguagesObj(l);
            callback(l);
          }
        });
      }
      if (!enableRemoteLoading) {
        forEachKey(Hyphenator.languages, function (lang) {
          prepareLanguagesObj(lang);
        });
        callback('*');
        return;
      }
      // get all languages that are used and preload the patterns
      forEachKey(docLanguages, function (lang) {
        if (!!storage && storage.test(lang)) {
          Hyphenator.languages[lang] = window.JSON.parse(storage.getItem(lang));
          prepareLanguagesObj(lang);
          if (exceptions.hasOwnProperty('global')) {
            tmp1 = convertExceptionsToObject(exceptions.global);
            forEachKey(tmp1, function (tmp2) {
              Hyphenator.languages[lang].exceptions[tmp2] = tmp1[tmp2];
            });
          }
          // Replace exceptions since they may have been changed:
          if (exceptions.hasOwnProperty(lang)) {
            tmp1 = convertExceptionsToObject(exceptions[lang]);
            forEachKey(tmp1, function (tmp2) {
              Hyphenator.languages[lang].exceptions[tmp2] = tmp1[tmp2];
            });
            delete exceptions[lang];
          }
          // Replace genRegExp since it may have been changed:
          tmp1 = '[\\w' + Hyphenator.languages[lang].specialChars + Hyphenator.languages[lang].specialChars.normalize('NFD') + String.fromCharCode(173) + String.fromCharCode(8204) + '-]{' + min + ',}';
          Hyphenator.languages[lang].genRegExp = new RegExp('(' + tmp1 + ')|(' + url + ')|(' + mail + ')', 'gi');
          if (enableCache) {
            if (!Hyphenator.languages[lang].cache) {
              Hyphenator.languages[lang].cache = {};
            }
          }
          delete docLanguages[lang];
          callback(lang);
        } else {
          loadPatterns(lang, languagesLoaded);
        }
      });
      // call languagesLoaded in case language has been loaded manually
      // and remoteLoading is on (onload won't fire)
      languagesLoaded();
    }

    /**
    * @method Hyphenator~toggleBox
    * @desc
    * Creates the toggleBox: a small button to turn off/on hyphenation on a page.
    * @see {@link Hyphenator.config}
    * @access private
    */
    let toggleBox = function () {
      let bdy;
      let myTextNode;
      const text = Hyphenator.doHyphenation ? 'Hy-phen-a-tion' : 'Hyphenation';
      let myBox = contextWindow.document.getElementById('HyphenatorToggleBox');
      if (myBox) {
        myBox.firstChild.data = text;
      } else {
        bdy = contextWindow.document.getElementsByTagName('body')[0];
        myBox = createElem('div', contextWindow);
        myBox.setAttribute('id', 'HyphenatorToggleBox');
        myBox.setAttribute('class', dontHyphenateClass);
        myTextNode = contextWindow.document.createTextNode(text);
        myBox.appendChild(myTextNode);
        myBox.onclick = Hyphenator.toggleHyphenation;
        myBox.style.position = 'absolute';
        myBox.style.top = '0px';
        myBox.style.right = '0px';
        myBox.style.zIndex = '1000';
        myBox.style.margin = '0';
        myBox.style.backgroundColor = '#AAAAAA';
        myBox.style.color = '#FFFFFF';
        myBox.style.font = '6pt Arial';
        myBox.style.letterSpacing = '0.2em';
        myBox.style.padding = '3px';
        myBox.style.cursor = 'pointer';
        myBox.style.WebkitBorderBottomLeftRadius = '4px';
        myBox.style.MozBorderRadiusBottomleft = '4px';
        myBox.style.borderBottomLeftRadius = '4px';
        bdy.appendChild(myBox);
      }
    };

    /**
    * @method Hyphenator~doCharSubst
    * @desc
    * Replace chars in a word
    *
    * @param {Object} loCharSubst Map of substitutions ({'ä': 'a', 'ü': 'u', …})
    * @param {string} w the word
    * @returns string The word with substituted characers
    * @access private
    */
    function doCharSubst(loCharSubst, w) {
      let r = w;
      forEachKey(loCharSubst, function (subst) {
        r = r.replace(new RegExp(subst, 'g'), loCharSubst[subst]);
      });
      return r;
    }

    /**
    * @member {Array} Hyphenator~wwAsMappedCharCodeStore
    * @desc
    * Array (typed if supported) container for charCodes
    * @access private
    * @see {@link Hyphenator~hyphenateWord}
    */
    const wwAsMappedCharCodeStore = new Int32Array(64);

    /**
    * @member {Array} Hyphenator~wwhpStore
    * @desc
    * Array (typed if supported) container for hyphenation points
    * @access private
    * @see {@link Hyphenator~hyphenateWord}
    */
    const wwhpStore = new Uint8Array(64);

    /**
    * @method Hyphenator~hyphenateCompound
    * @desc
    * Treats compound words accordingly to the 'compound' setting
    *
    * @param {Object} lo A language object (containing the patterns)
    * @param {string} lang The language of the word
    * @param {string} word The word
    * @returns string The (hyphenated) compound word
    * @access private
    */
    function hyphenateCompound(lo, lang, word) {
      let hw;
      let parts;
      let i = 0;
      switch (compound) {
        case 'auto':
          parts = word.split('-');
          while (i < parts.length) {
            if (parts[i].length >= min) {
              parts[i] = hyphenateWord(lo, lang, parts[i]);
            }
            i += 1;
          }
          hw = parts.join('-');
          break;
        case 'all':
          parts = word.split('-');
          while (i < parts.length) {
            if (parts[i].length >= min) {
              parts[i] = hyphenateWord(lo, lang, parts[i]);
            }
            i += 1;
          }
          hw = parts.join('-' + zeroWidthSpace);
          break;
        case 'hyphen':
          hw = word.replace('-', '-' + zeroWidthSpace);
          break;
        default:
          onError(new Error('Hyphenator.settings: compound setting "' + compound + '" not known.'));
      }
      return hw;
    }

    /**
    * @method Hyphenator~hyphenateWord
    * @desc
    * This function is the heart of Hyphenator.js. It returns a hyphenated word.
    *
    * If there's already a {@link Hyphenator~hypen} in the word, the word is returned as it is.
    * If the word is in the exceptions list or in the cache, it is retrieved from it.
    * If there's a '-' it calls Hyphenator~hyphenateCompound
    * The hyphenated word is returned and (if acivated) cached.
    * Both special Events onBeforeWordHyphenation and onAfterWordHyphenation are called for the word.
    * @param {Object} lo A language object (containing the patterns)
    * @param {string} lang The language of the word
    * @param {string} word The word
    * @returns string The hyphenated word
    * @access private
    */
    function hyphenateWord(lo, lang, word) {
      let pattern;
      let ww;
      let wwlen;
      const wwhp = wwhpStore;
      let pstart = 0;
      let plen;
      let hp;
      let hpc;
      const wordLength = word.length;
      let hw = '';
      const charMap = lo.charMap.code2int;
      let charCode;
      let mappedCharCode;
      let row;
      let link;
      let value;
      let values;
      const indexedTrie = lo.indexedTrie;
      const valueStore = lo.valueStore.keys;
      const wwAsMappedCharCode = wwAsMappedCharCodeStore;
      word = onBeforeWordHyphenation(word, lang);
      if (word === '') {
        hw = '';
      } else if (enableCache && lo.cache && lo.cache.hasOwnProperty(word)) {
        // the word is in the cache
        hw = lo.cache[word];
      } else if (word.indexOf(hyphen) !== -1) {
        // word already contains shy; -> leave at it is!
        hw = word;
      } else if (lo.exceptions.hasOwnProperty(word)) {
        // the word is in the exceptions list
        hw = lo.exceptions[word].replace(/-/g, hyphen);
      } else if (word.indexOf('-') !== -1) {
        hw = hyphenateCompound(lo, lang, word);
      } else {
        ww = word.toLowerCase();
        ww = ww.normalize('NFC');
        if (lo.hasOwnProperty('charSubstitution')) {
          ww = doCharSubst(lo.charSubstitution, ww);
        }
        if (word.indexOf("'") !== -1) {
          ww = ww.replace(/'/g, '’'); // replace APOSTROPHE with RIGHT SINGLE QUOTATION MARK (since the latter is used in the patterns)
        }
        ww = '_' + ww + '_';
        wwlen = ww.length;
        // prepare wwhp and wwAsMappedCharCode
        while (pstart < wwlen) {
          wwhp[pstart] = 0;
          charCode = ww.charCodeAt(pstart);
          wwAsMappedCharCode[pstart] = charMap.hasOwnProperty(charCode) ? charMap[charCode] : -1;
          pstart += 1;
        }
        // get hyphenation points for all substrings
        pstart = 0;
        while (pstart < wwlen) {
          row = 0;
          pattern = '';
          plen = pstart;
          while (plen < wwlen) {
            mappedCharCode = wwAsMappedCharCode[plen];
            if (mappedCharCode === -1) {
              break;
            }
            if (enableReducedPatternSet) {
              pattern += ww.charAt(plen);
            }
            link = indexedTrie[row + mappedCharCode * 2];
            value = indexedTrie[row + mappedCharCode * 2 + 1];
            if (value > 0) {
              hpc = 0;
              hp = valueStore[value + hpc];
              while (hp !== 255) {
                if (hp > wwhp[pstart + hpc]) {
                  wwhp[pstart + hpc] = hp;
                }
                hpc += 1;
                hp = valueStore[value + hpc];
              }
              if (enableReducedPatternSet) {
                if (!lo.redPatSet) {
                  lo.redPatSet = {};
                }
                if (valueStore.subarray) {
                  values = valueStore.subarray(value, value + hpc);
                } else {
                  values = valueStore.slice(value, value + hpc);
                }
                lo.redPatSet[pattern] = recreatePattern(pattern, values);
              }
            }
            if (link > 0) {
              row = link;
            } else {
              break;
            }
            plen += 1;
          }
          pstart += 1;
        }
        // create hyphenated word
        hp = 0;
        while (hp < wordLength) {
          if (hp >= lo.leftmin && hp <= wordLength - lo.rightmin && wwhp[hp + 1] % 2 != 0) {
            hw += hyphen + word.charAt(hp);
          } else {
            hw += word.charAt(hp);
          }
          hp += 1;
        }
      }
      hw = onAfterWordHyphenation(hw, lang);
      if (enableCache) {
        // put the word in the cache
        lo.cache[word] = hw;
      }
      return hw;
    }

    /**
    * @method Hyphenator~removeHyphenationFromElement
    * @desc
    * Removes all hyphens from the element. If there are other elements, the function is
    * called recursively.
    * Removing hyphens is usefull if you like to copy text. Some browsers are buggy when the copy hyphenated texts.
    * @param {Object} el The element where to remove hyphenation.
    * @access public
    */
    function removeHyphenationFromElement(el) {
      let h;
      let u;
      let i = 0;
      let n;
      switch (hyphen) {
        case '|':
          h = '\\|';
          break;
        case '+':
          h = '\\+';
          break;
        case '*':
          h = '\\*';
          break;
        default:
          h = hyphen;
      }
      switch (urlhyphen) {
        case '|':
          u = '\\|';
          break;
        case '+':
          u = '\\+';
          break;
        case '*':
          u = '\\*';
          break;
        default:
          u = urlhyphen;
      }
      n = el.childNodes[i];
      while (n) {
        if (n.nodeType === 3) {
          n.data = n.data.replace(new RegExp(h, 'g'), '');
          n.data = n.data.replace(new RegExp(u, 'g'), '');
        } else if (n.nodeType === 1) {
          removeHyphenationFromElement(n);
        }
        i += 1;
        n = el.childNodes[i];
      }
    }
    const copy = function () {
      const makeCopy = function () {
        const oncopyHandler = function (e) {
          e = e || window.event;
          let selection;
          let range;
          let rangeShadow;
          let restore;
          const target = e.target || e.srcElement;
          const currDoc = target.ownerDocument;
          const bdy = currDoc.getElementsByTagName('body')[0];
          const targetWindow = currDoc.defaultView || currDoc.parentWindow;
          if (target.tagName && dontHyphenate[target.tagName.toLowerCase()]) {
            // Safari needs this
            return;
          }
          // create a hidden shadow element
          const shadow = currDoc.createElement('div');
          // Moving the element out of the screen doesn't work for IE9 (https://connect.microsoft.com/IE/feedback/details/663981/)
          // shadow.style.overflow = 'hidden';
          // shadow.style.position = 'absolute';
          // shadow.style.top = '-5000px';
          // shadow.style.height = '1px';
          // doing this instead:
          shadow.style.color = window.getComputedStyle ? targetWindow.getComputedStyle(bdy, null).backgroundColor : '#FFFFFF';
          shadow.style.fontSize = '0px';
          bdy.appendChild(shadow);
          if (window.getSelection) {
            // FF3, Webkit, IE9
            e.stopPropagation();
            selection = targetWindow.getSelection();
            range = selection.getRangeAt(0);
            shadow.appendChild(range.cloneContents());
            removeHyphenationFromElement(shadow);
            selection.selectAllChildren(shadow);
            restore = function () {
              shadow.parentNode.removeChild(shadow);
              selection.removeAllRanges(); // IE9 needs that
              selection.addRange(range);
            };
          } else {
            // IE<9
            e.cancelBubble = true;
            selection = targetWindow.document.selection;
            range = selection.createRange();
            shadow.innerHTML = range.htmlText;
            removeHyphenationFromElement(shadow);
            rangeShadow = bdy.createTextRange();
            rangeShadow.moveToElementText(shadow);
            rangeShadow.select();
            restore = function () {
              shadow.parentNode.removeChild(shadow);
              if (range.text !== '') {
                range.select();
              }
            };
          }
          zeroTimeOut(restore);
        };
        const removeOnCopy = function (el) {
          const body = el.ownerDocument.getElementsByTagName('body')[0];
          if (!body) {
            return;
          }
          el = el || body;
          if (window.removeEventListener) {
            el.removeEventListener('copy', oncopyHandler, true);
          } else {
            el.detachEvent('oncopy', oncopyHandler);
          }
        };
        const registerOnCopy = function (el) {
          const body = el.ownerDocument.getElementsByTagName('body')[0];
          if (!body) {
            return;
          }
          el = el || body;
          if (window.addEventListener) {
            el.addEventListener('copy', oncopyHandler, true);
          } else {
            el.attachEvent('oncopy', oncopyHandler);
          }
        };
        return {
          oncopyHandler: oncopyHandler,
          removeOnCopy: removeOnCopy,
          registerOnCopy: registerOnCopy
        };
      };
      return safeCopy ? makeCopy() : false;
    }();

    /**
    * @method Hyphenator~checkIfAllDone
    * @desc
    * Checks if all elements in {@link Hyphenator~elements} are hyphenated, unhides them and fires onHyphenationDone()
    * @access private
    */
    function checkIfAllDone() {
      let allDone = true;
      let i = 0;
      const doclist = {};
      elements.each(function (ellist) {
        let j = 0;
        const l = ellist.length;
        while (j < l) {
          allDone = allDone && ellist[j].hyphenated;
          if (!doclist.hasOwnProperty(ellist[j].element.baseURI)) {
            doclist[ellist[j].element.ownerDocument.location.href] = true;
          }
          doclist[ellist[j].element.ownerDocument.location.href] = doclist[ellist[j].element.ownerDocument.location.href] && ellist[j].hyphenated;
          j += 1;
        }
      });
      if (allDone) {
        if (intermediateState === 'hidden' && unhide === 'progressive') {
          elements.each(function (ellist) {
            let j = 0;
            const l = ellist.length;
            let el;
            while (j < l) {
              el = ellist[j].element;
              el.className = el.className.replace(unhideClassRegExp, '');
              if (el.className === '') {
                el.removeAttribute('class');
              }
              j += 1;
            }
          });
        }
        while (i < CSSEditors.length) {
          CSSEditors[i].clearChanges();
          i += 1;
        }
        forEachKey(doclist, function (doc) {
          onHyphenationDone(doc);
        });
        if (!!storage && storage.deferred.length > 0) {
          i = 0;
          while (i < storage.deferred.length) {
            storage.deferred[i].call();
            i += 1;
          }
          storage.deferred = [];
        }
      }
    }

    /**
    * @method Hyphenator~controlOrphans
    * @desc
    * removes orphans depending on the 'orphanControl'-setting:
    * orphanControl === 1: do nothing
    * orphanControl === 2: prevent last word to be hyphenated
    * orphanControl === 3: prevent one word on a last line (inserts a nobreaking space)
    * @param {string} part - The sring where orphans have to be removed
    * @access private
    */
    function controlOrphans(part) {
      let h, r;
      switch (hyphen) {
        case '|':
          h = '\\|';
          break;
        case '+':
          h = '\\+';
          break;
        case '*':
          h = '\\*';
          break;
        default:
          h = hyphen;
      }
      // strip off blank space at the end (omitted closing tags)
      part = part.replace(/\s*$/, '');
      if (orphanControl >= 2) {
        // remove hyphen points from last word
        r = part.split(' ');
        r[1] = r[1].replace(new RegExp(h, 'g'), '');
        r[1] = r[1].replace(new RegExp(zeroWidthSpace, 'g'), '');
        r = r.join(' ');
      }
      if (orphanControl === 3) {
        // replace spaces by non breaking spaces
        r = r.replace(/ +/g, String.fromCharCode(160));
      }
      return r;
    }

    /**
    * @method Hyphenator~hyphenateElement
    * @desc
    * Takes the content of the given element and - if there's text - replaces the words
    * by hyphenated words. If there's another element, the function is called recursively.
    * When all words are hyphenated, the visibility of the element is set to 'visible'.
    * @param {string} lang - The language-code of the element
    * @param {Element} elo - The element to hyphenate {@link Hyphenator~elements~ElementCollection~Element}
    * @access private
    */
    function hyphenateElement(lang, elo) {
      const el = elo.element;
      let hyphenate;
      let n;
      let i;
      let lo;
      if (Hyphenator.languages.hasOwnProperty(lang) && Hyphenator.doHyphenation) {
        lo = Hyphenator.languages[lang];
        hyphenate = function (match, word, url, mail) {
          let r;
          if (!!url || !!mail) {
            r = hyphenateURL(match);
          } else {
            r = hyphenateWord(lo, lang, word);
          }
          return r;
        };
        if (safeCopy && el.tagName.toLowerCase() !== 'body') {
          copy.registerOnCopy(el);
        }
        i = 0;
        n = el.childNodes[i];
        while (n) {
          if (n.nodeType === 3 // type 3 = #text
          && /\S/.test(n.data) // not just white space
          && n.data.length >= min) {
            // longer then min
            n.data = n.data.replace(lo.genRegExp, hyphenate);
            if (orphanControl !== 1) {
              n.data = n.data.replace(/\S+ \S+\s*$/, controlOrphans);
            }
          }
          i += 1;
          n = el.childNodes[i];
        }
      }
      if (intermediateState === 'hidden' && unhide === 'wait') {
        el.className = el.className.replace(hideClassRegExp, '');
        if (el.className === '') {
          el.removeAttribute('class');
        }
      }
      if (intermediateState === 'hidden' && unhide === 'progressive') {
        el.className = el.className.replace(hideClassRegExp, ' ' + unhideClass);
      }
      elo.hyphenated = true;
      elements.counters[1] += 1;
      if (elements.counters[0] <= elements.counters[1]) {
        checkIfAllDone();
      }
    }

    /**
    * @method Hyphenator~hyphenateLanguageElements
    * @desc
    * Calls hyphenateElement() for all elements of the specified language.
    * If the language is '*' then all elements are hyphenated.
    * This is done with a setTimout
    * to prevent a "long running Script"-alert when hyphenating large pages.
    * Therefore a tricky bind()-function was necessary.
    * @param {string} lang The language of the elements to hyphenate
    * @access private
    */

    function hyphenateLanguageElements(lang) {
      /* function bind(fun, arg1, arg2) {
          return function () {
              return fun(arg1, arg2);
          };
      } */
      let i = 0;
      let l;
      if (lang === '*') {
        elements.each(function (lang, ellist) {
          let j = 0;
          const le = ellist.length;
          while (j < le) {
            // zeroTimeOut(bind(hyphenateElement, lang, ellist[j]));
            hyphenateElement(lang, ellist[j]);
            j += 1;
          }
        });
      } else {
        if (elements.list.hasOwnProperty(lang)) {
          l = elements.list[lang].length;
          while (i < l) {
            // zeroTimeOut(bind(hyphenateElement, lang, elements.list[lang][i]));
            hyphenateElement(lang, elements.list[lang][i]);
            i += 1;
          }
        }
      }
    }

    /**
    * @method Hyphenator~removeHyphenationFromDocument
    * @desc
    * Does what it says and unregisters the onCopyEvent from the elements
    * @access private
    */
    function removeHyphenationFromDocument() {
      elements.each(function (ellist) {
        let i = 0;
        const l = ellist.length;
        while (i < l) {
          removeHyphenationFromElement(ellist[i].element);
          if (safeCopy) {
            copy.removeOnCopy(ellist[i].element);
          }
          ellist[i].hyphenated = false;
          i += 1;
        }
      });
    }

    /**
    * @method Hyphenator~createStorage
    * @desc
    * inits the private var {@link Hyphenator~storage) depending of the setting in {@link Hyphenator~storageType}
    * and the supported features of the system.
    * @access private
    */
    function createStorage() {
      let s;
      function makeStorage(s) {
        const store = s;
        const prefix = 'Hyphenator_' + Hyphenator.version + '_';
        const deferred = [];
        const test = function (name) {
          const val = store.getItem(prefix + name);
          return !!val;
        };
        const getItem = function (name) {
          return store.getItem(prefix + name);
        };
        const setItem = function (name, value) {
          try {
            store.setItem(prefix + name, value);
          } catch (e) {
            onError(e);
          }
        };
        return {
          deferred: deferred,
          test: test,
          getItem: getItem,
          setItem: setItem
        };
      }
      try {
        if (storageType !== 'none' && window.JSON !== undefined && window.localStorage !== undefined && window.sessionStorage !== undefined && window.JSON.stringify !== undefined && window.JSON.parse !== undefined) {
          switch (storageType) {
            case 'session':
              s = window.sessionStorage;
              break;
            case 'local':
              s = window.localStorage;
              break;
            default:
              s = undefined;
              break;
          }
          // check for private mode
          s.setItem('storageTest', '1');
          s.removeItem('storageTest');
        }
      } catch (ignore) {
        // FF throws an error if DOM.storage.enabled is set to false
        s = undefined;
      }
      if (s) {
        storage = makeStorage(s);
      } else {
        storage = undefined;
      }
    }

    /**
    * @method Hyphenator~storeConfiguration
    * @desc
    * Stores the current config-options in DOM-Storage
    * @access private
    */
    function storeConfiguration() {
      if (!storage) {
        return;
      }
      const settings = {
        STORED: true,
        classname: hyphenateClass,
        urlclassname: urlHyphenateClass,
        donthyphenateclassname: dontHyphenateClass,
        minwordlength: min,
        hyphenchar: hyphen,
        urlhyphenchar: urlhyphen,
        togglebox: toggleBox,
        displaytogglebox: displayToggleBox,
        remoteloading: enableRemoteLoading,
        enablecache: enableCache,
        enablereducedpatternset: enableReducedPatternSet,
        onhyphenationdonecallback: onHyphenationDone,
        onerrorhandler: onError,
        onwarninghandler: onWarning,
        intermediatestate: intermediateState,
        selectorfunction: selectorFunction || mySelectorFunction,
        safecopy: safeCopy,
        doframes: doFrames,
        storagetype: storageType,
        orphancontrol: orphanControl,
        dohyphenation: Hyphenator.doHyphenation,
        persistentconfig: persistentConfig,
        defaultlanguage: defaultLanguage,
        useCSS3hyphenation: css3,
        unhide: unhide,
        onbeforewordhyphenation: onBeforeWordHyphenation,
        onafterwordhyphenation: onAfterWordHyphenation,
        leftmin: leftmin,
        rightmin: rightmin,
        compound: compound
      };
      storage.setItem('config', window.JSON.stringify(settings));
    }

    /**
    * @method Hyphenator~restoreConfiguration
    * @desc
    * Retrieves config-options from DOM-Storage and does configuration accordingly
    * @access private
    */
    function restoreConfiguration() {
      let settings;
      if (storage.test('config')) {
        settings = window.JSON.parse(storage.getItem('config'));
        Hyphenator.config(settings);
      }
    }

    /** EXPORTED VALUES**/

    /**
    * @member {string} Hyphenator.version
    * @desc
    * String containing the actual version of Hyphenator.js
    * [major release].[minor releas].[bugfix release]
    * major release: new API, new Features, big changes
    * minor release: new languages, improvements
    * @access public
    */
    const version = '5.2.0(devel)';

    /**
    * @member {boolean} Hyphenator.doHyphenation
    * @desc
    * If doHyphenation is set to false, hyphenateDocument() isn't called.
    * All other actions are performed.
    * @default true
    */
    const doHyphenation = true;

    /**
    * @typedef {Object} Hyphenator.languages.language
    * @property {Number} leftmin - The minimum of chars to remain on the old line
    * @property {Number} rightmin - The minimum of chars to go on the new line
    * @property {string} specialChars - Non-ASCII chars in the alphabet.
    * @property {Object.<number, string>} patterns - the patterns in a compressed format. The key is the length of the patterns in the value string.
    * @property {Object.<string, string>} charSubstitution - optional: a hash table with chars that are replaced during hyphenation
    * @property {string | Object.<string, string>} exceptions - optional: a csv string containing exceptions
    */

    /**
    * @member {Object.<string, Hyphenator.languages.language>} Hyphenator.languages
    * @desc
    * Objects that holds key-value pairs, where key is the language and the value is the
    * language-object loaded from (and set by) the pattern file.
    * @namespace Hyphenator.languages
    * @access public
    */
    const languages = {};

    /**
    * @method Hyphenator.config
    * @desc
    * The Hyphenator.config() function that takes an object as an argument. The object contains key-value-pairs
    * containig Hyphenator-settings.
    * @param {Hyphenator.config} obj
    * @access public
    * @example
    * &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
    * &lt;script type = "text/javascript"&gt;
    *     Hyphenator.config({'minwordlength':4,'hyphenchar':'|'});
    *     Hyphenator.run();
    * &lt;/script&gt;
    */
    function config(obj) {
      const assert = function (name, type) {
        let r;
        const t = typeof obj[name];
        if (t === type) {
          r = true;
        } else {
          onError(new Error('Config onError: ' + name + ' must be of type ' + type));
          r = false;
        }
        return r;
      };
      if (obj.hasOwnProperty('storagetype')) {
        if (assert('storagetype', 'string')) {
          storageType = obj.storagetype;
        }
        if (!storage) {
          createStorage();
        }
      }
      if (!obj.hasOwnProperty('STORED') && storage && obj.hasOwnProperty('persistentconfig') && obj.persistentconfig === true) {
        restoreConfiguration();
      }
      forEachKey(obj, function (key) {
        switch (key) {
          case 'STORED':
            break;
          case 'classname':
            if (assert('classname', 'string')) {
              hyphenateClass = obj[key];
            }
            break;
          case 'urlclassname':
            if (assert('urlclassname', 'string')) {
              urlHyphenateClass = obj[key];
            }
            break;
          case 'donthyphenateclassname':
            if (assert('donthyphenateclassname', 'string')) {
              dontHyphenateClass = obj[key];
            }
            break;
          case 'minwordlength':
            if (assert('minwordlength', 'number')) {
              min = obj[key];
            }
            break;
          case 'hyphenchar':
            if (assert('hyphenchar', 'string')) {
              if (obj.hyphenchar === '&shy;') {
                obj.hyphenchar = String.fromCharCode(173);
              }
              hyphen = obj[key];
            }
            break;
          case 'urlhyphenchar':
            if (obj.hasOwnProperty('urlhyphenchar')) {
              if (assert('urlhyphenchar', 'string')) {
                urlhyphen = obj[key];
              }
            }
            break;
          case 'togglebox':
            if (assert('togglebox', 'function')) {
              toggleBox = obj[key];
            }
            break;
          case 'displaytogglebox':
            if (assert('displaytogglebox', 'boolean')) {
              displayToggleBox = obj[key];
            }
            break;
          case 'remoteloading':
            if (assert('remoteloading', 'boolean')) {
              enableRemoteLoading = obj[key];
            }
            break;
          case 'enablecache':
            if (assert('enablecache', 'boolean')) {
              enableCache = obj[key];
            }
            break;
          case 'enablereducedpatternset':
            if (assert('enablereducedpatternset', 'boolean')) {
              enableReducedPatternSet = obj[key];
            }
            break;
          case 'onhyphenationdonecallback':
            if (assert('onhyphenationdonecallback', 'function')) {
              onHyphenationDone = obj[key];
            }
            break;
          case 'onerrorhandler':
            if (assert('onerrorhandler', 'function')) {
              onError = obj[key];
            }
            break;
          case 'onwarninghandler':
            if (assert('onwarninghandler', 'function')) {
              onWarning = obj[key];
            }
            break;
          case 'intermediatestate':
            if (assert('intermediatestate', 'string')) {
              intermediateState = obj[key];
            }
            break;
          case 'selectorfunction':
            if (assert('selectorfunction', 'function')) {
              selectorFunction = obj[key];
            }
            break;
          case 'safecopy':
            if (assert('safecopy', 'boolean')) {
              safeCopy = obj[key];
            }
            break;
          case 'doframes':
            if (assert('doframes', 'boolean')) {
              doFrames = obj[key];
            }
            break;
          case 'storagetype':
            if (assert('storagetype', 'string')) {
              storageType = obj[key];
            }
            break;
          case 'orphancontrol':
            if (assert('orphancontrol', 'number')) {
              orphanControl = obj[key];
            }
            break;
          case 'dohyphenation':
            if (assert('dohyphenation', 'boolean')) {
              Hyphenator.doHyphenation = obj[key];
            }
            break;
          case 'persistentconfig':
            if (assert('persistentconfig', 'boolean')) {
              persistentConfig = obj[key];
            }
            break;
          case 'defaultlanguage':
            if (assert('defaultlanguage', 'string')) {
              defaultLanguage = obj[key];
            }
            break;
          case 'useCSS3hyphenation':
            if (assert('useCSS3hyphenation', 'boolean')) {
              css3 = obj[key];
            }
            break;
          case 'unhide':
            if (assert('unhide', 'string')) {
              unhide = obj[key];
            }
            break;
          case 'onbeforewordhyphenation':
            if (assert('onbeforewordhyphenation', 'function')) {
              onBeforeWordHyphenation = obj[key];
            }
            break;
          case 'onafterwordhyphenation':
            if (assert('onafterwordhyphenation', 'function')) {
              onAfterWordHyphenation = obj[key];
            }
            break;
          case 'leftmin':
            if (assert('leftmin', 'number')) {
              leftmin = obj[key];
            }
            break;
          case 'rightmin':
            if (assert('rightmin', 'number')) {
              rightmin = obj[key];
            }
            break;
          case 'compound':
            if (assert('compound', 'string')) {
              compound = obj[key];
            }
            break;
          default:
            onError(new Error('Hyphenator.config: property ' + key + ' not known.'));
        }
      });
      if (storage && persistentConfig) {
        storeConfiguration();
      }
    }

    /**
    * @method Hyphenator.run
    * @desc
    * Bootstrap function that starts all hyphenation processes when called:
    * Tries to create storage if required and calls {@link Hyphenator~runWhenLoaded} on 'window' handing over the callback 'process'
    * @access public
    * @example
    * &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
    * &lt;script type = "text/javascript"&gt;
    *   Hyphenator.run();
    * &lt;/script&gt;
    */
    function run() {
      /**
           *@callback Hyphenator.run~process process - The function is called when the DOM has loaded (or called for each frame)
           */
      const process = function () {
        try {
          if (contextWindow.document.getElementsByTagName('frameset').length > 0) {
            return; // we are in a frameset
          }
          autoSetMainLanguage(undefined);
          gatherDocumentInfos();
          if (displayToggleBox) {
            toggleBox();
          }
          prepare(hyphenateLanguageElements);
        } catch (e) {
          onError(e);
        }
      };
      if (!storage) {
        createStorage();
      }
      runWhenLoaded(window, process);
    }

    /**
    * @method Hyphenator.addExceptions
    * @desc
    * Adds the exceptions from the string to the appropriate language in the
    * {@link Hyphenator~languages}-object
    * @param {string} lang The language
    * @param {string} words A comma separated string of hyphenated words WITH spaces.
    * @access public
    * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
    * &lt;script type = "text/javascript"&gt;
    *   Hyphenator.addExceptions('de','ziem-lich, Wach-stube');
    *   Hyphenator.run();
    * &lt;/script&gt;
    */
    function addExceptions(lang, words) {
      if (lang === '') {
        lang = 'global';
      }
      if (exceptions.hasOwnProperty(lang)) {
        exceptions[lang] += ', ' + words;
      } else {
        exceptions[lang] = words;
      }
    }

    /**
    * @method Hyphenator.hyphenate
    * @access public
    * @desc
    * Hyphenates the target. The language patterns must be loaded.
    * If the target is a string, the hyphenated string is returned,
    * if it's an object, the values are hyphenated directly and undefined (aka nothing) is returned
    * @param {string|Object} target the target to be hyphenated
    * @param {string} lang the language of the target
    * @returns {string|undefined}
    * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
    * &lt;script src = "patterns/en.js" type = "text/javascript"&gt;&lt;/script&gt;
    * &lt;script type = "text/javascript"&gt;
    * var t = Hyphenator.hyphenate('Hyphenation', 'en'); //Hy|phen|ation
    * &lt;/script&gt;
    */
    function hyphenate(target, lang) {
      let turnout, n, i;
      const lo = Hyphenator.languages[lang];
      if (Hyphenator.languages.hasOwnProperty(lang)) {
        if (!lo.prepared) {
          prepareLanguagesObj(lang);
        }
        turnout = function (match, word, url, mail) {
          let r;
          if (!!url || !!mail) {
            r = hyphenateURL(match);
          } else {
            r = hyphenateWord(lo, lang, word);
          }
          return r;
        };
        if (typeof target == 'object' && !(typeof target == 'string' || target.constructor === String)) {
          i = 0;
          n = target.childNodes[i];
          while (n) {
            if (n.nodeType === 3 // type 3 = #text
            && /\S/.test(n.data) // not just white space
            && n.data.length >= min) {
              // longer then min
              n.data = n.data.replace(lo.genRegExp, turnout);
            } else if (n.nodeType === 1) {
              if (n.lang !== '') {
                Hyphenator.hyphenate(n, n.lang);
              } else {
                Hyphenator.hyphenate(n, lang);
              }
            }
            i += 1;
            n = target.childNodes[i];
          }
        } else if (typeof target == 'string' || target.constructor === String) {
          return target.replace(lo.genRegExp, turnout);
        }
      } else {
        onError(new Error('Language "' + lang + '" is not loaded.'));
      }
    }

    /**
    * @method Hyphenator.getRedPatternSet
    * @desc
    * Returns the reduced pattern set: an object looking like: {'patk': pat}
    * @param {string} lang the language patterns are stored for
    * @returns {Object.<string, string>}
    * @access public
    */
    function getRedPatternSet(lang) {
      return Hyphenator.languages[lang].redPatSet;
    }

    /**
    * @method Hyphenator.getConfigFromURI
    * @desc
    * reads and sets configurations from GET parameters in the URI
    * @access public
    */
    function getConfigFromURI() {
      let loc = null;
      const re = {};
      const jsArray = contextWindow.document.getElementsByTagName('script');
      let i = 0;
      let j = 0;
      const l = jsArray.length;
      let s;
      let gp;
      let option;
      while (i < l) {
        if (jsArray[i].getAttribute('src')) {
          loc = jsArray[i].getAttribute('src');
        }
        if (loc && loc.indexOf('Hyphenator.js?') !== -1) {
          s = loc.indexOf('Hyphenator.js?');
          gp = loc.substring(s + 14).split('&');
          while (j < gp.length) {
            option = gp[j].split('=');
            if (option[0] !== 'bm') {
              if (option[1] === 'true') {
                option[1] = true;
              } else if (option[1] === 'false') {
                option[1] = false;
              } else if (isFinite(option[1])) {
                option[1] = parseInt(option[1], 10);
              }
              if (option[0] === 'togglebox' || option[0] === 'onhyphenationdonecallback' || option[0] === 'onerrorhandler' || option[0] === 'selectorfunction' || option[0] === 'onbeforewordhyphenation' || option[0] === 'onafterwordhyphenation') {
                // eslint-disable-next-line no-new-func
                option[1] = new Function('', option[1]);
              }
              re[option[0]] = option[1];
            }
            j += 1;
          }
          break;
        }
        i += 1;
      }
      return re;
    }

    /**
    * @method Hyphenator.toggleHyphenation
    * @desc
    * Checks the current state of the ToggleBox and removes or does hyphenation.
    * @access public
    */
    function toggleHyphenation() {
      if (Hyphenator.doHyphenation) {
        if (css3hyphenateClassHandle) {
          css3hyphenateClassHandle.setRule('.' + css3hyphenateClass, css3_h9n.property + ': none;');
        }
        removeHyphenationFromDocument();
        Hyphenator.doHyphenation = false;
        storeConfiguration();
        toggleBox();
      } else {
        if (css3hyphenateClassHandle) {
          css3hyphenateClassHandle.setRule('.' + css3hyphenateClass, css3_h9n.property + ': auto;');
        }
        Hyphenator.doHyphenation = true;
        hyphenateLanguageElements('*');
        storeConfiguration();
        toggleBox();
      }
    }
    return {
      version: "5.2.0(devel)",
      doHyphenation: true,
      languages: languages,
      config: config,
      run: run,
      addExceptions: addExceptions,
      hyphenate: hyphenate,
      getRedPatternSet: getRedPatternSet,
      isBookmarklet: isBookmarklet,
      getConfigFromURI: getConfigFromURI,
      toggleHyphenation: toggleHyphenation
    };
  }(window);

  // Export properties/methods (for google closure compiler)
  /** ** to be moved to external file
  Hyphenator['languages'] = Hyphenator.languages;
  Hyphenator['config'] = Hyphenator.config;
  Hyphenator['run'] = Hyphenator.run;
  Hyphenator['addExceptions'] = Hyphenator.addExceptions;
  Hyphenator['hyphenate'] = Hyphenator.hyphenate;
  Hyphenator['getRedPatternSet'] = Hyphenator.getRedPatternSet;
  Hyphenator['isBookmarklet'] = Hyphenator.isBookmarklet;
  Hyphenator['getConfigFromURI'] = Hyphenator.getConfigFromURI;
  Hyphenator['toggleHyphenation'] = Hyphenator.toggleHyphenation;
  window['Hyphenator'] = Hyphenator;
  */

  /*
  * call Hyphenator if it is a Bookmarklet
  */
  if (Hyphenator.isBookmarklet) {
    Hyphenator.config({
      displaytogglebox: true,
      intermediatestate: 'visible',
      storagetype: 'local',
      doframes: true,
      useCSS3hyphenation: true
    });
    Hyphenator.config(Hyphenator.getConfigFromURI());
    Hyphenator.run();
  }

  // For questions about the Czech hyphenation patterns
  // ask Martin Hasoň (martin dot hason at gmail dot com)
  Hyphenator.languages.cs = {
    leftmin: 2,
    rightmin: 3,
    specialChars: 'ěščřžýáíéúůťď',
    patterns: {
      2: 'a11f1g1k1n1pu11vy11zé11ňó11š1ť1ú1ž',
      3: '_a2_b2_c2_d2_e2_g2_h2_i2_j2_k2_l2_m2_o2_p2_r2_s2_t2_u2_v2_z2_č2_é2_í2_ó2_š2_ú2_ž22a_a2da2ga2ia2ka2ra2sa2ta2u2av2aya2ča2ňa2ť2b_b1db1h1bib1j2bkb1m2bn1bob2z1bá1bí2bň2c_1ca2cc1ce1ci2cl2cn1coc2p2ctcy21cá1cí2cň1ců2d_1dad1bd1d1de1did1j2dkd1m2dn1dod1t1dud2v1dy1dá1dé1dě1dí2dň1dů1dý2e_e1ae1be1ee1ie2ke1o2ere1se1te1ue1áe2ňe1ře2šeú12f_f2l2fn2fr2fs2ft2féf2ú2g_2gngo12h_h2bh2c2hd2hkh2mh2rh1č2hňhř2h2ž2i_i1ai1bi1di1hi1ji1li1mi2ni1oi1ri1ti1xi1ái2ďi1éi1ói1ři2ši2ž2j_j2d1jij1j2jkj2m2jn2jp2jz2jď1jí2jž2k_k2dk2e2kf2kkk2l2kn2ks2kčk2ň2l_2lf2lg2lh1li2lj2lk2ll2ln2lp2lv2lz2lň1lů1lý2m_1ma1me2mf1mim2l2mn1mo2mp1mu2mv2mz2mčm2ž2n_2nb2nf2ngn1j2nk2nn2nz2nď2nónů22nž2o_o1ao1cog2o1ho1io1jo1lo1mo2no1oo1to2uo1xo2zo1čo2ňo1ř2p_2pkp2l2pn2pp2ptpá12pč2pš2pťqu22r_r1br1cr1d2rkr1l2rn2rrr1x2rzr1č2ró2rš2s_s2cs2d1se2sf1sis2js2k2sn1sos2p1sr2ss1sus2v1sé1sí2sň2sť1sůs2ž2t_1te2tf2tg1ti2tl2tm2tn1to2tpt2vt2č1té1tě2tř2tš1tů2u_u2b2ufu2ku2mu2nu2pu2ru2su2vu2zu2ču2ďu2ňu2šu2ž2v_2vkv2l2vm2vnv2p2vňwe22x_2xf2xnx1ty2ay2ey2sy2ňy2šyž22z_2zbz2ez2j2zl2ztz2v2zzzá12zč2zňz2řá1bá1dá1já1sá2ňá1řá2š2č_1ča2čb1če1či2čk2čn1čoč2p2čs1ču1čá1čí1čů2ď_1ďa1ďoé2dé2fé2lé2mé2sé2té2šé2žě1cě1lě2vě2zě1řě2šě2ťě2ží1bí1hí1jí1lí1rí1tí2ňí1ří2š2ň_2ňa2ňk2ňmň1só2z2ř_2řc2řdři12řk2řn1řoř2v2řz2řš2š_2šl2šnš2p2štš2vš2ň2ť_2ťk2ťm2ťtú2dú2kú2lú2nú2pú2tú2vú2zú2čú2žů1bů1cůt2ů2vů2zů2žý1bý1dý1hý1jý1lý2ný1rý1tý1uý1ř2ž_2žk2žl2žnž2v2žď2žň2žš',
      4: '_ch2_ná1_st2_us2_ut2_vy3_vý1_za3_zd2a3daa3dea3dia3doa3dua3dya3dáa3déa3děa3día3důa3dýa3gaa3goa3gua3gáah3va3ina3iva2jda2jmaj2oa3kea3kia3kla3koa3kra3kua3kya3káa3kéa3kóa3kůa3kýap3ta3raa3rea3ria3roa3rua3rya3ráa3róa3růa3rýa3saa3sea3sha3soa3sua3sva3sya3sáa3séa3sía3sůa3taa3tea3tia3toa3tra3tua3tva3tya3táa3téa3těa3tía3tóat1řa3tůa3týa3uja3učav3dav3taz3ka3zpa3čaa3čea3čia3čla3čoa3čua3čáa3čía3čůa3ňoa3ňua3říaú3t3ba_2b1cbe3pbis33bl_3blk2brib2ru2b1tbu2c3by_bys32b1č1bě_3bínb3řab1ří2bš2ce2u2ch_1cha3che2chl2cht1chu1chy1chá2chř2ck2c3lac3léc2tict2nc3tvc2těcuk11c2vda3dd2bad2bá2d1cde1xde2z2d1hd3kv3dl_d1lad3li1dlnd2lud1léd2lů1dmddo1ddo3hdo3pdo1sdo3tdo3čd1red3réd3rýd3tld3třdu3p2durd3ved3vld3vrd3vyd3vád3věd3víd3zbd3zdd3zn2d1č3dějd1řad1ří2dš2d3škd3št3dů_dů3sd2ž2e2are2břed1led3ve1hae1hee1hoe1hre1hue1hye1háe1hýe1jeej1mej1oej1uej3ve3kae3kee3koe3kre3kue3kye3káe3kée3kóe3kře3kůe1lae1lee1loe1lue1lye1láe1lée1líe1mle1mre1mye3máe1měe1míe3mře3můe1mýeo1seo3ze2plepy3e1rae1ree1rie1roer3se1rue1rye1ráe1rée1růe1rýe2ske2sles2me2stet1řeu3beu3deu3keu3meu3neu3peu3reu3teu3veu3zeu3že3vdevy3e3xue3zeez2te3zíe3zře1čte3ňoe3ňue3ňáe3óne3říe3šee3šie3šle3šoe3šíeú3neú3peú3teú3čf3líf1rige2s3gic3gin2g1mgu3mgu3vhe2she2uhe3x2hli2hlý2h2nh3ne2h1th2tě2h2vhyd1hys3ia3dib2li1chid2li1emi1eni1etif1ri2hlih3ni3imi2klik3milu3i3nai3nei3nii3noi3nui3nyi3nái3néi3něi3níi3nůi3nýi2psi1sais3cis1ti1syi3sáit1ri2tvi1umiv3di3zpiz1ri1člič3ti1íci1ími3šei3šiiš3ki3šoi3šui3šái3šíi3žai3žei3žii3žoi3žui3žája3dja3gj1b22j1cj3drj3dáj3důj3efj3ex2j1hj3kv2j1lj3maj3mi2jmíjne3j1obj1odj1ohj1opj1osj2ov2j1rj3sn2j1tj3tlju3pj1usju3tju3vju3zj1už2jv2j3vdj3vnj3zbj3zdj3zkj3znj3zp2j1čj3štj3šť2jú1jú3njú3čjú3ž3kaj3kat3kav3kač3kař2k1c3ket3kl_k3lék3lók3lý2k2mk3mě3kof3kovkr2s2k1tkt2r3kujku3v2k2v3kyn3kác3kár3kářk2ř23ků_1la_2l1b2l1c2l1dle2i1lej1lel3lio2ližl2kl2l1m1loslo3zl2pěls3n2l1t1lá_2l1č1lé_1lík1líř2lš2l3štlý2t2l2ž2m1b2m1cm2dl3me_me3x2mk22mleml3h2mlim3nam3nám3ném3nýmo2kmo2smoú3m2psmp2tmr2s2m1tmu3n2muš3má_má2sm2čemí1c2m2šmš3ť3mů_3mý_3na_na3hnat2na3zna3š2n1c2n1dne1dne1hne2jne3pne3zn3frng1l3nio2n1lno3z2nožn2sa2n1t2nub3ny_3nák2n1č2nív2níž2nš2n3što1bao1beob1lob1ro1buob3zo3béocy3od3bod1lod3vod1řo1e2oe3go2flo3gnoj2o2okaom2no3nao3neo3nio3noo3nuo3nyo3náo3něo3nío3nůo3nýo2pso1rao1reo1rio1roo1ruo1ryo1ráo3réo1růo3rýo1sao1sko1slo1syo3tío3třou3mou3vo3zaoz1bo3zeoz1ho3zioz3joz3koz1loz3mo3zooz3poz3to3zuo3zío3zůoč2ko3ňao3ňoo3ško3šlo3žl2p1c3pečp2kl3pl_pl3hp2nu3podpo3hpo3ppoč2pr2cpro1pr2sprů3p3tupá2c2př_při31ra_2rakr2blrca3r1harh3nr1hor3hur1há1ricr2kl2r1mro3h2r1sr2st2r1tr2thrtu31ru_1ry_ryd2rz3drz3l1rák1rářrč3t3ré_3rý_s2b2s3casch2s3cis3císe3h3sel3semset2se3zs3fo3sfés3fú3sic3sif3sik3sits3jus3ků3sl_3slns2lys1lís2mas2mos2nas2nes2ná2st_2stns2tvs2tás1tísy3csá2d3sáh2s2čs3čis3ťo1ta_1tajt1ao2t1b2t1c3te_2tihtiú32tiž2tk2t2klt2ká3tl_t1le3tlmtlu3t1lyt1lét2mat3níto3b2toj2trč2trý2t1sts2t2t1t1tu_1tuj2tup2tve1ty_3tá_t3či2tčí3tém2těh2těp1tíc1tím2tín2tírt1řut2řát3št1tý_1tým1týř3týšu2atu3bau3beu3biu3bou3buu3báu3bů2u2du3deu3diu3dou3duu3dyu3díu2hlu2inu2jmu3keu3kou3kuu3kyu3kůul1hu3mau3meu3miu3muu3má3umřu3neu3nou3nuu3něu3níu3nůu3pau3peu3piu3puu3pyu3páu3pěu3píu3půu3rau3reu3riu3ruu3rá1urču3růus1lu3sou3syu3sáu3síu3sůu3viu3vuu3zeu3ziuz1lu3zou3zuu3zíu3čau3čeu3čiu3čouč3tu3čuu3čáu3číu3šeu3šiu3šou3šuu3šáu3šíu3žeu3žou3žuu3žáu3ží2v1b2v1cv2ch2v2dv3di3venve2pv2kr2vlovo3bvo2svou3vr2cv1ro2vs2v1sk2v2tvy3cvyp2vy3tvy3čvyš2v2z22v2čv3čáv3čí3vín2vřív2š23výsvý3tv2ž23war3xovy2bly2chy2dry2gry3hny2kly3niy2přyr2vy3say3sey3siy3smy3soy3spys2ty3suy3svy3syy3sáy3séy3síyu3žy3vsy3zby3zdy3zky3zny3zpyč2kyř3by3říy3šey3šiy3škyš1ly3šoy3špy3šuy3šíy3ždza3hza3iza3jza3kzat2za3zza3šz2by2z1c2z2dz3dize3hzet2zev2ze3z2z2fz1ház3jí2z2kz3kyz3kéz3kůz3ký3zl_z2m22zmez3mnz3my2z2nz3noz3nuz3nyz3néz3něz3níz3ný2z2pz3ptz3tř3zu_zu3šz3vi3zy_záh23zápzá3zzáš2z3čl2zš2z3škz3štzú3čzú3žzů3sá2blá2dlád1řá1haá3heáh1láh3ná1hoá1hrá1háá1laá1leá1loá1luá1lyá3léá1líá3myá3méá1měá3míá3mýá1raá1reár2má1roá1ruá3růá2scá2smá2stát3kát1rá1tuá1tyá1tíá3týáz3ká3šeá3ší2č1c3če_če1cč3koč3kuč3ky2č1mč2neč1sk2č2t3čtvč3tí2ď1t3ďujé3dié3doé3foéf1ré2klé3maé3meé3mié3moé3mué3můé3taé3toé3táěd3rě3haě3heěh3ně1hoě3huě3hůě3jaě1jeě1joě3jůě1raě1reě1roěr3sě1ruě1ryě1růěs3kěs3nět1lě1trět3vě1tíě3vaě3veě3vlě3voě3vuě3váěv3čě3zeě3ziěz3ně3zoě3zíě3šeě3šiě3šoě3šuě3šáě3šíěš3ťě3ťoě3žeě3žiě3žoě3žuě3žííb3říd1lí2hlíh3ní2krí1máí3méí1měí1saít3kíz3kí3šeí3šií3šoí3šíňa3d3ňov2ň1tó3zaó3zió3zoó3zy2ř2bře1h2řesřia3ři3hřis2ři3zři3řř2kl2ř1l2ř1m2řou2ř2p2ř1s2ř1t2ř1č2řídří1sř3štšab32š1c2š2kš3kaš3ke3škrš3kyš2laš2liš2lošlá2š2léš2lý2š1m2š1sší3dš3ší2š2ťš3ťoš3ťuš3ťá3ťalú2c2úz3k3účeů1hlů3jdů1leů1myů1měů1raů1s2ů2stů3vaů3voů3věů3zoů3žeů3žiů3žoý1mlý1měý3noý1s2ý2ský3zký3znýš3lža3d3žač2ž1b2ž1c2ž1d3žil3žlo2ž1mžon22ž1t',
      5: '_a4da_a4de_a4di_a4do_a4dé_a4kl_a4ko_a4kr_a4ku_a4ra_a4re_a4ri_a4ro_a4ry_a4rá_a4sa_a4se_a4so_a4sy_a4ta_a4te_at3l_a4to_a4tr_a4ty_a4ve_cyk3_dez3_d4na_dne4_d4ny_dos4_d4ve_d4vě_d4ví_e4ch_e4ko_es3k_es3t_e4ve_f4ri_h4le_h4ne_i4na_i4ni_i4no_is3l_j4ak_j4se_j4zd_jád4_k4li_k4ly_ne3c_neč4_ne3š_ni2t_n4vp_o4bé_ode3_od3l_o4ka_o4ko_o4na_o4ne_o4ni_o4no_o4nu_o4ny_o4ně_o4ní_o4pe_o4po_o4se_o4sl_ot3v_o4tí_o4tř_o4za_o4zi_o4zo_o4zu_o4šk_o4šl_o4ži_p4ro_p4rý_p4se_pu3b_rej4_re3s_ro4k_s4ch_s4ci_sem4_s4ke_sk4l_s4ká_s4le_s4na_s4ny_s4pe_s4po_s4tá_s4ži_u4ba_u4be_u4bi_u4bo_u4de_u4di_u4do_u4du_u4dí_uh4n_uj4m_u4ko_u4ku_ul4h_u4ma_u4me_u4mi_u4mu_u4ne_u4ni_u4pa_u4pe_u4pi_up4n_u4po_u4pu_u4pá_u4pě_u4pí_u4ra_u4ro_u4rá_u4so_u4st_u4sy_u4sí_u4vi_u4ze_u4če_u4či_u4čí_u4še_u4ši_u4šk_uš4t_u4ší_u4ži_už4n_u4žo_u4ží_v4po_v4zá_v4ži_y4or_y4ve_zar2_zač2_z4di_z4dr_z4ky_z4mn_z4no_z4nu_z4ně_z4ní_z4pe_z4po_z4tř_z4ve_z4vi_č4te_še3t_š4ka_š4ke_š4ky_š4ťo_š4ťá_ú4důaa3t2ab4lýab3riab4sbab2stac4ciad2laa4dlia4dláa4dléad4mead4muado4sad3ria3drža4dužad3voad4úzad4úřae4viafi2aag4faag3roah4liai4reaj4meak4nial4fbal4klal4tzal3žíam4bdam4klam4nuamo3sam4žia4naean4dtaneu4an4scan4sgan4slan4sman2span4svan4tčan4žhao4edao4hmao4tčap4r_a4psoa4př_ar4dwa4rerar4glar4kha4roxar3star2vaar3š2ar4šrarůs3a3sinas3náas3pia4stkas4tmas3tvat4cha4tioat4klat3loat3rea4truat4ráat4thau4gsauj4maus3tav4d_av3loa4vlua4vlíav4tiay4onaz3laaz4léaz3niač4máaře4ka4špla4špyba4brba3kaba4sebe4efbe4etbej4mbeu4rbe2z3beze3bi2b3bist4bi4trbl4blb2lemb2lesb4lánb2lémbo4etbo4jmbo4okbo4trbou3sbo4škb2ralb2ranb4roubroz4b3ru_b3rubb2rán2b1s2bs3trbtáh4bu4enby4smby4tčby4znbé4rcbě3tabí4rcb3ře_bře4scad4lca4escech4ced4lcelo3ce4nsce4ovce4pscer4v4che_ch4lych4mb2ch3n4chtech4u_cik4lc4ketco4atco4mmco4žpctis4ct4lací4plda4jšda4klda4trdch4ldd4hade3hnde3jdde3klde3kvde2nade2ozde3slde4smde4sode2spdes4tde4xtde3zndez3ode3čtde4žpdi4gg4dinddis3kdi4sodj4usd4labd4lakd2loud3lučd4láž2d1lídmýš44dobldo3bydo3bědo3býdod4ndoj4m4dokn4dolydo3mndo4pcdop4ndor2vdos4pdo3ukdo3učdo3z2doz4ndoč4tdo4žp4drand4rapd4rend3rosd3roud3rošdr4scd3rušd4rýv2d1s2ds4kůds4podum3řdu3nadu4pndu3sidu4í_d4vacdy4sudře4kd4řepd4řevd2řítea3dreb4erebez2eb4lie4ch_e4chme3choe2chre3chve4chťed4beed4kved2mae3dmned4říee4thee3xieg4giehno4eh4něej3age3jase3jede3jezej3ine3jisej3moe3jmue4klye4lauel4dvel4zee4mlíemo3kem3žeen4dven4scen4sient3reo3byeod3leo4due4oleeo2steo4třeo4zbeo4zdeoše3epa3te4pniep2noe4pnýep4tlep4tmep4tne4ptuer4a_er4s_er4sne4sage2scee4sinesi4ses4k_es3kyes3kée4slye4sp_es4pee4st_e4stee4tkie4tkre4tlie4tlyet3riet3roet3růet4úneu3cteu4m_eu4r_e4uraeu4rgeu3s2eu4tseve4še3v2ke4vskex4taey4orey4ovez4apez4boez3deez3duez4děez4ejez4elez4erez4esez4ezez4ešezis4ez4itez4leez4náez4něez4pyez4ácez4áhez4čeez4řeeč4tee4čtie4čtíeře4keř4kue4škaeš4láeš4toeúmy4ežíš4fe4infene4fe4uefi4emfi4flfló4rfm4nof4ranf4ras3frekfs4tefu4chga4učghou4gi4ímg4lomg4noig4nosgo4hm3grafgu4elgu4itgu4m_gus4tha4agha4arha4blha4brha3dlha4kehas3tha4ydhe4brhe4idhej4shi4anhi3erhi4ghhi4re4hla_h4ledh3lenh3lobh3loph3lovh3luj2h1ly4hlá_h4lásh3lí_4hlíkh4nedh3nivh4noj3hněd4hovehra4ph4tinh4títhu4chhu3mohu4tňhy4dohy4pshy4zdhř4byhý4blia3g2i4al_ias4tia4tri2b1ri4chžid4gei4dlýig4nei3hl_i4hliih4naijed4ij4meij4miik3leik4ryi4kveik4úřil4bai4lnui4mlai4mlyi4munina3din4cmin4dl3infein4ghin4gpin4gsin4gtin4špio4skiro4sis4chis4k_is3kais3keis3kris3kuis3kvis3kyis3lois3léis3plis3pois4thist3vis3tíit4rhit4rpit4seit4suix4tdič4tlič4toiř4kliř4čeiš4kriš4kviš4toja2b2jac4kja4cqj3aktj3dobj3dokj3dosjd4říjech4jg4raji4chjih3lji4mžj4inajis3kji2zvjod2řj4orajo3svj3ovljpor42j1s2j4semj4si_j4sk_js4kojs4kájs4poju4anju3naju3spju4t_ju4xtju3žijád2rjš4tika4blka4chka3dlka3ka3kami3kaněka2pska4pvka2přkas3tka4učkaš3lka4špke4blke3joke4prke4psk3lejk4libk3lic4klo_k3los2k3lyk3lá_kna4sko3byko4jmko2přko4skko3zá4kroak3robk3rofkr4ú_kuch4ku4fřku4hrku3seku3siku3suku4thk4vrňky2prkyp3řky4znká4plk3řejkš4tila4brlab4sla3kala4nqla4psla4všla4y_la2zmld4nele4adle4auleh3nle3jole4prle4psle4scle4smle4svlet3mle2trle4tčle4ukle4vhle4vkle3xilez3n3lhanli4azli4blli4bvli4dmlind4li4tňli4vrl4katlk4nul4nullo3brlo4idlo4islo3splo3svlo2trlo4třlo4u_loz4dlo4šk2l1s2l4slalst4nl4stílt4ralt4rult4rylu4idlu4j_lu4k_lu4lklu4m_lu4mnlu3prlu3valu3vllu3vylu3vílá4jšlá4všlí4pllí4znl4štýmaj4sma4klma4kr4maldmas3kmat3rma4všmaz3l2m1d2me4gome4ismh4lemid3lmik3rmi4xt3m2klmk4lamk4li4mla_ml4h_ml4scml4sk4mlu_mna4sm4nohm3nosm4noz3množm4nézm3nějmod3rmo2hlmo4s_mot3ř4moutmoza4mo3zřm4plompo4smp4se2m1s2m4stlmu4flmu4n_mu4ndmu4nnmu4nsmu4nšmy4škmálo3mí4rňmš4čina3chna4dona4emna4h_na3jdna3kana3p2na3s2na4s_na3tlna3třnaz4kna4zšna4č_naž4nn4chcnd4hindo4tnd2rend4rind4říne4glnej3tnej3une3klne3kvne4m_ne3s2ne4s_ne4ssne3tlnet4rne3udne3v2ne4v_nez4nne3škne3šťng4lang4leng4lín4grong4vinik4tni4mrni4mž3nisk2nitřno3b2no4bsno3hnno4hsno4irno4mžno3smnot4rno4zdno4šk2n1s2ns3akns4kon4socns3pont4r_nt3runt3ránu4ggná3s2ná4s_nš4ťooang4obe3jobe3sobe3zob4rňobys4o4chlo2chroc4keoc4koo4ct_oct3noc4únode3pode3so4docodos4od3raod3růo3držoe3tioh4neoi4ceo4into4jaro4jmio4jmuo4jmůo4juzok2teol4glol4toom4klona4soo4hřoote2o4ptuopá4to4př_o4raeor4dmor3stor4váorůs3o4saiose4sosi4do4skuosk3vo4skáo4skýos4laos4lios4lýos3moos4muo4st_o4stgo4stmo4stéo4stšo4stýot4klo4tlýoto3sot3root3víot3řiou3běou3děou4flou4ilou4isou4k_ou3kao4uklou3krou3káoup3noupo4ou4s_ou3saou3seou4skou3smou4tvou4vlou4vnouz3do4učkou3žio4vskovy2po2vštoz4d_oz3dáoz3děoz3díozer4oz4koo4zn_oz4pyoz4pěoz4píoz3rooz3ruoz3růo4zutoz3vroz3váozů4soč4kaoři2so4škuo4škyoš4láoš4mooš4tioš4ťuož4mopa4edpa4espa4klpa3sipa4t_pe4alpede4pe4igpe4npperi3pi4krpi4plpl4h_4plo_po1b2po3c2poly3po3m2po4mppo4olpo4p_po4pmpo1s2pos4ppo3t2po4t_po4tnpo3ukpo3učpo3už3po3vpo3z2po4zdpo3čkpo3řípo4šv4pra_prob2pro3ppro3z4pránpse4s2p1skp4sutp4tejp4terp4tevpt4rip4tá_pu4dlpu4trpyt3lpád3lpá4nvpá4slpé4rhpře3hpře3jpře3zpřih4pš4tira4brra4emra4esra4ffra4hlra4hmra4jgra4jšra4nhra3sira4vvra4wlra4y_ra4yora4ďm4ražir3char3chorc4kir4dlardo2sre4adre4aured4rre4etre3klre4mrre2sbres3lret4rre4umr3hl_ri4bbri4dgri4drri4flri4ghri4zmr4miorn4drro4adro3byrod2l3rofyro4h_ro4jbro4kšrom3nro2sbro3svro3tiro3tlro4tčro3vd3rovýroz3droz3nro4zoroz3vro3záro4čprpa3drr4harr4hor4stur4trárt4smr2t3vrt4zuru3seru3sirus3kru3žirych3rys3try4zkry4znry4í_ry4škrád4lrá4džrá3rirš4nírů4m_rů4v_rý4znsa4pfsa4prsas3ks3ce_sch4lsch4nsci4ese4ause4igse4ilsej4mse4kuse3lhse3s2ses4kse4ssse3tkse3třse4urse3čtsi4fl4skacs4kak4skams4kok2skonskos44skotsk4rask4rusk4ry4skvesk4vos3káns4lavs3le_s4leds3lems3lens3lets4libs3ly_s4meks3nats3ne_sn4tls3ná_s4nídsob4lso3brso4skso4tvsou3hsou3ssouz4so4šks4polss4sr4sta_s3tajs2tanst4at4stecs4tepst4er2stil4stičst3lo4sto_4str_4strnst4ve3ství4sty_s4tyl3styš4stá_s3tář4stě_s4těd3stěhs2těrs2těž2stí_su4basu4bosuma4su3vesá2klta2blt2a3dta4jfta4jg4talt4tand3taně2tarktast4ta4čkte4akte4flte4inteob4tep3lters4te4trte4ucte4urte4utti4grti3kltin4gti4plti3slti4tr2titutiz4r4tizít4kalt4kattk4latk4li4tkně4tla_tles3t3lo_t4loutlu4sto4astob4lto3drto4hmto4irtol4sto4ol4top_4topt4topu2torn2toupt4reat4reftre4ttrip4t4ritt4rogt3rolt4rou4trunt4rus4trášt3růmt3růvts4kott4chtt4ritu4fftu4lktu4r_tu3rytu4s_tu4ť_tu3ži2t3vit4višt4výcty4gřty2laty4řety4řhty4řjty4řoty4řrty4řútá4flté2bl2těnn4tíc_4tícet4řebt2řelt2řict3řiltř4ti3třábtří4stš4tiubs4tu3bí_uc4tíu3druue4fauh3láuh3nou3ka_uk4ajuk4aluk4atuk3lauk3leuk4á_ul4faul4píum4plum4ruun4dlun4žru3pln2u3rou3ry_us3kyus3káus3kéus3kýus2lou4steu4styu4stéu4stěu3střu4stšu4stýu3su_u4trou4tráuš4kluš3tíva3dlva4jťva4klv4dalv4děkv4děčve3jdve3psvep3řves3lve4smves4pvi4chvide2vi4drvi4etvi4krvi2tr4vle_4vlemv4nadvo4icvo4javo4jbvo4jdvo4jjvo4jmvo4jřvo4třvous2vr2dl4vrnyvr4stv3stvvy3d2vy3s2vy4snvys4tvyč4kvy4š_vy4šmvy4ššvy4žlvz4novz4névz4něvz4nívá3riv4čírvě4cmvíce3v3řínvše3s3vý3zwa4fdwa4rexand4xisk4xt4raxy4smyb3riy4chry2d1lyd4láyd4y_yh4neyj4mayj4meyk3layk4lyym4klyna4sype4ryp4siyp4táys3luys3teyst4ryt4meyvě4tyz4něyz4níyz4poyřk4nyř4čezab2lza4bsza4dkza3dlza4dnza4jkza4ktzal4kzam4nza3p2za3s2za3tlzat4rza4utzaz4nza4zšza4č_zaš4kza4šszban4zbys4zd4rezd4víze3p2ze3s2zes4pze3vnze4z_z4inez3ka_zlik3z3ly_z4měn3znakz4nalz3ne_z3nicz4nělz4nítz4nívzo4trzo4škz4pát3zrak2z1s2z4trázu3mozu3mězu3mízva4dz3vařzvik4zv4něz3vodz3vojz4vonzv4roz4vánz4věsz3víjzá3s2zřej3z3řezz3řešzš4ka2z2ú1áb4ryá4bř_á3choádo4sá3hl_á4jmuáj4můá4kliák4niáne4vá2s3kás4k_ás4klás4kná2slaás4lyás4poáv4siáv4síáz3niáz4viář4keář4kůča4brčes3kč3ka_čs4lačs4srčt4la4čtěnčís3lďs4te4ére_ě3hl_ěh3loě4kléě3k2těra3děrs4tět1a3ět4acět3raět3říěš4ťsí3choích4tíjed4íj4můí2s3kís4klís4knís4l_ís3leís4lnísáh2íz3daíz3deí3znařa4plřa4ďmře3chře3jdře3klře3kvřeo4rře3p2ře4p_ře4pkře4pčřer4vře2spře4srře3tlřet4řře3zdře3zk4řezlře3čtři4h_ři4hnři4jďři4l_ři4lbřil2n4řineři4v_ři4vkři4vnřič4tři4š_řk4lařk4liřk4lyřk4nořs4tořá4plřá2slří4křřš4tiša4vlšej4dšep3tši4mr4škovšk4roš3ku_š3livšmi4dš4tipšt4kašt4klš4těkš2těsš4těvš4típťáč4kúj4maút4koúře4zúš4tiůr4vaůr4vyůs3teů3tklý3choýd4laýt4kuýt4kyý4vliý4zvuýč4něža4tvže2b3žeh3nže4mlže4zgži4dlži4jmži2vlžk4niž4lic2ž1s2žá4bržá4nrží4znžš4tižš4tě',
      6: '_ale3x_as3t3_je4dl_kří3d_le4gr_li3kv_moud3_na3č4_nář4k_od3rá_os4to_os4tě_ot3rá_ově4t_oz3do_pa4re_pa3tř_po3č4_roze3_roz3r_ru4dl_se3pn_va4dl_zao3sab3lona3d3ra3a3dvaa4nameane4skao4střas4tatat3ronat3rova4tří_ba4chr4chalgcien4c4dbat_3dch4nde4bredej4mode3strd3lou_4doboj4do4dd4do4djdomoh44do4čn3drobndře4pne3chl_eilus3ej3eleeju3steoch3repoč3te4s4knes3ku_e4s3lies3tižes4toles3táneu4rase4u4t_eu4traevy4čkevě4trezaos3ez3dovez4ed2eč4kateštíh4ha4dlahatos44h3lo_3hodinho3strhos4tě4hovna4hovny4hovná4hovněhy2t3rid4lo_ik3lo_ilič4nis3ko_i3slavis4talis4tatié4re_jbyst3jez3díjit4rojmou3dj1o3z2jpo4zvjpříz4j4s4kůj4s4mej4sou_j4soucj4s4teka2p3lka2p3rkast3r4k3la_4k3li_ko2t3vkous3k4la3silech3t4lejšk4lenchlepa3dlepo4slet4lilo3střma4tramet3remezi3smys3lonam4nene3h4nne4krones4le4nestino4skyno3strnst4rant4lemob3řezodej4modo4tkod4ranofrek4oje4dlo4jmovont4raopoč3topro4sopřej4o4s3keos4toros3trůoze3d2pat4ripes3t3pe4tra4p3la_4p3li_po3drupo3drápost4rpoč3tepra3stpro3t4pře3t4pře3č2rast4rre3kviretis4ric4kurna4všro3d4rromy4sropát4ro4skvro4skyrově4trs3tvěrs3tvý3rvanírys3kyrůs3ta3schopser4vase4střsig4nosi3ste4s3la_s4liči4s3lo_spro4ss4teros4tichs4tink4stit_s4tona4stou_4strams4trik4strács3třejsych3rsy4nesta3str4tenémtes3tatis4tr4t2kant3rant4tric_tro4sk4trouh4troň_4t4ružt3rálnt4vinntě3d4ltřeh3nupe2r3ve3dleve3stave3t4řve2z3m2v3la_vrst3vvy4dravě3t4aví4hatv3ští_y3klopymané4z4doba4zerotzlhos4ztros3zá4kl_ác3ti3ázni4cč4tenýě4trají3t3řeí3z3nií3zněnře4dobře4kříře3skaře3skořes3poře3staře3stuře3stáře3stř3ři4t_š3k3li4š3kouůs3tánýpo3č4',
      7: '_dneš4k_mi3st4_no4s3t_os3t3r_polk4la4stru_b4roditckte4rýdob4ratdos4tivenitos4epro4zře4strouevyjad4evypá4t4kličkamš4ťan_nte4r3aonář4kaopře4jmovi4dlapodbě4hpod4nes4rčitý_se4strase4stru4stupnitac4tvovrs4tvězdně4níz4dobnýádos4tič4tené_č4tový_ů4jmový'
    },
    patternChars: '_abcdefghijklmnopqrstuvwxyzáéíóúýčďěňřšťůž',
    patternArrayLength: 91005,
    valueStoreLength: 12949
  };
  Hyphenator.config({
    minwordlength: 5,
    defaultlanguage: 'cs',
    displaytogglebox: true,
    remoteloading: false,
    persistentconfig: true,
    intermediatestate: 'visible',
    useCSS3hyphenation: true
  });
  Hyphenator.run();
}
hyphenatorForCzechLanguageOnSelectedSites();
/******/ })()
;
//# sourceMappingURL=hyphenator-for-czech-language.js.map