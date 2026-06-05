create table togo_waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  created_at timestamptz default now()
);
alter table togo_waitlist enable row level security;
create policy "Allow anonymous inserts" on togo_waitlist for insert to anon with check (true);
