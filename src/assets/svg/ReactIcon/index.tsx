import { IconProps } from '@/types';
import React, { FC } from 'react';

const ReactIcon:FC<IconProps> = ({
  width,
  height,
  className
}) => {
  const viewBox = React.useMemo(() => {
    return `0 0 ${width} ${height}`
  }, [height, width])

  return (
    <svg 
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_327_1876)">
        <path d="M35.6572 38.7725C39.3295 38.7725 42.3065 35.7404 42.3065 32C42.3065 28.2597 39.3295 25.2275 35.6572 25.2275C31.9848 25.2275 29.0078 28.2597 29.0078 32C29.0078 35.7404 31.9848 38.7725 35.6572 38.7725Z" fill="#087EA4"/>
        <path d="M35.6569 47.238C54.0186 47.238 68.9037 40.4157 68.9037 31.9999C68.9037 23.5842 54.0186 16.7618 35.6569 16.7618C17.2952 16.7618 2.41016 23.5842 2.41016 31.9999C2.41016 40.4157 17.2952 47.238 35.6569 47.238Z" stroke="#087EA4" strokeWidth="3"/>
        <path d="M22.7003 39.619C31.8812 55.8152 45.1246 65.5336 52.2803 61.3257C59.4361 57.1178 57.7944 40.5771 48.6136 24.3809C39.4328 8.18475 26.1893 -1.53366 19.0336 2.67422C11.8778 6.88211 13.5195 23.4228 22.7003 39.619Z" stroke="#087EA4" strokeWidth="3"/>
        <path d="M22.7002 24.3808C13.5193 40.577 11.8777 57.1177 19.0334 61.3256C26.1892 65.5335 39.4326 55.8151 48.6134 39.6189C57.7943 23.4228 59.4359 6.88205 52.2802 2.67416C45.1244 -1.53372 31.881 8.18469 22.7002 24.3808Z" stroke="#087EA4" strokeWidth="3"/>
      </g>
      <defs>
        <clipPath id="clip0_327_1876">
          <rect width="69.8182" height="64" fill="white" transform="translate(0.748047)"/>
        </clipPath>
      </defs> 
    </svg>
  )
}

export default ReactIcon;