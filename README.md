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

* **ප්‍රධාන URL එක (Home Page):** [http://localhost:3000/index.html](http://localhost:3000/index.html)
* **ඇදුම් සහ කැටගරි ඇඩ් කරන URL එක:** [http://localhost:3000/add.html](http://localhost:3000/add.html)

### 5. ප්‍රධාන විශේෂාංග
* **Main Entry:** `index.html` හරහා තමයි site එකේ main layout එක පේන්නේ.
* **Adding Products:** `add.html` පිටුව පාවිච්චි කරලා අලුත් කැටගරි සහ භාණ්ඩ ඇතුළත් කරන්න පුළුවන්. ඒ දත්ත `products.json` සහ `categories.json` වල ගබඩා වෙනවා.
* **Customization:** `public` folder එක ඇතුළේ තියෙන HTML, CSS සහ JS files  ඕනෙ විදිහට වෙනස් කරලා UI එක අලුත් කරගන්න පුළුවන්.

## ⚠️ වැදගත් අනතුරු ඇඟවීම (License Warning)
මෙම project එකේ ඇති `LICENSE` file එක කිසිම හේතුවක් මත වෙනස් කරන්න හෝ මැකීමට උත්සාහ කරන්න එපා. බලපත්‍රය වෙනස් කළහොත් සර්වර් එක "License Failed!" ලෙස පෙන්වා ක්‍රියාවිරහිත වනු ඇත.

### 📂 Project Structure එක ගැන කෙටියෙන්
* `server.js`: ප්‍රධාන backend සර්වර් එක.
* `public/`: වෙබ් අඩවියේ UI එකට අදාළ සියලුම files (HTML, CSS, JS).
* `run.bat`: සර්වර් එක ලේසියෙන්ම රන් කරන script එක.


<div align="center">
  <hr>
  <p>
    <b>Developer:</b> 
    <a href="https://github.com/ruk-zh4n">
      <img src="https://github.com/ruk-zh4n.png" width="35" style="border-radius: 50%; vertical-align: middle;" alt="ruk-zh4n">
      ruk-zh4n
    </a>
    &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
    <b>Organization:</b> 
    <a href="https://github.com/Syntiox">
      <img src="https://github.com/Syntiox.png" width="35" style="border-radius: 6px; vertical-align: middle;" alt="Syntiox">
      Syntiox
    </a>
  </p>
  <hr>
</div>

<div align="center">

  ### 🌐 Connect with Syntiox
  
  <a href="mailto:syntiox.official@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Us-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
  <a href="https://www.youtube.com/@sh4lu_z">
    <img src="https://img.shields.io/badge/YouTube-Syntiox-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/>
  </a>
  <a href="YOUR_FACEBOOK_PAGE_LINK_HERE">
    <img src="https://img.shields.io/badge/Facebook-Follow_Us-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"/>
  </a>
  <a href="https://whatsapp.com/channel/0029VbCqPsRC1FuEMz7ICY1o">
  <img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"/>
 </a>

  <sub>© 2026 Syntiox Organization. All Rights Reserved.</sub>

</div>
