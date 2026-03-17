"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ========== SPRITE ATLAS SYSTEM ==========
// Organized by category for future sprite sheet consolidation.
// Each entry includes: url (current individual sprite), and atlas metadata (x, y, w, h) for future sheet consolidation.
var atlasCache = {};
var itemAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/atlas/ItemAtlasTest.png';
var pokemonAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/atlas/PokemonAtlas.png';
var loadAtlasImage = function loadAtlasImage(atlasUrl) {
  if (!atlasCache[atlasUrl]) {
    atlasCache[atlasUrl] = new Promise(function (resolve, reject) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () {
        return resolve(img);
      };
      img.onerror = function () {
        return reject(new Error("Failed to load atlas: ".concat(atlasUrl)));
      };
      img.src = atlasUrl;
    });
  }
  return atlasCache[atlasUrl];
};
var ItemAtlas = {
  // Seeds
  Reviverseed: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Seeds/Seed_Yellow.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 107,
      y: 37,
      w: 16,
      h: 16
    }
  },
  // Food
  Apple: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Apple.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 27,
      y: 37,
      w: 18,
      h: 18
    }
  },
  Bigapple: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Big%20Apple.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 47,
      y: 37,
      w: 18,
      h: 18
    }
  },
  Goldenapple: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Golden%20Apple.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 67,
      y: 37,
      w: 18,
      h: 18
    }
  },
  Grimyfood: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Grimy%20Food.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 87,
      y: 37,
      w: 18,
      h: 18
    }
  },
  // Drinks
  Maxether: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Ether.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 41,
      y: 17,
      w: 18,
      h: 18
    }
  },
  Maxelixir: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Elixir.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 1,
      y: 37,
      w: 24,
      h: 24
    }
  },
  Protein: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Protein.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 81,
      y: 17,
      w: 18,
      h: 18
    }
  },
  Calcium: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Calcium.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 1,
      y: 17,
      w: 18,
      h: 18
    }
  },
  Iron: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Iron.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 61,
      y: 17,
      w: 18,
      h: 18
    }
  },
  Zinc: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Zinc.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 101,
      y: 17,
      w: 18,
      h: 18
    }
  },
  Carbos: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Carbos.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 21,
      y: 17,
      w: 18,
      h: 18
    }
  },
  // Equipment
  Scarf: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Equips/Scarf.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 8,
      y: 7,
      w: 16,
      h: 14
    }
  },
  // Orbs
  Orb: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Orbs/Wonder_Orb.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 19,
      y: 1,
      w: 16,
      h: 14
    }
  },
  // Throwables
  GeoPebble: {
    url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Throwables/Arc/Geo_Pebble.png',
    atlas: {
      sheet: itemAtlasUrl,
      x: 51,
      y: 1,
      w: 12,
      h: 9
    }
  }
};
var PokemonAtlas = {
  Vaporeon: {
    idle: {
      down: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 169,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 211,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      left: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 253,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 295,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      right: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 337,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 379,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      up: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 589,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 631,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      downleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 43,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      downright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 85,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 127,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      upleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 421,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 463,
            y: 217,
            w: 40,
            h: 56
          }
        }
      },
      upright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 505,
            y: 217,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 547,
            y: 217,
            w: 40,
            h: 56
          }
        }
      }
    },
    walk: {
      down: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimD1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 337,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimD2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 379,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimD3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 421,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimD4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 463,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      up: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimU1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 169,
            y: 59,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimU2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 211,
            y: 59,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimU3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 253,
            y: 59,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimU4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 295,
            y: 59,
            w: 40,
            h: 56
          }
        }
      },
      right: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimR1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 673,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimR2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 715,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimR3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 757,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimR4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 799,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      left: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimL1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 505,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimL2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 547,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimL3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 589,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimL4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 631,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      downleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBL1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBL2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 43,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBL3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 85,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBL4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 127,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      downright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBR1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 169,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBR2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 211,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBR3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 253,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimBR4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 295,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      upleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTL1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 841,
            y: 1,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTL2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 883,
            y: 1,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTL3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 925,
            y: 1,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTL4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 967,
            y: 1,
            w: 40,
            h: 56
          }
        }
      },
      upright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTR1Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 59,
            w: 40,
            h: 56
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTR2Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 43,
            y: 59,
            w: 40,
            h: 56
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTR3Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 85,
            y: 59,
            w: 40,
            h: 56
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/walk/WalkanimTR4Padded.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 127,
            y: 59,
            w: 40,
            h: 56
          }
        }
      }
    },
    spin: {
      down: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 915,
            y: 59,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 949,
            y: 59,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 983,
            y: 59,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 117,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 35,
            y: 117,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 69,
            y: 117,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 103,
            y: 117,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 137,
            y: 117,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 171,
            y: 117,
            w: 32,
            h: 48
          }
        }
      },
      up: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 409,
            y: 167,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 443,
            y: 167,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 477,
            y: 167,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 511,
            y: 167,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 545,
            y: 167,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 579,
            y: 167,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 613,
            y: 167,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 647,
            y: 167,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 681,
            y: 167,
            w: 32,
            h: 48
          }
        }
      },
      left: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 205,
            y: 117,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 239,
            y: 117,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 273,
            y: 117,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 307,
            y: 117,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 341,
            y: 117,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 375,
            y: 117,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 409,
            y: 117,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 443,
            y: 117,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonLeftSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 477,
            y: 117,
            w: 32,
            h: 48
          }
        }
      },
      right: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 511,
            y: 117,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 545,
            y: 117,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 579,
            y: 117,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 613,
            y: 117,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 647,
            y: 117,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 681,
            y: 117,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 715,
            y: 117,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 749,
            y: 117,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonRightSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 783,
            y: 117,
            w: 32,
            h: 48
          }
        }
      },
      downleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 783,
            y: 167,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 715,
            y: 167,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 749,
            y: 167,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 405,
            y: 59,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 439,
            y: 59,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 473,
            y: 59,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 507,
            y: 59,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 541,
            y: 59,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownLeftSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 575,
            y: 59,
            w: 32,
            h: 48
          }
        }
      },
      downright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 609,
            y: 59,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 643,
            y: 59,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 677,
            y: 59,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 711,
            y: 59,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 745,
            y: 59,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 779,
            y: 59,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 813,
            y: 59,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 847,
            y: 59,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonDownRightSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 881,
            y: 59,
            w: 32,
            h: 48
          }
        }
      },
      upleft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 817,
            y: 117,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 851,
            y: 117,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 885,
            y: 117,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 919,
            y: 117,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 953,
            y: 117,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 987,
            y: 117,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 167,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 35,
            y: 167,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpLeftSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 69,
            y: 167,
            w: 32,
            h: 48
          }
        }
      },
      upright: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 103,
            y: 167,
            w: 32,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 137,
            y: 167,
            w: 32,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 171,
            y: 167,
            w: 32,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 205,
            y: 167,
            w: 32,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 239,
            y: 167,
            w: 32,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 273,
            y: 167,
            w: 32,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 307,
            y: 167,
            w: 32,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 341,
            y: 167,
            w: 32,
            h: 48
          }
        },
        9: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/spin/VaporeonUpRightSpinFrame9.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 375,
            y: 167,
            w: 32,
            h: 48
          }
        }
      }
    },
    sleep: {
      none: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/sleep/sleepAnim1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 337,
            y: 59,
            w: 32,
            h: 40
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/sleep/sleepAnim2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 371,
            y: 59,
            w: 32,
            h: 40
          }
        }
      }
    }
  },
  Lunatone: {
    idle: {
      down: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 817,
            y: 167,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 843,
            y: 167,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 869,
            y: 167,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 895,
            y: 167,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 921,
            y: 167,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 947,
            y: 167,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 973,
            y: 167,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 999,
            y: 167,
            w: 24,
            h: 48
          }
        }
      },
      up: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 495,
            y: 275,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 521,
            y: 275,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 547,
            y: 275,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 573,
            y: 275,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 599,
            y: 275,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 625,
            y: 275,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 651,
            y: 275,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 677,
            y: 275,
            w: 24,
            h: 48
          }
        }
      },
      left: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 79,
            y: 275,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 105,
            y: 275,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 131,
            y: 275,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 157,
            y: 275,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 183,
            y: 275,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 209,
            y: 275,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 235,
            y: 275,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 261,
            y: 275,
            w: 24,
            h: 48
          }
        }
      },
      right: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 287,
            y: 275,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 313,
            y: 275,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 339,
            y: 275,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 365,
            y: 275,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 391,
            y: 275,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 417,
            y: 275,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 443,
            y: 275,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 469,
            y: 275,
            w: 24,
            h: 48
          }
        }
      },
      downLeft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 673,
            y: 217,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 699,
            y: 217,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 725,
            y: 217,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 751,
            y: 217,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 777,
            y: 217,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 803,
            y: 217,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 829,
            y: 217,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 855,
            y: 217,
            w: 24,
            h: 48
          }
        }
      },
      downRight: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 881,
            y: 217,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 907,
            y: 217,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 933,
            y: 217,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 959,
            y: 217,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 985,
            y: 217,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 275,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 27,
            y: 275,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 53,
            y: 275,
            w: 24,
            h: 48
          }
        }
      },
      upLeft: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 703,
            y: 275,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 729,
            y: 275,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 755,
            y: 275,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 781,
            y: 275,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 807,
            y: 275,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 833,
            y: 275,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 859,
            y: 275,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 885,
            y: 275,
            w: 24,
            h: 48
          }
        }
      },
      upRight: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight1.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 911,
            y: 275,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight2.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 937,
            y: 275,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight3.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 963,
            y: 275,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight4.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 989,
            y: 275,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight5.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 1,
            y: 325,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight6.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 27,
            y: 325,
            w: 24,
            h: 48
          }
        },
        7: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight7.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 53,
            y: 325,
            w: 24,
            h: 48
          }
        },
        8: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight8.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 79,
            y: 325,
            w: 24,
            h: 48
          }
        }
      }
    },
    sleep: {
      none: {
        1: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep000.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 209,
            y: 325,
            w: 24,
            h: 48
          }
        },
        2: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep001.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 235,
            y: 325,
            w: 24,
            h: 48
          }
        },
        3: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep002.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 261,
            y: 325,
            w: 24,
            h: 48
          }
        },
        4: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep003.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 287,
            y: 325,
            w: 24,
            h: 48
          }
        },
        5: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep004.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 313,
            y: 325,
            w: 24,
            h: 48
          }
        },
        6: {
          url: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep005.png',
          atlas: {
            sheet: pokemonAtlasUrl,
            x: 339,
            y: 325,
            w: 24,
            h: 48
          }
        }
      }
    }
  }
};

// Helper function to get sprite URL (returns individual URL for backward compatibility)
var getItemSprite = function getItemSprite(itemName) {
  var item = ItemAtlas[itemName];
  if (!item) return null;
  return item.url;
};
var getPokemonSprite = function getPokemonSprite(pokemon, animation, direction, frame) {
  var pokemonData = PokemonAtlas[pokemon];
  if (!pokemonData) return null;
  var animData = PokemonAtlas[animation];
  if (!animData) return null;
  var dirData = animData[direction];
  if (!dirData) return null;
  var frameData = dirData[frame];
  if (!frameData) return null;
  return frameData.url;
};

// Get atlas metadata for a specific item key
var getItemAtlasData = function getItemAtlasData(itemName) {
  var item = ItemAtlas[itemName];
  return item ? item.atlas : null;
};
var getPokemonAtlasData = function getPokemonAtlasData(pokemon, animation, direction, frame) {
  var pokemonData = PokemonAtlas[pokemon];
  if (!pokemonData) return null;
  var animData = pokemonData[animation];
  if (!animData) return null;
  var dirData = animData[direction];
  if (!dirData) return null;
  var frameData = dirData[frame];
  return frameData ? frameData.atlas : null;
};

// Map ItemDef name to ItemAtlas key for rendering
var getAtlasKeyForItemName = function getAtlasKeyForItemName(itemDefName) {
  var nameMap = {
    'Reviver Seed': 'Reviverseed',
    'Stun Seed': 'Reviverseed',
    'Tiny Reviver Seed': 'Reviverseed',
    'Sleep Seed': 'Reviverseed',
    'Warp Seed': 'Reviverseed',
    'Life Seed': 'Reviverseed',
    'Pure Seed': 'Reviverseed',
    'Joy Seed': 'Reviverseed',
    'Apple': 'Apple',
    'Big Apple': 'Bigapple',
    'Golden Apple': 'Goldenapple',
    'Grimy Food': 'Grimyfood',
    'Max Ether': 'Maxether',
    'Max Elixir': 'Maxelixir',
    'Protein': 'Protein',
    'Calcium': 'Calcium',
    'Iron': 'Iron',
    'Zinc': 'Zinc',
    'Carbos': 'Carbos',
    'Scarf': 'Scarf',
    'Luminous Orb': 'Orb',
    'Warp Orb': 'Orb',
    'Geo Pebble': 'GeoPebble'
  };
  return nameMap[itemDefName] || null;
};

// Create compatibility aliases for existing code
var Reviverseed = getItemSprite('Reviverseed');
var Apple = getItemSprite('Apple');
var Bigapple = getItemSprite('Bigapple');
var Goldenapple = getItemSprite('Goldenapple');
var Grimyfood = getItemSprite('Grimyfood');
var Maxether = getItemSprite('Maxether');
var Maxelixir = getItemSprite('Maxelixir');
var Protein = getItemSprite('Protein');
var Calcium = getItemSprite('Calcium');
var Iron = getItemSprite('Iron');
var Zinc = getItemSprite('Zinc');
var Carbos = getItemSprite('Carbos');
var Scarf = getItemSprite('Scarf');
var Orb = getItemSprite('Orb');
var GeoPebble = getItemSprite('GeoPebble');

// ========== SPRITE CANVAS COMPONENT ==========
// Renders a single sprite from an atlas using canvas drawImage
var SpriteCanvas = React.memo(function (_ref) {
  var pokemon = _ref.pokemon,
    atlasKey = _ref.atlasKey,
    animation = _ref.animation,
    direction = _ref.direction,
    frame = _ref.frame,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 40 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 40 : _ref$height,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var canvasRef = React.useRef(null);
  React.useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var atlasData;
    if (atlasKey) {
      // Item atlas
      atlasData = getItemAtlasData(atlasKey);
    } else if (animation && direction && frame !== undefined) {
      // Vaporeon atlas
      atlasData = getPokemonAtlasData(pokemon, animation, direction, frame);
    }
    if (!atlasData) return;
    var render = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var atlasImg, ctx, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return loadAtlasImage(atlasData.sheet);
            case 1:
              atlasImg = _context.v;
              ctx = canvas.getContext('2d', {
                willReadFrequently: false
              }); // Set canvas size
              canvas.width = width;
              canvas.height = height;

              // Draw the sprite from atlas using drawImage with source and destination rects
              ctx.drawImage(atlasImg, atlasData.x,
              // source x
              atlasData.y,
              // source y
              atlasData.w,
              // source width
              atlasData.h,
              // source height
              0,
              // destination x
              0,
              // destination y
              width,
              // destination width
              height // destination height
              );
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error rendering sprite:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      return function render() {
        return _ref2.apply(this, arguments);
      };
    }();
    render();
  }, [atlasKey, pokemon, animation, direction, frame, width, height]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: _objectSpread({
      imageRendering: 'smooth',
      objectFit: 'contain'
    }, style)
  });
});

// Scene Dialog
//Debug Text Dialog (Key = 0)
var DebugTextDialog = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_005.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_009.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_010.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_011.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_012.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_013.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_014.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_015.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_016.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_017.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_018.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_019.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_020.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_021.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_022.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_023.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_024.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_025.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_026.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_027.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_028.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_029.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_030.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_031.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_032.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_033.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_034.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_035.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_036.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_037.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_038.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_039.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_040.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_041.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_042.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_043.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_044.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_045.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_046.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_047.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_048.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_049.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_050.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_051.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_052.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_053.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_054.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_055.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_056.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_057.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_058.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_059.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_060.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_061.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_062.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_063.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_064.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_065.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_066.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_067.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_068.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_069.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_070.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_071.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_072.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_073.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_074.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_075.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_076.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_077.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_078.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_079.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_080.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_081.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_082.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_083.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_084.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_085.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_086.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_087.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_088.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_089.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_090.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_091.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_092.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_093.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_094.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_095.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_096.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_097.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_098.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_099.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_100.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_101.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_102.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_103.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_104.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_105.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_106.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_107.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_108.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_109.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_110.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_111.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_112.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_113.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_114.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_115.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_116.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_117.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_118.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_119.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_120.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_121.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_122.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_123.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_124.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_125.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_126.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_127.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_128.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_129.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_130.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_131.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_132.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_133.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_134.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_135.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_136.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_137.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_138.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_139.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_140.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_141.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_142.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_143.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_144.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_145.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_146.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_147.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_148.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_149.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_150.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_151.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_152.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_153.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_154.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_155.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_156.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_157.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_158.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_159.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_160.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_161.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_162.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_163.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_164.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_165.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_166.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_167.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_168.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_169.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_170.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_171.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_172.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_173.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_174.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_175.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_176.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_177.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_178.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_179.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_180.png'];
var MOVE_DEFS = {
  "Acid Armor": {
    name: "Acid Armor",
    type: "Poison",
    power: 0,
    range: "Self",
    accuracy: 100,
    ppmax: 30,
    ppcurr: 30,
    effect: "Raises user's Defense by 2 stages."
  },
  "Aqua Tail": {
    name: "Aqua Tail",
    type: "Water",
    range: "1",
    alignment: "radial",
    power: 90,
    accuracy: 90,
    ppmax: 10,
    ppcurr: 10,
    effect: "Has a high critical hit ratio."
  },
  "Aurora Beam": {
    name: "Aurora Beam",
    type: "Ice",
    range: "6",
    alignment: "same-direction",
    power: 65,
    accuracy: 100,
    pp: 20,
    effect: "May lower the target's Attack by 1 stage."
  },
  "Bite": {
    name: "Bite",
    type: "Dark",
    range: "1",
    alignment: "same-direction",
    power: 60,
    accuracy: 100,
    pp: 25,
    effect: "May cause the target to flinch."
  },
  "Bubble Beam": {
    name: "Bubble Beam",
    type: "Water",
    range: "6",
    alignment: "same-direction",
    power: 65,
    accuracy: 100,
    pp: 20,
    effect: "May lower the target's Speed by 1 stage."
  },
  "Hydro Pump": {
    name: "Hydro Pump",
    type: "Water",
    range: "10",
    alignment: "same-direction",
    power: 110,
    accuracy: 80,
    pp: 5,
    effect: "No additional effect."
  },
  "Ice Beam": {
    name: "Ice Beam",
    type: "Ice",
    range: "6",
    alignment: "same-direction",
    power: 90,
    accuracy: 100,
    pp: 10,
    effect: "May freeze."
  },
  "Muddy Water": {
    name: "Muddy Water",
    type: "Water",
    range: "6",
    alignment: "radial",
    power: 90,
    accuracy: 85,
    pp: 10,
    effect: "May lower the target's accuracy by 1 stage."
  },
  'Refresh': {
    name: 'Refresh',
    type: 'Normal',
    power: 0,
    range: 'Self + Allies',
    accuracy: 100,
    ppmax: 20,
    ppcurr: 20,
    effect: "Heals the user if it is poisoned, burned, or paralyzed."
  },
  "Water Pulse": {
    name: "Water Pulse",
    type: "Water",
    power: 60,
    range: "6",
    alignment: "same-direction",
    accuracy: 100,
    ppmax: 20,
    ppcurr: 20,
    effect: "May confuse the target."
  },
  "Rock Throw": {
    name: "Rock Throw",
    type: "Rock",
    power: 50,
    range: "2",
    alignment: "same-direction",
    accuracy: 100,
    ppmax: 15,
    ppcurr: 15,
    effect: "No additional effect."
  }
};
var ITEM_DEFS = {
  "Reviver Seed": {
    name: "Reviver Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Stun Seed": {
    name: "Stun Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Tiny Reviver Seed": {
    name: "Tiny Reviver Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Sleep Seed": {
    name: "Sleep Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Warp Seed": {
    name: "Warp Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Life Seed": {
    name: "Life Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Pure Seed": {
    name: "Pure Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 3
  },
  "Joy Seed": {
    name: "Joy Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Apple": {
    name: "Apple",
    sprite: Apple,
    stackSize: 1,
    tier: 1
  },
  "Big Apple": {
    name: "Big Apple",
    sprite: Bigapple,
    stackSize: 1,
    tier: 2
  },
  "Golden Apple": {
    name: "Golden Apple",
    sprite: Goldenapple,
    stackSize: 1,
    tier: 3
  },
  "Grimy Food": {
    name: "Grimy Food",
    sprite: Grimyfood,
    stackSize: 1,
    tier: 1
  },
  "Max Ether": {
    name: "Max Ether",
    sprite: Maxether,
    stackSize: 1,
    tier: 1
  },
  "Max Elixir": {
    name: "Max Elixir",
    sprite: Maxelixir,
    stackSize: 1,
    tier: 2
  },
  "Protein": {
    name: "Protein",
    sprite: Protein,
    stackSize: 1,
    tier: 2
  },
  "Calcium": {
    name: "Calcium",
    sprite: Calcium,
    stackSize: 1,
    tier: 2
  },
  "Iron": {
    name: "Iron",
    sprite: Iron,
    stackSize: 1,
    tier: 2
  },
  "Zinc": {
    name: "Zinc",
    sprite: Zinc,
    stackSize: 1,
    tier: 2
  },
  "Carbos": {
    name: "Carbos",
    sprite: Carbos,
    stackSize: 1,
    tier: 2
  },
  "Zinc Band": {
    name: "Zinc Band",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Special Band": {
    name: "Special Band",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Warp Scarf": {
    name: "Warp Scarf",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Luminous Orb": {
    name: "Luminous Orb",
    sprite: Orb,
    stackSize: 1,
    tier: 4
  },
  "Warp Orb": {
    name: "Warp Orb",
    sprite: Orb,
    stackSize: 1,
    tier: 1
  }
};
var ENEMY_DEFS = {
  //Note: Lunatone is a levitating Pokemon and does not reasonably need walk sprites
  'Lunatone': {
    name: 'Lunatone',
    type: 'Rock/Psychic',
    maxHp: 150,
    hp: 150,
    attack: 80,
    specialAttack: 95,
    specialDefense: 90,
    defense: 90,
    speed: 60,
    moves: [MOVE_DEFS['Rock Throw'], MOVE_DEFS['Aurora Beam'], MOVE_DEFS['Bite'], MOVE_DEFS['Moonblast']],
    sprites: {
      downIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown8.png'
      },
      upIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp8.png'
      },
      leftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft8.png'
      },
      rightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight8.png'
      },
      upRightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight8.png'
      },
      upLeftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft8.png'
      },
      downLeftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft8.png'
      },
      downRightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight8.png'
      },
      sleep: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep000.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep001.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep002.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep003.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep004.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep005.png'
      }
    }
  }
  /*
    'Vaporeon': {
      name: 'Vaporeon',
      type: 'Water',
      maxHp: 130,
      hp: 130,
      attack: 65,
      specialAttack: 110,
      specialDefense: 95,
      defense: 60,
      speed: 65,
      moves: [MOVE_DEFS['Bubble Beam'], MOVE_DEFS['Hydro Pump'], MOVE_DEFS['Ice Beam'], MOVE_DEFS['Water Pulse']],
      sprites: {
        downIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD2.png',
        },
        upIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU2.png',
        },
        leftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL2.png',
        },
        rightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR2.png',
        },
        downLeftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL2.png',
        },
        downRightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR2.png',
        },
        upLeftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL2.png',
        },
        upRightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR2.png',
        }
      }
    }
      */
};
var MAX_INVENTORY_SLOTS = 10;
// Enemy moves
var rockThrowVfxFrames = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/005.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/009.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/010.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/011.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/012.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/013.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/014.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/015.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/016.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/017.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/018.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/019.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/020.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/021.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/022.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/023.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/024.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/025.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/026.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/027.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/028.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/move%20vfx%20frames/Rock%20Throw/029.png'];

// Enemy sprite URLs
//Lunatone
// Idle animation
var lunatoneSprites = [getPokemonSprite('Lunatone', 'idle', 'down', 1), getPokemonSprite('Lunatone', 'idle', 'down', 2), getPokemonSprite('Lunatone', 'idle', 'down', 3), getPokemonSprite('Lunatone', 'idle', 'down', 4), getPokemonSprite('Lunatone', 'idle', 'down', 5), getPokemonSprite('Lunatone', 'idle', 'down', 6), getPokemonSprite('Lunatone', 'idle', 'down', 7), getPokemonSprite('Lunatone', 'idle', 'down', 8)];
var lunatoneUpSprites = [getPokemonSprite('Lunatone', 'idle', 'up', 1), getPokemonSprite('Lunatone', 'idle', 'up', 2), getPokemonSprite('Lunatone', 'idle', 'up', 3), getPokemonSprite('Lunatone', 'idle', 'up', 4), getPokemonSprite('Lunatone', 'idle', 'up', 5), getPokemonSprite('Lunatone', 'idle', 'up', 6), getPokemonSprite('Lunatone', 'idle', 'up', 7), getPokemonSprite('Lunatone', 'idle', 'up', 8)];
var lunatoneLeftSprites = [getPokemonSprite('Lunatone', 'idle', 'left', 1), getPokemonSprite('Lunatone', 'idle', 'left', 2), getPokemonSprite('Lunatone', 'idle', 'left', 3), getPokemonSprite('Lunatone', 'idle', 'left', 4), getPokemonSprite('Lunatone', 'idle', 'left', 5), getPokemonSprite('Lunatone', 'idle', 'left', 6), getPokemonSprite('Lunatone', 'idle', 'left', 7), getPokemonSprite('Lunatone', 'idle', 'left', 8)];
var lunatoneRightSprites = [getPokemonSprite('Lunatone', 'idle', 'right', 1), getPokemonSprite('Lunatone', 'idle', 'right', 2), getPokemonSprite('Lunatone', 'idle', 'right', 3), getPokemonSprite('Lunatone', 'idle', 'right', 4), getPokemonSprite('Lunatone', 'idle', 'right', 5), getPokemonSprite('Lunatone', 'idle', 'right', 6), getPokemonSprite('Lunatone', 'idle', 'right', 7), getPokemonSprite('Lunatone', 'idle', 'right', 8)];
var lunatoneUpRightSprites = [getPokemonSprite('Lunatone', 'idle', 'upright', 1), getPokemonSprite('Lunatone', 'idle', 'upright', 2), getPokemonSprite('Lunatone', 'idle', 'upright', 3), getPokemonSprite('Lunatone', 'idle', 'upright', 4), getPokemonSprite('Lunatone', 'idle', 'upright', 5), getPokemonSprite('Lunatone', 'idle', 'upright', 6), getPokemonSprite('Lunatone', 'idle', 'upright', 7), getPokemonSprite('Lunatone', 'idle', 'upright', 8)];
var lunatoneUpLeftSprites = [getPokemonSprite('Lunatone', 'idle', 'upleft', 1), getPokemonSprite('Lunatone', 'idle', 'upleft', 2), getPokemonSprite('Lunatone', 'idle', 'upleft', 3), getPokemonSprite('Lunatone', 'idle', 'upleft', 4), getPokemonSprite('Lunatone', 'idle', 'upleft', 5), getPokemonSprite('Lunatone', 'idle', 'upleft', 6), getPokemonSprite('Lunatone', 'idle', 'upleft', 7), getPokemonSprite('Lunatone', 'idle', 'upleft', 8)];
var lunatoneDownLeftSprites = [getPokemonSprite('Lunatone', 'idle', 'downleft', 1), getPokemonSprite('Lunatone', 'idle', 'downleft', 2), getPokemonSprite('Lunatone', 'idle', 'downleft', 3), getPokemonSprite('Lunatone', 'idle', 'downleft', 4), getPokemonSprite('Lunatone', 'idle', 'downleft', 5), getPokemonSprite('Lunatone', 'idle', 'downleft', 6), getPokemonSprite('Lunatone', 'idle', 'downleft', 7), getPokemonSprite('Lunatone', 'idle', 'downleft', 8)];
var lunatoneDownRightSprites = [getPokemonSprite('Lunatone', 'idle', 'downright', 1), getPokemonSprite('Lunatone', 'idle', 'downright', 2), getPokemonSprite('Lunatone', 'idle', 'downright', 3), getPokemonSprite('Lunatone', 'idle', 'downright', 4), getPokemonSprite('Lunatone', 'idle', 'downright', 5), getPokemonSprite('Lunatone', 'idle', 'downright', 6), getPokemonSprite('Lunatone', 'idle', 'downright', 7), getPokemonSprite('Lunatone', 'idle', 'downright', 8)];
var lunatoneSleepSprites = [getPokemonSprite('Lunatone', 'sleep', 'none', 1), getPokemonSprite('Lunatone', 'sleep', 'none', 2), getPokemonSprite('Lunatone', 'sleep', 'none', 3), getPokemonSprite('Lunatone', 'sleep', 'none', 4), getPokemonSprite('Lunatone', 'sleep', 'none', 5), getPokemonSprite('Lunatone', 'sleep', 'none', 6)];
// Vaporeon sprite URLs
// Idle animations

var vaporeonSprites = [getPokemonSprite('Vaporeon', 'idle', 'down', 1), getPokemonSprite('Vaporeon', 'idle', 'down', 2)];
var vaporeonLeftSprites = [getPokemonSprite('Vaporeon', 'idle', 'left', 1), getPokemonSprite('Vaporeon', 'idle', 'left', 2)];
var vaporeonRightSprites = [getPokemonSprite('Vaporeon', 'idle', 'right', 1), getPokemonSprite('Vaporeon', 'idle', 'right', 2)];
var vaporeonUpSprites = [getPokemonSprite('Vaporeon', 'idle', 'up', 1), getPokemonSprite('Vaporeon', 'idle', 'up', 2)];
var vaporeonDownLeftSprites = [getPokemonSprite('Vaporeon', 'idle', 'downleft', 1), getPokemonSprite('Vaporeon', 'idle', 'downleft', 2)];
var vaporeonDownRightSprites = [getPokemonSprite('Vaporeon', 'idle', 'downright', 1), getPokemonSprite('Vaporeon', 'idle', 'downright', 2)];
var vaporeonUpLeftSprites = [getPokemonSprite('Vaporeon', 'idle', 'upleft', 1), getPokemonSprite('Vaporeon', 'idle', 'upleft', 2)];
var vaporeonUpRightSprites = [getPokemonSprite('Vaporeon', 'idle', 'upright', 1), getPokemonSprite('Vaporeon', 'idle', 'upright', 2)];
// Walking animations
var vaporeonDownWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'down', 1), getPokemonSprite('Vaporeon', 'walk', 'down', 2), getPokemonSprite('Vaporeon', 'walk', 'down', 3), getPokemonSprite('Vaporeon', 'walk', 'down', 4)];
var vaporeonUpWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'up', 1), getPokemonSprite('Vaporeon', 'walk', 'up', 2), getPokemonSprite('Vaporeon', 'walk', 'up', 3), getPokemonSprite('Vaporeon', 'walk', 'up', 4)];
var vaporeonLeftWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'left', 1), getPokemonSprite('Vaporeon', 'walk', 'left', 2), getPokemonSprite('Vaporeon', 'walk', 'left', 3), getPokemonSprite('Vaporeon', 'walk', 'left', 4)];
var vaporeonRightWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'right', 1), getPokemonSprite('Vaporeon', 'walk', 'right', 2), getPokemonSprite('Vaporeon', 'walk', 'right', 3), getPokemonSprite('Vaporeon', 'walk', 'right', 4)];
var vaporeonUpLeftWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'upleft', 1), getPokemonSprite('Vaporeon', 'walk', 'upleft', 2), getPokemonSprite('Vaporeon', 'walk', 'upleft', 3), getPokemonSprite('Vaporeon', 'walk', 'upleft', 4)];
var vaporeonUpRightWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'upright', 1), getPokemonSprite('Vaporeon', 'walk', 'upright', 2), getPokemonSprite('Vaporeon', 'walk', 'upright', 3), getPokemonSprite('Vaporeon', 'walk', 'upright', 4)];
var vaporeonDownLeftWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'downleft', 1), getPokemonSprite('Vaporeon', 'walk', 'downleft', 2), getPokemonSprite('Vaporeon', 'walk', 'downleft', 3), getPokemonSprite('Vaporeon', 'walk', 'downleft', 4)];
var vaporeonDownRightWalkSprites = [getPokemonSprite('Vaporeon', 'walk', 'downright', 1), getPokemonSprite('Vaporeon', 'walk', 'downright', 2), getPokemonSprite('Vaporeon', 'walk', 'downright', 3), getPokemonSprite('Vaporeon', 'walk', 'downright', 4)];
// Spin animations
var vaporeonUpSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'up', 1), getPokemonSprite('Vaporeon', 'spin', 'up', 2), getPokemonSprite('Vaporeon', 'spin', 'up', 3), getPokemonSprite('Vaporeon', 'spin', 'up', 4), getPokemonSprite('Vaporeon', 'spin', 'up', 5), getPokemonSprite('Vaporeon', 'spin', 'up', 6), getPokemonSprite('Vaporeon', 'spin', 'up', 7), getPokemonSprite('Vaporeon', 'spin', 'up', 8), getPokemonSprite('Vaporeon', 'spin', 'up', 9)];
var vaporeonUpRightSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'upright', 1), getPokemonSprite('Vaporeon', 'spin', 'upright', 2), getPokemonSprite('Vaporeon', 'spin', 'upright', 3), getPokemonSprite('Vaporeon', 'spin', 'upright', 4), getPokemonSprite('Vaporeon', 'spin', 'upright', 5), getPokemonSprite('Vaporeon', 'spin', 'upright', 6), getPokemonSprite('Vaporeon', 'spin', 'upright', 7), getPokemonSprite('Vaporeon', 'spin', 'upright', 8), getPokemonSprite('Vaporeon', 'spin', 'upright', 9)];
var vaporeonRightSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'right', 1), getPokemonSprite('Vaporeon', 'spin', 'right', 2), getPokemonSprite('Vaporeon', 'spin', 'right', 3), getPokemonSprite('Vaporeon', 'spin', 'right', 4), getPokemonSprite('Vaporeon', 'spin', 'right', 5), getPokemonSprite('Vaporeon', 'spin', 'right', 6), getPokemonSprite('Vaporeon', 'spin', 'right', 7), getPokemonSprite('Vaporeon', 'spin', 'right', 8), getPokemonSprite('Vaporeon', 'spin', 'right', 9)];
var vaporeonDownRightSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'downright', 1), getPokemonSprite('Vaporeon', 'spin', 'downright', 2), getPokemonSprite('Vaporeon', 'spin', 'downright', 3), getPokemonSprite('Vaporeon', 'spin', 'downright', 4), getPokemonSprite('Vaporeon', 'spin', 'downright', 5), getPokemonSprite('Vaporeon', 'spin', 'downright', 6), getPokemonSprite('Vaporeon', 'spin', 'downright', 7), getPokemonSprite('Vaporeon', 'spin', 'downright', 8), getPokemonSprite('Vaporeon', 'spin', 'downright', 9)];
var vaporeonDownSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'down', 1), getPokemonSprite('Vaporeon', 'spin', 'down', 2), getPokemonSprite('Vaporeon', 'spin', 'down', 3), getPokemonSprite('Vaporeon', 'spin', 'down', 4), getPokemonSprite('Vaporeon', 'spin', 'down', 5), getPokemonSprite('Vaporeon', 'spin', 'down', 6), getPokemonSprite('Vaporeon', 'spin', 'down', 7), getPokemonSprite('Vaporeon', 'spin', 'down', 8), getPokemonSprite('Vaporeon', 'spin', 'down', 9)];
var vaporeonDownLeftSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'downleft', 1), getPokemonSprite('Vaporeon', 'spin', 'downleft', 2), getPokemonSprite('Vaporeon', 'spin', 'downleft', 3), getPokemonSprite('Vaporeon', 'spin', 'downleft', 4), getPokemonSprite('Vaporeon', 'spin', 'downleft', 5), getPokemonSprite('Vaporeon', 'spin', 'downleft', 6), getPokemonSprite('Vaporeon', 'spin', 'downleft', 7), getPokemonSprite('Vaporeon', 'spin', 'downleft', 8), getPokemonSprite('Vaporeon', 'spin', 'downleft', 9)];
var vaporeonLeftSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'left', 1), getPokemonSprite('Vaporeon', 'spin', 'left', 2), getPokemonSprite('Vaporeon', 'spin', 'left', 3), getPokemonSprite('Vaporeon', 'spin', 'left', 4), getPokemonSprite('Vaporeon', 'spin', 'left', 5), getPokemonSprite('Vaporeon', 'spin', 'left', 6), getPokemonSprite('Vaporeon', 'spin', 'left', 7), getPokemonSprite('Vaporeon', 'spin', 'left', 8), getPokemonSprite('Vaporeon', 'spin', 'left', 9)];
var vaporeonUpLeftSpinSprites = [getPokemonSprite('Vaporeon', 'spin', 'upleft', 1), getPokemonSprite('Vaporeon', 'spin', 'upleft', 2), getPokemonSprite('Vaporeon', 'spin', 'upleft', 3), getPokemonSprite('Vaporeon', 'spin', 'upleft', 4), getPokemonSprite('Vaporeon', 'spin', 'upleft', 5), getPokemonSprite('Vaporeon', 'spin', 'upleft', 6), getPokemonSprite('Vaporeon', 'spin', 'upleft', 7), getPokemonSprite('Vaporeon', 'spin', 'upleft', 8), getPokemonSprite('Vaporeon', 'spin', 'upleft', 9)];
// Aqua Tail vfx
//up
var vaporeonAquaTailUpSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up/005.png'];
//down
var vaporeonAquaTailDownSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down/005.png'];
//left
var vaporeonAquaTailLeftSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/left/005.png'];
//right
var vaporeonAquaTailRightSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/right/005.png'];
//up-right
var vaporeonAquaTailUpRightSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-right/005.png'];
//up-left
var vaporeonAquaTailUpLeftSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/up-left/005.png'];
//down-right
var vaporeonAquaTailDownRightSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-right/005.png'];
//down-left
var vaporeonAquaTailDownLeftSprites = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/004.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/003.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/002.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/001.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/000.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/008.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/007.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/006.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/move%20vfx%20frames/Aqua%20Tail/down-left/005.png'];

// Sleep animations
var vaporeonSleepSprites = [getPokemonSprite('Vaporeon', 'sleep', 'none', 1), getPokemonSprite('Vaporeon', 'sleep', 'none', 2)];
// VFX animations
// Level up VFX
var levelVfxFrames = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame1.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame2.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame3.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame4.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame5.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame6.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame7.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame8.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame9.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame10.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame11.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame12.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame13.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame14.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame15.png'];
// Buff VFX
var buffVfxFrames = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame1.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame2.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame3.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame4.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame5.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame6.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame7.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame8.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame9.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame10.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame11.png'];
var vaporeonPortraitNormal = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/portraits/VaporeonPortrait_Normal.png';
var Pokedollar = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Currency/Pokedollar.png'; // Replace with your sprite URL

// Wall sprites
var wallSpriteLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet164l.png';
var wallSpriteRight = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet167r.png';
var wallSpriteUp = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet001u.png';
var wallSpriteDown = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet186d.png';
var cornerSpriteTopLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet000tl.png'; // Updated to new top left corner sprite
var cornerSpriteTopRight = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet003tr.png'; // Updated to new top right corner sprite
var cornerSpriteBottomLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet124bl.png'; // Updated to new bottom left corner sprite
var Sprites = {
  tiles: {
    cornerSpriteBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet159br.png',
    enclosedWallSprite1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full1.png',
    enclosedWallSprite2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full2.png',
    enclosedWallSprite3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full3.png',
    enclosedWallSprite4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full4.png',
    innerCornerTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_topright.png',
    innerCornerTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_topleft.png',
    innerCornerBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_bottomright.png',
    innerCornerBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_bottomleft.png'
  }
};
var cornerSpriteBottomRight = Sprites.tiles.cornerSpriteBottomRight;
var enclosedWallSprite1 = Sprites.tiles.enclosedWallSprite1;
var enclosedWallSprite2 = Sprites.tiles.enclosedWallSprite2;
var enclosedWallSprite3 = Sprites.tiles.enclosedWallSprite3;
var enclosedWallSprite4 = Sprites.tiles.enclosedWallSprite4;
var innerCornerTopRight = Sprites.tiles.innerCornerTopRight;
var innerCornerTopLeft = Sprites.tiles.innerCornerTopLeft;
var innerCornerBottomRight = Sprites.tiles.innerCornerBottomRight;
var innerCornerBottomLeft = Sprites.tiles.innerCornerBottomLeft;
// Helper function to generate bar component URLs on demand
var generateBarComponents = function generateBarComponents(category, formatFn) {
  var urls = {};
  for (var i = 0; i <= 100; i++) {
    urls[i] = "https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/".concat(category, "/").concat(formatFn(i), ".png");
  }
  return urls;
};
// Hunger components
var hungerBarComponent = generateBarComponents('hungerComponent', function (i) {
  return "Hunger%20Bar%20Component%20".concat(i < 10 ? '0' + i : i, "%25");
});
// Health bar components
var healthBarComponent = generateBarComponents('healthComponent', function (i) {
  return "HealthBarComponent".concat(i, "%25");
});

// Experience bar components
var expBarComponent = generateBarComponents('expComponent', function (i) {
  return "expBar".concat(i, "%25");
});
// Item Selection indicator (proto)
// Item Selection indicator (proto)
var itemSelector = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/itemSelector.png';

// Floor Sprites (random rotation) and sound effects grouped
Sprites.floor = ['https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet068%231.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet070%232.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet116%233.png', 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet117%234.png'];
Sprites.sfx = {
  select: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Select1sfx.mp3'),
  decline: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Decline1sfx.mp3'),
  affirmative: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Affirmative1sfx.mp3')
};

// compatibility aliases
var floorSprites = Sprites.floor;
var selectsfx = Sprites.sfx.select;
var declinesfx = Sprites.sfx.decline;
var affirmativesfx = Sprites.sfx.affirmative;

// Stair Sprite (proto)
var stairSprite = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/StairsWithTile.png';
var turnIntervalMs = 500;
var Game = function Game() {
  // Start React state declarations here
  var fpsRef = React.useRef(null);
  React.useEffect(function () {
    var rafId = 0;
    var frames = 0;
    var lastMeasure = performance.now();
    var measureIntervalMs = 500; // update every 0.5s

    function tick(now) {
      frames++;
      if (now - lastMeasure >= measureIntervalMs) {
        var fps = Math.round(frames * 1000 / (now - lastMeasure));
        if (fpsRef.current) fpsRef.current.textContent = "FPS: ".concat(fps);
        frames = 0;
        lastMeasure = now;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return function () {
      return cancelAnimationFrame(rafId);
    };
  }, []);
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    audio = _React$useState2[0],
    setAudio = _React$useState2[1];
  var audioRef = React.useRef(audio);
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dungeon = _React$useState4[0],
    setDungeon = _React$useState4[1];
  var dungeonRef = React.useRef(null);
  var VIEW_RADIUS = 15; // 15 tiles each direction -> 31x31 viewport
  var minHeight = 65;
  var maxHeight = 75;
  var minWidth = 65;
  var maxWidth = 75;
  var height = randInt(minHeight, maxHeight + 1);
  var width = randInt(minWidth, maxWidth + 1);
  var _React$useState5 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    stairs = _React$useState6[0],
    setStairs = _React$useState6[1];
  var _React$useState7 = React.useState(1),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    floor = _React$useState8[0],
    setFloor = _React$useState8[1];
  var _React$useState9 = React.useState(1),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    zoomLevel = _React$useState0[0],
    setZoomLevel = _React$useState0[1];

  // Level params
  var _React$useState1 = React.useState(1),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    level = _React$useState10[0],
    setLevel = _React$useState10[1];
  var _React$useState11 = React.useState(0),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    exp = _React$useState12[0],
    setExp = _React$useState12[1];
  var _React$useState13 = React.useState(100),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    maxExp = _React$useState14[0],
    setMaxExp = _React$useState14[1];

  // Base Player Stats
  var _React$useState15 = React.useState(100),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    basePlayerHP = _React$useState16[0],
    setBasePlayerHP = _React$useState16[1];
  var _React$useState17 = React.useState(100),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    baseMaxPlayerHP = _React$useState18[0],
    setBaseMaxPlayerHP = _React$useState18[1];
  var _React$useState19 = React.useState(10),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    basePlayerAttack = _React$useState20[0],
    setBasePlayerAttack = _React$useState20[1];
  var _React$useState21 = React.useState(20),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    basePlayerSpecialAttack = _React$useState22[0],
    setBasePlayerSpecialAttack = _React$useState22[1];
  var _React$useState23 = React.useState(5),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    basePlayerDefense = _React$useState24[0],
    setBasePlayerDefense = _React$useState24[1];
  var _React$useState25 = React.useState(10),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    basePlayerSpecialDefense = _React$useState26[0],
    setBasePlayerSpecialDefense = _React$useState26[1];
  var _React$useState27 = React.useState(5),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    basePlayerSpeed = _React$useState28[0],
    setBasePlayerSpeed = _React$useState28[1];
  // Player stats
  var _React$useState29 = React.useState(basePlayerHP),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    playerHP = _React$useState30[0],
    setPlayerHP = _React$useState30[1];
  var _React$useState31 = React.useState(baseMaxPlayerHP),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    maxPlayerHP = _React$useState32[0],
    setMaxPlayerHP = _React$useState32[1];
  var _React$useState33 = React.useState(basePlayerAttack),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    playerAttack = _React$useState34[0],
    setPlayerAttack = _React$useState34[1];
  var _React$useState35 = React.useState(basePlayerSpecialAttack),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    playerSpecialAttack = _React$useState36[0],
    setPlayerSpecialAttack = _React$useState36[1];
  var _React$useState37 = React.useState(basePlayerDefense),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    playerDefense = _React$useState38[0],
    setPlayerDefense = _React$useState38[1];
  var _React$useState39 = React.useState(basePlayerSpecialDefense),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    playerSpecialDefense = _React$useState40[0],
    setPlayerSpecialDefense = _React$useState40[1];
  var _React$useState41 = React.useState(basePlayerSpeed),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    playerSpeed = _React$useState42[0],
    setPlayerSpeed = _React$useState42[1];

  // Hunger params
  var _React$useState43 = React.useState(100),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    playerHunger = _React$useState44[0],
    setPlayerHunger = _React$useState44[1];
  var _React$useState45 = React.useState(100),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    maxPlayerHunger = _React$useState46[0],
    setMaxPlayerHunger = _React$useState46[1];
  var _React$useState47 = React.useState(0),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    hungerTicks = _React$useState48[0],
    setHungerTicks = _React$useState48[1];
  var _React$useState49 = React.useState(false),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    hungry = _React$useState50[0],
    setHungry = _React$useState50[1];
  var _React$useState51 = React.useState(false),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    isStarving = _React$useState52[0],
    setIsStarving = _React$useState52[1];
  var _React$useState53 = React.useState(false),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    warned = _React$useState54[0],
    setWarned = _React$useState54[1];

  // Enemy params
  var _React$useState55 = React.useState([]),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    enemies = _React$useState56[0],
    setEnemies = _React$useState56[1];
  var enemiesRef = React.useRef(enemies);
  var enemyCount = randInt(1, 2); // 1 to 2 enemies per room
  var _React$useState57 = React.useState(Object.keys(ENEMY_DEFS)),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    enemyTypes = _React$useState58[0],
    setEnemyTypes = _React$useState58[1];
  var _React$useState59 = React.useState(enemyTypes[randInt(0, enemyTypes.length)]),
    _React$useState60 = _slicedToArray(_React$useState59, 2),
    enemyType = _React$useState60[0],
    setEnemyType = _React$useState60[1];
  var _React$useState61 = React.useState(null),
    _React$useState62 = _slicedToArray(_React$useState61, 2),
    enemyType1 = _React$useState62[0],
    setEnemyType1 = _React$useState62[1];
  var _React$useState63 = React.useState(null),
    _React$useState64 = _slicedToArray(_React$useState63, 2),
    enemyType2 = _React$useState64[0],
    setEnemyType2 = _React$useState64[1];
  var _React$useState65 = React.useState(null),
    _React$useState66 = _slicedToArray(_React$useState65, 2),
    enemyType3 = _React$useState66[0],
    setEnemyType3 = _React$useState66[1];
  var _React$useState67 = React.useState(null),
    _React$useState68 = _slicedToArray(_React$useState67, 2),
    enemyType4 = _React$useState68[0],
    setEnemyType4 = _React$useState68[1];
  var _React$useState69 = React.useState(null),
    _React$useState70 = _slicedToArray(_React$useState69, 2),
    enemyType5 = _React$useState70[0],
    setEnemyType5 = _React$useState70[1];
  var _React$useState71 = React.useState(null),
    _React$useState72 = _slicedToArray(_React$useState71, 2),
    enemyType6 = _React$useState72[0],
    setEnemyType6 = _React$useState72[1];
  var _React$useState73 = React.useState(null),
    _React$useState74 = _slicedToArray(_React$useState73, 2),
    enemyType7 = _React$useState74[0],
    setEnemyType7 = _React$useState74[1];
  var _React$useState75 = React.useState(null),
    _React$useState76 = _slicedToArray(_React$useState75, 2),
    enemyType8 = _React$useState76[0],
    setEnemyType8 = _React$useState76[1];
  var _React$useState77 = React.useState(null),
    _React$useState78 = _slicedToArray(_React$useState77, 2),
    enemyHere = _React$useState78[0],
    setEnemyHere = _React$useState78[1];
  var _React$useState79 = React.useState([]),
    _React$useState80 = _slicedToArray(_React$useState79, 2),
    enemyHereTiles = _React$useState80[0],
    setEnemyHereTiles = _React$useState80[1];
  var enemyHereTilesRef = React.useRef([]);
  var _React$useState81 = React.useState([]),
    _React$useState82 = _slicedToArray(_React$useState81, 2),
    enemiesState = _React$useState82[0],
    setEnemiesState = _React$useState82[1];
  var _React$useState83 = React.useState(false),
    _React$useState84 = _slicedToArray(_React$useState83, 2),
    enemy1 = _React$useState84[0],
    setEnemy1 = _React$useState84[1];
  var _React$useState85 = React.useState(false),
    _React$useState86 = _slicedToArray(_React$useState85, 2),
    enemy2 = _React$useState86[0],
    setEnemy2 = _React$useState86[1];
  var _React$useState87 = React.useState(false),
    _React$useState88 = _slicedToArray(_React$useState87, 2),
    enemy3 = _React$useState88[0],
    setEnemy3 = _React$useState88[1];
  var _React$useState89 = React.useState(false),
    _React$useState90 = _slicedToArray(_React$useState89, 2),
    enemy4 = _React$useState90[0],
    setEnemy4 = _React$useState90[1];
  var _React$useState91 = React.useState(false),
    _React$useState92 = _slicedToArray(_React$useState91, 2),
    enemy5 = _React$useState92[0],
    setEnemy5 = _React$useState92[1];
  var _React$useState93 = React.useState(false),
    _React$useState94 = _slicedToArray(_React$useState93, 2),
    enemy6 = _React$useState94[0],
    setEnemy6 = _React$useState94[1];
  var _React$useState95 = React.useState(false),
    _React$useState96 = _slicedToArray(_React$useState95, 2),
    enemy7 = _React$useState96[0],
    setEnemy7 = _React$useState96[1];
  var _React$useState97 = React.useState(false),
    _React$useState98 = _slicedToArray(_React$useState97, 2),
    enemy8 = _React$useState98[0],
    setEnemy8 = _React$useState98[1];
  var _React$useState99 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState100 = _slicedToArray(_React$useState99, 2),
    enemy1Pos = _React$useState100[0],
    setEnemy1Pos = _React$useState100[1];
  var _React$useState101 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState102 = _slicedToArray(_React$useState101, 2),
    enemy2Pos = _React$useState102[0],
    setEnemy2Pos = _React$useState102[1];
  var _React$useState103 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState104 = _slicedToArray(_React$useState103, 2),
    enemy3Pos = _React$useState104[0],
    setEnemy3Pos = _React$useState104[1];
  var _React$useState105 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState106 = _slicedToArray(_React$useState105, 2),
    enemy4Pos = _React$useState106[0],
    setEnemy4Pos = _React$useState106[1];
  var _React$useState107 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState108 = _slicedToArray(_React$useState107, 2),
    enemy5Pos = _React$useState108[0],
    setEnemy5Pos = _React$useState108[1];
  var _React$useState109 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState110 = _slicedToArray(_React$useState109, 2),
    enemy6Pos = _React$useState110[0],
    setEnemy6Pos = _React$useState110[1];
  var _React$useState111 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState112 = _slicedToArray(_React$useState111, 2),
    enemy7Pos = _React$useState112[0],
    setEnemy7Pos = _React$useState112[1];
  var _React$useState113 = React.useState({
      x: 0,
      y: 0
    }),
    _React$useState114 = _slicedToArray(_React$useState113, 2),
    enemy8Pos = _React$useState114[0],
    setEnemy8Pos = _React$useState114[1];
  // position refs
  var enemy1PosRef = React.useRef(enemy1Pos);
  var enemy2PosRef = React.useRef(enemy2Pos);
  var enemy3PosRef = React.useRef(enemy3Pos);
  var enemy4PosRef = React.useRef(enemy4Pos);
  var enemy5PosRef = React.useRef(enemy5Pos);
  var enemy6PosRef = React.useRef(enemy6Pos);
  var enemy7PosRef = React.useRef(enemy7Pos);
  var enemy8PosRef = React.useRef(enemy8Pos);
  // anims
  var _React$useState115 = React.useState(0),
    _React$useState116 = _slicedToArray(_React$useState115, 2),
    enemy1IdleAnimIndex = _React$useState116[0],
    setEnemy1IdleAnimIndex = _React$useState116[1];
  var _React$useState117 = React.useState(0),
    _React$useState118 = _slicedToArray(_React$useState117, 2),
    enemy2IdleAnimIndex = _React$useState118[0],
    setEnemy2IdleAnimIndex = _React$useState118[1];
  var _React$useState119 = React.useState(0),
    _React$useState120 = _slicedToArray(_React$useState119, 2),
    enemy3IdleAnimIndex = _React$useState120[0],
    setEnemy3IdleAnimIndex = _React$useState120[1];
  var _React$useState121 = React.useState(0),
    _React$useState122 = _slicedToArray(_React$useState121, 2),
    enemy4IdleAnimIndex = _React$useState122[0],
    setEnemy4IdleAnimIndex = _React$useState122[1];
  var _React$useState123 = React.useState(0),
    _React$useState124 = _slicedToArray(_React$useState123, 2),
    enemy5IdleAnimIndex = _React$useState124[0],
    setEnemy5IdleAnimIndex = _React$useState124[1];
  var _React$useState125 = React.useState(0),
    _React$useState126 = _slicedToArray(_React$useState125, 2),
    enemy6IdleAnimIndex = _React$useState126[0],
    setEnemy6IdleAnimIndex = _React$useState126[1];
  var _React$useState127 = React.useState(0),
    _React$useState128 = _slicedToArray(_React$useState127, 2),
    enemy7IdleAnimIndex = _React$useState128[0],
    setEnemy7IdleAnimIndex = _React$useState128[1];
  var _React$useState129 = React.useState(0),
    _React$useState130 = _slicedToArray(_React$useState129, 2),
    enemy8IdleAnimIndex = _React$useState130[0],
    setEnemy8IdleAnimIndex = _React$useState130[1];
  // configure AI
  var _React$useState131 = React.useState(true),
    _React$useState132 = _slicedToArray(_React$useState131, 2),
    enemy1MoveBehavior = _React$useState132[0],
    setEnemy1MoveBehavior = _React$useState132[1]; // Whether enemies move
  var enemy1MoveBehaviorRef = React.useRef(enemy1MoveBehavior);
  var _React$useState133 = React.useState(false),
    _React$useState134 = _slicedToArray(_React$useState133, 2),
    enemy1AttackBehavior = _React$useState134[0],
    setEnemy1AttackBehavior = _React$useState134[1]; // Whether enemies attack
  var enemy1AttackBehaviorRef = React.useRef(enemy1AttackBehavior);
  var _React$useState135 = React.useState(true),
    _React$useState136 = _slicedToArray(_React$useState135, 2),
    enemy2MoveBehavior = _React$useState136[0],
    setEnemy2MoveBehavior = _React$useState136[1]; // Whether enemies move
  var enemy2MoveBehaviorRef = React.useRef(enemy2MoveBehavior);
  var _React$useState137 = React.useState(false),
    _React$useState138 = _slicedToArray(_React$useState137, 2),
    enemy2AttackBehavior = _React$useState138[0],
    setEnemy2AttackBehavior = _React$useState138[1]; // Whether enemies attack
  var enemy2AttackBehaviorRef = React.useRef(enemy2AttackBehavior);
  var _React$useState139 = React.useState(true),
    _React$useState140 = _slicedToArray(_React$useState139, 2),
    enemy3MoveBehavior = _React$useState140[0],
    setEnemy3MoveBehavior = _React$useState140[1]; // Whether enemies move
  var enemy3MoveBehaviorRef = React.useRef(enemy3MoveBehavior);
  var _React$useState141 = React.useState(false),
    _React$useState142 = _slicedToArray(_React$useState141, 2),
    enemy3AttackBehavior = _React$useState142[0],
    setEnemy3AttackBehavior = _React$useState142[1]; // Whether enemies attack
  var enemy3AttackBehaviorRef = React.useRef(enemy3AttackBehavior);
  var _React$useState143 = React.useState(true),
    _React$useState144 = _slicedToArray(_React$useState143, 2),
    enemy4MoveBehavior = _React$useState144[0],
    setEnemy4MoveBehavior = _React$useState144[1]; // Whether enemies move
  var enemy4MoveBehaviorRef = React.useRef(enemy4MoveBehavior);
  var _React$useState145 = React.useState(false),
    _React$useState146 = _slicedToArray(_React$useState145, 2),
    enemy4AttackBehavior = _React$useState146[0],
    setEnemy4AttackBehavior = _React$useState146[1]; // Whether enemies attack
  var enemy4AttackBehaviorRef = React.useRef(enemy4AttackBehavior);
  var _React$useState147 = React.useState(true),
    _React$useState148 = _slicedToArray(_React$useState147, 2),
    enemy5MoveBehavior = _React$useState148[0],
    setEnemy5MoveBehavior = _React$useState148[1]; // Whether enemies move
  var enemy5MoveBehaviorRef = React.useRef(enemy5MoveBehavior);
  var _React$useState149 = React.useState(false),
    _React$useState150 = _slicedToArray(_React$useState149, 2),
    enemy5AttackBehavior = _React$useState150[0],
    setEnemy5AttackBehavior = _React$useState150[1]; // Whether enemies attack
  var enemy5AttackBehaviorRef = React.useRef(enemy5AttackBehavior);
  var _React$useState151 = React.useState(true),
    _React$useState152 = _slicedToArray(_React$useState151, 2),
    enemy6MoveBehavior = _React$useState152[0],
    setEnemy6MoveBehavior = _React$useState152[1]; // Whether enemies move
  var enemy6MoveBehaviorRef = React.useRef(enemy6MoveBehavior);
  var _React$useState153 = React.useState(false),
    _React$useState154 = _slicedToArray(_React$useState153, 2),
    enemy6AttackBehavior = _React$useState154[0],
    setEnemy6AttackBehavior = _React$useState154[1]; // Whether enemies attack
  var enemy6AttackBehaviorRef = React.useRef(enemy6AttackBehavior);
  var _React$useState155 = React.useState(true),
    _React$useState156 = _slicedToArray(_React$useState155, 2),
    enemy7MoveBehavior = _React$useState156[0],
    setEnemy7MoveBehavior = _React$useState156[1]; // Whether enemies move
  var enemy7MoveBehaviorRef = React.useRef(enemy7MoveBehavior);
  var _React$useState157 = React.useState(false),
    _React$useState158 = _slicedToArray(_React$useState157, 2),
    enemy7AttackBehavior = _React$useState158[0],
    setEnemy7AttackBehavior = _React$useState158[1]; // Whether enemies attack
  var enemy7AttackBehaviorRef = React.useRef(enemy7AttackBehavior);
  var _React$useState159 = React.useState(true),
    _React$useState160 = _slicedToArray(_React$useState159, 2),
    enemy8MoveBehavior = _React$useState160[0],
    setEnemy8MoveBehavior = _React$useState160[1]; // Whether enemies move
  var enemy8MoveBehaviorRef = React.useRef(enemy8MoveBehavior);
  var _React$useState161 = React.useState(false),
    _React$useState162 = _slicedToArray(_React$useState161, 2),
    enemy8AttackBehavior = _React$useState162[0],
    setEnemy8AttackBehavior = _React$useState162[1]; // Whether enemies attack
  var enemy8AttackBehaviorRef = React.useRef(enemy8AttackBehavior);
  //Designated States to block movement
  var _React$useState163 = React.useState(false),
    _React$useState164 = _slicedToArray(_React$useState163, 2),
    enemy1Attacking = _React$useState164[0],
    setEnemy1Attacking = _React$useState164[1];
  var enemy1AttackingRef = React.useRef(enemy1Attacking);
  var _React$useState165 = React.useState(false),
    _React$useState166 = _slicedToArray(_React$useState165, 2),
    enemy2Attacking = _React$useState166[0],
    setEnemy2Attacking = _React$useState166[1];
  var enemy2AttackingRef = React.useRef(enemy2Attacking);
  var _React$useState167 = React.useState(false),
    _React$useState168 = _slicedToArray(_React$useState167, 2),
    enemy3Attacking = _React$useState168[0],
    setEnemy3Attacking = _React$useState168[1];
  var enemy3AttackingRef = React.useRef(enemy3Attacking);
  var _React$useState169 = React.useState(false),
    _React$useState170 = _slicedToArray(_React$useState169, 2),
    enemy4Attacking = _React$useState170[0],
    setEnemy4Attacking = _React$useState170[1];
  var enemy4AttackingRef = React.useRef(enemy4Attacking);
  var _React$useState171 = React.useState(false),
    _React$useState172 = _slicedToArray(_React$useState171, 2),
    enemy5Attacking = _React$useState172[0],
    setEnemy5Attacking = _React$useState172[1];
  var enemy5AttackingRef = React.useRef(enemy5Attacking);
  var _React$useState173 = React.useState(false),
    _React$useState174 = _slicedToArray(_React$useState173, 2),
    enemy6Attacking = _React$useState174[0],
    setEnemy6Attacking = _React$useState174[1];
  var enemy6AttackingRef = React.useRef(enemy6Attacking);
  var _React$useState175 = React.useState(false),
    _React$useState176 = _slicedToArray(_React$useState175, 2),
    enemy7Attacking = _React$useState176[0],
    setEnemy7Attacking = _React$useState176[1];
  var enemy7AttackingRef = React.useRef(enemy7Attacking);
  var _React$useState177 = React.useState(false),
    _React$useState178 = _slicedToArray(_React$useState177, 2),
    enemy8Attacking = _React$useState178[0],
    setEnemy8Attacking = _React$useState178[1];
  var enemy8AttackingRef = React.useRef(enemy8Attacking);
  // Last direction faced
  var _React$useState179 = React.useState('down'),
    _React$useState180 = _slicedToArray(_React$useState179, 2),
    enemy1LastDirection = _React$useState180[0],
    setEnemy1LastDirection = _React$useState180[1];
  var _React$useState181 = React.useState('down'),
    _React$useState182 = _slicedToArray(_React$useState181, 2),
    enemy2LastDirection = _React$useState182[0],
    setEnemy2LastDirection = _React$useState182[1];
  var _React$useState183 = React.useState('down'),
    _React$useState184 = _slicedToArray(_React$useState183, 2),
    enemy3LastDirection = _React$useState184[0],
    setEnemy3LastDirection = _React$useState184[1];
  var _React$useState185 = React.useState('down'),
    _React$useState186 = _slicedToArray(_React$useState185, 2),
    enemy4LastDirection = _React$useState186[0],
    setEnemy4LastDirection = _React$useState186[1];
  var _React$useState187 = React.useState('down'),
    _React$useState188 = _slicedToArray(_React$useState187, 2),
    enemy5LastDirection = _React$useState188[0],
    setEnemy5LastDirection = _React$useState188[1];
  var _React$useState189 = React.useState('down'),
    _React$useState190 = _slicedToArray(_React$useState189, 2),
    enemy6LastDirection = _React$useState190[0],
    setEnemy6LastDirection = _React$useState190[1];
  var _React$useState191 = React.useState('down'),
    _React$useState192 = _slicedToArray(_React$useState191, 2),
    enemy7LastDirection = _React$useState192[0],
    setEnemy7LastDirection = _React$useState192[1];
  var _React$useState193 = React.useState('down'),
    _React$useState194 = _slicedToArray(_React$useState193, 2),
    enemy8LastDirection = _React$useState194[0],
    setEnemy8LastDirection = _React$useState194[1];
  var _React$useState195 = React.useState(false),
    _React$useState196 = _slicedToArray(_React$useState195, 2),
    enemy1Sleeping = _React$useState196[0],
    setEnemy1Sleeping = _React$useState196[1];
  var _React$useState197 = React.useState(false),
    _React$useState198 = _slicedToArray(_React$useState197, 2),
    enemy2Sleeping = _React$useState198[0],
    setEnemy2Sleeping = _React$useState198[1];
  var _React$useState199 = React.useState(false),
    _React$useState200 = _slicedToArray(_React$useState199, 2),
    enemy3Sleeping = _React$useState200[0],
    setEnemy3Sleeping = _React$useState200[1];
  var _React$useState201 = React.useState(false),
    _React$useState202 = _slicedToArray(_React$useState201, 2),
    enemy4Sleeping = _React$useState202[0],
    setEnemy4Sleeping = _React$useState202[1];
  var _React$useState203 = React.useState(false),
    _React$useState204 = _slicedToArray(_React$useState203, 2),
    enemy5Sleeping = _React$useState204[0],
    setEnemy5Sleeping = _React$useState204[1];
  var _React$useState205 = React.useState(false),
    _React$useState206 = _slicedToArray(_React$useState205, 2),
    enemy6Sleeping = _React$useState206[0],
    setEnemy6Sleeping = _React$useState206[1];
  var _React$useState207 = React.useState(false),
    _React$useState208 = _slicedToArray(_React$useState207, 2),
    enemy7Sleeping = _React$useState208[0],
    setEnemy7Sleeping = _React$useState208[1];
  var _React$useState209 = React.useState(false),
    _React$useState210 = _slicedToArray(_React$useState209, 2),
    enemy8Sleeping = _React$useState210[0],
    setEnemy8Sleeping = _React$useState210[1];
  var _React$useState211 = React.useState(null),
    _React$useState212 = _slicedToArray(_React$useState211, 2),
    validOptions = _React$useState212[0],
    setValidOptions = _React$useState212[1];
  var _React$useState213 = React.useState(0),
    _React$useState214 = _slicedToArray(_React$useState213, 2),
    chosen = _React$useState214[0],
    setChosen = _React$useState214[1];
  // Attack booleans
  var _React$useState215 = React.useState(false),
    _React$useState216 = _slicedToArray(_React$useState215, 2),
    rockThrow = _React$useState216[0],
    setRockThrow = _React$useState216[1];
  var rockThrowRef = React.useRef(rockThrow);
  var _React$useState217 = React.useState('translatex(65%) translateY(-615%)'),
    _React$useState218 = _slicedToArray(_React$useState217, 2),
    rockThrowTransform = _React$useState218[0],
    setRockThrowTransform = _React$useState218[1]; // Store transform to prevent flickering
  // Projectile continuous position for smooth rendering
  var _React$useState219 = React.useState({
      1: {
        x: 0,
        y: 0
      },
      2: {
        x: 0,
        y: 0
      },
      3: {
        x: 0,
        y: 0
      },
      4: {
        x: 0,
        y: 0
      },
      5: {
        x: 0,
        y: 0
      },
      6: {
        x: 0,
        y: 0
      },
      7: {
        x: 0,
        y: 0
      },
      8: {
        x: 0,
        y: 0
      }
    }),
    _React$useState220 = _slicedToArray(_React$useState219, 2),
    projectilePos = _React$useState220[0],
    setProjectilePos = _React$useState220[1];
  var projectilePosRef = React.useRef(projectilePos);
  // Menu states
  var _React$useState221 = React.useState(false),
    _React$useState222 = _slicedToArray(_React$useState221, 2),
    isPaused = _React$useState222[0],
    setIsPaused = _React$useState222[1]; // New paused state
  var _React$useState223 = React.useState(false),
    _React$useState224 = _slicedToArray(_React$useState223, 2),
    showOptions = _React$useState224[0],
    setShowOptions = _React$useState224[1]; // State for options menu
  var _React$useState225 = React.useState(false),
    _React$useState226 = _slicedToArray(_React$useState225, 2),
    showStatus = _React$useState226[0],
    setShowStatus = _React$useState226[1]; // State for status menu
  var _React$useState227 = React.useState(false),
    _React$useState228 = _slicedToArray(_React$useState227, 2),
    showMoves = _React$useState228[0],
    setShowMoves = _React$useState228[1]; // State for moves menu
  var _React$useState229 = React.useState(false),
    _React$useState230 = _slicedToArray(_React$useState229, 2),
    showToolbox = _React$useState230[0],
    setShowToolbox = _React$useState230[1]; // State for toolbox menu
  var isPausedRef = React.useRef(isPaused);

  // Currency
  var _React$useState231 = React.useState([]),
    _React$useState232 = _slicedToArray(_React$useState231, 2),
    currencyTiles = _React$useState232[0],
    setCurrencyTiles = _React$useState232[1];
  var _React$useState233 = React.useState(0),
    _React$useState234 = _slicedToArray(_React$useState233, 2),
    currency = _React$useState234[0],
    setCurrency = _React$useState234[1];
  var currencyTilesRef = React.useRef(currencyTiles);

  // Item tiles and inventory
  var _React$useState235 = React.useState([]),
    _React$useState236 = _slicedToArray(_React$useState235, 2),
    itemTiles = _React$useState236[0],
    setItemTiles = _React$useState236[1];
  var itemTilesRef = React.useRef(itemTiles);
  var _React$useState237 = React.useState([]),
    _React$useState238 = _slicedToArray(_React$useState237, 2),
    itemTilesIndex = _React$useState238[0],
    setItemTilesIndex = _React$useState238[1]; // Index for cycling through item tiles
  var _React$useState239 = React.useState([]),
    _React$useState240 = _slicedToArray(_React$useState239, 2),
    itemTilesIndexRef = _React$useState240[0],
    setItemTilesIndexRef = _React$useState240[1];
  var _React$useState241 = React.useState(0),
    _React$useState242 = _slicedToArray(_React$useState241, 2),
    natItemOrder = _React$useState242[0],
    setNatItemOrder = _React$useState242[1]; // Natural item order for cycling through items
  var _React$useState243 = React.useState(0),
    _React$useState244 = _slicedToArray(_React$useState243, 2),
    itemOrder = _React$useState244[0],
    setItemOrder = _React$useState244[1];
  var _React$useState245 = React.useState(null),
    _React$useState246 = _slicedToArray(_React$useState245, 2),
    itemSelected = _React$useState246[0],
    setItemSelected = _React$useState246[1]; // Index of selected item in inventory
  var _React$useState247 = React.useState([]),
    _React$useState248 = _slicedToArray(_React$useState247, 2),
    inventoryIndex = _React$useState248[0],
    setInventoryIndex = _React$useState248[1]; // Index for navigating inventory
  var _React$useState249 = React.useState(0),
    _React$useState250 = _slicedToArray(_React$useState249, 2),
    flickerFrame = _React$useState250[0],
    setFlickerFrame = _React$useState250[1];
  var _React$useState251 = React.useState([]),
    _React$useState252 = _slicedToArray(_React$useState251, 2),
    inventory = _React$useState252[0],
    setInventory = _React$useState252[1];
  var inventoryRef = React.useRef(inventory);
  var _React$useState253 = React.useState(null),
    _React$useState254 = _slicedToArray(_React$useState253, 2),
    itemEquipped = _React$useState254[0],
    setItemEquipped = _React$useState254[1];
  var _React$useState255 = React.useState(null),
    _React$useState256 = _slicedToArray(_React$useState255, 2),
    itemEquippedId = _React$useState256[0],
    setItemEquippedId = _React$useState256[1];
  var _React$useState257 = React.useState(''),
    _React$useState258 = _slicedToArray(_React$useState257, 2),
    selectedAction = _React$useState258[0],
    setSelectedAction = _React$useState258[1];
  var _React$useState259 = React.useState(null),
    _React$useState260 = _slicedToArray(_React$useState259, 2),
    selectedItemSprite = _React$useState260[0],
    setSelectedItemSprite = _React$useState260[1];
  var selectedItemSpriteRef = React.useRef(selectedItemSprite);
  var _React$useState261 = React.useState(false),
    _React$useState262 = _slicedToArray(_React$useState261, 2),
    willConsumeItemInventory = _React$useState262[0],
    setWillConsumeItemInventory = _React$useState262[1];
  var willConsumeItemInventoryRef = React.useRef(willConsumeItemInventory);
  var _React$useState263 = React.useState(false),
    _React$useState264 = _slicedToArray(_React$useState263, 2),
    inventoryFull = _React$useState264[0],
    setInventoryFull = _React$useState264[1];
  var getInventoryIndex = function getInventoryIndex(inventory, ITEM_DEFS) {
    return inventory.map(function (item, position) {
      return {
        item: item,
        itemDef: ITEM_DEFS[item.name],
        position: position
      };
    });
  };
  // States for tracking thrown item behavior
  var _React$useState265 = React.useState(''),
    _React$useState266 = _slicedToArray(_React$useState265, 2),
    targeted = _React$useState266[0],
    setTargeted = _React$useState266[1];
  var targetedRef = React.useRef(targeted);
  var _React$useState267 = React.useState(false),
    _React$useState268 = _slicedToArray(_React$useState267, 2),
    willConsumeItem = _React$useState268[0],
    setWillConsumeItem = _React$useState268[1];
  var willConsumeItemRef = React.useRef(willConsumeItem);

  // Move selection
  var _React$useState269 = React.useState(false),
    _React$useState270 = _slicedToArray(_React$useState269, 2),
    showItemActionMenu = _React$useState270[0],
    setShowItemActionMenu = _React$useState270[1];
  var showItemActionMenuRef = React.useRef(showItemActionMenu);
  var _React$useState271 = React.useState(false),
    _React$useState272 = _slicedToArray(_React$useState271, 2),
    showMoveSelector = _React$useState272[0],
    setShowMoveSelector = _React$useState272[1];
  var _React$useState273 = React.useState(false),
    _React$useState274 = _slicedToArray(_React$useState273, 2),
    usingEther = _React$useState274[0],
    setUsingEther = _React$useState274[1]; // Track if using Ether
  var _React$useState275 = React.useState(0),
    _React$useState276 = _slicedToArray(_React$useState275, 2),
    selectedMove = _React$useState276[0],
    setSelectedMove = _React$useState276[1];
  var moves = [{
    name: "Water Pulse",
    pp: "".concat(MOVE_DEFS["Water Pulse"].ppcurr, "/").concat(MOVE_DEFS["Water Pulse"].ppmax)
  }, {
    name: "Aqua Tail",
    pp: "".concat(MOVE_DEFS["Aqua Tail"].ppcurr, "/").concat(MOVE_DEFS["Aqua Tail"].ppmax)
  }, {
    name: "Acid Armor",
    pp: "".concat(MOVE_DEFS["Acid Armor"].ppcurr, "/").concat(MOVE_DEFS["Acid Armor"].ppmax)
  }, {
    name: "Refresh",
    pp: "".concat(MOVE_DEFS["Refresh"].ppcurr, "/").concat(MOVE_DEFS["Refresh"].ppmax)
  }];

  // Item action selection
  var _React$useState277 = React.useState(0),
    _React$useState278 = _slicedToArray(_React$useState277, 2),
    itemActionIndex = _React$useState278[0],
    setItemActionIndex = _React$useState278[1];
  var itemActionsNormal = ["Use", "Throw", "Discard"];
  var itemActionsEquip = ["Equip", "Throw", "Discard"];

  // Checkboxes for options (proto)
  var _React$useState279 = React.useState(false),
    _React$useState280 = _slicedToArray(_React$useState279, 2),
    checkBox1 = _React$useState280[0],
    setCheckBox1 = _React$useState280[1];
  var _React$useState281 = React.useState(false),
    _React$useState282 = _slicedToArray(_React$useState281, 2),
    checkBox2 = _React$useState282[0],
    setCheckBox2 = _React$useState282[1];
  var _React$useState283 = React.useState(false),
    _React$useState284 = _slicedToArray(_React$useState283, 2),
    checkBox3 = _React$useState284[0],
    setCheckBox3 = _React$useState284[1];

  // Scene params
  var _React$useState285 = React.useState(0),
    _React$useState286 = _slicedToArray(_React$useState285, 2),
    dialogIndex = _React$useState286[0],
    setDialogIndex = _React$useState286[1]; // Index for dialog progression
  var _React$useState287 = React.useState(false),
    _React$useState288 = _slicedToArray(_React$useState287, 2),
    showDialog = _React$useState288[0],
    setShowDialog = _React$useState288[1]; // State to show
  var _React$useState289 = React.useState(0),
    _React$useState290 = _slicedToArray(_React$useState289, 2),
    dialogKey = _React$useState290[0],
    setDialogKey = _React$useState290[1]; // Key for dialog content
  var _React$useState291 = React.useState('Normal'),
    _React$useState292 = _slicedToArray(_React$useState291, 2),
    dialogSpeed = _React$useState292[0],
    setDialogSpeed = _React$useState292[1]; // Speed of dialog text
  var _React$useState293 = React.useState(false),
    _React$useState294 = _slicedToArray(_React$useState293, 2),
    textSkipped = _React$useState294[0],
    setTextSkipped = _React$useState294[1]; // Track if text was skipped
  var _React$useState295 = React.useState(false),
    _React$useState296 = _slicedToArray(_React$useState295, 2),
    textAdvance = _React$useState296[0],
    setTextAdvance = _React$useState296[1]; // Track if text should advance
  var _React$useState297 = React.useState(false),
    _React$useState298 = _slicedToArray(_React$useState297, 2),
    textStopped = _React$useState298[0],
    setTextStopped = _React$useState298[1]; // Track if text advancement is stopped

  // Add a ref + helper to keep rAF callback in sync immediately
  var textAdvanceRef = React.useRef(false);
  var setTextAdvanceAndRef = function setTextAdvanceAndRef(val) {
    textAdvanceRef.current = val;
    setTextAdvance(val);
  };
  var showDialogRef = React.useRef(showDialog);
  var textSkippedRef = React.useRef(textSkipped);
  React.useEffect(function () {
    textSkippedRef.current = textSkipped;
  }, [textSkipped]);
  var textStoppedRef = React.useRef(textStopped);
  React.useEffect(function () {
    textStoppedRef.current = textStopped;
  }, [textStopped]);
  //debug
  var debugStops = {
    firstStop: 25,
    secondStop: 84,
    thirdStop: 124,
    fourtHPtop: 181
  };
  // Action log
  var _React$useState299 = React.useState([]),
    _React$useState300 = _slicedToArray(_React$useState299, 2),
    actionLog = _React$useState300[0],
    setActionLog = _React$useState300[1]; // [{msg, id}]

  // Aiming and diagonal mode (proto)
  var _React$useState301 = React.useState(false),
    _React$useState302 = _slicedToArray(_React$useState301, 2),
    isAiming = _React$useState302[0],
    setIsAiming = _React$useState302[1]; // Track whether player is aiming
  var _React$useState303 = React.useState(false),
    _React$useState304 = _slicedToArray(_React$useState303, 2),
    inDiagonalMode = _React$useState304[0],
    setInDiagonalMode = _React$useState304[1]; // Track whether player is using diagonal mode
  var _React$useState305 = React.useState(false),
    _React$useState306 = _slicedToArray(_React$useState305, 2),
    showIndicators = _React$useState306[0],
    setShowIndicators = _React$useState306[1]; // State to track indicator visibility

  //Animation booleans
  var _React$useState307 = React.useState(false),
    _React$useState308 = _slicedToArray(_React$useState307, 2),
    isWalking = _React$useState308[0],
    setIsWalking = _React$useState308[1];
  var isWalkingRef = React.useRef(isWalking);
  var _React$useState309 = React.useState(false),
    _React$useState310 = _slicedToArray(_React$useState309, 2),
    isSleeping = _React$useState310[0],
    setIsSleeping = _React$useState310[1];
  var _React$useState311 = React.useState(false),
    _React$useState312 = _slicedToArray(_React$useState311, 2),
    isLevelingUp = _React$useState312[0],
    setIsLevelingUp = _React$useState312[1]; // State to track if leveling up
  var _React$useState313 = React.useState(false),
    _React$useState314 = _slicedToArray(_React$useState313, 2),
    isBuffing = _React$useState314[0],
    setIsBuffing = _React$useState314[1]; // State to track if buffing
  var _React$useState315 = React.useState(false),
    _React$useState316 = _slicedToArray(_React$useState315, 2),
    isSpinning = _React$useState316[0],
    setIsSpinning = _React$useState316[1]; // State to track if spinning
  var _React$useState317 = React.useState(false),
    _React$useState318 = _slicedToArray(_React$useState317, 2),
    usingAquaTail = _React$useState318[0],
    setUsingAquaTail = _React$useState318[1]; // State to track if using Aqua Tail
  // Indexes
  var _React$useState319 = React.useState(0),
    _React$useState320 = _slicedToArray(_React$useState319, 2),
    idleSpriteIndex = _React$useState320[0],
    setIdleSpriteIndex = _React$useState320[1]; // Index for idle animation
  var _React$useState321 = React.useState(0),
    _React$useState322 = _slicedToArray(_React$useState321, 2),
    walkSpriteIndex = _React$useState322[0],
    setWalkSpriteIndex = _React$useState322[1]; // Index for walk animation
  var _React$useState323 = React.useState(0),
    _React$useState324 = _slicedToArray(_React$useState323, 2),
    spinSpriteIndex = _React$useState324[0],
    setSpinSpriteIndex = _React$useState324[1]; // Index for spin animation
  var _React$useState325 = React.useState(0),
    _React$useState326 = _slicedToArray(_React$useState325, 2),
    sleepSpriteIndex = _React$useState326[0],
    setSleepSpriteIndex = _React$useState326[1]; // Index for sleep animation
  var _React$useState327 = React.useState(0),
    _React$useState328 = _slicedToArray(_React$useState327, 2),
    levelVfxIndex = _React$useState328[0],
    setLevelVfxIndex = _React$useState328[1]; // Index for level up VFX animation
  var _React$useState329 = React.useState(0),
    _React$useState330 = _slicedToArray(_React$useState329, 2),
    buffVfxIndex = _React$useState330[0],
    setBuffVfxIndex = _React$useState330[1]; // Index for buff VFX animation
  var _React$useState331 = React.useState(0),
    _React$useState332 = _slicedToArray(_React$useState331, 2),
    aquaTailIndex = _React$useState332[0],
    setAquaTailIndex = _React$useState332[1]; // Index for Aqua Tail animation
  // Enemy vfx indexes
  var _React$useState333 = React.useState(0),
    _React$useState334 = _slicedToArray(_React$useState333, 2),
    rockThrowIndex = _React$useState334[0],
    setRockThrowIndex = _React$useState334[1]; // Index for rock throw animation
  // Other
  var walkCooldownRef = React.useRef(null);

  //Location and map tracking
  var _React$useState335 = React.useState({
      x: 15,
      y: 15
    }),
    _React$useState336 = _slicedToArray(_React$useState335, 2),
    playerPos = _React$useState336[0],
    setPlayerPos = _React$useState336[1];
  var playerPosRef = React.useRef(playerPos); // Special ref for enemy <-> player comparison
  var _React$useState337 = React.useState([]),
    _React$useState338 = _slicedToArray(_React$useState337, 2),
    roomsState = _React$useState338[0],
    setRoomsState = _React$useState338[1]; // rooms returned from generator
  var _React$useState339 = React.useState(function () {
      return new Set();
    }),
    _React$useState340 = _slicedToArray(_React$useState339, 2),
    exploredTiles = _React$useState340[0],
    setExploredTiles = _React$useState340[1]; // "x,y" keys
  var minimapCanvasRef = React.useRef(null);
  var _React$useState341 = React.useState(200),
    _React$useState342 = _slicedToArray(_React$useState341, 2),
    minimapSize = _React$useState342[0],
    setMinimapSize = _React$useState342[1];

  // helper for keys
  var tileKey = function tileKey(x, y) {
    return "".concat(x, ",").concat(y);
  };

  // Camera params
  var _React$useState343 = React.useState(''),
    _React$useState344 = _slicedToArray(_React$useState343, 2),
    cameraTransform = _React$useState344[0],
    setCameraTransform = _React$useState344[1];
  var cameraTargetRef = React.useRef({
    x: playerPos.x,
    y: playerPos.y
  });
  var cameraPosRef = React.useRef({
    x: playerPos.x,
    y: playerPos.y
  });
  var cameraRafRef = React.useRef(null);

  // Movement and key states
  var _React$useState345 = React.useState('down'),
    _React$useState346 = _slicedToArray(_React$useState345, 2),
    lastDirection = _React$useState346[0],
    setLastDirection = _React$useState346[1]; // Default direction
  var lastDirectionRef = React.useRef(lastDirection);
  var _React$useState347 = React.useState({
      w: false,
      a: false,
      s: false,
      d: false,
      q: false,
      e: false,
      z: false,
      c: false,
      wHeld: false,
      aHeld: false,
      sHeld: false,
      dHeld: false,
      shift: false,
      qHeld: false,
      eHeld: false,
      zHeld: false,
      cHeld: false
    }),
    _React$useState348 = _slicedToArray(_React$useState347, 2),
    keyState = _React$useState348[0],
    setKeyState = _React$useState348[1];
  var ks = React.useRef(keyState); // For easier access

  // Thrown item projectiles
  var _React$useState349 = React.useState([]),
    _React$useState350 = _slicedToArray(_React$useState349, 2),
    projectiles = _React$useState350[0],
    setProjectiles = _React$useState350[1];
  var projectilesRef = React.useRef([]);
  projectilesRef.current = projectiles;

  // Auto-cleanup for stuck projectiles to prevent memory leaks
  React.useEffect(function () {
    var cleanupInterval = setInterval(function () {
      setProjectiles(function (prev) {
        // Keep only projectiles created within the last 5 seconds to prevent memory buildup
        var now = Date.now();
        var MAX_AGE = 5000;
        return prev.filter(function (p) {
          var projAge = parseInt(p.id.split('_')[1]) || 0;
          return now - projAge < MAX_AGE;
        });
      });
    }, 1000);
    return function () {
      return clearInterval(cleanupInterval);
    };
  }, []);

  //effects to update refs
  React.useEffect(function () {
    ks.current = keyState;
  }, [keyState]);
  React.useEffect(function () {
    itemTilesRef.current = itemTiles;
  }, [itemTiles]);
  React.useEffect(function () {
    currencyTilesRef.current = currencyTiles;
  }, [currencyTiles]);
  React.useEffect(function () {
    inventoryRef.current = inventory;
  }, [inventory]);
  React.useEffect(function () {
    textAdvanceRef.current = textAdvance;
  }, [textAdvance]);
  React.useEffect(function () {
    showDialogRef.current = showDialog;
  }, [showDialog]);
  React.useEffect(function () {
    enemy1PosRef.current = enemy1Pos;
  }, [enemy1Pos]);
  React.useEffect(function () {
    enemy2PosRef.current = enemy2Pos;
  }, [enemy2Pos]);
  React.useEffect(function () {
    enemy3PosRef.current = enemy3Pos;
  }, [enemy3Pos]);
  React.useEffect(function () {
    enemy4PosRef.current = enemy4Pos;
  }, [enemy4Pos]);
  React.useEffect(function () {
    enemy5PosRef.current = enemy5Pos;
  }, [enemy5Pos]);
  React.useEffect(function () {
    enemy6PosRef.current = enemy6Pos;
  }, [enemy6Pos]);
  React.useEffect(function () {
    enemy7PosRef.current = enemy7Pos;
  }, [enemy7Pos]);
  React.useEffect(function () {
    enemy8PosRef.current = enemy8Pos;
  }, [enemy8Pos]);
  React.useEffect(function () {
    playerPosRef.current = playerPos;
  }, [playerPos]);
  React.useEffect(function () {
    willConsumeItemRef.current = willConsumeItem;
  }, [willConsumeItem]);
  React.useEffect(function () {
    targetedRef.current = targeted;
  }, [targeted]);
  React.useEffect(function () {
    selectedItemSpriteRef.current = selectedItemSprite;
  }, [selectedItemSprite]);
  React.useEffect(function () {
    willConsumeItemInventoryRef.current = willConsumeItemInventory;
  }, [willConsumeItemInventory]);
  React.useEffect(function () {
    enemy1MoveBehaviorRef.current = enemy1MoveBehavior;
  }, [enemy1MoveBehavior]);
  React.useEffect(function () {
    enemy1AttackBehaviorRef.current = enemy1AttackBehavior;
  }, [enemy1AttackBehavior]);
  React.useEffect(function () {
    enemy2MoveBehaviorRef.current = enemy2MoveBehavior;
  }, [enemy2MoveBehavior]);
  React.useEffect(function () {
    enemy2AttackBehaviorRef.current = enemy2AttackBehavior;
  }, [enemy2AttackBehavior]);
  React.useEffect(function () {
    enemy3MoveBehaviorRef.current = enemy3MoveBehavior;
  }, [enemy3MoveBehavior]);
  React.useEffect(function () {
    enemy3AttackBehaviorRef.current = enemy3AttackBehavior;
  }, [enemy3AttackBehavior]);
  React.useEffect(function () {
    enemy4MoveBehaviorRef.current = enemy4MoveBehavior;
  }, [enemy4MoveBehavior]);
  React.useEffect(function () {
    enemy4AttackBehaviorRef.current = enemy4AttackBehavior;
  }, [enemy4AttackBehavior]);
  React.useEffect(function () {
    enemy5MoveBehaviorRef.current = enemy5MoveBehavior;
  }, [enemy5MoveBehavior]);
  React.useEffect(function () {
    enemy5AttackBehaviorRef.current = enemy5AttackBehavior;
  }, [enemy5AttackBehavior]);
  React.useEffect(function () {
    enemy6MoveBehaviorRef.current = enemy6MoveBehavior;
  }, [enemy6MoveBehavior]);
  React.useEffect(function () {
    enemy6AttackBehaviorRef.current = enemy6AttackBehavior;
  }, [enemy6AttackBehavior]);
  React.useEffect(function () {
    enemy7MoveBehaviorRef.current = enemy7MoveBehavior;
  }, [enemy7MoveBehavior]);
  React.useEffect(function () {
    enemy7AttackBehaviorRef.current = enemy7AttackBehavior;
  }, [enemy7AttackBehavior]);
  React.useEffect(function () {
    enemy8MoveBehaviorRef.current = enemy8MoveBehavior;
  }, [enemy8MoveBehavior]);
  React.useEffect(function () {
    enemy8AttackBehaviorRef.current = enemy8AttackBehavior;
  }, [enemy8AttackBehavior]);
  React.useEffect(function () {
    enemy1AttackingRef.current = enemy1Attacking;
  }, [enemy1Attacking]);
  React.useEffect(function () {
    enemy2AttackingRef.current = enemy2Attacking;
  }, [enemy2Attacking]);
  React.useEffect(function () {
    enemy3AttackingRef.current = enemy3Attacking;
  }, [enemy3Attacking]);
  React.useEffect(function () {
    enemy4AttackingRef.current = enemy4Attacking;
  }, [enemy4Attacking]);
  React.useEffect(function () {
    enemy5AttackingRef.current = enemy5Attacking;
  }, [enemy5Attacking]);
  React.useEffect(function () {
    enemy6AttackingRef.current = enemy6Attacking;
  }, [enemy6Attacking]);
  React.useEffect(function () {
    enemy7AttackingRef.current = enemy7Attacking;
  }, [enemy7Attacking]);
  React.useEffect(function () {
    enemy8AttackingRef.current = enemy8Attacking;
  }, [enemy8Attacking]);
  React.useEffect(function () {
    rockThrowRef.current = rockThrow;
  }, [rockThrow]);
  React.useEffect(function () {
    projectilePosRef.current = projectilePos;
  }, [projectilePos]);
  React.useEffect(function () {
    setPlayerHP(basePlayerHP);
    setMaxPlayerHP(baseMaxPlayerHP);
    setPlayerAttack(basePlayerAttack);
    itemEquipped === 'Special Band' ? setPlayerSpecialAttack(Math.round(basePlayerSpecialAttack * 1.3)) : setPlayerSpecialAttack(basePlayerSpecialAttack);
    setPlayerDefense(basePlayerDefense);
    itemEquipped === 'Zinc Band' ? setPlayerSpecialDefense(Math.round(basePlayerSpecialDefense * 1.3)) : setPlayerSpecialDefense(basePlayerSpecialDefense);
    setPlayerSpeed(basePlayerSpeed);
  }, [basePlayerHP, baseMaxPlayerHP, basePlayerSpecialAttack, basePlayerAttack, basePlayerDefense, basePlayerSpecialDefense, basePlayerSpeed, itemEquipped]);
  React.useEffect(function () {
    if (itemEquipped === 'Warp Scarf') {
      var key = randInt(0, 10);
      if (key === 9) {
        var floorPositions = [];
        var _loop = function _loop(y) {
          var _loop2 = function _loop2(x) {
            if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y) && itemTiles.some(function (itemTiles) {
              return itemTiles.x === x && itemTiles.y === y;
            }) === false && currencyTiles.some(function (currencyTiles) {
              return currencyTiles.x === x && currencyTiles.y === y;
            }) === false && (enemy1 ? enemy1Pos.x !== x || enemy1Pos.y !== y : true) && (enemy2 ? enemy2Pos.x !== x || enemy2Pos.y !== y : true) && (enemy3 ? enemy3Pos.x !== x || enemy3Pos.y !== y : true) && (enemy4 ? enemy4Pos.x !== x || enemy4Pos.y !== y : true) && (enemy5 ? enemy5Pos.x !== x || enemy5Pos.y !== y : true) && (enemy6 ? enemy6Pos.x !== x || enemy6Pos.y !== y : true) && (enemy7 ? enemy7Pos.x !== x || enemy7Pos.y !== y : true) && (enemy8 ? enemy8Pos.x !== x || enemy8Pos.y !== y : true)) {
              floorPositions.push({
                x: x,
                y: y
              });
            }
          };
          for (var x = 0; x < dungeon[0].length; x++) {
            _loop2(x);
          }
        };
        for (var y = 0; y < dungeon.length; y++) {
          _loop(y);
        }
        if (floorPositions.length > 0) {
          var randIndex = randInt(0, floorPositions.length);
          var newPos = floorPositions[randIndex];
          setPlayerPos({
            x: newPos.x,
            y: newPos.y
          });
          cameraTargetRef.current = {
            x: newPos.x,
            y: newPos.y
          };
          startCameraLoop();
          addLogMessage('Vaporeon warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      }
    }
  }, [playerPos]);

  //React effect to constantly compute selectedItemSprite

  React.useEffect(function () {
    if (itemSelected !== null && inventory[itemOrder - 1] !== null && inventory[itemOrder - 1] !== undefined) {
      setSelectedItemSprite(inventory[itemOrder - 1].sprite);
    }
  }, [itemOrder, inventory, showToolbox]);

  //Function declarations start here
  function getWallTileType(x, y, dungeon) {
    // Get neighbors (W = wall)
    var up = y > 0 && dungeon[y - 1][x] === 'W';
    var down = y < dungeon.length - 1 && dungeon[y + 1][x] === 'W';
    var left = x > 0 && dungeon[y][x - 1] === 'W';
    var right = x < dungeon[0].length - 1 && dungeon[y][x + 1] === 'W';

    // Corners (optional, for fancy tilesets)
    var upLeft = y > 0 && x > 0 && dungeon[y - 1][x - 1] === 'W';
    var upRight = y > 0 && x < dungeon[0].length - 1 && dungeon[y - 1][x + 1] === 'W';
    var downLeft = y < dungeon.length - 1 && x > 0 && dungeon[y + 1][x - 1] === 'W';
    var downRight = y < dungeon.length - 1 && x < dungeon[0].length - 1 && dungeon[y + 1][x + 1] === 'W';
    if (!up && !left && right && down) return 'wall_corner_topleft';
    if (!up && !right && left && down) return 'wall_corner_topright';
    if (!down && !left && right && up) return 'wall_corner_bottomleft';
    if (!down && !right && left && up) return 'wall_corner_bottomright';
    if (up && down && !left && !right) return 'wall_vertical';
    if (!up && !down && left && right) return 'wall_horizontal';
    if (up && !down && left && right) return 'wall_horizontal_topcap';
    if (!up && down && left && right) return 'wall_horizontal_bottomcap';
    if (up && down && !left && right) return 'wall_left_vertical';
    if (up && down && !right && left) return 'wall_right_vertical';
    if (!up && down && !right && !left) return 'wall_isolated_down';
    if (up && !down && !right && !left) return 'wall_isolated_up';
    if (!up && !down && right && !left) return 'wall_isolated_right';
    if (!up && !down && !right && left) return 'wall_isolated_left';
    if (up && down && left && right && !upLeft) return 'wall_inner_corner_topleft';
    if (up && down && left && right && !upRight) return 'wall_inner_corner_topright';
    if (up && down && left && right && !downLeft) return 'wall_inner_corner_bottomleft';
    if (up && down && left && right && !downRight) return 'wall_inner_corner_bottomright';

    // ...continue for other combinations...
    else return 'wall_full'; // fallback
  }
  var wallSpriteMap = {
    wall_corner_topleft: cornerSpriteTopLeft,
    wall_corner_topright: cornerSpriteTopRight,
    wall_corner_bottomleft: cornerSpriteBottomLeft,
    wall_corner_bottomright: cornerSpriteBottomRight,
    wall_vertical: wallSpriteLeft,
    wall_left_vertical: wallSpriteLeft,
    wall_right_vertical: wallSpriteRight,
    wall_horizontal: wallSpriteUp,
    wall_horizontal_topcap: wallSpriteDown,
    wall_horizontal_bottomcap: wallSpriteUp,
    wall_full: enclosedWallSprite4,
    //placeholder
    wall_isolated_down: wallSpriteLeft,
    wall_isolated_up: wallSpriteLeft,
    wall_isolated_right: wallSpriteUp,
    wall_isolated_left: wallSpriteUp,
    wall_inner_corner_topleft: innerCornerTopLeft,
    wall_inner_corner_topright: innerCornerTopRight,
    wall_inner_corner_bottomleft: innerCornerBottomLeft,
    wall_inner_corner_bottomright: innerCornerBottomRight
    // ...etc...
  };

  // Throttling function
  function throttle(func, delay) {
    var lastCall = 0;
    return function () {
      var now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func.apply(void 0, arguments);
    };
  }
  function updateKeyState(key, value) {
    setKeyState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, value));
    });
  }

  //const throttledUpdateKeyState = throttle(updateKeyState, 200); // 200ms throttle

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function triggerWalkCooldown() {
    // Clear any existing cooldown
    if (walkCooldownRef.current) clearTimeout(walkCooldownRef.current);
    walkCooldownRef.current = setTimeout(function () {
      setIsWalking(false);
      walkCooldownRef.current = null;
    }, 1500); // 1500ms for 5 frames at 300ms/frame
  }
  var logCounter = 0;
  function addLogMessage(msg) {
    var id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    setActionLog(function (logs) {
      return [].concat(_toConsumableArray(logs), [{
        msg: msg,
        id: id
      }]);
    });
    setTimeout(function () {
      setActionLog(function (logs) {
        return logs.filter(function (entry) {
          return entry.id !== id;
        });
      });
    }, 10000);
  }
  function makeRoom(x, y, w, h) {
    return {
      x: x,
      y: y,
      w: w,
      h: h,
      center: {
        x: Math.floor(x + w / 2),
        y: Math.floor(y + h / 2)
      }
    };
  }
  function roomsOverlap(a, b) {
    var overlapBuffer = -2;
    return Math.abs(a.x + overlapBuffer) < Math.abs(b.x + b.w) && Math.abs(a.x + a.w) > Math.abs(b.x + overlapBuffer) && Math.abs(a.y + overlapBuffer) < Math.abs(b.y + b.h) && Math.abs(a.y + a.h) > Math.abs(b.y + overlapBuffer);
  }
  function carveRoom(dungeon, room) {
    for (var y = room.y; y < room.y + room.h; y++) {
      for (var x = room.x; x < room.x + room.w; x++) {
        dungeon[y][x] = 'F'; // Mark as floor (will be replaced with random floor tile later)
      }
    }
  }
  function carveCorridor(dungeon, from, to) {
    var x = from.x,
      y = from.y;
    while (x !== to.x) {
      dungeon[y][x] = 'F';
      x += x < to.x ? 1 : -1;
    }
    while (y !== to.y) {
      dungeon[y][x] = 'F';
      y += y < to.y ? 1 : -1;
    }
  }
  function generateCurrencyTiles(dungeon, minAmount, maxAmount) {
    var currencyCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
    var cLocations = [];
    var height = dungeon.length;
    var width = dungeon[0].length;

    // Collect all floor tile positions
    var floorPositions = [];
    var _loop3 = function _loop3(y) {
      var _loop4 = function _loop4(x) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y && !enemyHereTilesRef.current.find(function (tile) {
          return tile.x === x && tile.y === y && !itemTilesRef.current.find(function (tile) {
            return tile.x === x && tile.y === y;
          });
        })) {
          floorPositions.push({
            x: x,
            y: y
          });
        }
      };
      for (var x = 0; x < width; x++) {
        _loop4(x);
      }
    };
    for (var y = 0; y < height; y++) {
      _loop3(y);
    }

    // Shuffle and pick currencyCount locations
    for (var i = 0; i < currencyCount && floorPositions.length > 0; i++) {
      floorPositions.splice(floorPositions.findIndex(function (pos) {
        return pos.x === playerPos.x && pos.y === playerPos.y;
      }), 1); // Ensure player position is not included
      floorPositions = floorPositions.filter(function (pos) {
        return !enemyHereTilesRef.current.find(function (tile) {
          return tile.x === pos.x && tile.y === pos.y;
        });
      }); // Ensure enemy positions are not included
      floorPositions = floorPositions.filter(function (pos) {
        return !itemTilesRef.current.find(function (tile) {
          return tile.x === pos.x && tile.y === pos.y;
        });
      }); // Ensure item positions are not included
      var idx = randInt(0, floorPositions.length);
      var loc = floorPositions.splice(idx, 1)[0];
      cLocations.push(_objectSpread(_objectSpread({}, loc), {}, {
        amount: randInt(minAmount, maxAmount + 1)
      }));
    }
    return cLocations;
  }
  function generateSingleItem(position, item) {
    var iLocations = [];
    var itemNames = Object.keys(ITEM_DEFS);
    var itemSprites = Object.values(ITEM_DEFS).map(function (def) {
      return def.sprite;
    });
    var itemName = item.name;
    var itemSprite = itemSprites[1];
    iLocations.push(_objectSpread(_objectSpread({}, position), {}, {
      itemName: itemName,
      sprite: ITEM_DEFS[itemName].sprite
    }));
    return iLocations;
  }
  function beginItemTilesIndex(itemAdded) {
    setItemTilesIndex(itemAdded);
  }
  function playSound(soundFile) {
    if (soundFile instanceof HTMLAudioElement) {
      soundFile.currentTime = 0; // Restart from beginning
      soundFile.play()["catch"](function (err) {
        console.error("Audio play failed:", err);
      });
    } else {
      console.error("Invalid sound file passed to playSound()");
    }
  }
  function updateItemTilesIndex(newIndex) {
    setItemTilesIndex(function (prev) {
      return [].concat(_toConsumableArray(prev), [newIndex]);
    });
    return newIndex;
  }
  React.useEffect(function () {
    setItemTilesIndexRef(itemTilesIndex);
  }, [itemTilesIndex]);
  function generateItemTiles(dungeon) {
    var minCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    var maxCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var itemCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : randInt(minCount, maxCount);
    var iLocations = [];
    var height = dungeon.length;
    var width = dungeon[0].length;
    var floorPositions = [];
    var _loop5 = function _loop5(y) {
      var _loop6 = function _loop6(x) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && !enemyHereTilesRef.current.find(function (tile) {
          return tile.x === x && tile.y === y;
        }) && !currencyTilesRef.current.find(function (tile) {
          return tile.x === x && tile.y === y;
        }) && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y) {
          floorPositions.push({
            x: x,
            y: y
          });
        }
      };
      for (var x = 0; x < width; x++) {
        _loop6(x);
      }
    };
    for (var y = 0; y < height; y++) {
      _loop5(y);
    }
    var itemNamesTier1 = Object.keys(ITEM_DEFS).filter(function (name) {
      return ITEM_DEFS[name].tier === 1;
    });
    var itemNamesTier2 = Object.keys(ITEM_DEFS).filter(function (name) {
      return ITEM_DEFS[name].tier === 2;
    });
    var itemNamesTier3 = Object.keys(ITEM_DEFS).filter(function (name) {
      return ITEM_DEFS[name].tier === 3;
    });
    var itemNamesTier4 = Object.keys(ITEM_DEFS).filter(function (name) {
      return ITEM_DEFS[name].tier === 4;
    });
    for (var i = 0; i < itemCount && floorPositions.length > 0; i++) {
      floorPositions.splice(floorPositions.findIndex(function (pos) {
        return pos.x === playerPos.x && pos.y === playerPos.y;
      }), 1); // Ensure player position is not included
      floorPositions = floorPositions.filter(function (pos) {
        return !enemyHereTilesRef.current.find(function (tile) {
          return tile.x === pos.x && tile.y === pos.y;
        });
      }); // Ensure enemy positions are not included
      floorPositions = floorPositions.filter(function (pos) {
        return !currencyTilesRef.current.find(function (tile) {
          return tile.x === pos.x && tile.y === pos.y;
        });
      }); // Ensure currency positions are not included
      var idx = randInt(0, floorPositions.length);
      var loc = floorPositions.splice(idx, 1)[0];
      var tierchosen = randInt(1, 100);
      var itemName = void 0;
      if (tierchosen <= 50 && itemNamesTier1.length > 0) {
        itemName = itemNamesTier1[randInt(0, itemNamesTier1.length)];
      } else if (tierchosen <= 75 && itemNamesTier2.length > 0) {
        itemName = itemNamesTier2[randInt(0, itemNamesTier2.length)];
      } else if (tierchosen <= 90 && itemNamesTier3.length > 0) {
        itemName = itemNamesTier3[randInt(0, itemNamesTier3.length)];
      } else if (tierchosen <= 100 && itemNamesTier4.length > 0) {
        itemName = itemNamesTier4[randInt(0, itemNamesTier4.length)];
      }
      iLocations.push(_objectSpread(_objectSpread({}, loc), {}, {
        itemName: itemName,
        sprite: ITEM_DEFS[itemName].sprite
      }));
    }
    return iLocations;
  }
  function describeArc(cx, cy, r, startAngle, endAngle) {
    var start = polarToCartesian(cx, cy, r, endAngle);
    var end = polarToCartesian(cx, cy, r, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", cx, cy, "L", start.x, start.y, "A", r, r, 0, largeArcFlag, 0, end.x, end.y, "Z"].join(" ");
  }
  function polarToCartesian(cx, cy, r, angle) {
    var rad = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }
  function enemyUseMove(move, key) {
    key === 1 ? setEnemy1AttackBehavior(true) : key === 2 ? setEnemy2AttackBehavior(true) : key === 3 ? setEnemy3AttackBehavior(true) : key === 4 ? setEnemy4AttackBehavior(true) : key === 5 ? setEnemy5AttackBehavior(true) : key === 6 ? setEnemy6AttackBehavior(true) : key === 7 ? setEnemy7AttackBehavior(true) : key === 8 ? setEnemy8AttackBehavior(true) : null;
    setTimeout(function () {
      if (move.name === 'Rock Throw') {
        setRockThrow(true);
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, {
            x: 0,
            y: 0
          }));
        }); // Reset projectile position at start
        // Set transform based on current player position at the moment of casting
        var transformValue = playerPosRef.current.x < width / 3 ? 'translatex(80%) translateY(-615%)' : 'translatex(65%) translateY(-615%)';
        setRockThrowTransform(transformValue);
        key === 1 ? addLogMessage(ENEMY_DEFS[enemyType1].name + ' used Rock Throw!') : key === 2 ? addLogMessage(ENEMY_DEFS[enemyType1].name + ' used Rock Throw!') : key === 3 ? addLogMessage(ENEMY_DEFS[enemyType3].name + ' used Rock Throw!') : key === 4 ? addLogMessage(ENEMY_DEFS[enemyType4].name + ' used Rock Throw!') : key === 5 ? addLogMessage(ENEMY_DEFS[enemyType5].name + ' used Rock Throw!') : key === 6 ? addLogMessage(ENEMY_DEFS[enemyType6].name + ' used Rock Throw!') : key === 7 ? addLogMessage(ENEMY_DEFS[enemyType7].name + ' used Rock Throw!') : key === 8 ? addLogMessage(ENEMY_DEFS[enemyType8].name + ' used Rock Throw!') : null;
        console.log("Enemy ".concat(key, " used Rock Throw!"));
      }
      if (key === 1) {
        if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
          setEnemy1LastDirection('right');
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
          setEnemy1LastDirection('left');
        } else if (enemy1PosRef.current.y < playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x) {
          setEnemy1LastDirection('down');
        } else if (enemy1PosRef.current.y > playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x) {
          setEnemy1LastDirection('up');
        } else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y) {
          setEnemy1LastDirection('downRight');
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y) {
          setEnemy1LastDirection('downLeft');
        } else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y) {
          setEnemy1LastDirection('upRight');
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y) {
          setEnemy1LastDirection('upLeft');
        }
      } else if (key === 2) {
        if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
          setEnemy2LastDirection('right');
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
          setEnemy2LastDirection('left');
        } else if (enemy2PosRef.current.y < playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x) {
          setEnemy2LastDirection('down');
        } else if (enemy2PosRef.current.y > playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x) {
          setEnemy2LastDirection('up');
        } else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y) {
          setEnemy2LastDirection('downRight');
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y) {
          setEnemy2LastDirection('downLeft');
        } else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y) {
          setEnemy2LastDirection('upRight');
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y) {
          setEnemy2LastDirection('upLeft');
        }
      } else if (key === 3) {
        if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
          setEnemy3LastDirection('right');
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
          setEnemy3LastDirection('left');
        } else if (enemy3PosRef.current.y < playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x) {
          setEnemy3LastDirection('down');
        } else if (enemy3PosRef.current.y > playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x) {
          setEnemy3LastDirection('up');
        } else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y) {
          setEnemy3LastDirection('downRight');
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y) {
          setEnemy3LastDirection('downLeft');
        } else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y) {
          setEnemy3LastDirection('upRight');
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y) {
          setEnemy3LastDirection('upLeft');
        }
      } else if (key === 4) {
        if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
          setEnemy4LastDirection('right');
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
          setEnemy4LastDirection('left');
        } else if (enemy4PosRef.current.y < playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x) {
          setEnemy4LastDirection('down');
        } else if (enemy4PosRef.current.y > playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x) {
          setEnemy4LastDirection('up');
        } else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y) {
          setEnemy4LastDirection('downRight');
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y) {
          setEnemy4LastDirection('downLeft');
        } else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y) {
          setEnemy4LastDirection('upRight');
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y) {
          setEnemy4LastDirection('upLeft');
        }
      } else if (key === 5) {
        if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
          setEnemy5LastDirection('right');
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
          setEnemy5LastDirection('left');
        } else if (enemy5PosRef.current.y < playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x) {
          setEnemy5LastDirection('down');
        } else if (enemy5PosRef.current.y > playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x) {
          setEnemy5LastDirection('up');
        } else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y) {
          setEnemy5LastDirection('downRight');
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y) {
          setEnemy5LastDirection('downLeft');
        } else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y) {
          setEnemy5LastDirection('upRight');
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y) {
          setEnemy5LastDirection('upLeft');
        }
      } else if (key === 6) {
        if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
          setEnemy6LastDirection('right');
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
          setEnemy6LastDirection('left');
        } else if (enemy6PosRef.current.y < playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x) {
          setEnemy6LastDirection('down');
        } else if (enemy6PosRef.current.y > playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x) {
          setEnemy6LastDirection('up');
        } else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y) {
          setEnemy6LastDirection('downRight');
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y) {
          setEnemy6LastDirection('downLeft');
        } else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y) {
          setEnemy6LastDirection('upRight');
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y) {
          setEnemy6LastDirection('upLeft');
        }
      } else if (key === 7) {
        if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
          setEnemy7LastDirection('right');
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
          setEnemy7LastDirection('left');
        } else if (enemy7PosRef.current.y < playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x) {
          setEnemy7LastDirection('down');
        } else if (enemy7PosRef.current.y > playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x) {
          setEnemy7LastDirection('up');
        } else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y) {
          setEnemy7LastDirection('downRight');
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y) {
          setEnemy7LastDirection('downLeft');
        } else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y) {
          setEnemy7LastDirection('upRight');
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y) {
          setEnemy7LastDirection('upLeft');
        }
      } else if (key === 8) {
        if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
          setEnemy8LastDirection('right');
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
          setEnemy8LastDirection('left');
        } else if (enemy8PosRef.current.y < playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x) {
          setEnemy8LastDirection('down');
        } else if (enemy8PosRef.current.y > playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x) {
          setEnemy8LastDirection('up');
        } else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y) {
          setEnemy8LastDirection('downRight');
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y) {
          setEnemy8LastDirection('downLeft');
        } else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y) {
          setEnemy8LastDirection('upRight');
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y) {
          setEnemy8LastDirection('upLeft');
        }
      }
    }, turnIntervalMs);
    setTimeout(function () {
      key === 1 ? setEnemy1AttackBehavior(false) : key === 2 ? setEnemy2AttackBehavior(false) : key === 3 ? setEnemy3AttackBehavior(false) : key === 4 ? setEnemy4AttackBehavior(false) : key === 5 ? setEnemy5AttackBehavior(false) : key === 6 ? setEnemy6AttackBehavior(false) : key === 7 ? setEnemy7AttackBehavior(false) : key === 8 ? setEnemy8AttackBehavior(false) : null;
      key === 1 ? setEnemy1Attacking(false) : key === 2 ? setEnemy2Attacking(false) : key === 3 ? setEnemy3Attacking(false) : key === 4 ? setEnemy4Attacking(false) : key === 5 ? setEnemy5Attacking(false) : key === 6 ? setEnemy6Attacking(false) : key === 7 ? setEnemy7Attacking(false) : key === 8 ? setEnemy8Attacking(false) : null;
      if (move.name === 'Rock Throw') {
        setRockThrow(false);
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, {
            x: 0,
            y: 0
          }));
        }); // Reset projectile position at end
      }
    }, 4600 + turnIntervalMs); // Duration of attack animation (Slighty longer than animation frame duration to ensure it completes)
  }
  React.useEffect(function () {
    if (rockThrowRef.current === false) {
      return;
    }
    var animationFrameId1 = null;
    var animationFrameId2 = null;
    var animationFrameId3 = null;
    var animationFrameId4 = null;
    var animationFrameId5 = null;
    var animationFrameId6 = null;
    var animationFrameId7 = null;
    var animationFrameId8 = null;
    function updateProjectilePosition1() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy1PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy1PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[1].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[1].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[1].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[1].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            1: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            1: {
              x: prev[1].x + dx,
              y: prev[1].y + dy
            }
          });
        });
      }
      animationFrameId1 = requestAnimationFrame(updateProjectilePosition1);
    }
    function updateProjectilePosition2() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy2PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy2PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[2].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[2].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[2].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[2].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            2: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            2: {
              x: prev[2].x + dx,
              y: prev[2].y + dy
            }
          });
        });
      }
      animationFrameId2 = requestAnimationFrame(updateProjectilePosition2);
    }
    function updateProjectilePosition3() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy3PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy3PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[3].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[3].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[3].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[3].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            3: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            3: {
              x: prev[3].x + dx,
              y: prev[3].y + dy
            }
          });
        });
      }
      animationFrameId3 = requestAnimationFrame(updateProjectilePosition3);
    }
    function updateProjectilePosition4() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy4PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy4PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[4].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[4].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[4].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[4].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            4: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            4: {
              x: prev[4].x + dx,
              y: prev[4].y + dy
            }
          });
        });
      }
      animationFrameId4 = requestAnimationFrame(updateProjectilePosition4);
    }
    function updateProjectilePosition5() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy5PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy5PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[5].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[5].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[5].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[5].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            5: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            5: {
              x: prev[5].x + dx,
              y: prev[5].y + dy
            }
          });
        });
      }
      animationFrameId5 = requestAnimationFrame(updateProjectilePosition5);
    }
    function updateProjectilePosition6() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy6PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy6PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[6].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[6].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[6].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[6].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            6: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            6: {
              x: prev[6].x + dx,
              y: prev[6].y + dy
            }
          });
        });
      }
      animationFrameId6 = requestAnimationFrame(updateProjectilePosition6);
    }
    function updateProjectilePosition7() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy7PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy7PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[7].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[7].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[7].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[7].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            7: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            7: {
              x: prev[7].x + dx,
              y: prev[7].y + dy
            }
          });
        });
      }
      animationFrameId7 = requestAnimationFrame(updateProjectilePosition7);
    }
    function updateProjectilePosition8() {
      if (rockThrowRef.current === false) return;

      // Update position towards target
      var targetX = enemy8PosRef.current.x - playerPosRef.current.x;
      var targetY = enemy8PosRef.current.y - playerPosRef.current.y;

      // Calculate position-based correction to counteract camera shift artifacts
      var distancex = playerPosRef.current.x / width - 0.5;
      var distancey = playerPosRef.current.y / height - 0.5;

      // Apply directional offset correction
      // When player is off-center, projectiles shift in the opposite direction of player position
      // So we counteract by adding a correction proportional to how far off-center the player is
      var correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
      var correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
      var adjustedTargetX = targetX + correctionX;
      var adjustedTargetY = targetY + correctionY;
      if (Math.abs(projectilePosRef.current[8].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[8].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        return;
      }
      var dt = 0.04; // Approx. 60 FPS
      var dx = adjustedTargetX * dt / 3; // So it takes 3 seconds to reach target
      var dy = adjustedTargetY * dt / 3;
      if (Math.abs(projectilePosRef.current[8].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[8].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
        //Reached target
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            8: {
              x: adjustedTargetX,
              y: adjustedTargetY
            }
          });
        });
        return;
      } else {
        setProjectilePos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            8: {
              x: prev[8].x + dx,
              y: prev[8].y + dy
            }
          });
        });
      }
      animationFrameId8 = requestAnimationFrame(updateProjectilePosition8);
    }
    if (enemy1AttackBehaviorRef.current === true) {
      animationFrameId1 = requestAnimationFrame(updateProjectilePosition1);
    }
    if (enemy2AttackBehaviorRef.current === true) {
      animationFrameId2 = requestAnimationFrame(updateProjectilePosition2);
    }
    if (enemy3AttackBehaviorRef.current === true) {
      animationFrameId3 = requestAnimationFrame(updateProjectilePosition3);
    }
    if (enemy4AttackBehaviorRef.current === true) {
      animationFrameId4 = requestAnimationFrame(updateProjectilePosition4);
    }
    if (enemy5AttackBehaviorRef.current === true) {
      animationFrameId5 = requestAnimationFrame(updateProjectilePosition5);
    }
    if (enemy6AttackBehaviorRef.current === true) {
      animationFrameId6 = requestAnimationFrame(updateProjectilePosition6);
    }
    if (enemy7AttackBehaviorRef.current === true) {
      animationFrameId7 = requestAnimationFrame(updateProjectilePosition7);
    }
    if (enemy8AttackBehaviorRef.current === true) {
      animationFrameId8 = requestAnimationFrame(updateProjectilePosition8);
    }
    return function () {
      if (animationFrameId1 !== null) {
        cancelAnimationFrame(animationFrameId1);
      }
      if (animationFrameId2 !== null) {
        cancelAnimationFrame(animationFrameId2);
      }
      if (animationFrameId3 !== null) {
        cancelAnimationFrame(animationFrameId3);
      }
      if (animationFrameId4 !== null) {
        cancelAnimationFrame(animationFrameId4);
      }
      if (animationFrameId5 !== null) {
        cancelAnimationFrame(animationFrameId5);
      }
      if (animationFrameId6 !== null) {
        cancelAnimationFrame(animationFrameId6);
      }
      if (animationFrameId7 !== null) {
        cancelAnimationFrame(animationFrameId7);
      }
      if (animationFrameId8 !== null) {
        cancelAnimationFrame(animationFrameId8);
      }
    };
  }, [rockThrow]);
  function useMove(moveIndex) {
    var move = moves[moveIndex];
    var specialDefenceGain = 10; // TODO: Add an initial state variable for this
    var buffState = playerSpecialDefense / specialDefenceGain;
    if (!move) return;
    MOVE_DEFS[move.name].ppcurr = Math.max(0, MOVE_DEFS[move.name].ppcurr - 1);
    if (move.name === 'Acid Armor' && buffState === 1) {
      setPlayerSpecialDefense(function (prev) {
        return prev + specialDefenceGain;
      });
      setIsBuffing(true);
      setTimeout(function () {
        confirmEnemyBehavior(1, 0);
        advanceTicks();
        depleteHungerAfterTicks(hungerTicks);
        setIsBuffing(false);
      }, 1650);
      addLogMessage('Vaporeon used Acid Armor! Special Defense increased!');
    } else if (move.name === 'Acid Armor' && buffState < 4) {
      setPlayerSpecialDefense(function (prev) {
        return prev + specialDefenceGain;
      });
      setIsBuffing(true);
      setTimeout(function () {
        confirmEnemyBehavior(1, 0);
        advanceTicks();
        depleteHungerAfterTicks(hungerTicks);
        setIsBuffing(false);
      }, 1650);
      addLogMessage('Vaporeon used Acid Armor! Special Defense increased!');
    } else if (move.name === 'Acid Armor' && buffState >= 4) {
      setIsBuffing(true);
      setTimeout(function () {
        confirmEnemyBehavior(1, 0);
        advanceTicks();
        depleteHungerAfterTicks(hungerTicks);
        setIsBuffing(false);
      }, 1650);
      addLogMessage('Vaporeon used Acid Armor, but her Special Defense can\'t go any higher!');
      return;
    }
    if (move.name === 'Aqua Tail') {
      setIsWalking(false);
      var moveRange = 1;
      var willDie = 'null';
      setTimeout(function () {
        return setUsingAquaTail(true);
      }, 0);
      setTimeout(function () {
        return setUsingAquaTail(false);
      }, 1500); // Duration of Aqua Tail animation
      setTimeout(function () {
        if (enemy1 && Math.abs(playerPosRef.current.x - enemy1PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy1PosRef.current.y) <= moveRange) {
          setEnemy1Pos({
            x: 2,
            y: 2
          });
          var _willDie = 'enemy1';
        }
        if (enemy2 && Math.abs(playerPosRef.current.x - enemy2PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy2PosRef.current.y) <= moveRange) {
          setEnemy2Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy3 && Math.abs(playerPosRef.current.x - enemy3PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy3PosRef.current.y) <= moveRange) {
          setEnemy3Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy4 && Math.abs(playerPosRef.current.x - enemy4PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy4PosRef.current.y) <= moveRange) {
          setEnemy4Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy5 && Math.abs(playerPosRef.current.x - enemy5PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy5PosRef.current.y) <= moveRange) {
          setEnemy5Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy6 && Math.abs(playerPosRef.current.x - enemy6PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy6PosRef.current.y) <= moveRange) {
          setEnemy6Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy7 && Math.abs(playerPosRef.current.x - enemy7PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy7PosRef.current.y) <= moveRange) {
          setEnemy7Pos({
            x: 2,
            y: 2
          });
        }
        if (enemy8 && Math.abs(playerPosRef.current.x - enemy8PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy8PosRef.current.y) <= moveRange) {
          setEnemy8Pos({
            x: 2,
            y: 2
          });
        }
      }, 1501);
      setTimeout(function () {
        if (willDie !== 'enemy1') {
          confirmEnemyBehavior(1, 0);
        } else {
          confirmEnemyBehavior(2, 0);
        }
        advanceTicks();
        depleteHungerAfterTicks(hungerTicks);
      }, 2000); // After Aqua Tail animation completes
      addLogMessage('Vaporeon used Aqua Tail!');
    }
  }
  function addItemToInventory(itemName) {
    var itemDef = ITEM_DEFS[itemName];

    // Safely update item order inside inventory update logic
    setInventory(function (prev) {
      var newInventory = _toConsumableArray(prev);
      var itemSelected = newInventory.find(function (item) {
        return item.name === itemName;
      });
      // Removed invalid itemOrder property access

      // Find stacks of this item that are not full
      var stackIndexes = [];
      newInventory.forEach(function (stack, idx) {
        if (stack.name === itemName && stack.count < itemDef.stackSize) stackIndexes.push(idx);
      });
      var updatedInventory;
      // Try to add to an existing stack
      if (stackIndexes.length) {
        // There is at least one stack with space
        var updated = _toConsumableArray(newInventory);
        updated[stackIndexes[0]].count += 1;
        updatedInventory = updated;
        // Do NOT increment item order when adding to existing stack
      } else if (newInventory.length < MAX_INVENTORY_SLOTS) {
        if (newInventory.length === MAX_INVENTORY_SLOTS - 1) {
          setInventoryFull(true);
        }
        updatedInventory = [].concat(_toConsumableArray(newInventory), [_objectSpread(_objectSpread({}, itemDef), {}, {
          count: 1
        })]);
        // Increment item order ONLY when a new stack is created
        setNatItemOrder(updatedInventory.length);
        setItemOrder(updatedInventory.length);
      } else if (newInventory.length === MAX_INVENTORY_SLOTS && inventoryFull) {
        updatedInventory = prev;
      } else {
        updatedInventory = newInventory;
      }
      return updatedInventory;
    });
  }

  //AI functions
  function patrol(enemyx, enemyy, key) {
    if (key === 1) {
      if (enemy1Sleeping === true) {
        return;
      }
    }
    if (key === 2) {
      if (enemy2Sleeping === true) {
        return;
      }
    }
    if (key === 3) {
      if (enemy3Sleeping === true) {
        return;
      }
    }
    if (key === 4) {
      if (enemy4Sleeping === true) {
        return;
      }
    }
    if (key === 5) {
      if (enemy5Sleeping === true) {
        return;
      }
    }
    if (key === 6) {
      if (enemy6Sleeping === true) {
        return;
      }
    }
    if (key === 7) {
      if (enemy7Sleeping === true) {
        return;
      }
    }
    if (key === 8) {
      if (enemy8Sleeping === true) {
        return;
      }
    }
    var tileUp = dungeon[enemyy - 1][enemyx];
    var tileDown = dungeon[enemyy + 1][enemyx];
    var tileRight = dungeon[enemyy][enemyx + 1];
    var tileLeft = dungeon[enemyy][enemyx - 1];
    var tileUpRight = dungeon[enemyy - 1][enemyx + 1];
    var tileUpLeft = dungeon[enemyy - 1][enemyx - 1];
    var tileDownRight = dungeon[enemyy + 1][enemyx + 1];
    var tileDownLeft = dungeon[enemyy + 1][enemyx - 1];
    var newPosx = enemyx;
    var newPosy = enemyy;
    var validOptions = [];
    var directions = {
      up: null,
      down: null,
      left: null,
      right: null,
      upLeft: null,
      upRight: null,
      downLeft: null,
      downRight: null
    };
    if (tileUp !== 'W') {
      var up = true;
      validOptions.push('up');
    }
    if (tileDown !== 'W') {
      var down = true;
      validOptions.push('down');
      var _chosen = randInt(0, validOptions.length);
    }
    if (tileLeft !== 'W') {
      var left = true;
      validOptions.push('left');
      var _chosen2 = randInt(0, validOptions.length);
    }
    if (tileRight !== 'W') {
      var right = true;
      validOptions.push('right');
      var _chosen3 = randInt(0, validOptions.length);
    }
    if (tileDownLeft !== 'W') {
      var downLeft = true;
      validOptions.push('downLeft');
      var _chosen4 = randInt(0, validOptions.length);
    }
    if (tileDownRight !== 'W') {
      var downRight = true;
      validOptions.push('downRight');
      var _chosen5 = randInt(0, validOptions.length);
    }
    if (tileUpLeft !== 'W') {
      var upLeft = true;
      validOptions.push('upLeft');
      var _chosen6 = randInt(0, validOptions.length);
    }
    if (tileUpRight !== 'W') {
      var upRight = true;
      validOptions.push('upRight');
      var _chosen7 = randInt(0, validOptions.length);
    }
    setChosen(randInt(1, validOptions.length));
    if (validOptions[chosen] === 'up') {
      var _newPosx = enemyx;
      var _newPosy = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy1LastDirection('up');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy2LastDirection('up');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy3LastDirection('up');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy4LastDirection('up');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy5LastDirection('up');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy6LastDirection('up');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy7LastDirection('up');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx,
          y: _newPosy
        });
        setEnemy8LastDirection('up');
      }
    }
    if (validOptions[chosen] === 'down') {
      var _newPosx2 = enemyx;
      var _newPosy2 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy1LastDirection('down');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy2LastDirection('down');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy3LastDirection('down');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy4LastDirection('down');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy5LastDirection('down');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy6LastDirection('down');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy7LastDirection('down');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx2,
          y: _newPosy2
        });
        setEnemy8LastDirection('down');
      }
    }
    if (validOptions[chosen] === 'left') {
      var _newPosx3 = enemyx - 1;
      var _newPosy3 = enemyy;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy1LastDirection('left');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy2LastDirection('left');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy3LastDirection('left');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy4LastDirection('left');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy5LastDirection('left');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy6LastDirection('left');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy7LastDirection('left');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx3,
          y: _newPosy3
        });
        setEnemy8LastDirection('left');
      }
    }
    if (validOptions[chosen] === 'right') {
      var _newPosx4 = enemyx + 1;
      var _newPosy4 = enemyy;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy1LastDirection('right');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy2LastDirection('right');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy3LastDirection('right');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy4LastDirection('right');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy5LastDirection('right');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy6LastDirection('right');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy7LastDirection('right');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx4,
          y: _newPosy4
        });
        setEnemy8LastDirection('right');
      }
    }
    if (validOptions[chosen] === 'downLeft') {
      var _newPosx5 = enemyx - 1;
      var _newPosy5 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy1LastDirection('downLeft');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy2LastDirection('downLeft');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy3LastDirection('downLeft');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy4LastDirection('downLeft');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy5LastDirection('downLeft');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy6LastDirection('downLeft');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy7LastDirection('downLeft');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx5,
          y: _newPosy5
        });
        setEnemy8LastDirection('downLeft');
      }
    }
    if (validOptions[chosen] === 'downRight') {
      var _newPosx6 = enemyx + 1;
      var _newPosy6 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy1LastDirection('downRight');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy2LastDirection('downRight');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy3LastDirection('downRight');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy4LastDirection('downRight');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy5LastDirection('downRight');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy6LastDirection('downRight');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy7LastDirection('downRight');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx6,
          y: _newPosy6
        });
        setEnemy8LastDirection('downRight');
      }
    }
    if (validOptions[chosen] === 'upLeft') {
      var _newPosx7 = enemyx - 1;
      var _newPosy7 = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy1LastDirection('upLeft');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy2LastDirection('upLeft');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy3LastDirection('upLeft');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy4LastDirection('upLeft');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy5LastDirection('upLeft');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy6LastDirection('upLeft');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy7LastDirection('upLeft');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx7,
          y: _newPosy7
        });
        setEnemy8LastDirection('upLeft');
      }
    }
    if (validOptions[chosen] === 'upRight') {
      var _newPosx8 = enemyx + 1;
      var _newPosy8 = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy1LastDirection('upRight');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy2LastDirection('upRight');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy3LastDirection('upRight');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy4LastDirection('upRight');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy5LastDirection('upRight');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy6LastDirection('upRight');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy7LastDirection('upRight');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx8,
          y: _newPosy8
        });
        setEnemy8LastDirection('upRight');
      }
    }
    return;
  }
  function verifyPlayerPosition(playerx, playery) {
    if (playerx === playerPosRef.current.x && playery === playerPosRef.current.y) {
      //console.log(playerx, 'is the same as', playerPosRef.current.x, 'and', playery, 'is the same as', playerPosRef.current.y)
    } else {
      //console.log(playerx, 'is not the same as', playerPosRef.current.x, 'or', playery, 'is not the same as', playerPosRef.current.y)
      setPlayerPos({
        x: playerx,
        y: playery
      });
      //console.log('Correct after state change:', playerx === playerPosRef.current.x && playery === playerPosRef.current.y)
    }
  }
  function verifyEnemyPosition(enemyx, enemyy, key) {
    if (key === 1) {
      if (enemyx === enemy1PosRef.current.x && enemyy === enemy1PosRef.current.y) {
        //console.log('Case 1:', enemyx, 'is the same as', enemy1PosRef.current.x, 'and', enemyy, 'is the same as', enemy1PosRef.current.y)
        return enemy1Pos;
      } else {
        //console.log('Case 1:', enemyx, 'is not the same as', enemy1PosRef.current.x, 'or', enemyy, 'is not the same as', enemy1PosRef.current.y)
        setEnemy1Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy1PosRef.current.x && enemyy === enemy1PosRef.current.y)
        return enemy1Pos;
      }
    }
    if (key === 2) {
      if (enemyx === enemy2PosRef.current.x && enemyy === enemy2PosRef.current.y) {
        //console.log('Case 2:', enemyx, 'is the same as', enemy2PosRef.current.x, 'and', enemyy, 'is the same as', enemy2PosRef.current.y)
        return enemy2Pos;
      } else {
        //console.log('Case 2:', enemyx, 'is not the same as', enemy2PosRef.current.x, 'or', enemyy, 'is not the same as', enemy2PosRef.current.y)
        setEnemy2Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy2PosRef.current.x && enemyy === enemy2PosRef.current.y)
        return enemy2Pos;
      }
    }
    if (key === 3) {
      if (enemyx === enemy3PosRef.current.x && enemyy === enemy3PosRef.current.y) {
        //console.log('Case 3:', enemyx, 'is the same as', enemy3PosRef.current.x, 'and', enemyy, 'is the same as', enemy3PosRef.current.y)
        return enemy3Pos;
      } else {
        //console.log('Case 3:', enemyx, 'is not the same as', enemy3PosRef.current.x, 'or', enemyy, 'is not the same as', enemy3PosRef.current.y)
        setEnemy3Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy3PosRef.current.x && enemyy === enemy3PosRef.current.y)
        return enemy3Pos;
      }
    }
    if (key === 4) {
      if (enemyx === enemy4PosRef.current.x && enemyy === enemy4PosRef.current.y) {
        //console.log('Case 4:', enemyx, 'is the same as', enemy4PosRef.current.x, 'and', enemyy, 'is the same as', enemy4PosRef.current.y)
        return enemy4Pos;
      } else {
        //console.log('Case 4:', enemyx, 'is not the same as', enemy4PosRef.current.x, 'or', enemyy, 'is not the same as', enemy4PosRef.current.y)
        setEnemy4Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy4PosRef.current.x && enemyy === enemy4PosRef.current.y)
        return enemy4Pos;
      }
    }
    if (key === 5) {
      if (enemyx === enemy5PosRef.current.x && enemyy === enemy5PosRef.current.y) {
        //console.log('Case 5:', enemyx, 'is the same as', enemy5PosRef.current.x, 'and', enemyy, 'is the same as', enemy5PosRef.current.y)
        return enemy5Pos;
      } else {
        //console.log('Case 5:', enemyx, 'is not the same as', enemy5PosRef.current.x, 'or', enemyy, 'is not the same as', enemy5PosRef.current.y)
        setEnemy5Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy5PosRef.current.x && enemyy === enemy5PosRef.current.y)
        return enemy5Pos;
      }
    }
    if (key === 6) {
      if (enemyx === enemy6PosRef.current.x && enemyy === enemy6PosRef.current.y) {
        //console.log('Case 6:', enemyx, 'is the same as', enemy6PosRef.current.x, 'and', enemyy, 'is the same as', enemy6PosRef.current.y)
        return enemy6Pos;
      } else {
        //console.log('Case 6:', enemyx, 'is not the same as', enemy6PosRef.current.x, 'or', enemyy, 'is not the same as', enemy6PosRef.current.y)
        setEnemy6Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy6PosRef.current.x && enemyy === enemy6PosRef.current.y)
        return enemy6Pos;
      }
    }
    if (key === 7) {
      if (enemyx === enemy7PosRef.current.x && enemyy === enemy7PosRef.current.y) {
        //console.log('Case 7:', enemyx, 'is the same as', enemy7PosRef.current.x, 'and', enemyy, 'is the same as', enemy7PosRef.current.y)
        return enemy7Pos;
      } else {
        //console.log('Case 7:', enemyx, 'is not the same as', enemy7PosRef.current.x, 'or', enemyy, 'is not the same as', enemy7PosRef.current.y)
        setEnemy7Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy7PosRef.current.x && enemyy === enemy7PosRef.current.y)
        return enemy7Pos;
      }
    }
    if (key === 8) {
      if (enemyx === enemy8PosRef.current.x && enemyy === enemy8PosRef.current.y) {
        //console.log('Case 8:', enemyx, 'is the same as', enemy8PosRef.current.x, 'and', enemyy, 'is the same as', enemy8PosRef.current.y)
        return enemy8Pos;
      } else {
        //console.log('Case 8:', enemyx, 'is not the same as', enemy8PosRef.current.x, 'or', enemyy, 'is not the same as', enemy8PosRef.current.y)
        setEnemy8Pos({
          x: enemyx,
          y: enemyy
        });
        //console.log('Correct after state change:', enemyx === enemy8PosRef.current.x && enemyy === enemy8PosRef.current.y)
        return enemy8Pos;
      }
    }
  }
  function pursue(enemyx, enemyy, key) {
    if (key === 1) {
      if (enemy1Sleeping === true) {
        return;
      }
    }
    if (key === 2) {
      if (enemy2Sleeping === true) {
        return;
      }
    }
    if (key === 3) {
      if (enemy3Sleeping === true) {
        return;
      }
    }
    if (key === 4) {
      if (enemy4Sleeping === true) {
        return;
      }
    }
    if (key === 5) {
      if (enemy5Sleeping === true) {
        return;
      }
    }
    if (key === 6) {
      if (enemy6Sleeping === true) {
        return;
      }
    }
    if (key === 7) {
      if (enemy7Sleeping === true) {
        return;
      }
    }
    if (key === 8) {
      if (enemy8Sleeping === true) {
        return;
      }
    }
    var tileUp = dungeon[enemyy - 1][enemyx];
    var tileDown = dungeon[enemyy + 1][enemyx];
    var tileRight = dungeon[enemyy][enemyx + 1];
    var tileLeft = dungeon[enemyy][enemyx - 1];
    var tileUpRight = dungeon[enemyy - 1][enemyx + 1];
    var tileUpLeft = dungeon[enemyy - 1][enemyx - 1];
    var tileDownRight = dungeon[enemyy + 1][enemyx + 1];
    var tileDownLeft = dungeon[enemyy + 1][enemyx - 1];

    //player cases
    var playerUp = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx;
    var playerDown = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx;
    var playerLeft = playerPosRef.current.y === enemyy && playerPosRef.current.x === enemyx - 1;
    var playerRight = playerPosRef.current.y === enemyy && playerPosRef.current.x === enemyx + 1;
    var playerUpRight = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx + 1;
    var playerUpLeft = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx - 1;
    var playerDownRight = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx + 1;
    var playerDownLeft = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx - 1;
    //enemy1 cases
    var enemy1Up = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx : false;
    var enemy1Down = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx : false;
    var enemy1Left = enemy1 ? enemy1PosRef.current.y === enemyy && enemy1PosRef.current.x === enemyx - 1 : false;
    var enemy1Right = enemy1 ? enemy1PosRef.current.y === enemyy && enemy1PosRef.current.x === enemyx + 1 : false;
    var enemy1UpRight = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx + 1 : false;
    var enemy1UpLeft = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx - 1 : false;
    var enemy1DownRight = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx + 1 : false;
    var enemy1DownLeft = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx - 1 : false;
    //enemy2 cases
    var enemy2Up = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx : false;
    var enemy2Down = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx : false;
    var enemy2Left = enemy2 ? enemy2PosRef.current.y === enemyy && enemy2PosRef.current.x === enemyx - 1 : false;
    var enemy2Right = enemy2 ? enemy2PosRef.current.y === enemyy && enemy2PosRef.current.x === enemyx + 1 : false;
    var enemy2UpRight = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx + 1 : false;
    var enemy2UpLeft = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx - 1 : false;
    var enemy2DownRight = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx + 1 : false;
    var enemy2DownLeft = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx - 1 : false;
    //enemy3 cases
    var enemy3Up = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx : false;
    var enemy3Down = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx : false;
    var enemy3Left = enemy3 ? enemy3PosRef.current.y === enemyy && enemy3PosRef.current.x === enemyx - 1 : false;
    var enemy3Right = enemy3 ? enemy3PosRef.current.y === enemyy && enemy3PosRef.current.x === enemyx + 1 : false;
    var enemy3UpRight = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx + 1 : false;
    var enemy3UpLeft = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx - 1 : false;
    var enemy3DownRight = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx + 1 : false;
    var enemy3DownLeft = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx - 1 : false;
    //enemy4 cases
    var enemy4Up = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx : false;
    var enemy4Down = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx : false;
    var enemy4Left = enemy4 ? enemy4PosRef.current.y === enemyy && enemy4PosRef.current.x === enemyx - 1 : false;
    var enemy4Right = enemy4 ? enemy4PosRef.current.y === enemyy && enemy4PosRef.current.x === enemyx + 1 : false;
    var enemy4UpRight = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx + 1 : false;
    var enemy4UpLeft = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx - 1 : false;
    var enemy4DownRight = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx + 1 : false;
    var enemy4DownLeft = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx - 1 : false;
    //enemy5 cases
    var enemy5Up = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx : false;
    var enemy5Down = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx : false;
    var enemy5Left = enemy5 ? enemy5PosRef.current.y === enemyy && enemy5PosRef.current.x === enemyx - 1 : false;
    var enemy5Right = enemy5 ? enemy5PosRef.current.y === enemyy && enemy5PosRef.current.x === enemyx + 1 : false;
    var enemy5UpRight = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx + 1 : false;
    var enemy5UpLeft = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx - 1 : false;
    var enemy5DownRight = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx + 1 : false;
    var enemy5DownLeft = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx - 1 : false;
    //enemy6 cases
    var enemy6Up = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx : false;
    var enemy6Down = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx : false;
    var enemy6Left = enemy6 ? enemy6PosRef.current.y === enemyy && enemy6PosRef.current.x === enemyx - 1 : false;
    var enemy6Right = enemy6 ? enemy6PosRef.current.y === enemyy && enemy6PosRef.current.x === enemyx + 1 : false;
    var enemy6UpRight = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx + 1 : false;
    var enemy6UpLeft = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx - 1 : false;
    var enemy6DownRight = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx + 1 : false;
    var enemy6DownLeft = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx - 1 : false;
    //enemy7 cases
    var enemy7Up = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx : false;
    var enemy7Down = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx : false;
    var enemy7Left = enemy7 ? enemy7PosRef.current.y === enemyy && enemy7PosRef.current.x === enemyx - 1 : false;
    var enemy7Right = enemy7 ? enemy7PosRef.current.y === enemyy && enemy7PosRef.current.x === enemyx + 1 : false;
    var enemy7UpRight = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx + 1 : false;
    var enemy7UpLeft = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx - 1 : false;
    var enemy7DownRight = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx + 1 : false;
    var enemy7DownLeft = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx - 1 : false;
    //enemy8 cases
    var enemy8Up = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx : false;
    var enemy8Down = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx : false;
    var enemy8Left = enemy8 ? enemy8PosRef.current.y === enemyy && enemy8PosRef.current.x === enemyx - 1 : false;
    var enemy8Right = enemy8 ? enemy8PosRef.current.y === enemyy && enemy8PosRef.current.x === enemyx + 1 : false;
    var enemy8UpRight = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx + 1 : false;
    var enemy8UpLeft = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx - 1 : false;
    var enemy8DownRight = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx + 1 : false;
    var enemy8DownLeft = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx - 1 : false;
    var newPosx = enemyx;
    var newPosy = enemyy;
    if (enemyx < playerPos.x && enemyy < playerPos.y && tileDownRight !== 'W' && !playerDownRight && !enemy1DownRight && !enemy2DownRight && !enemy3DownRight && !enemy4DownRight && !enemy5DownRight && !enemy6DownRight && !enemy7DownRight && !enemy8DownRight) {
      var _newPosx9 = enemyx + 1;
      var _newPosy9 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy1LastDirection('downRight');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy2LastDirection('downRight');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy3LastDirection('downRight');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy4LastDirection('downRight');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy5LastDirection('downRight');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy6LastDirection('downRight');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy7LastDirection('downRight');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx9,
          y: _newPosy9
        });
        verifyEnemyPosition(_newPosx9, _newPosy9, key);
        setEnemy8LastDirection('downRight');
      }
    } else if (enemyx < playerPos.x && enemyy > playerPos.y && tileUpRight !== 'W' && !playerUpRight && !enemy1UpRight && !enemy2UpRight && !enemy3UpRight && !enemy4UpRight && !enemy5UpRight && !enemy6UpRight && !enemy7UpRight && !enemy8UpRight) {
      var _newPosx0 = enemyx + 1;
      var _newPosy0 = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy1LastDirection('upRight');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy2LastDirection('upRight');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy3LastDirection('upRight');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy4LastDirection('upRight');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy5LastDirection('upRight');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy6LastDirection('upRight');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy7LastDirection('upRight');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx0,
          y: _newPosy0
        });
        verifyEnemyPosition(_newPosx0, _newPosy0, key);
        setEnemy8LastDirection('upRight');
      }
    } else if (enemyx > playerPos.x && enemyy < playerPos.y && tileDownLeft !== 'W' && !playerDownLeft && !enemy1DownLeft && !enemy2DownLeft && !enemy3DownLeft && !enemy4DownLeft && !enemy5DownLeft && !enemy6DownLeft && !enemy7DownLeft && !enemy8DownLeft) {
      var _newPosx1 = enemyx - 1;
      var _newPosy1 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy1LastDirection('downLeft');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy2LastDirection('downLeft');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy3LastDirection('downLeft');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy4LastDirection('downLeft');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy5LastDirection('downLeft');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy6LastDirection('downLeft');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy7LastDirection('downLeft');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx1,
          y: _newPosy1
        });
        verifyEnemyPosition(_newPosx1, _newPosy1, key);
        setEnemy8LastDirection('downLeft');
      }
    } else if (enemyx > playerPos.x && enemyy > playerPos.y && tileUpLeft !== 'W' && !playerUpLeft && !enemy1UpLeft && !enemy2UpLeft && !enemy3UpLeft && !enemy4UpLeft && !enemy5UpLeft && !enemy6UpLeft && !enemy7UpLeft && !enemy8UpLeft) {
      var _newPosx10 = enemyx - 1;
      var _newPosy10 = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy1LastDirection('upLeft');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy2LastDirection('upLeft');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy3LastDirection('upLeft');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy4LastDirection('upLeft');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy5LastDirection('upLeft');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy6LastDirection('upLeft');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy7LastDirection('upLeft');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx10,
          y: _newPosy10
        });
        verifyEnemyPosition(_newPosx10, _newPosy10, key);
        setEnemy8LastDirection('upLeft');
      }
    } else if (enemyx < playerPos.x && tileRight !== 'W' && !playerRight && !enemy1Right && !enemy2Right && !enemy3Right && !enemy4Right && !enemy5Right && !enemy6Right && !enemy7Right && !enemy8Right) {
      var _newPosx11 = enemyx + 1;
      var _newPosy11 = enemyy;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy1LastDirection('right');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy2LastDirection('right');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy3LastDirection('right');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy4LastDirection('right');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy5LastDirection('right');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy6LastDirection('right');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy7LastDirection('right');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx11,
          y: _newPosy11
        });
        verifyEnemyPosition(_newPosx11, _newPosy11, key);
        setEnemy8LastDirection('right');
      }
    } else if (enemyx > playerPos.x && tileLeft !== 'W' && !playerLeft && !enemy1Left && !enemy2Left && !enemy3Left && !enemy4Left && !enemy5Left && !enemy6Left && !enemy7Left && !enemy8Left) {
      var _newPosx12 = enemyx - 1;
      var _newPosy12 = enemyy;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy1LastDirection('left');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy2LastDirection('left');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy3LastDirection('left');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy4LastDirection('left');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy5LastDirection('left');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy6LastDirection('left');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy7LastDirection('left');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx12,
          y: _newPosy12
        });
        verifyEnemyPosition(_newPosx12, _newPosy12, key);
        setEnemy8LastDirection('left');
      }
    } else if (enemyy < playerPos.y && tileDown !== 'W' && !playerDown && !enemy1Down && !enemy2Down && !enemy3Down && !enemy4Down && !enemy5Down && !enemy6Down && !enemy7Down && !enemy8Down) {
      var _newPosx13 = enemyx;
      var _newPosy13 = enemyy + 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy1LastDirection('down');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy2LastDirection('down');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy3LastDirection('down');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy4LastDirection('down');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy5LastDirection('down');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy6LastDirection('down');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy7LastDirection('down');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx13,
          y: _newPosy13
        });
        verifyEnemyPosition(_newPosx13, _newPosy13, key);
        setEnemy8LastDirection('down');
      }
    } else if (enemyy > playerPos.y && tileUp !== 'W' && !playerUp && !enemy1Up && !enemy2Up && !enemy3Up && !enemy4Up && !enemy5Up && !enemy6Up && !enemy7Up && !enemy8Up) {
      var _newPosx14 = enemyx;
      var _newPosy14 = enemyy - 1;
      if (key === 1) {
        setEnemy1Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy1LastDirection('up');
      }
      if (key === 2) {
        setEnemy2Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy2LastDirection('up');
      }
      if (key === 3) {
        setEnemy3Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy3LastDirection('up');
      }
      if (key === 4) {
        setEnemy4Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy4LastDirection('up');
      }
      if (key === 5) {
        setEnemy5Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy5LastDirection('up');
      }
      if (key === 6) {
        setEnemy6Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy6LastDirection('up');
      }
      if (key === 7) {
        setEnemy7Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy7LastDirection('up');
      }
      if (key === 8) {
        setEnemy8Pos({
          x: _newPosx14,
          y: _newPosy14
        });
        verifyEnemyPosition(_newPosx14, _newPosy14, key);
        setEnemy8LastDirection('up');
      }
    }
    return;
  }
  function waitUntil(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  function checkAttackPath(key) {
    console.log('checking attack path for enemy', key);
    var enemy1Move1 = enemy1 ? ENEMY_DEFS[enemyType1].moves[0] : null;
    var enemy2Move1 = enemy2 ? ENEMY_DEFS[enemyType2].moves[0] : null;
    var enemy3Move1 = enemy3 ? ENEMY_DEFS[enemyType3].moves[0] : null;
    var enemy4Move1 = enemy4 ? ENEMY_DEFS[enemyType4].moves[0] : null;
    var enemy5Move1 = enemy5 ? ENEMY_DEFS[enemyType5].moves[0] : null;
    var enemy6Move1 = enemy6 ? ENEMY_DEFS[enemyType6].moves[0] : null;
    var enemy7Move1 = enemy7 ? ENEMY_DEFS[enemyType7].moves[0] : null;
    var enemy8Move1 = enemy8 ? ENEMY_DEFS[enemyType8].moves[0] : null;
    var range1 = enemy1Move1 ? enemy1Move1.range : 0;
    var range2 = enemy2Move1 ? enemy2Move1.range : 0;
    var range3 = enemy3Move1 ? enemy3Move1.range : 0;
    var range4 = enemy4Move1 ? enemy4Move1.range : 0;
    var range5 = enemy5Move1 ? enemy5Move1.range : 0;
    var range6 = enemy6Move1 ? enemy6Move1.range : 0;
    var range7 = enemy7Move1 ? enemy7Move1.range : 0;
    var range8 = enemy8Move1 ? enemy8Move1.range : 0;
    var attackDirection = 'none';
    if (key === 1) {
      if (enemy1Move1.alignment === 'same-direction') {
        if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
          for (var i = 1; i <= range1; i++) {
            console.log('checking right1 at', enemy1PosRef.current.x + i, enemy1PosRef.current.y);
            if (enemy1PosRef.current.x + i === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y][enemy1PosRef.current.x + i] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
          for (var _i = 1; _i <= range1; _i++) {
            console.log('checking left1 at', enemy1PosRef.current.x - _i, enemy1PosRef.current.y);
            if (enemy1PosRef.current.x - _i === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y][enemy1PosRef.current.x - _i] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.y < playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x) {
          for (var _i2 = 1; _i2 <= range1; _i2++) {
            console.log('checking down1 at', enemy1PosRef.current.x, enemy1PosRef.current.y + _i2);
            if (enemy1PosRef.current.x === playerPosRef.current.x && enemy1PosRef.current.y + _i2 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y + _i2][enemy1PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.y > playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x) {
          for (var _i3 = 1; _i3 <= range1; _i3++) {
            console.log('checking up1 at', enemy1PosRef.current.x, enemy1PosRef.current.y - _i3);
            if (enemy1PosRef.current.x === playerPosRef.current.x && enemy1PosRef.current.y - _i3 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y - _i3][enemy1PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y) {
          for (var _i4 = 1; _i4 <= range1; _i4++) {
            console.log('checking downright1 at', enemy1PosRef.current.x + _i4, enemy1PosRef.current.y + _i4);
            if (enemy1PosRef.current.x + _i4 === playerPosRef.current.x && enemy1PosRef.current.y + _i4 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y + _i4][enemy1PosRef.current.x + _i4] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y) {
          for (var _i5 = 1; _i5 <= range1; _i5++) {
            console.log('checking downleft1 at', enemy1PosRef.current.x - _i5, enemy1PosRef.current.y + _i5);
            if (enemy1PosRef.current.x - _i5 === playerPosRef.current.x && enemy1PosRef.current.y + _i5 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y + _i5][enemy1PosRef.current.x - _i5] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y) {
          for (var _i6 = 1; _i6 <= range1; _i6++) {
            console.log('checking upright1 at', enemy1PosRef.current.x + _i6, enemy1PosRef.current.y - _i6);
            if (enemy1PosRef.current.x + _i6 === playerPosRef.current.x && enemy1PosRef.current.y - _i6 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y - _i6][enemy1PosRef.current.x + _i6] === 'W') {
              return false;
            }
          }
        } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y) {
          for (var _i7 = 1; _i7 <= range1; _i7++) {
            console.log('checking upleft1 at', enemy1PosRef.current.x - _i7, enemy1PosRef.current.y - _i7);
            if (enemy1PosRef.current.x - _i7 === playerPosRef.current.x && enemy1PosRef.current.y - _i7 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy1PosRef.current.y - _i7][enemy1PosRef.current.x - _i7] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 2) {
      if (enemy2Move1.alignment === 'same-direction') {
        if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
          for (var _i8 = 1; _i8 <= range2; _i8++) {
            console.log('checking right2 at', enemy2PosRef.current.x + _i8, enemy2PosRef.current.y);
            if (enemy2PosRef.current.x + _i8 === playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y][enemy2PosRef.current.x + _i8] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
          for (var _i9 = 1; _i9 <= range2; _i9++) {
            console.log('checking left2 at', enemy2PosRef.current.x - _i9, enemy2PosRef.current.y);
            if (enemy2PosRef.current.x - _i9 === playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y][enemy2PosRef.current.x - _i9] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.y < playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x) {
          for (var _i0 = 1; _i0 <= range2; _i0++) {
            console.log('checking down2 at', enemy2PosRef.current.x, enemy2PosRef.current.y + _i0);
            if (enemy2PosRef.current.x === playerPosRef.current.x && enemy2PosRef.current.y + _i0 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y + _i0][enemy2PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.y > playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x) {
          for (var _i1 = 1; _i1 <= range2; _i1++) {
            console.log('checking up2 at', enemy2PosRef.current.x, enemy2PosRef.current.y - _i1);
            if (enemy2PosRef.current.x === playerPosRef.current.x && enemy2PosRef.current.y - _i1 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y - _i1][enemy2PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y) {
          for (var _i10 = 1; _i10 <= range2; _i10++) {
            console.log('checking downright2 at', enemy2PosRef.current.x + _i10, enemy2PosRef.current.y + _i10);
            if (enemy2PosRef.current.x + _i10 === playerPosRef.current.x && enemy2PosRef.current.y + _i10 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y + _i10][enemy2PosRef.current.x + _i10] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y) {
          for (var _i11 = 1; _i11 <= range2; _i11++) {
            console.log('checking downleft2 at', enemy2PosRef.current.x - _i11, enemy2PosRef.current.y + _i11);
            if (enemy2PosRef.current.x - _i11 === playerPosRef.current.x && enemy2PosRef.current.y + _i11 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y + _i11][enemy2PosRef.current.x - _i11] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y) {
          for (var _i12 = 1; _i12 <= range2; _i12++) {
            console.log('checking upright2 at', enemy2PosRef.current.x + _i12, enemy2PosRef.current.y - _i12);
            if (enemy2PosRef.current.x + _i12 === playerPosRef.current.x && enemy2PosRef.current.y - _i12 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y - _i12][enemy2PosRef.current.x + _i12] === 'W') {
              return false;
            }
          }
        } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y) {
          for (var _i13 = 1; _i13 <= range2; _i13++) {
            console.log('checking upleft2 at', enemy2PosRef.current.x - _i13, enemy2PosRef.current.y - _i13);
            if (enemy2PosRef.current.x - _i13 === playerPosRef.current.x && enemy2PosRef.current.y - _i13 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy2PosRef.current.y - _i13][enemy2PosRef.current.x - _i13] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 3) {
      if (enemy3Move1.alignment === 'same-direction') {
        if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
          for (var _i14 = 1; _i14 <= range3; _i14++) {
            console.log('checking right3 at', enemy3PosRef.current.x + _i14, enemy3PosRef.current.y);
            if (enemy3PosRef.current.x + _i14 === playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y][enemy3PosRef.current.x + _i14] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
          for (var _i15 = 1; _i15 <= range3; _i15++) {
            console.log('checking left3 at', enemy3PosRef.current.x - _i15, enemy3PosRef.current.y);
            if (enemy3PosRef.current.x - _i15 === playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y][enemy3PosRef.current.x - _i15] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.y < playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x) {
          for (var _i16 = 1; _i16 <= range3; _i16++) {
            console.log('checking down3 at', enemy3PosRef.current.x, enemy3PosRef.current.y + _i16);
            if (enemy3PosRef.current.x === playerPosRef.current.x && enemy3PosRef.current.y + _i16 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y + _i16][enemy3PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.y > playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x) {
          for (var _i17 = 1; _i17 <= range3; _i17++) {
            console.log('checking up3 at', enemy3PosRef.current.x, enemy3PosRef.current.y - _i17);
            if (enemy3PosRef.current.x === playerPosRef.current.x && enemy3PosRef.current.y - _i17 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y - _i17][enemy3PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y) {
          for (var _i18 = 1; _i18 <= range3; _i18++) {
            console.log('checking downright3 at', enemy3PosRef.current.x + _i18, enemy3PosRef.current.y + _i18);
            if (enemy3PosRef.current.x + _i18 === playerPosRef.current.x && enemy3PosRef.current.y + _i18 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y + _i18][enemy3PosRef.current.x + _i18] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y) {
          for (var _i19 = 1; _i19 <= range3; _i19++) {
            console.log('checking downleft3 at', enemy3PosRef.current.x - _i19, enemy3PosRef.current.y + _i19);
            if (enemy3PosRef.current.x - _i19 === playerPosRef.current.x && enemy3PosRef.current.y + _i19 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y + _i19][enemy3PosRef.current.x - _i19] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y) {
          for (var _i20 = 1; _i20 <= range3; _i20++) {
            console.log('checking upright3 at', enemy3PosRef.current.x + _i20, enemy3PosRef.current.y - _i20);
            if (enemy3PosRef.current.x + _i20 === playerPosRef.current.x && enemy3PosRef.current.y - _i20 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y - _i20][enemy3PosRef.current.x + _i20] === 'W') {
              return false;
            }
          }
        } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y) {
          for (var _i21 = 1; _i21 <= range3; _i21++) {
            console.log('checking upleft3 at', enemy3PosRef.current.x - _i21, enemy3PosRef.current.y - _i21);
            if (enemy3PosRef.current.x - _i21 === playerPosRef.current.x && enemy3PosRef.current.y - _i21 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy3PosRef.current.y - _i21][enemy3PosRef.current.x - _i21] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 4) {
      if (enemy4Move1.alignment === 'same-direction') {
        if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
          for (var _i22 = 1; _i22 <= range4; _i22++) {
            console.log('checking right4 at', enemy4PosRef.current.x + _i22, enemy4PosRef.current.y);
            if (enemy4PosRef.current.x + _i22 === playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y][enemy4PosRef.current.x + _i22] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
          for (var _i23 = 1; _i23 <= range4; _i23++) {
            console.log('checking left4 at', enemy4PosRef.current.x - _i23, enemy4PosRef.current.y);
            if (enemy4PosRef.current.x - _i23 === playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y][enemy4PosRef.current.x - _i23] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.y < playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x) {
          for (var _i24 = 1; _i24 <= range4; _i24++) {
            console.log('checking down4 at', enemy4PosRef.current.x, enemy4PosRef.current.y + _i24);
            if (enemy4PosRef.current.x === playerPosRef.current.x && enemy4PosRef.current.y + _i24 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y + _i24][enemy4PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.y > playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x) {
          for (var _i25 = 1; _i25 <= range4; _i25++) {
            console.log('checking up4 at', enemy4PosRef.current.x, enemy4PosRef.current.y - _i25);
            if (enemy4PosRef.current.x === playerPosRef.current.x && enemy4PosRef.current.y - _i25 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y - _i25][enemy4PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y) {
          for (var _i26 = 1; _i26 <= range4; _i26++) {
            console.log('checking downright4 at', enemy4PosRef.current.x + _i26, enemy4PosRef.current.y + _i26);
            if (enemy4PosRef.current.x + _i26 === playerPosRef.current.x && enemy4PosRef.current.y + _i26 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y + _i26][enemy4PosRef.current.x + _i26] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y) {
          for (var _i27 = 1; _i27 <= range4; _i27++) {
            console.log('checking downleft4 at', enemy4PosRef.current.x - _i27, enemy4PosRef.current.y + _i27);
            if (enemy4PosRef.current.x - _i27 === playerPosRef.current.x && enemy4PosRef.current.y + _i27 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y + _i27][enemy4PosRef.current.x - _i27] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y) {
          for (var _i28 = 1; _i28 <= range4; _i28++) {
            console.log('checking upright4 at', enemy4PosRef.current.x + _i28, enemy4PosRef.current.y - _i28);
            if (enemy4PosRef.current.x + _i28 === playerPosRef.current.x && enemy4PosRef.current.y - _i28 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y - _i28][enemy4PosRef.current.x + _i28] === 'W') {
              return false;
            }
          }
        } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y) {
          for (var _i29 = 1; _i29 <= range4; _i29++) {
            console.log('checking upleft4 at', enemy4PosRef.current.x - _i29, enemy4PosRef.current.y - _i29);
            if (enemy4PosRef.current.x - _i29 === playerPosRef.current.x && enemy4PosRef.current.y - _i29 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy4PosRef.current.y - _i29][enemy4PosRef.current.x - _i29] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 5) {
      if (enemy5Move1.alignment === 'same-direction') {
        if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
          for (var _i30 = 1; _i30 <= range5; _i30++) {
            console.log('checking right5 at', enemy5PosRef.current.x + _i30, enemy5PosRef.current.y);
            if (enemy5PosRef.current.x + _i30 === playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y][enemy5PosRef.current.x + _i30] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
          for (var _i31 = 1; _i31 <= range5; _i31++) {
            console.log('checking left5 at', enemy5PosRef.current.x - _i31, enemy5PosRef.current.y);
            if (enemy5PosRef.current.x - _i31 === playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y][enemy5PosRef.current.x - _i31] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.y < playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x) {
          for (var _i32 = 1; _i32 <= range5; _i32++) {
            console.log('checking down5 at', enemy5PosRef.current.x, enemy5PosRef.current.y + _i32);
            if (enemy5PosRef.current.x === playerPosRef.current.x && enemy5PosRef.current.y + _i32 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y + _i32][enemy5PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.y > playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x) {
          for (var _i33 = 1; _i33 <= range5; _i33++) {
            console.log('checking up5 at', enemy5PosRef.current.x, enemy5PosRef.current.y - _i33);
            if (enemy5PosRef.current.x === playerPosRef.current.x && enemy5PosRef.current.y - _i33 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y - _i33][enemy5PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y) {
          for (var _i34 = 1; _i34 <= range5; _i34++) {
            console.log('checking downright5 at', enemy5PosRef.current.x + _i34, enemy5PosRef.current.y + _i34);
            if (enemy5PosRef.current.x + _i34 === playerPosRef.current.x && enemy5PosRef.current.y + _i34 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y + _i34][enemy5PosRef.current.x + _i34] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y) {
          for (var _i35 = 1; _i35 <= range5; _i35++) {
            console.log('checking downleft5 at', enemy5PosRef.current.x - _i35, enemy5PosRef.current.y + _i35);
            if (enemy5PosRef.current.x - _i35 === playerPosRef.current.x && enemy5PosRef.current.y + _i35 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y + _i35][enemy5PosRef.current.x - _i35] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y) {
          for (var _i36 = 1; _i36 <= range5; _i36++) {
            console.log('checking upright5 at', enemy5PosRef.current.x + _i36, enemy5PosRef.current.y - _i36);
            if (enemy5PosRef.current.x + _i36 === playerPosRef.current.x && enemy5PosRef.current.y - _i36 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y - _i36][enemy5PosRef.current.x + _i36] === 'W') {
              return false;
            }
          }
        } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y) {
          for (var _i37 = 1; _i37 <= range5; _i37++) {
            console.log('checking upleft5 at', enemy5PosRef.current.x - _i37, enemy5PosRef.current.y - _i37);
            if (enemy5PosRef.current.x - _i37 === playerPosRef.current.x && enemy5PosRef.current.y - _i37 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy5PosRef.current.y - _i37][enemy5PosRef.current.x - _i37] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 6) {
      if (enemy6Move1.alignment === 'same-direction') {
        if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
          for (var _i38 = 1; _i38 <= range6; _i38++) {
            console.log('checking right6 at', enemy6PosRef.current.x + _i38, enemy6PosRef.current.y);
            if (enemy6PosRef.current.x + _i38 === playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y][enemy6PosRef.current.x + _i38] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
          for (var _i39 = 1; _i39 <= range6; _i39++) {
            console.log('checking left6 at', enemy6PosRef.current.x - _i39, enemy6PosRef.current.y);
            if (enemy6PosRef.current.x - _i39 === playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y][enemy6PosRef.current.x - _i39] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.y < playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x) {
          for (var _i40 = 1; _i40 <= range6; _i40++) {
            console.log('checking down6 at', enemy6PosRef.current.x, enemy6PosRef.current.y + _i40);
            if (enemy6PosRef.current.x === playerPosRef.current.x && enemy6PosRef.current.y + _i40 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y + _i40][enemy6PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.y > playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x) {
          for (var _i41 = 1; _i41 <= range6; _i41++) {
            console.log('checking up6 at', enemy6PosRef.current.x, enemy6PosRef.current.y - _i41);
            if (enemy6PosRef.current.x === playerPosRef.current.x && enemy6PosRef.current.y - _i41 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y - _i41][enemy6PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y) {
          for (var _i42 = 1; _i42 <= range6; _i42++) {
            console.log('checking downright6 at', enemy6PosRef.current.x + _i42, enemy6PosRef.current.y + _i42);
            if (enemy6PosRef.current.x + _i42 === playerPosRef.current.x && enemy6PosRef.current.y + _i42 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y + _i42][enemy6PosRef.current.x + _i42] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y) {
          for (var _i43 = 1; _i43 <= range6; _i43++) {
            console.log('checking downleft6 at', enemy6PosRef.current.x - _i43, enemy6PosRef.current.y + _i43);
            if (enemy6PosRef.current.x - _i43 === playerPosRef.current.x && enemy6PosRef.current.y + _i43 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y + _i43][enemy6PosRef.current.x - _i43] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y) {
          for (var _i44 = 1; _i44 <= range6; _i44++) {
            console.log('checking upright6 at', enemy6PosRef.current.x + _i44, enemy6PosRef.current.y - _i44);
            if (enemy6PosRef.current.x + _i44 === playerPosRef.current.x && enemy6PosRef.current.y - _i44 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y - _i44][enemy6PosRef.current.x + _i44] === 'W') {
              return false;
            }
          }
        } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y) {
          for (var _i45 = 1; _i45 <= range6; _i45++) {
            console.log('checking upleft6 at', enemy6PosRef.current.x - _i45, enemy6PosRef.current.y - _i45);
            if (enemy6PosRef.current.x - _i45 === playerPosRef.current.x && enemy6PosRef.current.y - _i45 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy6PosRef.current.y - _i45][enemy6PosRef.current.x - _i45] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 7) {
      if (enemy7Move1.alignment === 'same-direction') {
        if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
          for (var _i46 = 1; _i46 <= range7; _i46++) {
            console.log('checking right7 at', enemy7PosRef.current.x + _i46, enemy7PosRef.current.y);
            if (enemy7PosRef.current.x + _i46 === playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y][enemy7PosRef.current.x + _i46] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
          for (var _i47 = 1; _i47 <= range7; _i47++) {
            console.log('checking left7 at', enemy7PosRef.current.x - _i47, enemy7PosRef.current.y);
            if (enemy7PosRef.current.x - _i47 === playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y][enemy7PosRef.current.x - _i47] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.y < playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x) {
          for (var _i48 = 1; _i48 <= range7; _i48++) {
            console.log('checking down7 at', enemy7PosRef.current.x, enemy7PosRef.current.y + _i48);
            if (enemy7PosRef.current.x === playerPosRef.current.x && enemy7PosRef.current.y + _i48 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y + _i48][enemy7PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.y > playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x) {
          for (var _i49 = 1; _i49 <= range7; _i49++) {
            console.log('checking up7 at', enemy7PosRef.current.x, enemy7PosRef.current.y - _i49);
            if (enemy7PosRef.current.x === playerPosRef.current.x && enemy7PosRef.current.y - _i49 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y - _i49][enemy7PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y) {
          for (var _i50 = 1; _i50 <= range7; _i50++) {
            console.log('checking downright7 at', enemy7PosRef.current.x + _i50, enemy7PosRef.current.y + _i50);
            if (enemy7PosRef.current.x + _i50 === playerPosRef.current.x && enemy7PosRef.current.y + _i50 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y + _i50][enemy7PosRef.current.x + _i50] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y) {
          for (var _i51 = 1; _i51 <= range7; _i51++) {
            console.log('checking downleft7 at', enemy7PosRef.current.x - _i51, enemy7PosRef.current.y + _i51);
            if (enemy7PosRef.current.x - _i51 === playerPosRef.current.x && enemy7PosRef.current.y + _i51 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y + _i51][enemy7PosRef.current.x - _i51] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y) {
          for (var _i52 = 1; _i52 <= range7; _i52++) {
            console.log('checking upright7 at', enemy7PosRef.current.x + _i52, enemy7PosRef.current.y - _i52);
            if (enemy7PosRef.current.x + _i52 === playerPosRef.current.x && enemy7PosRef.current.y - _i52 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y - _i52][enemy7PosRef.current.x + _i52] === 'W') {
              return false;
            }
          }
        } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y) {
          for (var _i53 = 1; _i53 <= range7; _i53++) {
            console.log('checking upleft7 at', enemy7PosRef.current.x - _i53, enemy7PosRef.current.y - _i53);
            if (enemy7PosRef.current.x - _i53 === playerPosRef.current.x && enemy7PosRef.current.y - _i53 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy7PosRef.current.y - _i53][enemy7PosRef.current.x - _i53] === 'W') {
              return false;
            }
          }
        }
      }
    }
    if (key === 8) {
      if (enemy8Move1.alignment === 'same-direction') {
        if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
          for (var _i54 = 1; _i54 <= range8; _i54++) {
            console.log('checking right8 at', enemy8PosRef.current.x + _i54, enemy8PosRef.current.y);
            if (enemy8PosRef.current.x + _i54 === playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y][enemy8PosRef.current.x + _i54] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
          for (var _i55 = 1; _i55 <= range8; _i55++) {
            console.log('checking left8 at', enemy8PosRef.current.x - _i55, enemy8PosRef.current.y);
            if (enemy8PosRef.current.x - _i55 === playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y][enemy8PosRef.current.x - _i55] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.y < playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x) {
          for (var _i56 = 1; _i56 <= range8; _i56++) {
            console.log('checking down8 at', enemy8PosRef.current.x, enemy8PosRef.current.y + _i56);
            if (enemy8PosRef.current.x === playerPosRef.current.x && enemy8PosRef.current.y + _i56 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y + _i56][enemy8PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.y > playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x) {
          for (var _i57 = 1; _i57 <= range8; _i57++) {
            console.log('checking up8 at', enemy8PosRef.current.x, enemy8PosRef.current.y - _i57);
            if (enemy8PosRef.current.x === playerPosRef.current.x && enemy8PosRef.current.y - _i57 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y - _i57][enemy8PosRef.current.x] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y) {
          for (var _i58 = 1; _i58 <= range8; _i58++) {
            console.log('checking downright8 at', enemy8PosRef.current.x + _i58, enemy8PosRef.current.y + _i58);
            if (enemy8PosRef.current.x + _i58 === playerPosRef.current.x && enemy8PosRef.current.y + _i58 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y + _i58][enemy8PosRef.current.x + _i58] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y) {
          for (var _i59 = 1; _i59 <= range8; _i59++) {
            console.log('checking downleft8 at', enemy8PosRef.current.x - _i59, enemy8PosRef.current.y + _i59);
            if (enemy8PosRef.current.x - _i59 === playerPosRef.current.x && enemy8PosRef.current.y + _i59 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y + _i59][enemy8PosRef.current.x - _i59] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y) {
          for (var _i60 = 1; _i60 <= range8; _i60++) {
            console.log('checking upright8 at', enemy8PosRef.current.x + _i60, enemy8PosRef.current.y - _i60);
            if (enemy8PosRef.current.x + _i60 === playerPosRef.current.x && enemy8PosRef.current.y - _i60 === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y - _i60][enemy8PosRef.current.x + _i60] === 'W') {
              return false;
            }
          }
        } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y) {
          for (var _i61 = 1; _i61 <= range8; _i61++) {
            console.log('checking upleft8 at', enemy8PosRef.current.x - _i61, enemy8PosRef.current.y - _i61);
            if (enemy1PosRef.current.x - _i61 === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y) {
              return true;
            }
            if (dungeon[enemy8PosRef.current.y - _i61][enemy8PosRef.current.x - _i61] === 'W') {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  function confirmEnemyBehavior(key, move) {
    console.log('confirming behavior for enemy', key);
    if (key === 1 && enemy1 && enemy1Sleeping === false) {
      var wallCheck = checkAttackPath(1);
      console.log('wallcheck for enemy 1:', wallCheck);
      var enemy1Move1 = ENEMY_DEFS[enemyType1].moves[0];
      if (enemy1Move1.alignment === 'same-direction') {
        if (wallCheck === true && (Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) <= enemy1Move1.range || Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy1PosRef.current.y - playerPosRef.current.y))) {
          setEnemy1Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy1Move1, 1);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy1PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy1PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy1Move1.range);
          console.log('triggered with key', key);
          confirmEnemyBehavior(2, move + 1);
          return;
        }
      }
      if (Math.abs(enemy1PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy1PosRef.current.y - playerPos.y) < 15 && enemy1MoveBehaviorRef.current === true) {
        pursue(enemy1PosRef.current.x, enemy1PosRef.current.y, 1);
      } else if (Math.abs(enemy1PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy1PosRef.current.y - playerPos.y) >= 15 && enemy1MoveBehaviorRef.current === true) {
        patrol(enemy1PosRef.current.x, enemy1PosRef.current.y, 1);
      }
      confirmEnemyBehavior(2, move);
    }
    //setTimeout(() => { 
    if (key === 2 && enemy2 && enemy2Sleeping === false) {
      var enemy2Move1 = ENEMY_DEFS[enemyType2].moves[0];
      var _wallCheck = checkAttackPath(2);
      console.log('wallcheck for enemy 2:', _wallCheck);
      if (enemy2Move1.alignment === 'same-direction') {
        if (_wallCheck === true && (Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) <= enemy2Move1.range || Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy2PosRef.current.y - playerPosRef.current.y))) {
          setEnemy2Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy2Move1, 2);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy2PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy2PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy2Move1.range);
          confirmEnemyBehavior(3, move + 1);
          return;
        }
      }
      if (Math.abs(enemy2PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy2PosRef.current.y - playerPos.y) < 15 && enemy2MoveBehaviorRef.current === true) {
        pursue(enemy2PosRef.current.x, enemy2PosRef.current.y, 2);
      } else if (Math.abs(enemy2PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy2PosRef.current.y - playerPos.y) >= 15 && enemy2MoveBehaviorRef.current === true) {
        patrol(enemy2PosRef.current.x, enemy2PosRef.current.y, 2);
      }
      confirmEnemyBehavior(3, move);
    }
    //}, (1000))

    //setTimeout(() => { 
    if (key === 3 && enemy3 && enemy3Sleeping === false) {
      var enemy3Move1 = ENEMY_DEFS[enemyType3].moves[0];
      var _wallCheck2 = checkAttackPath(3);
      console.log('wallcheck for enemy 3:', _wallCheck2);
      if (enemy3Move1.alignment === 'same-direction') {
        if (_wallCheck2 === true && (Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) <= enemy3Move1.range || Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy3PosRef.current.y - playerPosRef.current.y))) {
          setEnemy3Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy3Move1, 3);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy3PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy3PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy3Move1.range);
          confirmEnemyBehavior(4, move + 1);
          return;
        }
      }
      if (Math.abs(enemy3PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy3PosRef.current.y - playerPos.y) < 15 && enemy3MoveBehaviorRef.current === true) {
        pursue(enemy3PosRef.current.x, enemy3PosRef.current.y, 3);
      } else if (Math.abs(enemy3PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy3PosRef.current.y - playerPos.y) >= 15 && enemy3MoveBehaviorRef.current === true) {
        patrol(enemy3PosRef.current.x, enemy3PosRef.current.y, 3);
      }
      confirmEnemyBehavior(4, move);
    }
    //}, (2000))

    //setTimeout(() => {
    if (key === 4 && enemy4 && enemy4Sleeping === false) {
      var enemy4Move1 = ENEMY_DEFS[enemyType4].moves[0];
      var _wallCheck3 = checkAttackPath(4);
      console.log('wallcheck for enemy 4:', _wallCheck3);
      if (enemy4Move1.alignment === 'same-direction') {
        if (_wallCheck3 === true && (Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) <= enemy4Move1.range || Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy4PosRef.current.y - playerPosRef.current.y))) {
          setEnemy4Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy4Move1, 4);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy4PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy4PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy4Move1.range);
          confirmEnemyBehavior(5, move + 1);
          return;
        }
      }
      if (Math.abs(enemy4PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy4PosRef.current.y - playerPos.y) < 15 && enemy4MoveBehaviorRef.current === true) {
        pursue(enemy4PosRef.current.x, enemy4PosRef.current.y, 4);
      } else if (Math.abs(enemy4PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy4PosRef.current.y - playerPos.y) >= 15 && enemy4MoveBehaviorRef.current === true) {
        patrol(enemy4PosRef.current.x, enemy4PosRef.current.y, 4);
      }
      confirmEnemyBehavior(5, move);
    }
    //}, (3000))

    //setTimeout(() => {
    if (key === 5 && enemy5 && enemy5Sleeping === false) {
      var enemy5Move1 = ENEMY_DEFS[enemyType5].moves[0];
      var _wallCheck4 = checkAttackPath(5);
      console.log('wallcheck for enemy 5:', _wallCheck4);
      if (enemy5Move1.alignment === 'same-direction') {
        if (_wallCheck4 === true && (Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) <= enemy5Move1.range || Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy5PosRef.current.y - playerPosRef.current.y))) {
          setEnemy5Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy5Move1, 5);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy5PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy5PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy5Move1.range);
          confirmEnemyBehavior(6, move + 1);
          return;
        }
      }
      if (Math.abs(enemy5PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy5PosRef.current.y - playerPos.y) < 15 && enemy5MoveBehaviorRef.current === true) {
        pursue(enemy5PosRef.current.x, enemy5PosRef.current.y, 5);
      } else if (Math.abs(enemy5PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy5PosRef.current.y - playerPos.y) >= 15 && enemy5MoveBehaviorRef.current === true) {
        patrol(enemy5PosRef.current.x, enemy5PosRef.current.y, 5);
      }
      confirmEnemyBehavior(6, move);
    }
    //}, (4000))

    //setTimeout(() => {
    if (key === 6 && enemy6 && enemy6Sleeping === false) {
      var enemy6Move1 = ENEMY_DEFS[enemyType6].moves[0];
      var _wallCheck5 = checkAttackPath(6);
      console.log('wallcheck for enemy 6:', _wallCheck5);
      if (enemy6Move1.alignment === 'same-direction') {
        if (_wallCheck5 === true && (Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) <= enemy6Move1.range || Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy6PosRef.current.y - playerPosRef.current.y))) {
          setEnemy6Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy6Move1, 6);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy6PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy6PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy6Move1.range);
          confirmEnemyBehavior(7, move + 1);
          return;
        }
      }
      if (Math.abs(enemy6PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy6PosRef.current.y - playerPos.y) < 15 && enemy6MoveBehaviorRef.current === true) {
        pursue(enemy6PosRef.current.x, enemy6PosRef.current.y, 6);
      } else if (Math.abs(enemy6PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy6PosRef.current.y - playerPos.y) >= 15 && enemy6MoveBehaviorRef.current === true) {
        patrol(enemy6PosRef.current.x, enemy6PosRef.current.y, 6);
      }
      confirmEnemyBehavior(7, move);
    }
    //}, (5000))

    //setTimeout(() => {
    if (key === 7 && enemy7 && enemy7Sleeping === false) {
      var enemy7Move1 = ENEMY_DEFS[enemyType7].moves[0];
      var _wallCheck6 = checkAttackPath(7);
      console.log('wallcheck for enemy 7:', _wallCheck6);
      if (enemy7Move1.alignment === 'same-direction') {
        if (_wallCheck6 === true && (Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) <= enemy7Move1.range || Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy7PosRef.current.y - playerPosRef.current.y))) {
          setEnemy7Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy7Move1, 7);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy7PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy7PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy7Move1.range);
          confirmEnemyBehavior(8, move + 1);
          return;
        }
      }
      if (Math.abs(enemy7PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy7PosRef.current.y - playerPos.y) < 15 && enemy7MoveBehaviorRef.current === true) {
        pursue(enemy7PosRef.current.x, enemy7PosRef.current.y, 7);
      } else if (Math.abs(enemy7PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy7PosRef.current.y - playerPos.y) >= 15 && enemy7MoveBehaviorRef.current === true) {
        patrol(enemy7PosRef.current.x, enemy7PosRef.current.y, 7);
      }
      confirmEnemyBehavior(8, move);
    }
    //}, (6000))

    //setTimeout(() => {
    if (key === 8 && enemy8 && enemy8Sleeping === false) {
      var enemy8Move1 = ENEMY_DEFS[enemyType8].moves[0];
      var _wallCheck7 = checkAttackPath(8);
      console.log('wallcheck for enemy 8:', _wallCheck7);
      if (enemy8Move1.alignment === 'same-direction') {
        if (_wallCheck7 === true && (Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) <= enemy8Move1.range || Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy8PosRef.current.y - playerPosRef.current.y))) {
          setEnemy8Attacking(true);
          setTimeout(function () {
            return enemyUseMove(enemy8Move1, 8);
          }, (4600 + turnIntervalMs) * move);
          console.log('triggered with', 'enemyx', enemy8PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy8PosRef.current.y, 'playery', playerPosRef.current.y);
          console.log('range:', enemy8Move1.range);
          return;
        }
      }
      if (Math.abs(enemy8PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy8PosRef.current.y - playerPos.y) < 15 && enemy8MoveBehaviorRef.current === true) {
        pursue(enemy8PosRef.current.x, enemy8PosRef.current.y, 8);
      } else if (Math.abs(enemy8PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy8PosRef.current.y - playerPos.y) >= 15 && enemy8MoveBehaviorRef.current === true) {
        patrol(enemy8PosRef.current.x, enemy8PosRef.current.y, 8);
      }
    }
    //}, (7000))
  }
  function spawnEnemy(dungeonLocal, room, enemy) {
    // validate dungeonLocal
    if (!Array.isArray(dungeonLocal) || dungeonLocal.length === 0 || !Array.isArray(dungeonLocal[0])) {
      console.warn('spawnEnemy: invalid dungeonLocal, skipping spawn');
      return null;
    }
    var cols = dungeonLocal[0].length;
    var rows = dungeonLocal.length;

    // clamp room bounds to dungeon bounds
    var minX = Math.max(0, room.x + 1);
    var maxX = Math.min(cols - 1, room.x + room.w - 1);
    var minY = Math.max(0, room.y + 1);
    var maxY = Math.min(rows - 1, room.y + room.h - 1);

    // collect all valid floor tiles INSIDE the room first
    var roomFloorTiles = [];
    var _loop7 = function _loop7(yy) {
      if (!dungeonLocal[yy]) return 1; // continue
      var _loop8 = function _loop8(_xx) {
        if (room.center.x === _xx && room.center.y === yy) return 1; // continue
        // skip room center to avoid blocking player spawn
        var c = dungeonLocal[yy][_xx];
        if (typeof c !== 'undefined' && c !== 'W' && c !== 'S' && c !== playerPos.x && c !== playerPos.y && !enemyHereTilesRef.current.find(function (tile) {
          return tile.x === _xx && tile.y === yy && !itemTilesRef.current.find(function (tile) {
            return tile.x === _xx && tile.y === yy;
          });
        })) roomFloorTiles.push({
          x: _xx,
          y: yy
        });
      };
      for (var _xx = minX; _xx <= maxX; _xx++) {
        if (_loop8(_xx)) continue;
      }
    };
    for (var yy = minY; yy <= maxY; yy++) {
      if (_loop7(yy)) continue;
    }
    var spawnX = null,
      spawnY = null;
    if (roomFloorTiles.length) {
      var pick = roomFloorTiles[randInt(0, roomFloorTiles.length)];
      spawnX = pick.x;
      spawnY = pick.y;
    } else {
      // fallback: try random attempts within clamped box (keeps previous behavior but only within room bounds)
      var maxAttempts = 200;
      for (var attempt = 0; attempt < maxAttempts; attempt++) {
        var tx = randInt(minX, maxX + 1);
        var ty = randInt(minY, maxY + 1);
        if (!dungeonLocal[ty] || typeof dungeonLocal[ty][tx] === 'undefined') continue;
        var cell = dungeonLocal[ty][tx];
        if (cell !== 'W' && cell !== 'S') {
          spawnX = tx;
          spawnY = ty;
          break;
        }
      }
    }

    // last resort: scan whole dungeon for any floor tile (only if room interior had none)
    if (spawnX === null) {
      for (var _yy = 0; _yy < rows && spawnX === null; _yy++) {
        for (var xx = 0; xx < cols; xx++) {
          var c = dungeonLocal[_yy][xx];
          if (typeof c !== 'undefined' && c !== 'W' && c !== 'S') {
            spawnX = xx;
            spawnY = _yy;
            break;
          }
        }
      }
      console.warn('spawnEnemy: no free tile found in room, scanning whole dungeon, found at', spawnX, spawnY);
    }

    // final fallback to room center clamped
    if (spawnX === null) {
      spawnX = Math.min(Math.max(room.center.x, 0), cols - 1);
      spawnY = Math.min(Math.max(room.center.y, 0), rows - 1);
      console.warn('spawnEnemy: could not find free tile, using room center', spawnX, spawnY);
    }
    var def = ENEMY_DEFS[enemy] || {};
    var enemyObj = {
      key: enemy,
      name: def.name || String(enemy),
      type: def.type || 'Unknown',
      pos: {
        x: spawnX,
        y: spawnY
      },
      hp: def.maxHp || def.hp || 0,
      maxHp: def.maxHp || def.hp || 0,
      attack: def.attack || 0,
      defense: def.defense || 0,
      speed: def.speed || 0,
      specialAttack: def.specialAttack || 0,
      specialDefense: def.specialDefense || 0,
      sprites: def.sprites || {},
      roomId: typeof room.id !== 'undefined' ? room.id : null
    };

    // push into the shared enemies array (keep existing behavior)

    return enemyObj;
  }
  function updateEnemyPosition(tilex, tiley) {
    var enemy = enemiesRef.current.find(function (enemy) {
      return enemy.posx.x === tilex && enemy.posy.y === tiley;
    });
    if (enemy) {
      setEnemyHere(enemy);
    } else {
      setEnemyHere(null);
    }
  }
  function verifyEnemyGeneration(enemyCount) {
    if (enemyCount < 1) return;else if (enemyCount < 2) {
      setEnemy1(true);
    } else if (enemyCount < 3) {
      setEnemy1(true);
      setEnemy2(true);
    } else if (enemyCount < 4) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
    } else if (enemyCount < 5) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
      setEnemy4(true);
    } else if (enemyCount < 6) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
      setEnemy4(true);
      setEnemy5(true);
    } else if (enemyCount < 7) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
      setEnemy4(true);
      setEnemy5(true);
      setEnemy6(true);
    } else if (enemyCount < 8) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
      setEnemy4(true);
      setEnemy5(true);
      setEnemy6(true);
      setEnemy7(true);
    } else if (enemyCount < 9) {
      setEnemy1(true);
      setEnemy2(true);
      setEnemy3(true);
      setEnemy4(true);
      setEnemy5(true);
      setEnemy6(true);
      setEnemy7(true);
      setEnemy8(true);
    }
    return;
  }
  React.useEffect(function () {
    enemiesRef.current = enemies;
    enemyHereTilesRef.current = enemies.map(function (enemy) {
      return {
        x: enemy.pos.x,
        y: enemy.pos.y,
        sprite: enemy.sprite
      };
    });
  }, [enemies]);
  function useSelectedItem(target, item, id) {
    playSound(affirmativesfx);
    if (item === 'Life Seed') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setMaxPlayerHP(function (prev) {
          return prev + 5;
        });
        setPlayerHunger(function (prev) {
          return Math.min(prev + 3, maxPlayerHunger);
        });
        addLogMessage('Used Life Seed! Max HP increased!');
      }
    } else if (item === 'Sleep Seed') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setIsSleeping(true);
        setPlayerHunger(function (prev) {
          return Math.min(prev + 3, maxPlayerHunger);
        });
        addLogMessage('Vaporeon fell asleep!');
        setTimeout(function () {
          setIsSleeping(false);
          addLogMessage('Vaporeon woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy1') {
        setEnemy1Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType1].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy1Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType1].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy2') {
        setEnemy2Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType2].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy2Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType2].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy3') {
        setEnemy3Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType3].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy3Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType3].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy4') {
        setEnemy4Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType4].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy4Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType4].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy5') {
        setEnemy5Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType5].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy5Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType5].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy6') {
        setEnemy6Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType6].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy6Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType6].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy7') {
        setEnemy7Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType7].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy7Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType7].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      } else if (target === 'enemy8') {
        setEnemy8Sleeping(true);
        addLogMessage(ENEMY_DEFS[enemyType8].name + ' fell asleep!');
        setTimeout(function () {
          setEnemy8Sleeping(false);
          addLogMessage(ENEMY_DEFS[enemyType8].name + ' woke up!');
        }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
      }
    } else if (item === 'Warp Seed') {
      console.log(target);
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        var floorPositions = [];
        setPlayerHunger(function (prev) {
          return Math.min(prev + 3, maxPlayerHunger);
        });
        for (var y = 0; y < dungeon.length; y++) {
          for (var x = 0; x < dungeon[0].length; x++) {
            if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y)) {
              floorPositions.push({
                x: x,
                y: y
              });
            }
          }
        }
        if (floorPositions.length > 0) {
          var randIndex = randInt(0, floorPositions.length);
          var newPos = floorPositions[randIndex];
          setPlayerPos({
            x: newPos.x,
            y: newPos.y
          });
          cameraTargetRef.current = {
            x: newPos.x,
            y: newPos.y
          };
          startCameraLoop();
          addLogMessage('Used Warp Seed! Teleported to a random location!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy1') {
        var _floorPositions = [];
        for (var _y = 0; _y < dungeon.length; _y++) {
          for (var _x = 0; _x < dungeon[0].length; _x++) {
            if (dungeon[_y][_x] !== 'W' && dungeon[_y][_x] !== 'S' && (_x !== enemy1PosRef.current.x || _y !== enemy1PosRef.current.y)) {
              _floorPositions.push({
                x: _x,
                y: _y
              });
            }
          }
        }
        if (_floorPositions.length > 0) {
          var _randIndex = randInt(0, _floorPositions.length);
          var _newPos = _floorPositions[_randIndex];
          setEnemy1Pos({
            x: _newPos.x,
            y: _newPos.y
          });
          addLogMessage(ENEMY_DEFS[enemyType1].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy2') {
        var _floorPositions2 = [];
        for (var _y2 = 0; _y2 < dungeon.length; _y2++) {
          for (var _x2 = 0; _x2 < dungeon[0].length; _x2++) {
            if (dungeon[_y2][_x2] !== 'W' && dungeon[_y2][_x2] !== 'S' && (_x2 !== enemy2PosRef.current.x || _y2 !== enemy2PosRef.current.y)) {
              _floorPositions2.push({
                x: _x2,
                y: _y2
              });
            }
          }
        }
        if (_floorPositions2.length > 0) {
          var _randIndex2 = randInt(0, _floorPositions2.length);
          var _newPos2 = _floorPositions2[_randIndex2];
          setEnemy2Pos({
            x: _newPos2.x,
            y: _newPos2.y
          });
          addLogMessage(ENEMY_DEFS[enemyType2].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy3') {
        var _floorPositions3 = [];
        for (var _y3 = 0; _y3 < dungeon.length; _y3++) {
          for (var _x3 = 0; _x3 < dungeon[0].length; _x3++) {
            if (dungeon[_y3][_x3] !== 'W' && dungeon[_y3][_x3] !== 'S' && (_x3 !== enemy3PosRef.current.x || _y3 !== enemy3PosRef.current.y)) {
              _floorPositions3.push({
                x: _x3,
                y: _y3
              });
            }
          }
        }
        if (_floorPositions3.length > 0) {
          var _randIndex3 = randInt(0, _floorPositions3.length);
          var _newPos3 = _floorPositions3[_randIndex3];
          setEnemy3Pos({
            x: _newPos3.x,
            y: _newPos3.y
          });
          addLogMessage(ENEMY_DEFS[enemyType3].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy4') {
        var _floorPositions4 = [];
        for (var _y4 = 0; _y4 < dungeon.length; _y4++) {
          for (var _x4 = 0; _x4 < dungeon[0].length; _x4++) {
            if (dungeon[_y4][_x4] !== 'W' && dungeon[_y4][_x4] !== 'S' && (_x4 !== enemy4PosRef.current.x || _y4 !== enemy4PosRef.current.y)) {
              _floorPositions4.push({
                x: _x4,
                y: _y4
              });
            }
          }
        }
        if (_floorPositions4.length > 0) {
          var _randIndex4 = randInt(0, _floorPositions4.length);
          var _newPos4 = _floorPositions4[_randIndex4];
          setEnemy4Pos({
            x: _newPos4.x,
            y: _newPos4.y
          });
          addLogMessage(ENEMY_DEFS[enemyType4].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy5') {
        var _floorPositions5 = [];
        for (var _y5 = 0; _y5 < dungeon.length; _y5++) {
          for (var _x5 = 0; _x5 < dungeon[0].length; _x5++) {
            if (dungeon[_y5][_x5] !== 'W' && dungeon[_y5][_x5] !== 'S' && (_x5 !== enemy5PosRef.current.x || _y5 !== enemy5PosRef.current.y)) {
              _floorPositions5.push({
                x: _x5,
                y: _y5
              });
            }
          }
        }
        if (_floorPositions5.length > 0) {
          var _randIndex5 = randInt(0, _floorPositions5.length);
          var _newPos5 = _floorPositions5[_randIndex5];
          setEnemy5Pos({
            x: _newPos5.x,
            y: _newPos5.y
          });
          addLogMessage(ENEMY_DEFS[enemyType5].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy6') {
        var _floorPositions6 = [];
        for (var _y6 = 0; _y6 < dungeon.length; _y6++) {
          for (var _x6 = 0; _x6 < dungeon[0].length; _x6++) {
            if (dungeon[_y6][_x6] !== 'W' && dungeon[_y6][_x6] !== 'S' && (_x6 !== enemy6PosRef.current.x || _y6 !== enemy6PosRef.current.y)) {
              _floorPositions6.push({
                x: _x6,
                y: _y6
              });
            }
          }
        }
        if (_floorPositions6.length > 0) {
          var _randIndex6 = randInt(0, _floorPositions6.length);
          var _newPos6 = _floorPositions6[_randIndex6];
          setEnemy6Pos({
            x: _newPos6.x,
            y: _newPos6.y
          });
          addLogMessage(ENEMY_DEFS[enemyType6].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy7') {
        var _floorPositions7 = [];
        for (var _y7 = 0; _y7 < dungeon.length; _y7++) {
          for (var _x7 = 0; _x7 < dungeon[0].length; _x7++) {
            if (dungeon[_y7][_x7] !== 'W' && dungeon[_y7][_x7] !== 'S' && (_x7 !== enemy7PosRef.current.x || _y7 !== enemy7PosRef.current.y)) {
              _floorPositions7.push({
                x: _x7,
                y: _y7
              });
            }
          }
        }
        if (_floorPositions7.length > 0) {
          var _randIndex7 = randInt(0, _floorPositions7.length);
          var _newPos7 = _floorPositions7[_randIndex7];
          setEnemy7Pos({
            x: _newPos7.x,
            y: _newPos7.y
          });
          addLogMessage(ENEMY_DEFS[enemyType7].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      } else if (target === 'enemy8') {
        var _floorPositions8 = [];
        for (var _y8 = 0; _y8 < dungeon.length; _y8++) {
          for (var _x8 = 0; _x8 < dungeon[0].length; _x8++) {
            if (dungeon[_y8][_x8] !== 'W' && dungeon[_y8][_x8] !== 'S' && (_x8 !== enemy8PosRef.current.x || _y8 !== enemy8PosRef.current.y)) {
              _floorPositions8.push({
                x: _x8,
                y: _y8
              });
            }
          }
        }
        if (_floorPositions8.length > 0) {
          var _randIndex8 = randInt(0, _floorPositions8.length);
          var _newPos8 = _floorPositions8[_randIndex8];
          setEnemy8Pos({
            x: _newPos8.x,
            y: _newPos8.y
          });
          addLogMessage(ENEMY_DEFS[enemyType8].name + ' warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      }
    } else if (item === 'Joy Seed') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setExp(maxExp);
        setPlayerHunger(function (prev) {
          return Math.min(prev + 3, maxPlayerHunger);
        });
        addLogMessage('Used Joy Seed! Level increased!');
      }
    } else if (item === 'Pure Seed') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        var _floorPositions9 = [];
        setPlayerHunger(function (prev) {
          return Math.min(prev + 3, maxPlayerHunger);
        });
        for (var _y9 = 0; _y9 < dungeon.length; _y9++) {
          for (var _x9 = 0; _x9 < dungeon[0].length; _x9++) {
            if (dungeon[_y9][_x9] !== 'W' && dungeon[_y9][_x9] !== 'S') {
              if (dungeon[_y9 - 1][_x9] === 'S' || dungeon[_y9 + 1][_x9] === 'S' || dungeon[_y9][_x9 - 1] === 'S' || dungeon[_y9][_x9 + 1] === 'S' || dungeon[_y9 - 1][_x9 - 1] === 'S' || dungeon[_y9 - 1][_x9 + 1] === 'S' || dungeon[_y9 + 1][_x9 - 1] === 'S' || dungeon[_y9 + 1][_x9 + 1] === 'S') {
                _floorPositions9.push({
                  x: _x9,
                  y: _y9
                });
              }
            }
          }
        }
        if (_floorPositions9.length > 0) {
          var _randIndex9 = randInt(0, _floorPositions9.length);
          var _newPos9 = _floorPositions9[_randIndex9];
          setPlayerPos({
            x: _newPos9.x,
            y: _newPos9.y
          });
          cameraTargetRef.current = {
            x: _newPos9.x,
            y: _newPos9.y
          };
          startCameraLoop();
          addLogMessage('Used Pure Seed! Teleported to the stairs!');
        } else {
          return;
        }
      }
    } else if (item === 'Protein') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setBasePlayerAttack(function (prev) {
          return prev + 2;
        });
        addLogMessage('Used Protein! Attack increased!');
      }
    } else if (item === 'Calcium') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setBasePlayerSpecialAttack(function (prev) {
          return prev + 2;
        });
        addLogMessage('Used Calcium! Special Attack increased!');
      }
    } else if (item === 'Iron') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setBasePlayerDefense(function (prev) {
          return prev + 2;
        });
        addLogMessage('Used Iron! Defense increased!');
      }
    } else if (item === 'Zinc') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setBasePlayerSpecialDefense(function (prev) {
          return prev + 2;
        });
        addLogMessage('Used Zinc! Special Defense increased!');
      }
    } else if (item === 'Carbos') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setBasePlayerSpeed(function (prev) {
          return prev + 2;
        });
        addLogMessage('Used Carbos! Speed increased!');
      }
    } else if (item === 'Max Ether') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setShowMoveSelector(true);
        setUsingEther(true);
        addLogMessage('Used Max Ether!');
      }
    } else if (item === 'Max Elixir') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        // Restore all moves' PP to max
        Object.keys(MOVE_DEFS).forEach(function (moveName) {
          MOVE_DEFS[moveName].ppcurr = MOVE_DEFS[moveName].ppmax;
        });
        addLogMessage('Used Max Elixir! All move PP restored!');
      }
    } else if (item === 'Apple') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setPlayerHunger(function (prev) {
          return Math.min(prev + 50, maxPlayerHunger);
        });
        addLogMessage('Ate an Apple! Hunger restored.');
      }
    } else if (item === 'Big Apple') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setPlayerHunger(function (prev) {
          return Math.min(prev + 80, maxPlayerHunger);
        });
        addLogMessage('Ate a Big Apple! Hunger restored.');
      }
    } else if (item === 'Golden Apple') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setMaxPlayerHunger(function (prev) {
          return Math.min(prev + 20, 200);
        });
        setPlayerHunger(function (prev) {
          return Math.min(prev + 100, maxPlayerHunger);
        });
        addLogMessage('Ate a Golden Apple! Hunger restored and max hunger increased.');
      }
    } else if (item === 'Grimy Food') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setPlayerHunger(function (prev) {
          return Math.min(prev + 30, maxPlayerHunger);
        });
        addLogMessage('Ate Grimy Food! Hunger restored.');
        //TODO: Implement Grimy Food effects
      }
    }
    //equips
    else if (item === 'Special Band') {
      if (target === 'player') {
        setWillConsumeItemInventory(false);
        if (itemEquipped !== 'Special Band') {
          setItemEquipped('Special Band');
          setItemEquippedId(id);
          addLogMessage('Vaporeon equipped the Special Band!');
        } else if (itemEquipped === 'Special Band') {
          setItemEquipped('');
          setItemEquippedId(null);
          addLogMessage('Vaporeon unequipped the Special Band!');
        }
      }
    } else if (item === 'Zinc Band') {
      if (target === 'player') {
        setWillConsumeItemInventory(false);
        if (itemEquipped !== 'Zinc Band') {
          setItemEquipped('Zinc Band');
          addLogMessage('Vaporeon equipped the Zinc Band!');
          setItemEquippedId(id);
        } else if (itemEquipped === 'Zinc Band') {
          setItemEquipped('');
          setItemEquippedId(null);
          addLogMessage('Vaporeon unequipped the Zinc Band!');
        }
      }
    } else if (item === 'Warp Scarf') {
      if (target === 'player') {
        setWillConsumeItemInventory(false);
        if (itemEquipped !== 'Warp Scarf') {
          setItemEquipped('Warp Scarf');
          setItemEquippedId(id);
          addLogMessage('Vaporeon equipped the Warp Scarf');
        } else if (itemEquipped === 'Warp Scarf') {
          setItemEquipped('');
          setItemEquippedId(null);
          addLogMessage('Vaporeon unequipped the Warp Scarf');
        }
      }
    } else if (item === 'Luminous Orb') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        setExploredTiles(function (prev) {
          var next = new Set(prev);
          for (var yy = 0; yy < dungeon.length; yy++) {
            for (var xx = 0; xx < dungeon[0].length; xx++) {
              next.add(tileKey(xx, yy));
            }
          }
          return next;
        });
      }
    } else if (item === 'Warp Orb') {
      if (target === 'player') {
        setWillConsumeItemInventory(true);
        var _floorPositions0 = [];
        for (var _y0 = 0; _y0 < dungeon.length; _y0++) {
          for (var _x0 = 0; _x0 < dungeon[0].length; _x0++) {
            if (dungeon[_y0][_x0] !== 'W' && dungeon[_y0][_x0] !== 'S' && (_x0 !== playerPos.x || _y0 !== playerPos.y)) {
              _floorPositions0.push({
                x: _x0,
                y: _y0
              });
            }
          }
        }
        if (_floorPositions0.length > 0) {
          var randIndexPlayer = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexPlayer, 1); // Remove player's new position to avoid warping enemy there
          var randIndexEnemy1 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy1, 1); // Remove enemy1's new position
          var randIndexEnemy2 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy2, 1); // Remove enemy2's new position
          var randIndexEnemy3 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy3, 1); // Remove enemy3's new position
          var randIndexEnemy4 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy4, 1); // Remove enemy4's new position
          var randIndexEnemy5 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy5, 1); // Remove enemy5's new position
          var randIndexEnemy6 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy6, 1); // Remove enemy6's new position
          var randIndexEnemy7 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy7, 1); // Remove enemy7's new position
          var randIndexEnemy8 = randInt(0, _floorPositions0.length);
          _floorPositions0.splice(randIndexEnemy8, 1); // Remove enemy8's new position
          var newPosPlayer = _floorPositions0[randIndexPlayer];
          var newPosEnemy1 = _floorPositions0[randIndexEnemy1];
          var newPosEnemy2 = _floorPositions0[randIndexEnemy2];
          var newPosEnemy3 = _floorPositions0[randIndexEnemy3];
          var newPosEnemy4 = _floorPositions0[randIndexEnemy4];
          var newPosEnemy5 = _floorPositions0[randIndexEnemy5];
          var newPosEnemy6 = _floorPositions0[randIndexEnemy6];
          var newPosEnemy7 = _floorPositions0[randIndexEnemy7];
          var newPosEnemy8 = _floorPositions0[randIndexEnemy8];
          setPlayerPos({
            x: newPosPlayer.x,
            y: newPosPlayer.y
          });
          enemy1.x !== 2 ? setEnemy1Pos({
            x: newPosEnemy1.x,
            y: newPosEnemy1.y
          }) : null;
          enemy2.x !== 2 ? setEnemy2Pos({
            x: newPosEnemy2.x,
            y: newPosEnemy2.y
          }) : null;
          enemy3.x !== 2 ? setEnemy3Pos({
            x: newPosEnemy3.x,
            y: newPosEnemy3.y
          }) : null;
          enemy4.x !== 2 ? setEnemy4Pos({
            x: newPosEnemy4.x,
            y: newPosEnemy4.y
          }) : null;
          enemy5.x !== 2 ? setEnemy5Pos({
            x: newPosEnemy5.x,
            y: newPosEnemy5.y
          }) : null;
          enemy6.x !== 2 ? setEnemy6Pos({
            x: newPosEnemy6.x,
            y: newPosEnemy6.y
          }) : null;
          enemy7.x !== 2 ? setEnemy7Pos({
            x: newPosEnemy7.x,
            y: newPosEnemy7.y
          }) : null;
          enemy8.x !== 2 ? setEnemy8Pos({
            x: newPosEnemy8.x,
            y: newPosEnemy8.y
          }) : null;
          addLogMessage('All Pokemon on the floor warped!');
        } else {
          addLogMessage('No valid locations to warp to!');
        }
      }
    } else {
      console.log('Item use not implemented for:', inventory[itemOrder - 1].name);
      return;
    }
    if (willConsumeItemInventoryRef.current === true) {
      setInventory(function (prev) {
        var idx = itemOrder - 1;
        if (idx < 0 || idx >= prev.length) return prev;
        var updated = _toConsumableArray(prev);
        if (updated[idx].count > 1) {
          updated[idx].count -= 1;
        } else {
          updated.splice(idx, 1);
          setNatItemOrder(updated.length);
          setItemOrder(Math.max(1, updated.length));
        }
        if (updated.length < MAX_INVENTORY_SLOTS) {
          setInventoryFull(false);
        }
        return updated;
      });
    }
    setShowItemActionMenu(false);
    confirmEnemyBehavior(1, 0);
    advanceTicks();
    depleteHungerAfterTicks(hungerTicks);
  }
  function discardSelectedItem(item, id) {
    playSound(declinesfx);
    if (itemEquipped === item && itemEquippedId === id) {
      setItemEquipped('');
      setItemEquippedId(null);
      console.log('Item unequipped because it was discarded', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
    } else {
      console.log('Item not unequipped because it was discarded', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
    }
    setInventory(function (prev) {
      var idx = itemOrder - 1; // itemOrder is 1-based
      if (idx < 0 || idx >= prev.length) return prev;
      var updated = _toConsumableArray(prev);
      if (updated[idx].count > 1) {
        updated[idx].count -= 1;
      } else {
        updated.splice(idx, 1);
        setNatItemOrder(updated.length);
        setItemOrder(Math.max(1, updated.length));
      }
      if (updated.length < MAX_INVENTORY_SLOTS) {
        setInventoryFull(false);
      }
      return updated;
    });
    setShowItemActionMenu(false);
  }
  function addItemTile(item) {
    if (willConsumeItemRef.current === true) {
      setWillConsumeItem(false);
      useSelectedItem(targetedRef.current, item.itemName, itemOrder);
      return;
    }
    setItemTiles(function (prev) {
      return [].concat(_toConsumableArray(prev), [item]);
    });
    var itemAdded = _objectSpread({}, item);
    setItemTilesIndex(function (prev) {
      return [].concat(_toConsumableArray(prev), [itemAdded]);
    });
  }
  function startCameraLoop() {
    if (cameraRafRef.current) return;
    var lerp = function lerp(a, b, t) {
      return a + (b - a) * t;
    };
    function step() {
      var cur = cameraPosRef.current;
      var tgt = cameraTargetRef.current;
      var dist = Math.hypot(tgt.x - cur.x, tgt.y - cur.y);
      var t = Math.min(0.2, 0.05 + dist * 0.05);
      var nx = lerp(cur.x, tgt.x, t);
      var ny = lerp(cur.y, tgt.y, t);
      cameraPosRef.current = {
        x: nx,
        y: ny
      };

      // compute pixel offsets like original logic but use current lerped pos
      var offsetX = (20 - nx) * 0.5 + 20; //1
      var offsetY = (-20 - ny) * 0.5 - 225; //-8.5
      var newTransform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px) scale(").concat(zoomLevel, ")");
      if (dungeonRef.current && dungeonRef.current.style.transform !== newTransform) {
        dungeonRef.current.style.transform = newTransform;
        setCameraTransform(newTransform);
      }

      // stop when close enough
      if (Math.abs(tgt.x - nx) > 0.01 || Math.abs(tgt.y - ny) > 0.01) {
        cameraRafRef.current = requestAnimationFrame(step);
      } else {
        cameraRafRef.current = null;
      }
    }
    cameraRafRef.current = requestAnimationFrame(step);
  }
  function stopCameraLoop() {
    if (cameraRafRef.current) {
      cancelAnimationFrame(cameraRafRef.current);
      cameraRafRef.current = null;
    }
  }
  function revealTile(x, y) {
    setExploredTiles(function (prev) {
      var next = new Set(prev);
      next.add(tileKey(Math.floor(x), Math.floor(y)));
      return next;
    });
  }

  // reveal every tile inside a room rectangle
  function revealRoom(room) {
    if (!room) return;
    setExploredTiles(function (prev) {
      var next = new Set(prev);
      for (var yy = room.y; yy < room.y + room.h; yy++) {
        for (var xx = room.x; xx < room.x + room.w; xx++) {
          next.add(tileKey(xx, yy));
        }
      }
      return next;
    });
  }

  // if player enters a room, reveal the whole room
  function revealRoomIfEntered(pos) {
    if (!roomsState || roomsState.length === 0) return;
    var r = roomsState.find(function (room) {
      return pos.x >= room.x && pos.x < room.x + room.w && pos.y >= room.y && pos.y < room.y + room.h;
    });
    if (r) revealRoom(r);
  }

  // draw minimap to canvas (simple, fast)
  function drawMinimap() {
    var canvas = minimapCanvasRef.current;
    if (!canvas || !dungeon || dungeon.length === 0) return;
    var ctx = canvas.getContext('2d');
    var rows = dungeon.length;
    var cols = dungeon[0].length;
    canvas.width = minimapSize;
    canvas.height = minimapSize;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // compute tile size and center offset to fit dungeon into canvas
    var tileW = Math.max(1, Math.floor(minimapSize / cols));
    var tileH = Math.max(1, Math.floor(minimapSize / rows));
    var t = Math.max(1, Math.min(tileW, tileH));
    var mapW = t * cols;
    var mapH = t * rows;
    var offX = Math.floor((canvas.width - mapW) / 2);
    var offY = Math.floor((canvas.height - mapH) / 2);
    // draw explored tiles, walls and floors
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var k = tileKey(x, y);
        var explored = exploredTiles.has(k);
        var px = offX + x * t;
        var py = offY + y * t;
        if (!explored) {
          // fog (semi-transparent dark)
          ctx.fillStyle = 'rgba(0,0,0,0.8)';
          ctx.fillRect(px, py, t, t);
          continue;
        }
        var cell = dungeon[y][x];
        if (cell === 'W') {
          ctx.fillStyle = 'rgba(80,80,80,0.95)'; // wall color
        } else if (cell === 'S') {
          ctx.fillStyle = 'rgba(220,200,50,0.95)'; // stairs color
        } else {
          ctx.fillStyle = 'rgba(170,200,220,0.95)'; // floor color
        }
        ctx.fillRect(px, py, t, t);
      }
    }

    // draw items / currency (optional small dots)
    if (itemTiles && itemTiles.length) {
      ctx.fillStyle = 'rgba(255,200,0,0.95)';
      itemTiles.forEach(function (it) {
        var k = tileKey(Math.floor(it.x), Math.floor(it.y));
        if (!exploredTiles.has(k)) return;
        var px = offX + Math.floor(it.x) * t;
        var py = offY + Math.floor(it.y) * t;
        ctx.fillRect(px + Math.floor(t / 3), py + Math.floor(t / 3), Math.max(1, Math.floor(t / 3)), Math.max(1, Math.floor(t / 3)));
      });
    }

    // draw stairs prominently if explored
    if (stairs) {
      var _k = tileKey(stairs.x, stairs.y);
      if (exploredTiles.has(_k)) {
        ctx.fillStyle = 'rgba(255,220,100,1)';
        ctx.fillRect(offX + stairs.x * t, offY + stairs.y * t, t, t);
      }
    }

    // draw player as a small circle on top
    if (playerPos) {
      var _px = offX + Math.floor(playerPos.x) * t + t / 2;
      var _py = offY + Math.floor(playerPos.y) * t + t / 2;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(220,60,60,1)';
      ctx.arc(_px, _py, Math.max(1, t / 2.2), 0, Math.PI * 2);
      ctx.fill();
    }

    // subtle border
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.strokeRect(offX + 0.5, offY + 0.5, mapW - 1, mapH - 1);
  }

  // ensure minimap redraws when relevant state changes
  React.useEffect(function () {
    drawMinimap();
  }, [dungeon, exploredTiles, playerPos, stairs, itemTiles, minimapSize]);

  // when player moves, reveal tile and possibly whole room
  React.useEffect(function () {
    if (!dungeon || dungeon.length === 0) return;
    revealTile(playerPos.x, playerPos.y);
    revealRoomIfEntered(playerPos);
  }, [playerPos, roomsState]);

  // Insert spawnProjectile helper (adds and animates a projectile using rAF)
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function arcOffset(t, arcHeight) {
    return 4 * arcHeight * t * (1 - t);
  }
  function spawnProjectile(opts) {
    var start = opts.start,
      end = opts.end,
      sprite = opts.sprite,
      _opts$duration = opts.duration,
      duration = _opts$duration === void 0 ? 700 : _opts$duration,
      _opts$arcHeight = opts.arcHeight,
      arcHeight = _opts$arcHeight === void 0 ? 2 : _opts$arcHeight;
    var id = 'proj_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    var startTs = performance.now();
    var animFrameId = null;
    var timeoutId = null;

    // add initial projectile
    setProjectiles(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        id: id,
        sprite: sprite,
        x: playerPos.x + 0.25,
        y: playerPos.y + 0.25
      }]);
    });
    function step(now) {
      var elapsed = now - startTs;
      var t = Math.min(1, elapsed / duration);
      var x = lerp(start.x, end.x, t);
      var y = lerp(start.y, end.y, t) - arcOffset(t, arcHeight);

      // Only update the specific projectile using findIndex for efficiency
      setProjectiles(function (prev) {
        var idx = prev.findIndex(function (p) {
          return p.id === id;
        });
        if (idx === -1) return prev;
        var updated = _toConsumableArray(prev);
        updated[idx] = _objectSpread(_objectSpread({}, updated[idx]), {}, {
          x: x,
          y: y
        });
        return updated;
      });
      if (t < 1) {
        animFrameId = requestAnimationFrame(step);
      } else {
        // remove after a short delay
        timeoutId = setTimeout(function () {
          return setProjectiles(function (prev) {
            return prev.filter(function (p) {
              return p.id !== id;
            });
          });
        }, 50);
      }
    }
    animFrameId = requestAnimationFrame(step);

    // Return cleanup function
    return function () {
      if (animFrameId !== null) cancelAnimationFrame(animFrameId);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }
  function itemThrown(item, id) {
    playSound(affirmativesfx);
    if (item.name === itemEquipped && itemEquippedId === id) {
      setItemEquipped('');
      setItemEquippedId(null);
      console.log('Item unequipped because it was thrown', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
    } else {
      console.log('Item not unequipped because it was thrown', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
    }
    var startPos = {
      x: playerPos.x + 0.25,
      y: playerPos.y
    }; // center of player's tile
    var dir = lastDirectionRef.current || 'right';
    var dirMap = {
      up: {
        x: 0,
        y: -6
      },
      down: {
        x: 0,
        y: 6
      },
      left: {
        x: -6,
        y: 0
      },
      right: {
        x: 6,
        y: 0
      },
      'up-left': {
        x: -4,
        y: -4
      },
      'up-right': {
        x: 4,
        y: -4
      },
      'down-left': {
        x: -4,
        y: 4
      },
      'down-right': {
        x: 4,
        y: 4
      }
    };
    var wallChecks = {
      up: {
        x: 0,
        y: -1
      },
      down: {
        x: 0,
        y: 1
      },
      left: {
        x: -1,
        y: 0
      },
      right: {
        x: 1,
        y: 0
      },
      'up-left': {
        x: -1,
        y: -1
      },
      'up-right': {
        x: 1,
        y: -1
      },
      'down-left': {
        x: -1,
        y: 1
      },
      'down-right': {
        x: 1,
        y: 1
      }
    };
    var delta = dirMap[dir] || dirMap.right;
    var wallCheck1 = wallChecks[dir] || wallChecks.right;
    var wallCheck2 = {
      x: wallCheck1.x * 2,
      y: wallCheck1.y * 2
    };
    var wallCheck3 = {
      x: wallCheck1.x * 3,
      y: wallCheck1.y * 3
    };
    var wallCheck4 = {
      x: wallCheck1.x * 4,
      y: wallCheck1.y * 4
    };
    var wallCheck5 = {
      x: wallCheck1.x * 5,
      y: wallCheck1.y * 5
    };
    var wallCheck6 = {
      x: wallCheck1.x * 6,
      y: wallCheck1.y * 6
    };
    verifyPlayerPosition(playerPosRef.current.x, playerPosRef.current.y);
    enemy1 ? verifyEnemyPosition(enemy1PosRef.current.x, enemy1PosRef.current.y, 1) : 0;
    enemy2 ? verifyEnemyPosition(enemy2PosRef.current.x, enemy2PosRef.current.y, 2) : 0;
    enemy3 ? verifyEnemyPosition(enemy3PosRef.current.x, enemy3PosRef.current.y, 3) : 0;
    enemy4 ? verifyEnemyPosition(enemy4PosRef.current.x, enemy4PosRef.current.y, 4) : 0;
    enemy5 ? verifyEnemyPosition(enemy5PosRef.current.x, enemy5PosRef.current.y, 5) : 0;
    enemy6 ? verifyEnemyPosition(enemy6PosRef.current.x, enemy6PosRef.current.y, 6) : 0;
    enemy7 ? verifyEnemyPosition(enemy7PosRef.current.x, enemy7PosRef.current.y, 7) : 0;
    enemy8 ? verifyEnemyPosition(enemy8PosRef.current.x, enemy8PosRef.current.y, 8) : 0;
    // Adjust delta if there's a wall in the way
    if (dungeon[playerPos.y + wallCheck1.y][playerPos.x + wallCheck1.x] === 'W') {
      delta.x = wallCheck1.x - wallCheck1.x;
      delta.y = wallCheck1.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck1.y === enemy1PosRef.current.y && playerPos.x + wallCheck1.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck1.y === enemy2PosRef.current.y && playerPos.x + wallCheck1.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck1.y === enemy3PosRef.current.y && playerPos.x + wallCheck1.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck1.y === enemy4PosRef.current.y && playerPos.x + wallCheck1.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck1.y === enemy5PosRef.current.y && playerPos.x + wallCheck1.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck1.y === enemy6PosRef.current.y && playerPos.x + wallCheck1.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck1.y === enemy7PosRef.current.y && playerPos.x + wallCheck1.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck1.y === enemy8PosRef.current.y && playerPos.x + wallCheck1.x === enemy8PosRef.current.x) {
      delta.x = wallCheck1.x;
      delta.y = wallCheck1.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    } else if (dungeon[playerPos.y + wallCheck2.y][playerPos.x + wallCheck2.x] === 'W') {
      delta.x = wallCheck2.x - wallCheck1.x;
      delta.y = wallCheck2.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck2.y === enemy1PosRef.current.y && playerPos.x + wallCheck2.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck2.y === enemy2PosRef.current.y && playerPos.x + wallCheck2.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck2.y === enemy3PosRef.current.y && playerPos.x + wallCheck2.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck2.y === enemy4PosRef.current.y && playerPos.x + wallCheck2.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck2.y === enemy5PosRef.current.y && playerPos.x + wallCheck2.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck2.y === enemy6PosRef.current.y && playerPos.x + wallCheck2.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck2.y === enemy7PosRef.current.y && playerPos.x + wallCheck2.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck2.y === enemy8PosRef.current.y && playerPos.x + wallCheck2.x === enemy8PosRef.current.x) {
      delta.x = wallCheck2.x;
      delta.y = wallCheck2.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    } else if (dungeon[playerPos.y + wallCheck3.y][playerPos.x + wallCheck3.x] === 'W') {
      delta.x = wallCheck3.x - wallCheck1.x;
      delta.y = wallCheck3.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck3.y === enemy1PosRef.current.y && playerPos.x + wallCheck3.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck3.y === enemy2PosRef.current.y && playerPos.x + wallCheck3.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck3.y === enemy3PosRef.current.y && playerPos.x + wallCheck3.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck3.y === enemy4PosRef.current.y && playerPos.x + wallCheck3.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck3.y === enemy5PosRef.current.y && playerPos.x + wallCheck3.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck3.y === enemy6PosRef.current.y && playerPos.x + wallCheck3.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck3.y === enemy7PosRef.current.y && playerPos.x + wallCheck3.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck3.y === enemy8PosRef.current.y && playerPos.x + wallCheck3.x === enemy8PosRef.current.x) {
      delta.x = wallCheck3.x;
      delta.y = wallCheck3.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    } else if (dungeon[playerPos.y + wallCheck4.y][playerPos.x + wallCheck4.x] === 'W') {
      delta.x = wallCheck4.x - wallCheck1.x;
      delta.y = wallCheck4.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck4.y === enemy1PosRef.current.y && playerPos.x + wallCheck4.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck4.y === enemy2PosRef.current.y && playerPos.x + wallCheck4.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck4.y === enemy3PosRef.current.y && playerPos.x + wallCheck4.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck4.y === enemy4PosRef.current.y && playerPos.x + wallCheck4.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck4.y === enemy5PosRef.current.y && playerPos.x + wallCheck4.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck4.y === enemy6PosRef.current.y && playerPos.x + wallCheck4.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck4.y === enemy7PosRef.current.y && playerPos.x + wallCheck4.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck4.y === enemy8PosRef.current.y && playerPos.x + wallCheck4.x === enemy8PosRef.current.x) {
      delta.x = wallCheck4.x;
      delta.y = wallCheck4.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    } else if (dungeon[playerPos.y + wallCheck5.y][playerPos.x + wallCheck5.x] === 'W') {
      delta.x = wallCheck5.x - wallCheck1.x;
      delta.y = wallCheck5.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck5.y === enemy1PosRef.current.y && playerPos.x + wallCheck5.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck5.y === enemy2PosRef.current.y && playerPos.x + wallCheck5.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck5.y === enemy3PosRef.current.y && playerPos.x + wallCheck5.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck5.y === enemy4PosRef.current.y && playerPos.x + wallCheck5.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck5.y === enemy5PosRef.current.y && playerPos.x + wallCheck5.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck5.y === enemy6PosRef.current.y && playerPos.x + wallCheck5.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck5.y === enemy7PosRef.current.y && playerPos.x + wallCheck5.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck5.y === enemy8PosRef.current.y && playerPos.x + wallCheck5.x === enemy8PosRef.current.x) {
      delta.x = wallCheck5.x;
      delta.y = wallCheck5.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    } else if (dungeon[playerPos.y + wallCheck6.y][playerPos.x + wallCheck6.x] === 'W') {
      delta.x = wallCheck6.x - wallCheck1.x;
      delta.y = wallCheck6.y - wallCheck1.y;
    } else if (enemy1 && playerPos.y + wallCheck6.y === enemy1PosRef.current.y && playerPos.x + wallCheck6.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck6.y === enemy2PosRef.current.y && playerPos.x + wallCheck6.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck6.y === enemy3PosRef.current.y && playerPos.x + wallCheck6.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck6.y === enemy4PosRef.current.y && playerPos.x + wallCheck6.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck6.y === enemy5PosRef.current.y && playerPos.x + wallCheck6.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck6.y === enemy6PosRef.current.y && playerPos.x + wallCheck6.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck6.y === enemy7PosRef.current.y && playerPos.x + wallCheck6.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck6.y === enemy8PosRef.current.y && playerPos.x + wallCheck6.x === enemy8PosRef.current.x) {
      delta.x = wallCheck6.x;
      delta.y = wallCheck6.y;
      setWillConsumeItem(true);
      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y) {
        setTargeted('enemy1');
      } else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y) {
        setTargeted('enemy2');
      } else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y) {
        setTargeted('enemy3');
      } else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y) {
        setTargeted('enemy4');
      } else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y) {
        setTargeted('enemy5');
      } else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y) {
        setTargeted('enemy6');
      } else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y) {
        setTargeted('enemy7');
      } else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y) {
        setTargeted('enemy8');
      }
    }
    var endPos = {
      x: startPos.x + delta.x,
      y: startPos.y + delta.y + 0.25
    }; // slight y offset for better arc

    // avoid optional chaining (Babel inline): use safe access instead
    var spriteSrc = item.sprite || ITEM_DEFS[item.name] && ITEM_DEFS[item.name].sprite || Reviverseed;
    spawnProjectile({
      start: startPos,
      end: endPos,
      sprite: spriteSrc,
      duration: 1250,
      arcHeight: 2.2
    });
    setTimeout(function () {
      return addItemTile({
        itemName: item.name,
        x: endPos.x - 0.25,
        y: endPos.y - 0.25
      });
    }, 1250);
  }
  React.useEffect(function () {
    setInventoryIndex(getInventoryIndex(inventory, ITEM_DEFS));
  }, [inventory]);

  // Flicker effect: toggle flickerFrame every 500ms if itemSelected is not null
  React.useEffect(function () {
    if (itemSelected === null) return;
    var interval = setInterval(function () {
      setFlickerFrame(function (prev) {
        return prev === 0 ? 1 : 0;
      });
    }, 500); // Flicker every 500ms
    return function () {
      return clearInterval(interval);
    };
  }, [itemSelected]);
  function itemSelectDown() {
    if (natItemOrder > 1) {
      var newOrder = itemOrder + 1;
      if (newOrder > natItemOrder) newOrder = 1;
      setItemOrder(newOrder);
      playSound(selectsfx);
    }
  }
  function itemSelectUp() {
    if (natItemOrder > 1) {
      var newOrder = itemOrder - 1;
      if (newOrder < 1) newOrder = natItemOrder;
      setItemOrder(newOrder);
      playSound(selectsfx);
    }
  }
  function takeStarvationDamage() {
    setPlayerHP(function (prev) {
      return Math.max(prev - 1, 0);
    });
  }
  function advanceTicks() {
    setHungerTicks(function (prev) {
      return prev + randInt(1, 3);
    });
  }
  function depleteHungerAfterTicks(ticks) {
    if (playerHunger / maxPlayerHunger < 0.2) {
      setHungry(true);
      if (!warned) {
        addLogMessage("Vaporeon is starting to get hungry...");
        setWarned(true);
      }
      if (playerHunger === 0) {
        setIsStarving(true);
      }
    } else {
      setHungry(false);
      setWarned(false);
      setIsStarving(false);
    }
    if (ticks > 5) {
      if (isStarving) {
        addLogMessage("Vaporeon is starving!");
        takeStarvationDamage();
        setHungerTicks(0);
      } else {
        depleteHunger(1);
        setHungerTicks(0);
      }
    }
  }
  function depleteHunger(amount) {
    setPlayerHunger(function (prev) {
      return Math.max(prev - amount, 0);
    });
  }
  function handleUnderneath(newX, newY) {
    var pickedCurrency = currencyTiles.find(function (tile) {
      return tile.x === newX && tile.y === newY;
    });
    if (pickedCurrency) {
      setCurrency(function (curr) {
        return curr + pickedCurrency.amount;
      });
      setCurrencyTiles(function (tiles) {
        return tiles.filter(function (tile) {
          return !(tile.x === newX && tile.y === newY);
        });
      });
      addLogMessage("Picked up ".concat(pickedCurrency.amount, " Pokedollars!"));
      return;
    }
    var itemHere = itemTiles.find(function (tile) {
      return tile.x === newX && tile.y === newY;
    });
    if (itemHere) {
      if (!inventoryFull) {
        addItemToInventory(itemHere.itemName || "Reviver Seed");
        setItemTiles(function (tiles) {
          return tiles.filter(function (tile) {
            return !(tile.x === newX && tile.y === newY);
          });
        });
        setItemSelected(itemHere.id);
        setSelectedItemSprite(itemHere.sprite);
        addLogMessage("Picked up ".concat(itemHere.itemName || "Reviver Seed", "!"));
      } else if (inventoryFull) {
        if (inventory.length < MAX_INVENTORY_SLOTS) {
          setInventoryFull(false);
          addItemToInventory(itemHere.itemName || "Reviver Seed");
          setItemTiles(function (tiles) {
            return tiles.filter(function (tile) {
              return !(tile.x === newX && tile.y === newY);
            });
          });
          setItemSelected(itemHere.id);
          addLogMessage("Picked up ".concat(itemHere.itemName || "Reviver Seed", "!"));
          return;
        }
        addLogMessage('Inventory full!');
      }
    }
  }
  function increaseLevel() {
    setLevel(function (prev) {
      return prev + 1;
    });
    setBaseMaxPlayerHP(function (prev) {
      return prev + 10;
    });
    setBasePlayerHP(function (prev) {
      return Math.min(prev + 10, maxPlayerHP);
    });
    setBasePlayerAttack(function (prev) {
      return prev + 2;
    });
    setBasePlayerSpecialAttack(function (prev) {
      return prev + 3;
    });
    setBasePlayerDefense(function (prev) {
      return prev + 2;
    });
    setBasePlayerSpecialDefense(function (prev) {
      return prev + 3;
    });
    setBasePlayerSpeed(function (prev) {
      return prev + 1;
    });
    setLevelVfxIndex(0);
    setIsLevelingUp(true);
    setTimeout(function () {
      setIsLevelingUp(false);
    }, 2250); // Show level up for 2.25 seconds
    // Increase maxExp based on level
    var newMaxExp = Math.floor(100 * Math.pow(1.2, level - 1));
    setMaxExp(newMaxExp);
  }
  if (exp >= maxExp) {
    var overflow = exp - maxExp;
    setExp(overflow);
    increaseLevel();
  }
  function generateProceduralDungeon(width, height) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$roomAttempts = options.roomAttempts,
      roomAttempts = _options$roomAttempts === void 0 ? 120 : _options$roomAttempts,
      _options$minRoomSize = options.minRoomSize,
      minRoomSize = _options$minRoomSize === void 0 ? 5 : _options$minRoomSize,
      _options$maxRoomSize = options.maxRoomSize,
      maxRoomSize = _options$maxRoomSize === void 0 ? 8 : _options$maxRoomSize,
      _options$maxRooms = options.maxRooms,
      maxRooms = _options$maxRooms === void 0 ? 8 : _options$maxRooms,
      _options$minRooms = options.minRooms,
      minRooms = _options$minRooms === void 0 ? 4 : _options$minRooms;
    var dungeon = Array.from({
      length: height
    }, function () {
      return Array(width).fill('W');
    });
    var rooms = [];
    //*
    var _loop9 = function _loop9() {
      var w = randInt(minRoomSize, maxRoomSize + 1);
      var h = randInt(minRoomSize, maxRoomSize + 1);
      var x = randInt(6, width - w - 6);
      var y = randInt(6, height - h - 6);
      var newRoom = makeRoom(x, y, w, h);
      newRoom.id = rooms.length;
      if (rooms.every(function (room) {
        return !roomsOverlap(newRoom, room);
      })) {
        carveRoom(dungeon, newRoom);
        rooms.push(newRoom);
      }
    };
    for (var i = 0; i < roomAttempts && rooms.length < randInt(minRooms, maxRooms + 1); i++) {
      _loop9();
    }
    for (var _i62 = 1; _i62 < rooms.length; _i62++) {
      carveCorridor(dungeon, rooms[_i62 - 1].center, rooms[_i62].center);
    }
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (dungeon[y][x] === 'F') dungeon[y][x] = getRandomFloorTile();
      }
    }
    var lastRoom = rooms[rooms.length - 1];
    if (lastRoom) dungeon[lastRoom.center.y][lastRoom.center.x] = 'S';
    var firstRoom = rooms[0] || {
      center: {
        x: Math.floor(width / 2),
        y: Math.floor(height / 2)
      }
    };
    return {
      dungeon: dungeon,
      playerStart: {
        x: firstRoom.center.x,
        y: firstRoom.center.y
      },
      rooms: rooms // <-- return rooms so caller can reveal whole rooms when entered
    };
  }
  React.useEffect(function () {
    generateDungeon();
  }, [floor]);
  React.useEffect(function () {
    lastDirectionRef.current = lastDirection;
    isPausedRef.current = isPaused;
    isWalkingRef.current = isWalking;
  }, [lastDirection, isPaused, isWalking]);
  React.useEffect(function () {
    setIdleSpriteIndex(0);
    setWalkSpriteIndex(0);
  }, [lastDirection, isWalking]);
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(e) {
      if (showDialog && dialogKey === 0) {
        if (e.key === 'Enter') {
          if (dialogIndex < debugStops.firstStop - 1 && !textSkippedRef.current && !textStoppedRef.current) {
            setDialogIndex(debugStops.firstStop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          } else if (dialogIndex === debugStops.firstStop - 1) {
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          } else if (dialogIndex > debugStops.firstStop - 1 && dialogIndex < debugStops.secondStop - 1 && !textSkippedRef.current && !textStoppedRef.current) {
            setDialogIndex(debugStops.secondStop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          } else if (dialogIndex === debugStops.secondStop - 1) {
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          } else if (dialogIndex > debugStops.secondStop - 1 && dialogIndex < debugStops.thirdStop - 1 && !textSkippedRef.current && !textStoppedRef.current) {
            setDialogIndex(debugStops.thirdStop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          } else if (dialogIndex === debugStops.thirdStop - 1) {
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          } else if (dialogIndex > debugStops.thirdStop - 1 && dialogIndex < debugStops.fourtHPtop - 1 && !textSkippedRef.current && !textStoppedRef.current) {
            setDialogIndex(debugStops.fourtHPtop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          } else if (dialogIndex === debugStops.fourtHPtop - 1) {
            setShowDialog(false);
            setDialogIndex(0);
            setTextSkipped(false);
          }
          return;
        }
      }
      if (showToolbox && !showItemActionMenu) {
        if (e.key === 'w') {
          itemSelectUp();
          return;
        }
        if (e.key === 's') {
          itemSelectDown();
          return;
        }
        // Optionally handle other toolbox-specific keys here
      }
      if (showToolbox && itemSelected !== null) {
        if (showItemActionMenu) {
          // Scroll through actions
          if (e.key === 'w') {
            setItemActionIndex(function (prev) {
              return (prev - 1 + itemActionsNormal.length) % itemActionsNormal.length;
            });
            return;
          }
          if (e.key === 's') {
            setItemActionIndex(function (prev) {
              return (prev + 1) % itemActionsNormal.length;
            });
            return;
          }
        }
        if (e.key === 'Enter') {
          if (!showItemActionMenu) {
            setShowItemActionMenu(true);
            setItemActionIndex(0);
            return;
          } else if (showItemActionMenu) {
            // Use the current value of itemActionIndex immediately
            var _selectedAction = itemActionsNormal[itemActionIndex];
            if (_selectedAction === 'Discard') {
              discardSelectedItem(inventory[itemOrder - 1].name, itemOrder - 1);
            } else if (_selectedAction === 'Throw') {
              var idx = itemOrder - 1;
              var thrownItem = inventory[idx];
              if (!thrownItem) {} else {
                // remove one from stack or remove stack
                setInventory(function (prev) {
                  if (idx < 0 || idx >= prev.length) return prev;
                  var updated = _toConsumableArray(prev);
                  if (updated[idx].count > 1) {
                    updated[idx].count -= 1;
                  } else {
                    updated.splice(idx, 1);
                    setNatItemOrder(updated.length);
                    setItemOrder(Math.max(1, updated.length));
                  }
                  if (updated.length < MAX_INVENTORY_SLOTS) setInventoryFull(false);
                  return updated;
                });

                // visual / state effects (kept from previous logic)
                setIsSpinning(true);
                setShowItemActionMenu(false);
                setShowToolbox(false);
                setIsPaused(false);
                setTimeout(function () {
                  return setIsSpinning(false);
                }, 1350);
                setTimeout(function () {
                  return setIsWalking(true);
                }, 1400);
                setTimeout(function () {
                  return setIsWalking(false);
                }, 1401);

                // actually throw the selected item
                itemThrown(thrownItem, itemOrder - 1);
              }
            } else if (_selectedAction === 'Use') {
              useSelectedItem('player', inventory[itemOrder - 1].name, itemOrder - 1);
              setShowItemActionMenu(false);
              setShowToolbox(false);
              setIsPaused(false);
            }

            // Close action menu
            setShowItemActionMenu(false);
            return;
          }
        }
        if (e.key === 'Escape' && showItemActionMenu) {
          setShowItemActionMenu(false);
          return;
        }
      }
      if (e.key === 'Shift') {
        updateKeyState('shift', true); // Set Shift pressed state to true
        setShowIndicators(function (prev) {
          return !prev;
        }); // show indicators
        return;
      }
      var newX = playerPosRef.current.x;
      var newY = playerPosRef.current.y;

      // If toolbox is open, only handle item selection keys
      if (e.key === 'm' && !usingEther) {
        if (!showMoveSelector) {
          setShowMoveSelector(true);
          return;
        } else {
          setShowMoveSelector(false);
          return;
        }
      }
      if (showMoveSelector) {
        e.preventDefault(); // Prevent default tab behavior
        if (e.key === 'w') {
          if (selectedMove !== 0) {
            setSelectedMove(0);
          } else {
            setSelectedMove(2);
          }
          return;
        }
        if (e.key === 'd') {
          if (selectedMove !== 1) {
            setSelectedMove(1);
          } else {
            setSelectedMove(3);
          }
          return;
        }
        if (e.key === 's') {
          if (selectedMove !== 2) {
            setSelectedMove(2);
          } else {
            setSelectedMove(0);
          }
          return;
        }
        if (e.key === 'a') {
          if (selectedMove !== 3) {
            setSelectedMove(3);
          } else {
            setSelectedMove(1);
          }
          return;
        }
        if (e.key === 'Enter') {
          var selected = moves[selectedMove];
          if (usingEther) {
            MOVE_DEFS[selected.name].ppcurr = MOVE_DEFS[selected.name].ppmax;
            setShowMoveSelector(false);
            setIsPaused(false);
            setUsingEther(false);
            addLogMessage('Restored PP of ' + selected.name + ' using Max Ether!');
            return;
          } else if (!usingEther) {
            if (selected.name === 'Acid Armor') {
              setShowMoveSelector(false);
              setIsPaused(false);
              useMove(selectedMove);
              // Handle move selection logic here
            }
            if (selected.name === 'Aqua Tail') {
              setShowMoveSelector(false);
              setIsPaused(false);
              useMove(selectedMove);
              // Handle move selection logic here
            }
            if (selected.name === 'Water Pulse') {
              setShowMoveSelector(false);
              setIsPaused(false);
              // Handle move selection logic here
            }
            if (selected.name === 'Refresh') {
              setShowMoveSelector(false);
              setIsPaused(false);
              // Handle move selection logic here
            }
          }
          return;
        }
        // Optionally handle other move selector-specific keys here
        return;
      }
      switch (e.key) {
        case 'Escape':
          // Escape key to toggle pause
          if (!showDialog) {
            setIsPaused(function (prev) {
              return !prev;
            });
          }
          return;
          break;
        //up
        case 'w':
          if (isAiming) {
            setLastDirection('up');
          } else if (!showToolbox) {
            newY -= 1; // Move up unless Shift is pressed
            updateKeyState('wHeld', true);
            setLastDirection('up');
          }
          break;
        case 'q':
          //up left
          if (isAiming) {
            setLastDirection('up-left');
          }
          if (!showToolbox) {
            updateKeyState('qHeld', true);
            newY -= 1;
            newX -= 1;
            setLastDirection('up-left');
          }
          break;
        //down
        case 's':
          if (isAiming) {
            setLastDirection('down');
          } else if (!showToolbox) {
            newY += 1; // Move down unless Shift is pressed
            updateKeyState('sHeld', true);
            setLastDirection('down');
          }
          break;
        case 'c':
          //down right
          if (isAiming) {
            setLastDirection('down-right');
          }
          if (!showToolbox) {
            updateKeyState('cHeld', true);
            newY += 1;
            newX += 1;
            setLastDirection('down-right');
          }
          break;
        //left
        case 'a':
          if (isAiming) {
            setLastDirection('left');
          } else if (!showToolbox) {
            newX -= 1; // Move left unless Shift is pressed
            updateKeyState('aHeld', true);
            setLastDirection('left');
          }
          break;
        case 'z':
          if (isAiming) {
            setLastDirection('down-left');
          }
          //down left
          if (!showToolbox) {
            updateKeyState('zHeld', true);
            newY += 1;
            newX -= 1;
            setLastDirection('down-left');
          }
          break;
        //right
        case 'd':
          if (isAiming) {
            setLastDirection('right');
          } else if (!showToolbox) {
            newX += 1; // Move right unless Shift is pressed
            updateKeyState('dHeld', true);
            setLastDirection('right');
          }
          break;
        case 'e':
          if (isAiming) {
            setLastDirection('up-right');
          }
          //up right
          if (!showToolbox) {
            updateKeyState('eHeld', true);
            newY -= 1;
            newX += 1;
            setLastDirection('up-right');
          }
          break;
        case 'p':
          // debug for exp
          setShowDialog(true);
          return;
          break;
        case 'Shift':
          // Shift key to toggle aim mode
          if (inDiagonalMode) {
            setInDiagonalMode(false);
          }
        case 'm':
          setKeyState(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              m: true
            });
          });
          break;
          setIsAiming(function (prev) {
            return !prev;
          });
          return;
        default:
          return;
          break;
        case 'l':
          //quick log
          console.log(projectilePosRef.current);
          addItemToInventory('Sleep Seed');
          return;
          break;
      }

      // Check for collision with walls only if not paused and not holding Shift
      var moveCheck = function () {
        if (isAiming) return {
          ok: false,
          reason: 'isAiming'
        };
        if (isPaused) return {
          ok: false,
          reason: 'isPaused'
        };
        if (enemy1AttackingRef.current === true || enemy2AttackingRef.current === true || enemy3AttackingRef.current === true || enemy4AttackingRef.current === true || enemy5AttackingRef.current === true || enemy6AttackingRef.current === true || enemy7AttackingRef.current === true || enemy8AttackingRef.current === true) return {
          ok: false,
          reason: 'enemy attacking'
        };
        if (ks.current.sheld || ks.current.aheld || ks.current.dheld || ks.current.wheld || ks.current.qheld || ks.current.eheld || ks.current.zheld || ks.current.cheld) return {
          ok: false,
          reason: 'key held'
        };
        if (keyState.shift) return {
          ok: false,
          reason: 'shift held'
        };
        if (isSpinning) return {
          ok: false,
          reason: 'isSpinning'
        };
        if (usingAquaTail) return {
          ok: false,
          reason: 'usingAquaTail'
        };
        if (isSleeping) return {
          ok: false,
          reason: 'isSleeping'
        };
        if (showDialog) return {
          ok: false,
          reason: 'showDialog'
        };
        if (!Array.isArray(dungeon) || dungeon.length === 0) return {
          ok: false,
          reason: 'dungeon not initialized'
        };
        if (!dungeon[newY]) return {
          ok: false,
          reason: 'dungeon row undefined',
          rowLen: dungeon.length
        };
        var tile = dungeon[newY][newX];
        if (tile === 'W') return {
          ok: false,
          reason: 'wall',
          tile: tile
        };
        if (enemy1 && enemy1Pos.x === newX && enemy1Pos.y === newY) return {
          ok: false,
          reason: 'enemy1',
          tile: tile
        };
        if (enemy2 && enemy2Pos.x === newX && enemy2Pos.y === newY) return {
          ok: false,
          reason: 'enemy2',
          tile: tile
        };
        if (enemy3 && enemy3Pos.x === newX && enemy3Pos.y === newY) return {
          ok: false,
          reason: 'enemy3',
          tile: tile
        };
        if (enemy4 && enemy4Pos.x === newX && enemy4Pos.y === newY) return {
          ok: false,
          reason: 'enemy4',
          tile: tile
        };
        if (enemy5 && enemy5Pos.x === newX && enemy5Pos.y === newY) return {
          ok: false,
          reason: 'enemy5',
          tile: tile
        };
        if (enemy6 && enemy6Pos.x === newX && enemy6Pos.y === newY) return {
          ok: false,
          reason: 'enemy6',
          tile: tile
        };
        if (enemy7 && enemy7Pos.x === newX && enemy7Pos.y === newY) return {
          ok: false,
          reason: 'enemy7',
          tile: tile
        };
        if (enemy8 && enemy8Pos.x === newX && enemy8Pos.y === newY) return {
          ok: false,
          reason: 'enemy8',
          tile: tile
        };
        if (typeof tile === 'undefined' || tile === null) return {
          ok: false,
          reason: 'tile undefined',
          tile: tile
        };
        return {
          ok: true,
          reason: 'ok',
          tile: tile
        };
      }();
      if (moveCheck.ok) {
        handleUnderneath(newX, newY);
        verifyPlayerPosition(newX, newY);
        setPlayerPos({
          x: newX,
          y: newY
        });
        advanceTicks();
        depleteHungerAfterTicks(hungerTicks);
        setIsWalking(true);
        triggerWalkCooldown();
        updateCamera(newX, newY);
        confirmEnemyBehavior(1, 0);
      } else {
        console.log('Movement blocked:', moveCheck.reason, 'new:', newX, newY, 'tile:', moveCheck.tile, 'dungeonRows:', Array.isArray(dungeon) ? dungeon.length : 'N/A', 'height/width:', height, width, 'isAiming:', isAiming, 'isPaused:', isPaused, 'shift:', keyState.shift);
      }
      if (newX === stairs.x && newY === stairs.y) {
        alert('You found the stairs! Onward!');
        setFloor(function (prevFloor) {
          return prevFloor + 1;
        });
      }
    };
    var handleKeyUp = function handleKeyUp(e) {
      if (e.key === 'q' && ks.current.qHeld) {
        updateKeyState('qHeld', false);
      }
      if (e.key === 'e' && ks.current.eHeld) {
        updateKeyState('eHeld', false);
      }
      if (e.key === 'z' && ks.current.zHeld) {
        updateKeyState('zHeld', false);
      }
      if (e.key === 'c' && ks.current.cHeld) {
        updateKeyState('cHeld', false);
      }
      if (e.key === 'Shift') {
        updateKeyState('shift', false); // Set Shift pressed state to false
      }
      if (e.key === 'Enter') {
        updateKeyState('Enter', false);
      }
      if (e.key === 'w') {
        updateKeyState('wHeld', false);
      }
      if (e.key === 'a' && ks.current.aHeld) {
        updateKeyState('aHeld', false);
      }
      if (e.key === 's' && ks.current.sHeld) {
        updateKeyState('sHeld', false);
      }
      if (e.key === 'd' && ks.current.dHeld) {
        updateKeyState('dHeld', false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [playerPos, stairs, dungeon, isPaused, keyState, showToolbox, itemOrder, natItemOrder, showItemActionMenu, itemActionIndex, isWalking, isSleeping, showMoveSelector, selectedMove, isSpinning, usingAquaTail, showDialog, dialogKey, dialogIndex, inventory, isAiming]);

  // Replace multiple setInterval animation effects with this single rAF loop + preload
  var ANIM_TIMINGS = {
    idle: 500,
    walk: 300,
    spin: 150,
    sleep: {
      player: 500,
      enemy: 500
    },
    level: 150,
    buff: 150,
    aquaTail: 150,
    rockThrow: 150,
    dialog: dialogSpeed === 'Slow' ? 100 : dialogSpeed === 'Fast' ? 50 : 75
  };
  var animRafRef = React.useRef(null);
  // keep a timestamp per animation so they don't interfere with each other
  var lastAnimTsRef = React.useRef({
    idle: {
      player: 0,
      enemy: 0
    },
    walk: 0,
    spin: 0,
    sleep: {
      player: 0,
      enemy: 0
    },
    level: 0,
    buff: 0,
    aquaTail: 0,
    rockThrow: 0,
    dialog: 0
  });
  var indicesRef = React.useRef({
    idle: {
      player: 0,
      enemy: 0
    },
    walk: 0,
    spin: 0,
    sleep: {
      player: 0,
      enemy: 0
    },
    level: 0,
    buff: 0,
    aquaTail: 0,
    rockThrow: 0,
    dialog: 0
  });

  // Ensure refs reflect current flags/direction (some already exist above)

  React.useEffect(function () {
    lastDirectionRef.current = lastDirection;
    isPausedRef.current = isPaused;
    isWalkingRef.current = isWalking;
  }, [lastDirection, isPaused, isWalking]);

  // Helper: convert raw.githubusercontent URLs to jsDelivr CDN and fallback on image errors
  function cdnify(url) {
    try {
      var u = new URL(url);
      if (u.hostname && u.hostname.includes('raw.githubusercontent.com')) {
        // raw.githubusercontent.com/<user>/<repo>/refs/heads/<branch>/path/to/file
        var parts = u.pathname.split('/').filter(Boolean);
        // Expect at least: [user, repo, 'refs', 'heads', branch, ...path]
        if (parts.length >= 6 && parts[2] === 'refs' && parts[3] === 'heads') {
          var user = parts[0];
          var repo = parts[1];
          var branch = parts[4];
          var path = parts.slice(5).join('/');
          return "https://cdn.jsdelivr.net/gh/".concat(user, "/").concat(repo, "@").concat(branch, "/").concat(path);
        }
      }
    } catch (e) {
      // if parsing fails, fall through and return original
    }
    return url;
  }

  // NEW: robust normalizer + cdn converter for malformed raw URLs (handles both /refs/heads/ and raw/{user}/{repo}/{branch}/ forms
  function normalizeAndCdn(url) {
    if (!url || typeof url !== 'string') return url;
    var s = url.trim();
    try {
      var u = new URL(s);
      var host = u.hostname || '';
      // If it's raw.githubusercontent, convert to jsDelivr and clean common malformations
      if (host.includes('raw.githubusercontent.com')) {
        var parts = u.pathname.split('/').filter(Boolean);
        var user, repo, branch, path;
        // handle raw like /user/repo/branch/...
        if (parts.length >= 4 && parts[2] !== 'refs') {
          user = parts[0];
          repo = parts[1];
          branch = parts[2];
          path = parts.slice(3).join('/');
        }
        // handle raw like /user/repo/refs/heads/branch/...
        else if (parts.length >= 6 && parts[2] === 'refs' && parts[3] === 'heads') {
          user = parts[0];
          repo = parts[1];
          branch = parts[4];
          path = parts.slice(5).join('/');
        } else {
          // fallback to the simple cdnify (keeps original if not convertible)
          return cdnify(s);
        }

        // remove accidental leading encoded spaces in segments (e.g. "/%20Foo.png")
        path = path.replace(/(^|\/)%20+/g, '$1');
        // compress multiple slashes
        path = path.replace(/\/+/g, '/');
        // return jsdelivr gh URL
        return "https://cdn.jsdelivr.net/gh/".concat(user, "/").concat(repo, "@").concat(branch, "/").concat(path);
      }
    } catch (e) {
      // ignore and fall back
    }
    // not raw.githubusercontent — still return original
    return s;
  }

  // Apply normalization to known sprite collections and defs so preload uses CDN-safe URLs
  (function normalizeAllSprites() {
    try {
      // Normalize ITEM_DEFS sprites
      /*
      Object.keys(ITEM_DEFS).forEach(k => {
        if (ITEM_DEFS[k] && ITEM_DEFS[k].sprite) ITEM_DEFS[k].sprite = normalizeAndCdn(ITEM_DEFS[k].sprite);
      });
      */
      // Normalize enemy defs (nested frame objects and arrays)
      Object.keys(ENEMY_DEFS).forEach(function (enemyKey) {
        var e = ENEMY_DEFS[enemyKey];
        if (!e || !e.sprites) return;
        Object.keys(e.sprites).forEach(function (dir) {
          var frames = e.sprites[dir];
          if (!frames) return;
          // If frames is an array
          if (Array.isArray(frames)) {
            for (var i = 0; i < frames.length; i++) {
              frames[i] = normalizeAndCdn(frames[i]);
            }
          } else if (_typeof(frames) === 'object') {
            // object like { frame1: url, frame2: url, ... }
            Object.keys(frames).forEach(function (fk) {
              frames[fk] = normalizeAndCdn(frames[fk]);
            });
          }
        });
      });
      // Normalize the many top-level arrays you use for Vaporeon/Lunatone etc.
      var spriteArrays = [vaporeonSprites, vaporeonLeftSprites, vaporeonRightSprites, vaporeonUpSprites, vaporeonDownWalkSprites, vaporeonUpWalkSprites, vaporeonLeftWalkSprites, vaporeonRightWalkSprites, vaporeonDownRightWalkSprites, vaporeonDownLeftWalkSprites, vaporeonUpRightWalkSprites, vaporeonUpLeftWalkSprites, vaporeonDownSpinSprites, vaporeonUpSpinSprites, vaporeonLeftSpinSprites, vaporeonRightSpinSprites, vaporeonDownLeftSpinSprites, vaporeonDownRightSpinSprites, vaporeonUpLeftSpinSprites, vaporeonUpRightSpinSprites, vaporeonSleepSprites, vaporeonAquaTailUpSprites, vaporeonAquaTailDownSprites, vaporeonAquaTailLeftSprites, vaporeonAquaTailRightSprites, vaporeonAquaTailUpRightSprites, vaporeonAquaTailUpLeftSprites, vaporeonAquaTailDownRightSprites, vaporeonAquaTailDownLeftSprites, lunatoneSprites, lunatoneUpSprites, lunatoneLeftSprites, lunatoneRightSprites, lunatoneUpRightSprites, lunatoneUpLeftSprites, lunatoneDownLeftSprites, lunatoneDownRightSprites, lunatoneSleepSprites, levelVfxFrames, buffVfxFrames, vaporeonUpSpinSprites, vaporeonRightSpinSprites // (repeat-safe)
      ];
      spriteArrays.forEach(function (arr) {
        if (!Array.isArray(arr)) return;
        for (var i = 0; i < arr.length; i++) {
          arr[i] = normalizeAndCdn(arr[i]);
        }
      });
      // Normalize some single URLs
      //if (typeof vaporeonPortraitNormal === 'string') vaporeonPortraitNormal = normalizeAndCdn(vaporeonPortraitNormal);
      //if (typeof Pokedollar === 'string') Pokedollar = normalizeAndCdn(Pokedollar);
      //if (typeof stairSprite === 'string') stairSprite = normalizeAndCdn(stairSprite);

      // Walls / bars
      [wallSpriteLeft, wallSpriteRight, wallSpriteUp, wallSpriteDown, cornerSpriteTopLeft, cornerSpriteTopRight, cornerSpriteBottomLeft, cornerSpriteBottomRight, enclosedWallSprite1, enclosedWallSprite2, enclosedWallSprite3, enclosedWallSprite4, innerCornerTopRight, innerCornerTopLeft, innerCornerBottomRight, innerCornerBottomLeft].forEach(function (val, idx) {
        // these constants are const in your file — if you prefer immutability, convert by reassigning their usages
        // (no-op here if unchanged). We mainly need ENEMY_DEFS and the arrays normalized.
      });
    } catch (e) {
      console.warn('Sprite normalization failed', e);
    }
  })();

  // Global image error listener: if an IMG using raw.githubusercontent fails (429 etc), retry via jsDelivr once.
  window.addEventListener('error', function onImgError(e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG') return;
    var src = t.src || '';
    if (src.includes('raw.githubusercontent.com') && !t.dataset.__triedCdn) {
      t.dataset.__triedCdn = '1';
      t.src = cdnify(src);
    }
  }, true);

  // Preload arrays (call with array of urls) — use cdnify so preloads prefer CDN cached route
  function preloadImages() {
    var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    urls.forEach(function (u) {
      if (!u) return;
      var img = new Image();
      img.src = cdnify(u);
      // also set onerror to try cdnify as an extra safety net (in case listener isn't triggered)
      img.onerror = function () {
        if (!img.dataset.__triedCdn) {
          img.dataset.__triedCdn = '1';
          img.src = cdnify(u);
        }
      };
    });
  }

  // Collect sprite URL arrays to preload (trim or extend as needed)
  React.useEffect(function () {
    var allSprites = [].concat(vaporeonSprites, vaporeonLeftSprites, vaporeonRightSprites, vaporeonUpSprites, vaporeonDownLeftSprites, vaporeonDownRightSprites, vaporeonUpLeftSprites, vaporeonUpRightSprites, vaporeonDownWalkSprites, vaporeonUpWalkSprites, vaporeonLeftWalkSprites, vaporeonRightWalkSprites, vaporeonDownRightWalkSprites, vaporeonDownLeftWalkSprites, vaporeonUpRightWalkSprites, vaporeonUpLeftWalkSprites, vaporeonDownSpinSprites, vaporeonUpSpinSprites, vaporeonLeftSpinSprites, vaporeonRightSpinSprites, vaporeonDownLeftSpinSprites, vaporeonDownRightSpinSprites, vaporeonUpLeftSpinSprites, vaporeonUpRightSpinSprites, vaporeonSleepSprites, vaporeonAquaTailUpSprites, vaporeonAquaTailRightSprites, vaporeonAquaTailLeftSprites, vaporeonAquaTailDownSprites, vaporeonAquaTailUpRightSprites, vaporeonAquaTailUpLeftSprites, vaporeonAquaTailDownRightSprites, vaporeonAquaTailDownLeftSprites, lunatoneSprites, lunatoneLeftSprites, lunatoneRightSprites, lunatoneUpSprites, lunatoneUpRightSprites, lunatoneUpLeftSprites, lunatoneDownLeftSprites, lunatoneDownRightSprites, lunatoneSleepSprites, levelVfxFrames, buffVfxFrames, DebugTextDialog);
    // Add single-file sprites
    var singleSprites = [Pokedollar, stairSprite, itemSelector, vaporeonPortraitNormal];
    singleSprites.forEach(function (u) {
      if (u) allSprites.push(normalizeAndCdn(u));
    });

    // Add every hunger bar (100 -> 0), health bar (100 -> 0), exp bar (0 -> 100)
    // Uses eval so we don't have to hardcode every constant twice; safe inside this script.
    try {
      for (var i = 100; i >= 0; i--) {
        try {
          var h = eval('hungerBarComponent' + i);
          if (h) allSprites.push(normalizeAndCdn(h));
        } catch (e) {/* skip missing */}
      }
      for (var _i63 = 100; _i63 >= 0; _i63--) {
        try {
          var h2 = eval('healthBarComponent' + _i63);
          if (h2) allSprites.push(normalizeAndCdn(h2));
        } catch (e) {/* skip missing */}
      }
      for (var _i64 = 0; _i64 <= 100; _i64++) {
        try {
          var e = eval('expBarComponent' + _i64);
          if (e) allSprites.push(normalizeAndCdn(e));
        } catch (e) {/* skip missing */}
      }
    } catch (e) {
      console.warn('Bar-preload loop failed', e);
    }

    // Deduplicate & preload
    var uniq = Array.from(new Set(allSprites.filter(Boolean)));
    preloadImages(uniq);
  }, []);

  // rAF animation driver
  React.useEffect(function () {
    function step(ts) {
      // Idle
      var elapsedIdlePlayer = ts - (lastAnimTsRef.current.idle.player || 0);
      var elapsedIdleEnemy = ts - (lastAnimTsRef.current.idle.enemy || 0);
      if (elapsedIdleEnemy >= ANIM_TIMINGS.idle) {
        lastAnimTsRef.current.idle.enemy = ts;
        indicesRef.current.idle.enemy = (indicesRef.current.idle.enemy + 1) % (enemyType1 === 'Lunatone' ? lunatoneSprites.length : vaporeonSprites.length);
        if (enemy1Sleeping === false) {
          setEnemy1IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy2Sleeping === false) {
          setEnemy2IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy3Sleeping === false) {
          setEnemy3IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy4Sleeping === false) {
          setEnemy4IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy5Sleeping === false) {
          setEnemy5IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy6Sleeping === false) {
          setEnemy6IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy7Sleeping === false) {
          setEnemy7IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy8Sleeping === false) {
          setEnemy8IdleAnimIndex(indicesRef.current.idle.enemy);
        }
      }
      if (!isWalkingRef.current && !isSpinning && !isSleeping && !isPausedRef.current) {
        if (elapsedIdlePlayer >= ANIM_TIMINGS.idle) {
          lastAnimTsRef.current.idle.player = ts;
          indicesRef.current.idle.player = (indicesRef.current.idle.player + 1) % vaporeonSprites.length;
          setIdleSpriteIndex(indicesRef.current.idle.player);
        }
      }

      // Walk
      var elapsedWalk = ts - (lastAnimTsRef.current.walk || 0);
      if (isWalkingRef.current && !isPausedRef.current) {
        if (elapsedWalk >= ANIM_TIMINGS.walk) {
          lastAnimTsRef.current.walk = ts;
          indicesRef.current.walk = (indicesRef.current.walk + 1) % vaporeonDownWalkSprites.length;
          setWalkSpriteIndex(indicesRef.current.walk);
        }
      }

      // Dialog (overrides other animations)
      var elapsedDialog = ts - (lastAnimTsRef.current.dialog || 0);
      if (showDialogRef.current) {
        if (textAdvanceRef.current) {
          indicesRef.current.dialog = (indicesRef.current.dialog + 1) % DebugTextDialog.length;
          setDialogIndex(indicesRef.current.dialog);
          setTextAdvanceAndRef(false);
          setTextStopped(false);
          setTextSkipped(false);
        }
        if (textSkippedRef.current && !textStoppedRef.current) {
          if (indicesRef.current.dialog < debugStops.firstStop - 1) {
            indicesRef.current.dialog = (debugStops.firstStop - 1) % DebugTextDialog.length;
            setDialogIndex(indicesRef.current.dialog);
            setTextSkipped(false);
          } else if (indicesRef.current.dialog < debugStops.secondStop - 1 && indicesRef.current.dialog >= debugStops.firstStop - 1) {
            indicesRef.current.dialog = (debugStops.secondStop - 1) % DebugTextDialog.length;
            setDialogIndex(indicesRef.current.dialog);
            setTextSkipped(false);
          } else if (indicesRef.current.dialog < debugStops.thirdStop - 1 && indicesRef.current.dialog >= debugStops.secondStop - 1) {
            indicesRef.current.dialog = (debugStops.thirdStop - 1) % DebugTextDialog.length;
            setDialogIndex(indicesRef.current.dialog);
            setTextSkipped(false);
          } else if (indicesRef.current.dialog < debugStops.fourtHPtop - 1 && indicesRef.current.dialog >= debugStops.thirdStop - 1) {
            indicesRef.current.dialog = (debugStops.fourtHPtop - 1) % DebugTextDialog.length;
            setDialogIndex(indicesRef.current.dialog);
            setTextSkipped(false);
          }
        } else if (!textStoppedRef.current && elapsedDialog >= ANIM_TIMINGS.dialog) {
          lastAnimTsRef.current.dialog = ts;
          if (dialogKey === 0) {
            var next = (indicesRef.current.dialog + 1) % DebugTextDialog.length;
            if (next === debugStops.firstStop - 1 || next === debugStops.secondStop - 1 || next === debugStops.thirdStop - 1 || next === debugStops.fourtHPtop - 1) {
              indicesRef.current.dialog = next;
              setDialogIndex(indicesRef.current.dialog);
              setTextStopped(true);
              setTextSkipped(false);
            } else {
              indicesRef.current.dialog = next;
              setDialogIndex(indicesRef.current.dialog);
            }
          }
        }
      }
      // Aqua Tail (use its own timer so spin/idle won't block it)
      var elapsedAqua = ts - (lastAnimTsRef.current.aquaTail || 0);
      if (usingAquaTail) {
        if (elapsedAqua >= ANIM_TIMINGS.aquaTail) {
          lastAnimTsRef.current.aquaTail = ts;
          // use a baseline length that covers all aqua-tail directions (they generally match)
          indicesRef.current.aquaTail = (indicesRef.current.aquaTail + 1) % vaporeonAquaTailDownLeftSprites.length;
          setAquaTailIndex(indicesRef.current.aquaTail);
        }
        // spin frames while aqua-tail is active (separate timer)
        var elapsedSpinDuringAqua = ts - (lastAnimTsRef.current.spin || 0);
        if (elapsedSpinDuringAqua >= ANIM_TIMINGS.aquaTail) {
          lastAnimTsRef.current.spin = ts;
          indicesRef.current.spin = (indicesRef.current.spin + 1) % vaporeonDownSpinSprites.length;
          setSpinSpriteIndex(indicesRef.current.spin);
        }
      }

      // Spin (when not tied to aqua tail)
      var elapsedSpin = ts - (lastAnimTsRef.current.spin || 0);
      if (isSpinning && !usingAquaTail) {
        if (elapsedSpin >= ANIM_TIMINGS.spin) {
          lastAnimTsRef.current.spin = ts;
          indicesRef.current.spin = (indicesRef.current.spin + 1) % vaporeonDownSpinSprites.length;
          setSpinSpriteIndex(indicesRef.current.spin);
        }
      }

      // Sleep
      var elapsedSleepPlayer = ts - (lastAnimTsRef.current.sleep.player || 0);
      var elapsedSleepEnemy = ts - (lastAnimTsRef.current.sleep.enemy || 0);
      if (isSleeping) {
        if (elapsedSleepPlayer >= ANIM_TIMINGS.sleep.player) {
          lastAnimTsRef.current.sleep.player = ts;
          indicesRef.current.sleep.player = (indicesRef.current.sleep.player + 1) % vaporeonSleepSprites.length;
          setSleepSpriteIndex(indicesRef.current.sleep.player);
        }
      }
      if (enemy1Sleeping || enemy2Sleeping || enemy3Sleeping || enemy4Sleeping || enemy5Sleeping || enemy6Sleeping || enemy7Sleeping || enemy8Sleeping) {
        if (elapsedSleepEnemy >= ANIM_TIMINGS.sleep.enemy) {
          lastAnimTsRef.current.sleep.enemy = ts;
          indicesRef.current.sleep.enemy = (indicesRef.current.sleep.enemy + 1) % vaporeonSleepSprites.length;
          setSleepSpriteIndex(indicesRef.current.sleep.enemy);
        }
      }

      // Rock Throw VFX
      var elapsedRockThrow = ts - (lastAnimTsRef.current.rockThrow || 0);
      if (rockThrowRef.current === true) {
        if (elapsedRockThrow >= ANIM_TIMINGS.rockThrow) {
          lastAnimTsRef.current.rockThrow = ts;
          indicesRef.current.rockThrow = (indicesRef.current.rockThrow + 1) % rockThrowVfxFrames.length;
          setRockThrowIndex(indicesRef.current.rockThrow);
        }
      } else {
        // reset rock throw animation when not active
        lastAnimTsRef.current.rockThrow = ts;
        indicesRef.current.rockThrow = 0;
        setRockThrowIndex(0);
      }

      // Level VFX
      var elapsedLevel = ts - (lastAnimTsRef.current.level || 0);
      if (isLevelingUp) {
        if (elapsedLevel >= ANIM_TIMINGS.level) {
          lastAnimTsRef.current.level = ts;
          indicesRef.current.level = (indicesRef.current.level + 1) % levelVfxFrames.length;
          setLevelVfxIndex(indicesRef.current.level);
        }
      }

      // Buff VFX
      var elapsedBuff = ts - (lastAnimTsRef.current.buff || 0);
      if (isBuffing) {
        if (elapsedBuff >= ANIM_TIMINGS.buff) {
          lastAnimTsRef.current.buff = ts;
          indicesRef.current.buff = (indicesRef.current.buff + 1) % buffVfxFrames.length;
          setBuffVfxIndex(indicesRef.current.buff);
        }
      }
      animRafRef.current = requestAnimationFrame(step);
    }
    animRafRef.current = requestAnimationFrame(step);
    return function () {
      if (animRafRef.current) cancelAnimationFrame(animRafRef.current);
      animRafRef.current = null;
    };
  }, [isSpinning, isSleeping, isLevelingUp, isBuffing, usingAquaTail, dialogIndex, dialogSpeed, rockThrow]); // flags that change animation sets

  React.useEffect(function () {
    if (!showDialog) {
      // Reset dialog animation state
      lastAnimTsRef.current.dialog = 0;
      indicesRef.current.dialog = 0;
      setTextSkipped(false);
      setTextStopped(false);
      setTextAdvanceAndRef(false);
      setDialogIndex(0);
    }
  }, [showDialog, textSkipped]);
  React.useEffect(function () {
    if (!usingAquaTail) return;
    var now = performance.now();
    lastAnimTsRef.current.aquaTail = now;
    indicesRef.current.aquaTail = 0;
    setAquaTailIndex(0);

    // Reset spin timing/index used while aqua-tail is active to avoid collisions
    lastAnimTsRef.current.spin = now;
    indicesRef.current.spin = 0;
    setSpinSpriteIndex(0);
  }, [usingAquaTail]);

  // When a spin animation is explicitly activated, reset its timer/index so it doesn't jump
  React.useEffect(function () {
    if (!isSpinning) return;
    var now = performance.now();
    lastAnimTsRef.current.spin = now;
    indicesRef.current.spin = 0;
    setSpinSpriteIndex(0);
  }, [isSpinning]);
  var generateDungeon = function generateDungeon() {
    var stateWidth = width,
      stateHeight = height;
    var _generateProceduralDu = generateProceduralDungeon(stateWidth, stateHeight),
      newDungeon = _generateProceduralDu.dungeon,
      playerStart = _generateProceduralDu.playerStart,
      rooms = _generateProceduralDu.rooms;

    // CRITICAL: Clear all accumulated state on floor change to prevent frame drops
    // Clear projectiles that may have accumulated
    setProjectiles([]);

    // Clear animation timers and indices to prevent stale references from previous floors
    lastAnimTsRef.current = {
      idle: {
        player: 0,
        enemy: 0
      },
      walk: 0,
      spin: 0,
      sleep: {
        player: 0,
        enemy: 0
      },
      level: 0,
      buff: 0,
      aquaTail: 0,
      rockThrow: 0,
      dialog: 0
    };
    indicesRef.current = {
      idle: {
        player: 0,
        enemy: 0
      },
      walk: 0,
      spin: 0,
      sleep: {
        player: 0,
        enemy: 0
      },
      level: 0,
      buff: 0,
      aquaTail: 0,
      rockThrow: 0,
      dialog: 0
    };

    // Clear log messages for clean floor transition
    setActionLog([]);
    setExploredTiles(function () {
      // ensure new Set object so drawMinimap treats it as change
      return new Set();
    });
    if (minimapCanvasRef.current) {
      var c = minimapCanvasRef.current;
      var ctx = c.getContext && c.getContext('2d');
      c.width = minimapSize;
      c.height = minimapSize;
      if (ctx) ctx.clearRect(0, 0, c.width, c.height);
    }

    // Find stairs position
    var stairX = 0,
      stairY = 0;
    for (var y = 0; y < stateHeight; y++) {
      for (var x = 0; x < stateWidth; x++) {
        if (newDungeon[y][x] === 'S') {
          stairX = x;
          stairY = y;
        }
      }
    }
    var spawnedAll = [];
    rooms.forEach(function (room) {
      // spawn up to enemyCount for this room and capture returned enemies (avoid relying on room.id)
      var spawned = [];
      for (var i = 0; i < enemyCount; i++) {
        // choose an enemy type safely
        var types = Object.keys(ENEMY_DEFS);
        var _chosen8 = types[randInt(0, types.length)] || types[0];
        var e = spawnEnemy(newDungeon, room, _chosen8);
        if (e) {
          spawnedAll.push(e);
          spawned.push(e);
        }
      }
      setEnemies(spawnedAll);
      setEnemiesState(spawnedAll);
      setEnemyHereTiles(spawnedAll.map(function (en) {
        return {
          x: en.pos.x,
          y: en.pos.y,
          sprite: en.sprites && en.sprites.downIdle ? en.sprites.downIdle.frame1 : null
        };
      }));

      // populate per-slot enemy flags/positions (up to 8)
      var first8 = spawnedAll.slice(0, 8);
      var e1 = first8[0] || null,
        e2 = first8[1] || null,
        e3 = first8[2] || null,
        e4 = first8[3] || null;
      var e5 = first8[4] || null,
        e6 = first8[5] || null,
        e7 = first8[6] || null,
        e8 = first8[7] || null;
      setEnemyType1(e1 ? e1.key : null);
      setEnemyType2(e2 ? e2.key : null);
      setEnemyType3(e3 ? e3.key : null);
      setEnemyType4(e4 ? e4.key : null);
      setEnemyType5(e5 ? e5.key : null);
      setEnemyType6(e6 ? e6.key : null);
      setEnemyType7(e7 ? e7.key : null);
      setEnemyType8(e8 ? e8.key : null);
      setEnemy1(!!e1);
      setEnemy2(!!e2);
      setEnemy3(!!e3);
      setEnemy4(!!e4);
      setEnemy5(!!e5);
      setEnemy6(!!e6);
      setEnemy7(!!e7);
      setEnemy8(!!e8);
      setEnemy1Pos(e1 ? {
        x: e1.pos.x,
        y: e1.pos.y
      } : null);
      setEnemy2Pos(e2 ? {
        x: e2.pos.x,
        y: e2.pos.y
      } : null);
      setEnemy3Pos(e3 ? {
        x: e3.pos.x,
        y: e3.pos.y
      } : null);
      setEnemy4Pos(e4 ? {
        x: e4.pos.x,
        y: e4.pos.y
      } : null);
      setEnemy5Pos(e5 ? {
        x: e5.pos.x,
        y: e5.pos.y
      } : null);
      setEnemy6Pos(e6 ? {
        x: e6.pos.x,
        y: e6.pos.y
      } : null);
      setEnemy7Pos(e7 ? {
        x: e7.pos.x,
        y: e7.pos.y
      } : null);
      setEnemy8Pos(e8 ? {
        x: e8.pos.x,
        y: e8.pos.y
      } : null);
      verifyEnemyGeneration(spawnedAll.length);
    });
    setStairs({
      x: stairX,
      y: stairY
    });
    var currencyLocs = generateCurrencyTiles(newDungeon, 20, 80, 5); // 5 coins, value 20-80
    setCurrencyTiles(currencyLocs);
    var itemLocs = generateItemTiles(newDungeon, 5, 10, randInt(5, 10)); // between 5 and 10 items spawn
    setItemTiles(itemLocs);
    beginItemTilesIndex(itemLocs);
    setPlayerPos(playerStart);
    setDungeon(newDungeon);
    // set rooms and reveal starting room
    setRoomsState(rooms || []);
    // reveal the starting room entirely
    if (rooms && rooms.length) {
      var startRoom = rooms.find(function (r) {
        return r.center.x === playerStart.x && r.center.y === playerStart.y;
      }) || rooms[0];
      revealRoom(startRoom);
    } else {
      // fallback: reveal starting tile
      revealTile(playerStart.x, playerStart.y);
    }

    // Reset camera refs to avoid sudden jumps/stutter and smooth to new start
    cameraPosRef.current = {
      x: playerStart.x,
      y: playerStart.y
    };
    cameraTargetRef.current = {
      x: playerStart.x,
      y: playerStart.y
    };
    // Immediately apply the transform to the DOM node (if available) so we don't
    // briefly display the previous floor's camera position.
    var offsetX = (20 - playerStart.x) * 0.5 + 20;
    var offsetY = (-20 - playerStart.y) * 0.5 - 225;
    //5
    //-12
    var immediateTransform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px) scale(").concat(zoomLevel, ")");
    if (dungeonRef.current) dungeonRef.current.style.transform = immediateTransform;
    setCameraTransform(immediateTransform);
    updateCamera(playerStart.x, playerStart.y);
  };
  var getRandomFloorTile = function getRandomFloorTile() {
    return floorSprites[Math.floor(Math.random() * floorSprites.length)];
  };
  var updateCamera = function updateCamera(x, y) {
    cameraTargetRef.current = {
      x: x,
      y: y
    };
    cameraPosRef.current = {
      x: x,
      y: y
    };
    startCameraLoop();
  };
  React.useEffect(function () {
    return function () {
      stopCameraLoop();
    };
  }, []);
  var getLineCoordinates = function getLineCoordinates(direction) {
    var lineCoords = [];
    var x = playerPos.x;
    var y = playerPos.y;
    for (var i = 0; i < 30; i++) {
      // Extend infinitely until hitting a wall
      if (direction === 'up' && y - i >= 0) {
        if (dungeon[y - i][x] === 'W') break; // Stop if it hits a wall
        lineCoords.push({
          x: x,
          y: y - i
        });
      } else if (direction === 'down' && y + i < 30) {
        if (dungeon[y + i][x] === 'W') break; // Stop if it hits a wall
        lineCoords.push({
          x: x,
          y: y + i
        });
      } else if (direction === 'left' && x - i >= 0) {
        if (dungeon[y][x - i] === 'W') break; // Stop if it hits a wall
        lineCoords.push({
          x: x - i,
          y: y
        });
      } else if (direction === 'right' && x + i < 30) {
        if (dungeon[y][x + i] === 'W') break; // Stop if it hits a wall
        lineCoords.push({
          x: x + i,
          y: y
        });
      }
    }
    return lineCoords;
  };
  var lineCoordinates = showIndicators ? getLineCoordinates(lastDirection) : [];
  var safeDungeon = Array.isArray(dungeon) && dungeon.length ? dungeon : [[]];
  var rows = safeDungeon.length;
  var cols = safeDungeon[0] && safeDungeon[0].length || 0;
  var minRow = Math.max(0, Math.floor(playerPos && playerPos.y ? playerPos.y : 0) - VIEW_RADIUS);
  var maxRow = Math.min(Math.max(0, rows - 1), Math.floor(playerPos && playerPos.y ? playerPos.y : 0) + VIEW_RADIUS);
  var minCol = Math.max(0, Math.floor(playerPos && playerPos.x ? playerPos.x : 0) - VIEW_RADIUS);
  var maxCol = Math.min(Math.max(0, cols - 1), Math.floor(playerPos && playerPos.x ? playerPos.x : 0) + VIEW_RADIUS);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: fpsRef,
    className: "fpsCounter",
    "aria-live": "polite"
  }, "FPS: --"), showMoveSelector && /*#__PURE__*/React.createElement("div", {
    className: "menu",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "rgba(0,0,0,0.85)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "320",
    height: "320",
    style: {
      position: "absolute",
      top: 0,
      left: 0
    }
  }, [0, 1, 2, 3].map(function (i) {
    var sectorAngle = (i * 90 - 45) * (Math.PI / 180);
    // Move text position slightly inward
    var textRadius = 65;
    var textAngle = sectorAngle - 42.5 * (Math.PI / 180);
    var x = 160 + textRadius * Math.cos(textAngle);
    var y = 160 + textRadius * Math.sin(textAngle);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("path", {
      d: describeArc(160, 160, 120, i * 90 - 45, (i + 1) * 90 - 45),
      fill: selectedMove === i ? "#3490dc" : "#222",
      stroke: "#fff",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: y,
      textAnchor: "middle",
      alignmentBaseline: "middle",
      fill: "#fff",
      fontSize: "18",
      fontWeight: selectedMove === i ? "bold" : "normal",
      style: {
        pointerEvents: "none",
        userSelect: "none"
      }
    }, moves[i].name, /*#__PURE__*/React.createElement("tspan", {
      x: x,
      dy: "1.2em",
      fontSize: "14",
      fill: "#ccc"
    }, moves[i].pp)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "game-area p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "counter"
  }, "Floor: ", floor), /*#__PURE__*/React.createElement("div", {
    className: "counter",
    style: {
      right: '150px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: Pokedollar,
    alt: "Currency",
    style: {
      width: 24,
      verticalAlign: 'middle'
    }
  }), " ", currency), /*#__PURE__*/React.createElement("canvas", {
    ref: minimapCanvasRef,
    width: minimapSize,
    height: minimapSize,
    style: {
      position: 'absolute',
      top: '10%',
      right: 8,
      width: minimapSize,
      height: minimapSize,
      background: 'rgba(0,0,0,0.35)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 6,
      zIndex: 110,
      pointerEvents: 'none' // non-interactive overlay
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dungeon-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dungeon",
    ref: dungeonRef,
    style: {
      transform: cameraTransform,
      width: '7680px',
      height: '7680px'
    }
  }, safeDungeon.slice(minRow, maxRow + 1).map(function (row, rIdx) {
    var rowIndex = rIdx + minRow;
    return /*#__PURE__*/React.createElement("div", {
      key: rowIndex,
      className: "dungeon-row flex"
    }, row.slice(minCol, maxCol + 1).map(function (cell, cIdx) {
      var colIndex = cIdx + minCol;
      var wallSprite;
      var currencyHere = currencyTiles.find(function (tile) {
        return tile.x === colIndex && tile.y === rowIndex;
      });
      var itemHere = itemTiles.find(function (tile) {
        return tile.x === colIndex && tile.y === rowIndex;
      });
      // Determine sprite based on position
      if (cell === 'W') {
        wallSprite = wallSpriteMap[getWallTileType(colIndex, rowIndex, dungeon)];
      }
      var isIndicatorVisible = lineCoordinates.some(function (coord) {
        return coord.x === colIndex && coord.y === rowIndex;
      }) && !(playerPos.x === colIndex && playerPos.y === rowIndex);
      return /*#__PURE__*/React.createElement("div", {
        key: colIndex,
        className: "dungeon-cell relative w-10 h-10 ".concat(isIndicatorVisible && showIndicators ? 'red-border' : '')
      }, cell === 'W' ? /*#__PURE__*/React.createElement("img", {
        src: wallSprite,
        alt: "Wall",
        className: "wall absolute"
      }) : /*#__PURE__*/React.createElement("img", {
        src: cell,
        alt: "Floor",
        className: "floor absolute"
      }), cell === 'S' && /*#__PURE__*/React.createElement("img", {
        src: stairSprite,
        alt: "Stairs",
        className: "stair absolute"
      }), currencyHere && /*#__PURE__*/React.createElement("img", {
        src: Pokedollar,
        alt: "Currency",
        className: "absolute w-full h-full",
        style: {
          zIndex: 5,
          objectFit: 'contain',
          width: '50%',
          height: '50%',
          left: '25%',
          top: '25%'
        }
      }), itemHere && function () {
        var atlasKey = getAtlasKeyForItemName(itemHere.itemName);
        var shouldScale = atlasKey && !['Reviverseed', 'Scarf', 'Orb'].includes(atlasKey);
        return /*#__PURE__*/React.createElement(SpriteCanvas, {
          atlasKey: atlasKey,
          width: 40,
          height: 40,
          style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: "translate(-50%, -50%) ".concat(shouldScale ? 'scale(1.5)' : ''),
            zIndex: 5,
            width: '50%',
            height: '50%'
          }
        });
      }(), isBuffing && playerPos.x === colIndex && playerPos.y === rowIndex && /*#__PURE__*/React.createElement("img", {
        src: buffVfxFrames[buffVfxIndex],
        alt: "Buff",
        className: "absolute w-full h-full",
        style: {
          transform: 'translateY(-20%)',
          zIndex: 31,
          pointerEvents: 'none',
          animation: 'buff-fade 1s forwards'
        }
      }), usingAquaTail && playerPos.x === colIndex && playerPos.y === rowIndex && /*#__PURE__*/React.createElement("img", {
        src: lastDirection === 'up' ? vaporeonAquaTailUpSprites[aquaTailIndex] : lastDirection === 'down' ? vaporeonAquaTailDownSprites[aquaTailIndex] : lastDirection === 'left' ? vaporeonAquaTailLeftSprites[aquaTailIndex] : lastDirection === 'right' ? vaporeonAquaTailRightSprites[aquaTailIndex] : lastDirection === 'up-left' ? vaporeonAquaTailUpLeftSprites[aquaTailIndex] : lastDirection === 'up-right' ? vaporeonAquaTailUpRightSprites[aquaTailIndex] : lastDirection === 'down-left' ? vaporeonAquaTailDownLeftSprites[aquaTailIndex] : lastDirection === 'down-right' ? vaporeonAquaTailDownRightSprites[aquaTailIndex] : vaporeonAquaTailDownSprites[aquaTailIndex],
        alt: "Aqua Tail",
        className: "absolute w-full h-full",
        style: {
          transform: 'translateY(-10%) scale(2.0)',
          zIndex: 31,
          pointerEvents: 'none',
          animation: 'aqua-tail-fade 6s forwards'
        }
      }), isLevelingUp && playerPos.x === colIndex && playerPos.y === rowIndex && /*#__PURE__*/React.createElement("img", {
        src: levelVfxFrames[levelVfxIndex],
        alt: "Level Up",
        className: "absolute w-full h-full",
        style: {
          transform: 'translateY(-20%)',
          zIndex: 31,
          pointerEvents: 'none',
          animation: 'level-up-fade 1s forwards'
        }
      }), enemy1 === true && colIndex === enemy1Pos.x && rowIndex === enemy1Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType1,
        animation: enemy1Sleeping ? "sleep" : "idle",
        direction: enemy1Sleeping ? "none" : enemy1LastDirection,
        frame: enemy1Sleeping ? sleepSpriteIndex + 1 : enemy1IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy1",
        className: "player-sprite absolute",
        style: {
          transform: enemyType1 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType1 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy2 === true && colIndex === enemy2Pos.x && rowIndex === enemy2Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType2,
        animation: enemy2Sleeping ? "sleep" : "idle",
        direction: enemy2Sleeping ? "none" : enemy2LastDirection,
        frame: enemy2Sleeping ? sleepSpriteIndex + 1 : enemy2IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy2",
        className: "player-sprite absolute",
        style: {
          transform: enemyType2 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType2 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy3 === true && colIndex === enemy3Pos.x && rowIndex === enemy3Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType3,
        animation: enemy3Sleeping ? "sleep" : "idle",
        direction: enemy3Sleeping ? "none" : enemy3LastDirection,
        frame: enemy3Sleeping ? sleepSpriteIndex + 1 : enemy3IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy3",
        className: "player-sprite absolute",
        style: {
          transform: enemyType3 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType3 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy4 === true && colIndex === enemy4Pos.x && rowIndex === enemy4Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType4,
        animation: enemy4Sleeping ? "sleep" : "idle",
        direction: enemy4Sleeping ? "none" : enemy4LastDirection,
        frame: enemy4Sleeping ? sleepSpriteIndex + 1 : enemy4IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy4",
        className: "player-sprite absolute",
        style: {
          transform: enemyType4 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType4 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy5 === true && colIndex === enemy5Pos.x && rowIndex === enemy5Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType5,
        animation: enemy5Sleeping ? "sleep" : "idle",
        direction: enemy5Sleeping ? "none" : enemy5LastDirection,
        frame: enemy5Sleeping ? sleepSpriteIndex + 1 : enemy5IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy5",
        className: "player-sprite absolute",
        style: {
          transform: enemyType5 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType5 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy6 === true && colIndex === enemy6Pos.x && rowIndex === enemy6Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType6,
        animation: enemy6Sleeping ? "sleep" : "idle",
        direction: enemy6Sleeping ? "none" : enemy6LastDirection,
        frame: enemy6Sleeping ? sleepSpriteIndex + 1 : enemy6IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy6",
        className: "player-sprite absolute",
        style: {
          transform: enemyType6 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType6 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy7 === true && colIndex === enemy7Pos.x && rowIndex === enemy7Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType7,
        animation: enemy7Sleeping ? "sleep" : "idle",
        direction: enemy7Sleeping ? "none" : enemy7LastDirection,
        frame: enemy7Sleeping ? sleepSpriteIndex + 1 : enemy7IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy7",
        className: "player-sprite absolute",
        style: {
          transform: enemyType7 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType7 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, enemy8 === true && colIndex === enemy8Pos.x && rowIndex === enemy8Pos.y ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: enemyType8,
        animation: enemy8Sleeping ? "sleep" : "idle",
        direction: enemy8Sleeping ? "none" : enemy8LastDirection,
        frame: enemy8Sleeping ? sleepSpriteIndex + 1 : enemy8IdleAnimIndex + 1,
        width: 24,
        height: 48,
        alt: "Enemy8",
        className: "player-sprite absolute",
        style: {
          transform: enemyType8 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType8 === 'Lunatone' ? 'scale(1.1) translateY(4px) translateX(8px)' : 'none'
        }
      }) : null, playerPos.x === colIndex && playerPos.y === rowIndex && (isSleeping ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: "Vaporeon",
        animation: "sleep",
        direction: "none",
        frame: sleepSpriteIndex + 1,
        width: 32,
        height: 40,
        alt: "Vaporeon",
        className: "player-sprite absolute",
        style: {
          transform: 'scale(1)'
        }
      }) : isWalking ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: "Vaporeon",
        animation: "walk",
        direction: lastDirection === 'left' ? 'left' : lastDirection === 'right' ? 'right' : lastDirection === 'up' ? 'up' : lastDirection === 'down' ? 'down' : lastDirection === 'up-left' ? 'upleft' : lastDirection === 'up-right' ? 'upright' : lastDirection === 'down-left' ? 'downleft' : lastDirection === 'down-right' ? 'downright' : 'down',
        frame: walkSpriteIndex + 1,
        width: 40,
        height: 56,
        alt: "Vaporeon",
        className: "player-sprite absolute",
        style: {
          transform: 'scale(1)'
        }
      }) : isSpinning ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: "Vaporeon",
        animation: "spin",
        direction: lastDirection === 'left' ? 'left' : lastDirection === 'right' ? 'right' : lastDirection === 'up' ? 'up' : lastDirection === 'down' ? 'down' : lastDirection === 'up-left' ? 'upleft' : lastDirection === 'up-right' ? 'upright' : lastDirection === 'down-left' ? 'downleft' : lastDirection === 'down-right' ? 'downright' : 'down',
        frame: spinSpriteIndex + 1,
        width: 40,
        height: 56,
        alt: "Vaporeon",
        className: "player-sprite absolute",
        style: {
          transform: 'scale(0.85)'
        }
      }) : usingAquaTail ? /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: "Vaporeon",
        animation: "spin",
        direction: lastDirection === 'left' ? 'left' : lastDirection === 'right' ? 'right' : lastDirection === 'up' ? 'up' : lastDirection === 'down' ? 'down' : lastDirection === 'up-left' ? 'upleft' : lastDirection === 'up-right' ? 'upright' : lastDirection === 'down-left' ? 'downleft' : lastDirection === 'down-right' ? 'downright' : 'down',
        frame: spinSpriteIndex + 1,
        width: 40,
        height: 56,
        alt: "Vaporeon",
        className: "player-sprite absolute",
        style: {
          transform: 'scale(0.85)'
        }
      }) : /*#__PURE__*/React.createElement(SpriteCanvas, {
        pokemon: "Vaporeon",
        animation: "idle",
        direction: lastDirection === 'left' ? 'left' : lastDirection === 'right' ? 'right' : lastDirection === 'up' ? 'up' : lastDirection === 'down' ? 'down' : lastDirection === 'down-left' ? 'downleft' : lastDirection === 'down-right' ? 'downright' : lastDirection === 'up-left' ? 'upleft' : lastDirection === 'up-right' ? 'upright' : 'down',
        frame: idleSpriteIndex + 1,
        width: 40,
        height: 56,
        alt: "Vaporeon",
        className: "player-sprite absolute",
        style: {
          transform: 'scale(1)'
        }
      })));
    }));
  }), projectiles.map(function (p) {
    return p.x >= minCol - 1 && p.x <= maxCol + 1 && p.y >= minRow - 1 && p.y <= maxRow + 1 && (minCol === playerPos.x && maxCol === playerPos.x && minRow === playerPos.y && maxRow === playerPos.y ? null : /*#__PURE__*/React.createElement("img", {
      key: p.id,
      src: p.sprite,
      alt: "thrown",
      style: {
        position: 'absolute',
        left: minCol > 0 ? "".concat((p.x - minCol) * 40, "px") : "".concat(p.x * 40, "px"),
        top: minRow > 0 ? "".concat((p.y - minRow) * 40, "px") : "".concat(p.y * 40, "px"),
        width: '20px',
        height: '20px',
        transformOrigin: 'center',
        zIndex: 40,
        pointerEvents: 'none',
        objectFit: 'contain',
        transform: p.sprite !== Reviverseed && p.sprite !== Scarf && p.sprite !== Orb ? "scale(1.5)" : 'none'
      }
    }));
  })), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.x - projectilePosRef.current[1].x - minCol : 0) * 40, "px") : "".concat((enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.x - projectilePosRef.current[1].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.y - projectilePosRef.current[1].y - minRow : 0) * 40, "px") : "".concat((enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.y - projectilePosRef.current[1].y : 0) * 40, "px")
    }
  }), ";", rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.x - projectilePosRef.current[2].x - minCol : 0) * 40, "px") : "".concat((enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.x - projectilePosRef.current[2].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.y - projectilePosRef.current[2].y - minRow : 0) * 40, "px") : "".concat((enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.y - projectilePosRef.current[2].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.x - projectilePosRef.current[3].x - minCol : 0) * 40, "px") : "".concat((enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.x - projectilePosRef.current[3].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.y - projectilePosRef.current[3].y - minRow : 0) * 40, "px") : "".concat((enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.y - projectilePosRef.current[3].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.x - projectilePosRef.current[4].x - minCol : 0) * 40, "px") : "".concat((enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.x - projectilePosRef.current[4].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.y - projectilePosRef.current[4].y - minRow : 0) * 40, "px") : "".concat((enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.y - projectilePosRef.current[4].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.x - projectilePosRef.current[5].x - minCol : 0) * 40, "px") : "".concat((enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.x - projectilePosRef.current[5].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.y - projectilePosRef.current[5].y - minRow : 0) * 40, "px") : "".concat((enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.y - projectilePosRef.current[5].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.x - projectilePosRef.current[6].x - minCol : 0) * 40, "px") : "".concat((enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.x - projectilePosRef.current[6].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.y - projectilePosRef.current[6].y - minRow : 0) * 40, "px") : "".concat((enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.y - projectilePosRef.current[6].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.x - projectilePosRef.current[7].x - minCol : 0) * 40, "px") : "".concat((enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.x - projectilePosRef.current[7].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.y - projectilePosRef.current[7].y - minRow : 0) * 40, "px") : "".concat((enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.y - projectilePosRef.current[7].y : 0) * 40, "px")
    }
  }), rockThrowRef.current && /*#__PURE__*/React.createElement("img", {
    src: rockThrowVfxFrames[rockThrowIndex],
    alt: "Rock Throw",
    style: {
      position: 'absolute',
      transformOrigin: 'center',
      transform: rockThrowTransform,
      width: '40px',
      height: '40px',
      pointerEvents: 'none',
      objectFit: 'contain',
      //willChange: 'transform',
      left: minCol > 0 ? "".concat((enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.x - projectilePosRef.current[8].x - minCol : 0) * 40, "px") : "".concat((enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.x - projectilePosRef.current[8].x : 0) * 40, "px"),
      top: minRow > 0 ? "".concat((enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.y - projectilePosRef.current[8].y - minRow : 0) * 40, "px") : "".concat((enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.y - projectilePosRef.current[8].y : 0) * 40, "px")
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '30px',
      transform: 'translateX(-50%)',
      width: '60%',
      maxHeight: '120px',
      background: 'rgba(30,30,30,0.5)',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      overflowY: 'auto',
      fontSize: '16px',
      zIndex: 30,
      pointerEvents: 'none'
    }
  }, actionLog.map(function (entry) {
    return /*#__PURE__*/React.createElement("div", {
      key: entry.id
    }, entry.msg);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hunger-bar-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full",
    style: {
      zIndex: 100,
      transform: 'translateX(28%) translateY(6%) scale(1.6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: playerHunger / maxPlayerHunger === 1 ? hungerBarComponent[100] : 0.99 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 1 ? hungerBarComponent[99] : 0.98 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.99 ? hungerBarComponent[98] : 0.97 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.98 ? hungerBarComponent[97] : 0.96 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.97 ? hungerBarComponent[96] : 0.95 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.96 ? hungerBarComponent[95] : 0.94 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.95 ? hungerBarComponent[94] : 0.93 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.94 ? hungerBarComponent[93] : 0.92 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.93 ? hungerBarComponent[92] : 0.91 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.92 ? hungerBarComponent[91] : 0.90 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.91 ? hungerBarComponent[90] : 0.89 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.90 ? hungerBarComponent[89] : 0.88 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.89 ? hungerBarComponent[88] : 0.87 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.88 ? hungerBarComponent[87] : 0.86 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.87 ? hungerBarComponent[86] : 0.85 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.86 ? hungerBarComponent[85] : 0.84 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.85 ? hungerBarComponent[84] : 0.83 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.84 ? hungerBarComponent[83] : 0.82 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.83 ? hungerBarComponent[82] : 0.81 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.82 ? hungerBarComponent[81] : 0.80 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.81 ? hungerBarComponent[80] : 0.79 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.80 ? hungerBarComponent[79] : 0.78 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.79 ? hungerBarComponent[78] : 0.77 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.78 ? hungerBarComponent[77] : 0.76 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.77 ? hungerBarComponent[76] : 0.75 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.76 ? hungerBarComponent[75] : 0.74 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.75 ? hungerBarComponent[74] : 0.73 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.74 ? hungerBarComponent[73] : 0.72 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.73 ? hungerBarComponent[72] : 0.71 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.72 ? hungerBarComponent[71] : 0.70 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.71 ? hungerBarComponent[70] : 0.69 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.70 ? hungerBarComponent[69] : 0.68 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.69 ? hungerBarComponent[68] : 0.67 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.68 ? hungerBarComponent[67] : 0.66 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.67 ? hungerBarComponent[66] : 0.65 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.66 ? hungerBarComponent[65] : 0.64 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.65 ? hungerBarComponent[64] : 0.63 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.64 ? hungerBarComponent[63] : 0.62 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.63 ? hungerBarComponent[62] : 0.61 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.62 ? hungerBarComponent[61] : 0.60 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.61 ? hungerBarComponent[60] : 0.59 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.60 ? hungerBarComponent[59] : 0.58 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.59 ? hungerBarComponent[58] : 0.57 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.58 ? hungerBarComponent[57] : 0.56 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.57 ? hungerBarComponent[56] : 0.55 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.56 ? hungerBarComponent[55] : 0.54 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.55 ? hungerBarComponent[54] : 0.53 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.54 ? hungerBarComponent[53] : 0.52 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.53 ? hungerBarComponent[52] : 0.51 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.52 ? hungerBarComponent[51] : 0.50 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.51 ? hungerBarComponent[50] : 0.49 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.50 ? hungerBarComponent[49] : 0.48 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.49 ? hungerBarComponent[48] : 0.47 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.48 ? hungerBarComponent[47] : 0.46 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.47 ? hungerBarComponent[46] : 0.45 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.46 ? hungerBarComponent[45] : 0.44 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.45 ? hungerBarComponent[44] : 0.43 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.44 ? hungerBarComponent[43] : 0.42 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.43 ? hungerBarComponent[42] : 0.41 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.42 ? hungerBarComponent[41] : 0.40 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.41 ? hungerBarComponent[40] : 0.39 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.40 ? hungerBarComponent[39] : 0.38 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.39 ? hungerBarComponent[38] : 0.37 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.38 ? hungerBarComponent[37] : 0.36 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.37 ? hungerBarComponent[36] : 0.35 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.36 ? hungerBarComponent[35] : 0.34 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.35 ? hungerBarComponent[34] : 0.33 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.34 ? hungerBarComponent[33] : 0.32 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.33 ? hungerBarComponent[32] : 0.31 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.32 ? hungerBarComponent[31] : 0.30 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.31 ? hungerBarComponent[30] : 0.29 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.30 ? hungerBarComponent[29] : 0.28 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.29 ? hungerBarComponent[28] : 0.27 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.28 ? hungerBarComponent[27] : 0.26 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.27 ? hungerBarComponent[26] : 0.25 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.26 ? hungerBarComponent[25] : 0.24 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.25 ? hungerBarComponent[24] : 0.23 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.24 ? hungerBarComponent[23] : 0.22 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.23 ? hungerBarComponent[22] : 0.21 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.22 ? hungerBarComponent[21] : 0.20 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.21 ? hungerBarComponent[20] : 0.19 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.20 ? hungerBarComponent[19] : 0.18 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.19 ? hungerBarComponent[18] : 0.17 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.18 ? hungerBarComponent[17] : 0.16 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.17 ? hungerBarComponent[16] : 0.15 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.16 ? hungerBarComponent[15] : 0.14 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.15 ? hungerBarComponent[14] : 0.13 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.14 ? hungerBarComponent[13] : 0.12 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.13 ? hungerBarComponent[12] : 0.11 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.12 ? hungerBarComponent[11] : 0.10 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.11 ? hungerBarComponent[10] : 0.09 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.10 ? hungerBarComponent[9] : 0.08 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.09 ? hungerBarComponent[8] : 0.07 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.08 ? hungerBarComponent[7] : 0.06 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.07 ? hungerBarComponent[6] : 0.05 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.06 ? hungerBarComponent[5] : 0.04 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.05 ? hungerBarComponent[4] : 0.03 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.04 ? hungerBarComponent[3] : 0.02 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.03 ? hungerBarComponent[2] : 0.01 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.02 ? hungerBarComponent[1] : playerHunger / maxPlayerHunger === 0 ? hungerBarComponent[0] : hungerBarComponent[0],
    alt: "hungerComponent",
    className: "absolute"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-cyan absolute top-0 left-0 w-full h-full",
    style: {
      color: 'cyan',
      fontWeight: 'bold',
      textAlign: 'left',
      zIndex: 100,
      transform: 'translateX(10%)'
    }
  }, "HP: ", playerHP, "/", maxPlayerHP), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full flex items-left justify-left",
    style: {
      position: 'absolute',
      width: '100%',
      height: '50px',
      marginTop: '40px',
      transform: 'translateX(235%) scale(5.5) translateY(-35%)',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 0 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.01 ? healthBarComponent[0] : 0.01 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.02 ? healthBarComponent[1] : 0.02 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.03 ? healthBarComponent[2] : 0.03 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.04 ? healthBarComponent[3] : 0.04 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.05 ? healthBarComponent[4] : 0.05 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.06 ? healthBarComponent[5] : 0.06 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.07 ? healthBarComponent[6] : 0.07 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.08 ? healthBarComponent[7] : 0.08 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.09 ? healthBarComponent[8] : 0.09 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.1 ? healthBarComponent[9] : 0.1 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.11 ? healthBarComponent[10] : 0.11 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.12 ? healthBarComponent[11] : 0.12 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.13 ? healthBarComponent[12] : 0.13 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.14 ? healthBarComponent[13] : 0.14 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.15 ? healthBarComponent[14] : 0.15 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.16 ? healthBarComponent[15] : 0.16 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.17 ? healthBarComponent[16] : 0.17 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.18 ? healthBarComponent[17] : 0.18 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.19 ? healthBarComponent[18] : 0.19 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.2 ? healthBarComponent[19] : 0.2 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.21 ? healthBarComponent[20] : 0.21 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.22 ? healthBarComponent[21] : 0.22 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.23 ? healthBarComponent[22] : 0.23 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.24 ? healthBarComponent[23] : 0.24 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.25 ? healthBarComponent[24] : 0.25 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.26 ? healthBarComponent[25] : 0.26 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.27 ? healthBarComponent[26] : 0.27 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.28 ? healthBarComponent[27] : 0.28 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.29 ? healthBarComponent[28] : 0.29 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.3 ? healthBarComponent[29] : 0.3 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.31 ? healthBarComponent[30] : 0.31 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.32 ? healthBarComponent[31] : 0.32 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.33 ? healthBarComponent[32] : 0.33 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.34 ? healthBarComponent[33] : 0.34 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.35 ? healthBarComponent[34] : 0.35 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.36 ? healthBarComponent[35] : 0.36 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.37 ? healthBarComponent[36] : 0.37 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.38 ? healthBarComponent[37] : 0.38 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.39 ? healthBarComponent[38] : 0.39 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.4 ? healthBarComponent[39] : 0.4 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.41 ? healthBarComponent[40] : 0.41 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.42 ? healthBarComponent[41] : 0.42 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.43 ? healthBarComponent[42] : 0.43 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.44 ? healthBarComponent[43] : 0.44 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.45 ? healthBarComponent[44] : 0.45 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.46 ? healthBarComponent[45] : 0.46 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.47 ? healthBarComponent[46] : 0.47 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.48 ? healthBarComponent[47] : 0.48 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.49 ? healthBarComponent[48] : 0.49 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.5 ? healthBarComponent[49] : 0.5 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.51 ? healthBarComponent[50] : 0.51 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.52 ? healthBarComponent[51] : 0.52 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.53 ? healthBarComponent[52] : 0.53 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.54 ? healthBarComponent[53] : 0.54 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.55 ? healthBarComponent[54] : 0.55 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.56 ? healthBarComponent[55] : 0.56 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.57 ? healthBarComponent[56] : 0.57 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.58 ? healthBarComponent[57] : 0.58 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.59 ? healthBarComponent[58] : 0.59 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.6 ? healthBarComponent[59] : 0.6 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.61 ? healthBarComponent[60] : 0.61 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.62 ? healthBarComponent[61] : 0.62 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.63 ? healthBarComponent[62] : 0.63 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.64 ? healthBarComponent[63] : 0.64 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.65 ? healthBarComponent[64] : 0.65 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.66 ? healthBarComponent[65] : 0.66 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.67 ? healthBarComponent[66] : 0.67 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.68 ? healthBarComponent[67] : 0.68 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.69 ? healthBarComponent[68] : 0.69 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.7 ? healthBarComponent[69] : 0.7 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.71 ? healthBarComponent[70] : 0.71 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.72 ? healthBarComponent[71] : 0.72 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.73 ? healthBarComponent[72] : 0.73 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.74 ? healthBarComponent[73] : 0.74 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.75 ? healthBarComponent[74] : 0.75 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.76 ? healthBarComponent[75] : 0.76 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.77 ? healthBarComponent[76] : 0.77 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.78 ? healthBarComponent[77] : 0.78 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.79 ? healthBarComponent[78] : 0.79 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.8 ? healthBarComponent[79] : 0.8 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.81 ? healthBarComponent[80] : 0.81 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.82 ? healthBarComponent[81] : 0.82 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.83 ? healthBarComponent[82] : 0.83 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.84 ? healthBarComponent[83] : 0.84 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.85 ? healthBarComponent[84] : 0.85 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.86 ? healthBarComponent[85] : 0.86 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.87 ? healthBarComponent[86] : 0.87 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.88 ? healthBarComponent[87] : 0.88 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.89 ? healthBarComponent[88] : 0.89 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.9 ? healthBarComponent[89] : 0.9 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.91 ? healthBarComponent[90] : 0.91 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.92 ? healthBarComponent[91] : 0.92 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.93 ? healthBarComponent[92] : 0.93 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.94 ? healthBarComponent[93] : 0.94 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.95 ? healthBarComponent[94] : 0.95 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.96 ? healthBarComponent[95] : 0.96 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.97 ? healthBarComponent[96] : 0.97 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.98 ? healthBarComponent[97] : 0.98 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 0.99 ? healthBarComponent[98] : 0.99 <= playerHP / maxPlayerHP && playerHP / maxPlayerHP < 1 ? healthBarComponent[99] : playerHP / maxPlayerHP === 1 ? healthBarComponent[100] : healthBarComponent[0],
    alt: "Health Bar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full flex items-left justify-left",
    style: {
      position: 'absolute',
      transform: 'translateY(100%)',
      width: '100%',
      height: '50px',
      marginTop: '40px',
      opacity: '0.8'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 0 <= exp / maxExp && exp / maxExp < 0.01 ? expBarComponent[0] : exp / maxExp === 1 ? expBarComponent[100] : 0.01 <= exp / maxExp && exp / maxExp < 0.02 ? expBarComponent[1] : 0.02 <= exp / maxExp && exp / maxExp < 0.03 ? expBarComponent[2] : 0.03 <= exp / maxExp && exp / maxExp < 0.04 ? expBarComponent[3] : 0.04 <= exp / maxExp && exp / maxExp < 0.05 ? expBarComponent[4] : 0.05 <= exp / maxExp && exp / maxExp < 0.06 ? expBarComponent[5] : 0.06 <= exp / maxExp && exp / maxExp < 0.07 ? expBarComponent[6] : 0.07 <= exp / maxExp && exp / maxExp < 0.08 ? expBarComponent[7] : 0.08 <= exp / maxExp && exp / maxExp < 0.09 ? expBarComponent[8] : 0.09 <= exp / maxExp && exp / maxExp < 0.1 ? expBarComponent[9] : 0.1 <= exp / maxExp && exp / maxExp < 0.11 ? expBarComponent[10] : 0.11 <= exp / maxExp && exp / maxExp < 0.12 ? expBarComponent[11] : 0.12 <= exp / maxExp && exp / maxExp < 0.13 ? expBarComponent[12] : 0.13 <= exp / maxExp && exp / maxExp < 0.14 ? expBarComponent[13] : 0.14 <= exp / maxExp && exp / maxExp < 0.15 ? expBarComponent[14] : 0.15 <= exp / maxExp && exp / maxExp < 0.16 ? expBarComponent[15] : 0.16 <= exp / maxExp && exp / maxExp < 0.17 ? expBarComponent[16] : 0.17 <= exp / maxExp && exp / maxExp < 0.18 ? expBarComponent[17] : 0.18 <= exp / maxExp && exp / maxExp < 0.19 ? expBarComponent[18] : 0.19 <= exp / maxExp && exp / maxExp < 0.2 ? expBarComponent[19] : 0.2 <= exp / maxExp && exp / maxExp < 0.21 ? expBarComponent[20] : 0.21 <= exp / maxExp && exp / maxExp < 0.22 ? expBarComponent[21] : 0.22 <= exp / maxExp && exp / maxExp < 0.23 ? expBarComponent[22] : 0.23 <= exp / maxExp && exp / maxExp < 0.24 ? expBarComponent[23] : 0.24 <= exp / maxExp && exp / maxExp < 0.25 ? expBarComponent[24] : 0.25 <= exp / maxExp && exp / maxExp < 0.26 ? expBarComponent[25] : 0.26 <= exp / maxExp && exp / maxExp < 0.27 ? expBarComponent[26] : 0.27 <= exp / maxExp && exp / maxExp < 0.28 ? expBarComponent[27] : 0.28 <= exp / maxExp && exp / maxExp < 0.29 ? expBarComponent[28] : 0.29 <= exp / maxExp && exp / maxExp < 0.3 ? expBarComponent[29] : 0.3 <= exp / maxExp && exp / maxExp < 0.31 ? expBarComponent[30] : 0.31 <= exp / maxExp && exp / maxExp < 0.32 ? expBarComponent[31] : 0.32 <= exp / maxExp && exp / maxExp < 0.33 ? expBarComponent[32] : 0.33 <= exp / maxExp && exp / maxExp < 0.34 ? expBarComponent[33] : 0.34 <= exp / maxExp && exp / maxExp < 0.35 ? expBarComponent[34] : 0.35 <= exp / maxExp && exp / maxExp < 0.36 ? expBarComponent[35] : 0.36 <= exp / maxExp && exp / maxExp < 0.37 ? expBarComponent[36] : 0.37 <= exp / maxExp && exp / maxExp < 0.38 ? expBarComponent[37] : 0.38 <= exp / maxExp && exp / maxExp < 0.39 ? expBarComponent[38] : 0.39 <= exp / maxExp && exp / maxExp < 0.4 ? expBarComponent[39] : 0.4 <= exp / maxExp && exp / maxExp < 0.41 ? expBarComponent[40] : 0.41 <= exp / maxExp && exp / maxExp < 0.42 ? expBarComponent[41] : 0.42 <= exp / maxExp && exp / maxExp < 0.43 ? expBarComponent[42] : 0.43 <= exp / maxExp && exp / maxExp < 0.44 ? expBarComponent[43] : 0.44 <= exp / maxExp && exp / maxExp < 0.45 ? expBarComponent[44] : 0.45 <= exp / maxExp && exp / maxExp < 0.46 ? expBarComponent[45] : 0.46 <= exp / maxExp && exp / maxExp < 0.47 ? expBarComponent[46] : 0.47 <= exp / maxExp && exp / maxExp < 0.48 ? expBarComponent[47] : 0.48 <= exp / maxExp && exp / maxExp < 0.49 ? expBarComponent[48] : 0.49 <= exp / maxExp && exp / maxExp < 0.5 ? expBarComponent[49] : 0.5 <= exp / maxExp && exp / maxExp < 0.51 ? expBarComponent[50] : 0.51 <= exp / maxExp && exp / maxExp < 0.52 ? expBarComponent[51] : 0.52 <= exp / maxExp && exp / maxExp < 0.53 ? expBarComponent[52] : 0.53 <= exp / maxExp && exp / maxExp < 0.54 ? expBarComponent[53] : 0.54 <= exp / maxExp && exp / maxExp < 0.55 ? expBarComponent[54] : 0.55 <= exp / maxExp && exp / maxExp < 0.56 ? expBarComponent[55] : 0.56 <= exp / maxExp && exp / maxExp < 0.57 ? expBarComponent[56] : 0.57 <= exp / maxExp && exp / maxExp < 0.58 ? expBarComponent[57] : 0.58 <= exp / maxExp && exp / maxExp < 0.59 ? expBarComponent[58] : 0.59 <= exp / maxExp && exp / maxExp < 0.6 ? expBarComponent[59] : 0.6 <= exp / maxExp && exp / maxExp < 0.61 ? expBarComponent[60] : 0.61 <= exp / maxExp && exp / maxExp < 0.62 ? expBarComponent[61] : 0.62 <= exp / maxExp && exp / maxExp < 0.63 ? expBarComponent[62] : 0.63 <= exp / maxExp && exp / maxExp < 0.64 ? expBarComponent[63] : 0.64 <= exp / maxExp && exp / maxExp < 0.65 ? expBarComponent[64] : 0.65 <= exp / maxExp && exp / maxExp < 0.66 ? expBarComponent[65] : 0.66 <= exp / maxExp && exp / maxExp < 0.67 ? expBarComponent[66] : 0.67 <= exp / maxExp && exp / maxExp < 0.68 ? expBarComponent[67] : 0.68 <= exp / maxExp && exp / maxExp < 0.69 ? expBarComponent[68] : 0.69 <= exp / maxExp && exp / maxExp < 0.7 ? expBarComponent[69] : 0.7 <= exp / maxExp && exp / maxExp < 0.71 ? expBarComponent[70] : 0.71 <= exp / maxExp && exp / maxExp < 0.72 ? expBarComponent[71] : 0.72 <= exp / maxExp && exp / maxExp < 0.73 ? expBarComponent[72] : 0.73 <= exp / maxExp && exp / maxExp < 0.74 ? expBarComponent[73] : 0.74 <= exp / maxExp && exp / maxExp < 0.75 ? expBarComponent[74] : 0.75 <= exp / maxExp && exp / maxExp < 0.76 ? expBarComponent[75] : 0.76 <= exp / maxExp && exp / maxExp < 0.77 ? expBarComponent[76] : 0.77 <= exp / maxExp && exp / maxExp < 0.78 ? expBarComponent[77] : 0.78 <= exp / maxExp && exp / maxExp < 0.79 ? expBarComponent[78] : 0.79 <= exp / maxExp && exp / maxExp < 0.8 ? expBarComponent[79] : 0.8 <= exp / maxExp && exp / maxExp < 0.81 ? expBarComponent[80] : 0.81 <= exp / maxExp && exp / maxExp < 0.82 ? expBarComponent[81] : 0.82 <= exp / maxExp && exp / maxExp < 0.83 ? expBarComponent[82] : 0.83 <= exp / maxExp && exp / maxExp < 0.84 ? expBarComponent[83] : 0.84 <= exp / maxExp && exp / maxExp < 0.85 ? expBarComponent[84] : 0.85 <= exp / maxExp && exp / maxExp < 0.86 ? expBarComponent[85] : 0.86 <= exp / maxExp && exp / maxExp < 0.87 ? expBarComponent[86] : 0.87 <= exp / maxExp && exp / maxExp < 0.88 ? expBarComponent[87] : 0.88 <= exp / maxExp && exp / maxExp < 0.89 ? expBarComponent[88] : 0.89 <= exp / maxExp && exp / maxExp < 0.9 ? expBarComponent[89] : 0.9 <= exp / maxExp && exp / maxExp < 0.91 ? expBarComponent[90] : 0.91 <= exp / maxExp && exp / maxExp < 0.92 ? expBarComponent[91] : 0.92 <= exp / maxExp && exp / maxExp < 0.93 ? expBarComponent[92] : 0.93 <= exp / maxExp && exp / maxExp < 0.94 ? expBarComponent[93] : 0.94 <= exp / maxExp && exp / maxExp < 0.95 ? expBarComponent[94] : 0.95 <= exp / maxExp && exp / maxExp < 0.96 ? expBarComponent[95] : 0.96 <= exp / maxExp && exp / maxExp < 0.97 ? expBarComponent[96] : 0.97 <= exp / maxExp && exp / maxExp < 0.98 ? expBarComponent[97] : 0.98 <= exp / maxExp && exp / maxExp < 0.99 ? expBarComponent[98] : 0.99 <= exp / maxExp && exp / maxExp < 1 ? expBarComponent[99] : null,
    alt: "Experience Bar",
    className: "absolute"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-full flex items-left justify-left",
    style: _defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      transform: 'scale(1.4)',
      top: '20%',
      left: '20%',
      right: '80%',
      bottom: '80%',
      marginLeft: '0px',
      marginTop: '0px'
    }, "bottom", '100%'), "display", 'flex'), "alignItems", 'flex-start')
  }, /*#__PURE__*/React.createElement("img", {
    src: vaporeonPortraitNormal,
    alt: "Vaporeon Portrait",
    className: "w-16 h-16"
  })), showDialog && !isPaused ? /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-full h-full flex items-center justify-center",
    style: {
      zIndex: 1000,
      width: '50%',
      height: '75%',
      marginLeft: '25%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: DebugTextDialog[dialogIndex],
    alt: "Dialog",
    className: "absolute w-full h-full"
  })) : null, isPaused && !showOptions && !showMoves && !showToolbox && !showStatus && /*#__PURE__*/React.createElement("div", {
    className: "menu",
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-lg"
  }, "Paused"), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded mr-2",
    onClick: function onClick() {
      return setShowStatus(true);
    }
  }, "Status"), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowMoves(true);
    }
  }, "Moves"), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowToolbox(true);
    }
  }, "Toolbox"), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowOptions(true);
    }
  }, "Options"), /*#__PURE__*/React.createElement("button", {
    className: "bg-red-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setIsPaused(false);
    }
  }, "Close"))), isPaused && showStatus &&
  /*#__PURE__*/
  // Show status menu when Status is clicked
  React.createElement("div", {
    className: "menu status-menu",
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-lg"
  }, "Status"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Level: ", level), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "HP: ", playerHP, "/", maxPlayerHP), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "EXP: ", exp, "/", maxExp), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Attack: ", playerAttack), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Special Attack: ", playerSpecialAttack), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Speed: ", playerSpeed), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Special Defense: ", playerSpecialDefense), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Defense: ", playerDefense), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowStatus(false);
    }
  }, "Back")), isPaused && showOptions &&
  /*#__PURE__*/
  // Show options menu when options are clicked
  React.createElement("div", {
    className: "menu options-menu",
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-lg"
  }, "Options"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checkBox1,
    onChange: function onChange() {
      return setCheckBox1(!checkBox1);
    }
  }), " Checkbox 1"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checkBox2,
    onChange: function onChange() {
      return setCheckBox2(!checkBox2);
    }
  }), " Checkbox 2"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checkBox3,
    onChange: function onChange() {
      return setCheckBox3(!checkBox3);
    }
  }), " Checkbox 3"), /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'white',
      display: 'block',
      marginTop: 12
    }
  }, "Dialogue Speed:"), /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'white',
      display: 'block',
      marginTop: 12,
      textAlign: 'center'
    }
  }, "'Slow'", /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "dialogSpeed",
    value: dialogSpeed,
    onChange: function onChange(e) {
      return setDialogSpeed('Slow');
    },
    checked: dialogSpeed === 'Slow',
    style: {
      width: '100%'
    }
  }), "'Normal' ", /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "dialogSpeed",
    value: dialogSpeed,
    onChange: function onChange(e) {
      return setDialogSpeed('Normal');
    },
    checked: dialogSpeed === 'Normal',
    style: {
      width: '100%'
    }
  }), "'Fast'", /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "dialogSpeed",
    value: dialogSpeed,
    onChange: function onChange(e) {
      return setDialogSpeed('Fast');
    },
    checked: dialogSpeed === 'Fast',
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'white',
      display: 'block',
      marginBottom: 6
    }
  }, "Minimap Size: ", minimapSize, "px"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "200",
    max: "300",
    value: minimapSize,
    onChange: function onChange(e) {
      return setMinimapSize(Number(e.target.value));
    },
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowOptions(false);
    }
  }, "Back")), isPaused && showMoves &&
  /*#__PURE__*/
  // Show moves menu when Moves is clicked
  React.createElement("div", {
    className: "menu moves-menu",
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-lg"
  }, "Moves"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Water Pulse - ", MOVE_DEFS["Water Pulse"].ppcurr, "/", MOVE_DEFS["Water Pulse"].ppmax, " PP"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Aqua Tail - ", MOVE_DEFS["Aqua Tail"].ppcurr, "/", MOVE_DEFS["Aqua Tail"].ppmax, " PP"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Acid Armor - ", MOVE_DEFS["Acid Armor"].ppcurr, "/", MOVE_DEFS["Acid Armor"].ppmax, " PP"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Refresh - ", MOVE_DEFS["Refresh"].ppcurr, "/", MOVE_DEFS["Refresh"].ppmax, " PP"), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowMoves(false);
    }
  }, "Back")), isPaused && showToolbox && /*#__PURE__*/React.createElement("div", {
    className: "menu",
    style: {
      margin: '10px',
      borderColor: 'blue',
      borderWidth: '4px',
      borderStyle: 'solid',
      backgroundColor: 'rgba(0, 0, 50, 0.8)',
      display: 'grid',
      gridTemplateRows: 'auto minmax(0, 1fr)',
      minHeight: '50vh',
      minWidth: '50vh',
      opacity: '1',
      zIndex: '1000'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-lg"
  }, "Toolbox"), inventory.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "No items in inventory.") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, inventory.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx,
      className: "text-white flex items-center mb-2"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.sprite,
      alt: item.name,
      style: {
        width: 32,
        marginRight: 8
      }
    }), item.name, " x", item.count);
  })), showItemActionMenu && itemSelected !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '70%',
      top: "".concat(40 * (itemOrder - 1) + 60, "px"),
      background: 'rgba(0,0,50,0.95)',
      border: '2px solid white',
      borderRadius: '8px',
      padding: '10px',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, selectedItemSpriteRef.current !== Scarf ? itemActionsNormal.map(function (action, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: action,
      style: {
        color: idx === itemActionIndex ? 'yellow' : 'white',
        fontWeight: idx === itemActionIndex ? 'bold' : 'normal',
        marginBottom: '6px',
        fontSize: '18px'
      }
    }, action);
  }) : itemActionsEquip.map(function (action, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: action,
      style: {
        color: idx === itemActionIndex ? 'yellow' : 'white',
        fontWeight: idx === itemActionIndex ? 'bold' : 'normal',
        marginBottom: '6px',
        fontSize: '18px'
      }
    }, action);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "menu-itemSelector"
  }, /*#__PURE__*/React.createElement("img", {
    src: itemSelector,
    alt: "Item Selector",
    style: {
      width: 64,
      height: 64,
      marginLeft: '55%',
      animation: 'flicker 1s infinite',
      transform: itemOrder <= 1 ? "none" : "translateY(".concat((itemOrder - 1) * 40, "px)"),
      opacity: showItemActionMenu ? 1 : itemSelected !== null && flickerFrame !== 0 ? 1 : 0,
      zIndex: itemSelected !== null ? 101 : 'auto',
      position: 'fixed',
      top: '35px'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: function onClick() {
      return setShowToolbox(false);
    }
  }, "Back")));
};
var MemoizedGame = React.memo(Game);

// Render the memoized component
ReactDOM.render(/*#__PURE__*/React.createElement(MemoizedGame, null),
// Use the memoized component as a JSX element
document.getElementById('root'));