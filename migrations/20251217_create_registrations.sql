-- Migration: create registrations table
-- Run this on your Postgres (Supabase) instance.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'pending',

  p1_name text NOT NULL,
  p1_ign text NOT NULL,
  p1_discord text NOT NULL,
  p1_phone text NOT NULL,
  p1_email text NOT NULL CHECK (p1_email ~* '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),

  p2_name text NOT NULL,
  p2_ign text NOT NULL,
  p2_discord text NOT NULL,
  p2_phone text NOT NULL,
  p2_email text NOT NULL CHECK (p2_email ~* '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),

  sub1_name text,
  sub1_ign text,
  sub1_discord text,

  metadata jsonb DEFAULT '{}'::jsonb
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_registrations_team_name ON registrations (team_name);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations (created_at);
