# Shop Project - Seller Center & E-Commerce 

මේක shopping site එකක backend සහ frontend එක එකතු කරලා හදපු project එකක්. මේක local machine එකක run කරලා අවශ්‍ය විදිහට test කරන්න පුළුවන්.

### 1. Node.js ඉන්ස්ටල් කරගන්නා ආකාරය
මේ project එක run කරන්න ඔයාගේ පරිගණකයේ Node.js තියෙන්නම ඕනේ.
1. [nodejs.org](https://nodejs.org/) වෙබ් අඩවියට යන්න.
2. එතන තියෙන **LTS (Recommended for most users)** කියන version එක download කරලා install කරගන්න.
3. ඉන්ස්ටල් වුණාද බලන්න terminal එකේ `node -v` කමාන්ඩ් එක ගහලා බලන්න.

### 2. අවශ්‍ය Packages Setup කිරීම
Project එකට අවශ්‍ය dependencies (Express, Multer, Cors වගේ දේවල්) මුලින්ම ඉන්ස්ටල් කරගන්න ඕනේ. ඒ සඳහා අදාල ෆොල්ඩර් එකෙ රයිට් ක්ලික් කර terminal එක ඔපන් කර මේ පහත තැන පාවිච්චි කරන්න:
```bash
npm install express multer cors body-parser
```

### 3. සර්වර් එක ආරම්භ කිරීම (Running the Server)
සර්වර් එක start කරන්න ක්‍රම දෙකක් තියෙනවා:
* **CMD හරහා:** Terminal එකේ `node server.js` ලෙස type කරන්න.
* **Shortcut එක හරහා:** Folder එකේ තියෙන **run.bat** file එක double-click කරන්න.

### 4. වෙබ් අඩවියට පිවිසීම (Accessing the Site)
සර්වර් එක සාර්ථකව start වුණාම, ඔයාගේ browser එකේ පහත URLs පාවිච්චි කරන්න පුළුවන්:

* **ප්‍රධාන පිටුව (Home Page):** [http://localhost:3000/index.html](http://localhost:3000/index.html)
* **බාන්ඩ සහ කැටගරි ඇඩ් කරන පිටුව:** [http://localhost:3000/add.html](http://localhost:3000/add.html)

### 5. ප්‍රධාන විශේෂාංග
* **Main Entry:** `index.html` හරහා තමයි site එකේ main layout එක පේන්නේ.
* **Adding Products:** `add.html` පිටුව පාවිච්චි කරලා අලුත් කැටගරි සහ භාණ්ඩ ඇතුළත් කරන්න පුළුවන්. ඒ දත්ත `products.json` සහ `categories.json` වල ගබඩා වෙනවා.
* **Customization:** `public` folder එක ඇතුළේ තියෙන HTML, CSS සහ JS files  ඕනෙ විදිහට වෙනස් කරලා UI එක අලුත් කරගන්න පුළුවන්.

## ⚠️ වැදගත් අනතුරු ඇඟවීම (License Warning)
මෙම project එකේ ඇති `LICENSE` file එක කිසිම හේතුවක් මත වෙනස් කරන්න හෝ මැකීමට උත්සාහ කරන්න එපා. `server.js` එක ඇතුළේ මෙම file එකේ integrity එක check කරන code එකක් ඇතුළත් කර තිබෙනවා. බලපත්‍රය වෙනස් කළහොත් සර්වර් එක "License Failed!" ලෙස පෙන්වා ක්‍රියාවිරහිත වනු ඇත.

### 📂 Project Structure එක ගැන කෙටියෙන්
* `server.js`: ප්‍රධාන backend සර්වර් එක.
* `public/`: වෙබ් අඩවියේ UI එකට අදාළ සියලුම files (HTML, CSS, JS).
* `run.bat`: සර්වර් එක ලේසියෙන්ම රන් කරන script එක.

  
