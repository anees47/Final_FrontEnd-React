import axios from "axios";

class UserApi {
  getProducts() {
    return axios.get("http://localhost:2020/productcatalog/productlist");
  }
  getProductByid(id) {
    return axios.get("http://localhost:2020/productcatalog/"+ id);
  }

  getPriceByid(id) {
    return axios.get("http://localhost:9080/api/productId/" + id);
  }
  getStocksByid(id) {
    return axios.get("http://localhost:2021/stock/productId/" + id);
  }
  getReviewsByid(id) {
    return axios.get("http://localhost:9090/api/review/productId/" + id);
  }

  
}

export default new UserApi();
