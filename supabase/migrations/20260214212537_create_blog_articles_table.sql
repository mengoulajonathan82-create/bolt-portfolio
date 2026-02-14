/*
  # Create blog articles table

  1. New Tables
    - `blog_articles`
      - `id` (uuid, primary key)
      - `title` (text, article title)
      - `excerpt` (text, short summary)
      - `content` (text, full article content in markdown)
      - `author` (text, author name)
      - `date` (timestamp, publication date)
      - `category` (text, article category)
      - `read_time` (text, estimated reading time)
      - `image` (text, featured image URL)
      - `tags` (text[], array of tags)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `blog_articles` table
    - Add policy for public read access (articles are public)
*/

CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  date timestamptz NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  image text NOT NULL,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Articles are publicly readable"
  ON blog_articles
  FOR SELECT
  TO anon, authenticated
  USING (true);
