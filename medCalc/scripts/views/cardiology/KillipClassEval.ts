/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class KillipClassEval extends View {
        description = new KillipClassEvalDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            KillipClass: 'I'
        };
        fields: IField[] = [
            {
                id: 'KillipClass',
                name: 'Killip Class',
                input: {
                    type: 'select',
                    options: [{
                        value: 'I',
                        name: 'Class I',
                        description: 'Απουσία κλινικών σημείων καρδιακής ανεπάρκειας'
                    }, {
                            value: 'II',
                            name: 'Class II',
                            description: 'Υγροί πνευμονικοί ήχοι, Τρίτος τόνος, Αυξημένη Πίεση Σφαγιτιδικών Φλεβών'
                        }, {
                            value: 'III',
                            name: 'Class III',
                            description: 'Οξύ Πνευμονικό Οίδημα'
                        }, {
                            value: 'IV',
                            name: 'Class IV',
                            description: 'Καρδιογενές Σόκ ή Υπόταση (ΑΠ<90mmHg) και σημεία περιφερικού αγγειόσπασμου (Ολιγουρία, Κυάνωση ή Εφύδρωση)'
                        }]
                }
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();

            var result = values.KillipClass;
            switch (result) {
                case 'I':
                    ret.explanation = 'Απουσία κλινικών σημείων καρδιακής ανεπάρκειας';
                    ret.resultlevel = IResult.resultLevel.normal;
                    break;
                case 'II':
                    ret.explanation = 'Υγροί πνευμονικοί ήχοι, Τρίτος τόνος, Αυξημένη Πίεση Σφαγιτιδικών Φλεβών';
                    ret.resultlevel = IResult.resultLevel.normal;
                    break;
                case 'III':
                    ret.explanation = 'Οξύ Πνευμονικό Οίδημα';
                    ret.resultlevel = IResult.resultLevel.intermediate;
                    break;
                case 'IV':
                    ret.explanation = 'Καρδιογενές Σόκ ή Υπόταση (ΑΠ<90mmHg) και σημεία περιφερικού αγγειόσπασμου (Ολιγουρία, Κυάνωση ή Εφύδρωση)';
                    ret.resultlevel = IResult.resultLevel.abnormal;
                    break;
            }

            ret.result = '';
            return ret;
        };
    }
    class KillipClassEvalDescription extends ViewDescription implements IViewDescription {
        type: typeof View = KillipClassEval;
        id: string = 'KillipClassEval';
        name: string = 'Killip Class';
        category: string[] = [ 'Καρδιολογία', 'Στεφανιαία Νόσος', 'Πρόγνωση'];
        tags: string = 'stemi\\nstemi';
    }

    ViewsCollection.add(new KillipClassEvalDescription());
}
