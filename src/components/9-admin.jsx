import './../styles/9-admin.css'
import Paitents from './10-paients';
import Add from './11-add';
import Statistic from './12-statistics';
import { Link, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowRightFromBracket, faChartLine, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Admin(){
    return(
        <>
            <section className="admin">
                <div className="sideBar">
                    <p className="sideBarLogo">Zeta</p>
                    <div className="sideBarLinksContainer">
                        <Link to="/admin/paitents" className="sideBarLinks"><FontAwesomeIcon icon={faUser}/> paitents</Link>
                        <Link to="/admin/add" className="sideBarLinks"><FontAwesomeIcon icon={faAdd}/> add</Link>
                        <Link to="/admin/statistics" className="sideBarLinks"><FontAwesomeIcon icon={faChartLine}/> statistics</Link>
                    </div>
                    <Link to="/" className="sideBarLinks" id='logout'><FontAwesomeIcon icon={faArrowRightFromBracket}/> log out</Link>
                </div>
                <Routes>
                    <Route path='/admin/paitents' element={<Paitents />} />
                    <Route path='/admin/add' element={<Add />} />
                    <Route path='/admin/statistics' element={<Statistic />} />
                </Routes>
            </section>
        </>
    )
}