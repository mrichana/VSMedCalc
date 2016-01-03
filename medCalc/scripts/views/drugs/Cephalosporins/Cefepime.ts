/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Cefepime extends View {
       description = new CefepimeDescription();

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
                { result: new Result('2gr x 3', IResult.resultLevel.normal) },
                { value: 90, result: new Result('2gr x 2-3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('2gr x 1', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('1gr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CefepimeDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Cefepime;
        id: string = 'Cefepime';
        name: string = 'Κεφεπίμη (Maxipime)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κεφαλοσπορίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new CefepimeDescription());
}