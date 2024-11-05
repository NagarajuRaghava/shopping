import React from "react";
import CollectionPreview from "../../components/collections/collection-preview";
import SHOP_DATA from "./shop-data";
import { useParams } from "react-router-dom";

const ShopPage = (props) => {
  //console.log(props);
  const shop = SHOP_DATA;
  //const title = "Hats";
  let params = useParams();
  return (
    <div>
      {shop
        .filter(
          (x) => x.routeName == params?.title || params.title == undefined
        )
        .map((x) => (
          <CollectionPreview key={x.id} shopData={x} />
        ))}
    </div>
  );
};

export default ShopPage;
