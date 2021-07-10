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
コード全体
```js
import React, { useState } from 'react'
import './App.css';

function App() {
  const [message] = useState("Welcome to Hooks!")

  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
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
### 全体
```js
// list 4-1
// import React, { useState } from 'react'
// import './App.css';

// function App() {
//   const [message] = useState("Welcome to Hooks!")

//   return (
//     <div className="App">
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5">{message}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// list 4-2
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const clickFunc = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <div className="alert alert-primary text-center">
          <p className="h5 mb-3">click: {count} times!</p>
          <div><button className="btn btn-primary"
                  onClick={clickFunc}>
                    Click me
              </button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
```
