/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_AorticValve_Regurgitation_VC extends View {
        description = new Triplex_AorticValve_Regurgitation_VCDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_AorticValve_Regurgitation_VenaContracta_Width: 0.0,
        };
        fields: IField[] = [
            {
                id: 'Triplex_AorticValve_Regurgitation_VenaContracta_Width',
                name: 'Vena Contracta Width (cm)',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.0,
                    max: 1.5
                }
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();

            ret.result = values.Triplex_AorticValve_Regurgitation_VenaContracta_Width;
            if (values.Triplex_AorticValve_Regurgitation_VenaContracta_Width > 0.6) {
                ret.explanation = 'Σοβαρή Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (values.Triplex_AorticValve_Regurgitation_VenaContracta_Width > 0.3) {
                ret.explanation = 'Μέτρια Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Μικρή Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
    class Triplex_AorticValve_Regurgitation_VCDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_AorticValve_Regurgitation_VC;
        id: string = 'Triplex_AorticValve_Regurgitation_VC';
        name: string = 'Aortic Valve Regurgitation (Vena Contracta)';
        category: string = 'Υπερηχοκαρδιογράφημα';
        tags: string = 'AoV\\regurgitation';
    }

    viewsCollection.add(new Triplex_AorticValve_Regurgitation_VCDescription());


    class Triplex_AorticValve_Regurgitation_PHT extends View {
        description = new Triplex_AorticValve_Regurgitation_PHTDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_AorticValve_Regurgitation_PHT: 550
        };
        fields: IField[] = [
            {

                id: 'Triplex_AorticValve_Regurgitation_PHT',
                name: 'Pressure Half Time (ms)',
                input: {
                    type: 'number',
                    step: 10,
                    min: 10,
                    max: 1000
                }
            }, resultField
        ];
        calculator(values) {
            var ret = new Result();
            ret.result = values.Triplex_AorticValve_Regurgitation_PHT;
            if (values.Triplex_AorticValve_Regurgitation_PHT < 200) {
                ret.explanation = 'Σοβαρή Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (values.Triplex_AorticValve_Regurgitation_PHT < 500) {
                ret.explanation = 'Μέτρια Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Μικρή Ανεπάρκεια';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
    class Triplex_AorticValve_Regurgitation_PHTDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_AorticValve_Regurgitation_PHT;
        id: string = 'Triplex_AorticValve_Regurgitation_PHT';
        name: string = 'Aortic Valve Regurgitation (PHT)';
        category: string = 'Υπερηχοκαρδιογράφημα';
        tags: string = 'AoV\\regurgitation';
    }

    viewsCollection.add(new Triplex_AorticValve_Regurgitation_PHTDescription());
}
