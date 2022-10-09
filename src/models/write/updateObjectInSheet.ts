/**
 * updateObjectInSheet
 *
 * @param {object} props { id: string, datos: string, nameSheet: string, nameId: string }
 */
function updateObjectInSheet(props: updateObjectInSheet): string {
  const { id, datos, nameSheet, nameId } = props;

  const table = obtenerSheet(nameSheet);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return JSON.stringify({
      status: "failed",
      message: "Error: la tabla no fue encontrada",
    });
  }

  const headers = table.getDataRange().getValues().shift();

  const { data } = JSON.parse(findDataById({ nameSheet, id, nameId }));

  const numeroFila = data.row;

  if (!headers) {
    Logger.log("Error: No se encontraron los headers de la tabla");
    return JSON.stringify({
      status: "failed",
      message: "Error: No se encontraron los headers de la tabla",
    });
  }

  for (const key in datos) {
    const numeroColumna = headers.indexOf(key) + 1;
    numeroColumna > 0 &&
      datos[key] &&
      table.getRange(numeroFila, numeroColumna).setValue(datos[key]);
  }

  return JSON.stringify({ status: "ok", message: "Registro actualizado" });
}
