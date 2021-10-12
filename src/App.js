import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MyProfile from "./Components/MyProfile";
import MyFooter from "./Components/MyFooter";
import UserProfile from "./Components/UserProfile"



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Route path="/me" exact component={MyProfile} />
          <Route path="/user/:id" exact component={UserProfile} />

        </div>
        <MyFooter/>
      </Router>
    </div>
  );
}

export default App;
