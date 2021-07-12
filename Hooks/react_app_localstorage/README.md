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