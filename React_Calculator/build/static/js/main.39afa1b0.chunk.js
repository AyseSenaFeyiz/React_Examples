(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var s=r(0),a=r.n(s),l=r(7),i=r.n(l),n=(r(14),r(1)),o=r(2),u=r(4),c=r(3),h=r(5);function d(t){return a.a.createElement("button",{className:"square",onClick:t.onClick},t.value)}function m(t){return a.a.createElement("button",{className:"square2",onClick:t.onClick},t.value)}var S=function(t){function e(){var t,r;Object(n.a)(this,e);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(r=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(a)))).state={str:"",result:0,operator:"",result1:0,result2:0},r}return Object(h.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t,e){if("operator"===e){if(""===this.state.operator||"="===t){if("AC"===t)this.setState({result:0,operator:"",result1:0,result2:0,str:""});else if("%"===t)this.setState({result:this.state.result1/100,result1:this.state.result1/100,operator:"",str:(this.state.result1/100).toString()});else if("+/-"===t)this.setState({result:-1*this.state.result1,result1:-1*this.state.result1,operator:"",str:(-1*this.state.result1).toString()});else if("."===t){var r=this.state.result1.toString();console.log("str"+r),r.concat("."),this.setState({result:parseFloat(r)})}else if("+"===t)this.setState({result1:this.state.result1+this.state.result2,result2:0,operator:t,str:this.state.str.toString().concat(t)});else if("-"===t)this.setState({result1:this.state.result1-this.state.result2,result2:0,operator:t,str:this.state.str.toString().concat(t)});else if("/"===t)this.setState({operator:t,str:this.state.str.toString().concat(t)});else if("x"===t)this.setState({result2:0,operator:t,str:this.state.str.toString().concat(t)});else if("="===t)if("+"===this.state.operator)this.setState({result:this.state.result1+this.state.result2,result1:this.state.result1+this.state.result2,result2:0,str:(this.state.result1+this.state.result2).toString(),operator:""});else if("-"===this.state.operator)this.setState({result:this.state.result1-this.state.result2,result1:this.state.result1-this.state.result2,result2:0,str:(this.state.result1-this.state.result2).toString(),operator:""});else if("/"===this.state.operator)this.setState({result:this.state.result1/this.state.result2,result1:this.state.result1/this.state.result2,result2:0,str:(this.state.result1/this.state.result2).toString(),operator:""});else if("x"===this.state.operator)this.setState({result:this.state.result1*this.state.result2,result1:this.state.result1*this.state.result2,result2:0,str:(this.state.result1*this.state.result2).toString(),operator:""});else if("."===this.state.operator){r=this.state.result.toString();console.log("str"+r),r.concat("."),r.concat(t),console.log("ek str"+r),this.setState({result:parseFloat(r)})}console.log(this.state)}}else"number"===e&&(console.log("number"),""===this.state.operator?this.setState({result1:10*this.state.result1+t,str:this.state.str.concat(t)}):this.setState({result2:10*this.state.result2+t,str:this.state.str.concat(t)}),console.log(this.state))}},{key:"renderSquare",value:function(t,e){var r=this;return"operator"===e?a.a.createElement(m,{value:t,name:e,onClick:function(){return r.handleClick(t,e)}}):a.a.createElement(d,{value:t,name:e,onClick:function(){return r.handleClick(t,e)}})}},{key:"render",value:function(){var t="Result: "+this.state.result;return a.a.createElement("div",null,a.a.createElement("div",{className:"status"},this.state.str),a.a.createElement("div",{className:"status"},t),a.a.createElement("div",{className:"board-row"},this.renderSquare("AC","operator"),this.renderSquare("+/-","operator"),this.renderSquare("%","operator"),this.renderSquare("/","operator")),a.a.createElement("div",{className:"board-row"},this.renderSquare(7,"number"),this.renderSquare(8,"number"),this.renderSquare(9,"number"),this.renderSquare("x","operator")),a.a.createElement("div",{className:"board-row"},this.renderSquare(4,"number"),this.renderSquare(5,"number"),this.renderSquare(6,"number"),this.renderSquare("-","operator")),a.a.createElement("div",{className:"board-row"},this.renderSquare(1,"number"),this.renderSquare(2,"number"),this.renderSquare(3,"number"),this.renderSquare("+","operator")),a.a.createElement("div",{className:"board-row"},this.renderSquare("",null),this.renderSquare(0,"number"),this.renderSquare("",null),this.renderSquare("=","operator")))}}]),e}(a.a.Component),p=function(t){function e(){return Object(n.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"calculator"},a.a.createElement("div",{className:"calculator-board"},a.a.createElement(S,null)),a.a.createElement("div",{className:"calculator-info"},a.a.createElement("div",null),a.a.createElement("ol",null)))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,r){t.exports=r(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.39afa1b0.chunk.js.map