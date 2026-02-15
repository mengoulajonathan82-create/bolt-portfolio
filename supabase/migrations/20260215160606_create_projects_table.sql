/*
  # Create projects table for dynamic projects page

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, project title)
      - `description` (text, project description)
      - `image` (text, project image URL)
      - `technologies` (text[], array of tech tags)
      - `github_url` (text, GitHub link)
      - `demo_url` (text, live demo link)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  technologies text[] DEFAULT '{}',
  github_url text,
  demo_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);
