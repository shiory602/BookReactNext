## コンポーネントを作る
**コンポーネント**はReactで画面に表示される「部品」のこと
必要なデータ・処理などを１つのオブジェクトにまとめたもの
# 「関数」コンポーネント
表示するエレメントを`return`で返す
JSXの値を`return`で返すだけでOK
```js
function コンポーネント名 ( 引数 ) {
    return JSXによる表示;
}
```
### コンポーネントはダグで書ける
コンポーネントの利用方法にはJSXの中で、タグとして記述するというものがある
関数コンポーネントの場合、定義した関数名を使ってそのままタグとして書く
```js
<コンポーネント名 />
```
このタグの部分に関数で`return`したエレメントが嵌め込まれる
## コンポーネントの表示
1. 関数を定義
```js
function Welcome(props) {
    return <div className="alert alert-primary">
            <p className="h4">Hello React!!</p>
        </div>
}
```
2. JSXで表示する位置を指定
```js
let el = (
    <div>
        <h5 class="mb-4">{message}</h5>
        <Welcome />
    </div>
)
```
3. 描画する
```js
ReactDOM.render(el, dom)
```
### コンポーネントの名前
コンポーネントは必ず「大文字で始まる名前」であること
二文字目以降は大文字小文字は特に関係ない
- NG
`welcome`
- OK
`Welcome`
`WELCOME
## 「属性」を利用する
関数コンポーネントには引数（タグの「属性」をオブジェクトにまとめたもの）が１つ用意される。
- 関数
引数`props`から値を取り出し`<div>`の属性に`className={props.alert}`と設定する
```js
function Welcome(props) {
    return <div className={props.alert}>
            <p className={props.fontSize}>Hello {props.name}!!</p>
        </div>
}
```
- JSXの記述
`Welcome`に`alert`などの値が渡されるようにする
```js
<Welcome name="Taro" fontSize="h2" alert="alert alert-primary" />
<Welcome name="Hanako" fontSize="h5" alert="alert alert-dark" />
```
## コンポーネントで計算する
1. `Calc`コンポーネント関数で`number`というプロパティの値を取り出す
2. 繰り返しを使って１から`number`までの合計を計算する
3. 結果を`return`する
コンポーネントの中にコンポーネントを組み込むことも可能
例：`<Welcome />`の中で`<Calc />`にデータを渡す
```js
function Welcome(props) {
    return <div className="alert alert-primary">
            <Calc classes={props.classes} number={props.number} />
        </div>
}

function Calc(props) {
    let total = 0
    for(let i = 1; i <= props.number; i++) {
        total += i
    }
    return <p className={props.classes}>
        The sum of numbers from 1 to {props.number} is "{total}".</p>
}

let el = (
    <div>
        <Welcome number="10" classes="h3" />
        <Welcome number="100" classes="h5" />
        <Calc number="50" classes="h4" />
        <Calc number="500" classes="h6" />
    </div>
)
ReactDOM.render(el, dom)
```

# クラスコンポーネント
基本形
```js
class クラス名 {
    constructor(props) {
        super(props)
        初期化処理
    }
    // プロパティ
    // メソッド
    メソッド名( 引数 ) {
        メソッドの処理
    }
}
```
### constructorメソッド
クラスからオブジェクトを作成する際に最初に実行され、オブジェクトの初期化を行うメソッド
- 引数は１つだけで、関数コンポーネントの引数と同じく属性の値をオブジェクトにまとめたものが渡される
- `constructorメソッド`の最初には必ず`super(props)`と記述する
    `extends`で継承しているクラスの`constructor`を呼び出すためのもの
## クラスコンポーネントの書き方
Reactにはコンポーネント機能を一通り揃えた`React.Component`というクラスが用意されていて、
自分でコンポーネントを定義する場合は、このクラスを継承して作る。
### renderメソッド
コンポーネントのレンダリングをするメソッドで、コンポーネントクラスでは必ずつける（引数はなく、`return`を持つ）
```js
class Hello extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="alert alert-primary">
                <p className="h4">Hello!!</p>
            </div>
    }
}
```
## 「属性」を利用する
1. クラスコンポーネント内でプロパティを用意する
```js
x = 0
y = 0
width = 0
height = 0
color = "white"
style = {}
```
2. `constructor`メソッドの中で変更できるプロパティを用意
```js
this.x = props.x
this.y = props.y
this.width = props.w
this.height = props.h
this.color = props.c
this.style = {
    backgroundColor: this.color,
    position: "absolute",
    left: this.x + "px",
    top: this.y + "px",
    width: this.width + "px",
    height: this.height + "px"
}
```
3. renderで表示
```js
render() {
    return <div style={this.style}></div>
}
```
4. JSX部分で属性を指定する
```js
let el = (
    <div>
        <h5>{message}</h5>
        <Hello />
        <div>
            <Rect x="200" y="200" w="200" h="200" c="cyan" />
            <Rect x="300" y="300" w="200" h="200" c="magenta" />
        </div>
    </div>
)
```

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