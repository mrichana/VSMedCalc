/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';
    class Aztreonam extends View {
        description = new AztreonamDescription();

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
                { result: new Result('2gr x 3', IResult.resultLevel.normal) },
                { value: 80, result: new Result('2gr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('1-1.5gr x 3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('0.5gr x 3', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AztreonamDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Aztreonam;
        id: string = 'Aztreonam';
        name: string = 'Αζτρεονάμη (Azactam)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new AztreonamDescription());
}