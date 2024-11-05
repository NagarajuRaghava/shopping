import React from 'react'
import "./collection-item.scss"

const CollectionItem = (props) => {
  return (
    <div className='collection-item'>
      <div className="image" style={{backgroundImage: `url(${props.item.imageUrl})`}}></div>
      <div className="collection-footer">
        <span className='name'>{props.item.name}</span>
        <span className="price">{props.item.price}</span>
        <button className='custom-button'>Add to cart</button>
      </div>
    </div>
  )
}

export default CollectionItem