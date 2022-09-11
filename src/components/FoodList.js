import useFoodData from "../hooks/useFoodData";
import './FoodList.css';

function ButtonFoodItem (props) {
    const cartContent = props.cartContent.filter((item) => item === props.id);
    
    if (cartContent.length === 0) {
        return <button onClick={() => props.handleAddToCart(props.id)}>+</button>;
    }
    return (<>
            <button onClick={() => props.handleAddToCart(props.id)}>+</button>
                <span>{cartContent.length}</span>
            <button onClick={() => props.handleRemoveToCart(props.id)}>-</button>
    </>);
}

function FoodItem (props) {
    return (
        <div className="food-item">
            <img src={props.img} alt={props.name}></img>
            <div className="food-info">
                <h3>{props.name}</h3>
                <p className="price"><span className="price-dolard">$</span>{props.price}</p>
            </div>
            <div className="button-container">
                <ButtonFoodItem 
                id={props.id} 
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
        // const {data, isLoading} = useFoodData();
    if (!isLoading) {
        return foodData.map(data => <FoodItem key={data.id} {...data} {...props}/>);
        // return data.map(dat => <FoodItem key={dat.id} {...dat} {...props}/>);
    }
}