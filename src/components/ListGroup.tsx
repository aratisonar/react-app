import { useState } from "react";

interface props {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (item: string) => void;
}
//import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: props) {
  //let items = ["Raniganj", "Durgapur", "Asansol", "Kolkata", "Patna", "Delhi"];
  // let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]//variable (selectedIndex)
  //arr[1]//updater function
  //Event Handler
  //const handleClick=(event:MouseEvent) => console.log(event);
  //   items = [];
  //const message=items.length===0?<p>No Item Found</p>:null
  //   const getMessage=()=>{
  //     return items.length===0?<p>No Item Found</p>:null
  //   }
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //{items.length===0 && <p>No Item Found</p>}
  // onClick={() => console.log(item,index)}
  // className="list-group-item active"
  //onClick={(event) => console.log(event)}
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
