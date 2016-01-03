/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
    'use strict';
    class Teicoplanin extends View {
        description = new TeicoplaninDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            GFR: 73,
            Weight: 70
        };
        fields: IField[] = [
            weightField,
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
                { result: new Result(6*values.Weight+'mgr x 1', IResult.resultLevel.normal) },
                { value: 50, result: new Result(6*values.Weight+'mgr ανά 48h', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result(6*values.Weight+'mgr ανά 72h', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class TeicoplaninDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Teicoplanin;
        id: string = 'Teicoplanin';
        name: string = 'Τεϊκοπλανίνη (Targocid)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Gram(+)', 'Γλυκοπεπτιδικά'];
        tags: string = '';
    }

    ViewsCollection.add(new TeicoplaninDescription());
}