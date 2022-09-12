import Header from './Header';
import FoodList from './FoodList';

export default function Menu (props) {
    return (<div className='page-content'>
        <Header leftContent="Menu" cartButton={true} {...props}/>
        <div className='food-list'>
            <FoodList 
                isCart={false} 
                cartContent={props.cartContent} 
                handleAddToCart={props.handleAddToCart} 
                handleRemoveToCart={props.handleRemoveToCart} 
            />
        </div>
    </div>);
}