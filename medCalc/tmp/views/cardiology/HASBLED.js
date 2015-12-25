var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var HASBLED = (function (_super) {
        __extends(HASBLED, _super);
        function HASBLED() {
            _super.apply(this, arguments);
            this.description = new HASBLEDDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                BloodPressure_Systolic: 120,
                Plasma_Creatinine: 1,
                HistoryOf_HepaticFailure: false,
                HistoryOf_Stroke: false,
                HistoryOf_Bleeding: false,
                HistoryOf_UncontrolledINR: false,
                Age: 60,
                HASBLED_Drugs: false,
                HistoryOf_Alcohol: false
            };
            this.fields = [
                CalculatorViews.bloodPressure_SystolicField,
                {
                    id: 'Plasma_Creatinine',
                    name: 'Κρεατινίνη Πλάσματος',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 8
                    }
                }, {
                    id: 'HistoryOf_HepaticFailure',
                    name: 'Ηπατική Νόσος',
                    description: 'Κίρρωση, Χολερυθρίνη>2xΦυσιολογικό, Τρανσαμινάσες>3xΦυσιολογικό',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Stroke',
                    name: 'Ιστορικό ΑΕΕ',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Bleeding',
                    name: 'Αιμορραγική διάθεση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_UncontrolledINR',
                    name: 'Δύσκολα ρυθμιζόμενο INR',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.ageField,
                {
                    id: 'HASBLED_Drugs',
                    name: 'Φάρμακα',
                    description: 'Αντιαιμοπεταλιακά, ΜΣΑΦ',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Alcohol',
                    name: 'Ιστορικό χρήσης Αλκοόλ',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.resultField
            ];
        }
        HASBLED.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += (values.BloodPressure_Systolic > 160) ? 1 : 0;
            ret.result += (values.Plasma_Creatinine > 2.6) ? 1 : 0;
            ret.result += (values.HistoryOf_HepaticFailure) ? 1 : 0;
            ret.result += (values.HistoryOf_Stroke) ? 1 : 0;
            ret.result += (values.HistoryOf_Bleeding) ? 1 : 0;
            ret.result += (values.HistoryOf_UncontrolledINR) ? 1 : 0;
            ret.result += (values.Age > 65) ? 1 : 0;
            ret.result += (values.HASBLED_Drugs) ? 1 : 0;
            ret.result += (values.HistoryOf_Alcohol) ? 1 : 0;
            switch (ret.result) {
                case 0:
                    ret.explanation = 'Ο κίνδυνος είναι 0.9%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 1:
                    ret.explanation = 'Ο κίνδυνος είναι 3.4%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 2:
                    ret.explanation = 'Ο κίνδυνος είναι 4.1%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 3:
                    ret.explanation = 'Ο κίνδυνος είναι 5.8%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 4:
                    ret.explanation = 'Ο κίνδυνος είναι 8.9%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                    break;
                case 5:
                    ret.explanation = 'Ο κίνδυνος είναι 9.1%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                    break;
                default:
                    ret.explanation = 'Δεν έχει υπολογισθεί ο κίνδυνος';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                    break;
            }
            return ret;
        };
        ;
        return HASBLED;
    })(CalculatorViews.View);
    var HASBLEDDescription = (function (_super) {
        __extends(HASBLEDDescription, _super);
        function HASBLEDDescription() {
            _super.apply(this, arguments);
            this.type = HASBLED;
            this.id = 'HASBLED';
            this.name = 'HAS-BLED Score';
            this.category = 'Καρδιολογία';
            this.tags = 'af';
        }
        return HASBLEDDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new HASBLEDDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSEFTQkxFRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvY2FyZGlvbG9neS9IQVNCTEVELnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5IQVNCTEVEIiwiQ2FsY3VsYXRvclZpZXdzLkhBU0JMRUQuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuSEFTQkxFRC5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkhBU0JMRUREZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5IQVNCTEVERGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBa0lyQjtBQWxJRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUFzQkMsMkJBQUlBO1FBQTFCQTtZQUFzQkMsOEJBQUlBO1lBQ3RCQSxnQkFBV0EsR0FBR0EsSUFBSUEsa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUV0Q0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN2Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxzQkFBc0JBLEVBQUVBLEdBQUdBO2dCQUMzQkEsaUJBQWlCQSxFQUFFQSxDQUFDQTtnQkFDcEJBLHdCQUF3QkEsRUFBRUEsS0FBS0E7Z0JBQy9CQSxnQkFBZ0JBLEVBQUVBLEtBQUtBO2dCQUN2QkEsa0JBQWtCQSxFQUFFQSxLQUFLQTtnQkFDekJBLHlCQUF5QkEsRUFBRUEsS0FBS0E7Z0JBQ2hDQSxHQUFHQSxFQUFFQSxFQUFFQTtnQkFDUEEsYUFBYUEsRUFBRUEsS0FBS0E7Z0JBQ3BCQSxpQkFBaUJBLEVBQUVBLEtBQUtBO2FBQzNCQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkEsMkNBQTJCQTtnQkFDM0JBO29CQUNJQSxFQUFFQSxFQUFFQSxtQkFBbUJBO29CQUN2QkEsSUFBSUEsRUFBRUEsc0JBQXNC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QSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM3Q0EsR0FBR0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUVqREEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDN0NBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDN0NBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDN0NBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDN0NBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQTtvQkFDbkRBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDMUNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQTtvQkFDbkRBLEtBQUtBLENBQUNBO2dCQUNWQTtvQkFDSUEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsaUNBQWlDQSxDQUFDQTtvQkFDcERBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQTtvQkFDL0NBLEtBQUtBLENBQUNBO1lBQ2RBLENBQUNBO1lBR0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBOztRQUNMRixjQUFDQTtJQUFEQSxDQUFDQSxBQXJIREQsRUFBc0JBLG9CQUFJQSxFQXFIekJBO0lBQ0RBO1FBQWlDSSxzQ0FBZUE7UUFBaERBO1lBQWlDQyw4QkFBZUE7WUFDNUNBLFNBQUlBLEdBQWdCQSxPQUFPQSxDQUFDQTtZQUM1QkEsT0FBRUEsR0FBV0EsU0FBU0EsQ0FBQ0E7WUFDdkJBLFNBQUlBLEdBQVdBLGdCQUFnQkEsQ0FBQ0E7WUFDaENBLGFBQVFBLEdBQVdBLGFBQWFBLENBQUNBO1lBQ2pDQSxTQUFJQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFBREQseUJBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQWlDQSwrQkFBZUEsRUFNL0NBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxrQkFBa0JBLEVBQUVBLENBQUNBLENBQUNBO0FBQ2xEQSxDQUFDQSxFQWxJTSxlQUFlLEtBQWYsZUFBZSxRQWtJckIifQ==