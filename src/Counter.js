import { Component } from 'react'

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
        const { max, step } = this.props
        this.setState(state => {
            if (state.count > max) return;
            return { count: state.count + step }
        })


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
