import { useEffect, useState } from 'react'
import classes from './review.module.css'
import ReviewCard from './ReviewCard'

const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://car-garden.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="bg-primary text-light py-md-5 mb-0">
            <div className="container pb-5">
            <h5 className="section__header__secondary text-light text-center pt-5">
                    Reviews
                </h5>
                <h1 className="section__header__primary text-center pb-5" style={{color: '#fff'}}>
                    - WHAT CLIENTS SAY -
                </h1>
                <div className="row">
                    {
                        reviews.map(review => <ReviewCard review={review} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Review
