import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox(){
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => 
          setChecked(checked => !checked)
        }></input>
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <CheckBox></CheckBox>,
  document.getElementById("root")
)

// function App(){
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   const [status, setStatus] = useState("Open");

//   return (
//     <>
//       <div>
//         <h1>{year}</h1>
//         <button onClick={() => setYear(year + 1)}>New Year!</button>
//       </div>
//       <div>
//         <h1>Manager on duty: {manager}</h1>
//         <button onClick={() => setManager("Rachel")}>New Manager</button>
//       </div>
//       <div>
//         <h1>Status {status}</h1>
//         <button onClick={() => setStatus("Open")}>Open</button>
//         <button onClick={() => setStatus("Back in 5")}>Break</button>
//         <button onClick={() => setStatus("Closed")}>Closed</button>
//       </div>
//     </>
//   )
// }
// const [,, fruit] = ["popcorn", "pretzels", "pineapples"];
// console.log(fruit);

// function Lake({ name }){
//   return (
//     <h1>{name}</h1>
//   )
// }

//const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];

// const lakeList = [
//   { id: "1", name: "Echo", trailhead: "Echo" },
//   { id: "2", name: "Maud", trailhead: "Wrights" },
//   { id: "3", name: "Velma", trailhead: "Bayview" }
// ]

// const list = [1, 2, 3, 4, 5]

// function Lake(){
//   return (
//     <div>
//       <h1>Lake!</h1>
//     </div>
//   );
// }

// function SkiResort(){
//   return (
//     <div>
//       <h1>SkiResort!</h1>
//     </div>
//   )
// }

// function App(props){
//   return (
//     <>
//       <Lake></Lake>
//       <SkiResort></SkiResort>
//     </>
//   )
//     // if (props.season === "Summer"){
//     //   return <Lake name="Jenny Lake"></Lake>
//     // } else if (props.season === "Winter"){
//     //   return <SkiResort name="JHMR"></SkiResort>
//     // } else {
//     //   return <h1>Comeback in the winter or summer!</h1>
//     // }
//   // return (
//   //   // <ul>
//   //   //   {items.map(item => (
//   //   //     <li key={item.toString()}>{item}</li>
//   //   //   ))}
//   //   // </ul>
//   //   // <div>
//   //   //   {lakes.map(lake => (
//   //   //     <div key={lake.id}>
//   //   //       <h2>{lake.name}</h2>
//   //   //       <p>Accessed by: {lake.trailhead}</p>
//   //   //     </div>
//   //   //   ))};
//   //   // </div>
//   //   // <div>
//   //   //   <Lake name="Lake Tahoe"></Lake>
//   //   //   <Lake name="Angora Lake"></Lake>
//   //   //   <Lake name="Shirley Lake"></Lake>
//   //   // </div>
//   // );
// }

// let city = {
//   name: "Madrid",
//   country: "Spain"
// };

// function Hello({ library, message, number }){
//   // console.log(Object.keys(props));
//   return (
//     <div>
//       <h1>Welcome to {library}!</h1>
//       <p>{message}</p>
//       <p>{number} Props Total</p>
//     </div>
//   )
// }

// ReactDOM.render(
//   // <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>,
//   <Hello 
//     library="Vue" 
//     message="Have fun!"
//     number={3}></Hello>, 
//   document.getElementById('root')
// );

// ReactDOM.render(
//   React.createElement("div1", { style: { color: "blue" } }, 
//     React.createElement("h1", null, "Hi!")),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   // React.createElement(
//   //   "ul", 
//   //   { style: { color: "blue" } },
//   //   React.createElement("li", null, "Hot Dogs"),
//   //   React.createElement("li", null, "Hamburgers"),
//   //   React.createElement("li", null, "Pizza"),
//   //   React.createElement("li", null, "Sushi")
//   // ),
//   <ul>
//     <li>Hot Dogs</li>
//     <li>Hamburgers</li>
//     <li>Pizza</li>
//     <li>Sushi</li>
//   </ul>
//   ,
//   document.getElementById('root')
// );
