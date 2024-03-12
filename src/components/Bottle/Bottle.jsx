
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
  
    const {img, name,price, quantity,stock} = bottle;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Pric $ {price}</h3>
            <p>Stock : {stock} pices</p>
            <button onClick={() => handleAddToCart(bottle)}>Add to card</button>
        </div>
    );
};

export default Bottle;