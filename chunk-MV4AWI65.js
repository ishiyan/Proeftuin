import{a as S}from"./chunk-RFVP2GCN.js";import{a as g}from"./chunk-AHSFILTM.js";import{a as H}from"./chunk-P3PGIEGT.js";import{a as N}from"./chunk-T7TA2VG3.js";import{a as W,b as k,c as L}from"./chunk-FWB7FZ5F.js";import"./chunk-IEKDCRBV.js";import"./chunk-NOUXTG4Q.js";import"./chunk-6ZZNTVR4.js";import"./chunk-RWOGKKRH.js";import{a as T,b,c as I,d as v,f as F}from"./chunk-XESA2HXI.js";import{d as B}from"./chunk-KLMKNEHB.js";import{a as O,f as D}from"./chunk-N4TS6JQX.js";import{b as q,g as M,i as P,j as x,r as E}from"./chunk-E2TS67DK.js";import"./chunk-Z4EI37NR.js";import"./chunk-WLSKITFK.js";import"./chunk-2PPFUFFT.js";import"./chunk-KNFFDOOK.js";import"./chunk-HICUQHPW.js";import"./chunk-OQ5IDZ4F.js";import{Ab as o,Hb as c,Ib as d,Jb as h,Kb as n,Lb as e,Mb as m,Vb as _,bb as l,hc as r,mc as f,nc as w,ob as y,oc as A}from"./chunk-BLTBCMH5.js";import"./chunk-6NE7JDAX.js";function V(a,p){if(a&1&&(n(0,"span",6),m(1,"mb-swatches",5),e()),a&2){let t=p.$implicit;l(),o("width",160)("height",32)("colors",t)}}function j(a,p){if(a&1&&(n(0,"span",6),m(1,"mb-swatches",5),e()),a&2){let t=p.$implicit;l(),o("width",160)("height",32)("colors",t)}}function z(a,p){if(a&1&&(n(0,"span",6),m(1,"mb-swatches",5),e()),a&2){let t=p.$implicit;l(),o("width",320)("height",32)("colors",t)}}function G(a,p){if(a&1&&(n(0,"span",6),m(1,"mb-swatches",5),e()),a&2){let t=p.$implicit;l(),o("width",320)("height",32)("colors",t)}}var ne=(()=>{class a{constructor(){this.sequenceA=7241,this.sequence=9785634120,this.palettesAOrdered=g("7421"),this.palettesA=g(this.sequenceAToString()),this.selectedPaletteAIndex=0,this.selectedPaletteA=this.palettesA[this.selectedPaletteAIndex],this.palettesOrdered=S("9876543210"),this.palettes=S(this.sequenceToString()),this.selectedPaletteIndex=0,this.selectedPalette=this.palettes[this.selectedPaletteIndex]}get paletteSequenceA(){return this.sequenceA}set paletteSequenceA(t){this.sequenceA=t,this.palettesA=g(this.sequenceAToString()),this.selectedPaletteAIndex=0,this.selectedPaletteA=this.palettesA[this.selectedPaletteAIndex]}get paletteSequence(){return this.sequence}set paletteSequence(t){this.sequence=t,this.palettes=S(this.sequenceToString()),this.selectedPaletteIndex=0,this.selectedPalette=this.palettes[this.selectedPaletteIndex]}selectionChangedA(t){this.selectedPaletteAIndex=this.palettesA.indexOf(t),this.selectedPaletteA=t}selectionChanged(t){this.selectedPaletteIndex=this.palettes.indexOf(t),this.selectedPalette=t}sequenceAToString(){return this.sequenceA===null?void 0:this.sequenceA.toString()}sequenceToString(){return this.sequence===null?void 0:this.sequence.toString()}static{this.\u0275fac=function(u){return new(u||a)}}static{this.\u0275cmp=y({type:a,selectors:[["app-sample-swatches-2"]],decls:57,vars:10,consts:[[1,"sample"],["appearance","raised",1,"example-card"],["appearance","fill"],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"selectionChange","colors"],[3,"width","height","colors"],[2,"margin-right","10px"]],template:function(u,i){u&1&&(n(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),r(4,"Material A palettes"),e(),n(5,"mat-card-subtitle")(6,"mat-form-field",2)(7,"mat-label"),r(8,"Digits 7421 only"),e(),n(9,"input",3),A("ngModelChange",function(s){return w(i.paletteSequenceA,s)||(i.paletteSequenceA=s),s}),e()()()(),n(10,"mat-card-content")(11,"mb-swatches-select",4),_("selectionChange",function(s){return i.selectionChangedA(s)}),e()(),n(12,"mat-card-content"),r(13," Selected: "),m(14,"mb-swatches",5),e(),n(15,"mat-card-content")(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),r(19,"spans"),e()(),d(20,V,2,3,"span",6,c),e()(),n(22,"mat-card-content")(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),r(26,"'7421' sequence"),e()(),d(27,j,2,3,"span",6,c),e()()(),n(29,"mat-card",1)(30,"mat-card-header")(31,"mat-card-title"),r(32,"Material palettes"),e(),n(33,"mat-card-subtitle")(34,"mat-form-field",2)(35,"mat-label"),r(36,"Digits only"),e(),n(37,"input",3),A("ngModelChange",function(s){return w(i.paletteSequence,s)||(i.paletteSequence=s),s}),e()()()(),n(38,"mat-card-content")(39,"mb-swatches-select",4),_("selectionChange",function(s){return i.selectionChanged(s)}),e()(),n(40,"mat-card-content"),r(41," Selected: "),m(42,"mb-swatches",5),e(),n(43,"mat-card-content")(44,"mat-expansion-panel")(45,"mat-expansion-panel-header")(46,"mat-panel-title"),r(47,"spans"),e()(),d(48,z,2,3,"span",6,c),e()(),n(50,"mat-card-content")(51,"mat-expansion-panel")(52,"mat-expansion-panel-header")(53,"mat-panel-title"),r(54,"'9876543210' sequence"),e()(),d(55,G,2,3,"span",6,c),e()()()()),u&2&&(l(9),f("ngModel",i.paletteSequenceA),l(2),o("colors",i.palettesA),l(3),o("width",100)("height",16)("colors",i.selectedPaletteA),l(6),h(i.palettesA),l(7),h(i.palettesAOrdered),l(10),f("ngModel",i.paletteSequence),l(2),o("colors",i.palettes),l(3),o("width",100)("height",16)("colors",i.selectedPalette),l(6),h(i.palettes),l(7),h(i.palettesOrdered))},dependencies:[E,q,x,M,P,D,O,B,T,F,b,v,I,W,k,L,N,H],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}}return a})();export{ne as SampleSwatches2Component};
