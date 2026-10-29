# Ejercicios de TypeScript

Colección de 20 ejercicios para practicar los fundamentos de TypeScript. Las soluciones están en [`index.ts`](index.ts).

## Contenido

- Tipos básicos, arrays y funciones (ejercicios 1–5).
- Objetos, `type` e interfaces (6–10).
- Uniones, `unknown` y tipos utilitarios (11–15).
- Clases, interfaces y `enum` (16–18).
- Genéricos, promesas y `Record` (19–20).

## Requisitos

- Node.js y npm.

## Instalación y ejecución

Desde la carpeta del proyecto, instala las dependencias:

```bash
npm ci
```

Comprueba los tipos sin generar archivos:

```bash
npx tsc --noEmit
```

Compila y ejecuta los ejercicios:

```bash
npx tsc
node index.js
```

La compilación genera archivos JavaScript y mapas en la raíz del proyecto. Están incluidos en `.gitignore`.
