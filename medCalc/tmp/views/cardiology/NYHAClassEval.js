var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var NYHAClassEval = (function (_super) {
        __extends(NYHAClassEval, _super);
        function NYHAClassEval() {
            _super.apply(this, arguments);
            this.description = new NYHAClassEvalDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                NYHAClass: 'I'
            };
            this.fields = [
                {
                    id: 'NYHAClass',
                    name: 'NYHA Class',
                    input: {
                        type: 'select',
                        options: [
                            {
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
                }, CalculatorViews.resultField
            ];
        }
        NYHAClassEval.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var result = values.NYHAClass;
            if (result === 'IV') {
                ret.explanation = 'Έντονος περιορισμός δραστηριότητας λόγω συμπτωμάτων. Παρουσία συμπτωμάτων κατά την ανάπαυση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            if (result === 'III') {
                ret.explanation = 'Σημαντικός περιορισμός δραστηριότητας λόγω συμπτωμάτων, ακόμα και σε μικρότερη από φυσιολογική δραστηριότητα. Απουσία συμπτωμάτων κατά την ανάπαυση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            if (result === 'II') {
                ret.explanation = 'Ήπια συμπτώματα και μικρός περιορισμός κατά την φυσιολογική δραστηριότητα';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            if (result === 'I') {
                ret.explanation = 'Απουσία συμπτωμάτων και κανένας περιορισμός στην φυσιολογική φυσική δραστηριότητα';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return NYHAClassEval;
    })(CalculatorViews.View);
    var NYHAClassEvalDescription = (function (_super) {
        __extends(NYHAClassEvalDescription, _super);
        function NYHAClassEvalDescription() {
            _super.apply(this, arguments);
            this.type = NYHAClassEval;
            this.id = 'NYHAClassEval';
            this.name = 'NYHA Class';
            this.category = 'Καρδιολογία';
            this.tags = 'hf';
        }
        return NYHAClassEvalDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new NYHAClassEvalDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTllIQUNsYXNzRXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvY2FyZGlvbG9neS9OWUhBQ2xhc3NFdmFsLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5OWUhBQ2xhc3NFdmFsIiwiQ2FsY3VsYXRvclZpZXdzLk5ZSEFDbGFzc0V2YWwuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuTllIQUNsYXNzRXZhbC5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLk5ZSEFDbGFzc0V2YWxEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5OWUhBQ2xhc3NFdmFsRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBc0VyQjtBQXRFRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUE0QkMsaUNBQUlBO1FBQWhDQTtZQUE0QkMsOEJBQUlBO1lBQzVCQSxnQkFBV0EsR0FBR0EsSUFBSUEsd0JBQXdCQSxFQUFFQSxDQUFDQTtZQUU3Q0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxTQUFTQSxFQUFFQSxHQUFHQTthQUNqQkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSxXQUFXQTtvQkFDZkEsSUFBSUEsRUFBRUEsWUFBWUE7b0JBQ2xCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLE9BQU9BLEVBQUVBOzRCQUNMQTtnQ0FDSUEsS0FBS0EsRUFBRUEsR0FBR0E7Z0NBQ1ZBLElBQUlBLEVBQUVBLFNBQVNBO2dDQUNmQSxXQUFXQSxFQUFFQSxtRkFBbUZBOzZCQUNuR0EsRUFBRUE7Z0NBQ0NBLEtBQUtBLEVBQUVBLElBQUlBO2dDQUNYQSxJQUFJ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