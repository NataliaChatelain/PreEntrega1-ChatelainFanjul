let ingreso = false
function verifyAge() {
    let age = Number(prompt("Ingrese su edad:"))
    if (age >= 18) {
        alert("Puede ingresar")
        let ingreso = true
        suscribe()
        showSales()
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
    "Catena Zapata Malbec $1500",
    "Luigi Bosca Malbec $1700", 
    "Rutini Cabernet Sauvignon $1700"]

const showSales = () => {
    let option = Number(prompt("Si desea ver nuestras ofertas, ingrese 1, si desea seguir navegando 2"))
    if (option === 1) {
        for (let index = 0; index < wineSales.length; index++) {
            const showWine = alert(wineSales[index]);
        }
    }
}


verifyAge()

