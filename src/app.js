
import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Chat from './components/chat/chat'
import Join from './components/join/join'

const App = (props)=>(
    <Router>
        <Route path='/' exact component = {Join}/>
        <Route path='/chat' component = {Chat}/>
    </Router>
)


export default App