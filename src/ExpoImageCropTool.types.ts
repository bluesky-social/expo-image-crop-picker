export interface OpenCropperOptions {
  imageUri: string;
  shape?: "rectangle" | "circle";
  aspectRatio?: number;
  format?: "jpeg" | "png";
  compressImageQuality?: number;
}

export interface OpenCropperResult {
  path: string;
  mime: string;
  size: number;
  width: number;
  height: number;
}
