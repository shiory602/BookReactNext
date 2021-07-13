# Contents
1. Routing functions. The ability to create and use multiple pages. 2.
2. Built-in CSS, about the different ways to incorporate style sheets. 3.
3. Creating an API. How to access the server and get the data you need. 4.
4. SWR, a module that handles data retrieved from the server as state.

# Next.js.
> React is a "display mechanism using components", and there is no specific yesterday other than components.
> - When you want to create multiple pages.
> - When you want to get data from the server and use it as state
> - When you want to get data from the server and use it as state. A typical example is `Next.js`.
**Next.js** is a package that integrates various libraries into React.
By simply executing the prepared commands, you can create a project with everything set up and start developing right away.
[Next.js official website](https://nextjs.org)
## Create a Next.js project.
### Run the `npx` command in Terminal.
```
npx create-next-app next_app
```
↓
If you see the following, you have succeeded
> Success! Created next_app at ....

### Perform basic operations on the created project.
- Start the development server and run the app.
```
npm run dev
run dev
```
- Build the app and generate the finished app.
```
npm run build
```
- Run the finished app and check it works
```
npm start
```

## Project structure
- Folders

| folder name | contents |
| --- | --- |
| .next | This folder is created when you run the project, not when you create it. The files of the web app generated from the project are saved in this folder. |
| node_modules | This folder contains the npm packages required by the project. |
| pages | Contains the contents of the web pages to be displayed. |
| public | A list of resources (image files, etc.) to be made public. |
| styles | Contains style sheet files. |

- Files

| file name | contents |
| --- | --- |
| gitignore | files for the Git version control system |
| package-lock.json | file used to manage packages with npm |
| package.json | file containing information about the packages used in the project |
| README.md | readme file |
| yarn.lock | created when yarn is installed. |

Mainly used for `pages`, `public`, and `styles` folders, and the `package.json` file.
Next.js is made entirely in JavaScript, and there is no HTML (`index.html`) file.


# Specific features of Next.js.
## SSG and SSR support
React uses a method called CSR (Client Side Rendering: generating the display on the web browser side), which uses JavaScript on the web browser side to generate the display. By using **SSG** and **SSR**, you can create and display all of these on the server side.
### SSG(Static Site Generator)
This is a function to output a project as a static site (with all necessary processing and data prepared in HTML base).
### SSR(Server Side Rendering)
A function that renders the entire display on the server side.

## File system routing functionality
"Routing" refers to assigning a page to each path of an address to be accessed.
React is basically designed with the creation of SPA (Single Page Application: a web application that is complete with only one page) in mind.
> Next.js makes it easy to combine multiple pages to create a web app.

## API routes and hooks
When acquiring the data required by a web app from a server, an API for delivering the data is implemented, and the data is acquired by network access to it from the client side.
> Next.js makes it easy to create APIs, and also allows data to be exchanged with APIs using dedicated hooks.

## Zero-configuration apps
In many frameworks and libraries, configuration files are prepared for detailed settings, which are then read in to configure the application.
> Next.js does not use a configuration file, but instead allows the necessary settings to be made in the JavaScript script.

## Other
- Features for Internationalization
- Build-in CSS support
- Optimized image components Translated with www.DeepL.com/Translator (free version)

***

# 目次
1. ルーティング機能。複数のページを作成し利用する機能について。
2. ビルトインCSS。スタイルシートのさまざまな組み込み方について。
3. APIの作成。サーバーにアクセスし、必要なデータを取得する方法について。
4. SWR。サーバーから取得したデータをステートとして扱うモジュール。

# Next.js
> Reactは「コンポーネントを使って表示する仕組み」であり、コンポーネント以外の昨日は特に用意されていない。
> - 複数ページを作りたい時
> - サーバーからデータを取得してステートとして使いたい場合
> 上記のような場合は拡張機能を使う。その代表的なものが`Next.js`
**Next.js**はReactに各種のライブラリなどを統合し、パッケージ化したもの
用意されたコマンドを実行するだけで、全てをセットアップされた状態でプロジェクトを作成し、すぐに開発に入れる。
[Next.js公式サイト](https://nextjs.org)
## Next.jsプロジェクトの作成
### ターミナルで`npx`コマンドを実行
```
npx create-next-app next_app
```
↓
下記のように表示されたら成功
> Success! Created next_app at ....

### 作成したプロジェクトの基本操作を行う
- 開発用サーバーを起動してアプリを実行
```
npm run dev
```
- アプリをビルドし完成アプリを生成
```
npm run build
```
- 完成アプリを起動して動作チェック
```
npm start
```

## プロジェクトの構成
- フォルダ類

| フォルダ名 | 内容 |
| --- | --- |
| .next | プロジェクト作成位はなく、実行すると生成される。この中に、プロジェクトから生成されたWebアプリのファイル類が保存される。 |
| node_modules | プロジェクトで必要なnpmのパッケージがまとめられている。 |
| pages | 表示するWebページの内容がまとめられている。 |
| public | 公開されるリソース類（イメージファイルなど）がまとめられている。 |
| styles | スタイルシートファイルがまとめられている。 |

- ファイル類

| ファイル名 | 内容 |
| --- | --- |
| gitignore | Gitというバージョン管理システムのためのファイル |
| package-lock.json | npmでパッケージ管理するために使われるファイル |
| package.json | プロジェクトで使うパッケージなどの情報が記述されたファイル |
| README.md | リードミーファイル |
| yarn.lock | yarnがインストールされている場合に作成される |

主に使うのは`pages`, `public`, `styles`の３つのフォルダと `package.json`ファイル
※ Next.jsでは全てJavaScriptで作られており、HTML（`index.html`）ファイルはない。


# Next.jsの具体的な機能
## SSG と SSR の対応
Reactは、CSR(Client Side Rendering：Webブラウザ側で表示を生成する)と呼ばれる方式を採用しており、Webブラウザの側でJavaScriptを使って表示を生成する。これを**SSG**と**SSR**を使うと全部サーバー側で作って表示するようにできる。
### SSG(Static Site Generator)
プロジェクトを静的サイト（必要な処理やデータを全てHTMLベースで用意してあるもの）として出力する機能のこと
### SSR(Server Side Rendering)
サーバー側で表示を全てレンダリングしたものを表示する機能

## ファイルシステム・ルーティング機能
「ルーティング」は、アクセスするアドレスのパスごとページを割り当てること。
Reactは、基本的にSPA(Single Page Application：１枚のページだけで完結するWebアプリ)の作成を考えて設計されている。
> Next.jsを利用することで複数のページを組み合わせてWebアプリを作ることが簡単になる。

## APIルートとフック
Webアプリで必要なデータをサーバーから取得する場合、データを配信するAPIを実装し、それにクライアント側からネットワークアクセスしてデータを取得する。
> Next.jsでは、APIを簡単に作成でき、しかも専用のフックを使ってAPIとデータをやりとりできる。

## ゼロ設定アプリ
多くのフレームワークやライブラリでは、細々とした設定を行うために設定ファイルを用意し、それを読み込んでアプリの設定を行うようになっている。
> Next.jsでは設定ファイルは使わず、代わりにJavaScriptのスクリプト内で必要な設定などがおこなるようになっている。

## その他
- 国際化のための機能
- ビルドインCSSのサポート
- イメージコンポーネントの最適化