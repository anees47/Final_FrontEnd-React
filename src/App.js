import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Usage from "./components/auth/Usage";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store/store";
const postlist = [
  { id: 1, content: "This world will be out of pandemic soon", user: "neha" },
  { id: 2, content: "Hello from Neha", user: "neharam" },
  { id: 3, content: "How r u", user: "neha" },
  { id: 4, content: "Im fine", user: "neharam" },
];
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header></Header>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/usage" component={Usage}></Route>
          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
