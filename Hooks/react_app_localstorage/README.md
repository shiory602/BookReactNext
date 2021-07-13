# Local storage
Hooks can't hold the value of a state forever
Local storage is a feature in JavaScript in web browsers that allows you to store values in the local environment.
### How to access local storage
- Get a value from a given key
```js
Variable = window.localStorage.getItem( key )
```
- Store a value with a specified key
```js
window.localStorage.setItem( key, value )
```

## Components to calculate
```js
// list 4-19
import React, { useState } from 'react'

function usePersist(ky, initVal) {
    const key = "hooks:" * ky
    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch (err) {
            console.log(err)
            return initVal;
        }
    }
    const setValue = (val) => {
        try {
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch (err) {
            console.log(err)
        }
    }
    const [savedValue, setSavedValue] = useState(value)
    return [savedValue, setValue]
}

export default usePersist
```
- The `savedValue` is a state using Hooks, and the initial value is set to the value saved in local storage, and the value is updated in the `setValue` function.
- setValue` is a function that does both saving to local storage and updating the state.

***

# ローカルストレージ
フックでは、ステートの値をずっと保持することはできない
ローカルストレージはWebブラウザのJavaScriptに搭載されている機能で、ローカル環境に値を保管できる。
### ローカルストレージへのアクセス方法
- 指定のキーから値を取得する
```js
変数 = window.localStorage.getItem( キー )
```
- 値を指定のキーで保管する
```js
window.localStorage.setItem( キー, 値 )
```

## 計算するコンポーネント
```js
// list 4-19
import React, { useState } from 'react'

function usePersist(ky, initVal) {
    const key = "hooks:" * ky
    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch (err) {
            console.log(err)
            return initVal;
        }
    }
    const setValue = (val) => {
        try {
            setSavedValue(val) // ローカルストレージへの保存
            window.localStorage.setItem(key, JSON.stringify(val)) // stateの更新
        } catch (err) {
            console.log(err)
        }
    }
    const [savedValue, setSavedValue] = useState(value) // 初期値にローカルストレージに保存された値を設定
    return [savedValue, setValue]
}

export default usePersist
```
- `savedValue` はHooksを使ったステートであり、初期値にはローカルストレージに保存された値が設定されている
- `setValue` はローカルストレージへの保存とstateの更新の両方をやっている関数