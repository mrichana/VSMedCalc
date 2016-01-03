/// <reference path='../views.ts'/>
/// <reference path='../viewsCollections.ts'/>
/// <reference path='../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Rifampicin extends View {
       description = new RifampicinDescription();

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
                { result: new Result('600mgr x 1', IResult.resultLevel.normal) },
                { value: 50, result: new Result('300-600mgr x 1', IResult.resultLevel.intermediate) },
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class RifampicinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Rifampicin;
        id: string = 'Rifampicin';
        name: string = 'Ριφαμπικίνη (Rifadin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Ειδικές Κατηγορίες'];
        tags: string = '';
    }

    ViewsCollection.add(new RifampicinDescription());
}