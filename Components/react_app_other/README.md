## Various functions of components
## Using child elements
Using a writing style other than `<Element />`.
```js
<Message title="Children!">
    This is the content in the component.
    It separates the text with a mal and displays it as a list.
    No line breaks are needed.
</Message>
```
`this.props.children` to extract all the child elements inside together.
Take the text in the `Message` component, split it with ". to create an array.
The text inside the
```js
let content = this.props.children
let arr = content.split('.')
```
### Handling of `map`.
Converts array text to an array of `<li>` elements and puts them into a variable `list`.
```js
let list = arr2.map((value, key) => (
    <li className="list-group-item" style={this.li}
    key={key}>{key + 1}. {value}</li>)
)
```
## Using the form
> Form with one input field and one button.
> Fill in the name and press the button or press Enter/Return to display the message.
Using Form Tags
```JS
<form onSubmit={this.doSubmit}>
```
`onSubmit` is an attribute that handles events when a form is submitted.
Execute the `doSubmit` method here.
```js
doSubmit(event) {
this.setState({
    title: 'send form',
    message: 'Hello, ' + this.input + '!
})
event.preventDefault()
}
```
1. display the message with `setState`.
2. stop submitting the form by `event.preventDefault()` to `eliminate the event that occurred`.
## Checking the value
Check the value of the form with the **Form Validation** function provided in HTML.
In addition, prepare a process to check the input value in real time.
## Attributes of Form Validation
Add attributes to the `<input>` tag.
```js
<input type="text" className="form-control"
    onChange={this.doChange}
    required pattern="[A-Za-z _,.] +" />
```

| attribute name | content |
| --- | --- |
| required | Specified for required fields. Error if not entered. |
| pattern | Specify a regular expression pattern. If the text does not match this pattern, an error occurs. |

If the text does not match this pattern, it is an error.

### Other Form Validation check attributes
**Number range**.
- `min="minimum value"`.
- `max="maximum value"`.
Specify the range of values to enter.

**Range of characters**.
- `minlength="minimum number of characters"`
- `maxlength="maximum number of characters"`
Set the length of the text to be entered

## Create an event for the component
> Specify the maximum number of characters to input
1. check the value you entered with `onChange`. 2.
2. run `this.props.onCheck` if there is a problem
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = ''

  constructor(props) {
    super(props)
    this.state = {
      title: 'input form',
      message: 'type your name.',
      max: 10, // ★
    }
    this.doCheck = this.doCheck.bind(this)
  }

  doCheck(event) {
    alert(event.target.value +
      "は長すぎます。（最大" + this.state.max + "文字）")
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{this.state.title}</h4>
        <Message maxlength={this.state.max} onCheck={this.doCheck} />
      </div>
    </div>
  }
}

class Message extends Component {
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  }

  constructor(props) {
    super(props)
    this.doChange = this.doChange.bind(this)
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e)
      e.target.value =
      e.target.value.substr(0, this.props.maxlength)
    }
  }

  render() {
    return <div className="form-group">
      <label>input:</label>
      <input type="text" className="form-control"
        onChange={this.doChange} />
    </div>
  }
}

export default App;
```


***

# コンポーネントの様々な機能
## 子エレメントの活用
`<Element />`以外の書き方を使う
```js
<Message title="Children!">
    これはコンポーネント内のコンテンツです。
    マルでテキストを分離し、リストにして表示します。
    改行は必要ありません。
</Message>
```
`this.props.children`で、内部にある子エレメントをまとめて取り出す
`Message`コンポーネントの中に書かれているテキストを取り出し、「。」で分割し配列を作成する
内部に書かれている
```js
let content = this.props.children
let arr = content.split('。')
```
### `map`の処理
配列のテキストを`<li>`エレメントの配列に変換したものを変数`list`に入れる
```js
let list = arr2.map((value, key) => (
    <li className="list-group-item" style={this.li}
    key={key}>{key + 1}. {value}</li>
))
```
## フォームの利用
> 入力フィールドとボタンが１つずつあるフォーム
> 名前を記入し、ボタンを押すかEnter/Returnキーを押すとメッセージが表示される
フォームタグの利用
```JS
<form onSubmit={this.doSubmit}>
```
`onSubmit`はフォームが送信される時のイベント処理を行う属性
ここで`doSubmit`メソッドを実行
```js
doSubmit(event) {
this.setState({
    title: 'send form',
    message: 'Hello, ' + this.input + '!!'
})
event.preventDefault()
}
```
1. `setState`でメッセージを表示
2. `event.preventDefault()`で「発生したイベントをなくす」ことでフォームの送信を止める
## 値のチェック
HTMLに用意されている**Form Validation**機能でフォームの値をチェック
さらに、入力された値をリアルタイムにチェックする処理を用意する
### Form Validationの属性
`<input>`タグに属性を追加する
```js
<input type="text" className="form-control"
    onChange={this.doChange}
    required pattern="[A-Za-z _,.]+" />
```

| 属性名 | 内容 |
| --- | --- |
| required | 必須項目に指定。入力されていないとエラー |
| pattern | 正規表現のパターンを指定。このパターンに合致するテキストでなければエラー |

※正規表現：パターンを使ってテキストを解析する機能

### その他の Form Validation のチェック属性
**数値の範囲**
- `min="最小値"`
- `max="最大値"`
入力する値の範囲を指定

**文字数の範囲**
- `minlength="最小文字数"`
- `maxlength="最大文字数"`
入力するテキストの長さを設定

## コンポーネントのイベント作成
> 最大入力文字数を指定
1. `onChange`で入力した値をチェック
2. 問題があったら`this.props.onCheck`を実行する
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = ''

  constructor(props) {
    super(props)
    this.state = {
      title: 'input form',
      message: 'type your name.',
      max: 10, // ★
    }
    this.doCheck = this.doCheck.bind(this)
  }

  doCheck(event) {
    alert(event.target.value +
      "は長すぎます。（最大" + this.state.max + "文字）")
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{this.state.title}</h4>
        <Message maxlength={this.state.max} onCheck={this.doCheck} />
      </div>
    </div>
  }
}

class Message extends Component {
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  }

  constructor(props) {
    super(props)
    this.doChange = this.doChange.bind(this)
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e)
      e.target.value =
      e.target.value.substr(0, this.props.maxlength)
    }
  }

  render() {
    return <div className="form-group">
      <label>input:</label>
      <input type="text" className="form-control"
        onChange={this.doChange} />
    </div>
  }
}

export default App;
```