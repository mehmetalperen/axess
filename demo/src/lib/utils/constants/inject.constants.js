"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipScriptTag = exports.axeCoreScriptTag = void 0;
exports.axeCoreScriptTag = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.0.2/axe.min.js\" integrity=\"sha512-e/si4R98/WF/59ivWxdDaxSiYtMW2RRXkB9aXDmYYsgbFDBrjZdhBckgALwNQ5LhaEAqLKGJf7IqaoipS8IFig==\" crossorigin=\"anonymous\"></script>";
exports.tooltipScriptTag = "\n<script>\n\nfunction __renderModal(violation) {\n    alert(\"Inside __renderModal\")\n    const modal = document.createElement(\"div\");\n    modal.id = \"__web-accessibility-modal__\";\n    modal.style.position = \"absolute\";\n    modal.style.top = \"50%\";\n    modal.style.left = \"50%\";\n    modal.style.transform = \"translate(-50%, -50%)\";\n    modal.style.width = \"90vw\";\n    modal.style.maxWidth = \"600px\";\n\n    const header = document.createElement(\"h1\");\n    header.innerText = violation.description;\n\n    const impact = document.createElement(\"span\");\n    impact.innerText = violation.impact;\n\n    const closeButton = document.createElement(\"button\");\n    closeButton.onclick = function () {\n        modal.remove();\n    };\n    modal.appendChild(header);\n    modal.appendChild(impact);\n    modal.appendChild(closeButton);\n\n    document.querySelector(\"body\")?.appendChild(modal);\n}\n\nfunction __renderTooltip(query, violation) {\n    alert(\"Inside __renderTooltip\")\n    const element = document.querySelector(query);\n    const rect = element.getBoundingClientRect();\n\n    const tooltip = document.createElement(\"span\");\n\n    tooltip.onclick = () => __renderModal(violation);\n\n    // STYLING\n    tooltip.style.position = \"absolute\";\n    tooltip.style.left = rect.left - 9 + \"px\";\n    tooltip.style.top = (rect.bottom + rect.top) / 2 - 20 + \"px\";\n    tooltip.style.zIndex = \"2147483647\";\n    tooltip.style.fontWeight = \"700\";\n    tooltip.style.borderRadius = \"30px\";\n    tooltip.style.borderBottomRightRadius = \"0\";\n    tooltip.style.padding = \"0 7px\";\n    tooltip.style.backgroundColor = \"black\";\n    tooltip.style.color = \"white\";\n    tooltip.innerText = \"!\";\n\n    document.querySelector(\"body\")?.appendChild(tooltip);\n}\n</script>\n";
// function __renderModal(violation: any) {
//     const modal = document.createElement("div");
//     modal.id = "__web-accessibility-modal__";
//     modal.style.position = "absolute";
//     modal.style.top = "50%";
//     modal.style.left = "50%";
//     modal.style.transform = "translate(-50%, -50%)";
//     modal.style.width = "90vw";
//     modal.style.maxWidth = "600px";
//     const header = document.createElement("h1");
//     header.innerText = violation.description;
//     const impact = document.createElement("span");
//     impact.innerText = violation.impact;
//     const closeButton = document.createElement("button");
//     closeButton.onclick = function () {
//         modal.remove();
//     };
//     modal.appendChild(header);
//     modal.appendChild(impact);
//     modal.appendChild(closeButton);
//     document.querySelector("body")?.appendChild(modal);
// }
// function __renderTooltip(query: any, violation: any) {
//     const element = document.querySelector(query);
//     const rect = element.getBoundingClientRect();
//     const tooltip = document.createElement("span");
//     tooltip.onclick = () => __renderModal(violation);
//     // STYLING
//     tooltip.style.position = "absolute";
//     tooltip.style.left = rect.left - 9 + "px";
//     tooltip.style.top = (rect.bottom + rect.top) / 2 - 20 + "px";
//     tooltip.style.zIndex = "2147483647";
//     tooltip.style.fontWeight = "700";
//     tooltip.style.borderRadius = "30px";
//     tooltip.style.borderBottomRightRadius = "0";
//     tooltip.style.padding = "0 7px";
//     tooltip.style.backgroundColor = "black";
//     tooltip.style.color = "white";
//     tooltip.innerText = "!";
//     document.querySelector("body")?.appendChild(tooltip);
// }
//# sourceMappingURL=inject.constants.js.map