import LeftPanel from "./Sections/LeftPanel";
import MiddlePanel from "./Sections/MiddlePanel";
import RightPanel from "./Sections/RightPanel";

export default function Layout({bigScreen}) {
    return (
        <>
            <LeftPanel />
            <MiddlePanel bigScreen={bigScreen} />
            <RightPanel />
        </>
    );
}