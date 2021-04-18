import { members } from '../../../FakeData'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <section className="bg-light py-md-5 mb-0">
            <div className="container text-center pb-md-5">
                <h5 className="section__header__secondary pt-5">
                    Experts
                </h5>
                <h1 className="section__header__primary pb-5">
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
