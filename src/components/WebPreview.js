export default function WebPreview() {
    return (
        <>
            <div className="container mx-auto px-5 py-2 lg:px-3 lg:pt-24---">
                <div className="m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-4/4 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./item1/1.png"
                                loading="lazy" />
                        </div>
                    </div>
                    <div className="flex w-2/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./item1/2.png"
                                loading="lazy" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./item1/3.png"
                                loading="lazy" />
                        </div>
                    </div>
                    <div className="flex w-2/2 flex-wrap">

                        <div className="w-3/4 p-1 md:p-2 mx-auto">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./item1/4.png"
                                loading="lazy" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./item1/5.png"
                                loading="lazy" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}