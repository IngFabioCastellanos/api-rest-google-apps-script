/**
 * findDataById
 *
 * @param {Object} props {nameSheet, id, nameId }
 * @return {Object} objeto con la informacion necesaria
 */
function findDataById(props: findDataById): string {
  const { nameSheet, id, nameId } = props;

  const sheet = obtenerSheet(nameSheet);
  let data: any[];

  if (sheet) {
    data = sheet.getDataRange().getValues();
  } else {
    return JSON.stringify({ satus: "failed", message: "Hoja no encontrada" });
  }

  sheet.getDataRange().getValues();
  const header = data.shift();

  // Buscar todo
  const resultado = data.map((row, indx) => {
    const reduced = header.reduce(
      (
        accumulator: { [x: string]: any },
        currentValue: string,
        currentIndex: number
      ) => {
        accumulator[currentValue] = row[currentIndex];
        return accumulator;
      },
      {}
    );

    reduced.row = indx + 2;
    return reduced;
  });

  // Filtrar si se pasa un id
  if (id) {
    return JSON.stringify({
      status: "ok",
      message: "Resultados encontados",
      data: resultado.find((dato) => dato[nameId] == id),
    });
  }

  return JSON.stringify({
    status: "ok",
    message: "Resultados encontados",
    data: resultado,
  });
}
