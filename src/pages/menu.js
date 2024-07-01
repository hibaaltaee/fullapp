import React, { useState, useEffect } from 'react';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://djangoapp-production-755d.up.railway.app/api/menu-items/')
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    return (
        <div className="hero1">
            <div className="sp">
                <h1>Our menu</h1>
            </div>
            <div className="cards">
                {menuItems.map(item => (
                    <div className='card1' key={item.id}>
                        <img src={`"https://djangoapp-production-755d.up.railway.app/api/menu_images/${item.image}`} alt={item.name}></img>
                        <h4>{item.name}</h4>
                        <p>{item.price} $</p>
                        <p>{item.description}</p>
                        <button>Order for delivery</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
