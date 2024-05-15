
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
            <MapSection></MapSection>
            <SpecialOffer></SpecialOffer>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;