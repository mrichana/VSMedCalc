/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class Linezolid extends View {
       description = new LinezolidDescription();

        template: string = 'calculator.basic';
        defaultValues = {
        };
        fields: IField[] = [
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result('600mgr x 2', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(0);
        };
    }
    class LinezolidDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Linezolid;
        id: string = 'Linezolid';
        name: string = 'Λινεζολίδη (Zivoxid)';
        category: string[] = ['Φάρμακα', 'Αντιβακτηριακά για Gram(+)',''];
        tags: string = '';
    }

    ViewsCollection.add(new LinezolidDescription());
}