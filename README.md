# Pokedex
Proyecto desarrollador por Agustín Rodríguez para el puesto de Frontend Developer (Vue.js) en Global66

En este proyecto de Vue 3, hemos seleccionado cuidadosamente diversas librerías y dependencias para optimizar la experiencia del usuario y facilitar el desarrollo. A continuación, explicamos por qué hemos utilizado cada una de ellas:

### AOS (Animate On Scroll)
Decidimos incorporar la librería AOS debido a la naturaleza de nuestra página web. La animación de elementos al desplazarse en la página web contribuye significativamente a mejorar la experiencia del usuario (UX) y complementa nuestro diseño de interfaz de usuario (UI). AOS nos proporciona una forma eficiente de agregar animaciones a elementos clave de nuestra web.

### Sweetalert2
Sweetalert2 es una librería ampliamente reconocida que nos permite crear modales personalizables, toasters y otros elementos dinámicos de manera rápida y sencilla. Dada la limitación de tiempo en el desarrollo de este proyecto, Sweetalert2 se convirtió en la elección ideal para añadir dinamismo a nuestra web, sin comprometer la calidad ni la experiencia del usuario.

### Vuex
VueX es una librería de Vue que habilita la manipulación de estados y métodos de forma global. Esta característica nos permite mantener un esquema centralizado donde cualquier componente puede acceder a estos datos globales. La implementación de VueX ha acelerado significativamente el proceso de construcción de la web, permitiéndonos desarrollar de manera más eficiente.

### Vuex-persistancestate
Hemos integrado Vuex-persistancestate para optimizar el almacenamiento de datos en el cliente y garantizar su persistencia. Esta librería crea variables en el localStorage utilizando un array que contiene los estados de Vuex como argumento. Esta elección nos ha permitido reducir la cantidad de código necesario para guardar datos en el lado del cliente, simplificando así el manejo de datos.

### Vue-router
Vue-router es una librería nativa de Vue que facilita la manipulación de las rutas en nuestra aplicación. La integración de Vue-router es esencial para la navegación dentro de nuestra web, permitiendo una transición suave entre las diferentes vistas y componentes de la aplicación.

### Tailwind CSS
Tailwind CSS es un framework de CSS que ofrece una gran flexibilidad y personalización en la estilización de los elementos de la página. Su facilidad de uso nos ha permitido mantenernos fieles al diseño propuesto en Figma, logrando una coherencia visual en todo el proyecto. Tailwind CSS ha simplificado el proceso de diseño y estilización de nuestra aplicación web.

En resumen, la selección y uso de estas librerías y dependencias en nuestro proyecto de Vue 3 ha sido fundamental para optimizar la experiencia del usuario, acelerar el desarrollo y garantizar la persistencia de datos, al tiempo que mantenemos la coherencia en el diseño de nuestra aplicación web. Cada elección ha sido estratégica y contribuye de manera significativa a la calidad y eficiencia de nuestro proyecto.

### Proyecto en Línea
https://global66-pokedex-rodriguez-je5r94g68-repolloso.vercel.app/

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
