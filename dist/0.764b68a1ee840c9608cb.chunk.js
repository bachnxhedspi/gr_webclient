webpackJsonp([0],{708:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(723);e.d(t,"DetailModule",(function(){return o.a}))},714:function(n,t,e){"use strict";var o=e(32),a=e(0);e.d(t,"a",(function(){return r})),console.log("`Detail` component loaded asynchronously");var r=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Detail` component")},n})();r=o.a([e.i(a._2)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],r)},723:function(n,t,e){"use strict";var o=e(32),a=e(115),r=e(416),i=e(0),l=e(255),u=e(724),c=e(714);e.d(t,"a",(function(){return d})),console.log("`Detail` bundle loaded asynchronously");var d=(function(){function n(){}return n})();d.routes=u.a,d=o.a([e.i(i.i)({declarations:[c.a],imports:[a.b,r.a,l.a.forChild(u.a)]})],d)},724:function(n,t,e){"use strict";var o=e(714);e.d(t,"a",(function(){return a}));var a=[{path:"",children:[{path:"",component:o.a},{path:"child-detail",loadChildren:function(){return e.e(5).then(e.bind(null,722)).then((function(n){return n.ChildDetailModule}))}}]}]}});