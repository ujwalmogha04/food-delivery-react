import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import RestaurantMenuData from "../utils/MenuData";
import Shimmer from "./Shimmer"; 

const MenuPage = () => {
    const [menuData] = useState(RestaurantMenuData);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setIsLoading(false); 
        }, 200); 

        return () => clearTimeout(timeout); 
    }, []);

    return (
        <div className="flex mt-5 flex-wrap">
            {isLoading ? (
                Object.values(menuData).map((restaurantItems, index) => (
                    <div key={index}>
                        {restaurantItems.map((_, cardIndex) => (
                            <Shimmer key={cardIndex} />
                        ))}
                    </div>
                ))
            ) : (
                Object.values(menuData).map((restaurantItems, index) => (
                    <div key={index}>
                        {restaurantItems.map((item) => (
                            <MenuCard key={item.id} menuItem={item} />
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};

export default MenuPage;
