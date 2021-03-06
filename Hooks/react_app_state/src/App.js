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


// // list 4-6
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
//   const [msg, setMsg] = useState("This is sample message!")

//   const doAction = () => {
//     let res = window.prompt('type your name:')
//     setMsg("Hello, " + res + "!!")
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//         <div className="text-center">
//           <button onClick={doAction} className="btn btn-primary">
//             Click me!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// // list 4-7
// import React, { useState } from 'react'
// import './App.css'

// function AlertMessage(props) {
//   const data = ["Hello!", "Welcome...", "Good-bye?"]

//   const actionAlert = () => {
//     const re = data[Math.floor(Math.random() * data.length)]
//     props.setAlert('message: "' + re + '".')
//   }

//   return <div className="alert alert-primary h5 text-primary">
//     <h5>{props.alert}</h5>
//     <button onClick={actionAlert} className="btn btn-primary">
//       Click me!
//     </button>
//   </div>
// }

// function CardMessage(props) {
//   const [count, setCount] = useState(0)

//   const actionCard = () => {
//     setCount(count + 1)
//     props.setCard("card counter: " + count + " count.")
//   }

//   return <div className="card p-3 h5 border-primary text-center">
//     <h5>{props.card}</h5>
//     <button onClick={actionCard} className="btn btn-secondary">
//       Click me!
//     </button>
//   </div>
// }

// function App() {
//   const [alert, setAlert] = useState("This is alert message!")
//   const [card, setCard] = useState("This is card message!")

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage alert={alert} setAlert={setAlert} />
//         <CardMessage card={card} setCard={setCard} />
//         <div className="text-right">
//           <p>{alert}</p>
//           <p>{card}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// list 4-8
import React, { useState } from 'react'
import './App.css'

function AlertMessage(props) {
  const data = props.data
  const msg = JSON.stringify(data)

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <hr />
    <table className="table h6">
      <tbody>
        <tr><th>Name</th><td>{data.name}</td></tr>
        <tr><th>Mail</th><td>{data.mail}</td></tr>
        <tr><th>Age</th><td>{data.age}</td></tr>
      </tbody>
    </table>
  </div>
}

function App() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [age, setAge] = useState(0)
  const [form, setForm] = useState({
    name: 'no name', mail: 'no mail', age:0
  })

  const doChangeName = (event) => {
    setName(event.target.value)
  }
  const doChangeMail = (event) => {
    setMail(event.target.value)
  }
  const doChangeAge = (event) => {
    setAge(event.target.value)
  }

  const doSubmit = (event) => {
    setForm({name:name, mail:mail, age:age})
    event.preventDefault()
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage data={form} setData={setForm} />
        <form onSubmit={doSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control"
              onChange={doChangeName} />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" className="form-control"
              onChange={doChangeMail} />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" className="form-control"
              onChange={doChangeAge} />
          </div>
          <input type="submit" className="btn btn-primary"
            value="Click" />
        </form>
      </div>
    </div>
  );
}

export default App;