/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';

    class Penicillin extends View {
        description = new PenicillinDescription();

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
                { result: new Result('0.5-4MU x 6', IResult.resultLevel.normal) },
                { value: 50, result: new Result('0.5-4MU x 3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('0.5-4MU x 2', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class PenicillinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Penicillin;
        id: string = 'Penicillin';
        name: string = 'Πενικιλλίνη G (Penicillin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new PenicillinDescription());
}
