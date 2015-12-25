/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_LeftAtrium_Volume_Index extends View {
        description = new Triplex_LeftAtrium_Volume_IndexDescription();
        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LeftAtrium_Area4Ch: 15,
            Triplex_LeftAtrium_Area2Ch: 15,
            Triplex_LeftAtrium_Length: 40,
            BSA: 1.82
        };
        fields: IField[] = [
            {
                id: 'Triplex_LeftAtrium_Area4Ch',
                name: 'A1(cm<sup>2</sup>)',
                description: 'Πλανιμέτρηση αριστερού κόλπου από εικόνα 4 κοιλοτήτων',
                input: {
                    type: 'number',
                    step: 1,
                    min: 5,
                    max: 80
                }
            }, {
                id: 'Triplex_LeftAtrium_Area2Ch',
                name: 'A2(cm<sup>2</sup>)',
                description: 'Πλανιμέτρηση αριστερού κόλπου από εικόνα 2 κοιλοτήτων',
                input: {
                    type: 'number',
                    step: 1,
                    min: 5,
                    max: 80
                }
            }, {
                id: 'Triplex_LeftAtrium_Length',
                name: 'L(mm)',
                description: 'Μήκος αριστερού κόλπου',
                input: {
                    type: 'number',
                    step: 1,
                    min: 5,
                    max: 80
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
            }, resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/lav.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '8 * Triplex_LeftAtrium_Area4Ch * Triplex_LeftAtrium_Area2Ch / ( 3 * pi * ( Triplex_LeftAtrium_Length / 10 )) / BSA';
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result >= 40) {
                ret.explanation = 'Μεγάλη διάταση αριστερού κόλπου';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (ret.result >= 34) {
                ret.explanation = 'Μέτρια διάταση αριστερού κόλπου';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else if (ret.result >= 29) {
                ret.explanation = 'Μικρή διάταση αριστερού κόλπου';
                ret.resultlevel = IResult.resultLevel.normal;
            } else if (ret.result >= 16) {
                ret.explanation = 'Φυσιολογικές διάστασεις αριστερού κόλπου';
                ret.resultlevel = IResult.resultLevel.normal;
            } else {
                ret.explanation = 'Υπερβολικά χαμηλή τιμή - Πιθανό λάθος μετρήσεως';
                ret.resultlevel = IResult.resultLevel.abnormal;
            }

            return ret;
        };
    }

    class Triplex_LeftAtrium_Volume_IndexDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_LeftAtrium_Volume_Index';
        name: string = 'Left Atrial Volume Index';
        category: string = 'Υπερηχοκαρδιογράφημα';
        tags: string = 'af';
        type: typeof View = Triplex_LeftAtrium_Volume_Index;
    }

    viewsCollection.add(new Triplex_LeftAtrium_Volume_IndexDescription());

}
