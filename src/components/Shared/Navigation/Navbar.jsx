import { Link } from 'react-router-dom'
import logo from '../../../logo.png'
import classes from './nav.module.css'

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${classes.bgDark}`}>
            <div className="container">
                <div className={`d-flex justify-content-between ${classes.customWidth}`}>
                    <a className="navbar-brand" href="/"><img src={logo} alt="logo" className="w-50" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-3" href="/">Our Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-3" href="/">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-3" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-3" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-3" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
