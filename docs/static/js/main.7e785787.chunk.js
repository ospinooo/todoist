(this.webpackJsonptodoist=this.webpackJsonptodoist||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(19),n=c(3),d=c(6),r=c(9),i=c.n(r),o=c(20);c(32);c(26).config();var j=o.a.initializeApp({apiKey:"AIzaSyCIhmVqIlMcTMjp02vaukUjjNI8rHi1nQc",authDomain:"todoist-6a2bb.firebaseapp.com",databaseURL:"https://todoist-6a2bb.firebaseio.com",projectId:"todoist-6a2bb",storageBucket:"todoist-6a2bb.appspot.com",messagingSenderId:"425295847230",appId:"1:425295847230:web:968959d1c2b01c77b6966f"}),l=c(15),b=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 days"}],u=function(e){return b.find((function(t){return t.key===e}))},O=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var c=(new Date).getTime(),a=new Array(8),s=7;s>=0;s--)a[s]=e.charAt(c%64),c=Math.floor(c/64);var n=a.join("");for(s=0;s<12;s++)n+=e.charAt(t[s]);return n}}(),h=c(1),x=Object(a.createContext)(),p=function(e){var t=e.children,c=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){j.firestore().collection("projects").where("userId","==","asdfsadkjfnaskjdfbagl").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{docId:e.id})}));JSON.stringify(t)!==JSON.stringify(c)&&s(t)}))}),[c]),{projects:c,setProjects:s}}(),s=c.projects,d=c.setProjects;return Object(h.jsx)(x.Provider,{value:{projects:s,setProjects:d},children:t})},f=function(){return Object(a.useContext)(x)},k=Object(a.createContext)(),m=function(e){var t=e.children,c=Object(a.useState)("INBOX"),s=Object(n.a)(c,2),d=s[0],r=s[1];return Object(h.jsx)(k.Provider,{value:{selectedProject:d,setSelectedProject:r},children:t})},v=function(){return Object(a.useContext)(k)},_=function(e){var t=e.setProject,c=e.showProjectOverlay,a=e.setShowProjectOverlay,s=f().projects;return s&&c&&Object(h.jsx)("div",{className:"project-overlay","data-testid":"project-overlay",children:Object(h.jsx)("ul",{className:"project-overlay__list",children:s.map((function(e){return Object(h.jsx)("li",{"data-testid":"project-overlay__list",onClick:function(){t(e.projectId),a(!1)},children:e.name},e.projectId)}))})})},N=function(e){var t=e.setTaskDate,c=e.showTaskDate,a=e.setShowTaskDate;return c&&Object(h.jsx)("div",{className:"task-date","data-testid":"task-date-overlay",children:Object(h.jsxs)("ul",{className:"task-date__list",children:[Object(h.jsxs)("li",{onClick:function(){a(!1),t(i()().format("DD/MM/YYYY"))},"data-testid":"task-date-overlay",children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.h,{})}),Object(h.jsx)("span",{children:"Today"})]}),Object(h.jsxs)("li",{onClick:function(){a(!1),t(i()().add(1,"day").format("DD/MM/YYYY"))},"data-testid":"task-date-tomorrow",children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.i,{})}),Object(h.jsx)("span",{children:"Tomorrow"})]}),Object(h.jsxs)("li",{onClick:function(){a(!1),t(i()().add(7,"day").format("DD/MM/YYYY"))},"data-testid":"task-date-tomorrow",children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.g,{})}),Object(h.jsx)("span",{children:"Next week"})]})]})})},y=function(e){var t=e.showAddTaskMain,c=void 0===t||t,s=e.showShouldMain,r=void 0!==s&&s,o=e.showQuickAddTask,l=e.setShowQuickAddTask,b=Object(a.useState)(""),u=Object(n.a)(b,2),O=u[0],x=u[1],p=Object(a.useState)(""),f=Object(n.a)(p,2),k=f[0],m=f[1],y=Object(a.useState)(""),w=Object(n.a)(y,2),S=w[0],I=w[1],C=Object(a.useState)(r),T=Object(n.a)(C,2),Y=T[0],D=T[1],g=Object(a.useState)(!1),M=Object(n.a)(g,2),P=M[0],A=M[1],X=Object(a.useState)(!1),B=Object(n.a)(X,2),E=B[0],Q=B[1],q=v().selectedProject,J=function(){var e=S||q,t="";return"TODAY"===e?t=i()().format("DD/MM/YYYY"):"NEXT_7"===e&&(t=i()().add(7,"days").format("DD/MM/YYYY")),O&&e&&j.firestore().collection("tasks").add({archived:!1,projectId:e,task:O,date:t||k,userId:"asdfsadkjfnaskjdfbagl"}).then((function(){x(""),I(""),D(""),A(!1)}))};return console.log(Y||o),Object(h.jsxs)("div",{className:o?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp",children:[c&&Object(h.jsxs)("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return D(!Y)},children:[Object(h.jsx)("span",{className:"add-task__plus",children:"+"}),Object(h.jsx)("span",{className:"add-task__text",children:"Add Task"})]}),(Y||o)&&Object(h.jsxs)("div",{className:"add-task__main","data-testid":"add-task-main",children:[o&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{"data-testid":"quick-add-task",children:[Object(h.jsx)("h2",{className:"header",children:"Quick Add Task"}),Object(h.jsx)("span",{className:"add-task__cancel-x","data-testid":"add-task-quick-cancel",onClick:function(){D(!1),A(!1),l(!1)},children:"X"})]})}),Object(h.jsx)(_,{setProject:I,showProjectOverlay:P,setShowProjectOverlay:A}),Object(h.jsx)(N,{setTaskDate:m,showTaskDate:E,setShowTaskDate:Q}),Object(h.jsx)("input",{className:"add-task__content","data-testid":"add-task-content",type:"text",value:O,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:function(){return o?J()&&l(!1):J()},children:"AddTask"}),!o&&Object(h.jsx)("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){D(!1),A(!1)},children:"Cancel"}),Object(h.jsx)("span",{className:"add-task__project","data-test-id":"show-project-overlay",onClick:function(){return A(!P)},children:Object(h.jsx)(d.f,{})}),Object(h.jsx)("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){return Q(!E)},children:Object(h.jsx)(d.e,{})})]})]})},w=function(e){var t=e.darkMode,c=e.setDarkMode,s=Object(a.useState)(!1),r=Object(n.a)(s,2),i=r[0],o=r[1],j=Object(a.useState)(!1),l=Object(n.a)(j,2),b=l[0],u=l[1];return Object(h.jsxs)("header",{className:"header","data-testid":"header",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:"/images/logo.png",alt:"Todoist"})}),Object(h.jsx)("div",{className:"settings",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{"data-testid":"quick-add-task-action",className:"settings__add",onClick:function(){u(!0),o(!0)},children:"+"}),Object(h.jsx)("li",{"data-testid":"dark-mode-action",onClick:function(){return c(!t)},children:Object(h.jsx)(d.c,{})})]})})]}),Object(h.jsx)(y,{showAddTaskMain:!1,shouldShowMain:i,showQuickAddTask:b,setShowQuickAddTask:u})]})},S=c(14),I=function(e){var t=e.project,c=Object(a.useState)(!1),s=Object(n.a)(c,2),r=s[0],i=s[1],o=f(),l=o.projects,b=o.setProjects,u=v().setSelectedProject;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"sidebar__dot",children:"\u2022"}),Object(h.jsx)("span",{className:"sidebar__project-name",children:t.name}),Object(h.jsxs)("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){i(!r)},children:[Object(h.jsx)(d.j,{}),r&&Object(h.jsx)("div",{className:"project-delete-modal",children:Object(h.jsxs)("div",{className:"project-delete-modal__inner",children:[Object(h.jsx)("p",{children:"Are you sure you wawnt to delete this project?"}),Object(h.jsx)("button",{type:"button",onClick:function(){return e=t.docId,void j.firestore().collection("projects").doc(e).delete().then((function(){b(Object(S.a)(l)),u("INBOX")}));var e},children:"Delete"}),Object(h.jsx)("span",{onClick:function(){return i(!r)},children:"Cancel"})]})})]})]})},C=function(e){var t=e.activeValue,c=void 0===t?null:t,s=Object(a.useState)(c),d=Object(n.a)(s,2),r=d[0],i=d[1],o=v().setSelectedProject,j=f().projects;return j&&j.map((function(e){return Object(h.jsx)("li",{"data-doc-id":e.docId,"data-testid":"project-action",className:r===e.projectId?"active sidebar__project":"sidebar__project",onKeyDown:function(){i(e.projectId),o(e.projectId)},onClick:function(){i(e.projectId),o(e.projectId)},children:Object(h.jsx)(I,{project:e})},e.docId)}))},T=function(e){var t=e.shouldShow,c=void 0!==t&&t,s=Object(a.useState)(c),d=Object(n.a)(s,2),r=d[0],i=d[1],o=Object(a.useState)(""),l=Object(n.a)(o,2),b=l[0],u=l[1],x=O(),p=f(),k=p.projects,m=p.setProjects;return Object(h.jsxs)("div",{className:"add-project","data-testid":"add-project",children:[r&&Object(h.jsxs)("div",{className:"add-project__input",children:[Object(h.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},className:"add-project__name","data-testid":"project-name",type:"text",placeholder:"Name your project"}),Object(h.jsx)("button",{className:"add-project__submit",type:"button",onClick:function(){return b&&j.firestore().collection("projects").add({projectId:x,name:b,userId:"asdfsadkjfnaskjdfbagl"}).then((function(){m(Object(S.a)(k)),u(""),i(!1)}))},"data-testid":"add-project-submit",children:"Add Project"}),Object(h.jsx)("span",{"data-testid":"hide-project-overlay",className:"add-project__cancel",onClick:function(){return i(!1)},children:"Cancel"})]}),Object(h.jsx)("span",{className:"add-project__plus",children:"+"}),Object(h.jsx)("span",{"data-testid":"add-project-action",className:"add-project__text",onClick:function(){return i(!r)},children:"Add Project"})]})},Y=function(){var e=v().setSelectedProject,t=Object(a.useState)("inbox"),c=Object(n.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)(!0),o=Object(n.a)(i,2),j=o[0],l=o[1];return Object(h.jsxs)("div",{className:"sidebar","data-testid":"sidebar",children:[Object(h.jsxs)("ul",{className:"sidebar__generic",children:[Object(h.jsxs)("li",{"data-testid":"inbox",className:"inbox"===s?"active":void 0,onClick:function(){r("inbox"),e("INBOX")},children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.b,{})}),Object(h.jsx)("span",{children:"Inbox"})]}),Object(h.jsxs)("li",{"data-testid":"today",className:"today"===s?"active":void 0,onClick:function(){r("today"),e("TODAY")},children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.d,{})}),Object(h.jsx)("span",{children:"Today"})]}),Object(h.jsxs)("li",{"data-testid":"next_7",className:"next_7"===s?"active":void 0,onClick:function(){r("next_7"),e("NEXT_7")},children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.e,{})}),Object(h.jsx)("span",{children:"Next 7 day"})]})]}),Object(h.jsxs)("div",{className:"sidebar__middle",onClick:function(){return l(!j)},children:[Object(h.jsx)("span",{children:Object(h.jsx)(d.a,{className:j?void 0:"hidden-projects"})}),Object(h.jsx)("h2",{children:"Projects"})]}),Object(h.jsx)("ul",{className:"sidebar__projects",children:j&&Object(h.jsx)(C,{})}),j&&Object(h.jsx)(T,{})]})},D=function(e){var t=e.id;return Object(h.jsx)("div",{className:"checkbox-holder","data-testid":"checkbox-action",onClick:function(){return function(e){j.firestore().collection("tasks").doc(e).update({archived:!0})}(t)},children:Object(h.jsx)("span",{className:"checkbox"})})},g=function(){var e=v().selectedProject,t=f().projects,c=function(e){var t=Object(a.useState)([]),c=Object(n.a)(t,2),s=c[0],d=c[1],r=Object(a.useState)([]),o=Object(n.a)(r,2),b=o[0],O=o[1];return Object(a.useEffect)((function(){var t=j.firestore().collection("tasks").where("userId","==","asdfsadkjfnaskjdfbagl");return t=(t=e&&!u(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",i()().format("DD/MM/YYYY")):"INBOX"===e||0===e?t=t.where("date","==",""):t).onSnapshot((function(t){var c=t.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));d("NEXT_7"===e?c.filter((function(e){return i()(e.date,"DD-MM-YYYY").diff(i()(),"days")<=7&&!0!==e.archived})):c.filter((function(e){return!0!==e.archived}))),O(c.filter((function(e){return!1!==e.archived})))})),function(){return t()}}),[e]),{tasks:s,archivedTasks:b}}(e).tasks,s="";return t&&t.length>0&&e&&!u(e)&&(s=function(e,t){return e.find((function(e){return e.projectId===t}))}(t,e).name),u(e)&&e&&(s=function(e,t){return e.find((function(e){return e.key===t}))}(b,e).name),Object(a.useEffect)((function(){document.title="".concat(s,": Todoist")}),[]),Object(h.jsxs)("div",{className:"tasks","data-testid":"tasks",children:[Object(h.jsx)("h2",{"data-testid":"project-name",children:s}),Object(h.jsx)("ul",{className:"tasks__list",children:c.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)(D,{id:e.id}),Object(h.jsx)("span",{children:e.task})]},"".concat(e.id))}))}),Object(h.jsx)(y,{})]})},M=function(){return Object(h.jsxs)("section",{className:"content",children:[Object(h.jsx)(Y,{}),Object(h.jsx)(g,{})]})},P=(c(30),function(e){var t=e.darkModeDefault,c=void 0!==t&&t,s=Object(a.useState)(c),d=Object(n.a)(s,2),r=d[0],i=d[1];return Object(h.jsx)(m,{children:Object(h.jsx)(p,{children:Object(h.jsxs)("main",{"data-testid":"application",className:r?"darkmode":void 0,children:[Object(h.jsx)(w,{darkMode:r,setDarkMode:i}),Object(h.jsx)(M,{})]})})})});Object(s.render)(Object(h.jsx)(P,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7e785787.chunk.js.map