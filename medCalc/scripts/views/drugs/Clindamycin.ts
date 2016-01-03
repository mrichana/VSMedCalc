/// <reference path='../views.ts'/>
/// <reference path='../viewsCollections.ts'/>
/// <reference path='../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Clindamycin extends View {
       description = new ClindamycinDescription();

        template: string = 'calculator.basic';
        defaultValues = {
        };
        fields: IField[] = [
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('300-600mgr x 4', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(0);
        };
    }
    class ClindamycinDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Clindamycin;
        id: string = 'Clindamycin';
        name: string = 'Κλινδαμυκίνη (Dalacin)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Αναερόβια',''];
        tags: string = '';
    }

    ViewsCollection.add(new ClindamycinDescription());
}