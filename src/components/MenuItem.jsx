import { useNavigate } from "react-router-dom";
import "./menu-item.scss";
const MenuItem = (props) => {
  const { id, title, imageUrl } = props.product;
  let navigate = useNavigate();
  return (
    <div className="menu-item" onClick={() => navigate(`/shop/${title}`)}>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
};
export default MenuItem;
