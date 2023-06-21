import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import RightMenuButtons from '../RightMenuButtons';

export default function Header({bigScreen}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 --- border-b border-gray-200 bg-white --- min-h-[4rem] sticky top-0 z-10 col-[1/-1] row-[1] flex justify-center items-center bg-indigo-600--- text-white---">
            <div className="flex items-center flex-shrink-0 uppercase font-medium text-white mr-6--- lg:mr-72--- mr-auto">
                <span className="w-100 h-10 mr-2" style={{ color: "black" }} alt="Logo">My Company.com</span>
            </div>

            {bigScreen
                ? <>
                    <Menu isOpen={isOpen} />
                    <RightMenuButtons isOpen={isOpen} setIsOpen={setIsOpen} />
                </>
                : <>
                    <RightMenuButtons isOpen={isOpen} setIsOpen={setIsOpen} />
                    <Menu isOpen={isOpen} />
                </>
            }

        </nav>
    );
}