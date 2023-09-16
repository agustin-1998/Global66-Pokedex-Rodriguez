# Pokedex
Proyecto desarrollador por Agustín Rodríguez para el puesto de Frontend Developer (Vue.js) en Global66

En este proyecto de Vue 3, seleccioné cuidadosamente diversas librerías y dependencias para optimizar la experiencia del usuario y facilitar el desarrollo. A continuación, explico por qué utilizacé cada una de ellas:

### AOS (Animate On Scroll)
Decidí incorporar la librería AOS debido a la naturaleza de la página web. La animación de elementos al desplazarse en la página web contribuye significativamente a mejorar la experiencia del usuario (UX) y complementa el diseño de la interfaz del usuario (UI). AOS proporciona una forma eficiente de agregar animaciones a elementos clave de nuestra web.

### Sweetalert2
Sweetalert2 es una librería ampliamente reconocida que nos permite crear modales personalizables, toasters y otros elementos dinámicos de manera rápida y sencilla. Dada la limitación de tiempo en el desarrollo de este proyecto, Sweetalert2 se convirtió en la elección ideal para añadir dinamismo a la página web, sin comprometer la calidad ni la experiencia del usuario.

### Vuex
VueX es una librería de Vue que habilita la manipulación de estados y métodos de forma global. Esta característica permite mantener un esquema centralizado donde cualquier componente puede acceder a estos datos globales. La implementación de VueX ha acelerado significativamente el proceso de construcción de la web, permitiendome desarrollarla de manera más eficiente.

### Vuex-persistancestate
Integré Vuex-persistancestate para optimizar el almacenamiento de datos en el cliente y garantizar su persistencia. Esta librería crea variables en el localStorage utilizando un array que contiene los estados de Vuex como argumento. Esta elección me ha permitido reducir la cantidad de código necesario para guardar datos en el lado del cliente, simplificando así el manejo de datos.

### Vue-router
Vue-router es una librería nativa de Vue que facilita la manipulación de las rutas en nuestra aplicación. La integración de Vue-router es esencial para la navegación dentro de la web, permitiendo una transición suave entre las diferentes vistas y componentes de la aplicación.

### Tailwind CSS
Tailwind CSS es un framework de CSS que ofrece una gran flexibilidad y personalización en la estilización de los elementos de la página. Su facilidad de uso me ha permitido mantenerme fiel al diseño propuesto en Figma, logrando una coherencia visual en todo el proyecto. Tailwind CSS me ha simplificado el proceso de diseño y estilización de la aplicación web.

En resumen, la selección y uso de estas librerías y dependencias del proyecto de Vue 3 ha sido fundamental para optimizar la experiencia del usuario, acelerar el desarrollo y garantizar la persistencia de datos, al tiempo que mentengo la coherencia en el diseño de la aplicación web. Cada elección ha sido estratégica y contribuye de manera significativa a la calidad y eficiencia del proyecto.

### Proyecto en Línea
https://global66-pokedex-rodriguez-je5r94g68-repolloso.vercel.app/

Muchas gracias por darme esta oportunidad, espero poder haber cumplido con las expectativas para poder formar parte de esta gran compañía. 

## Project Setup

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
