# JSXの表示
HTMLタグを値として直接記述できるようにするもので「文法拡張」という。
`<script>`タグで**Babel**を読み込むことで、記述したJSXのタグをJavaScriptのコードに変換する。
### ポイント
- 属性は`onclick`ではなく`onClick`のようにキャメル文字
- `<input>`のように閉じタグがない場合は`/>`とする
- HTML記述は`()`を使い、`{}`を使って変数や関数を埋め込む
## renderできるのは１つのエレメントだけ
```js
ReactDOM.render(表示する要素, はめ込むDOM要素)
```
JSXは**Elementオブジェクト**を生成するものなので作成するのは常に１つのエレメント
```js
// NG -> error
let el = (
    <h2>JSX sample</h2>
    <p>This is sample message.</p>
)
// OK
let el = (
    <>
        <h2>JSX sample</h2>
        <p>This is sample message.</p>
    </>
)
```
## className
JSXでは`class`という予約語が既にあるので**class属性**のことを`className`で表す。
※`class`とかいても警告は出るが表示はできる
### 属性の値を設定
- NG例
`属性 = "{}"`
- OK例
`属性 = {}`
## スタイルの設定
スタイル情報をオブジェクトとしてまとめて設定する
```js
const msg_s = {
    fontSize: "20pt",
    color: "red",
    border: "1px solid blue"
}
let el = (
    <div className="alert alert-primary">
        <h4>{title}</h4>
        <p style={msg_s}>{message}</p>
    </div>
)
```
## 切り替え表示
1. 真偽値による表示
**三項演算子**を使って「条件？〇〇：××」で切り替え表示をする
```js
let content_true = `※これが、trueの時に表示されるメッセージです。
ちゃんと表示されていますか？`
let content_false = `※これは、falseの時の表示です・・・。`
let flg = false; // ★
el = (
    <div>
        <h4>{title}</h4>
        <h6>{message}</h6>
        {flg ?
            <div className="alert alert-primary mt-3">
                <p>{content_true}</p>
            </div>
        :
            <div className="alert alert-primary mt-3">
                <p>{content_false}</p>
            </div>
        }
    </div>
)
```
2. 条件による表示
「条件をチェックして表示を行う」
```js
let flg = true;
{flg &&
    <div>
        <p>{content}</p>
    </div>
}
```
## mapによる配列の繰り返し表示
1. 各項目を持つオブジェクトを配列として１つのデータにまとめておく
2. 配列から順番にオブジェクトを取り出して、テーブルに表示する項目を作成
```js
let map_data = [
    {name:'Taro', mail:'taro@yamada', age:45},
    {name:'Hanako', mail:'hanako@flower', age:37},
    {name:'Sachiko', mail:'sachiko@happy', age:29},
    {name:'Jiro', mail:'jiro@change', age:18},
    {name:'Kumi', mail:'kumi@class', age:56},
]
{map_data.map((value) => (
    <tr>
        <td>{value.name}</td>
        <td>{value.mail}</td>
        <td>{value.age}</td>
    </tr>
))}
```

# JSXの更新とイベント
必要に応じて更新する方法
## 表示を一定間隔でrenderして更新する
`setInterval`で一定間隔で処理（関数）を実行する。
```js
// 1秒間隔で処理を実行
setInterval(() => { 処理 }, 1000);
```
第一引数：アロー関数で実行する処理を用意
第二引数：1000ms（１秒）ごとに処理が実行されるようにする
### JSXは変数代入時にコンパイルされる
１秒ごとにカウントされる表示
```js
let dom = document.querySelector('#root')

let title = "React page."
let message = "Display a message."

var counter = 0

setInterval(() => {
    counter++

    let el = (
        <div>
            <h4>{title}</h4>
            <h6>{message}</h6>
            <h5 className="alert alert-primary">
                count: {counter}.
            </h5>
        </div>
    )
    ReactDOM.render(el, dom)
}, 1000)
```
`el`を`setInterval`から出してしまうとカウントされなくなる。
```js
    let el = (
        <div>
            <h4>{title}</h4>
            <h6>{message}</h6>
            <h5 className="alert alert-primary">
                count: {counter}.
            </h5>
        </div>
    )

setInterval(() => {
    counter++
    ReactDOM.render(el, dom)
}, 1000)
```
理由 -> 変数`el`が`count: 0`のあと更新されないから（JSX内で使った変数は自動的に更新されるわけではない）
※`state`を使えば「自動更新」することもできる
## クリックして更新する
アロー関数を作り、その中で、変数`counter`を増やし、変数`el`にJSXの値を代入し直し`ReactDOM.render`でレンダリングする。
```js
let doAction = (event) => {
    counter++
    let el = (
        <div>
            <h4>{title}</h4>
            <h6>{message}</h6>
            <h5 className="alert alert-primary"
                onClick={doAction}>
                count: {counter}.
            </h5>
        </div>
    )
    ReactDOM.render(el, dom)
};
```
関数を呼び出すのを忘れないようにすること
## フォームの値を利用する
入力フィールドとプシュボタンを用意
- `input`タグは閉じた具がないので必ず最後は`/>`とすること
```js
<div className="form-group">
    <label>Input:</label>
    <input type="text" className="form-control" id="input" onChange={doChange} />
</div>
<button onClick={doAction}
    className="btn btn-primary">
    Click
</button>
```
HTML要素のイベント属性に関数を設定した場合、引数に`event`というオブジェクトが渡される。
`event`には`target`というプロパティがあって、ここにイベントが発生した要素のオブジェクトが保管されている。
```js
let doChange = (event) => {
    in_val = event.target.value
    message = 'Hello, ' + in_val + '!!'
}
```
