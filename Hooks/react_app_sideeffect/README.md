# Using side-effects hooks
**side-effects**
Allows us to do the necessary work when a component is mounted or updated.
```js
useEffect( function )
```
## Side-effect hooks in action
1. two states in `App.js`.
```js
const [val, setVal] = useState(0) // value entered from field
const [msg, setMsg] = useState('set a number...') // message to display the result
```
1. Run the `doChange` function on the input field using the `onChange` event
```js
const doChange = (event) => {
    setVal(event.target.value)
}
```
If you set a function with `useEffect`, the specified function will be executed when the component is mounted or the display is updated.
```js
useEffect(() => {
    let total = 0
    for (let i = 0; i <= val; i++) {
        total += i
    }
    setMsg("total: " + total + ".")
})
```
By using side effect hooks, the `onChange` event can simply "update the state".
You can use more than one `useEffect`.

## Specify hooks for recalls.
If you use `useEffect`, you may keep calling it infinitely.
This can be fixed by specifying an array of states as the second argument to specify when the function will be called.
```js
useEffect( function, [ state ] )
```

***

# 副作用フックの利用
**side-effects**のこと
コンポーネントがマウントされたり更新された際に必要な作業を行えるようにする
```js
useEffect( 関数 )
```
## 副作用フックの動き
1. `App.js`で２つのステートを用意
```js
const [val, setVal] = useState(0) // フィールドから入力された値
const [msg, setMsg] = useState('set a number...') // 結果を表示するメッセージ
```
2. 入力フィールドで`onChange`イベントを使って`doChange`関数を実行する
```js
const doChange = (event) => {
    setVal(event.target.value)
}
```
3. `useEffect`で関数を設定しておけば、コンポーネントがマウントされたり表示が更新された際に指定の関数が実行される
```js
useEffect(() => {
    let total = 0
    for (let i = 0; i <= val; i++) {
        total += i
    }
    setMsg("total: " + total + ".")
})
```
副作用フックを使うことで、`onChange`のイベントではシンプルに「ステートを更新する」だけでよくなる。
### `useEffect`は複数使える
## 再呼び出しのフックの指定
`useEffect`を使用すると無限に呼び出し続けてしまうことがある
これは、第二引数にステートの配列を指定することで関数が呼び出されるタイミングを指定できる
```js
useEffect( 関数, [ ステート ] )
```