(this["webpackJsonpchat-ui"]=this["webpackJsonpchat-ui"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),r=n.n(s),i=(n(15),n(2)),c=n(1),l=n(4),u=n(3),v=n(5),p=n(6),d=n(9),h=new(function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).ws=void 0,e.inbox=null,e.ws=new WebSocket("wss://raja.aut.bme.hu/chat/"),e.ws.addEventListener("message",(function(t){var n,a=JSON.parse(t.data);switch(a.type){case"error":alert(a.message),console.log("EZ EGY HIBA!");break;case"login":e.inbox=a.inbox,e.dispatch("login"),console.log("H\xc1T LOGINOLJ\xc1 BEFELE.");break;case"message":var o=a.channelId;null===(n=e.inbox.conversations.find((function(e){return e.channelId===o})))||void 0===n||n.lastMessages.push(a.message),e.dispatch("message",o,a.message),console.log("Micsoda \xfczenetek");break;case"conversationAdded":e.inbox.conversations.push(a.conversation),e.dispatch("conversation",a.conversation.channelId)}})),e}return Object(c.a)(n,[{key:"addEventListener",value:function(e,t,a){Object(p.a)(Object(v.a)(n.prototype),"addEventListener",this).call(this,e,t,a)}},{key:"removeAllEventListener",value:function(e){Object(p.a)(Object(v.a)(n.prototype),"removeAllEventListener",this).call(this,e)}}]),Object(c.a)(n,[{key:"sendPacket",value:function(e){this.ws.send(JSON.stringify(e))}}]),n}(function(){function e(){Object(i.a)(this,e),this.listeners=[]}return Object(c.a)(e,[{key:"addEventListener",value:function(e,t,n){this.listeners.push({type:e,listener:t,obj:n})}},{key:"removeEventListener",value:function(e,t){this.listeners.splice(this.listeners.findIndex((function(n){return n.type===e&&n.listener===t})),1)}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o,s=Object(d.a)(this.listeners.filter((function(t){return t.type===e})));try{for(s.s();!(o=s.n()).done;){var r,i=o.value;(r=i.listener).call.apply(r,[i.obj].concat(n))}}catch(c){s.e(c)}finally{s.f()}}},{key:"removeAllEventListener",value:function(e){if(!e)throw new Error("Must specify object");this.listeners=this.listeners.filter((function(t){return t.obj!==e}))}}]),e}())),m=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={value:e.props.value,focus:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this,n={};return this.props.autofocus&&(n.autoFocus=!0),this.props.onEnter&&(n.onKeyDown=function(e){13===e.keyCode&&t.props.onEnter()}),o.a.createElement("div",{className:"text-input"},o.a.createElement("input",Object.assign({type:null!==(e=this.props.type)&&void 0!==e?e:"text",value:this.state.value,onChange:function(e){var n,a;t.setState({value:e.target.value}),null===(n=(a=t.props).onChange)||void 0===n||n.call(a,e.target.value)},onBlur:function(){return t.setState({focus:!1})},onFocus:function(){return t.setState({focus:!0})}},n)),o.a.createElement("div",{className:"focus-indicator"}),o.a.createElement("label",{className:this.state.value||this.state.focus?"subsided":""},this.props.placeholder))}}]),n}(a.Component)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).textInput=o.a.createRef(),e}return Object(c.a)(n,[{key:"onClick",value:function(){var e,t,n,a,o;(null===(e=(t=this.props).onClick)||void 0===e?void 0:e.call(t,null!==(n=null===(a=this.textInput.current)||void 0===a?void 0:a.state.value)&&void 0!==n?n:""))&&(null===(o=this.textInput.current)||void 0===o||o.setState({value:""}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"text-input-and-button"},o.a.createElement(m,Object.assign({},this.props,{ref:this.textInput,onEnter:function(){return e.onClick()}})),o.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},this.props.buttonContent))}}]),n}(a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",displayName:"",register:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("img",{src:"logo512.png",width:"256"}),o.a.createElement(m,{type:"email",placeholder:"Email (someone@example.com)",value:this.state.email,onChange:function(t){return e.displayNameChanger(t)},autofocus:!0,onEnter:function(){return e.onClick()}}),o.a.createElement(m,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t})},onEnter:function(){return e.onClick()}}),o.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},this.state.register?"Register":"Login"),this.state.register&&o.a.createElement(m,{type:"text",placeholder:"Display Name (Agent Smith)",value:this.state.displayName,onChange:function(t){return e.setState({displayName:t})},onEnter:function(){return e.onClick()}}),o.a.createElement("p",null,this.state.register?"Switch back to ":"Have no account yet? Go and ",o.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.setState({register:!e.state.register})}},this.state.register?"Login":"Register")),o.a.createElement("a",{href:"https://www.google.hu/search?q=privacy"},"Privacy Policy"))}},{key:"displayNameChanger",value:function(e){!1===this.state.register&&"V8UE4A"===e?this.setState({displayName:"Zsolt",email:e}):this.setState({email:e})}},{key:"onClick",value:function(){this.state.register?h.sendPacket({type:"register",email:this.state.email,password:this.state.password,displayName:this.state.displayName,staySignedIn:!1}):h.sendPacket({type:"login",email:this.state.email,password:this.state.password,staySignedIn:!1})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.conversation.lastMessages.length>0?this.props.conversation.lastMessages[this.props.conversation.lastMessages.length-1]:null;return o.a.createElement("div",{className:"conversation-card"+(this.props.selected?" selected":""),onClick:function(){return e.props.onSelect()}},o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"channel-name"},this.props.conversation.name),o.a.createElement("span",{className:"time"},t&&new Date(t.timeStamp).toLocaleTimeString())),o.a.createElement("span",{className:"last-message"},null===t||void 0===t?void 0:t.content))}},{key:"componentDidMount",value:function(){var e=this;h.addEventListener("message",(function(t,n){t===e.props.conversation.channelId&&e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){h.removeAllEventListener(this)}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"left-pane"},o.a.createElement("p",{className:"my-tag"},"My tag: ",this.props.inbox.user.tag),o.a.createElement(f,{type:"text",placeholder:"Add user by Tag (Name#123)",buttonContent:"Inv",onClick:function(t){return e.sendContactRequest(t)}}),o.a.createElement("div",{className:"conversations"},this.props.inbox.conversations.map((function(t){return o.a.createElement(y,{key:t.channelId,conversation:t,selected:t===e.props.selectedConversation,onSelect:function(){return e.props.onSelect(t)}})}))))}},{key:"sendContactRequest",value:function(e){return h.sendPacket({type:"contactRequest",email:e,firstMessage:"Hello"}),!0}},{key:"componentDidMount",value:function(){var e=this;h.addEventListener("conversation",(function(t){return e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){h.removeAllEventListener(this)}}]),n}(a.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"message-card"+(this.props.own?" own":"")},o.a.createElement("div",{className:"bubble"},o.a.createElement("span",{className:"text"},this.props.message.content),o.a.createElement("span",{className:"time"},new Date(this.props.message.timeStamp).toDateString())))}}]),n}(a.PureComponent),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.addEventListener("message",(function(t,n){var a;t===(null===(a=e.props.conversation)||void 0===a?void 0:a.channelId)&&e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){h.removeAllEventListener(this)}},{key:"onSend",value:function(e){return h.sendPacket({type:"message",channelId:this.props.conversation.channelId,referenceTo:0,contentType:0,content:"V:"+e}),!0}},{key:"render",value:function(){var e,t,n,a=this;return o.a.createElement("div",{className:"right-pane column"},this.props.conversation&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"conversation-header"},o.a.createElement("p",null,null===(e=this.props.conversation)||void 0===e?void 0:e.name)),o.a.createElement("div",{className:"conversation-header row"},o.a.createElement("button",{type:"button",className:"only-narrow",onClick:function(){return a.props.onBack()}},"Back"),o.a.createElement("p",null,null===(t=this.props.conversation)||void 0===t?void 0:t.name)),o.a.createElement("div",{className:"messages"},null===(n=this.props.conversation)||void 0===n?void 0:n.lastMessages.map((function(e){var t;return o.a.createElement(E,{key:e.id,message:e,own:e.senderId===(null===(t=h.inbox)||void 0===t?void 0:t.user.id)})}))),o.a.createElement("div",{className:"send-message row"},o.a.createElement(f,{type:"text",placeholder:"Type something awesome here...",buttonContent:"Send",onClick:function(e){return a.onSend(e)}}))))}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedConversation:void 0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t="main row "+(this.state.selectedConversation?"right":"left");return o.a.createElement("div",{className:t},o.a.createElement(b,{inbox:h.inbox,selectedConversation:this.state.selectedConversation,onSelect:function(t){return e.setState({selectedConversation:t})}}),o.a.createElement(k,{conversation:this.state.selectedConversation,onBack:function(){return e.setState({selectedConversation:void 0})}}))}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={showLogin:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.addEventListener("login",(function(){e.setState({showLogin:!1})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},this.state.showLogin?o.a.createElement(g,null):o.a.createElement(w,null))}}]),n}(a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.335b9531.chunk.js.map