/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/admin/admin.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/router/src/router_outlet_map';
import * as import19 from '@angular/core/src/linker/component_factory_resolver';
import * as import20 from '@angular/router/src/directives/router_link';
import * as import21 from '@angular/router/src/directives/router_link_active';
import * as import22 from '@angular/router/src/directives/router_outlet';
export var Wrapper_AdminComponent = (function () {
    function Wrapper_AdminComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.AdminComponent(p0, p1);
    }
    Wrapper_AdminComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AdminComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AdminComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AdminComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AdminComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AdminComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AdminComponent;
}());
var renderType_AdminComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AdminComponent_Host0 = (function (_super) {
    __extends(View_AdminComponent_Host0, _super);
    function View_AdminComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AdminComponent_Host0, renderType_AdminComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AdminComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AdminComponent0(this.viewUtils, this, 0, this._el_0);
        this._AdminComponent_0_3 = new Wrapper_AdminComponent(this.injectorGet(import8.AuthService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._AdminComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AdminComponent_0_3.context);
    };
    View_AdminComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AdminComponent) && (0 === requestNodeIndex))) {
            return this._AdminComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AdminComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AdminComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_AdminComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AdminComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AdminComponent_Host0;
}(import1.AppView));
export var AdminComponentNgFactory = new import7.ComponentFactory('ng-component', View_AdminComponent_Host0, import0.AdminComponent);
var styles_AdminComponent = [];
var renderType_AdminComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AdminComponent, {});
export var View_AdminComponent0 = (function (_super) {
    __extends(View_AdminComponent0, _super);
    function View_AdminComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AdminComponent0, renderType_AdminComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AdminComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar navbar-inverse bg-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '  \n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'SPORTS STORE Admin', null);
        this._text_4 = this.renderer.createText(this._el_0, '  \n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '  \n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'm-t-1'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'col-xs-3'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'button', new import3.InlineArray8(6, 'class', 'btn btn-outline-info btn-block', 'routerLink', '/admin/main/products', 'routerLinkActive', 'active'), null);
        this._RouterLink_10_3 = new import10.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import16.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_10_4 = new import11.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router, this.parentIndex), new import17.ElementRef(this._el_10), this.renderer);
        this._query_RouterLink_10_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_10_1 = new import12.QueryList();
        this._text_11 = this.renderer.createText(this._el_10, '\n            Products\n        ', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_8, 'button', new import3.InlineArray8(6, 'class', 'btn btn-outline-info btn-block', 'routerLink', '/admin/main/orders', 'routerLinkActive', 'active'), null);
        this._RouterLink_13_3 = new import10.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import16.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_13_4 = new import11.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router, this.parentIndex), new import17.ElementRef(this._el_13), this.renderer);
        this._query_RouterLink_13_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_13_1 = new import12.QueryList();
        this._text_14 = this.renderer.createText(this._el_13, '\n            Orders\n        ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'button', new import3.InlineArray2(2, 'class', 'btn btn-outline-danger btn-block'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n            Logout\n        ', null);
        this._text_18 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'col-xs-9'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_22 = new import13.ViewContainer(22, 20, this, this._el_22);
        this._RouterOutlet_22_5 = new import14.Wrapper_RouterOutlet(this.parentView.injectorGet(import18.RouterOutletMap, this.parentIndex), this._vc_22.vcRef, this.parentView.injectorGet(import19.ComponentFactoryResolver, this.parentIndex), null);
        this._text_23 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_6, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_13));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_16));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_AdminComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLink) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLink_10_3.context;
        }
        if (((token === import21.RouterLinkActive) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkActive_10_4.context;
        }
        if (((token === import20.RouterLink) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLink_13_3.context;
        }
        if (((token === import21.RouterLinkActive) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLinkActive_13_4.context;
        }
        if (((token === import22.RouterOutlet) && (22 === requestNodeIndex))) {
            return this._RouterOutlet_22_5.context;
        }
        return notFoundResult;
    };
    View_AdminComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = '/admin/main/products';
        this._RouterLink_10_3.check_routerLink(currVal_10_0_0, throwOnChange, false);
        this._RouterLink_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = 'active';
        this._RouterLinkActive_10_4.check_routerLinkActive(currVal_10_1_0, throwOnChange, false);
        this._RouterLinkActive_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_13_0_0 = '/admin/main/orders';
        this._RouterLink_13_3.check_routerLink(currVal_13_0_0, throwOnChange, false);
        this._RouterLink_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_13_1_0 = 'active';
        this._RouterLinkActive_13_4.check_routerLinkActive(currVal_13_1_0, throwOnChange, false);
        this._RouterLinkActive_13_4.ngDoCheck(this, this._el_13, throwOnChange);
        this._RouterOutlet_22_5.ngDoCheck(this, this._el_22, throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_10_0.dirty) {
                this._query_RouterLink_10_0.reset([this._RouterLink_10_3.context]);
                this._RouterLinkActive_10_4.context.links = this._query_RouterLink_10_0;
                this._query_RouterLink_10_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_10_1.dirty) {
                this._query_RouterLinkWithHref_10_1.reset([]);
                this._RouterLinkActive_10_4.context.linksWithHrefs = this._query_RouterLinkWithHref_10_1;
                this._query_RouterLinkWithHref_10_1.notifyOnChanges();
            }
            if (this._query_RouterLink_13_0.dirty) {
                this._query_RouterLink_13_0.reset([this._RouterLink_13_3.context]);
                this._RouterLinkActive_13_4.context.links = this._query_RouterLink_13_0;
                this._query_RouterLink_13_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_13_1.dirty) {
                this._query_RouterLinkWithHref_13_1.reset([]);
                this._RouterLinkActive_13_4.context.linksWithHrefs = this._query_RouterLinkWithHref_13_1;
                this._query_RouterLinkWithHref_13_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_10_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_13_4.context.ngAfterContentInit();
            }
        }
    };
    View_AdminComponent0.prototype.destroyInternal = function () {
        this._vc_22.destroyNestedViews();
        this._RouterLinkActive_10_4.ngOnDestroy();
        this._RouterLinkActive_13_4.ngOnDestroy();
        this._RouterOutlet_22_5.ngOnDestroy();
    };
    View_AdminComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_10_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AdminComponent0.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_13_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AdminComponent0.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.logout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AdminComponent0;
}(import1.AppView));
