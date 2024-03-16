import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Projects from '../components/HomeComponents/Projects/MyProjects';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <Projects />
            <Footer />

        </div>
    )
}

export default home