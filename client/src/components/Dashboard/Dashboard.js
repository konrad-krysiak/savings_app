import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

// import Piggy from '../Piggy/Piggy';


export const Dashboard = () => {
    const state = useSelector(state => state.piggy);
    // const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
            Dashboard
        </>
    );
}
 
export default Dashboard;