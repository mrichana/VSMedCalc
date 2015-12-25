var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_LeftAtrium_Volume = (function (_super) {
        __extends(Triplex_LeftAtrium_Volume, _super);
        function Triplex_LeftAtrium_Volume() {
            _super.apply(this, arguments);
            this.description = new Triplex_LeftAtrium_VolumeDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LeftAtrium_Area4Ch: 15,
                Triplex_LeftAtrium_Area2Ch: 15,
                Triplex_LeftAtrium_Length: 40
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
                }, CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/lav.png'
                }
            ];
        }
        Triplex_LeftAtrium_Volume.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '8 * Triplex_LeftAtrium_Area4Ch * Triplex_LeftAtrium_Area2Ch / ( 3 * pi * ( Triplex_LeftAtrium_Length / 10 ))';
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.suffix = 'cm<sup>3</sup>';
            if (ret.result >= 73) {
                ret.explanation = 'Μεγάλη διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 63) {
                ret.explanation = 'Μέτρια διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result >= 53) {
                ret.explanation = 'Μικρή διάταση αριστερού κόλπου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result >= 22) {
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
        return Triplex_LeftAtrium_Volume;
    })(CalculatorViews.View);
    var Triplex_LeftAtrium_VolumeDescription = (function (_super) {
        __extends(Triplex_LeftAtrium_VolumeDescription, _super);
        function Triplex_LeftAtrium_VolumeDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_LeftAtrium_Volume';
            this.name = 'Left Atrial Volume';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = '';
            this.type = Triplex_LeftAtrium_Volume;
        }
        return Triplex_LeftAtrium_VolumeDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_LeftAtrium_VolumeDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9MZWZ0QXRyaXVtX1ZvbHVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvdHJpcGxleC9UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTGVmdEF0cml1bV9Wb2x1bWUuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9MZWZ0QXRyaXVtX1ZvbHVtZS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTGVmdEF0cml1bV9Wb2x1bWVEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0xlZnRBdHJpdW1fVm9sdW1lRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBNEZyQjtBQTVGRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUF3Q0MsNkNBQUlBO1FBQTVDQTtZQUF3Q0MsOEJBQUlBO1lBQ2hEQSxnQkFBV0EsR0FBR0EsSUFBSUEsb0NBQW9DQSxFQUFFQSxDQUFDQTtZQUVqREEsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSwwQkFBMEJBLEVBQUVBLEVBQUVBO2dCQUM5QkEsMEJBQTBCQSxFQUFFQSxFQUFFQTtnQkFDOUJBLHlCQUF5QkEsRUFBRUEsRUFBRUE7YUFDaENBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsNEJBQTRCQTtvQkFDaENBLElBQUlBLEVBQUVBLG9CQUFvQkE7b0JBQzFCQSxXQUFXQSxFQUFFQSx1REFBdURBO29CQUNwRUEsS0FBS0EsRUFBRUE7d0JBQ0hB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