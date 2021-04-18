"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./utils/helpers");
var observer = new MutationObserver(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("mutation detected");
    console.log.apply(console, args);
});
function register(target, options) {
    if (target === void 0) { target = "iframe"; }
    if (options === void 0) { options = {}; }
    console.log("inside register()");
    var iframe = helpers_1.extractIframeFromTarget(target);
    observer.observe(iframe, {
        characterData: true,
        subtree: true,
        childList: true,
    });
}
exports.default = register;
//# sourceMappingURL=register.js.map