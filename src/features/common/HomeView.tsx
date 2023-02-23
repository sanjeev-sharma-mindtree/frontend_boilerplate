import {useState} from 'react'
import { Link, Outlet } from "react-router-dom";

export default function HomeView() {
    const [showNav, setShowNav] = useState<boolean>(true);
    
    return (
        <>
            <button onClick={() => setShowNav(!showNav)}>Hide</button>
            <div id="container">
                <div id="sidebar" className={showNav ? 'slideIn' : 'slideOut'}>
                    <h1>React Router Contacts</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`/`}>Campaign</Link>
                            </li>
                            <li>
                                <Link to={`/incentive`}>Incentive</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    );
}