/*
  # Add video support to articles and create comments table

  1. Modified Tables
    - `blog_articles`
      - Added `video_url` (text, optional video URL for YouTube/Vimeo)

  2. New Tables
    - `blog_comments`
      - `id` (uuid, primary key)
      - `article_id` (uuid, foreign key to blog_articles)
      - `author_name` (text, commenter name)
      - `author_email` (text, commenter email)
      - `content` (text, comment content)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  3. Security
    - Enable RLS on `blog_comments` table
    - Add policy for public read access
    - Add policy for anonymous write (with moderation later)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_articles' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE blog_articles ADD COLUMN video_url text;
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES blog_articles(id) ON DELETE CASCADE,
  author_name text NOT NULL,
  author_email text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Comments are publicly readable"
  ON blog_comments
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create comments"
  ON blog_comments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
