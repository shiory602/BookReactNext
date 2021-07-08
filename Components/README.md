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
