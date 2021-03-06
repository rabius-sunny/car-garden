import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { AdminContext } from "../../../../App"
import Sidebar from "../../../Shared/Sidebar/Sidebar"
import Spinner from "../../../Shared/Spinner"

const Manage = () => {

    const history = useHistory()
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    const handleDelete = id => {
        fetch(`https://car-garden.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => console.log('Car Deleted Successfully'))
            .catch(err => console.log(err))

        alert('Car deleted successfully')
        history.push('/')

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar isAdmin={isAdmin} />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Manage Rides</h3>
                    <div className="p-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cars.length === 0 && <Spinner />
                                }
                                {
                                    cars.map(car => <tr>
                                        <td>{car.name}</td>
                                        <td>{car.price}</td>
                                        <td>{car.type}</td>
                                        <td><button className="btn btn-warning mx-2">edit</button><button onClick={() => handleDelete(car._id)} className="btn btn-danger">delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage
