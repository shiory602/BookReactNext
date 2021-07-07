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

# JSX
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