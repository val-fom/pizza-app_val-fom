!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getTime=function(){var e=new Date,t=e.getSeconds().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0");return e.getHours().toString().padStart(2,"0")+":"+n+":"+t},t.parseHTML=function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content},t.insertChildren=function(e,t){return"string"==typeof t?e.insertAdjacentHTML("beforeend",t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.append(t)}):e.append(t),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(10);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(21);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=function(){function e(t){r(this,e),this.props=t||{},this.state={},this.host=null,this.updateState=this.updateState.bind(this)}return u(e,[{key:"componentsStateWillUpdate",value:function(e){}},{key:"updateState",value:function(e){return this.componentsStateWillUpdate(e),this.state=o({},this.state,e),this._render(),this.state}},{key:"update",value:function(e){return this.beforeUpdate(e),this.props=o({},this.props,e),this._render()}},{key:"beforeUpdate",value:function(){}},{key:"_render",value:function(){var e=this.render();return this.host.innerHTML="",(0,i.insertChildren)(this.host,e)}},{key:"render",value:function(){}}]),e}();t.default=a},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(7),u=r(o),i=n(31),a=r(i),c=new a.default(u.default);document.getElementById("root").appendChild(c.host)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),u=r(o),i=n(23),a=r(i),c=n(27),s=r(c);t.default=[{href:"/",Component:u.default},{href:"/login",Component:a.default},{href:"/register",Component:s.default}]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(9);var c=n(0),s=n(2),f=r(s),l=n(15),p=r(l),d=n(3),b=r(d),_=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.host=document.createElement("div"),e.host.classList.add("app__container"),e.header=new f.default,e.main=new p.default,e.footer=new b.default,e}return i(t,e),a(t,[{key:"render",value:function(){return[this.header.update(),this.main.update(),this.footer.update()]}}]),t}(c.Component);t.default=_},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var a=n(1),c=n(0),s=n(12),f=function(e){return e&&e.__esModule?e:{default:e}}(s),l=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("header__container"),e.clock=new f.default,e}return u(t,e),i(t,[{key:"render",value:function(){var e=(0,a.parseHTML)('\n\t\t\t<header class="header">\n\t\t\t\t<div class="header__time" id="time">\n\t\t\t\t</div>\n\t\t\t\t<div class="header__logo">\n\t\t\t\t\t<a href="#/">\n\t\t\t\t\t\t<img class="logo__img" src="img/pizza-logo.png"\n\t\t\t\t\t\t\talt="Pizza app logo">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="header__login">\n\t\t\t\t\t<a href="#/login" class="button login__button">\n\t\t\t\t\t\t<i class="fa fa-sign-in"></i>\n\t\t\t\t\t\tLogin/Signup\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t');return e.getElementById("time").append(this.clock.update()),e}}]),t}(c.Component);t.default=l},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(14);var a=n(1),c=n(0),s=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={currentTime:"00:00:00"},e.host=document.createElement("div"),e.host.classList.add("clock__container"),setInterval(function(){var t=(0,a.getTime)();e.updateState({currentTime:t})},1e3),e}return u(t,e),i(t,[{key:"render",value:function(){return'\n\t\t\t<i class="fa fa-clock-o"></i>\n\t\t\t<time class="time__current-time" id="current-time">\n\t\t\t\t'+this.state.currentTime+"\n\t\t\t</time>\n\t\t"}}]),t}(c.Component);t.default=s},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(17);var a=n(0),c=n(18),s=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("main"),e.host.classList.add("main__container"),e.list=new s.default,e}return u(t,e),i(t,[{key:"render",value:function(){return['<button class="button main__button">+ Add new pizza</button>',this.list.update()]}}]),t}(a.Component);t.default=f},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(20);var a=n(0),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("list__container"),e}return u(t,e),i(t,[{key:"render",value:function(){for(var e=[],t=11;t>=0;t--){e.push('\n\t\t\t\t<article class="list__item">\n\t\t\t\t\t<img src="img/item__pizza_2x.png" alt="" class="item__pic">\n\t\t\t\t\t<time class="item__order-time">10:25:46</time>\n\t\t\t\t\t<h3 class="item__number-in-queue">#1</h3>\n\t\t\t\t\t<time datetime="0h 1m 0s" class="item__eta">ETA: 1min</time>\n\t\t\t\t\t<span class="item__price">$5.00</span>\n\t\t\t\t</article>\n\t\t\t')}return e}}]),t}(a.Component);t.default=c},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(22);var a=n(0),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("footer__container"),e}return u(t,e),i(t,[{key:"render",value:function(){return'\n\t\t\t<footer class="footer">\n\t\t\t\t<address class="footer__address">\n\t\t\t\t\tKottans, Kottans Str. 1,\n\t\t\t\t\t<a href="tel:5778887">tel. 57-788-87</a>\n\t\t\t\t</address>\n\t\t\t\t<span class="footer__copyright">Pizza Manager &copy; 2018</span>\n\t\t\t</footer>\n\t\t'}}]),t}(a.Component);t.default=c},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=n(2),f=r(s),l=n(24),p=r(l),d=n(3),b=r(d),_=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("login__container"),e.header=new f.default,e.loginForm=new p.default,e.footer=new b.default,e}return i(t,e),a(t,[{key:"render",value:function(){return[this.header.update(),this.loginForm.update(),this.footer.update()]}}]),t}(c.Component);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(26);var a=n(0),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("login-form__container"),e}return u(t,e),i(t,[{key:"render",value:function(){return'\n<form class="login-form" method="post">\n\t<label for="username">Username:</label>\n\t<input type="text" class="login-form__name" name="username" id="username" required>\n\t<label for="password">Password:</label>\n\t<input type="password" class="login-form__password" name="password"\n\t\tid="password" required>\n\t<div class="login-form__button-wrapper">\n\t\t<input type="submit" class="button login-form__button button--sign-in"\n\t\t\tvalue="Sign in">\n\t\t<a href="#/register" class="button login-form__button button--sign-up">\n\t\t\tSign up\n\t\t</a>\n\t</div>\n</form>\n\t\t'}}]),t}(a.Component);t.default=c},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=n(2),f=r(s),l=n(28),p=r(l),d=n(3),b=r(d),_=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("register__container"),e.header=new f.default,e.registerForm=new p.default,e.footer=new b.default,e}return i(t,e),a(t,[{key:"render",value:function(){return[this.header.update(),this.registerForm.update(),this.footer.update()]}}]),t}(c.Component);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(29);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(30);var a=n(0),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("login-form__container"),e}return u(t,e),i(t,[{key:"render",value:function(){return'\n<form class="register-form" method="post">\n\t<label for="username">Username:</label>\n\t<input type="text" class="register-form__name" name="username" id="username" required>\n\t<label for="email">Email:</label>\n\t<input type="email" class="register-form__email" name="email" id="email" required>\n\t<label for="password">Password:</label>\n\t<input type="password" class="register-form__password" name="password"\n\t\tid="password" required>\n\t<label for="password-confirm">Confirm password:</label>\n\t<input type="password" class="register-form__password" name="password-confirm"\n\t\tid="password-confirm" required>\n\t<input type="submit" class="button register-form__button button--register"\n\t\tvalue="Sign up">\n</form>\n\t\t'}}]),t}(a.Component);t.default=c},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),c=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeRoute:null,activeComponent:null,routes:e},n.host=document.createElement("div"),n.host.classList.add("router__container"),window.addEventListener("hashchange",function(){n.handleUrlChange(n.path)}),n.handleUrlChange(n.path),n}return u(t,e),i(t,[{key:"handleUrlChange",value:function(e){var t=this.state.routes,n=t.find(function(t){return t.href===e});this.applyRoute(n,e)}},{key:"applyRoute",value:function(e,t){var n=e.Component,r=new n;this.updateState({activeRoute:e,activeComponent:r})}},{key:"render",value:function(){return this.state.activeComponent.update()}},{key:"path",get:function(){return window.location.hash.slice(1)}}]),t}(c.default);t.default=s}]);