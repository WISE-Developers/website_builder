import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

/**
 * Image component that handles path conversion for both development and production builds
 */
export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  // If the path is already a full URL, use as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return <img src={src} {...props} />;
  }
  
  // For images in the public directory, handle path conversion
  let finalSrc = src;
  
  // Handle various path formats
  if (src.startsWith('/images/')) {
    // For /images/... paths, maintain the structure but remove the leading slash
    // change from /images/ to ./images/
    finalSrc = src.replace(/^\/images\//, './images/');
    //finalSrc = src.substring(1); // Changes /images/file.png to images/file.png
  } else if (src.startsWith('/')) {
    // For other absolute paths, just remove the leading slash
    finalSrc = src.substring(1);
  }
  
  return <img src={finalSrc} {...props} />;
};

export default Image;