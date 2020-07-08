## Data y comentarios sobre el desafío

### Rasgos generales

Está creado con create-react-app, pensé en usar bootstrap pero creí conveniente hacer mis propios estilos para ser más auténtico y demostrar que puedo usar preprocesadores.
La idea principal es hacerlo simple, funcional y agradable a la vista, tanto el código cómo el resultado final.
De diseño mucha idea no tengo pero creo que un poco de sentido común es suficiente en este caso.
Voy a utilizar Redux, Router, Sass y jsx para los componentes.

### Estructura

La organización del repositorio será bastante convencional, dentro de la carpeta src estará en index.js junto a las carpetas:
-containers: donde se encontrará el archivo App.js (cumpliendo la función de layout).
-pages: dentro de esta carpeta van a estar las páginas que conforman el loyout de App.js.
-components: ahí podrán encontrarse el navdrawer y los resources.
-reducers: tendrá tres archivos, un index donde combino los reducers y los dos reducers.
-actions: se conforma por las tres actions que utilizo, cardsCall, login y logout.
-assets: estará destinada a estilos, tendrá archivos y carpetas contenedoras de mixins y variables.
-types: en esta carpeta tengo las palabras reservadas que conectan las actions con reducers, lo hice para evitar errores tipográficos y que en caso de haber una falla el browser me lo indique.

### Desarrollo del proyecto

Primero decidí armar toda la estructura del login y el home, darles un poco de estilos básicos, y los 'enruté' para poder ver la app aunque sea estática.
Luego me concentré en hacer el llamado a la API y en mostrar cada una de las imágenes en pantalla, se me complicó el hacer varios llamados y que vaya recargando al pagina con un pull to refresh, asique decidí cargar todas con un solo get.
Una vez terminé con eso pasé a hacer el login, nada del otro mundo, manejar inputs y submit, action y reducer.
Posteriormente armé el navigation drawer, le dí algunos estilos y traté de conectar con el state del user.

### Bugs

Me quedó un solo bug pendiente, que hasta el momento no pude solucionar, seguramente con un poco más de tiempo podría.
Este bug está en el nombre del usuario, cuando hago el login lo guarda en el store pero al momento de cambiar de componente lo pierdo y no lo muestra en pantalla.

Posibles hipótesis:

- generé algún error al usar el hook de useState en Login y no está pasando los datos del estado local al store global.
- de alguna manera el store se resetea innecesariamente al cambiar de componente (me parece un poco absurdo pero no lo descarto)
- algún action o reducer no está funcionando como espero, puedo haberlo creado mal.

Intentos de solución:

- intenté definir el store global pero no dispuse del tiempo suficiente y los ratos que pude no logré completarlo.
- traté de debuggear los datos que mandan el estado global y local del componente login y navdrawer.

### Tiempo estimado

Actualmente me encuentro bastante atareado laboralmente pero espero poder finalizarlo durante el fin de semana.

### Tiempo utilizado

Como estimaba, pude casi completarlo el fin de semana, me quedaron detalles que solucioné el día lunes pero también me faltó un poco más de tiempo para poder solucionar el bug del usuario.
