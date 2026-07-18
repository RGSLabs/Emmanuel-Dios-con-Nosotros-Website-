-- ============================================================
-- EMMANUEL — Esquema de Blog & Roles (Supabase)
-- ============================================================
-- CÓMO USAR ESTE ARCHIVO:
-- 1. Antes de correrlo, reemplaza 'TU_CORREO_AQUI@ejemplo.com' (línea ~48)
--    por el correo con el que TÚ vas a registrarte como super_admin.
-- 2. Ve a tu proyecto en supabase.com → SQL Editor → New query.
-- 3. Pega todo este archivo y dale RUN.
-- 4. Después, entra a /admin/login.html en tu sitio y crea tu cuenta
--    con ESE MISMO correo — el sistema te va a asignar super_admin
--    automáticamente en cuanto te registres.
-- ============================================================

-- 1. Rol de usuario
create type public.app_role as enum ('super_admin', 'admin');

-- 2. Perfiles (espejo de auth.users + su rol)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role public.app_role,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Cada quien puede leer su propio perfil (para saber su propio rol)
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

-- Solo super_admin puede cambiar roles de otros
create policy "profiles_update_super_admin_only"
  on public.profiles for update
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'super_admin')
  );

-- 3. Al registrarse alguien nuevo, se le crea su perfil automáticamente.
--    Si su correo coincide con el tuyo, se vuelve super_admin. Cualquier
--    otro correo queda sin rol (sin acceso al panel) hasta que tú lo
--    asciendas manualmente (ver sql/promote_admin.sql).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, role)
  values (
    new.id,
    new.email,
    case when lower(new.email) = lower('TU_CORREO_AQUI@ejemplo.com') then 'super_admin' else null end
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. Artículos
create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text,
  excerpt text,
  content text not null,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  author_id uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

alter table public.articles enable row level security;

-- El público solo ve artículos publicados
create policy "articles_select_published"
  on public.articles for select
  using (status = 'published');

-- Admins y super_admin ven todo (incluyendo borradores)
create policy "articles_select_admin"
  on public.articles for select
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','super_admin'))
  );

-- Admins y super_admin pueden crear artículos
create policy "articles_insert_admin"
  on public.articles for insert
  with check (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','super_admin'))
  );

-- Admins y super_admin pueden editar artículos
create policy "articles_update_admin"
  on public.articles for update
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','super_admin'))
  );

-- Solo super_admin puede borrar artículos (control extra, como pediste)
create policy "articles_delete_super_admin"
  on public.articles for delete
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'super_admin')
  );

-- Mantiene updated_at al día automáticamente
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger articles_set_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();
