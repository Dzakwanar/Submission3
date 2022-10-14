import '../component/movie-list.js';
import DataSource from '../data/data.js';
import '../component/search-bar.js';
import '../component/add-item.js';
import movie from '../data/movie.js';



const main = () => {
  const searchElement = document.querySelector('search-bar');
  const MovieListElement = document.querySelector('movie-list');
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    MovieListElement.movie = results;
  };

const fallbackResult = message => {
  MovieListElement.renderError(message);
};

searchElement.clickEvent = onButtonSearchClicked;
};
//===========================


 
 

const insertProduct = (product) => {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `${product.title}`,
      category: `${product.category}`,
      description: `${product.description}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataProducts.push(data);
      renderAllProduct(dataProducts);
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

const renderAllProduct = (products) => {
  const listProductElement = document.querySelector("#Movie-item");
  listProductElement.innerHTML = "";
  products.forEach((product) => {
    listProductElement.innerHTML += `
    <div class="club-info">
    <h2>${product.title}</h2>
    <h3>${product.category} </h3>
    <p>${product.description}</p>
    </div>
      `;
  });
};
//yg atas blm done

const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

document.addEventListener("DOMContentLoaded", () => {
  const inputProductId = document.querySelector("#inputProductId");
  const inputProductName = document.querySelector("#inputProductName");
  const inputProductDeskripsi = document.querySelector(
    "#inputProductDeskripsi"
  );
  const submitSave = document.querySelector("#SubmitSave");

  submitSave.addEventListener("click", (e) => {
    e.preventDefault();
    const product = {
      title: inputProductId.value,
      category: inputProductName.value,
      description: inputProductDeskripsi.value,
    };

    insertProduct(product);
  });

  getProduct();
});
//=========================
export default main;