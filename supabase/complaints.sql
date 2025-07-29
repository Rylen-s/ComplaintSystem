CREATE TABLE Complaints {
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  complaint text not null,
  status text default 'Pending',
  created_at timestamp with time zone default now()
}