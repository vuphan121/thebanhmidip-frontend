# The Banh Mi Dip Frontend

This is the frontend project for **The Banh Mi Dip**, built with **Vue.js**. It interacts with the backend API and Supabase database to display articles and issues.

---

## Setup

Clone the project:

```bash
git clone https://github.com/vuphan121/thebanhmidip-frontend.git
cd thebanhmidip-frontend
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root and set the following variables:

```
VITE_BACKEND_API_URL=http://localhost:3001
VITE_SUPABASE_PROJECT_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual Supabase project credentials.

---

## Supabase Database Setup

The project requires a Supabase database with the following tables and schema:

### `article` Table

```sql
CREATE TABLE public.article (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NULL,
  summary text NULL,
  created_at timestamp without time zone NULL DEFAULT now(),
  tag text[] NULL,
  image_name text NULL,
  title_link text NULL,
  image_source_name text NULL,
  image_source_link text NULL,
  issue_id text NULL,
  CONSTRAINT article_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

CREATE INDEX IF NOT EXISTS created_at_index ON public.article USING btree (created_at) TABLESPACE pg_default;
CREATE INDEX IF NOT EXISTS article_created_at_idx ON public.article USING btree (created_at DESC) TABLESPACE pg_default;
CREATE INDEX IF NOT EXISTS idx_article_issue_id ON public.article USING btree (issue_id) TABLESPACE pg_default;
```

### `issue` Table

```sql
CREATE TABLE public.issue (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  intro text NULL,
  CONSTRAINT issue_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
```

---

## Running the Frontend

Start the development server:

```bash
npm run dev
```

The app will run on the default Vite development port (usually `http://localhost:5173`).

---

## Notes

- Make sure the backend server is running and accessible via `VITE_BACKEND_API_URL`.
- Ensure your Supabase project is correctly set up with the required tables.
- The frontend uses environment variables prefixed with `VITE_` as required by Vite.
