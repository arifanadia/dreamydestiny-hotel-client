import { useLoaderData } from "react-router-dom";
import AboutSection from "./AboutSection";
import Featured from "./Featured";
import Slider from "./Slider";
import MapSection from "./MapSection";


const Home = () => {
    const  rooms  = useLoaderData();
    console.log(rooms);
    return (
        <div>
            <Slider></Slider>
            <AboutSection></AboutSection>
            <Featured rooms={rooms}></Featured>
            <MapSection></MapSection>

        </div>
    );
};

export default Home;