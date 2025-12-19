import {useContext} from "react"
import Sidebar from './components/Sidebar.js'
import Chatsection from './components/Chatsection.js'
import Seperation from './components/Seperation.js'
import { dataContext } from "./UserContext"


function App() {
  let data=useContext(dataContext)
  console.log(data);
  return (
    <>
    <Sidebar/>
    <Seperation/>
    <Chatsection/> 
    </>
    
  );
}

export default App;
