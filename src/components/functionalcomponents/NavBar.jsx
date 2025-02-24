import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                <li> <Link to='/home'>Home</Link>  </li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/skill'>Skills</Link> </li>
                <li> <Link to='/project'>Project</Link> </li>
                <li> <Link to='/contact'>Contact</Link> </li>
                </ul>
            </nav>

        </header>
    )
}
export default NavBar
