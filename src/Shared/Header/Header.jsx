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
import useAuth from "../../Hook/useAuth"
import { LuLogOut } from "react-icons/lu"
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
    const { user, logOut } = useAuth()

    const [selectedTheme, setSelectedTheme] = useState(selectedMode || 'light')
    const handleLogOut = () => {
        logOut()
    }



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
        <div className={`${toggleTheme} `} >
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
                    {
                        user ?
                            <Dropdown
                                title={user?.displayName}
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar refererpolicy='no-referrer' img={user?.photoURL} alt="photo" />
                                }>
                                <DropdownHeader className="z-[5] mb-4 space-y-2 ">
                                    <img className='w-20 h-20 mx-auto rounded-full' src={user?.photoURL} alt="" />
                                    <span className="block text-center">{user?.displayName}</span>
                                    <DropdownDivider />
                                    <span className="block text-center">{user?.email}</span>
                                </DropdownHeader>
                                <DropdownDivider />
                                <DropdownItem className="text-center gap-2" onClick={handleLogOut}>Log Out <LuLogOut className="text-red-800" /></DropdownItem>

                            </Dropdown>
                            :
                            <Link to="/login">
                                <Button gradientDuoTone='cyanToBlue' outline>
                                    Sign In
                                </Button>

                            </Link>
                    }

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