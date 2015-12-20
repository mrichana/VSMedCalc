module CalculatorViews {
  'use strict';

  class NYHAClassEval extends View {
      static Ctor = (() => viewsCollection.add(new ViewDescription('NYHAClassEval', 'NYHA Class', 'Καρδιολογία', 'Καρδιολογία hf', NYHAClassEval)))();

    id: string = 'NYHAClassEval';
    name: string = 'NYHA Class';
    category: string = 'Καρδιολογία';
    tags: string = 'Καρδιολογία hf';
    template: string = 'calculator.basic';
    defaultValues = {
    NYHAClass: 'I'
    };
    fields: IField[] = [
    {
        id: 'NYHAClass',
        name: 'NYHA Class',
        input: {
            type: 'select',
            options: [{
                value: 'I',
                name: 'Class I',
                description: 'Απουσία συμπτωμάτων και κανένας περιορισμός στην φυσιολογική φυσική δραστηριότητα'
            }, {
                value: 'II',
                name: 'Class II',
                description: 'Ήπια συμπτώματα και μικρός περιορισμός κατά την φυσιολογική δραστηριότητα'
            }, {
                value: 'III',
                name: 'Class III',
                description: 'Σημαντικός περιορισμός δραστηριότητας λόγω συμπτωμάτων, ακόμα και σε μικρότερη από φυσιολογική δραστηριότητα. Απουσία συμπτωμάτων κατά την ανάπαυση'
            }, {
                value: 'IV',
                name: 'Class IV',
                description: 'Έντονος περιορισμός δραστηριότητας λόγω συμπτωμάτων. Παρουσία συμπτωμάτων κατά την ανάπαυση'
            }]
        }
    },      resultField
    ];
    calculator(values) {
      var ret = new Result();
      var result = values.NYHAClass;

      if (result === 'IV') {
          ret.explanation = 'Έντονος περιορισμός δραστηριότητας λόγω συμπτωμάτων. Παρουσία συμπτωμάτων κατά την ανάπαυση';
          ret.resultlevel=resultLevel.Abnormal;
      }
      if (result === 'III') {
          ret.explanation = 'Σημαντικός περιορισμός δραστηριότητας λόγω συμπτωμάτων, ακόμα και σε μικρότερη από φυσιολογική δραστηριότητα. Απουσία συμπτωμάτων κατά την ανάπαυση';
          ret.resultlevel=resultLevel.Intermediate;
      }
      if (result === 'II') {
          ret.explanation = 'Ήπια συμπτώματα και μικρός περιορισμός κατά την φυσιολογική δραστηριότητα';
          ret.resultlevel=resultLevel.Normal;
      }
      if (result === 'I') {
          ret.explanation = 'Απουσία συμπτωμάτων και κανένας περιορισμός στην φυσιολογική φυσική δραστηριότητα';
          ret.resultlevel=resultLevel.Normal;
      }

      return ret;
    };
  }
}
