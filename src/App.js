import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MyProfile from "./Components/MyProfile";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />

      <Route path="/profile/:id" exact component={MyProfile} />

      <MyFooter />
    </Router>
    </div>
  );
}

export default App;
