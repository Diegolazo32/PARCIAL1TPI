var contadorC = 0;
var contadorP = 0;
var contadorZ = 0;

const tienda =  (() =>
{
    const productos = [];

    const carrito = [];

    const agregarProducto = (producto) =>
    {
        carrito.push(producto);

        console.log(carrito);
    }

    const RealizarPago = () =>
    {
        var total = 0;

        actualizarInventario()

        carrito.forEach(function(v,i,a)
        {
           total = carrito.reduce((prev,curr,i) => 
           {
                return prev.precio + curr.precio;
           })
        })

        return total;
    }

    const actualizarInventario = () =>
    {
        carrito.forEach(function(v,i,a)
        {
            productos.forEach(function(v,i,a)
            {
                if(carrito[i].id === productos[i].id)
                {

                    productos[i].stock -= carrito[i].unidad;
                }
            });
        });

        console.log(productos);
    }

    return {agregarProducto,RealizarPago}
    

})();

const Indumentaria = (id,nombre,precio,stock,unidad) =>
{

    return {id,nombre,precio,stock,unidad}
}

const Camisas = (id,nombre,precio,stock,unidad) =>
{
    let herencia = Indumentaria(id,nombre,precio,stock,unidad)
    return Object.assign({},herencia);
}

const Pantalones = (id,nombre,precio,stock,unidad) =>
{
    let herencia = Indumentaria(id,nombre,precio,stock,unidad)
    return Object.assign({},herencia);
}

const Zapatos = (id,nombre,precio,stock,unidad) =>
{
    let herencia = Indumentaria(id,nombre,precio,stock,unidad)
    return Object.assign({},herencia);
}

const camiseta =  Camisas(0,"Camiseta",30,2,1);
const jean =  Pantalones(1,"Jean",60,2,1);
const botas =  Zapatos(2,"Botas",90,2,1);

let pant = document.getElementById('addP');
let shirt = document.getElementById('addC');
let shoe = document.getElementById('addZ');
let pay = document.getElementById('pay');
let screen = document.getElementById('carro')

pant.addEventListener('click',function()
{
    
    console.log("pantalon")
    
    if(contadorP===2)
    {
        alert("No puede agregar mas patalones")
    }
    else
    {tienda.agregarProducto(jean);
        screen.innerHTML+=`${jean.nombre} -- ${jean.precio} -- ${contadorP+=1} <br>`
    }
    
    

})

shirt.addEventListener('click',function()
{

    console.log("camisa")
    
    if(contadorC === 2)
    {
        alert("No se pueden agregar mas camisas")
    }
    else
    {
        tienda.agregarProducto(camiseta);
        screen.innerHTML+=`${camiseta.nombre} -- ${camiseta.precio} -- ${contadorC+=1} <br>`
    }
    
})

shoe.addEventListener('click',function()
{

    console.log("zapato")
    
    if(contadorZ === 2)
    {
        alert("No se puede agregar mas zapatos")
    }
    else
    {
        tienda.agregarProducto(botas);
        screen.innerHTML+=`${botas.nombre} -- ${botas.precio} -- ${contadorZ+=1} <br>`
    }
    
})

pay.addEventListener('click',function()
{
    console.log("Tienda")
    let total = tienda.RealizarPago();

    screen.innerHTML+= `<br> Total:$ ${total}`

})