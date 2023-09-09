"use server"
import fs from 'fs';
import imageSize from 'image-size';
import path from 'path';

export const fetchImageDimensions = (imagePath: string) => {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  const buffer = fs.readFileSync(fullPath);
  const dimensions = imageSize(buffer);

  return {
    width: dimensions.width,
    height: dimensions.height
  };
};
