import useFoodData from "../hooks/useFoodData";
import './FoodList.css';

function ButtonFoodItem (props) {
    const cartContent = props.cartContent.filter((item) => item.id === props.object.id);
    
    if (cartContent.length === 0) {
        return <button onClick={() => props.handleAddToCart(props.object)}>+</button>;
    }
    return (<>
            <button onClick={() => props.handleAddToCart(props.object)}>+</button>
                <span>{cartContent.length}</span>
            <button onClick={() => props.handleRemoveToCart(props.object)}>-</button>
    </>);
}

function FoodItem (props) {
    const id = props.id;
    const name = props.name;
    const img = props.img;
    const price = props.price;
    const object = {
        id,
        name,
        img,
        price
    }

    return (
        <div className="food-item">
            <img src={props.img} alt={props.name}></img>
            <div className="food-info">
                <h3>{props.name}</h3>
                <p className="price"><span className="price-dolard">$</span>{props.price}</p>
            </div>
            <div className="button-container">
                <ButtonFoodItem 
                object={object} 
                cartContent={props.cartContent} 
                handleAddToCart={props.handleAddToCart} 
                handleRemoveToCart={props.handleRemoveToCart} 
            />
            </div>
        </div>
    )
}

export default function FoodList (props)  {

    const {foodData, isLoading} = useFoodData();
    
    if (!isLoading) {
        return foodData.map(data => {
            const cartContentCopy = props.cartContent.filter(object => data.id === object.id);

            if (!props.isCart || cartContentCopy.length > 0) {
                return <FoodItem key={data.id} {...data} {...props}/>
            }
            return <></>;
        });
    }
    return <div className="loading">Loading recources...</div>
}