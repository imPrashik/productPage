export default function Bottom() {
    return (
        <>
            <div className="flex justify-center space-x-4 mt-5">
                <span className="underline">Jonathan Simkhai</span>
                <span className="underline">Blazers</span>
                <span className="underline">Viscose</span>
            </div>

            <div className="flex flex-col justify-center space-x-4 mt-10 text-center">
                <div className="text-sm font-bold uppercase">a note from the editor</div>
                <h2 className="mt-2 text-2xl mb-2 text-gray-800">The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. </h2>
                <div className="text-sm uppercase mb-10"><span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> </svg></span> By <span className="underline">MINNA SHIM</span>, Fashion Editor</div>
            </div>
        </>
    );
}