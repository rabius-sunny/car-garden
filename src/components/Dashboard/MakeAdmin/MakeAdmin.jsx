import { useState } from "react"
import Sidebar from "../../Shared/Sidebar/Sidebar"

const MakeAdmin = () => {

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
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <div className="m-5">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleInput} placeholder="enter name" /><br />
                            <input type="submit" value="Make Admin" className="btn btn-secondary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAdmin
