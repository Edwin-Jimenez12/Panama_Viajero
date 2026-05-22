import { z } from 'zod';

export const registrationSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, 'El nombre es obligatorio')
        .max(80, 'El nombre es demasiado largo'),
    lastName: z
        .string()
        .trim()
        .min(2, 'El apellido es obligatorio')
        .max(80, 'El apellido es demasiado largo'),
    phone: z
        .string()
        .trim()
        .min(7, 'El telefono es obligatorio')
        .max(25, 'El telefono es demasiado largo'),
    email: z
        .string()
        .trim()
        .email('El correo no es valido')
        .max(160, 'El correo es demasiado largo'),
    acceptedPrivacyPolicy: z.literal(true, {
        message: 'Debes aceptar la politica de privacidad',
    }),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
