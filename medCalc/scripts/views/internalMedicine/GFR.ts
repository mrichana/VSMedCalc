/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class GFR extends View {
        description = new GFRDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Plasma_Creatinine: 1.0,
            Age: 65,
            Weight: 70,
            Sex: 0
        };
        fields: IField[] = [
            {
                id: 'Plasma_Creatinine',
                name: 'Κρεατινίνη Πλάσματος',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 8
                }
            },
            ageField,
            weightField,
            sexField,
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula;
            if (!values.Sex) {
                formula = '((140 - Age) * Weight ) / ( 72 * Plasma_Creatinine )';
            } else {
                formula = '(((140 - Age) * Weight ) / ( 72 * Plasma_Creatinine ))*0.85';
            }

            ret.suffix = 'mL/min';

            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result < 15) {
                ret.explanation = 'Νεφρική ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            } else if (ret.result < 30) {
                ret.explanation = 'Νεφρική βλάβη με σοβαρή μείωση του GFR';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            } else if (ret.result < 60) {
                ret.explanation = 'Νεφρική βλάβη με μέτρια μείωση του GFR';
                ret.resultlevel = IResult.resultLevel.Intermediate;
            } else if (ret.result < 90) {
                ret.explanation = 'Νεφρική βλάβη με ήπια μείωση του GFR';
                ret.resultlevel = IResult.resultLevel.Normal;
            } else {
                ret.explanation = 'Φυσιολογική νεφρική λειτουργία';
                ret.resultlevel = IResult.resultLevel.Normal;
            }
            return ret;
        };
    }
    class GFRDescription extends ViewDescription implements IViewDescription {
        type: typeof View = GFR;
        id: string = 'GFR';
        name: string = 'Ρυθμός Σπειραματικής Διήθησης';
        category: string = 'Παθολογία';
        tags: string = 'renal\\gfr\\creatinine clearance';
    }

    viewsCollection.add(new GFRDescription());
}
