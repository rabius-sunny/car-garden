import logo from '../../../logo.png'
import classes from "./footer.module.css"

const Footer = () => {
    return (
        <section className={classes.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className={classes.footer__left}>
                            <img src={logo} alt="logo" />
                            <p className="text-secondary py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto, accusantium tempora dignissimos maiores doloremque nobis, perferendis ducimus, esse ex quaerat quos voluptatibus aut sed.</p>
                            <h6><a href="/">Rental Information</a></h6>
                            <h6><a href="/">FAQ</a></h6>
                            <div><input type="text" placeholder="search" /></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className={` ps-md-5 ${classes.footer__center}`}>
                            <h4 className="section__header__primary">Contact Us:</h4>
                            <h6>Main Office Address:</h6>
                            <p className="text-secondary">Notun Bazar, Unit-8, Vatara Thana, Gulshan-2, Dhaka Bangladesh</p>
                            <p>8:00am - 9:30pm</p>
                            <p><a href="/">Other Office Location</a></p>
                            <p>cargarden@rentacar.com</p>
                            <p>+880 199 999000</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className={` ps-md-5 ${classes.footer__right}`}>
                            <h4 className="section__header__primary">Information</h4>
                            <p><a href="/">Find a Car for Rent</a></p>
                            <p><a href="/">Cars Catalog</a></p>
                            <p><a href="/">FAQ</a></p>
                            <p><a href="/">About Us</a></p>
                            <p><a href="/">Contacts</a></p>
                            <p><a href="/">Help Center</a></p>
                            <p><a href="/">Privacy Police</a></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p>Copyright @ Car Garden | All right reserved, 2021</p>
                    </div>
                    <div>
                        <ul>
                            <li><i>fb</i></li>
                            <li><i>tt</i></li>
                            <li><i>in</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
