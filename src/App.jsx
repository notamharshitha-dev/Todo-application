import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './propsDrillingAndContext/a'
import Count from './hooks/count'
import { myContext}  from './propsDrillingAndContext/mycontext'
import Todo from './hooks/todolist'

function App() { 
      var name="Harshitha and Hari";
      var obj={
            fn:"harshitha",
            ln:"Notam"
      }
      function hello(){
            //alert("hello")
            return <h1>Hello from function </h1>
      }
      return <myContext.Provider value={{name,obj,hello}} >
            <Todo/>
            <Count/>
            <A/>
      </myContext.Provider>
} 
export default App
