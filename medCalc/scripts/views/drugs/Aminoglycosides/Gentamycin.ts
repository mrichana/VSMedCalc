/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Gentamycin extends View {
       description = new GentamycinDescription();

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
                { result: new Result(1.7*values.Weight+'mgr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result(1.7*values.Weight+'mgr x 1-2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result(1.7*values.Weight+'mgr ανά 48h ', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class GentamycinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Gentamycin;
        id: string = 'Gentamycin';
        name: string = 'Γενταμικίνη (Garamycin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Gram(-)','Αμινογλυκοσίδες'];
        tags: string = '';
    }

    ViewsCollection.add(new GentamycinDescription());
}