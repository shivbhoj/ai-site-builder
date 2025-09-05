# Aetherstack AI Site Builder

AI-powered, no-code site & app builder.  
Describe your site, get instant code & preview, deploy in one click.

## Features

- Chat-based UI to describe your site/app
- AI generates HTML/CSS/JS instantly
- Live preview window
- Deploy to Firebase Hosting

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   cd functions && npm install
   ```

2. **Configure Firebase:**
   - Install Firebase CLI: `npm install -g firebase-tools`
   - Run: `firebase login`
   - Initialize: `firebase init` (choose Hosting + Functions)
   - Update `.firebaserc` with your project ID.

3. **OpenAI API Key:**
   - Add your API key in `functions/index.js` (`YOUR_OPENAI_API_KEY`).

4. **Run locally:**
   ```bash
   npm start
   firebase emulators:start
   ```

5. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Customization

- Use Gemini API instead of OpenAI by changing the backend function.
- Add more deployment options.
- Enhance frontend for multi-page site generation.

---

## License

MIT
