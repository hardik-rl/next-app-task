# Next.js Blog ✍️

A simple and clean blog project built with Next.js 15, featuring static blog content, a comment system, star-based rating, and authentication for locked posts. The app is fully responsive and styled with pure CSS (no frameworks).

## 🚀 Features

- Static blog pages using `getStaticProps` and `getStaticPaths`
- Comment submission with rating selection
- Custom star icons and emoji feedback
- Toast message on comment submission
- Pure CSS styling (no frameworks used)
- Responsive UI

## 🔐 Authentication / Login

- Some articles are locked and display a lock icon.
- To access these posts, users must log in.
- After login, users can:
- Unlock and read premium content
- Leave comments & ratings
- Interact with related articles

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/hardik-rl/next-app-task
cd next-app-task

# Install dependencies
npm install

# Run development server
npm run dev

# Deployment
https://v0-new-project-sccvwp1p3kv-hardik-rls-projects.vercel.app/
