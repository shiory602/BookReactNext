This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


***

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
