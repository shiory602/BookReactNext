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