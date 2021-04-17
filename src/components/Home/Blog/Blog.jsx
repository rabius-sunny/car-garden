import classes from './blog.module.css'
import car1 from '../../../images/car1.jpg'
import car2 from '../../../images/car2.png'

const Blog = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="section__header__primary">
                        From The Blog:
                    </h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div><img src={car1} className="w-100" alt="thumb" /></div>
                            <h6 className="text-secondary">Lorem ipsum dolor sit amet...</h6>
                        </div>
                        <div className="col-md-6">
                            <div><img src={car2} className="w-100" alt="thumb" /></div>
                            <h6 className="text-secondary">Lorem ipsum dolor sit amet...</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="section__header__primary">
                        Subscribe:
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum eum?</p>
                    <div>
                        <ul>
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>twitter</li>
                        </ul>
                    </div>
                    <form>
                        <input type="text"/>
                        <input type="submit" className="btn btn-primary" value="SUBSCRIBE"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Blog
