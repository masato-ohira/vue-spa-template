# vue-spa-template

https://masato-ohira.github.io/vue-spa-template/

SPA用のテンプレート

## keywords

gulp, webpack, vue, pug, sass

## 動作環境

Node.jsのインストールが必要です。

https://nodejs.org/ja/

* 開発時バージョン 8.11.2

## 依存モジュールのインストール

```
npm install
```

## 使用方法

#### 開発用サーバの起動

```
npm run dev
```

#### 静的ファイルを全てビルド

```
npm run build
```

## デプロイ

#### git-ftp

git-ftpを利用します。   
詳しい使用方法は公式サイトを参照してください。

```
npm run deploy
```

#### ghpage

npmのpush-dirを利用します。   
予めassetsへのパスをghpage用に変更が必要です。

```
npm run ghpage
```
