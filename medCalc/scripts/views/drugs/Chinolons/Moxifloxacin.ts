/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Moxifloxacin extends View {
       description = new MoxifloxacinDescription();

        template: string = 'calculator.basic';
        defaultValues = {
        };
        fields: IField[] = [
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('400mgr x 1', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(0);
        };
    }
    class MoxifloxacinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Moxifloxacin;
        id: string = 'Moxifloxacin';
        name: string = 'Μοξιφλοξασίν (Avelox)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Κινολόνες'];
        tags: string = '';
    }

    ViewsCollection.add(new MoxifloxacinDescription());
}