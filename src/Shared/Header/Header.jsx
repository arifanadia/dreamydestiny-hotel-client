import {
    Avatar,
    Button,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput
} from "flowbite-react"
import { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from "react-router-dom"
const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
    localStorage.setItem('selectedTheme', 'dark');
}
const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
    localStorage.setItem('selectedTheme', 'light');
}
const selectedMode = localStorage.getItem('selectedTheme')


const Header = () => {

    const [selectedTheme, setSelectedTheme] = useState(selectedMode || 'light')



    useEffect(() => {
        if (selectedTheme === "dark") {
            setDarkMode()
        } else {
            setLightMode()
        }
    }, [selectedTheme])

    const toggleTheme = () => {
        setSelectedTheme(theme => theme === 'light' ? 'dark' : "light")
    }

    return (
        <div className={`${toggleTheme}`}>
            <Navbar className="border-2">
                <Link to="/">
                    <h3 className=" self-center whitespace-nowrap text-lg font-lobster sm:text-xl font-semibold text-primaryColor dark:text-white">DreamyDestiny</h3>

                </Link>
                <form>
                    <TextInput
                        type="text"
                        placeholder="Search.."
                        rightIcon={AiOutlineSearch}
                        className="hidden lg:inline" />
                </form>
                <Button className="w-12 h-10 lg:hidden " color='gray' pill>
                    <AiOutlineSearch />
                </Button>
                <div className="flex gap-2 md:order-2">
                    <Button
                        className="hidden sm:inline"
                        color="gray"
                        pill
                        onClick={() => toggleTheme()}

                    >
                        <span className="text-xl">    {selectedTheme === "light" ? <FaMoon /> : <FaSun />}</span>

                    </Button>
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar img="https://i.ibb.co/mCv7FyF/depositphotos-649066108-stock-photo-pink-flowers-park-spring-bloosom.webp" alt="" />
                        }>
                        <DropdownHeader>
                            <span className="block">Nadia</span>
                            <span className="block">Nadia@gmail.com</span>
                        </DropdownHeader>
                        <DropdownDivider />
                        <DropdownItem>Log Out</DropdownItem>

                    </Dropdown>
                    <Link to="/login">
                        <Button gradientDuoTone='cyanToBlue' outline>
                            Sign In
                        </Button>

                    </Link>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink active>
                        <Link to="/" className="text-primaryColor"> Home </Link>
                    </NavbarLink>
                    <NavbarLink>
                        <Link to='/about-us' className="text-primaryColor"> About Us</Link>
                    </NavbarLink>
                    <NavbarLink>
                        <Link to='/rooms' className="text-primaryColor">Rooms</Link>
                    </NavbarLink>
                    <NavbarLink>
                        <Link to='/my-bookings' className="text-primaryColor">My Bookings</Link>
                    </NavbarLink>
                </NavbarCollapse>

            </Navbar>

        </div>
    );
};

export default Header;