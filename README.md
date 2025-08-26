# Todo

Aplicación de lista de tareas construida con Angular 13. Permite crear, listar y gestionar tareas con un enfoque simple y didáctico, incorporando conceptos clave como enlace de datos bidireccional, filtrado de elementos y actualización reactiva de la interfaz.

## Descripción

Este proyecto implementa:
- Un modelo de datos para representar tareas (con estado de completado) y una lista de tareas asociada a un usuario.
- Visualización de tareas pendientes y completadas.
- Enlace de datos bidireccional para capturar nuevas tareas desde la interfaz.
- Filtro para mostrar/ocultar tareas completadas.
- Conteo dinámico de tareas pendientes.
- Estilos básicos para una experiencia clara y minimalista.

La evolución del repositorio (según el historial de commits) refleja la construcción incremental de:
1) Modelo de datos.
2) Estilos base.
3) Listado de tareas.
4) Enlace bidireccional.
5) Filtrado por estado de completado.
6) Agregado de nuevas tareas.
7) Conmutación de visibilidad de tareas completadas.

## Requisitos

- Node.js (LTS recomendado)
- npm (gestor de paquetes)
- Angular CLI 13.0.3

## Puesta en marcha

1) Instalar dependencias:
   ```
   npm install
   ```

2) Servidor de desarrollo:
   ```
   ng serve
   ```
   Navega a http://localhost:4200/. La app recargará automáticamente ante cambios.

## Scripts útiles

- Desarrollo: `ng serve`
- Compilación: `ng build` (artefactos en `dist/`)
- Pruebas unitarias: `ng test`
- Ayuda CLI: `ng help`

## Uso

- Añadir tarea: escribe el texto de la nueva tarea y confírmala para agregarla a la lista.
- Marcar como completada: cambia el estado de una tarea ya creada.
- Filtrar: activa/desactiva la opción para mostrar también las tareas completadas.
- Revisa el contador de pendientes para conocer el progreso.

## Arquitectura y componentes

- Modelo de datos: una entidad para la tarea (título y estado) y una lista que gestiona el conjunto y operaciones como agregar.
- Componente principal: orquesta el listado, el conteo de pendientes, el agregado de nuevas tareas y el filtrado por completadas.
- Plantillas y estilos: presentan el listado y controles de forma clara y responsiva.

## Buenas prácticas aplicadas

- Separación de responsabilidades entre presentación y modelo.
- Inmutabilidad parcial al filtrar elementos para visualización.
- Enlace de datos para sincronizar UI y estado de la aplicación.
- Control de entrada para evitar agregar elementos vacíos.

## Roadmap (ideas)

- Persistencia local (LocalStorage o IndexedDB).
- Edición y eliminación de tareas.
- Agrupación por categorías o etiquetas.
- Pruebas adicionales de componentes y modelo.
- Internacionalización (i18n).

## Contribución

1) Crea una rama a partir de `main`.
2) Asegura que las pruebas pasen.
3) Abre un Pull Request con una descripción clara de los cambios.

## Licencia

MIT
