import { useState } from "react";

export default function Menu({ isOpen, className }) {
    const [menuItems, setMenuItems] = useState(["The Edit", "New Arrivals", "Clothing", "Shoes", "Bags", "Accessories", "Jewelry", "Beauty", "Home"]);

    return (
        <div
            className={`${className} w-full block lg:text-center flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
            <div className="text-sm lg:flex-grow">
                {menuItems.map((item, index) => (
                    <a key={index} href="javascript:void(0);" className="block uppercase font-medium mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}