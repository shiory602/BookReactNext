// // list 4-14
// import React, { useState } from 'react'
// import './App.css';

// function useCounter() {
//   const [num, setNum] = useState(0)

//   const count = () => {
//       setNum(num + 1)
//   }

//   return [num, count]
// }

// function AlertMessage(props) {
//   const [counter, plus] = useCounter()

//   return <div className="alert alert-primary h5 text-center">
//     <h4>count: {counter} .</h4>
//     <button onClick={plus} className="btn btn-primary">
//       count
//     </button>
//   </div>
// }

// function App() {
//   return (
//     <div className="App">
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//       </div>
//     </div>
//   );
// }

// export default App;



// // list 4-16
// import React, { useState, useEffect } from 'react'
// import './App.css';

// const useTax = (t1, t2) => {
//   const [price, setPrice] = useState(1000)
//   const [tx1] = useState(t1)
//   const [tx2] = useState(t2)

//   const tax = () => {
//       return Math.floor(price * (1.0 + tx1 / 1000))
//   }

//   const reduced = () => {
//       return Math.floor(price * (1.0 + tx2 / 100))
//   }

//   return [price, tax, reduced, setPrice]
// }

// function AlertMessage(props) {
//   const [price, tax, reduced, setPrice] = useTax(10, 8)

//   const DoChange = (e) => {
//     let p = e.target.value
//     setPrice(p)
//   }

//   return <div className="alert alert-primary h5">
//     <p className="h5">通常税率: {tax()} 円.</p>
//     <p className="h5">軽減税率: {reduced()} 円.</p>
//     <div className="font-group">
//       <label className="form-group-label">Price:</label>
//       <input type="number" className="form-control"
//         onChange={DoChange} value={price} />
//     </div>
//   </div>
// }

// function App() {
//   return (
//     <div className="App">
//       <h1 className="bg-primary text-white display-4 ">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//       </div>
//     </div>
//   );
// }

// export default App;



// list 4-18
import React, { useState, useEffect } from 'react'
import './App.css';

// 合計計算の関数
const total = (a) => {
  let re = 0
  for(let i = 0; i<= a; i++) {
    re += i
  }
  return re
}
// 消費税計算の関数
const tax = (a) => {
  return Math.floor(a * 1.1)
}

// 数値を計算しメッセージを渡す独自フック関数
function useCalc(num=0, func = (a) => {return a}) {
  const [msg, setMsg] = useState(null)

  const setValue = (p) => {
      let res = func(p)
      setMsg(<p className="h5">※ {p} の結果は、 {res} です。</p>)
  }

  return [msg, setValue]
}

// デフォルトのコンポーネント
function PlainMessage(props) {
  const [msg, setCalc] = useCalc()

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return <div className="p-3 h5">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange}
      className="form-control" />
  </div>
}

// 合計計算コンポーネント
function AlertMessage(props) {
  const [msg, setCalc] = useCalc(0, total)

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" className="form-control"
      onChange={onChange} min="0" max="10000" />
  </div>
}

// 消費税計算コンポーネント
function CardMessage(props) {
  const [msg, setCalc] = useCalc(0, tax)

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return <div className="card p-3 h5 border-primary">
    <h5>{msg}</h5>
    <input type="range" onChange={onChange}
      min="0" max="10000" step="100" className="form-control" />
  </div>
}

// ベースコンポーネント
function App() {
  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  );
}

export default App;
