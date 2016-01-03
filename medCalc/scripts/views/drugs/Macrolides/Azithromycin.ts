/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Azithromycin extends View {
       description = new AzithromycinDescription();

        template: string = 'calculator.basic';
        defaultValues = {
        };
        fields: IField[] = [
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('500mgr x 1', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(values.GFR);
        };
    }
    class AzithromycinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Azithromycin;
        id: string = 'Azithromycin';
        name: string = 'Αζιθρομυκίνη (Zithromax)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Μακρολίδες'];
        tags: string = '';
    }

    ViewsCollection.add(new AzithromycinDescription());
}