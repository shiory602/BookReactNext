// // list 5-17
// import {useState} from 'react'
// import Layout from '../components/layout'

// export default function Home() {
//   const url = './data.json'
//   const [data, setData] = useState({message:'', data: []})

//   fetch(url)
//     .then(res=> res.json())
//     .then(res=> setData(res))
//     // console.log(`The data is ${data}`)

//   return (
//     <div>
//       <Layout header="Next.js" title="Top page.">
//         <div className="alert alert-primary text-center">
//           <h5 className="mb-4">{data.message}</h5>
//           <table className="table bg-white">
//             <thead className="table-dark">
//               <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
//             </thead>
//             <tbody>
//               {data.data.map((value, key) => (
//                 <tr key={key}>
//                   <th>{value.name}</th>
//                   <td>{value.mail}</td>
//                   <td>{value.age}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Layout>
//     </div>
//   )
// }





// list 5-18
import Layout from '../components/layout'
import useSWR from 'swr'

export default function Home() {
  const { data } = useSWR('/data.json')

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { data != undefined ? data.message : 'error...' }
          </h5>
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
        </div>
      </Layout>
    </div>
  )
}