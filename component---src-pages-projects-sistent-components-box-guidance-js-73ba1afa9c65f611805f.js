"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5768],{22514:function(e,t,n){n.d(t,{A:function(){return l}});var i=n(96540);const o=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"}];var a=n(96044);var s=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var l=()=>{var e,t;const{0:n,1:l}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=o.findIndex((t=>t.link===e));l(t)}),[]),i.createElement(s,null,n>0?i.createElement(a.default,{$secondary:!0,$url:null===(e=o[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<o.length-1?i.createElement(a.default,{$primary:!0,$url:null===(t=o[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},29731:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(96540),o=n(64810),a=n(86462),s=n(66054),l=n(58501),r=n(9184),c=n(96044),p=n(92121);const d=()=>{const e=(0,a.useLocation)(),{isDark:t}=(0,p.G)();return i.createElement(r.p,{title:"Box"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Box")),i.createElement("p",null,"The Box component is a flexible, theme-aware container that adapts seamlessly across various layouts. It provides a convenient way to apply styles, positioning, and responsive adjustments to content, making it ideal for any layout needs."),i.createElement("div",{className:"filterBtns"},i.createElement(c.default,{className:"/projects/sistent/components/box"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/box"),title:"Overview"}),i.createElement(c.default,{className:"/projects/sistent/components/box/guidance"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/box/guidance"),title:"Guidance"}),i.createElement(c.default,{className:"/projects/sistent/components/box/code"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/box/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"The Box component is a highly versatile tool that can be used for layout management, spacing, styling, and more. With full support for responsive design, Box is an essential part of any well-structured application, allowing developers to customize and style elements while keeping the theme consistent."),i.createElement("a",{id:"Function"},i.createElement("h2",null,"Function")),i.createElement("p",null,"The Box component serves several functions:"),i.createElement("h3",null,"Responsive Styling"),i.createElement("p",null,"The ",i.createElement("code",null,"sx")," prop makes it easy to apply responsive styles directly within the component, allowing for adaptive design that looks great across all screen sizes."),i.createElement(s.fI,{$Hcenter:!0,className:"image-container"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Box,{sx:{bgcolor:"primary.main",padding:3,borderRadius:2,"&:hover":{bgcolor:"primary.light"}}},i.createElement("p",{style:{color:"black"}},"This is a responsive Box component.")))),i.createElement("h3",null,"Flexible Layout Control"),i.createElement("p",null,"Box can serve as a container for organizing other elements, whether it's aligning text, images, or interactive components. The flexibility of the Box component allows it to adapt to a wide range of layout needs, from card-style containers to more complex nested structures."),i.createElement("h3",null,"Customizable Appearance"),i.createElement("p",null,"The Box component’s customization options allow you to adjust colors, borders, shadows, and more through the ",i.createElement("code",null,"sx")," prop, ensuring that components blend well with your app's overall theme."),i.createElement(s.fI,{$Hcenter:!0,className:"image-container"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Box,{sx:{bgcolor:"secondary.main",padding:2,boxShadow:3,borderRadius:4}},i.createElement("p",{style:{color:"black"}},"Customized Box with shadow and color.")))),i.createElement("a",{id:"UseCases"},i.createElement("h2",null,"Use Cases")),i.createElement("h3",null,"Nested Layouts"),i.createElement("p",null,"Use Box to create nested layouts by embedding one Box within another, each with distinct styling. This setup enables the creation of structured and multi-layered designs."),i.createElement(s.fI,{$Hcenter:!0,className:"image-container"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Box,{sx:{padding:3,bgcolor:"background.paper",borderRadius:2}},i.createElement(l.Box,{sx:{bgcolor:"info.main",padding:2}},i.createElement("p",{style:{color:"black"}},"Nested Box layout example."))))),i.createElement("h3",null,"Utility for Spacing and Margin"),i.createElement("p",null,"Leveraging Box for margin and padding adjustments offers fine-grained control over spacing between components, making it useful in complex layouts where alignment and spacing are crucial."),i.createElement("h3",null,"Event Handling and State Management"),i.createElement("p",null,"Box can also be used as an interactive element, handling events and managing state. This makes it ideal for use cases that require dynamic behavior or user interaction."),i.createElement("h3",null,"Responsive Design"),i.createElement("p",null,"The Box component seamlessly integrates with Sistent’s responsive design principles, providing a cohesive experience across various screen sizes by leveraging breakpoints in the ",i.createElement("code",null,"sx")," prop."))))};var m=()=>i.createElement(d,null)},9184:function(e,t,n){n.d(t,{p:function(){return d}});var i=n(96540),o=n(91580),a=n(66198),s=n(66054),l=n(22514),r=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var p=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:o}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;o(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(r.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const d=e=>{let{title:t,children:n}=e;return i.createElement(o.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(a.A,null),i.createElement("div",{className:"page-section"},i.createElement(s.mc,null,n," ",i.createElement(l.A,null)),i.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-box-guidance-js-73ba1afa9c65f611805f.js.map