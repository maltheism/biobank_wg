!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_FilterForm=__webpack_require__(1),_FilterForm2=_interopRequireDefault(_FilterForm),_specimenForm=__webpack_require__(3),_specimenForm2=_interopRequireDefault(_specimenForm),_Tabs=__webpack_require__(5),_columnFormatter=__webpack_require__(6),_columnFormatter2=_interopRequireDefault(_columnFormatter),BiobankIndex=function(_React$Component){function BiobankIndex(props){_classCallCheck(this,BiobankIndex);var _this=_possibleConstructorReturn(this,(BiobankIndex.__proto__||Object.getPrototypeOf(BiobankIndex)).call(this,props));return _this.state={isLoaded:!1,filter:{},isOpen:!1},_this.fetchData=_this.fetchData.bind(_this),_this.updateFilter=_this.updateFilter.bind(_this),_this.resetFilters=_this.resetFilters.bind(_this),_this.toggleModal=_this.toggleModal.bind(_this),_this}return _inherits(BiobankIndex,_React$Component),_createClass(BiobankIndex,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){$.ajax(this.props.DataURL,{method:"GET",dataType:"json",success:function(data){this.setState({Data:data,isLoaded:!0})}.bind(this),error:function(_error){console.error(_error)}})}},{key:"updateFilter",value:function(filter){this.setState({filter:filter})}},{key:"resetFilters",value:function(){this.refs.biobankFilter.clearFilter()}},{key:"toggleModal",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var addSpecimenButton=void 0,specimenForm=void 0,tabList=[{id:"specimens",label:"Specimens"},{id:"containers",label:"Containers"}];return loris.userHasPermission("biobank_write")&&(addSpecimenButton=React.createElement(ButtonElement,{onUserInput:this.toggleModal,label:"Add New Specimen",type:"button"}),specimenForm=React.createElement(_Tabs.Modal,{show:this.state.isOpen,onClose:this.toggleModal},React.createElement(_specimenForm2.default,{DataURL:loris.BaseURL+"/biobank/ajax/FileUpload.php?action=getFormData",action:loris.BaseURL+"/biobank/ajax/FileUpload.php?action=submitSpecimen"}))),React.createElement("div",null,React.createElement(_Tabs.Tabs,{tabs:tabList,defaultTab:"specimens",updateURL:!0},React.createElement(_Tabs.TabPane,{TabId:tabList[0].id},React.createElement(_FilterForm2.default,{Module:"biobank",name:"specimen_filter",id:"specimen_filter_form",ref:"specimenFilter",columns:3,formElements:this.state.Data.form,onUpdate:this.updateFilter,filter:this.state.filter},React.createElement("br",null),addSpecimenButton,React.createElement(ButtonElement,{label:"Clear Filters",type:"reset",onUserInput:this.resetFilters})),React.createElement(StaticDataTable,{Data:this.state.Data.Data,Headers:this.state.Data.Headers,Filter:this.state.filter,getFormattedCell:_columnFormatter2.default})),React.createElement(_Tabs.TabPane,{TabId:tabList[1].id},React.createElement(_FilterForm2.default,{Module:"biobank",name:"container_filter",id:"container_filter_form",ref:"containerFilter",columns:3,formElements:this.state.Data.form,onUpdate:this.updateFilter,filter:this.state.filter},React.createElement("br",null),React.createElement(ButtonElement,{label:"Clear Filters",type:"reset",onUserInput:this.resetFilters})),React.createElement(StaticDataTable,{Data:this.state.Data.Data,Headers:this.state.Data.Headers,Filter:this.state.filter,getFormattedCell:_columnFormatter2.default}))),specimenForm)}}]),BiobankIndex}(React.Component);$(function(){var biobankIndex=React.createElement("div",{className:"page-biobank"},React.createElement(BiobankIndex,{DataURL:loris.BaseURL+"/biobank/?format=json"}));ReactDOM.render(biobankIndex,document.getElementById("lorisworkspace"))})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Panel=__webpack_require__(2),_Panel2=_interopRequireDefault(_Panel),FilterForm=function(_React$Component){function FilterForm(props){_classCallCheck(this,FilterForm);var _this=_possibleConstructorReturn(this,(FilterForm.__proto__||Object.getPrototypeOf(FilterForm)).call(this,props));return _this.clearFilter=_this.clearFilter.bind(_this),_this.getFormChildren=_this.getFormChildren.bind(_this),_this.setFilter=_this.setFilter.bind(_this),_this.onElementUpdate=_this.onElementUpdate.bind(_this),_this.queryString=QueryString.get(),_this}return _inherits(FilterForm,_React$Component),_createClass(FilterForm,[{key:"componentDidMount",value:function(){var filter={},queryString=this.queryString;Object.keys(queryString).forEach(function(key){var filterKey="candidateID"===key?"candID":key;filter[filterKey]={value:queryString[key],exactMatch:!1}}),this.props.onUpdate(filter)}},{key:"clearFilter",value:function(){this.queryString=QueryString.clear(this.props.Module),this.props.onUpdate({})}},{key:"getFormChildren",value:function(){var formChildren=[];return React.Children.forEach(this.props.children,function(child,key){if(React.isValidElement(child)&&"function"==typeof child.type&&child.props.onUserInput){var callbackFunc=child.props.onUserInput,callbackName=callbackFunc.name,elementName=child.type.displayName,queryFieldName="candID"===child.props.name?"candidateID":child.props.name,filterValue=this.queryString[queryFieldName];"onUserInput"===callbackName&&(callbackFunc="ButtonElement"===elementName&&"reset"===child.props.type?this.clearFilter:this.onElementUpdate.bind(null,elementName)),formChildren.push(React.cloneElement(child,{onUserInput:callbackFunc,value:filterValue?filterValue:"",key:key})),this.setFilter(elementName,child.props.name,filterValue)}else formChildren.push(React.cloneElement(child,{key:key}))}.bind(this)),formChildren}},{key:"setFilter",value:function(type,key,value){var filter={};return this.props.filter&&(filter=JSON.parse(JSON.stringify(this.props.filter))),key&&value?(filter[key]={},filter[key].value=value,filter[key].exactMatch="SelectElement"===type):filter&&key&&""===value&&delete filter[key],filter}},{key:"onElementUpdate",value:function(type,fieldName,fieldValue){if("string"==typeof fieldName&&"string"==typeof fieldValue){var queryFieldName="candID"===fieldName?"candidateID":fieldName;this.queryString=QueryString.set(this.queryString,queryFieldName,fieldValue);var filter=this.setFilter(type,fieldName,fieldValue);this.props.onUpdate(filter)}}},{key:"render",value:function(){var formChildren=this.getFormChildren(),formElements=this.props.formElements;return formElements&&Object.keys(formElements).forEach(function(fieldName){var queryFieldName="candID"===fieldName?"candidateID":fieldName;formElements[fieldName].onUserInput=this.onElementUpdate.bind(null,fieldName),formElements[fieldName].value=this.queryString[queryFieldName]}.bind(this)),React.createElement(_Panel2.default,{id:this.props.id,height:this.props.height,title:this.props.title},React.createElement(FormElement,this.props,formChildren))}}]),FilterForm}(React.Component);FilterForm.defaultProps={id:"selection-filter",height:"100%",title:"Selection Filter",onUpdate:function(){console.warn("onUpdate() callback is not set!")}},FilterForm.propTypes={Module:React.PropTypes.string.isRequired,filter:React.PropTypes.object.isRequired,id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string,onUpdate:React.PropTypes.func},exports.default=FilterForm},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Panel=function(_React$Component){function Panel(props){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).call(this,props));return _this.state={collapsed:_this.props.initCollapsed},_this.panelClass=_this.props.initCollapsed?"panel-collapse collapse":"panel-collapse collapse in",_this.toggleCollapsed=_this.toggleCollapsed.bind(_this),_this}return _inherits(Panel,_React$Component),_createClass(Panel,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var glyphClass=this.state.collapsed?"glyphicon pull-right glyphicon-chevron-down":"glyphicon pull-right glyphicon-chevron-up",panelHeading=this.props.title?React.createElement("div",{className:"panel-heading",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#"+this.props.id,style:{cursor:"pointer"}},this.props.title,React.createElement("span",{className:glyphClass})):"";return React.createElement("div",{className:"panel panel-primary"},panelHeading,React.createElement("div",{id:this.props.id,className:this.panelClass,role:"tabpanel"},React.createElement("div",{className:"panel-body",style:{height:this.props.height}},this.props.children)))}}]),Panel}(React.Component);Panel.propTypes={id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string},Panel.defaultProps={initCollapsed:!1,id:"default-panel",height:"100%"},exports.default=Panel},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_ProgressBar=__webpack_require__(4),_ProgressBar2=_interopRequireDefault(_ProgressBar),BiobankSpecimenForm=function(_React$Component){function BiobankSpecimenForm(props){_classCallCheck(this,BiobankSpecimenForm);var _this=_possibleConstructorReturn(this,(BiobankSpecimenForm.__proto__||Object.getPrototypeOf(BiobankSpecimenForm)).call(this,props));return _this.state={Data:{},formData:{},currentSpecimenType:null,currentContainerType:null,specimenResult:null,errorMessage:null,isLoaded:!1,formErrors:{},loadedData:0,specimenProgress:-1},_this.handleSubmit=_this.handleSubmit.bind(_this),_this.validateForm=_this.validateForm.bind(_this),_this.setFormData=_this.setFormData.bind(_this),_this.getSpecimenTypeFields=_this.getSpecimenTypeFields.bind(_this),_this.specimenSubmit=_this.specimenSubmit.bind(_this),_this}return _inherits(BiobankSpecimenForm,_React$Component),_createClass(BiobankSpecimenForm,[{key:"componentDidMount",value:function(){var self=this;$.ajax(this.props.DataURL,{dataType:"json",success:function(data){self.setState({Data:data,isLoaded:!0})},error:function(data,errorCode,errorMsg){console.error(data,errorCode,errorMsg),self.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function(){if(void 0!==this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var specimenTypeFields=this.getSpecimenTypeFields();return React.createElement(FormElement,{name:"biobankSpecimen",fileSpecimen:!0,onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Add New Specimen"),React.createElement("br",null),React.createElement(TextboxElement,{name:"barcode",label:"Barcode",onUserInput:this.setFormData,onUserBlur:this.validateForm,ref:"barcode",required:!0,value:this.state.formData.barcode,hasError:this.state.formErrors.barcode}),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.PSCIDs,onUserInput:this.setFormData,ref:"pscid",required:!0,value:this.state.formData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:!0,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"specimenType",label:"Specimen Type",options:this.state.Data.specimenTypes,onUserInput:this.setFormData,ref:"specimenType",required:!0,value:this.state.formData.specimenType}),specimenTypeFields,React.createElement(SelectElement,{name:"containerType",label:"Container Type",options:this.state.Data.containerTypesPrimary,onUserInput:this.setFormData,ref:"containerType",required:!0,value:this.state.formData.containerType}),React.createElement(SelectElement,{name:"parentContainerType",label:"Parent Container Type",options:this.state.Data.containerTypesNonPrimary,onUserInput:this.setFormData,ref:"parentContainerType",required:!1,value:this.state.formData.parentContainerType}),React.createElement(TextboxElement,{name:"quantity",label:"Quantity"+(this.state.currentContainerType?" ("+this.state.Data.units[this.state.currentContainerType]+")":""),text:this.state.Data.units[this.state.currentContainerType],onUserInput:this.setFormData,onUserBlur:this.validateForm,ref:"quantity",required:!0,value:this.state.formData.quantity,hasError:this.state.formErrors.quantity,errorMessage:"Quantity must be a number that does not exceed "+this.state.Data.capacities[this.state.currentContainerType]+this.state.Data.units[this.state.currentContainerType]+"."}),React.createElement(DateElement,{name:"timeCollect",label:"Collection Time",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"timeCollect",required:!0,value:this.state.formData.timeCollect}),React.createElement(TextareaElement,{name:"notes",label:"Notes",onUserInput:this.setFormData,ref:"notes",value:this.state.formData.notes}),React.createElement(ButtonElement,{label:"Submit"}),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-9 col-sm-offset-3"},React.createElement(_ProgressBar2.default,{value:this.state.specimenProgress}))))}},{key:"validateForm",value:function(formElement,value){var formErrors=this.state.formErrors;"barcode"===formElement&&""!==value&&(/^hello/.test(this.state.formData.barcode)?formErrors.barcode=!1:formErrors.barcode=!0),"quantity"===formElement&&""!==value&&(isNaN(value)||value>this.state.Data.capacities[this.state.currentContainerType]?formErrors.quantity=!0:formErrors.quantity=!1),this.setState({formErrors:formErrors})}},{key:"handleSubmit",value:function(e){e.preventDefault();var formData=this.state.formData,formRefs=this.refs;this.isValidForm(formRefs,formData)&&this.specimenSubmit()}},{key:"specimenSubmit",value:function(){var formData=this.state.formData,formObj=new FormData;for(var key in formData)""!==formData[key]&&formObj.append(key,formData[key]);console.log(formObj),$.ajax({type:"POST",url:this.props.action,data:formObj,cache:!1,contentType:!1,processData:!1,xhr:function(){var xhr=new window.XMLHttpRequest;return xhr}.bind(this),success:function(){var event=new CustomEvent("update-datatable");window.dispatchEvent(event),this.setState({formData:{},specimenProgress:-1}),swal("Specimen Submission Successful!","","success")}.bind(this),error:function(err){console.error(err);var msg=err.responseJSON?err.responseJSON.message:"Specimen error!";this.setState({errorMessage:msg,specimenProgress:-1}),swal(msg,"","error")}.bind(this)})}},{key:"isValidForm",value:function isValidForm(formRefs,formData){var isValidForm=!0,requiredFields={pscid:null,visitLabel:null};return Object.keys(requiredFields).map(function(field){formData[field]?requiredFields[field]=formData[field]:formRefs[field]&&(formRefs[field].props.hasError=!0,isValidForm=!1)}),this.forceUpdate(),isValidForm}},{key:"setFormData",value:function(formElement,value){"pscid"===formElement&&""!==value&&(this.state.Data.visits=this.state.Data.sessionData[this.state.Data.PSCIDs[value]].visits),"specimenType"===formElement&&""!==value&&this.setState({currentSpecimenType:value}),"containerType"===formElement&&""!==value&&this.setState({currentContainerType:value});var formData=this.state.formData;formData[formElement]=value,this.setState({formData:formData})}},{key:"getSpecimenTypeFields",value:function(){var _this2=this;if(this.state.currentSpecimenType){var specimenTypeFieldsObject=this.state.Data.specimenTypeAttributes[this.state.currentSpecimenType],specimenTypeFields=Object.keys(specimenTypeFieldsObject).map(function(attribute){return React.createElement(TextboxElement,{name:attribute,label:attribute,onUserInput:_this2.setFormData,onUserBlur:_this2.validateForm,ref:attribute,required:specimenTypeFieldsObject[attribute],value:_this2.state.formData[attribute]})});return specimenTypeFields}}}]),BiobankSpecimenForm}(React.Component);BiobankSpecimenForm.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired},exports.default=BiobankSpecimenForm},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),ProgressBar=function(_React$Component){function ProgressBar(){return _classCallCheck(this,ProgressBar),_possibleConstructorReturn(this,(ProgressBar.__proto__||Object.getPrototypeOf(ProgressBar)).apply(this,arguments))}return _inherits(ProgressBar,_React$Component),_createClass(ProgressBar,[{key:"render",value:function(){var progressStyle={display:this.props.value<0?"none":"block",backgroundColor:"#d3d3d3",height:"30px",position:"relative"},labelStyle={position:"absolute",top:0,left:0,zIndex:1e3,width:"100%",color:"#fff",textAlign:"center",lineHeight:"30px",fontWeight:"600"};return React.createElement("div",{className:"progress",style:progressStyle},React.createElement("div",{className:"progress-bar progress-bar-striped active",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.props.value,style:{width:this.props.value+"%"}}),React.createElement("span",{style:labelStyle},this.props.value,"%"))}}]),ProgressBar}(React.Component);ProgressBar.propTypes={value:React.PropTypes.number},ProgressBar.defaultProps={value:0},exports.default=ProgressBar},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Tabs=function(_React$Component){function Tabs(props){_classCallCheck(this,Tabs);var _this=_possibleConstructorReturn(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).call(this,props)),hash=window.location.hash,activeTab="";return _this.props.updateURL&&hash?activeTab=hash.substr(1):_this.props.defaultTab?activeTab=_this.props.defaultTab:_this.props.tabs.length>0&&(activeTab=_this.props.tabs[0].id),_this.state={activeTab:activeTab},_this.handleClick=_this.handleClick.bind(_this),_this.getTabs=_this.getTabs.bind(_this),_this.getTabPanes=_this.getTabPanes.bind(_this),_this}return _inherits(Tabs,_React$Component),_createClass(Tabs,[{key:"handleClick",value:function(tabId,e){if(this.setState({activeTab:tabId}),this.props.onTabChange(tabId),this.props.updateURL){var scrollDistance=$("body").scrollTop()||$("html").scrollTop();window.location.hash=e.target.hash,$("html,body").scrollTop(scrollDistance)}}},{key:"getTabs",value:function(){var tabs=this.props.tabs.map(function(tab){var tabClass=this.state.activeTab===tab.id?"active":null,href="#"+tab.id,tabID="tab-"+tab.id;return React.createElement("li",{role:"presentation",className:tabClass,key:tab.id},React.createElement("a",{id:tabID,href:href,role:"tab","data-toggle":"tab",onClick:this.handleClick.bind(null,tab.id)},tab.label))}.bind(this));return tabs}},{key:"getTabPanes",value:function(){var tabPanes=React.Children.map(this.props.children,function(child,key){if(child)return React.cloneElement(child,{activeTab:this.state.activeTab,key:key})}.bind(this));return tabPanes}},{key:"render",value:function(){var tabs=this.getTabs(),tabPanes=this.getTabPanes(),tabStyle={marginLeft:0,marginBottom:"5px"};return React.createElement("div",null,React.createElement("ul",{className:"nav nav-tabs",role:"tablist",style:tabStyle},tabs),React.createElement("div",{className:"tab-content"},tabPanes))}}]),Tabs}(React.Component);Tabs.propTypes={tabs:React.PropTypes.array.isRequired,defaultTab:React.PropTypes.string,updateURL:React.PropTypes.bool},Tabs.defaultProps={onTabChange:function(){},updateURL:!1};var TabPane=function(_React$Component2){function TabPane(){return _classCallCheck(this,TabPane),_possibleConstructorReturn(this,(TabPane.__proto__||Object.getPrototypeOf(TabPane)).apply(this,arguments))}return _inherits(TabPane,_React$Component2),_createClass(TabPane,[{key:"render",value:function(){var classList="tab-pane",title=void 0;return this.props.TabId===this.props.activeTab&&(classList+=" active"),this.props.Title&&(title=React.createElement("h1",null,this.props.Title)),React.createElement("div",{role:"tabpanel",className:classList,id:this.props.TabId},title,this.props.children)}}]),TabPane}(React.Component);TabPane.propTypes={TabId:React.PropTypes.string.isRequired,Title:React.PropTypes.string,activeTab:React.PropTypes.string};var Modal=function(_React$Component3){function Modal(){return _classCallCheck(this,Modal),_possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments))}return _inherits(Modal,_React$Component3),_createClass(Modal,[{key:"render",value:function(){if(!this.props.show)return null;var modalStyle={position:"relative",zIndex:9999,borderRadius:10,maxWidth:1e3,minHeight:300,margin:"0 auto",backgroundColor:"#fff",padding:30},backdropStyle={position:"fixed",zIndex:9998,top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)",padding:50};return React.createElement("div",{style:backdropStyle,onClick:this.props.onClose},React.createElement("div",{style:modalStyle,onClick:function(e){e.stopPropagation()}},this.props.children))}}]),Modal}(React.Component);Modal.propTypes={onClose:React.PropTypes.func.isRequired,show:React.PropTypes.bool,children:React.PropTypes.node},exports.Tabs=Tabs,exports.TabPane=TabPane,exports.Modal=Modal},function(module,exports){"use strict";function formatColumn(column,cell,rowData,rowHeaders){var row={};rowHeaders.forEach(function(header,index){row[header]=rowData[index]},this);var classes=[];if("1"===row["Hide File"]&&classes.push("bg-danger"),classes=classes.join(" "),"Barcode"===column){var specimenURL=loris.BaseURL+"/biobank/specimen/?barcode="+row.Barcode;return React.createElement("td",{className:classes},React.createElement("a",{href:specimenURL},cell))}if("Parent Barcode"===column){var specimenURL=loris.BaseURL+"/biobank/specimen/?barcode="+row["Parent Barcode"];return React.createElement("td",{className:classes},React.createElement("a",{href:specimenURL},cell))}if("Container Barcode"===column){var containerURL=loris.BaseURL+"/biobank/container/?barcode="+row["Container Barcode"];return React.createElement("td",{className:classes},React.createElement("a",{href:containerURL},cell))}return React.createElement("td",{className:classes},cell)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=formatColumn}]);
//# sourceMappingURL=biobankIndex.js.map