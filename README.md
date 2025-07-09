# 百ます計算ジェネレーター

任意の数百ます計算の問題を自動生成し、印刷できる Web アプリケーションです。<br>
教育現場や家庭学習で活用できる計算練習シートを簡単に作成できます。

## 📚 特徴

- **📊 カスタマイズ可能**: 足し算（+）、引き算（−）、掛け算（×）から選択可能
- **🎲 ランダム生成**: 毎回異なる問題パターンを自動生成（1〜9 の数字を使用）
- **📄 印刷最適化**: A4 サイズでの印刷に最適化されたレイアウト
- **🔢 問題数調整**: 1〜100 問まで自由に設定可能
- **📱 レスポンシブ対応**: デスクトップ・タブレット・スマートフォンで利用可能

## 🚀 デモ

[**ライブデモを見る**](https://hundred-calc.vercel.app/)

## 🛠️ 技術スタック

- **Frontend**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI)
- **Build Tool**: Vite
- **Router**: React Router
- **Deployment**: Vercel

## 📋 使用方法

### オンラインで使用

1. [デモサイト](https://kobutaemon.github.io/hundred-calc/)にアクセス
2. 問題数を入力（1〜100）
3. 四則演算を選択（+、−、×）
4. 「生成」ボタンをクリック
5. 生成された問題シートを印刷

### ローカルで実行

#### 前提条件

- Node.js (v18 以上推奨)
- npm

#### インストールと実行

```bash
# リポジトリをクローン
git clone https://github.com/Kobutaemon/hundred-calc.git
cd hundred-calc

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 を開く
```

## 📂 プロジェクト構成

```
hundred-calc/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── calc-icon.png
│   ├── components/
│   │   ├── Arithmetic/      # 四則演算選択コンポーネント
│   │   ├── Footer/          # フッターコンポーネント
│   │   ├── Home/            # ホーム画面コンポーネント
│   │   └── Result/          # 結果表示・印刷コンポーネント
│   ├── App.tsx              # メインアプリケーション
│   ├── main.tsx             # エントリーポイント
│   └── index.css            # グローバルスタイル
├── package.json
├── vite.config.ts
└── README.md
```

## 🖨️ 印刷について

- **用紙サイズ**: A4 推奨

### 報告・提案

- バグ報告: [Issues](https://github.com/Kobutaemon/hundred-calc/issues)
- 機能提案: [Issues](https://github.com/Kobutaemon/hundred-calc/issues)

## 🔗 リンク

- **GitHub**: [https://github.com/Kobutaemon/hundred-calc](https://github.com/Kobutaemon/hundred-calc)
- **ライブデモ**: [https://hundred-calc.vercel.app/](https://hundred-calc.vercel.app/)

---

**開発者**: [@Kobutaemon](https://github.com/Kobutaemon)
