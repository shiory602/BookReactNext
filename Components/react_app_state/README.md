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