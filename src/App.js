import Menu from './components/Menu';
import Cart from './components/Cart';
import NavBarFooter from './components/NavBarFooter';
import { useState } from 'react';

function PageContent (props) {
  if (props.watchingCart) {
    return (<Cart {...props}/>);
  }
  return (<Menu {...props}/>);
}

export default function App() {
  
  const [cart, setCart] = useState([]);
  const [watchingCart, setWatchingCart] = useState(false);

  const handleTogglePageContent = () => {
    setWatchingCart(!watchingCart);
  }

  const handleAddToCart = (object) => {
    const cartCopy = [...cart];
    cartCopy.push(object);
    setCart(cartCopy);
  }

  const handleRemoveToCart = (object) => {
    const cartCopy = [...cart];
    const id = cartCopy.findIndex(obj => obj.id === object.id);
    cartCopy.splice(id, 1);
    setCart(cartCopy);
  }

  return (
    <div className="App">
      <PageContent 
        watchingCart={watchingCart} 
        cartContent={cart} 
        handleTogglePageContent={handleTogglePageContent} 
        handleAddToCart={handleAddToCart} 
        handleRemoveToCart={handleRemoveToCart}
      />
      <NavBarFooter/>
    </div>
  );
}