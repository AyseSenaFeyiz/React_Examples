(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),s=a(16),n=a.n(s),i=(a(25),a(4)),c=a(5),u=a(7),o=a(6),m=a(8),h=(a(27),a(28),a(10)),p=a.n(h),E=a(51),d=a(52),b=a(49),f=a(18);function g(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();y(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(g,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=y(this.state.squares);return e=t?"Kazanan: "+t:"S\u0131radaki Oyuncu: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",null,l.a.createElement("div",{className:"status"},e),l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component);function S(){window.location.reload()}function y(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(f.a)(t[a],3),l=r[0],s=r[1],n=r[2];if(e[l]&&e[l]===e[s]&&e[l]===e[n])return e[l]}return null}var x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(v,null)),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null),l.a.createElement("ol",null))),l.a.createElement("button",{className:"button",onClick:S}," ",l.a.createElement("span",null,"New Game")," "),"  ")}}]),t}(l.a.Component);function k(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function w(e){return l.a.createElement("button",{className:"square2",onClick:e.onClick},e.value)}var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={str:"",result:0,operator:"",result1:0,result2:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e,t){if("operator"===t){if(""===this.state.operator||"="===e){if("AC"===e)this.setState({result:0,operator:"",result1:0,result2:0,str:""});else if("%"===e)this.setState({result:this.state.result1/100,result1:this.state.result1/100,operator:"",str:(this.state.result1/100).toString()});else if("+/-"===e)this.setState({result:-1*this.state.result1,result1:-1*this.state.result1,operator:"",str:(-1*this.state.result1).toString()});else if("."===e){var a=this.state.result1.toString();console.log("str"+a),a.concat("."),this.setState({result:parseFloat(a)})}else if("+"===e)this.setState({result1:this.state.result1+this.state.result2,result2:0,operator:e,str:this.state.str.toString().concat(e)});else if("-"===e)this.setState({result1:this.state.result1-this.state.result2,result2:0,operator:e,str:this.state.str.toString().concat(e)});else if("/"===e)this.setState({operator:e,str:this.state.str.toString().concat(e)});else if("x"===e)this.setState({result2:0,operator:e,str:this.state.str.toString().concat(e)});else if("="===e)if("+"===this.state.operator)this.setState({result:this.state.result1+this.state.result2,result1:this.state.result1+this.state.result2,result2:0,str:(this.state.result1+this.state.result2).toString(),operator:""});else if("-"===this.state.operator)this.setState({result:this.state.result1-this.state.result2,result1:this.state.result1-this.state.result2,result2:0,str:(this.state.result1-this.state.result2).toString(),operator:""});else if("/"===this.state.operator)this.setState({result:this.state.result1/this.state.result2,result1:this.state.result1/this.state.result2,result2:0,str:(this.state.result1/this.state.result2).toString(),operator:""});else if("x"===this.state.operator)this.setState({result:this.state.result1*this.state.result2,result1:this.state.result1*this.state.result2,result2:0,str:(this.state.result1*this.state.result2).toString(),operator:""});else if("."===this.state.operator){a=this.state.result.toString();console.log("str"+a),a.concat("."),a.concat(e),console.log("ek str"+a),this.setState({result:parseFloat(a)})}console.log(this.state)}}else"number"===t&&(console.log("number"),""===this.state.operator?this.setState({result1:10*this.state.result1+e,str:this.state.str.concat(e)}):this.setState({result2:10*this.state.result2+e,str:this.state.str.concat(e)}),console.log(this.state))}},{key:"renderSquare",value:function(e,t){var a=this;return"operator"===t?l.a.createElement(w,{value:e,name:t,onClick:function(){return a.handleClick(e,t)}}):l.a.createElement(k,{value:e,name:t,onClick:function(){return a.handleClick(e,t)}})}},{key:"render",value:function(){var e="Result: "+this.state.result;return l.a.createElement("div",null,l.a.createElement("div",{className:"status"},this.state.str),l.a.createElement("div",{className:"status"},e),l.a.createElement("div",{className:"board-row"},this.renderSquare("AC","operator"),this.renderSquare("+/-","operator"),this.renderSquare("%","operator"),this.renderSquare("/","operator")),l.a.createElement("div",{className:"board-row"},this.renderSquare(7,"number"),this.renderSquare(8,"number"),this.renderSquare(9,"number"),this.renderSquare("x","operator")),l.a.createElement("div",{className:"board-row"},this.renderSquare(4,"number"),this.renderSquare(5,"number"),this.renderSquare(6,"number"),this.renderSquare("-","operator")),l.a.createElement("div",{className:"board-row"},this.renderSquare(1,"number"),this.renderSquare(2,"number"),this.renderSquare(3,"number"),this.renderSquare("+","operator")),l.a.createElement("div",{className:"board-row"},this.renderSquare("",null),this.renderSquare(0,"number"),this.renderSquare("",null),this.renderSquare("=","operator")))}}]),t}(l.a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"calculator"},l.a.createElement("div",{className:"calculator-board"},l.a.createElement(j,null)),l.a.createElement("div",{className:"calculator-info"},l.a.createElement("div",null),l.a.createElement("ol",null)))}}]),t}(l.a.Component),C=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"banner"}),l.a.createElement("h3",null,l.a.createElement(p.a,{src:"https://github.com/AyseSenaFeyiz/ileriProgramlama/blob/master/ikon.png?raw=true",width:"100",height:"100","data-id":"0"}),l.a.createElement("br",null),"React Projects"),l.a.createElement("div",{class:"menu"},l.a.createElement("h3",null,"      Projects"),l.a.createElement("ul",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/react_router/build/index.html"},"React Router")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/xox/build/index.html"},"XOX Game")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html"},"Calculator")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html"},"To Do App")),"\u2003"))),l.a.createElement("div",{className:"footer"},l.a.createElement("h3",null,"GitHub:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AyseSenaFeyiz"},"My GitHub Profile")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AyseSenaFeyiz/React_Examples"},"React Examples Repository"))," \u2003"),l.a.createElement("h3",null,"Useful Links:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:" https://github.com/AyseSenaFeyiz/create-react-app"},"Creating a react app")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.udemy.com/react-redux-egitimi/learn/v4/t/lecture/10381984?start=0"},"Learn react")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.npmjs.com/package/react-image"},"React image")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://omergulcicek.github.io/react/uygulamali-egitim/xox-oyunu"},"XOX Game")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://medium.com/@alicankustemur/react-js-ve-github-pages-ile-single-page-application-olu%C5%9Fturulmas%C4%B1-c68e9d09232"},"Deploy your react app on GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://medium.com/@mozkarakoc/react-tutorial-1-proje-kurulumu-react-webpack-babel-eslint-166b4545d48c"},"React, Webpack, Babel, ESLint")),"\u2003"))))}}]),t}(l.a.Component)),O=(a(43),a(45),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"banner"}),l.a.createElement("h3",null,l.a.createElement(p.a,{src:"https://github.com/AyseSenaFeyiz/ileriProgramlama/blob/master/ikon.png?raw=true",width:"100",height:"100","data-id":"0"}),l.a.createElement("br",null),"React Projects"),l.a.createElement("div",{class:"menu"},l.a.createElement("h3",null,"      Projects"),l.a.createElement("ul",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/react_router/build/index.html"},"React Router")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/xox/build/index.html"},"XOX Game")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html"},"Calculator")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html"},"To Do App")),"\u2003"))),l.a.createElement("div",{className:"footer"},l.a.createElement("h3",null,"GitHub:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AyseSenaFeyiz"},"My GitHub Profile")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AyseSenaFeyiz/React_Examples"},"React Examples Repository"))," \u2003"),l.a.createElement("h3",null,"Useful Links:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:" https://github.com/AyseSenaFeyiz/create-react-app"},"Creating a react app")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.udemy.com/react-redux-egitimi/learn/v4/t/lecture/10381984?start=0"},"Learn react")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.npmjs.com/package/react-image"},"React image")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://omergulcicek.github.io/react/uygulamali-egitim/xox-oyunu"},"XOX Game")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://medium.com/@alicankustemur/react-js-ve-github-pages-ile-single-page-application-olu%C5%9Fturulmas%C4%B1-c68e9d09232"},"Deploy your react app on GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://medium.com/@mozkarakoc/react-tutorial-1-proje-kurulumu-react-webpack-babel-eslint-166b4545d48c"},"React, Webpack, Babel, ESLint")),"\u2003")))),l.a.createElement("div",null,l.a.createElement(d.a,{activeClassName:"activelink",exact:!0,to:"/React_Examples/react_router/build/index.html"},"Homepage")," ",l.a.createElement("br",null),l.a.createElement(d.a,{activeClassName:"activelink",exact:!0,to:"/xox"},"XOX Game")," ",l.a.createElement("br",null),l.a.createElement(d.a,{activeClassName:"activelink",exact:!0,to:"/calculator"},"Calculator")," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{path:"/xox",exact:!0,strict:!0,component:x}),l.a.createElement(b.a,{path:"/calculator",exact:!0,strict:!0,component:q}),l.a.createElement(b.a,{path:"/React_Examples/react_router/build/index.html",exact:!0,strict:!0,component:C})))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.9df02a00.chunk.js.map