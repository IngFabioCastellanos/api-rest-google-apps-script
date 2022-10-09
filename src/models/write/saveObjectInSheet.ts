/**
 * saveObjectInSheet
 * @param {object} props { data: string, nameSheet: string }
 * @returns {object}
 */
function saveObjectInSheet(props: saveObjectInSheet): string {
  const { datos, nameSheet } = props;

  const table = obtenerSheet(nameSheet);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return JSON.stringify({
      status: "failed",
      message: "Error: la tabla no fue encontrada",
    });
  }

  const headers = table.getDataRange().getValues().shift();

  if (!headers) {
    Logger.log("Error: No se encontraron los headers de la tabla");
    return JSON.stringify({
      status: "failed",
      message: "Error: No se encontraron los headers de la tabla",
    });
  }

  const nuevaFila = ordenarArray_(datos, headers);
  table.appendRow(nuevaFila);

  return JSON.stringify({ status: "ok", message: "Registro guardado" });
}

function ordenarArray_(
  data: { [x: string]: string },
  headers: string[]
): string[] {
  let arregloOrdenado: string[] = [];

  for (let posicion = 0; posicion < headers.length; posicion++) {
    let value = data[headers[posicion]];
    arregloOrdenado[posicion] = value;
  }

  return arregloOrdenado;
}
