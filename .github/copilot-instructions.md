了解しました。
以下は、**あなたが提示した「AI Agent Instructions」**を、これまで提案してきた **推奨フォルダ構成（apps/app-name/privacy/index.html 方式＋ブログ対応）** に合わせて **整合性の取れた形に全面書き換え**したものです。

> 方針
>
> * 既存の思想（静的 / バニラ / MD3 / 日本語 / GitHub Pages）は維持
> * URL設計・拡張性・ストア審査対応を強化
> * 将来アプリ数・ブログ増加にも耐える構成

---

# GitHub Pages Portfolio - AI Agent Instructions（改訂版）

## プロジェクト概要

個人開発のモバイルアプリ（主にiOS）を紹介する静的ポートフォリオサイト。
GitHub Pages 上でホスティングされ、Jekyll 環境に対応した構成を採用する。

本サイトは以下を目的とする：

* 個人ポートフォリオの公開
* 各アプリのランディングページ（LP）
* App Store 対応のプライバシーポリシー・利用規約の提供
* FAQ の公開
* Markdown による技術ブログの運用

---

## アーキテクチャ

### 全体構造（推奨）

```
/
├ index.html                     # ポートフォリオ（トップ）
├ assets/
│ ├ css/
│ │ └ main.css
│ ├ js/
│ │ └ main.js
│ └ images/
│   └ common/
│
├ apps/                           # アプリ単位の情報
│ └ {app-name}/
│   ├ index.html                 # アプリLP
│   ├ privacy/
│   │ └ index.html               # プライバシーポリシー
│   ├ terms/
│   │ └ index.html               # 利用規約
│   ├ faq/
│   │ └ index.html               # FAQ
│   └ assets/
│     └ images/
│       └ screenshots/
│
├ blog/                           # 技術ブログ
│ ├ index.html                   # ブログ一覧
│ └ posts/
│   ├ 2025-01-01-first-post.md
│   ├ 2025-01-10-unity-tips.md
│   └ 2025-02-01-github-pages.md
│
├ 404.html
└ README.md
```

---

## URL設計方針

* ポートフォリオ

  ```
  /
  ```

* アプリLP

  ```
  /apps/{app-name}/
  ```

* プライバシーポリシー

  ```
  /apps/{app-name}/privacy/
  ```

* 利用規約

  ```
  /apps/{app-name}/terms/
  ```

* FAQ

  ```
  /apps/{app-name}/faq/
  ```

* ブログ

  ```
  /blog/
  /blog/{post-slug}
  ```

※ App Store / Google Play 審査を想定し、**すべてフォルダ + index.html 構成**を採用する。

---

## 技術スタック

* **フロントエンド**

  * バニラ HTML / CSS / JavaScript
  * フレームワーク不使用

* **デザインシステム**

  * Material Design 3 カラートークンを CSS 変数で定義

* **ホスティング / デプロイ**

  * GitHub Pages
  * Jekyll（Markdown ブログ対応）

* **言語**

  * 日本語（プライバシーポリシー・利用規約・FAQ 含む）

---

## デザイン規約

### 1. カラーシステム（必須）

すべてのページで Material Design 3 のカラートークンを使用する。

```css
:root {
  --md-sys-color-primary: #6750a4;
  --md-sys-color-surface: #fef7ff;
  --md-sys-color-on-surface: #1c1b1f;
}
```

新規ページ・新規コンポーネントでは **必ず CSS 変数経由で色指定**を行うこと。

---

### 2. レスポンシブデザイン

モバイルファーストを前提とし、以下のブレークポイントを使用する。

```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

### 3. タイポグラフィ

* 英語: Roboto
* 日本語: Noto Sans JP

Google Fonts から CDN 読み込み。

---

## HTML共通仕様

すべてのHTMLページは以下を満たすこと：

* UTF-8 エンコーディング
* viewport 設定
* Google Fonts（Roboto / Noto Sans JP）
* Font Awesome 4.7.0
* Material Design 3 CSS 変数定義
* SEO メタ情報

```html
<meta name="description" content="...">
<meta name="robots" content="noarchive">
<title>ページタイトル</title>
```

---

## ファイル命名規則

### アプリ関連ページ

* アプリLP

  ```
  apps/{app-name}/index.html
  ```

* プライバシーポリシー

  ```
  apps/{app-name}/privacy/index.html
  ```

* 利用規約

  ```
  apps/{app-name}/terms/index.html
  ```

* FAQ

  ```
  apps/{app-name}/faq/index.html
  ```

### アプリアセット

```
apps/{app-name}/assets/images/
```

---

## ポートフォリオ（トップページ）

* 単一ページ構成
* 各アプリの LP へリンク
* アプリカードは以下の構造を使用

```html
<div class="project-card">
  <img src="./apps/{app-name}/assets/images/icon.png"
       alt="{アプリ名}"
       class="project-icon">

  <h3>{アプリ名}</h3>
  <p>{説明文}</p>

  <div class="download-links">
    <a href="{App Store URL}" target="_blank">
      <img src="./assets/images/appstore-badge-jp.svg"
           alt="Download on the App Store">
    </a>
  </div>
</div>
```

---

## ブログ運用（Markdown）

* 記事は `/blog/posts/*.md` に配置
* Jekyll により自動変換
* 技術記事・開発ログ・振り返り用途

例：

```
blog/posts/2025-02-01-github-pages.md
```

---

## 新しいアプリを追加する手順

1. `apps/{app-name}/` を作成
2. 以下を必要に応じて作成

   * `index.html`
   * `privacy/index.html`
   * `terms/index.html`
   * `faq/index.html`
3. アセットを `apps/{app-name}/assets/images/` に配置
4. トップページ `index.html` にプロジェクトカードを追加
5. GitHub に push → 自動デプロイ

---

## ローカルプレビュー

* 直接ブラウザで `index.html` を開く
* または簡易サーバー：

```bash
python -m http.server 8000
```

---

## 注意事項

* npm / ビルドツールは使用しない
* すべて CDN またはローカルファイル
* App Store バッジは **日本語版のみ使用**
* 法的ページは必ず URL が変わらない構成で管理する
* 定期的に内容を見直し、最新の法規制に準拠させること
* ブログ記事は技術的な内容に限定し、個人情報や機密情報を含めないこと
---