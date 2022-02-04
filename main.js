(()=>{"use strict";document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__avatar");var e=document.forms.edit,t=document.forms.add,n=document.forms.place,r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__edit-button"),i=document.forms.add.name,a=document.forms.add.profession,c=document.querySelector(".profile__edit-block"),s={formSelector:".form__fields",inputSelector:".form__field",submitButtonSelector:".form__safe-btn",inactiveButtonClass:"form__safe-btn_unactive",inputErrorClass:"error",errorClass:"form__field_invalid"};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}}])&&u(t.prototype,n),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n,r=t.deleteCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._deleteCard=r,n}return t=a,(n=[{key:"open",value:function(e,t){p(m(a.prototype),"open",this).call(this),this._cardId=t,this._cardElement=e}},{key:"_sendData",value:function(){this._deleteCard(this._cardId,this._cardElement)}},{key:"setEventListeners",value:function(){var e=this;p(m(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._sendData(),p(m(a.prototype),"close",e).call(e)}))}}])&&d(t.prototype,n),a}(l);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n,r,o){var i=o.handleCardClick,a=o.cardDelete,c=o.like,s=o.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=i,this._likes=t.likes.length,this._ownerId=t.owner._id,this._myId=r,this._cardId=t._id,this._cardDelete=a,this._like=c,this._removeLike=s}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"likesCounter",value:function(e){this._likes=e.likes.length,this._data=e,this._updateLikes()}},{key:"_updateLikes",value:function(){this._element.querySelector(".card__like-counter").textContent=this._likes}},{key:"generateCard",value:function(){var e=this;this._element=this._getTemplate(),this._setEventListeners();var t=this._element.querySelector(".card__image");t.src=this._link,t.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._element.querySelector(".card__like-counter").textContent=this._likes,0!==this._likes&&this._data.likes.forEach((function(t){t._id===e._myId&&e._element.querySelector(".card__like").classList.add("card__like_active")}));var n=this._element.querySelector(".card__delete-icon");return this._ownerId!==this._myId&&n.remove(),this._element}},{key:"_handleLikeClick",value:function(){var e=this;0===this._likes?(this._like(this._cardId),this._element.querySelector(".card__like").classList.add("card__like_active")):this._data.likes.find((function(t){return t._id===e._myId}))?(this._removeLike(this._cardId),this._element.querySelector(".card__like").classList.remove("card__like_active")):(this._like(this._cardId),this._element.querySelector(".card__like").classList.add("card__like_active"))}},{key:"_handleDeleteClick",value:function(){this._cardDelete(this._element,this._cardId)}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){t.target.classList.contains("card__delete-icon")?e._handleDeleteClick():t.target.classList.contains("card__like")?e._handleLikeClick():e._handleCardClick(e._name,e._link)}))}}])&&b(t.prototype,n),e}();function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._obj=t,this._button=this._formElement.querySelector(t.submitButtonSelector),this._button.disabled=!0}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._addListenersToForm()}},{key:"_addListenersToForm",value:function(){var e,t=this,n=function(e){if(Array.isArray(e))return g(e)}(e=this._formElement.querySelectorAll(this._obj.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();n.forEach((function(e){t._addListenersToInput(e)})),this._formElement.addEventListener("submit",(function(e){t._handleSubmit(e,n)})),this._formElement.addEventListener("input",(function(e){t._handleFormInput(e)})),this._setSubmitButtonState()}},{key:"_addListenersToInput",value:function(e){var t=this;e.addEventListener("input",(function(e){t._handleFieldValidation(e)}))}},{key:"_handleSubmit",value:function(e,t){e.preventDefault();var n=document.querySelector(".form-new-card__safe-btn");n.disabled=!0,n.classList.add("form__safe-btn_unactive")}},{key:"_handleFormInput",value:function(){this._setSubmitButtonState()}},{key:"_setSubmitButtonState",value:function(){var e=this._formElement.querySelector(this._obj.submitButtonSelector);e.disabled=!this._formElement.checkValidity(),e.classList.toggle(this._obj.inactiveButtonClass,!this._formElement.checkValidity())}},{key:"_handleFieldValidation",value:function(e){var t=e.target;t.setCustomValidity("");var n=document.querySelector("#".concat(t.id,"-").concat(this._obj.inputErrorClass));this._validateLength(t),this._validateValueMissing(t),n.textContent=t.validationMessage,t.classList.toggle(this._obj.errorClass,!t.validity.valid)}},{key:"_validateLength",value:function(e){(e.validity.tooShort||e.validity.tooLong)&&e.setCustomValidity("Введите от ".concat(e.minLength," до ").concat(e.maxLength," символов"))}},{key:"_validateValueMissing",value:function(e){e.validity.valueMissing&&e.setCustomValidity("Заполните поле")}}])&&S(t.prototype,n),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popup.querySelector(".form__fields"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputs=this._popupForm.querySelectorAll(".form__field"),this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){L(I(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;L(I(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&C(t.prototype,n),a}(l);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function U(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imgBlock=document.querySelector(".popup-image__block"),t._imgText=document.querySelector(".popup-image__text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imgBlock.src=e,this._imgBlock.alt=t,this._imgText.textContent=t,D(V(a.prototype),"open",this).call(this)}}])&&T(t.prototype,n),a}(l);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&F(t.prototype,n),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.name,r=t.profession,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._profession.textContent=e.about,this._avatar.src=e.avatar}}])&&N(t.prototype,n),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z="",G=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._options.baseUrl,"/cards"),{headers:this._options.headers}).then(this._checkResponse)}},{key:"getProfileData",value:function(){return fetch("".concat(this._options.baseUrl,"/users/me"),{headers:this._options.headers}).then(this._checkResponse)}},{key:"updateProfileData",value:function(e){return fetch("".concat(this._options.baseUrl,"/users/me"),{headers:this._options.headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.profession})}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){return fetch("".concat(this._options.baseUrl,"/users/me/avatar"),{headers:this._options.headers,method:"PATCH",body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._options.baseUrl,"/cards"),{headers:this._options.headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._options.baseUrl,"/cards/").concat(e),{headers:this._options.headers,method:"DELETE"}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._options.baseUrl,"/cards/").concat(e,"/likes"),{headers:this._options.headers,method:"PUT"}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._options.baseUrl,"/cards/").concat(e,"/likes"),{headers:this._options.headers,method:"DELETE"}).then(this._checkResponse)}}])&&J(t.prototype,n),e}())({baseUrl:"https:mesto.nomoreparties.co/v1/cohort-31",method:"PATCH",headers:{authorization:"70d4c1c2-9a4d-4dea-aa14-db3e8c4e2fed","Content-Type":"application/json"}}),K=new w(s,e),Q=new w(s,t),W=new w(s,n),X=new B(".popup-image"),Y=new H({name:".profile__name",profession:".profile__about",avatar:".profile__avatar"}),Z=new R(".popup-new-card",{submitForm:function(e){ee(!0),G.addCard(e).then((function(e){var t=ae(e);ie.addItem(t),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee(!1)}))}});function ee(e){var t=document.querySelectorAll(".popup");e?t.forEach((function(e){e.classList.contains("popup_opened")&&(e.querySelector(".form__safe-btn").textContent="Сохранение...")})):t.forEach((function(e){e.classList.contains("popup_opened")&&(e.querySelector(".form__safe-btn").textContent="Сохранить")}))}var te=[G.getInitialCards(),G.getProfileData()];Promise.all(te).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z=i._id,ie.renderItems(o.reverse()),Y.setUserInfo(i)})).catch((function(e){return console.log(e)}));var ne=new R(".popup-edit-profile",{submitForm:function(e){ee(!0),G.updateProfileData(e).then((function(e){Y.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee(!1)}))}}),re=new R(".popup-confirmation-edit-profile",{submitForm:function(e){ee(!0),G.updateProfileAvatar(e).then((function(e){Y.setUserInfo(e),re.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee(!1)}))}}),oe=new v(".popup-confirmation",{deleteCard:function(e,t){G.deleteCard(e).then((function(){t.remove()})).catch((function(e){return console(e)}))}}),ie=new M({renderer:function(e){var t=ae(e);ie.addItem(t)}},".cards");function ae(e){var t=new k(e,"#card-item-template",z,{handleCardClick:function(e,t){X.open(t,e)},cardDelete:function(e,t){oe.open(e,t)},like:function(e){G.likeCard(e).then((function(e){t.likesCounter(e)})).catch((function(e){return console.log(e)}))},removeLike:function(e){G.deleteLike(e).then((function(e){t.likesCounter(e)})).catch((function(e){return console.log(e)}))}});return t.generateCard()}X.setEventListeners(),Z.setEventListeners(),r.addEventListener("click",(function(){W.enableValidation(),Z.open()})),ne.setEventListeners(),re.setEventListeners(),o.addEventListener("click",(function(){Q.enableValidation();var e=Y.getUserInfo();i.value=e.name,a.value=e.profession,ne.open()})),oe.setEventListeners(),c.addEventListener("click",(function(){K.enableValidation(),re.open()}))})();