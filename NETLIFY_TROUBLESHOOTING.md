# Netlify Build Troubleshooting

## Common Build Failures and Solutions

### 1. "Couldn't find any pages or app directory"

**Symptoms:**
- Build fails with error about missing pages/app directory
- Netlify can't find your Next.js app

**Solutions:**
- ✅ Verify `src/app/` directory exists (it does)
- ✅ Ensure `package.json` is in the root (it is)
- ✅ Check that `netlify.toml` doesn't have incorrect `base` setting
- ✅ Make sure you're not in a subfolder - if so, update `base` in netlify.toml

### 2. Plugin Installation Issues

**Symptoms:**
- `@netlify/plugin-nextjs` not found
- Plugin installation fails

**Solutions:**
- ✅ Plugin is already in `package.json` dependencies
- ✅ Ensure `npm install` runs before build
- ✅ Check that plugin version is compatible (5.14.5 is good)

### 3. Build Command Failures

**Symptoms:**
- `npm run build` fails
- TypeScript errors
- Module resolution errors

**Solutions:**
- ✅ Build works locally - check Netlify logs for specific errors
- ✅ Ensure Node.js 20 is used (set in netlify.toml)
- ✅ Check for missing dependencies

### 4. Publish Directory Issues

**Symptoms:**
- Build succeeds but deployment fails
- "No files to publish" error

**Solutions:**
- ✅ Don't set `publish` in netlify.toml - let plugin handle it
- ✅ The plugin automatically processes `.next` directory
- ✅ If using static export, configure `output: 'export'` in next.config.ts

## Current Configuration Check

✅ **netlify.toml** - Correctly configured
✅ **package.json** - Plugin installed
✅ **next.config.ts** - Basic config (should work)
✅ **tsconfig.json** - Properly configured
✅ **Build works locally** - Confirmed

## Next Steps

1. **Check Netlify Build Logs:**
   - Go to your Netlify dashboard
   - Click on the failed build
   - Look at the build logs for the specific error

2. **Common Error Patterns:**
   - If you see "Module not found" → Check dependencies
   - If you see "TypeScript errors" → Check tsconfig.json
   - If you see "Plugin error" → Check plugin version
   - If you see "Build timeout" → Increase build timeout in Netlify settings

3. **Manual Netlify Settings:**
   - Base directory: (leave empty - app is in root)
   - Build command: `npm run build`
   - Publish directory: (leave empty - plugin handles it)

## If Build Still Fails

Share the specific error message from Netlify logs, and I can help fix it!

