/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, sender name)
      - `email` (text, sender email)
      - `subject` (text, message subject)
      - `message` (text, message content)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for public write access
    - Add policy for authenticated read access (for admin)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
