# 複数ファイルを使う
React と Next.js の一番の違いは「複数ページを持てる」という点
Reactは基本的にSPA（Single Page Application）を考えて作られており、普通のWebサイトのようにたくさんのページを作ってリンクするような作りではない。しかし、Next.jsならば、複数のページを持つWebアプリを簡単に作れる。
## Linkコンポーネント
`<Link>`タグは`<a>`タグと同じようにリンクを作成するためのもの
```js
<Link href="/other">
    <a>Go to Other page &gt;&gt;</a> // aタグである必要はない
</Link>
```
## 全てのページで統一されたレイアウトで表示
ページ全体をレイアウトするコンポーネントを用意し、全てのページでその中に組み込んでいくようにすれば、全体のデザインを統一できる。ヘッダーやフッターも、コンポーネント化することで簡単に組み込め修正も楽にできる。
### レイアウトの基本構成
| コンポーネント名 | 内容 |
| --- | --- |
| Layout | ページ全体のレイアウトとなるコンポーネント |
| Header | ヘッダー部分のコンポーネント。タイトルなどを表示 |
| Footer | フッター部分のコンポーネント。コピーライトなどの情報を表示 |
### 「components」フォルダの用意
プロジェクトフォルダの中に新たに「components」フォルダを作成する。
ここにレイアウト関係のコンポーネントをまとめる。
### レイアウト用コンポーネントの作成
ヘッダーとフッダーのコンポーネントを組み込み、これらと恩典つを食い合わせて表示を作る。
```js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
            </Head>
            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {props.title}
                </h3>
                {props.children}
            </div>
            <Footer footer="copyright SHIORI-Suzuki." />
        </div>
    )
}
```
コンテンツは`{props.children}`として用意しておく。
こうすることで`<Layout> ... </Layout>`と記述すれば間の部分が childrenプロパティとして取り出される。
### ヘッダーの作成
ヘッダーコンポーネントでは、`this.props`から`header`と`title`プロパティを取り出して表示。
```js
// list 5-10
export default function Header(props) {
    return (
        <div>
            <h1 className="bg-primary px-3 text-white display-4 text-right">
                {props.header}
            </h1>
        </div>
    )
}
```
### フッターの作成
表示する内容は、`this.props.footer`をそのまま出力
```js
export default function Footer(props) {
    return (
        <div className="text-center h6 my-4">
            <div>{props.footer}</div>
        </div>
    )
}
```
## pagesでレイアウトを利用する
1. ヘッダーに表示するテキストとタイトルをそれぞれ属性に指定して`<Layout>`タグを用意
2. 実際に表示する内容を`<Layout>`の間に書く
これで全てのページがLayoutコンポーネントを使ってレイアウトされた形で表示されるようになる。
```js
<Layout header="ヘッダー" title="タイトル">
    表示するコンテンツ
</Layout>
```

## 静的ファイルの利用
1. ファイルを利用するコンポーネントをあらかじめ用意しておく
2. そのコンポーネントを組み込むことで利用する
これがNext.jsらしい使い方であり、コンポーネントの再利用によって開発が楽になる。
### イメージファイルの表示
1. イメージのサンプルを用意する
2. 「public」フォルダの中にJPEGのイメージファイルを保存（ファイル名は『image.jpg』）
```js
<img src="ファイルパス" />
```
JSXでは、`<img>`タグに`width`、`border`、`src`といった属性を受けて表示している。
### publicフォルダの公開アドレス
srcの部分は`let fname = './' + props.fname`とすることでpublicフォルダ内の画像を指定
子ファイルのパスは`./public/image.jpg`とはならずに`./image.jpg`となる
> publicフォルダにあるファイル類は、サーバー直下にあるように扱われることに注意。
imageファイルを作成
```js
export default function MyImage(props) {
    let fname = './' + props.fname
    let size = props.size + "px"

    return (
        <img width={size} border="1" src={fname} />
    )
}
```
indexでimageを呼び出す
```js
// list 5-15
import Layout from '../components/layout'
import MyImage from '../components/image'

export default function Home() {
  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">Welcome to next.js!</h5>
          <MyImage fname="image.jpg" size="300" />
      </div>
      </Layout>
    </div>
  )
}
```
この時、`fname`と`size`で表示するファイル名とイメージサイズを指定する。