import classes from './team.module.css'

const TeamCard = ({ member }) => {
    const { name, photo, experience } = member

    return (
        <div className="col-md-4 col-sm-6">
            <div className={classes.teamCard}>
                <img src={photo} className="w-75" alt="driver"/>
                <h3>{name}</h3>
                <p className="text-secondary">{experience} years experience</p>
            </div>
        </div>
    )
}

export default TeamCard
