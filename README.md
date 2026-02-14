# 💝 Simple Valentine's Day Web App

A simple Valentine's Day website built with HTML, CSS, and JavaScript.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://happpy-valentineee.netlify.app/)
[![Netlify Status](https://img.shields.io/badge/netlify-deployed-00C7B7)](https://www.netlify.com/)

## 📖 Overview

The website features :
- An interactive yes/no button interface
- Playful messages that make clicking "no" progressively harder
- Form submission handling via Formspree
- A celebration page upon saying "yes"
- Analytics tracking with Google Analytics


### Index Page
![Index Page](img/Index%20page.png)

### Response Page
![Response Page](img/Response%20page.png)

**Note:** live demo link is currently inactive to prevent inbox saturation from form submissions.


## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5.3.3
- **Form Handling**: Formspree
- **Analytics**: Google Analytics
- **Deployment**: Netlify

## 📁 Project Structure

```
SimpleValentineWebApp/
├── img/
│   ├── giphy.gif           #main animated GIF
│   ├── giphy2.gif          #success page GIF
│   └── love_icon.jpg       #favicon
├── index.html              #main landing page
├── index2.html             #success/celebration page
├── script.js               #main page interactions
├── script2.js              #success page form handling
└── style.css               #custom styles (if any)
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Omega-Hopkin/SimpleValentineWebApp.git
   cd SimpleValentineWebApp
   ```

2. **Configure Formspree**
   - Sign up at [Formspree](https://formspree.io/)
   - Create a new form and get your form endpoint
   - Replace `https://formspree.io/f/xanqdklr` in both `index.html` and `script.js` with your endpoint

3. **Configure Google Analytics (Optional)**
   - Create a GA4 property
   - Replace `G-RJRJBVNSWQ` in both HTML files with your Measurement ID

4. **Add Your Images**
   - Place your GIF images in the `img/` folder
   - Update image references if using different filenames

5. **Open Locally**
   - Simply open `index.html` in your browser
   - Or use a local server :
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Deploy!

Your site will be live at `https://ur-site-name.netlify.app/`

## 🎨 Customization

### Modify Button Messages

Edit the messages array in `script.js`:
```javascript
const messages = ["Are you sure?", "Pretty sure?", "Are you positive?", "Pookie please"];
```
  

## 💡 Story Behind This

Created with for a dear Twitter moot on Valentine's Day 2025. 

---

**Made with ❤️ for Valentine's Day**

*"Show some love to that special person today, no matter the bond you're sharing with. — Omega Hopkin"*
