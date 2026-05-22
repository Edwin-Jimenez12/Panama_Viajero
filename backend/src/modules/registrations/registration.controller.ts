import type { Request, Response } from 'express';
import { ZodError } from 'zod';
import { createRegistration } from './registration.service.js';
import { registrationSchema } from './registration.schema.js';

export async function registerUser(request: Request, response: Response) {
    try {
        const payload = registrationSchema.parse(request.body);
        const registration = await createRegistration(payload);

        return response.status(201).json({
            ok: true,
            message: 'Registro guardado correctamente',
            registration,
        });
    } catch (error) {
        if (error instanceof ZodError) {
            return response.status(400).json({
                ok: false,
                message: 'Datos invalidos',
                errors: error.flatten().fieldErrors,
            });
        }

        if (error instanceof Error && error.message === 'EMAIL_ALREADY_EXISTS') {
            return response.status(409).json({
                ok: false,
                message: 'Este correo ya fue registrado',
            });
        }

        const message = error instanceof Error ? error.message : 'Error interno del servidor';

        return response.status(500).json({
            ok: false,
            message,
        });
    }
}
