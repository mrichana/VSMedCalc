/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
 'use strict';

 class ECG_Vereckei_Algorithm extends View {
     description = new ECG_Vereckei_AlgorithmDescription();

   template: string = 'calculator.basic';
   defaultValues = {
       ECG_AV_DISSOCIATION: undefined,
       ECG_aVR_InitialR: undefined,
       ECG_NonBBB_QRS: undefined,
       ECG_ViVt: undefined
   };
   fields: IField[] = [
   {
       id: 'ECG_AV_DISSOCIATION',
       name: 'Κολποκοιλιακός Διαχωρισμός',
       input: {
            type: 'select',
            options: [{
                name: 'Ναι',
                value: true
            }, {
                name: 'Όχι',
                value: false
            }]
       }
   },
   {
       id: 'ECG_aVR_InitialR',
       name: 'Αρχικό κύμα R στην aVR',
       input: {
            type: 'select',
            options: [{
                name: 'Ναι',
                value: true
            }, {
                name: 'Όχι',
                value: false
            }],
            hidden: true
       },
   },
   {
       id: 'ECG_NonBBB_QRS',
       name: 'Μορφολογία QRS μή συμβατή με BBB ή FB',
       input: {
            type: 'select',
            options: [{
                name: 'Ναι',
                value: true
            }, {
                name: 'Όχι',
                value: false
            }],
            hidden: true
       },
   },
   {
       id: 'ECG_ViVt',
       name: 'Vi/Vt &le; 1',
       input: {
            type: 'select',
            options: [{
                name: 'Ναι',
                value: true
            }, {
                name: 'Όχι',
                value: false
            }],
            hidden: true,
       },
       description: 'Vi ορίζεται η κάθετη μετακίνηση κατά τα πρώτα 40msec του QRS και Vt η κάθετη μετακίνηση κατά τα τελευταία 40msec'
   },
       resultField
   ];
   calculator(values) {
     var ret = new Result();
     if (values.ECG_AV_DISSOCIATION 
     || values.ECG_aVR_InitialR
     || values.ECG_NonBBB_QRS
     || values.ECG_ViVt) {
         ret.result = 'Κοιλιακή Ταχυκαρδία';
         ret.resultlevel = IResult.resultLevel.abnormal;
     } else if (_.isUndefined(this.values.ECG_AV_DISSOCIATION) 
     || _.isUndefined(this.values.ECG_aVR_InitialR) 
     || _.isUndefined(this.values.ECG_NonBBB_QRS)
     || _.isUndefined(this.values.ECG_ViVt)) {
         ret.result = 'Άγνωστο';
         ret.resultlevel = IResult.resultLevel.intermediate; 
     } else {
         ret.result = 'Υπερκοιλιακή Ταχυκαρδία';
         ret.resultlevel = IResult.resultLevel.normal;
     }
     return ret;
   };
   validate(newValue: any, oldValue: any, scope: ng.IScope, field: IField) {
       super.validate(newValue, oldValue, scope, field);
        (_.find(this.fields, function(field) {
            return field.id == 'ECG_aVR_InitialR';
        })).input.hidden = _.isUndefined(this.values.ECG_AV_DISSOCIATION) || this.values.ECG_AV_DISSOCIATION;
        (_.find(this.fields, function(field) {
            return field.id == 'ECG_NonBBB_QRS';
        })).input.hidden = _.isUndefined(this.values.ECG_aVR_InitialR) || this.values.ECG_aVR_InitialR;
        (_.find(this.fields, function(field) {
            return field.id == 'ECG_ViVt';
        })).input.hidden = _.isUndefined(this.values.ECG_NonBBB_QRS) || this.values.ECG_NonBBB_QRS;
   };
 }
 class ECG_Vereckei_AlgorithmDescription extends ViewDescription implements IViewDescription {
   id: string = 'ECG_Vereckei_Algorithm';
   name: string = 'Vereckei Algorithm';
   category: string[] = ['Ηλεκτροκαρδιογράφημα', 'Κοιλιακή Ταχυκαρδία'];
   tags: string = 'Ταχυκαρδία με ευρέα QRS';
     type: typeof View = ECG_Vereckei_Algorithm;
 }

 ViewsCollection.add( new ECG_Vereckei_AlgorithmDescription());
}
