webpackJsonp([2],{

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "_emptyParameters", function() { return _emptyParameters; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InvocationHandler", function() { return InvocationHandler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(exports, "autoinject", function() { return autoinject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "invoker", function() { return invoker; });
/* harmony export (binding) */ __webpack_require__.d(exports, "invokeAsFactory", function() { return invokeAsFactory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FactoryInvoker", function() { return FactoryInvoker; });
/* harmony export (binding) */ __webpack_require__.d(exports, "registration", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(exports, "transient", function() { return transient; });
/* harmony export (binding) */ __webpack_require__.d(exports, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TransientRegistration", function() { return TransientRegistration; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SingletonRegistration", function() { return SingletonRegistration; });
/* harmony export (binding) */ __webpack_require__.d(exports, "resolver", function() { return resolver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Strategy", function() { return Strategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StrategyResolver", function() { return StrategyResolver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "All", function() { return All; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Optional", function() { return Optional; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Parent", function() { return Parent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Factory", function() { return Factory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NewInstance", function() { return NewInstance; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getDecoratorDependencies", function() { return getDecoratorDependencies; });
/* harmony export (binding) */ __webpack_require__.d(exports, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(exports, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(exports, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "newInstance", function() { return newInstance; });



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isInjectable(potentialTarget) {
    return !!potentialTarget;
}
function autoinject(potentialTarget) {
    var deco = function (target) {
        if (!target.hasOwnProperty('inject')) {
            target.inject = (__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].paramTypes, target) ||
                _emptyParameters).slice();
            if (target.inject && target.inject.length > 0) {
                if (target.inject[target.inject.length - 1] === Object) {
                    target.inject.splice(-1, 1);
                }
            }
        }
    };
    if (isInjectable(potentialTarget)) {
        return deco(potentialTarget);
    }
    return deco;
}
function inject() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return function (target, _key, descriptor) {
        if (typeof descriptor === 'number') {
            autoinject(target);
            if (rest.length === 1) {
                target.inject[descriptor] = rest[0];
            }
            return;
        }
        if (descriptor) {
            var fn = descriptor.value;
            fn.inject = rest;
        }
        else {
            target.inject = rest;
        }
    };
}

var resolver = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["protocol"].create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
        return 'Resolvers must implement: get(container: Container, key: any): any';
    }
    return true;
});
var Strategy;
(function (Strategy) {
    Strategy[Strategy["instance"] = 0] = "instance";
    Strategy[Strategy["singleton"] = 1] = "singleton";
    Strategy[Strategy["transient"] = 2] = "transient";
    Strategy[Strategy["function"] = 3] = "function";
    Strategy[Strategy["array"] = 4] = "array";
    Strategy[Strategy["alias"] = 5] = "alias";
})(Strategy || (Strategy = {}));
function isStrategy(actual, expected, state) {
    return actual === expected;
}
var StrategyResolver = (function () {
    function StrategyResolver(strategy, state) {
        this.strategy = strategy;
        this.state = state;
    }
    StrategyResolver.prototype.get = function (container, key) {
        if (isStrategy(this.strategy, Strategy.instance, this.state)) {
            return this.state;
        }
        if (isStrategy(this.strategy, Strategy.singleton, this.state)) {
            var singleton = container.invoke(this.state);
            this.state = singleton;
            this.strategy = 0;
            return singleton;
        }
        if (isStrategy(this.strategy, Strategy.transient, this.state)) {
            return container.invoke(this.state);
        }
        if (isStrategy(this.strategy, Strategy.function, this.state)) {
            return this.state(container, key, this);
        }
        if (isStrategy(this.strategy, Strategy.array, this.state)) {
            return this.state[0].get(container, key);
        }
        if (isStrategy(this.strategy, Strategy.alias, this.state)) {
            return container.get(this.state);
        }
        throw new Error('Invalid strategy: ' + this.strategy);
    };
    StrategyResolver = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Number, Object])
    ], StrategyResolver);
    return StrategyResolver;
}());
var Lazy = (function () {
    function Lazy(key) {
        this._key = key;
    }
    Lazy_1 = Lazy;
    Lazy.prototype.get = function (container) {
        var _this = this;
        return function () { return container.get(_this._key); };
    };
    Lazy.of = function (key) {
        return new Lazy_1(key);
    };
    var Lazy_1;
    Lazy = Lazy_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Lazy);
    return Lazy;
}());
var All = (function () {
    function All(key) {
        this._key = key;
    }
    All_1 = All;
    All.prototype.get = function (container) {
        return container.getAll(this._key);
    };
    All.of = function (key) {
        return new All_1(key);
    };
    var All_1;
    All = All_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], All);
    return All;
}());
var Optional = (function () {
    function Optional(key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        this._key = key;
        this._checkParent = checkParent;
    }
    Optional_1 = Optional;
    Optional.prototype.get = function (container) {
        if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
        }
        return null;
    };
    Optional.of = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        return new Optional_1(key, checkParent);
    };
    var Optional_1;
    Optional = Optional_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Boolean])
    ], Optional);
    return Optional;
}());
var Parent = (function () {
    function Parent(key) {
        this._key = key;
    }
    Parent_1 = Parent;
    Parent.prototype.get = function (container) {
        return container.parent ? container.parent.get(this._key) : null;
    };
    Parent.of = function (key) {
        return new Parent_1(key);
    };
    var Parent_1;
    Parent = Parent_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Parent);
    return Parent;
}());
var Factory = (function () {
    function Factory(key) {
        this._key = key;
    }
    Factory_1 = Factory;
    Factory.prototype.get = function (container) {
        var fn = this._key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === Strategy.function) {
            fn = resolver.state;
        }
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return container.invoke(fn, rest);
        };
    };
    Factory.of = function (key) {
        return new Factory_1(key);
    };
    var Factory_1;
    Factory = Factory_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Factory);
    return Factory;
}());
var NewInstance = (function () {
    function NewInstance(key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        this.key = key;
        this.asKey = key;
        this.dynamicDependencies = dynamicDependencies;
    }
    NewInstance_1 = NewInstance;
    NewInstance.prototype.get = function (container) {
        var dynamicDependencies = this.dynamicDependencies.length > 0
            ? this.dynamicDependencies.map(function (dependency) {
                return dependency['protocol:aurelia:resolver']
                    ? dependency.get(container)
                    : container.get(dependency);
            })
            : undefined;
        var fn = this.key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === 3) {
            fn = resolver.state;
        }
        var instance = container.invoke(fn, dynamicDependencies);
        container.registerInstance(this.asKey, instance);
        return instance;
    };
    NewInstance.prototype.as = function (key) {
        this.asKey = key;
        return this;
    };
    NewInstance.of = function (key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        return new (NewInstance_1.bind.apply(NewInstance_1, [void 0, key].concat(dynamicDependencies)))();
    };
    var NewInstance_1;
    NewInstance = NewInstance_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Object])
    ], NewInstance);
    return NewInstance;
}());
function getDecoratorDependencies(target) {
    autoinject(target);
    return target.inject;
}
function lazy(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Lazy.of(keyValue);
    };
}
function all(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = All.of(keyValue);
    };
}
function optional(checkParentOrTarget) {
    if (checkParentOrTarget === void 0) { checkParentOrTarget = true; }
    var deco = function (checkParent) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = Optional.of(inject$$1[index], checkParent);
        };
    };
    if (typeof checkParentOrTarget === 'boolean') {
        return deco(checkParentOrTarget);
    }
    return deco(true);
}
function parent(target, _key, index) {
    var inject$$1 = getDecoratorDependencies(target);
    inject$$1[index] = Parent.of(inject$$1[index]);
}
function factory(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Factory.of(keyValue);
    };
}
function newInstance(asKeyOrTarget) {
    var dynamicDependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dynamicDependencies[_i - 1] = arguments[_i];
    }
    var deco = function (asKey) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = NewInstance.of.apply(NewInstance, [inject$$1[index]].concat(dynamicDependencies));
            if (!!asKey) {
                inject$$1[index].as(asKey);
            }
        };
    };
    if (arguments.length >= 1) {
        return deco(asKeyOrTarget);
    }
    return deco();
}

function validateKey(key) {
    if (key === null || key === undefined) {
        throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
}
var _emptyParameters = Object.freeze([]);
__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].registration = 'aurelia:registration';
__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].invoker = 'aurelia:invoker';
var resolverDecorates = resolver.decorates;
var InvocationHandler = (function () {
    function InvocationHandler(fn, invoker, dependencies) {
        this.fn = fn;
        this.invoker = invoker;
        this.dependencies = dependencies;
    }
    InvocationHandler.prototype.invoke = function (container, dynamicDependencies) {
        return dynamicDependencies !== undefined
            ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies)
            : this.invoker.invoke(container, this.fn, this.dependencies);
    };
    return InvocationHandler;
}());
function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);
    var lookup;
    while (i--) {
        lookup = staticDependencies[i];
        if (lookup === null || lookup === undefined) {
            throw new Error('Constructor Parameter with index ' +
                i +
                ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
        }
        else {
            args[i] = container.get(lookup);
        }
    }
    if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
    }
    return Reflect.construct(fn, args);
}
var classInvoker = {
    invoke: function (container, Type, deps) {
        var instances = deps.map(function (dep) { return container.get(dep); });
        return Reflect.construct(Type, instances);
    },
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
};
function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
        return [];
    }
    if (typeof f.inject === 'function') {
        return f.inject();
    }
    return f.inject;
}
var Container = (function () {
    function Container(configuration) {
        if (configuration === undefined) {
            configuration = {};
        }
        this._configuration = configuration;
        this._onHandlerCreated = configuration.onHandlerCreated;
        this._handlers =
            configuration.handlers || (configuration.handlers = new Map());
        this._resolvers = new Map();
        this.root = this;
        this.parent = null;
    }
    Container.prototype.makeGlobal = function () {
        Container.instance = this;
        return this;
    };
    Container.prototype.setHandlerCreatedCallback = function (onHandlerCreated) {
        this._onHandlerCreated = onHandlerCreated;
        this._configuration.onHandlerCreated = onHandlerCreated;
    };
    Container.prototype.registerInstance = function (key, instance) {
        return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };
    Container.prototype.registerSingleton = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };
    Container.prototype.registerTransient = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };
    Container.prototype.registerHandler = function (key, handler) {
        return this.registerResolver(key, new StrategyResolver(3, handler));
    };
    Container.prototype.registerAlias = function (originalKey, aliasKey) {
        return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };
    Container.prototype.registerResolver = function (key, resolver$$1) {
        validateKey(key);
        var allResolvers = this._resolvers;
        var result = allResolvers.get(key);
        if (result === undefined) {
            allResolvers.set(key, resolver$$1);
        }
        else if (result.strategy === 4) {
            result.state.push(resolver$$1);
        }
        else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver$$1]));
        }
        return resolver$$1;
    };
    Container.prototype.autoRegister = function (key, fn) {
        fn = fn === undefined ? key : fn;
        if (typeof fn === 'function') {
            var registration = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].get(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].registration, fn);
            if (registration === undefined) {
                return this.registerResolver(key, new StrategyResolver(1, fn));
            }
            return registration.registerResolver(this, key, fn);
        }
        return this.registerResolver(key, new StrategyResolver(0, fn));
    };
    Container.prototype.autoRegisterAll = function (fns) {
        var i = fns.length;
        while (i--) {
            this.autoRegister(fns[i]);
        }
    };
    Container.prototype.unregister = function (key) {
        this._resolvers.delete(key);
    };
    Container.prototype.hasResolver = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = false; }
        validateKey(key);
        return (this._resolvers.has(key) ||
            (checkParent &&
                this.parent !== null &&
                this.parent.hasResolver(key, checkParent)));
    };
    Container.prototype.getResolver = function (key) {
        return this._resolvers.get(key);
    };
    Container.prototype.get = function (key) {
        validateKey(key);
        if (key === Container) {
            return this;
        }
        if (resolverDecorates(key)) {
            return key.get(this, key);
        }
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            var registration = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].get(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].registration, key);
            if (registration === undefined) {
                return this.parent._get(key);
            }
            return registration.registerResolver(this, key, key).get(this, key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype._get = function (key) {
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            return this.parent._get(key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype.getAll = function (key) {
        validateKey(key);
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return _emptyParameters;
            }
            return this.parent.getAll(key);
        }
        if (resolver$$1.strategy === 4) {
            var state = resolver$$1.state;
            var i = state.length;
            var results = new Array(i);
            while (i--) {
                results[i] = state[i].get(this, key);
            }
            return results;
        }
        return [resolver$$1.get(this, key)];
    };
    Container.prototype.createChild = function () {
        var child = new Container(this._configuration);
        child.root = this.root;
        child.parent = this;
        return child;
    };
    Container.prototype.invoke = function (fn, dynamicDependencies) {
        try {
            var handler = this._handlers.get(fn);
            if (handler === undefined) {
                handler = this._createInvocationHandler(fn);
                this._handlers.set(fn, handler);
            }
            return handler.invoke(this, dynamicDependencies);
        }
        catch (e) {
            throw new __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["AggregateError"]("Error invoking " + fn.name + ". Check the inner error for details.", e, true);
        }
    };
    Container.prototype._createInvocationHandler = function (fn) {
        var dependencies;
        if (fn.inject === undefined) {
            dependencies =
                __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].paramTypes, fn) || _emptyParameters;
        }
        else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
                dependencies.push.apply(dependencies, getDependencies(ctor));
                ctor = Object.getPrototypeOf(ctor);
            }
        }
        var invoker = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].invoker, fn) || classInvoker;
        var handler = new InvocationHandler(fn, invoker, dependencies);
        return this._onHandlerCreated !== undefined
            ? this._onHandlerCreated(handler)
            : handler;
    };
    return Container;
}());

function invoker(value) {
    return function (target) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].invoker, value, target);
    };
}
function invokeAsFactory(potentialTarget) {
    var deco = function (target) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].invoker, FactoryInvoker.instance, target);
    };
    return potentialTarget ? deco(potentialTarget) : deco;
}
var FactoryInvoker = (function () {
    function FactoryInvoker() {
    }
    FactoryInvoker.prototype.invoke = function (container, fn, dependencies) {
        var i = dependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(dependencies[i]);
        }
        return fn.apply(undefined, args);
    };
    FactoryInvoker.prototype.invokeWithDynamicDependencies = function (container, fn, staticDependencies, dynamicDependencies) {
        var i = staticDependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(staticDependencies[i]);
        }
        if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
        }
        return fn.apply(undefined, args);
    };
    return FactoryInvoker;
}());
FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
    return function (target) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["metadata"].registration, value, target);
    };
}
function transient(key) {
    return registration(new TransientRegistration(key));
}
function singleton(keyOrRegisterInChild, registerInChild) {
    if (registerInChild === void 0) { registerInChild = false; }
    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}
var TransientRegistration = (function () {
    function TransientRegistration(key) {
        this._key = key;
    }
    TransientRegistration.prototype.registerResolver = function (container, key, fn) {
        var existingResolver = container.getResolver(this._key || key);
        return existingResolver === undefined
            ? container.registerTransient((this._key || key), fn)
            : existingResolver;
    };
    return TransientRegistration;
}());
var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild, registerInChild) {
        if (registerInChild === void 0) { registerInChild = false; }
        if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
        }
        else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
        }
    }
    SingletonRegistration.prototype.registerResolver = function (container, key, fn) {
        var targetContainer = this._registerInChild ? container : container.root;
        var existingResolver = targetContainer.getResolver(this._key || key);
        return existingResolver === undefined
            ? targetContainer.registerSingleton(this._key || key, fn)
            : existingResolver;
    };
    return SingletonRegistration;
}());




/***/ },

/***/ 1379:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(93);
__webpack_require__(1);
__webpack_require__("aurelia-event-aggregator");
__webpack_require__("aurelia-framework");
__webpack_require__(228);
__webpack_require__("aurelia-history-browser");
__webpack_require__("aurelia-loader");
__webpack_require__("aurelia-loader-webpack");
__webpack_require__(63);
__webpack_require__("aurelia-logging-console");
__webpack_require__(53);
__webpack_require__(6);
__webpack_require__("aurelia-route-recognizer");
__webpack_require__("aurelia-router");
__webpack_require__(142);
__webpack_require__(44);
__webpack_require__("aurelia-templating-binding");
__webpack_require__("aurelia-templating-router");
module.exports = __webpack_require__("aurelia-templating-resources");


/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "TaskQueue", function() { return TaskQueue; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var stackSeparator = '\nEnqueued in TaskQueue by:\n';
var microStackSeparator = '\nEnqueued in MicroTaskQueue by:\n';

function makeRequestFlushFromMutationObserver(flush) {
  var observer = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["DOM"].createMutationObserver(flush);
  var val = 'a';
  var node = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["DOM"].createTextNode('a');
  var values = Object.create(null);
  values.a = 'b';
  values.b = 'a';
  observer.observe(node, { characterData: true });
  return function requestFlush() {
    node.data = val = values[val];
  };
}

function makeRequestFlushFromTimer(flush) {
  return function requestFlush() {
    var timeoutHandle = setTimeout(handleFlushTimer, 0);

    var intervalHandle = setInterval(handleFlushTimer, 50);
    function handleFlushTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      flush();
    }
  };
}

function onError(error, task, longStacks) {
  if (longStacks && task.stack && (typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error !== null) {
    error.stack = filterFlushStack(error.stack) + task.stack;
  }

  if ('onError' in task) {
    task.onError(error);
  } else {
    setTimeout(function () {
      throw error;
    }, 0);
  }
}

var TaskQueue = function () {
  function TaskQueue() {
    var _this = this;

    

    this.flushing = false;
    this.longStacks = false;

    this.microTaskQueue = [];
    this.microTaskQueueCapacity = 1024;
    this.taskQueue = [];

    if (__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["FEATURE"].mutationObserver) {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
        return _this.flushMicroTaskQueue();
      });
    } else {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushMicroTaskQueue();
      });
    }

    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
      return _this.flushTaskQueue();
    });
  }

  TaskQueue.prototype._flushQueue = function _flushQueue(queue, capacity) {
    var index = 0;
    var task = void 0;

    try {
      this.flushing = true;
      while (index < queue.length) {
        task = queue[index];
        if (this.longStacks) {
          this.stack = typeof task.stack === 'string' ? task.stack : undefined;
        }
        task.call();
        index++;

        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }

          queue.length -= index;
          index = 0;
        }
      }
    } catch (error) {
      onError(error, task, this.longStacks);
    } finally {
      this.flushing = false;
    }
  };

  TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
    if (this.microTaskQueue.length < 1) {
      this.requestFlushMicroTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(microStackSeparator);
    }

    this.microTaskQueue.push(task);
  };

  TaskQueue.prototype.queueTask = function queueTask(task) {
    if (this.taskQueue.length < 1) {
      this.requestFlushTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(stackSeparator);
    }

    this.taskQueue.push(task);
  };

  TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
    var queue = this.taskQueue;
    this.taskQueue = [];
    this._flushQueue(queue, Number.MAX_VALUE);
  };

  TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
    var queue = this.microTaskQueue;
    this._flushQueue(queue, this.microTaskQueueCapacity);
    queue.length = 0;
  };

  TaskQueue.prototype.prepareQueueStack = function prepareQueueStack(separator) {
    var stack = separator + filterQueueStack(captureStack());

    if (typeof this.stack === 'string') {
      stack = filterFlushStack(stack) + this.stack;
    }

    return stack;
  };

  return TaskQueue;
}();

function captureStack() {
  var error = new Error();

  if (error.stack) {
    return error.stack;
  }

  try {
    throw error;
  } catch (e) {
    return e.stack;
  }
}

function filterQueueStack(stack) {
  return stack.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, '');
}

function filterFlushStack(stack) {
  var index = stack.lastIndexOf('flushMicroTaskQueue');

  if (index < 0) {
    index = stack.lastIndexOf('flushTaskQueue');
    if (index < 0) {
      return stack;
    }
  }

  index = stack.lastIndexOf('\n', index);

  return index < 0 ? stack : stack.substr(0, index);
}

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "History", function() { return History; });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  History.prototype.getHistoryIndex = function getHistoryIndex() {
    mi('getHistoryIndex');
  };

  History.prototype.go = function go(movement) {
    mi('go');
  };

  return History;
}();

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__ = __webpack_require__("aurelia-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aurelia_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_task_queue__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "animationEvent", function() { return animationEvent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Animator", function() { return Animator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CompositionTransactionNotifier", function() { return CompositionTransactionNotifier; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CompositionTransactionOwnershipToken", function() { return CompositionTransactionOwnershipToken; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CompositionTransaction", function() { return CompositionTransaction; });
/* harmony export (immutable) */ exports["_hyphenate"] = _hyphenate;
/* harmony export (immutable) */ exports["_isAllWhitespace"] = _isAllWhitespace;
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewEngineHooksResource", function() { return ViewEngineHooksResource; });
/* harmony export (immutable) */ exports["viewEngineHooks"] = viewEngineHooks;
/* harmony export (binding) */ __webpack_require__.d(exports, "ElementEvents", function() { return ElementEvents; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ResourceLoadContext", function() { return ResourceLoadContext; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewCompileInstruction", function() { return ViewCompileInstruction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BehaviorInstruction", function() { return BehaviorInstruction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TargetInstruction", function() { return TargetInstruction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "viewStrategy", function() { return viewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RelativeViewStrategy", function() { return RelativeViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ConventionalViewStrategy", function() { return ConventionalViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NoViewStrategy", function() { return NoViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TemplateRegistryViewStrategy", function() { return TemplateRegistryViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineViewStrategy", function() { return InlineViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StaticViewStrategy", function() { return StaticViewStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewLocator", function() { return ViewLocator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingLanguage", function() { return BindingLanguage; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SlotCustomAttribute", function() { return SlotCustomAttribute; });
/* harmony export (binding) */ __webpack_require__.d(exports, "PassThroughSlot", function() { return PassThroughSlot; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ShadowSlot", function() { return ShadowSlot; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ShadowDOM", function() { return ShadowDOM; });
/* harmony export (immutable) */ exports["validateBehaviorName"] = validateBehaviorName;
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewResources", function() { return ViewResources; });
/* harmony export (binding) */ __webpack_require__.d(exports, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewSlot", function() { return ViewSlot; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BoundViewFactory", function() { return BoundViewFactory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewFactory", function() { return ViewFactory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewCompiler", function() { return ViewCompiler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ResourceModule", function() { return ResourceModule; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ResourceDescription", function() { return ResourceDescription; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ModuleAnalyzer", function() { return ModuleAnalyzer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewEngine", function() { return ViewEngine; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BehaviorPropertyObserver", function() { return BehaviorPropertyObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindableProperty", function() { return BindableProperty; });
/* harmony export (binding) */ __webpack_require__.d(exports, "HtmlBehaviorResource", function() { return HtmlBehaviorResource; });
/* harmony export (immutable) */ exports["children"] = children;
/* harmony export (immutable) */ exports["child"] = child;
/* harmony export (binding) */ __webpack_require__.d(exports, "SwapStrategies", function() { return SwapStrategies; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CompositionEngine", function() { return CompositionEngine; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ElementConfigResource", function() { return ElementConfigResource; });
/* harmony export (immutable) */ exports["resource"] = resource;
/* harmony export (immutable) */ exports["behavior"] = behavior;
/* harmony export (immutable) */ exports["customElement"] = customElement;
/* harmony export (immutable) */ exports["customAttribute"] = customAttribute;
/* harmony export (immutable) */ exports["templateController"] = templateController;
/* harmony export (immutable) */ exports["bindable"] = bindable;
/* harmony export (immutable) */ exports["dynamicOptions"] = dynamicOptions;
/* harmony export (immutable) */ exports["useShadowDOM"] = useShadowDOM;
/* harmony export (immutable) */ exports["processAttributes"] = processAttributes;
/* harmony export (immutable) */ exports["processContent"] = processContent;
/* harmony export (immutable) */ exports["containerless"] = containerless;
/* harmony export (immutable) */ exports["useViewStrategy"] = useViewStrategy;
/* harmony export (immutable) */ exports["useView"] = useView;
/* harmony export (immutable) */ exports["inlineView"] = inlineView;
/* harmony export (immutable) */ exports["noView"] = noView;
/* harmony export (immutable) */ exports["view"] = view;
/* harmony export (immutable) */ exports["elementConfig"] = elementConfig;
/* harmony export (immutable) */ exports["viewResources"] = viewResources;
/* harmony export (binding) */ __webpack_require__.d(exports, "TemplatingEngine", function() { return TemplatingEngine; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp, _class2, _temp2, _dec, _class3, _dec2, _class4, _dec3, _class5, _dec4, _class6, _dec5, _class7, _dec6, _class8, _class9, _temp3, _class10, _temp4, _class12, _class14, _temp5, _dec7, _class15, _dec8, _class16, _dec9, _class17;












var animationEvent = {
  enterBegin: 'animation:enter:begin',
  enterActive: 'animation:enter:active',
  enterDone: 'animation:enter:done',
  enterTimeout: 'animation:enter:timeout',

  leaveBegin: 'animation:leave:begin',
  leaveActive: 'animation:leave:active',
  leaveDone: 'animation:leave:done',
  leaveTimeout: 'animation:leave:timeout',

  staggerNext: 'animation:stagger:next',

  removeClassBegin: 'animation:remove-class:begin',
  removeClassActive: 'animation:remove-class:active',
  removeClassDone: 'animation:remove-class:done',
  removeClassTimeout: 'animation:remove-class:timeout',

  addClassBegin: 'animation:add-class:begin',
  addClassActive: 'animation:add-class:active',
  addClassDone: 'animation:add-class:done',
  addClassTimeout: 'animation:add-class:timeout',

  animateBegin: 'animation:animate:begin',
  animateActive: 'animation:animate:active',
  animateDone: 'animation:animate:done',
  animateTimeout: 'animation:animate:timeout',

  sequenceBegin: 'animation:sequence:begin',
  sequenceDone: 'animation:sequence:done'
};

var Animator = function () {
  function Animator() {
    
  }

  Animator.prototype.enter = function enter(element) {
    return Promise.resolve(false);
  };

  Animator.prototype.leave = function leave(element) {
    return Promise.resolve(false);
  };

  Animator.prototype.removeClass = function removeClass(element, className) {
    element.classList.remove(className);
    return Promise.resolve(false);
  };

  Animator.prototype.addClass = function addClass(element, className) {
    element.classList.add(className);
    return Promise.resolve(false);
  };

  Animator.prototype.animate = function animate(element, className) {
    return Promise.resolve(false);
  };

  Animator.prototype.runSequence = function runSequence(animations) {};

  Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

  Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

  return Animator;
}();

var CompositionTransactionNotifier = function () {
  function CompositionTransactionNotifier(owner) {
    

    this.owner = owner;
    this.owner._compositionCount++;
  }

  CompositionTransactionNotifier.prototype.done = function done() {
    this.owner._compositionCount--;
    this.owner._tryCompleteTransaction();
  };

  return CompositionTransactionNotifier;
}();

var CompositionTransactionOwnershipToken = function () {
  function CompositionTransactionOwnershipToken(owner) {
    

    this.owner = owner;
    this.owner._ownershipToken = this;
    this.thenable = this._createThenable();
  }

  CompositionTransactionOwnershipToken.prototype.waitForCompositionComplete = function waitForCompositionComplete() {
    this.owner._tryCompleteTransaction();
    return this.thenable;
  };

  CompositionTransactionOwnershipToken.prototype.resolve = function resolve() {
    this._resolveCallback();
  };

  CompositionTransactionOwnershipToken.prototype._createThenable = function _createThenable() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this._resolveCallback = resolve;
    });
  };

  return CompositionTransactionOwnershipToken;
}();

var CompositionTransaction = function () {
  function CompositionTransaction() {
    

    this._ownershipToken = null;
    this._compositionCount = 0;
  }

  CompositionTransaction.prototype.tryCapture = function tryCapture() {
    return this._ownershipToken === null ? new CompositionTransactionOwnershipToken(this) : null;
  };

  CompositionTransaction.prototype.enlist = function enlist() {
    return new CompositionTransactionNotifier(this);
  };

  CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
    if (this._compositionCount <= 0) {
      this._compositionCount = 0;

      if (this._ownershipToken !== null) {
        var token = this._ownershipToken;
        this._ownershipToken = null;
        token.resolve();
      }
    }
  };

  return CompositionTransaction;
}();

var capitalMatcher = /([A-Z])/g;

function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

function _isAllWhitespace(node) {
  return !(node.auInterpolationTarget || /[^\t\n\r ]/.test(node.textContent));
}

var ViewEngineHooksResource = function () {
  function ViewEngineHooksResource() {
    
  }

  ViewEngineHooksResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  ViewEngineHooksResource.prototype.register = function register(registry, name) {
    registry.registerViewEngineHooks(this.instance);
  };

  ViewEngineHooksResource.prototype.load = function load(container, target) {};

  ViewEngineHooksResource.convention = function convention(name) {
    if (name.endsWith('ViewEngineHooks')) {
      return new ViewEngineHooksResource();
    }
  };

  return ViewEngineHooksResource;
}();

function viewEngineHooks(target) {
  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, new ViewEngineHooksResource(), t);
  };

  return target ? deco(target) : deco;
}

var ElementEvents = (_temp = _class = function () {
  function ElementEvents(element) {
    

    this.element = element;
    this.subscriptions = {};
  }

  ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
    this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
    this.subscriptions[handler.eventName].push(handler);
  };

  ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
    var index = void 0;
    var subscriptions = this.subscriptions[handler.eventName];
    if (subscriptions) {
      index = subscriptions.indexOf(handler);
      if (index > -1) {
        subscriptions.splice(index, 1);
      }
    }
    return handler;
  };

  ElementEvents.prototype.publish = function publish(eventName) {
    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var event = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
    this.element.dispatchEvent(event);
  };

  ElementEvents.prototype.subscribe = function subscribe(eventName, handler, captureOrOptions) {
    if (typeof handler === 'function') {
      if (captureOrOptions === undefined) {
        captureOrOptions = ElementEvents.defaultListenerOptions;
      }
      var eventHandler = new EventHandlerImpl(this, eventName, handler, captureOrOptions, false);
      return eventHandler;
    }

    return undefined;
  };

  ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler, captureOrOptions) {
    if (typeof handler === 'function') {
      if (captureOrOptions === undefined) {
        captureOrOptions = ElementEvents.defaultListenerOptions;
      }
      var eventHandler = new EventHandlerImpl(this, eventName, handler, captureOrOptions, true);
      return eventHandler;
    }

    return undefined;
  };

  ElementEvents.prototype.dispose = function dispose(eventName) {
    if (eventName && typeof eventName === 'string') {
      var subscriptions = this.subscriptions[eventName];
      if (subscriptions) {
        while (subscriptions.length) {
          var subscription = subscriptions.pop();
          if (subscription) {
            subscription.dispose();
          }
        }
      }
    } else {
      this.disposeAll();
    }
  };

  ElementEvents.prototype.disposeAll = function disposeAll() {
    for (var _key in this.subscriptions) {
      this.dispose(_key);
    }
  };

  return ElementEvents;
}(), _class.defaultListenerOptions = true, _temp);

var EventHandlerImpl = function () {
  function EventHandlerImpl(owner, eventName, handler, captureOrOptions, once) {
    

    this.owner = owner;
    this.eventName = eventName;
    this.handler = handler;

    this.capture = typeof captureOrOptions === 'boolean' ? captureOrOptions : captureOrOptions.capture;
    this.bubbles = !this.capture;
    this.captureOrOptions = captureOrOptions;
    this.once = once;
    owner.element.addEventListener(eventName, this, captureOrOptions);
    owner._enqueueHandler(this);
  }

  EventHandlerImpl.prototype.handleEvent = function handleEvent(e) {
    var fn = this.handler;
    fn(e);
    if (this.once) {
      this.dispose();
    }
  };

  EventHandlerImpl.prototype.dispose = function dispose() {
    this.owner.element.removeEventListener(this.eventName, this, this.captureOrOptions);
    this.owner._dequeueHandler(this);
    this.owner = this.handler = null;
  };

  return EventHandlerImpl;
}();

var ResourceLoadContext = function () {
  function ResourceLoadContext() {
    

    this.dependencies = {};
  }

  ResourceLoadContext.prototype.addDependency = function addDependency(url) {
    this.dependencies[url] = true;
  };

  ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
    return url in this.dependencies;
  };

  return ResourceLoadContext;
}();

var ViewCompileInstruction = function ViewCompileInstruction() {
  var targetShadowDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var compileSurrogate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  

  this.targetShadowDOM = targetShadowDOM;
  this.compileSurrogate = compileSurrogate;
  this.associatedModuleId = null;
};

ViewCompileInstruction.normal = new ViewCompileInstruction();

var BehaviorInstruction = function () {
  function BehaviorInstruction() {
    
  }

  BehaviorInstruction.enhance = function enhance() {
    var instruction = new BehaviorInstruction();
    instruction.enhance = true;
    return instruction;
  };

  BehaviorInstruction.unitTest = function unitTest(type, attributes) {
    var instruction = new BehaviorInstruction();
    instruction.type = type;
    instruction.attributes = attributes || {};
    return instruction;
  };

  BehaviorInstruction.element = function element(node, type) {
    var instruction = new BehaviorInstruction();
    instruction.type = type;
    instruction.attributes = {};
    instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
    instruction.initiatedByBehavior = true;
    return instruction;
  };

  BehaviorInstruction.attribute = function attribute(attrName, type) {
    var instruction = new BehaviorInstruction();
    instruction.attrName = attrName;
    instruction.type = type || null;
    instruction.attributes = {};
    return instruction;
  };

  BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
    var instruction = new BehaviorInstruction();
    instruction.host = host;
    instruction.viewModel = viewModel;
    instruction.viewFactory = viewFactory;
    instruction.inheritBindingContext = true;
    return instruction;
  };

  return BehaviorInstruction;
}();

var biProto = BehaviorInstruction.prototype;
biProto.initiatedByBehavior = false;
biProto.enhance = false;
biProto.partReplacements = null;
biProto.viewFactory = null;
biProto.originalAttrName = null;
biProto.skipContentProcessing = false;
biProto.contentFactory = null;
biProto.viewModel = null;
biProto.anchorIsContainer = false;
biProto.host = null;
biProto.attributes = null;
biProto.type = null;
biProto.attrName = null;
biProto.inheritBindingContext = false;

BehaviorInstruction.normal = new BehaviorInstruction();

var TargetInstruction = (_temp2 = _class2 = function () {
  function TargetInstruction() {
    
  }

  TargetInstruction.shadowSlot = function shadowSlot(parentInjectorId) {
    var instruction = new TargetInstruction();
    instruction.parentInjectorId = parentInjectorId;
    instruction.shadowSlot = true;
    return instruction;
  };

  TargetInstruction.contentExpression = function contentExpression(expression) {
    var instruction = new TargetInstruction();
    instruction.contentExpression = expression;
    return instruction;
  };

  TargetInstruction.letElement = function letElement(expressions) {
    var instruction = new TargetInstruction();
    instruction.expressions = expressions;
    instruction.letElement = true;
    return instruction;
  };

  TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
    var instruction = new TargetInstruction();
    instruction.parentInjectorId = parentInjectorId;
    instruction.expressions = TargetInstruction.noExpressions;
    instruction.behaviorInstructions = [liftingInstruction];
    instruction.viewFactory = liftingInstruction.viewFactory;
    instruction.providers = [liftingInstruction.type.target];
    instruction.lifting = true;
    return instruction;
  };

  TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
    var instruction = new TargetInstruction();
    instruction.injectorId = injectorId;
    instruction.parentInjectorId = parentInjectorId;
    instruction.providers = providers;
    instruction.behaviorInstructions = behaviorInstructions;
    instruction.expressions = expressions;
    instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
    instruction.elementInstruction = elementInstruction;
    return instruction;
  };

  TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
    var instruction = new TargetInstruction();
    instruction.expressions = expressions;
    instruction.behaviorInstructions = behaviorInstructions;
    instruction.providers = providers;
    instruction.values = values;
    return instruction;
  };

  return TargetInstruction;
}(), _class2.noExpressions = Object.freeze([]), _temp2);

var tiProto = TargetInstruction.prototype;

tiProto.injectorId = null;
tiProto.parentInjectorId = null;

tiProto.shadowSlot = false;
tiProto.slotName = null;
tiProto.slotFallbackFactory = null;

tiProto.contentExpression = null;
tiProto.letElement = false;

tiProto.expressions = null;
tiProto.expressions = null;
tiProto.providers = null;

tiProto.viewFactory = null;

tiProto.anchorIsContainer = false;
tiProto.elementInstruction = null;
tiProto.lifting = false;

tiProto.values = null;

var viewStrategy = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["protocol"].create('aurelia:view-strategy', {
  validate: function validate(target) {
    if (!(typeof target.loadViewFactory === 'function')) {
      return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
    }

    return true;
  },
  compose: function compose(target) {
    if (!(typeof target.makeRelativeTo === 'function')) {
      target.makeRelativeTo = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["PLATFORM"].noop;
    }
  }
});

var RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class3 = function () {
  function RelativeViewStrategy(path) {
    

    this.path = path;
    this.absolutePath = null;
  }

  RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    if (this.absolutePath === null && this.moduleId) {
      this.absolutePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_path__["relativeToFile"])(this.path, this.moduleId);
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext, target);
  };

  RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
    if (this.absolutePath === null) {
      this.absolutePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_path__["relativeToFile"])(this.path, file);
    }
  };

  return RelativeViewStrategy;
}()) || _class3);

var ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class4 = function () {
  function ConventionalViewStrategy(viewLocator, origin) {
    

    this.moduleId = origin.moduleId;
    this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
  }

  ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext, target);
  };

  return ConventionalViewStrategy;
}()) || _class4);

var NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class5 = function () {
  function NoViewStrategy(dependencies, dependencyBaseUrl) {
    

    this.dependencies = dependencies || null;
    this.dependencyBaseUrl = dependencyBaseUrl || '';
  }

  NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;
    var dependencies = this.dependencies;

    if (entry && entry.factoryIsReady) {
      return Promise.resolve(null);
    }

    this.entry = entry = new __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["TemplateRegistryEntry"](this.moduleId || this.dependencyBaseUrl);

    entry.dependencies = [];
    entry.templateIsLoaded = true;

    if (dependencies !== null) {
      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
        var current = dependencies[i];

        if (typeof current === 'string' || typeof current === 'function') {
          entry.addDependency(current);
        } else {
          entry.addDependency(current.from, current.as);
        }
      }
    }

    compileInstruction.associatedModuleId = this.moduleId;

    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return NoViewStrategy;
}()) || _class5);

var TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class6 = function () {
  function TemplateRegistryViewStrategy(moduleId, entry) {
    

    this.moduleId = moduleId;
    this.entry = entry;
  }

  TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;

    if (entry.factoryIsReady) {
      return Promise.resolve(entry.factory);
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return TemplateRegistryViewStrategy;
}()) || _class6);

var InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class7 = function () {
  function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
    

    this.markup = markup;
    this.dependencies = dependencies || null;
    this.dependencyBaseUrl = dependencyBaseUrl || '';
  }

  InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;
    var dependencies = this.dependencies;

    if (entry && entry.factoryIsReady) {
      return Promise.resolve(entry.factory);
    }

    this.entry = entry = new __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["TemplateRegistryEntry"](this.moduleId || this.dependencyBaseUrl);
    entry.template = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createTemplateFromMarkup(this.markup);

    if (dependencies !== null) {
      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
        var current = dependencies[i];

        if (typeof current === 'string' || typeof current === 'function') {
          entry.addDependency(current);
        } else {
          entry.addDependency(current.from, current.as);
        }
      }
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return InlineViewStrategy;
}()) || _class7);

var StaticViewStrategy = (_dec6 = viewStrategy(), _dec6(_class8 = function () {
  function StaticViewStrategy(config) {
    

    if (typeof config === 'string' || config instanceof __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element && config.tagName === 'TEMPLATE') {
      config = {
        template: config
      };
    }
    this.template = config.template;
    this.dependencies = config.dependencies || [];
    this.factoryIsReady = false;
    this.onReady = null;
    this.moduleId = 'undefined';
  }

  StaticViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var _this2 = this;

    if (this.factoryIsReady) {
      return Promise.resolve(this.factory);
    }
    var deps = this.dependencies;
    deps = typeof deps === 'function' ? deps() : deps;
    deps = deps ? deps : [];
    deps = Array.isArray(deps) ? deps : [deps];

    return Promise.all(deps).then(function (dependencies) {
      var container = viewEngine.container;
      var appResources = viewEngine.appResources;
      var viewCompiler = viewEngine.viewCompiler;
      var viewResources = new ViewResources(appResources);

      var resource = void 0;
      var elDeps = [];

      if (target) {
        viewResources.autoRegister(container, target);
      }

      for (var _iterator = dependencies, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var dep = _ref;

        if (typeof dep === 'function') {
          resource = viewResources.autoRegister(container, dep);
          if (resource.elementName !== null) {
            elDeps.push(resource);
          }
        } else if (dep && (typeof dep === 'undefined' ? 'undefined' : _typeof(dep)) === 'object') {
          for (var _key2 in dep) {
            var exported = dep[_key2];
            if (typeof exported === 'function') {
              resource = viewResources.autoRegister(container, exported);
              if (resource.elementName !== null) {
                elDeps.push(resource);
              }
            }
          }
        } else {
          throw new Error('dependency neither function nor object. Received: "' + (typeof dep === 'undefined' ? 'undefined' : _typeof(dep)) + '"');
        }
      }

      return Promise.all(elDeps.map(function (el) {
        return el.load(container, el.target);
      })).then(function () {
        var factory = _this2.template !== null ? viewCompiler.compile(_this2.template, viewResources, compileInstruction) : null;
        _this2.factoryIsReady = true;
        _this2.factory = factory;
        return factory;
      });
    });
  };

  return StaticViewStrategy;
}()) || _class8);

var ViewLocator = (_temp3 = _class9 = function () {
  function ViewLocator() {
    
  }

  ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
    if (!value) {
      return null;
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
      var _origin = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(value.constructor);

      value = value.getViewStrategy();

      if (typeof value === 'string') {
        value = new RelativeViewStrategy(value);
      }

      viewStrategy.assert(value);

      if (_origin.moduleId) {
        value.makeRelativeTo(_origin.moduleId);
      }

      return value;
    }

    if (typeof value === 'string') {
      value = new RelativeViewStrategy(value);
    }

    if (viewStrategy.validate(value)) {
      return value;
    }

    if (typeof value !== 'function') {
      value = value.constructor;
    }

    if ('$view' in value) {
      var c = value.$view;
      var _view = void 0;
      c = typeof c === 'function' ? c.call(value) : c;
      if (c === null) {
        _view = new NoViewStrategy();
      } else {
        _view = c instanceof StaticViewStrategy ? c : new StaticViewStrategy(c);
      }
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(ViewLocator.viewStrategyMetadataKey, _view, value);
      return _view;
    }

    var origin = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(value);
    var strategy = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].get(ViewLocator.viewStrategyMetadataKey, value);

    if (!strategy) {
      if (!origin.moduleId) {
        throw new Error('Cannot determine default view strategy for object.', value);
      }

      strategy = this.createFallbackViewStrategy(origin);
    } else if (origin.moduleId) {
      strategy.moduleId = origin.moduleId;
    }

    return strategy;
  };

  ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
    return new ConventionalViewStrategy(this, origin);
  };

  ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
    var moduleId = origin.moduleId;
    var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
    return id + '.html';
  };

  return ViewLocator;
}(), _class9.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp3);

function mi(name) {
  throw new Error('BindingLanguage must implement ' + name + '().');
}

var BindingLanguage = function () {
  function BindingLanguage() {
    
  }

  BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
    mi('inspectAttribute');
  };

  BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
    mi('createAttributeInstruction');
  };

  BindingLanguage.prototype.createLetExpressions = function createLetExpressions(resources, element) {
    mi('createLetExpressions');
  };

  BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
    mi('inspectTextContent');
  };

  return BindingLanguage;
}();

var noNodes = Object.freeze([]);

var SlotCustomAttribute = function () {
  SlotCustomAttribute.inject = function inject() {
    return [__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element];
  };

  function SlotCustomAttribute(element) {
    

    this.element = element;
    this.element.auSlotAttribute = this;
  }

  SlotCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

  return SlotCustomAttribute;
}();

var PassThroughSlot = function () {
  function PassThroughSlot(anchor, name, destinationName, fallbackFactory) {
    

    this.anchor = anchor;
    this.anchor.viewSlot = this;
    this.name = name;
    this.destinationName = destinationName;
    this.fallbackFactory = fallbackFactory;
    this.destinationSlot = null;

    this.projections = 0;

    this.contentView = null;

    var attr = new SlotCustomAttribute(this.anchor);
    attr.value = this.destinationName;
  }

  PassThroughSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
    if (this.contentView === null) {
      this.contentView = this.fallbackFactory.create(this.ownerView.container);
      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);

      var slots = Object.create(null);
      slots[this.destinationSlot.name] = this.destinationSlot;

      ShadowDOM.distributeView(this.contentView, slots, projectionSource, index, this.destinationSlot.name);
    }
  };

  PassThroughSlot.prototype.passThroughTo = function passThroughTo(destinationSlot) {
    this.destinationSlot = destinationSlot;
  };

  PassThroughSlot.prototype.addNode = function addNode(view, node, projectionSource, index) {
    if (this.contentView !== null) {
      this.contentView.removeNodes();
      this.contentView.detached();
      this.contentView.unbind();
      this.contentView = null;
    }

    if (node.viewSlot instanceof PassThroughSlot) {
      node.viewSlot.passThroughTo(this);
      return;
    }

    this.projections++;
    this.destinationSlot.addNode(view, node, projectionSource, index);
  };

  PassThroughSlot.prototype.removeView = function removeView(view, projectionSource) {
    this.projections--;
    this.destinationSlot.removeView(view, projectionSource);

    if (this.needsFallbackRendering) {
      this.renderFallbackContent(null, noNodes, projectionSource);
    }
  };

  PassThroughSlot.prototype.removeAll = function removeAll(projectionSource) {
    this.projections = 0;
    this.destinationSlot.removeAll(projectionSource);

    if (this.needsFallbackRendering) {
      this.renderFallbackContent(null, noNodes, projectionSource);
    }
  };

  PassThroughSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
    this.destinationSlot.projectFrom(view, projectionSource);
  };

  PassThroughSlot.prototype.created = function created(ownerView) {
    this.ownerView = ownerView;
  };

  PassThroughSlot.prototype.bind = function bind(view) {
    if (this.contentView) {
      this.contentView.bind(view.bindingContext, view.overrideContext);
    }
  };

  PassThroughSlot.prototype.attached = function attached() {
    if (this.contentView) {
      this.contentView.attached();
    }
  };

  PassThroughSlot.prototype.detached = function detached() {
    if (this.contentView) {
      this.contentView.detached();
    }
  };

  PassThroughSlot.prototype.unbind = function unbind() {
    if (this.contentView) {
      this.contentView.unbind();
    }
  };

  _createClass(PassThroughSlot, [{
    key: 'needsFallbackRendering',
    get: function get() {
      return this.fallbackFactory && this.projections === 0;
    }
  }]);

  return PassThroughSlot;
}();

var ShadowSlot = function () {
  function ShadowSlot(anchor, name, fallbackFactory) {
    

    this.anchor = anchor;
    this.anchor.isContentProjectionSource = true;
    this.anchor.viewSlot = this;
    this.name = name;
    this.fallbackFactory = fallbackFactory;
    this.contentView = null;
    this.projections = 0;

    this.children = [];
    this.projectFromAnchors = null;
    this.destinationSlots = null;
  }

  ShadowSlot.prototype.addNode = function addNode(view, node, projectionSource, index, destination) {
    if (this.contentView !== null) {
      this.contentView.removeNodes();
      this.contentView.detached();
      this.contentView.unbind();
      this.contentView = null;
    }

    if (node.viewSlot instanceof PassThroughSlot) {
      node.viewSlot.passThroughTo(this);
      return;
    }

    if (this.destinationSlots !== null) {
      ShadowDOM.distributeNodes(view, [node], this.destinationSlots, this, index);
    } else {
      node.auOwnerView = view;
      node.auProjectionSource = projectionSource;
      node.auAssignedSlot = this;

      var anchor = this._findAnchor(view, node, projectionSource, index);
      var parent = anchor.parentNode;

      parent.insertBefore(node, anchor);
      this.children.push(node);
      this.projections++;
    }
  };

  ShadowSlot.prototype.removeView = function removeView(view, projectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOM.undistributeView(view, this.destinationSlots, this);
    } else if (this.contentView && this.contentView.hasSlots) {
      ShadowDOM.undistributeView(view, this.contentView.slots, projectionSource);
    } else {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });
      if (found) {
        var _children = found.auProjectionChildren;
        var ownChildren = this.children;

        for (var i = 0, ii = _children.length; i < ii; ++i) {
          var _child = _children[i];

          if (_child.auOwnerView === view) {
            _children.splice(i, 1);
            view.fragment.appendChild(_child);
            i--;ii--;

            this.projections--;
            var idx = ownChildren.indexOf(_child);
            if (idx > -1) {
              ownChildren.splice(idx, 1);
            }
          }
        }

        if (this.needsFallbackRendering) {
          this.renderFallbackContent(view, noNodes, projectionSource);
        }
      }
    }
  };

  ShadowSlot.prototype.removeAll = function removeAll(projectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOM.undistributeAll(this.destinationSlots, this);
    } else if (this.contentView && this.contentView.hasSlots) {
      ShadowDOM.undistributeAll(this.contentView.slots, projectionSource);
    } else {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });

      if (found) {
        var _children2 = found.auProjectionChildren;
        var ownChildren = this.children;

        for (var i = 0, ii = _children2.length; i < ii; ++i) {
          var _child2 = _children2[i];
          _child2.auOwnerView.fragment.appendChild(_child2);

          this.projections--;
          var idx = ownChildren.indexOf(_child2);
          if (idx > -1) {
            ownChildren.splice(idx, 1);
          }
        }

        found.auProjectionChildren = [];

        if (this.needsFallbackRendering) {
          this.renderFallbackContent(null, noNodes, projectionSource);
        }
      }
    }
  };

  ShadowSlot.prototype._findAnchor = function _findAnchor(view, node, projectionSource, index) {
    if (projectionSource) {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });
      if (found) {
        if (index !== undefined) {
          var _children3 = found.auProjectionChildren;
          var viewIndex = -1;
          var lastView = void 0;

          for (var i = 0, ii = _children3.length; i < ii; ++i) {
            var current = _children3[i];

            if (current.auOwnerView !== lastView) {
              viewIndex++;
              lastView = current.auOwnerView;

              if (viewIndex >= index && lastView !== view) {
                _children3.splice(i, 0, node);
                return current;
              }
            }
          }
        }

        found.auProjectionChildren.push(node);
        return found;
      }
    }

    return this.anchor;
  };

  ShadowSlot.prototype.projectTo = function projectTo(slots) {
    this.destinationSlots = slots;
  };

  ShadowSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
    var anchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createComment('anchor');
    var parent = this.anchor.parentNode;
    anchor.auSlotProjectFrom = projectionSource;
    anchor.auOwnerView = view;
    anchor.auProjectionChildren = [];
    parent.insertBefore(anchor, this.anchor);
    this.children.push(anchor);

    if (this.projectFromAnchors === null) {
      this.projectFromAnchors = [];
    }

    this.projectFromAnchors.push(anchor);
  };

  ShadowSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
    if (this.contentView === null) {
      this.contentView = this.fallbackFactory.create(this.ownerView.container);
      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
      this.contentView.insertNodesBefore(this.anchor);
    }

    if (this.contentView.hasSlots) {
      var slots = this.contentView.slots;
      var projectFromAnchors = this.projectFromAnchors;

      if (projectFromAnchors !== null) {
        for (var slotName in slots) {
          var slot = slots[slotName];

          for (var i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
            var anchor = projectFromAnchors[i];
            slot.projectFrom(anchor.auOwnerView, anchor.auSlotProjectFrom);
          }
        }
      }

      this.fallbackSlots = slots;
      ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index);
    }
  };

  ShadowSlot.prototype.created = function created(ownerView) {
    this.ownerView = ownerView;
  };

  ShadowSlot.prototype.bind = function bind(view) {
    if (this.contentView) {
      this.contentView.bind(view.bindingContext, view.overrideContext);
    }
  };

  ShadowSlot.prototype.attached = function attached() {
    if (this.contentView) {
      this.contentView.attached();
    }
  };

  ShadowSlot.prototype.detached = function detached() {
    if (this.contentView) {
      this.contentView.detached();
    }
  };

  ShadowSlot.prototype.unbind = function unbind() {
    if (this.contentView) {
      this.contentView.unbind();
    }
  };

  _createClass(ShadowSlot, [{
    key: 'needsFallbackRendering',
    get: function get() {
      return this.fallbackFactory && this.projections === 0;
    }
  }]);

  return ShadowSlot;
}();

var ShadowDOM = (_temp4 = _class10 = function () {
  function ShadowDOM() {
    
  }

  ShadowDOM.getSlotName = function getSlotName(node) {
    if (node.auSlotAttribute === undefined) {
      return ShadowDOM.defaultSlotKey;
    }

    return node.auSlotAttribute.value;
  };

  ShadowDOM.distributeView = function distributeView(view, slots, projectionSource, index, destinationOverride) {
    var nodes = void 0;

    if (view === null) {
      nodes = noNodes;
    } else {
      var childNodes = view.fragment.childNodes;
      var ii = childNodes.length;
      nodes = new Array(ii);

      for (var i = 0; i < ii; ++i) {
        nodes[i] = childNodes[i];
      }
    }

    ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride);
  };

  ShadowDOM.undistributeView = function undistributeView(view, slots, projectionSource) {
    for (var slotName in slots) {
      slots[slotName].removeView(view, projectionSource);
    }
  };

  ShadowDOM.undistributeAll = function undistributeAll(slots, projectionSource) {
    for (var slotName in slots) {
      slots[slotName].removeAll(projectionSource);
    }
  };

  ShadowDOM.distributeNodes = function distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride) {
    for (var i = 0, ii = nodes.length; i < ii; ++i) {
      var currentNode = nodes[i];
      var nodeType = currentNode.nodeType;

      if (currentNode.isContentProjectionSource) {
        currentNode.viewSlot.projectTo(slots);

        for (var slotName in slots) {
          slots[slotName].projectFrom(view, currentNode.viewSlot);
        }

        nodes.splice(i, 1);
        ii--;i--;
      } else if (nodeType === 1 || nodeType === 3 || currentNode.viewSlot instanceof PassThroughSlot) {
        if (nodeType === 3 && _isAllWhitespace(currentNode)) {
          nodes.splice(i, 1);
          ii--;i--;
        } else {
          var found = slots[destinationOverride || ShadowDOM.getSlotName(currentNode)];

          if (found) {
            found.addNode(view, currentNode, projectionSource, index);
            nodes.splice(i, 1);
            ii--;i--;
          }
        }
      } else {
        nodes.splice(i, 1);
        ii--;i--;
      }
    }

    for (var _slotName in slots) {
      var slot = slots[_slotName];

      if (slot.needsFallbackRendering) {
        slot.renderFallbackContent(view, nodes, projectionSource, index);
      }
    }
  };

  return ShadowDOM;
}(), _class10.defaultSlotKey = '__au-default-slot-key__', _temp4);

function register(lookup, name, resource, type) {
  if (!name) {
    return;
  }

  var existing = lookup[name];
  if (existing) {
    if (existing !== resource) {
      throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
    }

    return;
  }

  lookup[name] = resource;
}

function validateBehaviorName(name, type) {
  if (/[A-Z]/.test(name)) {
    var newName = _hyphenate(name);
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
    return newName;
  }
  return name;
}

var conventionMark = '__au_resource__';

var ViewResources = function () {
  ViewResources.convention = function convention(target, existing) {
    var resource = void 0;

    if (existing && conventionMark in existing) {
      return existing;
    }
    if ('$resource' in target) {
      var config = target.$resource;

      if (typeof config === 'string') {
        resource = existing || new HtmlBehaviorResource();
        resource[conventionMark] = true;
        if (!resource.elementName) {
          resource.elementName = validateBehaviorName(config, 'custom element');
        }
      } else {
        if (typeof config === 'function') {
          config = config.call(target);
        }
        if (typeof config === 'string') {
          config = { name: config };
        }

        config = Object.assign({}, config);

        var resourceType = config.type || 'element';

        var _name = config.name;
        switch (resourceType) {
          case 'element':case 'attribute':
            resource = existing || new HtmlBehaviorResource();
            resource[conventionMark] = true;
            if (resourceType === 'element') {
              if (!resource.elementName) {
                resource.elementName = _name ? validateBehaviorName(_name, 'custom element') : _hyphenate(target.name);
              }
            } else {
              if (!resource.attributeName) {
                resource.attributeName = _name ? validateBehaviorName(_name, 'custom attribute') : _hyphenate(target.name);
              }
            }
            if ('templateController' in config) {
              config.liftsContent = config.templateController;
              delete config.templateController;
            }
            if ('defaultBindingMode' in config && resource.attributeDefaultBindingMode !== undefined) {
              config.attributeDefaultBindingMode = config.defaultBindingMode;
              delete config.defaultBindingMode;
            }

            delete config.name;

            Object.assign(resource, config);
            break;
          case 'valueConverter':
            resource = new __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["ValueConverterResource"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["camelCase"])(_name || target.name));
            break;
          case 'bindingBehavior':
            resource = new __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["BindingBehaviorResource"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["camelCase"])(_name || target.name));
            break;
          case 'viewEngineHooks':
            resource = new ViewEngineHooksResource();
            break;
        }
      }

      if (resource instanceof HtmlBehaviorResource) {
        var _bindables = typeof config === 'string' ? undefined : config.bindables;
        var currentProps = resource.properties;
        if (Array.isArray(_bindables)) {
          for (var i = 0, ii = _bindables.length; ii > i; ++i) {
            var prop = _bindables[i];
            if (!prop || typeof prop !== 'string' && !prop.name) {
              throw new Error('Invalid bindable property at "' + i + '" for class "' + target.name + '". Expected either a string or an object with "name" property.');
            }
            var newProp = new BindableProperty(prop);

            var existed = false;
            for (var j = 0, jj = currentProps.length; jj > j; ++j) {
              if (currentProps[j].name === newProp.name) {
                existed = true;
                break;
              }
            }
            if (existed) {
              continue;
            }
            newProp.registerWith(target, resource);
          }
        }
      }
    }
    return resource;
  };

  function ViewResources(parent, viewUrl) {
    

    this.bindingLanguage = null;

    this.parent = parent || null;
    this.hasParent = this.parent !== null;
    this.viewUrl = viewUrl || '';
    this.lookupFunctions = {
      valueConverters: this.getValueConverter.bind(this),
      bindingBehaviors: this.getBindingBehavior.bind(this)
    };
    this.attributes = Object.create(null);
    this.elements = Object.create(null);
    this.valueConverters = Object.create(null);
    this.bindingBehaviors = Object.create(null);
    this.attributeMap = Object.create(null);
    this.values = Object.create(null);
    this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
  }

  ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
    if (typeof obj[name] === 'function') {
      var func = obj[name].bind(obj);
      var counter = 1;
      var callbackName = void 0;

      while (this[callbackName = name + counter.toString()] !== undefined) {
        counter++;
      }

      this[name] = true;
      this[callbackName] = func;
    }
  };

  ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
    if (this.hasParent) {
      this.parent._invokeHook(name, one, two, three, four);
    }

    if (this[name]) {
      this[name + '1'](one, two, three, four);

      var callbackName = name + '2';
      if (this[callbackName]) {
        this[callbackName](one, two, three, four);

        callbackName = name + '3';
        if (this[callbackName]) {
          this[callbackName](one, two, three, four);

          var counter = 4;

          while (this[callbackName = name + counter.toString()] !== undefined) {
            this[callbackName](one, two, three, four);
            counter++;
          }
        }
      }
    }
  };

  ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
    this._tryAddHook(hooks, 'beforeCompile');
    this._tryAddHook(hooks, 'afterCompile');
    this._tryAddHook(hooks, 'beforeCreate');
    this._tryAddHook(hooks, 'afterCreate');
    this._tryAddHook(hooks, 'beforeBind');
    this._tryAddHook(hooks, 'beforeUnbind');
  };

  ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
    return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
  };

  ViewResources.prototype.patchInParent = function patchInParent(newParent) {
    var originalParent = this.parent;

    this.parent = newParent || null;
    this.hasParent = this.parent !== null;

    if (newParent.parent === null) {
      newParent.parent = originalParent;
      newParent.hasParent = originalParent !== null;
    }
  };

  ViewResources.prototype.relativeToView = function relativeToView(path) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_path__["relativeToFile"])(path, this.viewUrl);
  };

  ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
    register(this.elements, tagName, behavior, 'an Element');
  };

  ViewResources.prototype.getElement = function getElement(tagName) {
    return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
  };

  ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
    return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
  };

  ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
    this.attributeMap[attribute] = knownAttribute;
    register(this.attributes, attribute, behavior, 'an Attribute');
  };

  ViewResources.prototype.getAttribute = function getAttribute(attribute) {
    return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
  };

  ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
    register(this.valueConverters, name, valueConverter, 'a ValueConverter');
  };

  ViewResources.prototype.getValueConverter = function getValueConverter(name) {
    return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
  };

  ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
    register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
  };

  ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
    return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
  };

  ViewResources.prototype.registerValue = function registerValue(name, value) {
    register(this.values, name, value, 'a value');
  };

  ViewResources.prototype.getValue = function getValue(name) {
    return this.values[name] || (this.hasParent ? this.parent.getValue(name) : null);
  };

  ViewResources.prototype.autoRegister = function autoRegister(container, impl) {
    var resourceTypeMeta = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, impl);
    if (resourceTypeMeta) {
      if (resourceTypeMeta instanceof HtmlBehaviorResource) {
        ViewResources.convention(impl, resourceTypeMeta);

        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          HtmlBehaviorResource.convention(impl.name, resourceTypeMeta);
        }
        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          resourceTypeMeta.elementName = _hyphenate(impl.name);
        }
      }
    } else {
      resourceTypeMeta = ViewResources.convention(impl) || HtmlBehaviorResource.convention(impl.name) || __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["ValueConverterResource"].convention(impl.name) || __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["BindingBehaviorResource"].convention(impl.name) || ViewEngineHooksResource.convention(impl.name);
      if (!resourceTypeMeta) {
        resourceTypeMeta = new HtmlBehaviorResource();
        resourceTypeMeta.elementName = _hyphenate(impl.name);
      }
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, resourceTypeMeta, impl);
    }
    resourceTypeMeta.initialize(container, impl);
    resourceTypeMeta.register(this);
    return resourceTypeMeta;
  };

  return ViewResources;
}();

var View = function () {
  function View(container, viewFactory, fragment, controllers, bindings, children, slots) {
    

    this.container = container;
    this.viewFactory = viewFactory;
    this.resources = viewFactory.resources;
    this.fragment = fragment;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
    this.controllers = controllers;
    this.bindings = bindings;
    this.children = children;
    this.slots = slots;
    this.hasSlots = false;
    this.fromCache = false;
    this.isBound = false;
    this.isAttached = false;
    this.bindingContext = null;
    this.overrideContext = null;
    this.controller = null;
    this.viewModelScope = null;
    this.animatableElement = undefined;
    this._isUserControlled = false;
    this.contentView = null;

    for (var _key3 in slots) {
      this.hasSlots = true;
      break;
    }
  }

  View.prototype.returnToCache = function returnToCache() {
    this.viewFactory.returnViewToCache(this);
  };

  View.prototype.created = function created() {
    var i = void 0;
    var ii = void 0;
    var controllers = this.controllers;

    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].created(this);
    }
  };

  View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
    var controllers = void 0;
    var bindings = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (_systemUpdate && this._isUserControlled) {
      return;
    }

    if (this.isBound) {
      if (this.bindingContext === bindingContext) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["createOverrideContext"])(bindingContext);

    this.resources._invokeHook('beforeBind', this);

    bindings = this.bindings;
    for (i = 0, ii = bindings.length; i < ii; ++i) {
      bindings[i].bind(this);
    }

    if (this.viewModelScope !== null) {
      bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
      this.viewModelScope = null;
    }

    controllers = this.controllers;
    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].bind(this);
    }

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].bind(bindingContext, overrideContext, true);
    }

    if (this.hasSlots) {
      ShadowDOM.distributeView(this.contentView, this.slots);
    }
  };

  View.prototype.addBinding = function addBinding(binding) {
    this.bindings.push(binding);

    if (this.isBound) {
      binding.bind(this);
    }
  };

  View.prototype.unbind = function unbind() {
    var controllers = void 0;
    var bindings = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isBound) {
      this.isBound = false;
      this.resources._invokeHook('beforeUnbind', this);

      if (this.controller !== null) {
        this.controller.unbind();
      }

      bindings = this.bindings;
      for (i = 0, ii = bindings.length; i < ii; ++i) {
        bindings[i].unbind();
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].unbind();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].unbind();
      }

      this.bindingContext = null;
      this.overrideContext = null;
    }
  };

  View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
    refNode.parentNode.insertBefore(this.fragment, refNode);
  };

  View.prototype.appendNodesTo = function appendNodesTo(parent) {
    parent.appendChild(this.fragment);
  };

  View.prototype.removeNodes = function removeNodes() {
    var fragment = this.fragment;
    var current = this.firstChild;
    var end = this.lastChild;
    var next = void 0;

    while (current) {
      next = current.nextSibling;
      fragment.appendChild(current);

      if (current === end) {
        break;
      }

      current = next;
    }
  };

  View.prototype.attached = function attached() {
    var controllers = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    if (this.controller !== null) {
      this.controller.attached();
    }

    controllers = this.controllers;
    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].attached();
    }

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].attached();
    }
  };

  View.prototype.detached = function detached() {
    var controllers = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isAttached) {
      this.isAttached = false;

      if (this.controller !== null) {
        this.controller.detached();
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].detached();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].detached();
      }
    }
  };

  return View;
}();

function getAnimatableElement(view) {
  if (view.animatableElement !== undefined) {
    return view.animatableElement;
  }

  var current = view.firstChild;

  while (current && current.nodeType !== 1) {
    current = current.nextSibling;
  }

  if (current && current.nodeType === 1) {
    return view.animatableElement = current.classList.contains('au-animate') ? current : null;
  }

  return view.animatableElement = null;
}

var ViewSlot = function () {
  function ViewSlot(anchor, anchorIsContainer) {
    var animator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Animator.instance;

    

    this.anchor = anchor;
    this.anchorIsContainer = anchorIsContainer;
    this.bindingContext = null;
    this.overrideContext = null;
    this.animator = animator;
    this.children = [];
    this.isBound = false;
    this.isAttached = false;
    this.contentSelectors = null;
    anchor.viewSlot = this;
    anchor.isContentProjectionSource = false;
  }

  ViewSlot.prototype.animateView = function animateView(view) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'enter';

    var animatableElement = getAnimatableElement(view);

    if (animatableElement !== null) {
      switch (direction) {
        case 'enter':
          return this.animator.enter(animatableElement);
        case 'leave':
          return this.animator.leave(animatableElement);
        default:
          throw new Error('Invalid animation direction: ' + direction);
      }
    }
  };

  ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
    var parent = this.anchor;

    this.children.push({
      fragment: parent,
      firstChild: parent.firstChild,
      lastChild: parent.lastChild,
      returnToCache: function returnToCache() {},
      removeNodes: function removeNodes() {
        var last = void 0;

        while (last = parent.lastChild) {
          parent.removeChild(last);
        }
      },
      created: function created() {},
      bind: function bind() {},
      unbind: function unbind() {},
      attached: function attached() {},
      detached: function detached() {}
    });
  };

  ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
    var i = void 0;
    var ii = void 0;
    var children = void 0;

    if (this.isBound) {
      if (this.bindingContext === bindingContext) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.bindingContext = bindingContext = bindingContext || this.bindingContext;
    this.overrideContext = overrideContext = overrideContext || this.overrideContext;

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].bind(bindingContext, overrideContext, true);
    }
  };

  ViewSlot.prototype.unbind = function unbind() {
    if (this.isBound) {
      var i = void 0;
      var ii = void 0;
      var _children4 = this.children;

      this.isBound = false;
      this.bindingContext = null;
      this.overrideContext = null;

      for (i = 0, ii = _children4.length; i < ii; ++i) {
        _children4[i].unbind();
      }
    }
  };

  ViewSlot.prototype.add = function add(view) {
    if (this.anchorIsContainer) {
      view.appendNodesTo(this.anchor);
    } else {
      view.insertNodesBefore(this.anchor);
    }

    this.children.push(view);

    if (this.isAttached) {
      view.attached();
      return this.animateView(view, 'enter');
    }
  };

  ViewSlot.prototype.insert = function insert(index, view) {
    var children = this.children;
    var length = children.length;

    if (index === 0 && length === 0 || index >= length) {
      return this.add(view);
    }

    view.insertNodesBefore(children[index].firstChild);
    children.splice(index, 0, view);

    if (this.isAttached) {
      view.attached();
      return this.animateView(view, 'enter');
    }
  };

  ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
    if (sourceIndex === targetIndex) {
      return;
    }

    var children = this.children;
    var view = children[sourceIndex];

    view.removeNodes();
    view.insertNodesBefore(children[targetIndex].firstChild);
    children.splice(sourceIndex, 1);
    children.splice(targetIndex, 0, view);
  };

  ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
    return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
  };

  ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
    var _this3 = this;

    var children = this.children;
    var ii = viewsToRemove.length;
    var i = void 0;
    var rmPromises = [];

    viewsToRemove.forEach(function (child) {
      if (skipAnimation) {
        child.removeNodes();
        return;
      }

      var animation = _this3.animateView(child, 'leave');
      if (animation) {
        rmPromises.push(animation.then(function () {
          return child.removeNodes();
        }));
      } else {
        child.removeNodes();
      }
    });

    var removeAction = function removeAction() {
      if (_this3.isAttached) {
        for (i = 0; i < ii; ++i) {
          viewsToRemove[i].detached();
        }
      }

      if (returnToCache) {
        for (i = 0; i < ii; ++i) {
          viewsToRemove[i].returnToCache();
        }
      }

      for (i = 0; i < ii; ++i) {
        var index = children.indexOf(viewsToRemove[i]);
        if (index >= 0) {
          children.splice(index, 1);
        }
      }
    };

    if (rmPromises.length > 0) {
      return Promise.all(rmPromises).then(function () {
        return removeAction();
      });
    }

    return removeAction();
  };

  ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
    var _this4 = this;

    var view = this.children[index];

    var removeAction = function removeAction() {
      index = _this4.children.indexOf(view);
      view.removeNodes();
      _this4.children.splice(index, 1);

      if (_this4.isAttached) {
        view.detached();
      }

      if (returnToCache) {
        view.returnToCache();
      }

      return view;
    };

    if (!skipAnimation) {
      var animation = this.animateView(view, 'leave');
      if (animation) {
        return animation.then(function () {
          return removeAction();
        });
      }
    }

    return removeAction();
  };

  ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
    var _this5 = this;

    var children = this.children;
    var ii = children.length;
    var i = void 0;
    var rmPromises = [];

    children.forEach(function (child) {
      if (skipAnimation) {
        child.removeNodes();
        return;
      }

      var animation = _this5.animateView(child, 'leave');
      if (animation) {
        rmPromises.push(animation.then(function () {
          return child.removeNodes();
        }));
      } else {
        child.removeNodes();
      }
    });

    var removeAction = function removeAction() {
      if (_this5.isAttached) {
        for (i = 0; i < ii; ++i) {
          children[i].detached();
        }
      }

      if (returnToCache) {
        for (i = 0; i < ii; ++i) {
          var _child3 = children[i];

          if (_child3) {
            _child3.returnToCache();
          }
        }
      }

      _this5.children = [];
    };

    if (rmPromises.length > 0) {
      return Promise.all(rmPromises).then(function () {
        return removeAction();
      });
    }

    return removeAction();
  };

  ViewSlot.prototype.attached = function attached() {
    var i = void 0;
    var ii = void 0;
    var children = void 0;
    var child = void 0;

    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      child = children[i];
      child.attached();
      this.animateView(child, 'enter');
    }
  };

  ViewSlot.prototype.detached = function detached() {
    var i = void 0;
    var ii = void 0;
    var children = void 0;

    if (this.isAttached) {
      this.isAttached = false;
      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].detached();
      }
    }
  };

  ViewSlot.prototype.projectTo = function projectTo(slots) {
    var _this6 = this;

    this.projectToSlots = slots;
    this.add = this._projectionAdd;
    this.insert = this._projectionInsert;
    this.move = this._projectionMove;
    this.remove = this._projectionRemove;
    this.removeAt = this._projectionRemoveAt;
    this.removeMany = this._projectionRemoveMany;
    this.removeAll = this._projectionRemoveAll;
    this.children.forEach(function (view) {
      return ShadowDOM.distributeView(view, slots, _this6);
    });
  };

  ViewSlot.prototype._projectionAdd = function _projectionAdd(view) {
    ShadowDOM.distributeView(view, this.projectToSlots, this);

    this.children.push(view);

    if (this.isAttached) {
      view.attached();
    }
  };

  ViewSlot.prototype._projectionInsert = function _projectionInsert(index, view) {
    if (index === 0 && !this.children.length || index >= this.children.length) {
      this.add(view);
    } else {
      ShadowDOM.distributeView(view, this.projectToSlots, this, index);

      this.children.splice(index, 0, view);

      if (this.isAttached) {
        view.attached();
      }
    }
  };

  ViewSlot.prototype._projectionMove = function _projectionMove(sourceIndex, targetIndex) {
    if (sourceIndex === targetIndex) {
      return;
    }

    var children = this.children;
    var view = children[sourceIndex];

    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    ShadowDOM.distributeView(view, this.projectToSlots, this, targetIndex);

    children.splice(sourceIndex, 1);
    children.splice(targetIndex, 0, view);
  };

  ViewSlot.prototype._projectionRemove = function _projectionRemove(view, returnToCache) {
    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    this.children.splice(this.children.indexOf(view), 1);

    if (this.isAttached) {
      view.detached();
    }
    if (returnToCache) {
      view.returnToCache();
    }
  };

  ViewSlot.prototype._projectionRemoveAt = function _projectionRemoveAt(index, returnToCache) {
    var view = this.children[index];

    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    this.children.splice(index, 1);

    if (this.isAttached) {
      view.detached();
    }
    if (returnToCache) {
      view.returnToCache();
    }
  };

  ViewSlot.prototype._projectionRemoveMany = function _projectionRemoveMany(viewsToRemove, returnToCache) {
    var _this7 = this;

    viewsToRemove.forEach(function (view) {
      return _this7.remove(view, returnToCache);
    });
  };

  ViewSlot.prototype._projectionRemoveAll = function _projectionRemoveAll(returnToCache) {
    ShadowDOM.undistributeAll(this.projectToSlots, this);

    var children = this.children;
    var ii = children.length;

    for (var i = 0; i < ii; ++i) {
      if (returnToCache) {
        children[i].returnToCache();
      } else if (this.isAttached) {
        children[i].detached();
      }
    }

    this.children = [];
  };

  return ViewSlot;
}();

var ProviderResolver = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["resolver"])(_class12 = function () {
  function ProviderResolver() {
    
  }

  ProviderResolver.prototype.get = function get(container, key) {
    var id = key.__providerId__;
    return id in container ? container[id] : container[id] = container.invoke(key);
  };

  return ProviderResolver;
}()) || _class12;

var providerResolverInstance = new ProviderResolver();

function elementContainerGet(key) {
  if (key === __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element) {
    return this.element;
  }

  if (key === BoundViewFactory) {
    if (this.boundViewFactory) {
      return this.boundViewFactory;
    }

    var factory = this.instruction.viewFactory;
    var _partReplacements = this.partReplacements;

    if (_partReplacements) {
      factory = _partReplacements[factory.part] || factory;
    }

    this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
    return this.boundViewFactory;
  }

  if (key === ViewSlot) {
    if (this.viewSlot === undefined) {
      this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
      this.element.isContentProjectionSource = this.instruction.lifting;
      this.children.push(this.viewSlot);
    }

    return this.viewSlot;
  }

  if (key === ElementEvents) {
    return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
  }

  if (key === CompositionTransaction) {
    return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
  }

  if (key === ViewResources) {
    return this.viewResources;
  }

  if (key === TargetInstruction) {
    return this.instruction;
  }

  return this.superGet(key);
}

function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
  var container = parent.createChild();
  var providers = void 0;
  var i = void 0;

  container.element = element;
  container.instruction = instruction;
  container.children = children;
  container.viewResources = resources;
  container.partReplacements = partReplacements;

  providers = instruction.providers;
  i = providers.length;

  while (i--) {
    container._resolvers.set(providers[i], providerResolverInstance);
  }

  container.superGet = container.get;
  container.get = elementContainerGet;

  return container;
}

function hasAttribute(name) {
  return this._element.hasAttribute(name);
}

function getAttribute(name) {
  return this._element.getAttribute(name);
}

function setAttribute(name, value) {
  this._element.setAttribute(name, value);
}

function makeElementIntoAnchor(element, elementInstruction) {
  var anchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createComment('anchor');

  if (elementInstruction) {
    var firstChild = element.firstChild;

    if (firstChild && firstChild.tagName === 'AU-CONTENT') {
      anchor.contentElement = firstChild;
    }

    anchor._element = element;

    anchor.hasAttribute = hasAttribute;
    anchor.getAttribute = getAttribute;
    anchor.setAttribute = setAttribute;
  }

  __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].replaceNode(anchor, element);

  return anchor;
}

function applyInstructions(containers, element, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources) {
  var behaviorInstructions = instruction.behaviorInstructions;
  var expressions = instruction.expressions;
  var elementContainer = void 0;
  var i = void 0;
  var ii = void 0;
  var current = void 0;
  var instance = void 0;

  if (instruction.contentExpression) {
    bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
    element.nextSibling.auInterpolationTarget = true;
    element.parentNode.removeChild(element);
    return;
  }

  if (instruction.shadowSlot) {
    var commentAnchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createComment('slot');
    var slot = void 0;

    if (instruction.slotDestination) {
      slot = new PassThroughSlot(commentAnchor, instruction.slotName, instruction.slotDestination, instruction.slotFallbackFactory);
    } else {
      slot = new ShadowSlot(commentAnchor, instruction.slotName, instruction.slotFallbackFactory);
    }

    __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].replaceNode(commentAnchor, element);
    shadowSlots[instruction.slotName] = slot;
    controllers.push(slot);
    return;
  }

  if (instruction.letElement) {
    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding());
    }
    element.parentNode.removeChild(element);
    return;
  }

  if (behaviorInstructions.length) {
    if (!instruction.anchorIsContainer) {
      element = makeElementIntoAnchor(element, instruction.elementInstruction);
    }

    containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
      current = behaviorInstructions[i];
      instance = current.type.create(elementContainer, current, element, bindings);
      controllers.push(instance);
    }
  }

  for (i = 0, ii = expressions.length; i < ii; ++i) {
    bindings.push(expressions[i].createBinding(element));
  }
}

function styleStringToObject(style, target) {
  var attributes = style.split(';');
  var firstIndexOfColon = void 0;
  var i = void 0;
  var current = void 0;
  var key = void 0;
  var value = void 0;

  target = target || {};

  for (i = 0; i < attributes.length; i++) {
    current = attributes[i];
    firstIndexOfColon = current.indexOf(':');
    key = current.substring(0, firstIndexOfColon).trim();
    value = current.substring(firstIndexOfColon + 1).trim();
    target[key] = value;
  }

  return target;
}

function styleObjectToString(obj) {
  var result = '';

  for (var _key4 in obj) {
    result += _key4 + ':' + obj[_key4] + ';';
  }

  return result;
}

function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
  var behaviorInstructions = instruction.behaviorInstructions;
  var expressions = instruction.expressions;
  var providers = instruction.providers;
  var values = instruction.values;
  var i = void 0;
  var ii = void 0;
  var current = void 0;
  var instance = void 0;
  var currentAttributeValue = void 0;

  i = providers.length;
  while (i--) {
    container._resolvers.set(providers[i], providerResolverInstance);
  }

  for (var _key5 in values) {
    currentAttributeValue = element.getAttribute(_key5);

    if (currentAttributeValue) {
      if (_key5 === 'class') {
        element.setAttribute('class', currentAttributeValue + ' ' + values[_key5]);
      } else if (_key5 === 'style') {
        var styleObject = styleStringToObject(values[_key5]);
        styleStringToObject(currentAttributeValue, styleObject);
        element.setAttribute('style', styleObjectToString(styleObject));
      }
    } else {
      element.setAttribute(_key5, values[_key5]);
    }
  }

  if (behaviorInstructions.length) {
    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
      current = behaviorInstructions[i];
      instance = current.type.create(container, current, element, bindings);

      if (instance.contentView) {
        children.push(instance.contentView);
      }

      controllers.push(instance);
    }
  }

  for (i = 0, ii = expressions.length; i < ii; ++i) {
    bindings.push(expressions[i].createBinding(element));
  }
}

var BoundViewFactory = function () {
  function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
    

    this.parentContainer = parentContainer;
    this.viewFactory = viewFactory;
    this.factoryCreateInstruction = { partReplacements: partReplacements };
  }

  BoundViewFactory.prototype.create = function create() {
    var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
    view._isUserControlled = true;
    return view;
  };

  BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
  };

  BoundViewFactory.prototype.getCachedView = function getCachedView() {
    return this.viewFactory.getCachedView();
  };

  BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    this.viewFactory.returnViewToCache(view);
  };

  _createClass(BoundViewFactory, [{
    key: 'isCaching',
    get: function get() {
      return this.viewFactory.isCaching;
    }
  }]);

  return BoundViewFactory;
}();

var ViewFactory = function () {
  function ViewFactory(template, instructions, resources) {
    

    this.isCaching = false;

    this.template = template;
    this.instructions = instructions;
    this.resources = resources;
    this.cacheSize = -1;
    this.cache = null;
  }

  ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    if (size) {
      if (size === '*') {
        size = Number.MAX_VALUE;
      } else if (typeof size === 'string') {
        size = parseInt(size, 10);
      }
    }

    if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
      this.cacheSize = size;
    }

    if (this.cacheSize > 0) {
      this.cache = [];
    } else {
      this.cache = null;
    }

    this.isCaching = this.cacheSize > 0;
  };

  ViewFactory.prototype.getCachedView = function getCachedView() {
    return this.cache !== null ? this.cache.pop() || null : null;
  };

  ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    if (view.isAttached) {
      view.detached();
    }

    if (view.isBound) {
      view.unbind();
    }

    if (this.cache !== null && this.cache.length < this.cacheSize) {
      view.fromCache = true;
      this.cache.push(view);
    }
  };

  ViewFactory.prototype.create = function create(container, createInstruction, element) {
    createInstruction = createInstruction || BehaviorInstruction.normal;

    var cachedView = this.getCachedView();
    if (cachedView !== null) {
      return cachedView;
    }

    var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
    var instructables = fragment.querySelectorAll('.au-target');
    var instructions = this.instructions;
    var resources = this.resources;
    var controllers = [];
    var bindings = [];
    var children = [];
    var shadowSlots = Object.create(null);
    var containers = { root: container };
    var partReplacements = createInstruction.partReplacements;
    var i = void 0;
    var ii = void 0;
    var view = void 0;
    var instructable = void 0;
    var instruction = void 0;

    this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

    if (element && this.surrogateInstruction !== null) {
      applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
    }

    if (createInstruction.enhance && fragment.hasAttribute('au-target-id')) {
      instructable = fragment;
      instruction = instructions[instructable.getAttribute('au-target-id')];
      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
    }

    for (i = 0, ii = instructables.length; i < ii; ++i) {
      instructable = instructables[i];
      instruction = instructions[instructable.getAttribute('au-target-id')];
      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
    }

    view = new View(container, this, fragment, controllers, bindings, children, shadowSlots);

    if (!createInstruction.initiatedByBehavior) {
      view.created();
    }

    this.resources._invokeHook('afterCreate', view);

    return view;
  };

  return ViewFactory;
}();

var nextInjectorId = 0;
function getNextInjectorId() {
  return ++nextInjectorId;
}

var lastAUTargetID = 0;
function getNextAUTargetID() {
  return (++lastAUTargetID).toString();
}

function makeIntoInstructionTarget(element) {
  var value = element.getAttribute('class');
  var auTargetID = getNextAUTargetID();

  element.setAttribute('class', value ? value + ' au-target' : 'au-target');
  element.setAttribute('au-target-id', auTargetID);

  return auTargetID;
}

function makeShadowSlot(compiler, resources, node, instructions, parentInjectorId) {
  var auShadowSlot = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createElement('au-shadow-slot');
  __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].replaceNode(auShadowSlot, node);

  var auTargetID = makeIntoInstructionTarget(auShadowSlot);
  var instruction = TargetInstruction.shadowSlot(parentInjectorId);

  instruction.slotName = node.getAttribute('name') || ShadowDOM.defaultSlotKey;
  instruction.slotDestination = node.getAttribute('slot');

  if (node.innerHTML.trim()) {
    var fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createDocumentFragment();
    var _child4 = void 0;

    while (_child4 = node.firstChild) {
      fragment.appendChild(_child4);
    }

    instruction.slotFallbackFactory = compiler.compile(fragment, resources);
  }

  instructions[auTargetID] = instruction;

  return auShadowSlot;
}

var defaultLetHandler = BindingLanguage.prototype.createLetExpressions;

var ViewCompiler = function () {
  ViewCompiler.inject = function inject() {
    return [BindingLanguage, ViewResources];
  };

  function ViewCompiler(bindingLanguage, resources) {
    

    this.bindingLanguage = bindingLanguage;
    this.resources = resources;
  }

  ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
    resources = resources || this.resources;
    compileInstruction = compileInstruction || ViewCompileInstruction.normal;
    source = typeof source === 'string' ? __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createTemplateFromMarkup(source) : source;

    var content = void 0;
    var part = void 0;
    var cacheSize = void 0;

    if (source.content) {
      part = source.getAttribute('part');
      cacheSize = source.getAttribute('view-cache');
      content = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].adoptNode(source.content);
    } else {
      content = source;
    }

    compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["FEATURE"].shadowDOM;
    resources._invokeHook('beforeCompile', content, resources, compileInstruction);

    var instructions = {};
    this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);

    var firstChild = content.firstChild;
    if (firstChild && firstChild.nodeType === 1) {
      var targetId = firstChild.getAttribute('au-target-id');
      if (targetId) {
        var ins = instructions[targetId];

        if (ins.shadowSlot || ins.lifting || ins.elementInstruction && !ins.elementInstruction.anchorIsContainer) {
          content.insertBefore(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createComment('view'), firstChild);
        }
      }
    }

    var factory = new ViewFactory(content, instructions, resources);

    factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
    factory.part = part;

    if (cacheSize) {
      factory.setCacheSize(cacheSize);
    }

    resources._invokeHook('afterCompile', factory);

    return factory;
  };

  ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
    switch (node.nodeType) {
      case 1:
        return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
      case 3:
        var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
        if (expression) {
          var marker = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createElement('au-marker');
          var auTargetID = makeIntoInstructionTarget(marker);
          (node.parentNode || parentNode).insertBefore(marker, node);
          node.textContent = ' ';
          instructions[auTargetID] = TargetInstruction.contentExpression(expression);

          while (node.nextSibling && node.nextSibling.nodeType === 3) {
            (node.parentNode || parentNode).removeChild(node.nextSibling);
          }
        } else {
          while (node.nextSibling && node.nextSibling.nodeType === 3) {
            node = node.nextSibling;
          }
        }
        return node.nextSibling;
      case 11:
        var currentChild = node.firstChild;
        while (currentChild) {
          currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
        }
        break;
      default:
        break;
    }

    return node.nextSibling;
  };

  ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
    var tagName = node.tagName.toLowerCase();
    var attributes = node.attributes;
    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
    var knownAttribute = void 0;
    var property = void 0;
    var instruction = void 0;
    var i = void 0;
    var ii = void 0;
    var attr = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var info = void 0;
    var type = void 0;
    var expressions = [];
    var expression = void 0;
    var behaviorInstructions = [];
    var values = {};
    var hasValues = false;
    var providers = [];

    for (i = 0, ii = attributes.length; i < ii; ++i) {
      attr = attributes[i];
      attrName = attr.name;
      attrValue = attr.value;

      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
      type = resources.getAttribute(info.attrName);

      if (type) {
        knownAttribute = resources.mapAttribute(info.attrName);
        if (knownAttribute) {
          property = type.attributes[knownAttribute];

          if (property) {
            info.defaultBindingMode = property.defaultBindingMode;

            if (!info.command && !info.expression) {
              info.command = property.hasOptions ? 'options' : null;
            }

            if (info.command && info.command !== 'options' && type.primaryProperty) {
              var _primaryProperty = type.primaryProperty;
              attrName = info.attrName = _primaryProperty.attribute;

              info.defaultBindingMode = _primaryProperty.defaultBindingMode;
            }
          }
        }
      }

      instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

      if (instruction) {
        if (instruction.alteredAttr) {
          type = resources.getAttribute(instruction.attrName);
        }

        if (instruction.discrete) {
          expressions.push(instruction);
        } else {
          if (type) {
            instruction.type = type;
            this._configureProperties(instruction, resources);

            if (type.liftsContent) {
              throw new Error('You cannot place a template controller on a surrogate element.');
            } else {
              behaviorInstructions.push(instruction);
            }
          } else {
            expressions.push(instruction.attributes[instruction.attrName]);
          }
        }
      } else {
        if (type) {
          instruction = BehaviorInstruction.attribute(attrName, type);
          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

          if (type.liftsContent) {
            throw new Error('You cannot place a template controller on a surrogate element.');
          } else {
            behaviorInstructions.push(instruction);
          }
        } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
          hasValues = true;
          values[attrName] = attrValue;
        }
      }
    }

    if (expressions.length || behaviorInstructions.length || hasValues) {
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        instruction = behaviorInstructions[i];
        instruction.type.compile(this, resources, node, instruction);
        providers.push(instruction.type.target);
      }

      for (i = 0, ii = expressions.length; i < ii; ++i) {
        expression = expressions[i];
        if (expression.attrToRemove !== undefined) {
          node.removeAttribute(expression.attrToRemove);
        }
      }

      return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
    }

    return null;
  };

  ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
    var tagName = node.tagName.toLowerCase();
    var attributes = node.attributes;
    var expressions = [];
    var expression = void 0;
    var behaviorInstructions = [];
    var providers = [];
    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
    var liftingInstruction = void 0;
    var viewFactory = void 0;
    var type = void 0;
    var elementInstruction = void 0;
    var elementProperty = void 0;
    var i = void 0;
    var ii = void 0;
    var attr = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var originalAttrName = void 0;
    var instruction = void 0;
    var info = void 0;
    var property = void 0;
    var knownAttribute = void 0;
    var auTargetID = void 0;
    var injectorId = void 0;

    if (tagName === 'slot') {
      if (targetLightDOM) {
        node = makeShadowSlot(this, resources, node, instructions, parentInjectorId);
      }
      return node.nextSibling;
    } else if (tagName === 'template') {
      if (!('content' in node)) {
        throw new Error('You cannot place a template element within ' + node.namespaceURI + ' namespace');
      }
      viewFactory = this.compile(node, resources);
      viewFactory.part = node.getAttribute('part');
    } else {
      type = resources.getElement(node.getAttribute('as-element') || tagName);

      if (tagName === 'let' && !type && bindingLanguage.createLetExpressions !== defaultLetHandler) {
        expressions = bindingLanguage.createLetExpressions(resources, node);
        auTargetID = makeIntoInstructionTarget(node);
        instructions[auTargetID] = TargetInstruction.letElement(expressions);
        return node.nextSibling;
      }
      if (type) {
        elementInstruction = BehaviorInstruction.element(node, type);
        type.processAttributes(this, resources, node, attributes, elementInstruction);
        behaviorInstructions.push(elementInstruction);
      }
    }

    for (i = 0, ii = attributes.length; i < ii; ++i) {
      attr = attributes[i];
      originalAttrName = attrName = attr.name;
      attrValue = attr.value;
      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);

      if (targetLightDOM && info.attrName === 'slot') {
        info.attrName = attrName = 'au-slot';
      }

      type = resources.getAttribute(info.attrName);
      elementProperty = null;

      if (type) {
        knownAttribute = resources.mapAttribute(info.attrName);
        if (knownAttribute) {
          property = type.attributes[knownAttribute];

          if (property) {
            info.defaultBindingMode = property.defaultBindingMode;

            if (!info.command && !info.expression) {
              info.command = property.hasOptions ? 'options' : null;
            }

            if (info.command && info.command !== 'options' && type.primaryProperty) {
              var _primaryProperty2 = type.primaryProperty;
              attrName = info.attrName = _primaryProperty2.attribute;

              info.defaultBindingMode = _primaryProperty2.defaultBindingMode;
            }
          }
        }
      } else if (elementInstruction) {
        elementProperty = elementInstruction.type.attributes[info.attrName];
        if (elementProperty) {
          info.defaultBindingMode = elementProperty.defaultBindingMode;
        }
      }

      if (elementProperty) {
        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
      } else {
        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
      }

      if (instruction) {
        if (instruction.alteredAttr) {
          type = resources.getAttribute(instruction.attrName);
        }

        if (instruction.discrete) {
          expressions.push(instruction);
        } else {
          if (type) {
            instruction.type = type;
            this._configureProperties(instruction, resources);

            if (type.liftsContent) {
              instruction.originalAttrName = originalAttrName;
              liftingInstruction = instruction;
              break;
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (elementProperty) {
            elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
          } else {
            expressions.push(instruction.attributes[instruction.attrName]);
          }
        }
      } else {
        if (type) {
          instruction = BehaviorInstruction.attribute(attrName, type);
          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

          if (type.liftsContent) {
            instruction.originalAttrName = originalAttrName;
            liftingInstruction = instruction;
            break;
          } else {
            behaviorInstructions.push(instruction);
          }
        } else if (elementProperty) {
          elementInstruction.attributes[attrName] = attrValue;
        }
      }
    }

    if (liftingInstruction) {
      liftingInstruction.viewFactory = viewFactory;
      node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
      auTargetID = makeIntoInstructionTarget(node);
      instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
    } else {
      var skipContentProcessing = false;

      if (expressions.length || behaviorInstructions.length) {
        injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
          instruction = behaviorInstructions[i];
          instruction.type.compile(this, resources, node, instruction, parentNode);
          providers.push(instruction.type.target);
          skipContentProcessing = skipContentProcessing || instruction.skipContentProcessing;
        }

        for (i = 0, ii = expressions.length; i < ii; ++i) {
          expression = expressions[i];
          if (expression.attrToRemove !== undefined) {
            node.removeAttribute(expression.attrToRemove);
          }
        }

        auTargetID = makeIntoInstructionTarget(node);
        instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
      }

      if (skipContentProcessing) {
        return node.nextSibling;
      }

      var currentChild = node.firstChild;
      while (currentChild) {
        currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
      }
    }

    return node.nextSibling;
  };

  ViewCompiler.prototype._configureProperties = function _configureProperties(instruction, resources) {
    var type = instruction.type;
    var attrName = instruction.attrName;
    var attributes = instruction.attributes;
    var property = void 0;
    var key = void 0;
    var value = void 0;

    var knownAttribute = resources.mapAttribute(attrName);
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }

    for (key in attributes) {
      value = attributes[key];

      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        property = type.attributes[key];

        if (property !== undefined) {
          value.targetProperty = property.name;
        } else {
          value.targetProperty = key;
        }
      }
    }
  };

  return ViewCompiler;
}();

var ResourceModule = function () {
  function ResourceModule(moduleId) {
    

    this.id = moduleId;
    this.moduleInstance = null;
    this.mainResource = null;
    this.resources = null;
    this.viewStrategy = null;
    this.isInitialized = false;
    this.onLoaded = null;
    this.loadContext = null;
  }

  ResourceModule.prototype.initialize = function initialize(container) {
    var current = this.mainResource;
    var resources = this.resources;
    var vs = this.viewStrategy;

    if (this.isInitialized) {
      return;
    }

    this.isInitialized = true;

    if (current !== undefined) {
      current.metadata.viewStrategy = vs;
      current.initialize(container);
    }

    for (var i = 0, ii = resources.length; i < ii; ++i) {
      current = resources[i];
      current.metadata.viewStrategy = vs;
      current.initialize(container);
    }
  };

  ResourceModule.prototype.register = function register(registry, name) {
    var main = this.mainResource;
    var resources = this.resources;

    if (main !== undefined) {
      main.register(registry, name);
      name = null;
    }

    for (var i = 0, ii = resources.length; i < ii; ++i) {
      resources[i].register(registry, name);
      name = null;
    }
  };

  ResourceModule.prototype.load = function load(container, loadContext) {
    if (this.onLoaded !== null) {
      return this.loadContext === loadContext ? Promise.resolve() : this.onLoaded;
    }

    var main = this.mainResource;
    var resources = this.resources;
    var loads = void 0;

    if (main !== undefined) {
      loads = new Array(resources.length + 1);
      loads[0] = main.load(container, loadContext);
      for (var i = 0, ii = resources.length; i < ii; ++i) {
        loads[i + 1] = resources[i].load(container, loadContext);
      }
    } else {
      loads = new Array(resources.length);
      for (var _i2 = 0, _ii = resources.length; _i2 < _ii; ++_i2) {
        loads[_i2] = resources[_i2].load(container, loadContext);
      }
    }

    this.loadContext = loadContext;
    this.onLoaded = Promise.all(loads);
    return this.onLoaded;
  };

  return ResourceModule;
}();

var ResourceDescription = function () {
  function ResourceDescription(key, exportedValue, resourceTypeMeta) {
    

    if (!resourceTypeMeta) {
      resourceTypeMeta = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, exportedValue);

      if (!resourceTypeMeta) {
        resourceTypeMeta = new HtmlBehaviorResource();
        resourceTypeMeta.elementName = _hyphenate(key);
        __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, resourceTypeMeta, exportedValue);
      }
    }

    if (resourceTypeMeta instanceof HtmlBehaviorResource) {
      if (resourceTypeMeta.elementName === undefined) {
        resourceTypeMeta.elementName = _hyphenate(key);
      } else if (resourceTypeMeta.attributeName === undefined) {
        resourceTypeMeta.attributeName = _hyphenate(key);
      } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
        HtmlBehaviorResource.convention(key, resourceTypeMeta);
      }
    } else if (!resourceTypeMeta.name) {
      resourceTypeMeta.name = _hyphenate(key);
    }

    this.metadata = resourceTypeMeta;
    this.value = exportedValue;
  }

  ResourceDescription.prototype.initialize = function initialize(container) {
    this.metadata.initialize(container, this.value);
  };

  ResourceDescription.prototype.register = function register(registry, name) {
    this.metadata.register(registry, name);
  };

  ResourceDescription.prototype.load = function load(container, loadContext) {
    return this.metadata.load(container, this.value, loadContext);
  };

  return ResourceDescription;
}();

var ModuleAnalyzer = function () {
  function ModuleAnalyzer() {
    

    this.cache = Object.create(null);
  }

  ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
    return this.cache[moduleId];
  };

  ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
    var mainResource = void 0;
    var fallbackValue = void 0;
    var fallbackKey = void 0;
    var resourceTypeMeta = void 0;
    var key = void 0;
    var exportedValue = void 0;
    var resources = [];
    var conventional = void 0;
    var vs = void 0;
    var resourceModule = void 0;

    resourceModule = this.cache[moduleId];
    if (resourceModule) {
      return resourceModule;
    }

    resourceModule = new ResourceModule(moduleId);
    this.cache[moduleId] = resourceModule;

    if (typeof moduleInstance === 'function') {
      moduleInstance = { 'default': moduleInstance };
    }

    if (mainResourceKey) {
      mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
    }

    for (key in moduleInstance) {
      exportedValue = moduleInstance[key];

      if (key === mainResourceKey || typeof exportedValue !== 'function') {
        continue;
      }

      resourceTypeMeta = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, exportedValue);

      if (resourceTypeMeta) {
        if (resourceTypeMeta instanceof HtmlBehaviorResource) {
          ViewResources.convention(exportedValue, resourceTypeMeta);

          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            HtmlBehaviorResource.convention(key, resourceTypeMeta);
          }

          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            resourceTypeMeta.elementName = _hyphenate(key);
          }
        }

        if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
          mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
        } else {
          resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
        }
      } else if (viewStrategy.decorates(exportedValue)) {
        vs = exportedValue;
      } else if (exportedValue instanceof __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["TemplateRegistryEntry"]) {
        vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
      } else {
        if (conventional = ViewResources.convention(exportedValue)) {
          if (conventional.elementName !== null && !mainResource) {
            mainResource = new ResourceDescription(key, exportedValue, conventional);
          } else {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
          }
          __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, conventional, exportedValue);
        } else if (conventional = HtmlBehaviorResource.convention(key)) {
          if (conventional.elementName !== null && !mainResource) {
            mainResource = new ResourceDescription(key, exportedValue, conventional);
          } else {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
          }

          __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, conventional, exportedValue);
        } else if (conventional = __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["ValueConverterResource"].convention(key) || __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["BindingBehaviorResource"].convention(key) || ViewEngineHooksResource.convention(key)) {
          resources.push(new ResourceDescription(key, exportedValue, conventional));
          __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, conventional, exportedValue);
        } else if (!fallbackValue) {
          fallbackValue = exportedValue;
          fallbackKey = key;
        }
      }
    }

    if (!mainResource && fallbackValue) {
      mainResource = new ResourceDescription(fallbackKey, fallbackValue);
    }

    resourceModule.moduleInstance = moduleInstance;
    resourceModule.mainResource = mainResource;
    resourceModule.resources = resources;
    resourceModule.viewStrategy = vs;

    return resourceModule;
  };

  return ModuleAnalyzer;
}();

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating');

function ensureRegistryEntry(loader, urlOrRegistryEntry) {
  if (urlOrRegistryEntry instanceof __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["TemplateRegistryEntry"]) {
    return Promise.resolve(urlOrRegistryEntry);
  }

  return loader.loadTemplate(urlOrRegistryEntry);
}

var ProxyViewFactory = function () {
  function ProxyViewFactory(promise) {
    var _this8 = this;

    

    promise.then(function (x) {
      return _this8.viewFactory = x;
    });
  }

  ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
    return this.viewFactory.create(container, bindingContext, createInstruction, element);
  };

  ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
  };

  ProxyViewFactory.prototype.getCachedView = function getCachedView() {
    return this.viewFactory.getCachedView();
  };

  ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    this.viewFactory.returnViewToCache(view);
  };

  _createClass(ProxyViewFactory, [{
    key: 'isCaching',
    get: function get() {
      return this.viewFactory.isCaching;
    }
  }]);

  return ProxyViewFactory;
}();

var auSlotBehavior = null;

var ViewEngine = (_temp5 = _class14 = function () {
  ViewEngine.inject = function inject() {
    return [__WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["Loader"], __WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["Container"], ViewCompiler, ModuleAnalyzer, ViewResources];
  };

  function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
    

    this.loader = loader;
    this.container = container;
    this.viewCompiler = viewCompiler;
    this.moduleAnalyzer = moduleAnalyzer;
    this.appResources = appResources;
    this._pluginMap = {};

    if (auSlotBehavior === null) {
      auSlotBehavior = new HtmlBehaviorResource();
      auSlotBehavior.attributeName = 'au-slot';
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, auSlotBehavior, SlotCustomAttribute);
    }

    auSlotBehavior.initialize(container, SlotCustomAttribute);
    auSlotBehavior.register(appResources);
  }

  ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
    var name = extension.replace('.', '') + '-resource-plugin';
    this._pluginMap[extension] = name;
    this.loader.addPlugin(name, implementation);
  };

  ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext, target) {
    var _this9 = this;

    loadContext = loadContext || new ResourceLoadContext();

    return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
      var url = registryEntry.address;

      if (registryEntry.onReady) {
        if (!loadContext.hasDependency(url)) {
          loadContext.addDependency(url);
          return registryEntry.onReady;
        }

        if (registryEntry.template === null) {
          return registryEntry.onReady;
        }

        return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
      }

      loadContext.addDependency(url);

      registryEntry.onReady = _this9.loadTemplateResources(registryEntry, compileInstruction, loadContext, target).then(function (resources) {
        registryEntry.resources = resources;

        if (registryEntry.template === null) {
          return registryEntry.factory = null;
        }

        var viewFactory = _this9.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
        return registryEntry.factory = viewFactory;
      });

      return registryEntry.onReady;
    });
  };

  ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext, target) {
    var resources = new ViewResources(this.appResources, registryEntry.address);
    var dependencies = registryEntry.dependencies;
    var importIds = void 0;
    var names = void 0;

    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

    if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
      return Promise.resolve(resources);
    }

    importIds = dependencies.map(function (x) {
      return x.src;
    });
    names = dependencies.map(function (x) {
      return x.name;
    });
    logger.debug('importing resources for ' + registryEntry.address, importIds);

    if (target) {
      var viewModelRequires = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].get(ViewEngine.viewModelRequireMetadataKey, target);
      if (viewModelRequires) {
        var templateImportCount = importIds.length;
        for (var i = 0, ii = viewModelRequires.length; i < ii; ++i) {
          var req = viewModelRequires[i];
          var importId = typeof req === 'function' ? __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(req).moduleId : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_path__["relativeToFile"])(req.src || req, registryEntry.address);

          if (importIds.indexOf(importId) === -1) {
            importIds.push(importId);
            names.push(req.as);
          }
        }
        logger.debug('importing ViewModel resources for ' + compileInstruction.associatedModuleId, importIds.slice(templateImportCount));
      }
    }

    return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
  };

  ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
    var _this10 = this;

    return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
      var normalizedId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(viewModelModule).moduleId;
      var resourceModule = _this10.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

      if (!resourceModule.mainResource) {
        throw new Error('No view model found in module "' + moduleImport + '".');
      }

      resourceModule.initialize(_this10.container);

      return resourceModule.mainResource;
    });
  };

  ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
    var _this11 = this;

    loadContext = loadContext || new ResourceLoadContext();
    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

    moduleIds = moduleIds.map(function (x) {
      return _this11._applyLoaderPlugin(x);
    });

    return this.loader.loadAllModules(moduleIds).then(function (imports) {
      var i = void 0;
      var ii = void 0;
      var analysis = void 0;
      var normalizedId = void 0;
      var current = void 0;
      var associatedModule = void 0;
      var container = _this11.container;
      var moduleAnalyzer = _this11.moduleAnalyzer;
      var allAnalysis = new Array(imports.length);

      for (i = 0, ii = imports.length; i < ii; ++i) {
        current = imports[i];
        normalizedId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(current).moduleId;

        analysis = moduleAnalyzer.analyze(normalizedId, current);
        analysis.initialize(container);
        analysis.register(resources, names[i]);

        allAnalysis[i] = analysis;
      }

      if (compileInstruction.associatedModuleId) {
        associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

        if (associatedModule) {
          associatedModule.register(resources);
        }
      }

      for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
        allAnalysis[i] = allAnalysis[i].load(container, loadContext);
      }

      return Promise.all(allAnalysis).then(function () {
        return resources;
      });
    });
  };

  ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
    var index = id.lastIndexOf('.');
    if (index !== -1) {
      var ext = id.substring(index);
      var pluginName = this._pluginMap[ext];

      if (pluginName === undefined) {
        return id;
      }

      return this.loader.applyPluginToUrl(id, pluginName);
    }

    return id;
  };

  return ViewEngine;
}(), _class14.viewModelRequireMetadataKey = 'aurelia:view-model-require', _temp5);

var Controller = function () {
  function Controller(behavior, instruction, viewModel, container) {
    

    this.behavior = behavior;
    this.instruction = instruction;
    this.viewModel = viewModel;
    this.isAttached = false;
    this.view = null;
    this.isBound = false;
    this.scope = null;
    this.container = container;
    this.elementEvents = container.elementEvents || null;

    var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
    var handlesBind = behavior.handlesBind;
    var attributes = instruction.attributes;
    var boundProperties = this.boundProperties = [];
    var properties = behavior.properties;
    var i = void 0;
    var ii = void 0;

    behavior._ensurePropertiesDefined(viewModel, observerLookup);

    for (i = 0, ii = properties.length; i < ii; ++i) {
      properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
    }
  }

  Controller.prototype.created = function created(owningView) {
    if (this.behavior.handlesCreated) {
      this.viewModel.created(owningView, this.view);
    }
  };

  Controller.prototype.automate = function automate(overrideContext, owningView) {
    this.view.bindingContext = this.viewModel;
    this.view.overrideContext = overrideContext || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["createOverrideContext"])(this.viewModel);
    this.view._isUserControlled = true;

    if (this.behavior.handlesCreated) {
      this.viewModel.created(owningView || null, this.view);
    }

    this.bind(this.view);
  };

  Controller.prototype.bind = function bind(scope) {
    var skipSelfSubscriber = this.behavior.handlesBind;
    var boundProperties = this.boundProperties;
    var i = void 0;
    var ii = void 0;
    var x = void 0;
    var observer = void 0;
    var selfSubscriber = void 0;

    if (this.isBound) {
      if (this.scope === scope) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.scope = scope;

    for (i = 0, ii = boundProperties.length; i < ii; ++i) {
      x = boundProperties[i];
      observer = x.observer;
      selfSubscriber = observer.selfSubscriber;
      observer.publishing = false;

      if (skipSelfSubscriber) {
        observer.selfSubscriber = null;
      }

      x.binding.bind(scope);
      observer.call();

      observer.publishing = true;
      observer.selfSubscriber = selfSubscriber;
    }

    var overrideContext = void 0;
    if (this.view !== null) {
      if (skipSelfSubscriber) {
        this.view.viewModelScope = scope;
      }

      if (this.viewModel === scope.overrideContext.bindingContext) {
        overrideContext = scope.overrideContext;
      } else if (this.instruction.inheritBindingContext) {
        overrideContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["createOverrideContext"])(this.viewModel, scope.overrideContext);
      } else {
        overrideContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["createOverrideContext"])(this.viewModel);
        overrideContext.__parentOverrideContext = scope.overrideContext;
      }

      this.view.bind(this.viewModel, overrideContext);
    } else if (skipSelfSubscriber) {
      overrideContext = scope.overrideContext;

      if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
        overrideContext = Object.assign({}, scope.overrideContext);
        overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
      }
      this.viewModel.bind(scope.bindingContext, overrideContext);
    }
  };

  Controller.prototype.unbind = function unbind() {
    if (this.isBound) {
      var _boundProperties = this.boundProperties;
      var _i3 = void 0;
      var _ii2 = void 0;

      this.isBound = false;
      this.scope = null;

      if (this.view !== null) {
        this.view.unbind();
      }

      if (this.behavior.handlesUnbind) {
        this.viewModel.unbind();
      }

      if (this.elementEvents !== null) {
        this.elementEvents.disposeAll();
      }

      for (_i3 = 0, _ii2 = _boundProperties.length; _i3 < _ii2; ++_i3) {
        _boundProperties[_i3].binding.unbind();
      }
    }
  };

  Controller.prototype.attached = function attached() {
    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    if (this.behavior.handlesAttached) {
      this.viewModel.attached();
    }

    if (this.view !== null) {
      this.view.attached();
    }
  };

  Controller.prototype.detached = function detached() {
    if (this.isAttached) {
      this.isAttached = false;

      if (this.view !== null) {
        this.view.detached();
      }

      if (this.behavior.handlesDetached) {
        this.viewModel.detached();
      }
    }
  };

  return Controller;
}();

var BehaviorPropertyObserver = (_dec7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["subscriberCollection"])(), _dec7(_class15 = function () {
  function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
    

    this.taskQueue = taskQueue;
    this.obj = obj;
    this.propertyName = propertyName;
    this.notqueued = true;
    this.publishing = false;
    this.selfSubscriber = selfSubscriber;
    this.currentValue = this.oldValue = initialValue;
  }

  BehaviorPropertyObserver.prototype.getValue = function getValue() {
    return this.currentValue;
  };

  BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
    var oldValue = this.currentValue;

    if (!Object.is(newValue, oldValue)) {
      this.oldValue = oldValue;
      this.currentValue = newValue;

      if (this.publishing && this.notqueued) {
        if (this.taskQueue.flushing) {
          this.call();
        } else {
          this.notqueued = false;
          this.taskQueue.queueMicroTask(this);
        }
      }
    }
  };

  BehaviorPropertyObserver.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.currentValue;

    this.notqueued = true;

    if (Object.is(newValue, oldValue)) {
      return;
    }

    if (this.selfSubscriber) {
      this.selfSubscriber(newValue, oldValue);
    }

    this.callSubscribers(newValue, oldValue);
    this.oldValue = newValue;
  };

  BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  return BehaviorPropertyObserver;
}()) || _class15);

function getObserver(instance, name) {
  var lookup = instance.__observers__;

  if (lookup === undefined) {
    var ctor = Object.getPrototypeOf(instance).constructor;
    var _behavior = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, ctor);
    if (!_behavior.isInitialized) {
      _behavior.initialize(__WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["Container"].instance || new __WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["Container"](), instance.constructor);
    }

    lookup = _behavior.observerLocator.getOrCreateObserversLookup(instance);
    _behavior._ensurePropertiesDefined(instance, lookup);
  }

  return lookup[name];
}

var BindableProperty = function () {
  function BindableProperty(nameOrConfig) {
    

    if (typeof nameOrConfig === 'string') {
      this.name = nameOrConfig;
    } else {
      Object.assign(this, nameOrConfig);
    }

    this.attribute = this.attribute || _hyphenate(this.name);
    var defaultBindingMode = this.defaultBindingMode;
    if (defaultBindingMode === null || defaultBindingMode === undefined) {
      this.defaultBindingMode = __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["bindingMode"].oneWay;
    } else if (typeof defaultBindingMode === 'string') {
      this.defaultBindingMode = __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["bindingMode"][defaultBindingMode] || __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["bindingMode"].oneWay;
    }
    this.changeHandler = this.changeHandler || null;
    this.owner = null;
    this.descriptor = null;
  }

  BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
    behavior.properties.push(this);
    behavior.attributes[this.attribute] = this;
    this.owner = behavior;

    if (descriptor) {
      this.descriptor = descriptor;
      return this._configureDescriptor(descriptor);
    }

    return undefined;
  };

  BindableProperty.prototype._configureDescriptor = function _configureDescriptor(descriptor) {
    var name = this.name;

    descriptor.configurable = true;
    descriptor.enumerable = true;

    if ('initializer' in descriptor) {
      this.defaultValue = descriptor.initializer;
      delete descriptor.initializer;
      delete descriptor.writable;
    }

    if ('value' in descriptor) {
      this.defaultValue = descriptor.value;
      delete descriptor.value;
      delete descriptor.writable;
    }

    descriptor.get = function () {
      return getObserver(this, name).getValue();
    };

    descriptor.set = function (value) {
      getObserver(this, name).setValue(value);
    };

    descriptor.get.getObserver = function (obj) {
      return getObserver(obj, name);
    };

    return descriptor;
  };

  BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
    var name = this.name;
    var handlerName = void 0;

    if (this.changeHandler === null) {
      handlerName = name + 'Changed';
      if (handlerName in target.prototype) {
        this.changeHandler = handlerName;
      }
    }

    if (this.descriptor === null) {
      Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
    }
  };

  BindableProperty.prototype.createObserver = function createObserver(viewModel) {
    var selfSubscriber = null;
    var defaultValue = this.defaultValue;
    var changeHandlerName = this.changeHandler;
    var name = this.name;
    var initialValue = void 0;

    if (this.hasOptions) {
      return undefined;
    }

    if (changeHandlerName in viewModel) {
      if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          viewModel[changeHandlerName](newValue, oldValue);
          viewModel.propertyChanged(name, newValue, oldValue);
        };
      } else {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel[changeHandlerName](newValue, oldValue);
        };
      }
    } else if ('propertyChanged' in viewModel) {
      selfSubscriber = function selfSubscriber(newValue, oldValue) {
        return viewModel.propertyChanged(name, newValue, oldValue);
      };
    } else if (changeHandlerName !== null) {
      throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
    }

    if (defaultValue !== undefined) {
      initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
    }

    return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
  };

  BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
    var selfSubscriber = void 0;
    var observer = void 0;
    var attribute = void 0;
    var defaultValue = this.defaultValue;

    if (this.isDynamic) {
      for (var _key6 in attributes) {
        this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, _key6, attributes[_key6], boundProperties);
      }
    } else if (!this.hasOptions) {
      observer = observerLookup[this.name];

      if (attributes !== null) {
        selfSubscriber = observer.selfSubscriber;
        attribute = attributes[this.attribute];

        if (behaviorHandlesBind) {
          observer.selfSubscriber = null;
        }

        if (typeof attribute === 'string') {
          viewModel[this.name] = attribute;
          observer.call();
        } else if (attribute) {
          boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
        } else if (defaultValue !== undefined) {
          observer.call();
        }

        observer.selfSubscriber = selfSubscriber;
      }

      observer.publishing = true;
    }
  };

  BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
    var changeHandlerName = name + 'Changed';
    var selfSubscriber = null;
    var observer = void 0;
    var info = void 0;

    if (changeHandlerName in viewModel) {
      if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          viewModel[changeHandlerName](newValue, oldValue);
          viewModel.propertyChanged(name, newValue, oldValue);
        };
      } else {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel[changeHandlerName](newValue, oldValue);
        };
      }
    } else if ('propertyChanged' in viewModel) {
      selfSubscriber = function selfSubscriber(newValue, oldValue) {
        return viewModel.propertyChanged(name, newValue, oldValue);
      };
    }

    observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

    Object.defineProperty(viewModel, name, {
      configurable: true,
      enumerable: true,
      get: observer.getValue.bind(observer),
      set: observer.setValue.bind(observer)
    });

    if (behaviorHandlesBind) {
      observer.selfSubscriber = null;
    }

    if (typeof attribute === 'string') {
      viewModel[name] = attribute;
      observer.call();
    } else if (attribute) {
      info = { observer: observer, binding: attribute.createBinding(viewModel) };
      boundProperties.push(info);
    }

    observer.publishing = true;
    observer.selfSubscriber = selfSubscriber;
  };

  return BindableProperty;
}();

var lastProviderId = 0;

function nextProviderId() {
  return ++lastProviderId;
}

function doProcessContent() {
  return true;
}
function doProcessAttributes() {}

var HtmlBehaviorResource = function () {
  function HtmlBehaviorResource() {
    

    this.elementName = null;
    this.attributeName = null;
    this.attributeDefaultBindingMode = undefined;
    this.liftsContent = false;
    this.targetShadowDOM = false;
    this.shadowDOMOptions = null;
    this.processAttributes = doProcessAttributes;
    this.processContent = doProcessContent;
    this.usesShadowDOM = false;
    this.childBindings = null;
    this.hasDynamicOptions = false;
    this.containerless = false;
    this.properties = [];
    this.attributes = {};
    this.isInitialized = false;
    this.primaryProperty = null;
  }

  HtmlBehaviorResource.convention = function convention(name, existing) {
    var behavior = void 0;

    if (name.endsWith('CustomAttribute')) {
      behavior = existing || new HtmlBehaviorResource();
      behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
    }

    if (name.endsWith('CustomElement')) {
      behavior = existing || new HtmlBehaviorResource();
      behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
    }

    return behavior;
  };

  HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
    if (this.childBindings === null) {
      this.childBindings = [];
    }

    this.childBindings.push(behavior);
  };

  HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
    var proto = target.prototype;
    var properties = this.properties;
    var attributeName = this.attributeName;
    var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
    var i = void 0;
    var ii = void 0;
    var current = void 0;

    if (this.isInitialized) {
      return;
    }

    this.isInitialized = true;
    target.__providerId__ = nextProviderId();

    this.observerLocator = container.get(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["ObserverLocator"]);
    this.taskQueue = container.get(__WEBPACK_IMPORTED_MODULE_7_aurelia_task_queue__["TaskQueue"]);

    this.target = target;
    this.usesShadowDOM = this.targetShadowDOM && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["FEATURE"].shadowDOM;
    this.handlesCreated = 'created' in proto;
    this.handlesBind = 'bind' in proto;
    this.handlesUnbind = 'unbind' in proto;
    this.handlesAttached = 'attached' in proto;
    this.handlesDetached = 'detached' in proto;
    this.htmlName = this.elementName || this.attributeName;

    if (attributeName !== null) {
      if (properties.length === 0) {
        new BindableProperty({
          name: 'value',
          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
          attribute: attributeName,
          defaultBindingMode: attributeDefaultBindingMode
        }).registerWith(target, this);
      }

      current = properties[0];

      if (properties.length === 1 && current.name === 'value') {
        current.isDynamic = current.hasOptions = this.hasDynamicOptions;
        current.defineOn(target, this);
      } else {
        for (i = 0, ii = properties.length; i < ii; ++i) {
          properties[i].defineOn(target, this);
          if (properties[i].primaryProperty) {
            if (this.primaryProperty) {
              throw new Error('Only one bindable property on a custom element can be defined as the default');
            }
            this.primaryProperty = properties[i];
          }
        }

        current = new BindableProperty({
          name: 'value',
          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
          attribute: attributeName,
          defaultBindingMode: attributeDefaultBindingMode
        });

        current.hasOptions = true;
        current.registerWith(target, this);
      }
    } else {
      for (i = 0, ii = properties.length; i < ii; ++i) {
        properties[i].defineOn(target, this);
      }

      this._copyInheritedProperties(container, target);
    }
  };

  HtmlBehaviorResource.prototype.register = function register(registry, name) {
    var _this12 = this;

    if (this.attributeName !== null) {
      registry.registerAttribute(name || this.attributeName, this, this.attributeName);

      if (Array.isArray(this.aliases)) {
        this.aliases.forEach(function (alias) {
          registry.registerAttribute(alias, _this12, _this12.attributeName);
        });
      }
    }

    if (this.elementName !== null) {
      registry.registerElement(name || this.elementName, this);
    }
  };

  HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
    var _this13 = this;

    var options = void 0;

    if (this.elementName !== null) {
      viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
      options = new ViewCompileInstruction(this.targetShadowDOM, true);

      if (!viewStrategy.moduleId) {
        viewStrategy.moduleId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(target).moduleId;
      }

      return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext, target).then(function (viewFactory) {
        if (!transientView || !_this13.viewFactory) {
          _this13.viewFactory = viewFactory;
        }

        return viewFactory;
      });
    }

    return Promise.resolve(this);
  };

  HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
    if (this.liftsContent) {
      if (!instruction.viewFactory) {
        var _template = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createElement('template');
        var fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createDocumentFragment();
        var cacheSize = node.getAttribute('view-cache');
        var part = node.getAttribute('part');

        node.removeAttribute(instruction.originalAttrName);
        __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].replaceNode(_template, node, parentNode);
        fragment.appendChild(node);
        instruction.viewFactory = compiler.compile(fragment, resources);

        if (part) {
          instruction.viewFactory.part = part;
          node.removeAttribute('part');
        }

        if (cacheSize) {
          instruction.viewFactory.setCacheSize(cacheSize);
          node.removeAttribute('view-cache');
        }

        node = _template;
      }
    } else if (this.elementName !== null) {
      var _partReplacements2 = {};

      if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
        var currentChild = node.firstChild;
        var contentElement = this.usesShadowDOM ? null : __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createElement('au-content');
        var nextSibling = void 0;
        var toReplace = void 0;

        while (currentChild) {
          nextSibling = currentChild.nextSibling;

          if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
            _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
            __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].removeNode(currentChild, parentNode);
            instruction.partReplacements = _partReplacements2;
          } else if (contentElement !== null) {
            if (currentChild.nodeType === 3 && _isAllWhitespace(currentChild)) {
              __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].removeNode(currentChild, parentNode);
            } else {
              contentElement.appendChild(currentChild);
            }
          }

          currentChild = nextSibling;
        }

        if (contentElement !== null && contentElement.hasChildNodes()) {
          node.appendChild(contentElement);
        }

        instruction.skipContentProcessing = false;
      } else {
        instruction.skipContentProcessing = true;
      }
    } else if (!this.processContent(compiler, resources, node, instruction)) {
      instruction.skipContentProcessing = true;
    }

    return node;
  };

  HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
    var viewHost = void 0;
    var au = null;

    instruction = instruction || BehaviorInstruction.normal;
    element = element || null;
    bindings = bindings || null;

    if (this.elementName !== null && element) {
      if (this.usesShadowDOM) {
        viewHost = element.attachShadow(this.shadowDOMOptions);
        container.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].boundary, viewHost);
      } else {
        viewHost = element;
        if (this.targetShadowDOM) {
          container.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].boundary, viewHost);
        }
      }
    }

    if (element !== null) {
      element.au = au = element.au || {};
    }

    var viewModel = instruction.viewModel || container.get(this.target);
    var controller = new Controller(this, instruction, viewModel, container);
    var childBindings = this.childBindings;
    var viewFactory = void 0;

    if (this.liftsContent) {
      au.controller = controller;
    } else if (this.elementName !== null) {
      viewFactory = instruction.viewFactory || this.viewFactory;
      container.viewModel = viewModel;

      if (viewFactory) {
        controller.view = viewFactory.create(container, instruction, element);
      }

      if (element !== null) {
        au.controller = controller;

        if (controller.view) {
          if (!this.usesShadowDOM && (element.childNodes.length === 1 || element.contentElement)) {
            var contentElement = element.childNodes[0] || element.contentElement;
            controller.view.contentView = { fragment: contentElement };
            contentElement.parentNode && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].removeNode(contentElement);
          }

          if (instruction.anchorIsContainer) {
            if (childBindings !== null) {
              for (var _i4 = 0, _ii3 = childBindings.length; _i4 < _ii3; ++_i4) {
                controller.view.addBinding(childBindings[_i4].create(element, viewModel, controller));
              }
            }

            controller.view.appendNodesTo(viewHost);
          } else {
            controller.view.insertNodesBefore(viewHost);
          }
        } else if (childBindings !== null) {
          for (var _i5 = 0, _ii4 = childBindings.length; _i5 < _ii4; ++_i5) {
            bindings.push(childBindings[_i5].create(element, viewModel, controller));
          }
        }
      } else if (controller.view) {
        controller.view.controller = controller;

        if (childBindings !== null) {
          for (var _i6 = 0, _ii5 = childBindings.length; _i6 < _ii5; ++_i6) {
            controller.view.addBinding(childBindings[_i6].create(instruction.host, viewModel, controller));
          }
        }
      } else if (childBindings !== null) {
        for (var _i7 = 0, _ii6 = childBindings.length; _i7 < _ii6; ++_i7) {
          bindings.push(childBindings[_i7].create(instruction.host, viewModel, controller));
        }
      }
    } else if (childBindings !== null) {
      for (var _i8 = 0, _ii7 = childBindings.length; _i8 < _ii7; ++_i8) {
        bindings.push(childBindings[_i8].create(element, viewModel, controller));
      }
    }

    if (au !== null) {
      au[this.htmlName] = controller;
    }

    if (instruction.initiatedByBehavior && viewFactory) {
      controller.view.created();
    }

    return controller;
  };

  HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
    var properties = void 0;
    var i = void 0;
    var ii = void 0;
    var observer = void 0;

    if ('__propertiesDefined__' in lookup) {
      return;
    }

    lookup.__propertiesDefined__ = true;
    properties = this.properties;

    for (i = 0, ii = properties.length; i < ii; ++i) {
      observer = properties[i].createObserver(instance);

      if (observer !== undefined) {
        lookup[observer.propertyName] = observer;
      }
    }
  };

  HtmlBehaviorResource.prototype._copyInheritedProperties = function _copyInheritedProperties(container, target) {
    var _this14 = this;

    var behavior = void 0;
    var derived = target;

    while (true) {
      var proto = Object.getPrototypeOf(target.prototype);
      target = proto && proto.constructor;
      if (!target) {
        return;
      }
      behavior = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, target);
      if (behavior) {
        break;
      }
    }
    behavior.initialize(container, target);

    var _loop = function _loop(_i9, _ii8) {
      var prop = behavior.properties[_i9];

      if (_this14.properties.some(function (p) {
        return p.name === prop.name;
      })) {
        return 'continue';
      }

      new BindableProperty(prop).registerWith(derived, _this14);
    };

    for (var _i9 = 0, _ii8 = behavior.properties.length; _i9 < _ii8; ++_i9) {
      var _ret = _loop(_i9, _ii8);

      if (_ret === 'continue') continue;
    }
  };

  return HtmlBehaviorResource;
}();

function createChildObserverDecorator(selectorOrConfig, all) {
  return function (target, key, descriptor) {
    var actualTarget = typeof key === 'string' ? target.constructor : target;
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, actualTarget);

    if (typeof selectorOrConfig === 'string') {
      selectorOrConfig = {
        selector: selectorOrConfig,
        name: key
      };
    }

    if (descriptor) {
      descriptor.writable = true;
      descriptor.configurable = true;
    }

    selectorOrConfig.all = all;
    r.addChildBinding(new ChildObserver(selectorOrConfig));
  };
}

function children(selectorOrConfig) {
  return createChildObserverDecorator(selectorOrConfig, true);
}

function child(selectorOrConfig) {
  return createChildObserverDecorator(selectorOrConfig, false);
}

var ChildObserver = function () {
  function ChildObserver(config) {
    

    this.name = config.name;
    this.changeHandler = config.changeHandler || this.name + 'Changed';
    this.selector = config.selector;
    this.all = config.all;
  }

  ChildObserver.prototype.create = function create(viewHost, viewModel, controller) {
    return new ChildObserverBinder(this.selector, viewHost, this.name, viewModel, controller, this.changeHandler, this.all);
  };

  return ChildObserver;
}();

var noMutations = [];

function trackMutation(groupedMutations, binder, record) {
  var mutations = groupedMutations.get(binder);

  if (!mutations) {
    mutations = [];
    groupedMutations.set(binder, mutations);
  }

  mutations.push(record);
}

function onChildChange(mutations, observer) {
  var binders = observer.binders;
  var bindersLength = binders.length;

  var groupedMutations = new Map();

  for (var _i10 = 0, _ii9 = mutations.length; _i10 < _ii9; ++_i10) {
    var record = mutations[_i10];
    var added = record.addedNodes;
    var removed = record.removedNodes;

    for (var j = 0, jj = removed.length; j < jj; ++j) {
      var _node = removed[j];
      if (_node.nodeType === 1) {
        for (var k = 0; k < bindersLength; ++k) {
          var binder = binders[k];

          if (binder.onRemove(_node)) {
            trackMutation(groupedMutations, binder, record);
          }
        }
      }
    }

    for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
      var _node2 = added[_j];
      if (_node2.nodeType === 1) {
        for (var _k = 0; _k < bindersLength; ++_k) {
          var _binder = binders[_k];

          if (_binder.onAdd(_node2)) {
            trackMutation(groupedMutations, _binder, record);
          }
        }
      }
    }
  }

  groupedMutations.forEach(function (mutationRecords, binder) {
    if (binder.isBound && binder.changeHandler !== null) {
      binder.viewModel[binder.changeHandler](mutationRecords);
    }
  });
}

var ChildObserverBinder = function () {
  function ChildObserverBinder(selector, viewHost, property, viewModel, controller, changeHandler, all) {
    

    this.selector = selector;

    this.viewHost = viewHost;
    this.property = property;
    this.viewModel = viewModel;
    this.controller = controller;
    this.changeHandler = changeHandler in viewModel ? changeHandler : null;
    this.usesShadowDOM = controller.behavior.usesShadowDOM;
    this.all = all;

    if (!this.usesShadowDOM && controller.view && controller.view.contentView) {
      this.contentView = controller.view.contentView;
    } else {
      this.contentView = null;
    }
    this.source = null;
    this.isBound = false;
  }

  ChildObserverBinder.prototype.matches = function matches(element) {
    if (element.matches(this.selector)) {
      if (this.contentView === null) {
        return true;
      }

      var contentView = this.contentView;
      var assignedSlot = element.auAssignedSlot;

      if (assignedSlot && assignedSlot.projectFromAnchors) {
        var anchors = assignedSlot.projectFromAnchors;

        for (var _i11 = 0, _ii10 = anchors.length; _i11 < _ii10; ++_i11) {
          if (anchors[_i11].auOwnerView === contentView) {
            return true;
          }
        }

        return false;
      }

      return element.auOwnerView === contentView;
    }

    return false;
  };

  ChildObserverBinder.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.source = source;
    }
    this.isBound = true;

    var viewHost = this.viewHost;
    var viewModel = this.viewModel;
    var observer = viewHost.__childObserver__;

    if (!observer) {
      observer = viewHost.__childObserver__ = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createMutationObserver(onChildChange);

      var options = {
        childList: true,
        subtree: !this.usesShadowDOM
      };

      observer.observe(viewHost, options);
      observer.binders = [];
    }

    observer.binders.push(this);

    if (this.usesShadowDOM) {
      var current = viewHost.firstElementChild;

      if (this.all) {
        var items = viewModel[this.property];
        if (!items) {
          items = viewModel[this.property] = [];
        } else {
          items.splice(0);
        }

        while (current) {
          if (this.matches(current)) {
            items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
          }

          current = current.nextElementSibling;
        }

        if (this.changeHandler !== null) {
          this.viewModel[this.changeHandler](noMutations);
        }
      } else {
        while (current) {
          if (this.matches(current)) {
            var _value = current.au && current.au.controller ? current.au.controller.viewModel : current;
            this.viewModel[this.property] = _value;

            if (this.changeHandler !== null) {
              this.viewModel[this.changeHandler](_value);
            }

            break;
          }

          current = current.nextElementSibling;
        }
      }
    }
  };

  ChildObserverBinder.prototype.onRemove = function onRemove(element) {
    if (this.matches(element)) {
      var _value2 = element.au && element.au.controller ? element.au.controller.viewModel : element;

      if (this.all) {
        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
        var index = items.indexOf(_value2);

        if (index !== -1) {
          items.splice(index, 1);
        }

        return true;
      }

      var currentValue = this.viewModel[this.property];
      if (currentValue === _value2) {
        this.viewModel[this.property] = null;

        if (this.isBound && this.changeHandler !== null) {
          this.viewModel[this.changeHandler](_value2);
        }
      }
    }

    return false;
  };

  ChildObserverBinder.prototype.onAdd = function onAdd(element) {
    if (this.matches(element)) {
      var _value3 = element.au && element.au.controller ? element.au.controller.viewModel : element;

      if (this.all) {
        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);

        if (this.selector === '*') {
          items.push(_value3);
          return true;
        }

        var index = 0;
        var prev = element.previousElementSibling;

        while (prev) {
          if (this.matches(prev)) {
            index++;
          }

          prev = prev.previousElementSibling;
        }

        items.splice(index, 0, _value3);
        return true;
      }

      this.viewModel[this.property] = _value3;

      if (this.isBound && this.changeHandler !== null) {
        this.viewModel[this.changeHandler](_value3);
      }
    }

    return false;
  };

  ChildObserverBinder.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    var childObserver = this.viewHost.__childObserver__;
    if (childObserver) {
      var binders = childObserver.binders;
      if (binders && binders.length) {
        var idx = binders.indexOf(this);
        if (idx !== -1) {
          binders.splice(idx, 1);
        }
        if (binders.length === 0) {
          childObserver.disconnect();
          this.viewHost.__childObserver__ = null;
        }
      }

      if (this.usesShadowDOM) {
        this.viewModel[this.property] = null;
      }
    }
  };

  return ChildObserverBinder;
}();

function remove(viewSlot, previous) {
  return Array.isArray(previous) ? viewSlot.removeMany(previous, true) : viewSlot.remove(previous, true);
}

var SwapStrategies = {
  before: function before(viewSlot, previous, callback) {
    return previous === undefined ? callback() : callback().then(function () {
      return remove(viewSlot, previous);
    });
  },
  with: function _with(viewSlot, previous, callback) {
    return previous === undefined ? callback() : Promise.all([remove(viewSlot, previous), callback()]);
  },
  after: function after(viewSlot, previous, callback) {
    return Promise.resolve(viewSlot.removeAll(true)).then(callback);
  }
};

function tryActivateViewModel(context) {
  if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
    return Promise.resolve();
  }

  return context.viewModel.activate(context.model) || Promise.resolve();
}

var CompositionEngine = (_dec8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["inject"])(ViewEngine, ViewLocator), _dec8(_class16 = function () {
  function CompositionEngine(viewEngine, viewLocator) {
    

    this.viewEngine = viewEngine;
    this.viewLocator = viewLocator;
  }

  CompositionEngine.prototype._swap = function _swap(context, view) {
    var swapStrategy = SwapStrategies[context.swapOrder] || SwapStrategies.after;
    var previousViews = context.viewSlot.children.slice();

    return swapStrategy(context.viewSlot, previousViews, function () {
      return Promise.resolve(context.viewSlot.add(view)).then(function () {
        if (context.currentController) {
          context.currentController.unbind();
        }
      });
    }).then(function () {
      if (context.compositionTransactionNotifier) {
        context.compositionTransactionNotifier.done();
      }
    });
  };

  CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
    var _this15 = this;

    return this.createController(context).then(function (controller) {
      if (context.compositionTransactionOwnershipToken) {
        return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
          controller.automate(context.overrideContext, context.owningView);

          return _this15._swap(context, controller.view);
        }).then(function () {
          return controller;
        });
      }

      controller.automate(context.overrideContext, context.owningView);

      return _this15._swap(context, controller.view).then(function () {
        return controller;
      });
    });
  };

  CompositionEngine.prototype.createController = function createController(context) {
    var _this16 = this;

    var childContainer = void 0;
    var viewModel = void 0;
    var viewModelResource = void 0;

    var m = void 0;

    return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
      childContainer = context.childContainer;
      viewModel = context.viewModel;
      viewModelResource = context.viewModelResource;
      m = viewModelResource.metadata;

      var viewStrategy = _this16.viewLocator.getViewStrategy(context.view || viewModel);

      if (context.viewResources) {
        viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
      }

      return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
    }).then(function (viewFactory) {
      return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
    });
  };

  CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
    var childContainer = context.childContainer = context.childContainer || context.container.createChild();

    if (typeof context.viewModel === 'string') {
      context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

      return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
        childContainer.autoRegister(viewModelResource.value);

        if (context.host) {
          childContainer.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element, context.host);
        }

        context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
        context.viewModelResource = viewModelResource;
        return context;
      });
    }

    var ctor = context.viewModel.constructor;
    var isClass = typeof context.viewModel === 'function';
    if (isClass) {
      ctor = context.viewModel;
      childContainer.autoRegister(ctor);
    }
    var m = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, ctor);

    m.elementName = m.elementName || 'dynamic-element';

    m.initialize(isClass ? childContainer : context.container || childContainer, ctor);

    context.viewModelResource = { metadata: m, value: ctor };

    if (context.host) {
      childContainer.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element, context.host);
    }
    childContainer.viewModel = context.viewModel = isClass ? childContainer.get(ctor) : context.viewModel;
    return Promise.resolve(context);
  };

  CompositionEngine.prototype.compose = function compose(context) {
    var _this17 = this;

    context.childContainer = context.childContainer || context.container.createChild();
    context.view = this.viewLocator.getViewStrategy(context.view);

    var transaction = context.childContainer.get(CompositionTransaction);
    var compositionTransactionOwnershipToken = transaction.tryCapture();

    if (compositionTransactionOwnershipToken) {
      context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
    } else {
      context.compositionTransactionNotifier = transaction.enlist();
    }

    if (context.viewModel) {
      return this._createControllerAndSwap(context);
    } else if (context.view) {
      if (context.viewResources) {
        context.view.makeRelativeTo(context.viewResources.viewUrl);
      }

      return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
        var result = viewFactory.create(context.childContainer);
        result.bind(context.bindingContext, context.overrideContext);

        if (context.compositionTransactionOwnershipToken) {
          return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
            return _this17._swap(context, result);
          }).then(function () {
            return result;
          });
        }

        return _this17._swap(context, result).then(function () {
          return result;
        });
      });
    } else if (context.viewSlot) {
      context.viewSlot.removeAll();

      if (context.compositionTransactionNotifier) {
        context.compositionTransactionNotifier.done();
      }

      return Promise.resolve(null);
    }

    return Promise.resolve(null);
  };

  return CompositionEngine;
}()) || _class16);

var ElementConfigResource = function () {
  function ElementConfigResource() {
    
  }

  ElementConfigResource.prototype.initialize = function initialize(container, target) {};

  ElementConfigResource.prototype.register = function register(registry, name) {};

  ElementConfigResource.prototype.load = function load(container, target) {
    var config = new target();
    var eventManager = container.get(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["EventManager"]);
    eventManager.registerElementConfig(config);
  };

  return ElementConfigResource;
}();

function resource(instanceOrConfig) {
  return function (target) {
    var isConfig = typeof instanceOrConfig === 'string' || Object.getPrototypeOf(instanceOrConfig) === Object.prototype;
    if (isConfig) {
      target.$resource = instanceOrConfig;
    } else {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, instanceOrConfig, target);
    }
  };
}

function behavior(override) {
  return function (target) {
    if (override instanceof HtmlBehaviorResource) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, override, target);
    } else {
      var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, target);
      Object.assign(r, override);
    }
  };
}

function customElement(name) {
  return function (target) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, target);
    r.elementName = validateBehaviorName(name, 'custom element');
  };
}

function customAttribute(name, defaultBindingMode, aliases) {
  return function (target) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, target);
    r.attributeName = validateBehaviorName(name, 'custom attribute');
    r.attributeDefaultBindingMode = defaultBindingMode;
    r.aliases = aliases;
  };
}

function templateController(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.liftsContent = true;
  };

  return target ? deco(target) : deco;
}

function bindable(nameOrConfigOrTarget, key, descriptor) {
  var deco = function deco(target, key2, descriptor2) {
    var actualTarget = key2 ? target.constructor : target;
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, actualTarget);
    var prop = void 0;

    if (key2) {
      nameOrConfigOrTarget = nameOrConfigOrTarget || {};
      nameOrConfigOrTarget.name = key2;
    }

    prop = new BindableProperty(nameOrConfigOrTarget);
    return prop.registerWith(actualTarget, r, descriptor2);
  };

  if (!nameOrConfigOrTarget) {
    return deco;
  }

  if (key) {
    var _target = nameOrConfigOrTarget;
    nameOrConfigOrTarget = null;
    return deco(_target, key, descriptor);
  }

  return deco;
}

function dynamicOptions(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.hasDynamicOptions = true;
  };

  return target ? deco(target) : deco;
}

var defaultShadowDOMOptions = { mode: 'open' };

function useShadowDOM(targetOrOptions) {
  var options = typeof targetOrOptions === 'function' || !targetOrOptions ? defaultShadowDOMOptions : targetOrOptions;

  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.targetShadowDOM = true;
    r.shadowDOMOptions = options;
  };

  return typeof targetOrOptions === 'function' ? deco(targetOrOptions) : deco;
}

function processAttributes(processor) {
  return function (t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.processAttributes = function (compiler, resources, node, attributes, elementInstruction) {
      try {
        processor(compiler, resources, node, attributes, elementInstruction);
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').error(error);
      }
    };
  };
}

function doNotProcessContent() {
  return false;
}

function processContent(processor) {
  return function (t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.processContent = processor ? function (compiler, resources, node, instruction) {
      try {
        return processor(compiler, resources, node, instruction);
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').error(error);
        return false;
      }
    } : doNotProcessContent;
  };
}

function containerless(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, HtmlBehaviorResource, t);
    r.containerless = true;
  };

  return target ? deco(target) : deco;
}

function useViewStrategy(strategy) {
  return function (target) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(ViewLocator.viewStrategyMetadataKey, strategy, target);
  };
}

function useView(path) {
  return useViewStrategy(new RelativeViewStrategy(path));
}

function inlineView(markup, dependencies, dependencyBaseUrl) {
  return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
}

function noView(targetOrDependencies, dependencyBaseUrl) {
  var target = void 0;
  var dependencies = void 0;
  if (typeof targetOrDependencies === 'function') {
    target = targetOrDependencies;
  } else {
    dependencies = targetOrDependencies;
    target = undefined;
  }

  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(dependencies, dependencyBaseUrl), t);
  };

  return target ? deco(target) : deco;
}

function view(templateOrConfig) {
  return function (target) {
    target.$view = templateOrConfig;
  };
}

function elementConfig(target) {
  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].resource, new ElementConfigResource(), t);
  };

  return target ? deco(target) : deco;
}

function viewResources() {
  for (var _len = arguments.length, resources = Array(_len), _key7 = 0; _key7 < _len; _key7++) {
    resources[_key7] = arguments[_key7];
  }

  return function (target) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["metadata"].define(ViewEngine.viewModelRequireMetadataKey, resources, target);
  };
}

var TemplatingEngine = (_dec9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_6_aurelia_dependency_injection__["Container"], ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec9(_class17 = function () {
  function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
    

    this._container = container;
    this._moduleAnalyzer = moduleAnalyzer;
    this._viewCompiler = viewCompiler;
    this._compositionEngine = compositionEngine;
    container.registerInstance(Animator, Animator.instance = new Animator());
  }

  TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
    this._container.unregister(Animator);
    this._container.registerInstance(Animator, Animator.instance = animator);
  };

  TemplatingEngine.prototype.compose = function compose(context) {
    return this._compositionEngine.compose(context);
  };

  TemplatingEngine.prototype.enhance = function enhance(instruction) {
    if (instruction instanceof __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].Element) {
      instruction = { element: instruction };
    }

    var compilerInstructions = { letExpressions: [] };
    var resources = instruction.resources || this._container.get(ViewResources);

    this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

    var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
    var container = instruction.container || this._container.createChild();
    var view = factory.create(container, BehaviorInstruction.enhance());

    view.bind(instruction.bindingContext || {}, instruction.overrideContext);

    view.firstChild = view.lastChild = view.fragment;
    view.fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["DOM"].createDocumentFragment();
    view.attached();

    return view;
  };

  return TemplatingEngine;
}()) || _class17);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "logLevel", function() { return logLevel; });
/* harmony export (immutable) */ exports["getLogger"] = getLogger;
/* harmony export (immutable) */ exports["addAppender"] = addAppender;
/* harmony export (immutable) */ exports["removeAppender"] = removeAppender;
/* harmony export (immutable) */ exports["getAppenders"] = getAppenders;
/* harmony export (immutable) */ exports["clearAppenders"] = clearAppenders;
/* harmony export (immutable) */ exports["addCustomLevel"] = addCustomLevel;
/* harmony export (immutable) */ exports["removeCustomLevel"] = removeCustomLevel;
/* harmony export (immutable) */ exports["setLevel"] = setLevel;
/* harmony export (immutable) */ exports["getLevel"] = getLevel;
/* harmony export (binding) */ __webpack_require__.d(exports, "Logger", function() { return Logger; });


var logLevel = {
  none: 0,
  error: 10,
  warn: 20,
  info: 30,
  debug: 40
};

var loggers = {};
var appenders = [];
var globalDefaultLevel = logLevel.none;

var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
function isStandardLevel(level) {
  return standardLevels.filter(function (l) {
    return l === level;
  }).length > 0;
}

function appendArgs() {
  return [this].concat(Array.prototype.slice.call(arguments));
}

function logFactory(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var _appenders$i;

      (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
    }
  };
}

function logFactoryCustom(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var appender = appenders[i];
      if (appender[level] !== undefined) {
        appender[level].apply(appender, args);
      }
    }
  };
}

function connectLoggers() {
  var proto = Logger.prototype;
  for (var _level in logLevel) {
    if (isStandardLevel(_level)) {
      if (_level !== 'none') {
        proto[_level] = logFactory(_level);
      }
    } else {
      proto[_level] = logFactoryCustom(_level);
    }
  }
}

function disconnectLoggers() {
  var proto = Logger.prototype;
  for (var _level2 in logLevel) {
    if (_level2 !== 'none') {
      proto[_level2] = function () {};
    }
  }
}

function getLogger(id) {
  return loggers[id] || new Logger(id);
}

function addAppender(appender) {
  if (appenders.push(appender) === 1) {
    connectLoggers();
  }
}

function removeAppender(appender) {
  appenders = appenders.filter(function (a) {
    return a !== appender;
  });
}

function getAppenders() {
  return [].concat(appenders);
}

function clearAppenders() {
  appenders = [];
  disconnectLoggers();
}

function addCustomLevel(name, value) {
  if (logLevel[name] !== undefined) {
    throw Error('Log level "' + name + '" already exists.');
  }

  if (isNaN(value)) {
    throw Error('Value must be a number.');
  }

  logLevel[name] = value;

  if (appenders.length > 0) {
    connectLoggers();
  } else {
    Logger.prototype[name] = function () {};
  }
}

function removeCustomLevel(name) {
  if (logLevel[name] === undefined) {
    return;
  }

  if (isStandardLevel(name)) {
    throw Error('Built-in log level "' + name + '" cannot be removed.');
  }

  delete logLevel[name];
  delete Logger.prototype[name];
}

function setLevel(level) {
  globalDefaultLevel = level;
  for (var key in loggers) {
    loggers[key].setLevel(level);
  }
}

function getLevel() {
  return globalDefaultLevel;
}

var Logger = function () {
  function Logger(id) {
    

    var cached = loggers[id];
    if (cached) {
      return cached;
    }

    loggers[id] = this;
    this.id = id;
    this.level = globalDefaultLevel;
  }

  Logger.prototype.debug = function debug(message) {};

  Logger.prototype.info = function info(message) {};

  Logger.prototype.warn = function warn(message) {};

  Logger.prototype.error = function error(message) {};

  Logger.prototype.setLevel = function setLevel(level) {
    this.level = level;
  };

  Logger.prototype.isDebugEnabled = function isDebugEnabled() {
    return this.level === logLevel.debug;
  };

  return Logger;
}();

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "getArrayObserver", function() { return _getArrayObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getMapObserver", function() { return _getMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getSetObserver", function() { return _getSetObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "targetContext", function() { return targetContext; });
/* harmony export (binding) */ __webpack_require__.d(exports, "sourceContext", function() { return sourceContext; });
/* harmony export (immutable) */ exports["camelCase"] = camelCase;
/* harmony export (immutable) */ exports["createOverrideContext"] = createOverrideContext;
/* harmony export (immutable) */ exports["getContextFor"] = getContextFor;
/* harmony export (immutable) */ exports["createScopeForTest"] = createScopeForTest;
/* harmony export (immutable) */ exports["connectable"] = connectable;
/* harmony export (immutable) */ exports["enqueueBindingConnect"] = enqueueBindingConnect;
/* harmony export (immutable) */ exports["setConnectQueueThreshold"] = setConnectQueueThreshold;
/* harmony export (immutable) */ exports["enableConnectQueue"] = enableConnectQueue;
/* harmony export (immutable) */ exports["disableConnectQueue"] = disableConnectQueue;
/* harmony export (immutable) */ exports["getConnectQueueSize"] = getConnectQueueSize;
/* harmony export (immutable) */ exports["subscriberCollection"] = subscriberCollection;
/* harmony export (binding) */ __webpack_require__.d(exports, "ExpressionObserver", function() { return ExpressionObserver; });
/* harmony export (immutable) */ exports["calcSplices"] = calcSplices;
/* harmony export (immutable) */ exports["mergeSplice"] = mergeSplice;
/* harmony export (immutable) */ exports["projectArraySplices"] = projectArraySplices;
/* harmony export (immutable) */ exports["getChangeRecords"] = getChangeRecords;
/* harmony export (binding) */ __webpack_require__.d(exports, "ModifyCollectionObserver", function() { return ModifyCollectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CollectionLengthObserver", function() { return CollectionLengthObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Expression", function() { return Expression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingBehavior", function() { return BindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ValueConverter", function() { return ValueConverter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Conditional", function() { return Conditional; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AccessThis", function() { return AccessThis; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AccessScope", function() { return AccessScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AccessMember", function() { return AccessMember; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AccessKeyed", function() { return AccessKeyed; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CallScope", function() { return CallScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CallMember", function() { return CallMember; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CallFunction", function() { return CallFunction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Unary", function() { return Unary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LiteralPrimitive", function() { return LiteralPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LiteralString", function() { return LiteralString; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LiteralTemplate", function() { return LiteralTemplate; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LiteralArray", function() { return LiteralArray; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LiteralObject", function() { return LiteralObject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Unparser", function() { return _Unparser; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ExpressionCloner", function() { return ExpressionCloner; });
/* harmony export (immutable) */ exports["cloneExpression"] = cloneExpression;
/* harmony export (binding) */ __webpack_require__.d(exports, "bindingMode", function() { return bindingMode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ParserImplementation", function() { return ParserImplementation; });
/* harmony export (binding) */ __webpack_require__.d(exports, "delegationStrategy", function() { return delegationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EventManager", function() { return EventManager; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EventSubscriber", function() { return EventSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DirtyChecker", function() { return DirtyChecker; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DirtyCheckProperty", function() { return DirtyCheckProperty; });
/* harmony export (binding) */ __webpack_require__.d(exports, "propertyAccessor", function() { return propertyAccessor; });
/* harmony export (binding) */ __webpack_require__.d(exports, "PrimitiveObserver", function() { return PrimitiveObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SetterObserver", function() { return SetterObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "XLinkAttributeObserver", function() { return XLinkAttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "dataAttributeAccessor", function() { return dataAttributeAccessor; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DataAttributeObserver", function() { return DataAttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StyleObserver", function() { return StyleObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ValueAttributeObserver", function() { return ValueAttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CheckedObserver", function() { return CheckedObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SelectValueObserver", function() { return SelectValueObserver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ClassObserver", function() { return ClassObserver; });
/* harmony export (immutable) */ exports["hasDeclaredDependencies"] = hasDeclaredDependencies;
/* harmony export (immutable) */ exports["declarePropertyDependencies"] = declarePropertyDependencies;
/* harmony export (immutable) */ exports["computedFrom"] = computedFrom;
/* harmony export (binding) */ __webpack_require__.d(exports, "ComputedExpression", function() { return ComputedExpression; });
/* harmony export (immutable) */ exports["createComputedObserver"] = createComputedObserver;
/* harmony export (binding) */ __webpack_require__.d(exports, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(exports, "presentationElements", function() { return presentationElements; });
/* harmony export (binding) */ __webpack_require__.d(exports, "presentationAttributes", function() { return presentationAttributes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SVGAnalyzer", function() { return SVGAnalyzer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ObserverLocator", function() { return ObserverLocator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ObjectObservationAdapter", function() { return ObjectObservationAdapter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingExpression", function() { return BindingExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Binding", function() { return Binding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CallExpression", function() { return CallExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ValueConverterResource", function() { return ValueConverterResource; });
/* harmony export (immutable) */ exports["valueConverter"] = valueConverter;
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingBehaviorResource", function() { return BindingBehaviorResource; });
/* harmony export (immutable) */ exports["bindingBehavior"] = bindingBehavior;
/* harmony export (binding) */ __webpack_require__.d(exports, "ListenerExpression", function() { return ListenerExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Listener", function() { return Listener; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NameExpression", function() { return NameExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingEngine", function() { return BindingEngine; });
/* harmony export (immutable) */ exports["observable"] = observable;
/* harmony export (immutable) */ exports["connectBindingToSignal"] = connectBindingToSignal;
/* harmony export (immutable) */ exports["signalBindings"] = signalBindings;




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class12, _temp, _dec10, _class13, _class14, _temp2;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var targetContext = 'Binding:target';
var sourceContext = 'Binding:source';

var map = Object.create(null);

function camelCase(name) {
  if (name in map) {
    return map[name];
  }
  var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
  map[name] = result;
  return result;
}

function createOverrideContext(bindingContext, parentOverrideContext) {
  return {
    bindingContext: bindingContext,
    parentOverrideContext: parentOverrideContext || null
  };
}

function getContextFor(name, scope, ancestor) {
  var oc = scope.overrideContext;

  if (ancestor) {
    while (ancestor && oc) {
      ancestor--;
      oc = oc.parentOverrideContext;
    }
    if (ancestor || !oc) {
      return undefined;
    }
    return name in oc ? oc : oc.bindingContext;
  }

  while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
    oc = oc.parentOverrideContext;
  }
  if (oc) {
    return name in oc ? oc : oc.bindingContext;
  }

  return scope.bindingContext || scope.overrideContext;
}

function createScopeForTest(bindingContext, parentBindingContext) {
  if (parentBindingContext) {
    return {
      bindingContext: bindingContext,
      overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
    };
  }
  return {
    bindingContext: bindingContext,
    overrideContext: createOverrideContext(bindingContext)
  };
}

var slotNames = [];
var versionSlotNames = [];
var lastSlot = -1;
function ensureEnoughSlotNames(currentSlot) {
  if (currentSlot === lastSlot) {
    lastSlot += 5;
    var ii = slotNames.length = versionSlotNames.length = lastSlot + 1;
    for (var i = currentSlot + 1; i < ii; ++i) {
      slotNames[i] = '_observer' + i;
      versionSlotNames[i] = '_observerVersion' + i;
    }
  }
}
ensureEnoughSlotNames(-1);

function addObserver(observer) {
  var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
  var i = observerSlots;
  while (i-- && this[slotNames[i]] !== observer) {}

  if (i === -1) {
    i = 0;
    while (this[slotNames[i]]) {
      i++;
    }
    this[slotNames[i]] = observer;
    observer.subscribe(sourceContext, this);

    if (i === observerSlots) {
      this._observerSlots = i + 1;
    }
  }

  if (this._version === undefined) {
    this._version = 0;
  }
  this[versionSlotNames[i]] = this._version;
  ensureEnoughSlotNames(i);
}

function observeProperty(obj, propertyName) {
  var observer = this.observerLocator.getObserver(obj, propertyName);
  addObserver.call(this, observer);
}

function observeArray(array) {
  var observer = this.observerLocator.getArrayObserver(array);
  addObserver.call(this, observer);
}

function unobserve(all) {
  var i = this._observerSlots;
  while (i--) {
    if (all || this[versionSlotNames[i]] !== this._version) {
      var observer = this[slotNames[i]];
      this[slotNames[i]] = null;
      if (observer) {
        observer.unsubscribe(sourceContext, this);
      }
    }
  }
}

function connectable() {
  return function (target) {
    target.prototype.observeProperty = observeProperty;
    target.prototype.observeArray = observeArray;
    target.prototype.unobserve = unobserve;
    target.prototype.addObserver = addObserver;
  };
}

var queue = [];
var queued = {};
var nextId = 0;
var minimumImmediate = 100;
var frameBudget = 15;

var isFlushRequested = false;
var immediate = 0;

function flush(animationFrameStart) {
  var length = queue.length;
  var i = 0;
  while (i < length) {
    var binding = queue[i];
    queued[binding.__connectQueueId] = false;
    binding.connect(true);
    i++;

    if (i % 100 === 0 && __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].performance.now() - animationFrameStart > frameBudget) {
      break;
    }
  }
  queue.splice(0, i);

  if (queue.length) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].requestAnimationFrame(flush);
  } else {
    isFlushRequested = false;
    immediate = 0;
  }
}

function enqueueBindingConnect(binding) {
  if (immediate < minimumImmediate) {
    immediate++;
    binding.connect(false);
  } else {
    var id = binding.__connectQueueId;
    if (id === undefined) {
      id = nextId;
      nextId++;
      binding.__connectQueueId = id;
    }

    if (!queued[id]) {
      queue.push(binding);
      queued[id] = true;
    }
  }
  if (!isFlushRequested) {
    isFlushRequested = true;
    __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].requestAnimationFrame(flush);
  }
}

function setConnectQueueThreshold(value) {
  minimumImmediate = value;
}

function enableConnectQueue() {
  setConnectQueueThreshold(100);
}

function disableConnectQueue() {
  setConnectQueueThreshold(Number.MAX_SAFE_INTEGER);
}

function getConnectQueueSize() {
  return queue.length;
}

function addSubscriber(context, callable) {
  if (this.hasSubscriber(context, callable)) {
    return false;
  }
  if (!this._context0) {
    this._context0 = context;
    this._callable0 = callable;
    return true;
  }
  if (!this._context1) {
    this._context1 = context;
    this._callable1 = callable;
    return true;
  }
  if (!this._context2) {
    this._context2 = context;
    this._callable2 = callable;
    return true;
  }
  if (!this._contextsRest) {
    this._contextsRest = [context];
    this._callablesRest = [callable];
    return true;
  }
  this._contextsRest.push(context);
  this._callablesRest.push(callable);
  return true;
}

function removeSubscriber(context, callable) {
  if (this._context0 === context && this._callable0 === callable) {
    this._context0 = null;
    this._callable0 = null;
    return true;
  }
  if (this._context1 === context && this._callable1 === callable) {
    this._context1 = null;
    this._callable1 = null;
    return true;
  }
  if (this._context2 === context && this._callable2 === callable) {
    this._context2 = null;
    this._callable2 = null;
    return true;
  }
  var callables = this._callablesRest;
  if (callables === undefined || callables.length === 0) {
    return false;
  }
  var contexts = this._contextsRest;
  var i = 0;
  while (!(callables[i] === callable && contexts[i] === context) && callables.length > i) {
    i++;
  }
  if (i >= callables.length) {
    return false;
  }
  contexts.splice(i, 1);
  callables.splice(i, 1);
  return true;
}

var arrayPool1 = [];
var arrayPool2 = [];
var poolUtilization = [];

function callSubscribers(newValue, oldValue) {
  var context0 = this._context0;
  var callable0 = this._callable0;
  var context1 = this._context1;
  var callable1 = this._callable1;
  var context2 = this._context2;
  var callable2 = this._callable2;
  var length = this._contextsRest ? this._contextsRest.length : 0;
  var contextsRest = void 0;
  var callablesRest = void 0;
  var poolIndex = void 0;
  var i = void 0;
  if (length) {
    poolIndex = poolUtilization.length;
    while (poolIndex-- && poolUtilization[poolIndex]) {}
    if (poolIndex < 0) {
      poolIndex = poolUtilization.length;
      contextsRest = [];
      callablesRest = [];
      poolUtilization.push(true);
      arrayPool1.push(contextsRest);
      arrayPool2.push(callablesRest);
    } else {
      poolUtilization[poolIndex] = true;
      contextsRest = arrayPool1[poolIndex];
      callablesRest = arrayPool2[poolIndex];
    }

    i = length;
    while (i--) {
      contextsRest[i] = this._contextsRest[i];
      callablesRest[i] = this._callablesRest[i];
    }
  }

  if (context0) {
    if (callable0) {
      callable0.call(context0, newValue, oldValue);
    } else {
      context0(newValue, oldValue);
    }
  }
  if (context1) {
    if (callable1) {
      callable1.call(context1, newValue, oldValue);
    } else {
      context1(newValue, oldValue);
    }
  }
  if (context2) {
    if (callable2) {
      callable2.call(context2, newValue, oldValue);
    } else {
      context2(newValue, oldValue);
    }
  }
  if (length) {
    for (i = 0; i < length; i++) {
      var callable = callablesRest[i];
      var context = contextsRest[i];
      if (callable) {
        callable.call(context, newValue, oldValue);
      } else {
        context(newValue, oldValue);
      }
      contextsRest[i] = null;
      callablesRest[i] = null;
    }
    poolUtilization[poolIndex] = false;
  }
}

function hasSubscribers() {
  return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
}

function hasSubscriber(context, callable) {
  var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
  if (has) {
    return true;
  }
  var index = void 0;
  var contexts = this._contextsRest;
  if (!contexts || (index = contexts.length) === 0) {
    return false;
  }
  var callables = this._callablesRest;
  while (index--) {
    if (contexts[index] === context && callables[index] === callable) {
      return true;
    }
  }
  return false;
}

function subscriberCollection() {
  return function (target) {
    target.prototype.addSubscriber = addSubscriber;
    target.prototype.removeSubscriber = removeSubscriber;
    target.prototype.callSubscribers = callSubscribers;
    target.prototype.hasSubscribers = hasSubscribers;
    target.prototype.hasSubscriber = hasSubscriber;
  };
}

var ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
  function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
    

    this.scope = scope;
    this.expression = expression;
    this.observerLocator = observerLocator;
    this.lookupFunctions = lookupFunctions;
  }

  ExpressionObserver.prototype.getValue = function getValue() {
    return this.expression.evaluate(this.scope, this.lookupFunctions);
  };

  ExpressionObserver.prototype.setValue = function setValue(newValue) {
    this.expression.assign(this.scope, newValue);
  };

  ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
    var _this = this;

    if (!this.hasSubscribers()) {
      this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
      this.expression.connect(this, this.scope);
    }
    this.addSubscriber(context, callable);
    if (arguments.length === 1 && context instanceof Function) {
      return {
        dispose: function dispose() {
          _this.unsubscribe(context, callable);
        }
      };
    }
  };

  ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.unobserve(true);
      this.oldValue = undefined;
    }
  };

  ExpressionObserver.prototype.call = function call() {
    var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
    var oldValue = this.oldValue;
    if (newValue !== oldValue) {
      this.oldValue = newValue;
      this.callSubscribers(newValue, oldValue);
    }
    this._version++;
    this.expression.connect(this, this.scope);
    this.unobserve(false);
  };

  return ExpressionObserver;
}()) || _class) || _class);

function isIndex(s) {
  return +s === s >>> 0;
}

function toNumber(s) {
  return +s;
}

function newSplice(index, removed, addedCount) {
  return {
    index: index,
    removed: removed,
    addedCount: addedCount
  };
}

var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;

function ArraySplice() {}

ArraySplice.prototype = {
  calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var rowCount = oldEnd - oldStart + 1;
    var columnCount = currentEnd - currentStart + 1;
    var distances = new Array(rowCount);
    var north = void 0;
    var west = void 0;

    for (var i = 0; i < rowCount; ++i) {
      distances[i] = new Array(columnCount);
      distances[i][0] = i;
    }

    for (var j = 0; j < columnCount; ++j) {
      distances[0][j] = j;
    }

    for (var _i = 1; _i < rowCount; ++_i) {
      for (var _j = 1; _j < columnCount; ++_j) {
        if (this.equals(current[currentStart + _j - 1], old[oldStart + _i - 1])) {
          distances[_i][_j] = distances[_i - 1][_j - 1];
        } else {
          north = distances[_i - 1][_j] + 1;
          west = distances[_i][_j - 1] + 1;
          distances[_i][_j] = north < west ? north : west;
        }
      }
    }

    return distances;
  },

  spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
    var i = distances.length - 1;
    var j = distances[0].length - 1;
    var current = distances[i][j];
    var edits = [];
    while (i > 0 || j > 0) {
      if (i === 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }
      if (j === 0) {
        edits.push(EDIT_DELETE);
        i--;
        continue;
      }
      var northWest = distances[i - 1][j - 1];
      var west = distances[i - 1][j];
      var north = distances[i][j - 1];

      var min = void 0;
      if (west < north) {
        min = west < northWest ? west : northWest;
      } else {
        min = north < northWest ? north : northWest;
      }

      if (min === northWest) {
        if (northWest === current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }
        i--;
        j--;
      } else if (min === west) {
        edits.push(EDIT_DELETE);
        i--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }

    edits.reverse();
    return edits;
  },

  calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var prefixCount = 0;
    var suffixCount = 0;

    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) {
      prefixCount = this.sharedPrefix(current, old, minLength);
    }

    if (currentEnd === current.length && oldEnd === old.length) {
      suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
    }

    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;

    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
      return [];
    }

    if (currentStart === currentEnd) {
      var _splice = newSplice(currentStart, [], 0);
      while (oldStart < oldEnd) {
        _splice.removed.push(old[oldStart++]);
      }

      return [_splice];
    } else if (oldStart === oldEnd) {
      return [newSplice(currentStart, [], currentEnd - currentStart)];
    }

    var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

    var splice = undefined;
    var splices = [];
    var index = currentStart;
    var oldIndex = oldStart;
    for (var i = 0; i < ops.length; ++i) {
      switch (ops[i]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = undefined;
          }

          index++;
          oldIndex++;
          break;
        case EDIT_UPDATE:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.addedCount++;
          index++;

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
        case EDIT_ADD:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.addedCount++;
          index++;
          break;
        case EDIT_DELETE:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }

    if (splice) {
      splices.push(splice);
    }
    return splices;
  },

  sharedPrefix: function sharedPrefix(current, old, searchLength) {
    for (var i = 0; i < searchLength; ++i) {
      if (!this.equals(current[i], old[i])) {
        return i;
      }
    }

    return searchLength;
  },

  sharedSuffix: function sharedSuffix(current, old, searchLength) {
    var index1 = current.length;
    var index2 = old.length;
    var count = 0;
    while (count < searchLength && this.equals(current[--index1], old[--index2])) {
      count++;
    }

    return count;
  },

  calculateSplices: function calculateSplices(current, previous) {
    return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
  },

  equals: function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }
};

var arraySplice = new ArraySplice();

function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
}

function intersect(start1, end1, start2, end2) {
  if (end1 < start2 || end2 < start1) {
    return -1;
  }

  if (end1 === start2 || end2 === start1) {
    return 0;
  }

  if (start1 < start2) {
    if (end1 < end2) {
      return end1 - start2;
    }

    return end2 - start2;
  }

  if (end2 < end1) {
    return end2 - start1;
  }

  return end1 - start1;
}

function mergeSplice(splices, index, removed, addedCount) {
  var splice = newSplice(index, removed, addedCount);

  var inserted = false;
  var insertionOffset = 0;

  for (var i = 0; i < splices.length; i++) {
    var current = splices[i];
    current.index += insertionOffset;

    if (inserted) {
      continue;
    }

    var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

    if (intersectCount >= 0) {

      splices.splice(i, 1);
      i--;

      insertionOffset -= current.addedCount - current.removed.length;

      splice.addedCount += current.addedCount - intersectCount;
      var deleteCount = splice.removed.length + current.removed.length - intersectCount;

      if (!splice.addedCount && !deleteCount) {
        inserted = true;
      } else {
        var currentRemoved = current.removed;

        if (splice.index < current.index) {
          var prepend = splice.removed.slice(0, current.index - splice.index);
          Array.prototype.push.apply(prepend, currentRemoved);
          currentRemoved = prepend;
        }

        if (splice.index + splice.removed.length > current.index + current.addedCount) {
          var append = splice.removed.slice(current.index + current.addedCount - splice.index);
          Array.prototype.push.apply(currentRemoved, append);
        }

        splice.removed = currentRemoved;
        if (current.index < splice.index) {
          splice.index = current.index;
        }
      }
    } else if (splice.index < current.index) {

      inserted = true;

      splices.splice(i, 0, splice);
      i++;

      var offset = splice.addedCount - splice.removed.length;
      current.index += offset;
      insertionOffset += offset;
    }
  }

  if (!inserted) {
    splices.push(splice);
  }
}

function createInitialSplices(array, changeRecords) {
  var splices = [];

  for (var i = 0; i < changeRecords.length; i++) {
    var record = changeRecords[i];
    switch (record.type) {
      case 'splice':
        mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
        break;
      case 'add':
      case 'update':
      case 'delete':
        if (!isIndex(record.name)) {
          continue;
        }

        var index = toNumber(record.name);
        if (index < 0) {
          continue;
        }

        mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
        break;
      default:
        console.error('Unexpected record type: ' + JSON.stringify(record));
        break;
    }
  }

  return splices;
}

function projectArraySplices(array, changeRecords) {
  var splices = [];

  createInitialSplices(array, changeRecords).forEach(function (splice) {
    if (splice.addedCount === 1 && splice.removed.length === 1) {
      if (splice.removed[0] !== array[splice.index]) {
        splices.push(splice);
      }

      return;
    }

    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
  });

  return splices;
}

function newRecord(type, object, key, oldValue) {
  return {
    type: type,
    object: object,
    key: key,
    oldValue: oldValue
  };
}

function getChangeRecords(map) {
  var entries = new Array(map.size);
  var keys = map.keys();
  var i = 0;
  var item = void 0;

  while (item = keys.next()) {
    if (item.done) {
      break;
    }

    entries[i] = newRecord('added', map, item.value);
    i++;
  }

  return entries;
}

var ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
  function ModifyCollectionObserver(taskQueue, collection) {
    

    this.taskQueue = taskQueue;
    this.queued = false;
    this.changeRecords = null;
    this.oldCollection = null;
    this.collection = collection;
    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
  }

  ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
    if (!this.hasSubscribers() && !this.lengthObserver) {
      return;
    }

    if (changeRecord.type === 'splice') {
      var index = changeRecord.index;
      var arrayLength = changeRecord.object.length;
      if (index > arrayLength) {
        index = arrayLength - changeRecord.addedCount;
      } else if (index < 0) {
        index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
      }
      if (index < 0) {
        index = 0;
      }
      changeRecord.index = index;
    }

    if (this.changeRecords === null) {
      this.changeRecords = [changeRecord];
    } else {
      this.changeRecords.push(changeRecord);
    }

    if (!this.queued) {
      this.queued = true;
      this.taskQueue.queueMicroTask(this);
    }
  };

  ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
    if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
      this.call();
    }
  };

  ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
    this.oldCollection = oldCollection;

    if (this.hasSubscribers() && !this.queued) {
      this.queued = true;
      this.taskQueue.queueMicroTask(this);
    }
  };

  ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
    return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
  };

  ModifyCollectionObserver.prototype.call = function call() {
    var changeRecords = this.changeRecords;
    var oldCollection = this.oldCollection;
    var records = void 0;

    this.queued = false;
    this.changeRecords = [];
    this.oldCollection = null;

    if (this.hasSubscribers()) {
      if (oldCollection) {
        if (this.collection instanceof Map || this.collection instanceof Set) {
          records = getChangeRecords(oldCollection);
        } else {
          records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
        }
      } else {
        if (this.collection instanceof Map || this.collection instanceof Set) {
          records = changeRecords;
        } else {
          records = projectArraySplices(this.collection, changeRecords);
        }
      }

      this.callSubscribers(records);
    }

    if (this.lengthObserver) {
      this.lengthObserver.call(this.collection[this.lengthPropertyName]);
    }
  };

  return ModifyCollectionObserver;
}()) || _class2);

var CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
  function CollectionLengthObserver(collection) {
    

    this.collection = collection;
    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
    this.currentValue = collection[this.lengthPropertyName];
  }

  CollectionLengthObserver.prototype.getValue = function getValue() {
    return this.collection[this.lengthPropertyName];
  };

  CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
    this.collection[this.lengthPropertyName] = newValue;
  };

  CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  CollectionLengthObserver.prototype.call = function call(newValue) {
    var oldValue = this.currentValue;
    this.callSubscribers(newValue, oldValue);
    this.currentValue = newValue;
  };

  return CollectionLengthObserver;
}()) || _class3);

var arrayProto = Array.prototype;
var pop = arrayProto.pop;
var push = arrayProto.push;
var reverse = arrayProto.reverse;
var shift = arrayProto.shift;
var sort = arrayProto.sort;
var splice = arrayProto.splice;
var unshift = arrayProto.unshift;

if (arrayProto.__au_patched__) {
  __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('array-observation').warn('Detected 2nd attempt of patching array from Aurelia binding.' + ' This is probably caused by dependency mismatch between core modules and a 3rd party plugin.' + ' Please see https://github.com/aurelia/cli/pull/906 if you are using webpack.');
} else {
  Reflect.defineProperty(arrayProto, '__au_patched__', { value: 1 });
  arrayProto.pop = function () {
    var notEmpty = this.length > 0;
    var methodCallResult = pop.apply(this, arguments);
    if (notEmpty && this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'delete',
        object: this,
        name: this.length,
        oldValue: methodCallResult
      });
    }
    return methodCallResult;
  };

  arrayProto.push = function () {
    var methodCallResult = push.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: this.length - arguments.length,
        removed: [],
        addedCount: arguments.length
      });
    }
    return methodCallResult;
  };

  arrayProto.reverse = function () {
    var oldArray = void 0;
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.flushChangeRecords();
      oldArray = this.slice();
    }
    var methodCallResult = reverse.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.reset(oldArray);
    }
    return methodCallResult;
  };

  arrayProto.shift = function () {
    var notEmpty = this.length > 0;
    var methodCallResult = shift.apply(this, arguments);
    if (notEmpty && this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'delete',
        object: this,
        name: 0,
        oldValue: methodCallResult
      });
    }
    return methodCallResult;
  };

  arrayProto.sort = function () {
    var oldArray = void 0;
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.flushChangeRecords();
      oldArray = this.slice();
    }
    var methodCallResult = sort.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.reset(oldArray);
    }
    return methodCallResult;
  };

  arrayProto.splice = function () {
    var methodCallResult = splice.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: +arguments[0],
        removed: methodCallResult,
        addedCount: arguments.length > 2 ? arguments.length - 2 : 0
      });
    }
    return methodCallResult;
  };

  arrayProto.unshift = function () {
    var methodCallResult = unshift.apply(this, arguments);
    if (this.__array_observer__ !== undefined) {
      this.__array_observer__.addChangeRecord({
        type: 'splice',
        object: this,
        index: 0,
        removed: [],
        addedCount: arguments.length
      });
    }
    return methodCallResult;
  };
}

function _getArrayObserver(taskQueue, array) {
  return ModifyArrayObserver.for(taskQueue, array);
}

var ModifyArrayObserver = function (_ModifyCollectionObse) {
  _inherits(ModifyArrayObserver, _ModifyCollectionObse);

  function ModifyArrayObserver(taskQueue, array) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
  }

  ModifyArrayObserver.for = function _for(taskQueue, array) {
    if (!('__array_observer__' in array)) {
      Reflect.defineProperty(array, '__array_observer__', {
        value: ModifyArrayObserver.create(taskQueue, array),
        enumerable: false, configurable: false
      });
    }
    return array.__array_observer__;
  };

  ModifyArrayObserver.create = function create(taskQueue, array) {
    return new ModifyArrayObserver(taskQueue, array);
  };

  return ModifyArrayObserver;
}(ModifyCollectionObserver);

var Expression = function () {
  function Expression() {
    

    this.isAssignable = false;
  }

  Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
    throw new Error('Binding expression "' + this + '" cannot be evaluated.');
  };

  Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
    throw new Error('Binding expression "' + this + '" cannot be assigned to.');
  };

  Expression.prototype.toString = function toString() {
    return typeof FEATURE_NO_UNPARSER === 'undefined' ? _Unparser.unparse(this) : Function.prototype.toString.call(this);
  };

  return Expression;
}();

var BindingBehavior = function (_Expression) {
  _inherits(BindingBehavior, _Expression);

  function BindingBehavior(expression, name, args) {
    

    var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

    _this3.expression = expression;
    _this3.name = name;
    _this3.args = args;
    return _this3;
  }

  BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.expression.evaluate(scope, lookupFunctions);
  };

  BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
    return this.expression.assign(scope, value, lookupFunctions);
  };

  BindingBehavior.prototype.accept = function accept(visitor) {
    return visitor.visitBindingBehavior(this);
  };

  BindingBehavior.prototype.connect = function connect(binding, scope) {
    this.expression.connect(binding, scope);
  };

  BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
    if (this.expression.expression && this.expression.bind) {
      this.expression.bind(binding, scope, lookupFunctions);
    }
    var behavior = lookupFunctions.bindingBehaviors(this.name);
    if (!behavior) {
      throw new Error('No BindingBehavior named "' + this.name + '" was found!');
    }
    var behaviorKey = 'behavior-' + this.name;
    if (binding[behaviorKey]) {
      throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
    }
    binding[behaviorKey] = behavior;
    behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
  };

  BindingBehavior.prototype.unbind = function unbind(binding, scope) {
    var behaviorKey = 'behavior-' + this.name;
    binding[behaviorKey].unbind(binding, scope);
    binding[behaviorKey] = null;
    if (this.expression.expression && this.expression.unbind) {
      this.expression.unbind(binding, scope);
    }
  };

  return BindingBehavior;
}(Expression);

var ValueConverter = function (_Expression2) {
  _inherits(ValueConverter, _Expression2);

  function ValueConverter(expression, name, args) {
    

    var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

    _this4.expression = expression;
    _this4.name = name;
    _this4.args = args;
    _this4.allArgs = [expression].concat(args);
    return _this4;
  }

  ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var converter = lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }

    if ('toView' in converter) {
      return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
    }

    return this.allArgs[0].evaluate(scope, lookupFunctions);
  };

  ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
    var converter = lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }

    if ('fromView' in converter) {
      value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
    }

    return this.allArgs[0].assign(scope, value, lookupFunctions);
  };

  ValueConverter.prototype.accept = function accept(visitor) {
    return visitor.visitValueConverter(this);
  };

  ValueConverter.prototype.connect = function connect(binding, scope) {
    var expressions = this.allArgs;
    var i = expressions.length;
    while (i--) {
      expressions[i].connect(binding, scope);
    }
    var converter = binding.lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }
    var signals = converter.signals;
    if (signals === undefined) {
      return;
    }
    i = signals.length;
    while (i--) {
      connectBindingToSignal(binding, signals[i]);
    }
  };

  return ValueConverter;
}(Expression);

var Assign = function (_Expression3) {
  _inherits(Assign, _Expression3);

  function Assign(target, value) {
    

    var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

    _this5.target = target;
    _this5.value = value;
    _this5.isAssignable = true;
    return _this5;
  }

  Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
  };

  Assign.prototype.accept = function accept(vistor) {
    vistor.visitAssign(this);
  };

  Assign.prototype.connect = function connect(binding, scope) {};

  Assign.prototype.assign = function assign(scope, value) {
    this.value.assign(scope, value);
    this.target.assign(scope, value);
  };

  return Assign;
}(Expression);

var Conditional = function (_Expression4) {
  _inherits(Conditional, _Expression4);

  function Conditional(condition, yes, no) {
    

    var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

    _this6.condition = condition;
    _this6.yes = yes;
    _this6.no = no;
    return _this6;
  }

  Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return !!this.condition.evaluate(scope, lookupFunctions) ? this.yes.evaluate(scope, lookupFunctions) : this.no.evaluate(scope, lookupFunctions);
  };

  Conditional.prototype.accept = function accept(visitor) {
    return visitor.visitConditional(this);
  };

  Conditional.prototype.connect = function connect(binding, scope) {
    this.condition.connect(binding, scope);
    if (this.condition.evaluate(scope)) {
      this.yes.connect(binding, scope);
    } else {
      this.no.connect(binding, scope);
    }
  };

  return Conditional;
}(Expression);

var AccessThis = function (_Expression5) {
  _inherits(AccessThis, _Expression5);

  function AccessThis(ancestor) {
    

    var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

    _this7.ancestor = ancestor;
    return _this7;
  }

  AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var oc = scope.overrideContext;
    var i = this.ancestor;
    while (i-- && oc) {
      oc = oc.parentOverrideContext;
    }
    return i < 1 && oc ? oc.bindingContext : undefined;
  };

  AccessThis.prototype.accept = function accept(visitor) {
    return visitor.visitAccessThis(this);
  };

  AccessThis.prototype.connect = function connect(binding, scope) {};

  return AccessThis;
}(Expression);

var AccessScope = function (_Expression6) {
  _inherits(AccessScope, _Expression6);

  function AccessScope(name, ancestor) {
    

    var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

    _this8.name = name;
    _this8.ancestor = ancestor;
    _this8.isAssignable = true;
    return _this8;
  }

  AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var context = getContextFor(this.name, scope, this.ancestor);
    return context[this.name];
  };

  AccessScope.prototype.assign = function assign(scope, value) {
    var context = getContextFor(this.name, scope, this.ancestor);
    return context ? context[this.name] = value : undefined;
  };

  AccessScope.prototype.accept = function accept(visitor) {
    return visitor.visitAccessScope(this);
  };

  AccessScope.prototype.connect = function connect(binding, scope) {
    var context = getContextFor(this.name, scope, this.ancestor);
    binding.observeProperty(context, this.name);
  };

  return AccessScope;
}(Expression);

var AccessMember = function (_Expression7) {
  _inherits(AccessMember, _Expression7);

  function AccessMember(object, name) {
    

    var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

    _this9.object = object;
    _this9.name = name;
    _this9.isAssignable = true;
    return _this9;
  }

  AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    return instance === null || instance === undefined ? instance : instance[this.name];
  };

  AccessMember.prototype.assign = function assign(scope, value) {
    var instance = this.object.evaluate(scope);

    if (instance === null || instance === undefined) {
      instance = {};
      this.object.assign(scope, instance);
    }

    instance[this.name] = value;
    return value;
  };

  AccessMember.prototype.accept = function accept(visitor) {
    return visitor.visitAccessMember(this);
  };

  AccessMember.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (obj) {
      binding.observeProperty(obj, this.name);
    }
  };

  return AccessMember;
}(Expression);

var AccessKeyed = function (_Expression8) {
  _inherits(AccessKeyed, _Expression8);

  function AccessKeyed(object, key) {
    

    var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

    _this10.object = object;
    _this10.key = key;
    _this10.isAssignable = true;
    return _this10;
  }

  AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    var lookup = this.key.evaluate(scope, lookupFunctions);
    return getKeyed(instance, lookup);
  };

  AccessKeyed.prototype.assign = function assign(scope, value) {
    var instance = this.object.evaluate(scope);
    var lookup = this.key.evaluate(scope);
    return setKeyed(instance, lookup, value);
  };

  AccessKeyed.prototype.accept = function accept(visitor) {
    return visitor.visitAccessKeyed(this);
  };

  AccessKeyed.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (obj instanceof Object) {
      this.key.connect(binding, scope);
      var key = this.key.evaluate(scope);

      if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
        binding.observeProperty(obj, key);
      }
    }
  };

  return AccessKeyed;
}(Expression);

var CallScope = function (_Expression9) {
  _inherits(CallScope, _Expression9);

  function CallScope(name, args, ancestor) {
    

    var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

    _this11.name = name;
    _this11.args = args;
    _this11.ancestor = ancestor;
    return _this11;
  }

  CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var args = evalList(scope, this.args, lookupFunctions);
    var context = getContextFor(this.name, scope, this.ancestor);
    var func = getFunction(context, this.name, mustEvaluate);
    if (func) {
      return func.apply(context, args);
    }
    return undefined;
  };

  CallScope.prototype.accept = function accept(visitor) {
    return visitor.visitCallScope(this);
  };

  CallScope.prototype.connect = function connect(binding, scope) {
    var args = this.args;
    var i = args.length;
    while (i--) {
      args[i].connect(binding, scope);
    }
  };

  return CallScope;
}(Expression);

var CallMember = function (_Expression10) {
  _inherits(CallMember, _Expression10);

  function CallMember(object, name, args) {
    

    var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

    _this12.object = object;
    _this12.name = name;
    _this12.args = args;
    return _this12;
  }

  CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    var args = evalList(scope, this.args, lookupFunctions);
    var func = getFunction(instance, this.name, mustEvaluate);
    if (func) {
      return func.apply(instance, args);
    }
    return undefined;
  };

  CallMember.prototype.accept = function accept(visitor) {
    return visitor.visitCallMember(this);
  };

  CallMember.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (getFunction(obj, this.name, false)) {
      var args = this.args;
      var i = args.length;
      while (i--) {
        args[i].connect(binding, scope);
      }
    }
  };

  return CallMember;
}(Expression);

var CallFunction = function (_Expression11) {
  _inherits(CallFunction, _Expression11);

  function CallFunction(func, args) {
    

    var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

    _this13.func = func;
    _this13.args = args;
    return _this13;
  }

  CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var func = this.func.evaluate(scope, lookupFunctions);
    if (typeof func === 'function') {
      return func.apply(null, evalList(scope, this.args, lookupFunctions));
    }
    if (!mustEvaluate && (func === null || func === undefined)) {
      return undefined;
    }
    throw new Error(this.func + ' is not a function');
  };

  CallFunction.prototype.accept = function accept(visitor) {
    return visitor.visitCallFunction(this);
  };

  CallFunction.prototype.connect = function connect(binding, scope) {
    this.func.connect(binding, scope);
    var func = this.func.evaluate(scope);
    if (typeof func === 'function') {
      var args = this.args;
      var i = args.length;
      while (i--) {
        args[i].connect(binding, scope);
      }
    }
  };

  return CallFunction;
}(Expression);

var Binary = function (_Expression12) {
  _inherits(Binary, _Expression12);

  function Binary(operation, left, right) {
    

    var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

    _this14.operation = operation;
    _this14.left = left;
    _this14.right = right;
    return _this14;
  }

  Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var left = this.left.evaluate(scope, lookupFunctions);

    switch (this.operation) {
      case '&&':
        return left && this.right.evaluate(scope, lookupFunctions);
      case '||':
        return left || this.right.evaluate(scope, lookupFunctions);
    }

    var right = this.right.evaluate(scope, lookupFunctions);

    switch (this.operation) {
      case '==':
        return left == right;
      case '===':
        return left === right;
      case '!=':
        return left != right;
      case '!==':
        return left !== right;
      case 'instanceof':
        return typeof right === 'function' && left instanceof right;
      case 'in':
        return (typeof right === 'undefined' ? 'undefined' : _typeof(right)) === 'object' && right !== null && left in right;
    }

    if (left === null || right === null || left === undefined || right === undefined) {
      switch (this.operation) {
        case '+':
          if (left !== null && left !== undefined) return left;
          if (right !== null && right !== undefined) return right;
          return 0;
        case '-':
          if (left !== null && left !== undefined) return left;
          if (right !== null && right !== undefined) return 0 - right;
          return 0;
      }

      return null;
    }

    switch (this.operation) {
      case '+':
        return autoConvertAdd(left, right);
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      case '<':
        return left < right;
      case '>':
        return left > right;
      case '<=':
        return left <= right;
      case '>=':
        return left >= right;
      case '^':
        return left ^ right;
    }

    throw new Error('Internal error [' + this.operation + '] not handled');
  };

  Binary.prototype.accept = function accept(visitor) {
    return visitor.visitBinary(this);
  };

  Binary.prototype.connect = function connect(binding, scope) {
    this.left.connect(binding, scope);
    var left = this.left.evaluate(scope);
    if (this.operation === '&&' && !left || this.operation === '||' && left) {
      return;
    }
    this.right.connect(binding, scope);
  };

  return Binary;
}(Expression);

var Unary = function (_Expression13) {
  _inherits(Unary, _Expression13);

  function Unary(operation, expression) {
    

    var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

    _this15.operation = operation;
    _this15.expression = expression;
    return _this15;
  }

  Unary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    switch (this.operation) {
      case '!':
        return !this.expression.evaluate(scope, lookupFunctions);
      case 'typeof':
        return _typeof(this.expression.evaluate(scope, lookupFunctions));
      case 'void':
        return void this.expression.evaluate(scope, lookupFunctions);
    }

    throw new Error('Internal error [' + this.operation + '] not handled');
  };

  Unary.prototype.accept = function accept(visitor) {
    return visitor.visitPrefix(this);
  };

  Unary.prototype.connect = function connect(binding, scope) {
    this.expression.connect(binding, scope);
  };

  return Unary;
}(Expression);

var LiteralPrimitive = function (_Expression14) {
  _inherits(LiteralPrimitive, _Expression14);

  function LiteralPrimitive(value) {
    

    var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

    _this16.value = value;
    return _this16;
  }

  LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.value;
  };

  LiteralPrimitive.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralPrimitive(this);
  };

  LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

  return LiteralPrimitive;
}(Expression);

var LiteralString = function (_Expression15) {
  _inherits(LiteralString, _Expression15);

  function LiteralString(value) {
    

    var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

    _this17.value = value;
    return _this17;
  }

  LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.value;
  };

  LiteralString.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralString(this);
  };

  LiteralString.prototype.connect = function connect(binding, scope) {};

  return LiteralString;
}(Expression);

var LiteralTemplate = function (_Expression16) {
  _inherits(LiteralTemplate, _Expression16);

  function LiteralTemplate(cooked, expressions, raw, tag) {
    

    var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

    _this18.cooked = cooked;
    _this18.expressions = expressions || [];
    _this18.length = _this18.expressions.length;
    _this18.tagged = tag !== undefined;
    if (_this18.tagged) {
      _this18.cooked.raw = raw;
      _this18.tag = tag;
      if (tag instanceof AccessScope) {
        _this18.contextType = 'Scope';
      } else if (tag instanceof AccessMember || tag instanceof AccessKeyed) {
        _this18.contextType = 'Object';
      } else {
        throw new Error(_this18.tag + ' is not a valid template tag');
      }
    }
    return _this18;
  }

  LiteralTemplate.prototype.getScopeContext = function getScopeContext(scope, lookupFunctions) {
    return getContextFor(this.tag.name, scope, this.tag.ancestor);
  };

  LiteralTemplate.prototype.getObjectContext = function getObjectContext(scope, lookupFunctions) {
    return this.tag.object.evaluate(scope, lookupFunctions);
  };

  LiteralTemplate.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var results = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      results[i] = this.expressions[i].evaluate(scope, lookupFunctions);
    }
    if (this.tagged) {
      var func = this.tag.evaluate(scope, lookupFunctions);
      if (typeof func === 'function') {
        var context = this['get' + this.contextType + 'Context'](scope, lookupFunctions);
        return func.call.apply(func, [context, this.cooked].concat(results));
      }
      if (!mustEvaluate) {
        return null;
      }
      throw new Error(this.tag + ' is not a function');
    }
    var result = this.cooked[0];
    for (var _i2 = 0; _i2 < this.length; _i2++) {
      result = String.prototype.concat(result, results[_i2], this.cooked[_i2 + 1]);
    }
    return result;
  };

  LiteralTemplate.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralTemplate(this);
  };

  LiteralTemplate.prototype.connect = function connect(binding, scope) {
    for (var i = 0; i < this.length; i++) {
      this.expressions[i].connect(binding, scope);
    }
    if (this.tagged) {
      this.tag.connect(binding, scope);
    }
  };

  return LiteralTemplate;
}(Expression);

var LiteralArray = function (_Expression17) {
  _inherits(LiteralArray, _Expression17);

  function LiteralArray(elements) {
    

    var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

    _this19.elements = elements;
    return _this19;
  }

  LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var elements = this.elements;
    var result = [];

    for (var i = 0, length = elements.length; i < length; ++i) {
      result[i] = elements[i].evaluate(scope, lookupFunctions);
    }

    return result;
  };

  LiteralArray.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralArray(this);
  };

  LiteralArray.prototype.connect = function connect(binding, scope) {
    var length = this.elements.length;
    for (var i = 0; i < length; i++) {
      this.elements[i].connect(binding, scope);
    }
  };

  return LiteralArray;
}(Expression);

var LiteralObject = function (_Expression18) {
  _inherits(LiteralObject, _Expression18);

  function LiteralObject(keys, values) {
    

    var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

    _this20.keys = keys;
    _this20.values = values;
    return _this20;
  }

  LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = {};
    var keys = this.keys;
    var values = this.values;

    for (var i = 0, length = keys.length; i < length; ++i) {
      instance[keys[i]] = values[i].evaluate(scope, lookupFunctions);
    }

    return instance;
  };

  LiteralObject.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralObject(this);
  };

  LiteralObject.prototype.connect = function connect(binding, scope) {
    var length = this.keys.length;
    for (var i = 0; i < length; i++) {
      this.values[i].connect(binding, scope);
    }
  };

  return LiteralObject;
}(Expression);

function evalList(scope, list, lookupFunctions) {
  var length = list.length;
  var result = [];
  for (var i = 0; i < length; i++) {
    result[i] = list[i].evaluate(scope, lookupFunctions);
  }
  return result;
}

function autoConvertAdd(a, b) {
  if (a !== null && b !== null) {
    if (typeof a === 'string' && typeof b !== 'string') {
      return a + b.toString();
    }

    if (typeof a !== 'string' && typeof b === 'string') {
      return a.toString() + b;
    }

    return a + b;
  }

  if (a !== null) {
    return a;
  }

  if (b !== null) {
    return b;
  }

  return 0;
}

function getFunction(obj, name, mustExist) {
  var func = obj === null || obj === undefined ? null : obj[name];
  if (typeof func === 'function') {
    return func;
  }
  if (!mustExist && (func === null || func === undefined)) {
    return null;
  }
  throw new Error(name + ' is not a function');
}

function getKeyed(obj, key) {
  if (Array.isArray(obj)) {
    return obj[parseInt(key, 10)];
  } else if (obj) {
    return obj[key];
  } else if (obj === null || obj === undefined) {
    return undefined;
  }

  return obj[key];
}

function setKeyed(obj, key, value) {
  if (Array.isArray(obj)) {
    var index = parseInt(key, 10);

    if (obj.length <= index) {
      obj.length = index + 1;
    }

    obj[index] = value;
  } else {
    obj[key] = value;
  }

  return value;
}

var _Unparser = null;


if (typeof FEATURE_NO_UNPARSER === 'undefined') {
  _Unparser = function () {
    function Unparser(buffer) {
      

      this.buffer = buffer;
    }

    Unparser.unparse = function unparse(expression) {
      var buffer = [];
      var visitor = new _Unparser(buffer);

      expression.accept(visitor);

      return buffer.join('');
    };

    Unparser.prototype.write = function write(text) {
      this.buffer.push(text);
    };

    Unparser.prototype.writeArgs = function writeArgs(args) {
      this.write('(');

      for (var i = 0, length = args.length; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        args[i].accept(this);
      }

      this.write(')');
    };

    Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
      var args = behavior.args;

      behavior.expression.accept(this);
      this.write('&' + behavior.name);

      for (var i = 0, length = args.length; i < length; ++i) {
        this.write(':');
        args[i].accept(this);
      }
    };

    Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
      var args = converter.args;

      converter.expression.accept(this);
      this.write('|' + converter.name);

      for (var i = 0, length = args.length; i < length; ++i) {
        this.write(':');
        args[i].accept(this);
      }
    };

    Unparser.prototype.visitAssign = function visitAssign(assign) {
      assign.target.accept(this);
      this.write('=');
      assign.value.accept(this);
    };

    Unparser.prototype.visitConditional = function visitConditional(conditional) {
      conditional.condition.accept(this);
      this.write('?');
      conditional.yes.accept(this);
      this.write(':');
      conditional.no.accept(this);
    };

    Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
      if (access.ancestor === 0) {
        this.write('$this');
        return;
      }
      this.write('$parent');
      var i = access.ancestor - 1;
      while (i--) {
        this.write('.$parent');
      }
    };

    Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
      var i = access.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(access.name);
    };

    Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
      access.object.accept(this);
      this.write('.' + access.name);
    };

    Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
      access.object.accept(this);
      this.write('[');
      access.key.accept(this);
      this.write(']');
    };

    Unparser.prototype.visitCallScope = function visitCallScope(call) {
      var i = call.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
      call.func.accept(this);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallMember = function visitCallMember(call) {
      call.object.accept(this);
      this.write('.' + call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
      this.write('(' + prefix.operation);
      if (prefix.operation.charCodeAt(0) >= 97) {
        this.write(' ');
      }
      prefix.expression.accept(this);
      this.write(')');
    };

    Unparser.prototype.visitBinary = function visitBinary(binary) {
      binary.left.accept(this);
      if (binary.operation.charCodeAt(0) === 105) {
        this.write(' ' + binary.operation + ' ');
      } else {
        this.write(binary.operation);
      }
      binary.right.accept(this);
    };

    Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
      this.write('' + literal.value);
    };

    Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
      var elements = literal.elements;

      this.write('[');

      for (var i = 0, length = elements.length; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        elements[i].accept(this);
      }

      this.write(']');
    };

    Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
      var keys = literal.keys;
      var values = literal.values;

      this.write('{');

      for (var i = 0, length = keys.length; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        this.write('\'' + keys[i] + '\':');
        values[i].accept(this);
      }

      this.write('}');
    };

    Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
      var escaped = literal.value.replace(/'/g, "\'");
      this.write('\'' + escaped + '\'');
    };

    Unparser.prototype.visitLiteralTemplate = function visitLiteralTemplate(literal) {
      var cooked = literal.cooked,
          expressions = literal.expressions;

      var length = expressions.length;
      this.write('`');
      this.write(cooked[0]);
      for (var i = 0; i < length; i++) {
        expressions[i].accept(this);
        this.write(cooked[i + 1]);
      }
      this.write('`');
    };

    return Unparser;
  }();
}

var ExpressionCloner = function () {
  function ExpressionCloner() {
    
  }

  ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
    var clonedArray = [];
    var i = array.length;
    while (i--) {
      clonedArray[i] = array[i].accept(this);
    }
    return clonedArray;
  };

  ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
    return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
  };

  ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
    return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
  };

  ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
    return new Assign(assign.target.accept(this), assign.value.accept(this));
  };

  ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
    return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
  };

  ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
    return new AccessThis(access.ancestor);
  };

  ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
    return new AccessScope(access.name, access.ancestor);
  };

  ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
    return new AccessMember(access.object.accept(this), access.name);
  };

  ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
    return new AccessKeyed(access.object.accept(this), access.key.accept(this));
  };

  ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
    return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
  };

  ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
    return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
  };

  ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
    return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
  };

  ExpressionCloner.prototype.visitUnary = function visitUnary(unary) {
    return new Unary(prefix.operation, prefix.expression.accept(this));
  };

  ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
    return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
  };

  ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
    return new LiteralPrimitive(literal);
  };

  ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
    return new LiteralArray(this.cloneExpressionArray(literal.elements));
  };

  ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
    return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
  };

  ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
    return new LiteralString(literal.value);
  };

  ExpressionCloner.prototype.visitLiteralTemplate = function visitLiteralTemplate(literal) {
    return new LiteralTemplate(literal.cooked, this.cloneExpressionArray(literal.expressions), literal.raw, literal.tag && literal.tag.accept(this));
  };

  return ExpressionCloner;
}();

function cloneExpression(expression) {
  var visitor = new ExpressionCloner();
  return expression.accept(visitor);
}

var bindingMode = {
  oneTime: 0,
  toView: 1,
  oneWay: 1,
  twoWay: 2,
  fromView: 3
};

var Parser = function () {
  function Parser() {
    

    this.cache = Object.create(null);
  }

  Parser.prototype.parse = function parse(src) {
    src = src || '';

    return this.cache[src] || (this.cache[src] = new ParserImplementation(src).parseBindingBehavior());
  };

  return Parser;
}();

var fromCharCode = String.fromCharCode;

var ParserImplementation = function () {
  _createClass(ParserImplementation, [{
    key: 'raw',
    get: function get() {
      return this.src.slice(this.start, this.idx);
    }
  }]);

  function ParserImplementation(src) {
    

    this.idx = 0;

    this.start = 0;

    this.src = src;
    this.len = src.length;

    this.tkn = T$EOF;

    this.val = undefined;

    this.ch = src.charCodeAt(0);
  }

  ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
    this.nextToken();
    if (this.tkn & T$ExpressionTerminal) {
      this.err('Invalid start of expression');
    }
    var result = this.parseValueConverter();
    while (this.opt(T$Ampersand)) {
      result = new BindingBehavior(result, this.val, this.parseVariadicArgs());
    }
    if (this.tkn !== T$EOF) {
      this.err('Unconsumed token ' + this.raw);
    }
    return result;
  };

  ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
    var result = this.parseExpression();
    while (this.opt(T$Bar)) {
      result = new ValueConverter(result, this.val, this.parseVariadicArgs());
    }
    return result;
  };

  ParserImplementation.prototype.parseVariadicArgs = function parseVariadicArgs() {
    this.nextToken();
    var result = [];
    while (this.opt(T$Colon)) {
      result.push(this.parseExpression());
    }
    return result;
  };

  ParserImplementation.prototype.parseExpression = function parseExpression() {
    var exprStart = this.idx;
    var result = this.parseConditional();

    while (this.tkn === T$Eq) {
      if (!result.isAssignable) {
        this.err('Expression ' + this.src.slice(exprStart, this.start) + ' is not assignable');
      }
      this.nextToken();
      exprStart = this.idx;
      result = new Assign(result, this.parseConditional());
    }
    return result;
  };

  ParserImplementation.prototype.parseConditional = function parseConditional() {
    var result = this.parseBinary(0);

    if (this.opt(T$Question)) {
      var yes = this.parseExpression();
      this.expect(T$Colon);
      result = new Conditional(result, yes, this.parseExpression());
    }
    return result;
  };

  ParserImplementation.prototype.parseBinary = function parseBinary(minPrecedence) {
    var left = this.parseLeftHandSide(0);

    while (this.tkn & T$BinaryOp) {
      var opToken = this.tkn;
      if ((opToken & T$Precedence) <= minPrecedence) {
        break;
      }
      this.nextToken();
      left = new Binary(TokenValues[opToken & T$TokenMask], left, this.parseBinary(opToken & T$Precedence));
    }
    return left;
  };

  ParserImplementation.prototype.parseLeftHandSide = function parseLeftHandSide(context) {
    var result = void 0;

    primary: switch (this.tkn) {
      case T$Plus:
        this.nextToken();
        return this.parseLeftHandSide(0);
      case T$Minus:
        this.nextToken();
        return new Binary('-', new LiteralPrimitive(0), this.parseLeftHandSide(0));
      case T$Bang:
      case T$TypeofKeyword:
      case T$VoidKeyword:
        var op = TokenValues[this.tkn & T$TokenMask];
        this.nextToken();
        return new Unary(op, this.parseLeftHandSide(0));
      case T$ParentScope:
        {
          do {
            this.nextToken();
            context++;
            if (this.opt(T$Period)) {
              if (this.tkn === T$Period) {
                this.err();
              }
              continue;
            } else if (this.tkn & T$AccessScopeTerminal) {
              result = new AccessThis(context & C$Ancestor);

              context = context & C$ShorthandProp | C$This;
              break primary;
            } else {
              this.err();
            }
          } while (this.tkn === T$ParentScope);
        }

      case T$Identifier:
        {
          result = new AccessScope(this.val, context & C$Ancestor);
          this.nextToken();
          context = context & C$ShorthandProp | C$Scope;
          break;
        }
      case T$ThisScope:
        this.nextToken();
        result = new AccessThis(0);
        context = context & C$ShorthandProp | C$This;
        break;
      case T$LParen:
        this.nextToken();
        result = this.parseExpression();
        this.expect(T$RParen);
        context = C$Primary;
        break;
      case T$LBracket:
        {
          this.nextToken();
          var _elements = [];
          if (this.tkn !== T$RBracket) {
            do {
              _elements.push(this.parseExpression());
            } while (this.opt(T$Comma));
          }
          this.expect(T$RBracket);
          result = new LiteralArray(_elements);
          context = C$Primary;
          break;
        }
      case T$LBrace:
        {
          var keys = [];
          var values = [];
          this.nextToken();
          while (this.tkn !== T$RBrace) {
            if (this.tkn & T$IdentifierOrKeyword) {
              var ch = this.ch,
                  tkn = this.tkn,
                  idx = this.idx;

              keys.push(this.val);
              this.nextToken();
              if (this.opt(T$Colon)) {
                values.push(this.parseExpression());
              } else {
                this.ch = ch;
                this.tkn = tkn;
                this.idx = idx;
                values.push(this.parseLeftHandSide(C$ShorthandProp));
              }
            } else if (this.tkn & T$Literal) {
              keys.push(this.val);
              this.nextToken();
              this.expect(T$Colon);
              values.push(this.parseExpression());
            } else {
              this.err();
            }
            if (this.tkn !== T$RBrace) {
              this.expect(T$Comma);
            }
          }
          this.expect(T$RBrace);
          result = new LiteralObject(keys, values);
          context = C$Primary;
          break;
        }
      case T$StringLiteral:
        result = new LiteralString(this.val);
        this.nextToken();
        context = C$Primary;
        break;
      case T$TemplateTail:
        result = new LiteralTemplate([this.val]);
        this.nextToken();
        context = C$Primary;
        break;
      case T$TemplateContinuation:
        result = this.parseTemplate(0);
        context = C$Primary;
        break;
      case T$NumericLiteral:
        {
          result = new LiteralPrimitive(this.val);
          this.nextToken();

          break;
        }
      case T$NullKeyword:
      case T$UndefinedKeyword:
      case T$TrueKeyword:
      case T$FalseKeyword:
        result = new LiteralPrimitive(TokenValues[this.tkn & T$TokenMask]);
        this.nextToken();
        context = C$Primary;
        break;
      default:
        if (this.idx >= this.len) {
          this.err('Unexpected end of expression');
        } else {
          this.err();
        }
    }

    if (context & C$ShorthandProp) {
      return result;
    }

    var name = this.val;
    while (this.tkn & T$MemberOrCallExpression) {
      switch (this.tkn) {
        case T$Period:
          this.nextToken();
          if (!(this.tkn & T$IdentifierOrKeyword)) {
            this.err();
          }
          name = this.val;
          this.nextToken();

          context = context & C$Primary | (context & (C$This | C$Scope)) << 1 | context & C$Member | (context & C$Keyed) >> 1 | (context & C$Call) >> 2;
          if (this.tkn === T$LParen) {
            continue;
          }
          if (context & C$Scope) {
            result = new AccessScope(name, result.ancestor);
          } else {
            result = new AccessMember(result, name);
          }
          continue;
        case T$LBracket:
          this.nextToken();
          context = C$Keyed;
          result = new AccessKeyed(result, this.parseExpression());
          this.expect(T$RBracket);
          break;
        case T$LParen:
          this.nextToken();
          var args = [];
          while (this.tkn !== T$RParen) {
            args.push(this.parseExpression());
            if (!this.opt(T$Comma)) {
              break;
            }
          }
          this.expect(T$RParen);
          if (context & C$Scope) {
            result = new CallScope(name, args, result.ancestor);
          } else if (context & (C$Member | C$Primary)) {
            result = new CallMember(result, name, args);
          } else {
            result = new CallFunction(result, args);
          }
          context = C$Call;
          break;
        case T$TemplateTail:
          result = new LiteralTemplate([this.val], [], [this.raw], result);
          this.nextToken();
          break;
        case T$TemplateContinuation:
          result = this.parseTemplate(context | C$Tagged, result);
      }
    }

    return result;
  };

  ParserImplementation.prototype.parseTemplate = function parseTemplate(context, func) {
    var cooked = [this.val];
    var raw = context & C$Tagged ? [this.raw] : undefined;
    this.expect(T$TemplateContinuation);
    var expressions = [this.parseExpression()];

    while ((this.tkn = this.scanTemplateTail()) !== T$TemplateTail) {
      cooked.push(this.val);
      if (context & C$Tagged) {
        raw.push(this.raw);
      }
      this.expect(T$TemplateContinuation);
      expressions.push(this.parseExpression());
    }

    cooked.push(this.val);
    if (context & C$Tagged) {
      raw.push(this.raw);
    }
    this.nextToken();
    return new LiteralTemplate(cooked, expressions, raw, func);
  };

  ParserImplementation.prototype.nextToken = function nextToken() {
    while (this.idx < this.len) {
      if (this.ch <= 0x20) {
        this.next();
        continue;
      }
      this.start = this.idx;
      if (this.ch === 0x24 || this.ch >= 0x61 && this.ch <= 0x7A) {
        this.tkn = this.scanIdentifier();
        return;
      }

      if ((this.tkn = CharScanners[this.ch](this)) !== null) {
        return;
      }
    }
    this.tkn = T$EOF;
  };

  ParserImplementation.prototype.next = function next() {
    return this.ch = this.src.charCodeAt(++this.idx);
  };

  ParserImplementation.prototype.scanIdentifier = function scanIdentifier() {
    while (AsciiIdParts.has(this.next()) || this.ch > 0x7F && IdParts[this.ch]) {}

    return KeywordLookup[this.val = this.raw] || T$Identifier;
  };

  ParserImplementation.prototype.scanNumber = function scanNumber(isFloat) {
    if (isFloat) {
      this.val = 0;
    } else {
      this.val = this.ch - 0x30;
      while (this.next() <= 0x39 && this.ch >= 0x30) {
        this.val = this.val * 10 + this.ch - 0x30;
      }
    }

    if (isFloat || this.ch === 0x2E) {
      if (!isFloat) {
        this.next();
      }
      var start = this.idx;
      var value = this.ch - 0x30;
      while (this.next() <= 0x39 && this.ch >= 0x30) {
        value = value * 10 + this.ch - 0x30;
      }
      this.val = this.val + value / Math.pow(10, this.idx - start);
    }

    if (this.ch === 0x65 || this.ch === 0x45) {
      var _start = this.idx;

      this.next();
      if (this.ch === 0x2D || this.ch === 0x2B) {
        this.next();
      }

      if (!(this.ch >= 0x30 && this.ch <= 0x39)) {
        this.idx = _start;
        this.err('Invalid exponent');
      }
      while (this.next() <= 0x39 && this.ch >= 0x30) {}
      this.val = parseFloat(this.src.slice(this.start, this.idx));
    }

    return T$NumericLiteral;
  };

  ParserImplementation.prototype.scanString = function scanString() {
    var quote = this.ch;
    this.next();

    var buffer = void 0;
    var marker = this.idx;

    while (this.ch !== quote) {
      if (this.ch === 0x5C) {
        if (!buffer) {
          buffer = [];
        }

        buffer.push(this.src.slice(marker, this.idx));

        this.next();

        var _unescaped = void 0;

        if (this.ch === 0x75) {
          this.next();

          if (this.idx + 4 < this.len) {
            var hex = this.src.slice(this.idx, this.idx + 4);

            if (!/[A-Z0-9]{4}/i.test(hex)) {
              this.err('Invalid unicode escape [\\u' + hex + ']');
            }

            _unescaped = parseInt(hex, 16);
            this.idx += 4;
            this.ch = this.src.charCodeAt(this.idx);
          } else {
            this.err();
          }
        } else {
          _unescaped = unescape(this.ch);
          this.next();
        }

        buffer.push(fromCharCode(_unescaped));
        marker = this.idx;
      } else if (this.ch === 0 || this.idx >= this.len) {
        this.err('Unterminated quote');
      } else {
        this.next();
      }
    }

    var last = this.src.slice(marker, this.idx);
    this.next();
    var unescaped = last;

    if (buffer !== null && buffer !== undefined) {
      buffer.push(last);
      unescaped = buffer.join('');
    }

    this.val = unescaped;
    return T$StringLiteral;
  };

  ParserImplementation.prototype.scanTemplate = function scanTemplate() {
    var tail = true;
    var result = '';

    while (this.next() !== 0x60) {
      if (this.ch === 0x24) {
        if (this.idx + 1 < this.len && this.src.charCodeAt(this.idx + 1) === 0x7B) {
          this.idx++;
          tail = false;
          break;
        } else {
          result += '$';
        }
      } else if (this.ch === 0x5C) {
        result += fromCharCode(unescape(this.next()));
      } else if (this.ch === 0 || this.idx >= this.len) {
        this.err('Unterminated template literal');
      } else {
        result += fromCharCode(this.ch);
      }
    }

    this.next();
    this.val = result;
    if (tail) {
      return T$TemplateTail;
    }
    return T$TemplateContinuation;
  };

  ParserImplementation.prototype.scanTemplateTail = function scanTemplateTail() {
    if (this.idx >= this.len) {
      this.err('Unterminated template');
    }
    this.idx--;
    return this.scanTemplate();
  };

  ParserImplementation.prototype.err = function err() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unexpected token ' + this.raw;
    var column = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.start;

    throw new Error('Parser Error: ' + message + ' at column ' + column + ' in expression [' + this.src + ']');
  };

  ParserImplementation.prototype.opt = function opt(token) {
    if (this.tkn === token) {
      this.nextToken();
      return true;
    }

    return false;
  };

  ParserImplementation.prototype.expect = function expect(token) {
    if (this.tkn === token) {
      this.nextToken();
    } else {
      this.err('Missing expected token ' + TokenValues[token & T$TokenMask], this.idx);
    }
  };

  return ParserImplementation;
}();

function unescape(code) {
  switch (code) {
    case 0x66:
      return 0xC;
    case 0x6E:
      return 0xA;
    case 0x72:
      return 0xD;
    case 0x74:
      return 0x9;
    case 0x76:
      return 0xB;
    default:
      return code;
  }
}

var C$This = 1 << 10;
var C$Scope = 1 << 11;
var C$Member = 1 << 12;
var C$Keyed = 1 << 13;
var C$Call = 1 << 14;
var C$Primary = 1 << 15;
var C$ShorthandProp = 1 << 16;
var C$Tagged = 1 << 17;

var C$Ancestor = (1 << 9) - 1;

var T$TokenMask = (1 << 6) - 1;

var T$PrecShift = 6;

var T$Precedence = 7 << T$PrecShift;

var T$ExpressionTerminal = 1 << 11;

var T$ClosingToken = 1 << 12;

var T$OpeningToken = 1 << 13;

var T$AccessScopeTerminal = 1 << 14;
var T$Keyword = 1 << 15;
var T$EOF = 1 << 16 | T$AccessScopeTerminal | T$ExpressionTerminal;
var T$Identifier = 1 << 17;
var T$IdentifierOrKeyword = T$Identifier | T$Keyword;
var T$Literal = 1 << 18;
var T$NumericLiteral = 1 << 19 | T$Literal;
var T$StringLiteral = 1 << 20 | T$Literal;
var T$BinaryOp = 1 << 21;

var T$UnaryOp = 1 << 22;

var T$MemberExpression = 1 << 23;

var T$MemberOrCallExpression = 1 << 24;
var T$TemplateTail = 1 << 25 | T$MemberOrCallExpression;
var T$TemplateContinuation = 1 << 26 | T$MemberOrCallExpression;

var T$FalseKeyword = 0 | T$Keyword | T$Literal;
var T$TrueKeyword = 1 | T$Keyword | T$Literal;
var T$NullKeyword = 2 | T$Keyword | T$Literal;
var T$UndefinedKeyword = 3 | T$Keyword | T$Literal;
var T$ThisScope = 4 | T$IdentifierOrKeyword;
var T$ParentScope = 5 | T$IdentifierOrKeyword;

var T$LParen = 6 | T$OpeningToken | T$AccessScopeTerminal | T$MemberOrCallExpression;
var T$LBrace = 7 | T$OpeningToken;
var T$Period = 8 | T$MemberExpression | T$MemberOrCallExpression;
var T$RBrace = 9 | T$AccessScopeTerminal | T$ClosingToken | T$ExpressionTerminal;
var T$RParen = 10 | T$AccessScopeTerminal | T$ClosingToken | T$ExpressionTerminal;
var T$Comma = 11 | T$AccessScopeTerminal;
var T$LBracket = 12 | T$OpeningToken | T$AccessScopeTerminal | T$MemberExpression | T$MemberOrCallExpression;
var T$RBracket = 13 | T$ClosingToken | T$ExpressionTerminal;
var T$Colon = 14 | T$AccessScopeTerminal;
var T$Question = 15;

var T$Ampersand = 18 | T$AccessScopeTerminal;
var T$Bar = 19 | T$AccessScopeTerminal;
var T$BarBar = 20 | 1 << T$PrecShift | T$BinaryOp;
var T$AmpersandAmpersand = 21 | 2 << T$PrecShift | T$BinaryOp;
var T$Caret = 22 | 3 << T$PrecShift | T$BinaryOp;
var T$EqEq = 23 | 4 << T$PrecShift | T$BinaryOp;
var T$BangEq = 24 | 4 << T$PrecShift | T$BinaryOp;
var T$EqEqEq = 25 | 4 << T$PrecShift | T$BinaryOp;
var T$BangEqEq = 26 | 4 << T$PrecShift | T$BinaryOp;
var T$Lt = 27 | 5 << T$PrecShift | T$BinaryOp;
var T$Gt = 28 | 5 << T$PrecShift | T$BinaryOp;
var T$LtEq = 29 | 5 << T$PrecShift | T$BinaryOp;
var T$GtEq = 30 | 5 << T$PrecShift | T$BinaryOp;
var T$InKeyword = 31 | 5 << T$PrecShift | T$BinaryOp | T$Keyword;
var T$InstanceOfKeyword = 32 | 5 << T$PrecShift | T$BinaryOp | T$Keyword;
var T$Plus = 33 | 6 << T$PrecShift | T$BinaryOp | T$UnaryOp;
var T$Minus = 34 | 6 << T$PrecShift | T$BinaryOp | T$UnaryOp;
var T$TypeofKeyword = 35 | T$UnaryOp | T$Keyword;
var T$VoidKeyword = 36 | T$UnaryOp | T$Keyword;
var T$Star = 37 | 7 << T$PrecShift | T$BinaryOp;
var T$Percent = 38 | 7 << T$PrecShift | T$BinaryOp;
var T$Slash = 39 | 7 << T$PrecShift | T$BinaryOp;
var T$Eq = 40;
var T$Bang = 41 | T$UnaryOp;

var KeywordLookup = Object.create(null);
KeywordLookup.true = T$TrueKeyword;
KeywordLookup.null = T$NullKeyword;
KeywordLookup.false = T$FalseKeyword;
KeywordLookup.undefined = T$UndefinedKeyword;
KeywordLookup.$this = T$ThisScope;
KeywordLookup.$parent = T$ParentScope;
KeywordLookup.in = T$InKeyword;
KeywordLookup.instanceof = T$InstanceOfKeyword;
KeywordLookup.typeof = T$TypeofKeyword;
KeywordLookup.void = T$VoidKeyword;

var TokenValues = [false, true, null, undefined, '$this', '$parent', '(', '{', '.', '}', ')', ',', '[', ']', ':', '?', '\'', '"', '&', '|', '||', '&&', '^', '==', '!=', '===', '!==', '<', '>', '<=', '>=', 'in', 'instanceof', '+', '-', 'typeof', 'void', '*', '%', '/', '=', '!'];

var codes = {
  AsciiIdPart: [0x24, 0, 0x30, 0x3A, 0x41, 0x5B, 0x5F, 0, 0x61, 0x7B],
  IdStart: [0x24, 0, 0x41, 0x5B, 0x5F, 0, 0x61, 0x7B, 0xAA, 0, 0xBA, 0, 0xC0, 0xD7, 0xD8, 0xF7, 0xF8, 0x2B9, 0x2E0, 0x2E5, 0x1D00, 0x1D26, 0x1D2C, 0x1D5D, 0x1D62, 0x1D66, 0x1D6B, 0x1D78, 0x1D79, 0x1DBF, 0x1E00, 0x1F00, 0x2071, 0, 0x207F, 0, 0x2090, 0x209D, 0x212A, 0x212C, 0x2132, 0, 0x214E, 0, 0x2160, 0x2189, 0x2C60, 0x2C80, 0xA722, 0xA788, 0xA78B, 0xA7AF, 0xA7B0, 0xA7B8, 0xA7F7, 0xA800, 0xAB30, 0xAB5B, 0xAB5C, 0xAB65, 0xFB00, 0xFB07, 0xFF21, 0xFF3B, 0xFF41, 0xFF5B],
  Digit: [0x30, 0x3A],
  Skip: [0, 0x21, 0x7F, 0xA1]
};

function decompress(lookup, set, compressed, value) {
  var rangeCount = compressed.length;
  for (var i = 0; i < rangeCount; i += 2) {
    var start = compressed[i];
    var end = compressed[i + 1];
    end = end > 0 ? end : start + 1;
    if (lookup) {
      var j = start;
      while (j < end) {
        lookup[j] = value;
        j++;
      }
    }
    if (set) {
      for (var ch = start; ch < end; ch++) {
        set.add(ch);
      }
    }
  }
}

function returnToken(token) {
  return function (p) {
    p.next();
    return token;
  };
}
function unexpectedCharacter(p) {
  p.err('Unexpected character [' + fromCharCode(p.ch) + ']');
  return null;
}

var AsciiIdParts = new Set();
decompress(null, AsciiIdParts, codes.AsciiIdPart, true);

var IdParts = new Uint8Array(0xFFFF);
decompress(IdParts, null, codes.IdStart, 1);
decompress(IdParts, null, codes.Digit, 1);

var CharScanners = new Array(0xFFFF);
var ci = 0;
while (ci < 0xFFFF) {
  CharScanners[ci] = unexpectedCharacter;
  ci++;
}

decompress(CharScanners, null, codes.Skip, function (p) {
  p.next();
  return null;
});
decompress(CharScanners, null, codes.IdStart, function (p) {
  return p.scanIdentifier();
});
decompress(CharScanners, null, codes.Digit, function (p) {
  return p.scanNumber(false);
});

CharScanners[0x22] = CharScanners[0x27] = function (p) {
  return p.scanString();
};
CharScanners[0x60] = function (p) {
  return p.scanTemplate();
};

CharScanners[0x21] = function (p) {
  if (p.next() !== 0x3D) {
    return T$Bang;
  }
  if (p.next() !== 0x3D) {
    return T$BangEq;
  }
  p.next();
  return T$BangEqEq;
};

CharScanners[0x3D] = function (p) {
  if (p.next() !== 0x3D) {
    return T$Eq;
  }
  if (p.next() !== 0x3D) {
    return T$EqEq;
  }
  p.next();
  return T$EqEqEq;
};

CharScanners[0x26] = function (p) {
  if (p.next() !== 0x26) {
    return T$Ampersand;
  }
  p.next();
  return T$AmpersandAmpersand;
};

CharScanners[0x7C] = function (p) {
  if (p.next() !== 0x7C) {
    return T$Bar;
  }
  p.next();
  return T$BarBar;
};

CharScanners[0x2E] = function (p) {
  if (p.next() <= 0x39 && p.ch >= 0x30) {
    return p.scanNumber(true);
  }
  return T$Period;
};

CharScanners[0x3C] = function (p) {
  if (p.next() !== 0x3D) {
    return T$Lt;
  }
  p.next();
  return T$LtEq;
};

CharScanners[0x3E] = function (p) {
  if (p.next() !== 0x3D) {
    return T$Gt;
  }
  p.next();
  return T$GtEq;
};

CharScanners[0x25] = returnToken(T$Percent);
CharScanners[0x28] = returnToken(T$LParen);
CharScanners[0x29] = returnToken(T$RParen);
CharScanners[0x2A] = returnToken(T$Star);
CharScanners[0x2B] = returnToken(T$Plus);
CharScanners[0x2C] = returnToken(T$Comma);
CharScanners[0x2D] = returnToken(T$Minus);
CharScanners[0x2F] = returnToken(T$Slash);
CharScanners[0x3A] = returnToken(T$Colon);
CharScanners[0x3F] = returnToken(T$Question);
CharScanners[0x5B] = returnToken(T$LBracket);
CharScanners[0x5D] = returnToken(T$RBracket);
CharScanners[0x5E] = returnToken(T$Caret);
CharScanners[0x7B] = returnToken(T$LBrace);
CharScanners[0x7D] = returnToken(T$RBrace);

var mapProto = Map.prototype;

function _getMapObserver(taskQueue, map) {
  return ModifyMapObserver.for(taskQueue, map);
}

var ModifyMapObserver = function (_ModifyCollectionObse2) {
  _inherits(ModifyMapObserver, _ModifyCollectionObse2);

  function ModifyMapObserver(taskQueue, map) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
  }

  ModifyMapObserver.for = function _for(taskQueue, map) {
    if (!('__map_observer__' in map)) {
      Reflect.defineProperty(map, '__map_observer__', {
        value: ModifyMapObserver.create(taskQueue, map),
        enumerable: false, configurable: false
      });
    }
    return map.__map_observer__;
  };

  ModifyMapObserver.create = function create(taskQueue, map) {
    var observer = new ModifyMapObserver(taskQueue, map);

    var proto = mapProto;
    if (proto.set !== map.set || proto.delete !== map.delete || proto.clear !== map.clear) {
      proto = {
        set: map.set,
        delete: map.delete,
        clear: map.clear
      };
    }

    map.set = function () {
      var hasValue = map.has(arguments[0]);
      var type = hasValue ? 'update' : 'add';
      var oldValue = map.get(arguments[0]);
      var methodCallResult = proto.set.apply(map, arguments);
      if (!hasValue || oldValue !== map.get(arguments[0])) {
        observer.addChangeRecord({
          type: type,
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
      }
      return methodCallResult;
    };

    map.delete = function () {
      var hasValue = map.has(arguments[0]);
      var oldValue = map.get(arguments[0]);
      var methodCallResult = proto.delete.apply(map, arguments);
      if (hasValue) {
        observer.addChangeRecord({
          type: 'delete',
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
      }
      return methodCallResult;
    };

    map.clear = function () {
      var methodCallResult = proto.clear.apply(map, arguments);
      observer.addChangeRecord({
        type: 'clear',
        object: map
      });
      return methodCallResult;
    };

    return observer;
  };

  return ModifyMapObserver;
}(ModifyCollectionObserver);

var emLogger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('event-manager');

function findOriginalEventTarget(event) {
  return event.composedPath && event.composedPath()[0] || event.deepPath && event.deepPath()[0] || event.path && event.path[0] || event.target;
}

function stopPropagation() {
  this.standardStopPropagation();
  this.propagationStopped = true;
}

function handleCapturedEvent(event) {
  event.propagationStopped = false;
  var target = findOriginalEventTarget(event);

  var orderedCallbacks = [];

  while (target) {
    if (target.capturedCallbacks) {
      var callback = target.capturedCallbacks[event.type];
      if (callback) {
        if (event.stopPropagation !== stopPropagation) {
          event.standardStopPropagation = event.stopPropagation;
          event.stopPropagation = stopPropagation;
        }
        orderedCallbacks.push(callback);
      }
    }
    target = target.parentNode;
  }
  for (var i = orderedCallbacks.length - 1; i >= 0 && !event.propagationStopped; i--) {
    var orderedCallback = orderedCallbacks[i];
    if ('handleEvent' in orderedCallback) {
      orderedCallback.handleEvent(event);
    } else {
      orderedCallback(event);
    }
  }
}

var CapturedHandlerEntry = function () {
  function CapturedHandlerEntry(eventName) {
    

    this.eventName = eventName;
    this.count = 0;
  }

  CapturedHandlerEntry.prototype.increment = function increment() {
    this.count++;

    if (this.count === 1) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].addEventListener(this.eventName, handleCapturedEvent, true);
    }
  };

  CapturedHandlerEntry.prototype.decrement = function decrement() {
    if (this.count === 0) {
      emLogger.warn('The same EventListener was disposed multiple times.');
    } else if (--this.count === 0) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].removeEventListener(this.eventName, handleCapturedEvent, true);
    }
  };

  return CapturedHandlerEntry;
}();

var DelegateHandlerEntry = function () {
  function DelegateHandlerEntry(eventName, eventManager) {
    

    this.eventName = eventName;
    this.count = 0;
    this.eventManager = eventManager;
  }

  DelegateHandlerEntry.prototype.handleEvent = function handleEvent(event) {
    event.propagationStopped = false;
    var target = findOriginalEventTarget(event);

    while (target && !event.propagationStopped) {
      if (target.delegatedCallbacks) {
        var callback = target.delegatedCallbacks[event.type];
        if (callback) {
          if (event.stopPropagation !== stopPropagation) {
            event.standardStopPropagation = event.stopPropagation;
            event.stopPropagation = stopPropagation;
          }
          if ('handleEvent' in callback) {
            callback.handleEvent(event);
          } else {
            callback(event);
          }
        }
      }

      var parent = target.parentNode;
      var shouldEscapeShadowRoot = this.eventManager.escapeShadowRoot && parent instanceof ShadowRoot;

      target = shouldEscapeShadowRoot ? parent.host : parent;
    }
  };

  DelegateHandlerEntry.prototype.increment = function increment() {
    this.count++;

    if (this.count === 1) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].addEventListener(this.eventName, this, false);
    }
  };

  DelegateHandlerEntry.prototype.decrement = function decrement() {
    if (this.count === 0) {
      emLogger.warn('The same EventListener was disposed multiple times.');
    } else if (--this.count === 0) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].removeEventListener(this.eventName, this, false);
    }
  };

  return DelegateHandlerEntry;
}();

var DelegationEntryHandler = function () {
  function DelegationEntryHandler(entry, lookup, targetEvent) {
    

    this.entry = entry;
    this.lookup = lookup;
    this.targetEvent = targetEvent;
  }

  DelegationEntryHandler.prototype.dispose = function dispose() {
    if (this.lookup[this.targetEvent]) {
      this.entry.decrement();
      this.lookup[this.targetEvent] = null;
    } else {
      emLogger.warn('Calling .dispose() on already disposed eventListener');
    }
  };

  return DelegationEntryHandler;
}();

var EventHandler = function () {
  function EventHandler(target, targetEvent, callback) {
    

    this.target = target;
    this.targetEvent = targetEvent;
    this.callback = callback;
  }

  EventHandler.prototype.dispose = function dispose() {
    this.target.removeEventListener(this.targetEvent, this.callback);
  };

  return EventHandler;
}();

var DefaultEventStrategy = function () {
  function DefaultEventStrategy(eventManager) {
    

    this.delegatedHandlers = {};
    this.capturedHandlers = {};

    this.eventManager = eventManager;
  }

  DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, strategy, disposable) {
    var delegatedHandlers = void 0;
    var capturedHandlers = void 0;
    var handlerEntry = void 0;

    if (strategy === delegationStrategy.bubbling) {
      delegatedHandlers = this.delegatedHandlers;
      handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent, this.eventManager));
      var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});
      if (!delegatedCallbacks[targetEvent]) {
        handlerEntry.increment();
      } else {
        emLogger.warn('Overriding previous callback for event listener', { event: targetEvent, callback: callback, previousCallback: delegatedCallbacks[targetEvent] });
      }
      delegatedCallbacks[targetEvent] = callback;

      if (disposable === true) {
        return new DelegationEntryHandler(handlerEntry, delegatedCallbacks, targetEvent);
      }

      return function () {
        handlerEntry.decrement();
        delegatedCallbacks[targetEvent] = null;
      };
    }
    if (strategy === delegationStrategy.capturing) {
      capturedHandlers = this.capturedHandlers;
      handlerEntry = capturedHandlers[targetEvent] || (capturedHandlers[targetEvent] = new CapturedHandlerEntry(targetEvent));
      var capturedCallbacks = target.capturedCallbacks || (target.capturedCallbacks = {});
      if (!capturedCallbacks[targetEvent]) {
        handlerEntry.increment();
      } else {
        emLogger.error('already have a callback for event', { event: targetEvent, callback: callback });
      }
      capturedCallbacks[targetEvent] = callback;

      if (disposable === true) {
        return new DelegationEntryHandler(handlerEntry, capturedCallbacks, targetEvent);
      }

      return function () {
        handlerEntry.decrement();
        capturedCallbacks[targetEvent] = null;
      };
    }

    target.addEventListener(targetEvent, callback);

    if (disposable === true) {
      return new EventHandler(target, targetEvent, callback);
    }

    return function () {
      target.removeEventListener(targetEvent, callback);
    };
  };

  return DefaultEventStrategy;
}();

var delegationStrategy = {
  none: 0,
  capturing: 1,
  bubbling: 2
};

var EventManager = function () {
  function EventManager() {
    var escapeShadowRoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    

    this.elementHandlerLookup = {};
    this.eventStrategyLookup = {};
    this.escapeShadowRoot = escapeShadowRoot;

    this.registerElementConfig({
      tagName: 'input',
      properties: {
        value: ['change', 'input'],
        checked: ['change', 'input'],
        files: ['change', 'input']
      }
    });

    this.registerElementConfig({
      tagName: 'textarea',
      properties: {
        value: ['change', 'input']
      }
    });

    this.registerElementConfig({
      tagName: 'select',
      properties: {
        value: ['change']
      }
    });

    this.registerElementConfig({
      tagName: 'content editable',
      properties: {
        value: ['change', 'input', 'blur', 'keyup', 'paste']
      }
    });

    this.registerElementConfig({
      tagName: 'scrollable element',
      properties: {
        scrollTop: ['scroll'],
        scrollLeft: ['scroll']
      }
    });

    this.defaultEventStrategy = new DefaultEventStrategy(this);
  }

  EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
    var tagName = config.tagName.toLowerCase();
    var properties = config.properties;
    var propertyName = void 0;

    var lookup = this.elementHandlerLookup[tagName] = {};

    for (propertyName in properties) {
      if (properties.hasOwnProperty(propertyName)) {
        lookup[propertyName] = properties[propertyName];
      }
    }
  };

  EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
    this.eventStrategyLookup[eventName] = strategy;
  };

  EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
    var tagName = void 0;
    var lookup = this.elementHandlerLookup;

    if (target.tagName) {
      tagName = target.tagName.toLowerCase();

      if (lookup[tagName] && lookup[tagName][propertyName]) {
        return new EventSubscriber(lookup[tagName][propertyName]);
      }

      if (propertyName === 'textContent' || propertyName === 'innerHTML') {
        return new EventSubscriber(lookup['content editable'].value);
      }

      if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
        return new EventSubscriber(lookup['scrollable element'][propertyName]);
      }
    }

    return null;
  };

  EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callbackOrListener, delegate, disposable) {
    return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callbackOrListener, delegate, disposable);
  };

  return EventManager;
}();

var EventSubscriber = function () {
  function EventSubscriber(events) {
    

    this.events = events;
    this.element = null;
    this.handler = null;
  }

  EventSubscriber.prototype.subscribe = function subscribe(element, callbackOrListener) {
    this.element = element;
    this.handler = callbackOrListener;

    var events = this.events;
    for (var i = 0, ii = events.length; ii > i; ++i) {
      element.addEventListener(events[i], callbackOrListener);
    }
  };

  EventSubscriber.prototype.dispose = function dispose() {
    if (this.element === null) {
      return;
    }
    var element = this.element;
    var callbackOrListener = this.handler;
    var events = this.events;
    for (var i = 0, ii = events.length; ii > i; ++i) {
      element.removeEventListener(events[i], callbackOrListener);
    }
    this.element = this.handler = null;
  };

  return EventSubscriber;
}();

var DirtyChecker = function () {
  function DirtyChecker() {
    

    this.tracked = [];
    this.checkDelay = 120;
  }

  DirtyChecker.prototype.addProperty = function addProperty(property) {
    var tracked = this.tracked;

    tracked.push(property);

    if (tracked.length === 1) {
      this.scheduleDirtyCheck();
    }
  };

  DirtyChecker.prototype.removeProperty = function removeProperty(property) {
    var tracked = this.tracked;
    tracked.splice(tracked.indexOf(property), 1);
  };

  DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
    var _this22 = this;

    setTimeout(function () {
      return _this22.check();
    }, this.checkDelay);
  };

  DirtyChecker.prototype.check = function check() {
    var tracked = this.tracked;
    var i = tracked.length;

    while (i--) {
      var current = tracked[i];

      if (current.isDirty()) {
        current.call();
      }
    }

    if (tracked.length) {
      this.scheduleDirtyCheck();
    }
  };

  return DirtyChecker;
}();

var DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
  function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
    

    this.dirtyChecker = dirtyChecker;
    this.obj = obj;
    this.propertyName = propertyName;
  }

  DirtyCheckProperty.prototype.getValue = function getValue() {
    return this.obj[this.propertyName];
  };

  DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
    this.obj[this.propertyName] = newValue;
  };

  DirtyCheckProperty.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.getValue();

    this.callSubscribers(newValue, oldValue);

    this.oldValue = newValue;
  };

  DirtyCheckProperty.prototype.isDirty = function isDirty() {
    return this.oldValue !== this.obj[this.propertyName];
  };

  DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.oldValue = this.getValue();
      this.dirtyChecker.addProperty(this);
    }
    this.addSubscriber(context, callable);
  };

  DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.dirtyChecker.removeProperty(this);
    }
  };

  return DirtyCheckProperty;
}()) || _class5);

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('property-observation');

var propertyAccessor = {
  getValue: function getValue(obj, propertyName) {
    return obj[propertyName];
  },
  setValue: function setValue(value, obj, propertyName) {
    obj[propertyName] = value;
  }
};

var PrimitiveObserver = function () {
  function PrimitiveObserver(primitive, propertyName) {
    

    this.doNotCache = true;

    this.primitive = primitive;
    this.propertyName = propertyName;
  }

  PrimitiveObserver.prototype.getValue = function getValue() {
    return this.primitive[this.propertyName];
  };

  PrimitiveObserver.prototype.setValue = function setValue() {
    var type = _typeof(this.primitive);
    throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
  };

  PrimitiveObserver.prototype.subscribe = function subscribe() {};

  PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

  return PrimitiveObserver;
}();

var SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
  function SetterObserver(taskQueue, obj, propertyName) {
    

    this.taskQueue = taskQueue;
    this.obj = obj;
    this.propertyName = propertyName;
    this.queued = false;
    this.observing = false;
  }

  SetterObserver.prototype.getValue = function getValue() {
    return this.obj[this.propertyName];
  };

  SetterObserver.prototype.setValue = function setValue(newValue) {
    this.obj[this.propertyName] = newValue;
  };

  SetterObserver.prototype.getterValue = function getterValue() {
    return this.currentValue;
  };

  SetterObserver.prototype.setterValue = function setterValue(newValue) {
    var oldValue = this.currentValue;

    if (oldValue !== newValue) {
      if (!this.queued) {
        this.oldValue = oldValue;
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }

      this.currentValue = newValue;
    }
  };

  SetterObserver.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.oldValue = this.currentValue;

    this.queued = false;

    this.callSubscribers(newValue, oldValue);
  };

  SetterObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.observing) {
      this.convertProperty();
    }
    this.addSubscriber(context, callable);
  };

  SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  SetterObserver.prototype.convertProperty = function convertProperty() {
    this.observing = true;
    this.currentValue = this.obj[this.propertyName];
    this.setValue = this.setterValue;
    this.getValue = this.getterValue;

    if (!Reflect.defineProperty(this.obj, this.propertyName, {
      configurable: true,
      enumerable: this.propertyName in this.obj ? this.obj.propertyIsEnumerable(this.propertyName) : true,
      get: this.getValue.bind(this),
      set: this.setValue.bind(this)
    })) {
      logger.warn('Cannot observe property \'' + this.propertyName + '\' of object', this.obj);
    }
  };

  return SetterObserver;
}()) || _class7);

var XLinkAttributeObserver = function () {
  function XLinkAttributeObserver(element, propertyName, attributeName) {
    

    this.element = element;
    this.propertyName = propertyName;
    this.attributeName = attributeName;
  }

  XLinkAttributeObserver.prototype.getValue = function getValue() {
    return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
  };

  XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
    return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
  };

  XLinkAttributeObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return XLinkAttributeObserver;
}();

var dataAttributeAccessor = {
  getValue: function getValue(obj, propertyName) {
    return obj.getAttribute(propertyName);
  },
  setValue: function setValue(value, obj, propertyName) {
    if (value === null || value === undefined) {
      obj.removeAttribute(propertyName);
    } else {
      obj.setAttribute(propertyName, value);
    }
  }
};

var DataAttributeObserver = function () {
  function DataAttributeObserver(element, propertyName) {
    

    this.element = element;
    this.propertyName = propertyName;
  }

  DataAttributeObserver.prototype.getValue = function getValue() {
    return this.element.getAttribute(this.propertyName);
  };

  DataAttributeObserver.prototype.setValue = function setValue(newValue) {
    if (newValue === null || newValue === undefined) {
      return this.element.removeAttribute(this.propertyName);
    }
    return this.element.setAttribute(this.propertyName, newValue);
  };

  DataAttributeObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return DataAttributeObserver;
}();

var StyleObserver = function () {
  function StyleObserver(element, propertyName) {
    

    this.element = element;
    this.propertyName = propertyName;

    this.styles = null;
    this.version = 0;
  }

  StyleObserver.prototype.getValue = function getValue() {
    return this.element.style.cssText;
  };

  StyleObserver.prototype._setProperty = function _setProperty(style, value) {
    var priority = '';

    if (value !== null && value !== undefined && typeof value.indexOf === 'function' && value.indexOf('!important') !== -1) {
      priority = 'important';
      value = value.replace('!important', '');
    }
    this.element.style.setProperty(style, value, priority);
  };

  StyleObserver.prototype.setValue = function setValue(newValue) {
    var styles = this.styles || {};
    var style = void 0;
    var version = this.version;

    if (newValue !== null && newValue !== undefined) {
      if (newValue instanceof Object) {
        var value = void 0;
        for (style in newValue) {
          if (newValue.hasOwnProperty(style)) {
            value = newValue[style];
            style = style.replace(/([A-Z])/g, function (m) {
              return '-' + m.toLowerCase();
            });
            styles[style] = version;
            this._setProperty(style, value);
          }
        }
      } else if (newValue.length) {
        var rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g;
        var pair = void 0;
        while ((pair = rx.exec(newValue)) !== null) {
          style = pair[1];
          if (!style) {
            continue;
          }

          styles[style] = version;
          this._setProperty(style, pair[2]);
        }
      }
    }

    this.styles = styles;
    this.version += 1;

    if (version === 0) {
      return;
    }

    version -= 1;
    for (style in styles) {
      if (!styles.hasOwnProperty(style) || styles[style] !== version) {
        continue;
      }

      this.element.style.removeProperty(style);
    }
  };

  StyleObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return StyleObserver;
}();

var ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
  function ValueAttributeObserver(element, propertyName, handler) {
    

    this.element = element;
    this.propertyName = propertyName;
    this.handler = handler;
    if (propertyName === 'files') {
      this.setValue = function () {};
    }
  }

  ValueAttributeObserver.prototype.getValue = function getValue() {
    return this.element[this.propertyName];
  };

  ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
    newValue = newValue === undefined || newValue === null ? '' : newValue;
    if (this.element[this.propertyName] !== newValue) {
      this.element[this.propertyName] = newValue;
      this.notify();
    }
  };

  ValueAttributeObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.getValue();

    this.callSubscribers(newValue, oldValue);

    this.oldValue = newValue;
  };

  ValueAttributeObserver.prototype.handleEvent = function handleEvent() {
    this.notify();
  };

  ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.oldValue = this.getValue();
      this.handler.subscribe(this.element, this);
    }

    this.addSubscriber(context, callable);
  };

  ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.handler.dispose();
    }
  };

  return ValueAttributeObserver;
}()) || _class8);

var checkedArrayContext = 'CheckedObserver:array';
var checkedValueContext = 'CheckedObserver:value';

var CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
  function CheckedObserver(element, handler, observerLocator) {
    

    this.element = element;
    this.handler = handler;
    this.observerLocator = observerLocator;
  }

  CheckedObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  CheckedObserver.prototype.setValue = function setValue(newValue) {
    if (this.initialSync && this.value === newValue) {
      return;
    }

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(checkedArrayContext, this);
      this.arrayObserver = null;
    }

    if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
      this.arrayObserver.subscribe(checkedArrayContext, this);
    }

    this.oldValue = this.value;
    this.value = newValue;
    this.synchronizeElement();
    this.notify();

    if (!this.initialSync) {
      this.initialSync = true;
      this.observerLocator.taskQueue.queueMicroTask(this);
    }
  };

  CheckedObserver.prototype.call = function call(context, splices) {
    this.synchronizeElement();

    if (!this.valueObserver) {
      this.valueObserver = this.element.__observers__.model || this.element.__observers__.value;
      if (this.valueObserver) {
        this.valueObserver.subscribe(checkedValueContext, this);
      }
    }
  };

  CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
    var value = this.value;
    var element = this.element;
    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
    var isRadio = element.type === 'radio';
    var matcher = element.matcher || function (a, b) {
      return a === b;
    };

    element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && value.findIndex(function (item) {
      return !!matcher(item, elementValue);
    }) !== -1;
  };

  CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
    var value = this.value;
    var element = this.element;
    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
    var index = void 0;
    var matcher = element.matcher || function (a, b) {
      return a === b;
    };

    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        index = value.findIndex(function (item) {
          return !!matcher(item, elementValue);
        });
        if (element.checked && index === -1) {
          value.push(elementValue);
        } else if (!element.checked && index !== -1) {
          value.splice(index, 1);
        }

        return;
      }

      value = element.checked;
    } else if (element.checked) {
      value = elementValue;
    } else {
      return;
    }

    this.oldValue = this.value;
    this.value = value;
    this.notify();
  };

  CheckedObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.value;

    if (newValue === oldValue) {
      return;
    }

    this.callSubscribers(newValue, oldValue);
  };

  CheckedObserver.prototype.handleEvent = function handleEvent() {
    this.synchronizeValue();
  };

  CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.handler.subscribe(this.element, this);
    }
    this.addSubscriber(context, callable);
  };

  CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.handler.dispose();
    }
  };

  CheckedObserver.prototype.unbind = function unbind() {
    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(checkedArrayContext, this);
      this.arrayObserver = null;
    }
    if (this.valueObserver) {
      this.valueObserver.unsubscribe(checkedValueContext, this);
    }
  };

  return CheckedObserver;
}()) || _class9);

var selectArrayContext = 'SelectValueObserver:array';

var SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
  function SelectValueObserver(element, handler, observerLocator) {
    

    this.element = element;
    this.handler = handler;
    this.observerLocator = observerLocator;
  }

  SelectValueObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  SelectValueObserver.prototype.setValue = function setValue(newValue) {
    if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
      throw new Error('Only null or Array instances can be bound to a multi-select.');
    }
    if (this.value === newValue) {
      return;
    }

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(selectArrayContext, this);
      this.arrayObserver = null;
    }

    if (Array.isArray(newValue)) {
      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
      this.arrayObserver.subscribe(selectArrayContext, this);
    }

    this.oldValue = this.value;
    this.value = newValue;
    this.synchronizeOptions();
    this.notify();

    if (!this.initialSync) {
      this.initialSync = true;
      this.observerLocator.taskQueue.queueMicroTask(this);
    }
  };

  SelectValueObserver.prototype.call = function call(context, splices) {
    this.synchronizeOptions();
  };

  SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
    var value = this.value;
    var isArray = void 0;

    if (Array.isArray(value)) {
      isArray = true;
    }

    var options = this.element.options;
    var i = options.length;
    var matcher = this.element.matcher || function (a, b) {
      return a === b;
    };

    var _loop = function _loop() {
      var option = options.item(i);
      var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
      if (isArray) {
        option.selected = value.findIndex(function (item) {
          return !!matcher(optionValue, item);
        }) !== -1;
        return 'continue';
      }
      option.selected = !!matcher(optionValue, value);
    };

    while (i--) {
      var _ret = _loop();

      if (_ret === 'continue') continue;
    }
  };

  SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
    var _this23 = this;

    var options = this.element.options;
    var count = 0;
    var value = [];

    for (var i = 0, ii = options.length; i < ii; i++) {
      var _option = options.item(i);
      if (!_option.selected) {
        continue;
      }
      value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
      count++;
    }

    if (this.element.multiple) {
      if (Array.isArray(this.value)) {
        var _ret2 = function () {
          var matcher = _this23.element.matcher || function (a, b) {
            return a === b;
          };

          var i = 0;

          var _loop2 = function _loop2() {
            var a = _this23.value[i];
            if (value.findIndex(function (b) {
              return matcher(a, b);
            }) === -1) {
              _this23.value.splice(i, 1);
            } else {
              i++;
            }
          };

          while (i < _this23.value.length) {
            _loop2();
          }

          i = 0;

          var _loop3 = function _loop3() {
            var a = value[i];
            if (_this23.value.findIndex(function (b) {
              return matcher(a, b);
            }) === -1) {
              _this23.value.push(a);
            }
            i++;
          };

          while (i < value.length) {
            _loop3();
          }
          return {
            v: void 0
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    } else {
      if (count === 0) {
        value = null;
      } else {
        value = value[0];
      }
    }

    if (value !== this.value) {
      this.oldValue = this.value;
      this.value = value;
      this.notify();
    }
  };

  SelectValueObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.value;

    this.callSubscribers(newValue, oldValue);
  };

  SelectValueObserver.prototype.handleEvent = function handleEvent() {
    this.synchronizeValue();
  };

  SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.handler.subscribe(this.element, this);
    }
    this.addSubscriber(context, callable);
  };

  SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.handler.dispose();
    }
  };

  SelectValueObserver.prototype.bind = function bind() {
    var _this24 = this;

    this.domObserver = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].createMutationObserver(function () {
      _this24.synchronizeOptions();
      _this24.synchronizeValue();
    });
    this.domObserver.observe(this.element, { childList: true, subtree: true, characterData: true });
  };

  SelectValueObserver.prototype.unbind = function unbind() {
    this.domObserver.disconnect();
    this.domObserver = null;

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(selectArrayContext, this);
      this.arrayObserver = null;
    }
  };

  return SelectValueObserver;
}()) || _class10);

var ClassObserver = function () {
  function ClassObserver(element) {
    

    this.element = element;
    this.doNotCache = true;
    this.value = '';
    this.version = 0;
  }

  ClassObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  ClassObserver.prototype.setValue = function setValue(newValue) {
    var nameIndex = this.nameIndex || {};
    var version = this.version;
    var names = void 0;
    var name = void 0;

    if (newValue !== null && newValue !== undefined && newValue.length) {
      names = newValue.split(/\s+/);
      for (var i = 0, length = names.length; i < length; i++) {
        name = names[i];
        if (name === '') {
          continue;
        }
        nameIndex[name] = version;
        this.element.classList.add(name);
      }
    }

    this.value = newValue;
    this.nameIndex = nameIndex;
    this.version += 1;

    if (version === 0) {
      return;
    }

    version -= 1;
    for (name in nameIndex) {
      if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
        continue;
      }
      this.element.classList.remove(name);
    }
  };

  ClassObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
  };

  return ClassObserver;
}();

function hasDeclaredDependencies(descriptor) {
  return !!(descriptor && descriptor.get && descriptor.get.dependencies);
}

function declarePropertyDependencies(ctor, propertyName, dependencies) {
  var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
  descriptor.get.dependencies = dependencies;
}

function computedFrom() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return function (target, key, descriptor) {
    descriptor.get.dependencies = rest;
    return descriptor;
  };
}

var ComputedExpression = function (_Expression19) {
  _inherits(ComputedExpression, _Expression19);

  function ComputedExpression(name, dependencies) {
    

    var _this25 = _possibleConstructorReturn(this, _Expression19.call(this));

    _this25.name = name;
    _this25.dependencies = dependencies;
    _this25.isAssignable = true;
    return _this25;
  }

  ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return scope.bindingContext[this.name];
  };

  ComputedExpression.prototype.assign = function assign(scope, value) {
    scope.bindingContext[this.name] = value;
  };

  ComputedExpression.prototype.accept = function accept(visitor) {
    throw new Error('not implemented');
  };

  ComputedExpression.prototype.connect = function connect(binding, scope) {
    var dependencies = this.dependencies;
    var i = dependencies.length;
    while (i--) {
      dependencies[i].connect(binding, scope);
    }
  };

  return ComputedExpression;
}(Expression);

function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
  var dependencies = descriptor.get.dependencies;
  if (!(dependencies instanceof ComputedExpression)) {
    var i = dependencies.length;
    while (i--) {
      dependencies[i] = observerLocator.parser.parse(dependencies[i]);
    }
    dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
  }

  var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
  return new ExpressionObserver(scope, dependencies, observerLocator);
}

var svgElements = void 0;
var svgPresentationElements = void 0;
var svgPresentationAttributes = void 0;
var svgAnalyzer = void 0;

if (typeof FEATURE_NO_SVG === 'undefined') {
  svgElements = {
    a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
    feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
    feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
    image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
    switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
    vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
  };


  svgPresentationElements = {
    'a': true,
    'altGlyph': true,
    'animate': true,
    'animateColor': true,
    'circle': true,
    'clipPath': true,
    'defs': true,
    'ellipse': true,
    'feBlend': true,
    'feColorMatrix': true,
    'feComponentTransfer': true,
    'feComposite': true,
    'feConvolveMatrix': true,
    'feDiffuseLighting': true,
    'feDisplacementMap': true,
    'feFlood': true,
    'feGaussianBlur': true,
    'feImage': true,
    'feMerge': true,
    'feMorphology': true,
    'feOffset': true,
    'feSpecularLighting': true,
    'feTile': true,
    'feTurbulence': true,
    'filter': true,
    'font': true,
    'foreignObject': true,
    'g': true,
    'glyph': true,
    'glyphRef': true,
    'image': true,
    'line': true,
    'linearGradient': true,
    'marker': true,
    'mask': true,
    'missing-glyph': true,
    'path': true,
    'pattern': true,
    'polygon': true,
    'polyline': true,
    'radialGradient': true,
    'rect': true,
    'stop': true,
    'svg': true,
    'switch': true,
    'symbol': true,
    'text': true,
    'textPath': true,
    'tref': true,
    'tspan': true,
    'use': true
  };

  svgPresentationAttributes = {
    'alignment-baseline': true,
    'baseline-shift': true,
    'clip-path': true,
    'clip-rule': true,
    'clip': true,
    'color-interpolation-filters': true,
    'color-interpolation': true,
    'color-profile': true,
    'color-rendering': true,
    'color': true,
    'cursor': true,
    'direction': true,
    'display': true,
    'dominant-baseline': true,
    'enable-background': true,
    'fill-opacity': true,
    'fill-rule': true,
    'fill': true,
    'filter': true,
    'flood-color': true,
    'flood-opacity': true,
    'font-family': true,
    'font-size-adjust': true,
    'font-size': true,
    'font-stretch': true,
    'font-style': true,
    'font-variant': true,
    'font-weight': true,
    'glyph-orientation-horizontal': true,
    'glyph-orientation-vertical': true,
    'image-rendering': true,
    'kerning': true,
    'letter-spacing': true,
    'lighting-color': true,
    'marker-end': true,
    'marker-mid': true,
    'marker-start': true,
    'mask': true,
    'opacity': true,
    'overflow': true,
    'pointer-events': true,
    'shape-rendering': true,
    'stop-color': true,
    'stop-opacity': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'stroke-linecap': true,
    'stroke-linejoin': true,
    'stroke-miterlimit': true,
    'stroke-opacity': true,
    'stroke-width': true,
    'stroke': true,
    'text-anchor': true,
    'text-decoration': true,
    'text-rendering': true,
    'unicode-bidi': true,
    'visibility': true,
    'word-spacing': true,
    'writing-mode': true
  };

  var createElement = function createElement(html) {
    var div = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  svgAnalyzer = function () {
    function SVGAnalyzer() {
      

      if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
        elements.altglyph = elements.altGlyph;
        delete elements.altGlyph;
        elements.altglyphdef = elements.altGlyphDef;
        delete elements.altGlyphDef;
        elements.altglyphitem = elements.altGlyphItem;
        delete elements.altGlyphItem;
        elements.glyphref = elements.glyphRef;
        delete elements.glyphRef;
      }
    }

    SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
      return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
    };

    return SVGAnalyzer;
  }();
}

var elements = svgElements;
var presentationElements = svgPresentationElements;
var presentationAttributes = svgPresentationAttributes;
var SVGAnalyzer = svgAnalyzer || function () {
  function _class11() {
    
  }

  _class11.prototype.isStandardSvgAttribute = function isStandardSvgAttribute() {
    return false;
  };

  return _class11;
}();

var ObserverLocator = (_temp = _class12 = function () {
  function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
    

    this.taskQueue = taskQueue;
    this.eventManager = eventManager;
    this.dirtyChecker = dirtyChecker;
    this.svgAnalyzer = svgAnalyzer;
    this.parser = parser;

    this.adapters = [];
    this.logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('observer-locator');
  }

  ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
    var observersLookup = obj.__observers__;
    var observer = void 0;

    if (observersLookup && propertyName in observersLookup) {
      return observersLookup[propertyName];
    }

    observer = this.createPropertyObserver(obj, propertyName);

    if (!observer.doNotCache) {
      if (observersLookup === undefined) {
        observersLookup = this.getOrCreateObserversLookup(obj);
      }

      observersLookup[propertyName] = observer;
    }

    return observer;
  };

  ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
    return obj.__observers__ || this.createObserversLookup(obj);
  };

  ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
    var value = {};

    if (!Reflect.defineProperty(obj, '__observers__', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    })) {
      this.logger.warn('Cannot add observers to object', obj);
    }

    return value;
  };

  ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
    this.adapters.push(adapter);
  };

  ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
    for (var i = 0, ii = this.adapters.length; i < ii; i++) {
      var adapter = this.adapters[i];
      var observer = adapter.getObserver(obj, propertyName, descriptor);
      if (observer) {
        return observer;
      }
    }
    return null;
  };

  ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
    var descriptor = void 0;
    var handler = void 0;
    var xlinkResult = void 0;

    if (!(obj instanceof Object)) {
      return new PrimitiveObserver(obj, propertyName);
    }

    if (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element) {
      if (propertyName === 'class') {
        return new ClassObserver(obj);
      }
      if (propertyName === 'style' || propertyName === 'css') {
        return new StyleObserver(obj, propertyName);
      }
      handler = this.eventManager.getElementHandler(obj, propertyName);
      if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
        return new SelectValueObserver(obj, handler, this);
      }
      if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
        return new CheckedObserver(obj, handler, this);
      }
      if (handler) {
        return new ValueAttributeObserver(obj, propertyName, handler);
      }
      xlinkResult = /^xlink:(.+)$/.exec(propertyName);
      if (xlinkResult) {
        return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
      }
      if (propertyName === 'role' && (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].SVGElement) || /^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
        return new DataAttributeObserver(obj, propertyName);
      }
    }

    descriptor = Object.getPropertyDescriptor(obj, propertyName);

    if (hasDeclaredDependencies(descriptor)) {
      return createComputedObserver(obj, propertyName, descriptor, this);
    }

    if (descriptor) {
      var existingGetterOrSetter = descriptor.get || descriptor.set;
      if (existingGetterOrSetter) {
        if (existingGetterOrSetter.getObserver) {
          return existingGetterOrSetter.getObserver(obj);
        }

        var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
        if (adapterObserver) {
          return adapterObserver;
        }
        return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
      }
    }

    if (obj instanceof Array) {
      if (propertyName === 'length') {
        return this.getArrayObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    } else if (obj instanceof Map) {
      if (propertyName === 'size') {
        return this.getMapObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    } else if (obj instanceof Set) {
      if (propertyName === 'size') {
        return this.getSetObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    }

    return new SetterObserver(this.taskQueue, obj, propertyName);
  };

  ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
    if (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element) {
      if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || propertyName === 'model' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
        return this.getObserver(obj, propertyName);
      }
      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName) || obj.tagName.toLowerCase() === 'img' && propertyName === 'src' || obj.tagName.toLowerCase() === 'a' && propertyName === 'href') {
        return dataAttributeAccessor;
      }
    }
    return propertyAccessor;
  };

  ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
    return _getArrayObserver(this.taskQueue, array);
  };

  ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
    return _getMapObserver(this.taskQueue, map);
  };

  ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
    return _getSetObserver(this.taskQueue, set);
  };

  return ObserverLocator;
}(), _class12.inject = [__WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__["TaskQueue"], EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp);

var ObjectObservationAdapter = function () {
  function ObjectObservationAdapter() {
    
  }

  ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
    throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
  };

  return ObjectObservationAdapter;
}();

var BindingExpression = function () {
  function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.sourceExpression = sourceExpression;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.attribute = attribute;
    this.discrete = false;
  }

  BindingExpression.prototype.createBinding = function createBinding(target) {
    return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
  };

  return BindingExpression;
}();

var Binding = (_dec10 = connectable(), _dec10(_class13 = function () {
  function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.target = target;
    this.targetProperty = targetProperty;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
  }

  Binding.prototype.updateTarget = function updateTarget(value) {
    this.targetObserver.setValue(value, this.target, this.targetProperty);
  };

  Binding.prototype.updateSource = function updateSource(value) {
    this.sourceExpression.assign(this.source, value, this.lookupFunctions);
  };

  Binding.prototype.call = function call(context, newValue, oldValue) {
    if (!this.isBound) {
      return;
    }
    if (context === sourceContext) {
      oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
      newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      if (newValue !== oldValue) {
        this.updateTarget(newValue);
      }
      if (this.mode !== bindingMode.oneTime) {
        this._version++;
        this.sourceExpression.connect(this, this.source);
        this.unobserve(false);
      }
      return;
    }
    if (context === targetContext) {
      if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
        this.updateSource(newValue);
      }
      return;
    }
    throw new Error('Unexpected call context ' + context);
  };

  Binding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }

    var mode = this.mode;
    if (!this.targetObserver) {
      var method = mode === bindingMode.twoWay || mode === bindingMode.fromView ? 'getObserver' : 'getAccessor';
      this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
    }

    if ('bind' in this.targetObserver) {
      this.targetObserver.bind();
    }
    if (this.mode !== bindingMode.fromView) {
      var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
      this.updateTarget(value);
    }

    if (mode === bindingMode.oneTime) {
      return;
    } else if (mode === bindingMode.toView) {
      enqueueBindingConnect(this);
    } else if (mode === bindingMode.twoWay) {
      this.sourceExpression.connect(this, source);
      this.targetObserver.subscribe(targetContext, this);
    } else if (mode === bindingMode.fromView) {
      this.targetObserver.subscribe(targetContext, this);
    }
  };

  Binding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    if ('unbind' in this.targetObserver) {
      this.targetObserver.unbind();
    }
    if (this.targetObserver.unsubscribe) {
      this.targetObserver.unsubscribe(targetContext, this);
    }
    this.unobserve(true);
  };

  Binding.prototype.connect = function connect(evaluate) {
    if (!this.isBound) {
      return;
    }
    if (evaluate) {
      var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(value);
    }
    this.sourceExpression.connect(this, this.source);
  };

  return Binding;
}()) || _class13);

var CallExpression = function () {
  function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.sourceExpression = sourceExpression;
    this.lookupFunctions = lookupFunctions;
  }

  CallExpression.prototype.createBinding = function createBinding(target) {
    return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
  };

  return CallExpression;
}();

var Call = function () {
  function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.target = target;
    this.targetProperty = observerLocator.getObserver(target, targetProperty);
    this.lookupFunctions = lookupFunctions;
  }

  Call.prototype.callSource = function callSource($event) {
    var overrideContext = this.source.overrideContext;
    Object.assign(overrideContext, $event);
    overrideContext.$event = $event;
    var mustEvaluate = true;
    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
    delete overrideContext.$event;
    for (var prop in $event) {
      delete overrideContext[prop];
    }
    return result;
  };

  Call.prototype.bind = function bind(source) {
    var _this26 = this;

    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this.targetProperty.setValue(function ($event) {
      return _this26.callSource($event);
    });
  };

  Call.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.targetProperty.setValue(null);
  };

  return Call;
}();

var ValueConverterResource = function () {
  function ValueConverterResource(name) {
    

    this.name = name;
  }

  ValueConverterResource.convention = function convention(name) {
    if (name.endsWith('ValueConverter')) {
      return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
    }
  };

  ValueConverterResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  ValueConverterResource.prototype.register = function register(registry, name) {
    registry.registerValueConverter(name || this.name, this.instance);
  };

  ValueConverterResource.prototype.load = function load(container, target) {};

  return ValueConverterResource;
}();

function valueConverter(nameOrTarget) {
  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
    return function (target) {
      __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].resource, new ValueConverterResource(nameOrTarget), target);
    };
  }

  __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].resource, new ValueConverterResource(), nameOrTarget);
}

var BindingBehaviorResource = function () {
  function BindingBehaviorResource(name) {
    

    this.name = name;
  }

  BindingBehaviorResource.convention = function convention(name) {
    if (name.endsWith('BindingBehavior')) {
      return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
    }
  };

  BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  BindingBehaviorResource.prototype.register = function register(registry, name) {
    registry.registerBindingBehavior(name || this.name, this.instance);
  };

  BindingBehaviorResource.prototype.load = function load(container, target) {};

  return BindingBehaviorResource;
}();

function bindingBehavior(nameOrTarget) {
  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
    return function (target) {
      __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].resource, new BindingBehaviorResource(nameOrTarget), target);
    };
  }

  __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["metadata"].resource, new BindingBehaviorResource(), nameOrTarget);
}

var ListenerExpression = function () {
  function ListenerExpression(eventManager, targetEvent, sourceExpression, delegationStrategy, preventDefault, lookupFunctions) {
    

    this.eventManager = eventManager;
    this.targetEvent = targetEvent;
    this.sourceExpression = sourceExpression;
    this.delegationStrategy = delegationStrategy;
    this.discrete = true;
    this.preventDefault = preventDefault;
    this.lookupFunctions = lookupFunctions;
  }

  ListenerExpression.prototype.createBinding = function createBinding(target) {
    return new Listener(this.eventManager, this.targetEvent, this.delegationStrategy, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
  };

  return ListenerExpression;
}();

var Listener = function () {
  function Listener(eventManager, targetEvent, delegationStrategy, sourceExpression, target, preventDefault, lookupFunctions) {
    

    this.eventManager = eventManager;
    this.targetEvent = targetEvent;
    this.delegationStrategy = delegationStrategy;
    this.sourceExpression = sourceExpression;
    this.target = target;
    this.preventDefault = preventDefault;
    this.lookupFunctions = lookupFunctions;
  }

  Listener.prototype.callSource = function callSource(event) {
    var overrideContext = this.source.overrideContext;
    overrideContext.$event = event;
    var mustEvaluate = true;
    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
    delete overrideContext.$event;
    if (result !== true && this.preventDefault) {
      event.preventDefault();
    }
    return result;
  };

  Listener.prototype.handleEvent = function handleEvent(event) {
    this.callSource(event);
  };

  Listener.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this._handler = this.eventManager.addEventListener(this.target, this.targetEvent, this, this.delegationStrategy, true);
  };

  Listener.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this._handler.dispose();
    this._handler = null;
  };

  return Listener;
}();

function getAU(element) {
  var au = element.au;

  if (au === undefined) {
    throw new Error('No Aurelia APIs are defined for the element: "' + element.tagName + '".');
  }

  return au;
}

var NameExpression = function () {
  function NameExpression(sourceExpression, apiName, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.apiName = apiName;
    this.lookupFunctions = lookupFunctions;
    this.discrete = true;
  }

  NameExpression.prototype.createBinding = function createBinding(target) {
    return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
  };

  NameExpression.locateAPI = function locateAPI(element, apiName) {
    switch (apiName) {
      case 'element':
        return element;
      case 'controller':
        return getAU(element).controller;
      case 'view-model':
        return getAU(element).controller.viewModel;
      case 'view':
        return getAU(element).controller.view;
      default:
        var target = getAU(element)[apiName];

        if (target === undefined) {
          throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
        }

        return target.viewModel;
    }
  };

  return NameExpression;
}();

var NameBinder = function () {
  function NameBinder(sourceExpression, target, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.target = target;
    this.lookupFunctions = lookupFunctions;
  }

  NameBinder.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;
    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
  };

  NameBinder.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target) {
      this.sourceExpression.assign(this.source, null, this.lookupFunctions);
    }
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
  };

  return NameBinder;
}();

var LookupFunctions = {
  bindingBehaviors: function bindingBehaviors(name) {
    return null;
  },
  valueConverters: function valueConverters(name) {
    return null;
  }
};

var BindingEngine = (_temp2 = _class14 = function () {
  function BindingEngine(observerLocator, parser) {
    

    this.observerLocator = observerLocator;
    this.parser = parser;
  }

  BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bindingMode.toView;
    var lookupFunctions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : LookupFunctions;

    return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
  };

  BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
    var _this27 = this;

    return {
      subscribe: function subscribe(callback) {
        var observer = _this27.observerLocator.getObserver(obj, propertyName);
        observer.subscribe(callback);
        return {
          dispose: function dispose() {
            return observer.unsubscribe(callback);
          }
        };
      }
    };
  };

  BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
    var _this28 = this;

    return {
      subscribe: function subscribe(callback) {
        var observer = void 0;
        if (collection instanceof Array) {
          observer = _this28.observerLocator.getArrayObserver(collection);
        } else if (collection instanceof Map) {
          observer = _this28.observerLocator.getMapObserver(collection);
        } else if (collection instanceof Set) {
          observer = _this28.observerLocator.getSetObserver(collection);
        } else {
          throw new Error('collection must be an instance of Array, Map or Set.');
        }
        observer.subscribe(callback);
        return {
          dispose: function dispose() {
            return observer.unsubscribe(callback);
          }
        };
      }
    };
  };

  BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
    var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
    return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
  };

  BindingEngine.prototype.parseExpression = function parseExpression(expression) {
    return this.parser.parse(expression);
  };

  BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
    this.observerLocator.addAdapter(adapter);
  };

  return BindingEngine;
}(), _class14.inject = [ObserverLocator, Parser], _temp2);

var setProto = Set.prototype;

function _getSetObserver(taskQueue, set) {
  return ModifySetObserver.for(taskQueue, set);
}

var ModifySetObserver = function (_ModifyCollectionObse3) {
  _inherits(ModifySetObserver, _ModifyCollectionObse3);

  function ModifySetObserver(taskQueue, set) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
  }

  ModifySetObserver.for = function _for(taskQueue, set) {
    if (!('__set_observer__' in set)) {
      Reflect.defineProperty(set, '__set_observer__', {
        value: ModifySetObserver.create(taskQueue, set),
        enumerable: false, configurable: false
      });
    }
    return set.__set_observer__;
  };

  ModifySetObserver.create = function create(taskQueue, set) {
    var observer = new ModifySetObserver(taskQueue, set);

    var proto = setProto;
    if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
      proto = {
        add: set.add,
        delete: set.delete,
        clear: set.clear
      };
    }

    set.add = function () {
      var type = 'add';
      var oldSize = set.size;
      var methodCallResult = proto.add.apply(set, arguments);
      var hasValue = set.size === oldSize;
      if (!hasValue) {
        observer.addChangeRecord({
          type: type,
          object: set,
          value: Array.from(set).pop()
        });
      }
      return methodCallResult;
    };

    set.delete = function () {
      var hasValue = set.has(arguments[0]);
      var methodCallResult = proto.delete.apply(set, arguments);
      if (hasValue) {
        observer.addChangeRecord({
          type: 'delete',
          object: set,
          value: arguments[0]
        });
      }
      return methodCallResult;
    };

    set.clear = function () {
      var methodCallResult = proto.clear.apply(set, arguments);
      observer.addChangeRecord({
        type: 'clear',
        object: set
      });
      return methodCallResult;
    };

    return observer;
  };

  return ModifySetObserver;
}(ModifyCollectionObserver);

function observable(targetOrConfig, key, descriptor) {
  function deco(target, key, descriptor, config) {
    var isClassDecorator = key === undefined;
    if (isClassDecorator) {
      target = target.prototype;
      key = typeof config === 'string' ? config : config.name;
    }

    var innerPropertyName = '_' + key;
    var innerPropertyDescriptor = {
      configurable: true,
      enumerable: false,
      writable: true
    };

    var callbackName = config && config.changeHandler || key + 'Changed';

    if (descriptor) {
      if (typeof descriptor.initializer === 'function') {
        innerPropertyDescriptor.value = descriptor.initializer();
      }
    } else {
      descriptor = {};
    }

    if (!('enumerable' in descriptor)) {
      descriptor.enumerable = true;
    }

    delete descriptor.value;
    delete descriptor.writable;
    delete descriptor.initializer;

    Reflect.defineProperty(target, innerPropertyName, innerPropertyDescriptor);

    descriptor.get = function () {
      return this[innerPropertyName];
    };
    descriptor.set = function (newValue) {
      var oldValue = this[innerPropertyName];
      if (newValue === oldValue) {
        return;
      }

      this[innerPropertyName] = newValue;
      Reflect.defineProperty(this, innerPropertyName, { enumerable: false });

      if (this[callbackName]) {
        this[callbackName](newValue, oldValue, key);
      }
    };

    descriptor.get.dependencies = [innerPropertyName];

    if (isClassDecorator) {
      Reflect.defineProperty(target, key, descriptor);
    } else {
      return descriptor;
    }
  }

  if (key === undefined) {
    return function (t, k, d) {
      return deco(t, k, d, targetOrConfig);
    };
  }
  return deco(targetOrConfig, key, descriptor);
}

var signals = {};

function connectBindingToSignal(binding, name) {
  if (!signals.hasOwnProperty(name)) {
    signals[name] = 0;
  }
  binding.observeProperty(signals, name);
}

function signalBindings(name) {
  if (signals.hasOwnProperty(name)) {
    signals[name]++;
  }
}

/***/ },

/***/ "aurelia-event-aggregator":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "EventAggregator", function() { return EventAggregator; });
/* harmony export (immutable) */ exports["includeEventsIn"] = includeEventsIn;
/* harmony export (immutable) */ exports["configure"] = configure;




var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ },

/***/ "aurelia-framework":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_loader__ = __webpack_require__("aurelia-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aurelia_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_aurelia_task_queue__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "Aurelia", function() { return Aurelia; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FrameworkConfiguration", function() { return FrameworkConfiguration; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "_emptyParameters", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["_emptyParameters"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "InvocationHandler", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["InvocationHandler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Container", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Container"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "autoinject", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["autoinject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "inject", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["inject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "invoker", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["invoker"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "invokeAsFactory", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["invokeAsFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "FactoryInvoker", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["FactoryInvoker"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "registration", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["registration"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "transient", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["transient"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "singleton", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["singleton"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TransientRegistration", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["TransientRegistration"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SingletonRegistration", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["SingletonRegistration"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "resolver", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["resolver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Strategy", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Strategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "StrategyResolver", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["StrategyResolver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Lazy", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Lazy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "All", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["All"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Optional", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Optional"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Parent", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Parent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Factory", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Factory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NewInstance", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["NewInstance"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getDecoratorDependencies", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["getDecoratorDependencies"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "lazy", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["lazy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "all", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["all"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "optional", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["optional"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "parent", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["parent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "factory", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["factory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "newInstance", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["newInstance"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getArrayObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getArrayObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getMapObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getMapObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getSetObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getSetObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "targetContext", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["targetContext"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "sourceContext", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["sourceContext"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "camelCase", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["camelCase"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createOverrideContext", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["createOverrideContext"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getContextFor", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getContextFor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createScopeForTest", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["createScopeForTest"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "connectable", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["connectable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "enqueueBindingConnect", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["enqueueBindingConnect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "setConnectQueueThreshold", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["setConnectQueueThreshold"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "enableConnectQueue", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["enableConnectQueue"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "disableConnectQueue", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["disableConnectQueue"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getConnectQueueSize", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getConnectQueueSize"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "subscriberCollection", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["subscriberCollection"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ExpressionObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ExpressionObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "calcSplices", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["calcSplices"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "mergeSplice", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["mergeSplice"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "projectArraySplices", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["projectArraySplices"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getChangeRecords", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["getChangeRecords"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ModifyCollectionObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ModifyCollectionObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CollectionLengthObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CollectionLengthObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Expression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Expression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindingBehavior", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["BindingBehavior"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ValueConverter", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ValueConverter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Assign", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Assign"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Conditional", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Conditional"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AccessThis", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["AccessThis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AccessScope", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["AccessScope"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AccessMember", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["AccessMember"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AccessKeyed", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["AccessKeyed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CallScope", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CallScope"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CallMember", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CallMember"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CallFunction", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CallFunction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Binary", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Binary"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Unary", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Unary"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LiteralPrimitive", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["LiteralPrimitive"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LiteralString", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["LiteralString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LiteralTemplate", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["LiteralTemplate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LiteralArray", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["LiteralArray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LiteralObject", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["LiteralObject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Unparser", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Unparser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ExpressionCloner", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ExpressionCloner"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "cloneExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["cloneExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "bindingMode", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["bindingMode"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Parser", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Parser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ParserImplementation", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ParserImplementation"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "delegationStrategy", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["delegationStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "EventManager", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["EventManager"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "EventSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["EventSubscriber"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DirtyChecker", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["DirtyChecker"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DirtyCheckProperty", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["DirtyCheckProperty"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "propertyAccessor", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["propertyAccessor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PrimitiveObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["PrimitiveObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SetterObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["SetterObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "XLinkAttributeObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["XLinkAttributeObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "dataAttributeAccessor", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["dataAttributeAccessor"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DataAttributeObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["DataAttributeObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "StyleObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["StyleObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ValueAttributeObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ValueAttributeObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CheckedObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CheckedObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SelectValueObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["SelectValueObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ClassObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ClassObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "hasDeclaredDependencies", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["hasDeclaredDependencies"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "declarePropertyDependencies", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["declarePropertyDependencies"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "computedFrom", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["computedFrom"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ComputedExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ComputedExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createComputedObserver", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["createComputedObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "elements", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["elements"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "presentationElements", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["presentationElements"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "presentationAttributes", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["presentationAttributes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SVGAnalyzer", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["SVGAnalyzer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ObserverLocator", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ObserverLocator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ObjectObservationAdapter", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ObjectObservationAdapter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindingExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["BindingExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Binding", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Binding"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CallExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["CallExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Call", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Call"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ValueConverterResource", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ValueConverterResource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "valueConverter", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["valueConverter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindingBehaviorResource", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["BindingBehaviorResource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "bindingBehavior", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["bindingBehavior"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ListenerExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["ListenerExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Listener", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["Listener"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NameExpression", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["NameExpression"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindingEngine", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["BindingEngine"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "observable", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["observable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "connectBindingToSignal", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["connectBindingToSignal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "signalBindings", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["signalBindings"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "metadata", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["metadata"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Origin", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["Origin"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "decorators", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["decorators"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "deprecated", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["deprecated"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["mixin"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "protocol", function() { return __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__["protocol"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "animationEvent", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["animationEvent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Animator", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["Animator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CompositionTransactionNotifier", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionTransactionNotifier"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CompositionTransactionOwnershipToken", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionTransactionOwnershipToken"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CompositionTransaction", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionTransaction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "_hyphenate", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["_hyphenate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "_isAllWhitespace", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["_isAllWhitespace"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewEngineHooksResource", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewEngineHooksResource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "viewEngineHooks", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["viewEngineHooks"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ElementEvents", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ElementEvents"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResourceLoadContext", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ResourceLoadContext"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewCompileInstruction", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewCompileInstruction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BehaviorInstruction", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BehaviorInstruction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TargetInstruction", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TargetInstruction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "viewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["viewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RelativeViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["RelativeViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConventionalViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ConventionalViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NoViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["NoViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TemplateRegistryViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TemplateRegistryViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "InlineViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["InlineViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "StaticViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["StaticViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewLocator", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewLocator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindingLanguage", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BindingLanguage"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SlotCustomAttribute", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["SlotCustomAttribute"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PassThroughSlot", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["PassThroughSlot"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ShadowSlot", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ShadowSlot"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ShadowDOM", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ShadowDOM"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "validateBehaviorName", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["validateBehaviorName"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewResources", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewResources"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "View", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["View"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewSlot", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BoundViewFactory", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewFactory", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewCompiler", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewCompiler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResourceModule", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ResourceModule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResourceDescription", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ResourceDescription"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ModuleAnalyzer", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ModuleAnalyzer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewEngine", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewEngine"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Controller", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["Controller"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BehaviorPropertyObserver", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BehaviorPropertyObserver"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BindableProperty", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BindableProperty"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HtmlBehaviorResource", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["HtmlBehaviorResource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "children", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["children"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "child", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["child"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SwapStrategies", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["SwapStrategies"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CompositionEngine", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionEngine"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ElementConfigResource", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ElementConfigResource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "resource", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["resource"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "behavior", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["behavior"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "customElement", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customElement"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "customAttribute", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "templateController", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "bindable", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "dynamicOptions", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["dynamicOptions"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "useShadowDOM", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useShadowDOM"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "processAttributes", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["processAttributes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "processContent", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["processContent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "containerless", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["containerless"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "useViewStrategy", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useViewStrategy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "useView", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "inlineView", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["inlineView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "noView", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["noView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "view", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["view"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "elementConfig", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["elementConfig"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "viewResources", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["viewResources"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TemplatingEngine", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TemplatingEngine"]; });
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2_aurelia_loader__) if(["Aurelia","FrameworkConfiguration","LogManager","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_2_aurelia_loader__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TaskQueue", function() { return __WEBPACK_IMPORTED_MODULE_8_aurelia_task_queue__["TaskQueue"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "relativeToFile", function() { return __WEBPACK_IMPORTED_MODULE_5_aurelia_path__["relativeToFile"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "join", function() { return __WEBPACK_IMPORTED_MODULE_5_aurelia_path__["join"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "buildQueryString", function() { return __WEBPACK_IMPORTED_MODULE_5_aurelia_path__["buildQueryString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "parseQueryString", function() { return __WEBPACK_IMPORTED_MODULE_5_aurelia_path__["parseQueryString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AggregateError", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["AggregateError"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "FEATURE", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["FEATURE"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PLATFORM", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["PLATFORM"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DOM", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "isInitialized", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["isInitialized"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "initializePAL", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["initializePAL"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "reset", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["reset"]; });







function preventActionlessFormSubmit() {
  __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].addEventListener('submit', evt => {
    const target = evt.target;
    const action = target.action;

    if (target.tagName.toLowerCase() === 'form' && !action) {
      evt.preventDefault();
    }
  });
}

let Aurelia = class Aurelia {
  constructor(loader, container, resources) {
    this.loader = loader || new __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["PLATFORM"].Loader();
    this.container = container || new __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Container"]().makeGlobal();
    this.resources = resources || new __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewResources"]();
    this.use = new FrameworkConfiguration(this);
    this.logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('aurelia');
    this.hostConfigured = false;
    this.host = null;

    this.use.instance(Aurelia, this);
    this.use.instance(__WEBPACK_IMPORTED_MODULE_2_aurelia_loader__["Loader"], this.loader);
    this.use.instance(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewResources"], this.resources);
  }

  start() {
    if (this._started) {
      return this._started;
    }

    this.logger.info('Aurelia Starting');
    return this._started = this.use.apply().then(() => {
      preventActionlessFormSubmit();

      if (!this.container.hasResolver(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BindingLanguage"])) {
        let message = 'You must configure Aurelia with a BindingLanguage implementation.';
        this.logger.error(message);
        throw new Error(message);
      }

      this.logger.info('Aurelia Started');
      let evt = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
      __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].dispatchEvent(evt);
      return this;
    });
  }

  enhance(bindingContext = {}, applicationHost = null) {
    this._configureHost(applicationHost || __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].querySelectorAll('body')[0]);

    return new Promise(resolve => {
      let engine = this.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TemplatingEngine"]);
      this.root = engine.enhance({ container: this.container, element: this.host, resources: this.resources, bindingContext: bindingContext });
      this.root.attached();
      this._onAureliaComposed();
      resolve(this);
    });
  }

  setRoot(root = null, applicationHost = null) {
    let instruction = {};

    if (this.root && this.root.viewModel && this.root.viewModel.router) {
      this.root.viewModel.router.deactivate();
      this.root.viewModel.router.reset();
    }

    this._configureHost(applicationHost);

    let engine = this.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TemplatingEngine"]);
    let transaction = this.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionTransaction"]);
    delete transaction.initialComposition;

    if (!root) {
      if (this.configModuleId) {
        root = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_path__["relativeToFile"])('./app', this.configModuleId);
      } else {
        root = 'app';
      }
    }

    instruction.viewModel = root;
    instruction.container = instruction.childContainer = this.container;
    instruction.viewSlot = this.hostSlot;
    instruction.host = this.host;

    return engine.compose(instruction).then(r => {
      this.root = r;
      instruction.viewSlot.attached();
      this._onAureliaComposed();
      return this;
    });
  }

  _configureHost(applicationHost) {
    if (this.hostConfigured) {
      return;
    }
    applicationHost = applicationHost || this.host;

    if (!applicationHost || typeof applicationHost === 'string') {
      this.host = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].getElementById(applicationHost || 'applicationHost');
    } else {
      this.host = applicationHost;
    }

    if (!this.host) {
      throw new Error('No applicationHost was specified.');
    }

    this.hostConfigured = true;
    this.host.aurelia = this;
    this.hostSlot = new __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"](this.host, true);
    this.hostSlot.transformChildNodesIntoView();
    this.container.registerInstance(__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].boundary, this.host);
  }

  _onAureliaComposed() {
    let evt = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
    setTimeout(() => __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["DOM"].dispatchEvent(evt), 1);
  }
};

const logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('aurelia');
const extPattern = /\.[^/.]+$/;

function runTasks(config, tasks) {
  let current;
  let next = () => {
    current = tasks.shift();
    if (current) {
      return Promise.resolve(current(config)).then(next);
    }

    return Promise.resolve();
  };

  return next();
}

function loadPlugin(fwConfig, loader, info) {
  logger.debug(`Loading plugin ${info.moduleId}.`);
  if (typeof info.moduleId === 'string') {
    fwConfig.resourcesRelativeTo = info.resourcesRelativeTo;

    let id = info.moduleId;

    if (info.resourcesRelativeTo.length > 1) {
      return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(normalizedId => _loadPlugin(normalizedId));
    }

    return _loadPlugin(id);
  } else if (typeof info.configure === 'function') {
    if (fwConfig.configuredPlugins.indexOf(info.configure) !== -1) {
      return Promise.resolve();
    }
    fwConfig.configuredPlugins.push(info.configure);

    return Promise.resolve(info.configure.call(null, fwConfig, info.config || {}));
  }
  throw new Error(invalidConfigMsg(info.moduleId || info.configure, 'plugin'));

  function _loadPlugin(moduleId) {
    return loader.loadModule(moduleId).then(m => {
      if ('configure' in m) {
        if (fwConfig.configuredPlugins.indexOf(m.configure) !== -1) {
          return Promise.resolve();
        }
        return Promise.resolve(m.configure(fwConfig, info.config || {})).then(() => {
          fwConfig.configuredPlugins.push(m.configure);
          fwConfig.resourcesRelativeTo = null;
          logger.debug(`Configured plugin ${info.moduleId}.`);
        });
      }

      fwConfig.resourcesRelativeTo = null;
      logger.debug(`Loaded plugin ${info.moduleId}.`);
    });
  }
}

function loadResources(aurelia, resourcesToLoad, appResources) {
  if (Object.keys(resourcesToLoad).length === 0) {
    return Promise.resolve();
  }
  let viewEngine = aurelia.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewEngine"]);

  return Promise.all(Object.keys(resourcesToLoad).map(n => _normalize(resourcesToLoad[n]))).then(loads => {
    let names = [];
    let importIds = [];

    loads.forEach(l => {
      names.push(undefined);
      importIds.push(l.importId);
    });

    return viewEngine.importViewResources(importIds, names, appResources);
  });

  function _normalize(load) {
    let moduleId = load.moduleId;
    let ext = getExt(moduleId);

    if (isOtherResource(moduleId)) {
      moduleId = removeExt(moduleId);
    }

    return aurelia.loader.normalize(moduleId, load.relativeTo).then(normalized => {
      return {
        name: load.moduleId,
        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
      };
    });
  }

  function isOtherResource(name) {
    let ext = getExt(name);
    if (!ext) return false;
    if (ext === '') return false;
    if (ext === '.js' || ext === '.ts') return false;
    return true;
  }

  function removeExt(name) {
    return name.replace(extPattern, '');
  }

  function addOriginalExt(normalized, ext) {
    return removeExt(normalized) + '.' + ext;
  }
}

function getExt(name) {
  let match = name.match(extPattern);
  if (match && match.length > 0) {
    return match[0].split('.')[1];
  }
}

function loadBehaviors(config) {
  return Promise.all(config.behaviorsToLoad.map(m => m.load(config.container, m.target))).then(() => {
    config.behaviorsToLoad = null;
  });
}

function assertProcessed(plugins) {
  if (plugins.processed) {
    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
  }
}

function invalidConfigMsg(cfg, type) {
  return `Invalid ${type} [${cfg}], ${type} must be specified as functions or relative module IDs.`;
}

let FrameworkConfiguration = class FrameworkConfiguration {
  constructor(aurelia) {
    this.aurelia = aurelia;
    this.container = aurelia.container;

    this.info = [];
    this.processed = false;
    this.preTasks = [];
    this.postTasks = [];

    this.behaviorsToLoad = [];

    this.configuredPlugins = [];
    this.resourcesToLoad = {};
    this.preTask(() => aurelia.loader.normalize('aurelia-bootstrapper').then(name => this.bootstrapperName = name));
    this.postTask(() => loadResources(aurelia, this.resourcesToLoad, aurelia.resources));
  }

  instance(type, instance) {
    this.container.registerInstance(type, instance);
    return this;
  }

  singleton(type, implementation) {
    this.container.registerSingleton(type, implementation);
    return this;
  }

  transient(type, implementation) {
    this.container.registerTransient(type, implementation);
    return this;
  }

  preTask(task) {
    assertProcessed(this);
    this.preTasks.push(task);
    return this;
  }

  postTask(task) {
    assertProcessed(this);
    this.postTasks.push(task);
    return this;
  }

  feature(plugin, config = {}) {
    switch (typeof plugin) {
      case 'string':
        let hasIndex = /\/index$/i.test(plugin);
        let moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
        let root = hasIndex ? plugin.substr(0, plugin.length - 6) : plugin;
        this.info.push({ moduleId, resourcesRelativeTo: [root, ''], config });
        break;

      case 'function':
        this.info.push({ configure: plugin, config: config || {} });
        break;
      default:
        throw new Error(invalidConfigMsg(plugin, 'feature'));
    }
    return this;
  }

  globalResources(resources) {
    assertProcessed(this);

    let toAdd = Array.isArray(resources) ? resources : arguments;
    let resource;
    let resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

    for (let i = 0, ii = toAdd.length; i < ii; ++i) {
      resource = toAdd[i];
      switch (typeof resource) {
        case 'string':
          let parent = resourcesRelativeTo[0];
          let grandParent = resourcesRelativeTo[1];
          let name = resource;

          if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
            name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_path__["join"])(parent, resource);
          }

          this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
          break;
        case 'function':
          let meta = this.aurelia.resources.autoRegister(this.container, resource);
          if (meta instanceof __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["HtmlBehaviorResource"] && meta.elementName !== null) {
            if (this.behaviorsToLoad.push(meta) === 1) {
              this.postTask(() => loadBehaviors(this));
            }
          }
          break;
        default:
          throw new Error(invalidConfigMsg(resource, 'resource'));
      }
    }

    return this;
  }

  globalName(resourcePath, newName) {
    assertProcessed(this);
    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
    return this;
  }

  plugin(plugin, pluginConfig) {
    assertProcessed(this);

    let info;
    switch (typeof plugin) {
      case 'string':
        info = { moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: pluginConfig || {} };
        break;
      case 'function':
        info = { configure: plugin, config: pluginConfig || {} };
        break;
      default:
        throw new Error(invalidConfigMsg(plugin, 'plugin'));
    }
    this.info.push(info);
    return this;
  }

  _addNormalizedPlugin(name, config) {
    let plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
    this.info.push(plugin);

    this.preTask(() => {
      let relativeTo = [name, this.bootstrapperName];
      plugin.moduleId = name;
      plugin.resourcesRelativeTo = relativeTo;
      return Promise.resolve();
    });

    return this;
  }

  defaultBindingLanguage() {
    return this._addNormalizedPlugin('aurelia-templating-binding');
  }

  router() {
    return this._addNormalizedPlugin('aurelia-templating-router');
  }

  history() {
    return this._addNormalizedPlugin('aurelia-history-browser');
  }

  defaultResources() {
    return this._addNormalizedPlugin('aurelia-templating-resources');
  }

  eventAggregator() {
    return this._addNormalizedPlugin('aurelia-event-aggregator');
  }

  basicConfiguration() {
    return this.defaultBindingLanguage().defaultResources().eventAggregator();
  }

  standardConfiguration() {
    return this.basicConfiguration().history().router();
  }

  developmentLogging(level) {
    let logLevel = level ? __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["logLevel"][level] : undefined;

    if (logLevel === undefined) {
      logLevel = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["logLevel"].debug;
    }

    this.preTask(() => {
      return this.aurelia.loader.normalize('aurelia-logging-console', this.bootstrapperName).then(name => {
        return this.aurelia.loader.loadModule(name).then(m => {
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["addAppender"](new m.ConsoleAppender());
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["setLevel"](logLevel);
        });
      });
    });

    return this;
  }

  apply() {
    if (this.processed) {
      return Promise.resolve();
    }

    return runTasks(this, this.preTasks).then(() => {
      let loader = this.aurelia.loader;
      let info = this.info;
      let current;

      let next = () => {
        current = info.shift();
        if (current) {
          return loadPlugin(this, loader, current).then(next);
        }

        this.processed = true;
        this.configuredPlugins = null;
        return Promise.resolve();
      };

      return next().then(() => runTasks(this, this.postTasks));
    });
  }
};










const LogManager = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__;
/* harmony export (immutable) */ exports["LogManager"] = LogManager;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-history-browser":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_history__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "BrowserHistory", function() { return BrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DefaultLinkHandler", function() { return DefaultLinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LinkHandler", function() { return LinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "configure", function() { return configure; });



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var LinkHandler = (function () {
    function LinkHandler() {
    }
    LinkHandler.prototype.activate = function (history) { };
    LinkHandler.prototype.deactivate = function () { };
    return LinkHandler;
}());
var DefaultLinkHandler = (function (_super) {
    __extends(DefaultLinkHandler, _super);
    function DefaultLinkHandler() {
        var _this = _super.call(this) || this;
        _this.handler = function (e) {
            var _a = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _a.shouldHandleEvent, href = _a.href;
            if (shouldHandleEvent) {
                e.preventDefault();
                _this.history.navigate(href);
            }
        };
        return _this;
    }
    DefaultLinkHandler.prototype.activate = function (history) {
        if (history._hasPushState) {
            this.history = history;
            __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].addEventListener('click', this.handler, true);
        }
    };
    DefaultLinkHandler.prototype.deactivate = function () {
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].removeEventListener('click', this.handler, true);
    };
    DefaultLinkHandler.getEventInfo = function (event) {
        var $event = event;
        var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
        };
        var target = DefaultLinkHandler.findClosestAnchor($event.target);
        if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
        }
        if (hasAttribute(target, 'download')
            || hasAttribute(target, 'router-ignore')
            || hasAttribute(target, 'data-router-ignore')) {
            return info;
        }
        if ($event.altKey || $event.ctrlKey || $event.metaKey || $event.shiftKey) {
            return info;
        }
        var href = target.getAttribute('href');
        info.anchor = target;
        info.href = href;
        var leftButtonClicked = $event.which === 1;
        var isRelative = href && !(href.charAt(0) === '#' || (/^[a-z]+:/i).test(href));
        info.shouldHandleEvent = leftButtonClicked && isRelative;
        return info;
    };
    DefaultLinkHandler.findClosestAnchor = function (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el;
            }
            el = el.parentNode;
        }
    };
    DefaultLinkHandler.targetIsThisWindow = function (target) {
        var targetWindow = target.getAttribute('target');
        var win = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].global;
        return !targetWindow ||
            targetWindow === win.name ||
            targetWindow === '_self';
    };
    return DefaultLinkHandler;
}(LinkHandler));
var hasAttribute = function (el, attr) { return el.hasAttribute(attr); };

var BrowserHistory = (function (_super) {
    __extends(BrowserHistory, _super);
    function BrowserHistory(linkHandler) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._checkUrlCallback = _this._checkUrl.bind(_this);
        _this.location = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].location;
        _this.history = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].history;
        _this.linkHandler = linkHandler;
        return _this;
    }
    BrowserHistory.prototype.activate = function (options) {
        if (this._isActive) {
            throw new Error('History has already been activated.');
        }
        var $history = this.history;
        var wantsPushState = !!options.pushState;
        this._isActive = true;
        var normalizedOptions = this.options = Object.assign({}, { root: '/' }, this.options, options);
        var rootUrl = this.root = ('/' + normalizedOptions.root + '/').replace(rootStripper, '/');
        var wantsHashChange = this._wantsHashChange = normalizedOptions.hashChange !== false;
        var hasPushState = this._hasPushState = !!(normalizedOptions.pushState && $history && $history.pushState);
        var eventName;
        if (hasPushState) {
            eventName = 'popstate';
        }
        else if (wantsHashChange) {
            eventName = 'hashchange';
        }
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].addEventListener(eventName, this._checkUrlCallback);
        if (wantsHashChange && wantsPushState) {
            var $location = this.location;
            var atRoot = $location.pathname.replace(/[^\/]$/, '$&/') === rootUrl;
            if (!hasPushState && !atRoot) {
                var fragment = this.fragment = this._getFragment(null, true);
                $location.replace(rootUrl + $location.search + '#' + fragment);
                return true;
            }
            else if (hasPushState && atRoot && $location.hash) {
                var fragment = this.fragment = this._getHash().replace(routeStripper, '');
                $history.replaceState({}, __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].title, rootUrl + fragment + $location.search);
            }
        }
        if (!this.fragment) {
            this.fragment = this._getFragment('');
        }
        this.linkHandler.activate(this);
        if (!normalizedOptions.silent) {
            return this._loadUrl('');
        }
    };
    BrowserHistory.prototype.deactivate = function () {
        var handler = this._checkUrlCallback;
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].removeEventListener('popstate', handler);
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["PLATFORM"].removeEventListener('hashchange', handler);
        this._isActive = false;
        this.linkHandler.deactivate();
    };
    BrowserHistory.prototype.getAbsoluteRoot = function () {
        var $location = this.location;
        var origin = createOrigin($location.protocol, $location.hostname, $location.port);
        return "" + origin + this.root;
    };
    BrowserHistory.prototype.navigate = function (fragment, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.trigger, trigger = _c === void 0 ? true : _c, _d = _b.replace, replace = _d === void 0 ? false : _d;
        var location = this.location;
        if (fragment && absoluteUrl.test(fragment)) {
            location.href = fragment;
            return true;
        }
        if (!this._isActive) {
            return false;
        }
        fragment = this._getFragment(fragment || '');
        if (this.fragment === fragment && !replace) {
            return false;
        }
        this.fragment = fragment;
        var url = this.root + fragment;
        if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
        }
        if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].title, url);
        }
        else if (this._wantsHashChange) {
            updateHash(location, fragment, replace);
        }
        else {
            location.assign(url);
        }
        if (trigger) {
            return this._loadUrl(fragment);
        }
        return true;
    };
    BrowserHistory.prototype.navigateBack = function () {
        this.history.back();
    };
    BrowserHistory.prototype.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].title = title;
    };
    BrowserHistory.prototype.setState = function (key, value) {
        var $history = this.history;
        var state = Object.assign({}, $history.state);
        var _a = this.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
        state[key] = value;
        $history.replaceState(state, null, "" + pathname + search + hash);
    };
    BrowserHistory.prototype.getState = function (key) {
        var state = Object.assign({}, this.history.state);
        return state[key];
    };
    BrowserHistory.prototype.getHistoryIndex = function () {
        var historyIndex = this.getState('HistoryIndex');
        if (historyIndex === undefined) {
            historyIndex = this.history.length - 1;
            this.setState('HistoryIndex', historyIndex);
        }
        return historyIndex;
    };
    BrowserHistory.prototype.go = function (movement) {
        this.history.go(movement);
    };
    BrowserHistory.prototype._getHash = function () {
        return this.location.hash.substr(1);
    };
    BrowserHistory.prototype._getFragment = function (fragment, forcePushState) {
        var rootUrl;
        if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                var location_1 = this.location;
                fragment = location_1.pathname + location_1.search;
                rootUrl = this.root.replace(trailingSlash, '');
                if (!fragment.indexOf(rootUrl)) {
                    fragment = fragment.substr(rootUrl.length);
                }
            }
            else {
                fragment = this._getHash();
            }
        }
        return '/' + fragment.replace(routeStripper, '');
    };
    BrowserHistory.prototype._checkUrl = function () {
        var current = this._getFragment('');
        if (current !== this.fragment) {
            this._loadUrl('');
        }
    };
    BrowserHistory.prototype._loadUrl = function (fragmentOverride) {
        var fragment = this.fragment = this._getFragment(fragmentOverride);
        return this.options.routeHandler ?
            this.options.routeHandler(fragment) :
            false;
    };
    BrowserHistory.inject = [LinkHandler];
    return BrowserHistory;
}(__WEBPACK_IMPORTED_MODULE_0_aurelia_history__["History"]));
var routeStripper = /^#?\/*|\s+$/g;
var rootStripper = /^\/+|\/+$/g;
var trailingSlash = /\/$/;
var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
function updateHash($location, fragment, replace) {
    if (replace) {
        var href = $location.href.replace(/(javascript:|#).*$/, '');
        $location.replace(href + '#' + fragment);
    }
    else {
        $location.hash = '#' + fragment;
    }
}
function createOrigin(protocol, hostname, port) {
    return protocol + "//" + hostname + (port ? ':' + port : '');
}

function configure(config) {
    var $config = config;
    $config.singleton(__WEBPACK_IMPORTED_MODULE_0_aurelia_history__["History"], BrowserHistory);
    $config.transient(LinkHandler, DefaultLinkHandler);
}


//# sourceMappingURL=aurelia-history-browser.js.map


/***/ },

/***/ "aurelia-logging-console":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "ConsoleAppender", function() { return ConsoleAppender; });


var ConsoleAppender = function () {
  function ConsoleAppender() {
    
  }

  ConsoleAppender.prototype.debug = function debug(logger) {
    var _console;

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    (_console = console).debug.apply(_console, ["DEBUG [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.info = function info(logger) {
    var _console2;

    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).info.apply(_console2, ["INFO [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.warn = function warn(logger) {
    var _console3;

    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    (_console3 = console).warn.apply(_console3, ["WARN [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.error = function error(logger) {
    var _console4;

    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    (_console4 = console).error.apply(_console4, ["ERROR [" + logger.id + "]"].concat(rest));
  };

  return ConsoleAppender;
}();

/***/ },

/***/ "aurelia-route-recognizer":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_path__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StaticSegment", function() { return StaticSegment; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DynamicSegment", function() { return DynamicSegment; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StarSegment", function() { return StarSegment; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EpsilonSegment", function() { return EpsilonSegment; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RouteRecognizer", function() { return RouteRecognizer; });




var State = function () {
  function State(charSpec) {
    

    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype.get = function get(charSpec) {
    for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var child = _ref;

      var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

      if (isEqual) {
        return child;
      }
    }

    return undefined;
  };

  State.prototype.put = function put(charSpec) {
    var state = this.get(charSpec);

    if (state) {
      return state;
    }

    state = new State(charSpec);

    this.nextStates.push(state);

    if (charSpec.repeat) {
      state.nextStates.push(state);
    }

    return state;
  };

  State.prototype.match = function match(ch) {
    var nextStates = this.nextStates;
    var results = [];

    for (var i = 0, l = nextStates.length; i < l; i++) {
      var child = nextStates[i];
      var charSpec = child.charSpec;

      if (charSpec.validChars !== undefined) {
        if (charSpec.validChars.indexOf(ch) !== -1) {
          results.push(child);
        }
      } else if (charSpec.invalidChars !== undefined) {
        if (charSpec.invalidChars.indexOf(ch) === -1) {
          results.push(child);
        }
      }
    }

    return results;
  };

  return State;
}();

var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

var StaticSegment = function () {
  function StaticSegment(string, caseSensitive) {
    

    this.string = string;
    this.caseSensitive = caseSensitive;
  }

  StaticSegment.prototype.eachChar = function eachChar(callback) {
    var s = this.string;
    for (var i = 0, ii = s.length; i < ii; ++i) {
      var ch = s[i];
      callback({ validChars: this.caseSensitive ? ch : ch.toUpperCase() + ch.toLowerCase() });
    }
  };

  StaticSegment.prototype.regex = function regex() {
    return this.string.replace(escapeRegex, '\\$1');
  };

  StaticSegment.prototype.generate = function generate() {
    return this.string;
  };

  return StaticSegment;
}();

var DynamicSegment = function () {
  function DynamicSegment(name, optional) {
    

    this.name = name;
    this.optional = optional;
  }

  DynamicSegment.prototype.eachChar = function eachChar(callback) {
    callback({ invalidChars: '/', repeat: true });
  };

  DynamicSegment.prototype.regex = function regex() {
    return '([^/]+)';
  };

  DynamicSegment.prototype.generate = function generate(params, consumed) {
    consumed[this.name] = true;
    return params[this.name];
  };

  return DynamicSegment;
}();

var StarSegment = function () {
  function StarSegment(name) {
    

    this.name = name;
  }

  StarSegment.prototype.eachChar = function eachChar(callback) {
    callback({ invalidChars: '', repeat: true });
  };

  StarSegment.prototype.regex = function regex() {
    return '(.+)';
  };

  StarSegment.prototype.generate = function generate(params, consumed) {
    consumed[this.name] = true;
    return params[this.name];
  };

  return StarSegment;
}();

var EpsilonSegment = function () {
  function EpsilonSegment() {
    
  }

  EpsilonSegment.prototype.eachChar = function eachChar() {};

  EpsilonSegment.prototype.regex = function regex() {
    return '';
  };

  EpsilonSegment.prototype.generate = function generate() {
    return '';
  };

  return EpsilonSegment;
}();

var RouteRecognizer = function () {
  function RouteRecognizer() {
    

    this.rootState = new State();
    this.names = {};
    this.routes = new Map();
  }

  RouteRecognizer.prototype.add = function add(route) {
    var _this = this;

    if (Array.isArray(route)) {
      route.forEach(function (r) {
        return _this.add(r);
      });
      return undefined;
    }

    var currentState = this.rootState;
    var skippableStates = [];
    var regex = '^';
    var types = { statics: 0, dynamics: 0, stars: 0 };
    var names = [];
    var routeName = route.handler.name;
    var isEmpty = true;
    var segments = parse(route.path, names, types, route.caseSensitive);

    for (var i = 0, ii = segments.length; i < ii; i++) {
      var segment = segments[i];
      if (segment instanceof EpsilonSegment) {
        continue;
      }

      var _addSegment = addSegment(currentState, segment),
          firstState = _addSegment[0],
          nextState = _addSegment[1];

      for (var j = 0, jj = skippableStates.length; j < jj; j++) {
        skippableStates[j].nextStates.push(firstState);
      }

      if (segment.optional) {
        skippableStates.push(nextState);
        regex += '(?:/' + segment.regex() + ')?';
      } else {
        currentState = nextState;
        regex += '/' + segment.regex();
        skippableStates.length = 0;
        isEmpty = false;
      }
    }

    if (isEmpty) {
      currentState = currentState.put({ validChars: '/' });
      regex += '/?';
    }

    var handlers = [{ handler: route.handler, names: names }];

    this.routes.set(route.handler, { segments: segments, handlers: handlers });
    if (routeName) {
      var routeNames = Array.isArray(routeName) ? routeName : [routeName];
      for (var _i2 = 0; _i2 < routeNames.length; _i2++) {
        if (!(routeNames[_i2] in this.names)) {
          this.names[routeNames[_i2]] = { segments: segments, handlers: handlers };
        }
      }
    }

    for (var _i3 = 0; _i3 < skippableStates.length; _i3++) {
      var state = skippableStates[_i3];
      state.handlers = handlers;
      state.regex = new RegExp(regex + '$', route.caseSensitive ? '' : 'i');
      state.types = types;
    }

    currentState.handlers = handlers;
    currentState.regex = new RegExp(regex + '$', route.caseSensitive ? '' : 'i');
    currentState.types = types;

    return currentState;
  };

  RouteRecognizer.prototype.getRoute = function getRoute(nameOrRoute) {
    return typeof nameOrRoute === 'string' ? this.names[nameOrRoute] : this.routes.get(nameOrRoute);
  };

  RouteRecognizer.prototype.handlersFor = function handlersFor(nameOrRoute) {
    var route = this.getRoute(nameOrRoute);
    if (!route) {
      throw new Error('There is no route named ' + nameOrRoute);
    }

    return [].concat(route.handlers);
  };

  RouteRecognizer.prototype.hasRoute = function hasRoute(nameOrRoute) {
    return !!this.getRoute(nameOrRoute);
  };

  RouteRecognizer.prototype.generate = function generate(nameOrRoute, params) {
    var route = this.getRoute(nameOrRoute);
    if (!route) {
      throw new Error('There is no route named ' + nameOrRoute);
    }

    var handler = route.handlers[0].handler;
    if (handler.generationUsesHref) {
      return handler.href;
    }

    var routeParams = Object.assign({}, params);
    var segments = route.segments;
    var consumed = {};
    var output = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i];

      if (segment instanceof EpsilonSegment) {
        continue;
      }

      var segmentValue = segment.generate(routeParams, consumed);
      if (segmentValue === null || segmentValue === undefined) {
        if (!segment.optional) {
          throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + nameOrRoute + '\'.');
        }
      } else {
        output += '/';
        output += segmentValue;
      }
    }

    if (output.charAt(0) !== '/') {
      output = '/' + output;
    }

    for (var param in consumed) {
      delete routeParams[param];
    }

    var queryString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["buildQueryString"])(routeParams);
    output += queryString ? '?' + queryString : '';

    return output;
  };

  RouteRecognizer.prototype.recognize = function recognize(path) {
    var states = [this.rootState];
    var queryParams = {};
    var isSlashDropped = false;
    var normalizedPath = path;

    var queryStart = normalizedPath.indexOf('?');
    if (queryStart !== -1) {
      var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
      normalizedPath = normalizedPath.substr(0, queryStart);
      queryParams = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["parseQueryString"])(queryString);
    }

    normalizedPath = decodeURI(normalizedPath);

    if (normalizedPath.charAt(0) !== '/') {
      normalizedPath = '/' + normalizedPath;
    }

    var pathLen = normalizedPath.length;
    if (pathLen > 1 && normalizedPath.charAt(pathLen - 1) === '/') {
      normalizedPath = normalizedPath.substr(0, pathLen - 1);
      isSlashDropped = true;
    }

    for (var i = 0, l = normalizedPath.length; i < l; i++) {
      states = recognizeChar(states, normalizedPath.charAt(i));
      if (!states.length) {
        break;
      }
    }

    var solutions = [];
    for (var _i4 = 0, _l = states.length; _i4 < _l; _i4++) {
      if (states[_i4].handlers) {
        solutions.push(states[_i4]);
      }
    }

    states = sortSolutions(solutions);

    var state = solutions[0];
    if (state && state.handlers) {
      if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
        normalizedPath = normalizedPath + '/';
      }

      return findHandler(state, normalizedPath, queryParams);
    }
  };

  return RouteRecognizer;
}();

var RecognizeResults = function RecognizeResults(queryParams) {
  

  this.splice = Array.prototype.splice;
  this.slice = Array.prototype.slice;
  this.push = Array.prototype.push;
  this.length = 0;
  this.queryParams = queryParams || {};
};

function parse(route, names, types, caseSensitive) {
  var normalizedRoute = route;
  if (route.charAt(0) === '/') {
    normalizedRoute = route.substr(1);
  }

  var results = [];

  var splitRoute = normalizedRoute.split('/');
  for (var i = 0, ii = splitRoute.length; i < ii; ++i) {
    var segment = splitRoute[i];

    var match = segment.match(/^:([^?]+)(\?)?$/);
    if (match) {
      var _match = match,
          _name = _match[1],
          optional = _match[2];

      if (_name.indexOf('=') !== -1) {
        throw new Error('Parameter ' + _name + ' in route ' + route + ' has a default value, which is not supported.');
      }
      results.push(new DynamicSegment(_name, !!optional));
      names.push(_name);
      types.dynamics++;
      continue;
    }

    match = segment.match(/^\*(.+)$/);
    if (match) {
      results.push(new StarSegment(match[1]));
      names.push(match[1]);
      types.stars++;
    } else if (segment === '') {
      results.push(new EpsilonSegment());
    } else {
      results.push(new StaticSegment(segment, caseSensitive));
      types.statics++;
    }
  }

  return results;
}

function sortSolutions(states) {
  return states.sort(function (a, b) {
    if (a.types.stars !== b.types.stars) {
      return a.types.stars - b.types.stars;
    }

    if (a.types.stars) {
      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }
      if (a.types.dynamics !== b.types.dynamics) {
        return b.types.dynamics - a.types.dynamics;
      }
    }

    if (a.types.dynamics !== b.types.dynamics) {
      return a.types.dynamics - b.types.dynamics;
    }

    if (a.types.statics !== b.types.statics) {
      return b.types.statics - a.types.statics;
    }

    return 0;
  });
}

function recognizeChar(states, ch) {
  var nextStates = [];

  for (var i = 0, l = states.length; i < l; i++) {
    var state = states[i];
    nextStates.push.apply(nextStates, state.match(ch));
  }

  return nextStates;
}

function findHandler(state, path, queryParams) {
  var handlers = state.handlers;
  var regex = state.regex;
  var captures = path.match(regex);
  var currentCapture = 1;
  var result = new RecognizeResults(queryParams);

  for (var i = 0, l = handlers.length; i < l; i++) {
    var _handler = handlers[i];
    var _names = _handler.names;
    var _params = {};

    for (var j = 0, m = _names.length; j < m; j++) {
      _params[_names[j]] = captures[currentCapture++];
    }

    result.push({ handler: _handler.handler, params: _params, isDynamic: !!_names.length });
  }

  return result;
}

function addSegment(currentState, segment) {
  var firstState = currentState.put({ validChars: '/' });
  var nextState = firstState;
  segment.eachChar(function (ch) {
    nextState = nextState.put(ch);
  });

  return [firstState, nextState];
}

/***/ },

/***/ "aurelia-router":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_history__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_route_recognizer__ = __webpack_require__("aurelia-route-recognizer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony export (binding) */ __webpack_require__.d(exports, "ActivateNextStep", function() { return ActivateNextStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AppRouter", function() { return AppRouter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BuildNavigationPlanStep", function() { return BuildNavigationPlanStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CanActivateNextStep", function() { return CanActivateNextStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CanDeactivatePreviousStep", function() { return CanDeactivatePreviousStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CommitChangesStep", function() { return CommitChangesStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DeactivatePreviousStep", function() { return DeactivatePreviousStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LoadRouteStep", function() { return LoadRouteStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NavModel", function() { return NavModel; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NavigationInstruction", function() { return NavigationInstruction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Pipeline", function() { return Pipeline; });
/* harmony export (binding) */ __webpack_require__.d(exports, "PipelineProvider", function() { return PipelineProvider; });
/* harmony export (binding) */ __webpack_require__.d(exports, "PipelineSlotName", function() { return PipelineSlotName; });
/* harmony export (binding) */ __webpack_require__.d(exports, "PipelineStatus", function() { return PipelineStatus; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RedirectToRoute", function() { return RedirectToRoute; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RouteLoader", function() { return RouteLoader; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RouterConfiguration", function() { return RouterConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RouterEvent", function() { return RouterEvent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "activationStrategy", function() { return activationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isNavigationCommand", function() { return isNavigationCommand; });






/**
 * Class used to represent an instruction during a navigation.
 */
class NavigationInstruction {
    constructor(init) {
        /**
         * Current built viewport plan of this nav instruction
         */
        this.plan = null;
        this.options = {};
        Object.assign(this, init);
        this.params = this.params || {};
        this.viewPortInstructions = {};
        let ancestorParams = [];
        let current = this;
        do {
            let currentParams = Object.assign({}, current.params);
            if (current.config && current.config.hasChildRouter) {
                // remove the param for the injected child route segment
                delete currentParams[current.getWildCardName()];
            }
            ancestorParams.unshift(currentParams);
            current = current.parentInstruction;
        } while (current);
        let allParams = Object.assign({}, this.queryParams, ...ancestorParams);
        this.lifecycleArgs = [allParams, this.config, this];
    }
    /**
     * Gets an array containing this instruction and all child instructions for the current navigation.
     */
    getAllInstructions() {
        let instructions = [this];
        let viewPortInstructions = this.viewPortInstructions;
        for (let key in viewPortInstructions) {
            let childInstruction = viewPortInstructions[key].childNavigationInstruction;
            if (childInstruction) {
                instructions.push(...childInstruction.getAllInstructions());
            }
        }
        return instructions;
    }
    /**
     * Gets an array containing the instruction and all child instructions for the previous navigation.
     * Previous instructions are no longer available after navigation completes.
     */
    getAllPreviousInstructions() {
        return this.getAllInstructions().map(c => c.previousInstruction).filter(c => c);
    }
    addViewPortInstruction(nameOrInitOptions, strategy, moduleId, component) {
        let viewPortInstruction;
        let viewPortName = typeof nameOrInitOptions === 'string' ? nameOrInitOptions : nameOrInitOptions.name;
        const lifecycleArgs = this.lifecycleArgs;
        const config = Object.assign({}, lifecycleArgs[1], { currentViewPort: viewPortName });
        if (typeof nameOrInitOptions === 'string') {
            viewPortInstruction = {
                name: nameOrInitOptions,
                strategy: strategy,
                moduleId: moduleId,
                component: component,
                childRouter: component.childRouter,
                lifecycleArgs: [lifecycleArgs[0], config, lifecycleArgs[2]]
            };
        }
        else {
            viewPortInstruction = {
                name: viewPortName,
                strategy: nameOrInitOptions.strategy,
                component: nameOrInitOptions.component,
                moduleId: nameOrInitOptions.moduleId,
                childRouter: nameOrInitOptions.component.childRouter,
                lifecycleArgs: [lifecycleArgs[0], config, lifecycleArgs[2]]
            };
        }
        return this.viewPortInstructions[viewPortName] = viewPortInstruction;
    }
    /**
     * Gets the name of the route pattern's wildcard parameter, if applicable.
     */
    getWildCardName() {
        // todo: potential issue, or at least unsafe typings
        let configRoute = this.config.route;
        let wildcardIndex = configRoute.lastIndexOf('*');
        return configRoute.substr(wildcardIndex + 1);
    }
    /**
     * Gets the path and query string created by filling the route
     * pattern's wildcard parameter with the matching param.
     */
    getWildcardPath() {
        let wildcardName = this.getWildCardName();
        let path = this.params[wildcardName] || '';
        let queryString = this.queryString;
        if (queryString) {
            path += '?' + queryString;
        }
        return path;
    }
    /**
     * Gets the instruction's base URL, accounting for wildcard route parameters.
     */
    getBaseUrl() {
        let $encodeURI = encodeURI;
        let fragment = decodeURI(this.fragment);
        if (fragment === '') {
            let nonEmptyRoute = this.router.routes.find(route => {
                return route.name === this.config.name &&
                    route.route !== '';
            });
            if (nonEmptyRoute) {
                fragment = nonEmptyRoute.route;
            }
        }
        if (!this.params) {
            return $encodeURI(fragment);
        }
        let wildcardName = this.getWildCardName();
        let path = this.params[wildcardName] || '';
        if (!path) {
            return $encodeURI(fragment);
        }
        return $encodeURI(fragment.substr(0, fragment.lastIndexOf(path)));
    }
    /**
     * Finalize a viewport instruction
     * @internal
     */
    _commitChanges(waitToSwap) {
        let router = this.router;
        router.currentInstruction = this;
        const previousInstruction = this.previousInstruction;
        if (previousInstruction) {
            previousInstruction.config.navModel.isActive = false;
        }
        this.config.navModel.isActive = true;
        router.refreshNavigation();
        let loads = [];
        let delaySwaps = [];
        let viewPortInstructions = this.viewPortInstructions;
        for (let viewPortName in viewPortInstructions) {
            let viewPortInstruction = viewPortInstructions[viewPortName];
            let viewPort = router.viewPorts[viewPortName];
            if (!viewPort) {
                throw new Error(`There was no router-view found in the view for ${viewPortInstruction.moduleId}.`);
            }
            let childNavInstruction = viewPortInstruction.childNavigationInstruction;
            if (viewPortInstruction.strategy === "replace" /* Replace */) {
                if (childNavInstruction && childNavInstruction.parentCatchHandler) {
                    loads.push(childNavInstruction._commitChanges(waitToSwap));
                }
                else {
                    if (waitToSwap) {
                        delaySwaps.push({ viewPort, viewPortInstruction });
                    }
                    loads.push(viewPort
                        .process(viewPortInstruction, waitToSwap)
                        .then(() => childNavInstruction
                        ? childNavInstruction._commitChanges(waitToSwap)
                        : Promise.resolve()));
                }
            }
            else {
                if (childNavInstruction) {
                    loads.push(childNavInstruction._commitChanges(waitToSwap));
                }
            }
        }
        return Promise
            .all(loads)
            .then(() => {
            delaySwaps.forEach(x => x.viewPort.swap(x.viewPortInstruction));
            return null;
        })
            .then(() => prune(this));
    }
    /**@internal */
    _updateTitle() {
        let router = this.router;
        let title = this._buildTitle(router.titleSeparator);
        if (title) {
            router.history.setTitle(title);
        }
    }
    /**@internal */
    _buildTitle(separator = ' | ') {
        let title = '';
        let childTitles = [];
        let navModelTitle = this.config.navModel.title;
        let instructionRouter = this.router;
        let viewPortInstructions = this.viewPortInstructions;
        if (navModelTitle) {
            title = instructionRouter.transformTitle(navModelTitle);
        }
        for (let viewPortName in viewPortInstructions) {
            let viewPortInstruction = viewPortInstructions[viewPortName];
            let child_nav_instruction = viewPortInstruction.childNavigationInstruction;
            if (child_nav_instruction) {
                let childTitle = child_nav_instruction._buildTitle(separator);
                if (childTitle) {
                    childTitles.push(childTitle);
                }
            }
        }
        if (childTitles.length) {
            title = childTitles.join(separator) + (title ? separator : '') + title;
        }
        if (instructionRouter.title) {
            title += (title ? separator : '') + instructionRouter.transformTitle(instructionRouter.title);
        }
        return title;
    }
}
const prune = (instruction) => {
    instruction.previousInstruction = null;
    instruction.plan = null;
};

/**
* Class for storing and interacting with a route's navigation settings.
*/
class NavModel {
    constructor(router, relativeHref) {
        /**
        * True if this nav item is currently active.
        */
        this.isActive = false;
        /**
        * The title.
        */
        this.title = null;
        /**
        * This nav item's absolute href.
        */
        this.href = null;
        /**
        * This nav item's relative href.
        */
        this.relativeHref = null;
        /**
        * Data attached to the route at configuration time.
        */
        this.settings = {};
        /**
        * The route config.
        */
        this.config = null;
        this.router = router;
        this.relativeHref = relativeHref;
    }
    /**
    * Sets the route's title and updates document.title.
    *  If the a navigation is in progress, the change will be applied
    *  to document.title when the navigation completes.
    *
    * @param title The new title.
    */
    setTitle(title) {
        this.title = title;
        if (this.isActive) {
            this.router.updateTitle();
        }
    }
}

function _normalizeAbsolutePath(path, hasPushState, absolute = false) {
    if (!hasPushState && path[0] !== '#') {
        path = '#' + path;
    }
    if (hasPushState && absolute) {
        path = path.substring(1, path.length);
    }
    return path;
}
function _createRootedPath(fragment, baseUrl, hasPushState, absolute) {
    if (isAbsoluteUrl.test(fragment)) {
        return fragment;
    }
    let path = '';
    if (baseUrl.length && baseUrl[0] !== '/') {
        path += '/';
    }
    path += baseUrl;
    if ((!path.length || path[path.length - 1] !== '/') && fragment[0] !== '/') {
        path += '/';
    }
    if (path.length && path[path.length - 1] === '/' && fragment[0] === '/') {
        path = path.substring(0, path.length - 1);
    }
    return _normalizeAbsolutePath(path + fragment, hasPushState, absolute);
}
function _resolveUrl(fragment, baseUrl, hasPushState) {
    if (isRootedPath.test(fragment)) {
        return _normalizeAbsolutePath(fragment, hasPushState);
    }
    return _createRootedPath(fragment, baseUrl, hasPushState);
}
function _ensureArrayWithSingleRoutePerConfig(config) {
    let routeConfigs = [];
    if (Array.isArray(config.route)) {
        for (let i = 0, ii = config.route.length; i < ii; ++i) {
            let current = Object.assign({}, config);
            current.route = config.route[i];
            routeConfigs.push(current);
        }
    }
    else {
        routeConfigs.push(Object.assign({}, config));
    }
    return routeConfigs;
}
const isRootedPath = /^#?\//;
const isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

/**
 * Class used to configure a [[Router]] instance.
 *
 * @constructor
 */
class RouterConfiguration {
    constructor() {
        this.instructions = [];
        this.options = {};
        this.pipelineSteps = [];
    }
    /**
     * Adds a step to be run during the [[Router]]'s navigation pipeline.
     *
     * @param name The name of the pipeline slot to insert the step into.
     * @param step The pipeline step.
     * @chainable
     */
    addPipelineStep(name, step) {
        if (step === null || step === undefined) {
            throw new Error('Pipeline step cannot be null or undefined.');
        }
        this.pipelineSteps.push({ name, step });
        return this;
    }
    /**
     * Adds a step to be run during the [[Router]]'s authorize pipeline slot.
     *
     * @param step The pipeline step.
     * @chainable
     */
    addAuthorizeStep(step) {
        return this.addPipelineStep("authorize" /* Authorize */, step);
    }
    /**
     * Adds a step to be run during the [[Router]]'s preActivate pipeline slot.
     *
     * @param step The pipeline step.
     * @chainable
     */
    addPreActivateStep(step) {
        return this.addPipelineStep("preActivate" /* PreActivate */, step);
    }
    /**
     * Adds a step to be run during the [[Router]]'s preRender pipeline slot.
     *
     * @param step The pipeline step.
     * @chainable
     */
    addPreRenderStep(step) {
        return this.addPipelineStep("preRender" /* PreRender */, step);
    }
    /**
     * Adds a step to be run during the [[Router]]'s postRender pipeline slot.
     *
     * @param step The pipeline step.
     * @chainable
     */
    addPostRenderStep(step) {
        return this.addPipelineStep("postRender" /* PostRender */, step);
    }
    /**
     * Configures a route that will be used if there is no previous location available on navigation cancellation.
     *
     * @param fragment The URL fragment to use as the navigation destination.
     * @chainable
     */
    fallbackRoute(fragment) {
        this._fallbackRoute = fragment;
        return this;
    }
    /**
     * Maps one or more routes to be registered with the router.
     *
     * @param route The [[RouteConfig]] to map, or an array of [[RouteConfig]] to map.
     * @chainable
     */
    map(route) {
        if (Array.isArray(route)) {
            route.forEach(r => this.map(r));
            return this;
        }
        return this.mapRoute(route);
    }
    /**
     * Configures defaults to use for any view ports.
     *
     * @param viewPortConfig a view port configuration object to use as a
     *  default, of the form { viewPortName: { moduleId } }.
     * @chainable
     */
    useViewPortDefaults(viewPortConfig) {
        this.viewPortDefaults = viewPortConfig;
        return this;
    }
    /**
     * Maps a single route to be registered with the router.
     *
     * @param route The [[RouteConfig]] to map.
     * @chainable
     */
    mapRoute(config) {
        this.instructions.push(router => {
            let routeConfigs = _ensureArrayWithSingleRoutePerConfig(config);
            let navModel;
            for (let i = 0, ii = routeConfigs.length; i < ii; ++i) {
                let routeConfig = routeConfigs[i];
                routeConfig.settings = routeConfig.settings || {};
                if (!navModel) {
                    navModel = router.createNavModel(routeConfig);
                }
                router.addRoute(routeConfig, navModel);
            }
        });
        return this;
    }
    /**
     * Registers an unknown route handler to be run when the URL fragment doesn't match any registered routes.
     *
     * @param config A string containing a moduleId to load, or a [[RouteConfig]], or a function that takes the
     *  [[NavigationInstruction]] and selects a moduleId to load.
     * @chainable
     */
    mapUnknownRoutes(config) {
        this.unknownRouteConfig = config;
        return this;
    }
    /**
     * Applies the current configuration to the specified [[Router]].
     *
     * @param router The [[Router]] to apply the configuration to.
     */
    exportToRouter(router) {
        let instructions = this.instructions;
        for (let i = 0, ii = instructions.length; i < ii; ++i) {
            instructions[i](router);
        }
        let { title, titleSeparator, unknownRouteConfig, _fallbackRoute, viewPortDefaults } = this;
        if (title) {
            router.title = title;
        }
        if (titleSeparator) {
            router.titleSeparator = titleSeparator;
        }
        if (unknownRouteConfig) {
            router.handleUnknownRoutes(unknownRouteConfig);
        }
        if (_fallbackRoute) {
            router.fallbackRoute = _fallbackRoute;
        }
        if (viewPortDefaults) {
            router.useViewPortDefaults(viewPortDefaults);
        }
        Object.assign(router.options, this.options);
        let pipelineSteps = this.pipelineSteps;
        let pipelineStepCount = pipelineSteps.length;
        if (pipelineStepCount) {
            if (!router.isRoot) {
                throw new Error('Pipeline steps can only be added to the root router');
            }
            let pipelineProvider = router.pipelineProvider;
            for (let i = 0, ii = pipelineStepCount; i < ii; ++i) {
                let { name, step } = pipelineSteps[i];
                pipelineProvider.addStep(name, step);
            }
        }
    }
}

/**
 * The primary class responsible for handling routing and navigation.
 */
class Router {
    /**
     * @param container The [[Container]] to use when child routers.
     * @param history The [[History]] implementation to delegate navigation requests to.
     */
    constructor(container, history) {
        /**
         * The parent router, or null if this instance is not a child router.
         */
        this.parent = null;
        this.options = {};
        /**
         * The defaults used when a viewport lacks specified content
         */
        this.viewPortDefaults = {};
        /**
         * Extension point to transform the document title before it is built and displayed.
         * By default, child routers delegate to the parent router, and the app router
         * returns the title unchanged.
         */
        this.transformTitle = (title) => {
            if (this.parent) {
                return this.parent.transformTitle(title);
            }
            return title;
        };
        this.container = container;
        this.history = history;
        this.reset();
    }
    /**
     * Fully resets the router's internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
     * Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.
     */
    reset() {
        this.viewPorts = {};
        this.routes = [];
        this.baseUrl = '';
        this.isConfigured = false;
        this.isNavigating = false;
        this.isExplicitNavigation = false;
        this.isExplicitNavigationBack = false;
        this.isNavigatingFirst = false;
        this.isNavigatingNew = false;
        this.isNavigatingRefresh = false;
        this.isNavigatingForward = false;
        this.isNavigatingBack = false;
        this.couldDeactivate = false;
        this.navigation = [];
        this.currentInstruction = null;
        this.viewPortDefaults = {};
        this._fallbackOrder = 100;
        this._recognizer = new __WEBPACK_IMPORTED_MODULE_3_aurelia_route_recognizer__["RouteRecognizer"]();
        this._childRecognizer = new __WEBPACK_IMPORTED_MODULE_3_aurelia_route_recognizer__["RouteRecognizer"]();
        this._configuredPromise = new Promise(resolve => {
            this._resolveConfiguredPromise = resolve;
        });
    }
    /**
     * Gets a value indicating whether or not this [[Router]] is the root in the router tree. I.e., it has no parent.
     */
    get isRoot() {
        return !this.parent;
    }
    /**
     * Registers a viewPort to be used as a rendering target for activated routes.
     *
     * @param viewPort The viewPort.
     * @param name The name of the viewPort. 'default' if unspecified.
     */
    registerViewPort(viewPort, name) {
        name = name || 'default';
        this.viewPorts[name] = viewPort;
    }
    /**
     * Returns a Promise that resolves when the router is configured.
     */
    ensureConfigured() {
        return this._configuredPromise;
    }
    /**
     * Configures the router.
     *
     * @param callbackOrConfig The [[RouterConfiguration]] or a callback that takes a [[RouterConfiguration]].
     */
    configure(callbackOrConfig) {
        this.isConfigured = true;
        let result = callbackOrConfig;
        let config;
        if (typeof callbackOrConfig === 'function') {
            config = new RouterConfiguration();
            result = callbackOrConfig(config);
        }
        return Promise
            .resolve(result)
            .then((c) => {
            if (c && c.exportToRouter) {
                config = c;
            }
            config.exportToRouter(this);
            this.isConfigured = true;
            this._resolveConfiguredPromise();
        });
    }
    /**
     * Navigates to a new location.
     *
     * @param fragment The URL fragment to use as the navigation destination.
     * @param options The navigation options.
     */
    navigate(fragment, options) {
        if (!this.isConfigured && this.parent) {
            return this.parent.navigate(fragment, options);
        }
        this.isExplicitNavigation = true;
        return this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
    }
    /**
     * Navigates to a new location corresponding to the route and params specified. Equivallent to [[Router.generate]] followed
     * by [[Router.navigate]].
     *
     * @param route The name of the route to use when generating the navigation location.
     * @param params The route parameters to be used when populating the route pattern.
     * @param options The navigation options.
     */
    navigateToRoute(route, params, options) {
        let path = this.generate(route, params);
        return this.navigate(path, options);
    }
    /**
     * Navigates back to the most recent location in history.
     */
    navigateBack() {
        this.isExplicitNavigationBack = true;
        this.history.navigateBack();
    }
    /**
     * Creates a child router of the current router.
     *
     * @param container The [[Container]] to provide to the child router. Uses the current [[Router]]'s [[Container]] if unspecified.
     * @returns {Router} The new child Router.
     */
    createChild(container) {
        let childRouter = new Router(container || this.container.createChild(), this.history);
        childRouter.parent = this;
        return childRouter;
    }
    /**
     * Generates a URL fragment matching the specified route pattern.
     *
     * @param name The name of the route whose pattern should be used to generate the fragment.
     * @param params The route params to be used to populate the route pattern.
     * @param options If options.absolute = true, then absolute url will be generated; otherwise, it will be relative url.
     * @returns {string} A string containing the generated URL fragment.
     */
    generate(nameOrRoute, params = {}, options = {}) {
        // A child recognizer generates routes for potential child routes. Any potential child route is added
        // to the childRoute property of params for the childRouter to recognize. When generating routes, we
        // use the childRecognizer when childRoute params are available to generate a child router enabled route.
        let recognizer = 'childRoute' in params ? this._childRecognizer : this._recognizer;
        let hasRoute = recognizer.hasRoute(nameOrRoute);
        if (!hasRoute) {
            if (this.parent) {
                return this.parent.generate(nameOrRoute, params, options);
            }
            throw new Error(`A route with name '${nameOrRoute}' could not be found. Check that \`name: '${nameOrRoute}'\` was specified in the route's config.`);
        }
        let path = recognizer.generate(nameOrRoute, params);
        let rootedPath = _createRootedPath(path, this.baseUrl, this.history._hasPushState, options.absolute);
        return options.absolute ? `${this.history.getAbsoluteRoot()}${rootedPath}` : rootedPath;
    }
    /**
     * Creates a [[NavModel]] for the specified route config.
     *
     * @param config The route config.
     */
    createNavModel(config) {
        let navModel = new NavModel(this, 'href' in config
            ? config.href
            // potential error when config.route is a string[] ?
            : config.route);
        navModel.title = config.title;
        navModel.order = config.nav;
        navModel.href = config.href;
        navModel.settings = config.settings;
        navModel.config = config;
        return navModel;
    }
    /**
     * Registers a new route with the router.
     *
     * @param config The [[RouteConfig]].
     * @param navModel The [[NavModel]] to use for the route. May be omitted for single-pattern routes.
     */
    addRoute(config, navModel) {
        if (Array.isArray(config.route)) {
            let routeConfigs = _ensureArrayWithSingleRoutePerConfig(config);
            // the following is wrong. todo: fix this after TS refactoring release
            routeConfigs.forEach(this.addRoute.bind(this));
            return;
        }
        validateRouteConfig(config);
        if (!('viewPorts' in config) && !config.navigationStrategy) {
            config.viewPorts = {
                'default': {
                    moduleId: config.moduleId,
                    view: config.view
                }
            };
        }
        if (!navModel) {
            navModel = this.createNavModel(config);
        }
        this.routes.push(config);
        let path = config.route;
        if (path.charAt(0) === '/') {
            path = path.substr(1);
        }
        let caseSensitive = config.caseSensitive === true;
        let state = this._recognizer.add({
            path: path,
            handler: config,
            caseSensitive: caseSensitive
        });
        if (path) {
            let settings = config.settings;
            delete config.settings;
            let withChild = JSON.parse(JSON.stringify(config));
            config.settings = settings;
            withChild.route = `${path}/*childRoute`;
            withChild.hasChildRouter = true;
            this._childRecognizer.add({
                path: withChild.route,
                handler: withChild,
                caseSensitive: caseSensitive
            });
            withChild.navModel = navModel;
            withChild.settings = config.settings;
            withChild.navigationStrategy = config.navigationStrategy;
        }
        config.navModel = navModel;
        let navigation = this.navigation;
        if ((navModel.order || navModel.order === 0) && navigation.indexOf(navModel) === -1) {
            if ((!navModel.href && navModel.href !== '') && (state.types.dynamics || state.types.stars)) {
                throw new Error('Invalid route config for "' + config.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
            }
            if (typeof navModel.order !== 'number') {
                navModel.order = ++this._fallbackOrder;
            }
            navigation.push(navModel);
            // this is a potential error / inconsistency between browsers
            //
            // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            // If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other,
            // but sorted with respect to all different elements.
            // Note: the ECMAscript standard does not guarantee this behaviour,
            // and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
            navigation.sort((a, b) => a.order - b.order);
        }
    }
    /**
     * Gets a value indicating whether or not this [[Router]] or one of its ancestors has a route registered with the specified name.
     *
     * @param name The name of the route to check.
     */
    hasRoute(name) {
        return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
    }
    /**
     * Gets a value indicating whether or not this [[Router]] has a route registered with the specified name.
     *
     * @param name The name of the route to check.
     */
    hasOwnRoute(name) {
        return this._recognizer.hasRoute(name);
    }
    /**
     * Register a handler to use when the incoming URL fragment doesn't match any registered routes.
     *
     * @param config The moduleId, or a function that selects the moduleId, or a [[RouteConfig]].
     */
    handleUnknownRoutes(config) {
        if (!config) {
            throw new Error('Invalid unknown route handler');
        }
        this.catchAllHandler = instruction => {
            return this
                ._createRouteConfig(config, instruction)
                .then(c => {
                instruction.config = c;
                return instruction;
            });
        };
    }
    /**
     * Updates the document title using the current navigation instruction.
     */
    updateTitle() {
        let parentRouter = this.parent;
        if (parentRouter) {
            return parentRouter.updateTitle();
        }
        let currentInstruction = this.currentInstruction;
        if (currentInstruction) {
            currentInstruction._updateTitle();
        }
        return undefined;
    }
    /**
     * Updates the navigation routes with hrefs relative to the current location.
     * Note: This method will likely move to a plugin in a future release.
     */
    refreshNavigation() {
        let nav = this.navigation;
        for (let i = 0, length = nav.length; i < length; i++) {
            let current = nav[i];
            if (!current.config.href) {
                current.href = _createRootedPath(current.relativeHref, this.baseUrl, this.history._hasPushState);
            }
            else {
                current.href = _normalizeAbsolutePath(current.config.href, this.history._hasPushState);
            }
        }
    }
    /**
     * Sets the default configuration for the view ports. This specifies how to
     *  populate a view port for which no module is specified. The default is
     *  an empty view/view-model pair.
     */
    useViewPortDefaults($viewPortDefaults) {
        // a workaround to have strong typings while not requiring to expose interface ViewPortInstruction
        let viewPortDefaults = $viewPortDefaults;
        for (let viewPortName in viewPortDefaults) {
            let viewPortConfig = viewPortDefaults[viewPortName];
            this.viewPortDefaults[viewPortName] = {
                moduleId: viewPortConfig.moduleId
            };
        }
    }
    /**@internal */
    _refreshBaseUrl() {
        let parentRouter = this.parent;
        if (parentRouter) {
            this.baseUrl = generateBaseUrl(parentRouter, parentRouter.currentInstruction);
        }
    }
    /**@internal */
    _createNavigationInstruction(url = '', parentInstruction = null) {
        let fragment = url;
        let queryString = '';
        let queryIndex = url.indexOf('?');
        if (queryIndex !== -1) {
            fragment = url.substr(0, queryIndex);
            queryString = url.substr(queryIndex + 1);
        }
        let urlRecognizationResults = this._recognizer.recognize(url);
        if (!urlRecognizationResults || !urlRecognizationResults.length) {
            urlRecognizationResults = this._childRecognizer.recognize(url);
        }
        let instructionInit = {
            fragment,
            queryString,
            config: null,
            parentInstruction,
            previousInstruction: this.currentInstruction,
            router: this,
            options: {
                compareQueryParams: this.options.compareQueryParams
            }
        };
        let result;
        if (urlRecognizationResults && urlRecognizationResults.length) {
            let first = urlRecognizationResults[0];
            let instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
                params: first.params,
                queryParams: first.queryParams || urlRecognizationResults.queryParams,
                config: first.config || first.handler
            }));
            if (typeof first.handler === 'function') {
                result = evaluateNavigationStrategy(instruction, first.handler, first);
            }
            else if (first.handler && typeof first.handler.navigationStrategy === 'function') {
                result = evaluateNavigationStrategy(instruction, first.handler.navigationStrategy, first.handler);
            }
            else {
                result = Promise.resolve(instruction);
            }
        }
        else if (this.catchAllHandler) {
            let instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
                params: { path: fragment },
                queryParams: urlRecognizationResults ? urlRecognizationResults.queryParams : {},
                config: null // config will be created by the catchAllHandler
            }));
            result = evaluateNavigationStrategy(instruction, this.catchAllHandler);
        }
        else if (this.parent) {
            let router = this._parentCatchAllHandler(this.parent);
            if (router) {
                let newParentInstruction = this._findParentInstructionFromRouter(router, parentInstruction);
                let instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
                    params: { path: fragment },
                    queryParams: urlRecognizationResults ? urlRecognizationResults.queryParams : {},
                    router: router,
                    parentInstruction: newParentInstruction,
                    parentCatchHandler: true,
                    config: null // config will be created by the chained parent catchAllHandler
                }));
                result = evaluateNavigationStrategy(instruction, router.catchAllHandler);
            }
        }
        if (result && parentInstruction) {
            this.baseUrl = generateBaseUrl(this.parent, parentInstruction);
        }
        return result || Promise.reject(new Error(`Route not found: ${url}`));
    }
    /**@internal */
    _findParentInstructionFromRouter(router, instruction) {
        if (instruction.router === router) {
            instruction.fragment = router.baseUrl; // need to change the fragment in case of a redirect instead of moduleId
            return instruction;
        }
        else if (instruction.parentInstruction) {
            return this._findParentInstructionFromRouter(router, instruction.parentInstruction);
        }
        return undefined;
    }
    /**@internal */
    _parentCatchAllHandler(router) {
        if (router.catchAllHandler) {
            return router;
        }
        else if (router.parent) {
            return this._parentCatchAllHandler(router.parent);
        }
        return false;
    }
    /**
     * @internal
     */
    _createRouteConfig(config, instruction) {
        return Promise
            .resolve(config)
            .then((c) => {
            if (typeof c === 'string') {
                return { moduleId: c };
            }
            else if (typeof c === 'function') {
                return c(instruction);
            }
            return c;
        })
            // typing here could be either RouteConfig or RedirectConfig
            // but temporarily treat both as RouteConfig
            // todo: improve typings precision
            .then((c) => typeof c === 'string' ? { moduleId: c } : c)
            .then((c) => {
            c.route = instruction.params.path;
            validateRouteConfig(c);
            if (!c.navModel) {
                c.navModel = this.createNavModel(c);
            }
            return c;
        });
    }
}
/* @internal exported for unit testing */
const generateBaseUrl = (router, instruction) => {
    return `${router.baseUrl || ''}${instruction.getBaseUrl() || ''}`;
};
/* @internal exported for unit testing */
const validateRouteConfig = (config) => {
    if (typeof config !== 'object') {
        throw new Error('Invalid Route Config');
    }
    if (typeof config.route !== 'string') {
        let name = config.name || '(no name)';
        throw new Error('Invalid Route Config for "' + name + '": You must specify a "route:" pattern.');
    }
    if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
        throw new Error('Invalid Route Config for "' + config.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".');
    }
};
/* @internal exported for unit testing */
const evaluateNavigationStrategy = (instruction, evaluator, context) => {
    return Promise
        .resolve(evaluator.call(context, instruction))
        .then(() => {
        if (!('viewPorts' in instruction.config)) {
            instruction.config.viewPorts = {
                'default': {
                    moduleId: instruction.config.moduleId
                }
            };
        }
        return instruction;
    });
};

/**@internal exported for unit testing */
const createNextFn = (instruction, steps) => {
    let index = -1;
    const next = function () {
        index++;
        if (index < steps.length) {
            let currentStep = steps[index];
            try {
                return currentStep(instruction, next);
            }
            catch (e) {
                return next.reject(e);
            }
        }
        else {
            return next.complete();
        }
    };
    next.complete = createCompletionHandler(next, "completed" /* Completed */);
    next.cancel = createCompletionHandler(next, "canceled" /* Canceled */);
    next.reject = createCompletionHandler(next, "rejected" /* Rejected */);
    return next;
};
/**@internal exported for unit testing */
const createCompletionHandler = (next, status) => {
    return (output) => Promise
        .resolve({
        status,
        output,
        completed: status === "completed" /* Completed */
    });
};

/**
 * The class responsible for managing and processing the navigation pipeline.
 */
class Pipeline {
    constructor() {
        /**
         * The pipeline steps. And steps added via addStep will be converted to a function
         * The actualy running functions with correct step contexts of this pipeline
         */
        this.steps = [];
    }
    /**
     * Adds a step to the pipeline.
     *
     * @param step The pipeline step.
     */
    addStep(step) {
        let run;
        if (typeof step === 'function') {
            run = step;
        }
        else if (typeof step.getSteps === 'function') {
            // getSteps is to enable support open slots
            // where devs can add multiple steps into the same slot name
            let steps = step.getSteps();
            for (let i = 0, l = steps.length; i < l; i++) {
                this.addStep(steps[i]);
            }
            return this;
        }
        else {
            run = step.run.bind(step);
        }
        this.steps.push(run);
        return this;
    }
    /**
     * Runs the pipeline.
     *
     * @param instruction The navigation instruction to process.
     */
    run(instruction) {
        const nextFn = createNextFn(instruction, this.steps);
        return nextFn();
    }
}

/**
* Determines if the provided object is a navigation command.
* A navigation command is anything with a navigate method.
*
* @param obj The object to check.
*/
function isNavigationCommand(obj) {
    return obj && typeof obj.navigate === 'function';
}
/**
* Used during the activation lifecycle to cause a redirect.
*/
class Redirect {
    /**
     * @param url The URL fragment to use as the navigation destination.
     * @param options The navigation options.
     */
    constructor(url, options = {}) {
        this.url = url;
        this.options = Object.assign({ trigger: true, replace: true }, options);
        this.shouldContinueProcessing = false;
    }
    /**
     * Called by the activation system to set the child router.
     *
     * @param router The router.
     */
    setRouter(router) {
        this.router = router;
    }
    /**
     * Called by the navigation pipeline to navigate.
     *
     * @param appRouter The router to be redirected.
     */
    navigate(appRouter) {
        let navigatingRouter = this.options.useAppRouter ? appRouter : (this.router || appRouter);
        navigatingRouter.navigate(this.url, this.options);
    }
}
/**
 * Used during the activation lifecycle to cause a redirect to a named route.
 */
class RedirectToRoute {
    /**
     * @param route The name of the route.
     * @param params The parameters to be sent to the activation method.
     * @param options The options to use for navigation.
     */
    constructor(route, params = {}, options = {}) {
        this.route = route;
        this.params = params;
        this.options = Object.assign({ trigger: true, replace: true }, options);
        this.shouldContinueProcessing = false;
    }
    /**
     * Called by the activation system to set the child router.
     *
     * @param router The router.
     */
    setRouter(router) {
        this.router = router;
    }
    /**
     * Called by the navigation pipeline to navigate.
     *
     * @param appRouter The router to be redirected.
     */
    navigate(appRouter) {
        let navigatingRouter = this.options.useAppRouter ? appRouter : (this.router || appRouter);
        navigatingRouter.navigateToRoute(this.route, this.params, this.options);
    }
}

/**
 * @internal exported for unit testing
 */
function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
    let config = instruction.config;
    if ('redirect' in config) {
        return buildRedirectPlan(instruction);
    }
    const prevInstruction = instruction.previousInstruction;
    const defaultViewPortConfigs = instruction.router.viewPortDefaults;
    if (prevInstruction) {
        return buildTransitionPlans(instruction, prevInstruction, defaultViewPortConfigs, forceLifecycleMinimum);
    }
    // first navigation, only need to prepare a few information for each viewport plan
    const viewPortPlans = {};
    let viewPortConfigs = config.viewPorts;
    for (let viewPortName in viewPortConfigs) {
        let viewPortConfig = viewPortConfigs[viewPortName];
        if (viewPortConfig.moduleId === null && viewPortName in defaultViewPortConfigs) {
            viewPortConfig = defaultViewPortConfigs[viewPortName];
        }
        viewPortPlans[viewPortName] = {
            name: viewPortName,
            strategy: "replace" /* Replace */,
            config: viewPortConfig
        };
    }
    return Promise.resolve(viewPortPlans);
}
/**
 * Build redirect plan based on config of a navigation instruction
 * @internal exported for unit testing
 */
const buildRedirectPlan = (instruction) => {
    const config = instruction.config;
    const router = instruction.router;
    return router
        ._createNavigationInstruction(config.redirect)
        .then(redirectInstruction => {
        const params = {};
        const originalInstructionParams = instruction.params;
        const redirectInstructionParams = redirectInstruction.params;
        for (let key in redirectInstructionParams) {
            // If the param on the redirect points to another param, e.g. { route: first/:this, redirect: second/:this }
            let val = redirectInstructionParams[key];
            if (typeof val === 'string' && val[0] === ':') {
                val = val.slice(1);
                // And if that param is found on the original instruction then use it
                if (val in originalInstructionParams) {
                    params[key] = originalInstructionParams[val];
                }
            }
            else {
                params[key] = redirectInstructionParams[key];
            }
        }
        let redirectLocation = router.generate(redirectInstruction.config, params, instruction.options);
        // Special handling for child routes
        for (let key in originalInstructionParams) {
            redirectLocation = redirectLocation.replace(`:${key}`, originalInstructionParams[key]);
        }
        let queryString = instruction.queryString;
        if (queryString) {
            redirectLocation += '?' + queryString;
        }
        return Promise.resolve(new Redirect(redirectLocation));
    });
};
/**
 * @param viewPortPlans the Plan record that holds information about built plans
 * @internal exported for unit testing
 */
const buildTransitionPlans = (currentInstruction, previousInstruction, defaultViewPortConfigs, forceLifecycleMinimum) => {
    let viewPortPlans = {};
    let newInstructionConfig = currentInstruction.config;
    let hasNewParams = hasDifferentParameterValues(previousInstruction, currentInstruction);
    let pending = [];
    let previousViewPortInstructions = previousInstruction.viewPortInstructions;
    for (let viewPortName in previousViewPortInstructions) {
        const prevViewPortInstruction = previousViewPortInstructions[viewPortName];
        const prevViewPortComponent = prevViewPortInstruction.component;
        const newInstructionViewPortConfigs = newInstructionConfig.viewPorts;
        // if this is invoked on a viewport without any changes, based on new url,
        // newViewPortConfig will be the existing viewport instruction
        let nextViewPortConfig = viewPortName in newInstructionViewPortConfigs
            ? newInstructionViewPortConfigs[viewPortName]
            : prevViewPortInstruction;
        if (nextViewPortConfig.moduleId === null && viewPortName in defaultViewPortConfigs) {
            nextViewPortConfig = defaultViewPortConfigs[viewPortName];
        }
        const viewPortActivationStrategy = determineActivationStrategy(currentInstruction, prevViewPortInstruction, nextViewPortConfig, hasNewParams, forceLifecycleMinimum);
        const viewPortPlan = viewPortPlans[viewPortName] = {
            name: viewPortName,
            // ViewPortInstruction can quack like a RouteConfig
            config: nextViewPortConfig,
            prevComponent: prevViewPortComponent,
            prevModuleId: prevViewPortInstruction.moduleId,
            strategy: viewPortActivationStrategy
        };
        // recursively build nav plans for all existing child routers/viewports of this viewport
        // this is possible because existing child viewports and routers already have necessary information
        // to process the wildcard path from parent instruction
        if (viewPortActivationStrategy !== "replace" /* Replace */ && prevViewPortInstruction.childRouter) {
            const path = currentInstruction.getWildcardPath();
            const task = prevViewPortInstruction
                .childRouter
                ._createNavigationInstruction(path, currentInstruction)
                .then((childInstruction) => {
                viewPortPlan.childNavigationInstruction = childInstruction;
                return _buildNavigationPlan(childInstruction, 
                // is it safe to assume viewPortPlan has not been changed from previous assignment?
                // if so, can just use local variable viewPortPlanStrategy
                // there could be user code modifying viewport plan during _createNavigationInstruction?
                viewPortPlan.strategy === "invoke-lifecycle" /* InvokeLifecycle */)
                    .then(childPlan => {
                    if (childPlan instanceof Redirect) {
                        return Promise.reject(childPlan);
                    }
                    childInstruction.plan = childPlan;
                    // for bluebird ?
                    return null;
                });
            });
            pending.push(task);
        }
    }
    return Promise.all(pending).then(() => viewPortPlans);
};
/**
 * @param newViewPortConfig if this is invoked on a viewport without any changes, based on new url, newViewPortConfig will be the existing viewport instruction
 * @internal exported for unit testing
 */
const determineActivationStrategy = (currentNavInstruction, prevViewPortInstruction, newViewPortConfig, 
// indicates whether there is difference between old and new url params
hasNewParams, forceLifecycleMinimum) => {
    let newInstructionConfig = currentNavInstruction.config;
    let prevViewPortViewModel = prevViewPortInstruction.component.viewModel;
    let viewPortPlanStrategy;
    if (prevViewPortInstruction.moduleId !== newViewPortConfig.moduleId) {
        viewPortPlanStrategy = "replace" /* Replace */;
    }
    else if ('determineActivationStrategy' in prevViewPortViewModel) {
        viewPortPlanStrategy = prevViewPortViewModel.determineActivationStrategy(...currentNavInstruction.lifecycleArgs);
    }
    else if (newInstructionConfig.activationStrategy) {
        viewPortPlanStrategy = newInstructionConfig.activationStrategy;
    }
    else if (hasNewParams || forceLifecycleMinimum) {
        viewPortPlanStrategy = "invoke-lifecycle" /* InvokeLifecycle */;
    }
    else {
        viewPortPlanStrategy = "no-change" /* NoChange */;
    }
    return viewPortPlanStrategy;
};
/**@internal exported for unit testing */
const hasDifferentParameterValues = (prev, next) => {
    let prevParams = prev.params;
    let nextParams = next.params;
    let nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;
    for (let key in nextParams) {
        if (key === nextWildCardName) {
            continue;
        }
        if (prevParams[key] !== nextParams[key]) {
            return true;
        }
    }
    for (let key in prevParams) {
        if (key === nextWildCardName) {
            continue;
        }
        if (prevParams[key] !== nextParams[key]) {
            return true;
        }
    }
    if (!next.options.compareQueryParams) {
        return false;
    }
    let prevQueryParams = prev.queryParams;
    let nextQueryParams = next.queryParams;
    for (let key in nextQueryParams) {
        if (prevQueryParams[key] !== nextQueryParams[key]) {
            return true;
        }
    }
    for (let key in prevQueryParams) {
        if (prevQueryParams[key] !== nextQueryParams[key]) {
            return true;
        }
    }
    return false;
};

/**
 * Transform a navigation instruction into viewport plan record object,
 * or a redirect request if user viewmodel demands
 */
class BuildNavigationPlanStep {
    run(navigationInstruction, next) {
        return _buildNavigationPlan(navigationInstruction)
            .then(plan => {
            if (plan instanceof Redirect) {
                return next.cancel(plan);
            }
            navigationInstruction.plan = plan;
            return next();
        })
            .catch(next.cancel);
    }
}

/**
 * @internal Exported for unit testing
 */
const loadNewRoute = (routeLoader, navigationInstruction) => {
    let loadingPlans = determineLoadingPlans(navigationInstruction);
    let loadPromises = loadingPlans.map((loadingPlan) => loadRoute(routeLoader, loadingPlan.navigationInstruction, loadingPlan.viewPortPlan));
    return Promise.all(loadPromises);
};
/**
 * @internal Exported for unit testing
 */
const determineLoadingPlans = (navigationInstruction, loadingPlans = []) => {
    let viewPortPlans = navigationInstruction.plan;
    for (let viewPortName in viewPortPlans) {
        let viewPortPlan = viewPortPlans[viewPortName];
        let childNavInstruction = viewPortPlan.childNavigationInstruction;
        if (viewPortPlan.strategy === "replace" /* Replace */) {
            loadingPlans.push({ viewPortPlan, navigationInstruction });
            if (childNavInstruction) {
                determineLoadingPlans(childNavInstruction, loadingPlans);
            }
        }
        else {
            let viewPortInstruction = navigationInstruction.addViewPortInstruction({
                name: viewPortName,
                strategy: viewPortPlan.strategy,
                moduleId: viewPortPlan.prevModuleId,
                component: viewPortPlan.prevComponent
            });
            if (childNavInstruction) {
                viewPortInstruction.childNavigationInstruction = childNavInstruction;
                determineLoadingPlans(childNavInstruction, loadingPlans);
            }
        }
    }
    return loadingPlans;
};
/**
 * @internal Exported for unit testing
 */
const loadRoute = (routeLoader, navigationInstruction, viewPortPlan) => {
    let planConfig = viewPortPlan.config;
    let moduleId = planConfig ? planConfig.moduleId : null;
    return loadComponent(routeLoader, navigationInstruction, planConfig)
        .then((component) => {
        let viewPortInstruction = navigationInstruction.addViewPortInstruction({
            name: viewPortPlan.name,
            strategy: viewPortPlan.strategy,
            moduleId: moduleId,
            component: component
        });
        let childRouter = component.childRouter;
        if (childRouter) {
            let path = navigationInstruction.getWildcardPath();
            return childRouter
                ._createNavigationInstruction(path, navigationInstruction)
                .then((childInstruction) => {
                viewPortPlan.childNavigationInstruction = childInstruction;
                return _buildNavigationPlan(childInstruction)
                    .then((childPlan) => {
                    if (childPlan instanceof Redirect) {
                        return Promise.reject(childPlan);
                    }
                    childInstruction.plan = childPlan;
                    viewPortInstruction.childNavigationInstruction = childInstruction;
                    return loadNewRoute(routeLoader, childInstruction);
                });
            });
        }
        // ts complains without this, though they are same
        return void 0;
    });
};
/**
 * Load a routed-component based on navigation instruction and route config
 * @internal exported for unit testing only
 */
const loadComponent = (routeLoader, navigationInstruction, config) => {
    let router = navigationInstruction.router;
    let lifecycleArgs = navigationInstruction.lifecycleArgs;
    return Promise.resolve()
        .then(() => routeLoader.loadRoute(router, config, navigationInstruction))
        .then(
    /**
     * @param component an object carrying information about loaded route
     * typically contains information about view model, childContainer, view and router
     */
    (component) => {
        let { viewModel, childContainer } = component;
        component.router = router;
        component.config = config;
        if ('configureRouter' in viewModel) {
            let childRouter = childContainer.getChildRouter();
            component.childRouter = childRouter;
            return childRouter
                .configure(c => viewModel.configureRouter(c, childRouter, lifecycleArgs[0], lifecycleArgs[1], lifecycleArgs[2]))
                .then(() => component);
        }
        return component;
    });
};

/**
 * Abstract class that is responsible for loading view / view model from a route config
 * The default implementation can be found in `aurelia-templating-router`
 */
class RouteLoader {
    /**
     * Load a route config based on its viewmodel / view configuration
     */
    // return typing: return typings used to be never
    // as it was a throw. Changing it to Promise<any> should not cause any issues
    loadRoute(router, config, navigationInstruction) {
        throw new Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
    }
}

/**
 * A pipeline step responsible for loading a route config of a navigation instruction
 */
class LoadRouteStep {
    /**@internal */
    static inject() { return [RouteLoader]; }
    constructor(routeLoader) {
        this.routeLoader = routeLoader;
    }
    /**
     * Run the internal to load route config of a navigation instruction to prepare for next steps in the pipeline
     */
    run(navigationInstruction, next) {
        return loadNewRoute(this.routeLoader, navigationInstruction)
            .then(next, next.cancel);
    }
}

/**
 * A pipeline step for instructing a piepline to commit changes on a navigation instruction
 */
class CommitChangesStep {
    run(navigationInstruction, next) {
        return navigationInstruction
            ._commitChanges(/*wait to swap?*/ true)
            .then(() => {
            navigationInstruction._updateTitle();
            return next();
        });
    }
}

/**
 * An optional interface describing the available activation strategies.
 * @internal Used internally.
 */
var InternalActivationStrategy;
(function (InternalActivationStrategy) {
    /**
     * Reuse the existing view model, without invoking Router lifecycle hooks.
     */
    InternalActivationStrategy["NoChange"] = "no-change";
    /**
     * Reuse the existing view model, invoking Router lifecycle hooks.
     */
    InternalActivationStrategy["InvokeLifecycle"] = "invoke-lifecycle";
    /**
     * Replace the existing view model, invoking Router lifecycle hooks.
     */
    InternalActivationStrategy["Replace"] = "replace";
})(InternalActivationStrategy || (InternalActivationStrategy = {}));
/**
 * The strategy to use when activating modules during navigation.
 */
// kept for compat reason
const activationStrategy = {
    noChange: "no-change" /* NoChange */,
    invokeLifecycle: "invoke-lifecycle" /* InvokeLifecycle */,
    replace: "replace" /* Replace */
};

/**
 * Recursively find list of deactivate-able view models
 * and invoke the either 'canDeactivate' or 'deactivate' on each
 * @internal exported for unit testing
 */
const processDeactivatable = (navigationInstruction, callbackName, next, ignoreResult) => {
    let plan = navigationInstruction.plan;
    let infos = findDeactivatable(plan, callbackName);
    let i = infos.length; // query from inside out
    function inspect(val) {
        if (ignoreResult || shouldContinue(val)) {
            return iterate();
        }
        return next.cancel(val);
    }
    function iterate() {
        if (i--) {
            try {
                let viewModel = infos[i];
                let result = viewModel[callbackName](navigationInstruction);
                return processPotential(result, inspect, next.cancel);
            }
            catch (error) {
                return next.cancel(error);
            }
        }
        navigationInstruction.router.couldDeactivate = true;
        return next();
    }
    return iterate();
};
/**
 * Recursively find and returns a list of deactivate-able view models
 * @internal exported for unit testing
 */
const findDeactivatable = (plan, callbackName, list = []) => {
    for (let viewPortName in plan) {
        let viewPortPlan = plan[viewPortName];
        let prevComponent = viewPortPlan.prevComponent;
        if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace)
            && prevComponent) {
            let viewModel = prevComponent.viewModel;
            if (callbackName in viewModel) {
                list.push(viewModel);
            }
        }
        if (viewPortPlan.strategy === activationStrategy.replace && prevComponent) {
            addPreviousDeactivatable(prevComponent, callbackName, list);
        }
        else if (viewPortPlan.childNavigationInstruction) {
            findDeactivatable(viewPortPlan.childNavigationInstruction.plan, callbackName, list);
        }
    }
    return list;
};
/**
 * @internal exported for unit testing
 */
const addPreviousDeactivatable = (component, callbackName, list) => {
    let childRouter = component.childRouter;
    if (childRouter && childRouter.currentInstruction) {
        let viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;
        for (let viewPortName in viewPortInstructions) {
            let viewPortInstruction = viewPortInstructions[viewPortName];
            let prevComponent = viewPortInstruction.component;
            let prevViewModel = prevComponent.viewModel;
            if (callbackName in prevViewModel) {
                list.push(prevViewModel);
            }
            addPreviousDeactivatable(prevComponent, callbackName, list);
        }
    }
};
/**
 * @internal exported for unit testing
 */
const processActivatable = (navigationInstruction, callbackName, next, ignoreResult) => {
    let infos = findActivatable(navigationInstruction, callbackName);
    let length = infos.length;
    let i = -1; // query from top down
    function inspect(val, router) {
        if (ignoreResult || shouldContinue(val, router)) {
            return iterate();
        }
        return next.cancel(val);
    }
    function iterate() {
        i++;
        if (i < length) {
            try {
                let current = infos[i];
                let result = current.viewModel[callbackName](...current.lifecycleArgs);
                return processPotential(result, (val) => inspect(val, current.router), next.cancel);
            }
            catch (error) {
                return next.cancel(error);
            }
        }
        return next();
    }
    return iterate();
};
/**
 * Find list of activatable view model and add to list (3rd parameter)
 * @internal exported for unit testing
 */
const findActivatable = (navigationInstruction, callbackName, list = [], router) => {
    let plan = navigationInstruction.plan;
    Object
        .keys(plan)
        .forEach((viewPortName) => {
        let viewPortPlan = plan[viewPortName];
        let viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName];
        let viewPortComponent = viewPortInstruction.component;
        let viewModel = viewPortComponent.viewModel;
        if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle
            || viewPortPlan.strategy === activationStrategy.replace)
            && callbackName in viewModel) {
            list.push({
                viewModel,
                lifecycleArgs: viewPortInstruction.lifecycleArgs,
                router
            });
        }
        let childNavInstruction = viewPortPlan.childNavigationInstruction;
        if (childNavInstruction) {
            findActivatable(childNavInstruction, callbackName, list, viewPortComponent.childRouter || router);
        }
    });
    return list;
};
const shouldContinue = (output, router) => {
    if (output instanceof Error) {
        return false;
    }
    if (isNavigationCommand(output)) {
        if (typeof output.setRouter === 'function') {
            output.setRouter(router);
        }
        return !!output.shouldContinueProcessing;
    }
    if (output === undefined) {
        return true;
    }
    return output;
};
/**
 * wraps a subscription, allowing unsubscribe calls even if
 * the first value comes synchronously
 */
class SafeSubscription {
    constructor(subscriptionFunc) {
        this._subscribed = true;
        this._subscription = subscriptionFunc(this);
        if (!this._subscribed) {
            this.unsubscribe();
        }
    }
    get subscribed() {
        return this._subscribed;
    }
    unsubscribe() {
        if (this._subscribed && this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscribed = false;
    }
}
/**
 * A function to process return value from `activate`/`canActivate` steps
 * Supports observable/promise
 *
 * For observable, resolve at first next() or on complete()
 */
const processPotential = (obj, resolve, reject) => {
    // if promise like
    if (obj && typeof obj.then === 'function') {
        return Promise.resolve(obj).then(resolve).catch(reject);
    }
    // if observable
    if (obj && typeof obj.subscribe === 'function') {
        let obs = obj;
        return new SafeSubscription(sub => obs.subscribe({
            next() {
                if (sub.subscribed) {
                    sub.unsubscribe();
                    resolve(obj);
                }
            },
            error(error) {
                if (sub.subscribed) {
                    sub.unsubscribe();
                    reject(error);
                }
            },
            complete() {
                if (sub.subscribed) {
                    sub.unsubscribe();
                    resolve(obj);
                }
            }
        }));
    }
    // else just resolve
    try {
        return resolve(obj);
    }
    catch (error) {
        return reject(error);
    }
};

/**
 * A pipeline step responsible for finding and activating method `canDeactivate` on a view model of a route
 */
class CanDeactivatePreviousStep {
    run(navigationInstruction, next) {
        return processDeactivatable(navigationInstruction, 'canDeactivate', next);
    }
}
/**
 * A pipeline step responsible for finding and activating method `canActivate` on a view model of a route
 */
class CanActivateNextStep {
    run(navigationInstruction, next) {
        return processActivatable(navigationInstruction, 'canActivate', next);
    }
}
/**
 * A pipeline step responsible for finding and activating method `deactivate` on a view model of a route
 */
class DeactivatePreviousStep {
    run(navigationInstruction, next) {
        return processDeactivatable(navigationInstruction, 'deactivate', next, true);
    }
}
/**
 * A pipeline step responsible for finding and activating method `activate` on a view model of a route
 */
class ActivateNextStep {
    run(navigationInstruction, next) {
        return processActivatable(navigationInstruction, 'activate', next, true);
    }
}

/**
 * A multi-slots Pipeline Placeholder Step for hooking into a pipeline execution
 */
class PipelineSlot {
    constructor(container, name, alias) {
        this.steps = [];
        this.container = container;
        this.slotName = name;
        this.slotAlias = alias;
    }
    getSteps() {
        return this.steps.map(x => this.container.get(x));
    }
}
/**
 * Class responsible for creating the navigation pipeline.
 */
class PipelineProvider {
    /**@internal */
    static inject() { return [__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Container"]]; }
    constructor(container) {
        this.container = container;
        this.steps = [
            BuildNavigationPlanStep,
            CanDeactivatePreviousStep,
            LoadRouteStep,
            createPipelineSlot(container, "authorize" /* Authorize */),
            CanActivateNextStep,
            createPipelineSlot(container, "preActivate" /* PreActivate */, 'modelbind'),
            // NOTE: app state changes start below - point of no return
            DeactivatePreviousStep,
            ActivateNextStep,
            createPipelineSlot(container, "preRender" /* PreRender */, 'precommit'),
            CommitChangesStep,
            createPipelineSlot(container, "postRender" /* PostRender */, 'postcomplete')
        ];
    }
    /**
     * Create the navigation pipeline.
     */
    createPipeline(useCanDeactivateStep = true) {
        let pipeline = new Pipeline();
        this.steps.forEach(step => {
            if (useCanDeactivateStep || step !== CanDeactivatePreviousStep) {
                pipeline.addStep(this.container.get(step));
            }
        });
        return pipeline;
    }
    /**@internal */
    _findStep(name) {
        // Steps that are not PipelineSlots are constructor functions, and they will automatically fail. Probably.
        return this.steps.find(x => x.slotName === name || x.slotAlias === name);
    }
    /**
     * Adds a step into the pipeline at a known slot location.
     */
    addStep(name, step) {
        let found = this._findStep(name);
        if (found) {
            let slotSteps = found.steps;
            // prevent duplicates
            if (!slotSteps.includes(step)) {
                slotSteps.push(step);
            }
        }
        else {
            throw new Error(`Invalid pipeline slot name: ${name}.`);
        }
    }
    /**
     * Removes a step from a slot in the pipeline
     */
    removeStep(name, step) {
        let slot = this._findStep(name);
        if (slot) {
            let slotSteps = slot.steps;
            slotSteps.splice(slotSteps.indexOf(step), 1);
        }
    }
    /**
     * Clears all steps from a slot in the pipeline
     * @internal
     */
    _clearSteps(name = '') {
        let slot = this._findStep(name);
        if (slot) {
            slot.steps = [];
        }
    }
    /**
     * Resets all pipeline slots
     */
    reset() {
        this._clearSteps("authorize" /* Authorize */);
        this._clearSteps("preActivate" /* PreActivate */);
        this._clearSteps("preRender" /* PreRender */);
        this._clearSteps("postRender" /* PostRender */);
    }
}
/**@internal */
const createPipelineSlot = (container, name, alias) => {
    return new PipelineSlot(container, name, alias);
};

const logger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"])('app-router');
/**
 * The main application router.
 */
class AppRouter extends Router {
    /**@internal */
    static inject() { return [__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["Container"], __WEBPACK_IMPORTED_MODULE_2_aurelia_history__["History"], PipelineProvider, __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__["EventAggregator"]]; }
    constructor(container, history, pipelineProvider, events) {
        super(container, history); // Note the super will call reset internally.
        this.pipelineProvider = pipelineProvider;
        this.events = events;
    }
    /**
     * Fully resets the router's internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
     * Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.
     */
    reset() {
        super.reset();
        this.maxInstructionCount = 10;
        if (!this._queue) {
            this._queue = [];
        }
        else {
            this._queue.length = 0;
        }
    }
    /**
     * Loads the specified URL.
     *
     * @param url The URL fragment to load.
     */
    loadUrl(url) {
        return this
            ._createNavigationInstruction(url)
            .then(instruction => this._queueInstruction(instruction))
            .catch(error => {
            logger.error(error);
            restorePreviousLocation(this);
        });
    }
    /**
     * Registers a viewPort to be used as a rendering target for activated routes.
     *
     * @param viewPort The viewPort. This is typically a <router-view/> element in Aurelia default impl
     * @param name The name of the viewPort. 'default' if unspecified.
     */
    registerViewPort(viewPort, name) {
        // having strong typing without changing public API
        const $viewPort = viewPort;
        super.registerViewPort($viewPort, name);
        // beside adding viewport to the registry of this instance
        // AppRouter also configure routing/history to start routing functionality
        // There are situation where there are more than 1 <router-view/> element at root view
        // in that case, still only activate once via the following guard
        if (!this.isActive) {
            const viewModel = this._findViewModel($viewPort);
            if ('configureRouter' in viewModel) {
                // If there are more than one <router-view/> element at root view
                // use this flag to guard against configure method being invoked multiple times
                // this flag is set inside method configure
                if (!this.isConfigured) {
                    // replace the real resolve with a noop to guarantee that any action in base class Router
                    // won't resolve the configurePromise prematurely
                    const resolveConfiguredPromise = this._resolveConfiguredPromise;
                    this._resolveConfiguredPromise = () => { };
                    return this
                        .configure(config => Promise
                        .resolve(viewModel.configureRouter(config, this))
                        // an issue with configure interface. Should be fixed there
                        // todo: fix this via configure interface in router
                        .then(() => config))
                        .then(() => {
                        this.activate();
                        resolveConfiguredPromise();
                    });
                }
            }
            else {
                this.activate();
            }
        }
        // when a viewport is added dynamically to a root view that is already activated
        // just process the navigation instruction
        else {
            this._dequeueInstruction();
        }
        return Promise.resolve();
    }
    /**
     * Activates the router. This instructs the router to begin listening for history changes and processing instructions.
     *
     * @params options The set of options to activate the router with.
     */
    activate(options) {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        // route handler property is responsible for handling url change
        // the interface of aurelia-history isn't clear on this perspective
        this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
        this.history.activate(this.options);
        this._dequeueInstruction();
    }
    /**
     * Deactivates the router.
     */
    deactivate() {
        this.isActive = false;
        this.history.deactivate();
    }
    /**@internal */
    _queueInstruction(instruction) {
        return new Promise((resolve) => {
            instruction.resolve = resolve;
            this._queue.unshift(instruction);
            this._dequeueInstruction();
        });
    }
    /**@internal */
    _dequeueInstruction(instructionCount = 0) {
        return Promise.resolve().then(() => {
            if (this.isNavigating && !instructionCount) {
                // ts complains about inconsistent returns without void 0
                return void 0;
            }
            let instruction = this._queue.shift();
            this._queue.length = 0;
            if (!instruction) {
                // ts complains about inconsistent returns without void 0
                return void 0;
            }
            this.isNavigating = true;
            let navtracker = this.history.getState('NavigationTracker');
            let currentNavTracker = this.currentNavigationTracker;
            if (!navtracker && !currentNavTracker) {
                this.isNavigatingFirst = true;
                this.isNavigatingNew = true;
            }
            else if (!navtracker) {
                this.isNavigatingNew = true;
            }
            else if (!currentNavTracker) {
                this.isNavigatingRefresh = true;
            }
            else if (currentNavTracker < navtracker) {
                this.isNavigatingForward = true;
            }
            else if (currentNavTracker > navtracker) {
                this.isNavigatingBack = true;
            }
            if (!navtracker) {
                navtracker = Date.now();
                this.history.setState('NavigationTracker', navtracker);
            }
            this.currentNavigationTracker = navtracker;
            instruction.previousInstruction = this.currentInstruction;
            let maxInstructionCount = this.maxInstructionCount;
            if (!instructionCount) {
                this.events.publish("router:navigation:processing" /* Processing */, { instruction });
            }
            else if (instructionCount === maxInstructionCount - 1) {
                logger.error(`${instructionCount + 1} navigation instructions have been attempted without success. Restoring last known good location.`);
                restorePreviousLocation(this);
                return this._dequeueInstruction(instructionCount + 1);
            }
            else if (instructionCount > maxInstructionCount) {
                throw new Error('Maximum navigation attempts exceeded. Giving up.');
            }
            let pipeline = this.pipelineProvider.createPipeline(!this.couldDeactivate);
            return pipeline
                .run(instruction)
                .then(result => processResult(instruction, result, instructionCount, this))
                .catch(error => {
                return { output: error instanceof Error ? error : new Error(error) };
            })
                .then(result => resolveInstruction(instruction, result, !!instructionCount, this));
        });
    }
    /**@internal */
    _findViewModel(viewPort) {
        if (this.container.viewModel) {
            return this.container.viewModel;
        }
        if (viewPort.container) {
            let container = viewPort.container;
            while (container) {
                if (container.viewModel) {
                    this.container.viewModel = container.viewModel;
                    return container.viewModel;
                }
                container = container.parent;
            }
        }
        return undefined;
    }
}
const processResult = (instruction, result, instructionCount, router) => {
    if (!(result && 'completed' in result && 'output' in result)) {
        result = result || {};
        result.output = new Error(`Expected router pipeline to return a navigation result, but got [${JSON.stringify(result)}] instead.`);
    }
    let finalResult = null;
    let navigationCommandResult = null;
    if (isNavigationCommand(result.output)) {
        navigationCommandResult = result.output.navigate(router);
    }
    else {
        finalResult = result;
        if (!result.completed) {
            if (result.output instanceof Error) {
                logger.error(result.output.toString());
            }
            restorePreviousLocation(router);
        }
    }
    return Promise.resolve(navigationCommandResult)
        .then(_ => router._dequeueInstruction(instructionCount + 1))
        .then(innerResult => finalResult || innerResult || result);
};
const resolveInstruction = (instruction, result, isInnerInstruction, router) => {
    instruction.resolve(result);
    let eventAggregator = router.events;
    let eventArgs = { instruction, result };
    if (!isInnerInstruction) {
        router.isNavigating = false;
        router.isExplicitNavigation = false;
        router.isExplicitNavigationBack = false;
        router.isNavigatingFirst = false;
        router.isNavigatingNew = false;
        router.isNavigatingRefresh = false;
        router.isNavigatingForward = false;
        router.isNavigatingBack = false;
        router.couldDeactivate = false;
        let eventName;
        if (result.output instanceof Error) {
            eventName = "router:navigation:error" /* Error */;
        }
        else if (!result.completed) {
            eventName = "router:navigation:canceled" /* Canceled */;
        }
        else {
            let queryString = instruction.queryString ? ('?' + instruction.queryString) : '';
            router.history.previousLocation = instruction.fragment + queryString;
            eventName = "router:navigation:success" /* Success */;
        }
        eventAggregator.publish(eventName, eventArgs);
        eventAggregator.publish("router:navigation:complete" /* Complete */, eventArgs);
    }
    else {
        eventAggregator.publish("router:navigation:child:complete" /* ChildComplete */, eventArgs);
    }
    return result;
};
const restorePreviousLocation = (router) => {
    let previousLocation = router.history.previousLocation;
    if (previousLocation) {
        router.navigate(previousLocation, { trigger: false, replace: true });
    }
    else if (router.fallbackRoute) {
        router.navigate(router.fallbackRoute, { trigger: true, replace: true });
    }
    else {
        logger.error('Router navigation failed, and no previous location or fallbackRoute could be restored.');
    }
};

/**
* The status of a Pipeline.
*/
var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["Completed"] = "completed";
    PipelineStatus["Canceled"] = "canceled";
    PipelineStatus["Rejected"] = "rejected";
    PipelineStatus["Running"] = "running";
})(PipelineStatus || (PipelineStatus = {}));

/**
 * A list of known router events used by the Aurelia router
 * to signal the pipeline has come to a certain state
 */
// const enum is preserved in tsconfig
var RouterEvent;
(function (RouterEvent) {
    RouterEvent["Processing"] = "router:navigation:processing";
    RouterEvent["Error"] = "router:navigation:error";
    RouterEvent["Canceled"] = "router:navigation:canceled";
    RouterEvent["Complete"] = "router:navigation:complete";
    RouterEvent["Success"] = "router:navigation:success";
    RouterEvent["ChildComplete"] = "router:navigation:child:complete";
})(RouterEvent || (RouterEvent = {}));

/**
 * Available pipeline slot names to insert interceptor into router pipeline
 */
// const enum is preserved in tsconfig
var PipelineSlotName;
(function (PipelineSlotName) {
    /**
     * Authorization slot. Invoked early in the pipeline,
     * before `canActivate` hook of incoming route
     */
    PipelineSlotName["Authorize"] = "authorize";
    /**
     * Pre-activation slot. Invoked early in the pipeline,
     * Invoked timing:
     *   - after Authorization slot
     *   - after canActivate hook on new view model
     *   - before deactivate hook on old view model
     *   - before activate hook on new view model
     */
    PipelineSlotName["PreActivate"] = "preActivate";
    /**
     * Pre-render slot. Invoked later in the pipeline
     * Invokcation timing:
     *   - after activate hook on new view model
     *   - before commit step on new navigation instruction
     */
    PipelineSlotName["PreRender"] = "preRender";
    /**
     * Post-render slot. Invoked last in the pipeline
     */
    PipelineSlotName["PostRender"] = "postRender";
})(PipelineSlotName || (PipelineSlotName = {}));


//# sourceMappingURL=aurelia-router.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-templating-binding":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(exports, "AttributeMap", function() { return AttributeMap; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InterpolationBindingExpression", function() { return InterpolationBindingExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InterpolationBinding", function() { return InterpolationBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ChildInterpolationBinding", function() { return ChildInterpolationBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LetExpression", function() { return LetExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LetBinding", function() { return LetBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LetInterpolationBindingExpression", function() { return LetInterpolationBindingExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LetInterpolationBinding", function() { return LetInterpolationBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SyntaxInterpreter", function() { return SyntaxInterpreter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TemplatingBindingLanguage", function() { return TemplatingBindingLanguage; });
/* harmony export (immutable) */ exports["configure"] = configure;
var _class, _temp, _dec, _class2, _dec2, _class3, _class4, _temp2, _class5, _temp3;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AttributeMap = (_temp = _class = function () {
  function AttributeMap(svg) {
    

    this.elements = Object.create(null);
    this.allElements = Object.create(null);

    this.svg = svg;

    this.registerUniversal('accesskey', 'accessKey');
    this.registerUniversal('contenteditable', 'contentEditable');
    this.registerUniversal('tabindex', 'tabIndex');
    this.registerUniversal('textcontent', 'textContent');
    this.registerUniversal('innerhtml', 'innerHTML');
    this.registerUniversal('scrolltop', 'scrollTop');
    this.registerUniversal('scrollleft', 'scrollLeft');
    this.registerUniversal('readonly', 'readOnly');

    this.register('label', 'for', 'htmlFor');

    this.register('img', 'usemap', 'useMap');

    this.register('input', 'maxlength', 'maxLength');
    this.register('input', 'minlength', 'minLength');
    this.register('input', 'formaction', 'formAction');
    this.register('input', 'formenctype', 'formEncType');
    this.register('input', 'formmethod', 'formMethod');
    this.register('input', 'formnovalidate', 'formNoValidate');
    this.register('input', 'formtarget', 'formTarget');

    this.register('textarea', 'maxlength', 'maxLength');

    this.register('td', 'rowspan', 'rowSpan');
    this.register('td', 'colspan', 'colSpan');
    this.register('th', 'rowspan', 'rowSpan');
    this.register('th', 'colspan', 'colSpan');
  }

  AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
    element[attributeName] = propertyName;
  };

  AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
    attributeName = attributeName.toLowerCase();
    this.allElements[attributeName] = propertyName;
  };

  AttributeMap.prototype.map = function map(elementName, attributeName) {
    if (this.svg.isStandardSvgAttribute(elementName, attributeName)) {
      return attributeName;
    }
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName];
    if (element !== undefined && attributeName in element) {
      return element[attributeName];
    }
    if (attributeName in this.allElements) {
      return this.allElements[attributeName];
    }

    if (/(?:^data-)|(?:^aria-)|:/.test(attributeName)) {
      return attributeName;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["camelCase"])(attributeName);
  };

  return AttributeMap;
}(), _class.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["SVGAnalyzer"]], _temp);

var InterpolationBindingExpression = function () {
  function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.attribute = this.attrToRemove = attribute;
    this.discrete = false;
  }

  InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
    if (this.parts.length === 3) {
      return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
    }
    return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
  };

  return InterpolationBindingExpression;
}();

function validateTarget(target, propertyName) {
  if (propertyName === 'style') {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
  } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
    throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
  }
}

var InterpolationBinding = function () {
  function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
    

    validateTarget(target, targetProperty);
    this.observerLocator = observerLocator;
    this.parts = parts;
    this.target = target;
    this.targetProperty = targetProperty;
    this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
  }

  InterpolationBinding.prototype.interpolate = function interpolate() {
    if (this.isBound) {
      var value = '';
      var parts = this.parts;
      for (var i = 0, ii = parts.length; i < ii; i++) {
        value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
      }
      this.targetAccessor.setValue(value, this.target, this.targetProperty);
    }
  };

  InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
    for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
      var child = this['childBinding' + i];
      if (child.mode === __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneTime) {
        child.call();
      }
    }
  };

  InterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.source = source;

    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
      binding.bind(source);
      this['childBinding' + i] = binding;
    }

    this.isBound = true;
    this.interpolate();
  };

  InterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var name = 'childBinding' + i;
      this[name].unbind();
    }
  };

  return InterpolationBinding;
}();

var ChildInterpolationBinding = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["connectable"])(), _dec(_class2 = function () {
  function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
    

    if (target instanceof InterpolationBinding) {
      this.parent = target;
    } else {
      validateTarget(target, targetProperty);
      this.target = target;
      this.targetProperty = targetProperty;
      this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    }
    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.left = left;
    this.right = right;
  }

  ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
    value = value === null || value === undefined ? '' : value.toString();
    if (value !== this.value) {
      this.value = value;
      if (this.parent) {
        this.parent.interpolate();
      } else {
        this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
      }
    }
  };

  ChildInterpolationBinding.prototype.call = function call() {
    if (!this.isBound) {
      return;
    }

    this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode !== __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneTime) {
      this._version++;
      this.sourceExpression.connect(this, this.source);
      if (this.rawValue instanceof Array) {
        this.observeArray(this.rawValue);
      }
      this.unobserve(false);
    }
  };

  ChildInterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    var sourceExpression = this.sourceExpression;
    if (sourceExpression.bind) {
      sourceExpression.bind(this, source, this.lookupFunctions);
    }

    this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode === __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["enqueueBindingConnect"])(this);
    }
  };

  ChildInterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    var sourceExpression = this.sourceExpression;
    if (sourceExpression.unbind) {
      sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.value = null;
    this.rawValue = null;
    this.unobserve(true);
  };

  ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
    if (!this.isBound) {
      return;
    }
    if (evaluate) {
      this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(this.rawValue);
    }
    this.sourceExpression.connect(this, this.source);
    if (this.rawValue instanceof Array) {
      this.observeArray(this.rawValue);
    }
  };

  return ChildInterpolationBinding;
}()) || _class2);

var LetExpression = function () {
  function LetExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
  }

  LetExpression.prototype.createBinding = function createBinding() {
    return new LetBinding(this.observerLocator, this.sourceExpression, this.targetProperty, this.lookupFunctions, this.toBindingContext);
  };

  return LetExpression;
}();

var LetBinding = (_dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["connectable"])(), _dec2(_class3 = function () {
  function LetBinding(observerLocator, sourceExpression, targetProperty, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.source = null;
    this.target = null;
    this.toBindingContext = toBindingContext;
  }

  LetBinding.prototype.updateTarget = function updateTarget() {
    var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
    this.target[this.targetProperty] = value;
  };

  LetBinding.prototype.call = function call(context) {
    if (!this.isBound) {
      return;
    }
    if (context === __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["sourceContext"]) {
      this.updateTarget();
      return;
    }
    throw new Error('Unexpected call context ' + context);
  };

  LetBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }

    this.isBound = true;
    this.source = source;
    this.target = this.toBindingContext ? source.bindingContext : source.overrideContext;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["enqueueBindingConnect"])(this);
  };

  LetBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.target = null;
    this.unobserve(true);
  };

  LetBinding.prototype.connect = function connect() {
    if (!this.isBound) {
      return;
    }
    this.updateTarget();
    this.sourceExpression.connect(this, this.source);
  };

  return LetBinding;
}()) || _class3);

var LetInterpolationBindingExpression = function () {
  function LetInterpolationBindingExpression(observerLocator, targetProperty, parts, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
  }

  LetInterpolationBindingExpression.prototype.createBinding = function createBinding() {
    return new LetInterpolationBinding(this.observerLocator, this.targetProperty, this.parts, this.lookupFunctions, this.toBindingContext);
  };

  return LetInterpolationBindingExpression;
}();

var LetInterpolationBinding = function () {
  function LetInterpolationBinding(observerLocator, targetProperty, parts, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.parts = parts;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
    this.target = null;
  }

  LetInterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }

    this.isBound = true;
    this.source = source;
    this.target = this.toBindingContext ? source.bindingContext : source.overrideContext;

    this.interpolationBinding = this.createInterpolationBinding();
    this.interpolationBinding.bind(source);
  };

  LetInterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    this.target = null;
    this.interpolationBinding.unbind();
    this.interpolationBinding = null;
  };

  LetInterpolationBinding.prototype.createInterpolationBinding = function createInterpolationBinding() {
    if (this.parts.length === 3) {
      return new ChildInterpolationBinding(this.target, this.observerLocator, this.parts[1], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
    }
    return new InterpolationBinding(this.observerLocator, this.parts, this.target, this.targetProperty, __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay, this.lookupFunctions);
  };

  return LetInterpolationBinding;
}();

var SyntaxInterpreter = (_temp2 = _class4 = function () {
  function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {
    

    this.parser = parser;
    this.observerLocator = observerLocator;
    this.eventManager = eventManager;
    this.attributeMap = attributeMap;
  }

  SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
    if (info.command in this) {
      return this[info.command](resources, element, info, existingInstruction, context);
    }

    return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
  };

  SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding').warn('Unknown binding command.', info);
    return existingInstruction;
  };

  SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
    var tagName = element.tagName.toLowerCase();

    if (tagName === 'input' && (attrName === 'value' || attrName === 'files') && element.type !== 'checkbox' && element.type !== 'radio' || tagName === 'input' && attrName === 'checked' && (element.type === 'checkbox' || element.type === 'radio') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
      return __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].twoWay;
    }

    if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneTime) {
      return context.attributes[attrName].defaultBindingMode;
    }

    return __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay;
  };

  SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode === undefined || info.defaultBindingMode === null ? this.determineDefaultBindingMode(element, info.attrName, context) : info.defaultBindingMode, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["ListenerExpression"](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["delegationStrategy"].none, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.capture = function capture(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["ListenerExpression"](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["delegationStrategy"].capturing, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["ListenerExpression"](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["delegationStrategy"].bubbling, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["CallExpression"](this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);
    var attrValue = info.attrValue;
    var language = this.language;
    var name = null;
    var target = '';
    var current = void 0;
    var i = void 0;
    var ii = void 0;
    var inString = false;
    var inEscape = false;
    var foundName = false;

    for (i = 0, ii = attrValue.length; i < ii; ++i) {
      current = attrValue[i];

      if (current === ';' && !inString) {
        if (!foundName) {
          name = this._getPrimaryPropertyName(resources, context);
        }
        info = language.inspectAttribute(resources, '?', name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction, context);

        if (!instruction.attributes[info.attrName]) {
          instruction.attributes[info.attrName] = info.attrValue;
        }

        target = '';
        name = null;
      } else if (current === ':' && name === null) {
        foundName = true;
        name = target.trim();
        target = '';
      } else if (current === '\\') {
        target += current;
        inEscape = true;
        continue;
      } else {
        target += current;

        if (name !== null && inEscape === false && current === '\'') {
          inString = !inString;
        }
      }

      inEscape = false;
    }

    if (!foundName) {
      name = this._getPrimaryPropertyName(resources, context);
    }

    if (name !== null) {
      info = language.inspectAttribute(resources, '?', name, target.trim());
      language.createAttributeInstruction(resources, element, info, instruction, context);

      if (!instruction.attributes[info.attrName]) {
        instruction.attributes[info.attrName] = info.attrValue;
      }
    }

    return instruction;
  };

  SyntaxInterpreter.prototype._getPrimaryPropertyName = function _getPrimaryPropertyName(resources, context) {
    var type = resources.getAttribute(context.attributeName);
    if (type && type.primaryProperty) {
      return type.primaryProperty.attribute;
    }
    return null;
  };

  SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
    var parts = void 0;
    var keyValue = void 0;
    var instruction = void 0;
    var attrValue = void 0;
    var isDestructuring = void 0;

    attrValue = info.attrValue;
    isDestructuring = attrValue.match(/^ *[[].+[\]]/);
    parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

    if (parts.length !== 2) {
      throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
    }

    instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    if (isDestructuring) {
      keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
      instruction.attributes.key = keyValue[0];
      instruction.attributes.value = keyValue[1];
    } else {
      instruction.attributes.local = parts[0];
    }

    instruction.attributes.items = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, 'items', this.parser.parse(parts[1]), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].twoWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['to-view'] = function toView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].toView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['from-view'] = function fromView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].fromView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["BindingExpression"](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneTime, resources.lookupFunctions);

    return instruction;
  };

  return SyntaxInterpreter;
}(), _class4.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["Parser"], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["ObserverLocator"], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["EventManager"], AttributeMap], _temp2);

SyntaxInterpreter.prototype['one-way'] = SyntaxInterpreter.prototype['to-view'];

var info = {};

var TemplatingBindingLanguage = (_temp3 = _class5 = function (_BindingLanguage) {
  _inherits(TemplatingBindingLanguage, _BindingLanguage);

  function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {
    

    var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

    _this.parser = parser;
    _this.observerLocator = observerLocator;
    _this.syntaxInterpreter = syntaxInterpreter;
    _this.emptyStringExpression = _this.parser.parse('\'\'');
    syntaxInterpreter.language = _this;
    _this.attributeMap = attributeMap;
    _this.toBindingContextAttr = 'to-binding-context';
    return _this;
  }

  TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
    var parts = attrName.split('.');

    info.defaultBindingMode = null;

    if (parts.length === 2) {
      info.attrName = parts[0].trim();
      info.attrValue = attrValue;
      info.command = parts[1].trim();

      if (info.command === 'ref') {
        info.expression = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["NameExpression"](this.parser.parse(attrValue), info.attrName, resources.lookupFunctions);
        info.command = null;
        info.attrName = 'ref';
      } else {
        info.expression = null;
      }
    } else if (attrName === 'ref') {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      info.expression = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["NameExpression"](this.parser.parse(attrValue), 'element', resources.lookupFunctions);
    } else {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      var interpolationParts = this.parseInterpolation(resources, attrValue);
      if (interpolationParts === null) {
        info.expression = null;
      } else {
        info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay, resources.lookupFunctions, attrName);
      }
    }

    return info;
  };

  TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
    var instruction = void 0;

    if (theInfo.expression) {
      if (theInfo.attrName === 'ref') {
        return theInfo.expression;
      }

      instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BehaviorInstruction"].attribute(theInfo.attrName);
      instruction.attributes[theInfo.attrName] = theInfo.expression;
    } else if (theInfo.command) {
      instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
    }

    return instruction;
  };

  TemplatingBindingLanguage.prototype.createLetExpressions = function createLetExpressions(resources, letElement) {
    var expressions = [];
    var attributes = letElement.attributes;

    var attr = void 0;

    var parts = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var command = void 0;
    var toBindingContextAttr = this.toBindingContextAttr;
    var toBindingContext = letElement.hasAttribute(toBindingContextAttr);
    for (var i = 0, ii = attributes.length; ii > i; ++i) {
      attr = attributes[i];
      attrName = attr.name;
      attrValue = attr.nodeValue;
      parts = attrName.split('.');

      if (attrName === toBindingContextAttr) {
        continue;
      }

      if (parts.length === 2) {
        command = parts[1];
        if (command !== 'bind') {
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding-language').warn('Detected invalid let command. Expected "' + parts[0] + '.bind", given "' + attrName + '"');
          continue;
        }
        expressions.push(new LetExpression(this.observerLocator, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["camelCase"])(parts[0]), this.parser.parse(attrValue), resources.lookupFunctions, toBindingContext));
      } else {
        attrName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["camelCase"])(attrName);
        parts = this.parseInterpolation(resources, attrValue);
        if (parts === null) {
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding-language').warn('Detected string literal in let bindings. Did you mean "' + attrName + '.bind=' + attrValue + '" or "' + attrName + '=${' + attrValue + '}" ?');
        }
        if (parts) {
          expressions.push(new LetInterpolationBindingExpression(this.observerLocator, attrName, parts, resources.lookupFunctions, toBindingContext));
        } else {
          expressions.push(new LetExpression(this.observerLocator, attrName, new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["LiteralString"](attrValue), resources.lookupFunctions, toBindingContext));
        }
      }
    }
    return expressions;
  };

  TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
    var parts = this.parseInterpolation(resources, value);
    if (parts === null) {
      return null;
    }
    return new InterpolationBindingExpression(this.observerLocator, 'textContent', parts, __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["bindingMode"].oneWay, resources.lookupFunctions, 'textContent');
  };

  TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
    var i = value.indexOf('${', 0);
    var ii = value.length;
    var char = void 0;
    var pos = 0;
    var open = 0;
    var quote = null;
    var interpolationStart = void 0;
    var parts = void 0;
    var partIndex = 0;

    while (i >= 0 && i < ii - 2) {
      open = 1;
      interpolationStart = i;
      i += 2;

      do {
        char = value[i];
        i++;

        if (char === "'" || char === '"') {
          if (quote === null) {
            quote = char;
          } else if (quote === char) {
            quote = null;
          }
          continue;
        }

        if (char === '\\') {
          i++;
          continue;
        }

        if (quote !== null) {
          continue;
        }

        if (char === '{') {
          open++;
        } else if (char === '}') {
          open--;
        }
      } while (open > 0 && i < ii);

      if (open === 0) {
        parts = parts || [];
        if (value[interpolationStart - 1] === '\\' && value[interpolationStart - 2] !== '\\') {
          parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i);
          partIndex++;
          parts[partIndex] = this.emptyStringExpression;
          partIndex++;
        } else {
          parts[partIndex] = value.substring(pos, interpolationStart);
          partIndex++;
          parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1));
          partIndex++;
        }
        pos = i;
        i = value.indexOf('${', i);
      } else {
        break;
      }
    }

    if (partIndex === 0) {
      return null;
    }

    parts[partIndex] = value.substr(pos);
    return parts;
  };

  return TemplatingBindingLanguage;
}(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BindingLanguage"]), _class5.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["Parser"], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["ObserverLocator"], SyntaxInterpreter, AttributeMap], _temp3);

function configure(config) {
  config.container.registerSingleton(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BindingLanguage"], TemplatingBindingLanguage);
  config.container.registerAlias(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["BindingLanguage"], TemplatingBindingLanguage);
}

/***/ },

/***/ "aurelia-templating-resources":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_logging__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_loader__ = __webpack_require__("aurelia-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aurelia_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "AbstractRepeater", function() { return AbstractRepeater; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ArrayRepeatStrategy", function() { return ArrayRepeatStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AttrBindingBehavior", function() { return AttrBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "BindingSignaler", function() { return BindingSignaler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Compose", function() { return Compose; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DebounceBindingBehavior", function() { return DebounceBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Else", function() { return Else; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Focus", function() { return Focus; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FromViewBindingBehavior", function() { return FromViewBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "HTMLSanitizer", function() { return HTMLSanitizer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Hide", function() { return Hide; });
/* harmony export (binding) */ __webpack_require__.d(exports, "If", function() { return If; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MapRepeatStrategy", function() { return MapRepeatStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NullRepeatStrategy", function() { return NullRepeatStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NumberRepeatStrategy", function() { return NumberRepeatStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "OneTimeBindingBehavior", function() { return OneTimeBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "OneWayBindingBehavior", function() { return OneWayBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RepeatStrategyLocator", function() { return RepeatStrategyLocator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Replaceable", function() { return Replaceable; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SanitizeHTMLValueConverter", function() { return SanitizeHTMLValueConverter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SelfBindingBehavior", function() { return SelfBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SetRepeatStrategy", function() { return SetRepeatStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Show", function() { return Show; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SignalBindingBehavior", function() { return SignalBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ThrottleBindingBehavior", function() { return ThrottleBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ToViewBindingBehavior", function() { return ToViewBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TwoWayBindingBehavior", function() { return TwoWayBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "UpdateTriggerBindingBehavior", function() { return UpdateTriggerBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(exports, "With", function() { return With; });
/* harmony export (binding) */ __webpack_require__.d(exports, "configure", function() { return configure$1; });
/* harmony export (binding) */ __webpack_require__.d(exports, "createFullOverrideContext", function() { return createFullOverrideContext; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getItemsSourceExpression", function() { return getItemsSourceExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isOneTime", function() { return isOneTime; });
/* harmony export (binding) */ __webpack_require__.d(exports, "unwrapExpression", function() { return unwrapExpression; });
/* harmony export (binding) */ __webpack_require__.d(exports, "updateOneTimeBinding", function() { return updateOneTimeBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "updateOverrideContext", function() { return updateOverrideContext; });
/* harmony export (binding) */ __webpack_require__.d(exports, "viewsRequireLifecycle", function() { return viewsRequireLifecycle; });










/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var ActivationStrategy;
(function (ActivationStrategy) {
    ActivationStrategy["InvokeLifecycle"] = "invoke-lifecycle";
    ActivationStrategy["Replace"] = "replace";
})(ActivationStrategy || (ActivationStrategy = {}));
var Compose = (function () {
    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
        this.activationStrategy = ActivationStrategy.InvokeLifecycle;
        this.element = element;
        this.container = container;
        this.compositionEngine = compositionEngine;
        this.viewSlot = viewSlot;
        this.viewResources = viewResources;
        this.taskQueue = taskQueue;
        this.currentController = null;
        this.currentViewModel = null;
        this.changes = Object.create(null);
    }
    Compose.inject = function () {
        return [__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element, __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["Container"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionEngine"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewResources"], __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__["TaskQueue"]];
    };
    Compose.prototype.created = function (owningView) {
        this.owningView = owningView;
    };
    Compose.prototype.bind = function (bindingContext, overrideContext) {
        this.bindingContext = bindingContext;
        this.overrideContext = overrideContext;
        var changes = this.changes;
        changes.view = this.view;
        changes.viewModel = this.viewModel;
        changes.model = this.model;
        if (!this.pendingTask) {
            processChanges(this);
        }
    };
    Compose.prototype.unbind = function () {
        this.changes = Object.create(null);
        this.bindingContext = null;
        this.overrideContext = null;
        var returnToCache = true;
        var skipAnimation = true;
        this.viewSlot.removeAll(returnToCache, skipAnimation);
    };
    Compose.prototype.modelChanged = function (newValue, oldValue) {
        this.changes.model = newValue;
        requestUpdate(this);
    };
    Compose.prototype.viewChanged = function (newValue, oldValue) {
        this.changes.view = newValue;
        requestUpdate(this);
    };
    Compose.prototype.viewModelChanged = function (newValue, oldValue) {
        this.changes.viewModel = newValue;
        requestUpdate(this);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Compose.prototype, "model", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Compose.prototype, "view", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Compose.prototype, "viewModel", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Compose.prototype, "activationStrategy", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Compose.prototype, "swapOrder", void 0);
    Compose = __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["noView"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customElement"])('compose')
    ], Compose);
    return Compose;
}());
function isEmpty(obj) {
    for (var _ in obj) {
        return false;
    }
    return true;
}
function tryActivateViewModel(vm, model) {
    if (vm && typeof vm.activate === 'function') {
        return Promise.resolve(vm.activate(model));
    }
}
function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
        bindingContext: composer.bindingContext,
        overrideContext: composer.overrideContext,
        owningView: composer.owningView,
        container: composer.container,
        viewSlot: composer.viewSlot,
        viewResources: composer.viewResources,
        currentController: composer.currentController,
        host: composer.element,
        swapOrder: composer.swapOrder
    });
}
function processChanges(composer) {
    var changes = composer.changes;
    composer.changes = Object.create(null);
    if (needsReInitialization(composer, changes)) {
        var instruction = {
            view: composer.view,
            viewModel: composer.currentViewModel || composer.viewModel,
            model: composer.model
        };
        instruction = Object.assign(instruction, changes);
        instruction = createInstruction(composer, instruction);
        composer.pendingTask = composer.compositionEngine.compose(instruction).then(function (controller) {
            composer.currentController = controller;
            composer.currentViewModel = controller ? controller.viewModel : null;
        });
    }
    else {
        composer.pendingTask = tryActivateViewModel(composer.currentViewModel, changes.model);
        if (!composer.pendingTask) {
            return;
        }
    }
    composer.pendingTask = composer.pendingTask
        .then(function () {
        completeCompositionTask(composer);
    }, function (reason) {
        completeCompositionTask(composer);
        throw reason;
    });
}
function completeCompositionTask(composer) {
    composer.pendingTask = null;
    if (!isEmpty(composer.changes)) {
        processChanges(composer);
    }
}
function requestUpdate(composer) {
    if (composer.pendingTask || composer.updateRequested) {
        return;
    }
    composer.updateRequested = true;
    composer.taskQueue.queueMicroTask(function () {
        composer.updateRequested = false;
        processChanges(composer);
    });
}
function needsReInitialization(composer, changes) {
    var activationStrategy = composer.activationStrategy;
    var vm = composer.currentViewModel;
    if (vm && typeof vm.determineActivationStrategy === 'function') {
        activationStrategy = vm.determineActivationStrategy();
    }
    return 'view' in changes
        || 'viewModel' in changes
        || activationStrategy === ActivationStrategy.Replace;
}

var IfCore = (function () {
    function IfCore(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.view = null;
        this.bindingContext = null;
        this.overrideContext = null;
        this.showing = false;
        this.cache = true;
    }
    IfCore.prototype.bind = function (bindingContext, overrideContext) {
        this.bindingContext = bindingContext;
        this.overrideContext = overrideContext;
    };
    IfCore.prototype.unbind = function () {
        if (this.view === null) {
            return;
        }
        this.view.unbind();
        if (!this.viewFactory.isCaching) {
            return;
        }
        if (this.showing) {
            this.showing = false;
            this.viewSlot.remove(this.view, true, true);
        }
        else {
            this.view.returnToCache();
        }
        this.view = null;
    };
    IfCore.prototype._show = function () {
        if (this.showing) {
            if (!this.view.isBound) {
                this.view.bind(this.bindingContext, this.overrideContext);
            }
            return;
        }
        if (this.view === null) {
            this.view = this.viewFactory.create();
        }
        if (!this.view.isBound) {
            this.view.bind(this.bindingContext, this.overrideContext);
        }
        this.showing = true;
        return this.viewSlot.add(this.view);
    };
    IfCore.prototype._hide = function () {
        var _this = this;
        if (!this.showing) {
            return;
        }
        this.showing = false;
        var removed = this.viewSlot.remove(this.view);
        if (removed instanceof Promise) {
            return removed.then(function () {
                _this._unbindView();
            });
        }
        this._unbindView();
    };
    IfCore.prototype._unbindView = function () {
        var cache = this.cache === 'false' ? false : !!this.cache;
        this.view.unbind();
        if (!cache) {
            this.view = null;
        }
    };
    return IfCore;
}());

var If = (function (_super) {
    __extends(If, _super);
    function If() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = true;
        return _this;
    }
    If.prototype.bind = function (bindingContext, overrideContext) {
        _super.prototype.bind.call(this, bindingContext, overrideContext);
        if (this.condition) {
            this._show();
        }
        else {
            this._hide();
        }
    };
    If.prototype.conditionChanged = function (newValue) {
        this._update(newValue);
    };
    If.prototype._update = function (show) {
        var _this = this;
        if (this.animating) {
            return;
        }
        var promise;
        if (this.elseVm) {
            promise = show ? this._swap(this.elseVm, this) : this._swap(this, this.elseVm);
        }
        else {
            promise = show ? this._show() : this._hide();
        }
        if (promise) {
            this.animating = true;
            promise.then(function () {
                _this.animating = false;
                if (_this.condition !== _this.showing) {
                    _this._update(_this.condition);
                }
            });
        }
    };
    If.prototype._swap = function (remove, add) {
        switch (this.swapOrder) {
            case 'before':
                return Promise.resolve(add._show()).then(function () { return remove._hide(); });
            case 'with':
                return Promise.all([remove._hide(), add._show()]);
            default:
                var promise = remove._hide();
                return promise ? promise.then(function () { return add._show(); }) : add._show();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"])({ primaryProperty: true })
    ], If.prototype, "condition", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], If.prototype, "swapOrder", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], If.prototype, "cache", void 0);
    If = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('if'),
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"])
    ], If);
    return If;
}(IfCore));

var Else = (function (_super) {
    __extends(Else, _super);
    function Else(viewFactory, viewSlot) {
        var _this = _super.call(this, viewFactory, viewSlot) || this;
        _this._registerInIf();
        return _this;
    }
    Else.prototype.bind = function (bindingContext, overrideContext) {
        _super.prototype.bind.call(this, bindingContext, overrideContext);
        if (this.ifVm.condition) {
            this._hide();
        }
        else {
            this._show();
        }
    };
    Else.prototype._registerInIf = function () {
        var previous = this.viewSlot.anchor.previousSibling;
        while (previous && !previous.au) {
            previous = previous.previousSibling;
        }
        if (!previous || !previous.au.if) {
            throw new Error("Can't find matching If for Else custom attribute.");
        }
        this.ifVm = previous.au.if.viewModel;
        this.ifVm.elseVm = this;
    };
    Else = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('else'),
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"])
    ], Else);
    return Else;
}(IfCore));

var With = (function () {
    function With(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.parentOverrideContext = null;
        this.view = null;
    }
    With.prototype.bind = function (bindingContext, overrideContext) {
        this.parentOverrideContext = overrideContext;
        this.valueChanged(this.value);
    };
    With.prototype.valueChanged = function (newValue) {
        var overrideContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["createOverrideContext"])(newValue, this.parentOverrideContext);
        var view = this.view;
        if (!view) {
            view = this.view = this.viewFactory.create();
            view.bind(newValue, overrideContext);
            this.viewSlot.add(view);
        }
        else {
            view.bind(newValue, overrideContext);
        }
    };
    With.prototype.unbind = function () {
        var view = this.view;
        this.parentOverrideContext = null;
        if (view) {
            view.unbind();
        }
    };
    With = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('with'),
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"])
    ], With);
    return With;
}());

var oneTime = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].oneTime;
function updateOverrideContexts(views, startIndex) {
    var length = views.length;
    if (startIndex > 0) {
        startIndex = startIndex - 1;
    }
    for (; startIndex < length; ++startIndex) {
        updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
}
function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["createOverrideContext"])(bindingContext, repeat.scope.overrideContext);
    if (typeof key !== 'undefined') {
        bindingContext[repeat.key] = key;
        bindingContext[repeat.value] = data;
    }
    else {
        bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
}
function updateOverrideContext(overrideContext, index, length) {
    var first = (index === 0);
    var last = (index === length - 1);
    var even = index % 2 === 0;
    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
}
function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions
        .filter(function (bi) { return bi.originalAttrName === attrName; })[0]
        .attributes
        .items
        .sourceExpression;
}
function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["BindingBehavior"]) {
        expression = expression.expression;
    }
    while (expression instanceof __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["ValueConverter"]) {
        expression = expression.expression;
        unwrapped = true;
    }
    return unwrapped ? expression : null;
}
function isOneTime(expression) {
    while (expression instanceof __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["BindingBehavior"]) {
        if (expression.name === 'oneTime') {
            return true;
        }
        expression = expression.expression;
    }
    return false;
}
function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
        binding.call(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["sourceContext"]);
    }
    else if (binding.updateOneTimeBindings) {
        binding.updateOneTimeBindings();
    }
}
function indexOf(array, item, matcher, startIndex) {
    if (!matcher) {
        return array.indexOf(item);
    }
    var length = array.length;
    for (var index = startIndex || 0; index < length; index++) {
        if (matcher(array[index], item)) {
            return index;
        }
    }
    return -1;
}

var ArrayRepeatStrategy = (function () {
    function ArrayRepeatStrategy() {
    }
    ArrayRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getArrayObserver(items);
    };
    ArrayRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var $repeat = repeat;
        var itemsLength = items.length;
        if (!items || itemsLength === 0) {
            $repeat.removeAllViews(true, !$repeat.viewsRequireLifecycle);
            return;
        }
        var children = $repeat.views();
        var viewsLength = children.length;
        if (viewsLength === 0) {
            this._standardProcessInstanceChanged($repeat, items);
            return;
        }
        if ($repeat.viewsRequireLifecycle) {
            var childrenSnapshot = children.slice(0);
            var itemNameInBindingContext = $repeat.local;
            var matcher_1 = $repeat.matcher();
            var itemsPreviouslyInViews_1 = [];
            var viewsToRemove = [];
            for (var index = 0; index < viewsLength; index++) {
                var view = childrenSnapshot[index];
                var oldItem = view.bindingContext[itemNameInBindingContext];
                if (indexOf(items, oldItem, matcher_1) === -1) {
                    viewsToRemove.push(view);
                }
                else {
                    itemsPreviouslyInViews_1.push(oldItem);
                }
            }
            var updateViews = void 0;
            var removePromise = void 0;
            if (itemsPreviouslyInViews_1.length > 0) {
                removePromise = $repeat.removeViews(viewsToRemove, true, !$repeat.viewsRequireLifecycle);
                updateViews = function () {
                    for (var index = 0; index < itemsLength; index++) {
                        var item = items[index];
                        var indexOfView = indexOf(itemsPreviouslyInViews_1, item, matcher_1, index);
                        var view = void 0;
                        if (indexOfView === -1) {
                            var overrideContext = createFullOverrideContext($repeat, items[index], index, itemsLength);
                            $repeat.insertView(index, overrideContext.bindingContext, overrideContext);
                            itemsPreviouslyInViews_1.splice(index, 0, undefined);
                        }
                        else if (indexOfView === index) {
                            view = children[indexOfView];
                            itemsPreviouslyInViews_1[indexOfView] = undefined;
                        }
                        else {
                            view = children[indexOfView];
                            $repeat.moveView(indexOfView, index);
                            itemsPreviouslyInViews_1.splice(indexOfView, 1);
                            itemsPreviouslyInViews_1.splice(index, 0, undefined);
                        }
                        if (view) {
                            updateOverrideContext(view.overrideContext, index, itemsLength);
                        }
                    }
                    _this._inPlaceProcessItems($repeat, items);
                };
            }
            else {
                removePromise = $repeat.removeAllViews(true, !$repeat.viewsRequireLifecycle);
                updateViews = function () { return _this._standardProcessInstanceChanged($repeat, items); };
            }
            if (removePromise instanceof Promise) {
                removePromise.then(updateViews);
            }
            else {
                updateViews();
            }
        }
        else {
            this._inPlaceProcessItems($repeat, items);
        }
    };
    ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function (repeat, items) {
        for (var i = 0, ii = items.length; i < ii; i++) {
            var overrideContext = createFullOverrideContext(repeat, items[i], i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
    };
    ArrayRepeatStrategy.prototype._inPlaceProcessItems = function (repeat, items) {
        var itemsLength = items.length;
        var viewsLength = repeat.viewCount();
        while (viewsLength > itemsLength) {
            viewsLength--;
            repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
        }
        var local = repeat.local;
        for (var i = 0; i < viewsLength; i++) {
            var view = repeat.view(i);
            var last = i === itemsLength - 1;
            var middle = i !== 0 && !last;
            var bindingContext = view.bindingContext;
            var overrideContext = view.overrideContext;
            if (bindingContext[local] === items[i]
                && overrideContext.$middle === middle
                && overrideContext.$last === last) {
                continue;
            }
            bindingContext[local] = items[i];
            overrideContext.$middle = middle;
            overrideContext.$last = last;
            repeat.updateBindings(view);
        }
        for (var i = viewsLength; i < itemsLength; i++) {
            var overrideContext = createFullOverrideContext(repeat, items[i], i, itemsLength);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
    };
    ArrayRepeatStrategy.prototype.instanceMutated = function (repeat, array, splices) {
        var _this = this;
        if (repeat.__queuedSplices) {
            for (var i = 0, ii = splices.length; i < ii; ++i) {
                var _a = splices[i], index = _a.index, removed = _a.removed, addedCount = _a.addedCount;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["mergeSplice"])(repeat.__queuedSplices, index, removed, addedCount);
            }
            repeat.__array = array.slice(0);
            return;
        }
        var maybePromise = this._runSplices(repeat, array.slice(0), splices);
        if (maybePromise instanceof Promise) {
            var queuedSplices_1 = repeat.__queuedSplices = [];
            var runQueuedSplices_1 = function () {
                if (!queuedSplices_1.length) {
                    repeat.__queuedSplices = undefined;
                    repeat.__array = undefined;
                    return;
                }
                var nextPromise = _this._runSplices(repeat, repeat.__array, queuedSplices_1) || Promise.resolve();
                queuedSplices_1 = repeat.__queuedSplices = [];
                nextPromise.then(runQueuedSplices_1);
            };
            maybePromise.then(runQueuedSplices_1);
        }
    };
    ArrayRepeatStrategy.prototype._runSplices = function (repeat, array, splices) {
        var _this = this;
        var removeDelta = 0;
        var rmPromises = [];
        for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var removed = splice.removed;
            for (var j = 0, jj = removed.length; j < jj; ++j) {
                var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
                if (viewOrPromise instanceof Promise) {
                    rmPromises.push(viewOrPromise);
                }
            }
            removeDelta -= splice.addedCount;
        }
        if (rmPromises.length > 0) {
            return Promise.all(rmPromises).then(function () {
                var spliceIndexLow = _this._handleAddedSplices(repeat, array, splices);
                updateOverrideContexts(repeat.views(), spliceIndexLow);
            });
        }
        var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
        updateOverrideContexts(repeat.views(), spliceIndexLow);
        return undefined;
    };
    ArrayRepeatStrategy.prototype._handleAddedSplices = function (repeat, array, splices) {
        var spliceIndex;
        var spliceIndexLow;
        var arrayLength = array.length;
        for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var addIndex = spliceIndex = splice.index;
            var end = splice.index + splice.addedCount;
            if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
                spliceIndexLow = spliceIndex;
            }
            for (; addIndex < end; ++addIndex) {
                var overrideContext = createFullOverrideContext(repeat, array[addIndex], addIndex, arrayLength);
                repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
            }
        }
        return spliceIndexLow;
    };
    return ArrayRepeatStrategy;
}());

var MapRepeatStrategy = (function () {
    function MapRepeatStrategy() {
    }
    MapRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getMapObserver(items);
    };
    MapRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, items); });
            return;
        }
        this._standardProcessItems(repeat, items);
    };
    MapRepeatStrategy.prototype._standardProcessItems = function (repeat, items) {
        var index = 0;
        var overrideContext;
        items.forEach(function (value, key) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size, key);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
        });
    };
    MapRepeatStrategy.prototype.instanceMutated = function (repeat, map, records) {
        var key;
        var i;
        var ii;
        var overrideContext;
        var removeIndex;
        var addIndex;
        var record;
        var rmPromises = [];
        var viewOrPromise;
        for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            key = record.key;
            switch (record.type) {
                case 'update':
                    removeIndex = this._getViewIndexByKey(repeat, key);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    overrideContext = createFullOverrideContext(repeat, map.get(key), removeIndex, map.size, key);
                    repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
                    break;
                case 'add':
                    addIndex = repeat.viewCount() <= map.size - 1 ? repeat.viewCount() : map.size - 1;
                    overrideContext = createFullOverrideContext(repeat, map.get(key), addIndex, map.size, key);
                    repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
                    break;
                case 'delete':
                    if (record.oldValue === undefined) {
                        return;
                    }
                    removeIndex = this._getViewIndexByKey(repeat, key);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    break;
                case 'clear':
                    repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                    break;
                default:
                    continue;
            }
        }
        if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
                updateOverrideContexts(repeat.views(), 0);
            });
        }
        else {
            updateOverrideContexts(repeat.views(), 0);
        }
    };
    MapRepeatStrategy.prototype._getViewIndexByKey = function (repeat, key) {
        var i;
        var ii;
        var child;
        for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.key] === key) {
                return i;
            }
        }
        return undefined;
    };
    return MapRepeatStrategy;
}());

var NullRepeatStrategy = (function () {
    function NullRepeatStrategy() {
    }
    NullRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        repeat.removeAllViews(true);
    };
    NullRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
    };
    return NullRepeatStrategy;
}());

var NumberRepeatStrategy = (function () {
    function NumberRepeatStrategy() {
    }
    NumberRepeatStrategy.prototype.getCollectionObserver = function () {
        return null;
    };
    NumberRepeatStrategy.prototype.instanceChanged = function (repeat, value) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, value); });
            return;
        }
        this._standardProcessItems(repeat, value);
    };
    NumberRepeatStrategy.prototype._standardProcessItems = function (repeat, value) {
        var childrenLength = repeat.viewCount();
        var i;
        var ii;
        var overrideContext;
        var viewsToRemove;
        value = Math.floor(value);
        viewsToRemove = childrenLength - value;
        if (viewsToRemove > 0) {
            if (viewsToRemove > childrenLength) {
                viewsToRemove = childrenLength;
            }
            for (i = 0, ii = viewsToRemove; i < ii; ++i) {
                repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
            }
            return;
        }
        for (i = childrenLength, ii = value; i < ii; ++i) {
            overrideContext = createFullOverrideContext(repeat, i, i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
        updateOverrideContexts(repeat.views(), 0);
    };
    return NumberRepeatStrategy;
}());

var SetRepeatStrategy = (function () {
    function SetRepeatStrategy() {
    }
    SetRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getSetObserver(items);
    };
    SetRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, items); });
            return;
        }
        this._standardProcessItems(repeat, items);
    };
    SetRepeatStrategy.prototype._standardProcessItems = function (repeat, items) {
        var index = 0;
        var overrideContext;
        items.forEach(function (value) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
        });
    };
    SetRepeatStrategy.prototype.instanceMutated = function (repeat, set, records) {
        var value;
        var i;
        var ii;
        var overrideContext;
        var removeIndex;
        var record;
        var rmPromises = [];
        var viewOrPromise;
        for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            value = record.value;
            switch (record.type) {
                case 'add':
                    var size = Math.max(set.size - 1, 0);
                    overrideContext = createFullOverrideContext(repeat, value, size, set.size);
                    repeat.insertView(size, overrideContext.bindingContext, overrideContext);
                    break;
                case 'delete':
                    removeIndex = this._getViewIndexByValue(repeat, value);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    break;
                case 'clear':
                    repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                    break;
                default:
                    continue;
            }
        }
        if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
                updateOverrideContexts(repeat.views(), 0);
            });
        }
        else {
            updateOverrideContexts(repeat.views(), 0);
        }
    };
    SetRepeatStrategy.prototype._getViewIndexByValue = function (repeat, value) {
        var i;
        var ii;
        var child;
        for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.local] === value) {
                return i;
            }
        }
        return undefined;
    };
    return SetRepeatStrategy;
}());

var RepeatStrategyLocator = (function () {
    function RepeatStrategyLocator() {
        this.matchers = [];
        this.strategies = [];
        this.addStrategy(function (items) { return items === null || items === undefined; }, new NullRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Array; }, new ArrayRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Map; }, new MapRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Set; }, new SetRepeatStrategy());
        this.addStrategy(function (items) { return typeof items === 'number'; }, new NumberRepeatStrategy());
    }
    RepeatStrategyLocator.prototype.addStrategy = function (matcher, strategy) {
        this.matchers.push(matcher);
        this.strategies.push(strategy);
    };
    RepeatStrategyLocator.prototype.getStrategy = function (items) {
        var matchers = this.matchers;
        for (var i = 0, ii = matchers.length; i < ii; ++i) {
            if (matchers[i](items)) {
                return this.strategies[i];
            }
        }
        return null;
    };
    return RepeatStrategyLocator;
}());

var lifecycleOptionalBehaviors = ['focus', 'if', 'else', 'repeat', 'show', 'hide', 'with'];
function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind)
        || t.viewFactory && viewsRequireLifecycle(t.viewFactory)
        || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}
function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
        var i = behaviors.length;
        while (i--) {
            if (behaviorRequiresLifecycle(behaviors[i])) {
                return true;
            }
        }
    }
    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}
function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
        return viewFactory._viewsRequireLifecycle;
    }
    viewFactory._viewsRequireLifecycle = false;
    if (viewFactory.viewFactory) {
        viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
        return viewFactory._viewsRequireLifecycle;
    }
    if (viewFactory.template.querySelector('.au-animate')) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
    }
    for (var id in viewFactory.instructions) {
        if (targetRequiresLifecycle(viewFactory.instructions[id])) {
            viewFactory._viewsRequireLifecycle = true;
            return true;
        }
    }
    viewFactory._viewsRequireLifecycle = false;
    return false;
}

var AbstractRepeater = (function () {
    function AbstractRepeater(options) {
        Object.assign(this, {
            local: 'items',
            viewsRequireLifecycle: true
        }, options);
    }
    AbstractRepeater.prototype.viewCount = function () {
        throw new Error('subclass must implement `viewCount`');
    };
    AbstractRepeater.prototype.views = function () {
        throw new Error('subclass must implement `views`');
    };
    AbstractRepeater.prototype.view = function (index) {
        throw new Error('subclass must implement `view`');
    };
    AbstractRepeater.prototype.matcher = function () {
        throw new Error('subclass must implement `matcher`');
    };
    AbstractRepeater.prototype.addView = function (bindingContext, overrideContext) {
        throw new Error('subclass must implement `addView`');
    };
    AbstractRepeater.prototype.insertView = function (index, bindingContext, overrideContext) {
        throw new Error('subclass must implement `insertView`');
    };
    AbstractRepeater.prototype.moveView = function (sourceIndex, targetIndex) {
        throw new Error('subclass must implement `moveView`');
    };
    AbstractRepeater.prototype.removeAllViews = function (returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeAllViews`');
    };
    AbstractRepeater.prototype.removeViews = function (viewsToRemove, returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeView`');
    };
    AbstractRepeater.prototype.removeView = function (index, returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeView`');
    };
    AbstractRepeater.prototype.updateBindings = function (view) {
        throw new Error('subclass must implement `updateBindings`');
    };
    return AbstractRepeater;
}());

var matcherExtractionMarker = '__marker_extracted__';
var Repeat = (function (_super) {
    __extends(Repeat, _super);
    function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
        var _this = _super.call(this, {
            local: 'item',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
        }) || this;
        _this.viewFactory = viewFactory;
        _this.instruction = instruction;
        _this.viewSlot = viewSlot;
        _this.lookupFunctions = viewResources.lookupFunctions;
        _this.observerLocator = observerLocator;
        _this.key = 'key';
        _this.value = 'value';
        _this.strategyLocator = strategyLocator;
        _this.ignoreMutation = false;
        _this.sourceExpression = getItemsSourceExpression(_this.instruction, 'repeat.for');
        _this.isOneTime = isOneTime(_this.sourceExpression);
        _this.viewsRequireLifecycle = viewsRequireLifecycle(viewFactory);
        return _this;
    }
    Repeat_1 = Repeat;
    Repeat.prototype.call = function (context, changes) {
        this[context](this.items, changes);
    };
    Repeat.prototype.bind = function (bindingContext, overrideContext) {
        this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
        var instruction = this.instruction;
        if (!(matcherExtractionMarker in instruction)) {
            instruction[matcherExtractionMarker] = this._captureAndRemoveMatcherBinding();
        }
        this.matcherBinding = instruction[matcherExtractionMarker];
        this.itemsChanged();
    };
    Repeat.prototype.unbind = function () {
        this.scope = null;
        this.items = null;
        this.matcherBinding = null;
        this.viewSlot.removeAll(true, true);
        this._unsubscribeCollection();
    };
    Repeat.prototype._unsubscribeCollection = function () {
        if (this.collectionObserver) {
            this.collectionObserver.unsubscribe(this.callContext, this);
            this.collectionObserver = null;
            this.callContext = null;
        }
    };
    Repeat.prototype.itemsChanged = function () {
        var _this = this;
        this._unsubscribeCollection();
        if (!this.scope) {
            return;
        }
        var items = this.items;
        this.strategy = this.strategyLocator.getStrategy(items);
        if (!this.strategy) {
            throw new Error("Value for '" + this.sourceExpression + "' is non-repeatable");
        }
        if (!this.isOneTime && !this._observeInnerCollection()) {
            this._observeCollection();
        }
        this.ignoreMutation = true;
        this.strategy.instanceChanged(this, items);
        this.observerLocator.taskQueue.queueMicroTask(function () {
            _this.ignoreMutation = false;
        });
    };
    Repeat.prototype._getInnerCollection = function () {
        var expression = unwrapExpression(this.sourceExpression);
        if (!expression) {
            return null;
        }
        return expression.evaluate(this.scope, null);
    };
    Repeat.prototype.handleCollectionMutated = function (collection, changes) {
        if (!this.collectionObserver) {
            return;
        }
        if (this.ignoreMutation) {
            return;
        }
        this.strategy.instanceMutated(this, collection, changes);
    };
    Repeat.prototype.handleInnerCollectionMutated = function (collection, changes) {
        var _this = this;
        if (!this.collectionObserver) {
            return;
        }
        if (this.ignoreMutation) {
            return;
        }
        this.ignoreMutation = true;
        var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
        this.observerLocator.taskQueue.queueMicroTask(function () { return _this.ignoreMutation = false; });
        if (newItems === this.items) {
            this.itemsChanged();
        }
        else {
            this.items = newItems;
        }
    };
    Repeat.prototype._observeInnerCollection = function () {
        var items = this._getInnerCollection();
        var strategy = this.strategyLocator.getStrategy(items);
        if (!strategy) {
            return false;
        }
        this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
        if (!this.collectionObserver) {
            return false;
        }
        this.callContext = 'handleInnerCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
        return true;
    };
    Repeat.prototype._observeCollection = function () {
        var items = this.items;
        this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
        if (this.collectionObserver) {
            this.callContext = 'handleCollectionMutated';
            this.collectionObserver.subscribe(this.callContext, this);
        }
    };
    Repeat.prototype._captureAndRemoveMatcherBinding = function () {
        var viewFactory = this.viewFactory.viewFactory;
        if (viewFactory) {
            var template = viewFactory.template;
            var instructions = viewFactory.instructions;
            if (Repeat_1.useInnerMatcher) {
                return extractMatcherBindingExpression(instructions);
            }
            if (getChildrenCount(template) > 1) {
                return undefined;
            }
            var repeatedElement = getFirstElementChild(template);
            if (!repeatedElement.hasAttribute('au-target-id')) {
                return undefined;
            }
            var repeatedElementTargetId = repeatedElement.getAttribute('au-target-id');
            return extractMatcherBindingExpression(instructions, repeatedElementTargetId);
        }
        return undefined;
    };
    Repeat.prototype.viewCount = function () { return this.viewSlot.children.length; };
    Repeat.prototype.views = function () { return this.viewSlot.children; };
    Repeat.prototype.view = function (index) { return this.viewSlot.children[index]; };
    Repeat.prototype.matcher = function () {
        var matcherBinding = this.matcherBinding;
        return matcherBinding
            ? matcherBinding.sourceExpression.evaluate(this.scope, matcherBinding.lookupFunctions)
            : null;
    };
    Repeat.prototype.addView = function (bindingContext, overrideContext) {
        var view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.add(view);
    };
    Repeat.prototype.insertView = function (index, bindingContext, overrideContext) {
        var view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.insert(index, view);
    };
    Repeat.prototype.moveView = function (sourceIndex, targetIndex) {
        this.viewSlot.move(sourceIndex, targetIndex);
    };
    Repeat.prototype.removeAllViews = function (returnToCache, skipAnimation) {
        return this.viewSlot.removeAll(returnToCache, skipAnimation);
    };
    Repeat.prototype.removeViews = function (viewsToRemove, returnToCache, skipAnimation) {
        return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    };
    Repeat.prototype.removeView = function (index, returnToCache, skipAnimation) {
        return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    };
    Repeat.prototype.updateBindings = function (view) {
        var $view = view;
        var j = $view.bindings.length;
        while (j--) {
            updateOneTimeBinding($view.bindings[j]);
        }
        j = $view.controllers.length;
        while (j--) {
            var k = $view.controllers[j].boundProperties.length;
            while (k--) {
                var binding = $view.controllers[j].boundProperties[k].binding;
                updateOneTimeBinding(binding);
            }
        }
    };
    var Repeat_1;
    Repeat.useInnerMatcher = true;
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Repeat.prototype, "items", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Repeat.prototype, "local", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Repeat.prototype, "key", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"]
    ], Repeat.prototype, "value", void 0);
    Repeat = Repeat_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('repeat'),
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["TargetInstruction"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewResources"], __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["ObserverLocator"], RepeatStrategyLocator)
    ], Repeat);
    return Repeat;
}(AbstractRepeater));
var extractMatcherBindingExpression = function (instructions, targetedElementId) {
    var instructionIds = Object.keys(instructions);
    for (var i = 0; i < instructionIds.length; i++) {
        var instructionId = instructionIds[i];
        if (targetedElementId !== undefined && instructionId !== targetedElementId) {
            continue;
        }
        var expressions = instructions[instructionId].expressions;
        if (expressions) {
            for (var ii = 0; ii < expressions.length; ii++) {
                if (expressions[ii].targetProperty === 'matcher') {
                    var matcherBindingExpression = expressions[ii];
                    expressions.splice(ii, 1);
                    return matcherBindingExpression;
                }
            }
        }
    }
};
var getChildrenCount = function (el) {
    var childNodes = el.childNodes;
    var count = 0;
    for (var i = 0, ii = childNodes.length; ii > i; ++i) {
        if (childNodes[i].nodeType === 1) {
            ++count;
        }
    }
    return count;
};
var getFirstElementChild = function (el) {
    var firstChild = el.firstChild;
    while (firstChild !== null) {
        if (firstChild.nodeType === 1) {
            return firstChild;
        }
        firstChild = firstChild.nextSibling;
    }
    return null;
};

var aureliaHideClassName = 'aurelia-hide';
var aureliaHideClass = "." + aureliaHideClassName + " { display:none !important; }";
function injectAureliaHideStyleAtHead() {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(aureliaHideClass);
}
function injectAureliaHideStyleAtBoundary(domBoundary) {
    if (__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["FEATURE"].shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
        domBoundary.hasAureliaHideStyle = true;
        __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(aureliaHideClass, domBoundary);
    }
}

var Show = (function () {
    function Show(element, animator, domBoundary) {
        this.element = element;
        this.animator = animator;
        this.domBoundary = domBoundary;
    }
    Show.inject = function () {
        return [__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element, __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["Animator"], __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["Optional"].of(__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].boundary, true)];
    };
    Show.prototype.created = function () {
        injectAureliaHideStyleAtBoundary(this.domBoundary);
    };
    Show.prototype.valueChanged = function (newValue) {
        var element = this.element;
        var animator = this.animator;
        if (newValue) {
            animator.removeClass(element, aureliaHideClassName);
        }
        else {
            animator.addClass(element, aureliaHideClassName);
        }
    };
    Show.prototype.bind = function (bindingContext) {
        this.valueChanged(this.value);
    };
    Show = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('show')
    ], Show);
    return Show;
}());

var Hide = (function () {
    function Hide(element, animator, domBoundary) {
        this.element = element;
        this.animator = animator;
        this.domBoundary = domBoundary;
    }
    Hide.inject = function () {
        return [__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element, __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["Animator"], __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["Optional"].of(__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].boundary, true)];
    };
    Hide.prototype.created = function () {
        injectAureliaHideStyleAtBoundary(this.domBoundary);
    };
    Hide.prototype.valueChanged = function (newValue) {
        if (newValue) {
            this.animator.addClass(this.element, aureliaHideClassName);
        }
        else {
            this.animator.removeClass(this.element, aureliaHideClassName);
        }
    };
    Hide.prototype.bind = function (bindingContext) {
        this.valueChanged(this.value);
    };
    Hide.prototype.value = function (value) {
        throw new Error('Method not implemented.');
    };
    Hide = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('hide')
    ], Hide);
    return Hide;
}());

var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var needsToWarn = true;
var HTMLSanitizer = (function () {
    function HTMLSanitizer() {
    }
    HTMLSanitizer.prototype.sanitize = function (input) {
        if (needsToWarn) {
            needsToWarn = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_logging__["getLogger"])('html-sanitizer')
                .warn("CAUTION: The default HTMLSanitizer does NOT provide security against a wide variety of sophisticated XSS attacks,\nand should not be relied on for sanitizing input from unknown sources.\nPlease see https://aurelia.io/docs/binding/basics#element-content for instructions on how to use a secure solution like DOMPurify or sanitize-html.");
        }
        return input.replace(SCRIPT_REGEX, '');
    };
    return HTMLSanitizer;
}());

var SanitizeHTMLValueConverter = (function () {
    function SanitizeHTMLValueConverter(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHTMLValueConverter.prototype.toView = function (untrustedMarkup) {
        if (untrustedMarkup === null || untrustedMarkup === undefined) {
            return null;
        }
        return this.sanitizer.sanitize(untrustedMarkup);
    };
    SanitizeHTMLValueConverter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["valueConverter"])('sanitizeHTML'),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(HTMLSanitizer)
    ], SanitizeHTMLValueConverter);
    return SanitizeHTMLValueConverter;
}());

var Replaceable = (function () {
    function Replaceable(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.view = null;
    }
    Replaceable.prototype.bind = function (bindingContext, overrideContext) {
        if (this.view === null) {
            this.view = this.viewFactory.create();
            this.viewSlot.add(this.view);
        }
        this.view.bind(bindingContext, overrideContext);
    };
    Replaceable.prototype.unbind = function () {
        this.view.unbind();
    };
    Replaceable = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('replaceable'),
        __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["templateController"],
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["inject"])(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BoundViewFactory"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"])
    ], Replaceable);
    return Replaceable;
}());

var Focus = (function () {
    function Focus(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.isAttached = false;
        this.needsApply = false;
    }
    Focus.inject = function () {
        return [__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].Element, __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__["TaskQueue"]];
    };
    Focus.prototype.valueChanged = function (newValue) {
        if (this.isAttached) {
            this._apply();
        }
        else {
            this.needsApply = true;
        }
    };
    Focus.prototype._apply = function () {
        var _this = this;
        if (this.value) {
            this.taskQueue.queueMicroTask(function () {
                if (_this.value) {
                    _this.element.focus();
                }
            });
        }
        else {
            this.element.blur();
        }
    };
    Focus.prototype.attached = function () {
        this.isAttached = true;
        if (this.needsApply) {
            this.needsApply = false;
            this._apply();
        }
        this.element.addEventListener('focus', this);
        this.element.addEventListener('blur', this);
    };
    Focus.prototype.detached = function () {
        this.isAttached = false;
        this.element.removeEventListener('focus', this);
        this.element.removeEventListener('blur', this);
    };
    Focus.prototype.handleEvent = function (e) {
        if (e.type === 'focus') {
            this.value = true;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].activeElement !== this.element) {
            this.value = false;
        }
    };
    Focus = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customAttribute"])('focus', __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].twoWay)
    ], Focus);
    return Focus;
}());

var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;
function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
        throw new Error("Failed loading required CSS file: " + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
        var quote = p1.charAt(0);
        if (quote === '\'' || quote === '"') {
            p1 = p1.substr(1, p1.length - 2);
        }
        return 'url(\'' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_aurelia_path__["relativeToFile"])(p1, address) + '\')';
    });
}
var CSSResource = (function () {
    function CSSResource(address) {
        this.address = address;
        this._scoped = null;
        this._global = false;
        this._alreadyGloballyInjected = false;
    }
    CSSResource.prototype.initialize = function (container, Target) {
        this._scoped = new Target(this);
    };
    CSSResource.prototype.register = function (registry, name) {
        if (name === 'scoped') {
            registry.registerViewEngineHooks(this._scoped);
        }
        else {
            this._global = true;
        }
    };
    CSSResource.prototype.load = function (container) {
        var _this = this;
        return container.get(__WEBPACK_IMPORTED_MODULE_6_aurelia_loader__["Loader"])
            .loadText(this.address)
            .catch(function (err) { return null; })
            .then(function (text) {
            text = fixupCSSUrls(_this.address, text);
            _this._scoped.css = text;
            if (_this._global) {
                _this._alreadyGloballyInjected = true;
                __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(text);
            }
        });
    };
    return CSSResource;
}());
var CSSViewEngineHooks = (function () {
    function CSSViewEngineHooks(owner) {
        this.owner = owner;
        this.css = null;
    }
    CSSViewEngineHooks.prototype.beforeCompile = function (content, resources, instruction) {
        if (instruction.targetShadowDOM) {
            __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(this.css, content, true);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["FEATURE"].scopedCSS) {
            var styleNode = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(this.css, content, true);
            styleNode.setAttribute('scoped', 'scoped');
        }
        else if (this._global && !this.owner._alreadyGloballyInjected) {
            __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["DOM"].injectStyles(this.css);
            this.owner._alreadyGloballyInjected = true;
        }
    };
    return CSSViewEngineHooks;
}());
function _createCSSResource(address) {
    var ViewCSS = (function (_super) {
        __extends(ViewCSS, _super);
        function ViewCSS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewCSS = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["resource"])(new CSSResource(address))
        ], ViewCSS);
        return ViewCSS;
    }(CSSViewEngineHooks));
    return ViewCSS;
}

var AttrBindingBehavior = (function () {
    function AttrBindingBehavior() {
    }
    AttrBindingBehavior.prototype.bind = function (binding, source) {
        binding.targetObserver = new __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["DataAttributeObserver"](binding.target, binding.targetProperty);
    };
    AttrBindingBehavior.prototype.unbind = function (binding, source) {
    };
    AttrBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('attr')
    ], AttrBindingBehavior);
    return AttrBindingBehavior;
}());

var modeBindingBehavior = {
    bind: function (binding, source, lookupFunctions) {
        binding.originalMode = binding.mode;
        binding.mode = this.mode;
    },
    unbind: function (binding, source) {
        binding.mode = binding.originalMode;
        binding.originalMode = null;
    }
};
var OneTimeBindingBehavior = (function () {
    function OneTimeBindingBehavior() {
        this.mode = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].oneTime;
    }
    OneTimeBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__["mixin"])(modeBindingBehavior),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('oneTime')
    ], OneTimeBindingBehavior);
    return OneTimeBindingBehavior;
}());
var OneWayBindingBehavior = (function () {
    function OneWayBindingBehavior() {
        this.mode = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].toView;
    }
    OneWayBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__["mixin"])(modeBindingBehavior),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('oneWay')
    ], OneWayBindingBehavior);
    return OneWayBindingBehavior;
}());
var ToViewBindingBehavior = (function () {
    function ToViewBindingBehavior() {
        this.mode = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].toView;
    }
    ToViewBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__["mixin"])(modeBindingBehavior),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('toView')
    ], ToViewBindingBehavior);
    return ToViewBindingBehavior;
}());
var FromViewBindingBehavior = (function () {
    function FromViewBindingBehavior() {
        this.mode = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].fromView;
    }
    FromViewBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__["mixin"])(modeBindingBehavior),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('fromView')
    ], FromViewBindingBehavior);
    return FromViewBindingBehavior;
}());
var TwoWayBindingBehavior = (function () {
    function TwoWayBindingBehavior() {
        this.mode = __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].twoWay;
    }
    TwoWayBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_aurelia_metadata__["mixin"])(modeBindingBehavior),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('twoWay')
    ], TwoWayBindingBehavior);
    return TwoWayBindingBehavior;
}());

function throttle(newValue) {
    var _this = this;
    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
        state.last = +new Date();
        this.throttledMethod(newValue);
        return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
        state.timeoutId = setTimeout(function () {
            state.timeoutId = null;
            state.last = +new Date();
            _this.throttledMethod(state.newValue);
        }, state.delay - elapsed);
    }
}
var ThrottleBindingBehavior = (function () {
    function ThrottleBindingBehavior() {
    }
    ThrottleBindingBehavior.prototype.bind = function (binding, source, delay) {
        if (delay === void 0) { delay = 200; }
        var methodToThrottle = 'updateTarget';
        if (binding.callSource) {
            methodToThrottle = 'callSource';
        }
        else if (binding.updateSource && binding.mode === __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].twoWay) {
            methodToThrottle = 'updateSource';
        }
        binding.throttledMethod = binding[methodToThrottle];
        binding.throttledMethod.originalName = methodToThrottle;
        binding[methodToThrottle] = throttle;
        binding.throttleState = {
            delay: delay,
            last: 0,
            timeoutId: null
        };
    };
    ThrottleBindingBehavior.prototype.unbind = function (binding, source) {
        var methodToRestore = binding.throttledMethod.originalName;
        binding[methodToRestore] = binding.throttledMethod;
        binding.throttledMethod = null;
        clearTimeout(binding.throttleState.timeoutId);
        binding.throttleState = null;
    };
    ThrottleBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('throttle')
    ], ThrottleBindingBehavior);
    return ThrottleBindingBehavior;
}());

var unset = {};
function debounceCallSource(event) {
    var _this = this;
    var state = this.debounceState;
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () { return _this.debouncedMethod(event); }, state.delay);
}
function debounceCall(context, newValue, oldValue) {
    var _this = this;
    var state = this.debounceState;
    clearTimeout(state.timeoutId);
    if (context !== state.callContextToDebounce) {
        state.oldValue = unset;
        this.debouncedMethod(context, newValue, oldValue);
        return;
    }
    if (state.oldValue === unset) {
        state.oldValue = oldValue;
    }
    state.timeoutId = setTimeout(function () {
        var _oldValue = state.oldValue;
        state.oldValue = unset;
        _this.debouncedMethod(context, newValue, _oldValue);
    }, state.delay);
}
var DebounceBindingBehavior = (function () {
    function DebounceBindingBehavior() {
    }
    DebounceBindingBehavior.prototype.bind = function (binding, source, delay) {
        if (delay === void 0) { delay = 200; }
        var isCallSource = binding.callSource !== undefined;
        var methodToDebounce = isCallSource ? 'callSource' : 'call';
        var debouncer = isCallSource ? debounceCallSource : debounceCall;
        var mode = binding.mode;
        var callContextToDebounce = mode === __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].twoWay || mode === __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].fromView ? __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["targetContext"] : __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["sourceContext"];
        binding.debouncedMethod = binding[methodToDebounce];
        binding.debouncedMethod.originalName = methodToDebounce;
        binding[methodToDebounce] = debouncer;
        binding.debounceState = {
            callContextToDebounce: callContextToDebounce,
            delay: delay,
            timeoutId: 0,
            oldValue: unset
        };
    };
    DebounceBindingBehavior.prototype.unbind = function (binding, source) {
        var methodToRestore = binding.debouncedMethod.originalName;
        binding[methodToRestore] = binding.debouncedMethod;
        binding.debouncedMethod = null;
        clearTimeout(binding.debounceState.timeoutId);
        binding.debounceState = null;
    };
    DebounceBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('debounce')
    ], DebounceBindingBehavior);
    return DebounceBindingBehavior;
}());

function findOriginalEventTarget(event) {
    return (event.path && event.path[0]) || (event.deepPath && event.deepPath[0]) || event.target;
}
function handleSelfEvent(event) {
    var target = findOriginalEventTarget(event);
    if (this.target !== target) {
        return;
    }
    this.selfEventCallSource(event);
}
var SelfBindingBehavior = (function () {
    function SelfBindingBehavior() {
    }
    SelfBindingBehavior.prototype.bind = function (binding, source) {
        if (!binding.callSource || !binding.targetEvent) {
            throw new Error('Self binding behavior only supports event.');
        }
        binding.selfEventCallSource = binding.callSource;
        binding.callSource = handleSelfEvent;
    };
    SelfBindingBehavior.prototype.unbind = function (binding, source) {
        binding.callSource = binding.selfEventCallSource;
        binding.selfEventCallSource = null;
    };
    SelfBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('self')
    ], SelfBindingBehavior);
    return SelfBindingBehavior;
}());

var BindingSignaler = (function () {
    function BindingSignaler() {
        this.signals = {};
    }
    BindingSignaler.prototype.signal = function (name) {
        var bindings = this.signals[name];
        if (!bindings) {
            return;
        }
        var i = bindings.length;
        while (i--) {
            bindings[i].call(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["sourceContext"]);
        }
    };
    return BindingSignaler;
}());

var SignalBindingBehavior = (function () {
    function SignalBindingBehavior(bindingSignaler) {
        this.signals = bindingSignaler.signals;
    }
    SignalBindingBehavior.inject = function () { return [BindingSignaler]; };
    SignalBindingBehavior.prototype.bind = function (binding, source) {
        var names = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            names[_i - 2] = arguments[_i];
        }
        if (!binding.updateTarget) {
            throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
        }
        var signals = this.signals;
        if (names.length === 1) {
            var name_1 = names[0];
            var bindings = signals[name_1] || (signals[name_1] = []);
            bindings.push(binding);
            binding.signalName = name_1;
        }
        else if (names.length > 1) {
            var i = names.length;
            while (i--) {
                var name_2 = names[i];
                var bindings = signals[name_2] || (signals[name_2] = []);
                bindings.push(binding);
            }
            binding.signalName = names;
        }
        else {
            throw new Error('Signal name is required.');
        }
    };
    SignalBindingBehavior.prototype.unbind = function (binding, source) {
        var signals = this.signals;
        var name = binding.signalName;
        binding.signalName = null;
        if (Array.isArray(name)) {
            var names = name;
            var i = names.length;
            while (i--) {
                var n = names[i];
                var bindings = signals[n];
                bindings.splice(bindings.indexOf(binding), 1);
            }
        }
        else {
            var bindings = signals[name];
            bindings.splice(bindings.indexOf(binding), 1);
        }
    };
    SignalBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('signal')
    ], SignalBindingBehavior);
    return SignalBindingBehavior;
}());

var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way/ from-view bindings on input/select elements.';
var UpdateTriggerBindingBehavior = (function () {
    function UpdateTriggerBindingBehavior() {
    }
    UpdateTriggerBindingBehavior.prototype.bind = function (binding, source) {
        var events = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            events[_i - 2] = arguments[_i];
        }
        if (events.length === 0) {
            throw new Error(eventNamesRequired);
        }
        if (binding.mode !== __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].twoWay && binding.mode !== __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingMode"].fromView) {
            throw new Error(notApplicableMessage);
        }
        var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
        if (!targetObserver.handler) {
            throw new Error(notApplicableMessage);
        }
        binding.targetObserver = targetObserver;
        targetObserver.originalHandler = binding.targetObserver.handler;
        var handler = new __WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["EventSubscriber"](events);
        targetObserver.handler = handler;
    };
    UpdateTriggerBindingBehavior.prototype.unbind = function (binding, source) {
        var targetObserver = binding.targetObserver;
        targetObserver.handler.dispose();
        targetObserver.handler = targetObserver.originalHandler;
        targetObserver.originalHandler = null;
    };
    UpdateTriggerBindingBehavior = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aurelia_binding__["bindingBehavior"])('updateTrigger')
    ], UpdateTriggerBindingBehavior);
    return UpdateTriggerBindingBehavior;
}());

function _createDynamicElement(_a) {
    var name = _a.name, viewUrl = _a.viewUrl, bindableNames = _a.bindableNames, useShadowDOMmode = _a.useShadowDOMmode;
    var DynamicElement = (function () {
        function DynamicElement() {
        }
        DynamicElement.prototype.bind = function (bindingContext) {
            this.$parent = bindingContext;
        };
        DynamicElement = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customElement"])(name),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useView"])(viewUrl)
        ], DynamicElement);
        return DynamicElement;
    }());
    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["bindable"])(bindableNames[i])(DynamicElement);
    }
    switch (useShadowDOMmode) {
        case 'open':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useShadowDOM"])({ mode: 'open' })(DynamicElement);
            break;
        case 'closed':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useShadowDOM"])({ mode: 'closed' })(DynamicElement);
            break;
        case '':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useShadowDOM"])(DynamicElement);
            break;
        case null:
            break;
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_logging__["getLogger"])('aurelia-html-only-element')
                .warn("Expected 'use-shadow-dom' value to be \"close\", \"open\" or \"\", received " + useShadowDOMmode);
            break;
    }
    return DynamicElement;
}

function getElementName(address) {
    return /([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase();
}
function configure(config) {
    var viewEngine = config.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewEngine"]);
    var loader = config.aurelia.loader;
    viewEngine.addResourcePlugin('.html', {
        'fetch': function (viewUrl) {
            return loader.loadTemplate(viewUrl).then(function (registryEntry) {
                var _a;
                var bindableNames = registryEntry.template.getAttribute('bindable');
                var useShadowDOMmode = registryEntry.template.getAttribute('use-shadow-dom');
                var name = getElementName(viewUrl);
                if (bindableNames) {
                    bindableNames = bindableNames.split(',').map(function (x) { return x.trim(); });
                    registryEntry.template.removeAttribute('bindable');
                }
                else {
                    bindableNames = [];
                }
                return _a = {}, _a[name] = _createDynamicElement({ name: name, viewUrl: viewUrl, bindableNames: bindableNames, useShadowDOMmode: useShadowDOMmode }), _a;
            });
        }
    });
}

function configure$1(config) {
    injectAureliaHideStyleAtHead();
    config.globalResources(Compose, If, Else, With, Repeat, Show, Hide, Replaceable, Focus, SanitizeHTMLValueConverter, OneTimeBindingBehavior, OneWayBindingBehavior, ToViewBindingBehavior, FromViewBindingBehavior, TwoWayBindingBehavior, ThrottleBindingBehavior, DebounceBindingBehavior, SelfBindingBehavior, SignalBindingBehavior, UpdateTriggerBindingBehavior, AttrBindingBehavior);
    configure(config);
    var viewEngine = config.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewEngine"]);
    var styleResourcePlugin = {
        fetch: function (address) {
            var _a;
            return _a = {}, _a[address] = _createCSSResource(address), _a;
        }
    };
    ['.css', '.less', '.sass', '.scss', '.styl'].forEach(function (ext) { return viewEngine.addResourcePlugin(ext, styleResourcePlugin); });
}


//# sourceMappingURL=aurelia-templating-resources.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-templating-router":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_router__ = __webpack_require__("aurelia-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_dependency_injection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_binding__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_pal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_logging__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "RouteHref", function() { return RouteHref; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RouterView", function() { return RouterView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "TemplatingRouteLoader", function() { return TemplatingRouteLoader; });
/* harmony export (binding) */ __webpack_require__.d(exports, "configure", function() { return configure; });









class EmptyLayoutViewModel {
}
/**
 * Implementation of Aurelia Router ViewPort. Responsible for loading route, composing and swapping routes views
 */
class RouterView {
    constructor(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {
        this.element = element;
        this.container = container;
        this.viewSlot = viewSlot;
        this.router = router;
        this.viewLocator = viewLocator;
        this.compositionTransaction = compositionTransaction;
        this.compositionEngine = compositionEngine;
        // add this <router-view/> to router view ports lookup based on name attribute
        // when this router is the root router-view
        // also trigger AppRouter registerViewPort extra flow
        this.router.registerViewPort(this, this.element.getAttribute('name'));
        // Each <router-view/> process its instruction as a composition transaction
        // there are differences between intial composition and subsequent compositions
        // also there are differences between root composition and child <router-view/> composition
        // mark the first composition transaction with a property initialComposition to distinguish it
        // when the root <router-view/> gets new instruction for the first time
        if (!('initialComposition' in compositionTransaction)) {
            compositionTransaction.initialComposition = true;
            this.compositionTransactionNotifier = compositionTransaction.enlist();
        }
    }
    /**@internal */
    static inject() {
        return [__WEBPACK_IMPORTED_MODULE_6_aurelia_pal__["DOM"].Element, __WEBPACK_IMPORTED_MODULE_4_aurelia_dependency_injection__["Container"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewSlot"], __WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ViewLocator"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionTransaction"], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionEngine"]];
    }
    created(owningView) {
        this.owningView = owningView;
    }
    bind(bindingContext, overrideContext) {
        // router needs to get access to view model of current route parent
        // doing it in generic way via viewModel property on container
        this.container.viewModel = bindingContext;
        this.overrideContext = overrideContext;
    }
    /**
     * Implementation of `aurelia-router` ViewPort interface, responsible for templating related part in routing Pipeline
     */
    process($viewPortInstruction, waitToSwap) {
        // have strong typings without exposing it in public typings, this is to ensure maximum backward compat
        const viewPortInstruction = $viewPortInstruction;
        const component = viewPortInstruction.component;
        const childContainer = component.childContainer;
        const viewModel = component.viewModel;
        const viewModelResource = component.viewModelResource;
        const metadata = viewModelResource.metadata;
        const config = component.router.currentInstruction.config;
        const viewPortConfig = config.viewPorts ? (config.viewPorts[viewPortInstruction.name] || {}) : {};
        childContainer.get(RouterViewLocator)._notify(this);
        // layoutInstruction is our layout viewModel
        const layoutInstruction = {
            viewModel: viewPortConfig.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
            view: viewPortConfig.layoutView || config.layoutView || this.layoutView,
            model: viewPortConfig.layoutModel || config.layoutModel || this.layoutModel,
            router: viewPortInstruction.component.router,
            childContainer: childContainer,
            viewSlot: this.viewSlot
        };
        // viewport will be a thin wrapper around composition engine
        // to process instruction/configuration from users
        // preparing all information related to a composition process
        // first by getting view strategy of a ViewPortComponent View
        const viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
        if (viewStrategy && component.view) {
            viewStrategy.makeRelativeTo(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(component.router.container.viewModel.constructor).moduleId);
        }
        // using metadata of a custom element view model to load appropriate view-factory instance
        return metadata
            .load(childContainer, viewModelResource.value, null, viewStrategy, true)
            // for custom element, viewFactory typing is always ViewFactory
            // for custom attribute, it will be HtmlBehaviorResource
            .then((viewFactory) => {
            // if this is not the first time that this <router-view/> is composing its instruction
            // try to capture ownership of the composition transaction
            // child <router-view/> will not be able to capture, since root <router-view/> typically captures
            // the ownership token
            if (!this.compositionTransactionNotifier) {
                this.compositionTransactionOwnershipToken = this.compositionTransaction.tryCapture();
            }
            if (layoutInstruction.viewModel || layoutInstruction.view) {
                viewPortInstruction.layoutInstruction = layoutInstruction;
            }
            const viewPortComponentBehaviorInstruction = __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["BehaviorInstruction"].dynamic(this.element, viewModel, viewFactory);
            viewPortInstruction.controller = metadata.create(childContainer, viewPortComponentBehaviorInstruction);
            if (waitToSwap) {
                return null;
            }
            this.swap(viewPortInstruction);
        });
    }
    swap($viewPortInstruction) {
        // have strong typings without exposing it in public typings, this is to ensure maximum backward compat
        const viewPortInstruction = $viewPortInstruction;
        const viewPortController = viewPortInstruction.controller;
        const layoutInstruction = viewPortInstruction.layoutInstruction;
        const previousView = this.view;
        // Final step of swapping a <router-view/> ViewPortComponent
        const work = () => {
            const swapStrategy = __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["SwapStrategies"][this.swapOrder] || __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["SwapStrategies"].after;
            const viewSlot = this.viewSlot;
            swapStrategy(viewSlot, previousView, () => Promise.resolve(viewSlot.add(this.view))).then(() => {
                this._notify();
            });
        };
        // Ensure all users setups have been completed
        const ready = (owningView_or_layoutView) => {
            viewPortController.automate(this.overrideContext, owningView_or_layoutView);
            const transactionOwnerShipToken = this.compositionTransactionOwnershipToken;
            // if this router-view is the root <router-view/> of a normal startup via aurelia.setRoot
            // attemp to take control of the transaction
            // if ownership can be taken
            // wait for transaction to complete before swapping
            if (transactionOwnerShipToken) {
                return transactionOwnerShipToken
                    .waitForCompositionComplete()
                    .then(() => {
                    this.compositionTransactionOwnershipToken = null;
                    return work();
                });
            }
            // otherwise, just swap
            return work();
        };
        // If there is layout instruction, new to compose layout before processing ViewPortComponent
        // layout controller/view/view-model is composed using composition engine APIs
        if (layoutInstruction) {
            if (!layoutInstruction.viewModel) {
                // createController chokes if there's no viewmodel, so create a dummy one
                // but avoid using a POJO as it creates unwanted metadata in Object constructor
                layoutInstruction.viewModel = new EmptyLayoutViewModel();
            }
            // using composition engine to create compose layout
            return this.compositionEngine
                // first create controller from layoutInstruction
                // and treat it as CompositionContext
                // then emulate slot projection with ViewPortComponent view
                .createController(layoutInstruction)
                .then((layoutController) => {
                const layoutView = layoutController.view;
                __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["ShadowDOM"].distributeView(viewPortController.view, layoutController.slots || layoutView.slots);
                // when there is a layout
                // view hierarchy is: <router-view/> owner view -> layout view -> ViewPortComponent view
                layoutController.automate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_aurelia_binding__["createOverrideContext"])(layoutInstruction.viewModel), this.owningView);
                layoutView.children.push(viewPortController.view);
                return layoutView || layoutController;
            })
                .then((newView) => {
                this.view = newView;
                return ready(newView);
            });
        }
        // if there is no layout, then get ViewPortComponent view ready as view property
        // and process controller/swapping
        // when there is no layout
        // view hierarchy is: <router-view/> owner view -> ViewPortComponent view
        this.view = viewPortController.view;
        return ready(this.owningView);
    }
    /**
     * Notify composition transaction that this router has finished processing
     * Happens when this <router-view/> is the root router-view
     * @internal
     */
    _notify() {
        const notifier = this.compositionTransactionNotifier;
        if (notifier) {
            notifier.done();
            this.compositionTransactionNotifier = null;
        }
    }
}
/**
 * @internal Actively avoid using decorator to reduce the amount of code generated
 *
 * There is no view to compose by default in a router view
 * This custom element is responsible for composing its own view, based on current config
 */
RouterView.$view = null;
/**
 * @internal Actively avoid using decorator to reduce the amount of code generated
 */
RouterView.$resource = {
    name: 'router-view',
    bindables: ['swapOrder', 'layoutView', 'layoutViewModel', 'layoutModel', 'inherit-binding-context']
};
/**
* Locator which finds the nearest RouterView, relative to the current dependency injection container.
*/
class RouterViewLocator {
    /**
    * Creates an instance of the RouterViewLocator class.
    */
    constructor() {
        this.promise = new Promise((resolve) => this.resolve = resolve);
    }
    /**
    * Finds the nearest RouterView instance.
    * @returns A promise that will be resolved with the located RouterView instance.
    */
    findNearest() {
        return this.promise;
    }
    /**@internal */
    _notify(routerView) {
        this.resolve(routerView);
    }
}

/**@internal exported for unit testing */
class EmptyClass {
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["inlineView"])('<template></template>')(EmptyClass);
/**
 * Default implementation of `RouteLoader` used for loading component based on a route config
 */
class TemplatingRouteLoader extends __WEBPACK_IMPORTED_MODULE_0_aurelia_router__["RouteLoader"] {
    constructor(compositionEngine) {
        super();
        this.compositionEngine = compositionEngine;
    }
    /**
     * Resolve a view model from a RouteConfig
     * Throws when there is neither "moduleId" nor "viewModel" property
     * @internal
     */
    resolveViewModel(router, config) {
        return new Promise((resolve, reject) => {
            let viewModel;
            if ('moduleId' in config) {
                let moduleId = config.moduleId;
                if (moduleId === null) {
                    viewModel = EmptyClass;
                }
                else {
                    // this requires container of router has passes a certain point
                    // where a view model has been setup on the container
                    // it will fail in enhance scenario because no viewport has been registered
                    moduleId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_aurelia_path__["relativeToFile"])(moduleId, __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["Origin"].get(router.container.viewModel.constructor).moduleId);
                    if (/\.html/i.test(moduleId)) {
                        viewModel = createDynamicClass(moduleId);
                    }
                    else {
                        viewModel = moduleId;
                    }
                }
                return resolve(viewModel);
            }
            // todo: add if ('viewModel' in config) to support static view model resolution
            reject(new Error('Invalid route config. No "moduleId" found.'));
        });
    }
    /**
     * Create child container based on a router container
     * Also ensures that child router are properly constructed in the newly created child container
     * @internal
     */
    createChildContainer(router) {
        const childContainer = router.container.createChild();
        childContainer.registerSingleton(RouterViewLocator);
        childContainer.getChildRouter = function () {
            let childRouter;
            childContainer.registerHandler(__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"], () => childRouter || (childRouter = router.createChild(childContainer)));
            return childContainer.get(__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"]);
        };
        return childContainer;
    }
    /**
     * Load corresponding component of a route config of a navigation instruction
     */
    loadRoute(router, config, _navInstruction) {
        return this
            .resolveViewModel(router, config)
            .then(viewModel => this.compositionEngine.ensureViewModel({
            viewModel: viewModel,
            childContainer: this.createChildContainer(router),
            view: config.view || config.viewStrategy,
            router: router
        }));
    }
}
/**@internal */
TemplatingRouteLoader.inject = [__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["CompositionEngine"]];
/**@internal exported for unit testing */
function createDynamicClass(moduleId) {
    const name = /([^\/^\?]+)\.html/i.exec(moduleId)[1];
    class DynamicClass {
        bind(bindingContext) {
            this.$parent = bindingContext;
        }
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["customElement"])(name)(DynamicClass);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["useView"])(moduleId)(DynamicClass);
    return DynamicClass;
}

const logger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_aurelia_logging__["getLogger"])('route-href');
/**
 * Helper custom attribute to help associate an element with a route by name
 */
class RouteHref {
    constructor(router, element) {
        this.router = router;
        this.element = element;
        this.attribute = 'href';
    }
    /*@internal */
    static inject() {
        return [__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"], __WEBPACK_IMPORTED_MODULE_6_aurelia_pal__["DOM"].Element];
    }
    bind() {
        this.isActive = true;
        this.processChange();
    }
    unbind() {
        this.isActive = false;
    }
    attributeChanged(value, previous) {
        if (previous) {
            this.element.removeAttribute(previous);
        }
        return this.processChange();
    }
    processChange() {
        return this.router
            .ensureConfigured()
            .then(() => {
            if (!this.isActive) {
                // returning null to avoid Bluebird warning
                return null;
            }
            const element = this.element;
            const href = this.router.generate(this.route, this.params);
            if (element.au.controller) {
                element.au.controller.viewModel[this.attribute] = href;
            }
            else {
                element.setAttribute(this.attribute, href);
            }
            // returning null to avoid Bluebird warning
            return null;
        })
            .catch((reason) => {
            logger.error(reason);
        });
    }
}
/**
 * @internal Actively avoid using decorator to reduce the amount of code generated
 */
RouteHref.$resource = {
    type: 'attribute',
    name: 'route-href',
    bindables: [
        { name: 'route', changeHandler: 'processChange', primaryProperty: true },
        { name: 'params', changeHandler: 'processChange' },
        'attribute'
    ] // type definition of Aurelia templating is wrong
};

function configure(config) {
    config
        .singleton(__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["RouteLoader"], TemplatingRouteLoader)
        .singleton(__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"], __WEBPACK_IMPORTED_MODULE_0_aurelia_router__["AppRouter"])
        .globalResources(RouterView, RouteHref);
    config.container.registerAlias(__WEBPACK_IMPORTED_MODULE_0_aurelia_router__["Router"], __WEBPACK_IMPORTED_MODULE_0_aurelia_router__["AppRouter"]);
}


//# sourceMappingURL=aurelia-templating-router.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ }

},[1379]);
//# sourceMappingURL=aurelia.4e1a7d50fcf6f24e0be7.bundle.map