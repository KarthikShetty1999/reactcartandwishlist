
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./component/HomePage";
import UserSignUp from "./component/UserSignUp";
import UserLogin from "./component/UserLogin";
import ShowProduct from "./component/ShowProduct";
import {Provider} from 'react-redux';
import store from './redux/store';
import Location from './component/GetUserLocation';
function App() {
return (
  <>
      <Router>
        <Provider store={store}>
          <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/usersignup" element={<UserSignUp/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
          <Route path="/showproduct" element={<ShowProduct/>}/>
          <Route path="/location" element={<Location/>}/>
        </Routes>
        </Provider>
      </Router>
  </>
);}
export default App;
