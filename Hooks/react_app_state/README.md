# State hooks
A state is a special value that holds a value in a component and updates the display when that value is updated
## How to use state hooks
```js
const [ variable A, variable B ] = useState( initial value )
```

| variable A | variable B |
| --- | --- |
| value of current state | function to change the value of the state |

The value of the state is changed by calling variable B with an argument.

### return value of useState
In JavaScript, it is possible to create functions that return multiple values.
This is called **split assignment**.
In this case, an array of variables is used to assign the return value.

# Display the state 1.
1. create a state
```js
const [message] = useState("Welcome to Hooks!")
```
2. embed and display in JSX
```js
<p className="h5">{message}</p>
```


# Counting numbers with states
Prepare a state.
```js
const [count, setCount] = useState(0)
```
2. Prepare a function to change the state.
```js
const clickFunc = () => {
    setCount(count + 1)
}
```
3. Display the state
```js
<p className="h5 mb-3">click: {count} times!</p>
```
4. Prepare a process to change the value on click.
```js
<div><button className="btn btn-primary" onClick={clickFunc}>
    Click me
</button></div>
```
## Use function components.
You can also pass attributes by using `props`.
- Incorporating components into components
Create a component
```js
function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    {props.message}
  </div>
}

function CardMessage(props) {
  return <div className="card p-3 h5 border-primary text-center">
    {props.message}
  </div>
}
```
2. embedding components in JSX
```js
function App() {
  const [msg] = useState("This is a sample message!")

  return (
    <div> <h1
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
      </div> </div
    </div>.
  );
}
```
- You can also change the display by passing the updated state
Change the `App` component in the above code
```js
function App() {
  const [msg, setMsg] = useState("This is a sample message!")

  const doAction = () => {
    let res = window.prompt('type your name:')
    setMsg("Hello, " + res + "!!!")
  }

  return (
    <div
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me!
          </button>.
        </div>
      </div>
    </div>.
  );
}
```
- Manipulating state values from child components
Declare the state in the parent component `App.js`.
```js
const [alert, setAlert] = useState("This is alert message!")
const [card, setCard] = useState("This is card message!")
```
Passing to child components prepared in JSX
```js
<AlertMessage alert={alert} setAlert={setAlert} />
<CardMessage card={card} setCard={setCard} />
```
Manipulating state in each component
```js
function AlertMessage(props) {
  const data = ["Hello!", "Welcome..." , "Good-bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]]
    props.setAlert('message: "' + re + '"."')
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">
      Click me!
    </button>.
  </div>
}

function CardMessage(props) {
  const [count, setCount] = useState(0)

  const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
  }

  return <div className="card p-3 h5 border-primary text-center">
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">
      Click me!
    </button>.
  </div>
}
```
### Component variables disappear.
Shouldn't we use the `const` state for counting numbers?
1. change state to `let
```js
const [count, setCount] = useState(0)
```
↓
```js
let count = 0
```
2. Change the function for events
```js
const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
}
```
↓
```js
const actionCard = () => {
    count++.
    props.setCard("card counter: " + count + " count.")
}
```
Result: The function component does not hold any state, so it will not be counted.


***


# ステートフック
ステートとは、値をコンポーネント内で保持し、その値を更新することで表示も更新できる特別な値
## ステートフックの使い方
```js
const [ 変数A, 変数B ] = useState( 初期値 )
```

| 変数A | 変数B |
| --- | --- |
| 現在のステートの値 | ステートの値を変更する関数 |

変数Bに引数をつけて呼び出すことでステートの値が変更される。

### useStateの戻り値
JavaScriptでは、複数の値を返す関数を作成できる。
これを**分割代入**という。
ここでは、戻り値を代入する変数を配列にしたものが使われる。

# ステートを表示する
1. ステートを作成
```js
const [message] = useState("Welcome to Hooks!")
```
2. JSX内に埋め込んで表示
```js
<p className="h5">{message}</p>
```


# ステートで数字をカウント
1. ステートを用意
```js
const [count, setCount] = useState(0)
```
2. ステートを変更する関数を用意
```js
const clickFunc = () => {
    setCount(count + 1)
}
```
3. ステートを表示
```js
<p className="h5 mb-3">click: {count} times!</p>
```
4. クリックで値の変更を行う処理を用意
```js
<div><button className="btn btn-primary" onClick={clickFunc}>
    Click me
</button></div>
```
## 関数コンポーネントを使う
`props`を使うことで属性を渡すことも可能
- コンポーネントにコンポーネントを組み込む
1. コンポーネントを作成する
```js
function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    {props.message}
  </div>
}

function CardMessage(props) {
  return <div className="card p-3 h5 border-primary text-center">
    {props.message}
  </div>
}
```
2. JSXにコンポーネントを埋め込む
```js
function App() {
  const [msg] = useState("This is sample message!")

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
      </div>
    </div>
  );
}
```
- 更新したステートを渡すことで表示も変更できる
上記コードの`App`コンポーネントを変更
```js
function App() {
  const [msg, setMsg] = useState("This is sample message!")

  const doAction = () => {
    let res = window.prompt('type your name:')
    setMsg("Hello, " + res + "!!")
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
}
```
- 子コンポーネントからステートの値を操作する
1. 親コンポーネント`App.js`の中でステートを宣言する
```js
const [alert, setAlert] = useState("This is alert message!")
const [card, setCard] = useState("This is card message!")
```
2. JSXに用意した子コンポーネントに渡す
```js
<AlertMessage alert={alert} setAlert={setAlert} />
<CardMessage card={card} setCard={setCard} />
```
3. それぞれのコンポーネントでステートを操作する
```js
function AlertMessage(props) {
  const data = ["Hello!", "Welcome...", "Good-bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert('message: "' + re + '".')
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">
      Click me!
    </button>
  </div>
}

function CardMessage(props) {
  const [count, setCount] = useState(0)

  const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
  }

  return <div className="card p-3 h5 border-primary text-center">
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">
      Click me!
    </button>
  </div>
}
```
### コンポーネントの変数は消える
数字のカウントに`const`ステートを使用しなくとも良いのではないか？
1. ステートを`let`に変更
```js
const [count, setCount] = useState(0)
```
↓
```js
let count = 0
```
2. イベント用関数の変更
```js
const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
}
```
↓
```js
const actionCard = () => {
    count++
    props.setCard("card counter: " + count + " count.")
}
```
結果：関数コンポーネントは、状態を保持しないためカウントはされない