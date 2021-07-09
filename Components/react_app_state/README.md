# State
 Changing the properties will not change the display of the component.
 If you change a variable or property used for display, you need to call `ReactDOM.render` to update the display further.
 However, if you use states, the display will be updated automatically just by changing the value.

### Properties
Used to store values in a class.
They are used not only for components but for classes in general.

### Attributes (props)
Used to store a set of attributes for a component.
They are used to store a set of attributes of a component, and are basically "read only", meaning that they can only be retrieved and not modified.

### State.
A complement of values representing the state of the component.
It is used to handle the "current state" of a component.
You can manipulate the state of a component by manipulating the value of the state.

## Displaying states
Initializing values with `constructor` in `App.js`.
```js
this.state = { ... Prepare the value... }
```
1. Prepare the value of the state `msg` in `constructor`.
```js
this.state = {
    msg:'Hello Component.'
}
```
2. Passing values in parent and child component `index.js
```js
ReactDOM.render(
  <React.StrictMode>
    <App msg="Hello App." />
  </React.StrictMode>,
  document.getElementById('root')
);
```
3. display values in `JSX` of `App.js`.
```js
// State values are retrieved in `this.state.00`.
<p className="alert alert-warning">{this.state.msg}</p>
// The value of the attribute is retrieved in `this.props.00`.
<p className="alert alert-dark">{this.props.msg}</p>
```
## Update the state
Use the component's `setState` method to change the state.
```js
this.setState({})
```
In the `setState` function, the prepared value will be **added** to the state, and updated if the value is already the same.
If no value is prepared for the `setState`, the value already in the state will be kept and not **removed**.
1. Preparing state in `constructor`.
```js
this.state = {
    msg:'Hello',
    count: 0,
}
```
2. create a timer with `constructor`.
First argument: describe the process to be executed.
Second argument: Set the interval in milliseconds to run.
```js
let timer = setInterval(() => { ... Abbreviation... }, 1000)
```
3. update the state value with `setState` as the first argument of the timer
Each time it is called, the value of the `count` state is increased by 1 and the display of the `msg` state is updated.
```js
this.setState({
    count: this.state.count + 1,
    msg: "[ count: " + this.state.count + " ]"
})
```
## Bind events.
> Create a mechanism to update the display when a button is pressed.
There are two things that need to be done when setting up events for a component: "setting up functions for events" and "binding".
## Setting up a function for an event
Set up the process to be executed for `onClick`.
```js
<button onClick={this.function_name} >
```
### Bind
The bind method creates a new function that will be set to the value specified in the this keyword when it is called.

Bind `this` to the method set to `onClick`.
Execute the method named **bind** from the method assigned to the event.
Assign `this` as an argument and assign the return value to the method so that the method can be executed from the event.
```js
this.function_name = this.function_name.bind(variable corresponding to this[, value corresponding to argument...]) ;
```
Set the `onClick` attribute to `this.doAction` to execute the component's `doAction` method when clicked.
```js
<button className="btn btn-primary"
    onClick={this.doAction}>
        Click
</button>.
```
Bind events in the `constructor` method for initialization, so that they can be executed by events.
```js
this.doAction = this.doAction.bind(this)
```
3. update the `doAction` function to increase the count when clicked
```js
doAction(event) {
    this.setState({
        counter: this.state.counter + 1,
        msg: '*** count: ' + this.state.counter + ' ***'
    })
}
```
## Switch the display by state.
Toggle the display by the boolean value of `flg`.
Using Ternary Operators in JSX
```js
{this.state.flg ?
    <div className="alert alert-primary text-right">
        <p className="h5">count: {this.state.msg}</p>
    </div>
:
    <div className="alert alert-warning text-left">
        <p className="h5">{this.state.msg}. </p>.
    </div> .
}
```
## Linking properties and states.
> Clicking inside a square area adds a rectangle to the location.
Save the information of the clicked location to `data` (a property that completes an array) with `doAction`.
pageX` and `pageY` are the distance from the top left corner of the page to the clicked point.
State values cannot be manipulated directly.
```js
doAction(e) {
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y})
    this.setState({
    list: this.data
    })
}
```
## List display component
Create three components

| component name | content |
| --- | --- |
| App | Pace of display |
| List | Display the whole list at once (title with `<p>` tag and list with `<ul>`). |
| Item | Display each item of a list. Prepare the content to be displayed for each item of the list using the `<p>` tag. |

1. specify the title and list data as attributes in the `List` component called in the `App`.
```js
<List title="Sample List" data={this.data} />
```
2. iteration with `map` in `List` component
In `<li>`, put `<Item>` component and specify attributes
```js
<ul className="list-group">
    {data.map((item, key) =>
    <li className="list-group-item" key={key}>
        <Item number={key + 1} value={item} />
    </li>
    )}
</ul>
```
3. create an item
```js
<p style={this.itm}>
    <span style={this.num}>
        [{this.props.number}]&nbsp;
    </span>
    {this.props.value}
</p>
```
### Hole code
```js
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ]

  constructor(props) {
    super(props)
    this.state = {
      list: this.data
    }
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List.</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }
}

class List extends Component {
  number = 1

  render() {
    let data = this.props.data;
    return (
      <div>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) =>
            <li className="list-group-item" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  itm = {
    fontSize: "16px",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  }

  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return (
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}


export default App;
```

***

# ステート
 プロパティは変更してもコンポーネントの表示は変わらない。
 表示に利用している変数やプロパティを変更したら、さらに`ReactDOM.render`を呼び出して表示を更新する必要がある。
 しかし、ステートを利用すれば、値を変更するだけで、自動的に表示が更新される。

