import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from "../../images/icons/iconmap.png";
import image from "../../images/about/map.webp";

const MapSection = () => {
    const markers = [
        {
            geocode: [46.86, 2.3522],
            popup: "hello i am there"
        },
        {
            geocode: [46.85, 2.3522],
            popup: "hello i am there"
        },
    ];
    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [38, 38]
    });
    return (
        <div 
            data-aos-anchor-placement="bottom-bottom" className='my-24'>
            <h1 className="lg:text-4xl text-center my-8 text-2xl font-semibold">
                Find Us By Map
            </h1>
            <div className='flex max-w-7xl mx-auto'>
                <div data-aos="fade-right" data-aos-duration="2000" className="w-2/3 h-96">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            markers.map((marker, idx) =>
                                <Marker key={idx} position={marker.geocode} icon={customIcon}>
                                    <Popup>My Location</Popup>
                                </Marker>
                            )
                        }
                    </MapContainer>
                </div>
                <div data-aos="fade-left"  data-aos-duration="2000"className="px-52 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) ,url(${image})` }}>
                   
                </div>
            </div>
        </div>
    );
};

export default MapSection;
