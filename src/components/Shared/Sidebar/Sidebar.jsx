import classes from './sidebar.module.css'
import logo from '../../../logo.png'
import { Link } from 'react-router-dom'

const Sidebar = ({ isAdmin }) => {
    return (
        <div className="col-md-2">
            <div className={classes.sidebar}>
                <div className="text-center"><Link to="/"><img src={logo} className="w-75" alt="logo" /></Link></div>
                <div className={classes.sidebar__link}>
                    <p><Link to="/dashboard">Order list</Link></p>
                    {isAdmin && <p><Link to="/addService">Add Service</Link></p>}
                    {isAdmin && <p><Link to="/make-admin">Make Admin</Link></p>}
                    {isAdmin && <p><Link to="/manage">Manage Services</Link></p>}
                    {!isAdmin && <p><Link to="/place-bookings">Place Bookings</Link></p>}
                    {!isAdmin && <p><Link to="/addReview">Add a Review</Link></p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
