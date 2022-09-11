import useFoodData from "../hooks/useFoodData";
import './FoodList.css';

function FoodItem (props) {
    return (
        <div className="food-item">
            <img src={props.img} alt={props.name}></img>
            <div className="food-info">
                <h3>{props.name}</h3>
                <p className="price"><span className="price-dolard">$</span>{props.price}</p>
            </div>
            <div className="button-container">
                <button onClick={props.onClick}>+</button>
            </div>
        </div>
    )
}

export default function FoodList ()  {

    const {foodData, isLoading} = useFoodData();
    // const {data, isLoading} = useFoodData();

    if (!isLoading) {
        return foodData.map(data => <FoodItem key={data.id} {...data}/>);
        // return data.map(dat => <FoodItem key={dat.id} {...dat}/>);
    }
}