### プロパティ
クラスに値を保管しておくのに使うもの。
コンポーネントに限らず、クラス全般で利用される。

### 属性（props）
コンポーネントの属性をまとめて保管するためのもの。
基本的に「read only」なので、値は取り出せるだけで変更することはできない。

### ステート
コンポーネントの状態を表す値を補完するためのもの。
コンポーネントの「現在の状態」を扱うためのもの。
ステートの値を操作することで、コンポーネントの状態を操作できる。

## ステートの表示
`App.js`の`constructor`で値を初期化する
```js
this.state = { ...値を用意する... }
```
1. `constructor`で`msg`というステートの値を用意する
```js
this.state = {
    msg:'Hello Component.',
}
```
2. 親子コンポーネント`index.js`で値を渡す
```js
ReactDOM.render(
  <React.StrictMode>
    <App msg="Hello App." />
  </React.StrictMode>,
  document.getElementById('root')
);
```
3. `App.js`の`JSX`で値を表示する
```js
// ステートの値は`this.state.〇〇`で取り出す
<p className="alert alert-warning">{this.state.msg}</p>
// 属性の値は`this.props.〇〇`で取り出す
<p className="alert alert-dark">{this.props.msg}</p>
```
## ステートの更新
ステートの変更は、コンポーネントの`setState`メソッドを使う
```js
this.setState({})
```
`setState`関数では、用意した値がステートに**追加**され、すでに同じ値があれば更新される。
`setState`に値が用意していなくても、その前からステートにある値はそのままで**削除されない**。
1. `constructor`で、ステートを用意する
```js
this.state = {
    msg:'Hello',
    count: 0,
}
```
2. `constructor`で、タイマーを作成
第一引数：実行する処理を記述
第二引数：実行する間隔をミリ秒で設定
```js
let timer = setInterval(() => { ...略... }, 1000)
```
3. タイマーの第一引数で`setState`でステートの値を更新
呼び出されるたびに`count`ステートの値が１増え、`msg`ステートの表示が更新される
```js
this.setState({
    count: this.state.count + 1,
    msg: "[ count: " + this.state.count + " ]"
})
```
## イベントのバインド
> ボタンを押すと表示が更新される仕組みを作る
コンポーネントのイベント設定で必要となる作業は「イベントへの関数の設定」と「バインド」の二つ
### イベントへの関数の設定
`onClick`に実行する処理を設定する
```js
<button onClick={this.function_name} >
```
### バインド
bindメソッドは、呼び出された際にthisキーワードに指定された値が設定される新しい関数を生成する。

`onClick`に設定したメソッドに`this`をバインドする
イベントに割り当てるメソッドから**bind**というメソッドを実行する
引数には`this`を指定し、この戻り値をメソッドに代入することで、イベントからメソッドが実行できるようになる
```js
this.function_name = this.function_name.bind(thisに対応する変数[, 引数に対応する値...]);
```
1. `onClick`属性に`this.doAction`を値として設定することでクリックするとコンポーネントの`doAction`メソッドが実行されるようになる
```js
<button className="btn btn-primary"
    onClick={this.doAction}>
        Click
</button>
```
2. 初期化を行う`constructor`メソッドでイベントのバインド処理をすることで、イベントによって実行できるようにする
```js
this.doAction = this.doAction.bind(this)
```
3. `doAction`関数でクリックするとカウントが増えるように更新する
```js
doAction(event) {
    this.setState({
        counter: this.state.counter + 1,
        msg: '*** count: ' + this.state.counter + ' ***'
    })
}
```
## ステートで表示を切り替える
`flg`の真偽値で表示を切り替える
JSXで三項演算子を使う
```js
{this.state.flg ?
    <div className="alert alert-primary text-right">
        <p className="h5">count: {this.state.msg}</p>
    </div>
:
    <div className="alert alert-warning text-left">
        <p className="h5">{this.state.msg}です。</p>
    </div>
}
```
## プロパティとステートの連携
> 四角いエリア内をクリックするとその場所に四角形が追加される
クリックした位置の情報を`doAction`で`data`（配列を補完するプロパティ）に保存
`pageX`と`pageY`はページの左上からクリックした地点までの距離
※ステートの値は直接操作できない
```js
doAction(e) {
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y})
    this.setState({
    list: this.data
    })
}
```
## リスト表示コンポーネント
３つコンポーネントを作る
| コンポーネント名 | 内容 |
| --- | --- |
| App | 表示のペース |
| List | リスト全体をまとめて表示する（`<p>`タグでタイトルと`<ul>`でリスト） |
| Item | リストの各項目を表示。`<p>`タグを使ってリストの各項目に表示する内容を用意 |

1. `App`内で呼び出す`List`コンポーネントではタイトルとリストのデータを属性に指定
```js
<List title="サンプル・リスト" data={this.data} />
```
2. `List`コンポーネントで`map`による繰り返し表示
`<li>`の中には`<Item>`コンポーネントを入れ、属性を指定
```js
<ul className="list-group">
    {data.map((item, key) =>
    <li className="list-group-item" key={key}>
        <Item number={key + 1} value={item} />
    </li>
    )}
</ul>
```
3. `Item`で項目を作成
```js
<p style={this.itm}>
    <span style={this.num}>
        [{this.props.number}]&nbsp;
    </span>
    {this.props.value}
</p>
```
### 全体コード
```js
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ]

  constructor(props) {
    super(props)
    this.state = {
      list: this.data
    }
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List.</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }
}

class List extends Component {
  number = 1

  render() {
    let data = this.props.data;
    return (
      <div>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) =>
            <li className="list-group-item" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  itm = {
    fontSize: "16px",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  }

  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return (
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}


export default App;
```