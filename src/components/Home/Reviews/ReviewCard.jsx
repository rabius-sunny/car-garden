import classes from "./review.module.css"

const ReviewCard = ({ review }) => {
    const { msg, company } = review.review
    const { name, photo } = review.user

    return (
        <div className="col-md-4 col-sm-6">
            <div className={classes.reviewCard}>
                <p>{msg}</p>
                <div className="text-center"><img src={photo} alt="person" /></div>
                <h6 className="text-light text-center">{name}, <small>{company}</small></h6>
            </div>
        </div>
    )
}

export default ReviewCard
