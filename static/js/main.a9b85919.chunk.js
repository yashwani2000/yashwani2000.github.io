(this.webpackJsonpyashwani2000=this.webpackJsonpyashwani2000||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a.n(o),r=a(41),c=a.n(r),s=(a(49),a(10)),i=a(0),l=a(3),d=a(1),b=a(2),h=(a(50),a(40)),j=a(8),p=a(4);function u(){var e=Object(o.useRef)();Object(h.b)((function(){var t=.001*Date.now();e.current.rotation.x=.25*t,e.current.rotation.y=.5*t}));for(var t=new j.BufferGeometry,a=[],n=[],r=[],c=new j.Color,s=800,i=100,l=50,d=new j.Vector3,b=new j.Vector3,u=new j.Vector3,g=new j.Vector3,m=new j.Vector3,f=0;f<1e3;f++){var O=Math.random()*s-400,v=Math.random()*s-400,x=Math.random()*s-400,w=O+Math.random()*i-l,k=v+Math.random()*i-l,y=x+Math.random()*i-l,M=O+Math.random()*i-l,C=v+Math.random()*i-l,z=x+Math.random()*i-l,_=O+Math.random()*i-l,E=v+Math.random()*i-l,N=x+Math.random()*i-l;a.push(w,k,y),a.push(M,C,z),a.push(_,E,N),d.set(w,k,y),b.set(M,C,z),u.set(_,E,N),g.subVectors(u,b),m.subVectors(d,b),g.cross(m),g.normalize();var A=g.x,D=g.y,W=g.z;n.push(32767*A,32767*D,32767*W),n.push(32767*A,32767*D,32767*W),n.push(32767*A,32767*D,32767*W);var I=O/s+.5,R=v/s+.5,F=x/s+.5;c.setRGB(I,R,F),r.push(255*c.r,255*c.g,255*c.b),r.push(255*c.r,255*c.g,255*c.b),r.push(255*c.r,255*c.g,255*c.b)}var S=new j.Float32BufferAttribute(a,3),B=new j.Int16BufferAttribute(n,3),U=new j.Uint8BufferAttribute(r,3);B.normalized=!0,U.normalized=!0,t.setAttribute("position",S),t.setAttribute("normal",B),t.setAttribute("color",U),t.computeBoundingSphere();var Y=new j.MeshPhongMaterial({color:11184810,specular:16777215,shininess:250,side:j.DoubleSide,vertexColors:!0});return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("mesh",{ref:e,geometry:t,material:Y})})}function g(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ambientLight",{args:"#444"}),Object(p.jsx)("directionalLight",{args:["#fff",.5],position:[1,1,1]}),Object(p.jsx)("directionalLight",{args:["#fff",1.5],position:[0,-1,0]})]})}function m(){return Object(p.jsxs)(h.a,{style:{position:"fixed",top:"0",left:"0",height:"100vh",zIndex:"1",width:"100vw",overflow:"hidden",minHeight:"100vh",minWidth:"100vw"},camera:{args:[27,window.innerWidth/window.innerHeight,1,3500],position:[0,0,1100]},children:[Object(p.jsx)("color",{attach:"background",args:["#050505"]}),Object(p.jsx)("fog",{attach:"fog",args:["#050505",2e3,3500]}),Object(p.jsx)(g,{}),Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)("h2",{children:"Loading..."}),children:Object(p.jsx)(u,{})})]})}var f=a(22),O=a(11),v=a(13),x=(a(55),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(v.a)([{title:"Curate",desc:"Engineered a multiplayer iOS game for Amazon",long_desc:"- Engineered a multiplayer iOS game for Amazon (CS-Capstone)\n- Team lead and Scrum Master\n- Developed the app in an agile manner with weekly code sprints\n- Utilized SwiftUI, UIKit and GameKit.",color:"rgba(255, 255, 255, 0.1 )",z:0},{title:"AML - KMeans",desc:"Designed a black-box attack that uses data poisoning to increase mis-classifications in a KMeans implementation",long_desc:"chalkboard-teacher",color:"rgba(255, 255, 255, 0.1 )",z:0}]);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push(Object(p.jsx)(w,{color:o.color,title:o.title,desc:o.desc,longDesc:o.long_desc,createModal:this.props.createModal},o.title))}}catch(n){a.e(n)}finally{a.f()}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"projects_container container",children:Object(p.jsx)("ul",{children:t})})})}}]),a}(n.a.Component)),w=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).showModal=o.showModal.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"showModal",value:function(){this.props.createModal(this.props.title,this.props.longDesc)}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"project_card",style:{backgroundColor:this.props.color},onClick:this.showModal,children:[Object(p.jsx)("h1",{children:this.props.title}),Object(p.jsxs)("p",{children:[this.props.desc," "]})]})})}}]),a}(n.a.Component),k=(a(56),a(19));function y(){var e,t=[],a=Object(v.a)([{name:"Python",desc:"Pytorch, TensorFlow, numpy, numba, seaborn, skikit-Learn, matplotlib, gym, openai, opencv, stable_baselines3",logo:["fab","python"],fa_b:!0,color:"rgba(0,0,0,0.1)"},{name:"C/C++",desc:"OpenMP, Intel oneAPI",logo:"https://icons-for-free.com/iconfiles/png/512/bxl+c+plus+plus-1325051931431540241.png",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"Java",desc:"",logo:["fab","java"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"Matlab",desc:"",logo:"https://pic.onlinewebfonts.com/svg/img_437041.png",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"JavaScript",desc:"p5, three, a-frame",logo:["fab","js-square"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"WebGL",desc:"",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2560px-WebGL_Logo.svg.png",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"React",desc:"",logo:["fab","react"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"React Native",desc:"",logo:["fab","react"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"Swift",desc:"SwiftUI, GameKit, UIKit, SpriteKit",logo:["fab","swift"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"Flutter",desc:"",logo:"https://iconape.com/wp-content/png_logo_vector/flutter-logo.png",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"CSS",desc:"",logo:["fab","css3-alt"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"PHP",desc:"",logo:["fab","php"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"ROS",desc:"",logo:["fas","robot"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"UE4",desc:"",logo:"https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"Unity",desc:"Vuforia",logo:["fab","unity"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"MS Office",desc:"Macros",logo:["fab","microsoft"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"Adobe CC",desc:"Photoshop, Illustrator, InDesign, Premier Pro",logo:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",fa_b:!1,color:"rgba(0,0,0,0.2)"},{name:"LT Spice",desc:"",logo:["fas","charging-station"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"System Verilog",desc:"",logo:["fas","microchip"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"zsh",desc:"",logo:["fas","terminal"],fa_b:!0,color:"rgba(0,0,0,0.2)"},{name:"Docker",desc:"",logo:["fab","docker"],fa_b:!0,color:"rgba(0,0,0,0.2)"}]);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push(Object(p.jsx)(M,{fa_b:o.fa_b,name:o.name,desc:o.desc,logo:o.logo,color:o.color},o.name))}}catch(n){a.e(n)}finally{a.f()}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"skills_container container",children:Object(p.jsx)("ul",{children:t})})})}var M=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e;return e=this.props.fa_b?Object(p.jsx)(k.a,{icon:this.props.logo,size:"2x"}):Object(p.jsx)("img",{src:this.props.logo,alt:"logo"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"skill_card",style:{backgroundColor:this.props.color},children:[Object(p.jsxs)("span",{children:[e,Object(p.jsx)("h1",{children:this.props.name})]}),Object(p.jsx)("p",{children:this.props.desc})]})})}}]),a}(n.a.Component),C=(a(62),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).handleClick=o.handleClick.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"handleClick",value:function(){window.open(this.props.url)}},{key:"render",value:function(){var e;return e=this.props.fa_b?Object(p.jsx)(k.a,{icon:this.props.logo,size:"2x"}):Object(p.jsx)("img",{src:this.props.logo,alt:"logo"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"resume_card",onClick:this.handleClick,style:{backgroundColor:this.props.color,zIndex:this.props.z},children:[e,Object(p.jsx)("h2",{style:{color:this.props.tcolor},children:this.props.name}),Object(p.jsx)("p",{children:this.props.desc})]})})}}]),a}(n.a.Component)),z=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(v.a)([{name:"Notion",desc:"View on Notion",logo:"https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",fa_b:!1,color:"rgba(255,255,255, 1 )",z:1,url:"https://www.notion.so/yashwani2000/Resume-16307e14e7a441c6aaecaa2d9412db64",tcolor:"rgba(0,0,0, 1 )"},{name:"Rezi",desc:"View on Rezi",logo:"data:image/png;base64,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",fa_b:!1,color:"rgba(40, 54, 70, 1)",z:0,url:"https://app.rezi.ai/s/jU0VM7W63BfaodPWW6SK",tcolor:"rgba(255, 255, 255, 1)"}]);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push(Object(p.jsx)(C,{fa_b:o.fa_b,name:o.name,desc:o.desc,logo:o.logo,color:o.color,z:o.z,url:o.url,tcolor:o.tcolor},o.name))}}catch(n){a.e(n)}finally{a.f()}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"work_container container",children:Object(p.jsx)("div",{className:"work_cards",children:t})})})}}]),a}(n.a.Component),_=(a(63),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).handleClick=o.handleClick.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"handleClick",value:function(){window.open(this.props.url)}},{key:"render",value:function(){var e;return e=this.props.fa_b?Object(p.jsx)(k.a,{icon:this.props.logo,size:"2x"}):Object(p.jsx)("img",{src:this.props.logo,alt:"logo"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"contact_card",onClick:this.handleClick,style:{backgroundColor:this.props.color,zIndex:this.props.z},children:[e,Object(p.jsx)("h2",{children:this.props.name}),Object(p.jsx)("p",{children:this.props.desc})]})})}}]),a}(n.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=[],a=Object(v.a)([{name:"LinkedIN",desc:"in/yashwani2000",logo:["fab","linkedin-in"],fa_b:!0,color:"rgba(40,103,178, 0.75 )",z:1,url:"https://www.linkedin.com/in/yashwani2000/"},{name:"Email",desc:"ywani@wisc.edu",logo:"envelope",fa_b:!0,color:"rgba(0,0,0, 0.75)",z:0,url:"mailto:ywani@wisc.edu"}]);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push(Object(p.jsx)(_,{fa_b:o.fa_b,name:o.name,desc:o.desc,logo:o.logo,color:o.color,z:o.z,url:o.url},o.name))}}catch(n){a.e(n)}finally{a.f()}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"work_container container",children:Object(p.jsx)("div",{className:"work_cards",children:t})})})}}]),a}(n.a.Component),N=(a(64),a.p+"static/media/face1.04370258.png"),A=a(44),D=a.n(A);function W(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"home_container container",children:[Object(p.jsxs)("div",{className:"home_tile",children:[Object(p.jsx)("h2",{children:"Hi, I'm Yash"}),Object(p.jsx)(D.a,{multiText:["Student","Web Developer","Machine Learning Enthusiast","Undergraduate Researcher","Intern","Computer Scientist","Electrical Engineer"],hideCursorAfterText:!0,cursorColor:"white",typeSpeed:50}),Object(p.jsx)("p",{children:" Currently a student at the University of Wisconsin Madison, double majoring in Electrical Engineering and Computer Science. I am looking for Internship opportunities in the fields of Software Engineering, Electrical Engineering, and Computer Graphics."})]}),Object(p.jsx)("div",{className:"imgBox",children:Object(p.jsx)("img",{src:N,alt:"Memoji"})})]})})}a(67);var I=a.p+"static/media/wipi.315efa1a.png",R=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).showModal=o.showModal.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"showModal",value:function(){this.props.createModal(this.props.name,this.props.longDesc)}},{key:"render",value:function(){var e;return e=this.props.fa_b?Object(p.jsx)(k.a,{icon:this.props.logo,size:"2x"}):Object(p.jsx)("img",{src:this.props.logo,alt:"logo"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"work_card",style:{backgroundColor:this.props.color,zIndex:this.props.z},onClick:this.showModal,children:[e,Object(p.jsx)("h2",{children:this.props.name}),Object(p.jsx)("p",{children:this.props.desc})]})})}}]),a}(n.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t={experiences:[{name:"Peer Mentor",desc:"Computer Graphics (CS 559)",longDesc:"Test1",logo:"chalkboard-teacher",fa_b:!0,color:"rgba(255, 255, 255, 0.1 )",z:0},{name:"Techincal Student Staff",desc:"UW-Makerspace",longDesc:"Test1",logo:"https://making.engr.wisc.edu/wp-content/uploads/sites/1271/2020/02/favicon_red.png",fa_b:!1,color:"rgba(210, 27, 23, 0.1 )",z:1},{name:"Undergraduate Researcher",desc:"Wisconsin Privacy and Security Group",longDesc:"Test1",logo:I,fa_b:!1,color:"rgba(0, 0, 0, 0.05 )",z:2},{name:"Software Engineering Intern",desc:"Crave Eats",longDesc:"Test1",logo:"pizza-slice",fa_b:!0,color:"rgba(0, 255, 0, 0.1 )",z:3},{name:"Undergraduate Student Assistant",desc:"Electrical and Electronic Circuits (ECE 376)",longDesc:"Test1",logo:"bolt",fa_b:!0,color:"rgba(0, 0, 255, 0.1 )",z:4}]},a=[],o=Object(v.a)(t.experiences);try{for(o.s();!(e=o.n()).done;){var n=e.value;a.push(Object(p.jsx)(R,{fa_b:n.fa_b,name:n.name,desc:n.desc,logo:n.logo,color:n.color,z:n.z,createModal:this.props.createModal,longDesc:n.longDesc},n.name))}}catch(r){o.e(r)}finally{o.f()}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"work_container container",children:Object(p.jsx)("div",{className:"work_cards",children:a})})})}}]),a}(n.a.Component),S=a(23),B=a(37),U=a(15),Y=(a(68),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).setWrapperRef=o.setWrapperRef.bind(Object(s.a)(o)),o.handleClickOutside=o.handleClickOutside.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.props.close()}},{key:"render",value:function(){return this.props.show?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"modal",children:Object(p.jsx)("div",{className:"modal_body",ref:this.setWrapperRef,children:Object(p.jsxs)("div",{className:"modal_content",children:[Object(p.jsx)("div",{className:"modal_header",children:Object(p.jsx)("h1",{children:this.props.title})}),Object(p.jsx)("div",{className:"modal_data",children:Object(p.jsx)("p",{children:this.props.desc})})]})})})}):null}}]),a}(n.a.Component));S.b.add(U.n,B.b,U.i,U.b,U.k,U.a,B.a,U.g,U.m,U.e,U.d,U.f,U.h,U.l,U.j,U.c);var q=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(G,{})]})}}]),a}(n.a.Component),G=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).state={showModal:!1,modalTitle:"",modalDesc:""},o.createModal=o.createModal.bind(Object(s.a)(o)),o.closeModal=o.closeModal.bind(Object(s.a)(o)),o}return Object(l.a)(a,[{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"createModal",value:function(e,t){this.setState({showModal:!0,modalTitle:e,modalDesc:t})}},{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"base",children:[Object(p.jsxs)(f.a,{basename:"",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/",children:Object(p.jsx)(k.a,{icon:"home",size:"1x"})})})}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/projects",children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/work",children:"Work"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/skills",children:"Skills"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/resume",children:"R\xe9sume"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/contact",children:"Contact"})})]})]}),Object(p.jsxs)(O.c,{children:[Object(p.jsx)(O.a,{path:"/projects",render:function(){return Object(p.jsx)(x,{createModal:e.createModal})}}),Object(p.jsx)(O.a,{path:"/work",render:function(){return Object(p.jsx)(F,{createModal:e.createModal})}}),Object(p.jsx)(O.a,{path:"/skills",component:y}),Object(p.jsx)(O.a,{path:"/resume",component:z}),Object(p.jsx)(O.a,{path:"/contact",component:E}),Object(p.jsx)(O.a,{path:"/",component:W})]})]}),Object(p.jsx)(Y,{show:this.state.showModal,title:this.state.modalTitle,desc:this.state.modalDesc,close:this.closeModal})]})})}}]),a}(n.a.Component);c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.a9b85919.chunk.js.map