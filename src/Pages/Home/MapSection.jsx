import { Map, Marker } from "pigeon-maps";
import bg from "../../images/about/map.webp"

const MapSection = () => {

    return (
        <div className="flex xl:mt-[700px] lg:mt-[800px] md:mt-[1300px] sm:mt-[2600px] mt-[2700px] mb-20">
            <Map className="max-w-sm"
                height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
            <div className=" bg-no-repeat bg-cover bg-center w-full "
             style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg})` }}>

             </div>


        </div>
    );
};

export default MapSection;