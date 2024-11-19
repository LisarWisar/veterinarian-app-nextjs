import Navbar from "../ui/landing-page/navbar";
import Footer from "../ui/landing-page/footer";
import Register from "../ui/login/register-form";

export default function Page () {
    return(
        <div className="flex min-h-screen flex-col bg-white overflow-y-scroll">
            <Navbar/>
            <div className="flex justify-center m-10 h-full">
                <Register/>
            </div>
            <Footer/>
        </div>
    )
}