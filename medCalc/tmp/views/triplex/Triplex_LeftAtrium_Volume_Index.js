var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_LeftAtrium_Volume_Index = (function (_super) {
        __extends(Triplex_LeftAtrium_Volume_Index, _super);
        function Triplex_LeftAtrium_Volume_Index() {
            _super.apply(this, arguments);
            this.description = new Triplex_LeftAtrium_Volume_IndexDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LeftAtrium_Area4Ch: 15,
                Triplex_LeftAtrium_Area2Ch: 15,
                Triplex_LeftAtrium_Length: 40,
                BSA: 1.82
            };
            this.fields = [
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
                }, CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/lav.png'
                }
            ];
        }
        Triplex_LeftAtrium_Volume_Index.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '8 * Triplex_LeftAtrium_Area4Ch * Triplex_LeftAtrium_Area2Ch / ( 3 * pi * ( Triplex_LeftAtrium_Length / 10 )) / BSA';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result >= 40) {
                ret.explanation = 'Μεγάλη διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 34) {
                ret.explanation = 'Μέτρια διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result >= 29) {
                ret.explanation = 'Μικρή διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result >= 16) {
                ret.explanation = 'Φυσιολογικές διάστασεις αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else {
                ret.explanation = 'Υπερβολικά χαμηλή τιμή - Πιθανό λάθος μετρήσεως';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            return ret;
        };
        ;
        return Triplex_LeftAtrium_Volume_Index;
    })(CalculatorViews.View);
    var Triplex_LeftAtrium_Volume_IndexDescription = (function (_super) {
        __extends(Triplex_LeftAtrium_Volume_IndexDescription, _super);
        function Triplex_LeftAtrium_Volume_IndexDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_LeftAtrium_Volume_Index';
            this.name = 'Left Atrial Volume Index';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'af';
            this.type = Triplex_LeftAtrium_Volume_Index;
        }
        return Triplex_LeftAtrium_Volume_IndexDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_LeftAtrium_Volume_IndexDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9MZWZ0QXRyaXVtX1ZvbHVtZV9JbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvdHJpcGxleC9UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lX0luZGV4LnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lX0luZGV4IiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTGVmdEF0cml1bV9Wb2x1bWVfSW5kZXguY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9MZWZ0QXRyaXVtX1ZvbHVtZV9JbmRleC5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTGVmdEF0cml1bV9Wb2x1bWVfSW5kZXhEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lX0luZGV4RGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBa0dyQjtBQWxHRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUE4Q0MsbURBQUlBO1FBQWxEQTtZQUE4Q0MsOEJBQUlBO1lBQzlDQSxnQkFBV0EsR0FBR0EsSUFBSUEsMENBQTBDQSxFQUFFQSxDQUFDQTtZQUMvREEsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSwwQkFBMEJBLEVBQUVBLEVBQUVBO2dCQUM5QkEsMEJBQTBCQSxFQUFFQSxFQUFFQTtnQkFDOUJBLHlCQUF5QkEsRUFBRUEsRUFBRUE7Z0JBQzdCQSxHQUFHQSxFQUFFQSxJQUFJQTthQUNaQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLDRCQUE0QkE7b0JBQ2hDQSxJQUFJQSxF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