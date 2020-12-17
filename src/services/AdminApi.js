import axios from "axios";

class AdminApi {
  getProducts() {
    return axios.get("http://localhost:9008/api/v1/product");
  }

  getPriceByid(id) {
    return axios.get("http://localhost:9080/api/price/" + id);
  }
  getStockByid(id) {
    return axios.get("http://localhost:2021/stock/productId/" + id);
  }
  getReviewByid(id) {
    return axios.get("http://localhost:9090/api/review/" + id);
  }

  createProduct(payload) {
    return axios.post("http://localhost:2020/productcatalog/create", payload);
  }

  GetUpdateProduct(id) {
    return axios.get("http://localhost:2020/productcatalog/" + id);
  }

  updateProduct(payload) {
    return axios.put("http://localhost:2020/productcatalog/update", payload);
  }

  deleteProduct(id) {
    return axios.delete("http://localhost:2020/productcatalog/" + id);
  }

  getProductById(id){
    return axios.get("http://localhost:2020/productcatalog/"+ id);
  }

  getProductByCategory(catName) {
    return axios.get("http://localhost:2020/productcatalog/" + catName);

  }


  createStock(payload) {
    return axios.post("http://localhost:2021/stock/create", payload);
  }
  updateStock(payload) {
    return axios.put("http://localhost:2021/stock/update", payload);
  }
  deleteStock(id) {
    return axios.delete("http://localhost:2021/stock/" + id);
  }




  createPrice(payload) {
    return axios.post("http://localhost:9080/api/price", payload);
  }
  updatePrice(id,payload) {
    return axios.put("http://localhost:9080/api/price/"+id, payload);
  }
  deletePrice(id) {
    return axios.delete("http://localhost:9080/api/" + id);
  }

  createReview(payload) {
    return axios.post("http://localhost:9090/api/review", payload);
  }
  updateReview(id,payload) {
    return axios.put("http://localhost:9090/api/review/"+id, payload);
  }
  deleteReview(id) {
    return axios.delete("http://localhost:9090/api/review/" + id);
  }




}

export default new AdminApi();
