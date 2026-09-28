
// Botones de las ventanas modales

document.getElementById("btnAvisoInscripcion").onclick = function() {
    MiniUI.mostrarModal({
        titulo: "Aviso de inscripción",
        mensaje: "Las inscripciones estarán disponibles del 10 al 15 de julio.",
        textoBoton: "Entendido"
    });
};

document.getElementById("btnRequisitos").onclick = function() {
    MiniUI.mostrarModal({
        titulo: "Requisitos del trámite",
        mensaje: "Necesitas tu número de control, correo institucional y credencial vigente."
    });
};


// Botones de las notificaciones

document.getElementById("btnSolicitudEnviada").onclick = function() {
    MiniUI.mostrarToast({
        titulo: "Solicitud enviada",
        mensaje: "Tu solicitud fue registrada correctamente.",
        tipo: "exito"
    });
};

document.getElementById("btnErrorDocumentos").onclick = function() {
    MiniUI.mostrarToast({
        titulo: "Documentos incompletos",
        mensaje: "Falta adjuntar una identificación válida.",
        tipo: "error"
    });
};

document.getElementById("btnPendiente").onclick = function() {
    MiniUI.mostrarToast({
        titulo: "Revisión pendiente",
        mensaje: "Tu trámite aún está en revisión.",
        tipo: "advertencia"
    });
};

document.getElementById("btnInfoHorario").onclick = function() {
    MiniUI.mostrarToast({
        titulo: "Horario de atención",
        mensaje: "Atención de lunes a viernes de 9:00 a 14:00 horas.",
        tipo: "info"
    });
};
