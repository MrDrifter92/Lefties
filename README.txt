
Lefties PWA Kit (Add to Home Screen with custom icon)

Files:
- /manifest.webmanifest    PWA manifest
- /apple-touch-icon.png    iOS home screen icon (180x180)
- /icons/icon-*.png        Android/Chrome icons
- /sw.js                   Minimal service worker (optional)
- HEAD-snippet.html        Copy/paste into <head> of your page(s)

How to use with leftiesservices.com.au:
1) Copy manifest.webmanifest, apple-touch-icon.png, sw.js, and the /icons folder to the ROOT of your site.
2) In your HTML (e.g., dashboard.html), inside <head>, paste the contents of HEAD-snippet.html.
3) In manifest.webmanifest, set "start_url" to the page you want to launch, e.g. "/dashboard.html".
4) Commit and push to GitHub. Wait for your site to update.
5) On iPhone Safari: open the page, tap Share, "Add to Home Screen". You will see your logo.
6) On Android Chrome: open the page, menu (⋮), "Install app" or "Add to Home screen".

Notes:
- iOS uses apple-touch-icon.png. It ignores the manifest icon on first install.
- If the icon doesn't change on iOS, remove the old shortcut and add again (iOS caches aggressively).
- Offline is not required. This setup does not cache pages.
