"use strict";(()=>{var e={};e.id=337,e.ids=[337],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9405:(e,t,r)=>{r.r(t),r.d(t,{config:()=>P,default:()=>m,routeModule:()=>p});var n={};r.r(n),r.d(n,{default:()=>d});var a=r(1802),i=r(7153),s=r(6249);let o=require("nodemailer");var u=r.n(o);let l=process.env.FROM_EMAIL,c=process.env.TO_EMAIL;async function d(e,t){let{subject:r,message:n}=e.body,a=u().createTransport({service:"gmail",auth:{user:"thestackjournal@gmail.com",pass:"nmjmnuszeypteihm"}});try{await a.sendMail({from:l,to:c,subject:r,text:n}),t.status(200).json({message:"Email sent successfully"})}catch(e){console.error("Error sending email:",e),t.status(500).json({message:"Error sending email"})}}let m=(0,s.l)(n,"default"),P=(0,s.l)(n,"config"),p=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/mailer",pathname:"/api/mailer",bundlePath:"",filename:""},userland:n})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=9405);module.exports=r})();