# Prepare to Use
Next.js is manipulated in "pages" file
```js
// list 5-1
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        ... `<head>` part in HTML ...
      </Head>

      <main className={styles.main}>
        ... ...
      </main>

      <footer className={styles.footer}>
        ... ...
      </footer>
    </div>
  )
}
```

# Styled
There are three method to style elements
- Use parameter
- Use `<style jsx>` tag
- Use `import styles from '../styles/Home.module.css'`

Code
```js
// list 5-1
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
        </Head>

        <h1 className="bg-primary text-white display-4 " style={h1}>React</h1>
        <div className="container">
            <p className="my-3" style={subtitle}>{title}</p>
            <div className="alert alert-primary text-center">
            <p className="h5" style={p}>{message}.</p>
            </div>
        </div>
        </div>
    )
}
```
## Set styles to each tags
1. Declare a parameter and set styles
```js
const h1 = {
    textAlign: 'right',
    padding: '5px 15px'
}
```
2. Set `style` in each elements
```js
<h1 className="bg-primary text-white display-4 " style={h1}>React</h1>
```
## styled-jsx
1. Create `<style jsx>` tag in JSX
```js
<style jsx>{`
    h1 {
        textAlign: center;
    }
`}</style>
```
2. Code HTML


***


# ページの用意
Next.jsは「pages」でページを用意する
```js
// list 5-1
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        ... HTMLの`<head>`の内容を書く部分 ...
      </Head>

      <main className={styles.main}>
        ... 中略 ...
      </main>

      <footer className={styles.footer}>
        ... 中略 ...
      </footer>
    </div>
  )
}
```

# スタイルの適用
方法は３つ
- 変数にまとめる
- `<style jsx>` タグを使う
- `import styles from '../styles/Home.module.css'`を使う
コード全体
```js
// list 5-1
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
        </Head>

        <h1 className="bg-primary text-white display-4 " style={h1}>React</h1>
        <div className="container">
            <p className="my-3" style={subtitle}>{title}</p>
            <div className="alert alert-primary text-center">
            <p className="h5" style={p}>{message}.</p>
            </div>
        </div>
        </div>
    )
}
```
## 個々のタグにスタイルを設定
1. スタイルの変数情報を変数にまとめておく
```js
const h1 = {
    textAlign: 'right',
    padding: '5px 15px'
}
```
2. タグの`style`に設定
```js
<h1 className="bg-primary text-white display-4 " style={h1}>React</h1>
```
## styled-jsx
1. JSXの中に `<style jsx>` タグを作成し、その中にスタイルを記述
```js
<style jsx>{`
    h1 {
        textAlign: center;
    }
`}</style>
```
2. あとは普通にHTMLを記述する
