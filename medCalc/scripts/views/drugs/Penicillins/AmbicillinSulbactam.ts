/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';
    class AmpicillinSulbactam extends View {
        description = new AmpicillinSulbactamDescription();

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
                { result: new Result('3gr x 4', IResult.resultLevel.normal) },
                { value: 80, result: new Result('3gr x 4', IResult.resultLevel.normal) },
                { value: 50, result: new Result('3gr x 2-3', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('3gr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AmpicillinSulbactamDescription extends ViewDescription implements IViewDescription {
        type: typeof View = AmpicillinSulbactam;
        id: string = 'AmpicillinSulbactam';
        name: string = 'Αμπικιλλίνη/Σουλμπακτάμη (Begalin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new AmpicillinSulbactamDescription());
}