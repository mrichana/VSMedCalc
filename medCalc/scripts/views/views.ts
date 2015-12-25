/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/mathjs/mathjs.d.ts"/>
/// <reference path="../typings/underscore/underscore.d.ts"/>

module CalculatorViews {
    'use strict';
    interface array<T> {

    };

    export class TagDescription {
        name: string;
        type: string = 'tag';
        viewsCollection: _.Dictionary<IView> = {};
    }

    export interface IViewDescriptions {
        views: _.Dictionary<IView>;
        categories: { [category: string]: _.Dictionary<IView> };
        tags: { [tag: string]: TagDescription };
    }

    export interface IViewDescription {
        id: string;
        name: string;
        category: string;
        tags: string;
        isHelper?: boolean;
        factory(values?: any): IView;
    }

    export interface IView {
        description: IViewDescription;
        template: string;
        defaultValues: any;

        fields: IField[];
        external: IField[];

        values: any;

        init(): void;
        reset(): void;
        update(): Result;
        validate(newValue: any, oldValue: any, scope: ng.IScope, field: IField): void;

        calculator(values: any): Result;
        result: Result;
    }

    export interface IResult {
        result: any;
        explanation: string;
        resultlevel: IResult.resultLevel;

        prefix: string;
        suffix: string;

        formula: string;
    }
    export module IResult {

        export class resultLevel {
            static get none() {
                return 'resultlevel-none';
            }   

            
            static get normal() {
                return 'resultlevel-normal';
            }

            static get intermediate() {
                return 'resultlevel-intermediate';
            }

            static get abnormal() {
                return 'resultlevel-abnormal';
            }
        }
    };

    export class viewsCollection {
        private static __viewDescriptions: _.Dictionary<IViewDescription> = {};

        static add(viewDescription: IViewDescription): void {
            viewsCollection.__viewDescriptions[viewDescription.id] = viewDescription;
        };

        private _views: _.Dictionary<IView> = {};
        private _tags: _.Dictionary<TagDescription> = {};
        private _categories: _.Dictionary<_.Dictionary < IView >>  = { };

        constructor(values: any) {
            _.each(viewsCollection.__viewDescriptions, (viewDescription: IViewDescription) => {
                var view = viewDescription.factory(values);
                _.each(view.fields, function (field) {
                    if (field.calculator) {
                        var calculator = viewsCollection.__viewDescriptions[field.calculator];
                        if (calculator) {
                            field.calculatorView = calculator.factory(values);
                        }
                    }
                });
                this._views[view.description.id] = view;
                viewsCollection.__prepareTags(view, this._tags);
                viewsCollection.__prepareCategories(view, this._categories);
            });
        };

        private static __prepareCategories(view: IView, categories: _.Dictionary<_.Dictionary<IView>> = {}): _.Dictionary<_.Dictionary<IView>> {
            if (!view.description.isHelper && view.description.category) {
                if (!_.has(categories, view.description.category)) {
                    categories[view.description.category] = {};
                } 
                categories[view.description.category][view.description.id] = view;
            }
            return categories;        
        }

        private static __prepareTags(view: IView, tags: _.Dictionary<TagDescription> = {}): _.Dictionary<TagDescription> {
            var tagNames = view.description.tags?view.description.tags.split('\\'):[];
            tagNames.push(view.description.name);
            _.each(tagNames, (tag: string) => {
                if (!_.has(tags, tag)) {
                    tags[tag] = new TagDescription();
                    tags[tag].name = tag;
                    if (tag == view.description.name) {
                        tags[tag].type = 'calculator';
                    } else if (tag == view.description.category) {
                        tags[tag].type = 'category';
                    }
                }
                tags[tag].viewsCollection[view.description.id] = view;
            });
            return tags;
        }

        get views() {
            return this._views;
        };
        get categories() {
            return this._categories;
        };

        get tags() {
            return this._tags;
        };

        get allViewDescriptions(): IViewDescriptions {
            return {
                views: this.views,
                categories: this.categories, 
                tags: this.tags
            };
        }

