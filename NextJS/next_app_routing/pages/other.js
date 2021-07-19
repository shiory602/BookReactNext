// import Header from './header'
// import Link from 'next/link'

// export default function Other() {
//     const title = "Other"

//     return (
//         <div>
//             <Header title={title} />
//             <h1 className="bg-primary px-3 text-white display-4">
//                 React
//             </h1>
//             <div className="card p-3">
//                 <p>
//                     これは、もう一つのページの表示です。
//                 </p>
//                 <Link href="/">
//                     <a>&lt;&lt; Back to Index page</a>
//                 </Link>
//             </div>
//         </div>
//     )
// }


// list 5-13
import Layout from '../components/layout'
import Link from 'next/link'

export default function Other() {
    return (
        <div>
            <Layout header="Next.js" title="Other page.">
                <div className="card p-4 text-center">
                    <h5 className="mb-4">This is Other page...</h5>
                    <Link href=".">
                        <button className="btn btn-primary">
                            &lt;&lt; Back to Top
                        </button>
                    </Link>
                </div>
            </Layout>
        </div>
    )
}