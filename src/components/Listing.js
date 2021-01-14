import React from 'react';

export default function Listing(props) {
    const { items } = props;    

    return items.map((item, i) => {
        const level = (quantity) => {
            if (quantity <= 10) {
                return "item-quantity level-low";
            } else if (quantity <= 20) {
                return "item-quantity level-medium";
            }
            return "item-quantity level-high";        
        }

        const price = (currency) => {
            if (currency === "USD") {
                return `\u0024${item.price}`;
            } else if (currency === "EUR") {
                return `\u20ac${item.price}`;
            }
            return `${item.price} GBP`;
        }

        const title = (string) => {
            const value = string.length;
            if (value > 50) {
                const stringFifty = string.slice(0, 50);
                return `${stringFifty} ...`;
            }
            return string;
        }

        return (        
            <div className="item-list" key={item.listing_id}>
                <div className="item">
                    <div className="item-image">                    
                        <a href={item.url}>                        
                            <img src={item.MainImage && item.MainImage.url_570xN} alt={`img-${i}`}/>                 
                        </a>
                    </div>
                    <div className="item-details">                    
                        <p className="item-title">{item.title && title(item.title)}</p>
                        <p className="item-price">{price(item.currency_code)}</p>
                        <p className={level(item.quantity)}>{item.quantity}</p>
                    </div>
                </div>
            </div>
        )
    })
}
