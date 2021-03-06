/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';
    class TicarcillinClavulanic extends View {
        description = new TicarcillinClavulanicDescription();

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
                { result: new Result('3.1gr x 6', IResult.resultLevel.normal) },
                { value: 50, result: new Result('3.1gr x 2-3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('2gr x 2', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class TicarcillinClavulanicDescription extends ViewDescription implements IViewDescription {
        type: typeof View = TicarcillinClavulanic;
        id: string = 'TicarcillinClavulanic';
        name: string = 'Τικαρκιλλίνη/Κλαβουλανικό (Timentin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new TicarcillinClavulanicDescription());
}