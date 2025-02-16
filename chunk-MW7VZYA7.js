import{a as y,b as N,d as O}from"./chunk-RPOMTI7Z.js";import{a as W}from"./chunk-RHM7TZ2H.js";import{d as z}from"./chunk-2G26VEQD.js";import{a as F,f as B}from"./chunk-F467SDXY.js";import{b as V,g as I,i as E,j as D,l as q,m as S,r as T}from"./chunk-HL6BZZXM.js";import{Ab as C,Fb as g,Ic as L,Kb as s,Lb as l,Qb as u,Tb as M,Vb as r,ab as m,fc as d,ka as p,kc as c,la as h,lc as f,mc as _,nb as w,tb as x,ya as v,za as P}from"./chunk-R5QK5SBI.js";import{a as o}from"./chunk-6NE7JDAX.js";function j(i,A){if(i&1){let e=u();s(0,"mat-form-field",0)(1,"mat-label"),d(2,"Length"),l(),s(3,"input",4),_("ngModelChange",function(n){p(e);let a=r();return f(a.lengthParam,n)||(a.lengthParam=n),h(n)}),l()()}if(i&2){let e=r();m(3),c("ngModel",e.lengthParam)}}function k(i,A){if(i&1){let e=u();s(0,"mat-slide-toggle",2),_("ngModelChange",function(n){p(e);let a=r();return f(a.firstIsAverageParam,n)||(a.firstIsAverageParam=n),h(n)}),d(1,"First is average"),l()}if(i&2){let e=r();C("color","primary"),c("ngModel",e.firstIsAverageParam)}}function G(i,A){if(i&1){let e=u();s(0,"mat-form-field",0)(1,"mat-label"),d(2,"Alpha"),l(),s(3,"input",5),_("ngModelChange",function(n){p(e);let a=r();return f(a.alphaParam,n)||(a.alphaParam=n),h(n)}),l()()}if(i&2){let e=r();m(3),c("ngModel",e.alphaParam)}}function H(i,A){if(i&1){let e=u();s(0,"mb-bar-component",6),M("selectionChange",function(n){p(e);let a=r();return h(a.barComponentChanged(n))}),l()}if(i&2){let e=r();C("initial",e.barComponent)}}function J(i,A){if(i&1){let e=u();s(0,"mb-quote-component",6),M("selectionChange",function(n){p(e);let a=r();return h(a.quoteComponentChanged(n))}),l()}if(i&2){let e=r();C("initial",e.quoteComponent)}}var Q=!0,K=i=>"length"in i,re=(()=>{class i{get lengthParam(){return this.paramsLength.length}set lengthParam(e){(!e||e<2)&&(e=2);let t=2/(e+1);t=t<.001?.001:t,t=t>1?1:t,this.paramsAlpha.smoothingFactor=t,this.paramsLength.length=e,this.paramsLength=o({},this.paramsLength),this.notify()}get useAlpha(){return this.useAlphaInternal}set useAlpha(e){this.useAlphaInternal!==e&&(this.useAlphaInternal=e,this.useAlphaInternal?(this.paramsAlpha=o({},this.paramsAlpha),this.notify()):(this.paramsLength=o({},this.paramsLength),this.notify()))}get alphaParam(){return this.paramsAlpha.smoothingFactor}set alphaParam(e){(!e||e>1)&&(e=1);let t=2/e-1;t=t<2?2:t,t=t>1024?1024:t,this.paramsLength.length=t,this.paramsAlpha.smoothingFactor=e,this.paramsAlpha=o({},this.paramsAlpha),this.notify()}get firstIsAverageParam(){return this.firstIsAverage}set firstIsAverageParam(e){this.firstIsAverage!==e&&(this.firstIsAverage=e,this.paramsLength.firstIsAverage=e,this.useAlpha?(this.paramsAlpha=o({},this.paramsAlpha),this.notify()):(this.paramsLength=o({},this.paramsLength),this.notify()))}constructor(){this.initialized=!1,this.firstIsAverage=Q,this.useAlphaInternal=!1,this.paramsLength={length:6,firstIsAverage:Q,barComponent:y.Close},this.paramsAlpha={smoothingFactor:.285,barComponent:y.Close},this.barComponentVisible=this.barComponent!==void 0,this.quoteComponentVisible=this.quoteComponent!==void 0,this.selectionChange=v(),this.initial=P.required(),L(()=>{let e=this.initial();K(e)?(this.paramsLength=e,this.firstIsAverage=e.firstIsAverage,this.useAlpha=!1):(this.paramsAlpha=e,this.firstIsAverage=!1,this.useAlpha=!0),this.barComponent=e.barComponent,this.quoteComponent=e.quoteComponent,this.barComponentVisible=e.barComponent!==void 0,this.quoteComponentVisible=e.quoteComponent!==void 0})}ngAfterContentInit(){this.initialized=!0,this.notify()}barComponentChanged(e){this.paramsLength.barComponent=e,this.paramsAlpha.barComponent=e,this.paramsLength=o({},this.paramsLength),this.paramsAlpha=o({},this.paramsAlpha),this.notify()}quoteComponentChanged(e){this.paramsLength.quoteComponent=e,this.paramsAlpha.quoteComponent=e,this.paramsLength=o({},this.paramsLength),this.paramsAlpha=o({},this.paramsAlpha),this.notify()}notify(){this.initialized&&(this.useAlpha?this.selectionChange.emit(this.paramsAlpha):this.selectionChange.emit(this.paramsLength))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=w({type:i,selectors:[["mb-double-exponential-moving-average-params"]],inputs:{initial:[1,"initial"]},outputs:{selectionChange:"selectionChange"},decls:7,vars:7,consts:[["appearance","fill","floatLabel","always",1,"mr",2,"width","6em"],[1,"mr",3,"color","ngModel"],[1,"mr",3,"ngModelChange","color","ngModel"],[1,"mr",3,"initial"],["type","number","matInput","","min","2","max","1024","step","1",3,"ngModelChange","ngModel"],["type","number","matInput","","min","0.001","max","0.999","step","0.001",3,"ngModelChange","ngModel"],[1,"mr",3,"selectionChange","initial"]],template:function(t,n){t&1&&(x(0,j,4,1,"mat-form-field",0)(1,k,2,2,"mat-slide-toggle",1),s(2,"mat-slide-toggle",2),_("ngModelChange",function(b){return f(n.useAlpha,b)||(n.useAlpha=b),b}),d(3,"Alpha"),l(),x(4,G,4,1,"mat-form-field",0)(5,H,1,1,"mb-bar-component",3)(6,J,1,1,"mb-quote-component",3)),t&2&&(g(n.useAlpha?-1:0),m(),g(n.useAlpha?-1:1),m(),C("color","primary"),c("ngModel",n.useAlpha),m(2),g(n.useAlpha?4:-1),m(),g(n.barComponentVisible?5:-1),m(),g(n.quoteComponentVisible?6:-1))},dependencies:[T,V,D,I,S,q,E,B,F,z,W,N,O],styles:[".mr[_ngcontent-%COMP%]{margin-right:.55em}"],changeDetection:0})}}return i})();export{re as a};
