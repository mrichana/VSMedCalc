/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Levofloxacin extends View {
       description = new LevofloxacinDescription();

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
                { result: new Result('750mgr x 1', IResult.resultLevel.normal) },
                { value: 50, result: new Result('750mgr ανά 48h ', IResult.resultLevel.intermediate) },
                { value: 20, result: new Result('750mg άπαξ και 500mgr ανά 48h ', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class LevofloxacinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Levofloxacin;
        id: string = 'Levofloxacin';
        name: string = 'Λεβοφλοξασίνη (Tavanic)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κινολόνες'];
        tags: string = '';
    }

    ViewsCollection.add(new LevofloxacinDescription());
}