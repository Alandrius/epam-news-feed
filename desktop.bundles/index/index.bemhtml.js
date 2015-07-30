(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "default") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                return [ function __$lb__$3() {
                    var __$r__$4;
                    var __$l0__$5 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$4 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$5;
                    return __$r__$4;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return {
                    elem: "box",
                    content: {
                        elem: "control"
                    }
                };
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$14() {
                        var __$r__$15;
                        var __$l0__$16 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$15 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$16;
                        return __$r__$15;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem) {
                return {
                    val: __$ctx.ctx.val
                };
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 32) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$28() {
                        var __$r__$29;
                        var __$l0__$30 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$29 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$30;
                        return __$r__$29;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b63(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b64(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["_menuItemDisabled"] = undefined;
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_input"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    applyc(__$ctx, __$ref);
    return;
}

function __$b2(__$ctx, __$ref) {
    var ctx__$20 = __$ctx.ctx;
    typeof ctx__$20.url === "object" && (ctx__$20.url = __$ctx.reapply(ctx__$20.url));
    var __$r__$22;
    var __$l0__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$23;
    return;
}

function __$b3(__$ctx, __$ref) {
    var __$r__$1;
    var __$l0__$2 = __$ctx._menuItemDisabled;
    __$ctx._menuItemDisabled = true;
    __$r__$1 = applyc(__$ctx, __$ref);
    __$ctx._menuItemDisabled = __$l0__$2;
    return;
}

function __$b4(__$ctx, __$ref) {
    var mods__$24 = $$mods;
    mods__$24.theme = mods__$24.theme || __$ctx._menuMods.theme;
    mods__$24.disabled = mods__$24.disabled || __$ctx._menuMods.disabled;
    var __$r__$26;
    var __$l0__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$27;
    return;
}

function __$b5(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$6.nonce;
    var __$r__$8;
    var __$l0__$9 = $$mode;
    $$mode = "";
    var __$l1__$10 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$6.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$6.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$6.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$6.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$6.nonce
                }
            }, ctx__$6.head, ctx__$6.styles, ctx__$6.favicon ? {
                elem: "favicon",
                url: ctx__$6.favicon
            } : "" ]
        }, ctx__$6 ]
    } ];
    var __$r__$12;
    var __$l2__$13 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$12 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$13;
    __$r__$8 = __$r__$12;
    $$mode = __$l0__$9;
    __$ctx.ctx = __$l1__$10;
    return;
}

function __$b6(__$ctx, __$ref) {
    var url__$48 = __$ctx.ctx.url;
    var __$r__$50;
    var __$l0__$51 = $$mode;
    $$mode = "";
    var __$l1__$52 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$48 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$54;
    var __$l2__$55 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$54 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$55;
    __$r__$50 = __$r__$54;
    $$mode = __$l0__$51;
    __$ctx.ctx = __$l1__$52;
    return;
}

function __$b7(__$ctx, __$ref) {
    var ie__$56 = __$ctx.ctx.ie, hideRule__$57 = !ie__$56 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$56 === "!IE" ? [ ie__$56, "<!-->", "<!--" ] : [ ie__$56, "", "" ];
    var __$r__$59;
    var __$l0__$60 = $$mode;
    $$mode = "";
    var __$l3__$61 = __$ctx.ctx;
    var __$l1__$62 = __$l3__$61._ieCommented;
    __$l3__$61._ieCommented = true;
    var __$l2__$63 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$57[0] + "]>" + hideRule__$57[1], __$ctx.ctx, hideRule__$57[2] + "<![endif]-->" ];
    __$r__$59 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$60;
    __$l3__$61._ieCommented = __$l1__$62;
    __$ctx.ctx = __$l2__$63;
    return;
}

function __$b8(__$ctx, __$ref) {
    var __$r__$42;
    var __$l0__$43 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$45;
    var __$l1__$46 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$45 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$46;
    __$r__$42 = __$r__$45;
    __$ctx._input = __$l0__$43;
    return;
}

