"use strict";(self.webpackChunkproeftuin=self.webpackChunkproeftuin||[]).push([[632],{4632:(f,g,r)=>{r.r(g),r.d(g,{SampleT2ExponentialMovingAverageModule:()=>S});var p=r(1368),C=r(6504),h=r(7432),u=r(2824),_=r(9284),d=r(2992),o=r(6228),i=r(8996),e=r(4496),c=r(2080),v=r(6912);const E=[{path:"s1",component:(()=>{class a{constructor(){this.selected1={length:6,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedL2={length:5,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedL3={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedL4={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedL5={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.initialL2={length:12,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Typical},this.initialL3={length:13,vFactor:.7,firstIsAverage:!0,quoteComponent:i.Q.Bid},this.initialL4={length:14,vFactor:.7,firstIsAverage:!0},this.initialL5={length:15,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Open,quoteComponent:i.Q.Ask},this.selectedS2={smoothingFactor:.2,vFactor:.7,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedS3={smoothingFactor:.2,vFactor:.7,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedS4={smoothingFactor:.2,vFactor:.7,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedS5={smoothingFactor:.2,vFactor:.7,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.initialS2={smoothingFactor:.1,vFactor:.7,barComponent:o.K.Typical},this.initialS3={smoothingFactor:.1,vFactor:.7,quoteComponent:i.Q.Bid},this.initialS4={smoothingFactor:.1,vFactor:.7},this.initialS5={smoothingFactor:.1,vFactor:.7,barComponent:o.K.Open,quoteComponent:i.Q.Ask}}static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275cmp=e.In1({type:a,selectors:[["app-sample-t2-exponential-moving-average-1"]],decls:100,vars:35,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange"],[3,"initial","selectionChange"]],template:function(l,t){1&l&&(e.I0R(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),e.OEk(4,"Default"),e.C$Y()(),e.I0R(5,"mat-card-content")(6,"mb-t2-exponential-moving-average-params",2),e.qCj("selectionChange",function(n){return t.selected1=n}),e.C$Y()(),e.I0R(7,"mat-card-content"),e.OEk(8," Selected: "),e.I0R(9,"pre"),e.OEk(10),e.wVc(11,"json"),e.C$Y()()(),e.I0R(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),e.OEk(15,"With length initial: no quote component"),e.C$Y()(),e.I0R(16,"mat-card-content")(17,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedL2=n}),e.C$Y()(),e.I0R(18,"mat-card-content"),e.OEk(19," Selected: "),e.I0R(20,"pre"),e.OEk(21),e.wVc(22,"json"),e.C$Y()()(),e.I0R(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),e.OEk(26,"With length initial: no bar component"),e.C$Y()(),e.I0R(27,"mat-card-content")(28,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedL3=n}),e.C$Y()(),e.I0R(29,"mat-card-content"),e.OEk(30," Selected: "),e.I0R(31,"pre"),e.OEk(32),e.wVc(33,"json"),e.C$Y()()(),e.I0R(34,"mat-card",1)(35,"mat-card-header")(36,"mat-card-title"),e.OEk(37,"With length initial: no bar no quote"),e.C$Y()(),e.I0R(38,"mat-card-content")(39,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedL4=n}),e.C$Y()(),e.I0R(40,"mat-card-content"),e.OEk(41," Selected: "),e.I0R(42,"pre"),e.OEk(43),e.wVc(44,"json"),e.C$Y()()(),e.I0R(45,"mat-card",1)(46,"mat-card-header")(47,"mat-card-title"),e.OEk(48,"With length initial: both bar and quote"),e.C$Y()(),e.I0R(49,"mat-card-content")(50,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedL5=n}),e.C$Y()(),e.I0R(51,"mat-card-content"),e.OEk(52," Selected: "),e.I0R(53,"pre"),e.OEk(54),e.wVc(55,"json"),e.C$Y()()(),e.I0R(56,"mat-card",1)(57,"mat-card-header")(58,"mat-card-title"),e.OEk(59,"With smoothing factor initial: no quote component"),e.C$Y()(),e.I0R(60,"mat-card-content")(61,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedS2=n}),e.C$Y()(),e.I0R(62,"mat-card-content"),e.OEk(63," Selected: "),e.I0R(64,"pre"),e.OEk(65),e.wVc(66,"json"),e.C$Y()()(),e.I0R(67,"mat-card",1)(68,"mat-card-header")(69,"mat-card-title"),e.OEk(70,"With smoothing factor initial: no bar component"),e.C$Y()(),e.I0R(71,"mat-card-content")(72,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedS3=n}),e.C$Y()(),e.I0R(73,"mat-card-content"),e.OEk(74," Selected: "),e.I0R(75,"pre"),e.OEk(76),e.wVc(77,"json"),e.C$Y()()(),e.I0R(78,"mat-card",1)(79,"mat-card-header")(80,"mat-card-title"),e.OEk(81,"With smoothing factor initial: no bar no quote"),e.C$Y()(),e.I0R(82,"mat-card-content")(83,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedS4=n}),e.C$Y()(),e.I0R(84,"mat-card-content"),e.OEk(85," Selected: "),e.I0R(86,"pre"),e.OEk(87),e.wVc(88,"json"),e.C$Y()()(),e.I0R(89,"mat-card",1)(90,"mat-card-header")(91,"mat-card-title"),e.OEk(92,"With smoothing factor initial: both bar and quote"),e.C$Y()(),e.I0R(93,"mat-card-content")(94,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedS5=n}),e.C$Y()(),e.I0R(95,"mat-card-content"),e.OEk(96," Selected: "),e.I0R(97,"pre"),e.OEk(98),e.wVc(99,"json"),e.C$Y()()()()),2&l&&(e.yG2(10),e.cNF(e.kDX(11,17,t.selected1)),e.yG2(7),e.E7m("initial",t.initialL2),e.yG2(4),e.cNF(e.kDX(22,19,t.selectedL2)),e.yG2(7),e.E7m("initial",t.initialL3),e.yG2(4),e.cNF(e.kDX(33,21,t.selectedL3)),e.yG2(7),e.E7m("initial",t.initialL4),e.yG2(4),e.cNF(e.kDX(44,23,t.selectedL4)),e.yG2(7),e.E7m("initial",t.initialL5),e.yG2(4),e.cNF(e.kDX(55,25,t.selectedL5)),e.yG2(7),e.E7m("initial",t.initialS2),e.yG2(4),e.cNF(e.kDX(66,27,t.selectedS2)),e.yG2(7),e.E7m("initial",t.initialS3),e.yG2(4),e.cNF(e.kDX(77,29,t.selectedS3)),e.yG2(7),e.E7m("initial",t.initialS4),e.yG2(4),e.cNF(e.kDX(88,31,t.selectedS4)),e.yG2(7),e.E7m("initial",t.initialS5),e.yG2(4),e.cNF(e.kDX(99,33,t.selectedS5)))},dependencies:[c.SM,c.WK,c.Uc,c.gp,v._,p.ED],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}return a})()},{path:"s2",component:(()=>{class a{constructor(){this.selected1={length:6,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.selectedL2={length:5,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.initialL2={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.K.Typical,quoteComponent:i.Q.Bid},this.selectedS2={smoothingFactor:.2,vFactor:.7,barComponent:o.K.Close,quoteComponent:i.Q.Mid},this.initialS2={smoothingFactor:.1,vFactor:.7,barComponent:o.K.Typical,quoteComponent:i.Q.Bid}}static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275cmp=e.In1({type:a,selectors:[["app-sample-t2-exponential-moving-average-2"]],decls:34,vars:11,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange"],[3,"initial","selectionChange"]],template:function(l,t){1&l&&(e.I0R(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),e.OEk(4,"Default"),e.C$Y()(),e.I0R(5,"mat-card-content")(6,"mb-t2-exponential-moving-average-params",2),e.qCj("selectionChange",function(n){return t.selected1=n}),e.C$Y()(),e.I0R(7,"mat-card-content"),e.OEk(8," Selected: "),e.I0R(9,"pre"),e.OEk(10),e.wVc(11,"json"),e.C$Y()()(),e.I0R(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),e.OEk(15,"With length initial value"),e.C$Y()(),e.I0R(16,"mat-card-content")(17,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedL2=n}),e.C$Y()(),e.I0R(18,"mat-card-content"),e.OEk(19," Selected: "),e.I0R(20,"pre"),e.OEk(21),e.wVc(22,"json"),e.C$Y()()(),e.I0R(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),e.OEk(26,"With smoothing factor initial value"),e.C$Y()(),e.I0R(27,"mat-card-content")(28,"mb-t2-exponential-moving-average-params",3),e.qCj("selectionChange",function(n){return t.selectedS2=n}),e.C$Y()(),e.I0R(29,"mat-card-content"),e.OEk(30," Selected: "),e.I0R(31,"pre"),e.OEk(32),e.wVc(33,"json"),e.C$Y()()()()),2&l&&(e.yG2(10),e.cNF(e.kDX(11,5,t.selected1)),e.yG2(7),e.E7m("initial",t.initialL2),e.yG2(4),e.cNF(e.kDX(22,7,t.selectedL2)),e.yG2(7),e.E7m("initial",t.initialS2),e.yG2(4),e.cNF(e.kDX(33,9,t.selectedS2)))},dependencies:[c.SM,c.WK,c.Uc,c.gp,v._,p.ED],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}return a})()}];let I=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=e.a4G({type:a});static#n=this.\u0275inj=e.s3X({imports:[d.qQ.forChild(E),d.qQ]})}return a})(),S=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=e.a4G({type:a});static#n=this.\u0275inj=e.s3X({imports:[p.MD,C.y,h.aM,u.y,_.y,I]})}return a})()}}]);