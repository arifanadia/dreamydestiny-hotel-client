
import AboutSection from "./AboutSection";
import Featured from "./Featured";
import Slider from "./Slider";
import MapSection from "./MapSection";
import SpecialOffer from "./SpecialOffer";
import NewsLetter from "./NewsLetter";


const Home = () => {
  
    return (
        <div>
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