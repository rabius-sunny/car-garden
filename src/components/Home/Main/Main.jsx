import WhyUs from "../About/WhyUs"
import Achieve from "../Achieves/Achieve"
import Blog from "../Blog/Blog"
import Featured from "../Featured/Featured"
import Footer from "../Footer/Footer"
import Intro from "../Intro/Intro"
import Navbar from "../../Shared/Navigation/Navbar"
import Review from "../Reviews/Review"
import Team from "../Team/Team"

const Main = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Featured />
            <WhyUs />
            <Blog />
            <Review />
            <Team />
            <Achieve />
            <Footer />
        </>
    )
}

export default Main
