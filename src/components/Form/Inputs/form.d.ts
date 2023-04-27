export type DropZone = {
   accept?: string[];
   multiple?: boolean;
   maxFiles?: number;
   maxSize?: number;
   onDrop?: (files: FileList) => void;
}