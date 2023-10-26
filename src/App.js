import { Component } from 'react';
import RouterPages from "./utils/RouterPages";
import Navbar from "./components/Navbar"


export default class App extends Component {
    render(){
        return(
            <>
                <Navbar/>
                <RouterPages/>
            </>
        )
    }
}
