import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
import { useNavigate } from "react-router-dom";

const CollectionPreview = (props) => {
  let navigate = useNavigate();
  
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`/shop/${props.shopData.routeName}`)}>
        {props.shopData.title}
      </h1>
      <div className="preview">
        {props.shopData.items.map((x) => (
          <CollectionItem key={x.id} item={x} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
