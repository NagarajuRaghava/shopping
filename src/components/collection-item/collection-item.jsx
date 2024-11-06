import React from 'react'
import "./collection-item.scss"
import CustomButton from '../custom-button/custom-button'

const CollectionItem = (props) => {
  return (
    <div className='collection-item'>
      <div className="image" style={{backgroundImage: `url(${props.item.imageUrl})`}}></div>
      <div className="collection-footer">
        <span className='name'>{props.item.name}</span>
        <span className="price">{props.item.price}</span>
        {/* <button className='custom-button'>Add to cart</button> */}
        <CustomButton>Add to cart</CustomButton>
      </div>
    </div>
  )
}

export default CollectionItem