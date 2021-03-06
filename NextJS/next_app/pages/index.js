// // list 5-2
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   let title = "Next.js page"
//   let message = "React Next.js sample page."

//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
//       </Head>

//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">{title}</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5">{message}.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// // list 5-3
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   let title = "Next.js page"
//   let message = "React Next.js sample page."

//   const h1 = {
//     textAlign: 'right',
//     padding: '5px 15px'
//   }

//   const p ={
//     textAlign:'left',
//     margin:'0px 5px',
//     color:'#669',
//     fontSize: '18pt'
//   }

//   const subtitle = {
//     textAlign:'center',
//     margin: '0px 5px',
//     color: '#99d',
//     fontSize: '24pt',
//     fontWeight: 'bold'
//   }

//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
//       </Head>

//       <h1 className="bg-primary text-white display-4 " style={h1}>React</h1>
//       <div className="container">
//         <p className="my-3" style={subtitle}>{title}</p>
//         <div className="alert alert-primary text-center">
//           <p className="h5" style={p}>{message}.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// // list 5-4
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   let title = "Next.js page"
//   let message = "React Next.js sample page."

//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
//       </Head>
//       <style jsx>{`
//         h1 {
//           textAlign: center;
//         }

//         h2 {
//           textAlign: center;
//           margin: 0px 5px;
//           color: #aad;
//           font-size: 36pt;
//           font-weight: bold;
//         }

//         p {
//           textAlign: center;
//           margin: 0px 5px;
//           color: blue;
//           fontSize: 18pt;
//         }
//       `}</style>

//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h2 className="my-3">{title}</h2>
//         <div className="alert alert-primary text-center">
//           <p className="h5">{message}.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// list 5-6
import Header from './header'

export default function Home() {
  let title = "Next.js page"
  let message = "React Next.js sample page."

  return (
    <div>
      <Header title={title} />
      <h1 className="bg-primary text-white display-4 text-right">React</h1>
      <div className="container">
        <h3 className="my-3 text-primary text-center">{title}</h3>
        <div className="alert alert-primary text-left">
          <p className="h5">{message}.</p>
        </div>
      </div>
    </div>
  )
}
