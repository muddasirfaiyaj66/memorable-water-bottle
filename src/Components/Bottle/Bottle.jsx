import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleToCart}) => {
    const {name, seller,price,stock,img,shipping } =bottle;
    return (
        <div className='bottle-container'>
            <h1>Name: {name}</h1>
            <img  src={img} alt="" />
            <h3>Price: {price}</h3>
            <h4>Seller: {seller}</h4>
            <h5>Shipping: {shipping}</h5>
            <p>Stock:{stock}</p>
            <button onClick={() => handleToCart(bottle)} >Purchase</button>

        </div>
    );
};
Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handleToCart:PropTypes.func.isRequired,
}
export default Bottle;