import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import './style.css';

const Home = () => {
    return (
    <div className="landing-page">
        
        <Navbar />

        <div className="landing-container">
            <div className="landing-content">
                <div className="content-header">Looking for way to save money?</div>
                <div className="content-subheader">We are here for you.</div>
                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatum minus, quis alias perspiciatis reiciendis id porro aliquam velit esse reprehenderit totam, similique, ad minima asperiores autem saepe voluptatibus doloremque!</div>
                <Link to='/Auth'>
                    <button className="landing-signup">Sign up </button>
                </Link>
            </div>

            <div className="landing-piggy">
                <div className="landing-piggy-image"></div>
            </div>
        </div>
    </div>
    );
}
 
export default Home;