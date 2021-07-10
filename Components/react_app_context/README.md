# Context
If a component has a unique value, use an attribute to retrieve it in `this.props`.
If you want to give the same value to all components, prepare and use a value that is common to all components.
## Create a context
Assign a context to a variable using the `createContext` method.
For the context argument, store the value you want to use in each component.
```js
const variable = React.createContext( value )
```
The context argument should be the value you want to use in each component.
## Using components
Set the context by adding static properties in the component.
```js
static contextType = variable
```
The value of the set context will be summarized in the `this.context` property.
When retrieving them, use `this.context.00`.
# Using contexts.
> If you always use the same value for all components
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

# Change context in Provider
> Temporarily change the value of a context
A provider is a component that is prepared as a `Provider` property of a context created with `createContext`.
Setting a new value to `value` will change the value of the context only within this tag.
There is no business in the outer component, and the value can be changed only inside.
### Example description
```js
<context.Provider value=value>.
    ... .component...
</context.Provider>
```
## Using the Provider
```js
import React, { Component } from 'react'
import './App.css';

let data = {title: 'React-Context',
  message: 'this is sample message.'}

  const SampleContext = React.createContext(data)

  class App extends Component {
    newdata = {title: '新しいタイトル',
      message: 'これは新しいメッセージです。'}

    render() {
      return <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Title />
          <Message />
          <hr />
          <SampleContext.Provider value={this.newdata}>
            <Title />
            <Message />
          </SampleContext.Provider>
          <hr />
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
# Create themes with contexts
Provide various style attributes as contexts so that you can switch between themes with a simple operation.
```js
import React, { Component } from 'react'
import './App.css';

let theme = {
  light:{
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f"
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
  dark:{
    styles: {
      backgroundColor: "#336",
      color: "#eef"
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
  }
}


const ThemeContext = React.createContext(theme.dark) // ★

class App extends Component {
  static contextType = ThemeContext

    render() {
      return <div style={this.context.style}>
        <h1 className={this.context.head}>React</h1>
        <div className="container">
          <Title value="Content page" />
          <Message value="This is Content sample." />
          <Message value="※これはテーマのサンプルです。" />
          <div className={this.context.foot}></div>
        </div>
      </div>
    }
}

class Title extends Component {
  static contextType = ThemeContext
  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.style}>{this.props.value}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <div className={this.context.style}>
        <p className={this.context.text}>{this.props.value}</p>
      </div>
    )
  }
}

export default App;
```



***


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
# コンテキストの使用
> 全てのコンポーネントで同じ値を常に利用する場合
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

# Provider でコンテキストを変更
> 一時的にコンテキストの値を変更する
プロバイダーは`createContext`で作成したコンテキストの`Provider`プロパティとして用意されるコンポーネント
`value`に新しい値を設定すると、このタグの中でだけコンテキストの値が変更される。
外側のコンポーネントには営業がなく、内部でのみ値を変更できる。
### 記述例
```js
<コンテキスト.Provider value=値>
    ...component...
</ コンテキスト.Provider>
```
## Provider の利用
```js
import React, { Component } from 'react'
import './App.css';

let data = {title: 'React-Context',
  message: 'this is sample message.'}

  const SampleContext = React.createContext(data)

  class App extends Component {
    newdata = {title: '新しいタイトル',
      message: 'これは新しいメッセージです。'}

    render() {
      return <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Title />
          <Message />
          <hr />
          <SampleContext.Provider value={this.newdata}>
            <Title />
            <Message />
          </SampleContext.Provider>
          <hr />
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

# コンテキストでテーマを作る
様々なスタイルの属性をコンテキストとして用意しておき、簡単な操作でテーマを切り替えれるようにする
```js
import React, { Component } from 'react'
import './App.css';

let theme = {
  light:{
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f"
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
  dark:{
    styles: {
      backgroundColor: "#336",
      color: "#eef"
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
  }
}


const ThemeContext = React.createContext(theme.dark) // ★

class App extends Component {
  static contextType = ThemeContext

    render() {
      return <div style={this.context.style}>
        <h1 className={this.context.head}>React</h1>
        <div className="container">
          <Title value="Content page" />
          <Message value="This is Content sample." />
          <Message value="※これはテーマのサンプルです。" />
          <div className={this.context.foot}></div>
        </div>
      </div>
    }
}

class Title extends Component {
  static contextType = ThemeContext
  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.style}>{this.props.value}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <div className={this.context.style}>
        <p className={this.context.text}>{this.props.value}</p>
      </div>
    )
  }
}

export default App;
```