// /// <reference path='../views.ts'/>
// /// <reference path='../viewsCollections.ts'/>
// /// <reference path='../MinMaxToValue.ts'/>
// 
// module CalculatorViews {
//   'use strict';
//    class Cloxacillin extends View {
//        description = new CloxacillinDescription();
// 
//         template: string = 'calculator.basic';
//         defaultValues = {
//             GFR: 73
//         };
//         fields: IField[] = [
//             {
//                id: 'GFR',
//                 name: 'GFR',
//                 calculator: 'GFR',
//                 input: {
//                     type: 'number',
//                     step: 1,
//                     min: 0,
//                     max: 250
//                 }
//             },
//             resultField
//         ];
//         calculator(values) {
//             var resultArray = new CalculatorViews.MinMaxToValue([
//                 { result: new Result('0.25-3gr x 4', IResult.resultLevel.normal) }
//             ]);
//             return resultArray.value(values.GFR);
//         };
//     }
//     class CloxacillinDescription extends ViewDescription implements IViewDescription {
//         type: typeof View = Cloxacillin;
//         id: string = 'Cloxacillin';
//         name: string = 'Kλοξακιλλίνη (Staphyclox)';
//         category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
//         tags: string = '';
//     }
// 
//     ViewsCollection.add(new CloxacillinDescription());
// }