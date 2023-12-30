"use strict";(self.webpackChunkproeftuin=self.webpackChunkproeftuin||[]).push([[991],{3991:(q,g,r)=>{r.r(g),r.d(g,{SampleT2ExponentialMovingAverageModule:()=>A});var p=r(6814),u=r(6223),_=r(1447),h=r(381),C=r(4448),d=r(1896),o=r(9057),i=r(8418),e=r(9212),s=r(5195),v=r(4288);const Z=[{path:"s1",component:(()=>{class a{constructor(){this.selected1={length:6,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedL2={length:5,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedL3={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedL4={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedL5={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.initialL2={length:12,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Typical},this.initialL3={length:13,vFactor:.7,firstIsAverage:!0,quoteComponent:i.d.Bid},this.initialL4={length:14,vFactor:.7,firstIsAverage:!0},this.initialL5={length:15,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Open,quoteComponent:i.d.Ask},this.selectedS2={smoothingFactor:.2,vFactor:.7,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedS3={smoothingFactor:.2,vFactor:.7,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedS4={smoothingFactor:.2,vFactor:.7,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedS5={smoothingFactor:.2,vFactor:.7,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.initialS2={smoothingFactor:.1,vFactor:.7,barComponent:o.R.Typical},this.initialS3={smoothingFactor:.1,vFactor:.7,quoteComponent:i.d.Bid},this.initialS4={smoothingFactor:.1,vFactor:.7},this.initialS5={smoothingFactor:.1,vFactor:.7,barComponent:o.R.Open,quoteComponent:i.d.Ask}}static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-sample-t2-exponential-moving-average-1"]],decls:100,vars:35,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange"],[3,"initial","selectionChange"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Default"),e.qZA()(),e.TgZ(5,"mat-card-content")(6,"mb-t2-exponential-moving-average-params",2),e.NdJ("selectionChange",function(n){return t.selected1=n}),e.qZA()(),e.TgZ(7,"mat-card-content"),e._uU(8," Selected: "),e.TgZ(9,"pre"),e._uU(10),e.ALo(11,"json"),e.qZA()()(),e.TgZ(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),e._uU(15,"With length initial: no quote component"),e.qZA()(),e.TgZ(16,"mat-card-content")(17,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedL2=n}),e.qZA()(),e.TgZ(18,"mat-card-content"),e._uU(19," Selected: "),e.TgZ(20,"pre"),e._uU(21),e.ALo(22,"json"),e.qZA()()(),e.TgZ(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),e._uU(26,"With length initial: no bar component"),e.qZA()(),e.TgZ(27,"mat-card-content")(28,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedL3=n}),e.qZA()(),e.TgZ(29,"mat-card-content"),e._uU(30," Selected: "),e.TgZ(31,"pre"),e._uU(32),e.ALo(33,"json"),e.qZA()()(),e.TgZ(34,"mat-card",1)(35,"mat-card-header")(36,"mat-card-title"),e._uU(37,"With length initial: no bar no quote"),e.qZA()(),e.TgZ(38,"mat-card-content")(39,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedL4=n}),e.qZA()(),e.TgZ(40,"mat-card-content"),e._uU(41," Selected: "),e.TgZ(42,"pre"),e._uU(43),e.ALo(44,"json"),e.qZA()()(),e.TgZ(45,"mat-card",1)(46,"mat-card-header")(47,"mat-card-title"),e._uU(48,"With length initial: both bar and quote"),e.qZA()(),e.TgZ(49,"mat-card-content")(50,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedL5=n}),e.qZA()(),e.TgZ(51,"mat-card-content"),e._uU(52," Selected: "),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA()()(),e.TgZ(56,"mat-card",1)(57,"mat-card-header")(58,"mat-card-title"),e._uU(59,"With smoothing factor initial: no quote component"),e.qZA()(),e.TgZ(60,"mat-card-content")(61,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedS2=n}),e.qZA()(),e.TgZ(62,"mat-card-content"),e._uU(63," Selected: "),e.TgZ(64,"pre"),e._uU(65),e.ALo(66,"json"),e.qZA()()(),e.TgZ(67,"mat-card",1)(68,"mat-card-header")(69,"mat-card-title"),e._uU(70,"With smoothing factor initial: no bar component"),e.qZA()(),e.TgZ(71,"mat-card-content")(72,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedS3=n}),e.qZA()(),e.TgZ(73,"mat-card-content"),e._uU(74," Selected: "),e.TgZ(75,"pre"),e._uU(76),e.ALo(77,"json"),e.qZA()()(),e.TgZ(78,"mat-card",1)(79,"mat-card-header")(80,"mat-card-title"),e._uU(81,"With smoothing factor initial: no bar no quote"),e.qZA()(),e.TgZ(82,"mat-card-content")(83,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedS4=n}),e.qZA()(),e.TgZ(84,"mat-card-content"),e._uU(85," Selected: "),e.TgZ(86,"pre"),e._uU(87),e.ALo(88,"json"),e.qZA()()(),e.TgZ(89,"mat-card",1)(90,"mat-card-header")(91,"mat-card-title"),e._uU(92,"With smoothing factor initial: both bar and quote"),e.qZA()(),e.TgZ(93,"mat-card-content")(94,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedS5=n}),e.qZA()(),e.TgZ(95,"mat-card-content"),e._uU(96," Selected: "),e.TgZ(97,"pre"),e._uU(98),e.ALo(99,"json"),e.qZA()()()()),2&l&&(e.xp6(10),e.Oqu(e.lcZ(11,17,t.selected1)),e.xp6(7),e.Q6J("initial",t.initialL2),e.xp6(4),e.Oqu(e.lcZ(22,19,t.selectedL2)),e.xp6(7),e.Q6J("initial",t.initialL3),e.xp6(4),e.Oqu(e.lcZ(33,21,t.selectedL3)),e.xp6(7),e.Q6J("initial",t.initialL4),e.xp6(4),e.Oqu(e.lcZ(44,23,t.selectedL4)),e.xp6(7),e.Q6J("initial",t.initialL5),e.xp6(4),e.Oqu(e.lcZ(55,25,t.selectedL5)),e.xp6(7),e.Q6J("initial",t.initialS2),e.xp6(4),e.Oqu(e.lcZ(66,27,t.selectedS2)),e.xp6(7),e.Q6J("initial",t.initialS3),e.xp6(4),e.Oqu(e.lcZ(77,29,t.selectedS3)),e.xp6(7),e.Q6J("initial",t.initialS4),e.xp6(4),e.Oqu(e.lcZ(88,31,t.selectedS4)),e.xp6(7),e.Q6J("initial",t.initialS5),e.xp6(4),e.Oqu(e.lcZ(99,33,t.selectedS5)))},dependencies:[s.a8,s.dn,s.dk,s.n5,v._,p.Ts],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}return a})()},{path:"s2",component:(()=>{class a{constructor(){this.selected1={length:6,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.selectedL2={length:5,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.initialL2={length:7,vFactor:.7,firstIsAverage:!0,barComponent:o.R.Typical,quoteComponent:i.d.Bid},this.selectedS2={smoothingFactor:.2,vFactor:.7,barComponent:o.R.Close,quoteComponent:i.d.Mid},this.initialS2={smoothingFactor:.1,vFactor:.7,barComponent:o.R.Typical,quoteComponent:i.d.Bid}}static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-sample-t2-exponential-moving-average-2"]],decls:34,vars:11,consts:[[1,"sample"],["appearance","raised",1,"example-card"],[3,"selectionChange"],[3,"initial","selectionChange"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Default"),e.qZA()(),e.TgZ(5,"mat-card-content")(6,"mb-t2-exponential-moving-average-params",2),e.NdJ("selectionChange",function(n){return t.selected1=n}),e.qZA()(),e.TgZ(7,"mat-card-content"),e._uU(8," Selected: "),e.TgZ(9,"pre"),e._uU(10),e.ALo(11,"json"),e.qZA()()(),e.TgZ(12,"mat-card",1)(13,"mat-card-header")(14,"mat-card-title"),e._uU(15,"With length initial value"),e.qZA()(),e.TgZ(16,"mat-card-content")(17,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedL2=n}),e.qZA()(),e.TgZ(18,"mat-card-content"),e._uU(19," Selected: "),e.TgZ(20,"pre"),e._uU(21),e.ALo(22,"json"),e.qZA()()(),e.TgZ(23,"mat-card",1)(24,"mat-card-header")(25,"mat-card-title"),e._uU(26,"With smoothing factor initial value"),e.qZA()(),e.TgZ(27,"mat-card-content")(28,"mb-t2-exponential-moving-average-params",3),e.NdJ("selectionChange",function(n){return t.selectedS2=n}),e.qZA()(),e.TgZ(29,"mat-card-content"),e._uU(30," Selected: "),e.TgZ(31,"pre"),e._uU(32),e.ALo(33,"json"),e.qZA()()()()),2&l&&(e.xp6(10),e.Oqu(e.lcZ(11,5,t.selected1)),e.xp6(7),e.Q6J("initial",t.initialL2),e.xp6(4),e.Oqu(e.lcZ(22,7,t.selectedL2)),e.xp6(7),e.Q6J("initial",t.initialS2),e.xp6(4),e.Oqu(e.lcZ(33,9,t.selectedS2)))},dependencies:[s.a8,s.dn,s.dk,s.n5,v._,p.Ts],styles:[".sample[_ngcontent-%COMP%]{margin:16px 16px 0}.example-card[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0})}return a})()}];let T=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]})}return a})(),A=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[p.ez,u.u5,_.o9,h.q,C.s,T]})}return a})()}}]);