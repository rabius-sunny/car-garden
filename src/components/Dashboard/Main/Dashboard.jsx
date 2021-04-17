import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../App"
import Sidebar from "../../Shared/Sidebar/Sidebar"

const Dashboard = () => {

    const [user, setUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => {
                data.map(obj => {
                    if (obj.email === user.email) {
                        setIsAdmin(true)
                    }
                })
            })
            .catch(err => console.log(err))
    }, [user.email])
    useEffect(() => {
        fetch(`https://car-garden.herokuapp.com/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])



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
                                    <th>User Name</th>
                                    <th>User Email</th>
                                    <th>Car Name</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    bookings.map(booking => {
                                        let date = booking.date
                                        let shortDate = new Date(date).toDateString()
                                        let result = <tr>
                                            <td>{booking.userName}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.type}</td>
                                            <td>{shortDate}</td>
                                            <td><button className="btn btn-success">done</button><button className="btn btn-warning">pending</button></td>
                                        </tr>
                                        return result
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
