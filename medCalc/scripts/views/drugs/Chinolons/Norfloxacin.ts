/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Norfloxacin extends View {
       description = new NorfloxacinDescription();

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
                { result: new Result('400mgr x 2', IResult.resultLevel.normal) },
                { value: 80, result: new Result('400mgr x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result('200mgr x 2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('400mgr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class NorfloxacinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Norfloxacin;
        id: string = 'Norfloxacin';
        name: string = 'Νορφλοξασίνη (Norocin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κινολόνες'];
        tags: string = '';
    }

    ViewsCollection.add(new NorfloxacinDescription());
}