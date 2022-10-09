const respuesta = {
  json: (datos) =>
    ContentService.createTextOutput(datos).setMimeType(
      ContentService.MimeType.JSON
    ),
};
