export default function Navbar () {
    return (
        <div className="bg-teal-400 p-10 flex flex-row justify-between">
            <h1 className="text-white text-5xl font-sans font-bold">DOOLITTLES</h1>
            <div className="flex flex-row text-white text-xl font-semibold">
                <a href="/" className="bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:bg-teal-500 p-3 m-4 rounded">Home</a>
                <div className="hover:cursor-pointer bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:bg-teal-500 p-3 m-4 rounded">Our services</div>
                <div className="hover:cursor-pointer bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:bg-teal-500 p-3 m-4 rounded">About Us</div>
                <div className="hover:cursor-pointer bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:bg-teal-500 p-3 m-4 rounded">Contact</div>
                <a href="/login" className="p-3 m-4 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:bg-teal-500 rounded">Login</a>
            </div>
        </div>
    )
}