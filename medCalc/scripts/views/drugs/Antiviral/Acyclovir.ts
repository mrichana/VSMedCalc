/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Acyclovir extends View {
       description = new AcyclovirDescription();

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
                { result: new Result(5*values.Weight+'-'+12.5*values.Weight+'mgr x 3', IResult.resultLevel.normal) },
                { value: 50, result: new Result(5*values.Weight+'-'+12.5*values.Weight+'mgr x 1-2', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result(2.5*values.Weight+'-'+6.25*values.Weight+'mgr x 1', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AcyclovirDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Acyclovir;
        id: string = 'Acyclovir';
        name: string = 'Ακυκλοβίρ (Zovirax)';
        category: string[] = ['Φάρμακα', 'Αντι-ιικά', ''];
        tags: string = '';
    }

    ViewsCollection.add(new AcyclovirDescription());
}