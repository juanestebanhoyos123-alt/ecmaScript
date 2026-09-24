function calcular(){
   
    //Datos de cliente
    n = document.getElementById("n").value
    id = document.getElementById("id").value
    t = document.getElementById("t").value
     
    //Datos de producto
    producto = document.getElementById("producto").value
    valor_producto = parseInt(document.getElementById("valor_producto").value)
    cantidad_producto = parseInt(document.getElementById("cantidad_producto").value)
     
    //Calculos
    Subtotal = valor_producto * cantidad_producto
    iva = Subtotal * 0.19 // Aplicando un iva 
	Total = Subtotal + iva
    //Mostrar datos
    alert("====Factura==== \n" +
        "Nombre del cliente: " + n + "\n" +
        "Identificacion del cliente: " + id + "\n" +
        "Telefono del cliente: " + t + "\n" +
        "Producto: " + producto + "\n" + 
        "Valor del producto: " + valor_producto + "\n" + 
        "cantidad del producto: " + cantidad_producto + "\n" +
        "Iva: " + iva + "\n" +
        "Total a pagar: " + Total 
    ) 
}