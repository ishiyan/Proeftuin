import{a as Q}from"./chunk-S53QGRZ7.js";import{a as V}from"./chunk-GKKD46GS.js";import{a as J}from"./chunk-IEKDCRBV.js";import{Ba as K,Ca as Y,G as P,Qa as ot,Y as q,f as b,g as X,h as j,i as w,k as G}from"./chunk-I7MJ6SML.js";import{Aa as z,Ic as C,Tb as U,Wb as F,Xb as $,_a as B,ca as H,ja as R,nb as W,za as m}from"./chunk-R5QK5SBI.js";import{a as _}from"./chunk-6NE7JDAX.js";ot();var at=["*"],rt={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},ct="natural",lt=new Date(-864e13),ft=new Date(864e13),Z=300,tt=100,et=60,N=30,y=50,D=18,Tt=(()=>{class E{constructor(){this.elementRef=H(z),this.width=m(Z),this.height=m(tt),this.timeAxis=m([]),this.valueAxis=m([]),this.currentConfiguration=[],this.currentDataStacked=[],this.currentDataEmpty=!0,this.configuration=m.required(),this.min=m(),this.max=m(),this.from=m(),this.till=m(),this.data=m.required(),C(()=>{this.forcedValueMin=this.min()}),C(()=>{this.forcedValueMax=this.max()}),C(()=>{this.forcedTimeMin=this.from()}),C(()=>{this.forcedTimeMax=this.till()}),C(()=>{let e=this.data(),i=ft,f=lt,c=-1/0,t=!0,d=[],p=0;for(let n of e){d.push([]);let l=n.length;l<1||(t=!1,p<l&&(p=l),i>n[0].time&&(i=n[0].time),f<n[l-1].time&&(f=n[l-1].time))}let g=e.length;for(let n=0;n<p;++n){let l=0;for(let x=0;x<g;++x){let v=d[x],A=e[x];if(A.length>n){let r=Q(A)(A[n]);isNaN(r)||(r+=l,v.push({time:A[n].time,lower:l,upper:r}),l=r,c<r&&(c=r))}}}this.currentDataEmpty=t,this.dataTimeMin=i,this.dataTimeMax=f,this.dataValueMax=c,this.currentDataStacked=d,this.render()}),C(()=>{let e=this.configuration();if(e&&e!=null&&e.length>0){let i=e.length,f=this.currentConfiguration.length;if(f>0){let c=Math.min(i,f);for(let t=0;t<c;++t)this.currentConfiguration[t]=_(_({},this.currentConfiguration[t]),e[t]);if(i>c)for(let t=c;t<i;++t)this.currentConfiguration[t]=_({},e[t])}else this.currentConfiguration=[...e]}this.render()})}ngAfterViewInit(){setTimeout(()=>this.render(),0)}ngOnChanges(e){this.render()}render(){let e=G(this.elementRef.nativeElement);e.select("svg").remove();let i=this.currentDataStacked;if(this.currentDataEmpty||!i||i.length<1)return;let f=this.currentConfiguration,c=this.timeAxis().includes("top"),t=this.timeAxis().includes("bottom"),d=this.valueAxis().includes("left"),p=this.valueAxis().includes("right"),g=this.valueAxis().includes("grid"),n=d||g?y:c||t?y/3:0,l=p?y:c||t?y/3:0,x=c?D:d||p||g?D/3:0,v=t?D:d||p||g?D/3:0,A=J(this.elementRef,this.width(),this.height(),Z,tt),r=A[0],T=A[1],k=e.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",r).attr("height",T).attr("viewBox",`0 0 ${r} ${T}`),I=this.forcedTimeMin===void 0?this.dataTimeMin:this.forcedTimeMin,S=this.forcedTimeMax===void 0?this.dataTimeMax:this.forcedTimeMax,M=q().range([n,r-l]).domain([I,S]);if(c){M.nice();let s=h=>h.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform",`translate(0,${x})`).call(b(M).ticks(r/et).tickSizeOuter(0));k.append("g").call(s)}if(t){M.nice();let s=h=>h.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform",`translate(0,${T-v})`).call(j(M).ticks(r/et).tickSizeOuter(0));k.append("g").call(s)}let it=this.forcedValueMin===void 0?0:this.forcedValueMin,nt=this.forcedValueMax===void 0?this.dataValueMax:this.forcedValueMax,u=P().domain([it,nt]).range([T-v,x]);if(d&&!g){u.nice();let s=h=>h.attr("transform",`translate(${n},0)`).call(w(u).ticks(T/N).tickSizeOuter(0));k.append("g").call(s)}if(p){u.nice();let s=h=>h.attr("transform",`translate(${r-l},0)`).call(X(u).ticks(T/N).tickSizeOuter(0));k.append("g").call(s)}if(g){u.nice();let s=h=>h.attr("transform",`translate(${n},0)`).call(w(u).ticks(T/N).tickSizeOuter(0)).call(o=>{d||o.select(".domain").remove()}).call(o=>o.selectAll(t?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",r-n-l).attr("stroke","currentColor").attr("stroke-width",.3));k.append("g").call(s)}let st=f.length;for(let s=0;s<i.length;++s){let h=i[s],o=s<st?f[s]:rt,O=o.interpolation?o.interpolation:ct;if(o.fillColor&&o.fillColor!=="none"){let L=Y().curve(V(O)).defined(a=>a.time>=I&&a.time<=S).x(a=>M(a.time)).y0(a=>u(a.lower)).y1(a=>u(a.upper));k.append("path").datum(h).attr("fill",o.fillColor).attr("d",L)}if(o.strokeColor&&o.strokeWidth&&o.strokeWidth>0&&o.strokeColor!=="none"){let L=K().curve(V(O)).defined(a=>a.time>=I&&a.time<=S).x(a=>M(a.time)).y(a=>u(a.upper));k.append("path").datum(h).attr("stroke-width",o.strokeWidth).attr("stroke",o.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",L)}}}static{this.\u0275fac=function(i){return new(i||E)}}static{this.\u0275cmp=W({type:E,selectors:[["mb-stackiline"]],hostBindings:function(i,f){i&1&&U("resize",function(){return f.render()},!1,B)},inputs:{width:[1,"width"],height:[1,"height"],timeAxis:[1,"timeAxis"],valueAxis:[1,"valueAxis"],configuration:[1,"configuration"],min:[1,"min"],max:[1,"max"],from:[1,"from"],till:[1,"till"],data:[1,"data"]},features:[R],ngContentSelectors:at,decls:1,vars:0,template:function(i,f){i&1&&(F(),$(0))},encapsulation:2,changeDetection:0})}}return E})();export{Tt as a};
