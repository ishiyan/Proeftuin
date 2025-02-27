import{a as S,b as D,c as W}from"./chunk-FZOJFXI7.js";import{a as Ee,b as Ie,c as Y,d as z,e as $,f as j,g as B,h as V,i as q,j as Q,k as U,l as G,m as K,n as Re}from"./chunk-ERJHMV6U.js";import"./chunk-NOUXTG4Q.js";import"./chunk-6VUOHBER.js";import"./chunk-6ZZNTVR4.js";import"./chunk-RWOGKKRH.js";import{d as Oe}from"./chunk-KLMKNEHB.js";import{f as Te}from"./chunk-N4TS6JQX.js";import"./chunk-E2TS67DK.js";import{a as xe,b as we}from"./chunk-UM6YPW5H.js";import"./chunk-Z4EI37NR.js";import"./chunk-WLSKITFK.js";import{c as H,d as N,g as y,h as b,j as F}from"./chunk-2PPFUFFT.js";import"./chunk-S5ZFEYXU.js";import{J as be,O as Se,P as De,V as Me,j as ve,z as ye}from"./chunk-KNFFDOOK.js";import"./chunk-OQ5IDZ4F.js";import{Ab as h,Ba as de,Cb as w,Cc as ge,Ea as le,Fb as he,Gc as E,Ka as me,Kb as a,Lb as o,M as re,Mb as _,Nb as m,Oa as pe,Ob as p,Qb as A,Vb as v,Xb as C,Yb as _e,Z as R,Zb as Ce,aa as oe,bb as s,da as l,ec as T,f as X,fc as P,gb as fe,h as ee,hc as c,jb as M,jc as f,ka as ae,l as te,la as k,ma as L,na as se,ob as g,qb as ue,qc as O,ub as d,w as ne,wa as ce,z as ie,zb as x}from"./chunk-BLTBCMH5.js";import"./chunk-6NE7JDAX.js";var Ne=["container"],Fe=()=>["expandedDetail"];function Ye(t,i){t&1&&(a(0,"th",13),c(1," Type "),o())}function ze(t,i){if(t&1&&(a(0,"td",14),c(1),o()),t&2){let e=i.$implicit,n=C();s(),f(" ",n.getType(e)," ")}}function $e(t,i){t&1&&(a(0,"th",13),c(1," Ticker "),o())}function je(t,i){if(t&1&&(a(0,"td",14),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.symbol," ")}}function Be(t,i){t&1&&(a(0,"th",13),c(1," Name "),o())}function Ve(t,i){if(t&1&&(a(0,"td",14),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.name," ")}}function qe(t,i){t&1&&(a(0,"th",13),c(1," ISIN "),o())}function Qe(t,i){if(t&1&&(a(0,"td",14),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.isin," ")}}function Ue(t,i){t&1&&(a(0,"th",13),c(1," MIC "),o())}function Ge(t,i){if(t&1&&(a(0,"td",14),c(1),o()),t&2){let e=i.$implicit,n=C();s(),f(" ",n.getMic(e)," ")}}function Ke(t,i){if(t&1&&(a(0,"td",14)(1,"div",15)(2,"div",16),c(3),o()()()),t&2){let e=i.$implicit,n=C();x("colspan",n.displayedColumns.length),s(),h("@detailExpand",e===n.expandedInstrument?"expanded":"collapsed"),s(2),f(" ",e.description," ")}}function We(t,i){t&1&&_(0,"tr",17)}function Ze(t,i){if(t&1){let e=A();a(0,"tr",18),v("click",function(){let r=k(e).$implicit,u=C();return L(u.expandedInstrument=u.expandedInstrument===r?null:r)}),o()}if(t&2){let e=i.$implicit,n=C();w("expanded-row",n.expandedInstrument===e)}}function Je(t,i){t&1&&_(0,"tr",19)}var ke=(()=>{class t{constructor(){this.container=M.required("container"),this.InstrumentType=S,this.ExchangeMic=D,this.CurrencyCode=W,this.displayedColumns=["type","symbol","name","isin","mic"],this.dataSource=[]}getMic(e){return D[e.mic]}getType(e){return S[e.type]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["mb-sample-table1"]],viewQuery:function(n,r){n&1&&T(r.container,Ne,5),n&2&&P()},decls:23,vars:6,consts:[[1,"table-container"],["mat-table","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","symbol"],["matColumnDef","name"],["matColumnDef","isin"],["matColumnDef","mic"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","row",3,"expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"expanded-detail"],[1,"expanded-detail-description"],["mat-header-row",""],["mat-row","",1,"row",3,"click"],["mat-row","",1,"detail-row"]],template:function(n,r){n&1&&(_(0,"br"),a(1,"div",0)(2,"table",1),m(3,2),d(4,Ye,2,0,"th",3)(5,ze,2,1,"td",4),p(),m(6,5),d(7,$e,2,0,"th",3)(8,je,2,1,"td",4),p(),m(9,6),d(10,Be,2,0,"th",3)(11,Ve,2,1,"td",4),p(),m(12,7),d(13,qe,2,0,"th",3)(14,Qe,2,1,"td",4),p(),m(15,8),d(16,Ue,2,0,"th",3)(17,Ge,2,1,"td",4),p(),m(18,9),d(19,Ke,4,3,"td",4),p(),d(20,We,1,0,"tr",10)(21,Ze,1,2,"tr",11)(22,Je,1,0,"tr",12),o()()),n&2&&(s(2),h("dataSource",r.dataSource),s(18),h("matHeaderRowDef",r.displayedColumns)("matHeaderRowDefSticky",!0),s(),h("matRowDefColumns",r.displayedColumns),s(),h("matRowDefColumns",O(5,Fe)))},dependencies:[z,B,j,V,$,q,Q,G,U,K],styles:[".table-container[_ngcontent-%COMP%]{position:relative;max-height:200px;max-width:600px;overflow:auto;margin:16px 16px 16px 32px}table[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}tr.detail-row[_ngcontent-%COMP%]{height:0}tr.row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:#f5f5f5}tr.row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.expanded-detail[_ngcontent-%COMP%]{overflow:hidden}.expanded-detail-currency[_ngcontent-%COMP%]{padding-bottom:8px}.expanded-detail-description[_ngcontent-%COMP%]{padding-bottom:16px}"],data:{animation:[H("detailExpand",[b("collapsed",y({height:"0px",minHeight:"0",display:"none"})),b("expanded",y({height:"*"})),F("expanded <=> collapsed",N("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]},changeDetection:0})}}return t})();var Xe=["mat-sort-header",""],et=["*"];function tt(t,i){t&1&&(a(0,"div",2),se(),a(1,"svg",3),_(2,"path",4),o()())}var Le=new oe("MAT_SORT_DEFAULT_OPTIONS"),I=(()=>{class t{_defaultOptions;_initializedStream=new ee(1);sortables=new Map;_stateChanges=new X;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new ce;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let n=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=nt(e.start||this.start,n),u=r.indexOf(this.direction)+1;return u>=r.length&&(u=0),r[u]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(n){return new(n||t)(fe(Le,8))};static \u0275dir=ue({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",E],disabled:[2,"matSortDisabled","disabled",E]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ae]})}return t})();function nt(t,i){let e=["asc","desc"];return t=="desc"&&e.reverse(),i||e.push(""),e}var it=(()=>{class t{changes=new X;static \u0275fac=function(n){return new(n||t)};static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ae=(()=>{class t{_intl=l(it);_sort=l(I,{optional:!0});_columnDef=l("MAT_SORT_HEADER_COLUMN_DEF",{optional:!0});_changeDetectorRef=l(ge);_focusMonitor=l(be);_elementRef=l(de);_ariaDescriber=l(ye,{optional:!0});_renderChanges;_animationModule=l(me,{optional:!0});_recentlyCleared=le(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){l(ve).load(Me);let e=l(Le,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=ne(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>this._recentlyCleared.set(null))}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),n=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?n:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(n,r){n&1&&v("click",function(){return r._toggleOnInteraction()})("keydown",function(J){return r._handleKeydown(J)})("mouseleave",function(){return r._recentlyCleared.set(!1)}),n&2&&(x("aria-sort",r._getAriaSortAttribute()),w("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",E],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",E]},exportAs:["matSortHeader"],attrs:Xe,ngContentSelectors:et,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(n,r){n&1&&(_e(),a(0,"div",0)(1,"div",1),Ce(2),o(),d(3,tt,3,0,"div",2),o()),n&2&&(w("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-descending",r._sort.direction==="desc")("mat-sort-header-ascending",r._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",r._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",r._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",r._animationModule==="NoopAnimations"),x("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),s(3),he(r._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}"],encapsulation:2,changeDetection:0})}return t})();var Jt=De.ENTERING+" "+Se.STANDARD_CURVE;var rt="http://localhost:5000/api/v1/instruments/lists/",ot={headers:new xe({"Content-Type":"application/json"})},Pe=(()=>{class t{constructor(){this.httpClient=l(we),this.getInstrumentList=e=>this.httpClient.get(rt+e,ot).pipe(re(3),ie(this.handleError))}handleError(e){let n;if(e.error.message){let r=e.error;n=Ie.toMessage(r)}else n=e.message;return te(n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var at=()=>["expandedDetail"],st=()=>[5,10,25,100];function ct(t,i){t&1&&(a(0,"th",16),c(1," Type "),o())}function dt(t,i){if(t&1&&(a(0,"td",17),c(1),o()),t&2){let e=i.$implicit,n=C();s(),f(" ",n.getType(e)," ")}}function lt(t,i){t&1&&(a(0,"th",16),c(1," Ticker "),o())}function mt(t,i){if(t&1&&(a(0,"td",17),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.symbol," ")}}function pt(t,i){t&1&&(a(0,"th",16),c(1," Name "),o())}function ft(t,i){if(t&1&&(a(0,"td",17),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.name," ")}}function ut(t,i){t&1&&(a(0,"th",16),c(1," ISIN "),o())}function ht(t,i){if(t&1&&(a(0,"td",17),c(1),o()),t&2){let e=i.$implicit;s(),f(" ",e.isin," ")}}function _t(t,i){t&1&&(a(0,"th",16),c(1," MIC "),o())}function Ct(t,i){if(t&1&&(a(0,"td",17),c(1),o()),t&2){let e=i.$implicit,n=C();s(),f(" ",n.getMic(e)," ")}}function gt(t,i){if(t&1&&(a(0,"td",17)(1,"div",18)(2,"div",19),c(3),o()()()),t&2){let e=i.$implicit,n=C();x("colspan",n.displayedColumns.length),s(),h("@detailExpand",e===n.expandedInstrument?"expanded":"collapsed"),s(2),f(" ",e.description," ")}}function xt(t,i){t&1&&_(0,"tr",20)}function wt(t,i){if(t&1){let e=A();a(0,"tr",21),v("click",function(){let r=k(e).$implicit,u=C();return L(u.expandedInstrument=u.expandedInstrument===r?null:r)}),o()}if(t&2){let e=i.$implicit,n=C();w("expanded-row",n.expandedInstrument===e)}}function vt(t,i){t&1&&_(0,"tr",22)}var He=(()=>{class t{constructor(){this.listService=l(Pe),this.snackBarService=l(Ee),this.paginator=M.required(Y),this.sort=M.required(I),this.InstrumentType=S,this.ExchangeMic=D,this.CurrencyCode=W,this.displayedColumns=["type","symbol","name","isin","mic"],this.dataSource=new Re,this.dataSource.filterPredicate=(e,n)=>e.name&&e.name.toLowerCase().indexOf(n)!==-1||e.symbol&&e.symbol.toLowerCase().indexOf(n)!==-1||e.isin&&e.isin.toLowerCase().indexOf(n)!==-1||e.type&&e.type.toLowerCase().indexOf(n)!==-1||e.mic&&e.mic.toLowerCase().indexOf(n)!==-1||e.stock&&(e.stock.currency&&e.stock.currency.toLowerCase().indexOf(n)!==-1||e.stock.cfi&&e.stock.cfi.toLowerCase().indexOf(n)!==-1||e.stock.icb&&e.stock.icb.toLowerCase().indexOf(n)!==-1||e.stock.tradingMode&&e.stock.tradingMode.toLowerCase().indexOf(n)!==-1)||e.index&&(e.index.currency&&e.index.currency.toLowerCase().indexOf(n)!==-1||e.index.kind&&e.index.kind.toLowerCase().indexOf(n)!==-1||e.index.weighting&&e.index.weighting.toLowerCase().indexOf(n)!==-1||e.index.family&&e.index.family.toLowerCase().indexOf(n)!==-1)||e.etf&&(e.etf.currency&&e.etf.currency.toLowerCase().indexOf(n)!==-1||e.etf.expositionType&&e.etf.expositionType.toLowerCase().indexOf(n)!==-1||e.etf.cfi&&e.etf.cfi.toLowerCase().indexOf(n)!==-1||e.etf.tradingMode&&e.etf.tradingMode.toLowerCase().indexOf(n)!==-1||e.etf.issuer&&e.etf.issuer.toLowerCase().indexOf(n)!==-1||e.etf.indexFamily&&e.etf.indexFamily.toLowerCase().indexOf(n)!==-1||e.etf.underlying&&(e.etf.underlying.mic&&e.etf.underlying.mic.toLowerCase().indexOf(n)!==-1||e.etf.underlying.name&&e.etf.underlying.name.toLowerCase().indexOf(n)!==-1||e.etf.underlying.symbol&&e.etf.underlying.symbol.toLowerCase().indexOf(n)!==-1||e.etf.underlying.isin&&e.etf.underlying.isin.toLowerCase().indexOf(n)!==-1)||e.etf.inav&&(e.etf.inav.mic&&e.etf.inav.mic.toLowerCase().indexOf(n)!==-1||e.etf.inav.name&&e.etf.inav.name.toLowerCase().indexOf(n)!==-1||e.etf.inav.symbol&&e.etf.inav.symbol.toLowerCase().indexOf(n)!==-1||e.etf.inav.isin&&e.etf.inav.isin.toLowerCase().indexOf(n)!==-1))||e.etv&&(e.etv.currency&&e.etv.currency.toLowerCase().indexOf(n)!==-1||e.etv.tradingMode&&e.etv.tradingMode.toLowerCase().indexOf(n)!==-1||e.etv.issuer&&e.etv.issuer.toLowerCase().indexOf(n)!==-1)||e.inav&&(e.inav.currency&&e.inav.currency.toLowerCase().indexOf(n)!==-1||e.inav.target&&(e.inav.target.mic&&e.inav.target.mic.toLowerCase().indexOf(n)!==-1||e.inav.target.name&&e.inav.target.name.toLowerCase().indexOf(n)!==-1||e.inav.target.symbol&&e.inav.target.symbol.toLowerCase().indexOf(n)!==-1||e.inav.target.isin&&e.inav.target.isin.toLowerCase().indexOf(n)!==-1))||e.fund&&(e.fund.currency.toLowerCase().indexOf(n)!==-1||e.fund.tradingMode&&e.fund.tradingMode.toLowerCase().indexOf(n)!==-1||e.fund.cfi&&e.fund.cfi.toLowerCase().indexOf(n)!==-1||e.fund.issuer&&e.fund.issuer.toLowerCase().indexOf(n)!==-1),pe({write:()=>{this.dataSource.paginator=this.paginator(),this.dataSource.sort=this.sort(),this.listService.getInstrumentList("euronext").subscribe({next:e=>{this.expandedInstrument=null,this.dataSource.data=e},error:e=>{this.expandedInstrument=null,this.dataSource.data=[],this.snackBarService.add(e),console.error(e)}})}})}applyFilter(e){this.dataSource.filter=e.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}getMic(e){return D[e.mic]}getType(e){return S[e.type]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["mb-sample-table12"]],viewQuery:function(n,r){n&1&&(T(r.paginator,Y,5),T(r.sort,I,5)),n&2&&P(2)},decls:27,vars:9,consts:[[1,"table-container"],["matInput","","placeholder","Filter",3,"keyup"],[1,"mat-elevation-z8"],["mat-table","","matSort","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","symbol"],["matColumnDef","name"],["matColumnDef","isin"],["matColumnDef","mic"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","row",3,"expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"expanded-detail"],[1,"expanded-detail-description"],["mat-header-row",""],["mat-row","",1,"row",3,"click"],["mat-row","",1,"detail-row"]],template:function(n,r){n&1&&(_(0,"br"),a(1,"div",0)(2,"mat-form-field")(3,"input",1),v("keyup",function(J){return r.applyFilter(J.target.value)}),o()(),a(4,"div",2)(5,"table",3),m(6,4),d(7,ct,2,0,"th",5)(8,dt,2,1,"td",6),p(),m(9,7),d(10,lt,2,0,"th",5)(11,mt,2,1,"td",6),p(),m(12,8),d(13,pt,2,0,"th",5)(14,ft,2,1,"td",6),p(),m(15,9),d(16,ut,2,0,"th",5)(17,ht,2,1,"td",6),p(),m(18,10),d(19,_t,2,0,"th",5)(20,Ct,2,1,"td",6),p(),m(21,11),d(22,gt,4,3,"td",6),p(),d(23,xt,1,0,"tr",12)(24,wt,1,2,"tr",13)(25,vt,1,0,"tr",14),o(),_(26,"mat-paginator",15),o()()),n&2&&(s(5),h("dataSource",r.dataSource),s(18),h("matHeaderRowDef",r.displayedColumns)("matHeaderRowDefSticky",!0),s(),h("matRowDefColumns",r.displayedColumns),s(),h("matRowDefColumns",O(7,at)),s(),h("pageSizeOptions",O(8,st))("pageSize",10))},dependencies:[Te,Oe,z,I,B,j,V,Ae,$,q,Q,G,U,K,Y],styles:[".table-container[_ngcontent-%COMP%]{position:relative;max-width:600px;overflow:auto;margin:0 0 0 32px;padding:16px}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}table[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}tr.detail-row[_ngcontent-%COMP%]{height:0}tr.row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:#f5f5f5}tr.row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.expanded-detail[_ngcontent-%COMP%]{overflow:hidden}.expanded-detail-currency[_ngcontent-%COMP%]{padding-bottom:8px}.expanded-detail-description[_ngcontent-%COMP%]{padding-bottom:16px}"],data:{animation:[H("detailExpand",[b("collapsed",y({height:"0px",minHeight:"0",display:"none"})),b("expanded",y({height:"*"})),F("expanded <=> collapsed",N("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]},changeDetection:0})}}return t})();var Dn=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["mb-sample-instrument-table"]],decls:3,vars:0,consts:[[1,"instrument-table"]],template:function(n,r){n&1&&_(0,"mb-sample-table1",0)(1,"br")(2,"mb-sample-table12",0)},dependencies:[ke,He],styles:[".instrument-table[_ngcontent-%COMP%]{margin:0;padding:0}"],changeDetection:0})}}return t})();export{Dn as InstrumentsTableComponent};
