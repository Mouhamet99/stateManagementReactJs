import { Component } from 'react'

function increment(state, props) {
    const { max, step } = props
    if (state.count > max) return;
    return { count: state.count + step }
}

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(increment)
        this.setState(increment)
        this.setState(increment)
    }
    decrement() {
        this.setState((state) => {
            return { count: this.state.count - 1 }
        })

    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state
        return (
            <div className="Counter">
                <h1>Counter</h1>
                <p>{count}</p>
                <button className="btn-lg" onClick={this.increment}>+</button>
                <button className="btn-lg" onClick={this.decrement}>-</button>
                <button className="btn-lg" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
