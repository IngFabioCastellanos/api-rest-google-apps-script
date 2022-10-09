/**
 * findMultipleDataById
 * @param {Object} props { nameSheet: string, id: string, nameId: string }
 * @return {Object} objeto con la informacion necesaria
 */
function findMultipleDataById(props: findMultipleDataById): string {
  const { nameSheet, id, nameId } = props;

  const sheet = obtenerSheet(nameSheet);
  let data: any[];
  if (!sheet)
    return JSON.stringify({
      status: "failed",
      message: "No se encontro la sheet",
    });

  data = sheet.getDataRange().getValues();

  const header = data.shift();

  // Buscar todo
  const resultado = data.map((row, indx) => {
    const reduced = header.reduce(
      (
        accumulator: { [x: string]: string },
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
      data: resultado.filter((dato) => dato[nameId] == id),
    });
  }

  return JSON.stringify({
    status: "ok",
    message: "Resultados encontados",
    data: resultado,
  });
}
