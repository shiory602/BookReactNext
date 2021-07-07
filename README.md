# BookReactNext

## Folder
| フォルダ名 | 内容 |
| --- | --- |
| node_ modules | npm で管理されるモジュール類（プログラム）がまとめてある |
| public | 公開フォルダ。HTML や CSS など公開されるファイル類が保管される |
| src | ここに、React で作成したファイルなどがまとめられる |

## Files
| ファイル名 | 内容 |
| --- | --- |
| .gitignore | Git というツールで使うもの |
| package.json | npm でパッケージ管理するための設定情報ファイル |
| README.md | 説明がき |
| package-lock.json/yarnlock | npm あるいは yarn に関する設定情報を記述したファイル |

## Script files
**CDN - Content Delivery Network -** サービスを利用してスクリプトを読み込んでいる
| ファイル名 | 内容 |
| --- | --- |
| react.js (react.development.js) | React の本体 |
| react-dom.js (react-dom.development.js) | React の仮想DOM のスクリプトファイル |

# JSXの表示
HTMLタグを値として直接記述できるようにするもので「文法拡張」という。
`<script>`タグで**Babel**を読み込むことで、記述したJSXのタグをJavaScriptのコードに変換する。
## renderできるのは１つのエレメントだけ
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