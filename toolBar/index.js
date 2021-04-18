function __renderModal(violation) {
    const existingModal = document.getElementById("__web-accessibility-modal__");
    // Remove existing modal on button click
    if(existingModal){
      existingModal.remove()
    }
  
    const modalCtn = document.createElement("div")
    const modal = document.createElement("div");
    modal.id = "__web-accessibility-modal__";
    modal.style.position = "absolute";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.width = "90vw";
    modal.style.maxWidth = "600px";
    modal.style.boxShadow = "0 0 8px gray";
    modal.style.padding = "20px";
    modal.style.borderRadius = "25px";
    modal.style.borderTopLeftRadius = "0";
    modal.style.fontFamily = "Roboto, Arial, sans-serif"
    const header = document.createElement("h1");
    header.innerText = violation.help;
    
    const description = document.createElement("p");
    description.innerText = violation.description;
    
    const impact = document.createElement("div");
    impact.innerText = violation.impact;
    const impactColor = getImpactColor(violation.impact);
  
    impact.style.textTransform = "capitalize";
    impact.style.backgroundColor = `${impactColor}`;
    impact.style.padding = "10px";
    impact.style.borderRadius = "50px";
    impact.style.color = "white";
    impact.style.display = "inline-block";
  
    const helpUrl = document.createElement("a");
    helpUrl.href = violation.helpUrl;
    helpUrl.innerText = "Learn More";
    helpUrl.style.color = "black";
    helpUrl.style.fontWeight = "600";
    helpUrl.style.display = "block";
    helpUrl.style.margin = "0 0 15px 0";
    helpUrl.alt = "Link to web accessibility violation.";
  
    const closeButton = document.createElement("button");
    closeButton.style.padding = "10px";
    closeButton.style.backgroundColor = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "10px";
    closeButton.style.filter = "drop-shadow(0 0 3px gray)";
    closeButton.innerText = "Close";
  
    closeButton.onclick = function () {
        modal.remove();
    };
    
    modal.appendChild(impact);
    modal.appendChild(header);
    modal.appendChild(description);
    modal.appendChild(helpUrl);
    modal.appendChild(closeButton);
  
    document.querySelector("body")?.appendChild(modal);
}

function __renderTooltip(query, violation) {
    const existingToolTip = document.getElementById("__web-accessibility-tooltip__");
    // Remove existing tooltip on button click
    if(existingToolTip){
      existingToolTop.remove()
    }
  
    const element = document.querySelector(query);
    const rect = element.getBoundingClientRect();
    
    const tooltip = document.createElement("span");
    tooltip.id = "__web-accessibility-tooltip__";
    tooltip.onclick = () => __renderModal(violation);
    const toolTipColor = getImpactColor(violation.impact);

    // STYLING
    tooltip.style.position = "absolute";
    tooltip.style.left = rect.left - 9 + "px";
    tooltip.style.top = (rect.bottom + rect.top) / 2 + 10 + "px";
    tooltip.style.zIndex = "2147483647";
    tooltip.style.fontWeight = "700";
    tooltip.style.borderColor = "red"
    tooltip.style.borderRadius = "20px";
    tooltip.style.borderTopLeftRadius = "0";
    tooltip.style.padding = "15px 25px";
    tooltip.style.backgroundColor = "white";
    
    tooltip.style.color = `${toolTipColor}`
    tooltip.innerText = "!";
    tooltip.style.fontSize = "24px";
    tooltip.style.filter = "drop-shadow(0 0 8px gray)";

    document.querySelector("body")?.appendChild(tooltip);
}

function getImpactColor(impact){
    return impact === 'critical' ? "#FD3D23" : "#B9BC10"
}
