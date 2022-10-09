interface findAllByNamesheet {
  nameSheet: string;
}

interface findDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

interface findMultipleDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

interface saveObjectInSheet {
  datos: {};
  nameSheet: string;
}

interface updateObjectInSheet {
  id: string;
  datos: {};
  nameSheet: string;
  nameId: string;
}

interface deleteObjectInSheet {
  id: string;
  nameSheet: string;
  nameId: string;
}

interface guardarCsv {
  data: string;
  nameSheet: string;
}

interface saveFileInDrive {
  mimeType: string;
  bytes: any[];
  filename: string;
}

interface returnApiFind {
  status: string;
  message: string;
  data: any[];
}