        private filterCache: _.Dictionary<IViewDescriptions> = {};
        private filterCacheFunc(filterString: string): _.Dictionary<IView> {
            if (!filterString) return this.views;
            if (_.has(this.filterCache, filterString)) return this.filterCache[filterString].views;
            return this.filterCacheFunc(filterString.slice(0, -1));

        };
        filter(filterString: string): IViewDescriptions {
            var ret: IViewDescriptions;
            if (filterString) {
                filterString = filterString.toLocaleLowerCase();

                if (_.has(this.filterCache, filterString)) {
                    return this.filterCache[filterString];
                }

                var regex = new RegExp(filterString, 'i');

                var tags: _.Dictionary<TagDescription> = {};
                var categories: { [category: string]: _.Dictionary<IView> } = {};
                var views = _.pick(this.filterCacheFunc(filterString), function (view: IView) {
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
            } else {
                var views = _.omit(this.views, function (view: IView) {
                    return view.description.isHelper;
                });
                ret = {
                    views: views,
                    categories: this.categories,
                    tags: this.tags
                };
            };
            return ret;
        };
    };

    export class ViewDescription {
        type: typeof View;
        factory(values?: any): IView {
            var ret: View = new this.type(values);
            ret.init();
            ret.result = ret.update();

            return ret;
        }

    }

    export class Result implements IResult {
        result: any;
        explanation: string;
        resultlevel: IResult.resultLevel = IResult.resultLevel.none;

        prefix: string = '';
        suffix: string = '';

        formula: string;
    }

    export class View implements IView {
        description: IViewDescription;
        template: string;
        defaultValues: any;

        fields: IField[];
        external: IField[];

        values: any;

        result: Result;

        constructor(values?: any) {
            this.values = values || {};
        }

        init() {
            _.defaults(this.values, this.defaultValues);
        }

        reset() {
            _.extend(this.values, this.defaultValues);
        }

        update() {
            var result = this.calculator(this.values);
            this.values[this.description.id] = result.result;
            return result;
        }

        validate(newValue: any, oldValue: any, scope: ng.IScope, field: IField) {
        }

        static roundNum(thisNum: number, dec?: number): number {
            dec = dec || 0;
            thisNum = thisNum * Math.pow(10, dec);
            thisNum = Math.round(thisNum);
            thisNum = thisNum / Math.pow(10, dec);
            return thisNum;
        };

        static evaluator(scope, formula) {
            return math.compile(formula).eval(scope);
        };

        static formulaEvaluator(scope: any, formula: string) {
            var items = _.keys(scope);
            _.each(items, (item) => {
                formula = formula.replace(item, scope[item]);
            });
            return math.parse(formula).toTex({ parenthesis: 'auto'});
        };

        calculator(values) {
            return new Result();
        }
    }

    interface IFieldInput {
        type: string;
        max?: number;
        min?: number;
        step?: number;
        options?: any[];
    }

    export interface IField {
        id: string;
        name?: string;
        description?: string;
        input: IFieldInput;
        calculator?: string;
        calculatorView?: IView;
        url?: string;
    }

    export class GeneralField implements IField {
        id: string;
        name: string;
        input: IFieldInput;
        constructor(id: string, name: string, input: IFieldInput) {
            this.id = id;
            this.name = name;
            this.input = input;
        }
    }

    export var ageField = new GeneralField('Age', 'Ηλικία', { type: 'number', step: 1, min: 1, max: 120 });
    export var sexField = new GeneralField('Sex', 'Φύλο', { type: 'select', options: [{ value: 0, name: '♂ Άρρεν' }, { value: 1, name: '♀ Θήλυ' }] });
    export var heightField = new GeneralField('Height', 'Ύψος (cm)', { type: 'number', step: 1, min: 0, max: 250 });
    export var weightField = new GeneralField('Weight', 'Βάρος (kgr)', { type: 'number', step: 1, min: 0, max: 250 });
    export var bloodPressure_SystolicField = new GeneralField('BloodPressure_Systolic', 'Συστολική Αρτηριακή Πίεση', { type: 'number', step: 5, min: 50, max: 280 });
    export var resultField = new GeneralField('result', '', { type: 'result' });
}
