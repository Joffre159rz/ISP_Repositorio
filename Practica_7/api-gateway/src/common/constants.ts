export enum RabbitMQ {
  DocumentoQueue = 'documentos',
  PersonaQueue = 'personas',
  ProcesoDeterminadoQueue = 'procesodeterminados',
}

export enum DocumentoMSG {
  CREATE = 'CREATE_DOCUMENTO',
  FIND_ALL = 'FIND_DOCUMENTOS',
  FIND_ONE = 'FIND_DOCUMENTO',
  UPDATE = 'UPDATE_DOCUMENTO',
  DELETE = 'DELETE_DOCUMENTO',
}
export enum PersonaMSG {
  CREATE = 'CREATE_PERSONA',
  FIND_ALL = 'FIND_PERSONAS',
  FIND_ONE = 'FIND_PERSONA',
  UPDATE = 'UPDATE_PERSONA',
  DELETE = 'DELETE_PERSONA',
}
export enum ProcesoDeterminadoMSG {
  CREATE = 'CREATE_PROCESO_DETERMINADO',
  FIND_ALL = 'FIND_PROCESO_DETERMINADOS',
  FIND_ONE = 'FIND_PROCESO_DETERMINADO',
  UPDATE = 'UPDATE_PROCESO_DETERMINADO',
  DELETE = 'DELETE_PROCESO_DETERMINADO',
}
