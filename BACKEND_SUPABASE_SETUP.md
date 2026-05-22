# Guia directa: backend con Node.js + TypeScript + Supabase

## Que vas a tener al final

- Un backend en `backend/`
- Un endpoint `POST /api/registrations`
- Una tabla `registrations` en Supabase
- Validacion real antes de guardar
- Correos duplicados bloqueados

## Orden exacto de trabajo

### 1. Crear el proyecto en Supabase

Haz esto primero porque el backend necesita la URL y la llave privada.

### 2. Crear la tabla

Abre `backend/supabase/schema.sql` y ejecútalo en el `SQL Editor` de Supabase.

Eso crea:

- `id`
- `first_name`
- `last_name`
- `phone`
- `email`
- `accepted_privacy_policy`
- `created_at`

## 3. Crear variables de entorno

En `backend/.env`:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
SUPABASE_URL=https://TU_PROYECTO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=TU_SERVICE_ROLE_KEY
```

## 4. Instalar backend

Abre terminal dentro de `backend/` y corre:

```bash
yarn
```

## 5. Correr backend

```bash
yarn dev
```

## Que hace cada archivo importante

### `src/config/env.ts`

Lee el `.env`. Si falta una variable, rompe el arranque para que no corras el backend mal configurado.

### `src/lib/supabase.ts`

Crea el cliente admin de Supabase. Ese cliente es el que de verdad guarda en la base.

### `src/modules/registrations/registration.schema.ts`

Define la forma correcta del registro.

Si el usuario manda algo incompleto o malo, se rechaza antes de insertar.

### `src/modules/registrations/registration.service.ts`

Hace el `insert` a la tabla `registrations`.

### `src/modules/registrations/registration.controller.ts`

Maneja la respuesta HTTP:

- `201` si guardo
- `400` si faltan datos
- `409` si el correo ya existe
- `500` si algo explota en servidor

### `src/modules/registrations/registration.routes.ts`

Expone la ruta:

```txt
POST /api/registrations
```

### `src/app.ts`

Configura:

- `cors`
- `express.json()`
- ruta de salud
- rutas del modulo de registros

### `src/server.ts`

Levanta el servidor.

## Como piensa el flujo

Frontend:

1. El usuario llena formulario
2. Hace clic en registrarse
3. React manda `fetch` al backend

Backend:

1. Recibe JSON
2. Valida con Zod
3. Inserta en Supabase
4. Devuelve respuesta

Supabase:

1. Guarda la fila en Postgres
2. Puedes verla en Table Editor

## La API que ya te deje

### Endpoint

```txt
POST http://localhost:4000/api/registrations
```

### Body esperado

```json
{
  "firstName": "Juan",
  "lastName": "Perez",
  "phone": "65094159",
  "email": "juan@email.com",
  "acceptedPrivacyPolicy": true
}
```

## Como probarla sin frontend

Usa `curl` o Postman.

### curl en Windows

```bash
curl -X POST http://localhost:4000/api/registrations ^
  -H "Content-Type: application/json" ^
  -d "{\"firstName\":\"Juan\",\"lastName\":\"Perez\",\"phone\":\"65094159\",\"email\":\"juan@email.com\",\"acceptedPrivacyPolicy\":true}"
```

## Lo correcto despues de esto

Cuando confirmes que el backend guarda en Supabase, el siguiente paso es conectar `Preregister.jsx` a esta API.

Ese paso incluye:

- controlar estado de formulario
- `fetch` al endpoint
- loading
- errores
- mensaje de exito

## Lo que no debes hacer

- No pongas la `service_role key` en React
- No llames Supabase directo desde el frontend con esa key
- No guardes registros en JSON local
- No uses solo memoria del servidor

## Recomendacion de despliegue

Primero hazlo local.

Despues despliegas backend en:

- Railway
- Render
- Fly.io
- VPS

Y solo cambias:

- `FRONTEND_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
