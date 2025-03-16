import{a as Ke,b as We,n as Ye,o as Ze,p as Je,q as Xe}from"./chunk-DBFVA4FY.js";import"./chunk-NZCW66OR.js";import{a as qe,b as Ge}from"./chunk-2PEVT6WB.js";import"./chunk-GIEDKP66.js";import{a as Ue}from"./chunk-OPYGZ2L2.js";import"./chunk-VWUD3KSD.js";import"./chunk-S6ASRHXL.js";import"./chunk-2TGB3PLI.js";import{b as $e,e as je}from"./chunk-FX4NC4EJ.js";import"./chunk-JVIRUAT2.js";import"./chunk-TLJQO34Y.js";import"./chunk-BXSF25FJ.js";import"./chunk-VIJQC4RB.js";import"./chunk-Y4NL7MD3.js";import{e as Ne}from"./chunk-P6Z6ONSU.js";import{f as Ve}from"./chunk-S5VVXV6E.js";import"./chunk-MIK7ISIT.js";import"./chunk-2LMAUIAO.js";import"./chunk-KHFN7NUB.js";import"./chunk-TCPIY6ZW.js";import{a as Qe}from"./chunk-O4Z6RA3S.js";import{C as Pe,K as Ae,M as Fe,N as Le,T as ne,U as He,Y as Be,a as Te,b as ke,h as ze,u as Oe,v as Re}from"./chunk-UCXTU5DW.js";import"./chunk-KMPZBAPX.js";import{l as ie}from"./chunk-XMFNCAXR.js";import{$ as me,$b as g,Aa as E,Ab as be,Ac as U,Bb as P,Ca as fe,Cb as J,Da as F,Db as xe,Eb as f,Ec as A,Fc as we,Gb as j,Hb as q,Ia as _e,Ib as G,Jb as s,Kb as p,Lb as D,Ob as w,Pb as K,R as I,S as ce,T as x,Tb as H,Ub as d,Vb as B,Wb as N,Y as de,Yb as v,Zb as Q,_b as _,a as se,ab as o,bc as Ce,ca as c,cb as O,cc as Se,dc as X,eb as ge,ec as m,f as $,fc as y,hb as ve,ib as ye,ja as he,jc as De,k as le,ka as T,kc as Me,la as k,lc as Ie,mc as ee,nb as C,o as pe,oa as Z,pb as S,pc as te,rb as L,tb as h,va as z,vc as Ee,wa as ue,yb as R,zb as u}from"./chunk-BVFQLCWY.js";import"./chunk-6NE7JDAX.js";var ct=["*"];function dt(t,r){t&1&&N(0)}var ae=(()=>{class t{_elementRef=c(E);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),re=(()=>{class t{template=c(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var b={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},mt=new me("STEPPER_GLOBAL_OPTIONS"),W=(()=>{class t{_stepperOptions;_stepper=c(Y);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;interacted=!1;interactedStream=new z;label;errorMessage;ariaLabel;ariaLabelledby;state;editable=!0;optional=!1;get completed(){return this._completedOverride==null?this._getDefaultCompleted():this._completedOverride}set completed(e){this._completedOverride=e}_completedOverride=null;_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return this._customError==null?this._getDefaultError():this._customError}set hasError(e){this._customError=e}_customError=null;_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}constructor(){let e=c(mt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this.interacted=!1,this._completedOverride!=null&&(this._completedOverride=!1),this._customError!=null&&(this._customError=!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["cdk-step"]],contentQueries:function(i,n,a){if(i&1&&(v(a,re,5),v(a,Ne,5)),i&2){let l;_(l=g())&&(n.stepLabel=l.first),_(l=g())&&(n._childForms=l)}},viewQuery:function(i,n){if(i&1&&Q(O,7),i&2){let a;_(a=g())&&(n.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",A],optional:[2,"optional","optional",A],completed:[2,"completed","completed",A],hasError:[2,"hasError","hasError",A]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[he],ngContentSelectors:ct,decls:1,vars:0,template:function(i,n){i&1&&(B(),h(0,dt,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return t})(),Y=(()=>{class t{_dir=c(Le,{optional:!0});_changeDetectorRef=c(U);_elementRef=c(E);_destroyed=new $;_keyManager;_steps;steps=new F;_stepHeader;_sortedHeaders=new F;linear=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._steps?(this._isValidIndex(e),this._selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this._selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex=e}_selectedIndex=0;get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new z;selectedIndexChange=new z;_groupId=c(Fe).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(I(this._steps),x(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(i=>i._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(I(this._stepHeader),x(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((i,n)=>i._elementRef.nativeElement.compareDocumentPosition(n._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Pe(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),(this._dir?this._dir.change:le()).pipe(I(this._layoutDirection()),x(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0),this.linear&&this._selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex);for(let i of e)i._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let i=e-this._selectedIndex;return i<0?this._layoutDirection()==="rtl"?"next":"previous":i>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getIndicatorType(e,i=b.NUMBER){let n=this.steps.toArray()[e],a=this._isCurrentStep(e);return n._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(n,a):this._getGuidelineLogic(n,a,i)}_getDefaultIndicatorLogic(e,i){return e._showError()&&e.hasError&&!i?b.ERROR:!e.completed||i?b.NUMBER:e.editable?b.EDIT:b.DONE}_getGuidelineLogic(e,i,n=b.NUMBER){return e._showError()&&e.hasError&&!i?b.ERROR:e.completed&&!i?b.DONE:e.completed&&i?n:e.editable&&i?b.EDIT:n}_isCurrentStep(e){return this._selectedIndex===e}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(e){let i=this.steps.toArray();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:this._selectedIndex,selectedStep:i[e],previouslySelectedStep:i[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e),this._selectedIndex=e,this.selectedIndexChange.emit(this._selectedIndex),this._stateChanged()}_onKeydown(e){let i=Te(e),n=e.keyCode,a=this._keyManager;a.activeItemIndex!=null&&!i&&(n===32||n===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(i=>{let n=i.stepControl;return(n?n.invalid||n.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,i=ze();return e===i||e.contains(i)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(i,n,a){if(i&1&&(v(a,W,5),v(a,ae,5)),i&2){let l;_(l=g())&&(n._steps=l),_(l=g())&&(n._stepHeader=l)}},inputs:{linear:[2,"linear","linear",A],selectedIndex:[2,"selectedIndex","selectedIndex",we],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})();function ht(t,r){if(t&1&&w(0,2),t&2){let e=d();u("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",e._getIconContext())}}function ut(t,r){if(t&1&&(s(0,"span",7),m(1),p()),t&2){let e=d(2);o(),y(e._getDefaultTextForState(e.state))}}function ft(t,r){if(t&1&&(s(0,"span",8),m(1),p()),t&2){let e=d(3);o(),y(e._intl.completedLabel)}}function _t(t,r){if(t&1&&(s(0,"span",8),m(1),p()),t&2){let e=d(3);o(),y(e._intl.editableLabel)}}function gt(t,r){if(t&1&&(h(0,ft,2,1,"span",8)(1,_t,2,1,"span",8),s(2,"mat-icon",7),m(3),p()),t&2){let e=d(2);f(e.state==="done"?0:e.state==="edit"?1:-1),o(3),y(e._getDefaultTextForState(e.state))}}function vt(t,r){if(t&1&&h(0,ut,2,1,"span",7)(1,gt,4,2),t&2){let e,i=d();f((e=i.state)==="number"?0:1)}}function yt(t,r){t&1&&(s(0,"div",4),w(1,9),p()),t&2&&(o(),u("ngTemplateOutlet",r.template))}function bt(t,r){if(t&1&&(s(0,"div",4),m(1),p()),t&2){let e=d();o(),y(e.label)}}function xt(t,r){if(t&1&&(s(0,"div",5),m(1),p()),t&2){let e=d();o(),y(e._intl.optionalLabel)}}function Ct(t,r){if(t&1&&(s(0,"div",6),m(1),p()),t&2){let e=d();o(),y(e.errorMessage)}}var it=["*"];function St(t,r){}function Dt(t,r){if(t&1&&(N(0),h(1,St,0,0,"ng-template",0)),t&2){let e=d();o(),u("cdkPortalOutlet",e._portal)}}var Mt=["animatedContainer"],nt=(t,r)=>({step:t,i:r});function It(t,r){t&1&&N(0)}function Et(t,r){t&1&&D(0,"div",7)}function wt(t,r){if(t&1&&(w(0,6),h(1,Et,1,0,"div",7)),t&2){let e=r.$implicit,i=r.$index,n=r.$index,a=r.$count;d(2);let l=X(4);u("ngTemplateOutlet",l)("ngTemplateOutletContext",te(3,nt,e,i)),o(),f(n!==a-1?1:-1)}}function Tt(t,r){if(t&1&&(s(0,"div",8,1),w(2,9),p()),t&2){let e=r.$implicit,i=r.$index,n=d(2);J("mat-horizontal-stepper-content-"+n._getAnimationDirection(i)),u("id",n._getStepContentId(i)),R("aria-labelledby",n._getStepLabelId(i))("inert",n.selectedIndex===i?null:""),o(2),u("ngTemplateOutlet",e.content)}}function kt(t,r){if(t&1&&(s(0,"div",2)(1,"div",3),q(2,wt,2,6,null,null,j),p(),s(4,"div",4),q(5,Tt,3,6,"div",5,j),p()()),t&2){let e=d();o(2),G(e.steps),o(3),G(e.steps)}}function zt(t,r){if(t&1&&(s(0,"div",10),w(1,6),s(2,"div",11,1)(4,"div",12)(5,"div",13),w(6,9),p()()()()),t&2){let e=r.$implicit,i=r.$index,n=r.$index,a=r.$count,l=d(2),M=X(4);o(),u("ngTemplateOutlet",M)("ngTemplateOutletContext",te(10,nt,e,i)),o(),P("mat-stepper-vertical-line",n!==a-1)("mat-vertical-content-container-active",l.selectedIndex===i),R("inert",l.selectedIndex===i?null:""),o(2),u("id",l._getStepContentId(i)),R("aria-labelledby",l._getStepLabelId(i)),o(2),u("ngTemplateOutlet",e.content)}}function Ot(t,r){if(t&1&&q(0,zt,7,13,"div",10,j),t&2){let e=d();G(e.steps)}}function Rt(t,r){if(t&1){let e=K();s(0,"mat-step-header",14),H("click",function(){let n=T(e).step;return k(n.select())})("keydown",function(n){T(e);let a=d();return k(a._onKeydown(n))}),p()}if(t&2){let e=r.step,i=r.i,n=d();P("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),u("tabIndex",n._getFocusIndex()===i?0:-1)("id",n._getStepLabelId(i))("index",i)("state",n._getIndicatorType(i,e.state))("label",e.stepLabel||e.label)("selected",n.selectedIndex===i)("active",n._stepIsNavigable(i,e))("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!n._stepIsNavigable(i,e))("color",e.color||n.color),R("aria-posinset",i+1)("aria-setsize",n.steps.length)("aria-controls",n._getStepContentId(i))("aria-selected",n.selectedIndex==i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",n._stepIsNavigable(i,e)?null:!0)}}var V=(()=>{class t extends re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(t)))(n||t)}})();static \u0275dir=S({type:t,selectors:[["","matStepLabel",""]],features:[L]})}return t})(),Pt=(()=>{class t{changes=new $;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(i){return new(i||t)};static \u0275prov=de({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tt=(()=>{class t extends ae{_intl=c(Pt);_focusMonitor=c(Ae);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected;active;optional;disableRipple;color;constructor(){super();let e=c(Oe);e.load(He),e.load(Re);let i=c(U);this._intlSubscription=this._intl.changes.subscribe(()=>i.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,i){e?this._focusMonitor.focusVia(this._elementRef,e,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof V?null:this.label}_templateLabel(){return this.label instanceof V?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getIconContext(){return{index:this.index,active:this.active,optional:this.optional}}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","tab",1,"mat-step-header"],hostVars:2,hostBindings:function(i,n){i&2&&J("mat-"+(n.color||"primary"))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[L],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(D(0,"div",0),s(1,"div")(2,"div",1),h(3,ht,1,2,"ng-container",2)(4,vt,2,1),p()(),s(5,"div",3),h(6,yt,2,1,"div",4)(7,bt,2,1,"div",4)(8,xt,2,1,"div",5)(9,Ct,2,1,"div",6),p()),i&2){let a;u("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disableRipple),o(),xe("mat-step-icon-state-",n.state," mat-step-icon"),P("mat-step-icon-selected",n.selected),o(2),f(n.iconOverrides&&n.iconOverrides[n.state]?3:4),o(2),P("mat-step-label-active",n.active)("mat-step-label-selected",n.selected)("mat-step-label-error",n.state=="error"),o(),f((a=n._templateLabel())?6:n._stringLabel()?7:-1,a),o(2),f(n.optional&&n.state!="error"?8:-1),o(),f(n.state==="error"?9:-1)}},dependencies:[Be,ie,Ve],styles:['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}'],encapsulation:2,changeDetection:0})}return t})(),At=(()=>{class t{templateRef=c(O);name;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),Ft=(()=>{class t{_template=c(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),oe=(()=>{class t extends W{_errorStateMatcher=c(ne,{skipSelf:!0});_viewContainerRef=c(ve);_isSelected=se.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ce(()=>this._stepper.selectionChange.pipe(pe(e=>e.selectedStep===this),I(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new $e(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,i){let n=this._errorStateMatcher.isErrorState(e,i),a=!!(e&&e.invalid&&this.interacted);return n||a}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["mat-step"]],contentQueries:function(i,n,a){if(i&1&&(v(a,V,5),v(a,Ft,5)),i&2){let l;_(l=g())&&(n.stepLabel=l.first),_(l=g())&&(n._lazyContent=l.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[ee([{provide:ne,useExisting:t},{provide:W,useExisting:t}]),L],ngContentSelectors:it,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(i,n){i&1&&(B(),h(0,Dt,2,1,"ng-template"))},dependencies:[je],encapsulation:2,changeDetection:0})}return t})(),at=(()=>{class t extends Y{_ngZone=c(ue);_renderer=c(ge);_animationsModule=c(_e,{optional:!0});_cleanupTransition;_isAnimating=fe(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new F;_icons;animationDone=new z;disableRipple;color;labelPosition="end";headerPosition="top";_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!c(ke).isBrowser;constructor(){super();let i=c(E).nativeElement.nodeName.toLowerCase();this.orientation=i==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:i})=>this._iconOverrides[e]=i),this.steps.changes.pipe(x(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(x(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsModule!=="NoopAnimations"&&setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(I(null),x(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_stepIsNavigable(e,i){return i.completed||this.selectedIndex===e||!this.linear}_getAnimationDuration(){return this._animationsModule==="NoopAnimations"?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let i=e.target;if(!i)return;let n=this.orientation==="horizontal"&&e.propertyName==="transform"&&i.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&i.classList.contains("mat-vertical-content-container-active");(n||a)&&this._animatedContainers.find(M=>M.nativeElement===i)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(i,n,a){if(i&1&&(v(a,oe,5),v(a,At,5)),i&2){let l;_(l=g())&&(n._steps=l),_(l=g())&&(n._icons=l)}},viewQuery:function(i,n){if(i&1&&(Q(tt,5),Q(Mt,5)),i&2){let a;_(a=g())&&(n._stepHeader=a),_(a=g())&&(n._animatedContainers=a)}},hostAttrs:["role","tablist"],hostVars:15,hostBindings:function(i,n){i&2&&(R("aria-orientation",n.orientation),be("--mat-stepper-animation-duration",n._getAnimationDuration()),P("mat-stepper-horizontal",n.orientation==="horizontal")("mat-stepper-vertical",n.orientation==="vertical")("mat-stepper-label-position-end",n.orientation==="horizontal"&&n.labelPosition=="end")("mat-stepper-label-position-bottom",n.orientation==="horizontal"&&n.labelPosition=="bottom")("mat-stepper-header-position-bottom",n.headerPosition==="bottom")("mat-stepper-animating",n._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[ee([{provide:Y,useExisting:t}]),L],ngContentSelectors:it,decls:5,vars:2,consts:[["stepTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-horizontal-stepper-header-container"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-stepper-horizontal-line"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[3,"ngTemplateOutlet"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","tabpanel",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"]],template:function(i,n){if(i&1&&(B(),h(0,It,1,0)(1,kt,7,0,"div",2)(2,Ot,2,0)(3,Rt,1,23,"ng-template",null,0,Ee)),i&2){let a;f(n._isServer?0:-1),o(),f((a=n.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[ie,tt],styles:['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}'],encapsulation:2,changeDetection:0})}return t})();var Lt=["container"];function Ht(t,r){t&1&&(s(0,"span",15),m(1,"En\u200Bti\u200Bty"),p())}function Bt(t,r){t&1&&(s(0,"span",15),m(1,"Pa\u200Br\u200Ba\u200Bms"),p())}function Nt(t,r){t&1&&(s(0,"span",15),m(1,"Ge\u200Bne\u200Bra\u200Bte"),p())}function Qt(t,r){if(t&1&&(s(0,"div",12),m(1),p()),t&2){let e=d();o(),y(e.historicalDataName)}}function Vt(t,r){if(t&1&&D(0,"mb-historical-data-chart",13),t&2){let e=d();u("svgheight",400)("historicalData",e.historicalData)}}function $t(t,r){if(t&1&&D(0,"mb-historical-data-table",14),t&2){let e=d();u("historicalData",e.historicalData)("enableDownload",!0)}}var tn=(()=>{class t{constructor(){this.element=c(E),this.syntheticDataService=c(Ze),this.snackBarService=c(Ue),this.container=ye.required("container"),this.temporalEntityKinds=Object.keys(Ke),this.syntheticDataParameters=new We}generateData(){this.syntheticDataService.getSyntheticData(this.syntheticDataParameters).subscribe({next:e=>{this.historicalData=e,this.historicalDataName=e.name},error:e=>{this.historicalData=void 0,this.snackBarService.add(e),console.error(e)}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=C({type:t,selectors:[["mb-sample-synthetic-data"]],viewQuery:function(i,n){i&1&&Ce(n.container,Lt,5),i&2&&Se()},decls:27,vars:5,consts:[["container",""],["group","matButtonToggleGroup"],[1,"container"],["matStepLabel",""],[1,"mat-step-normal"],[1,"mat-step-normal",3,"valueChange","value"],["value","ohlcv","selected",""],["value","quote","selected",""],["value","trade","selected",""],["value","scalar","selected",""],[1,"mat-step-wide",3,"syntheticDataParameters"],["mat-raised-button","","color","accent",1,"button",3,"click"],[1,"name"],[3,"svgheight","historicalData"],[3,"historicalData","enableDownload"],[1,"multiline-label"]],template:function(i,n){if(i&1){let a=K();D(0,"div",2,0),s(2,"mat-horizontal-stepper")(3,"mat-step"),h(4,Ht,2,0,"ng-template",3),s(5,"p",4),m(6,"Selected temporal entity:"),p(),s(7,"mat-button-toggle-group",5,1),Ie("valueChange",function(M){return T(a),Me(n.syntheticDataParameters.temporalEntityKind,M)||(n.syntheticDataParameters.temporalEntityKind=M),k(M)}),s(9,"mat-button-toggle",6),m(10,"Ohlcv"),p(),s(11,"mat-button-toggle",7),m(12,"Quote"),p(),s(13,"mat-button-toggle",8),m(14,"Trade"),p(),s(15,"mat-button-toggle",9),m(16,"Scalar"),p()()(),s(17,"mat-step"),h(18,Bt,2,0,"ng-template",3),D(19,"mb-data-generators-synthetic-data-parameters",10),p(),s(20,"mat-step"),h(21,Nt,2,0,"ng-template",3),s(22,"button",11),H("click",function(){return T(a),k(n.generateData())}),m(23,"Generate data"),p(),h(24,Qt,2,1,"div",12)(25,Vt,1,2,"mb-historical-data-chart",13)(26,$t,1,2,"mb-historical-data-table",14),p()()}i&2&&(o(7),De("value",n.syntheticDataParameters.temporalEntityKind),o(12),u("syntheticDataParameters",n.syntheticDataParameters),o(5),f(n.historicalData?24:-1),o(),f(n.historicalData?25:-1),o(),f(n.historicalData?26:-1))},dependencies:[Qe,Ge,qe,at,oe,V,Ye,Je,Xe],styles:[".mat-horizontal-content-container{padding:0!important}.mat-step-normal[_ngcontent-%COMP%]{margin-left:24px;margin-right:24px}.multiline-label[_ngcontent-%COMP%]{white-space:normal}mat-button-toggle-group[_ngcontent-%COMP%]{flex-wrap:wrap}.button[_ngcontent-%COMP%]{margin:16px 16px 32px}.name[_ngcontent-%COMP%], .moniker[_ngcontent-%COMP%]{margin:0 0 16px 16px}"],changeDetection:0})}}return t})();export{tn as SyntheticDataComponent};
