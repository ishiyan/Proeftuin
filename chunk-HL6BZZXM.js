import{$ as V,Aa as Y,Ac as _e,Cb as me,Da as b,Ec as Q,Gc as M,Hc as g,Lc as ee,Tb as w,W as k,X as c,Z as X,bb as s,f as ce,gb as K,j as he,ja as G,nc as h,o as fe,oa as p,ob as J,pb as a,qb as u,u as pe,va as D,vb as ge,zb as y}from"./chunk-R5QK5SBI.js";import{a as d,b as f}from"./chunk-6NE7JDAX.js";var Ee=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(s(K),s(Y))};static \u0275dir=a({type:n})}return n})(),Fe=(()=>{class n extends Ee{static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,features:[u]})}return n})(),oe=new V("");var et={provide:oe,useExisting:c(()=>we),multi:!0};function tt(){let n=ee()?ee().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var nt=new V(""),we=(()=>{class n extends Ee{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(s(K),s(Y),s(nt,8))};static \u0275dir=a({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&w("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[h([et]),u]})}return n})();function _(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function Ie(n){return n!=null&&typeof n.length=="number"}var m=new V(""),se=new V(""),it=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ve=class{static min(t){return Se(t)}static max(t){return Ne(t)}static required(t){return Oe(t)}static requiredTrue(t){return rt(t)}static email(t){return ot(t)}static minLength(t){return xe(t)}static maxLength(t){return Pe(t)}static pattern(t){return ke(t)}static nullValidator(t){return T(t)}static compose(t){return Ue(t)}static composeAsync(t){return He(t)}};function Se(n){return t=>{if(_(t.value)||_(n))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Ne(n){return t=>{if(_(t.value)||_(n))return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Oe(n){return _(n.value)?{required:!0}:null}function rt(n){return n.value===!0?null:{required:!0}}function ot(n){return _(n.value)||it.test(n.value)?null:{email:!0}}function xe(n){return t=>_(t.value)||!Ie(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}function Pe(n){return t=>Ie(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}function ke(n){if(!n)return T;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(_(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function T(n){return null}function Ge(n){return n!=null}function Re(n){return ge(n)?he(n):n}function Te(n){let t={};return n.forEach(e=>{t=e!=null?d(d({},t),e):t}),Object.keys(t).length===0?null:t}function je(n,t){return t.map(e=>e(n))}function st(n){return!n.validate}function Be(n){return n.map(t=>st(t)?t:e=>t.validate(e))}function Ue(n){if(!n)return null;let t=n.filter(Ge);return t.length==0?null:function(e){return Te(je(e,t))}}function ae(n){return n!=null?Ue(Be(n)):null}function He(n){if(!n)return null;let t=n.filter(Ge);return t.length==0?null:function(e){let i=je(e,t).map(Re);return pe(i).pipe(fe(Te))}}function le(n){return n!=null?He(Be(n)):null}function ye(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Le(n){return n._rawValidators}function $e(n){return n._rawAsyncValidators}function te(n){return n?Array.isArray(n)?n:[n]:[]}function j(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ce(n,t){let e=te(t);return te(n).forEach(r=>{j(e,r)||e.push(r)}),e}function Ve(n,t){return te(t).filter(e=>!j(n,e))}var B=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},C=class extends B{name;get formDirective(){return null}get path(){return null}},P=class extends B{_parent=null;name=null;valueAccessor=null},ne=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},at={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},cn=f(d({},at),{"[class.ng-submitted]":"isSubmitted"}),hn=(()=>{class n extends ne{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(s(P,2))};static \u0275dir=a({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&me("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[u]})}return n})();var I="VALID",R="INVALID",A="PENDING",S="DISABLED",v=class{},U=class extends v{value;source;constructor(t,e){super(),this.value=t,this.source=e}},O=class extends v{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},x=class extends v{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},E=class extends v{status;source;constructor(t,e){super(),this.status=t,this.source=e}},ie=class extends v{source;constructor(t){super(),this.source=t}},re=class extends v{source;constructor(t){super(),this.source=t}};function We(n){return(z(n)?n.validators:n)||null}function lt(n){return Array.isArray(n)?ae(n):n||null}function qe(n,t){return(z(t)?t.asyncValidators:n)||null}function ut(n){return Array.isArray(n)?le(n):n||null}function z(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function dt(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new k(1e3,"");if(!i[e])throw new k(1001,"")}function ct(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new k(1002,"")})}var H=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(t){g(()=>this.statusReactive.set(t))}_status=M(()=>this.statusReactive());statusReactive=b(void 0);get valid(){return this.status===I}get invalid(){return this.status===R}get pending(){return this.status==A}get disabled(){return this.status===S}get enabled(){return this.status!==S}errors;get pristine(){return g(this.pristineReactive)}set pristine(t){g(()=>this.pristineReactive.set(t))}_pristine=M(()=>this.pristineReactive());pristineReactive=b(!0);get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(t){g(()=>this.touchedReactive.set(t))}_touched=M(()=>this.touchedReactive());touchedReactive=b(!1);get untouched(){return!this.touched}_events=new ce;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ce(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ce(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ve(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ve(t,this._rawAsyncValidators))}hasValidator(t){return j(this._rawValidators,t)}hasAsyncValidator(t){return j(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(f(d({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new x(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(f(d({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new O(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new O(!0,i))}markAsPending(t={}){this.status=A;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new E(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(f(d({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=S,this.errors=null,this._forEachChild(r=>{r.disable(f(d({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new U(this.value,i)),this._events.next(new E(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(d({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(f(d({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(f(d({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===A)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new U(this.value,e)),this._events.next(new E(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(f(d({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=Re(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new E(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(R)?R:I}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new O(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new x(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){z(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=lt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}},L=class extends H{constructor(t,e,i){super(We(e),qe(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){ct(this,!0,t),Object.keys(t).forEach(i=>{dt(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Z=new V("",{providedIn:"root",factory:()=>ue}),ue="always";function ht(n,t){return[...t.path,n]}function $(n,t,e=ue){de(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),pt(n,t),mt(n,t),gt(n,t),ft(n,t)}function De(n,t,e=!0){let i=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(i),t.valueAccessor.registerOnTouched(i)),q(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function W(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ft(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function de(n,t){let e=Le(n);t.validator!==null?n.setValidators(ye(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=$e(n);t.asyncValidator!==null?n.setAsyncValidators(ye(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();W(t._rawValidators,r),W(t._rawAsyncValidators,r)}function q(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=Le(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=$e(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return W(t._rawValidators,i),W(t._rawAsyncValidators,i),e}function pt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&ze(n,t)})}function gt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&ze(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function ze(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function mt(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Ze(n,t){n==null,de(n,t)}function _t(n,t){return q(n,t)}function vt(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function yt(n){return Object.getPrototypeOf(n.constructor)===Fe}function Xe(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ct(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===we?e=o:yt(o)?i=o:r=o}),r||i||e||null}function Vt(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var Dt={provide:C,useExisting:c(()=>bt)},N=Promise.resolve(),bt=(()=>{class n extends C{callSetDisabledState;get submitted(){return g(this.submittedReactive)}_submitted=M(()=>this.submittedReactive());submittedReactive=b(!1);_directives=new Set;form;ngSubmit=new D;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new L({},ae(e),le(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){N.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),$(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){N.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){N.then(()=>{let i=this._findContainer(e.path),r=new L({});Ze(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){N.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){N.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Xe(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(s(m,10),s(se,10),s(Z,8))};static \u0275dir=a({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&w("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[h([Dt]),u]})}return n})();function be(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Me(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ye=class extends H{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(We(e),qe(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Me(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){be(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){be(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Me(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Mt=n=>n instanceof Ye;var At={provide:P,useExisting:c(()=>Et)},Ae=Promise.resolve(),Et=(()=>{class n extends P{_changeDetectorRef;callSetDisabledState;control=new Ye;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new D;constructor(e,i,r,o,l,Qe){super(),this._changeDetectorRef=l,this.callSetDisabledState=Qe,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ct(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),vt(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ae.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Q(i);Ae.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ht(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(s(C,9),s(m,10),s(se,10),s(oe,10),s(_e,8),s(Z,8))};static \u0275dir=a({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[h([At]),u,G]})}return n})();var Ft={provide:oe,useExisting:c(()=>wt),multi:!0},wt=(()=>{class n extends Fe{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&w("input",function(l){return r.onChange(l.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[h([Ft]),u]})}return n})();var It={provide:C,useExisting:c(()=>St)},St=(()=>{class n extends C{callSetDisabledState;get submitted(){return g(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=M(()=>this._submittedReactive());_submittedReactive=b(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new D;constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let i=this.form.get(e.path);return $(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){De(e.control||null,e,!1),Vt(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,i){this.form.get(e.path).setValue(i)}onSubmit(e){return this._submittedReactive.set(!0),Xe(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ie(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new re(this.form))}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(De(i||null,e),Mt(r)&&($(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Ze(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let i=this.form.get(e.path);i&&_t(i,e)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){de(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(s(m,10),s(se,10),s(Z,8))};static \u0275dir=a({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&w("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[h([It]),u,G]})}return n})();function Ke(n){return typeof n=="number"?n:parseInt(n,10)}function Je(n){return typeof n=="number"?n:parseFloat(n)}var F=(()=>{class n{_validator=T;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):T,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=a({type:n,features:[G]})}return n})(),Nt={provide:m,useExisting:c(()=>Ot),multi:!0},Ot=(()=>{class n extends F{max;inputName="max";normalizeInput=e=>Je(e);createValidator=e=>Ne(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&y("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[h([Nt]),u]})}return n})(),xt={provide:m,useExisting:c(()=>Pt),multi:!0},Pt=(()=>{class n extends F{min;inputName="min";normalizeInput=e=>Je(e);createValidator=e=>Se(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&y("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[h([xt]),u]})}return n})(),kt={provide:m,useExisting:c(()=>Gt),multi:!0};var Gt=(()=>{class n extends F{required;inputName="required";normalizeInput=Q;createValidator=e=>Oe;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&y("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[h([kt]),u]})}return n})();var Rt={provide:m,useExisting:c(()=>Tt),multi:!0},Tt=(()=>{class n extends F{minlength;inputName="minlength";normalizeInput=e=>Ke(e);createValidator=e=>xe(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&y("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},standalone:!1,features:[h([Rt]),u]})}return n})(),jt={provide:m,useExisting:c(()=>Bt),multi:!0},Bt=(()=>{class n extends F{maxlength;inputName="maxlength";normalizeInput=e=>Ke(e);createValidator=e=>Pe(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&y("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[h([jt]),u]})}return n})(),Ut={provide:m,useExisting:c(()=>Ht),multi:!0},Ht=(()=>{class n extends F{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>ke(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=p(n)))(r||n)}})();static \u0275dir=a({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&y("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[h([Ut]),u]})}return n})();var Lt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=J({type:n});static \u0275inj=X({})}return n})();var pn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Z,useValue:e.callSetDisabledState??ue}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=J({type:n});static \u0275inj=X({imports:[Lt]})}return n})();export{oe as a,we as b,m as c,ve as d,C as e,P as f,hn as g,bt as h,Et as i,wt as j,St as k,Ot as l,Pt as m,Gt as n,Tt as o,Bt as p,Ht as q,pn as r};
