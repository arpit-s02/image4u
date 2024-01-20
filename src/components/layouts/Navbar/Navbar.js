import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import { ReactComponent as CrossIcon } from "../../../assets/cross.svg";
import "./Navbar.css"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navItems">
                <div>
                    <Link to="/" className="navLink">Homepage</Link>
                </div>

                {/* to be displayed on bigger screens */}
                <div className="authLinks">
                    <p className="navLink">Login</p>
                    <p className="navLink outline">Create Account</p>
                </div>

                {/* to be displayed on smaller screens */}
                <div 
                    className="menuIcon"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <CrossIcon /> : <MenuIcon />}
                </div>
            </div>

            {/* to be displayed on smaller screens */}
            <div className={showMenu ? "menuItemsWrapper open" : "menuItemsWrapper"}>
                <div className="menuItems" >
                    <p className="navLink">Login</p>
                    <p className="navLink">Create Account</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;