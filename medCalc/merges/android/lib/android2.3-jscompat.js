﻿!function () { Function.prototype.bind || (Function.prototype.bind = function (t) { if ("function" != typeof this) throw new TypeError(this + " cannot be bound as it is not a function"); var n = Array.prototype.slice.call(arguments, 1), o = this, i = function () { }, r = this instanceof i && t ? this : t, e = function () { return o.apply(r, n.concat(Array.prototype.slice.call(arguments))) }; return i.prototype = this.prototype, e.prototype = new i, e }) }();