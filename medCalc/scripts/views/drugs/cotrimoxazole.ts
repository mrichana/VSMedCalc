/// <reference path='../views.ts'/>
/// <reference path='../viewsCollections.ts'/>
/// <reference path='../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Cotrimoxazole extends View {
       description = new CotrimoxazoleDescription();

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
                { result: new Result('960mgr x 3', IResult.resultLevel.normal) },
                { value: 80, result: new Result('960mgr x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result('960mgr ανά 18h', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('960mgr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CotrimoxazoleDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Cotrimoxazole;
        id: string = 'Cotrimoxazole';
        name: string = 'Κοτριμοξαζόλη';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Ειδικές Κατηγορίες'];
        tags: string = '';
    }

    ViewsCollection.add(new CotrimoxazoleDescription());
}