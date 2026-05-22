# Backend Node.js + TypeScript + Supabase

## Que hace esta carpeta

Este backend recibe los registros del formulario, valida los datos y los guarda en Supabase.

## Estructura

- `src/server.ts`: levanta el servidor
- `src/app.ts`: configura Express, CORS, JSON y rutas
- `src/config/env.ts`: carga y valida variables de entorno
- `src/lib/supabase.ts`: crea el cliente admin de Supabase
- `src/modules/registrations/registration.schema.ts`: valida el body del registro con Zod
- `src/modules/registrations/registration.service.ts`: inserta el registro en la tabla
- `src/modules/registrations/registration.controller.ts`: maneja request/response
- `src/modules/registrations/registration.routes.ts`: define `POST /api/registrations`
- `supabase/schema.sql`: crea la tabla en la base de datos

## Flujo completo

1. El frontend hace `POST /api/registrations`
2. Express recibe el JSON
3. Zod valida nombre, apellido, telefono, correo y aceptacion de politica
4. Si todo esta bien, el backend usa la `SERVICE_ROLE_KEY` para insertar en Supabase
5. Devuelve respuesta `201` si se guardo correctamente

## Paso 1: crear proyecto en Supabase

1. Entra a Supabase y crea un proyecto
2. Espera a que cree la base de datos
3. Ve a `SQL Editor`
4. Copia y ejecuta el contenido de `backend/supabase/schema.sql`

Eso crea la tabla `registrations`.

## Paso 2: sacar las credenciales

En Supabase:

1. Ve a `Project Settings`
2. Ve a `API`
3. Copia:
   - `Project URL`
   - `service_role key`

La `service_role key` es privada. Nunca va en el frontend.

## Paso 3: crear el archivo `.env`

Dentro de `backend/`, crea un archivo `.env` basado en `.env.example`

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
SUPABASE_URL=https://TU_PROYECTO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=TU_SERVICE_ROLE_KEY
```

## Paso 4: instalar dependencias

Desde `backend/`:

```bash
yarn
```

## Paso 5: levantar el backend

```bash
yarn dev
```

Debes ver algo como:

```bash
Backend running on http://localhost:4000
```

## Endpoint disponible

### `POST /api/registrations`

Body:

```json
{
  "firstName": "Juan",
  "lastName": "Perez",
  "phone": "65094159",
  "email": "juan@email.com",
  "acceptedPrivacyPolicy": true
}
```

Respuesta exitosa:

```json
{
  "ok": true,
  "message": "Registro guardado correctamente",
  "registration": {
    "id": "uuid",
    "created_at": "2026-01-01T00:00:00.000Z"
  }
}
```

## Prueba rapida con curl

```bash
curl -X POST http://localhost:4000/api/registrations ^
  -H "Content-Type: application/json" ^
  -d "{\"firstName\":\"Juan\",\"lastName\":\"Perez\",\"phone\":\"65094159\",\"email\":\"juan@email.com\",\"acceptedPrivacyPolicy\":true}"
```

## Que hace cada tecnologia

### Express

Es el servidor HTTP. Recibe peticiones del frontend.

### TypeScript

Te da tipos y reduce errores. Aqui asegura que el backend crezca de forma ordenada.

### Zod

Valida el body antes de tocar la base de datos.

### Supabase

Te da Postgres administrado. Aqui solo lo usamos como base de datos.

### Service Role Key

Es la llave privada del backend para insertar directamente en Supabase.

## Importante para produccion

- El backend se despliega separado del frontend
- `FRONTEND_URL` debe apuntar a tu dominio real
- La `SERVICE_ROLE_KEY` solo vive en variables de entorno del servidor
- No la pongas nunca en React
