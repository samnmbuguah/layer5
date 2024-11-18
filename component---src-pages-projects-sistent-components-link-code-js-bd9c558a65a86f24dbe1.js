"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5388],{22514:function(e,t,n){n.d(t,{A:function(){return s}});var i=n(96540);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"}];var r=n(96044);var o=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var s=()=>{var e,t;const{0:n,1:s}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));s(t)}),[]),i.createElement(o,null,n>0?i.createElement(r.default,{$secondary:!0,$url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(r.default,{$primary:!0,$url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},75590:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(96540),a=n(64810),r=n(86462),o=n(58501),s=n(5168),l=n(9184),c=n(96044),d=n(92121);const m=['<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n    <Link\n      href="Your Link"\n      style={{\n        textDecoration: "none",\n        padding: "6px",\n        marginLeft: "10px",\n      }}\n    >\n      Simple Link\n    </Link>\n  </SistentThemeProvider>','<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n    <Link href="Your Path"\n      style={{\n        textDecoration: "none",\n        color: "blue",\n        padding: "6px",\n        marginLeft: "10px",\n      }}\n    >\n      Colored Link\n    </Link>\n  </SistentThemeProvider>','<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n  <Link\n    href="Your Path"\n    style={{\n      textDecoration: "underline",\n      padding: "6px",\n      marginLeft: "10px",\n    }}\n  >\n    Underlined Link \n  </Link>\n</SistentThemeProvider>\n',' <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n      <Link\n        href="Your Path"\n        style={{\n          textDecoration: "none",\n          color: "blue",\n          fontWeight: "bold",\n          fontSize: "16px",\n          padding: "6px",\n          marginLeft: "10px",\n          borderBottom: "2px dashed blue",\n        }}\n      >\n        Customized Link\n      </Link>\n    </SistentThemeProvider>',' <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n      <Link\n        href="https://your-link.com" \n        target="_blank"\n        rel="noopener noreferrer"\n        style={{\n          textDecoration: "underline",\n          padding: "6px",\n          marginLeft: "10px",\n        }}\n      >\n        Visit Secure Link\n      </Link>\n    </SistentThemeProvider>'],p=()=>{const e=(0,r.useLocation)(),{isDark:t}=(0,d.G)();return i.createElement(l.p,{title:"Link"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Link")),i.createElement("p",null),i.createElement("div",{className:"filterBtns"},i.createElement(c.default,{className:"/projects/sistent/components/link"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/link"),title:"Overview"}),i.createElement(c.default,{className:"/projects/sistent/components/link/guidance"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/link/guidance"),title:"Guidance"}),i.createElement(c.default,{className:"/projects/sistent/components/link/code"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/identity/color/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Links are fundamental components in web navigation, allowing users to move between different pages or resources. Their design and implementation are crucial for creating a seamless browsing experience."),i.createElement("a",{id:"Simple Link"},i.createElement("h2",null,"Simple Link")),i.createElement("p",null,"The link can be presented in a simple format, primarily as underlined text that serves as a gateway to navigate users to other pages or resources, without any prominent styling or buttons attached to it."),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Link,{href:"your path",style:{textDecoration:"none",padding:"6px",marginLeft:"10px"}},"Simple Link"))),i.createElement(s.N,{name:"simple-link",code:m[0]})),i.createElement("a",{id:"Customized Links"},i.createElement("h2",null,"Customized Links")),i.createElement("p",null,"Customized Links enhance user experience by adapting their design and behavior to match the app’s theme. They can include personalized styles, hover effects, or icons, ensuring both visual consistency and improved usability across the website."),i.createElement("h3",null,"Colored Link"),i.createElement("p",null,"Colored Links can help draw attention to key areas of a page. They are styled with custom colors to stand out and indicate their importance, enhancing navigation and usability."),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Link,{href:"Your Path",style:{textDecoration:"none",color:"blue",padding:"6px",marginLeft:"10px"}},"Colored Link"))),i.createElement(s.N,{name:"Colored-link",code:m[1]})),i.createElement("h3",null,"Underlined Link"),i.createElement("p",null,"Underlined Links, often referred to as ghost buttons, are styled primarily with text without any fills or borders. They utilize specific text styling and color to signify different states, making them easily identifiable and enhancing user navigation."),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Link,{href:"Your Path",style:{textDecoration:"underline",padding:"6px",marginLeft:"10px"}},"Underlined Link"))),i.createElement(s.N,{name:"underlined-link",code:m[2]})),i.createElement("h3",null,"Customized Link "),i.createElement("p",null,"Customized Links allow for distinct text styles and presentations that can enhance the user experience. By leveraging different styling properties, these links can be tailored to fit the design aesthetics of your application while maintaining functionality."),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Link,{href:"Your Path",style:{textDecoration:"none",color:"blue",fontWeight:"bold",fontSize:"16px",padding:"6px",marginLeft:"10px",borderBottom:"2px dashed blue"}},"Customized Link"))),i.createElement(s.N,{name:"customized-link",code:m[3]})),i.createElement("a",{id:"Security Considerations"},i.createElement("h2",null,"Security Considerations")),i.createElement("p",null,'When utilizing links we should use them with the target="_blank" attribute, it\'s essential to implement rel="noopener" or rel="noreferrer" to enhance security and user privacy'),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Link,{href:"https://your-link.com",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",padding:"6px",marginLeft:"10px"}},"Visit Secure Link"))),i.createElement(s.N,{name:"secure_links",code:m[4]})))))};var u=()=>i.createElement(p,null)},5168:function(e,t,n){n.d(t,{N:function(){return r}});var i=n(96540),a=n(5041);const r=e=>{let{name:t,code:n}=e;const{0:r,1:o}=(0,i.useState)(!1);return i.createElement("div",{className:"show-code"},i.createElement("input",{type:"checkbox",name:t,id:t,onChange:()=>{o((e=>!e))}}),i.createElement("label",{htmlFor:t,className:"label"},"Show Code"),r&&i.createElement(a.Ay,{codeString:n,language:"javascript"}))}},9184:function(e,t,n){n.d(t,{p:function(){return m}});var i=n(96540),a=n(91580),r=n(66198),o=n(66054),s=n(22514),l=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:a}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;a(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(l.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const m=e=>{let{title:t,children:n}=e;return i.createElement(a.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(r.A,null),i.createElement("div",{className:"page-section"},i.createElement(o.mc,null,n," ",i.createElement(s.A,null)),i.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-link-code-js-bd9c558a65a86f24dbe1.js.map