function __$b9(__$ctx, __$ref) {
    var BEM_INTERNAL__$64 = __$ctx.BEM.INTERNAL, ctx__$65 = __$ctx.ctx, isBEM__$66, tag__$67, res__$68;
    var __$r__$70;
    var __$l0__$71 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$72 = $$block;
    var __$r__$74;
    var __$l1__$75 = $$mode;
    $$mode = "tag";
    __$r__$74 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$75;
    tag__$67 = __$r__$74;
    typeof tag__$67 !== "undefined" || (tag__$67 = ctx__$65.tag);
    typeof tag__$67 !== "undefined" || (tag__$67 = "div");
    if (tag__$67) {
        var jsParams__$76, js__$77;
        if (vBlock__$72 && ctx__$65.js !== false) {
            var __$r__$78;
            var __$l2__$79 = $$mode;
            $$mode = "js";
            __$r__$78 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$79;
            js__$77 = __$r__$78;
            js__$77 = js__$77 ? __$ctx.extend(ctx__$65.js, js__$77 === true ? {} : js__$77) : ctx__$65.js === true ? {} : ctx__$65.js;
            js__$77 && ((jsParams__$76 = {})[BEM_INTERNAL__$64.buildClass(vBlock__$72, ctx__$65.elem)] = js__$77);
        }
        __$ctx._str += "<" + tag__$67;
        var __$r__$80;
        var __$l3__$81 = $$mode;
        $$mode = "bem";
        __$r__$80 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$81;
        isBEM__$66 = __$r__$80;
        typeof isBEM__$66 !== "undefined" || (isBEM__$66 = typeof ctx__$65.bem !== "undefined" ? ctx__$65.bem : ctx__$65.block || ctx__$65.elem);
        var __$r__$83;
        var __$l4__$84 = $$mode;
        $$mode = "cls";
        __$r__$83 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$84;
        var cls__$82 = __$r__$83;
        cls__$82 || (cls__$82 = ctx__$65.cls);
        var addJSInitClass__$85 = ctx__$65.block && jsParams__$76 && !ctx__$65.elem;
        if (isBEM__$66 || cls__$82) {
            __$ctx._str += ' class="';
            if (isBEM__$66) {
                __$ctx._str += BEM_INTERNAL__$64.buildClasses(vBlock__$72, ctx__$65.elem, ctx__$65.elemMods || ctx__$65.mods);
                var __$r__$87;
                var __$l5__$88 = $$mode;
                $$mode = "mix";
                __$r__$87 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$88;
                var mix__$86 = __$r__$87;
                ctx__$65.mix && (mix__$86 = mix__$86 ? [].concat(mix__$86, ctx__$65.mix) : ctx__$65.mix);
                if (mix__$86) {
                    var visited__$89 = {}, visitedKey__$90 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$89[visitedKey__$90(vBlock__$72, $$elem)] = true;
                    __$ctx.isArray(mix__$86) || (mix__$86 = [ mix__$86 ]);
                    for (var i__$91 = 0; i__$91 < mix__$86.length; i__$91++) {
                        var mixItem__$92 = mix__$86[i__$91], hasItem__$93 = mixItem__$92.block && (vBlock__$72 !== ctx__$65.block || mixItem__$92.block !== vBlock__$72) || mixItem__$92.elem, mixBlock__$94 = mixItem__$92.block || mixItem__$92._block || $$block, mixElem__$95 = mixItem__$92.elem || mixItem__$92._elem || $$elem;
                        hasItem__$93 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$64[hasItem__$93 ? "buildClasses" : "buildModsClasses"](mixBlock__$94, mixItem__$92.elem || mixItem__$92._elem || (mixItem__$92.block ? undefined : $$elem), mixItem__$92.elemMods || mixItem__$92.mods);
                        if (mixItem__$92.js) {
                            (jsParams__$76 || (jsParams__$76 = {}))[BEM_INTERNAL__$64.buildClass(mixBlock__$94, mixItem__$92.elem)] = mixItem__$92.js === true ? {} : mixItem__$92.js;
                            addJSInitClass__$85 || (addJSInitClass__$85 = mixBlock__$94 && !mixItem__$92.elem);
                        }
                        if (hasItem__$93 && !visited__$89[visitedKey__$90(mixBlock__$94, mixElem__$95)]) {
                            visited__$89[visitedKey__$90(mixBlock__$94, mixElem__$95)] = true;
                            var __$r__$97;
                            var __$l6__$98 = $$mode;
                            $$mode = "mix";
                            var __$l7__$99 = $$block;
                            $$block = mixBlock__$94;
                            var __$l8__$100 = $$elem;
                            $$elem = mixElem__$95;
                            __$r__$97 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$98;
                            $$block = __$l7__$99;
                            $$elem = __$l8__$100;
                            var nestedMix__$96 = __$r__$97;
                            if (nestedMix__$96) {
                                for (var j__$101 = 0; j__$101 < nestedMix__$96.length; j__$101++) {
                                    var nestedItem__$102 = nestedMix__$96[j__$101];
                                    if (!nestedItem__$102.block && !nestedItem__$102.elem || !visited__$89[visitedKey__$90(nestedItem__$102.block, nestedItem__$102.elem)]) {
                                        nestedItem__$102._block = mixBlock__$94;
                                        nestedItem__$102._elem = mixElem__$95;
                                        mix__$86.splice(i__$91 + 1, 0, nestedItem__$102);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$82 && (__$ctx._str += isBEM__$66 ? " " + cls__$82 : cls__$82);
            __$ctx._str += addJSInitClass__$85 ? ' i-bem"' : '"';
        }
        if (isBEM__$66 && jsParams__$76) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$76)) + '"';
        }
        var __$r__$104;
        var __$l9__$105 = $$mode;
        $$mode = "attrs";
        __$r__$104 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$105;
        var attrs__$103 = __$r__$104;
        attrs__$103 = __$ctx.extend(attrs__$103, ctx__$65.attrs);
        if (attrs__$103) {
            var name__$106, attr__$107;
            for (name__$106 in attrs__$103) {
                attr__$107 = attrs__$103[name__$106];
                if (typeof attr__$107 === "undefined") continue;
                __$ctx._str += " " + name__$106 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$107) ? attr__$107 : __$ctx.reapply(attr__$107)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$67)) {
        __$ctx._str += "/>";
    } else {
        tag__$67 && (__$ctx._str += ">");
        var __$r__$109;
        var __$l10__$110 = $$mode;
        $$mode = "content";
        __$r__$109 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$110;
        var content__$108 = __$r__$109;
        if (content__$108 || content__$108 === 0) {
            isBEM__$66 = vBlock__$72 || $$elem;
            var __$r__$111;
            var __$l11__$112 = $$mode;
            $$mode = "";
            var __$l12__$113 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$114 = __$ctx.position;
            __$ctx.position = isBEM__$66 ? 1 : __$ctx.position;
            var __$l14__$115 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$66 ? 1 : __$ctx._listLength;
            var __$l15__$116 = __$ctx.ctx;
            __$ctx.ctx = content__$108;
            __$r__$111 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$112;
            __$ctx._notNewList = __$l12__$113;
            __$ctx.position = __$l13__$114;
            __$ctx._listLength = __$l14__$115;
            __$ctx.ctx = __$l15__$116;
        }
        tag__$67 && (__$ctx._str += "</" + tag__$67 + ">");
    }
    res__$68 = __$ctx._str;
    __$r__$70 = undefined;
    __$ctx._str = __$l0__$71;
    __$ctx._buf.push(res__$68);
    return;
}

function __$b10(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx, attrs__$18 = {}, tabIndex__$19;
    if (!$$mods.disabled) {
        if (ctx__$17.url) {
            attrs__$18.href = ctx__$17.url;
            tabIndex__$19 = ctx__$17.tabIndex;
        } else {
            tabIndex__$19 = ctx__$17.tabIndex || 0;
        }
    }
    typeof tabIndex__$19 === "undefined" || (attrs__$18.tabindex = tabIndex__$19);
    ctx__$17.title && (attrs__$18.title = ctx__$17.title);
    ctx__$17.target && (attrs__$18.target = ctx__$17.target);
    return attrs__$18;
}

function __$b13(__$ctx, __$ref) {
    var attrs__$47 = {};
    if (__$ctx.ctx.url) {
        attrs__$47.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$47.nonce = __$ctx._nonceCsp;
    }
    return attrs__$47;
}

function __$b15(__$ctx, __$ref) {
    var ctx__$33 = __$ctx.ctx, attrs__$34 = {
        type: $$mods.type || "button",
        name: ctx__$33.name,
        value: ctx__$33.val
    };
    $$mods.disabled && (attrs__$34.disabled = "disabled");
    return __$ctx.extend(function __$lb__$35() {
        var __$r__$36;
        var __$l0__$37 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$36 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$37;
        return __$r__$36;
    }(), attrs__$34);
}

function __$b16(__$ctx, __$ref) {
    var ctx__$38 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$38.tabIndex,
        id: ctx__$38.id,
        title: ctx__$38.title
    };
}

function __$b17(__$ctx, __$ref) {
    var input__$39 = __$ctx._input, attrs__$40 = {
        id: input__$39.id,
        name: input__$39.name,
        value: input__$39.val,
        maxlength: input__$39.maxLength,
        tabindex: input__$39.tabIndex,
        placeholder: input__$39.placeholder
    };
    input__$39.autocomplete === false && (attrs__$40.autocomplete = "off");
    $$mods.disabled && (attrs__$40.disabled = "disabled");
    return attrs__$40;
}

function __$b45(__$ctx, __$ref) {
    var ctx__$31 = __$ctx.ctx, content__$32 = [ ctx__$31.icon ];
    "text" in ctx__$31 && content__$32.push({
        elem: "text",
        content: ctx__$31.text
    });
    return content__$32;
}

function __$b60(__$ctx, __$ref) {
    var __$r__$118;
    var __$l0__$119 = $$mode;
    $$mode = "";
    var __$l1__$120 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$122;
    var __$l2__$123 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$122 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$123;
    __$r__$118 = __$r__$122;
    $$mode = __$l0__$119;
    __$ctx.ctx = __$l1__$120;
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$124 = __$ctx.ctx;
    if (ctx__$124 && ctx__$124 !== true || ctx__$124 === 0) {
        __$ctx._str += ctx__$124 + "";
    }
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b63(__$ctx, __$ref) {
    var ctx__$125 = __$ctx.ctx, len__$126 = ctx__$125.length, i__$127 = 0, prevPos__$128 = __$ctx.position, prevNotNewList__$129 = __$ctx._notNewList;
    if (prevNotNewList__$129) {
        __$ctx._listLength += len__$126 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$126;
    }
    __$ctx._notNewList = true;
    while (i__$127 < len__$126) (function __$lb__$130() {
        var __$r__$131;
        var __$l0__$132 = __$ctx.ctx;
        __$ctx.ctx = ctx__$125[i__$127++];
        __$r__$131 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$132;
        return __$r__$131;
    })();
    prevNotNewList__$129 || (__$ctx.position = prevPos__$128);
    return;
}

function __$b64(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$133 = __$ctx.ctx.block, vElem__$134 = __$ctx.ctx.elem, block__$135 = __$ctx._currBlock || $$block;
    var __$r__$137;
    var __$l0__$138 = $$mode;
    $$mode = "default";
    var __$l1__$139 = $$block;
    $$block = vBlock__$133 || (vElem__$134 ? block__$135 : undefined);
    var __$l2__$140 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$133 || vElem__$134 ? undefined : block__$135;
    var __$l3__$141 = $$elem;
    $$elem = vElem__$134;
    var __$l4__$142 = $$mods;
    $$mods = vBlock__$133 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$143 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$137 = undefined;
    $$mode = __$l0__$138;
    $$block = __$l1__$139;
    __$ctx._currBlock = __$l2__$140;
    $$elem = __$l3__$141;
    $$mods = __$l4__$142;
    $$elemMods = __$l5__$143;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if (__$ctx._menuItemDisabled) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && $$mods["type"] === "link") {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuMods && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "page") {
        if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 256) === 0) {
                        var __$r = __$b6(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b7(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
            var __$r = __$b8(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b9(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b10(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "favicon") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
        } else if (__$t === "js") {
            var __$r = __$b13(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return {
                    rel: "stylesheet",
                    href: __$ctx.ctx.url
                };
            }
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b15(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b16(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if ($$elem === "control") {
            var __$r = __$b17(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "link") {
        if (!$$elem) {
            return "a";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "link") {
            return "link";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        } else if (__$t === "head") {
            return "head";
        }
        if (!$$elem) {
            return "body";
        }
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);