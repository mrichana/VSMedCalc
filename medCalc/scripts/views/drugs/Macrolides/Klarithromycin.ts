/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Klarithromycin extends View {
       description = new KlarithromycinDescription();

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
                { result: new Result('500-1000mgr x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result('500mgr x 2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('250mgr x 2', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class KlarithromycinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Klarithromycin;
        id: string = 'Klarithromycin';
        name: string = 'Κλαριθρομυκίνη (Klaricid)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Μακρολίδες'];
        tags: string = '';
    }

    ViewsCollection.add(new KlarithromycinDescription());
}