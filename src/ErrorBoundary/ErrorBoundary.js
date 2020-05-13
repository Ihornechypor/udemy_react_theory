import React from 'react';


export default class ErrorBoundary extends React.Component {
    state = {
        hasEror: false
    }

    componentDidCatch(error, info){
        this.setState({hasEror: true})
    }

    render(){
        if(this.state.hasEror){
            return <h1>went wornf</h1>
        }

        return this.props.children
    }
};
