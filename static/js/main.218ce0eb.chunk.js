(this.webpackJsonpyashwani2000_v2=this.webpackJsonpyashwani2000_v2||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),s=n(38),a=n.n(s),o=(n(49),n(50),n(37)),i=(n(51),n.p,n(7)),j=n(6);function l(){var e=Object(r.useRef)();Object(o.b)((function(){var t=.001*Date.now();e.current.rotation.x=.25*t,e.current.rotation.y=.5*t}));for(var t=new i.BufferGeometry,n=[],c=[],s=[],a=new i.Color,l=800,d=100,h=50,b=new i.Vector3,u=new i.Vector3,p=new i.Vector3,m=new i.Vector3,x=new i.Vector3,g=0;g<1e3;g++){var O=Math.random()*l-400,f=Math.random()*l-400,v=Math.random()*l-400,w=O+Math.random()*d-h,y=f+Math.random()*d-h,k=v+Math.random()*d-h,M=O+Math.random()*d-h,S=f+Math.random()*d-h,z=v+Math.random()*d-h,C=O+Math.random()*d-h,_=f+Math.random()*d-h,R=v+Math.random()*d-h;n.push(w,y,k),n.push(M,S,z),n.push(C,_,R),b.set(w,y,k),u.set(M,S,z),p.set(C,_,R),m.subVectors(p,u),x.subVectors(b,u),m.cross(x),m.normalize();var B=m.x,E=m.y,I=m.z;c.push(32767*B,32767*E,32767*I),c.push(32767*B,32767*E,32767*I),c.push(32767*B,32767*E,32767*I);var U=O/l+.5,W=f/l+.5,A=v/l+.5;a.setRGB(U,W,A),s.push(255*a.r,255*a.g,255*a.b),s.push(255*a.r,255*a.g,255*a.b),s.push(255*a.r,255*a.g,255*a.b)}var F=new i.Float32BufferAttribute(n,3),N=new i.Int16BufferAttribute(c,3),P=new i.Uint8BufferAttribute(s,3);N.normalized=!0,P.normalized=!0,t.setAttribute("position",F),t.setAttribute("normal",N),t.setAttribute("color",P),t.computeBoundingSphere();var V=new i.MeshPhongMaterial({color:11184810,specular:16777215,shininess:250,side:i.DoubleSide,vertexColors:!0});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("mesh",{ref:e,geometry:t,material:V})})}function d(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{args:"#444"}),Object(j.jsx)("directionalLight",{args:["#fff",.5],position:[1,1,1]}),Object(j.jsx)("directionalLight",{args:["#fff",1.5],position:[0,-1,0]})]})}function h(){return Object(j.jsxs)(o.a,{style:{position:"absolute",top:"0",left:"0",height:"100vh",zIndex:"-1"},camera:{args:[27,window.innerWidth/window.innerHeight,1,3500],position:[0,0,1100]},children:[Object(j.jsx)("color",{attach:"background",args:["#050505"]}),Object(j.jsx)("fog",{attach:"fog",args:["#050505",2e3,3500]}),Object(j.jsx)(d,{}),Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)("h2",{children:"Loading..."}),children:Object(j.jsx)(l,{})})]})}var b=n(20),u=n(10);function p(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:"Projects"})})}function m(){return Object(j.jsx)("h2",{children:"Skills"})}function x(){return Object(j.jsx)("h2",{children:"Resume"})}function g(){return Object(j.jsx)("h2",{children:"Contact"})}n(56);var O=n.p+"static/media/face1.04370258.png",f=n(41),v=n.n(f);function w(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{children:"Hi, I'm Yash"}),Object(j.jsx)(v.a,{multiText:["Student","Electrical Engineer","Computer Scientist","Undergraduate Researcher","Intern",""],hideCursorAfterText:!0,cursorColor:"white",typeSpeed:50}),Object(j.jsx)("p",{children:" Currently a student at the University of Wisconsin Madison, double majoring in Electrical Engineering and Computer Science. I am looking for Internship opportunities in the fields of Software Engineering, Electrical Engineering, and Computer Graphics."})]}),Object(j.jsx)("div",{className:"imgBox",children:Object(j.jsx)("img",{src:O,alt:"Memoji"})})]})}var y=n(17),k=n(0),M=n(3),S=n(1),z=n(2),C=(n(59),n(42)),_=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){var e;return e=this.props.fa_b?Object(j.jsx)(C.a,{icon:this.props.logo,size:"2x"}):Object(j.jsx)("img",{src:this.props.logo,alt:"logo"}),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card",style:{backgroundColor:this.props.color,zIndex:this.props.z},children:[e,Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)("p",{children:this.props.desc})]})})}}]),n}(c.a.Component);function R(){var e,t=[],n=Object(y.a)([{name:"Undergraduate Researcher",desc:"Wisconsin Privacy and Security Group",logo:"lock",fa_b:!0,color:"rgba(255, 255, 255, 0.1 )",z:0},{name:"Techincal Student Staff",desc:"UW-Makerspace",logo:"https://making.engr.wisc.edu/wp-content/uploads/sites/1271/2020/02/favicon_red.png",fa_b:!1,color:"rgba(210, 27, 23, 0.1 )",z:1},{name:"Undergraduate Researcher",desc:"Wisconsin Privacy and Security Group",logo:"lock",fa_b:!0,color:"rgba(0, 0, 0, 0.05 )",z:2},{name:"Undergraduate Researcher",desc:"Wisconsin Privacy and Security",logo:"lock",fa_b:!0,color:"rgba(0, 255, 0, 0.1 )",z:1},{name:"Undergraduate Researcher",desc:"Wisconsin Privacy and Security Group",logo:"lock",fa_b:!0,color:"rgba(0, 0, 255, 0.1 )",z:0}]);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(Object(j.jsx)(_,{fa_b:r.fa_b,name:r.name,desc:r.desc,logo:r.logo,color:r.color,z:r.z},r.name))}}catch(c){n.e(c)}finally{n.f()}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"wcontent",children:Object(j.jsx)("div",{className:"cards",children:t})})})}var B=n.p+"static/media/face3.7d3d2967.png",E=n(21),I=n(43),U=n(44);function W(){return Object(j.jsxs)("section",{children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(b.a,{basename:"",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)(b.b,{to:"/",children:[" ",Object(j.jsx)("img",{className:"logo",src:B,alt:"Logo"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/projects",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/work",children:"Work"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/skills",children:"Skills"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/resume",children:"R\xe9sume"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/contact",children:"Contact"})})]})]}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/projects",component:p}),Object(j.jsx)(u.a,{path:"/work",component:R}),Object(j.jsx)(u.a,{path:"/skills",component:m}),Object(j.jsx)(u.a,{path:"/resume",component:x}),Object(j.jsx)(u.a,{path:"/contact",component:g}),Object(j.jsx)(u.a,{path:"/",component:w})]})]})})]})}E.b.add(I.a,U.a),a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.218ce0eb.chunk.js.map