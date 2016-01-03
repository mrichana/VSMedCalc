/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Amikacin extends View {
       description = new AmikacinDescription();

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
                { result: new Result(7.5*values.Weight+'mgr x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result(7.5*values.Weight+'mgr x 1', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result(7.5*values.Weight+'mgr ανά 48h ', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AmikacinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Amikacin;
        id: string = 'Amikacin';
        name: string = 'Αμικασίνη (Briklin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Gram(-)','Αμινογλυκοσίδες'];
        tags: string = '';
    }

    ViewsCollection.add(new AmikacinDescription());
}