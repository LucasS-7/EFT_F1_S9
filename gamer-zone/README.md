# Gamer Zone

Tienda online de videojuegos hecha para la **Evaluación Final Transversal (EFT)** de Desarrollo Frontend I (PFY2201).

El sitio muestra un catálogo de videojuegos reales y permite:

- Ver los juegos en tarjetas (imagen, nombre, precio y descripción).
- Filtrarlos por categoría.
- Agregar y eliminar juegos de la lista.
- Escribirle al administrador con un formulario de contacto que valida los datos.

> La tienda es ficticia y los precios son inventados, solo sirven de referencia para el ejercicio. No se vende nada de verdad.

**Autor:** _(escribe aquí tu nombre)_

---

## Tecnologías usadas

- HTML5 con etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS3 (Flexbox y CSS Grid)
- JavaScript
- Bootstrap 5.3 (navbar, cards, formularios, alertas, botones)
- React 18 (con Vite)

---

## Cómo ejecutarlo paso a paso

### Antes de empezar

Necesitas tener instalado **Node.js versión 18 o más nueva**. Para revisar si lo tienes, abre una terminal y escribe:

```bash
node -v
```

Si te muestra un número (por ejemplo `v20.11.0`), estás listo. Si no, descárgalo desde https://nodejs.org (la versión LTS).

### Pasos

1. Descarga o clona el proyecto y descomprímelo si viene en `.zip`.
2. Abre una terminal **dentro de la carpeta del proyecto** (la que tiene el archivo `package.json`).
3. Instala las dependencias (solo se hace la primera vez, tarda un poco):

   ```bash
   npm install
   ```

4. Inicia el proyecto:

   ```bash
   npm run dev
   ```

5. La terminal va a mostrar una dirección, normalmente `http://localhost:5173`. Ábrela en el navegador.
6. Para detener el proyecto, vuelve a la terminal y presiona `Ctrl + C`.

### Si algo no funciona

- **"npm no se reconoce como comando":** Node.js no está instalado, o hay que cerrar y volver a abrir la terminal después de instalarlo.
- **La página sale en blanco o con un error:** revisa que estés dentro de la carpeta correcta y que hayas corrido `npm install`.
- **Las portadas no aparecen:** mira la sección de imágenes (más abajo).

---

## Imágenes de los juegos

Las portadas van dentro de la carpeta `public/img/` y tienen que llamarse **exactamente** así:

| Juego | Nombre del archivo |
| --- | --- |
| The Legend of Zelda: Breath of the Wild | `zelda-botw.jpg` |
| The Witcher 3: Wild Hunt | `witcher3.jpg` |
| God of War (2018) | `god-of-war.jpg` |
| DOOM Eternal | `doom-eternal.jpg` |
| Mario Kart 8 Deluxe | `mario-kart-8.jpg` |
| Forza Horizon 5 | `forza-horizon-5.jpg` |
| Sid Meier's Civilization VI | `civilization-vi.jpg` |
| Age of Empires II: Definitive Edition | `age-of-empires-2.jpg` |
| Hollow Knight | `hollow-knight.jpg` |
| Stardew Valley | `stardew-valley.jpg` |

Recomendaciones:

- Mejor imágenes **horizontales**, de unos 600 x 340 px, y que pesen menos de 300 KB.
- Si una imagen no existe (o el nombre está mal escrito), la tarjeta muestra una imagen que dice "SIN IMAGEN" para que el sitio no se vea roto.
- Si quieres usar otro formato (por ejemplo `.png`), cambia el nombre del archivo también en `public/juegos.json`.

---

## Cómo usar el sitio

1. **Navegar:** la barra de arriba tiene los enlaces Inicio, Catálogo y Contacto. En el celular se abre con el botón de las tres rayitas.
2. **Filtrar:** en el catálogo hay un botón por cada categoría (Aventura, Acción, Carreras, Estrategia, Indie). El botón "Todos" quita el filtro.
3. **Agregar un juego:** el formulario **Agregar videojuego** está arriba de las tarjetas. Hay que llenar nombre, categoría, precio y descripción (la imagen es opcional). Si algo falta o está mal, muestra un mensaje de error. El juego nuevo aparece al principio de la lista.
4. **Eliminar un juego:** cada tarjeta tiene un botón **Eliminar** (pide confirmación antes de borrar).
5. **Contacto:** llena nombre, correo y mensaje. Si falta algo o el correo no es válido, aparecen los errores en rojo. Si todo está bien, sale un mensaje de éxito.

---

## Estructura del proyecto

