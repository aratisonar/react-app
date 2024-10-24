//import Message from './Message';
//import ListGroup from "./componenets/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  //  let items = ["Raniganj", "Durgapur", "Asansol", "Kolkata", "Patna", "Delhi"];
  //  const handleSelectItem=(item:string)=>{
  //   console.log(item);
  // }
  //return <div><Message/></div>
  return (
    // <div>
    //   <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    // </div>
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
