```
k6-tests/
├─ config/
│   └─ options.js
├─ endpoints/
│   └─ endpoints.js
├─ utils/
│   └─ checks.js
├─ scenarios/
│   ├─ getTurnosDisponibles.js
│   └─ healthCheck.js
└─ main.js
```

# Descripción de carpetas y archivos

## `config/options.js`
Contiene la configuración global de k6:

- Podés seleccionar distintas configuraciones de carga según el tipo de prueba que quieras ejecutar
- Stages (usuarios virtuales y duración)
- Umbrales de rendimiento (`thresholds`)
- Otras opciones como `insecureSkipTLSVerify`

---

## `endpoints/endpoints.js`
Define todos los endpoints de la API.

- Permite modificar URLs en un solo lugar si cambian, evitando duplicación.

---

## `utils/checks.js`
Funciones para validar respuestas HTTP:

- Status
- Contenido
- Tiempos, etc.

- Permite reutilizar la misma lógica en varios escenarios.

---

## `scenarios/`
Cada archivo define un flujo de prueba independiente:

- `getTurnosDisponibles.js`: obtiene los turnos disponibles de un médico
- `healthCheck.js`: verifica que la API esté respondiendo correctamente

Cada escenario importa endpoints y funciones de check para mantener el código limpio.

---

## `main.js`
Orquesta la ejecución de los distintos escenarios:

- Solo importa y ejecuta funciones de los escenarios
- Mantiene el flujo principal limpio y legible

---

# Uso

## Instalar k6

```bash
brew install k6       # MacOS
choco install k6      # Windows

```

## Usar k6

```bash
k6 run main.js
```


