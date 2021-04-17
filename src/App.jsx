import { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from './components/Authentication/PrivateRoute'
import SignIn from './components/Authentication/SignIn'
import AddService from './components/Dashboard/AddService/AddService'
import Dashboard from './components/Dashboard/Main/Dashboard'
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin'
import Manage from './components/Dashboard/ManageService/Manage'
import Main from './components/Home/Main/Main'
import RideDetails from './components/RideDetails/RideDetails'

export const UserContext = createContext()

const App = () => {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    picture: ''
  })
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <PrivateRoute path="/car/:id">
              <RideDetails />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <Manage />
            </PrivateRoute>
            <PrivateRoute path="/make-admin">
              <MakeAdmin />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
