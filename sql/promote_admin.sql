-- ============================================================
-- Ascender a alguien a "admin" (puede escribir/editar/publicar
-- artículos, pero NO puede borrar artículos ni tocar roles).
-- ============================================================
-- La persona debe haberse registrado AL MENOS UNA VEZ en
-- /admin/login.html antes de correr esto (así ya existe su perfil).
--
-- Reemplaza el correo de abajo y corre esto en el SQL Editor
-- de Supabase cada vez que quieras dar acceso a alguien nuevo.

update public.profiles
set role = 'admin'
where email = 'correo-de-la-persona@ejemplo.com';

-- Para quitarle el acceso más adelante:
-- update public.profiles set role = null where email = 'correo-de-la-persona@ejemplo.com';
