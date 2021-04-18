import classes from './team.module.css'

const TeamCard = ({ member }) => {
    const { name, photo, experience } = member

    return (
        <div className="col-sm-6 col-md-4">
            <div className={`${classes.teamCard} mb-4`}>
                <img src={photo} className="w-100 rounded" alt="driver"/>
                <h3 className="pt-3">{name}</h3>
                <p className="text-secondary mb-0">{experience} years experience</p>
            </div>
        </div>
    )
}

export default TeamCard
