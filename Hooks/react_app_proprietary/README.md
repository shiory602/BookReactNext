# Create your own hooks.
- The function name should start with `use`.
- Custom hook functions return **two values**.
- The two values are stored together as an array
```js
function use00 () {
    const state
    const function
    return [ value ]
}
```
Value 1: Variable to get the value of the hook.
Value 2: Function to change the value of the hook
## Try to create a hook that counts numbers
1. a state to store the numbers
2. function to increase by 1 when called
```js
function useCounter() {
    const [num, setNum] = useState(0)

    const count = () => {
        seNum(num + 1)
    }

    return [num, count]
}
```
First, in the state where we store the value, we initialize it with 0 in `useState`.
```js
const [num, setNum] = useState(0)
```
The function to count the number is as follows
```js
const count = () => {
    seNum(num + 1)
}
```
Return two values with `return`.
```js
return [num, count].
```
### Use your own hooks.
Usage is the same as `useState`.
Prepare two variables, `[counter, plus]` for the return value, and assign a value and a function to each of them.
```js
const [counter, plus] = useCounter()
```
Display the state value in `<h4>` and call the count function in `<button>` with `onClick`.
```js
<h4>count: {counter} . </h4>
<button onClick={plus} className="btn btn-primary">
    count
</button>
```

## Try to create a hook that returns two or more values
1. pass the normal tax rate and the reduced tax rate as arguments and set them
Set the return value to the full amount, the price including tax for the normal tax rate, the price including tax for the reduced tax rate, and the amount.
```js
const useTax = (t1, t2) => {
    const [price, setPrice] = useState(1000)
    const [tx1] = useState(t1)
    const [tx2] = useState(t2)

    const tax = () => {
        return Math.floor(price * (1.0 + tx1 / 1000))
    }

    const reduced = () => {
        return Math.floor(price * (1.0 + tx2 / 100))
    }

    return [price, tax, reduced, setPrice]
}
```
### Use a hook that returns multiple values.
Here, only `price` is a variable, the other three are functions
```js
const [price, tax, reduced, setPrice] = useTax(10, 8)

const DoChange = (e) => {
    let p = e.target.value
    setPrice(p)
}

return <div className="alert alert-primary h5">
    <p className="h5">Normal tax rate: {tax()} yen. </p>.
    <p className="h5">Reduced tax rate: {reduced()} yen. </p> <p class="h5">Reduced tax rate: {reduced()} yen.
    <div className="font-group">
        <label className="form-group-label">Price:</label>
        <input type="number" className="form-control"
            onChange={DoChange} value={price} />
    </div>
</div>
```
## Extract the algorithm to a hook.
Passing "how to calculate" as an argument = passing a function as an argument
```js
function useCalc(num=0, func = (a) => {return a}) {
    const [msg, setMsg] = useState(null)

    const setValue = (p) => {
        let res = func(p)
        setMsg(<p className="h5">* The result of {p} is {res}. </p>)
    }

    return [msg, setValue]
}
```
There are two arguments, `num` and `func`.
Initial value of `num` -> 0
Initial value of `func` -> `(a) => {return a}`
### Try to pass various calculations as arguments.
1. create a function
```js
// Function for total calculation
const total = (a) => {
  let re = 0
  for(let i = 0; i<= a; i++) {
    re += i
  }
  return re
}
// Consumption tax calculation function
const tax = (a) => {
  return Math.floor(a * 1.1)
}
```
1. Passing as an argument in a component
```js
const [msg, setCalc] = useCalc(0, total)
```
```js
const [msg, setCalc] = useCalc(0, tax)
```
 
 
***

# 独自フックを作る
- 関数名は`use`で始まるようにする
- 独自フック関数は**２つの値**を返す
- ２つの値は**配列**の形でまとめておく
```js
function use〇〇 () {
    const ステート
    const 関数
    return [ 値 ]
}
```
値１：フックの値を得るための変数
値２：フックの値を変更するための関数
## 数字をカウントするフックを作ってみる
1. 数字を保管するステート
2. 呼び出すと１だけ増やす関数
```js
function useCounter() {
    const [num, setNum] = useState(0)

    const count = () => {
        seNum(num + 1)
    }

    return [num, count]
}
```
まず、値を保管するステートでは`useState`で0で初期化している
```js
const [num, setNum] = useState(0)
```
数字をカウントする関数は下記の通り
```js
const count = () => {
    seNum(num + 1)
}
```
２つの値を`return`で返す
```js
return [num, count]
```
### 独自フックを使用する
使い方は`useState`と同じ
戻り値に`[counter, plus]`と２つの変数を用意し、それぞれに値と関数を代入する
```js
const [counter, plus] = useCounter()
```
`<h4>`でステートの値を表示し、`<button>`の`onClick`でカウント関数を呼び出す
```js
<h4>count: {counter} .</h4>
<button onClick={plus} className="btn btn-primary">
    count
</button>
```

## ２つ以上の値を返すフックを作ってみる
1. 引数に通常税率、軽減税率を渡して設定
2. 戻り値に全額、通常税率の税込価格、軽減税率の税込価格、金額の設定を用意
```js
const useTax = (t1, t2) => {
    const [price, setPrice] = useState(1000)
    const [tx1] = useState(t1)
    const [tx2] = useState(t2)

    const tax = () => {
        return Math.floor(price * (1.0 + tx1 / 1000))
    }

    const reduced = () => {
        return Math.floor(price * (1.0 + tx2 / 100))
    }

    return [price, tax, reduced, setPrice]
}
```
### 複数の値を返すフックを使用する
ここでは`price`のみが変数で、他の３つは関数
```js
const [price, tax, reduced, setPrice] = useTax(10, 8)

const DoChange = (e) => {
    let p = e.target.value
    setPrice(p)
}

return <div className="alert alert-primary h5">
    <p className="h5">通常税率: {tax()} 円.</p>
    <p className="h5">軽減税率: {reduced()} 円.</p>
    <div className="font-group">
        <label className="form-group-label">Price:</label>
        <input type="number" className="form-control"
            onChange={DoChange} value={price} />
    </div>
</div>
```
## アルゴリズムをフックに抽出する
「計算の仕方」も引数として渡す＝関数を引数に渡す
```js
function useCalc(num=0, func = (a) => {return a}) {
    const [msg, setMsg] = useState(null)

    const setValue = (p) => {
        let res = func(p)
        setMsg(<p className="h5">※ {p} の結果は、 {res} です。</p>)
    }

    return [msg, setValue]
}
```
引数は`num`と`func`の２つ
`num`の初期値 -> 0
`func`の初期値 -> `(a) => {return a}`
### 実際に各種計算を引数に渡してみる
1. 関数を作る
```js
// 合計計算の関数
const total = (a) => {
  let re = 0
  for(let i = 0; i<= a; i++) {
    re += i
  }
  return re
}
// 消費税計算の関数
const tax = (a) => {
  return Math.floor(a * 1.1)
}
```
2. コンポーネント内で引数として渡す
```js
const [msg, setCalc] = useCalc(0, total)
```
```js
const [msg, setCalc] = useCalc(0, tax)
```
