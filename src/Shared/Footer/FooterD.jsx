
import { Link } from "react-router-dom";
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import logo from '../../images/logo dreamyDestiny.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const FooterD = () => {
    return (
        <Footer className="border border-t-8 border-primaryColor">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to="/">
                            <img className="w-80" src={logo} alt="" />

                        </Link>
                        <p className="w-3/4 mt-6">Elevate your stay with our dreamyDestiny.Boasting modern design, expansive living spaces, and breathtaking city vistas .Experience sophistication and comfort like never before.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-5 sm:grid-cols-2 w-full lg:grid-cols-3 sm:gap-6 ">
                        <div>
                            <FooterTitle title="ABOUT" />
                            <FooterLinkGroup  />
                            <FooterLink href="/about-us">
                                About Us
                            </FooterLink>
                            <FooterLink href="/rooms">
                               Rooms
                            </FooterLink>
                            <FooterLink href="/blogs">
                               Blogs
                            </FooterLink>
                            <FooterLink href="/contact-us">
                               Contact US
                            </FooterLink>


                        </div>
                        <div>
                            <FooterTitle title="FOLLOW US" />
                            <FooterLinkGroup col />
                            <FooterLink>
                                GitHub
                            </FooterLink>
                            <FooterLink>
                                Discord
                            </FooterLink>


                        </div>
                        <div>
                            <FooterTitle title="Legal" />
                            <FooterLinkGroup col />
                            <FooterLink>
                                Privacy Policy
                            </FooterLink>
                            <FooterLink>
                                Term & Condition
                            </FooterLink>


                        </div>
                    </div>
                </div>
                <FooterDivider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between my-6 ">
                    <FooterCopyright
                    href="#"
                    by="Arifa Nadia"
                    year={new Date().getFullYear()}/>
                    <div className="flex gap-4">
                        <FooterIcon href="#" icon={BsFacebook}/>
                        <FooterIcon href="#" icon={BsInstagram}/>
                        <FooterIcon href="#" icon={BsTwitter}/>
                        <FooterIcon href="#" icon={BsGithub}/>
                        <FooterIcon href="#" icon={BsDribbble}/>
                    </div>
                </div>
            </div>

        </Footer>
    );
};

export default FooterD;