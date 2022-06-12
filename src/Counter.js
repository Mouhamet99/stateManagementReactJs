import { Component } from 'react'

const getStateFromLocaleStrorage = () => {
    const storage = localStorage.getItem('counterStorage')
    return storage ? JSON.parse(storage) : { count: 0 }
}
const setStateToLocaleStorage = (state) => {
    localStorage.setItem('counterStorage', JSON.stringify(state))
}

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromLocaleStrorage()
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
    }
    updateDocumentTitle() {
        document.title = `Counter: ${this.state.count}`
    }

    increment() {
        this.setState((state, props) => {
            const { max, step } = props
            if (state.count > max) return;
            return { count: state.count + step }
        }, this.updateDocumentTitle)
    }

    decrement() {
        this.setState((state) => {
            return { count: this.state.count - 1 }
        }, this.updateDocumentTitle)

    }

    reset() {
        this.setState({
            count: 0
        }, this.updateDocumentTitle)
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
