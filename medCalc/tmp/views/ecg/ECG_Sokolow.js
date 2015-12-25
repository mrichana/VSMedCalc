var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ECG_Sokolow = (function (_super) {
        __extends(ECG_Sokolow, _super);
        function ECG_Sokolow() {
            _super.apply(this, arguments);
            this.description = new ECG_SokolowDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                ECG_V1S: 10,
                ECG_V5R: 10,
                ECG_V6R: 10,
                ECG_aVLR: 10
            };
            this.fields = [
                {
                    id: 'ECG_V1S',
                    name: 'Κύμα S στην V1 (mV)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'ECG_V5R',
                    name: 'Κύμα R στην V5 (mV)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'ECG_V6R',
                    name: 'Κύμα R στην V6 (mV)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'ECG_aVLR',
                    name: 'Κύμα R στην aVL (mV)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                },
                CalculatorViews.resultField
            ];
        }
        ECG_Sokolow.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var hypertrophy = values.ECG_V1S + Math.max(values.ECG_V5R, values.ECG_V6R) >= 35 || values.ECG_aVLR >= 11;
            if (hypertrophy) {
                ret.result = 'Θετικός για υπερτροφία μυοκαρδίου';
                ret.explanation = 'Ειδικότητα 100%';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else {
                ret.result = 'Αρνητικός για υπερτροφία μυοκαρδίου';
                ret.explanation = 'Ευαισθησία 22%';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return ECG_Sokolow;
    })(CalculatorViews.View);
    var ECG_SokolowDescription = (function (_super) {
        __extends(ECG_SokolowDescription, _super);
        function ECG_SokolowDescription() {
            _super.apply(this, arguments);
            this.id = 'ECG_Sokolow';
            this.name = 'Δείκτης Sokolow-Lyon';
            this.category = 'ΗΚΓ';
            this.tags = 'υπερτροφική μυοκαρδιοπάθεια';
            this.type = ECG_Sokolow;
        }
        return ECG_SokolowDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ECG_SokolowDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUNHX1Nva29sb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL2VjZy9FQ0dfU29rb2xvdy50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuRUNHX1Nva29sb3ciLCJDYWxjdWxhdG9yVmlld3MuRUNHX1Nva29sb3cuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuRUNHX1Nva29sb3cuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5FQ0dfU29rb2xvd0Rlc2NyaXB0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19Tb2tvbG93RGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBOEVyQjtBQTlFRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3ZCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUEwQkMsK0JBQUlBO1FBQTlCQTtZQUEwQkMsOEJBQUlBO1lBQzFCQSxnQkFBV0EsR0FBR0EsSUFBSUEsc0JBQXNCQSxFQUFFQSxDQUFDQTtZQUU3Q0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNoQkEsT0FBT0EsRUFBRUEsRUFBRUE7Z0JBQ1hBLE9BQU9BLEVBQUVBLEVBQUVBO2dCQUNYQSxPQUFPQSxFQUFFQSxFQUFFQTtnQkFDWEEsUUFBUUEsRUFBRUEsRUFBRUE7YUFDWEEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ25CQTtvQkFDSUEsRUFBRUEsRUFBRUEsU0FBU0E7b0JBQ2JBLElBQUlBLEVBQUVBLHFCQUFxQkE7b0JBQzNCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLENBQUNBO3dCQUNQQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsU0FBU0E7b0JBQ2JBLElBQUlBLEVBQUVBLHFCQUFxQkE7b0JBQzNCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLENBQUNBO3dCQUNQQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsU0FBU0E7b0JBQ2JBLElBQUlBLEVBQUVBLHFCQUFxQkE7b0JBQzNCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLENBQUNBO3dCQUNQQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsVUFBVUE7b0JBQ2RBLElBQUlBLEVBQUVBLHNCQUFzQkE7b0JBQzVCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLENBQUNBO3dCQUNQQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQTtnQkFDR0EsMkJBQVdBO2FBQ2RBLENBQUNBO1FBZ0JKQSxDQUFDQTtRQWZDRCxnQ0FBVUEsR0FBVkEsVUFBV0EsTUFBTUE7WUFDZkUsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsc0JBQU1BLEVBQUVBLENBQUNBO1lBQ3ZCQSxJQUFJQSxXQUFXQSxHQUFHQSxNQUFNQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUUzR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2RBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLG1DQUFtQ0EsQ0FBQ0E7Z0JBQ2pEQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSxpQkFBaUJBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBQ0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBO1lBQ2pEQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EscUNBQXFDQSxDQUFDQTtnQkFDbkRBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLGdCQUFnQkEsQ0FBQ0E7Z0JBQ25DQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFDQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDL0NBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2JBLENBQUNBOztRQUNIRixrQkFBQ0E7SUFBREEsQ0FBQ0EsQUFqRURELEVBQTBCQSxvQkFBSUEsRUFpRTdCQTtJQUNEQTtRQUFxQ0ksMENBQWVBO1FBQXBEQTtZQUFxQ0MsOEJBQWVBO1lBQ2xEQSxPQUFFQSxHQUFXQSxhQUFhQSxDQUFDQTtZQUMzQkEsU0FBSUEsR0FBV0Esc0JBQXNCQSxDQUFDQTtZQUN0Q0EsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDekJBLFNBQUlBLEdBQVdBLDZCQUE2QkEsQ0FBQ0E7WUFDM0NBLFNBQUlBLEdBQWdCQSxXQUFXQSxDQUFDQTtRQUNwQ0EsQ0FBQ0E7UUFBREQsNkJBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQXFDQSwrQkFBZUEsRUFNbkRBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFFQSxJQUFJQSxzQkFBc0JBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3BEQSxDQUFDQSxFQTlFTSxlQUFlLEtBQWYsZUFBZSxRQThFckIifQ==