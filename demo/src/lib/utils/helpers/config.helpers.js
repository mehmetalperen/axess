"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureWindow = void 0;
var constants_1 = require("../constants");
function injectScript(content, script) {
    if (content.includes(script))
        return content;
    var i = content.indexOf("</body");
    return content.slice(0, i) + script + content.slice(i);
}
function injectScripts(content, scripts) {
    for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
        var script = scripts_1[_i];
        content = injectScript(content, script);
    }
    return content;
}
function configureWindow(window) {
    var doc = window.document;
    var htmlString = doc.documentElement.innerHTML;
    var injectedHtmlString = injectScripts(htmlString, [
        constants_1.axeCoreScriptTag,
        constants_1.tooltipScriptTag,
    ]);
    doc.open();
    doc.write(injectedHtmlString);
    doc.close();
}
exports.configureWindow = configureWindow;
//# sourceMappingURL=config.helpers.js.map