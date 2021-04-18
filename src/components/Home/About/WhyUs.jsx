import classes from './about.module.css'

const WhyUs = () => {
    return (
        <section className={classes.section__whyus}>
            <div className="container py-md-5">
            <h5 className="section__header__secondary pt-5 text-center">
                    Learn About Us
                </h5>
                <h1 className="section__header__primary text-center mb-md-5">
                    WHY US
                </h1>
                <div className="row text-center text-light">
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-shield-alt"></i></div>
                            <h4>Secured Payment Guarantee</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-headset"></i></div>
                            <h4>Help Center & Support 24/7</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-car"></i></div>
                            <h4>Booking any Class Vehicles</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-briefcase"></i></div>
                            <h4>Corporate and Bussiness Services</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-user-plus"></i></div>
                            <h4>Car Sharing Options</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.aboutCard}>
                            <div className="mb-3"><i className="fas fa-gem"></i></div>
                            <h4>Limousine and Chauffeur Hire</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
