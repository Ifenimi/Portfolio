# YOUR NAME — Backend Developer Portfolio

A full-stack portfolio site: a React (Vite) frontend that fetches its content from a
Node.js/Express API. The whole site is themed as if it *is* an API — nav items are
routes (`GET /about`), projects are rendered as endpoint cards with HTTP method/status
badges, and the hero is a live "request/response" terminal panel.

Every piece of personal content (name, bio, projects, links, resume) is a **placeholder**
marked `REPLACE_ME` or `YOUR_...` — swap these out before you deploy. See
[Where to put your real content](#where-to-put-your-real-content) below.

---

## Tech stack

**Frontend**
- React 18
- Vite 5 (build tool / dev server)
- Plain CSS with custom properties (no framework — see `frontend/src/styles/index.css`)
- Fetch API for calling the backend, with local JSON fallback data so the site still
  renders if the API isn't running

**Backend**
- Node.js (>=18)
- Express 4
- Helmet (security headers)
- CORS
- express-rate-limit (rate limits the contact form)
- dotenv (environment config)
- JSON files as the "database" (`backend/data/*.json`) — swap for a real DB (Postgres,
  MongoDB, etc.) whenever you're ready; the route layer is already split out to make
  that swap easy

**Tooling**
- nodemon (backend hot reload in dev)
- concurrently (run both servers with one command from the repo root)

---

## Project structure

```
portfolio/
├── backend/
│   ├── data/                # profile.json, skills.json, projects.json (placeholders)
│   ├── routes/               # profile.js, skills.js, projects.js, contact.js
│   ├── server.js             # Express app entry point
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Nav, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
│   │   ├── data/              # local fallback copies of the placeholder JSON
│   │   ├── styles/index.css
│   │   ├── api.js             # fetch wrapper for the backend API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── .env.example
│   └── package.json
├── package.json               # root convenience scripts (run both apps at once)
├── .gitignore
└── README.md
```

---

## Launching the portfolio

You need [Node.js 18+](https://nodejs.org) installed.

### 1. Install dependencies

From the repo root:

```bash
npm run install:all
```

This installs both `backend/` and `frontend/` dependencies. (If you also want the root
`concurrently` script, run `npm install` once at the repo root first.)

### 2. Configure environment variables

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Defaults work out of the box for local development (backend on `:5000`, frontend on
`:5173`).

### 3. Run both servers

From the repo root (requires `npm install` at the root once, for `concurrently`):

```bash
npm install
npm run dev
```

Or run them separately, in two terminals:

```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

Then open **http://localhost:5173**.

### 4. Build for production

```bash
cd frontend && npm run build
```

This outputs a static site to `frontend/dist/` — deployable to Vercel, Netlify, GitHub
Pages, etc. Deploy `backend/` separately (Render, Railway, Fly.io, an EC2 box, etc.) and
point `frontend/.env`'s `VITE_API_URL` at its public URL before building.

---

## Where to put your real content

| What | File |
|---|---|
| Name, title, bio, stats, social links, resume link | `backend/data/profile.json` **and** `frontend/src/data/profile.json` |
| Skills list | `backend/data/skills.json` **and** `frontend/src/data/skills.json` |
| Your 10 projects | `backend/data/projects.json` **and** `frontend/src/data/projects.json` |
| Actual resume PDF | drop it in `frontend/public/` and update `resumeUrl` in `profile.json` |
| Real contact form delivery (email) | `backend/routes/contact.js` — currently just validates + logs; wire up nodemailer or a service like Resend/SendGrid |
| Page title / meta description | `frontend/index.html` |

The frontend keeps a **local copy** of the JSON in `frontend/src/data/` as a fallback so
the site still renders correctly even if the backend API isn't reachable (e.g. a
frontend-only deploy). Keep both copies in sync, or later replace both with real calls
to a database once the backend has one.

---

## Pushing to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio scaffold"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## Next steps / suggested checklist

- [ ] Replace every `REPLACE_ME` / `YOUR_...` placeholder across `backend/data/*.json`
- [ ] Add your real resume PDF to `frontend/public/`
- [ ] Wire up real email sending in `backend/routes/contact.js`
- [ ] Swap the JSON "database" for a real one (Postgres/MongoDB) once you're ready —
      it's one of your 10 portfolio projects, so this repo can double as that project
- [ ] Deploy backend (Render/Railway/Fly.io) and frontend (Vercel/Netlify)
- [ ] Update `VITE_API_URL` in `frontend/.env` to the deployed backend URL
- [ ] Add a custom domain + HTTPS
