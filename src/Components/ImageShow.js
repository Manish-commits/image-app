import React from 'react'

const ImageShow = ({image}) => {
  console.log(image);
  return (
    <div>
      <img src={image.links.download} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow