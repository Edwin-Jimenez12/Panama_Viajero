import { supabaseAdmin } from '../../lib/supabase.js';
import type { RegistrationInput } from './registration.schema.js';

export async function createRegistration(data: RegistrationInput) {
    const { error, data: inserted } = await supabaseAdmin
        .from('registrations')
        .insert({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email.toLowerCase(),
            accepted_privacy_policy: data.acceptedPrivacyPolicy,
        })
        .select('id, created_at')
        .single();

    if (error) {
        if (error.code === '23505') {
            throw new Error('EMAIL_ALREADY_EXISTS');
        }

        throw new Error(error.message);
    }

    return inserted;
}
