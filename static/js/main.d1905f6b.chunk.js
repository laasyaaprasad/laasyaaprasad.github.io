(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){e.exports=t(40)},28:function(e,a,t){},29:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(7),l=t.n(i),r=(t(28),t(13)),c=t.n(r),o=(t(29),t(14)),m=t(17),d=t.n(m);class p extends s.Component{constructor(){super(),this.titles=[],this.state={checked:!1},this.onThemeSwitchChange=this.onThemeSwitchChange.bind(this)}onThemeSwitchChange(e){this.setState({checked:e}),this.setTheme()}setTheme(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}render(){if(this.props.sharedData){var e=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map(e=>[e.toUpperCase(),1500]).flat()}const a=n.a.memo(()=>n.a.createElement(o.a,{className:"title-styles",steps:this.titles,loop:50}),(e,a)=>!0);return n.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},n.a.createElement("div",{className:"row aligner",style:{height:"100%"}},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"header-content"},n.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),n.a.createElement("br",null),n.a.createElement("h1",{className:"mb-0"},n.a.createElement(o.a,{steps:[e],wrapper:"p"})),n.a.createElement("div",{className:"title-container"},n.a.createElement(a,null)),n.a.createElement("div",{className:"resume-button-container"},n.a.createElement("a",{href:"https://drive.google.com/file/d/1TFo3G1c6tqcn_b1qVCreeJBGgv4R88CD/view?usp=share_link",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Resume")),n.a.createElement("div",{className:"theme-switch-container"},n.a.createElement(d.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#6E5AAD",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:n.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:n.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"}))))))}}var h=p;class u extends s.Component{render(){let e;this.props.sharedBasicInfo&&(e=this.props.sharedBasicInfo.social.map((function(e){const a="0 0 30px rgba(157, 138, 222, 0.5)";return n.a.createElement("span",{key:e.name,className:"m-4"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",margin:"0 6px",fontSize:"24px",color:"#fff",transition:"box-shadow 0.3s ease"},onMouseOver:e=>e.target.style.boxShadow=a,onMouseOut:e=>e.target.style.boxShadow="0 0 0 transparent"},n.a.createElement("i",{className:e.class})))})));const a="0 0 30px rgba(157, 138, 222, 0.5)";return n.a.createElement("footer",null,n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"email-section",style:{marginTop:"20px"}},n.a.createElement("h3",null,"Let's Connect!"),n.a.createElement("p",null,"I'm always eager to connect and explore new opportunities. Whether you have a question, need assistance, or simply want to say hello, feel free to reach out anytime!"),n.a.createElement("a",{href:"mailto:laprasad20@gmail.com",className:"email-button",style:{display:"inline-block",padding:"10px 20px",margin:"5px 0",backgroundColor:"rgba(31, 31, 56, 1)",color:"#fff",textDecoration:"none",borderRadius:"5px",boxShadow:"0 0 0 transparent",transition:"box-shadow 0.3s ease"},onMouseOver:e=>e.target.style.boxShadow=a,onMouseOut:e=>e.target.style.boxShadow="0 0 0 transparent"},"Send Email")),n.a.createElement("div",{className:"social-links"},e),n.a.createElement("div",{className:"achievements-container"},n.a.createElement("div",{className:"copyright py-4 text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("small",null,"Made with ",n.a.createElement("span",{style:{color:"red"}},"\u2764")," by Laasya Anantha Prasad"))))))}}var g=u;class E extends s.Component{render(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,s=this.props.resumeBasicInfo.description;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{style:{color:"white"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"row center mx-auto mb-4"},n.a.createElement("div",{className:"col-md-4 mb-5 center"},n.a.createElement("div",{className:"polaroid"},n.a.createElement("span",{style:{cursor:"auto"}},n.a.createElement("img",{style:{height:"300px",width:"520px",objectFit:"cover"},src:e,alt:"Avatar placeholder"})))),n.a.createElement("div",{className:"col-md-8 center"},n.a.createElement("div",{className:"col-md-10"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},n.a.createElement("br",null),n.a.createElement("span",{className:"wave"},t," "),n.a.createElement("br",null),n.a.createElement("br",null),s)))))))}}var f=E,v=t(8),y=(t(16),t(9));class x extends s.Component{render(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((e,a)=>{var t;const s=e.technologies;var i=e.mainTech.map((e,a)=>n.a.createElement(y.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)),l=s.map((e,a)=>n.a.createElement(y.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)),r=null===(t=e.content)||void 0===t?void 0:t.map((e,a)=>n.a.createElement("li",{key:a,style:{marginBottom:"8px"}},e));let c;return c=0===a?n.a.createElement("img",{src:"images/Validifi.png",alt:"Validifi",style:{width:"100%",height:"100%",borderRadius:"50%"}}):1===a?n.a.createElement("img",{src:"images/Cisco.png",alt:"Cisco",style:{width:"100%",height:"100%",borderRadius:"50%"}}):2===a?n.a.createElement("img",{src:"images/krtrimaiq.jpeg",alt:"Krtrimaiq",style:{width:"100%",height:"100%",borderRadius:"50%"}}):3===a?n.a.createElement("img",{src:"images/HPE.png",alt:"HPE",style:{width:"100%",height:"100%",borderRadius:"50%"}}):n.a.createElement("i",{className:"fab fa-angular experience-icon"}),n.a.createElement(v.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#FFFFFF",color:"#fff",textAlign:"center",boxShadow:"0 0 15px 5px #7B6FAD",border:"2px solid #FFFFFF"},icon:c,key:a},n.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},i),n.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),n.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},l),r&&n.a.createElement("ul",{style:{textAlign:"left",marginTop:"15px",paddingLeft:"20px",listStyleType:"disc"}},r))});return n.a.createElement("section",{id:"resume",className:"pb-5"},n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black"}},n.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement(v.VerticalTimeline,null,a,n.a.createElement(v.VerticalTimelineElement,{iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"2px solid #FFFFFF",boxShadow:"0 0 15px 5px #7B6FAD"},icon:n.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}var N=x,b=t(43),w=t(18),k=t.n(w),F=t(19),S=t.n(F),A=t(20),B=t.n(A);t(36);class D extends s.Component{render(){if(this.props.data){const i=this.props.data.technologies,l=this.props.data.images;var e=this.props.data.title,a=this.props.data.description,t=this.props.data.url;if(this.props.data.technologies){i.map((e,a)=>n.a.createElement("li",{className:"list-inline-item mx-3",key:a},n.a.createElement("span",null,n.a.createElement("div",{className:"text-center"},n.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},n.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name))))));if(this.props.data.images)var s=l.map((e,a)=>n.a.createElement("div",{key:a,"data-src":e}))}}return n.a.createElement(b.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),n.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},n.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},n.a.createElement("div",{className:"slider-tab"},n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement(k.a,{cssModule:[S.a,B.a],animation:"scaleOutAnimation",className:"slider-image"},s)),n.a.createElement("div",{className:"col-md-10 mx-auto"},n.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},e,t?n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link-href"},n.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),n.a.createElement("p",{className:"modal-description"},a))))}}var I=D;class T extends s.Component{constructor(e){super(e),this.state={deps:{},detailsModalShow:!1}}render(){let e=e=>{this.setState({detailsModalShow:!0,deps:e})};if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},n.a.createElement("span",{className:"portfolio-item d-block"},n.a.createElement("div",{className:"foto",onClick:()=>e(a)},n.a.createElement("div",null,n.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),n.a.createElement("span",{className:"project-date"},a.startDate),n.a.createElement("br",null),n.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"row mx-auto"},t)),n.a.createElement(I,{show:this.state.detailsModalShow,onHide:()=>this.setState({detailsModalShow:!1}),data:this.state.deps})))}}var j=T;class C extends s.Component{render(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return n.a.createElement("li",{className:"list-inline-item mx-3",key:a},n.a.createElement("span",null,n.a.createElement("div",{className:"text-center skills-tile achievement-card"},n.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},n.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return n.a.createElement("section",{id:"skills"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title"},n.a.createElement("span",{className:"text-white"},e))),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}var _=C,L=t(10);class R extends s.Component{render(){const e={marginTop:"10px",fontSize:"1rem",color:"#555",fontWeight:"400"};if(this.props.resumeAchievements&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.achievements,t=this.props.resumeAchievements.map((a,t)=>n.a.createElement("div",{className:"achievement-card",key:t,"data-aos":"fade-up","data-aos-delay":100*t},n.a.createElement("div",{className:"achievement-icon"},n.a.createElement("i",{className:"fas fa-trophy"})),n.a.createElement("div",{className:"achievement-content"},n.a.createElement("div",{className:"achievement-text-content"},n.a.createElement("h3",{className:"achievement-title"},a.title),n.a.createElement("p",{className:"achievement-description"},a.description),a.tags&&n.a.createElement("div",{className:"achievement-tags"},a.tags.map((e,a)=>n.a.createElement(y.a,{pill:!0,className:"achievement-badge mr-2 mb-2",key:a},e))),"Harvard Agriculture Datathon 2024"===a.title&&n.a.createElement("p",{style:Object(L.a)(Object(L.a)({},e),{},{color:"white",fontSize:"1.2rem"})},n.a.createElement("div",{className:"resume-button-container"},n.a.createElement("a",{href:"https://datascience.harvard.edu/2024/10/25/tackling-agriculture-and-food-security-in-a-changing-climate-celebrating-solutions-from-the-hdsi-agri-datathon/",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Results"))),"Research Publication"===a.title&&n.a.createElement("p",{style:Object(L.a)(Object(L.a)({},e),{},{color:"white",fontSize:"1.2rem"})},n.a.createElement("div",{className:"resume-button-container"},n.a.createElement("a",{href:"https://ieeexplore.ieee.org/document/10170349",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Read the paper")))),a.image&&n.a.createElement("div",{className:"achievement-image-wrapper"},n.a.createElement("img",{src:a.image,alt:a.title,className:"achievement-image",onError:e=>{e.target.onerror=null,e.target.src="/images/placeholder.jpg"}})))));return n.a.createElement("section",{id:"achievements",className:"pb-5"},n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title"},n.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},a||"Achievements")))),n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement("div",{className:"achievements-container"},t)))}}var M=R,z=t(22),O=t.n(z);t(38);class P extends s.Component{render(){if(this.props.resumeEducation&&this.props.resumeBasicInfo){this.props.resumeBasicInfo.section_name.education;const e=this.props.resumeEducation.map((e,a)=>{const t=e.coursework||[],s=e.gpa,i=e.location,l=e["Research Assistant"]||[],r=e["Teaching Assistant"]||[],c=e.extra||[],o=e=>e.map((e,a)=>n.a.createElement("li",{key:a,style:{marginBottom:"3px"},dangerouslySetInnerHTML:{__html:e}})),m=(t[0]||"").split(",").map(e=>e.trim());let d;return d=0===a?n.a.createElement("img",{src:"images/Northeastern.png",alt:"Northeastern University",style:{width:"100%",height:"100%",borderRadius:"50%"}}):1===a?n.a.createElement("img",{src:"images/BMS.jpeg",alt:"B. M. S. College of Engineering",style:{width:"100%",height:"100%",borderRadius:"50%"}}):n.a.createElement("i",{className:"fas fa-graduation-cap education-icon"}),n.a.createElement(v.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:e.years,iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"3px solid #FFFFFF",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px 5px #7B6FAD"},icon:d,key:a},n.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.degree),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",marginTop:"-5px"}},e.institution),i&&n.a.createElement("h5",{className:"vertical-timeline-element-location",style:{textAlign:"left",marginTop:"-10px",marginBottom:"10px"}},i),s&&n.a.createElement(y.a,{className:"main-badge",style:{marginBottom:"10px"}},"GPA: ",s),l.length>0&&n.a.createElement("div",{className:"research-section"},n.a.createElement("h4",null,"Research Assistant:"),n.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},o(l))),r.length>0&&n.a.createElement("div",{className:"teaching-section"},n.a.createElement("h4",null,"Teaching Assistant:"),n.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},o(r))),m.length>0&&n.a.createElement("div",{className:"coursework-section"},n.a.createElement("h4",null,"Coursework:"),n.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},o(m))),c.length>0&&n.a.createElement("div",{className:"extra-info"},n.a.createElement("h4",null,"Other Activities:"),n.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},o(c))))});return n.a.createElement("section",{id:"education",className:"pb-5"},n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black"}},n.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},"Education")))),n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement(v.VerticalTimeline,null,e,n.a.createElement(v.VerticalTimelineElement,{iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"3px solid #FFFFFF",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px 5px #7B6FAD"},icon:n.a.createElement("i",{className:"fas fa-graduation-cap mx-auto education-icon",style:{fontSize:"2.5rem"}})}))))}return null}}var W=P;O.a.init({duration:1e3,once:!0});class V extends s.Component{constructor(e){super(),this.state={foo:"bar",resumeData:{},sharedData:{}}}componentDidMount(){this.loadSharedData(),this.loadResumeFromPath("res_primaryLanguage.json")}loadResumeFromPath(e){c.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}loadSharedData(){c.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}render(){return n.a.createElement("div",null,n.a.createElement(h,{sharedData:this.state.sharedData.basic_info}),n.a.createElement(f,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),n.a.createElement(N,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(_,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(j,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(M,{resumeAchievements:this.state.resumeData.achievements,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(W,{resumeEducation:this.state.resumeData.education,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}var H=V;const q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,a){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(39);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",l.a.render(n.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const a="".concat("","/service-worker.js");q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const s=t.headers.get("content-type");404===t.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):U(e,a)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):U(a,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.d1905f6b.chunk.js.map