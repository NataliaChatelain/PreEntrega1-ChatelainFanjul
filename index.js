let ingreso = false
function verifyAge() {
    let age = Number(prompt("Ingrese su edad:"))
    if (age >= 18) {
        alert("Puede ingresar")
        let ingreso = true
        suscribe()
        showSales()
        wineLower1600()
        findGrape()
    } else {
        alert("Prohibido el ingreso a menores de 18 años")
    }

}

function suscribe() {
    let mail = prompt("Le gustaría recibir un 15% de descuento en su 1era compra? Ingrese su mail")
    if (mail) {
        alert("Ingrese el código WINE15% en el checkout")
    } else {
        alert("Siga disfruntando de nuestro sitio!")
    }
}

const wineSales = [
    {
        name: "Catena Zapata",
        grape: "Malbec",
        price: 1500,
        sale: false
    },
    {
        name: "Luigi Bosca",
        grape: "Malbec",
        price: 1700,
        sale: false
    },
    {
        name: "Rutini",
        grape: "Cabernet Sauvignon",
        price: 1700,
        sale: true
    },
    {
        name: "Catena Zapata",
        grape: "Syrah",
        price: 1500,
        sale: false
    },
    {
        name: "Luigi Bosca",
        grape: "Merlot",
        price: 1700,
        sale: true
    },
    {
        name: "Rutini",
        grape: "Cabernet Franc",
        price: 1700,
        sale: true
    }]

// wineSales.forEach ( wine => console.log (wine.name) );
const showSales = () => {
    let option = Number(prompt("Si desea ver nuestras ofertas, ingrese 1, si desea seguir navegando 2"))
    if (option === 1) {
        for (let index = 0; index < wineSales.length; index++) {
            const showWine = alert(`El vino ${wineSales[index].name}, cepa ${wineSales[index].grape}, cuesta $ ${wineSales[index].price}`);
        }
    }
}

// const showSales = () => {
//     let option = Number(prompt("Si desea ver nuestras ofertas, ingrese 1, si desea seguir navegando 2"))
//     if (option === 1) {
//         for (let index = 0; index < wineSales.length; index++) {
//             if (wineSales[index].sale === true){
//                 let showWine = showWine.push(wineSales[index].name)
//                 console.log(showWine);
//                 alert(showWine);
//             }
//         }
//     }
// }

// const showSales = () => {
//     let option = Number(prompt("Si desea ver nuestras ofertas, ingrese 1, si desea seguir navegando 2"))
//     if (option === 1) {
//         const showWine = wineSales.map((wine) => {
//             if (wine.sale === true) {
//                 return ("El vino " + wine.name + " " + "cepa " + wine.grape + ", cuesta" + (wine.price - 300))
//             }
//         })
//         alert(showWine);
//     }
// }



const wineLower1600 = () => {
    let option = Number(prompt("Si desea ver nuestras vinos más baratos ingrese 1"))
    if (option === 1) {
        let cheapWines = wineSales.filter(wine => wine.price < 1600);
        let showCheapWines = cheapWines.map(wine => (`El vino ${wine.name} cepa ${wine.grape} cuesta ${wine.price}`))
        alert(showCheapWines);
    }
}

const findGrape = () => {
        let option = (prompt("Desea buscar un vino por cepa? Elija entre: Syrah, Merlot, Cabernet Sauvignon, Cabernet Franc "))
        if (option === "Syrah") {
        let foundedGrape = wineSales.find(wine => wine.grape === "Syrah")
        alert (foundedGrape)
        }
}

console.log(wineSales)

verifyAge()

