!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.JSR = t()
}(this, function () {
    "use strict";

    function e(e, t, i) {
        e.addEventListener(t, i)
    }

    function t(i, s, r) {
        i instanceof Array ? i.forEach(i => {
            i instanceof Array ? t(i, s, r) : e(i, s, r)
        }) : e(i, s, r)
    }

    function i(e) {
        const t = e.toString().split(".");
        return t[1] ? t[1].length : 0
    }

    function s(e, t, i) {
        return (i - e) / (t - e)
    }

    function r(e, t, s, r) {
        return function (e, t) {
            const s = i(t), r = Math.pow(10, s);
            return e = Math.round(e / t) * t, Math.round(e * r) / r
        }(s = (t - e) * s + e, r)
    }

    var n = function (e) {
        return function (e) {
            return !!e && "object" == typeof e
        }(e) && !function (e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === o
            }(e)
        }(e)
    };
    var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function l(e, t) {
        var i;
        return (!t || !1 !== t.clone) && n(e) ? h((i = e, Array.isArray(i) ? [] : {}), e, t) : e
    }

    function a(e, t, i) {
        return e.concat(t).map(function (e) {
            return l(e, i)
        })
    }

    function h(e, t, i) {
        var s = Array.isArray(t);
        return s === Array.isArray(e) ? s ? ((i || {arrayMerge: a}).arrayMerge || a)(e, t, i) : function (e, t, i) {
            var s = {};
            return n(e) && Object.keys(e).forEach(function (t) {
                s[t] = l(e[t], i)
            }), Object.keys(t).forEach(function (r) {
                n(t[r]) && e[r] ? s[r] = h(e[r], t[r], i) : s[r] = l(t[r], i)
            }), s
        }(e, t, i) : l(t, i)
    }

    h.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function (e, i) {
            return h(e, i, t)
        }, {})
    };
    var u = h;
    var c = {
        name: "core", Klass: class {
            constructor() {
                this.logger = null, this.config = {min: 0, max: 0, step: 0}, this.temp = {
                    sliderInMove: null,
                    sliderClickX: 0,
                    barInMove: null,
                    barClickX: 0
                }, this.modules = {}, this.values = [], this.valueInMove = [], this.stepRatio = 0, this.stepRatioDecimals = 0
            }

            _setValue(e, t = null, s = !1) {
                if (!this.config.enabled) return null;
                t = null === t ? function (e, t) {
                    let i = 1, s = 0;
                    return e.forEach((e, r) => {
                        const n = Math.abs(e - t);
                        n < i && (s = r, i = n)
                    }), s
                }(this.values, e) : parseInt(t), s && (e = this.valueInMove[t] + e), null !== this.limit.min && e < this.limit.min && (e = this.limit.min), null !== this.limit.max && e > this.limit.max && (e = this.limit.max), void 0 !== this.values[t - 1] && e < this.values[t - 1] && (e = this.values[t - 1]), void 0 !== this.values[t + 1] && e > this.values[t + 1] && (e = this.values[t + 1]);
                const n = function (e, t) {
                    const s = i(t), r = Math.pow(10, s);
                    return e = Math.round(e / t) * t, Math.round(e * r) / r
                }(e, this.stepRatio);
                n !== this.values[t] && (this.values[t] = n, this.setSliderValue(n, t), this.modules.eventizer.trigger("core/value:update", t, r(this.config.min, this.config.max, n, this.config.step), n))
            }

            _updateBars(e, t) {
                const i = this.modules.renderer.body;
                if (!i.bars) return;
                const s = i.bars[e - 1], r = i.bars[e];
                s && (s.style.right = `${100 * (1 - t)}%`), r && (r.style.left = `${100 * t}%`)
            }

            setSliderValue(e, t) {
                const i = this.modules.renderer.body.sliders[t], s = `${100 * e}%`;
                this.logger.debug(`JSR: Slider no. ${t} set to value: ${e}.`), this.values[t] = e, i.style.left = s, this._updateBars(t, e)
            }

            _initValues() {
                this.values = [], this.config.values.forEach((e, t) => {
                    e = s(this.config.min, this.config.max, e), this._setValue(e, t)
                })
            }

            _initLimits() {
                this.limit = {}, this.setLimit("min", this.config.limit.min, !0), this.setLimit("max", this.config.limit.max, !0)
            }

            _initData() {
                var e, t;
                this.stepRatio = (e = this.config.min, t = this.config.max, this.config.step / (t - e)), this.stepRatioDecimals = i(this.stepRatio)
            }

            build({config: e, modules: t, logger: i}) {
                this.config = e, this.logger = i, this.modules = t, this._initLimits(), this._initData()
            }

            init(e) {
                this.modules.renderer.appendRoot(e[0]), this._initValues(), function () {
                    const e = this.modules.eventizer, i = this.modules.renderer.body;
                    t(i.root, "mousedown", t => {
                        this.temp.mouseDown = !0, e.trigger("view/mousedown", t)
                    }), t(document, "mousemove", t => {
                        this.temp.mouseDown && (this.temp.mouseMove = !0, e.trigger("view/mousemove", t))
                    }), t(document, "mouseup", t => {
                        e.trigger("view/mouseup", t), this.temp.mouseMove = !1, this.temp.mouseDown = !1
                    }), t(i.root, "keydown", t => {
                        e.trigger("view/keydown", t)
                    }), e.register("view/mouseup", t => {
                        !this.temp.mouseMove && this.temp.mouseDown && e.trigger("view/click", t)
                    }), e.register("view/mousedown", t => {
                        if (!t.target.classList.contains("jsr_slider")) return;
                        t.stopPropagation(), this.temp.sliderInMove = parseInt(t.target.dataset.jsrId), this.temp.sliderClickX = t.clientX;
                        const i = function (e, t) {
                            const i = [];
                            return e.forEach((s, r) => {
                                s === e[t] && i.push(r)
                            }), i
                        }(this.values, this.temp.sliderInMove);
                        i.length > 1 && (this.temp.sliderInMove = i), e.trigger("view/slider:mousedown", t, i)
                    }), e.register("view/mousemove", t => {
                        if (null === this.temp.sliderInMove) return;
                        this.temp.sliderInMove instanceof Array && (t.clientX < this.temp.sliderClickX ? this.temp.sliderInMove = this.temp.sliderInMove[0] : this.temp.sliderInMove = this.temp.sliderInMove.pop()), i.sliders[this.temp.sliderInMove].focus(), i.sliders[this.temp.sliderInMove].classList.add("jsr_slider--active");
                        const s = (t.clientX - this.temp.sliderClickX) / i.railOuter.offsetWidth;
                        e.trigger("view/slider:mousemove", t, this.temp.sliderInMove, s)
                    }), e.register("view/mouseup", t => {
                        null !== this.temp.sliderInMove && (i.sliders.forEach(e => {
                            e.classList.remove("jsr_slider--active")
                        }), e.trigger("view/slider:mouseup", t, this.temp.sliderInMove), this.temp.sliderInMove = null)
                    }), e.register("view/click", t => {
                        const s = (t.clientX - i.railOuter.getBoundingClientRect().left) / i.railOuter.offsetWidth;
                        e.trigger("view/rail:click", t, s)
                    }), i.bars && (e.register("view/mousedown", t => {
                        t.target.classList.contains("jsr_bar") && (t.stopPropagation(), this.temp.barInMove = parseInt(t.target.dataset.jsrId), this.temp.barClickX = t.clientX, e.trigger("view/bar:mousedown", t, this.temp.barInMove))
                    }), e.register("view/mousemove", t => {
                        if (null === this.temp.barInMove) return;
                        this.temp.barIsMoved = !0;
                        const s = (t.clientX - this.temp.barClickX) / i.railOuter.offsetWidth;
                        e.trigger("view/bar:mousemove", t, this.temp.barInMove, s)
                    }), e.register("view/mouseup", t => {
                        null !== this.temp.barInMove && (e.trigger("view/bar:mouseup", t, this.temp.barInMove), this.temp.barInMove = null, this.temp.barIsMoved = !1)
                    })), e.register("view/keydown", t => {
                        const i = t.target.dataset.jsrId, s = {37: -1, 38: 1, 39: 1, 40: -1}[t.keyCode.toString()];
                        if (!s) return !1;
                        t.preventDefault(), e.trigger("view/root:arrow", t, i, s)
                    }), e.register("view/slider:mousedown", (e, t) => {
                        this.logger.debug("JSR: Slider mousedown."), this.logger.debug(e), t.forEach(e => {
                            this.valueInMove[e] = this.values[e]
                        })
                    }), e.register("view/slider:mousemove", (e, t, i) => {
                        this.logger.debug("JSR: Slider mousemove."), this.logger.debug(e), this._setValue(i, t, !0)
                    }), e.register("view/slider:mouseup", e => {
                        this.logger.debug("JSR: Slider mouseup."), this.logger.debug(e)
                    }), e.register("view/rail:click", (e, t) => {
                        this.logger.debug("JSR: Rail clicked."), this.logger.debug(e), this._setValue(t)
                    }), e.register("view/root:arrow", (e, t, i) => {
                        const s = this.values[t] + (e.shiftKey ? .05 : e.ctrlKey ? 10 * this.stepRatio : this.stepRatio) * i;
                        this._setValue(s, t)
                    }), e.register("view/bar:mousedown", (e, t) => {
                        this.logger.debug("JSR: Bar mousedown."), this.logger.debug(e), this.valueInMove[t] = this.values[t], this.valueInMove[t + 1] = this.values[t + 1]
                    }), e.register("view/bar:mousemove", (e, t, i) => {
                        this.logger.debug("JSR: Bar mousemove."), this.logger.debug(e), this._setValue(i, t, !0), this._setValue(i, t + 1, !0)
                    }), e.register("view/bar:mouseup", e => {
                        this.logger.debug("JSR: Bar mouseup."), this.logger.debug(e)
                    })
                }.call(this), this.logger.info("JSR: Core initiated.")
            }

            getValue(e) {
                const t = this.values[e];
                return r(this.config.min, this.config.max, t, this.config.step)
            }

            refresh(e) {
                this.config = u(this.config, e, {arrayMerge: (e, t) => t}), this._initLimits(), this._initData(), this._initValues(), this.logger.debug("JSR: core refreshed")
            }

            setValue(e, t) {
                e = s(this.config.min, this.config.max, e), this._setValue(e, t)
            }

            setLimit(e, t, i = !1) {
                if (null === t || void 0 === t) this.limit[e] = "min" === e ? 0 : 1; else {
                    if (this.limit[e] = s(this.config.min, this.config.max, t), this.limit[e] < 0 ? this.limit[e] = 0 : this.limit[e] > 1 && (this.limit[e] = 1), this.config.limit.show) {
                        const e = this.modules.renderer.body.limitBar;
                        e.style.left = `${100 * this.limit.min}%`, e.style.right = `${100 * (1 - this.limit.max)}%`
                    }
                    if (i) return;
                    this.values.forEach((e, t) => {
                        this._setValue(e, t)
                    })
                }
            }

            view() {
                const e = {
                    classes: ["jsr_slider"],
                    attributes: {tabindex: 0},
                    count: this.config.sliders || 1,
                    alwaysArray: !0,
                    name: "sliders",
                    parent: "rail"
                };
                return [{
                    classes: ["jsr_rail-outer"],
                    count: 1,
                    name: "railOuter",
                    parent: "root"
                }, {classes: ["jsr_rail"], count: 1, name: "rail", parent: "railOuter"}, e, {
                    classes: ["jsr_bar"],
                    count: e.count - 1,
                    alwaysArray: !0,
                    name: "bars",
                    parent: "rail"
                }, {classes: ["jsr_bar", "jsr_bar--limit"], count: 1, name: "limitBar", parent: "rail"}]
            }
        }
    };
    var d = function (e, t) {
        const i = {};
        return function e(t, i, s, r) {
            const n = i[t], o = n.count, l = [];
            if (o <= 0) return l;
            s[t] = s[t] || [];
            for (let e = 0; e < o; e += 1) {
                const e = document.createElement("div");
                e.classList.add(...n.classes), s[t].push(e), l.push(e)
            }
            return n.children && n.children.length > 0 && n.children.forEach(n => {
                for (let l = 0; l < o; l += 1) e(n, i, s, r).forEach(e => {
                    r[n] = void 0 === r[n] ? 0 : r[n] + 1, e.dataset.jsrId = r[n];
                    for (const t in i[n].attributes) e.setAttribute(t, i[n].attributes[t]);
                    s[t][l].appendChild(e)
                })
            }), l
        }(t, e, i, {}), function (e, t) {
            for (const i in e) 1 !== e[i].length || t[i].alwaysArray || (e[i] = e[i][0])
        }(i, e), i
    };
    var g = {
        name: "renderer", Klass: class {
            constructor() {
                this.logger = null, this.config = {}, this.modules = {}, this.body = {}, this.bodyStructure = {
                    root: {
                        classes: ["jsr"],
                        count: 1
                    }
                }
            }

            _createBody(e) {
                const t = u({}, this.bodyStructure);
                for (const e in this.modules) this.modules[e].view && this.modules[e].view().forEach(e => {
                    t[e.name] = e, t[e.parent].children || (t[e.parent].children = []), t[e.parent].children.push(e.name)
                });
                return d(t, e)
            }

            build({modules: e, logger: t, config: i}) {
                this.modules = e, this.logger = t, this.config = i, this.body = this._createBody("root"), this.modules.eventizer.trigger("modules/renderer:builded")
            }

            appendRoot(e) {
                e.parentNode.insertBefore(this.body.root, e.nextSibling), this.modules.eventizer.trigger("modules/renderer:rootAppended")
            }
        }
    }, m = class {
        constructor(e) {
            this.callback = e, this.enabled = !0
        }

        disable() {
            this.enabled = !1
        }

        enable() {
            this.enabled = !0
        }

        trigger(...e) {
            this.enabled && this.callback(...e)
        }
    };
    var f = {
        name: "eventizer", Klass: class {
            constructor() {
                this.store = {}
            }

            _createNewStore(e) {
                this.store[e] || (this.store[e] = [])
            }

            _addListener(e, t) {
                this._createNewStore(e);
                const i = new m(t);
                return this.store[e].push(i), i
            }

            _dispatchEvent(e, ...t) {
                if (!this.store[e]) return !1;
                const i = this.store[e].length;
                for (let s = 0; s < i; s += 1) this.store[e][s].trigger(...t)
            }

            register(e, t) {
                return this._addListener(e, t)
            }

            trigger(e, ...t) {
                this._dispatchEvent(e, ...t)
            }
        }
    };
    const v = {debug: 0, info: 1, warn: 2, error: 3, disable: 4};
    var p = {
        name: "inputUpdater", Klass: class {
            constructor() {
                this.input = null
            }

            _bindEvents() {
                this.modules.eventizer.register("core/value:update", (e, t) => {
                    this.inputs[e].value = t, this.modules.eventizer.trigger("input/value:update", this.inputs[e], t), this.logger.debug(`JSR: Input ${e} updated with value ${t}`)
                })
            }

            build({config: e, modules: t, logger: i}, s) {
                this.inputs = s.inputs, this.logger = i, this.config = e, this.modules = t, this._bindEvents()
            }
        }
    }, b = function (e, t, i) {
        var s, r, n, o, l;

        function a() {
            var h = Date.now() - o;
            h < t && h >= 0 ? s = setTimeout(a, t - h) : (s = null, i || (l = e.apply(n, r), n = r = null))
        }

        null == t && (t = 100);
        var h = function () {
            n = this, r = arguments, o = Date.now();
            var h = i && !s;
            return s || (s = setTimeout(a, t)), h && (l = e.apply(n, r), n = r = null), l
        };
        return h.clear = function () {
            s && (clearTimeout(s), s = null)
        }, h.flush = function () {
            s && (l = e.apply(n, r), n = r = null, clearTimeout(s), s = null)
        }, h
    };

    function y(e, t) {
        this.mergedLabels.push(t), this.labels[e].appendChild(this.labels[t])
    }

    function w() {
        const e = this.labels;
        (function () {
            this.mergedLabels.forEach(e => {
                this.labelsParent.appendChild(this.labels[e])
            }), this.mergedLabels = []
        }).call(this);
        let t = 0, i = t + 1;
        for (; i < e.length;) e[t].getBoundingClientRect().right + 5 >= e[i].getBoundingClientRect().left ? (y.call(this, t, i), i += 1) : (t += 1, i += 1);
        this.minMax[0].getBoundingClientRect().right + 5 >= this.labels[0].getBoundingClientRect().left ? this.minMax[0].style.opacity = "0" : this.minMax[0].style.opacity = "1", this.labels[this.labels.length - 1].getBoundingClientRect().right + 5 >= this.minMax[1].getBoundingClientRect().left ? this.minMax[1].style.opacity = "0" : this.minMax[1].style.opacity = "1"
    }

    var M = {
        name: "labels", Klass: class {
            constructor() {
                this.labels = [], this.minMax = [], this.values = [], this.labelsParent = null, this.mergedLabels = []
            }

            _bindEvents() {
                const e = this.modules.eventizer;
                e.register("core/value:update", (e, t, s) => {
                    this.values[e] = [t, s], function (e, t, s) {
                        const r = this.labels[e];
                        if (this.config.step < 1) {
                            const e = i(t), s = i(this.config.step) - e;
                            if (s > 0) {
                                const e = t.toString().split(".");
                                t = `${e[0]}.${e[1] || 0}${Array(s).join("0")}`
                            }
                        }
                        r.innerHTML = this.formatter ? this.formatter(t) : t, this.values[e] = s;
                        let n = r.getBoundingClientRect();
                        r.style.left = `calc(${100 * s}% - ${n.width / 2}px)`, function () {
                            return this.values.filter(e => void 0 !== e).length === this.config.values.length
                        }.call(this) && w.call(this);
                        const o = this.modules.renderer.body.root.getBoundingClientRect();
                        (n = r.getBoundingClientRect()).right > o.right && (r.style.left = `calc(100% - ${n.width}px)`), n.left < o.left && (r.style.left = "0")
                    }.call(this, e, t, s)
                }), e.register("view/mousedown", e => {
                    if (!e.target.classList.contains("jsr_label")) return;
                    e.stopPropagation();
                    const t = new MouseEvent("mousedown", e);
                    this.modules.renderer.body.sliders[e.target.dataset.jsrId].dispatchEvent(t)
                }), t(window, "resize", b(() => {
                    w.call(this)
                }, 100))
            }

            _parseMinMax() {
                this.minMax[0].innerHTML = this.formatter ? this.formatter(this.config.min) : this.config.min, this.minMax[1].innerHTML = this.formatter ? this.formatter(this.config.max) : this.config.max, this.minMax[0].style.left = "0%", this.minMax[1].style.right = "0%", this.config.labels.minMax || (this.minMax[0].style.display = "none", this.minMax[1].style.display = "none")
            }

            build({config: e, modules: t, logger: i}) {
                this.logger = i, this.config = u({
                    labels: {
                        minMax: !0,
                        formatter: null
                    }
                }, e), this.modules = t, this.formatter = this.config.labels.formatter, this.modules.eventizer.register("modules/renderer:builded", () => {
                    this.labels = this.modules.renderer.body.labels, this.labelsParent = this.labels[0].parentNode, this.minMax = this.modules.renderer.body.labelsMinMax, this._parseMinMax(), this._bindEvents()
                })
            }

            refresh(e) {
                this.config = u(this.config, e, {arrayMerge: (e, t) => t}), this.formatter = this.config.labels.formatter, this._parseMinMax(), w.call(this), this.logger.debug("JSR: labels refreshed")
            }

            view() {
                return [{
                    classes: ["jsr_label"],
                    children: [],
                    count: this.config.sliders,
                    alwaysArray: !0,
                    parent: "rail",
                    name: "labels"
                }, {
                    classes: ["jsr_label", "jsr_label--minmax"],
                    children: [],
                    count: 2,
                    parent: "rail",
                    name: "labelsMinMax"
                }]
            }
        }
    };
    var _ = {
        name: "touchSupport", Klass: class {
            _bindEvents() {
                t(this.modules.renderer.body.root, "touchstart", e => {
                    document.documentElement.classList.add("jsr_lockscreen"), (e = e.targetTouches.item(0)).bubbles = !0, e.cancelable = !0;
                    const t = new MouseEvent("mousedown", e);
                    e.target.dispatchEvent(t)
                }), t(document, "touchmove", e => {
                    (e = e.targetTouches.item(0)).bubbles = !0, e.cancelable = !0;
                    const t = new MouseEvent("mousemove", e);
                    e.target.dispatchEvent(t)
                }), t(document, "touchend", e => {
                    document.documentElement.classList.remove("jsr_lockscreen"), (e = e.changedTouches.item(0)).bubbles = !0, e.cancelable = !0;
                    const t = new MouseEvent("mouseup", e);
                    e.target.dispatchEvent(t)
                })
            }

            build({config: e, modules: t, logger: i}) {
                this.logger = i, this.config = e, this.modules = t, this._bindEvents()
            }
        }
    };
    var x = {
        name: "htmlLabels", Klass: class {
            _bindEvents() {
                this.inputs.map(e => e.id).forEach((e, t) => {
                    const i = document.querySelector(`label[for="${e}"]`);
                    i && i.addEventListener("click", () => {
                        this.modules.renderer.body.sliders[t].focus()
                    })
                })
            }

            build({config: e, modules: t, logger: i}, s) {
                this.logger = i, this.config = e, this.modules = t, this.inputs = s.inputs, this._bindEvents()
            }
        }
    };
    var E = {
        name: "grid", Klass: class {
            _bindEvents() {
                window.addEventListener("resize", b(() => {
                    this.logger.debug("JSR: Canvas resized."), this._setDimensions(), this._render()
                }, 50))
            }

            _setDimensions() {
                this.width = this.modules.renderer.body.railOuter.offsetWidth, this.height = this.config.grid.height + this.config.grid.fontSize + this.config.grid.textPadding, this.devicePixelRatio = window.devicePixelRatio || 1, this.canvas.style.width = `${this.width}px`, this.canvas.width = this.width * this.devicePixelRatio, this.canvas.style.height = `${this.height}px`, this.canvas.height = this.height * this.devicePixelRatio, this.context.scale(window.devicePixelRatio, window.devicePixelRatio)
            }

            _getNumberOfLines() {
                return Math.round(100)
            }

            _render() {
                const e = this.width, t = this.config.grid.height, i = this.context, s = this._getNumberOfLines(),
                    r = 1 / s;
                i.clearRect(0, 0, e, t), i.beginPath(), i.lineWidth = 1, i.fillStyle = i.strokeStyle = this.config.grid.color, i.font = `${this.config.grid.fontSize}px ${this.config.grid.fontFamily}`, i.textBaseline = "top";
                for (let n = 0; n <= s; n += 1) {
                    let o = n * r * e;
                    if (o = Math.round(100 * o) / 100, i.moveTo(o, 0), i.lineTo(o, t), n % 10 == 0) {
                        i.textAlign = 0 === n ? "left" : n === s ? "right" : "center";
                        let o = (this.config.max - this.config.min) * (n / s) + this.config.min;
                        this.config.labels && this.config.labels.formatter && (o = this.config.labels.formatter(o)), i.fillText(o.toString(), n * r * e, t + this.config.grid.textPadding)
                    }
                }
                i.closePath(), i.stroke()
            }

            build({config: e, modules: t, logger: i}) {
                this.logger = i, this.config = u({
                    grid: {
                        color: "rgba(0, 0, 0, 0.3)",
                        height: 10,
                        fontSize: 10,
                        fontFamily: "sans-serif",
                        textPadding: 5
                    }
                }, e), this.modules = t, this.canvas = document.createElement("canvas"), this.canvas.classList.add("jsr_canvas"), this.context = this.canvas.getContext("2d"), this.modules.eventizer.register("modules/renderer:rootAppended", () => {
                    this.modules.renderer.body.railOuter.appendChild(this.canvas), this._setDimensions(), this._render()
                }), this._bindEvents()
            }

            refresh(e) {
                this.config = u(this.config, e, {arrayMerge: (e, t) => t}), this._setDimensions(), this._render(), this.logger.debug("JSR: grid refreshed")
            }
        }
    };
    return class {
        constructor(e, t = {}) {
            const i = {
                log: "error",
                min: 0,
                max: 100,
                step: 1,
                enabled: !0,
                limit: {show: !1},
                modules: {},
                modulesArray: [f, c, M, E, g, _, p, x]
            };
            this.config = u(i, t), this.specificConfig = {inputUpdater: {}, htmlLabels: {}}, this.logger = new class {
                constructor() {
                    this.level = 1
                }

                setLevel(e) {
                    this.level = v[e]
                }

                debug(...e) {
                    this.level > 0 || console.log(...e)
                }

                log(...e) {
                    this.level > 1 || console.log(...e)
                }

                info(...e) {
                    this.level > 1 || console.info(...e)
                }

                warn(...e) {
                    this.level > 2 || console.warn(...e)
                }

                error(...e) {
                    this.level > 3 || console.error(...e)
                }
            }, this.logger.setLevel(this.config.log), e = [].concat(e), this.inputs = e.map(e => "string" == typeof e ? document.querySelector(e) : e);
            const s = this._validate({inputs: e});
            if (s) return s.forEach(e => {
                this.logger.error(e)
            }), {};
            this.modules = {}, this.modulesArray = [], this.config.modulesArray.forEach((e, t) => {
                (void 0 === this.config.modules[e.name] || this.config.modules[e.name]) && (this.modulesArray[t] = this.modules[e.name] = new e.Klass)
            }), this.specificConfig.inputUpdater.inputs = this.inputs, this.specificConfig.htmlLabels.inputs = this.inputs, this._buildModules(), this._init()
        }

        _validate(e) {
            const t = [];
            return this.config.sliders !== this.config.values.length && t.push("JSR: Number of sliders isn't equal to number of values."), this.inputs.length !== this.config.values.length && t.push("JSR: Number of inputs isn't equal to number of values."), this.inputs.forEach((i, s) => {
                i || t.push(`JSR: Input ${e.inputs[s]} not found.`)
            }), !!t.length && t
        }

        _buildModules() {
            for (const e in this.modules) {
                const t = this.modules[e].build;
                t ? (t.call(this.modules[e], {
                    modules: this.modules,
                    logger: this.logger,
                    config: this.config
                }, this.specificConfig[e] || {}), this.logger.info(`JSR: Module ${e} builded.`)) : this.logger.info(`JSR: Module ${e} skipped. No .build() method.`)
            }
        }

        _init() {
            this.inputs.forEach(e => {
                e.style.display = "none"
            }), this.modules.core.init(this.inputs)
        }

        addEventListener(e, t) {
            return this.modules.eventizer.register({update: "input/value:update"}[e], t), this
        }

        setValue(e, t) {
            return this.modules.core.setValue(t, e), this
        }

        setLimit(e, t) {
            return this.modules.core.setLimit(e, t), this
        }

        disable() {
            return this.config.enabled = !1, this.modules.renderer.body.root.classList.add("jsr--disabled"), this
        }

        enable() {
            return this.config.enabled = !0, this.modules.renderer.body.root.classList.remove("jsr--disabled"), this
        }

        refresh(e = {}, t = null) {
            this.config = u(this.config, e, {arrayMerge: (e, t) => t}), t ? this.modules[t].refresh && this.modules[t].refresh(this.config) : this.modulesArray.forEach(e => {
                e.refresh && e.refresh(this.config)
            })
        }
    }
});
