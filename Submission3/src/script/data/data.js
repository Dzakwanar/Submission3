
class DataSource {
  static searchClub(keyword) {
      return fetch(`https://dummyjson.com/products/search?q=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.products) {
          return Promise.resolve(responseJson.products);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
    }
}
export default DataSource;