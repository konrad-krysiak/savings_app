const { Link } = require("react-router-dom")

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Login">Log in</Link>
                </li>
                <li>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;