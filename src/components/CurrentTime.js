import React from "react";

export default class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: Date.now()
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        let currDate = new Date(this.state.time);
        return(<h1>{currDate.toString()}</h1>)
    }
}