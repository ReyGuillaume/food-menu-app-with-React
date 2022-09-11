import Header from './Header';
import FoodList from './FoodList';

export default function Menu (props) {
    return (<div className='page-content'>
        <Header leftContent="Menu" cartButton={true} {...props}/>
        <div className='food-list'>
            <FoodList 
                list={[{}]} 
                handleAddToCart={props.handleAddToCart} 
                handleRemoveToCart={props.handleRemoveToCart} 
                cartContent={props.cartContent}
            />
        </div>
    </div>);
}