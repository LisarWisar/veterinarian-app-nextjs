import Navbar from "../ui/landing-page/navbar"
import Login from "../ui/login/login-form"
import Footer from "../ui/landing-page/footer"

export default function Page () {
    return (
        <div className="flex min-h-screen flex-col bg-white overflow-y-scroll">
            <Navbar/>
            <div className="flex justify-center m-10 h-full">
                <Login/>
            </div>
            <Footer/>
        </div>
    )
}