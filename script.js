function ocultarContenido(contenido, id, clase) {
        if (contenido != "") {
            document.getElementById(id).classList.add(clase);
        } else {
            document.getElementById(id).classList.remove(clase);
        }
}

function MostrarContenido(contenido, id, clase) {
        if (contenido != "") {
            document.getElementById(id).classList.remove(clase);
        } else {
            document.getElementById(id).classList.add(clase);
        }
}

function  validarCaracteresValidos(cadena){
    var x = cadena.value.split("");
    const caracteresMinisculas = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    var bandera;

        for (let i = 0; i < x.length; i++) {
            var bandera = false;

        for (let j = 0; j < caracteresMinisculas.length; j++) {
            if(x[i] === caracteresMinisculas[j]) {
                    bandera = true;
                }
        }
            if(bandera != true){
                i = x.length;
            }
        }

       return bandera;

}

function encriptar_mensaje() {
        var mensaje = document.getElementById("txtMensaje");
        var encriptado = document.getElementById("MensajeOculto");
        var x = [];

       if(validarCaracteresValidos(mensaje)){
             x = mensaje.value.split("");

                for (let i = 0; i < x.length; i++) {
                    if (x[i] === "a") {
                    x[i] = "ai";
                    } else if (x[i] === "e") {
                    x[i] = "enter";
                    } else if (x[i] === "i") {
                    x[i] = "imes";
                    } else if (x[i] === "o") {
                    x[i] = "ober";
                    } else if (x[i] === "u") {
                    x[i] = "ufat";
                    }
                }

                var frase = "";
            
                for (let i = 0; i < x.length; i++) {
                    frase += x[i];
                }
            
                encriptado.value = frase;
                console.log(frase);
            
               }
               else{
                encriptado.value = "Ingrese solo letras en minúscula"
               }

        ocultarContenido(mensaje.value, "imagen", "ocultar");
        ocultarContenido(mensaje.value, "texto", "ocultar");

        MostrarContenido(mensaje.value, "btnCopiar", "ocultar");
        MostrarContenido(mensaje.value, "btnCopiar", "ocultar");

        mensaje.value = "";
        
        
}

function desencriptar() {
        var mensaje = document.getElementById("txtMensaje");

        MostrarContenido(mensaje.value, "MensajeOculto", "ocultar");
        MostrarContenido(mensaje.value, "btnCopiar", "ocultar");

        ocultarContenido(mensaje.value, "imagen", "ocultar");
        ocultarContenido(mensaje.value, "texto", "ocultar");

        var mensajeEncriptado = mensaje.value;

        for (let i = 0; i < mensajeEncriptado.length; i++) {
            mensajeEncriptado = mensajeEncriptado.replace("ai", "a");
            mensajeEncriptado = mensajeEncriptado.replace("imes", "i");
            mensajeEncriptado = mensajeEncriptado.replace("enter", "e");
            mensajeEncriptado = mensajeEncriptado.replace("ober", "o");
            mensajeEncriptado = mensajeEncriptado.replace("ufat", "u");
        }

        document.getElementById("MensajeOculto").value = mensajeEncriptado;
}

function copiarTexto() {
        let textoCopiado = document.getElementById("MensajeOculto");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, textoCopiado.value.length);
        document.execCommand("copy");
}
