-- ============================================================
-- ARREGLO — Bug de tipo de dato en la creación automática de perfil
-- ============================================================
-- Esto corrige el error 500 al registrarse ("AuthRetryableFetchError").
-- Es seguro correrlo aunque ya hayas corrido sql/schema.sql antes —
-- solo reemplaza la función, no toca tus tablas ni datos existentes.
--
-- Reemplaza el correo de abajo por el mismo que usaste en schema.sql
-- antes de correr esto.
-- ============================================================

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
    case when lower(new.email) = lower('rgslabs.contact@gmail.com') then 'super_admin'::public.app_role else null::public.app_role end
  );
  return new;
end;
$$;
