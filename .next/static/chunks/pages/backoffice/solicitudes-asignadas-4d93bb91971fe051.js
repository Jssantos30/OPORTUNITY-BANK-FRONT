(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{1226:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/backoffice/solicitudes-asignadas",function(){return n(2421)}])},2421:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return N},default:function(){return _}});var r=n(5893),c=n(7294),s=n(4051),a=n.n(s),i=n(9666),o=(n(1664),n(843)),l=n(1163);function d(e,t,n,r,c,s,a){try{var i=e[s](a),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(r,c)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var x=function(e){var t=e.ctxDataUsuarios,n=e.notification,c=(0,l.useRouter)(),s=function(){var e,t=(e=a().mark((function e(t){var n,r,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat("https://www.medellin.gov.co/bancopobres/solicitudescreditosms/","credito/solicitud"),r={seccion:"ASE",solicitud_id:t.id,data:h({},t.asesor,{revisado:!0})},e.next=5,(0,o.r)(n,r);case 5:s=e.sent,i=s.responseComplete,s.res,i&&c.push("/backoffice/".concat(t.deudor.persona.num_identificacion,"?sid=").concat(t.id)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){d(s,r,c,a,i,"next",e)}function i(e){d(s,r,c,a,i,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)("tbody",{className:"last:border-b-1 text-sm",children:(0,r.jsxs)("tr",{className:"border-b-0 font-section",children:[(0,r.jsx)("td",{className:"text-center p-4",children:"Admin ".concat((0,i.x)(t,n))}),(0,r.jsx)("td",{className:"text-center p-4",children:n.id}),(0,r.jsx)("td",{className:"text-center p-4",children:"".concat(n.deudor.persona.primer_nombre)}),(0,r.jsx)("td",{className:"text-center p-4",children:"".concat(n.deudor.persona.primer_apellido)}),(0,r.jsx)("td",{className:"text-center p-4",children:n.deudor.persona.num_identificacion}),(0,r.jsx)("td",{className:"text-center p-4",children:m(n.asesor.fecha_asignacion)}),(0,r.jsxs)("td",{className:"text-center p-4",children:[(0,r.jsxs)("a",{className:"btn-texto",onClick:function(){return s(n)},children:[" ","Ver"," "]})," "]})]})})},m=function(e){return new Date(e).toLocaleDateString("es",f)},f={month:"short",day:"numeric",year:"numeric"};var p=function(e){var t=e.children;return(0,r.jsx)("div",{className:"table-responsive",children:(0,r.jsxs)("table",{className:"mx-auto bg-white rounded-lg w-full",children:[(0,r.jsx)("thead",{className:"border-b font-bold text-xs",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"p-4 text-center",children:"Asign\xf3 solicitud"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"Solicitud"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"Nombre"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"Apellidos"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"C.C"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"Fecha"}),(0,r.jsx)("th",{className:"p-4 text-center",children:"Acciones"})]})}),t]})})},j=n(1319),b=n(779),v=n(7024);var N=!0,_=function(e){var t=e.usuarios,n=(0,v.n)().getDatabyAsesor;return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(j.Z,{children:"Solicitudes asignadas"}),(0,r.jsxs)("div",{className:"card-custom",children:[(0,r.jsx)("div",{className:"header-card-custom",children:"Lista de solicitudes"}),(0,r.jsx)("div",{className:"body-card-custom",children:n.length>0?(0,r.jsx)("div",{className:"",children:(0,r.jsx)(p,{children:n.map((function(e,n){return(0,r.jsx)(c.Fragment,{children:(0,r.jsx)(x,{notification:e,ctxDataUsuarios:t||[]})},n)})).reverse()})}):(0,r.jsxs)("div",{className:"mensaje-error",children:[" ","No hay notificaciones para mostrar. Intenta m\xe1s tarde"," "]})})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=1226,e(e.s=t);var t}));var t=e.O();_N_E=t}]);