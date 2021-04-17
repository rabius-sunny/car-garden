import classes from "./review.module.css"

const ReviewCard = ({ review }) => {
    const { name, msg, photo } = review

    return (
        <div className="col-md-4 col-sm-6">
            <div className={classes.reviewCard}>
                <p>{msg}</p>
                <div className="text-center"><img src={photo} alt="person"/></div>
                <h6 className="text-secondary text-center">{name}</h6>
            </div>
        </div>
    )
}

export default ReviewCard