```text
gamer-zone/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── capturas/                  (aquí se guardan las capturas de pantalla)
├── public/
│   ├── juegos.json            (los videojuegos, arreglo de objetos)
│   └── img/                   (portadas de los juegos y sin-imagen.svg)
└── src/
    ├── main.jsx               (punto de entrada de React)
    ├── App.jsx                (estado principal y armado de la página)
    ├── index.css              (estilos propios)
    ├── data/
    │   └── categorias.js      (lista de categorías)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Filtros.jsx
        ├── ListaJuegos.jsx
        ├── TarjetaJuego.jsx
        ├── FormularioJuego.jsx
        ├── FormularioContacto.jsx
        └── Footer.jsx
```

---

## Dónde está cada requisito de la pauta

| Requisito | Dónde está |
| --- | --- |
| Etiquetas semánticas de HTML | `App.jsx` y componentes (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| Bootstrap 5 (navbar y tarjetas) | `Navbar.jsx` y `TarjetaJuego.jsx` (también formularios y alertas) |
| CSS propio | `src/index.css` |
| Flexbox / CSS Grid | Grid en `.grilla-juegos` (catálogo), Flexbox en `.pie-contenido` (footer) y en los filtros |
| Objeto con la información de los juegos | `public/juegos.json` (nombre, categoría, precio, descripción, imagen) |
| Tarjetas generadas dinámicamente | `ListaJuegos.jsx` (recorre la lista con `map`) |
| Filtrado por categoría | `Filtros.jsx` + `App.jsx` (estado `categoriaActiva`) |
| Validación del formulario de contacto | `FormularioContacto.jsx` |
| Componentes React | carpeta `src/components/` |
| Estado (state) para agregar y eliminar juegos | `App.jsx` (`useState`, `agregarJuego`, `eliminarJuego`) |
| Carga de datos desde un archivo | `App.jsx` (`useEffect` + `fetch("juegos.json")`) |
| Props entre componentes | por ejemplo `App.jsx` le pasa `juegos` a `ListaJuegos.jsx` y este a `TarjetaJuego.jsx` |
| Diseño responsivo | clases de Bootstrap (navbar, columnas del formulario) y el Grid del catálogo |

---

## Capturas de pantalla

Guárdalas en la carpeta `capturas/`. Estas son las que conviene sacar:

1. **Inicio:** la parte de arriba de la página con la barra de navegación y el título (en pantalla de computador).
2. **Catálogo completo:** las tarjetas con imagen, nombre, precio y descripción.
3. **Filtro por categoría:** el catálogo con una categoría elegida (por ejemplo Carreras).
4. **Vista de celular:** la página en tamaño móvil con el menú abierto (en el navegador: `F12` y luego el botón de dispositivo móvil, o `Ctrl + Shift + M`).
5. **Agregar un juego:** el formulario "Agregar videojuego" con un juego nuevo ya agregado a la lista.
6. **Formulario de agregar con errores:** al apretar el botón con los campos vacíos.
7. **Eliminar un juego:** el mensaje de confirmación, o el catálogo después de eliminar.
8. **Contacto con errores:** el formulario de contacto con los mensajes en rojo.
9. **Contacto enviado:** el formulario con el mensaje de éxito.
10. **Carga desde archivo (opcional):** `F12` → pestaña Network (Red) → filtro Fetch/XHR → recargar la página → clic en `juegos.json` → pestaña Response (Respuesta).

Cuando las tengas, puedes mostrarlas aquí con:

```markdown
![Catálogo](capturas/catalogo.png)
```

---

## Publicar en GitHub (y GitHub Pages, opcional)

1. Crea un repositorio **público** en GitHub (sin README, porque ya tenemos uno).
2. En la terminal, dentro de la carpeta del proyecto:

   ```bash
   git init
   git add .
   git commit -m "EFT Frontend I - Gamer Zone"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```

   La carpeta `node_modules` no se sube porque está en el archivo `.gitignore`. Quien clone el proyecto la vuelve a generar con `npm install`.

3. Para dejar el sitio publicado en internet:

   ```bash
   npm run build
   npm run deploy
   ```

4. En GitHub entra a **Settings → Pages**, elige la rama `gh-pages` y guarda. Después de un par de minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

---

## Cosas a tener en cuenta

- El mensaje del formulario de contacto **no se envía a ningún lado** (no hay servidor), solo se simula el envío.
- Los juegos que se agregan o eliminan **no se guardan**: al recargar la página vuelve la lista original de `juegos.json`.
- Los nombres y portadas de los videojuegos pertenecen a sus dueños y se usan solo con fines educativos.
