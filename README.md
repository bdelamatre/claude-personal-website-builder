# Build Your Personal Site with Vibes

Build and ship a personal website by describing what you want in plain language — no coding required. This is vibe coding: instead of writing code yourself, you prompt Claude to design, build, and update your site for you. Claude handles the files, commits, and deployment while you focus on what you want to say and how you want it to look. Hosted for free on Cloudflare Workers.

**Example:** [delamatre.com](https://www.delamatre.com)

## How it works

```mermaid
flowchart TD
    A([You]) -->|describe what you want| B[Claude\nclaude.ai/code]
    B -->|saves changes| C[(GitHub)]
    C -->|publishes automatically| D[Cloudflare Workers]
    D -->|delivers| E([your-domain.com])
```

## What it costs

- **GitHub** — free
- **Cloudflare** — free (hosting, SSL, DNS all included)
- **Domain name** — ~$10–15/year
- **Claude Pro** — $20/month (only needed when building or updating, not to keep the site running)

## Setup

These are one-time steps. GitHub and Cloudflare are both free to sign up for.

1. **GitHub account** — Create a free account at github.com and make a new repo. This is where your site's files live.

2. **Cloudflare account** — Sign up at cloudflare.com. The free tier includes everything you need.

3. **Domain** — Add your domain to Cloudflare by pointing your nameservers to Cloudflare and copying over your DNS records.

4. **Create a Worker** — In the Cloudflare dashboard go to **Workers & Pages → Create → Worker** and give it a name.

5. **Connect to GitHub** — In the Worker's settings go to **Settings → Build** and connect your GitHub repo. From this point on, every change Claude makes goes live automatically.

6. **Add your domain** — In the Worker go to **Settings → Domains & Routes → Add Custom Domain** and enter your domain. Cloudflare handles SSL automatically.

7. **Disable the default URL** *(optional)* — Cloudflare gives your Worker a default URL you probably don't want. Under **Settings → Domains & Routes**, disable it.

8. **Add a security rule** *(optional)* — Ask Claude to set up a WAF rule in Cloudflare to block common bot traffic.

## Building your site

Your site is built entirely by prompting Claude — no terminal, no code editor required.

1. **Claude Pro subscription ($20/month)** — Required to use Claude on the web. You only need this when building or updating your site — not to keep it running.

2. **Design with Claude** — Use Claude Design to create your site's look and feel. Describe your style, content, and goals and Claude will produce a design you can use as the blueprint for the build.

3. **Initial build** — Start a Claude session at claude.ai/code, connect it to your repo, and share the design. Claude will build the site and publish it automatically.

4. **Add CLAUDE.md** *(optional)* — This repo includes a `CLAUDE.md` file that teaches Claude how your site works. Ask Claude to add it: *"Please add the CLAUDE.md file from the vibe-site repo to my project."* Once it's there, Claude will follow the rules automatically every session without you having to explain anything.

5. **Iterate** — Keep prompting Claude to add pages, update content, or tweak the design. Changes go live in seconds.

## Sample prompts

### Claude Design

Use these to design your site before the initial build.

**Visual style**
- "A minimal personal site for a writer. Neutral tones, generous whitespace, serif headings, monospace body text."
- "Clean and modern with a dark background, accent color in teal, and a grid-based layout."
- "Warm and personal — like a notebook. Off-white background, handwritten-style headings, soft shadows."

**Layout and structure**
- "Homepage with a short bio, a list of recent writing, and links to a few projects."
- "A single-page site with sections for about, work, and contact."
- "Minimal homepage that leads into a /now page and a /curations page."

### Claude Code

Use these in a Claude session to build and update your site.

**Adding content**
- "Add a now entry: just got back from a week in the mountains."
- "Add a new curations category called 'Books' with a first item: Thinking in Systems by Donella Meadows, a classic introduction to systems thinking."
- "Update my bio in the about page to mention I moved to Portland."

**Building new pages**
- "Add a /now page that shows a reverse-chronological list of short status updates."
- "Create a /curations page with categories. Each category links to its own page listing items with titles, links, and descriptions."
- "Add a /uses page listing the hardware and software I use daily."

**Design and layout**
- "The homepage feels too sparse — add a subtle animated illustration."
- "Make the type on the curations pages larger and increase line spacing for readability."
- "Add a dark/light mode toggle that persists across sessions."

**Features**
- "Pull live tide data from NOAA for my local gauge and display it on the homepage."
- "Show current weather conditions — temperature and a short description."
- "Add a /feed.xml RSS feed for my now entries."
