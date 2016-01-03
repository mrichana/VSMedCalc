/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Ceftriaxone extends View {
       description = new CeftriaxoneDescription();

        template: string = 'calculator.basic';
        defaultValues = {
        };
        fields: IField[] = [
           resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('2gr x 1-2', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class CeftriaxoneDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Ceftriaxone;
        id: string = 'Ceftriaxone';
        name: string = 'Κεφτριαξόνη (Rocephin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κεφαλοσπορίνες'];
        tags: string = '';
    }

    ViewsCollection.add(new CeftriaxoneDescription());
}