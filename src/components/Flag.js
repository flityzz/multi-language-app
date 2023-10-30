import React from 'react'


const Flag = ({ alt, image, isSelected, ...props }) => (
  <img alt={alt} src={image} className={isSelected ? 'flag selected' : 'flag'} {...props} />
)

export default Flag