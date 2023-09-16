# Pokedex
Proyecto desarrollador por Agustín Rodríguez para el puesto de Frontend Developer (Vue.js) en Global66

## Descripción del proyecto
Proyecto que muestra un listado de pokemons con el detalle de cada uno de estos, permitiendo guardar como favoritos los pokemones que más te gustan. 

En este proyecto tuve la oportunidad de poder demostrar mis habilidades de diseño, cumpliendo con el diseño estipulado en Figma.

## Construcción del proyecto
En este proyecto fue creado con Vue 3 - Vite. Lo primero que hice fue plantear las rutas, componentes, definición de librerías y frameworks para acelerar la construcción del mismo. A medida que iba programando me iba encontrando con distintas dificultades como aprender a utilizar la librería de vue-persistancestate, y algunas cuestiones de diseño para poder acercarme lo mas posible al diseño de figma. Para solucionar estos problemas fue centrarme en dividir estos en partes pequeñas, permitiendome tener una visión mas centrada de estos y así poder solucionar el problema padre.

Lo que más me gusto del proyecto fue la implementación de un modal que muestre los detalles del pokemon, además, me encanto tener el desafío de copiar el diseño del Figma y dar mi mayor esfuerzo.

## Librerías y Frameworks
Voy a dar un pequeño detalle de las tecnologías que utilicé para el proyecto.

- [AOS (Animate On Scroll)] --> Ayuda a crear transiciones para el scroll. Use esta librería ya que la he usado muchas veces y me parece muy personalizable. Contiene lindas transiciones para darle mas vida a la página.
- [SweetAlert2] --> Permite crear modales y toasters iteractivos con mucha facilidad. Gracias a esta librería pude construir el modal y los toasters que muestran un mensaje cuando se realiza una acción como dar a favoritos, quitar el favorito, copiar en portapapeles, entre otros. El modal que muestra los detalles del pokemon fue creada con sweetalert.
- [Vuex] --> Ayuda al almacenamiento de la información en el state propio, además de crear métodos propios para la manipulación específica de estos estados globales. Esta librería facilitó muchisimo la construcción del proyecto ya que pude acceder a los estados globales y su métodos desde cualquier lugar del proyecto.
- [Vuex-persistancestate] --> Es una librería que me permitió almacenar en el localStorage los estados globales como los pokemones y los favoritos. Decidí usar esta librería ya que me facilitaba la tarea de guardarlos en el localStorage para que tambien al refrescar la página, pueda llamar a los datos almacenados en el cliente y no a la API, esto me permitió optimizar los recursos del sistema llamando un array existente y no al API constantemente.
- [Vue-router] --> Ayuda a crear las rutas para el desplazamiento entre vistas. Fue la primera dependencia que se instaló ya que sin ella no se podía crear las vistas pedidas en los requirements.
- [TailwindCSS] --> Framework de CSS para crear interfaces más rápido, gracias a esto logré crear una página como la estipulada en el Figma. Me permitió además hacer responsive la web. Todo el proyecto esta construída sobre esta base.

## Mejoras
Una de las mejoras que haría es centralizarme en componentizar aún mas el proyecto para ahorrar cantidad de código como en el caso del modal. Por temas de tiempos no pude hacerlo como me hubiera gustado pero logré hacer lo suficiente para que quedé lo más escalable posible. Otro aspecto que mejoraría sería el crear funciones reutilizables en el store de vuex.

### Proyecto en Línea
https://global66-pokedex-rodriguez-je5r94g68-repolloso.vercel.app/

Muchas gracias por darme esta oportunidad, espero poder haber cumplido con las expectativas para poder formar parte de esta gran compañía.

## Project Setup

* Tengo instalado Nodejs v18.16.0 y npm v9.5.1

```sh
git clone https://github.com/agustin-1998/Global66-Pokedex-Rodriguez.git
```

```sh
cd Global66-Pokedex-Rodriguez
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
