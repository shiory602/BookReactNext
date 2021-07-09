# コンテキスト
コンポーネントに固有の値を持たせる場合、属性を使い`this.props`で取り出す。
いくつもあるコンポーネント全てに同じ値を渡して処理をする場合、「全体で共通して使える値」を用意し利用する。
## コンテキストの作成
`createContext`メソッドを使って変数にコンテキストを代入する
コンテキストの引数には、各コンポーネントで利用したい値を保管する
```js
const 変数 = React.createContext( 値 )
```
※全てのクラスで共通して使えるようにする必要があるので、**クラスの外側**で実行する
## コンポーネントの利用
コンポーネント内に静的プロパティを追加することでコンテキストを設定する
```js
static contextType = 変数
```
設定されたコンテキストの値は、`this.context`プロパティにまとめられる。
取り出すときは`this.context.〇〇`とする。

```js
import React, { Component } from 'react'
import './App.css';

let data = {title: 'React-Context',
  message: 'this is sample message.'}

  const SampleContext = React.createContext(data)

  class App extends Component {
    render() {
      return <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Title />
          <Message />
        </div>
      </div>
    }
}

class Title extends Component {
  static contextType = SampleContext
  render() {
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext

  render() {
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
      </div>
    )
  }
}

export default App;
```

