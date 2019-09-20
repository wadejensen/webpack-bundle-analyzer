export declare class BundleReportPlugin {
  constructor(opts: any);
}

export declare type BundleReport = JsBundle[];
export declare type JsBundle = {
  label: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
  groups: FileGroup[];
};
export declare type Directory = {
  label: string;
  path: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
  groups: FileGroup[];
};
export declare type File = {
  id: string;
  label: string;
  path: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
};
export declare type FileGroup = File | Directory;
