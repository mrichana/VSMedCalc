/// <reference path='../../views.ts'/>
/// <reference path='../../viewsCollections.ts'/>
/// <reference path='../../MinMaxToValue.ts'/>

module CalculatorViews {
   'use strict';
   class AmphotericinB extends View {
       description = new AmphotericinBDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            GFR: 73,
            Weight: 70
        };
        fields: IField[] = [
            weightField,
            resultField
        ];
        calculator(values) {
            var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result(3*values.Weight+'-'+5*values.Weight+'mgr x 1', IResult.resultLevel.normal) }
            ]);
            return resultArray.value(0);
        };
    }
    class AmphotericinBDescription extends ViewDescription implements IViewDescription {
        type: typeof View = AmphotericinB;
        id: string = 'AmphotericinB';
        name: string = 'Αμφοτερικίνη Β (Ambisome)';
        category: string[] = ['Φάρμακα', 'Αντιμυκητισιακά'];
        tags: string = '';
    }

    ViewsCollection.add(new AmphotericinBDescription());
}