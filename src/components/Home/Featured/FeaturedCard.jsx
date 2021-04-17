import { Link } from 'react-router-dom'
import classes from './featured.module.css'

const FeaturedCard = ({ car }) => {
    const { name, image, price, type, geer, passengers, fuel, _id } = car

    return (
        <div className="col-md-4">
            <div className={classes.featuredCard}>
                <img src={image} className="w-100" alt="" />
                <h5>{name}</h5>
                <p className="text-secondary">Start from {price}$/per a day</p>
                <Link to={"/car/" + _id}><button className="btn btn-primary mb-4">RENT IT</button></Link>
                <ul>
                    <li>{type}</li>
                    <li>{geer}</li>
                    <li>{passengers} Passengers</li>
                    <li>{fuel}</li>
                </ul>
            </div>
        </div>
    )
}

export default FeaturedCard
