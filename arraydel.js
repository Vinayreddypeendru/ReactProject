import React,{useState} from "react";
    
// const Harry = () => {
// const intialArray = [
//         {
//           id: "sdhaffsdkfjas",
//           firstName: "emma",
//           lastName: "watson",
//           age: 27,
//         },
//         {
//           id: "ksafewyiasere",
//           firstName: "srikanth",
//           lastName: "racharla",
//           age: 24,
//         },
//         {
//           id: "35232fsf",
//           firstName: "don",
//           lastName: "seenu",
//           age: 24,
//         },
//       ];
//       const [data, setData] = useState(intialArray);
//       console.log(data);
    
//       const handelete= (comingId) => {
//         const filterData = data.filter((eachItem) => {
//           return eachItem.id !== comingId;
//         });
//         setData(filterData);
//       };
//       return (
//         <div>
//           <ul>
//             {data.map((eachItem, index) => {
//               const { firstName, lastName, age, id } = eachItem;
//               return (
//                 <li key={index}>
//                   <div>
//                     my firstName <strong>{firstName}</strong>
//                   </div>
//                   <div>
//                     my lastName <strong> {lastName}</strong>
//                   </div>
//                   <div>
//                     my age <strong>{age}</strong>
//                   </div>
//                  <button onClick={()=>handelete(id)} >delete</button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       );
//     };

const Harry = () => {
//  const [data ,showData] = useState(false);
//  const handlechange = () =>{
//   showData(!data)
//  }

  // // return( <div>
  // //   <button onClick={handlechange}>{data? "hide" : "show" }</button>
  // //   { data && ( <div> hi every one this vinay reddy web site </div>)}
  // // </div>
  

  // )
  const [name , enterName] = useState("");
  const setfullName = (e) =>{
    enterName(e.target.value);
  }
  
  return ( 
    <div>
      <form>
        <input
        type="text"
        name="fullname"
        id="name"
        value={name}
        placeholder="enterfullname"
        onChange={setfullName}
        />
        </form>
      
    </div>
  )

}

   
export default Harry;