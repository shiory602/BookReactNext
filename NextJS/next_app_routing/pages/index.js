// import Header from './header'
// import Link from 'next/link'

// export default function Home() {
//   const title = "Index"

//   return (
//     <div>
//       <Header title={title} />
//       <h1 className="bg-primary px-3 text-white display-4">
//         React
//       </h1>
//       <div className="container">
//         <h3 className="my-3 text-primary text-center">
//           {title}
//         </h3>
//         <div className="card p-3 text-center">
//           <p>
//             これは、ページ移動のサンプルです。
//           </p>
//           <Link href="/other">
//             <a>Go to Other page &gt;&gt;</a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


// // list 5-12
// import Layout from '../components/layout'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div>
//       <Layout header="Next.js" title="Top page.">
//       <div className="alert alert-primary text-center">
//         <h5 className="mb-4">Welcome to next.js!</h5>
//           <Link href="./other">
//             <button className="btn btn-primary">
//               go to Other &gt;&gt;
//             </button>
//           </Link>
//       </div>
//       </Layout>
//     </div>
//   )
// }


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
