const doPost = (props: GoogleAppsScript.Events.DoPost) => {
  const datos = JSON.parse(props.postData.contents);
  return respuestaPost(datos.action, datos);
};

function respuestaPost(action, datos): GoogleAppsScript.Content.TextOutput {
  switch (action) {
    case "findAllByNamesheet":
      return respuesta.json(apiActions.findAllByNamesheet(datos));

    case "findDataById":
      return respuesta.json(apiActions.findDataById(datos));

    case "findMultipleDataById":
      return respuesta.json(apiActions.findMultipleDataById(datos));

    case "deleteObjectInSheet":
      return respuesta.json(apiActions.deleteObjectInSheet(datos));

    case "saveFileInDrive":
      return respuesta.json(apiActions.saveFileInDrive(datos));

    case "updateObjectInSheet":
      return respuesta.json(apiActions.updateObjectInSheet(datos));

    case "saveObjectInSheet":
      return respuesta.json(apiActions.saveObjectInSheet(datos));

    default:
      return respuesta.json({
        status: "failed",
        message: "action no encontrada",
        data: [],
      });
  }
}
