# Netlify Deployment Guide

## Current Repository Structure

Based on the current structure, your Next.js app is in the **root directory**, not in a subfolder.

- ✅ `package.json` is in the root
- ✅ `src/app/` contains your App Router pages
- ✅ `next.config.ts` is in the root

## If Your App IS in a Subfolder

If you're planning to move your app to a subfolder (e.g., `frontend/`), you'll need to:

1. **Update `netlify.toml`** - Uncomment the subfolder configuration at the bottom
2. **Ensure the subfolder has:**
   - `package.json`
   - `next.config.ts` or `next.config.js`
   - `src/app/` or `app/` directory (for App Router)
   - `tsconfig.json` (if using TypeScript)

## Important Notes

### Publish Directory
- **DO NOT** set `publish = ".next"` - `.next` is the build cache, not the output
- The `@netlify/plugin-nextjs` plugin handles the publish directory automatically
- If you need static export, configure `output: 'export'` in `next.config.ts` and use `publish = "out"`

### Build Process
1. Netlify runs `npm run build` (or your custom command)
2. Next.js builds to `.next/` directory
3. The Netlify plugin processes `.next/` and creates the deployment
4. No manual publish directory configuration needed

### Common Issues

**Issue: "Couldn't find any pages or app directory"**
- **Cause:** Netlify is looking in the wrong directory
- **Solution:** 
  - If app is in root: Make sure `netlify.toml` doesn't have `base` set
  - If app is in subfolder: Set `base = "your-subfolder-name"` in `netlify.toml`

**Issue: Build fails with module errors**
- **Cause:** Dependencies not installed in the correct directory
- **Solution:** Ensure `package.json` is in the same directory as your Next.js app

## Deployment Steps

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will auto-detect the `netlify.toml` file
4. The build should work automatically

## Manual Configuration (if needed)

If auto-detection doesn't work, in Netlify dashboard:
- **Base directory:** Leave empty (or set to subfolder if applicable)
- **Build command:** `npm run build` (or `cd frontend && npm run build` for subfolder)
- **Publish directory:** Leave empty (plugin handles it)

