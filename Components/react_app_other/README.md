# コンポーネントの様々な機能
## 子エレメントの活用
`<Element />`以外の書き方を使う
```js
<Message title="Children!">
    これはコンポーネント内のコンテンツです。
    マルでテキストを分離し、リストにして表示します。
    改行は必要ありません。
</Message>
```
`this.props.children`で、内部にある子エレメントをまとめて取り出す
`Message`コンポーネントの中に書かれているテキストを取り出し、「。」で分割し配列を作成する
内部に書かれている
```js
let content = this.props.children
let arr = content.split('。')
```
### `map`の処理
配列のテキストを`<li>`エレメントの配列に変換したものを変数`list`に入れる
```js
let list = arr2.map((value, key) => (
    <li className="list-group-item" style={this.li}
    key={key}>{key + 1}. {value}</li>
))
```
## フォームの利用