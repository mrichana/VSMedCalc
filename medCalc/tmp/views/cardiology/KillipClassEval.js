var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var KillipClassEval = (function (_super) {
        __extends(KillipClassEval, _super);
        function KillipClassEval() {
            _super.apply(this, arguments);
            this.description = new KillipClassEvalDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                KillipClass: 'I'
            };
            this.fields = [
                {
                    id: 'KillipClass',
                    name: 'Killip Class',
                    input: {
                        type: 'select',
                        options: [{
                                value: 'I',
                                name: 'Class I',
                                description: 'Απουσία κλινικών σημείων καρδιακής ανεπάρκειας'
                            }, {
                                value: 'II',
                                name: 'Class II',
                                description: 'Υγροί πνευμονικοί ήχοι, Τρίτος τόνος, Αυξημένη Πίεση Σφαγιτιδικών Φλεβών'
                            }, {
                                value: 'III',
                                name: 'Class III',
                                description: 'Οξύ Πνευμονικό Οίδημα'
                            }, {
                                value: 'IV',
                                name: 'Class IV',
                                description: 'Καρδιογενές Σόκ ή Υπόταση (ΑΠ<90mmHg) και σημεία περιφερικού αγγειόσπασμου (Ολιγουρία, Κυάνωση ή Εφύδρωση)'
                            }]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        KillipClassEval.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var result = values.KillipClass;
            switch (result) {
                case 'I':
                    ret.explanation = 'Απουσία κλινικών σημείων καρδιακής ανεπάρκειας';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 'II':
                    ret.explanation = 'Υγροί πνευμονικοί ήχοι, Τρίτος τόνος, Αυξημένη Πίεση Σφαγιτιδικών Φλεβών';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 'III':
                    ret.explanation = 'Οξύ Πνευμονικό Οίδημα';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                    break;
                case 'IV':
                    ret.explanation = 'Καρδιογενές Σόκ ή Υπόταση (ΑΠ<90mmHg) και σημεία περιφερικού αγγειόσπασμου (Ολιγουρία, Κυάνωση ή Εφύδρωση)';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                    break;
            }
            ret.result = '';
            return ret;
        };
        ;
        return KillipClassEval;
    })(CalculatorViews.View);
    var KillipClassEvalDescription = (function (_super) {
        __extends(KillipClassEvalDescription, _super);
        function KillipClassEvalDescription() {
            _super.apply(this, arguments);
            this.type = KillipClassEval;
            this.id = 'KillipClassEval';
            this.name = 'Killip Class';
            this.category = 'Καρδιολογία';
            this.tags = 'stemi\\nstemi';
        }
        return KillipClassEvalDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new KillipClassEvalDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2lsbGlwQ2xhc3NFdmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9jYXJkaW9sb2d5L0tpbGxpcENsYXNzRXZhbC50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuS2lsbGlwQ2xhc3NFdmFsIiwiQ2FsY3VsYXRvclZpZXdzLktpbGxpcENsYXNzRXZhbC5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5LaWxsaXBDbGFzc0V2YWwuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5LaWxsaXBDbGFzc0V2YWxEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5LaWxsaXBDbGFzc0V2YWxEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0F5RXJCO0FBekVELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQThCQyxtQ0FBSUE7UUFBbENBO1lBQThCQyw4QkFBSUE7WUFDOUJBLGdCQUFXQSxHQUFHQSxJQUFJQSwwQkFBMEJBLEVBQUVBLENBQUNBO1lBRS9DQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLFdBQVdBLEVBQUVBLEdBQUdBO2FBQ25CQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLGFBQWFBO29CQUNqQkEsSUFBSUEsRUFBRUEsY0FBY0E7b0JBQ3BCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLE9BQU9BLEVBQUVBLENBQUNBO2dDQUNOQSxLQUFLQSxFQUFFQSxHQUFHQTtnQ0FDVkEsSUFBSUEsRUFBRUEsU0FBU0E7Z0NBQ2ZBLFdBQVdBLEVBQUVBLGdEQUFnREE7NkJBQ2hFQSxFQUFFQTtnQ0FDS0EsS0FBS0EsRUFBRUEsSUFB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