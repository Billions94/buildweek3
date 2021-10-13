import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MyProfile from "./Components/MyProfile";
import MyFooter from "./Components/MyFooter";
import Home from "./Components/MyFeed/Home";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Route path="/home" exact component={Home} />

      <Route path="/profile/:id" exact render={(props) => <MyProfile {...props} />} />

      <MyFooter />
    </Router>
    </div>
  );
}

export default App;
