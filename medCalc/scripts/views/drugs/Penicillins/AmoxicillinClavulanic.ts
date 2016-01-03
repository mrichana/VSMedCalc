/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>
 
module CalculatorViews {
    'use strict';
    class AmoxicillinClavulanic extends View {
        description = new AmoxicillinClavulanicDescription();

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
                { result: new Result('625mgr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result('625-312.5mgr x 2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('625-312.5mgr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AmoxicillinClavulanicDescription extends ViewDescription implements IViewDescription {
        type: typeof View = AmoxicillinClavulanic;
        id: string = 'AmoxicillinClavulanic';
        name: string = 'Αμοξικιλλίνη/Κλαβουλανικό (Augmentin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new AmoxicillinClavulanicDescription());
}