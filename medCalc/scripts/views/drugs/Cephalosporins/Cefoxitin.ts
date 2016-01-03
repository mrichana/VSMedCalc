/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Cefoxitin extends View {
       description = new CefoxitinDescription();

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
                { value: 80, result: new Result('2gr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('2gr ανά 12h-48h', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('2gr ανά 24h-48h', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CefoxitinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Cefoxitin;
        id: string = 'Cefoxitin';
        name: string = 'Κεφοξιτίνη (Mefoxil)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κεφαλοσπορίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new CefoxitinDescription());
}