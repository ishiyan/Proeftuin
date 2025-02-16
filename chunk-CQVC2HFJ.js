import{a as T}from"./chunk-H3HXEHTX.js";import{a as r,c as l}from"./chunk-RPOMTI7Z.js";import"./chunk-UPXS4RH4.js";import"./chunk-RHM7TZ2H.js";import"./chunk-2G26VEQD.js";import{a as x,b as M,c as E,f as b}from"./chunk-HMH3336O.js";import"./chunk-XP5Z4VRE.js";import{g as j}from"./chunk-SYEDO2VT.js";import"./chunk-F7DQBQTG.js";import"./chunk-7UA33SC2.js";import{o as I}from"./chunk-KYPDBX4X.js";import"./chunk-F467SDXY.js";import{r as B}from"./chunk-HL6BZZXM.js";import"./chunk-X7C3JSFP.js";import"./chunk-TAQSE2X6.js";import"./chunk-2PPFUFFT.js";import{$c as f,Ab as p,Kb as e,Lb as t,Tb as s,Z as _,ab as a,bd as L,fc as n,gc as d,nb as S,ob as u,tc as c,uc as g}from"./chunk-R5QK5SBI.js";import"./chunk-6NE7JDAX.js";var A=(()=>{class m{constructor(){this.selected1={length:6,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.selectedL2={length:5,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.selectedL3={length:7,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.selectedL4={length:7,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.selectedL5={length:7,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.initial1={length:6,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.initialL2={length:12,firstIsAverage:!0,barComponent:r.Typical},this.initialL3={length:13,firstIsAverage:!0,quoteComponent:l.Bid},this.initialL4={length:14,firstIsAverage:!0},this.initialL5={length:15,firstIsAverage:!0,barComponent:r.Open,quoteComponent:l.Ask},this.selectedS2={smoothingFactor:.2,barComponent:r.Close,quoteComponent:l.Mid},this.selectedS3={smoothingFactor:.2,barComponent:r.Close,quoteComponent:l.Mid},this.selectedS4={smoothingFactor:.2,barComponent:r.Close,quoteComponent:l.Mid},this.selectedS5={smoothingFactor:.2,barComponent:r.Close,quoteComponent:l.Mid},this.initialS2={smoothingFactor:.1,barComponent:r.Typical},this.initialS3={smoothingFactor:.1,quoteComponent:l.Bid},this.initialS4={smoothingFactor:.1},this.initialS5={smoothingFactor:.1,barComponent:r.Open,quoteComponent:l.Ask}}static{this.\u0275fac=function(v){return new(v||m)}}static{this.\u0275cmp=S({type:m,selectors:[["app-sample-triple-exponential-moving-average-1"]],decls:100,vars:36,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange","initial"]],template:function(v,i){v&1&&(e(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),n(4,"Default"),t()(),e(5,"mat-card-content")(6,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selected1=o}),t()(),e(7,"mat-card-content"),n(8," Selected: "),e(9,"pre"),n(10),c(11,"json"),t()()(),e(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),n(15,"With length initial: no quote component"),t()(),e(16,"mat-card-content")(17,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedL2=o}),t()(),e(18,"mat-card-content"),n(19," Selected: "),e(20,"pre"),n(21),c(22,"json"),t()()(),e(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),n(26,"With length initial: no bar component"),t()(),e(27,"mat-card-content")(28,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedL3=o}),t()(),e(29,"mat-card-content"),n(30," Selected: "),e(31,"pre"),n(32),c(33,"json"),t()()(),e(34,"mat-card",1)(35,"mat-card-header")(36,"mat-card-title"),n(37,"With length initial: no bar no quote"),t()(),e(38,"mat-card-content")(39,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedL4=o}),t()(),e(40,"mat-card-content"),n(41," Selected: "),e(42,"pre"),n(43),c(44,"json"),t()()(),e(45,"mat-card",1)(46,"mat-card-header")(47,"mat-card-title"),n(48,"With length initial: both bar and quote"),t()(),e(49,"mat-card-content")(50,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedL5=o}),t()(),e(51,"mat-card-content"),n(52," Selected: "),e(53,"pre"),n(54),c(55,"json"),t()()(),e(56,"mat-card",1)(57,"mat-card-header")(58,"mat-card-title"),n(59,"With smoothing factor initial: no quote component"),t()(),e(60,"mat-card-content")(61,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedS2=o}),t()(),e(62,"mat-card-content"),n(63," Selected: "),e(64,"pre"),n(65),c(66,"json"),t()()(),e(67,"mat-card",1)(68,"mat-card-header")(69,"mat-card-title"),n(70,"With smoothing factor initial: no bar component"),t()(),e(71,"mat-card-content")(72,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedS3=o}),t()(),e(73,"mat-card-content"),n(74," Selected: "),e(75,"pre"),n(76),c(77,"json"),t()()(),e(78,"mat-card",1)(79,"mat-card-header")(80,"mat-card-title"),n(81,"With smoothing factor initial: no bar no quote"),t()(),e(82,"mat-card-content")(83,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedS4=o}),t()(),e(84,"mat-card-content"),n(85," Selected: "),e(86,"pre"),n(87),c(88,"json"),t()()(),e(89,"mat-card",1)(90,"mat-card-header")(91,"mat-card-title"),n(92,"With smoothing factor initial: both bar and quote"),t()(),e(93,"mat-card-content")(94,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedS5=o}),t()(),e(95,"mat-card-content"),n(96," Selected: "),e(97,"pre"),n(98),c(99,"json"),t()()()()),v&2&&(a(6),p("initial",i.initial1),a(4),d(g(11,18,i.selected1)),a(7),p("initial",i.initialL2),a(4),d(g(22,20,i.selectedL2)),a(7),p("initial",i.initialL3),a(4),d(g(33,22,i.selectedL3)),a(7),p("initial",i.initialL4),a(4),d(g(44,24,i.selectedL4)),a(7),p("initial",i.initialL5),a(4),d(g(55,26,i.selectedL5)),a(7),p("initial",i.initialS2),a(4),d(g(66,28,i.selectedS2)),a(7),p("initial",i.initialS3),a(4),d(g(77,30,i.selectedS3)),a(7),p("initial",i.initialS4),a(4),d(g(88,32,i.selectedS4)),a(7),p("initial",i.initialS5),a(4),d(g(99,34,i.selectedS5)))},dependencies:[f,x,b,M,E,T],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}}return m})();var y=(()=>{class m{constructor(){this.selected1={length:6,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.selectedL2={length:5,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.initial1={length:6,firstIsAverage:!0,barComponent:r.Close,quoteComponent:l.Mid},this.initialL2={length:7,firstIsAverage:!0,barComponent:r.Typical,quoteComponent:l.Bid},this.selectedS2={smoothingFactor:.2,barComponent:r.Close,quoteComponent:l.Mid},this.initialS2={smoothingFactor:.1,barComponent:r.Typical,quoteComponent:l.Bid}}static{this.\u0275fac=function(v){return new(v||m)}}static{this.\u0275cmp=S({type:m,selectors:[["app-sample-triple-exponential-moving-average-2"]],decls:34,vars:12,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange","initial"]],template:function(v,i){v&1&&(e(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),n(4,"Default"),t()(),e(5,"mat-card-content")(6,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selected1=o}),t()(),e(7,"mat-card-content"),n(8," Selected: "),e(9,"pre"),n(10),c(11,"json"),t()()(),e(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),n(15,"With length initial value"),t()(),e(16,"mat-card-content")(17,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedL2=o}),t()(),e(18,"mat-card-content"),n(19," Selected: "),e(20,"pre"),n(21),c(22,"json"),t()()(),e(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),n(26,"With smoothing factor initial value"),t()(),e(27,"mat-card-content")(28,"mb-triple-exponential-moving-average-params",2),s("selectionChange",function(o){return i.selectedS2=o}),t()(),e(29,"mat-card-content"),n(30," Selected: "),e(31,"pre"),n(32),c(33,"json"),t()()()()),v&2&&(a(6),p("initial",i.initial1),a(4),d(g(11,6,i.selected1)),a(7),p("initial",i.initialL2),a(4),d(g(22,8,i.selectedL2)),a(7),p("initial",i.initialS2),a(4),d(g(33,10,i.selectedS2)))},dependencies:[f,x,b,M,E,T],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}}return m})();var D=[{path:"s1",component:A},{path:"s2",component:y}],F=(()=>{class m{static{this.\u0275fac=function(v){return new(v||m)}}static{this.\u0275mod=u({type:m})}static{this.\u0275inj=_({imports:[I.forChild(D),I]})}}return m})();var ie=(()=>{class m{static{this.\u0275fac=function(v){return new(v||m)}}static{this.\u0275mod=u({type:m})}static{this.\u0275inj=_({imports:[L,B,j,F,A,y]})}}return m})();export{ie as SampleTripleExponentialMovingAverageModule};
