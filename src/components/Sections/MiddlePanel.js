import MobilePreview from "../MobilePreview";
import WebPreview from "../WebPreview";

export default function MiddlePanel({ bigScreen }) {
    return (
        <main className="bg-white col-[2] row[3] md:col-[2] md:row[3] xl:col-[3] xl:row-[2] w-screen--- min-h-[150vh]---">
            <div class="sticky z-50" style={{ top: 90 }}>
                <p>
                    <span className="absolute right-0 mr-3 mt-3">
                        <svg style={{marginLeft: "auto"}} fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path>
                        </svg>
                    </span>
                </p>
            </div>
            <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* <!-- Start main area--> */}
                <div className="relative h-full--- w-full">
                    <div className="relative inset-0 rounded-lg border-2--- border-dashed border-gray-200 flex--- justify-center items-start pt-3---">
                        {bigScreen
                            ? <>
                                <WebPreview />
                            </>
                            : <>
                                <MobilePreview />
                            </>}

                    </div>
                </div>
                {/* <!-- End main area --> */}
            </div>
        </main>
    );
}