import { useEffect, useState } from 'react'
import Spinner from '../../Shared/Spinner'
import FeaturedCard from './FeaturedCard'

const Featured = () => {

    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <section>
            <div className="container">
                <div className="text-center mb-5">
                    <h5 className="section__header__secondary pt-md-5">
                        Featured Vahicles
                    </h5>
                    <h1 className="section__header__primary">
                        GREAT RENTAL OFFERS FOR YOU
                    </h1>
                </div>
                <div className="row">
                    {
                        cars.length === 0 && <Spinner />
                    }
                    {
                        cars.map(car => <FeaturedCard car={car} key={car._id} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Featured
