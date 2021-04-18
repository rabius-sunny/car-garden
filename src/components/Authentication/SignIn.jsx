import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseconfig from './firebase'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router'
import { UserContext } from '../../App'
import classes from './auth.module.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseconfig)
}

const SignIn = () => {

    const [user, setUser] = useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider()
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '/' } }
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(token => sessionStorage.setItem('token', token))
            .catch(err => console.log(err))
    }
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                setUser({
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                })
                setUserToken()
                history.replace(from)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <section style={{ background: 'lightblue', height: '100vh' }}>
            <div className="container py-md-5">
                <nav className="text-center mb-5">
                    <Link to="/"><img src={logo} alt="logo" className="w-25" /></Link> <br /> <hr />
                </nav>
                <div className={classes.form}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="******" />
                    </div>
                    <div className="text-end mb-4">
                        <button onClick={handleSignIn} className="btn btn-primary">Sign in</button>
                    </div>
                    <div className="text-center">
                        <p>__________ Or __________</p>
                        <p><button onClick={handleSignIn} className="btn text-primary">continue with Google</button></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
