import{c as Z,g as V}from"./chunk-CGVYBZUD.js";import{$ as G,C as Y,a as B,d as f,e as H,f as _,g as E,ha as I,k as q,l as P}from"./chunk-W7HSUCHK.js";import{a as T}from"./chunk-IEKDCRBV.js";import{Qa as U,k as N,r as W,x as j,y as A}from"./chunk-I7MJ6SML.js";import{Aa as R,Tb as $,Wb as D,Xb as L,_a as v,ca as M,ja as S,nb as O,za as i}from"./chunk-R5QK5SBI.js";U();var X=["*"],F=300,tt=750,J="asc",et="desc",it=!0,nt="white",ot="0px 0px 8px #000000",st=1,at=3,lt=!1,rt=!1,Rt=(()=>{class d{constructor(){this.elementRef=M(R),this.sumFunc=i(B),this.sort=i(J),this.zoom=i(it),this.transitionMsec=i(tt),this.labelFunc=i(E),this.labelMinRadius=i(st),this.labelFill=i(nt),this.labelShadow=i(ot),this.labelFontSizeFunc=i(I),this.tooltipFunc=i(q),this.tapFunc=i(P),this.fillFunc=i(Y),this.fillOpacityFunc=i(G),this.strokeFunc=i(Z),this.strokeWidthFunc=i(V),this.padding=i(at),this.diameter=i(F),this.data=i.required(),this.flat=i(lt),this.rootCircle=i(rt)}ngOnChanges(l){this.render()}render(){let l=N(this.elementRef.nativeElement);l.select("svg").remove();let s=this.data();if(!s||!s.children||s.children.length<1)return;let c=T(this.elementRef,this.diameter(),this.diameter(),F,F),a=Math.max(c[0],c[1]),g=a/2,p=l.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",a).attr("height",a).attr("viewBox",`-${g} -${g} ${a} ${a}`).on("click",t=>w(t,o)),b=this.sort(),y=b===J?H:b===et?_:f,k=t=>{let e=j(t).sum(this.sumFunc());return y!==f&&(e=e.sort((n,m)=>y(n,m))),A().size([a,a]).padding(this.padding())(e)},o=k(s);if(this.flat()){let t={children:[]};for(let e of o.leaves())t.children?.push(e.data);o=k(t)}let r=o,h=p.append("g").selectAll("circle").data(this.rootCircle()?o.descendants():o.descendants().slice(1)).join("circle").attr("fill",this.fillFunc()).attr("fill-opacity",t=>this.fillOpacityFunc()(t,o.height)).attr("stroke",t=>this.strokeFunc()(t)).attr("stroke-width",t=>this.strokeWidthFunc()(t)).on("click",(t,e)=>{t.stopPropagation(),K(t,e)}),x=t=>t.parent===r&&t.r>=this.labelMinRadius()?1:0,u=p.append("g").style("fill",this.labelFill()).style("text-shadow",this.labelShadow()).style("user-select","none").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(o.descendants()).enter().append("text").style("fill-opacity",x).style("font-size",t=>this.labelFontSizeFunc()(t));u.selectAll("tspan").data(t=>this.labelFunc()(t).split(/\s+/g)).join("tspan").attr("x",0).attr("y",(t,e,n)=>`${e-n.length/2+.8}em`).text(t=>t);let K=(t,e)=>{this.tapFunc()(e),this.zoom()&&!this.flat()&&e.children&&r!==e&&w(t,e)},C,z=t=>{C=t;let e=a/t[2];u.attr("transform",n=>`translate(${(n.x-t[0])*e},${(n.y-t[1])*e+this.labelFontSizeFunc()(n)/4})`),h.attr("transform",n=>`translate(${(n.x-t[0])*e},${(n.y-t[1])*e})`),h.attr("r",n=>n.r*e)},w=(t,e)=>{r=e;let n=p.transition().duration(this.transitionMsec()).tween("zoom",()=>{let m=W(C,[r.x,r.y,r.r*2]);return Q=>z(m(Q))});u.transition(n).style("fill-opacity",x)};h.append("title").text(t=>this.tooltipFunc()(t)),z([o.x,o.y,o.r*2])}static{this.\u0275fac=function(s){return new(s||d)}}static{this.\u0275cmp=O({type:d,selectors:[["mb-circlepack"]],hostBindings:function(s,c){s&1&&$("resize",function(){return c.render()},!1,v)},inputs:{sumFunc:[1,"sumFunc"],sort:[1,"sort"],zoom:[1,"zoom"],transitionMsec:[1,"transitionMsec"],labelFunc:[1,"labelFunc"],labelMinRadius:[1,"labelMinRadius"],labelFill:[1,"labelFill"],labelShadow:[1,"labelShadow"],labelFontSizeFunc:[1,"labelFontSizeFunc"],tooltipFunc:[1,"tooltipFunc"],tapFunc:[1,"tapFunc"],fillFunc:[1,"fillFunc"],fillOpacityFunc:[1,"fillOpacityFunc"],strokeFunc:[1,"strokeFunc"],strokeWidthFunc:[1,"strokeWidthFunc"],padding:[1,"padding"],diameter:[1,"diameter"],data:[1,"data"],flat:[1,"flat"],rootCircle:[1,"rootCircle"]},features:[S],ngContentSelectors:X,decls:1,vars:0,template:function(s,c){s&1&&(D(),L(0))},encapsulation:2,changeDetection:0})}}return d})();export{Rt as a};
