import { axeCoreScriptTag } from "../constants";

export function configureWindow(window: Window) {
    const doc = window.document;
    const htmlString = doc.documentElement.innerHTML;
    if (htmlString.includes(axeCoreScriptTag)) return;

    const i = htmlString.indexOf("</body");
    const injectedHtmlString =
        htmlString.slice(0, i) + axeCoreScriptTag + htmlString.slice(i);

    doc.open();
    doc.write(injectedHtmlString);
    doc.close();
}
