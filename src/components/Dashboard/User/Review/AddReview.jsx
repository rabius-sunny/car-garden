import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../../../../App"
import Sidebar from "../../../Shared/Sidebar/Sidebar"

const AddReview = () => {

    const history = useHistory()
    const [user, setUser] = useContext(UserContext)
    const [review, setReview] = useState({
        msg: '',
        company: ''
    })
    const handleChange = e => {
        let userReview = { ...review }
        userReview[e.target.name] = e.target.value
        setReview(userReview)
    }
    const handleSubmit = () => {
        const reviewData = {
            review,
            user
        }
        fetch('https://car-garden.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('Review Added'))
            .catch(err => console.log(err))
        alert('Review Added Successfully')
        history.push('/')
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Add a Review</h3>
                    <form className="bg-light p-5 w-75 text-center" onSubmit={handleSubmit}>
                        <textarea name="msg" className="w-75 mb-3 form-control m-auto" placeholder="Enter your Review" required onChange={handleChange} ></textarea>
                        <input type="text" name="company" required onChange={handleChange} placeholder="enter your company" className="form-control w-75 m-auto mb-3" />
                        <input className="btn btn-primary w-75" type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddReview
