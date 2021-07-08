# プロジェクトでのコンポーネント
1. アクセスすると index.html が読み込まれる
2. index.html を読み込む際、index.js が読み込まれ実行される
3. index.js の中で App コンポーネントが読み込まれ表示される
### 画面に表示される内容に関するファイル
- **public**フォルダ内
| ファイル名 | 内容 |
| --- | --- |
| index.html | これがアクセス時に表示されるHTMLファイル。この中に、画面表示に関する基本的な要素がまとめてある。 |

- **src**フォルダ
| ファイル名 | 内容 |
| --- | --- |
| index.js | アプリケーションのペーストなるスクリプト |
| index.css | index.jsで使用するスタイルシート |
| App.js | indexに組み込まれる、実際に画面に表示をしているコンポーネント |
| App.css | Appコンポーネントのスタイルシート |

## index.html
`<noscript>`は、JavaScriptが動作しない環境の時に表示されるもの
`<div id="root"></div>`はReactの表示を組み込むためのタグ
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
サーバープログラムにアクセスがあった時に`index.js`を組み込んで実行する処理が背後で行われるので`<script>`タグはない
また、ReactのCDNはプロジェクトの中に組み込まれているのでタグを用意する必要はない
Bootstrapなどを使うときはタグを`index.html`の`<head>`内に記述する
## index.js
`index.html`から読み込まれて実行される
Reactの表示を行なっている部分（`<React.StrictMode>`は削除しても問題ない）
```js
import React from 'react'; // Reactオブジェクト
import ReactDOM from 'react-dom'; // ReactDOMオブジェクト
import './index.css'; // index.cssによるスタイルクラス
import App from './App'; // App.jsによるAppコンポーネント
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// アプリのパフォーマンスを分析するためのもの
reportWebVitals();
```
## App コンポーネント
実際に画面に表示されているコンポーネント
```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
クラスコンポーネントに書き換えると↓
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                ...
            </div>
        );
    }
}

export default App;
```
`import`で`React`と`Component`を読み込む
（`Component`はコンポーネントクラスで`extends`していた`React.Component`のこと）
### export と import
- export
`import`でこれをインポートしたときに、このAppがデフォルトで取り出せるようにする
- import
コンポーネント側で`export`したものをインポートする
### 属性の利用
`constructor`の引数`props`から`title`と`message`という値を取り出し、プロパティに設定
```js
constructor(props) {
super()
this.title = props.title
this.message = props.message
}
```
`render`で、`this.title`と`this.message`を表示する
```js
render() {
return <div>
    <h1 className="bg-primary text-while display-4">React</h1>
    <div className="container">
        <p className="subtitle">{this.title}</p>
        <p>{this.message}</p>
    </div>
    </div>
}
```