// /// <reference path='../views.ts'/>
// /// <reference path='../viewsCollections.ts'/>
// /// <reference path='../MinMaxToValue.ts'/>
// 
// module CalculatorViews {
//   'use strict';
//    class Dicloxacillin extends View {
//        description = new DicloxacillinDescription();
// 
//         template: string = 'calculator.basic';
//         defaultValues = {
//         };
//         fields: IField[] = [
//             resultField
//         ];
//         calculator(values) {
//             var resultArray = new CalculatorViews.MinMaxToValue([
//                 { result: new Result('0.25-3gr x 4', IResult.resultLevel.normal) }
//             ]);
//             return resultArray.value(values.GFR);
//         };
//     }
//     class DicloxacillinDescription extends ViewDescription implements IViewDescription {
//         type: typeof View = Dicloxacillin;
//         id: string = 'Dicloxacillin';
//         name: string = 'Δικλοξακιλλίνη (Diclocil)';
//         category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
//         tags: string = '';
//     }
// 
//     ViewsCollection.add(new DicloxacillinDescription());
// }