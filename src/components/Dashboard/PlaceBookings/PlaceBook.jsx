import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar"
import ProcessPayment from "../Payment/ProcessPayment";

const PlaceBook = () => {

    const [user, setUser] = useContext(UserContext)
    const carId = sessionStorage.getItem('id')
    const [car, setCar] = useState([])
    const [id, setId] = useState('')
    const processOrder = paymentId => {
        setId(paymentId)
    }

    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/cars/' + carId)
            .then(res => res.json())
            .then(data => setCar(data[0]))
            .catch(err => console.log(err))
    }, [carId])

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Place Bookings</h3>
                    <div className="p-4 bg-light">
                        <input placeholder="enter your name" defaultValue={user.name} className="form-control" type="text" /> <br />
                        <input placeholder="enter email address" defaultValue={user.email} className="form-control" type="text" /> <br />
                        <p>Pay for : <small>{car.name}</small></p>
                        <p>Amount : <small>{car.price}</small></p>
                        <ProcessPayment handlePayment={processOrder} id={id} car={car} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceBook
