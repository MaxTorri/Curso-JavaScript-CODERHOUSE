const bicicletasContenedor = document.getElementById("bicicletas-contenedor");

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        window.bicicletas = data.bicicletas;
        mostrarBicicletas();
    })
    .catch(error => console.error(error));

function mostrarBicicletas() {
    const bicicletasContenedor = document.getElementById("bicicletas-contenedor");
    bicicletasContenedor.innerHTML = "";

    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    console.log(filtroPrecio);

    window.bicicletas.forEach(function (bicicleta) {
        if ((filtroModelo === "" || bicicleta.modelo === filtroModelo) && (filtroPrecio === 0 || bicicleta.precio <= filtroPrecio)
        ) {
            const bicicletaDiv = document.createElement("div");
            bicicletaDiv.classList.add("bicicleta");
            const bicicletaImg = document.createElement("img");
            bicicletaImg.src = bicicleta.img;
            bicicletaImg.alt = bicicleta.modelo;
            bicicletaDiv.appendChild(bicicletaImg);

            const bicicletaNombre = document.createElement("h3");
            bicicletaNombre.innerHTML = bicicleta.nombre;
            bicicletaDiv.appendChild(bicicletaNombre);

            const bicicletaModel = document.createElement("p");
            bicicletaModel.innerHTML = bicicleta.modelo;
            bicicletaDiv.appendChild(bicicletaModel);

            const bicicletaPrice = document.createElement("p");
            bicicletaPrice.innerHTML = "$"+bicicleta.precio;            
            bicicletaDiv.appendChild(bicicletaPrice);

            bicicletasContenedor.appendChild(bicicletaDiv);
        }
    });
}

document.getElementById("filtro-modelo").addEventListener("change", mostrarBicicletas);
document.getElementById("filtro-precio").addEventListener("change", mostrarBicicletas);