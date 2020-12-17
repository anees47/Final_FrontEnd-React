import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import User from "./components/layouts/User";
import View from "./components/layouts/View";
import Success from "./components/layouts/Success";
import Fail from "./components/layouts/Fail";



import CreateProduct from "./components/Admin/CreateProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import DeleteProduct from "./components/Admin/DeleteProduct";
import GetProductById from "./components/Admin/GetProductById";
import DisplayProducts from "./components/Admin/DisplayProducts";

import CreateStock from "./components/Admin/CreateStock";
import UpdateStock from "./components/Admin/UpdateStock";
import DeleteStock from "./components/Admin/DeleteStock";
import GetStockById from "./components/Admin/GetStockById";
import DisplayStock from "./components/Admin/DisplayStock";

import CreatePrice from "./components/Admin/CreatePrice";
import UpdatePrice from "./components/Admin/UpdatePrice";
import DeletePrice from "./components/Admin/DeletePrice";
import GetPriceById from "./components/Admin/GetPriceById";
import DisplayPrice from "./components/Admin/DisplayPrice";

import CreateReview from "./components/Admin/CreateReview";
import UpdateReview from "./components/Admin/UpdateReview";
import DeleteReview from "./components/Admin/DeleteReview";
import GetReviewById from "./components/Admin/GetReviewById";
import DisplayReview from "./components/Admin/DisplayReview";




import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header></Header>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/fail" component={Fail}></Route>

          <Route exact path="/user" component={User}></Route>
          <Route exact path="/views" component={View}></Route>
          <Route exact path="/product/create" component={CreateProduct}></Route>
          <Route exact path="/product/update" component={UpdateProduct}></Route>
          <Route exact path="/product/delete" component={DeleteProduct}></Route>
          <Route exact path="/product/getProductById" component={GetProductById}></Route>
          <Route exact path="/product/display" component={DisplayProducts}></Route>
          

          <Route exact path="/stock/create" component={CreateStock}></Route>
          <Route exact path="/stock/update" component={UpdateStock}></Route>
          <Route exact path="/stock/delete" component={DeleteStock}></Route>
          <Route exact path="/stock/getStockById" component={GetStockById}></Route>
          <Route exact path="/stock/display" component={DisplayStock}></Route>

          <Route exact path="/price/create" component={CreatePrice}></Route>
          <Route exact path="/price/update" component={UpdatePrice}></Route>
          <Route exact path="/price/delete" component={DeletePrice}></Route>
          <Route exact path="/price/getPriceById" component={GetPriceById}></Route>
          <Route exact path="/price/display" component={DisplayPrice}></Route>

          <Route exact path="/review/create" component={CreateReview}></Route>
          <Route exact path="/review/update" component={UpdateReview}></Route>
          <Route exact path="/review/delete" component={DeleteReview}></Route>
          <Route exact path="/review/getReviewById" component={GetReviewById}></Route>
          <Route exact path="/review/display" component={DisplayReview}></Route>


          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
