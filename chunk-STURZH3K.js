import{a as ge,b as ye,f as ee}from"./chunk-KHFN7NUB.js";import{D as _e,N as J,w as V}from"./chunk-UCXTU5DW.js";import{$ as pe,$b as M,A as U,Aa as B,Ac as G,B as j,Bc as Z,E as y,Ec as k,Fc as m,G as ue,Ob as P,Qb as X,R as $,S as w,T as v,Tb as S,V as A,Yb as Y,Zb as R,_b as C,ca as c,cb as fe,f as T,g,hb as L,i as le,k as h,m as z,mc as f,nb as O,o as p,oa as b,p as I,pb as u,rb as x,s as Q,va as W,w as ce,x as he,yb as q}from"./chunk-BVFQLCWY.js";import{a as ae,b as de}from"./chunk-6NE7JDAX.js";var te=class{dataNodes;expansionModel=new ee(!0);trackBy;getLevel;isExpandable;getChildren;toggle(o){this.expansionModel.toggle(this._trackByValue(o))}expand(o){this.expansionModel.select(this._trackByValue(o))}collapse(o){this.expansionModel.deselect(this._trackByValue(o))}isExpanded(o){return this.expansionModel.isSelected(this._trackByValue(o))}toggleDescendants(o){this.expansionModel.isSelected(this._trackByValue(o))?this.collapseDescendants(o):this.expandDescendants(o)}collapseAll(){this.expansionModel.clear()}expandDescendants(o){let e=[o];e.push(...this.getDescendants(o)),this.expansionModel.select(...e.map(t=>this._trackByValue(t)))}collapseDescendants(o){let e=[o];e.push(...this.getDescendants(o)),this.expansionModel.deselect(...e.map(t=>this._trackByValue(t)))}_trackByValue(o){return this.trackBy?this.trackBy(o):o}};var ve=class extends te{getChildren;options;constructor(o,e){super(),this.getChildren=o,this.options=e,this.options&&(this.trackBy=this.options.trackBy),this.options?.isExpandable&&(this.isExpandable=this.options.isExpandable)}expandAll(){this.expansionModel.clear();let o=this.dataNodes.reduce((e,t)=>[...e,...this.getDescendants(t),t],[]);this.expansionModel.select(...o.map(e=>this._trackByValue(e)))}getDescendants(o){let e=[];return this._getDescendants(e,o),e.splice(1)}_getDescendants(o,e){o.push(e);let t=this.getChildren(e);Array.isArray(t)?t.forEach(n=>this._getDescendants(o,n)):z(t)&&t.pipe(y(1),he(Boolean)).subscribe(n=>{for(let s of n)this._getDescendants(o,s)})}},F=new pe("CDK_TREE_NODE_OUTLET_NODE"),K=(()=>{class i{viewContainer=c(L);_node=c(F,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkTreeNodeOutlet",""]]})}return i})(),ne=class{$implicit;level;index;count;constructor(o){this.$implicit=o}},H=(()=>{class i{template=c(fe);when;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]}})}return i})();function xe(){return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree.")}var N=(()=>{class i{_differs=c(Z);_changeDetectorRef=c(G);_elementRef=c(B);_dir=c(J);_onDestroy=new T;_dataDiffer;_defaultNodeDef;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new g({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new g([]);_nodeType=new g(null);_nodes=new g(new Map);_keyManagerNodes=new g([]);_keyManagerFactory=c(_e);_keyManager;_viewInit=!1;constructor(){}ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(t=>!t.when);e.length>1,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new ee(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;ye(this._dataSource)?e=this._dataSource.connect(this):z(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=h(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(v(this._onDestroy)).subscribe(t=>{this._renderDataChanges(t)}))}_getRenderData(e){let t=this._getExpansionModel();return I([e,this._nodeType,t.changed.pipe($(null),A(n=>{this._emitExpansionChanges(n)}))]).pipe(w(([n,s])=>s===null?h({renderNodes:n,flattenedNodes:null,nodeType:s}):this._computeRenderingData(n,s).pipe(p(r=>de(ae({},r),{nodeType:s})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let t=this._nodes.value;for(let n of e.added)t.get(n)?._emitExpansionState(!0);for(let n of e.removed)t.get(n)?._emitExpansionState(!1)}_initializeKeyManager(){let e=I([this._keyManagerNodes,this._nodes]).pipe(p(([n,s])=>n.reduce((r,d)=>{let a=s.get(this._getExpansionKey(d));return a&&r.push(a),r},[]))),t={trackBy:n=>this._getExpansionKey(n.data),skipPredicate:n=>!!n.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,t)}_initializeDataDiffer(){let e=this.trackBy??((t,n)=>this._getExpansionKey(n));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,t=this._dataDiffer,n=this._nodeOutlet.viewContainer,s){let r=t.diff(e);!r&&!this._viewInit||(r?.forEachOperation((d,a,l)=>{if(d.previousIndex==null)this.insertNode(e[l],l,n,s);else if(l==null)n.remove(a);else{let _=n.get(a);n.move(_,l)}}),r?.forEachIdentityChange(d=>{let a=d.item;if(d.currentIndex!=null){let l=n.get(d.currentIndex);l.context.$implicit=a}}),s?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;let n=this._nodeDefs.find(s=>s.when&&s.when(t,e))||this._defaultNodeDef;return n}insertNode(e,t,n,s){let r=this._getLevelAccessor(),d=this._getNodeDef(e,t),a=this._getExpansionKey(e),l=new ne(e);s??=this._parents.get(a)??void 0,r?l.level=r(e):s!==void 0&&this._levels.has(this._getExpansionKey(s))?l.level=this._levels.get(this._getExpansionKey(s))+1:l.level=0,this._levels.set(a,l.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(d.template,l,t),D.mostRecentTreeNode&&(D.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(y(1),v(this._onDestroy)).subscribe(n=>{t.select(...n.map(s=>this._getExpansionKey(s)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(y(1),v(this._onDestroy)).subscribe(n=>{t.deselect(...n.map(s=>this._getExpansionKey(s)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let t=this._getLevelAccessor(),n=this._expansionModel??this.treeControl?.expansionModel;if(!n)return h([]);let s=this._getExpansionKey(e),r=n.changed.pipe(w(a=>a.added.includes(s)?h(!0):a.removed.includes(s)?h(!1):le),$(this.isExpanded(e)));if(t)return I([r,this._flattenedNodes]).pipe(p(([a,l])=>a?this._findChildrenByLevel(t,l,e,1):[]));let d=this._getChildrenAccessor();if(d)return V(d(e)??[]);throw xe()}_findChildrenByLevel(e,t,n,s){let r=this._getExpansionKey(n),d=t.findIndex(E=>this._getExpansionKey(E)===r),a=e(n),l=a+s,_=[];for(let E=d+1;E<t.length;E++){let oe=e(t[E]);if(oe<=a)break;oe<=l&&_.push(t[E])}return _}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let t=this._getAriaSet(e),n=this._getExpansionKey(e);return t.findIndex(s=>this._getExpansionKey(s)===n)+1}_getNodeParent(e){let t=this._parents.get(this._getExpansionKey(e.data));return t&&this._nodes.value.get(this._getExpansionKey(t))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(p(t=>t.reduce((n,s)=>{let r=this._nodes.value.get(this._getExpansionKey(s));return r&&n.push(r),n},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let t=this._nodes.getValue();for(let[,n]of t)if(e.target===n._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return h(this.treeControl.getDescendants(e));if(this.levelAccessor){let t=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return h(t)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(U((t,n)=>(t.push(...n),t),[]));throw xe()}_getAllChildrenRecursively(e){return this.childrenAccessor?V(this.childrenAccessor(e)).pipe(y(1),w(t=>{for(let n of t)this._parents.set(this._getExpansionKey(n),e);return h(...t).pipe(j(n=>Q(h([n]),this._getAllChildrenRecursively(n))))})):h([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let t=this._getExpansionKey(e),n=this._parents.get(t),s=n?this._getExpansionKey(n):null;return this._ariaSets.get(s)??[e]}_findParentForNode(e,t,n){if(!n.length)return null;let s=this._levels.get(this._getExpansionKey(e))??0;for(let r=t-1;r>=0;r--){let d=n[r];if((this._levels.get(this._getExpansionKey(d))??0)<s)return d}return null}_flattenNestedNodesWithExpansion(e,t=0){let n=this._getChildrenAccessor();return n?h(...e).pipe(j(s=>{let r=this._getExpansionKey(s);this._parents.has(r)||this._parents.set(r,null),this._levels.set(r,t);let d=V(n(s));return Q(h([s]),d.pipe(y(1),A(a=>{this._ariaSets.set(r,[...a??[]]);for(let l of a??[]){let _=this._getExpansionKey(l);this._parents.set(_,s),this._levels.set(_,t+1)}}),w(a=>a?this._flattenNestedNodesWithExpansion(a,t+1).pipe(p(l=>this.isExpanded(s)?l:[])):h([]))))}),U((s,r)=>(s.push(...r),s),[])):h([...e])}_computeRenderingData(e,t){if(this.childrenAccessor&&t==="flat")return this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(p(n=>({renderNodes:n,flattenedNodes:n})));if(this.levelAccessor&&t==="nested"){let n=this.levelAccessor;return h(e.filter(s=>n(s)===0)).pipe(p(s=>({renderNodes:s,flattenedNodes:e})),A(({flattenedNodes:s})=>{this._calculateParents(s)}))}else return t==="flat"?h({renderNodes:e,flattenedNodes:e}).pipe(A(({flattenedNodes:n})=>{this._calculateParents(n)})):(this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(p(n=>({renderNodes:e,flattenedNodes:n}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let t=this._getLevelAccessor();if(t){this._parents.clear(),this._ariaSets.clear();for(let n=0;n<e.length;n++){let s=e[n],r=this._getExpansionKey(s);this._levels.set(r,t(s));let d=this._findParentForNode(s,n,e);this._parents.set(r,d);let a=d?this._getExpansionKey(d):null,l=this._ariaSets.get(a)??[];l.splice(n,0,s),this._ariaSets.set(a,l)}}}_forEachExpansionKey(e){let t=[],n=[];this._nodes.value.forEach(s=>{t.push(this._getExpansionKey(s.data)),n.push(this._getDescendants(s.data))}),n.length>0?I(n).pipe(y(1),v(this._onDestroy)).subscribe(s=>{s.forEach(r=>r.forEach(d=>t.push(this._getExpansionKey(d)))),e(t)}):e(t)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["cdk-tree"]],contentQueries:function(t,n,s){if(t&1&&Y(s,H,5),t&2){let r;C(r=M())&&(n._nodeDefs=r)}},viewQuery:function(t,n){if(t&1&&R(K,7),t&2){let s;C(s=M())&&(n._nodeOutlet=s.first)}},hostAttrs:["role","tree",1,"cdk-tree"],hostBindings:function(t,n){t&1&&S("keydown",function(r){return n._sendKeydownToKeyManager(r)})},inputs:{dataSource:"dataSource",treeControl:"treeControl",levelAccessor:"levelAccessor",childrenAccessor:"childrenAccessor",trackBy:"trackBy",expansionKey:"expansionKey"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,n){t&1&&P(0,0)},dependencies:[K],encapsulation:2})}return i})(),D=(()=>{class i{_elementRef=c(B);_tree=c(N);_tabindex=-1;_type="flat";get role(){return"treeitem"}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled;typeaheadLabel;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}activation=new W;expandedChange=new W;static mostRecentTreeNode=null;_destroyed=new T;_dataChanges=new T;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=c(G);constructor(){i.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=Me(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(p(()=>this.isExpanded),ue()).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){i.mostRecentTreeNode===this&&(i.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-tree-node"]],hostAttrs:["role","treeitem",1,"cdk-tree-node"],hostVars:5,hostBindings:function(t,n){t&1&&S("click",function(){return n._setActiveItem()})("focus",function(){return n._focusItem()}),t&2&&(X("tabindex",n._tabindex),q("aria-expanded",n._getAriaExpanded())("aria-level",n.level+1)("aria-posinset",n._getPositionInSet())("aria-setsize",n._getSetSize()))},inputs:{role:"role",isExpandable:[2,"isExpandable","isExpandable",k],isExpanded:"isExpanded",isDisabled:[2,"isDisabled","isDisabled",k],typeaheadLabel:[0,"cdkTreeNodeTypeaheadLabel","typeaheadLabel"]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["cdkTreeNode"]})}return i})();function Me(i){let o=i.parentElement;for(;o&&!ke(o);)o=o.parentElement;return o?o.classList.contains("cdk-nested-tree-node")?m(o.getAttribute("aria-level")):0:-1}function ke(i){let o=i.classList;return!!(o?.contains("cdk-nested-tree-node")||o?.contains("cdk-tree"))}var ie=(()=>{class i extends D{_type="nested";_differs=c(Z);_dataDiffer;_children;nodeOutlet;constructor(){super()}ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy),this._tree._getDirectChildren(this.data).pipe(v(this._destroyed)).subscribe(e=>this.updateChildrenNodes(e)),this.nodeOutlet.changes.pipe(v(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){let t=this._getNodeOutlet();if(e&&(this._children=e),t&&this._children){let n=t.viewContainer;this._tree.renderNodeChanges(this._children,this._dataDiffer,n,this._data)}else this._dataDiffer.diff([])}_clear(){let e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){let e=this.nodeOutlet;return e&&e.find(t=>!t._node||t._node===this)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-nested-tree-node"]],contentQueries:function(t,n,s){if(t&1&&Y(s,K,5),t&2){let r;C(r=M())&&(n.nodeOutlet=r)}},hostAttrs:[1,"cdk-nested-tree-node"],exportAs:["cdkNestedTreeNode"],features:[f([{provide:D,useExisting:i},{provide:F,useExisting:i}]),x]})}return i})(),Ne=/([A-Za-z%]+)$/,se=(()=>{class i{_treeNode=c(D);_tree=c(N);_element=c(B);_dir=c(J,{optional:!0});_currentPadding;_destroyed=new T;indentUnits="px";get level(){return this._level}set level(e){this._setLevelInput(e)}_level;get indent(){return this._indent}set indent(e){this._setIndentInput(e)}_indent=40;constructor(){this._setPadding(),this._dir?.change.pipe(v(this._destroyed)).subscribe(()=>this._setPadding(!0)),this._treeNode._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){let e=(this._treeNode.data&&this._tree._getLevel(this._treeNode.data))??null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){let t=this._paddingIndent();if(t!==this._currentPadding||e){let n=this._element.nativeElement,s=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",r=s==="paddingLeft"?"paddingRight":"paddingLeft";n.style[s]=t||"",n.style[r]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,n="px";if(typeof e=="string"){let s=e.split(Ne);t=s[0],n=s[1]||n}this.indentUnits=n,this._indent=m(t),this._setPadding()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",m],indent:[0,"cdkTreeNodePaddingIndent","indent"]}})}return i})(),re=(()=>{class i{_tree=c(N);_treeNode=c(D);recursive=!1;constructor(){}_toggle(){this.recursive?this._tree.toggleDescendants(this._treeNode.data):this._tree.toggle(this._treeNode.data),this._tree._keyManager.focusItem(this._treeNode)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkTreeNodeToggle",""]],hostAttrs:["tabindex","-1"],hostBindings:function(t,n){t&1&&S("click",function(r){return n._toggle(),r.stopPropagation()})("keydown.Enter",function(r){return n._toggle(),r.preventDefault()})("keydown.Space",function(r){return n._toggle(),r.preventDefault()})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",k]}})}return i})();var ot=(()=>{class i extends H{data;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},features:[f([{provide:H,useExisting:i}]),x]})}return i})(),at=(()=>{class i extends ie{node;get disabled(){return this.isDisabled}set disabled(e){this.isDisabled=e}get tabIndex(){return this.isDisabled?-1:this._tabIndex}set tabIndex(e){this._tabIndex=e}_tabIndex;ngOnInit(){super.ngOnInit()}ngAfterContentInit(){super.ngAfterContentInit()}ngOnDestroy(){super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["mat-nested-tree-node"]],hostAttrs:[1,"mat-nested-tree-node"],inputs:{node:[0,"matNestedTreeNode","node"],disabled:[2,"disabled","disabled",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:m(e)]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["matNestedTreeNode"],features:[f([{provide:ie,useExisting:i},{provide:D,useExisting:i},{provide:F,useExisting:i}]),x]})}return i})(),dt=(()=>{class i extends se{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",m],indent:[0,"matTreeNodePaddingIndent","indent"]},features:[f([{provide:se,useExisting:i}]),x]})}return i})(),De=(()=>{class i{viewContainer=c(L);_node=c(F,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","matTreeNodeOutlet",""]],features:[f([{provide:K,useExisting:i}])]})}return i})(),lt=(()=>{class i extends N{_nodeOutlet=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275cmp=O({type:i,selectors:[["mat-tree"]],viewQuery:function(t,n){if(t&1&&R(De,7),t&2){let s;C(s=M())&&(n._nodeOutlet=s.first)}},hostAttrs:[1,"mat-tree"],exportAs:["matTree"],features:[f([{provide:N,useExisting:i}]),x],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,n){t&1&&P(0,0)},dependencies:[De],styles:[".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}"],encapsulation:2})}return i})(),ct=(()=>{class i extends re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},features:[f([{provide:re,useExisting:i}]),x]})}return i})();var me=class extends ge{get data(){return this._data.value}set data(o){this._data.next(o)}_data=new g([]);connect(o){return ce(o.viewChange,this._data).pipe(p(()=>this.data))}disconnect(){}};export{ve as a,ot as b,at as c,dt as d,De as e,lt as f,ct as g,me as h};
