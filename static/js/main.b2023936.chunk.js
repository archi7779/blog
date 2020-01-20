(this["webpackJsonpblock-21"]=this["webpackJsonpblock-21"]||[]).push([[0],{229:function(e,t,a){e.exports=a(441)},237:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n,r,c,i,l=a(0),o=a.n(l),s=a(40),u=a.n(s),d=a(15),m=a(52),p=a(212),b=(a(237),a(148)),h=a(85),E=a(22),g=a(446),f=a(31),v=a(223),O=a(13),y=a.n(O),j=a(448),k=a(42),S=a.n(k),x=Object(j.a)("LOG_OUT"),T=Object(j.a)("USER_INFO_FROM_SERVER"),w=Object(j.a)("NET_ERR_TO_STATE"),L=Object(j.a)("SET_START_PAGING"),C=Object(j.a)("LOG_IN_REQUEST"),R=Object(j.a)("LOG_IN_SUCCESS"),A=Object(j.a)("LOG_IN_FAILURE"),N=Object(j.a)("REGISTRATION_IN_REQUEST"),q=Object(j.a)("REGISTRATION_SUCCESS"),_=Object(j.a)("REGISTRATION_FAILURE"),I=(Object(j.a)("GET_ARTICLES_FROM_SERVER"),Object(j.a)("GET_ARTICLES_FROM_SERVER")),F=Object(j.a)("UPDATE_POST_LIKE_STATUS"),P=function(e,t,a){return function(n){var r,c,i,l,o;return y.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(r={headers:{Authorization:"Token ".concat(t)}},a){s.next=15;break}return s.prev=2,s.next=5,y.a.awrap(S.a.post("https://conduit.productionready.io/api/articles/".concat(e,"/favorite"),"",r));case 5:c=s.sent,i=c.data,n(F(i)),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),console.log(s.t0);case 13:s.next=26;break;case 15:return s.prev=15,s.next=18,y.a.awrap(S.a.delete("https://conduit.productionready.io/api/articles/".concat(e,"/favorite"),r));case 18:l=s.sent,o=l.data,n(F(o)),s.next=26;break;case 23:s.prev=23,s.t1=s.catch(15),console.log(s.t1);case 26:case"end":return s.stop()}}),null,null,[[2,10],[15,23]])}},G=Object(g.a)((n={},Object(E.a)(n,C,(function(){return"requested"})),Object(E.a)(n,A,(function(){return"failed"})),Object(E.a)(n,R,(function(){return"finished"})),n),"none"),U=Object(g.a)((r={},Object(E.a)(r,N,(function(){return"requested"})),Object(E.a)(r,_,(function(){return"failed"})),Object(E.a)(r,q,(function(){return"finished"})),r),"none"),M=Object(g.a)((c={},Object(E.a)(c,T,(function(e,t){var a=t.payload;return Object(h.a)({},a.user)})),Object(E.a)(c,x,(function(){return{}})),c),{}),V=Object(g.a)((i={},Object(E.a)(i,I,(function(e,t){var a=t.payload.data.articles;return Object(b.a)(a)})),Object(E.a)(i,F,(function(e,t){var a=t.payload.article;return e[Object(f.findIndex)(e,(function(e){return e.slug===a.slug}))]=a,Object(b.a)(e)})),i),[]),z=Object(g.a)(Object(E.a)({},L,(function(e,t){return t.payload||1})),1),D=Object(g.a)(Object(E.a)({},w,(function(e,t){var a=t.payload.data;return Object(h.a)({},a.errors)})),{}),B=Object(m.c)({user:M,loginState:G,registrationState:U,netError:D,articles:V,page:z}),J=a(37),Q=a(21),K=a(23),H=a(24),W=a(26),X=a(25),Y=a(27),Z=a(4),$=a(447),ee=a(149),te=a(14),ae={doLogin:function(e){return function(t){var a;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t(C()),n.prev=1,n.next=4,y.a.awrap(S.a.post("https://conduit.productionready.io/api/users/login",{user:e}));case 4:a=n.sent,t(R()),t(T(a.data)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),t(w(n.t0.response)),t(A());case 13:case"end":return n.stop()}}),null,null,[[1,9]])}}},ne=te.object({email:te.string().email().required("Please Enter your Email"),password:te.string().required("Please Enter your password")}),re=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(W.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.login,a=e.netError,n=e.doLogin;return o.a.createElement(Z.d,{validateOnChange:!0,initialValues:{password:"",email:""},validationSchema:ne,onSubmit:function(e,t){var a=t.setSubmitting;a(!0),n(e),a(!1)}},(function(e){var n=e.errors;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.c,{className:"loginForm"},o.a.createElement(Z.a,{name:"email",type:"input",as:$.a,placeholder:"enter ur email",disabled:"requested"===t,className:n.email||Object.entries(a).length>0?"error":""}),n.email&&o.a.createElement("div",null,n.email),o.a.createElement(Z.a,{name:"password",type:"password",as:$.a,placeholder:"enter ur password",disabled:"requested"===t,className:n.password||Object.entries(a).length>0?"error":""}),n.password&&o.a.createElement("div",null,n.password),Object.entries(a).length>0&&o.a.createElement("div",null,"Email or Password incorrect"),o.a.createElement(ee.a,{type:"primary",htmlType:"submit",disabled:"requested"===t,className:"subBut"},"Submit")))}))}}]),t}(o.a.Component),ce=Object(d.b)((function(e){return{user:e.user,login:e.loginState,netError:e.netError}}),ae)(re),ie={doRegistration:function(e){return function(t){var a;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t(N()),n.prev=1,n.next=4,y.a.awrap(S.a.post(" https://conduit.productionready.io/api/users",{user:e}));case 4:a=n.sent,t(q()),t(T(a.data)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),t(w(n.t0.response)),t(_());case 13:case"end":return n.stop()}}),null,null,[[1,9]])}}},le=te.object({username:te.string().required().max(50),email:te.string().email().required("Please Enter your Email"),password:te.string().required("Please Enter your password")}),oe=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(W.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.doRegistration,a=e.registrationStatus,n=e.netError;return o.a.createElement(Z.d,{validateOnChange:!0,initialValues:{username:"",email:"",password:""},validationSchema:le,onSubmit:function(e,a){var n=a.setSubmitting;n(!0),t(e),n(!1)}},(function(e){var t=e.errors;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.c,{className:"loginForm"},o.a.createElement(Z.a,{name:"username",type:"input",as:$.a,placeholder:"enter ur login",disabled:"requested"===a,className:t.username||n.username?"error":""}),n.username&&o.a.createElement("div",null,n.username),t.username&&o.a.createElement("div",null,t.username),o.a.createElement(Z.a,{name:"email",type:"input",as:$.a,placeholder:"enter ur email",disabled:"requested"===a,className:t.email||n.email?"error":""}),n.email&&o.a.createElement("div",null,n.email),t.email&&o.a.createElement("div",null,t.email),o.a.createElement(Z.a,{name:"password",type:"password",as:$.a,placeholder:"enter ur password",disabled:"requested"===a,className:t.password||n.password?"error":""}),n.password&&n.password.map((function(e){return o.a.createElement("div",null,e)})),t.password&&o.a.createElement("div",null,t.password),o.a.createElement(ee.a,{type:"primary",htmlType:"submit",disabled:"requested"===a,className:"subBut"},"Submit")))}))}}]),t}(o.a.Component),se=Object(d.b)((function(e){return{user:e.user,registrationStatus:e.registrationState,netError:e.netError}}),ie)(oe),ue=a(443),de=a(64),me=a(65),pe=a(444);function be(){var e=Object(de.a)(["\n  width: 100%;\n"]);return be=function(){return e},e}function he(){var e=Object(de.a)(["\n  width: 20px;\n  height: 35px;\n"]);return he=function(){return e},e}function Ee(){var e=Object(de.a)([""]);return Ee=function(){return e},e}function ge(){var e=Object(de.a)([""]);return ge=function(){return e},e}function fe(){var e=Object(de.a)([""]);return fe=function(){return e},e}function ve(){var e=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  background-color: #e5e5e5;\n  margin-top: 50px;\n  width: 500px;\n  cursor: pointer;\n"]);return ve=function(){return e},e}var Oe=me.a.div(ve()),ye=(me.a.div(fe()),me.a.div(ge()),me.a.div(Ee()),me.a.img(he()),Object(me.a)(pe.a)(be())),je=a(445),ke=a(17),Se={handleLike:P},xe=function(e){function t(){var e,a;Object(K.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(W.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e,t,n){return function(r){r.stopPropagation(),(0,a.props.handleLike)(e,t,n)}},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.article,a=t.title,n=t.author,r=t.createdAt,c=t.favorited,i=t.favoritesCount,l=t.tagList,s=t.slug,u=t.body,d=e.token,m=Object(je.a)(new Date(r),{includeSeconds:!0,addSuffix:!0});return o.a.createElement(ye,{size:"small",title:a,extra:o.a.createElement("span",null,"created ",m)},o.a.createElement("div",{className:"ArticleMainSection"},o.a.createElement("p",null,"author: ",n.username),o.a.createElement("p",null,u)),o.a.createElement("div",{className:"ArticleLikeSection",onClick:this.handleClick(s,d,c)},c?o.a.createElement("label",{htmlFor:"imgTest"}," ",o.a.createElement(ke.a,{type:"heart",theme:"filled"}),i):o.a.createElement("label",{htmlFor:"imgTest2"}," ",o.a.createElement(ke.a,{type:"heart"}),i)),o.a.createElement("div",{className:"ArticleTagsSection"},l.map((function(e){return o.a.createElement("span",{key:Object(f.uniqueId)()}," #",e)}))))}}]),t}(o.a.Component),Te=Object(d.b)((function(){return{}}),Se)(xe),we={logOut:x,getArticles:function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return function(e){var t,r,c,i,l;return y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e(1===n?L():L(n)),10,t=1===n?"":"offset=".concat(10*(n-1)),r="?limit=".concat(10,"&").concat(t),c="https://conduit.productionready.io/api/articles".concat(r),i={headers:{Authorization:"Token ".concat(a)}},o.prev=6,o.next=9,y.a.awrap(S.a.get(c,i));case 9:l=o.sent,e(I(l)),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(6),console.log(o.t0);case 16:case"end":return o.stop()}}),null,null,[[6,13]])}}},Le=function(e){function t(){var e,a;Object(K.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(W.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){(0,a.props.logOut)()},a.hanglePrevClick=function(){var e=a.props,t=e.user.token,n=e.page,r=e.getArticles;1!==n&&r([t,n-1])},a.hangleNextClick=function(){var e=a.props,t=e.user.token,n=e.page;(0,e.getArticles)([t,n+1])},a.handleClick=function(e){var t=a.props.history,n="/articles/".concat(e.slug);t.push({pathname:n,state:e})},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.user.token,a=e.page;(0,e.getArticles)([t,a])}},{key:"render",value:function(){var e=this,t=this.props,a=t.articles,n=t.user,r=t.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mainPage"},o.a.createElement("div",null,o.a.createElement(ee.a,{type:"primary",onClick:this.hanglePrevClick},"Prev"),o.a.createElement("span",null,r),o.a.createElement(ee.a,{type:"primary",onClick:this.hangleNextClick},"Next")),!a.length>0&&o.a.createElement(ue.a,null),a.map((function(t){return o.a.createElement(Oe,{key:Object(f.uniqueId)(),onClick:function(){e.handleClick(t)}},o.a.createElement(Te,{article:t,token:n.token}))})),o.a.createElement(ee.a,{type:"primary",onClick:this.handleLogOut,className:"logOut"},"LogOut")))}}]),t}(o.a.Component);Le.defaultProps={page:1};var Ce=Object(Q.f)(Object(d.b)((function(e){return{user:e.user,articles:e.articles,page:e.page}}),we)(Le)),Re=te.object().shape({title:te.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),description:te.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),body:te.string().required("Required")}),Ae={handleLike:P},Ne=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(W.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user.token;return o.a.createElement(Z.d,{validateOnChange:!0,initialValues:{title:"",description:"",body:"",tagList:[]},validationSchema:Re,onSubmit:function(a,n){var r=n.setSubmitting;r(!0);!function(){var n,r,c,i,l,o;y.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(f.compact)(a.tagList),r=Object(h.a)({},a,{tagList:n}),c=e.props.history,i={headers:{Authorization:"Token ".concat(t)}},s.prev=4,s.next=7,y.a.awrap(S.a.post("https://conduit.productionready.io/api/articles",{article:r},i));case 7:l=s.sent,o="/articles/".concat(l.data.article.slug),c.push({pathname:o,state:l.data.article}),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(4),console.log(s.t0);case 15:case"end":return s.stop()}}),null,null,[[4,12]])}(),r(!1)}},(function(e){var t=e.values,a=e.errors,n=e.isSubmitting,r=e.touched;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.c,{className:"loginForm"},o.a.createElement(Z.a,{name:"title",type:"input",as:$.a,placeholder:"enter article's title"}),a.title&&r.title?o.a.createElement("div",null,a.title):null,o.a.createElement(Z.a,{name:"description",type:"input",as:$.a,placeholder:"enter article's description"}),a.description&&r.description?o.a.createElement("div",null,a.description):null,o.a.createElement(Z.a,{name:"body",type:"input",as:$.a,placeholder:"enter article's body"}),a.body&&r.body?o.a.createElement("div",null,a.body):null,o.a.createElement(Z.b,{name:"tagList"},(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{name:"tagList[0]",type:"input",as:$.a,placeholder:"enter hashTag",key:0}),t.tagList.slice(1).map((function(e,a){return o.a.createElement(Z.a,{name:"tagList[".concat(a+1,"]"),type:"input",as:$.a,placeholder:"enter hashTag",key:"".concat(t.tagList.length).concat(e)})})),o.a.createElement(ee.a,{type:"primary",htmlType:"button",disabled:n,onClick:function(){return t.tagList[0]&&e.push()}},"add another hashTag"))})),o.a.createElement(ee.a,{type:"primary",htmlType:"submit",disabled:n},"sub")))}))}}]),t}(o.a.Component),qe=Object(Q.f)(Object(d.b)((function(e){return{user:e.user,articles:e.articles}}),Ae)(Ne)),_e={handleLike:P},Ie=function(e){function t(){var e,a;Object(K.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(W.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e,t,n){return function(r){var c,i,l,o,s,u,d;return y.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return r.stopPropagation(),c=a.props,i=c.handleLike,l=c.history,o=c.location.state,s=c.articles,m.next=4,y.a.awrap(i(e,t,n));case 4:u="/articles/".concat(o.slug),d=Object(f.findIndex)(s,(function(t){return t.slug===e})),l.replace({pathname:u,state:s[d]});case 7:case"end":return m.stop()}}))}},a.handleEditClick=function(){var e=a.props,t=e.location.state,n=e.history,r="/articles/".concat(t.slug,"/edit");n.push({pathname:r,state:t})},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location.state,a=e.user,n=a.token,r=a.username,c=t.author.username,i=Object(je.a)(new Date(t.createdAt),{includeSeconds:!0,addSuffix:!0});return o.a.createElement(ye,{size:"small",title:t.title,extra:o.a.createElement("span",null,"created ",i)},o.a.createElement("div",{className:"ArticleMainSection"},o.a.createElement("p",null,"author:",t.author.username),o.a.createElement("p",null,t.body)),o.a.createElement("div",{className:"ArticleLikeSection",onClick:this.handleClick(t.slug,n,t.favorited)},t.favorited?o.a.createElement("label",{htmlFor:"imgLike"}," ",o.a.createElement(ke.a,{type:"heart",theme:"filled"}),t.favoritesCount):o.a.createElement("label",{htmlFor:"imgLike2"}," ",o.a.createElement(ke.a,{type:"heart"}),t.favoritesCount)),o.a.createElement("div",{className:"ArticleTagsSection"},t.tagList.map((function(e){return o.a.createElement("span",{key:Object(f.uniqueId)()}," #",e," ")}))),r===c&&o.a.createElement(ee.a,{onClick:this.handleEditClick},"edit"))}}]),t}(o.a.Component),Fe=Object(Q.f)(Object(d.b)((function(e){return{user:e.user,articles:e.articles}}),_e)(Ie)),Pe=te.object().shape({title:te.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),description:te.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),body:te.string().required("Required")}),Ge={handleLike:P},Ue=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(W.a)(this,Object(X.a)(t).call(this,e))).state={},a}return Object(Y.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user.token,a=e.location.state,n=e.history;return o.a.createElement(Z.d,{validateOnChange:!0,initialValues:{title:a.title,description:a.description,body:a.body,tagList:a.tagList},validationSchema:Pe,onSubmit:function(e,r){var c=r.setSubmitting;c(!0);!function(){var r,c,i,l;y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r={headers:{Authorization:"Token ".concat(t)}},o.prev=1,c=e,o.next=5,y.a.awrap(S.a.put("https://conduit.productionready.io/api/articles/".concat(a.slug),{article:c},r));case 5:i=o.sent,l="/articles/".concat(i.data.article.slug),n.push({pathname:l,state:i.data.article}),o.next=14;break;case 10:throw o.prev=10,o.t0=o.catch(1),console.log(o.t0),o.t0;case 14:case"end":return o.stop()}}),null,null,[[1,10]])}(),c(!1)}},(function(e){var t=e.values,a=e.errors,n=e.isSubmitting,r=e.touched;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.c,null,o.a.createElement("div",null,"title"),o.a.createElement(Z.a,{name:"title",type:"input",as:$.a,placeholder:"enter article's title"}),a.title&&r.title?o.a.createElement("div",null,a.title):null,o.a.createElement("div",null,"description"),o.a.createElement(Z.a,{name:"description",type:"input",as:$.a,placeholder:"enter article's description"}),a.description&&r.description?o.a.createElement("div",null,a.description):null,o.a.createElement("div",null,"body"),o.a.createElement(Z.a,{name:"body",type:"input",as:$.a,placeholder:"enter article's body"}),a.body&&r.body?o.a.createElement("div",null,a.body):null,o.a.createElement(Z.b,{name:"tagList"},(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"tag"),o.a.createElement(Z.a,{name:"tagList[0]",type:"input",as:$.a,placeholder:"enter hashTag",key:0}),t.tagList.slice(1).map((function(e,a){return o.a.createElement("div",{key:Object(f.uniqueId)()},o.a.createElement("div",null,"tag"),o.a.createElement(Z.a,{name:"tagList[".concat(a+1,"]"),type:"input",as:$.a,placeholder:"enter hashTag",key:"".concat(t.tagList.length).concat(e)}))})),o.a.createElement(ee.a,{type:"primary",htmlType:"button",disabled:n,onClick:function(){return t.tagList[0]&&e.push()}},"add another hashTag"))})),o.a.createElement(ee.a,{type:"primary",htmlType:"submit",disabled:n},"save changes")))}))}}]),t}(o.a.Component),Me=Object(Q.f)(Object(d.b)((function(e){return{user:e.user,articles:e.articles}}),Ge)(Ue));var Ve=function(){return o.a.createElement("ul",{className:"nav"},o.a.createElement("li",null,o.a.createElement(J.b,{to:"/login"},"Login")),o.a.createElement("li",null,o.a.createElement(J.b,{to:"/registration"},"Registration")),o.a.createElement("li",null,o.a.createElement(J.b,{to:"/"},"MainPage")),o.a.createElement("li",null,o.a.createElement(J.b,{to:"/add"},"Add Post")))};a(440);var ze=Object(d.b)((function(e){return{user:e.user}}))((function(e){var t=e.user;return o.a.createElement(J.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(Ve,null),o.a.createElement(Q.b,{exact:!0,path:"/login"},Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/"}):o.a.createElement(ce,null)),o.a.createElement(Q.b,{exact:!0,path:"/registration"},Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/"}):o.a.createElement(se,null)),o.a.createElement(Q.b,{exact:!0,path:"/"},!Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/login"}):o.a.createElement(Ce,null)),o.a.createElement(Q.b,{exact:!0,path:"/add"},!Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/login"}):o.a.createElement(qe,null)),o.a.createElement(Q.b,{exact:!0,path:"/articles/:id"},!Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/login"}):o.a.createElement(Fe,null)),o.a.createElement(Q.b,{exact:!0,path:"/articles/:id/edit"},!Object.keys(t).length>0?o.a.createElement(Q.a,{to:"/login"}):o.a.createElement(Me,null))))})),De=Object(m.e)(B,Object(m.d)(Object(m.a)(p.a)));u.a.render(o.a.createElement(d.a,{store:De},o.a.createElement(ze,null)),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.b2023936.chunk.js.map