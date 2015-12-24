/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class BMI extends View {
        description = new BMIDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Height: 170,
            Weight: 70
        };
        fields: IField[] = [
            heightField,
            weightField,
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula = 'Weight / (Height/100) ^ 2';
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result > 40) {
                ret.explanation = 'Νοσογόνος Παχυσαρκία';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            } else if (ret.result > 35) {
                ret.explanation = 'Παχύσαρκος';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            } else if (ret.result > 30) {
                ret.explanation = 'Ήπια Παχύσαρκος';
                ret.resultlevel = IResult.resultLevel.Intermediate;
            } else if (ret.result > 25) {
                ret.explanation = 'Υπέρβαρος';
                ret.resultlevel = IResult.resultLevel.Normal;
            } else if (ret.result > 18.5) {
                ret.explanation = 'Υγειές Βάρος';
                ret.resultlevel = IResult.resultLevel.Normal;
            } else if (ret.result > 16) {
                ret.explanation = 'Ελιποβαρής';
                ret.resultlevel = IResult.resultLevel.Normal;
            } else if (ret.result > 15) {
                ret.explanation = 'Έντονα Ελιποβαρής';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            } else {
                ret.explanation = 'Καχεκτικός';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            }
            return ret;
        };
    }
  class BMIDescription extends ViewDescription implements IViewDescription {
      type: typeof View = BMI;
      id: string = 'BMI';
      name: string = 'Δείκτης Μάζας Σώματος';
      category: string = 'Παθολογία';
      tags: string = '';
  }

  viewsCollection.add( new BMIDescription());
}
