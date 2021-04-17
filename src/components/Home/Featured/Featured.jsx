import { useEffect, useState } from 'react'
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
                <div className="text-center">
                    <h4 className="section__header__section">
                        Featured Vahicles
                    </h4>
                    <h1 className="section__header__primary">
                        GREAT RENTAL OFFERS FOR YOU
                    </h1>
                </div>
                <div className="row">
                    {
                        cars.map(car => <FeaturedCard car={car} key={car._id} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Featured
