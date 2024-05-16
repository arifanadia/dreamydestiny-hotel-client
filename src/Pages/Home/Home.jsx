
import AboutSection from "./AboutSection";
import Featured from "./Featured";
import Slider from "./Slider";
import MapSection from "./MapSection";
import SpecialOffer from "./SpecialOffer";
import NewsLetter from "./NewsLetter";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";


const Home = () => {
    const rooms = useLoaderData()

    return (


        <div>
            <Helmet>
                <title>DreamyDestiny | Home</title>
            </Helmet>
            <Slider></Slider>
            <AboutSection></AboutSection>
            <Featured rooms={rooms}></Featured>
            <SpecialOffer rooms={rooms}></SpecialOffer>
            <MapSection></MapSection>
            <Review></Review>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;