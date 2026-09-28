
const MiniUI = {

    // Muestra una ventana con el título y mensaje que queramos
    mostrarModal: function(datos) {

        let anterior = document.getElementById("miniui-modal");
        if (anterior) anterior.remove();

        let modal = document.createElement("div");
        modal.id = "miniui-modal";
        modal.className = "miniui-modal-fondo";

        modal.innerHTML = `
            <div class="miniui-modal-caja">
                <h2></h2>
                <p></p>
                <button class="miniui-btn-cerrar"></button>
            </div>
        `;

        modal.querySelector("h2").textContent = datos.titulo;
        modal.querySelector("p").textContent = datos.mensaje;
        modal.querySelector("button").textContent =
            datos.textoBoton || "Cerrar";

        // Cerrar con el botón
        modal.querySelector("button").onclick = function() {
            modal.remove();
        };

        // Cerrar al hacer clic fuera de la ventana
        modal.onclick = function(evento) {
            if (evento.target === modal) {
                modal.remove();
            }
        };

        document.body.appendChild(modal);
    },

    // Muestra una notificación que desaparece sola
    mostrarToast: function(datos) {

        let contenedor =
            document.getElementById("miniui-toast-contenedor");

        if (!contenedor) {
            contenedor = document.createElement("div");
            contenedor.id = "miniui-toast-contenedor";
            document.body.appendChild(contenedor);
        }

        let toast = document.createElement("div");
        toast.className = "miniui-toast " + (datos.tipo || "info");

        toast.innerHTML = `
            <button class="miniui-toast-cerrar">×</button>
            <strong></strong>
            <p></p>
        `;

        toast.querySelector("strong").textContent = datos.titulo;
        toast.querySelector("p").textContent = datos.mensaje;

        // Cerrar manualmente
        toast.querySelector("button").onclick = function() {
            toast.remove();
        };

        contenedor.appendChild(toast);

        // Cerrar automáticamente
        setTimeout(function() {
            toast.remove();
        }, datos.duracion || 3000);
    }
};
