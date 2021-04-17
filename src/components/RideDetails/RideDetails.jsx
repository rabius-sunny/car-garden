import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import Navbar from "../Shared/Navigation/Navbar"
import { UserContext } from '../../App'

const RideDetails = () => {

    const [user, setUser] = useContext(UserContext)
    const [car, setCar] = useState([])
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/cars/' + id)
            .then(res => res.json())
            .then(data => setCar(data[0]))
            .catch(err => console.log(err))
    }, [id])
    const { name, price, type, passengers, image, geer, fuel, _id } = car
    const handleBooking = () => {
        const bookingData = {
            userName: user.name,
            email: user.email,
            photo: user.photo,
            date: new Date(),
            ...car
        }
        const url = 'https://car-garden.herokuapp.com/bookThisCar'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => console.log('Car Booking Placed'))
            .catch(err => console.log(err))

        alert('Succesfully Booked This Car')
        history.push('/')
    }

    return (
        <>
            <Navbar />
            <section className="container">
                <div className="m-5 p-5 bg-secondary text-white rounded-3">
                    <div className="row">
                        <div className="col-md-5 border-end border-info">
                            <img src={image} className="w-100 rounded-3" alt="image" />
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <h3>{name}</h3>
                                <p>Starts at <b>{price}$</b> per day</p>
                                <small>Car Type: <b>{type}</b></small> <br />
                                <small>Geer Type: <b>{geer}</b></small> <br />
                                <small>Fuel Type: <b>{fuel}</b></small> <br />
                                <small>Capacity: <b>{passengers}</b> passengers</small>
                            </div>
                            <button onClick={handleBooking} className="btn btn-light float-end">Get a Ride</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RideDetails
