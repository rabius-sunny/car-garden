import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseconfig from './firebase'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router'
import { UserContext } from '../../App'

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
        <div>
            <button onClick={handleSignIn} className="btn btn-secondary m-5 p-3">Sign in</button>
        </div>
    )
}

export default SignIn
