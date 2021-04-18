import classes from './blog.module.css'
import car1 from '../../../images/car1.jpg'
import car2 from '../../../images/car2.png'

const Blog = () => {
    return (
        <section className="container py-md-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="section__header__primary mb-3">
                        From The Blog:
                    </h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div><img src={car1} className="w-100" height="200px" alt="thumb" /></div>
                            <h6 className="text-primary pt-2 pb-3 text-decoration-underline"><a href="/">Lorem ipsum dolor sit amet</a> <i className="fas fa-arrow-right"></i></h6>
                        </div>
                        <div className="col-md-6">
                            <div><img src={car2} className="w-100" height="200px" alt="thumb" /></div>
                            <h6 className="text-primary pt-2 pb-3 text-decoration-underline"><a href="/">Lorem ipsum dolor sit amet</a> <i className="fas fa-arrow-right"></i></h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="section__header__primary mb-3">
                        Subscribe:
                    </h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum eum?</p>
                    <div className="social">
                        <ul>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram-square"></i></li>
                        </ul>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="enter your email"  />
                        <button class="btn btn-outline-primary" type="button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
