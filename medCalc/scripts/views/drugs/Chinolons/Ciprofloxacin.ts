/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Ciprofloxacin extends View {
       description = new CiprofloxacinDescription();

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
                { result: new Result('500-750mgr x 2', IResult.resultLevel.normal, 'ή 400mgr x 2-3 IV') },
                { value: 90, result: new Result('500-750mgr x 2', IResult.resultLevel.normal, 'ή 400mgr x 2 IV') },
                { value: 50, result: new Result('250-500mgr x 2', IResult.resultLevel.intermediate, 'ή 400mgr x 1 IV') },
                { value: 10, result: new Result('250 x 2', IResult.resultLevel.abnormal, 'ή 400mgr x 1 IV') }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CiprofloxacinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Ciprofloxacin;
        id: string = 'Ciprofloxacin';
        name: string = 'Σιπροφλοξασίνη (Ciproxin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κινολόνες'];
        tags: string = '';
    }

    ViewsCollection.add(new CiprofloxacinDescription());
}