# Deployment Guide

## What's Built

✅ Next.js 15 site with Turbopack  
✅ Magic UI animations (Framer Motion)  
✅ Hero section with animated gradient orbs  
✅ Odds comparison table (mock data)  
✅ Upcoming matches cards  
✅ Dark theme with green/blue gradients  
✅ Mobile responsive

**Dev server running:** http://localhost:3000

---

## Deploy to Vercel (Recommended)

### Option 1: CLI Deploy
```bash
cd bestworldcupodds

# Login to Vercel (first time only)
npx vercel login

# Deploy (preview)
npx vercel

# Deploy to production
npx vercel --prod
```

### Option 2: GitHub + Vercel (Automated)
1. Push repo to GitHub
2. Go to vercel.com
3. "Import Project" → Select your GitHub repo
4. Vercel auto-detects Next.js → Deploy

**Recommended:** Use Option 2 for continuous deployment (push = auto-deploy).

---

## Domain Setup

Once deployed, add your domain in Vercel dashboard:

1. Project Settings → Domains
2. Add `bestworldcupodds.com`
3. Vercel gives you DNS records

Then at your registrar (Namecheap/GoDaddy):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

---

## Next Steps

### Immediate (Before Going Live)
1. [ ] Add real odds API integration (The-Odds-API)
2. [ ] Replace mock data with live data
3. [ ] Add more matches (64 total)
4. [ ] Create team pages (32 teams)
5. [ ] Add betting guides section

### Content (Week 1-2)
1. [ ] Write 5 betting guides
2. [ ] Create 10 team pages
3. [ ] Set up cron job for odds updates (every 15 min)

### SEO (Week 2-3)
1. [ ] Add meta tags (title, description, OG images)
2. [ ] Create sitemap
3. [ ] Add schema markup (SportsEvent, BetAction)
4. [ ] Submit to Google Search Console

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Magic UI)
- **Hosting:** Vercel
- **Language:** TypeScript

---

## File Structure

```
bestworldcupodds/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── hero-section.tsx           # Animated hero
│   ├── odds-comparison.tsx        # Odds table
│   ├── upcoming-matches.tsx       # Match cards
│   └── animated-gradient-text.tsx # Magic UI component
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

---

## Preview

Dev server is running at http://localhost:3000

To stop dev server:
```bash
# Find the process
ps aux | grep "next dev"

# Or just ctrl+C if it's in foreground
```

---

## Vercel CLI Commands

```bash
# Install globally (optional)
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# List deployments
vercel ls

# Open project in browser
vercel open
```

---

Ready to deploy! Let me know once it's live and I'll continue with API integration.
