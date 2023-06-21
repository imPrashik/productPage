export default function RightMenuButtons({isOpen, setIsOpen}) {
    return (
        <>
            <div className="flex">
                <div className={` ${!isOpen ? "block" : "hidden---"}`}>
                    <button className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                        <svg width="25px" height="25px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Search_Magnifying_Glass"> <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                    </button>
                </div>
                <div className={` ${!isOpen ? "block" : "hidden---"}`}>
                    <button className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                        <svg width="25px" height="25px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3999 3.2C14.8417 2.86863 15.4685 2.95817 15.7999 3.4L18.4999 7H18.5031C20.3417 7 21.7478 8.6389 21.4682 10.4562L20.3913 17.4562C20.1661 18.9197 18.9069 20 17.4261 20H6.57366C5.09295 20 3.8337 18.9197 3.60855 17.4562L2.53162 10.4562C2.25204 8.63889 3.65808 7 5.49674 7H5.4999L8.1999 3.4C8.53127 2.95817 9.15808 2.86863 9.5999 3.2C10.0417 3.53137 10.1313 4.15817 9.7999 4.6L7.9999 7H15.9999L14.1999 4.6C13.8685 4.15817 13.9581 3.53137 14.3999 3.2ZM5.98825 9C5.99551 9.00008 6.00277 9.00008 6.01002 9H17.9898H18.0116H18.5031C19.116 9 19.5846 9.5463 19.4914 10.1521L18.4145 17.1521C18.3395 17.6399 17.9197 18 17.4261 18H6.57366C6.08009 18 5.66034 17.6399 5.58529 17.1521L4.50837 10.1521C4.41517 9.5463 4.88385 9 5.49674 9H5.98825Z" fill="#000000"></path> </g></svg>
                    </button>
                </div>
                <div className={` ${!isOpen ? "block" : "hidden---"}`}>
                    <button className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                        <svg width="20px" height="20px" viewBox="0 -3 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg>
                    </button>
                </div>
            </div>
            <div className="block lg:hidden">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg width="20px" height="20px"
                        className={`fill-current h-3--- w-3--- ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg width="20px" height="20px"
                        className={`fill-current h-3--- w-3--- ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
        </>
    );
}