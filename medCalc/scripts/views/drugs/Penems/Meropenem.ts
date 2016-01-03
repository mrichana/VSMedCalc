/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Meropenem extends View {
       description = new MeropenemDescription();

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
                { result: new Result('1gr x 3', IResult.resultLevel.normal) },
                { value: 80, result: new Result('1gr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('1gr x 2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('500mgr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class MeropenemDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Meropenem;
        id: string = 'Meropenem';
        name: string = 'Μεροπενέμη (Meronem)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενέμες'];
        tags: string = '';
    }

    ViewsCollection.add(new MeropenemDescription());
}