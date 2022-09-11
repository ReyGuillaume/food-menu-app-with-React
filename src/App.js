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

  return (
    <div className="App">
      <PageContent 
        watchingCart={watchingCart} 
        handleTogglePageContent={handleTogglePageContent} 
        nbrArticles={cart.length}
      />
      <NavBarFooter/>
    </div>
  );
}