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
var router_1 = require("@angular/router");
var book_1 = require("../models/book");
var book_service_1 = require("../book/book.service");
var AddBookComponent = (function () {
    function AddBookComponent(_router, _bookService) {
        this._router = _router;
        this._bookService = _bookService;
        this.hasValidationErrors = false;
        this.formErrors = '';
        this.book = new book_1.Book();
    }
    AddBookComponent.prototype.save = function () {
        try {
            //this._bookService.save(this.book);
            throw new Error("Wrong");
        }
        catch (ex) {
            var test = ex;
        }
    };
    AddBookComponent.prototype.cancel = function () {
        this._router.navigate(['/home']);
    };
    return AddBookComponent;
}());
AddBookComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/book/addBook.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, book_service_1.BookService])
], AddBookComponent);
exports.AddBookComponent = AddBookComponent;
//# sourceMappingURL=addBook.component.js.map