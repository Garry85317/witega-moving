# 威特嘉搬家網站

台中優質平價搬家公司網站

## 安裝與執行

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm start

# 建置生產版本
npm run build
```

## 待補圖片清單

以下位置需要補充圖片：

1. **搬家實例圖片** (`/public/images/`)
   - `129308_0.jpg` - 搬家實例1
   - `129324_0.jpg` - 搬家實例2
   - `129317_0.jpg` - 搬家實例3
   - `129300_0.jpg` - 搬家實例4

請將圖片放置在 `public/images/` 目錄下，然後在 `src/components/MovingExamples.js` 中取消註解圖片標籤。

## 專案結構

```
搬運公司/
├── public/
│   ├── index.html
│   └── images/          # TODO: 放置圖片於此
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── ServiceFeatures.js
│   │   ├── MovingExamples.js  # TODO: 圖片待補
│   │   ├── CustomerReviews.js
│   │   ├── ServiceItems.js
│   │   ├── Pricing.js
│   │   ├── MovingSteps.js
│   │   ├── FAQ.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

