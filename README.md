# Actividad 3 - Componente Visual con JavaScript

## Portada

**Nombre:** Uriel Eduardo Guzmán Ramírez  
**Materia:** Programación Web  
**Docente:** Adelina Martínez Nieto  
**Actividad:** Actividad 3 - Componente Visual con JS  
**Librería:** `miniui.js`  
**Componentes:** Modal reutilizable y notificaciones Toast  

## ¿Qué problema resuelve?

La librería `miniui.js` permite crear componentes visuales interactivos sin repetir código HTML.  
Sirve para mostrar avisos, mensajes importantes y notificaciones dentro de una página web de forma reutilizable.


## Componentes incluidos

- `MiniUI.mostrarModal()`: muestra una ventana emergente.
- `MiniUI.mostrarToast()`: muestra una notificación temporal en pantalla.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## Instalación

Para usar la librería en HTML, se enlaza el archivo CSS dentro del `<head>`:

```html
<link rel="stylesheet" href="css/styles.css">
```

## Uso del componente Modal

El modal se usa para mostrar avisos importantes en una ventana emergente.

```javascript
MiniUI.mostrarModal({
    titulo: "Aviso de inscripción",
    mensaje: "El periodo de inscripción estará disponible del 10 al 15 de julio.",
    textoBoton: "Entendido"
});
```


## Uso del componente Toast

El toast muestra una notificación rápida que desaparece automáticamente.

```javascript
MiniUI.mostrarToast({
    titulo: "Solicitud enviada",
    mensaje: "Tu solicitud fue registrada correctamente.",
    tipo: "exito",
    duracion: 3500
});
```

Tipos utilizados:

```javascript
tipo: "exito"
tipo: "error"
tipo: "advertencia"
tipo: "info"
```

Ejemplo de error:

```javascript
MiniUI.mostrarToast({
    titulo: "Documentos incompletos",
    mensaje: "Falta adjuntar una identificación válida.",
    tipo: "error",
    duracion: 3500
});
```

## Funcionamiento general

El proyecto simula un panel académico donde el usuario puede:

- Consultar avisos importantes.
- Ver requisitos de un trámite.
- Enviar una solicitud.
- Recibir notificaciones visuales.

Los componentes se generan desde `miniui.js`, por lo que pueden reutilizarse con diferentes textos y configuraciones.

## Capturas de pantalla

### Página principal

<img width="1030" height="575" alt="image" src="https://github.com/user-attachments/assets/2c9bfca7-d875-47e5-b83d-1c08483c8c88" />


### Modal funcionando

<img width="673" height="371" alt="image" src="https://github.com/user-attachments/assets/758dd43a-aad7-4a5b-aecd-50fee72d5644" />
<img width="583" height="412" alt="image" src="https://github.com/user-attachments/assets/115c03ef-df97-4cc0-a98d-3a9ec30d95b8" />


### Toast de éxito

<img width="404" height="210" alt="image" src="https://github.com/user-attachments/assets/3319149c-99a6-4535-845f-65c0342eaf5b" />


### Toast de error

<img width="290" height="132" alt="image" src="https://github.com/user-attachments/assets/b3e912f8-7c2e-4239-9f35-0020e720c4c3" />


### Toast de advertencia

<img width="296" height="142" alt="image" src="https://github.com/user-attachments/assets/5cbc031b-0382-410a-b5ba-098de5bac710" />



## Conclusión

Esta actividad permitió crear una librería JavaScript reutilizable con componentes visuales interactivos.  
El modal y las notificaciones toast reaccionan a acciones del usuario y pueden usarse con distintos mensajes sin reescribir su estructura.


## LINK DE VIDEO 
https://drive.google.com/drive/folders/1LIqNQclsEc5FNklxMe_tca6WSQenGlxE?usp=drive_link



