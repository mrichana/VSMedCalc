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
                { result: new Result('1-2gr x 1 ή 2gr x 2 σε μηνιγγίτιδα', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(0);
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