import React, { useState } from "react";
import MenuCard from "./MenuCard";
import RestaurantMenuData from "../utils/MenuData";
import  {useParams} from "react-router-dom";

const MenuPage = () => {
    const [menuData] = useState(RestaurantMenuData);

    const params = useParams();
    console.log(params)

    return (
        <div>
            {menuData.map((restaurant) => (
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






