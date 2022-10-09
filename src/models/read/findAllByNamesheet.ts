/**
 * findAllByNamesheet
 *
 * @param {Object} props nombre de la tabla de la base de datos
 * @return {Object} objeto con la informacion necesaria
 */
function findAllByNamesheet(props: findAllByNamesheet): string {
  const { nameSheet } = props;

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

  return JSON.stringify({
    status: "ok",
    message: "Resultados encontados",
    data: resultado,
  });
}
