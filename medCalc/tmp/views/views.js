var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    ;
    var TagDescription = (function () {
        function TagDescription() {
            this.type = 'tag';
            this.viewsCollection = {};
        }
        return TagDescription;
    })();
    CalculatorViews.TagDescription = TagDescription;
    var IResult;
    (function (IResult) {
        var resultLevel = (function () {
            function resultLevel() {
            }
            Object.defineProperty(resultLevel, "none", {
                get: function () {
                    return 'resultlevel-none';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(resultLevel, "normal", {
                get: function () {
                    return 'resultlevel-normal';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(resultLevel, "intermediate", {
                get: function () {
                    return 'resultlevel-intermediate';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(resultLevel, "abnormal", {
                get: function () {
                    return 'resultlevel-abnormal';
                },
                enumerable: true,
                configurable: true
            });
            return resultLevel;
        })();
        IResult.resultLevel = resultLevel;
    })(IResult = CalculatorViews.IResult || (CalculatorViews.IResult = {}));
    ;
    var viewsCollection = (function () {
        function viewsCollection(values) {
            var _this = this;
            this._views = {};
            this._tags = {};
            this._categories = {};
            this.filterCache = {};
            _.each(viewsCollection.__viewDescriptions, function (viewDescription) {
                var view = viewDescription.factory(values);
                _.each(view.fields, function (field) {
                    if (field.calculator) {
                        var calculator = viewsCollection.__viewDescriptions[field.calculator];
                        if (calculator) {
                            field.calculatorView = calculator.factory(values);
                        }
                    }
                });
                _this._views[view.description.id] = view;
                viewsCollection.__prepareTags(view, _this._tags);
                viewsCollection.__prepareCategories(view, _this._categories);
            });
        }
        viewsCollection.add = function (viewDescription) {
            viewsCollection.__viewDescriptions[viewDescription.id] = viewDescription;
        };
        ;
        ;
        viewsCollection.__prepareCategories = function (view, categories) {
            if (categories === void 0) { categories = {}; }
            if (!view.description.isHelper && view.description.category) {
                if (!_.has(categories, view.description.category)) {
                    categories[view.description.category] = {};
                }
                categories[view.description.category][view.description.id] = view;
            }
            return categories;
        };
        viewsCollection.__prepareTags = function (view, tags) {
            if (tags === void 0) { tags = {}; }
            var tagNames = view.description.tags ? view.description.tags.split('\\') : [];
            tagNames.push(view.description.name);
            _.each(tagNames, function (tag) {
                if (!_.has(tags, tag)) {
                    tags[tag] = new TagDescription();
                    tags[tag].name = tag;
                    if (tag == view.description.name) {
                        tags[tag].type = 'calculator';
                    }
                    else if (tag == view.description.category) {
                        tags[tag].type = 'category';
                    }
                }
                tags[tag].viewsCollection[view.description.id] = view;
            });
            return tags;
        };
        Object.defineProperty(viewsCollection.prototype, "views", {
            get: function () {
                return this._views;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(viewsCollection.prototype, "categories", {
            get: function () {
                return this._categories;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(viewsCollection.prototype, "tags", {
            get: function () {
                return this._tags;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(viewsCollection.prototype, "allViewDescriptions", {
            get: function () {
                return {
                    views: this.views,
                    categories: this.categories,
                    tags: this.tags
                };
            },
            enumerable: true,
            configurable: true
        });
        viewsCollection.prototype.filterCacheFunc = function (filterString) {
            if (!filterString)
                return this.views;
            if (_.has(this.filterCache, filterString))
                return this.filterCache[filterString].views;
            return this.filterCacheFunc(filterString.slice(0, -1));
        };
        ;
        viewsCollection.prototype.filter = function (filterString) {
            var ret;
            if (filterString) {
                filterString = filterString.toLocaleLowerCase();
                if (_.has(this.filterCache, filterString)) {
                    return this.filterCache[filterString];
                }
                var regex = new RegExp(filterString, 'i');
                var tags = {};
                var categories = {};
                var views = _.pick(this.filterCacheFunc(filterString), function (view) {
                    if (view.description.isHelper) {
                        return false;
                    }
                    if (regex.test(view.description.name) || regex.test(view.description.category) || regex.test(view.description.tags)) {
                        viewsCollection.__prepareTags(view, tags);
                        viewsCollection.__prepareCategories(view, categories);
                        return true;
                    }
                    return false;
                });
                ret = {
                    views: views,
                    categories: categories,
                    tags: tags
                };
                this.filterCache[filterString] = ret;
            }
            else {
                var views = _.omit(this.views, function (view) {
                    return view.description.isHelper;
                });
                ret = {
                    views: views,
                    categories: this.categories,
                    tags: this.tags
                };
            }
            ;
            return ret;
        };
        ;
        viewsCollection.__viewDescriptions = {};
        return viewsCollection;
    })();
    CalculatorViews.viewsCollection = viewsCollection;
    ;
    var ViewDescription = (function () {
        function ViewDescription() {
        }
        ViewDescription.prototype.factory = function (values) {
            var ret = new this.type(values);
            ret.init();
            ret.result = ret.update();
            return ret;
        };
        return ViewDescription;
    })();
    CalculatorViews.ViewDescription = ViewDescription;
    var Result = (function () {
        function Result() {
            this.resultlevel = IResult.resultLevel.none;
            this.prefix = '';
            this.suffix = '';
        }
        return Result;
    })();
    CalculatorViews.Result = Result;
    var View = (function () {
        function View(values) {
            this.values = values || {};
        }
        View.prototype.init = function () {
            _.defaults(this.values, this.defaultValues);
        };
        View.prototype.reset = function () {
            _.extend(this.values, this.defaultValues);
        };
        View.prototype.update = function () {
            var result = this.calculator(this.values);
            this.values[this.description.id] = result.result;
            return result;
        };
        View.prototype.validate = function (newValue, oldValue, scope, field) {
        };
        View.roundNum = function (thisNum, dec) {
            dec = dec || 0;
            thisNum = thisNum * Math.pow(10, dec);
            thisNum = Math.round(thisNum);
            thisNum = thisNum / Math.pow(10, dec);
            return thisNum;
        };
        ;
        View.evaluator = function (scope, formula) {
            return math.compile(formula).eval(scope);
        };
        ;
        View.formulaEvaluator = function (scope, formula) {
            var items = _.keys(scope);
            _.each(items, function (item) {
                formula = formula.replace(item, scope[item]);
            });
            return math.parse(formula).toTex({ parenthesis: 'auto' });
        };
        ;
        View.prototype.calculator = function (values) {
            return new Result();
        };
        return View;
    })();
    CalculatorViews.View = View;
    var GeneralField = (function () {
        function GeneralField(id, name, input) {
            this.id = id;
            this.name = name;
            this.input = input;
        }
        return GeneralField;
    })();
    CalculatorViews.GeneralField = GeneralField;
    CalculatorViews.ageField = new GeneralField('Age', 'Ηλικία', { type: 'number', step: 1, min: 1, max: 120 });
    CalculatorViews.sexField = new GeneralField('Sex', 'Φύλο', { type: 'select', options: [{ value: 0, name: '♂ Άρρεν' }, { value: 1, name: '♀ Θήλυ' }] });
    CalculatorViews.heightField = new GeneralField('Height', 'Ύψος (cm)', { type: 'number', step: 1, min: 0, max: 250 });
    CalculatorViews.weightField = new GeneralField('Weight', 'Βάρος (kgr)', { type: 'number', step: 1, min: 0, max: 250 });
    CalculatorViews.bloodPressure_SystolicField = new GeneralField('BloodPressure_Systolic', 'Συστολική Αρτηριακή Πίεση', { type: 'number', step: 5, min: 50, max: 280 });
    CalculatorViews.resultField = new GeneralField('result', '', { type: 'result' });
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zY3JpcHRzL3ZpZXdzL3ZpZXdzLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5UYWdEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UYWdEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5JUmVzdWx0IiwiQ2FsY3VsYXRvclZpZXdzLklSZXN1bHQucmVzdWx0TGV2ZWwiLCJDYWxjdWxhdG9yVmlld3MuSVJlc3VsdC5yZXN1bHRMZXZlbC5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5JUmVzdWx0LnJlc3VsdExldmVsLm5vbmUiLCJDYWxjdWxhdG9yVmlld3MuSVJlc3VsdC5yZXN1bHRMZXZlbC5ub3JtYWwiLCJDYWxjdWxhdG9yVmlld3MuSVJlc3VsdC5yZXN1bHRMZXZlbC5pbnRlcm1lZGlhdGUiLCJDYWxjdWxhdG9yVmlld3MuSVJlc3VsdC5yZXN1bHRMZXZlbC5hYm5vcm1hbCIsIkNhbGN1bGF0b3JWaWV3cy52aWV3c0NvbGxlY3Rpb24iLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLnZpZXdzQ29sbGVjdGlvbi5hZGQiLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLl9fX3ByZXBhcmVDYXRlZ29yaWVzIiwiQ2FsY3VsYXRvclZpZXdzLnZpZXdzQ29sbGVjdGlvbi5fX19wcmVwYXJlVGFncyIsIkNhbGN1bGF0b3JWaWV3cy52aWV3c0NvbGxlY3Rpb24udmlld3MiLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLmNhdGVnb3JpZXMiLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLnRhZ3MiLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLmFsbFZpZXdEZXNjcmlwdGlvbnMiLCJDYWxjdWxhdG9yVmlld3Mudmlld3NDb2xsZWN0aW9uLmZpbHRlckNhY2hlRnVuYyIsIkNhbGN1bGF0b3JWaWV3cy52aWV3c0NvbGxlY3Rpb24uZmlsdGVyIiwiQ2FsY3VsYXRvclZpZXdzLlZpZXdEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5WaWV3RGVzY3JpcHRpb24uY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVmlld0Rlc2NyaXB0aW9uLmZhY3RvcnkiLCJDYWxjdWxhdG9yVmlld3MuUmVzdWx0IiwiQ2FsY3VsYXRvclZpZXdzLlJlc3VsdC5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5WaWV3IiwiQ2FsY3VsYXRvclZpZXdzLlZpZXcuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVmlldy5pbml0IiwiQ2FsY3VsYXRvclZpZXdzLlZpZXcucmVzZXQiLCJDYWxjdWxhdG9yVmlld3MuVmlldy51cGRhdGUiLCJDYWxjdWxhdG9yVmlld3MuVmlldy52YWxpZGF0ZSIsIkNhbGN1bGF0b3JWaWV3cy5WaWV3LnJvdW5kTnVtIiwiQ2FsY3VsYXRvclZpZXdzLlZpZXcuZXZhbHVhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlZpZXcuZm9ybXVsYUV2YWx1YXRvciIsIkNhbGN1bGF0b3JWaWV3cy5WaWV3LmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuR2VuZXJhbEZpZWxkIiwiQ2FsY3VsYXRvclZpZXdzLkdlbmVyYWxGaWVsZC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBSUEsSUFBTyxlQUFlLENBZ1VyQjtBQWhVRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUdaQSxDQUFDQTtJQUVGQTtRQUFBQztZQUVJQyxTQUFJQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUNyQkEsb0JBQWVBLEdBQXdCQSxFQUFFQSxDQUFDQTtRQUM5Q0EsQ0FBQ0E7UUFBREQscUJBQUNBO0lBQURBLENBQUNBLEFBSkRELElBSUNBO0lBSllBLDhCQUFjQSxpQkFJMUJBLENBQUFBO0lBOENEQSxJQUFjQSxPQUFPQSxDQW9CcEJBO0lBcEJEQSxXQUFjQSxPQUFPQSxFQUFDQSxDQUFDQTtRQUVuQkc7WUFBQUM7WUFpQkFDLENBQUNBO1lBaEJHRCxzQkFBV0EsbUJBQUlBO3FCQUFmQTtvQkFDSUUsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtnQkFDOUJBLENBQUNBOzs7ZUFBQUY7WUFHREEsc0JBQVdBLHFCQUFNQTtxQkFBakJBO29CQUNJRyxNQUFNQSxDQUFDQSxvQkFBb0JBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7OztlQUFBSDtZQUVEQSxzQkFBV0EsMkJBQVlBO3FCQUF2QkE7b0JBQ0lJLE1BQU1BLENBQUNBLDBCQUEwQkEsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTs7O2VBQUFKO1lBRURBLHNCQUFXQSx1QkFBUUE7cUJBQW5CQTtvQkFDSUssTUFBTUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQTtnQkFDbENBLENBQUNBOzs7ZUFBQUw7WUFDTEEsa0JBQUNBO1FBQURBLENBQUNBLEFBakJERCxJQWlCQ0E7UUFqQllBLG1CQUFXQSxjQWlCdkJBLENBQUFBO0lBQ0xBLENBQUNBLEVBcEJhSCxPQUFPQSxHQUFQQSx1QkFBT0EsS0FBUEEsdUJBQU9BLFFBb0JwQkE7SUFBQUEsQ0FBQ0E7SUFFRkE7UUFXSVUseUJBQVlBLE1BQVdBO1lBWDNCQyxpQkE0SENBO1lBckhXQSxXQUFNQSxHQUF3QkEsRUFBRUEsQ0FBQ0E7WUFDakNBLFVBQUtBLEdBQWlDQSxFQUFFQSxDQUFDQTtZQUN6Q0EsZ0JBQVdBLEdBQTBDQSxFQUFHQSxDQUFDQTtZQWtFekRBLGdCQUFXQSxHQUFvQ0EsRUFBRUEsQ0FBQ0E7WUEvRHREQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxrQkFBa0JBLEVBQUVBLFVBQUNBLGVBQWlDQTtnQkFDekVBLElBQUlBLElBQUlBLEdBQUdBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsS0FBS0E7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN0RSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNiLEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEQsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUMsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO2dCQUN4Q0EsZUFBZUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hEQSxlQUFlQSxDQUFDQSxtQkFBbUJBLENBQUNBLElBQUlBLEVBQUVBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1lBQ2hFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQXZCTUQsbUJBQUdBLEdBQVZBLFVBQVdBLGVBQWlDQTtZQUN4Q0UsZUFBZUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxlQUFlQSxDQUFDQTtRQUM3RUEsQ0FBQ0E7OztRQXVCY0YsbUNBQW1CQSxHQUFsQ0EsVUFBbUNBLElBQVdBLEVBQUVBLFVBQWtEQTtZQUFsREcsMEJBQWtEQSxHQUFsREEsZUFBa0RBO1lBQzlGQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNoREEsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQy9DQSxDQUFDQTtnQkFDREEsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDdEVBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUVjSCw2QkFBYUEsR0FBNUJBLFVBQTZCQSxJQUFXQSxFQUFFQSxJQUF1Q0E7WUFBdkNJLG9CQUF1Q0EsR0FBdkNBLFNBQXVDQTtZQUM3RUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDMUVBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3JDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxHQUFXQTtnQkFDekJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ2pDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtvQkFDckJBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsWUFBWUEsQ0FBQ0E7b0JBQ2xDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFVQSxDQUFDQTtvQkFDaENBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFDREEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDMURBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUVESixzQkFBSUEsa0NBQUtBO2lCQUFUQTtnQkFDSUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDdkJBLENBQUNBOzs7V0FBQUw7O1FBQ0RBLHNCQUFJQSx1Q0FBVUE7aUJBQWRBO2dCQUNJTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUM1QkEsQ0FBQ0E7OztXQUFBTjs7UUFFREEsc0JBQUlBLGlDQUFJQTtpQkFBUkE7Z0JBQ0lPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3RCQSxDQUFDQTs7O1dBQUFQOztRQUVEQSxzQkFBSUEsZ0RBQW1CQTtpQkFBdkJBO2dCQUNJUSxNQUFNQSxDQUFDQTtvQkFDSEEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0E7b0JBQ2pCQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQTtvQkFDM0JBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBO2lCQUNsQkEsQ0FBQ0E7WUFDTkEsQ0FBQ0E7OztXQUFBUjtRQUdPQSx5Q0FBZUEsR0FBdkJBLFVBQXdCQSxZQUFvQkE7WUFDeENTLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBO2dCQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Z0JBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3ZGQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUUzREEsQ0FBQ0E7O1FBQ0RULGdDQUFNQSxHQUFOQSxVQUFPQSxZQUFvQkE7WUFDdkJVLElBQUlBLEdBQXNCQSxDQUFDQTtZQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLFlBQVlBLEdBQUdBLFlBQVlBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7Z0JBRWhEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dCQUUxQ0EsSUFBSUEsSUFBSUEsR0FBaUNBLEVBQUVBLENBQUNBO2dCQUM1Q0EsSUFBSUEsVUFBVUEsR0FBZ0RBLEVBQUVBLENBQUNBO2dCQUNqRUEsSUFBSUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsVUFBVUEsSUFBV0E7b0JBQ3hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xILGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLEdBQUdBLEdBQUdBO29CQUNGQSxLQUFLQSxFQUFFQSxLQUFLQTtvQkFDWkEsVUFBVUEsRUFBRUEsVUFBVUE7b0JBQ3RCQSxJQUFJQSxFQUFFQSxJQUFJQTtpQkFDYkEsQ0FBQ0E7Z0JBQ0ZBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1lBQ3pDQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsSUFBSUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsSUFBV0E7b0JBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDSEEsR0FBR0EsR0FBR0E7b0JBQ0ZBLEtBQUtBLEVBQUVBLEtBQUtBO29CQUNaQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQTtvQkFDM0JBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBO2lCQUNsQkEsQ0FBQ0E7WUFDTkEsQ0FBQ0E7WUFBQUEsQ0FBQ0E7WUFDRkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7O1FBMUhjVixrQ0FBa0JBLEdBQW1DQSxFQUFFQSxDQUFDQTtRQTJIM0VBLHNCQUFDQTtJQUFEQSxDQUFDQSxBQTVIRFYsSUE0SENBO0lBNUhZQSwrQkFBZUEsa0JBNEgzQkEsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFFRkE7UUFBQXFCO1FBVUFDLENBQUNBO1FBUkdELGlDQUFPQSxHQUFQQSxVQUFRQSxNQUFZQTtZQUNoQkUsSUFBSUEsR0FBR0EsR0FBU0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDdENBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ1hBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1lBRTFCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUVMRixzQkFBQ0E7SUFBREEsQ0FBQ0EsQUFWRHJCLElBVUNBO0lBVllBLCtCQUFlQSxrQkFVM0JBLENBQUFBO0lBRURBO1FBQUF3QjtZQUdJQyxnQkFBV0EsR0FBd0JBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBO1lBRTVEQSxXQUFNQSxHQUFXQSxFQUFFQSxDQUFDQTtZQUNwQkEsV0FBTUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFHeEJBLENBQUNBO1FBQURELGFBQUNBO0lBQURBLENBQUNBLEFBVER4QixJQVNDQTtJQVRZQSxzQkFBTUEsU0FTbEJBLENBQUFBO0lBRURBO1FBWUkwQixjQUFZQSxNQUFZQTtZQUNwQkMsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBRURELG1CQUFJQSxHQUFKQTtZQUNJRSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7UUFFREYsb0JBQUtBLEdBQUxBO1lBQ0lHLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQzlDQSxDQUFDQTtRQUVESCxxQkFBTUEsR0FBTkE7WUFDSUksSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO1lBQ2pEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNsQkEsQ0FBQ0E7UUFFREosdUJBQVFBLEdBQVJBLFVBQVNBLFFBQWFBLEVBQUVBLFFBQWFBLEVBQUVBLEtBQWdCQSxFQUFFQSxLQUFhQTtRQUN0RUssQ0FBQ0E7UUFFTUwsYUFBUUEsR0FBZkEsVUFBZ0JBLE9BQWVBLEVBQUVBLEdBQVlBO1lBQ3pDTSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxHQUFHQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN0Q0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLE9BQU9BLEdBQUdBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3RDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUNuQkEsQ0FBQ0E7O1FBRU1OLGNBQVNBLEdBQWhCQSxVQUFpQkEsS0FBS0EsRUFBRUEsT0FBT0E7WUFDM0JPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzdDQSxDQUFDQTs7UUFFTVAscUJBQWdCQSxHQUF2QkEsVUFBd0JBLEtBQVVBLEVBQUVBLE9BQWVBO1lBQy9DUSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUMxQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsSUFBSUE7Z0JBQ2ZBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pEQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxXQUFXQSxFQUFFQSxNQUFNQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUM3REEsQ0FBQ0E7O1FBRURSLHlCQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtZQUNiUyxNQUFNQSxDQUFDQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFDTFQsV0FBQ0E7SUFBREEsQ0FBQ0EsQUF4REQxQixJQXdEQ0E7SUF4RFlBLG9CQUFJQSxPQXdEaEJBLENBQUFBO0lBb0JEQTtRQUlJb0Msc0JBQVlBLEVBQVVBLEVBQUVBLElBQVlBLEVBQUVBLEtBQWtCQTtZQUNwREMsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDYkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUNMRCxtQkFBQ0E7SUFBREEsQ0FBQ0EsQUFURHBDLElBU0NBO0lBVFlBLDRCQUFZQSxlQVN4QkEsQ0FBQUE7SUFFVUEsd0JBQVFBLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLEVBQUVBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO0lBQzVGQSx3QkFBUUEsR0FBR0EsSUFBSUEsWUFBWUEsQ0FBQ0EsS0FBS0EsRUFBRUEsTUFBTUEsRUFBRUEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsT0FBT0EsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDdklBLDJCQUFXQSxHQUFHQSxJQUFJQSxZQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNyR0EsMkJBQVdBLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLGFBQWFBLEVBQUVBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO0lBQ3ZHQSwyQ0FBMkJBLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLHdCQUF3QkEsRUFBRUEsMkJBQTJCQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUN0SkEsMkJBQVdBLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBO0FBQ2hGQSxDQUFDQSxFQWhVTSxlQUFlLEtBQWYsZUFBZSxRQWdVckIifQ==