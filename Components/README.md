## Create a component
**Components** are the "parts" that are displayed on the screen in React.
It combines necessary data, processing, etc. into a single object.
## "Function" components
Return the element to be displayed with `return
Just return the value of JSX with `return`.
```js
function component name ( argument ) {
    return Display_by_JSX;
}
```
### Components can be written as dags.
One way to use components is to write them as tags in JSX.
In the case of a function component, write it as a tag using the name of the defined function.
```js
<component_name />
```
The element that was `returned` by the function will be embedded in this tag.
## Displaying Components 1.
1. define a function
```js
function Welcome(props) {
    return <div className="alert alert-primary">
            <p className="h4">Hello React! </p>
        </div>
}
```
Specify the position to be displayed in JSX
```js
let el = (
    <div>
        <h5 class="mb-4">{message}</h5>
        <Welcome />
    </div>
)
```
3. drawing
```js
ReactDOM.render(el, dom)
```
### Component names
Components must have a name that starts with a capital letter.
The second and subsequent letters are not case sensitive.
- NG
`welcome`
- OK
`Welcome
`WELCOME
## Use "attributes"
The function component is provided with one argument (the tag's "attributes" summarized in an object).
- Function
Takes a value from the argument `props` and sets it to an attribute of `<div>` as `className={props.alert}`.
```js
function Welcome(props) {
    return <div className={props.alert}>
            <p className={props.fontSize}>Hello {props.name}! </p>
        </div>
}
```
- JSX description
Make sure `Welcome` is passed a value such as `alert`.
```js
<Welcome name="Taro" fontSize="h2" alert="alert alert-primary" />
<Welcome name="Hanako" fontSize="h5" alert="alert alert-dark" />
```
## Calculate with components
1. extract the value of the property `number` with the `Calc` component function 2.
Calculate the sum of the values from 1 to `number` using iteration. 3.
3. `return` the result.
It is also possible to include components within components.
Example: Passing data to `<Calc />` in `<Welcome />`.
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
        The sum of numbers from 1 to {props.number} is "{total}". </p>
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

# Class components
Basic form
```js
class class_name {
    constructor(props) {
        super(props)
        Initialization process
    }
    // property
    // method
    method name( argument ) {
        Method processing
    }
}
```
### constructor method
The first method executed when creating an object from a class, to initialize the object.
- It takes only one argument, which is the value of the attribute of the object as well as the argument of the function component.
- Always write `super(props)` at the beginning of the `constructor method`.
    This method is used to call `constructor` of the class inherited by `extends`.
## How to write a class component
React provides a class called `React.Component` which has all the component functions.
Component`, which has a set of component functions, and you can define your own components by inheriting from this class.
### render method
This method renders the component, and must be added to the component class (no argument, has `return`).
```js
class Hello extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="alert alert-primary">
                <p className="h4">Hello! </p>
            </div>
    }
}
```
## Using "attributes
Preparing properties in a class component
```js
x = 0
y = 0
width = 0
height = 0
color = "white"
style = {}
```
Provide properties that can be changed in the `constructor` method
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
3. display with render
```js
render() {
    return <div style={this.style}></div>
}
```
Specifying attributes in JSX part
```js
let el = (
    <div>
        <h5>{message}</h5>
        <div> <Rect
            <Rect x="200" y="200" w="200" h="200" c="cyan" />
            <Rect x="300" y="300" w="200" h="200" c="magenta" />
        </div>
    </div>
)
```

***

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
