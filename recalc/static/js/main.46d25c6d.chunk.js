(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),l=(a(94),a(15)),s=a(3),c=a(7),u=a(10),d=a(21),p=a(20),h=a(22),m=(a(95),a(58)),f=a(11),y=a.n(f),g={tree:{base:{listStyle:"none",backgroundColor:"#21252B",margin:0,padding:0,color:"#9DA5AB",fontFamily:"lucida grande ,tahoma,verdana,arial,sans-serif",fontSize:"16px"},node:{base:{position:"relative"},link:{cursor:"pointer",position:"relative",padding:"0px 5px",display:"block"},activeLink:{background:"#31363F"},toggle:{base:{position:"relative",display:"inline-block",verticalAlign:"top",marginLeft:"-5px",height:"24px",width:"24px"},wrapper:{position:"absolute",top:"50%",left:"50%",margin:"-7px 0 0 -7px",height:"14px"},height:14,width:14,arrow:{fill:"#9DA5AB",strokeWidth:0}},header:{base:{display:"inline-block",verticalAlign:"top",color:"#9DA5AB"},connector:{width:"2px",height:"12px",borderLeft:"solid 2px black",borderBottom:"solid 2px black",position:"absolute",top:"0px",left:"-21px"},title:{lineHeight:"24px",verticalAlign:"middle"}},subtree:{listStyle:"none",paddingLeft:"19px"},loading:{color:"#E2C089"}}}},v=a(59),b=function e(t,a,n,r,o,i){Object(c.a)(this,e),this.recipe=t,this.output=a,this.demand_per_day=n,this.recipeQty=r,this.inputs=o,this.factory=i},T=function(){function e(t){Object(c.a)(this,e),this.recipeToBuilding=this._mapRecipesToBuildings(t.producers),this.outputToRecipe=this._mapOutputs(t.recipes),this.dataTimestamp=t.timestamp}return Object(u.a)(e,[{key:"_mapRecipesToBuildings",value:function(e){var t={},a=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value,s=!0,c=!1,u=void 0;try{for(var d,p=l.recipes[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){t[d.value]=l}}catch(h){c=!0,u=h}finally{try{s||null==p.return||p.return()}finally{if(c)throw u}}}}catch(h){n=!0,r=h}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return t}},{key:"_mapOutputs",value:function(e){var t={},a=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;if("WaterWell"!==l.name){var s=!0,c=!1,u=void 0;try{for(var d,p=l.outputs[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){t[d.value.name]=l}}catch(h){c=!0,u=h}finally{try{s||null==p.return||p.return()}finally{if(c)throw u}}}}}catch(h){n=!0,r=h}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return t}},{key:"outputQtyPerDay",value:function(e,t){return y()(e.outputs.find(function(e){return e.name===t}).amount,Math.floor(e.days))}},{key:"buildTree",value:function(e,t){var a=this,n=this.outputToRecipe[e],r=this.outputQtyPerDay(n,e),o=t.div(r);return new b(n.name,e,t,o,n.inputs.map(function(e){return a.buildTree(e.name,(t=e.amount,o.mul(y()(t,Math.floor(n.days)))));var t}),this.recipeToBuilding[n.name].name)}},{key:"totals",value:function(e){var t=this._totals(e);return this._addTotalFractionsAndCost(e,t),t}},{key:"_totals",value:function(e){var t=function(e,t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=n[a],o=Object(v.a)(r,2),i=o[0],l=o[1];e.hasOwnProperty(i)||(e[i]=Object.assign({total:y()(0),towards:[]})),e[i].total=e[i].total.add(l.total)}},a=Object(l.a)({},e.output,{total:e.recipeQty,towards:[]}),n=!0,r=!1,o=void 0;try{for(var i,s=e.inputs[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value;t(a,this.totals(c))}}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}},{key:"_addTotalFractionsAndCost",value:function(e,t){!function e(a){var n=!0,r=!1,o=void 0;try{for(var i,l=a.inputs[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var s=i.value;t[s.output].towards.push({recipe:a.recipe,product:a.product,recipeQty:s.recipeQty,fraction:s.recipeQty.div(t[s.output].total)}),e(s)}}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}}(e);for(var a=0,n=Object.entries(t);a<n.length;a++){var r=n[a],o=Object(v.a)(r,2),i=o[0],l=o[1],s=this.outputToRecipe[i],c=this.recipeToBuilding[s.name];l.factory=c.name,l.singleFactoryCost=c.harvesterCost?c.harvesterCost:c.cost,l.isHarvester=!!c.harvesterCost,l.roundFactoryCount=Math.ceil(l.total.valueOf()),l.totalFactoryCost=l.roundFactoryCount*l.singleFactoryCost,l.demand_per_day=l.total.mul(this.outputQtyPerDay(s,i))}}}]),e}(),E=r.a.Fragment,C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={calculator:null,loadError:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("roidata/exports.json").then(function(e){return e.json()}).then(function(e){return new T(e)}).then(function(t){return e.setState({calculator:t})}).catch(function(t){return e.setState({loadError:t})})}},{key:"render",value:function(){return this.state.loadError?r.a.createElement("p",null,r.a.createElement("b",null,"Load error")," ",this.state.loadError.toString()):this.state.calculator?r.a.createElement(O,{calculator:this.state.calculator}):r.a.createElement("p",null,"Loading...")}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onBuildTreeToggle=a.onBuildTreeToggle.bind(Object(s.a)(a)),a.onTotalsTreeToggle=a.onTotalsTreeToggle.bind(Object(s.a)(a)),a.onInputChange=a.onInputChange.bind(Object(s.a)(a)),a.onSettingsChange=a.onSettingsChange.bind(Object(s.a)(a)),a.pf=a.pf.bind(Object(s.a)(a)),a.state={settings:{numbers:"fractions"}},a.state=a._recompute(a.state,"ChickenMeat",y()(11,15)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"_recompute",value:function(e,t,a){var n=this.props.calculator.buildTree(t,a),r=this.props.calculator.totals(n),o={recipe:t,requiredQty:a,tree:n,totals:r,grandTotal:Object.values(r).map(function(e){return e.totalFactoryCost}).reduce(function(e,t){return e+t},0)};return Object.assign(e,o,this._trees(o))}},{key:"_trees",value:function(e){return{treebeardTree:this.toTreebeardTree(e.tree),treebeardTotals:this.toTreebeardTotals(e.totals,e.grandTotal)}}},{key:"onSettingsChange",value:function(e){var t=this;this.setState(function(t){return{settings:Object.assign(t.settings,e)}}),this.setState(function(e){return t._trees(e)})}},{key:"render",value:function(){var e=Object.keys(this.props.calculator.outputToRecipe);return e.sort(),r.a.createElement("div",null,r.a.createElement("h4",null,"What and how much do you desire?"),r.a.createElement(j,{recipes:e,recipe:this.state.recipe,requiredQty:this.state.requiredQty,onChange:this.onInputChange}),r.a.createElement(k,{settings:this.state.settings,onChange:this.onSettingsChange}),r.a.createElement("h4",null,"Build tree"),this.buildTreeHeader(),r.a.createElement(m.Treebeard,{data:this.state.treebeardTree,onToggle:this.onBuildTreeToggle,style:g}),r.a.createElement("h4",null,"Totals"),this.totalsTreeHeader(),r.a.createElement(m.Treebeard,{data:this.state.treebeardTotals,onToggle:this.onTotalsTreeToggle,style:g}),r.a.createElement("p",{className:"timestamp"},"Data harvested on ",this.props.calculator.dataTimestamp))}},{key:"buildTreeHeader",value:function(){return r.a.createElement("div",{id:"buildTreeHeader",className:"treeHeader"},r.a.createElement("div",{className:"filler"},"\xa0"),this.recipeHeader())}},{key:"recipeHeader",value:function(){return r.a.createElement(E,null,r.a.createElement("span",{className:"productName header"},"Product"),r.a.createElement("span",{className:"demand header tooltipHolder"},"Demand*",r.a.createElement("span",{className:"tooltipText"},"per 15 days")),r.a.createElement("span",{className:"recipeQty header tooltipHolder"},"x",r.a.createElement("span",{className:"tooltipText"},"number of factories")),r.a.createElement("span",{className:"factory header"},"Factory Building"))}},{key:"totalsTreeHeader",value:function(){return r.a.createElement("div",{id:"totalsHeader",className:"treeHeader"},r.a.createElement("div",{className:"filler"},"\xa0"),this.recipeHeader(),r.a.createElement("span",{className:"recipeQtyRoundUp header tooltipHolder"},"\u2308x\u2309",r.a.createElement("span",{className:"tooltipText"},"number of factories rounded up")),r.a.createElement("span",{className:"header"},"\xa0x\xa0"),r.a.createElement("span",{className:"singleFactoryCost header tooltipHolder"},"Cost",r.a.createElement("span",{className:"tooltipText"},"single factory or field cost")),r.a.createElement("span",{className:"header"},"\xa0=\xa0"),r.a.createElement("span",{className:"totalCost header"},"Total"))}},{key:"onInputChange",value:function(e){var t=this;this.setState(function(a){var n=Object.assign({},a,e);return t._recompute(e,n.recipe,n.requiredQty)})}},{key:"toTreebeardTree",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{name:this._recipeHeader(e.output,e.demand_per_day.mul(15),e.recipeQty,e.factory,"pn"+a),toggled:!0,children:e.inputs.map(function(e){return t.toTreebeardTree(e,a+1)})}}},{key:"toTreebeardTotals",value:function(e,t){var a=this,n=Object.entries(e).map(function(e){var t=e[0],n=e[1];return{name:r.a.createElement(E,null,a._recipeHeader(t,n.demand_per_day.mul(15),n.total,n.factory),a._renderCosts(n)),toggled:!1,children:n.towards.length<=1?[]:n.towards.map(function(e){return Object.assign({name:r.a.createElement(E,null,e.recipe," ",a.pf(e.recipeQty)," (",a.pf(e.fraction)," of all)"),toggled:!1,children:null})})}});return{name:r.a.createElement(E,null,r.a.createElement("span",{className:"totalHeader"},"Total excluding hubs"),r.a.createElement("span",{className:"totalCost"},x(t))),toggled:!0,children:n}}},{key:"_recipeHeader",value:function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return r.a.createElement(E,null,r.a.createElement("span",{className:"productName "+o},e),r.a.createElement("span",{className:"demand"},this.pf(t)),r.a.createElement("span",{className:"recipeQty"},this.pf(a)),r.a.createElement("span",{className:"factory"},n))}},{key:"_renderCosts",value:function(e){return r.a.createElement(E,null,r.a.createElement("span",{className:"recipeQtyRoundUp"},e.roundFactoryCount),"\xa0x\xa0",r.a.createElement("span",{className:"singleFactoryCost"},x(e.singleFactoryCost)),"\xa0=\xa0",r.a.createElement("span",{className:"totalCost"},x(e.totalFactoryCost)))}},{key:"_onTreeToggle",value:function(e,t,a,n){var r=this.state[n],o=this.state[a];r&&(r.active=!1),e.active=!0,e.children&&(e.toggled=t),this.setState(function(){var t;return t={},Object(l.a)(t,n,e),Object(l.a)(t,a,Object.assign({},o)),t})}},{key:"onBuildTreeToggle",value:function(e,t){this._onTreeToggle(e,t,"treebeardTree","buildCursor")}},{key:"onTotalsTreeToggle",value:function(e,t){this._onTreeToggle(e,t,"treebeardTotals","totalsCursor")}},{key:"pf",value:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fractions";if(null===e||void 0===e)return"<NOOO>";if(0===e.n)return"0";if("fractions"!==t)return e.valueOf().toFixed(2);var a=Math.floor(e.n/e.d),n=e.n%e.d;return r.a.createElement(E,null,0===a?"":a,0===n?"":(o=n,i=e.d,r.a.createElement(E,null,r.a.createElement("sup",null,o),"\u2044",r.a.createElement("sub",null,i))));var o,i}(e,this.state.settings.numbers)}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={recipe:e.recipe,requiredQty:e.requiredQty},a.onRecipeChanged=a.onRecipeChanged.bind(Object(s.a)(a)),a.onQtyChanged=a.onQtyChanged.bind(Object(s.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=15*this.state.requiredQty.n/this.state.requiredQty.d;return r.a.createElement("form",null,"Recipe:",r.a.createElement("select",{onChange:this.onRecipeChanged,value:this.state.recipe},this.renderOptions()),"\xa0 Required quantity:\xa0",r.a.createElement("input",{type:"text",onChange:this.onQtyChanged,value:e}),"\xa0per 15 days")}},{key:"renderOptions",value:function(){return this.props.recipes.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})}},{key:"onRecipeChanged",value:function(e){var t={recipe:e.target.value};this.setState(function(){return t}),this.props.onChange(t)}},{key:"onQtyChanged",value:function(e){var t=parseFloat(e.target.value);if(!isNaN(t)){var a={requiredQty:y()(t,15)};this.setState(function(){return a}),this.props.onChange(a)}}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onChange=a.onChange.bind(Object(s.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.props.onChange(Object(l.a)({},a,n))}},{key:"render",value:function(){return r.a.createElement("div",{id:"settings"},r.a.createElement("input",{id:"fractions",type:"radio",name:"numbers",value:"fractions",checked:"fractions"===this.props.settings.numbers,onChange:this.onChange}),r.a.createElement("label",{for:"fractions"},"fractions"),"\xa0\xa0\xa0\xa0",r.a.createElement("input",{id:"decimals",type:"radio",name:"numbers",value:"decimals",checked:"decimals"===this.props.settings.numbers,onChange:this.onChange}),r.a.createElement("label",{for:"decimals"},"decimals"))}}]),t}(r.a.Component);function x(e){return"$"+e}var w=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a(233)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.46d25c6d.chunk.js.map