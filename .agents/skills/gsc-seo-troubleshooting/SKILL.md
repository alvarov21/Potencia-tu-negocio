---
name: gsc-seo-troubleshooting
description: >-
  Use this skill to diagnose and fix Google Search Console (GSC) indexation issues, sitemap errors ("No se ha podido obtener"), redirect errors ("Página con redirección" vs "Error de redirección"), and Vercel/TanStack SEO configurations for current and future web projects.
---

# Google Search Console (GSC) & SEO Troubleshooting Guide

This skill encapsulates the knowledge and procedures for fixing common SEO and GSC indexation issues, particularly for sites hosted on Vercel and using frameworks like TanStack Router, React, or Next.js.

## 1. Sitemap Issues ("No se ha podido obtener" / Couldn't fetch)
When a user reports that GSC has rejected the sitemap or shows a red error:
- **Diagnosis**: 
  - Ensure it's valid XML (`Content-Type: application/xml`). Check with `curl -s https://domain.com/sitemap.xml | head -n 10`.
  - Check for any 404s inside the sitemap (GSC lowers crawl priority if it finds 404s).
- **The Fix**: 
  - Do NOT delete the old sitemap in GSC if the user wants to keep the history.
  - Simply submit the sitemap again but append `?v=2` to the URL (e.g., `sitemap.xml?v=2`) in the "Add a sitemap" box. This bypasses GSC's internal cache and forces an instant read.

## 2. "Página con redirección" (Page with redirect)
- **Diagnosis**: This usually flags URLs with `www.` or HTTP when the canonical domain is non-`www` HTTPS.
- **The Fix**: **DO NOTHING.** This is a positive signal. It means Google found the duplicate `www` version, saw the 308 Permanent Redirect to the clean version, and correctly decided NOT to index the duplicate. Reassure the user that this is working as intended. Do not click "Validate Fix" for these.

## 3. "Error de redirección" (Redirect error)
- **Diagnosis**: A redirect error means a URL redirected to a broken page (e.g., a 404), a redirect loop, or an invalid SSL endpoint. 
- **The Fix**: Check the destination of the redirect. If the user fixed a 404 bug on the main site (e.g., dynamic routes failing during SSR), the old redirects to those pages might have been temporarily classified as "Redirect Errors".
- Once the destination page returns `200 OK`, click **"Validar corrección"** (Validate Fix) in GSC. Google will re-crawl it and reclassify it as a harmless "Página con redirección".

## 4. TanStack Router & Vercel Specifics
- **Dynamic Routes**: TanStack file-based routing does NOT support partial segment parameters (e.g., `web-para-$sector.tsx`). This will cause a 404 in production. You must extract the component and generate individual static files (e.g., `web-para-restaurantes.tsx`).
- **WWW to Non-WWW**: Vercel handles this automatically with a 308 redirect if the domains are linked correctly in the Vercel dashboard.
- **Canonical Tags**: Ensure `<link rel="canonical" href="..." />` dynamically injects the exact current URL (minus `www.`) in the root document head. Do not hardcode it to the root domain on every page.
