/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Fluconazole extends View {
       description = new FluconazoleDescription();

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
                { result: new Result('100-400mgr x 1', IResult.resultLevel.normal) },
                { value: 50, result: new Result('100-200mgr x 1', IResult.resultLevel.intermediate) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class FluconazoleDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Fluconazole;
        id: string = 'Fluconazole';
        name: string = 'Φλουκοναζόλη (Fungostatin)';
        category: string[] = ['Φάρμακα', 'Αντιμυκητισιακά'];
        tags: string = '';
    }

    ViewsCollection.add(new FluconazoleDescription());
}