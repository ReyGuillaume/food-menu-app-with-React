import Header from './Header';
import FoodList from './FoodList';

export default function Cart (props) {
    return (<div className='page-content'>
        <Header leftContent="Menu" cartButton={true} {...props}/>
        <FoodList 
            handleAddToCart={props.handleAddToCart} 
            handleRemoveToCart={props.handleRemoveToCart} 
            cartContent={props.cartContent} 
        />
    </div>);
}