// /// <reference path='../views.ts'/>
// /// <reference path='../viewsCollections.ts'/>
// /// <reference path='../MinMaxToValue.ts'/>
// 
// module CalculatorViews {
//   'use strict';
//    class Piperacillin extends View {
//        description = new PiperacillinDescription();
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
//                 { result: new Result('3-4gr x 4-6', IResult.resultLevel.normal) },
// 				{ value: 80, result: new Result('3-4gr x 4-6', IResult.resultLevel.normal) },
// 				{ value: 50, result: new Result('3-4gr x 3-4', IResult.resultLevel.intermediate) },
// 				{ value: 10, result: new Result('3-4gr x 3', IResult.resultLevel.abnormal) }
//             ]);
//             return resultArray.value(values.GFR);
//         };
//     }
//     class PiperacillinDescription extends ViewDescription implements IViewDescription {
//         type: typeof View = Piperacillin;
//         id: string = 'Piperacillin';
//         name: string = 'Πιπερακιλλίνη (Pipril)';
//         category: string[] = ['Φάρμακα', 'Αντιβακτηριακά Ευρέος Φάσματος', 'Πενικιλλίνες'];
//         tags: string = '';
//     }
// 
//     ViewsCollection.add(new PiperacillinDescription());
// }