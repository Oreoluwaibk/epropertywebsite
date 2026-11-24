# ePropertyTree

Website for ePropertyTree, a property app for landlords, tenants, and agents. The marketing pages cover listings, leases, and rent collection. Signed-in users get a dashboard. Sample property pages are generated from the listings in the repo.

An earlier landing-page demo lives in [e-property-demo](https://github.com/Oreoluwaibk/e-property-demo).

## Stack

Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Marketing home |
| `/about`, `/support` | About the product and help |
| `/properties`, `/properties/[id]` | Listing browser and a single property |
| `/privacy`, `/terms`, `/delete-account` | Legal pages |
| `/welcome`, `/get-started`, `/create-account`, `/sign-in` | Onboarding and sign-in |
| `/dashboard` | Signed-in dashboard |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build` then `npm start` runs the production server. `npm run lint` checks the project.
