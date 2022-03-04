(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[13],{273:function(t,e,a){"use strict";var n;a.d(e,"a",(function(){return n})),function(t){t.DAYS_30="30days",t.DAYS_180="180days",t.YEAR_1="1year",t.YEAR_2="2years"}(n||(n={}))},336:function(t,e,a){},337:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var n=a(11),r=a(12),i=a(16),c=a(15),s=a(0),o=a.n(s),l=a(306),p=(a(338),a(1)),u=["#0088FE","#85144b","#FFBB28","#FF8042","#2ECC40","#FF4136","#001f3f","#0074D9","#FF851B","#00C49F","#F012BE","#7FDBFF","#FFDC00","#39CCCC","#3D9970","#B10DC9","#01FF70"],h=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={activeIndex:0},t.renderActiveShape=function(t){var e=Math.PI/180,a=t.cx,n=t.cy,r=t.midAngle,i=t.innerRadius,c=t.outerRadius,s=t.startAngle,o=t.endAngle,u=t.fill,h=t.payload,b=t.percent,d=t.value,f=Math.sin(-e*r),j=Math.cos(-e*r),m=a+(c+10)*j,v=n+(c+10)*f,O=a+(c+30)*j,y=n+(c+30)*f,x=O+22*(j>=0?1:-1),_=y,g=j>=0?"start":"end";return Object(p.jsxs)("g",{children:[Object(p.jsx)("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:u,children:h.name}),Object(p.jsx)(l.h,{cx:a,cy:n,innerRadius:i,outerRadius:c,startAngle:s,endAngle:o,fill:u}),Object(p.jsx)(l.h,{cx:a,cy:n,startAngle:s,endAngle:o,innerRadius:c+6,outerRadius:c+10,fill:u}),Object(p.jsx)("path",{d:"M".concat(m,",").concat(v,"L").concat(O,",").concat(y,"L").concat(x,",").concat(_),stroke:u,fill:"none"}),Object(p.jsx)("circle",{cx:x,cy:_,r:2,fill:u,stroke:"none"}),Object(p.jsx)("text",{x:x+12*(j>=0?1:-1),y:_,textAnchor:g,fill:"#333",children:"Blocks: ".concat(d)}),Object(p.jsx)("text",{x:x+12*(j>=0?1:-1),y:_,dy:18,textAnchor:g,fill:"#999",children:"(Rate: ".concat((100*b).toFixed(2),"%)")})]})},t.onPieEnter=function(e,a){t.setState({activeIndex:a})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.props.data.map((function(t){return{name:t.name,value:t.value}})).sort((function(t,e){return e.y-t.y}));return Object(p.jsxs)("div",{className:"bi-pie-chart",children:[Object(p.jsx)("div",{className:"bi-pie-chart__chart",children:Object(p.jsx)(l.g,{children:Object(p.jsx)(l.f,{children:Object(p.jsx)(l.e,{activeIndex:this.state.activeIndex,activeShape:this.renderActiveShape,data:e,innerRadius:100,outerRadius:140,fill:"#8884d8",dataKey:"value",onMouseEnter:this.onPieEnter,children:e.map((function(t,e){return Object(p.jsx)(l.d,{fill:u[e%u.length]},"cell-".concat(t.value))}))})})})}),Object(p.jsxs)("div",{className:"bi-pie-chart__legend bi-pie-chart__table bi-table",children:[Object(p.jsxs)("div",{className:"bi-pie-chart__row bi-table__row bi-pie-chart__row--header",children:[Object(p.jsx)("div",{className:"bi-pie-chart__cell bi-table__cell",children:this.props.labels.name}),Object(p.jsx)("div",{className:"bi-pie-chart__cell bi-table__cell",children:this.props.labels.value})]}),this.props.data.map((function(e,a){return Object(p.jsxs)("div",{className:"bi-pie-chart__row bi-table__row",children:[Object(p.jsxs)("div",{className:"bi-pie-chart__cell bi-table__cell",children:[Object(p.jsx)("span",{children:t.props.labels.name})," ",e.name]}),Object(p.jsxs)("div",{className:"bi-pie-chart__cell bi-table__cell",children:[Object(p.jsx)("span",{children:t.props.labels.value})," ",e.value]})]},a)}))]})]})}}]),a}(o.a.PureComponent)},338:function(t,e,a){},346:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(80),r=a(11),i=a(12),c=a(33),s=a.n(c),o=a(18),l=a(273),p=function(){function t(){Object(r.a)(this,t)}return Object(i.a)(t,null,[{key:"getChart",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.timespan;return s.a.get("".concat(o.a.apiUrl,"/charts/").concat(t),{params:{timespan:a||l.a.DAYS_30}}).then((function(e){return e?e.data:Promise.reject("Block api service. Request: ".concat(o.a.apiUrl,"/charts/").concat(t,"."))}))}}]),t}(),u={getChart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){return a({type:n.a}),p.getChart(t,e).then((function(t){a({payload:{data:t},type:n.b})}))}}}},347:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a(3),r=a(11),i=a(12),c=a(20),s=a(16),o=a(15),l=a(262),p=a.n(l),u=a(0),h=a.n(u),b=a(306),d=a(91),f=a(68),j=(a(336),a(1)),m=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=p()(this.props.label).format("DD.MM.YYYY"),e=null,a=this.props.payload?this.props.payload[0]:null;if(a){var n=a.payload.type||"chart",r=this.props.isScale?a.payload.originalValue:this.props.payload[0].value;e=Object(d.a)(n,r)}return Object(j.jsxs)("div",{className:"bi-chart-tooltip",children:[Object(j.jsx)("div",{className:"bi-chart-tooltip__label",children:t}),e]})}}]),a}(h.a.PureComponent),v=1e-4,O=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).formatLabel=n.formatLabel.bind(Object(c.a)(n)),n.formatXLabel=n.formatXLabel.bind(Object(c.a)(n)),n.formatTooltip=n.formatTooltip.bind(Object(c.a)(n)),n.renderTooltip=n.renderTooltip.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props.data,e=Math.ceil(Math.max.apply(null,t.map((function(t){return t.value})))),a=(Math.ceil(e/Math.pow(10,e.toString().length-1))+2)*Math.pow(10,e.toString().length-1);return this.props.isScale&&(t=t.map((function(t){return Object(n.a)(Object(n.a)({},t),{},{originalValue:t.value,value:t.value<=0?v:t.value})}))),Object(j.jsx)(b.g,{width:"100%",height:"100%",children:Object(j.jsxs)(b.b,{data:t,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"1",x2:"1",y2:"0",children:[Object(j.jsx)("stop",{offset:"20%",stopColor:"#0078FF",stopOpacity:0}),Object(j.jsx)("stop",{offset:"80%",stopColor:"#0078FF",stopOpacity:.2})]})}),this.props.compact?null:Object(j.jsx)(b.c,{stroke:"#e8e8e8",vertical:!1,strokeDasharray:"6 4",fill:"#fff"}),Object(j.jsx)(b.j,{dataKey:"timestamp",tick:{fill:"#828795",fontSize:14},tickLine:!1,tickCount:100,tickMargin:10,tickFormatter:this.formatXLabel,minTickGap:30,hide:this.props.compact}),Object(j.jsx)(b.k,{dataKey:"value",domain:[this.props.isScale?v:0,a],scale:this.props.isScale?"log":"auto",tickMargin:10,tickLine:!1,tickCount:5,minTickGap:30,tick:{fill:"#828795",fontSize:14},tickFormatter:this.formatLabel,hide:this.props.compact}),Object(j.jsx)(b.i,{content:this.renderTooltip}),Object(j.jsx)(b.a,{type:"linear",dataKey:"value",stroke:"#0078FF",yAxisId:0,fillOpacity:1,fill:"url(#colorUv)",animationDuration:300,isAnimationActive:!this.props.compact})]})})}},{key:"renderTooltip",value:function(t){return Object(j.jsx)(m,Object(n.a)(Object(n.a)({},t),{},{isScale:this.props.isScale}))}},{key:"formatLabel",value:function(t){return Object(f.a)(t,{fractionDigits:0})}},{key:"formatXLabel",value:function(t){return p()(t).format("DD MMM YYYY")}},{key:"formatTooltip",value:function(t){return Object(d.a)("chart",t)}}]),a}(h.a.PureComponent)},619:function(t,e,a){t.exports=a(620)},620:function(t,e,a){var n;"undefined"!==typeof self&&self,n=function(t,e){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(1),i=s(r),c=s(a(2));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var p=function(t){function e(){return o(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"downloadFile",value:function(t,e){!function(t,e){var a=window.URL||window.webkitURL||window,n=new Blob([e]);if("msSaveBlob"in navigator)navigator.msSaveBlob(n,t);else{if(!("download"in HTMLAnchorElement.prototype))throw new Error("Neither a[download] nor msSaveBlob is available");var r=document.createElementNS("http://www.w3.org/1999/xhtml","a");r.href=a.createObjectURL(n),r.download=t,function(t){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}(r)}}(t,e)}},{key:"render",value:function(){var t=this,e=this.props,a=e.children,n=e.file,r=e.content,c=e.style,s=e.className;return i.default.createElement("div",{className:"react-download-container"+(s?" "+s:""),onClick:function(){return t.downloadFile(n,r)},style:c},a)}}]),e}(r.Component);p.propTypes={file:c.default.string.isRequired,content:c.default.string.isRequired},e.default=p},function(e,a){e.exports=t},function(t,a){t.exports=e}])},t.exports=n(a(0),a(6))},621:function(t,e,a){},622:function(t,e,a){},623:function(t,e,a){},697:function(t,e,a){"use strict";a.r(e),a.d(e,"ChartComponent",(function(){return M}));var n=a(11),r=a(12),i=a(20),c=a(16),s=a(15),o=a(38),l=a.n(o),p=a(58),u=a.n(p),h=a(0),b=a.n(h),d=a(67),f=a.n(d),j=a(7),m=a(25),v=a(26),O=a(21),y=a(273),x=a(346),_=a(347),g=a(59),k=a(619),w=a.n(k),C=(a(621),a(1)),N=function(t){Object(c.a)(a,t);var e=Object(s.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"bi-chart-actions",children:[this.props.isScale?Object(C.jsx)(v.Link,{className:"bi-chart-actions__action bi-btn bi-btn--flat",to:this.props.getChartActionUrl("scale",null),children:Object(C.jsx)(j.a,{id:"components.chart-actions.linear-scale"})}):Object(C.jsx)(v.Link,{className:"bi-chart-actions__action bi-btn bi-btn--flat",to:this.props.getChartActionUrl("scale","1"),children:Object(C.jsx)(j.a,{id:"components.chart-actions.logarithmic-scale"})}),this.props.data&&Object(C.jsx)(w.a,{file:"data.csv",content:this.getCSVData(),className:"bi-chart-actions__action bi-btn bi-btn--flat",children:Object(C.jsx)(j.a,{id:"components.chart-actions.csv"})}),this.props.data&&Object(C.jsx)(w.a,{file:"data.json",content:JSON.stringify(this.props.data),className:"bi-chart-actions__action bi-btn bi-btn--flat",children:Object(C.jsx)(j.a,{id:"components.chart-actions.json"})})]})}},{key:"getCSVData",value:function(){if(!this.props.data)return"";var t=this.props.data.map((function(t){return[t.timestamp,t.value].join(", ")}));return["timestamp, value"].concat(Object(g.a)(t)).join("\r\n")}}]),a}(b.a.Component),A=a(337),S=(a(622),function(t){Object(c.a)(a,t);var e=Object(s.a)(a);function a(t){return Object(n.a)(this,a),e.call(this,t)}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(C.jsx)("div",{className:"bi-timespan",children:Object.keys(y.a).map((function(e){var a=l()({"bi-btn":!0,"bi-btn--flat":!0,"bi-timespan__span":!0,"bi-timespan__span--active":t.props.selected===y.a[e]});return Object(C.jsx)(v.Link,{className:a,to:t.props.getTimespanUrl(y.a[e]),children:Object(C.jsx)(j.a,{id:"components.timespan.span.".concat(y.a[e])})},e)}))})}}]),a}(b.a.Component)),F=a(9),T=(a(623),function(t){Object(c.a)(a,t);var e=Object(s.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).params={},r.getTimespanUrl=r.getTimespanUrl.bind(Object(i.a)(r)),r.getChartActionUrl=r.getChartActionUrl.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.params=this.getParams(),this.props.getChart(this.props.match.params.chartType,this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){var e=this.getParams();JSON.stringify(e)!==JSON.stringify(this.params)&&(this.params=e,this.props.getChart(this.props.match.params.chartType,this.params))}},{key:"render",value:function(){var t=u.a.parse(this.props.location.search),e=t.iframe,a=t.scale,n=l()({"bi-chart":!0,"bi-chart--iframe":e,"bi-chart--scale":"1"===a,"g-flex-column":!0,"g-flex-column__item-fixed":!0});return Object(C.jsxs)("div",{className:n,children:[Object(C.jsx)(j.a,{id:"common.pages.chart.title.".concat(this.props.match.params.chartType),children:function(t){return Object(C.jsx)(f.a,{children:Object(C.jsx)("title",{children:t})})}}),Object(C.jsxs)("div",{className:"bi-chart__header g-flex-column__item-fixed",children:[Object(C.jsx)("div",{className:"bi-chart__line",children:Object(C.jsxs)(v.Link,{className:"bi-chart__btn-back",to:"/charts",children:[Object(C.jsx)(F.b,{className:"bi-chart__btn-back-icon"}),Object(C.jsx)("span",{className:"bi-chart__btn-back-title",children:Object(C.jsx)(j.a,{id:"components.chart.back"})})]})}),Object(C.jsx)("div",{className:"bi-chart__title",children:Object(C.jsx)(j.a,{id:"components.chart.title.".concat(this.props.match.params.chartType)})}),Object(C.jsx)("div",{className:"bi-chart__subtitle",children:Object(C.jsx)(j.a,{id:"components.chart.subtitle.".concat(this.props.match.params.chartType)})})]}),this.renderBody()]})}},{key:"renderBody",value:function(){return Object(C.jsxs)("div",{className:"bi-chart__body g-flex-column__item",children:[Object(C.jsx)("div",{className:"bi-chart__chart",children:this.props.data&&this.renderChart()}),this.renderControls()]})}},{key:"renderChart",value:function(){var t=u.a.parse(this.props.location.search).iframe;return"hash-rate-distribution"===this.props.match.params.chartType?Object(C.jsx)(A.a,{data:this.formatData(),compact:!!t,labels:{name:Object(C.jsx)(j.a,{id:"components.chart.hash-rate-distribution.labels.name"}),value:Object(C.jsx)(j.a,{id:"components.chart.hash-rate-distribution.labels.value"})}}):Object(C.jsx)(_.a,{data:this.formatData(),compact:!!t,isScale:this.params.scale})}},{key:"renderControls",value:function(){return"hash-rate-distribution"===this.props.match.params.chartType?null:Object(C.jsxs)("div",{className:"bi-chart__controls g-flex",children:[Object(C.jsx)(S,{selected:this.params.timespan,getTimespanUrl:this.getTimespanUrl}),Object(C.jsx)(N,{isScale:this.params.scale,data:this.props.data,getChartActionUrl:this.getChartActionUrl})]})}},{key:"formatData",value:function(){switch(this.props.match.params.chartType){case"miners-revenue":case"total":return this.props.data.map((function(t){return{timestamp:t.timestamp,type:"coin",value:t.value/1e9}}));case"blockchain-size":case"block-size":return this.props.data.map((function(t){return{timestamp:t.timestamp,type:"bytes",value:t.value}}));case"hash-rate":return this.props.data.slice(0,this.props.data.length-1).map((function(t){return{timestamp:t.timestamp,type:"hashRateDay",value:t.value}}));default:return this.props.data}}},{key:"getParams",value:function(){var t=u.a.parse(this.props.history.location.search),e=Object.keys(y.a).find((function(e){return y.a[e]===t.timespan}));return{scale:"1"===t.scale,timespan:e?y.a[e]:y.a.DAYS_30}}},{key:"getTimespanUrl",value:function(t){var e=u.a.parse(this.props.history.location.search);return e.timespan=t,"".concat(this.props.location.pathname,"?").concat(u.a.stringify(e))}},{key:"getChartActionUrl",value:function(t,e){var a=u.a.parse(this.props.history.location.search);return a[t]=e,null===e&&delete a[t],"".concat(this.props.location.pathname,"?").concat(u.a.stringify(a))}}]),a}(b.a.PureComponent));var M=Object(m.b)((function(t){return t.chart}),(function(t){return Object(O.bindActionCreators)(x.a,t)}))(T);e.default=M}}]);
//# sourceMappingURL=13.1a4a4c98.chunk.js.map