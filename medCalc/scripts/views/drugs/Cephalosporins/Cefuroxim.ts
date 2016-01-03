/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Cefuroxim extends View {
       description = new CefuroximDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            GFR: 73
        };
        fields: IField[] = [
            {
               id: 'GFR',
                name: 'GFR',
                calculator: 'GFR',
                input: {
                    type: 'number',
                    step: 1,
                    min: 0,
                    max: 250
                }
            },
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('0.75-1.5gr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('0.75-1.5gr x 2-3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('0.75-1.5gr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CefuroximDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Cefuroxim;
        id: string = 'Cefuroxim';
        name: string = 'Κεφουροξίμη (Zetagal)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κεφαλοσπορίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new CefuroximDescription());
}