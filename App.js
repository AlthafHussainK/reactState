import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        //bind
        this.handleClick = this.handleClick.bind(this)
        this.handleClickMinus = this.handleClickMinus.bind(this)
    }
    
    handleClick(){
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
            
        })
    }
    
    handleClickMinus(){
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <button onClick={this.handleClick} style={{color: "green", fontSize: 30,fontWeight: "bold", margin: 20}}>+</button>
                    <button onClick={this.handleClickMinus} style={{color: "red", fontSize: 35, fontWeight: "bold", margin: 20}}>-</button>
                </div>
            </div>
        )
    }
}

export default App
