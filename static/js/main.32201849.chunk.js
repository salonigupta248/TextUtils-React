(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(16),c=a.n(o),r=(a(26),a(3)),s=(a(28),a(8));function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about"},e.aboutText))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"bg-primary rounded mx-2",onClick:function(){return e.toggleMode("primary")},style:{height:"25px",width:"25px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-danger rounded mx-2",onClick:function(){return e.toggleMode("danger")},style:{height:"25px",width:"25px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-success rounded mx-2",onClick:function(){return e.toggleMode("success")},style:{height:"25px",width:"25px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-warning rounded mx-2",onClick:function(){return e.toggleMode("warning")},style:{height:"25px",width:"25px",cursor:"pointer"}})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:function(){e.toggleMode(null)},type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Toggle Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){console.log("on change"),c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("uppercase was clicked"+o);var t=o.toUpperCase();c(t),e.showAlert("converted to uppercase!","success")}},"Convert to uppercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("lowercase was clicked"+o);var t=o.toLowerCase();c(t),e.showAlert("converted to lowercase!","success")}},"Convert to lowercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(t){c(""),e.showAlert("the text is cleared!","success")}},"Clear text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(t){c(o.replace(" ","")),e.showAlert("remove one space!","success")}},"Remove spaces text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("copied the text!","success")}},"Copy text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=o.split(/[ ]+/);c(t.join(" ")),e.showAlert("removed the extra spaces!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,o.split(/\s+/).filter(function(e){return 0!==e.length}).length," words and ",o.length," characters"),l.a.createElement("p",null,.008*o.split(" ").filter(function(e){return 0!==e.length}).length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,o.length>0?o:"Nothing to preview")))}i.defaultProps={title:"set title here",about:"about text here"};var d=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg))};function u(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white",border:"0.5px solid",borderColor:"dark"===e.mode?"white":"#042743"};return l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",style:t},l.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Analyze your Text      ")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"TextUtils gives you a way to analyze your text quickly and efficicently.Be it word count,character count or anything.")))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",style:t},l.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Free to Use")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse",style:t,"data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.")))),l.a.createElement("div",{className:"accordion-item",style:t},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Browser Compatible")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."))))))}var b=a(0);var p=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),p=Object(r.a)(c,2),g=p[0],h=p[1],E=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(i,{title:"TextUtils2",aboutText:"TextAbouts",mode:a,toggleMode:function(e){document.body.classList.remove("bg-light"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),console.log(e),document.body.classList.add("bg-"+e),"light"===a?(o("dark"),document.body.style.backgroundColor="#041f38",E("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),l.a.createElement(d,{alert:g}),l.a.createElement("div",{className:"container my-4",mode:a},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/about",element:l.a.createElement(u,{mode:a})}),l.a.createElement(b.a,{exact:!0,path:"/",element:l.a.createElement(m,{showAlert:E,heading:"Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces",mode:a})})))))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,31)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),g()}},[[17,3,2]]]);
//# sourceMappingURL=main.32201849.chunk.js.map