# Nexo Girls

A React single-page website built with React 18, Vite, and React Router. The original page designs and forest-green/yellow color palette are retained, while shared navigation, footer, and popup UI are rendered as reusable components.

## Run locally

```bash
npm install
npm run dev
```

Vite serves the site at `http://localhost:3000`.

## Build

```bash
npm run build
npm run preview
```

## Page routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Nexo Girls |
| `/milestones` | Milestones |
| `/team` | Meet Our Team |
| `/programs` | Programs |
| `/get-involved` | Get Involved |
| `/volunteer` | Volunteer application |
| `/partners` | Partnership application |
| `/ambassadors` | Ambassador application |
| `/contact` | Contact |
| `/donate` | Donate |

Legacy `.html` page URLs redirect to their React routes.

## Structure

- `src/App.jsx` defines the routes and shared application shell.
- `src/components/` contains the navbar, footer, page hero, section heading, scroll reset, and donation popup.
- `src/pages/index.jsx` contains the route-specific page views and shared page layouts.
- `src/index.css` contains the global theme and responsive layouts, including breakpoints for tablet and mobile widths.

The photo CTA titled “Ready to Rise, Lead, and Make an Impact?” is a home-page section immediately before the shared footer; it is not part of the footer.
