
UrbanAlert es una plataforma diseñada para facilitar la comunicación entre ciudadanos y servicios públicos, permitiendo el reporte de incidencias urbanas y el seguimiento de su resolución en tiempo real.

## Documentación del Proyecto
Toda la documentación técnica y funcional se encuentra organizada en el directorio de documentos:
* [Especificación de Requerimientos](docs/REQUERIMIENTOS.md)

---

## Funcionalidades Principales
El sistema integra las siguientes capacidades críticas:
1. Registro de reportes con soporte multimedia y categorización.
2. Localización geográfica automatizada mediante coordenadas GPS.
3. Interfaz de gestión para la administración de estados de reparación.
4. Sistema de notificaciones para actualizaciones de estatus al usuario.
5. Visualización cartográfica de incidencias activas en la comunidad.

## Atributos de Calidad
El desarrollo se rige bajo los siguientes estándares técnicos:
* **Desempeño:** Tiempo de respuesta del servidor inferior a 300ms en operaciones de consulta.
* **Disponibilidad:** Garantía de acceso al servicio del 99.9% mensual.
* **Seguridad:** Implementación de protocolos de cifrado para la protección de datos personales.

---

## Decisiones de Arquitectura
Dentro del desarrollo del proyecto, se ha determinado que la **Seguridad** es el atributo de mayor prioridad. Esta decisión se fundamenta en la necesidad de proteger la integridad de los datos de ubicación y la identidad de los ciudadanos, garantizando un entorno confiable que fomente la participación ciudadana sin riesgos de exposición de información sensible.

---

## Instalación y Configuración
Para desplegar este proyecto localmente, asegúrese de contar con las dependencias necesarias descritas en la documentación técnica y siga los pasos de configuración de variables de entorno.

© 2026 Equipo UrbanAlert - Proyecto de Ingeniería de Software