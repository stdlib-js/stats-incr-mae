// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)};var r=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}};function t(){var t=r();return function(r,u){if(0===arguments.length)return t();return t(n(u-r))}}export{t as default};
//# sourceMappingURL=mod.js.map
