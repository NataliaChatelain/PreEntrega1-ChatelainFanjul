const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const verifyAge = document.getElementById("verifyAge");
const subscriptionForm = document.getElementById("subscriptionForm");
const wineSaleGallery = document.getElementById("wineSaleGallery");
const wineItems = document.getElementById("wineItems");

yesBtn.addEventListener("click", function () {
    verifyAge.style.display = "none";
    subscriptionForm.style.display = "flex";
    wineSaleGallery.style.display = "flex";

    // Render wine items
    const wineSales = [
        {
            name: "Catena Zapata",
            grape: "Malbec",
            price: 1500,
            sale: true,
            image: "https://www.mercadodevinos.com.ar/wp-content/uploads/2017/01/vino-catena-zapata-malbec-argentino.jpg"
        },
        {
            name: "Luigi Bosca",
            grape: "Malbec",
            price: 1700,
            sale: false,
            image: "https://cdn.shopify.com/s/files/1/0562/8008/8751/products/thumb_52790_default_big.jpg?v=1677182260"
        },
        {
            name: "Rutini",
            grape: "Cabernet Sauvignon",
            price: 1700,
            sale: false,
            image: "https://http2.mlstatic.com/D_NQ_NP_999120-MLA52268814829_112022-O.webp"
        },
        {
            name: "Catena Zapata",
            grape: "Syrah",
            price: 1500,
            sale: false,
            image: "https://tonelprivado.vteximg.com.br/arquivos/ids/175364-1000-1000/112248.jpg?v=636384134352170000"
        },
        {
            name: "Luigi Bosca",
            grape: "Merlot",
            price: 1700,
            sale: true,
            image: "https://www.romawinecj.com.ar/wp-content/uploads/2019/08/luigi_merlot.jpg"
        },
        {
            name: "Rutini",
            grape: "Cabernet Franc",
            price: 1700,
            sale: true,
            image: "https://rutini.vteximg.com.br/arquivos/ids/156306-1400-1600/Rutini-Cabernet-Franc.jpg?v=637765072225130000"
        }]


    for (let i = 0; i < wineSales.length; i++) {
        if (wineSales[i].sale === true) {
            const wineItem = document.createElement("div");
            wineItem.classList.add("wineItem");
            wineItem.innerHTML = `
            <img src="${wineSales[i].image}" alt="${wineSales[i].name}">
            <h3>${wineSales[i].name}</h3>
            <p>${wineSales[i].grape}</p>
            <p>$${wineSales[i].price}</p>
          `;
            wineItems.appendChild(wineItem);
        }
    }


    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        localStorage.setItem("subscriptionData", JSON.stringify({ name, email }));

        const subscriptionForm = document.getElementById("subscriptionForm");
        subscriptionForm.style.display = "none";

        const subscriptionOk = document.getElementById("subscriptionOk");
        subscriptionOk.innerHTML = `<h3>Thanks for subscribing, ${name}! Your next purchase login in with ${email} will have the 15% discount automatically applied.</h3>`;
        subscriptionOk.style.display = "block";
    });



});


noBtn.addEventListener("click", function () {
    verifyAge.style.display = "none";
});



// const wineLower1600 = () => {
//     let option = Number(prompt("Si desea ver nuestras vinos más baratos ingrese 1"))
//     if (option === 1) {
//         let cheapWines = wineSales.filter(wine => wine.price < 1600);
//         let showCheapWines = cheapWines.map(wine => (`El vino ${wine.name} cepa ${wine.grape} cuesta ${wine.price}`))
//         alert(showCheapWines);
//     }
// }

// const findGrape = () => {
//     let option = (prompt("Desea buscar un vino por cepa? Elija entre: Syrah, Merlot, Cabernet Sauvignon, Cabernet Franc, Malbec ")).toLowerCase()
//     if (option === "syrah") {
//         let foundedGrape = wineSales.find(wine => wine.grape === "Syrah")
//         alert(`Resultado de la búsqueda ${foundedGrape.grape} : ${foundedGrape.name} tiene un valor de $ ${foundedGrape.price}`)
//     } else if (option === "merlot") {
//         let foundedGrape = wineSales.find(wine => wine.grape === "Merlot")
//         alert(`Resultado de la búsqueda ${foundedGrape.grape} : ${foundedGrape.name} tiene un valor de $ ${foundedGrape.price}`)
//     } else if (option === "cabernet sauvignon") {
//         let foundedGrape = wineSales.find(wine => wine.grape === "Cabernet Sauvignon")
//         alert(`Resultado de la búsqueda ${foundedGrape.grape} : ${foundedGrape.name} tiene un valor de $ ${foundedGrape.price}`)
//     } else if (option === "cabernet franc") {
//         let foundedGrape = wineSales.find(wine => wine.grape === "Cabernet Franc")
//         alert(`Resultado de la búsqueda ${foundedGrape.grape} : ${foundedGrape.name} tiene un valor de $ ${foundedGrape.price}`)
//     } else if (option === "malbec") {
//         let foundedGrape = wineSales.find(wine => wine.grape === "Malbec")
//         alert(`Resultado de la búsqueda ${foundedGrape.grape} : ${foundedGrape.name} tiene un valor de $ ${foundedGrape.price}`)
//     } else {
//         alert("No existe el vino buscado")
//     }
// }
