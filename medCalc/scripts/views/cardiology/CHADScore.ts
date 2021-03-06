/// <reference path="../views.ts"/>
/// <reference path="../viewsCollections.ts"/>

module CalculatorViews {
  'use strict';

  class CHADScore extends View {
      description = new CHADScoreDescription();
      template: string = 'calculator.basic';
      defaultValues = {
          'HistoryOf_CHF': false,
          'HistoryOf_Hypertension': false,
          'Age': 65,
          'HistoryOf_Diabetes': false,
          'HistoryOf_Stroke': false,
          'HistoryOf_VascularDisease': false,
          'Sex': 0
      };
      fields: IField[] = [
          {
              id: 'HistoryOf_CHF',
              name: 'Συμφορητική Καρδιακή Ανεπάρκεια',
              input: {
                  type: 'check'
              }
          }, {
              id: 'HistoryOf_Hypertension',
              name: 'Αρτηριακή Υπέρταση',
              input: {
                  type: 'check'
              }
          },
          {
              id: 'HistoryOf_Diabetes',
              name: 'Σακχαρώδης Διαβήτης',
              input: {
                  type: 'check'
              }
          }, {
              id: 'HistoryOf_Stroke',
              name: 'Ιστορικό TIA ή εγκεφαλικού',
              input: {
                  type: 'check'
              }
          }, {
              id: 'HistoryOf_VascularDisease',
              name: 'Περιφερική Αγγειοπάθεια',
              input: {
                  type: 'check'
              }
          },
          ageField,
          sexField,
          resultField
      ];
      calculator(values) {
          var ret = new Result();

          ret.result = 0;
          ret.result += values.HistoryOf_CHF ? 1 : 0;
          ret.result += values.HistoryOf_Hypertension ? 1 : 0;
          ret.result += values.Age > 65 ? 1 : 0;
          ret.result += values.Age > 75 ? 1 : 0;
          ret.result += values.HistoryOf_Diabetes ? 1 : 0;
          ret.result += values.HistoryOf_Stroke ? 2 : 0;
          ret.result += values.HistoryOf_VascularDisease ? 1 : 0;
          ret.result += (values.Sex) ? 1 : 0;

          var explanations = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 6.7, 15.2];
          ret.explanation = 'Πιθανότητα ισχαιμικού ΑΕΕ: ' + explanations[ret.result] + '% ανά έτος';
          switch (ret.result) {
              case 0:
                  ret.resultlevel = IResult.resultLevel.normal;
                  break;
              case 1:
              case 2:
                  ret.resultlevel = IResult.resultLevel.intermediate;
                  break;
              default:
                  ret.resultlevel = IResult.resultLevel.abnormal;
          }
          return ret;
      };
  }


  class CHADScoreDescription extends ViewDescription implements IViewDescription {
      id: string = 'CHADScore';
      name: string = 'CHA2DS2-VASc Score';
      category: string[] = ['Καρδιολογία', 'Κολπική Μαρμαρυγή'];
      tags: string = 'Καρδιολογία\\af';
      type: typeof View = CHADScore;
  }

  ViewsCollection.add( new CHADScoreDescription());
}
