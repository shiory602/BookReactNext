// list 4-1
// import React, { useState } from 'react'
// import './App.css';

// function App() {
//   const [message] = useState("Welcome to Hooks!")

//   return (
//     <div className="App">
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5">{message}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// // list 4-2
// import React, { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3">click: {count} times!</p>
//           <div><button className="btn btn-primary"
//                   onClick={clickFunc}>
//                     Click me
//               </button></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// // list 4-3
// import React, { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [flag, setFlag] = useState(false)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }
//   const changeFlag = (e) => {
//     setFlag(e.target.checked)
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         {flag ?
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3">click: {count} times!</p>
//           <div><button className="btn btn-primary"
//                   onClick={clickFunc}>
//                     Click me
//               </button></div>
//         </div>
//         :
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3 text-left text-primary">
//             click: {count} times!</p>
//           <div><button className="btn btn-primary"
//                   onClick={clickFunc}>
//                     Click me
//               </button></div>
//         </div>
//         }
//         <div className="form-group h6 text-center pt-3">
//           <input type="checkbox" className="form-check-input"
//             id="check1" onChange={changeFlag} />
//           <label className="form-check-label" htmlFor="check1">
//             Change form style.
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// // list 4-4
// import React, { useState } from 'react'
// import './App.css'

// function AlertMessage() {
//   return <div className="alert alert-primary h5 text-primary">
//     This is Alert message!
//   </div>
// }

// function CardMessage() {
//   return <div className="card p-3 h5 border-primary text-center">
//     This is Card message!
//   </div>
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//         <CardMessage />
//       </div>
//     </div>
//   );
// }

// export default App;



// // list 4-5
// import React, { useState } from 'react'
// import './App.css'

// function AlertMessage(props) {
//   return <div className="alert alert-primary h5 text-primary">
//     {props.message}
//   </div>
// }

// function CardMessage(props) {
//   return <div className="card p-3 h5 border-primary text-center">
//     {props.message}
//   </div>
// }

// function App() {
//   const [msg] = useState("This is sample message!")

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//       </div>
//     </div>
//   );
// }

// export default App;


// list 4-6
import React, { useState } from 'react'
import './App.css'

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    {props.message}
  </div>
}

function CardMessage(props) {
  return <div className="card p-3 h5 border-primary text-center">
    {props.message}
  </div>
}

function App() {
  const [msg, setMsg] = useState("This is sample message!")

  const doAction = () => {
    let res = window.prompt('type your name:')
    setMsg("Hello, " + res + "!!")
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;