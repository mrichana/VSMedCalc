/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_AorticValve_Impedance extends View {
        description = new Triplex_AorticValve_ImpedanceDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_Diameter: 20,
            Triplex_LVOT_VTI: 20,
            BSA: 1.82,
            BloodPressure_Systolic: 120,
            Triplex_AorticValve_Vmean: 1
        };
        fields: IField[] = [
            {
                id: 'Triplex_LVOT_Diameter',
                name: 'Διάμετρος LVOT (mm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 50
                }
            }, {
                id: 'Triplex_LVOT_VTI',
                name: 'LVOT VTI<sub>1</sub> (cm)',
                description: 'Υποβαλβιδικό Ολοκλήρωμα',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 100
                }
            }, {
                id: 'BSA',
                name: 'BSA (m<sup>2</sup>)',
                calculator: 'BSA',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 3
                }
            }, {
                id: 'BloodPressure_Systolic',
                name: 'Συστολική Πίεση',
                input: {
                    type: 'number',
                    step: 5,
                    min: 60,
                    max: 280
                }
            }, {
                id: 'Triplex_AorticValve_Vmean',
                name: 'AV Vmean(m/s)',
                description: 'Διαβαλβιδική Μέση Ταχύτητα',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 8
                }
            }, resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/AVVR.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '( BloodPressure_Systolic + 4 * Triplex_AorticValve_Vmean ^ 2 ) / ( ( ( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI ) / BSA )';
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result >= 5.5) {
                ret.explanation = 'Πολύ Υψηλή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (ret.result >= 4.5) {
                ret.explanation = 'Υψηλή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else if (ret.result > 3.50) {
                ret.explanation = 'Μέτρια Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = IResult.resultLevel.normal;
            } else {
                ret.explanation = 'Μικρή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
  class Triplex_AorticValve_ImpedanceDescription extends ViewDescription implements IViewDescription {
      type: typeof View = Triplex_AorticValve_Impedance;
      id: string = 'Triplex_AorticValve_Impedance';
      name: string = 'Aorto-Valvular Impedance (Zva)';
	  category: string[] = ['Υπερηχοκαρδιογράφημα', 'Βαλβίδες', 'Στένωση Αορτικής'];
      tags: string = 'AoV\\Stenosis';
  }

  ViewsCollection.add( new Triplex_AorticValve_ImpedanceDescription());
}
