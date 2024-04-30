import React, { useState } from "react";
import MenuCard from "./MenuCard";
import RestaurantMenuData from "../utils/MenuData";


const MenuPage = () => {
    const [menuData] = useState(RestaurantMenuData);
   


    return (
        <div className="flex mt-5 flex-wrap">
            {Object.values(menuData).map((restaurantItems, index) => (
                <div key={index}>
                    {restaurantItems.map((item) => (
                        <MenuCard key={item.id} menuItem={item} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MenuPage;
