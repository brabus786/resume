import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {

    state = {
        ru:false,
        en:true
    };

    hendChange = (props) =>{
        if(props.target.innerText === 'En'){
            this.setState({en:true,ru:false})
        }
        if(props.target.innerText === 'Ru'){
            this.setState({en:false,ru:true})
        }
    };

    render() {
        return (
            <div>
                <Header hendChange = {this.hendChange} leng = {this.state}/>
                <Main leng = {this.state} />
            </div>
        );
    }
}

export default App;

