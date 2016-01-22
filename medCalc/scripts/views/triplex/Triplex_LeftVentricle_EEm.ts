/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_LeftVentricle_EEm extends View {
description = new Triplex_LeftVentricle_EEmDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_MitralValve_E: 80,
            Triplex_MitralValve_LateralEm: 10,
            Triplex_MitralValve_MedialEm: 10
        };
        fields: IField[] = [
            {
                id: 'Triplex_MitralValve_E',
                name: 'Κύμα Ε Διαμιτροειδικής Ροής (cm/sec)',
                input: {
                    type: 'number',
                    step: 5,
                    min: 50,
                    max: 300
                }
            }, {
                id: 'Triplex_MitralValve_LateralEm',
                name: 'Κύμα E\' TDI Πλαγίου Τοιχώματος' ,
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 20
                }
            }, {
                id: 'Triplex_MitralValve_MedialEm',
                name: 'Κύμα E\' TDI Μεσοκοιλιακού Τοιχώματος' ,
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 20
                }
            }, resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '1.24 * ( Triplex_MitralValve_E / ((Triplex_MitralValve_LateralEm+Triplex_MitralValve_MedialEm)/2) ) + 1.9';
            ret.formula = View.formulaEvaluator(values, formula);

            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.suffix = 'mmHg'
            
            var EEm = View.roundNum(values.Triplex_MitralValve_E / ((values.Triplex_MitralValve_LateralEm+values.Triplex_MitralValve_MedialEm)/2));
            
            if (EEm > 15) {
                ret.explanation = 'E/E\':'+EEm+' Αυξημένη πίεση πλήρωσης αριστεράς κοιλίας';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (EEm <= 8) {
                ret.explanation = 'E/E\':'+EEm+' Φυσιολογική πίεση πλήρωσης αριστεράς κοιλίας';
                ret.resultlevel = IResult.resultLevel.normal;
            } else {
                ret.explanation = 'E/E\':'+EEm+' Πίεση πλήρωσης αριστεράς κοιλίας στην γκρίζα ζώνη';
                ret.resultlevel = IResult.resultLevel.none;
            }

            return ret;
        };
    }



    class Triplex_LeftVentricle_EEmDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_LeftVentricle_EEm';
        name: string = 'Πίεση Ενσφήνωσης από E/E\'';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Κοιλίες', 'Αριστερή Κοιλία'];
        tags: string = '';
        type: typeof View = Triplex_LeftVentricle_EEm;
    }

    ViewsCollection.add(new Triplex_LeftVentricle_EEmDescription());

}
