
import { supabase } from '../supabase';

export const fetchUsers = async () => {

    const { data, error } = await supabase

        .from('landing-page')

        .select('*');
    if (error) throw error;
    return data;

};

export const createUser = async (email, password, full_name) => {

    const newUser = {
        email: email ?? null,
        password: password ?? null,
        full_name: full_name ?? null,
        created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
        .from('landing-page')
        .insert([newUser]);

    if (error) throw error;

    return { data };
};