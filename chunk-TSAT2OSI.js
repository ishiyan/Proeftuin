import{a as E}from"./chunk-THOA35EN.js";import{a as l}from"./chunk-5RXIHHMB.js";import{a as r}from"./chunk-VHDY75O6.js";import"./chunk-CVBR3SVQ.js";import"./chunk-NOUXTG4Q.js";import"./chunk-6ZZNTVR4.js";import"./chunk-RWOGKKRH.js";import"./chunk-WBHKIPB2.js";import"./chunk-TFNB2BG6.js";import{a as C,b as S,c as b,f as x}from"./chunk-XESA2HXI.js";import"./chunk-KLMKNEHB.js";import"./chunk-N4TS6JQX.js";import"./chunk-E2TS67DK.js";import"./chunk-Z4EI37NR.js";import"./chunk-WLSKITFK.js";import"./chunk-2PPFUFFT.js";import"./chunk-KNFFDOOK.js";import{n as h}from"./chunk-OQ5IDZ4F.js";import{Ab as m,Kb as e,Lb as t,Vb as p,bb as a,hc as n,ic as d,ob as u,vc as s,wc as c}from"./chunk-BLTBCMH5.js";import"./chunk-6NE7JDAX.js";var y=(()=>{class v{constructor(){this.selected1={length:6,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.selectedL2={length:5,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.selectedL3={length:7,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.selectedL4={length:7,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.selectedL5={length:7,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.initial1={length:6,firstIsAverage:!0,barComponent:l.Close,quoteComponent:r.Mid},this.initialL2={length:12,firstIsAverage:!0,barComponent:l.Typical},this.initialL3={length:13,firstIsAverage:!0,quoteComponent:r.Bid},this.initialL4={length:14,firstIsAverage:!0},this.initialL5={length:15,firstIsAverage:!0,barComponent:l.Open,quoteComponent:r.Ask},this.selectedS2={smoothingFactor:.2,barComponent:l.Close,quoteComponent:r.Mid},this.selectedS3={smoothingFactor:.2,barComponent:l.Close,quoteComponent:r.Mid},this.selectedS4={smoothingFactor:.2,barComponent:l.Close,quoteComponent:r.Mid},this.selectedS5={smoothingFactor:.2,barComponent:l.Close,quoteComponent:r.Mid},this.initialS2={smoothingFactor:.1,barComponent:l.Typical},this.initialS3={smoothingFactor:.1,quoteComponent:r.Bid},this.initialS4={smoothingFactor:.1},this.initialS5={smoothingFactor:.1,barComponent:l.Open,quoteComponent:r.Ask}}static{this.\u0275fac=function(_){return new(_||v)}}static{this.\u0275cmp=u({type:v,selectors:[["app-sample-double-exponential-moving-average-1"]],decls:100,vars:36,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange","initial"]],template:function(_,i){_&1&&(e(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),n(4,"Default"),t()(),e(5,"mat-card-content")(6,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selected1=o}),t()(),e(7,"mat-card-content"),n(8," Selected: "),e(9,"pre"),n(10),s(11,"json"),t()()(),e(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),n(15,"With length initial: no quote component"),t()(),e(16,"mat-card-content")(17,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedL2=o}),t()(),e(18,"mat-card-content"),n(19," Selected: "),e(20,"pre"),n(21),s(22,"json"),t()()(),e(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),n(26,"With length initial: no bar component"),t()(),e(27,"mat-card-content")(28,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedL3=o}),t()(),e(29,"mat-card-content"),n(30," Selected: "),e(31,"pre"),n(32),s(33,"json"),t()()(),e(34,"mat-card",1)(35,"mat-card-header")(36,"mat-card-title"),n(37,"With length initial: no bar no quote"),t()(),e(38,"mat-card-content")(39,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedL4=o}),t()(),e(40,"mat-card-content"),n(41," Selected: "),e(42,"pre"),n(43),s(44,"json"),t()()(),e(45,"mat-card",1)(46,"mat-card-header")(47,"mat-card-title"),n(48,"With length initial: both bar and quote"),t()(),e(49,"mat-card-content")(50,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedL5=o}),t()(),e(51,"mat-card-content"),n(52," Selected: "),e(53,"pre"),n(54),s(55,"json"),t()()(),e(56,"mat-card",1)(57,"mat-card-header")(58,"mat-card-title"),n(59,"With smoothing factor initial: no quote component"),t()(),e(60,"mat-card-content")(61,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedS2=o}),t()(),e(62,"mat-card-content"),n(63," Selected: "),e(64,"pre"),n(65),s(66,"json"),t()()(),e(67,"mat-card",1)(68,"mat-card-header")(69,"mat-card-title"),n(70,"With smoothing factor initial: no bar component"),t()(),e(71,"mat-card-content")(72,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedS3=o}),t()(),e(73,"mat-card-content"),n(74," Selected: "),e(75,"pre"),n(76),s(77,"json"),t()()(),e(78,"mat-card",1)(79,"mat-card-header")(80,"mat-card-title"),n(81,"With smoothing factor initial: no bar no quote"),t()(),e(82,"mat-card-content")(83,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedS4=o}),t()(),e(84,"mat-card-content"),n(85," Selected: "),e(86,"pre"),n(87),s(88,"json"),t()()(),e(89,"mat-card",1)(90,"mat-card-header")(91,"mat-card-title"),n(92,"With smoothing factor initial: both bar and quote"),t()(),e(93,"mat-card-content")(94,"mb-double-exponential-moving-average-params",2),p("selectionChange",function(o){return i.selectedS5=o}),t()(),e(95,"mat-card-content"),n(96," Selected: "),e(97,"pre"),n(98),s(99,"json"),t()()()()),_&2&&(a(6),m("initial",i.initial1),a(4),d(c(11,18,i.selected1)),a(7),m("initial",i.initialL2),a(4),d(c(22,20,i.selectedL2)),a(7),m("initial",i.initialL3),a(4),d(c(33,22,i.selectedL3)),a(7),m("initial",i.initialL4),a(4),d(c(44,24,i.selectedL4)),a(7),m("initial",i.initialL5),a(4),d(c(55,26,i.selectedL5)),a(7),m("initial",i.initialS2),a(4),d(c(66,28,i.selectedS2)),a(7),m("initial",i.initialS3),a(4),d(c(77,30,i.selectedS3)),a(7),m("initial",i.initialS4),a(4),d(c(88,32,i.selectedS4)),a(7),m("initial",i.initialS5),a(4),d(c(99,34,i.selectedS5)))},dependencies:[h,C,x,S,b,E],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}}return v})();export{y as SampleDoubleExponentialMovingAverage1Component};
