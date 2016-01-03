/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Vancomycin extends View {
       description = new VancomycinDescription();

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
                { result: new Result('1gr x 2', IResult.resultLevel.normal) },
                { value: 50, result: new Result('1gr x 1', IResult.resultLevel.intermediate) },
                { value: 10, result: new Result('1gr ανά 4-7 ημέρες', IResult.resultLevel.abnormal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class VancomycinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Vancomycin;
        id: string = 'Vancomycin';
        name: string = 'Βανκομυκίνη (Voncon)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Gram(+)',''];
        tags: string = '';
    }

    ViewsCollection.add(new VancomycinDescription());
}