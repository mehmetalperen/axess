export const axeCoreScriptTag = `<script src="https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.0.2/axe.min.js" integrity="sha512-e/si4R98/WF/59ivWxdDaxSiYtMW2RRXkB9aXDmYYsgbFDBrjZdhBckgALwNQ5LhaEAqLKGJf7IqaoipS8IFig==" crossorigin="anonymous"></script>`;

export const tooltipScriptTag = `
<script>

function __renderModal(violation: any) {
    const modal = document.createElement("div");
    modal.id = "__web-accessibility-modal__";
    modal.style.position = "absolute";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.width = "90vw";
    modal.style.maxWidth = "600px";

    const header = document.createElement("h1");
    header.innerText = violation.description;

    const impact = document.createElement("span");
    impact.innerText = violation.impact;

    const closeButton = document.createElement("button");
    closeButton.onclick = function () {
        modal.remove();
    };
    modal.appendChild(header);
    modal.appendChild(impact);
    modal.appendChild(closeButton);

    document.querySelector("body")?.appendChild(modal);
}

function __renderTooltip(query: any, violation: any) {
    const element = document.querySelector(query);
    const rect = element.getBoundingClientRect();

    const tooltip = document.createElement("span");

    tooltip.onclick = () => __renderModal(violation);

    // STYLING
    tooltip.style.position = "absolute";
    tooltip.style.left = rect.left - 9 + "px";
    tooltip.style.top = (rect.bottom + rect.top) / 2 - 20 + "px";
    tooltip.style.zIndex = "2147483647";
    tooltip.style.fontWeight = "700";
    tooltip.style.borderRadius = "30px";
    tooltip.style.borderBottomRightRadius = "0";
    tooltip.style.padding = "0 7px";
    tooltip.style.backgroundColor = "black";
    tooltip.style.color = "white";
    tooltip.innerText = "!";

    document.querySelector("body")?.appendChild(tooltip);
}
</script>
`;

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
