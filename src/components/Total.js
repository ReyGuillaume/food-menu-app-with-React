import './Total.css';

export default function Total (props) {
    
    const cartContentCopy = [...props.cartContent];
    const price = cartContentCopy.reduce((sum, object) => sum + object.price, 0);

    return (<>
        <div className="total">
            <span>Total</span>
            <p className="price">
                <span className="price-dolard">$</span>
                {price}
            </p>
        </div>
        <button className="confirm">Next</button>        
    </>);
}