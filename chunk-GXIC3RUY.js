import{a as P}from"./chunk-Q2O73ZMY.js";import{a as y}from"./chunk-N4TS6JQX.js";import{Aa as a,Ab as h,Bb as d,Fb as C,Kb as l,Kc as s,Lb as c,Mb as b,Vb as f,Xb as g,bb as i,hc as _,ic as v,ob as m,ub as u,za as p}from"./chunk-BLTBCMH5.js";function k(t,x){if(t&1&&(l(0,"mat-label"),_(1),c()),t&2){let e=g();i(),v(e.currentLabel)}}var O=(()=>{class t{set color(e){this.value!==e&&(this.value=e,this.selectionChange.emit(this.value))}get color(){return this.value}constructor(){this.value="#000",this.currentLabel="Color",this.selectionChange=p(),this.label=a(),this.initial=a.required(),s(()=>{let e=this.label();e&&this.currentLabel!==e&&(this.currentLabel=e)}),s(()=>{this.value=this.initial()})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=m({type:t,selectors:[["mb-color"]],inputs:{label:[1,"label"],initial:[1,"initial"]},outputs:{selectionChange:"selectionChange"},decls:4,vars:4,consts:[["type","text","readonly","","mbColorPicker","",3,"colorChanged","colorSelected","colorPicker"]],template:function(n,o){n&1&&(l(0,"span"),u(1,k,2,1,"mat-label"),b(2,"br"),l(3,"input",0),f("colorChanged",function(r){return o.color=r})("colorSelected",function(r){return o.color=r}),c()()),n&2&&(i(),C(o.currentLabel.length>0?1:-1),i(2),d("background",o.color),h("colorPicker",o.color))},dependencies:[y,P],styles:["span[_ngcontent-%COMP%]{display:inline-block}input[_ngcontent-%COMP%]{width:7em;height:28px;border:0px}"],changeDetection:0})}}return t})();export{O as a};
