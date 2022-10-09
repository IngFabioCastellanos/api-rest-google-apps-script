function saveFileInDrive(file: saveFileInDrive): string {
  const blob = Utilities.newBlob(file.bytes, file.mimeType, file.filename);
  const folder = DriveApp.getFolderById(globalParams.idCarpeta);
  const fileSaved = folder.createFile(blob);
  return fileSaved.getId();
}
