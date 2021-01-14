import './App.css';
import data from './components/Data';
import Listing from './components/Listing';

const etsy = JSON.parse(JSON.stringify(data));

function App() {  
  const items = [];

  etsy.map((obj) => {    
    const item = ({    
      listing_id: obj.listing_id,
      url: obj.url,
      MainImage: obj.MainImage,
      title: obj.title,
      currency_code: obj.currency_code,
      price: obj.price,
      quantity: obj.quantity
    })
    
    items.push(item);
    return items;
  });  
  
  return (    
    <Listing items={items} />
  );
}

export default App;
