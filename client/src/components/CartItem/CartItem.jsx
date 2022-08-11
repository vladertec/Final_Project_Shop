import PropTypes from "prop-types";

const CartItem = (props) => {
  const { product, cartQuantity } = props.item;

  const handleDecrease = () => {};

  const handleIncrease = () => {};

  return (
    <div className={"cart__item item"}>
      <img
        className={"item__img"}
        src={product.imageUrls[0]}
        alt="Product foto"
        width={120}
        height={120}
      />
      <h3 className={"item__title"}>{product.name}</h3>
      <ul className={"item__info"}>
        <li className={"item field"}>
          <span className={"item__text"}>Price</span>
          <span className={"item__text"}>{product.currentPrice}</span>
        </li>
        <li className={"item field"}>
          <span className={"item__text"}>Color</span>
          <span className={"item__text"}>{product.color}</span>
        </li>
        <li className={"item field"}>
          <span className={"item__text"}>Size</span>
          <span className={"item__text"}>{product.size}</span>
        </li>
        <li className={"item field"}>
          <span className={"item__text"}>Quantity</span>
          <span className={"item__text"}>
            <button onClick={handleDecrease}>-</button>
            {cartQuantity}
            <button onClick={handleIncrease}>+</button>
          </span>
        </li>
        <li className={"item field"}>
          <span className={"item__text"}>Total</span>
          <span className={"item__text"}>
            {product.currentPrice * cartQuantity} $
          </span>
        </li>
      </ul>
      <hr />
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
