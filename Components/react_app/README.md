# Components in a project
1. `index.html` is loaded when accessed
2. When `index.html` is loaded, `index.js` is loaded and executed.
3. app component is loaded and displayed in `index.js`.
### Files related to what is displayed on the screen
- In **public** folder
| file name | contents |
| --- | --- |
| index.html | This is the HTML file that is displayed when accessing the site. This is the HTML file that is displayed when you access the site. In this file, the basic elements related to the screen display are summarized. |

- **src** folder
| file name |
| --- | --- |
| index.js | Script that serves as the paste for the application |
| index.css | Style sheet used in index.js |
| App.js | Component that is embedded in index and is actually displayed on the screen |
| App.css | Style sheet for App component |
## index.html
`<noscript>` is what is displayed when the environment does not allow JavaScript to work.
`<div id="root"></div>` is a tag to incorporate React's display
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
There is no `<script>` tag because the process of embedding and executing `index.js` is done behind the scenes when the server program is accessed.
Also, React's CDN is built into the project, so there is no need to prepare tags.
When using Bootstrap, etc., put the tag in the `<head>` of `index.html`.
## index.js
Loaded and executed from `index.html`.
The part that displays React (you can remove `<React.StrictMode>`)
```js
import React from 'react'; // React object
import ReactDOM from 'react-dom'; // ReactDOM object
import '. /index.css'; // Style class from index.css
import App from '. /App'; // App component from App.js
import reportWebVitals from '. /reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// To analyze the performance of the app
reportWebVitals();
```
## App component
The component that is actually displayed on the screen
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
Class component↓
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
Load `React` and `Component` with `import`.
(`Component` is the `React.Component` that was `extended` in the component class)
### export and import
- Export and import
(`Component` is the `React.Component` that we `extended` in the component class) ### export and import export Make this App available by default when we import it with `import`.
- import
Import what you `export` in the component.
### Use of attributes.
Take the values `title` and `message` from the `props` argument of `constructor` and set them to properties.
```js
constructor(props) {
super()
this.title = props.title
this.message = props.message
}
```
Print `this.title` and `this.message` by `render`
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


***

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