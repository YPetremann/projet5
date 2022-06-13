let headersList = {
  Accept: "*/*",
};

async function getvals() {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
}

function print1Item(product) {
  const { id, name, description, imageUrl, altTxt } = product;
  document.getElementById(
    "items"
  ).innerHTML += `<a href="./product.html?id=${id}">
      <article>
        <img src="${imageUrl}" alt="${altTxt}">
        <h3 class="productName">${name}</h3>
        <p class="productDescription">${description}</p>
      </article>
       </a>`;
}

async function main() {
  const products = await getvals();
  for (const product of products) {
    print1Item(product);
  }
}

main();
