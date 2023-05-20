"use strict";(self.webpackChunkdiscount_today=self.webpackChunkdiscount_today||[]).push([[603],{5044:(e,s,t)=>{t.d(s,{D:()=>o});var o=["512 512","<rect width='32' height='176' x='240' y='176' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='384' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z' class='ci-primary'/>"]},6566:(e,s,t)=>{t.d(s,{Z:()=>n});var o=t(7537),r=t.n(o),a=t(3645),i=t.n(a)()(r());i.push([e.id,".error-toast{position:fixed;top:10rem;left:50%;transform:translateX(-50%)}","",{version:3,sources:["webpack://./src/layout/DefaultLayout.scss"],names:[],mappings:"AAAA,aACE,cAAA,CACA,SAAA,CACA,QAAA,CACA,0BAAA",sourcesContent:[".error-toast {\n  position: fixed;\n  top: 10rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n"],sourceRoot:""}]);const n=i},5925:(e,s,t)=>{t.d(s,{Qd:()=>r,TB:()=>o,iJ:()=>a});const o={cities:["Összes"],offers:[],storeTypes:[{name:"Összes",name_plural:"-",id:"all"}],storeGroups:[{name:"Összes",id:"all"}]},r={city:o.cities[0],storeType:o.storeTypes[0],storeGroup:o.storeGroups[0]},a={city:"all",storeGroup:"all",storeType:"all"}},9211:(e,s,t)=>{t.d(s,{C:()=>f,Z:()=>p});var o=t(5893),r=t(7294),a=t(1893),i=t(5122),n=t(5925),l=function(e,s,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function n(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var s;e.done?r(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(i,n)}l((o=o.apply(e,s||[])).next())}))};const c=(0,r.createContext)({baseData:n.TB,error:null,fetchOffers:()=>{},getAllBaseData:()=>{},getTopFiveAction:()=>{},isLoadingBaseData:!1,searchCondition:n.Qd,setSearchCondition:()=>{}}),d=e=>l(void 0,void 0,void 0,(function*(){return(yield a.y.get(e,{})).data})),u=e=>l(void 0,void 0,void 0,(function*(){const s={city:"Összes"===e.city?"all":e.city,store_group:e.storeGroup,store_type:e.storeType};return(yield a.y.post(i.Z.offers,JSON.stringify(s),{headers:{"Content-Type":"application/json"}})).data})),p=({children:e,error:s,setError:t,setErrorToastVisible:p})=>{const[f,h]=(0,r.useState)(!1),[y,b]=(0,r.useState)(n.TB),[g,m]=(0,r.useState)(n.Qd);return(0,r.useEffect)((()=>{s&&p(!0)}),[s]),(0,o.jsx)(c.Provider,Object.assign({value:{baseData:y,error:s,fetchOffers:e=>l(void 0,void 0,void 0,(function*(){t(null),h(!0);try{const s=yield u(e);h(!1),b((e=>Object.assign(Object.assign({},e),{offers:s})))}catch(e){console.error(e),h(!1),t(e)}})),getAllBaseData:()=>{t(null),h(!0),Promise.all([d(i.Z.storeTypes),d(i.Z.storeGroups),d(i.Z.cities),u(n.iJ)]).then((e=>{console.info("responseData: ",e),h(!1),b({storeTypes:[...n.TB.storeTypes,...e[0]],storeGroups:[...n.TB.storeGroups,...e[1]],cities:[...n.TB.cities,...e[2]],offers:e[3]})})).catch((e=>{console.error(e),h(!1),t(e)}))},getTopFiveAction:()=>l(void 0,void 0,void 0,(function*(){t(null),h(!0);try{const e=(yield a.y.get(i.Z.top5,{})).data;b((s=>Object.assign(Object.assign({},s),{offers:e}))),h(!1),m(n.Qd)}catch(e){console.error(e),h(!1),t(e)}})),isLoadingBaseData:f,searchCondition:g,setSearchCondition:m}},{children:e}))},f=c},7603:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var o=t(5893),r=t(7294),a=t(9250),i=t(4475),n=t(4164),l=t(1247),c=(t(7788),t(9211)),d=t(2308),u=t(5044),p=t(3379),f=t.n(p),h=t(7795),y=t.n(h),b=t(569),g=t.n(b),m=t(3565),v=t.n(m),j=t(9216),A=t.n(j),x=t(4589),T=t.n(x),C=t(6566),S={};S.styleTagTransform=T(),S.setAttributes=v(),S.insert=g().bind(null,"head"),S.domAPI=y(),S.insertStyleElement=A(),f()(C.Z,S),C.Z&&C.Z.locals&&C.Z.locals;const O={[l.o.login]:!1,[l.o.userData]:!1,[l.o.preferences]:!1,[l.o.registration]:!1},Z=()=>{const[e,s]=(0,r.useState)(null),[t,l]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1),[h,y]=(0,r.useState)(!1),[b,g]=(0,r.useState)(O),m=(0,r.useCallback)((()=>g(O)),[]),v=e=>{f("boolean"!=typeof e?!p:e)},j=(0,r.useCallback)((e=>{g(Object.assign(Object.assign({},O),{[e]:!0}))}),[]);return(0,o.jsxs)(c.Z,Object.assign({error:e,setError:s,setErrorToastVisible:l},{children:[(0,o.jsxs)("div",Object.assign({className:"wrapper d-flex flex-column min-vh-100 bg-light"},{children:[(0,o.jsx)(n.W_,{openModal:j,toggleSidebar:v}),(0,o.jsx)(a.j3,{context:{errorToastVisible:t,openModal:j,setErrorToastVisible:l,setShowTop5Search:y,showTop5Search:h,sidebarVisible:p,toggleSidebar:v}})]})),(0,o.jsx)(n.Lu,{modalsVisibility:b,closeModal:m}),(0,o.jsx)(i.oo,Object.assign({autohide:!1,visible:t,color:"danger",className:"text-white align-items-center error-toast"},{children:(0,o.jsxs)("div",Object.assign({className:"d-flex"},{children:[(0,o.jsxs)(i.S3,{children:[(0,o.jsx)(d.Z,{icon:u.D,className:"me-2"}),"Hiba a kapcsolatban. Kérjük jelezd nekünk! ",(0,o.jsx)("br",{}),(0,o.jsx)(i.AQ,Object.assign({className:"nav-link",href:"mailto:info@sporoljma.hu"},{children:"info@sporoljma.hu"}))]}),(0,o.jsx)(i.Pv,{className:"me-2 m-auto",onClick:()=>{s(null),l(!1)},white:!0})]}))}))]}))}}}]);
//# sourceMappingURL=603.bundle.js.map