## document
- [react_start説明](#react_start説明)

## 環境
Node version v15.12.0
Mac Catalina 10.15.3

## gulp 作業 node ヴァージョン
current: v11.12.0
gulpで使用中　元に戻すときはこちら



## 使用ディレクトリ
webPackReactRoute

## react_start説明
react_startはReact(リアクト)を使うためWebpack(ウェブパック)を設定する方法をまとめたレポジトリ(Repository)です。このレポジトリ(Repository)を作る時作成したブログポストがあります。詳しく内容は下記のリンクを確認してください。

- [WebpackでReactを始める](https://dev-yakuza.github.io/react/start/)

### 使い方
下記のコマンドでreact_startレポジトリ(Repository)をコピー(Clone)します。

```bash
git clone https://github.com/dev-yakuza/react_start.git
```

下記のコマンドで必要なライブラリをインストールします。

```bash
npm install
```

下記のコマンドでWebpack(ウェブパック)開発サーバーを起動します。

```bash
npm start
```

開発サーバーが起動したら、ブラウザを開いて`http://localhost:8080/`に移動したら`Hello World!`が表示されることが確認できます。

開発サーバーを止めて、下記のコマンドでReact(リアクト)プロジェクトをビルドしてみます。

```bash
npm run build
```

ビルドが完了されたら、`./dist/`フォルダが生成されたことが確認できます。


build ページ表示用　サーバー　インストール

```bash
npm install -g serve
```

サーバー立ち上げ

```bash
 serve -s build
```

 ┌──────────────────────────────────────────────────┐
  │                                                  │
  │   Serving!                                       │
  │                                                  │
  │   - Local:            http://localhost:3000      │
  │   - On Your Network:  http://192.168.3.11:3000   │
  │                                                  │
  │   Copied local address to clipboard!             │
  │                                                  │
  └──────────────────────────────────────────────────┘
