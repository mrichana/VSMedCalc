/// <reference path='../views.ts'/>
/// <reference path='../viewsCollections.ts'/>
/// <reference path='../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Metronidazole extends View {
       description = new MetronidazoleDescription();

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
                { result: new Result('500mgr x 3', IResult.resultLevel.normal) },
                { value: 10, result: new Result('250mgr x 3', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class MetronidazoleDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Metronidazole;
        id: string = 'Metronidazole';
        name: string = 'Μετρονιδαζόλη (Flagyl)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Αναερόβια',''];
        tags: string = '';
    }

    ViewsCollection.add(new MetronidazoleDescription());
}