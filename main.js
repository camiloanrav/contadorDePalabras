function getFullName(item) {
    var fullname = "Código: " + item.codigo + " - Cantidad: " + item.cantidad;
    return fullname;
}

function mostrarValor(){
    var input = document.getElementById("input");
    var resultado = document.getElementById("resultado");

    console.log(document.getElementById("inlineRadio1").checked);

    if(document.getElementById("inlineRadio1").checked){
        var codigos = input.value.split(/\n/);
    }else{
        var codigos = input.value.split(" ");
    }
    
    codigos.sort();

    if(codigos[0] === ""){
        codigos.shift();
    }

    var codigosNumerados = [];
    let codigoAnterior = null;

    for(let i = 0; i < codigos.length; i ++){
        if(codigoAnterior != codigos[i]){
            let aux = codigos.filter((value)=>{
                return value == codigos[i];
            });
            codigosNumerados.push({'codigo':codigos[i], 'cantidad': aux.length});
        }
        codigoAnterior = codigos[i];
    }

    resultado.innerHTML = "";
    let color = "list-group-item-dark";

    for(let i = 0; i < codigosNumerados.length; i ++){
        resultado.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center  ${i%2===0?color:''}">
            ${codigosNumerados[i].codigo}
            <span class="badge badge-primary badge-pill">${codigosNumerados[i].cantidad}</span>
        </li>`;
    }
}
