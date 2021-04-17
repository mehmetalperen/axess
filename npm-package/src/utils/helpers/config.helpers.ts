import { axeCoreScriptTag, tooltipScriptTag } from "../constants";

function injectScript(content: string, script: string): string {
    if (content.includes(script)) return content;

    const i = content.indexOf("</body");
    return content.slice(0, i) + script + content.slice(i);
}

function injectScripts(content: string, scripts: string[]) {
    for (let script of scripts) content = injectScript(content, script);
    return content;
}

export function configureWindow(window: Window) {
    const doc = window.document;
    let htmlString = doc.documentElement.innerHTML;
    const injectedHtmlString = injectScripts(htmlString, [
        axeCoreScriptTag,
        tooltipScriptTag,
    ]);

    doc.open();
    doc.write(injectedHtmlString);
    doc.close();
}
