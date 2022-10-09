/**
 * conexion
 * @return {String} retorna la base de datos
 */
function conexion(): GoogleAppsScript.Spreadsheet.Spreadsheet {
  return SpreadsheetApp.openById(globalParams.idDatabase);
}

const conexionBd = conexion();

/**
 * obtenerSheet
 * @param {String} NAME nombre de la hoja de la base de datos
 * @return {String} retorna una hoja de la base de datos
 */
function obtenerSheet(NAME: string): GoogleAppsScript.Spreadsheet.Sheet | null {
  return conexionBd.getSheetByName(NAME);
}

/**
 * obtenerDatos
 * @param {String} NAME nombre de la hoja de la base de datos
 * @return {Array} retorna todos los datos en un arreglo bidimencional de una hoja de la base de datos
 */
function obtenerDatos(NAME: string): any[][] | undefined {
  return obtenerSheet(NAME)?.getDataRange().getDisplayValues();
}
