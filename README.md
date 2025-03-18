# 🟨 JS webpack Template

This is a simple Webpack setup for modern JavaScript projects. It includes support for HTML, CSS, and image assets, making it easy to start building applications without complex configurations.

## 📌 Features
✅ Webpack setup for bundling JavaScript  
✅ Supports CSS imports with automatic injection  
✅ Handles images (PNG, JPG, SVG, GIF)  
✅ Development server with live reloading  
✅ Production-ready build setup  

---

## 🛠️ Getting Started

### **1 Clone this repository**
If you don't have Git installed, you can just download the ZIP. Otherwise, clone it using:

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2 Install Dependencies**
Run the following command to install all required modules:<br>
This will install Webpack, Webpack Dev Server, and other necessary plugins.

```sh
npm install
```

### **3 Start Development Mode**
To start a local development server with live reloading, run:<br>
This will:<br>
  - Open http://localhost:8080 in your browser
  - Automatically reload when you save changes

```sh
npm start
```

### **4 How to Add CSS**
You can create a CSS file inside src/ and import it into index.js like this:<br>
The styles will be automatically injected into the page.

```sh
import './style.css';
```

### **5 How to Add Images**
You can place images inside src/ and import them in JavaScript:<br>
Example:

```js
import myImage from './my-image.png';

const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);
```

### **6 Build for Production**
To create an optimized build for deployment, run:<br>
This will generate a dist/ folder with minified files.

```sh
npm run build
```

---

### **📂 Folder Structure**

```
your-repo/
│── src/
│   ├── index.js       # Main JavaScript file
│   ├── style.css      # Main CSS file
│   ├── index.html     # Main HTML file
│   ├── assets/        # Store images here
│
│── dist/              # Production build (generated)
│── package.json       # Project configuration
│── webpack.common.js  # Webpack base config
│── webpack.dev.js     # Webpack development config
│── webpack.prod.js    # Webpack production config
│── .gitignore         # Ignore node_modules and build files
```
