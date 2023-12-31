import Icon from '@/components/common/Icon';
import { IconProps } from '@/types';
import React, { FC } from 'react';

const TfIcon:FC<IconProps> = ({
  width,
  height,
  className
}) => {
  const viewBox = React.useMemo(() => {
    return `0 0 ${width} ${height}`
  }, [height, width])

  return (
    <Icon width={width} height={height} className={className}>
      <g fill="#7B42BC" fillRule="evenodd" clipRule="evenodd">
        <path d="M5.825 2.82l4.35 2.524v5.052L5.825 7.87V2.82zM10.651 5.344v5.052L15 7.87V2.82l-4.349 2.524zM1 0v5.05l4.349 2.527V2.526L1 0zM5.825 13.474L10.174 16v-5.051L5.825 8.423v5.051z"/>
      </g>
    </Icon>
  )
}

export default TfIcon;