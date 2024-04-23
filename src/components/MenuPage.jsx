import React, { useState } from "react";
import MenuCard from "./MenuCard";
import RestaurantMenuData from "../utils/MenuData";

const MenuPage = () => {
    const [menuData] = useState(RestaurantMenuData);

    return (
        <div>
            {Object.values(menuData).map((restaurant) => (
                <div key={restaurant.restaurantName}>
                    <h2>{restaurant.restaurantName}</h2>
                    {restaurant.items.map((item) => (
                        <MenuCard key={item.id} menuItem={item} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MenuPage;






