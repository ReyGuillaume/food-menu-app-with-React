import Header from './Header';
import FoodList from './FoodList';
import Total from './Total';
import './FoodList.css';

export default function Cart (props) {

    return (<div className='page-content'>
        <Header leftContent="Cart" cartButton={false} {...props}/>
        <div className='food-list'>
            <FoodList 
                isCart={true} 
                cartContent={props.cartContent} 
                handleAddToCart={props.handleAddToCart} 
                handleRemoveToCart={props.handleRemoveToCart} 
            />
        <Total cartContent={props.cartContent}/>
        </div>
    </div>);
}