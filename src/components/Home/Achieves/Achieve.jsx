import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import classes from './achieve.module.css'

const Achieve = () => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

    return (
        <section className={classes.achieveBg}>
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div>
                                <div onMouseOver={() => toggle(!state)}>
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                                })
                                                .interpolate(x => `scale(${x})`)
                                        }}>
                                        <i className="far fa-smile pb-3"></i>
                                    </animated.div>
                                </div>
                            </div>
                            <h2 className="section__header__primary">5657</h2>
                            <small className="text-secondary">HAPPY CUSTOMERS</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div>
                                <div onMouseOver={() => toggle(!state)}>
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                                })
                                                .interpolate(x => `scale(${x})`)
                                        }}>
                                        <i className="fas fa-car pb-3"></i>
                                    </animated.div>
                                </div>
                            </div>
                            <h2 className="section__header__primary">657</h2>
                            <small className="text-secondary">TOTAL CAR COUNT</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div>
                                <div onMouseOver={() => toggle(!state)}>
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                                })
                                                .interpolate(x => `scale(${x})`)
                                        }}>
                                        <i className="fas fa-road pb-3"></i>
                                    </animated.div>
                                </div>
                            </div>
                            <h2 className="section__header__primary">1,255,657</h2>
                            <small className="text-secondary">TOTAL KM</small>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="py-md-5 py-3">
                            <div>
                                <div onMouseOver={() => toggle(!state)}>
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                                })
                                                .interpolate(x => `scale(${x})`)
                                        }}>
                                        <i className="fas fa-headset pb-3"></i>
                                    </animated.div>
                                </div></div>
                            <h2 className="section__header__primary">1255</h2>
                            <small className="text-secondary">CALL CENTER SOLUTIONS</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achieve
