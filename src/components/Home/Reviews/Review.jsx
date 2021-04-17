import { reviews } from '../../../FakeData'
import classes from './review.module.css'
import ReviewCard from './ReviewCard'

const Review = () => {
    return (
        <section>
            <div className="container">
                <h1 className="section__header__primary text-center">
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
