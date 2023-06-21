import { useDispatch, useSelector } from "react-redux";
import { setSize } from "../../redux/size";

export default function RightPanel() {
    const { size } = useSelector(store => store.size);
    const dispatch = useDispatch();

    return (
        <aside className="max-h-screen sticky top-20 col-[2] row-[4] xl:col-[4] xl:row-[2] lg:col-[3] lg:row-[2/2_span] bg-gray-50--- pr-4 sm:pr-6 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
            <div className="h-full py-6 pl-6">
                {/* <!-- Start right column area --> */}
                <div className="relative h-full---" style={{ minHeight: "30rem" }}>
                    <div className="absolute inset-0 rounded-lg border-2--- border-dashed border-gray-200 flex flex-col justify-center items-center--- lg:mt-10">

                        <>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800 font-sans">JONATHAN SIMKHAI</h2>
                                <p className="text-sm text-gray-700">Lurex Linen Viscose Jacket in Conchiglia</p>
                                <p className="text-sm font-bold text-gray-700">$225</p>
                            </div>
                        </>
                        <>
                            <div className="flex flex-col">
                                <p className="text-sm mt-3"><span className="font-bold text-gray-700 mr-1">COLOR</span>CONCHIGLIA</p>
                            </div>
                        </>
                        <>
                            <div className="flex flex-row mt-1">
                                <img
                                    alt="gallery"
                                    className="border-soild border border-gray-600 rounded-lg object-fit w-full--- h-12 rounded-lg object-center"
                                    src="./item1/p1.png"
                                    loading="lazy" />
                                <img
                                    alt="gallery"
                                    className="rounded-lg object-fit w-full--- h-12 rounded-lg object-center p-1"
                                    src="./item1/p2.png"
                                    loading="lazy" />
                            </div>
                        </>

                        <>
                            <div className="flex flex-row">
                                <span className="text-sm mt-3"><span className="font-bold text-gray-700 mr-1">SIZE</span>L</span>
                                <span className="text-sm mt-3 ml-auto"><span className="underline text-gray-700 mr-1">SIZE GUIDE</span></span>
                            </div>
                        </>
                        <>
                            <div className="flex flex-row mt-1 flex-wrap">
                                {["XS", "S", "M", "L", "XXL"].map((s, index) => <span key={index} onClick={() => {
                                    dispatch(setSize(s));
                                }} className={`text-sm m-1 p-1 min-w-[49px] text-center border-soild border border-gray-600 rounded-2xl ${s === size ? `bg-gray-900 text-white` : ``}`}>{s}</span>)}
                            </div>
                        </>
                        <>
                            <div className="flex flex-row min-w-full bg-gray-900 text-white text-center mt-3 p-3 rounded-full justify-center">
                                <span className="text-sm">ADD TO BAG</span><span className="ml-3"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path stroke="white" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg></span>
                            </div>
                        </>
                        <>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-700 mt-3">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                                <p className="text-sm text-gray-700 mt-3">Speak to a Personal Stylist CHAT NOW</p>
                            </div>
                        </>
                    </div>
                </div>
                {/* <!-- End right column area --> */}
            </div>
        </aside>
    );
}