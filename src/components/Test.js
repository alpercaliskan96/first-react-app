import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a : 10
        }
    }
    componentDidMount() {
        //API istekleri burda yapılabilir
        this.setState({
            a : 20
        })
    }

    componentDidUpdate(prevProps, prevState) {
        
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;