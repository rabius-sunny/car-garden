import { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from './components/Authentication/PrivateRoute'
import SignIn from './components/Authentication/SignIn'
import AddService from './components/Dashboard/Admin/AddService/AddService'
import Dashboard from './components/Dashboard/Main/Dashboard'
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin'
import Manage from './components/Dashboard/Admin/ManageService/Manage'
import PlaceBook from './components/Dashboard/User/PlaceBookings/PlaceBook'
import AddReview from './components/Dashboard/User/Review/AddReview'
import Main from './components/Home/Main/Main'
import RideDetails from './components/RideDetails/RideDetails'

export const UserContext = createContext()
export const AdminContext = createContext()

const App = () => {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    picture: ''
  })
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
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
              <PrivateRoute path="/place-bookings">
                <PlaceBook />
              </PrivateRoute>
              <PrivateRoute path="/addReview">
                <AddReview />
              </PrivateRoute>
            </Switch>
          </Router>
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
