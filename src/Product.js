import Header from "./components/Sections/Header";
import Layout from "./components/Layout";
import Bottom from "./components/Sections/Bottom";

export default function Product({ bigScreen }) {
    return (
        <>
            <div className="relative border-b grid grid-cols-[2rem_1fr_2rem] xl:grid-cols-[minmax(2rem,1fr)_16rem_minmax(200px,calc(80rem-32rem))_16rem_minmax(2rem,1fr)] lg:grid-cols-[2rem_minmax(200px,calc(100%-16rem))_16rem_2rem] min-h-screen---">
                <Header bigScreen={bigScreen} />
                <Layout bigScreen={bigScreen} />
            </div >
            <div className="max-w-2xl mx-auto">
                <Bottom />
            </div>
        </>
    )
}