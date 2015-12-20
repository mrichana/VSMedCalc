module CalculatorViews {
  'use strict';

  class Calc extends View {
    static Ctor = (() => viewsCollection.add(new ViewDescription('Calc', 'Υπολογιστής', 'Παθολογία', 'Παθολογία', Calc)))();

    id: string = 'Calc';
    name: string = 'Υπολογιστής';
    category: string = 'Παθολογία';
    tags: string = 'Παθολογία';
    template: string = 'calculator.basic';
    defaultValues = {
      Calculation: ''
    };
    fields: IField[] = [
      {
        id: 'Calculation',
        name: 'Υπολογισμός',
        input: {
          type: 'text'
        }
      },
      resultField
    ];
    calculator(values) {
      var ret = new Result();
      try {
        ret.formula = values.Calculation;
        ret.result = math.eval(ret.formula);
        ret.resultlevel = resultLevel.Unknown;
        if (!angular.isNumber(ret.result)) {
          throw 'nan';
        }
        if (!isFinite(ret.result)) {
          ret.result = 'Άπειρο';
          ret.resultlevel=resultLevel.Intermediate;
        }
      } catch (err) {
        ret.result = 'Λάθος Υπολογισμός';
        ret.resultlevel=resultLevel.Abnormal;
      }
      return ret;
    };
  }
}
