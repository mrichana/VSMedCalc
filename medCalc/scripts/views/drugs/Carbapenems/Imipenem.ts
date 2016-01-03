/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Imipenem extends View {
       description = new ImipenemDescription();

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
                { result: new Result('500mgr x 4', IResult.resultLevel.normal) },
                { value: 90, result: new Result('250-500mgr x 3-4', IResult.resultLevel.normal) },
                { value: 50, result: new Result('250mgr x 2-3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('125-250mgr x 2', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class ImipenemDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Imipenem;
        id: string = 'Imipenem';
        name: string = 'Ιμιπενέμη (Primaxin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Καρβαπενέμες'];
        tags: string = '';
    }

    ViewsCollection.add(new ImipenemDescription());
}