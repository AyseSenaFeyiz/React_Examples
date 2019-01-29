import React, { Component } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function Square2(props) {
  return (
    <button className="square2" onClick={props.onClick}>
      {props.value}
    </button>
  );
}





class Board extends React.Component {

  state = {
    str: "",
    result: 0,
    operator: "",
    result1: 0,
    result2: 0
  }

  handleClick(v, n) {

    if (n === "operator") {
      if (this.state.operator==="" || v==="=" ) {
        if (v === "AC") {
          this.setState({
            result: 0,
            operator: "",
            result1: 0,
            result2: 0,
            str: ""
          })
        } else if (v === "%") {
          this.setState({
            result: this.state.result1 / 100,
            result1: this.state.result1 / 100,
            operator: "",
            str: (this.state.result1 / 100).toString()
          })
        } else if (v === "+/-") {
          this.setState({
            result: this.state.result1 * (-1),
            result1: this.state.result1 * (-1),
            operator: "",
            str: (this.state.result1 * (-1)).toString()
          })
        } else if (v === ".") {
  
          var str = this.state.result1.toString();
          console.log("str" + str)
          str.concat(".")
          this.setState({
            result: parseFloat(str),
  
          })
        } else if (v === "+") {
          this.setState({
            result1: this.state.result1 + this.state.result2,
            result2: 0,
            operator: v,
            str: ((this.state.str).toString()).concat(v)
          })
        } else if (v === "-") {
          this.setState({
            result1: this.state.result1 - this.state.result2,
            result2: 0,
            operator: v,
            str: ((this.state.str).toString()).concat(v)
          })
        } else if (v === "/") {
          this.setState({
  
  
            operator: v,
            str: ((this.state.str).toString()).concat(v)
          })
        } else if (v === "x") {
          this.setState({
            result2: 0,
            operator: v,
            str: ((this.state.str).toString()).concat(v)
  
          })
        } else if (v === "=") {
  
          if (this.state.operator === "+") {
            this.setState({
              result: this.state.result1 + this.state.result2,
              result1: this.state.result1 + this.state.result2,
              result2: 0,
              str: (this.state.result1 + this.state.result2).toString(),
              operator: ""
            })
  
          } else if (this.state.operator === "-") {
            this.setState({
              result: this.state.result1 - this.state.result2,
              result1: this.state.result1 - this.state.result2,
              result2: 0,
              str: (this.state.result1 - this.state.result2).toString(),
              operator: ""
            })
          } else if (this.state.operator === "/") {
            this.setState({
              result: this.state.result1 / this.state.result2,
              result1: this.state.result1 / this.state.result2,
              result2: 0,
              str: (this.state.result1 / this.state.result2).toString(),
              operator: ""
            })
          } else if (this.state.operator === "x") {
            this.setState({
              result: this.state.result1 * this.state.result2,
              result1: this.state.result1 * this.state.result2,
              result2: 0,
              str: (this.state.result1 * this.state.result2).toString(),
              operator: ""
            })
          } else if (this.state.operator === ".") {
            var str = this.state.result.toString();
            console.log("str" + str)
            str.concat(".")
            str.concat(v)
            console.log("ek str" + str)
            this.setState({
              result: parseFloat(str),
  
            })
          }
        }
        console.log(this.state)

      }
      
    } else if (n === "number") {
      console.log("number")
      if (this.state.operator === "") {
        this.setState({
          result1: this.state.result1 * 10 + v,
          str: this.state.str.concat(v)
        })

      }
      else {
        this.setState({
          result2: this.state.result2 * 10 + v,
          str: (this.state.str).concat(v)
        })
      }
      console.log(this.state)
    }
  }

  renderSquare(v, n) {

    if (n === "operator") {
      return <Square2 value={v} name={n}
        onClick={() => this.handleClick(v, n)}
      />;
    } else {
      return <Square value={v} name={n}
        onClick={() => this.handleClick(v, n)}
      />;
    }
  }

  render() {
    const result = 'Result: ' + this.state.result;

    return (
      <div>
        <div className="status" >{this.state.str}</div>
        <div className="status" >{result}</div>
        <div className="board-row">
          {this.renderSquare("AC", "operator")}
          {this.renderSquare("+/-", "operator")}
          {this.renderSquare("%", "operator")}
          {this.renderSquare("/", "operator")}
        </div>
        <div className="board-row">
          {this.renderSquare(7, "number")}
          {this.renderSquare(8, "number")}
          {this.renderSquare(9, "number")}
          {this.renderSquare("x", "operator")}
        </div>
        <div className="board-row">
          {this.renderSquare(4, "number")}
          {this.renderSquare(5, "number")}
          {this.renderSquare(6, "number")}
          {this.renderSquare("-", "operator")}
        </div>
        <div className="board-row">
          {this.renderSquare(1, "number")}
          {this.renderSquare(2, "number")}
          {this.renderSquare(3, "number")}
          {this.renderSquare("+", "operator")}
        </div>
        <div className="board-row">
          {this.renderSquare("", null)}
          {this.renderSquare(0, "number")}
          {this.renderSquare("", null)}
          {this.renderSquare("=", "operator")}
        </div>
      </div>
    );
  }
}

class Calculator extends React.Component {



  render() {
    return (
      <div className="calculator">
        <div className="calculator-board">

          <Board />
        </div>
        <div className="calculator-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Calculator;
