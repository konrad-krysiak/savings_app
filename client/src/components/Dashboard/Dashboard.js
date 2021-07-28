import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import './style.scss';

import Piggy from '../Piggy/Piggy';


export const Dashboard = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.piggy);
    return (
        <>
            <Container className="text-center mt-3">
                <h1>Dashboard</h1>
                <div className="dashboard-box">
                    <div className="dashboard-box-item dashboard-box-left">
                        <button className="btn btn-danger">Add expense</button>
                    </div>

                    <div className="dashboard-box-item dashboard-box-mid">
                        <h2>Bank account: 0</h2>
                        <h2>Cash: 0</h2>
                        <h2>Total: 0</h2>
                    </div>

                    <div className="dashboard-box-item dashboard-box-right">
                        <button className="btn btn-primary">Transfer money</button>
                    </div>
                </div>

                {state.map(piggy => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Piggy id: {piggy.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Piggy money: {piggy.money}</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                    );
                })}



                <Link to='/Piggy/new'>New piggy</Link>
            </Container>
        </>
    );
}
 
export default Dashboard;