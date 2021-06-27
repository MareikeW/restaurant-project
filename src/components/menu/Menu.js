import React from 'react';

const Menu = () => {

    const menu_url = 'https://satiatedcravingsmenu.s3.us-east-2.amazonaws.com/restaurant_menu.pdf'

    return (
        <div>
            <h1>Meals from menu PDF</h1>
            <a href={`${menu_url}`} target={`_blank`}>Our menu</a>
        </div>
    )
}

export default Menu;
