📅 iPhone Calendar

A JavaScript + PWA-based iPhone-style calendar application

This project enhances the iPhone event calendar, providing a direct user interface for schedule management, offline support, and PWA installation.

📌 Project Screenshots (To Be Updated with Actual Images)

✨ Key Features

✅ 📆 Calendar Display
 • Automatically displays the current month
 • Navigate to the previous or next month
 • Today’s date is highlighted in blue
 • Selected date is highlighted in gold

✅ 📌 Schedule Management
 • Add Events: Enter event name, date, time, and repeat days
 • View Events: Select a date to view scheduled events
 • Delete Events: Remove individual events

✅ 🛠️ PWA Support
 • Installable on mobile & desktop, works like an app
 • Offline mode support via Service Worker
 • Preloads static files for fast access, even without internet

✅ 📂 Local Storage
 • Event data is stored in LocalStorage
 • Users can reopen the app and see previously saved events

🛠️ Technology Stack

Technology Purpose
HTML5 Page structure
CSS3 + Grid Layout iPhone-style UI design
JavaScript (ES6) Calendar interactivity
LocalStorage Event data storage
Service Worker Enables PWA & offline use
Manifest.json Allows installation as a PWA app

💻 Installation & Usage

1️⃣ Clone the Repository

git clone https://github.com/AshleyHdev/iphone-calendar-clone.git  
cd iphone-calendar-clone  

2️⃣ Start a Local Static Server (For Testing)

Quickly launch using Python:

python -m http.server 8000  

Then, open your browser and visit:
http://127.0.0.1:8000/index.html

📲 How to Install as a PWA

📌 Install on Mobile or Desktop
 1. Open the web page in Google Chrome / Edge / Safari
 2. Click the “Install” button or “Add to Home Screen”
 3. The app will be installed and can be launched directly from the home screen

📌 Project Structure

iphone-calendar-clone/
│── index.html            # Calendar homepage  
│── style.css             # UI styles  
│── script.js             # Core functionality (Calendar + Event Management)  
│── manifest.json         # PWA configuration  
│── service-worker.js     # Service Worker for offline support  

🚀 Future Enhancements

🔹 Cloud Sync: Support for Firebase or Google Calendar API
🔹 Push Notifications: Send reminders when an event is due
🔹 UI Improvements: Enhance animations and user experience

📅 iPhone 行事曆

基於 JavaScript + PWA 的 iPhone 風格行事曆應用

本專案模仿 iPhone 行事曆，提供直覺的操作介面，支援行程管理、離線使用，並可安裝為 PWA 應用。這是一個全前端專案，不依賴後端，行程儲存於 LocalStorage。

📌 即將新增專案截圖（可替換成實際圖片）

✨ 主要功能

✅ 📆 行事曆顯示
 • 自動顯示當前月份
 • 可切換 上一個 / 下一個 月份
 • 今日日期標記 藍色
 • 選擇的日期標記 金色

✅ 📌 行程管理
 • 新增行程：可輸入名稱、日期、時間、重複天數
 • 顯示行程：篩選選定日期的行程
 • 刪除行程：可單獨刪除行程

✅ 🛠️ PWA 支援
 • 可 安裝到手機/桌面，像 App 一樣使用
 • 支援離線模式（透過 Service Worker）
 • 自動快取靜態檔案，即使沒網路也能使用

✅ 📂 本地儲存
 • 行程資料儲存在 LocalStorage
 • 使用者重新開啟時，仍可查看已儲存行程

🛠️ 技術架構
 • HTML5 - 建立頁面結構
 • CSS3 + Grid Layout - 美觀的 iPhone 風格介面
 • JavaScript (ES6) - 行事曆互動功能
 • LocalStorage - 儲存行程數據
 • Service Worker - 讓應用支援 PWA / 離線使用
 • Manifest.json - 讓應用可 安裝為 PWA

💻 安裝與使用

1️⃣ 下載專案

git clone https://github.com/AshleyHdev/iphone-calendar-clone.git
cd iphone-calendar-clone

2️⃣ 啟動靜態伺服器（本機測試）

可以使用 Python 快速啟動：

python -m http.server 8000

然後打開瀏覽器訪問：

http://127.0.0.1:8000/index.html

📲 如何安裝 PWA

📌 在手機或桌面安裝
 1. 在 Google Chrome / Edge / Safari 打開網頁
 2. 點擊 「安裝」 按鈕或 加入主畫面
 3. 應用將安裝在 手機 / 電腦，可直接打開使用

📌 檔案結構

iphone-calendar-clone/
│── index.html        # 行事曆主頁面
│── style.css         # 介面樣式
│── script.js         # 核心功能（行事曆 + 行程管理）
│── manifest.json     # PWA 設定檔
│── service-worker.js # PWA 離線功能
└── icons/            # PWA 應用圖示

🚀 未來擴展計畫

🔹 雲端同步：支援 Firebase 或 Google Calendar API
🔹 通知提醒：行程時間到時發送通知
🔹 更多 UI 優化：改善介面動畫與使用者體驗

📩 聯絡資訊

如果有任何問題或建議，請聯絡 📧 ashleyh.dev@gmail.com 🚀
