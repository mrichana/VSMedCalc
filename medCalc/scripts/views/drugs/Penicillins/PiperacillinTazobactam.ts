/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';
    class PiperacillinTazobactam extends View {
        description = new PiperacillinTazobactamDescription();

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
                { result: new Result('4.5gr x 3-4', IResult.resultLevel.normal) },
                { value: 80, result: new Result('4.5gr x 3-4', IResult.resultLevel.normal) },
                { value: 50, result: new Result('2.25gr x 3-4', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('2.25gr x 3', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class PiperacillinTazobactamDescription extends ViewDescription implements IViewDescription {
        type: typeof View = PiperacillinTazobactam;
        id: string = 'PiperacillinTazobactam';
        name: string = 'Πιπερακιλλίνη/Ταζομπακτάμη (Tazocin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new PiperacillinTazobactamDescription());
}