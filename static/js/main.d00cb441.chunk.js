(this["webpackJsonpqoala-test"]=this["webpackJsonpqoala-test"]||[]).push([[0],{35:function(e,t,a){e.exports=a(45)},41:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(40),a(41),a(10)),i=a(34),m=a(21),u=a(50),d=a(52),s=a(53),E=function(){return l.a.createElement("div",null,l.a.createElement(d.a,{bg:"light",expand:"lg",id:"navbar"},l.a.createElement(d.a.Brand,{href:"#"},"Roby Afrizal Palmendha"),l.a.createElement(s.a,{className:"mr-auto text-center"},l.a.createElement(s.a.Link,{href:"/"},"Task List"))))},f=a(51),p=a(48),b=a(55),g=function(e){var t=e.addTodo,a=Object(n.useState)({id:"",task:"",completed:!1}),r=Object(m.a)(a,2),o=r[0],i=r[1];return l.a.createElement("div",null,l.a.createElement(f.a,{onSubmit:function(e){e.preventDefault(),o.task.trim()&&(t(Object(c.a)({},o,{id:Object(b.a)()})),i(Object(c.a)({},o,{task:""})))},style:{display:"inline-block"}},l.a.createElement(f.a.Group,{controlId:"formBasicEmail"},l.a.createElement(f.a.Label,null,l.a.createElement("h1",null,"Create Task List")),l.a.createElement(f.a.Control,{type:"text",placeholder:"Enter task",onChange:function(e){i(Object(c.a)({},o,{task:e.target.value}))},value:o.task,style:{width:"30rem"}})),l.a.createElement(p.a,{variant:"info",type:"submit"},"Add Task")))},v=a(54),k=a(49),h=a(33),y=function(e){var t=e.todo,a=e.toggleComplete,n=e.removeTodo;return l.a.createElement(f.a,{className:"todolistCheck",style:{display:"inline-block"}},l.a.createElement(v.a,{style:{width:"35rem",marginBottom:"1em"}},l.a.createElement(k.a,null,l.a.createElement(h.a,null,l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,{style:{textDecoration:t.completed?"line-through":null}},t.task),l.a.createElement(v.a.Text,{className:"mb-2 text-muted"},l.a.createElement(f.a.Check,{type:"checkbox",onClick:function(){a(t.id)},label:"Check for completed"})))),l.a.createElement(h.a,{style:{padding:"2em"}},l.a.createElement(p.a,{variant:"warning",onClick:function(){n(t.id)}},"Delete")))))},O=function(e){var t=e.todos,a=e.toggleComplete,n=e.removeTodo;return l.a.createElement("div",null,l.a.createElement("div",null,t.map((function(e){return l.a.createElement(y,{key:e.id,todo:e,toggleComplete:a,removeTodo:n})}))))},j=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]);return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(u.a,{className:"container"},l.a.createElement(g,{addTodo:function(e){var t=(new Date).getTime();console.log(t),r([e].concat(Object(i.a)(a)))}}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(O,{todos:a,toggleComplete:function(e){r(a.map((function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):t})))},removeTodo:function(e){r(a.filter((function(t){return t.id!==e})))}})))};var C=function(){return l.a.createElement("div",null,l.a.createElement(j,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d00cb441.chunk.js.map