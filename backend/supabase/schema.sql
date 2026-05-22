create extension if not exists pgcrypto;

create table if not exists public.registrations (
    id uuid primary key default gen_random_uuid(),
    first_name text not null,
    last_name text not null,
    phone text not null,
    email text not null unique,
    accepted_privacy_policy boolean not null default false,
    created_at timestamptz not null default now()
);

create index if not exists registrations_created_at_idx
    on public.registrations (created_at desc);
