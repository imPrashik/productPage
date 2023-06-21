export default function LeftPanel() {
    return (
        <aside className="max-h-screen xl:sticky lg:static hidden lg:block top-20 col-[2] row-[2] border-b border-gray-200 bg-white xl:border-b-0 xl:border-r xl:border-gray-200">
            <div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* <!-- Start left column area --> */}
                <div className="relative h-full---" style={{ minHeight: "12rem" }}>
                    <div className="absolute inset-0 rounded-lg border-2--- border-dashed border-gray-200 flex--- justify-center items-start pt-3---">
                        <div
                            className={`w-full block lg:text-center--- pl-3--- flex-grow lg:flex lg:items-center--- lg:w-auto`}>
                            <div className="text-sm lg:flex-grow">
                                {["Details", "Delivery", "Fit", "Share"].map((item, index) => (
                                    <a key={index} href="javascript:void(0);" className={`block uppercase ${index === 0 ? "font-medium" : ""} mt-4 lg:inline-block lg:mt-0 text-white-200 mr-2`}>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="pt-3">The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.</p>

                            <p className="pt-3">See the <span className="font-medium underline">EDITOR’S NOTE</span></p>

                            <p className="pt-3">Learn about the <span className="font-medium underline">DESIGNER</span></p>
                        </div>
                    </div>
                </div>
                {/* <!-- End left column area --> */}
            </div>
        </aside>
    );
}