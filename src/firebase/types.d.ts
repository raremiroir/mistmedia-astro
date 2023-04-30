export interface DbProps {
   id: string;
   collection: string;
}

export interface DbFetchProps {
   collection: DbProps['collection'];
   orderBy?: string;
   orderDirection?: 'asc' | 'desc';
   limit?: number;
   startAt?: string;
   endAt?: string;
   startAfter?: string;
   endBefore?: string;
   where?: {
      field: string;
      operator: '==' | '<' | '<=' | '>' | '>=';
      value: string;
   };
   // whereArrayContains?: {
   //    field: string;
   //    value: string;
   // }
}

export interface DbInsertProps extends DbProps {
   values: {
      [key: string]: any;
   }
}

export interface DbFetchFileProps {
   id: DbProps['id'];
   refType?: 'default' | 'gs' | 'https' | 'download';
}
export interface DbUploadFileProps extends DbProps {
   file: File;
   meta?: { [key: string]: string; };
}