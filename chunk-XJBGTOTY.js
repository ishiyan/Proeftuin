import{a as c}from"./chunk-2XJLPCJ7.js";import{a as B}from"./chunk-P3PGIEGT.js";import{a as W}from"./chunk-T7TA2VG3.js";import{a as V,b as A,c as N}from"./chunk-FWB7FZ5F.js";import"./chunk-IEKDCRBV.js";import"./chunk-NOUXTG4Q.js";import"./chunk-6ZZNTVR4.js";import"./chunk-RWOGKKRH.js";import{a as I,b as v,c as O,f as L}from"./chunk-XESA2HXI.js";import{d as F}from"./chunk-KLMKNEHB.js";import{a as T,f as D}from"./chunk-N4TS6JQX.js";import{b as M,g as x,i as _,j as b,l as y,m as E,r as P}from"./chunk-E2TS67DK.js";import"./chunk-Z4EI37NR.js";import"./chunk-WLSKITFK.js";import"./chunk-2PPFUFFT.js";import"./chunk-KNFFDOOK.js";import"./chunk-HICUQHPW.js";import"./chunk-OQ5IDZ4F.js";import{Ab as m,Hb as h,Ib as g,Jb as f,Kb as a,Lb as e,Mb as p,Vb as u,bb as l,hc as s,mc as S,nc as C,ob as d,oc as w}from"./chunk-BLTBCMH5.js";import"./chunk-6NE7JDAX.js";function j(n,H){if(n&1&&(a(0,"span",6),p(1,"mb-swatches",5),e()),n&2){let t=H.$implicit;l(),m("width",160)("height",32)("colors",t)}}var Z=(()=>{class n{constructor(){this.numberOfSwatches=5,this.selectedIndex=0,this.palettes=c(this.numberOfSwatches),this.selectedPalette=this.palettes[this.selectedIndex]}get paletteLength(){return this.numberOfSwatches}set paletteLength(t){this.numberOfSwatches=t,this.selectedIndex=0,this.palettes=c(this.numberOfSwatches),this.selectedPalette=this.palettes[this.selectedIndex]}selectionChanged(t){this.selectedIndex=this.palettes.indexOf(t),this.selectedPalette=t}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-sample-swatches-8"]],decls:22,vars:5,consts:[[1,"sample"],["appearance","raised",1,"example-card"],["appearance","fill"],["matInput","","type","number","min","2","max","100",3,"ngModelChange","ngModel"],[3,"selectionChange","colors"],[3,"width","height","colors"],[2,"margin-right","10px"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),s(4,"Variable number of swatches"),e()(),a(5,"mat-card-content")(6,"mat-form-field",2)(7,"mat-label"),s(8,"Select number of swatches"),e(),a(9,"input",3),w("ngModelChange",function(r){return C(i.paletteLength,r)||(i.paletteLength=r),r}),e()()(),a(10,"mat-card-content")(11,"mb-swatches-select",4),u("selectionChange",function(r){return i.selectionChanged(r)}),e()(),a(12,"mat-card-content"),s(13," Selected: "),p(14,"mb-swatches",5),e(),a(15,"mat-card-content")(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),s(19,"All palettes"),e()(),g(20,j,2,3,"span",6,h),e()()()()),o&2&&(l(9),S("ngModel",i.paletteLength),l(2),m("colors",i.palettes),l(3),m("width",80)("height",16)("colors",i.selectedPalette),l(6),f(i.palettes))},dependencies:[P,M,b,x,E,y,_,D,T,F,I,L,v,O,V,A,N,W,B],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}}return n})();export{Z as SampleSwatches8Component};
