import { axeCoreScriptTag } from "../constants/run.constants";

export function injectAxeCore(doc: Document) {
    const htmlString = doc.documentElement.innerHTML;
    const i = htmlString.indexOf("</body");
    const injectedHtmlString =
        htmlString.slice(0, i) + axeCoreScriptTag + htmlString.slice(i);

    doc.open();
    doc.write(injectedHtmlString);
    doc.close();
}
