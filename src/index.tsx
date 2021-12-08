import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
class App2 extends React.Component<any, any>{
    state = {
        counter: 0
    }
    plus = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.plus}>+</button>
            </div>
        );
    }
}
*/


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
