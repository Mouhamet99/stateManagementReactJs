import { Component } from 'react'

const getStateFromLocaleStrorage = () => {
    const storage = localStorage.getItem('counterStorage')
    return storage ? JSON.parse(storage) : { count: 0 } 
}
function setStateToLocaleStorage() {
    localStorage.setItem('counterStorage', JSON.stringify(this.state))
    console.log(this.state)
}
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromLocaleStrorage()
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((state, props) => {
            const { max, step } = props
            if (state.count > max) return;
            return { count: state.count + step }
        },setStateToLocaleStorage.bind(this))
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
