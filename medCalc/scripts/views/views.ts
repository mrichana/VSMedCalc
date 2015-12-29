/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/mathjs/mathjs.d.ts"/>
/// <reference path="../typings/underscore/underscore.d.ts"/>

module CalculatorViews {
    'use strict';

    export interface IViewDescription {
        id: string;
        name: string;
        category: string[];
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
