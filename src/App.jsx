import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet } from 'react-router-dom'
import Form from './formHandling/formHandling'
import CounterReducer from './reducers/counterReducers'

import ThemeChanging from './reducers/themeChanging'
import Counter from './store/counter'
import Todolist from './store/todolist'
function App() {      
      return  <div className='m-3 p-3' >
           <Counter/>
            <Todolist/>
      </div>        
      } 
export default App
