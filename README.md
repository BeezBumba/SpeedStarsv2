# 🏃 Speed Stars PWA

A fully offline-capable Progressive Web App version of Speed Stars.

## 📁 File Structure

```
speed-stars-pwa/
├── index.html          # Main HTML with PWA support
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline caching
├── unity-2020.js      # Unity WebGL support
├── icon.png           # Original icon
├── icons/             # PWA icons (all sizes)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
└── Build/             # Unity WebGL build files
    ├── Build_v2-40w.loader.js
    ├── b0e5ec181474d494c6ff3c9ad9c3b1bd.js
    ├── fe2a5824416bebe1cc941510618103f9.wasm
    └── 6127fbba3e79cbcada24ba1ffd033f77.data
```

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Log in or create account
3. Drag the entire `speed-stars-pwa` folder to the deploy area
4. Done! You'll get a URL like `random-name.netlify.app`

### Option 2: Git Deploy
1. Create a new repo on GitHub
2. Push this folder to the repo
3. Connect Netlify to your GitHub repo
4. Auto-deploys on every push!

## 📱 Add to Home Screen (iPad/iPhone)

1. Open your Netlify URL in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Name it "Speed Stars" and tap **Add**
5. Play offline anytime! 🎮

## ⚙️ How It Works

- **Service Worker** (`sw.js`) caches all game files on first load
- **Manifest** (`manifest.json`) tells the browser this is an installable app
- **Offline Mode**: Once cached, the game works without internet!

## 🎮 Controls

- **Arrow Keys** (Left/Right): Run - alternate to sprint!
- **Down Arrow**: Hurdle jump / Baton pass
- Keep a steady rhythm for maximum speed!

## 📝 Credits

- **Game Developer**: Luke Doukakis
- **PWA Packaging**: Custom build for offline play

Enjoy racing! 🏆
