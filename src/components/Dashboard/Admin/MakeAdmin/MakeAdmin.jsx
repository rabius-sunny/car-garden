import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { AdminContext } from "../../../../App"
import Sidebar from "../../../Shared/Sidebar/Sidebar"

const MakeAdmin = () => {

    const history = useHistory()
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const [admin, setAdmin] = useState('')
    const handleInput = e => {
        setAdmin(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        fetch('https://car-garden.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => console.log('Marked as Admin'))
            .catch(err => console.log(err))

        alert('Admin Added Successfully')
        history.push('/')
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar isAdmin={isAdmin} />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Add Ride</h3>
                    <div className="m-4">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control w-75" onChange={handleInput} placeholder="enter email" /><br />
                            <input type="submit" value="Make Admin" className="btn btn-secondary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAdmin
