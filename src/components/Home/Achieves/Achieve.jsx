import classes from './achieve.module.css'

const Achieve = () => {
    return (
        <section className={classes.achieveBg}>
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div><i className="far fa-smile pb-3"></i></div>
                            <h2 className="section__header__primary">5657</h2>
                            <small className="text-secondary">HAPPY CUSTOMERS</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div><i className="fas fa-car pb-3"></i></div>
                            <h2 className="section__header__primary">657</h2>
                            <small className="text-secondary">TOTAL CAR COUNT</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div><i className="fas fa-road pb-3"></i></div>
                            <h2 className="section__header__primary">1,255,657</h2>
                            <small className="text-secondary">TOTAL KM</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div><i className="fas fa-headset pb-3"></i></div>
                            <h2 className="section__header__primary">1255</h2>
                            <small className="text-secondary">CALL CENTER SOLUTIONS</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achieve
