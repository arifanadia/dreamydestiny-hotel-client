
import AboutSection from "./AboutSection";
import Featured from "./Featured";
import Slider from "./Slider";
import MapSection from "./MapSection";
import SpecialOffer from "./SpecialOffer";
import NewsLetter from "./NewsLetter";
import { Helmet } from "react-helmet-async";


const Home = () => {

    return (


        <div>
            <Helmet>
                <title>DreamyDestiny | Home</title>
            </Helmet>
            <Slider></Slider>
            <AboutSection></AboutSection>
            <Featured></Featured>
            <SpecialOffer></SpecialOffer>
            <MapSection></MapSection>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;