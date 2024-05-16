import image from '../../images/banner/bg.webp'

const SpecialOffer = () => {
    return (
        <div data-aos="flip-left"  data-aos-duration="2000" className="max-w-7xl mx-auto  max-bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) ,url(${image})` }}>
            <div className=" text-center mx-auto py-32 ">
                <h1 className="font-inter text-3xl text-white  font-bold  leading-snug F  ">20% Discount In Delux Suites</h1>
                <p className="lg:w-1/3 text-[#f6f6f6]"></p>
            </div>
        </div>
    );
};

export default SpecialOffer;