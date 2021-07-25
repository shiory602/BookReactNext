# サーバーからデータを取得する
ページからサーバーにアクセスする機能は、一般に「Ajax」を利用する。
Webサイトにデータファイルをアップロードしておき、それをAjaxで読み込んで表示する。
そうすることで、データファイルを更新するだけで表示内容も更新できる。
# fetch API
> fetchはAjax関数のうちの一つで非同期処理。
基本の書き方
```js
fetch(アクセスするURL).then(res=> 受信後の処理)
```
### 同期処理
最初から一つずつ順番に実行していく方法。
毎回処理が終わってから次に進むため、時間のかかる処理があるとしばらく反応が返ってこないこともある
> 一つ目を実行し、これが終わったら二つ目を実行し、それが終わったら三つ目を実行...
### 非同期処理
処理を実行したら、実行の途中でも次の処理に進む方法。
待たずにすぐ次の処理に進むため、時間がかかる処理でも待つことがない
> 他の処理が進められている間、バックグラウンドで実行され、処理が完了したらあらかじめ用意しておいた別の処理を呼び出して後始末をする。

## fetch APIを使う
1. JSONデータの用意
http://localhost:3000/data.json
publicフォルダ内にjsonファイルを作成する
```js
{
    "message": "This is sample JSON data.",
    "data": [
        {"name": "taro", "mail": "taro@yamada", "age": 39},
        {"name": "hanako", "mail": "hanako@flower", "age": 28},
        {"name": "sachiko", "mail": "sachiko@happy", "age": 17}
    ]
}
```
2. fetch APIでJSONデータにアクセスする
```js
fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))
```
`then`メソッドは、`fetch`や`then`が返す「Promise」というオブジェクトに用意されているもの
- Promise
非同期で実行するメソッドを呼び出した時、「処理が終わった後の挙動を予約する」働きがある。
この返された「Promise」を使って非同期処理が終わった後の作業を設定できる。
- thenメソッド
`then`の引数には関数を指定する。
非同期処理が終わったら、引数に指定した関数を実行するようにできる。
### fetch(url)で返されるPromiseのアロー関数
引数は「Response」というオブジェクトが渡される。
サーバーからクライアントに送られる情報を管理するためのもの
送られてきたデータもここから取り出せる。今回は、このResponseにある「json」というメソッドを使い、得られたデータをjson形式のテキストとしてオブジェクトに変換したものを取得する。
### then(res=> res.json())で返されるPromiseのアロー関数
この`then`の中では、`res.json()`を実行していますが、このjsonも非同期で実行される。
`then(res=> res.json())`は実行後、`res.json()`で返されるPromiseが返される。
そのPromiseからさらにthenを呼び出しているのが二つ目のthen。
このアロー関数では、res.jsonで生成されたオブジェクトが返される。
ここでは、このオブジェクトを`setData`でステートに保管して利用している。

3. 取得したデータの利用
サーバーにアクセスしてデータを取得し、dataステートに設定したらdataステートを使って表示を作成。
- `{data.message}`として、dataステートからmessageプロパティを取り出し表示
```js
<h5 className="mb-4">{data.message}</h5>
```
- dataステートのdataプロパティにデータが配列としてまとめられているので、`map`メソッドを使って各要素を元に新しい配列を作る
    関数内で`<tr>`、`<th>`、`<td>`といったタグを使ってデータの表示を作成
    配列から取り出したデータは`value`に渡されるので、データ内にある各値は`value.name`のように得る
```js
{data.data.map((value, key) => (
    <tr key={key}>
        <th>{value.name}</th>
        <td>{value.mail}</td>
        <td>{value.age}</td>
    </tr>
))}
```
value: 取り出した値
key: インデックス番号

# SWRの利用
fetch APIは便利だが、アクセスに呼び出すなどするとjsonデータが更新された時に手動でリロードする必要がある
これを解決するのが**SWR**
`SWR`パッケージネットワーク経由で値を取得するための独自フックで`useSWR`として使う
### SWRのインストール
まず、ターミナルでインストールした後に`import`して`useSWR`関数をロードする
```
npm install swr
```
## SWRを使ってjsonファイルを表示する
1. インポートする
```js
import useSWR from 'swr'
```
2. 関数の中で fetch の代わりにステートを用意
```js
const { data } = useSWR('/data.json')
```
3. JSX 内で三項演算子を使って呼び出し
三項演算子を使う
```js
{data != undefined ? 表示内容 : エラー表示 }
```
具体例
```js
{ data != undefined ? data.message : 'error...' }
```
テーブルの作成
```js
<table className="table table-dark">
    <thead className="">
        <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
    </thead>
    <tbody>
        { data != undefined ? data.data.map((value, key) => (
        <tr key={key}>
            <th>{value.name}</th>
            <td>{value.mail}</td>
            <td>{value.age}</td>
        </tr>
        )) : <tr><th></th><td>no data.</td><td></td></tr>}
    </tbody>
</table>
```
## SWRを使ってテキストデータを取得する
アクセスに使う関数を引数に指定することでJSON以外のフォーマットのデータを利用できる
```js
const { data, err } = useSWR('/data.txt', function)
```
今回第二引数に入れた関数↓
```js
const func = (...args)=> fetch(...args).then(res => res.text())
```
`res.text()`は、Responseから取得したデータをテキストのまま返す。

## APIデータを取り出す
1. データ用コンポーネントを用意する
データは配列で作成し、`export default`する
```js
export default [
    {"name": "shiori", "mail": "shiori@com"}
    .
    .
    .
    .
]
```
2. hello API に idパラメータを追加する
pagesフォルダ内のapiフォルダにあるhello.jsを書き換え
```js
import apidata from '../../components/data'

export default function handler(req, res) {
  let id = req.query.id
  if (id == undefined) { id = 0 }
  if (id >= apidata.length) { id = 0 }

  res.json(apidata[id])
}
```
3. アクセス先を書き換えてデータを呼び出す
> http://localhost:3000/api/hello?id=1
`?id=番号`とすることで配列の中のデータが指定される
この`?id=1`の部分をクエリーパラメータといい、渡された値はRequestのqueryプロパティにまとめられる。
### いくつか表示させたい時
`&`で繋ぐ
> http://localhost:3000/api/hello?id=1&id=2&id=3

## hello API をページから利用する
SWRを使ってhello APIからデータを取得
直接アドレスを設定するのではなく、以下のような形でステートを作成
1. アクセスするアドレスを保管する`address`というステートを用意
2. `useSWR`で`address`を引数に指定することで`setAddress`でアドレスを変更するとSWRによって`data`ステートを呼び出せる
```js
const [ address, setAddress ] = useState('/api/hello')
const { data, err } = useSWR(address)
```
3. 入力フィールドでは、`onChange`属性に関数を設定する
```js
const onChange = (e) => {
    setAddress('/api/hello?id=' + e.target.value)
}
```
これで`/api/hello?id=番号`という値が`address`に設定され、更新された`address`を使ってSWRはデータを取得するようになる
## `[id].js`でIdパラメータを処理する
`hello?id=1`をもっと綺麗なアドレスで表示する
> http://localhost:3000/api/hello/【ID番号】
apiフォルダの中にhelloフォルダを作ってその中に`[id].js`ファイルを作成する
```js
import apidata from '../../../components/data'

export default function handler(req, res) {
    const {
        query: {id}
    } = req
    
    res.json(apidata[id])
}
```
関数の中で分割代入：`req`の`query.id`が`{query: [id]}`という形でidに代入される。
```js
id = req.query.id 

↓

{ query: {id} } = req
```

## 