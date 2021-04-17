import { members } from '../../../FakeData'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <section>
            <div className="container text-center">
                <h5 className="section__header__secondary">
                    Experts
                </h5>
                <h1 className="section__header__primary">
                    OUR MEMBERS
                </h1>
                <div className="row">
                    {
                        members.map(member => <TeamCard member={member} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
