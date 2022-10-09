const doGet = () => template();

function template(): GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createTemplateFromFile("src/index.html")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
    )
    .setTitle("Api Rest Full Gas")
}
