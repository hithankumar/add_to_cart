"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var welcome_service_1 = require("./welcome.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(_welcomeService) {
        this._welcomeService = _welcomeService;
        this.pageTitle = 'Scrum board';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._welcomeService.getScrumBoardItems()
            .subscribe(function (scrumItems) { return _this.scrumBoardItems = scrumItems; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/welcome.component.html'
    }),
    __metadata("design:paramtypes", [welcome_service_1.WelcomeService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map