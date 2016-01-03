/// <reference path='../views.ts'/>
/// <reference path='../viewsCollections.ts'/>
/// <reference path='../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Colistin extends View {
       description = new ColistinDescription();

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
                { result: new Result('3MIU x 3', IResult.resultLevel.normal) },
                { value: 90, result: new Result('3MIU x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result('3MIU x 1', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('3MIU ανά 36h', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class ColistinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Colistin;
        id: string = 'Colistin';
        name: string = 'Κολιστίνη (Colistin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Ειδικές Κατηγορίες'];
        tags: string = '';
    }

    ViewsCollection.add(new ColistinDescription());
}