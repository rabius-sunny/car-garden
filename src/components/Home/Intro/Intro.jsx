import classes from './intro.module.css'
import introBg from '../../../intro.jpg'
const Intro = () => {
    return (
        <section className={classes.mySection} >
            <img src={introBg} alt="intro" className="w-100" />
            <div className={classes.centered} >
                <h1 className="section__header__primary">Welcome to Car Garden</h1>
            </div>
        </section >
    )
}

export default Intro
