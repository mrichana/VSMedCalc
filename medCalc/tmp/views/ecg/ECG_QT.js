var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ECG_QT = (function (_super) {
        __extends(ECG_QT, _super);
        function ECG_QT() {
            _super.apply(this, arguments);
            this.description = new ECG_QTDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                ECG_QTmm: 10,
                ECG_PaperSpeed: 25
            };
            this.fields = [
                {
                    id: 'ECG_QTmm',
                    name: 'Διάστημα (mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 1000
                    }
                }, {
                    id: 'ECG_PaperSpeed',
                    name: 'Ταχύτητα χαρτιού (mm/sec)',
                    input: {
                        type: 'select',
                        options: [
                            { name: '25', value: 25 },
                            { name: '50', value: 50 }
                        ]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        ECG_QT.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'ECG_QTmm * (1/ECG_PaperSpeed) * 1000';
            ret.result = CalculatorViews.View.evaluator(values, formula);
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.suffix = 'msec';
            return ret;
        };
        ;
        return ECG_QT;
    })(CalculatorViews.View);
    var ECG_QTDescription = (function (_super) {
        __extends(ECG_QTDescription, _super);
        function ECG_QTDescription() {
            _super.apply(this, arguments);
            this.type = ECG_QT;
            this.id = 'ECG_QT';
            this.name = 'mm σε msec';
            this.category = 'ΗΚΓ';
            this.isHelper = true;
            this.tags = '';
        }
        return ECG_QTDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ECG_QTDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUNHX1FULmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9lY2cvRUNHX1FULnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5FQ0dfUVQiLCJDYWxjdWxhdG9yVmlld3MuRUNHX1FULmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19RVC5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19RVERlc2NyaXB0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19RVERlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXVEckI7QUF2REQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBcUJDLDBCQUFJQTtRQUF6QkE7WUFBcUJDLDhCQUFJQTtZQUNyQkEsZ0JBQVdBLEdBQUdBLElBQUlBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7WUFFdENBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsUUFBUUEsRUFBRUEsRUFBRUE7Z0JBQ1pBLGNBQWNBLEVBQUVBLEVBQUVBO2FBQ3JCQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLFVBQVVBO29CQUNkQSxJQUFJQSxFQUFFQSxlQUFlQTtvQkFDckJBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxJQUFJQTtxQkFDWkE7aUJBQ0pBLEVBQUVBO29CQUNDQSxFQUFFQSxFQUFFQSxnQkFBZ0JBO29CQUNwQkEsSUFBSUEsRUFBRUEsMkJBQTJCQTtvQkFDakNBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsT0FBT0EsRUFBRUE7NEJBQ0xBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUVBOzRCQUN6QkEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsRUFBRUEsRUFBRUE7eUJBQzVCQTtxQkFDSkE7aUJBQ0pBO2dCQUNEQSwyQkFBV0E7YUFDZEEsQ0FBQ0E7UUFXTkEsQ0FBQ0E7UUFWR0QsMkJBQVVBLEdBQVZBLFVBQVdBLE1BQU1BO1lBQ2JFLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLHNCQUFNQSxFQUFFQSxDQUFDQTtZQUV2QkEsSUFBSUEsT0FBT0EsR0FBR0Esc0NBQXNDQSxDQUFDQTtZQUNyREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0Esb0JBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBQzdDQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxvQkFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUNyREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7WUFFcEJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBOztRQUNMRixhQUFDQTtJQUFEQSxDQUFDQSxBQXpDREQsRUFBcUJBLG9CQUFJQSxFQXlDeEJBO0lBQ0RBO1FBQWdDSSxxQ0FBZUE7UUFBL0NBO1lBQWdDQyw4QkFBZUE7WUFDM0NBLFNBQUlBLEdBQWdCQSxNQUFNQSxDQUFDQTtZQUMzQkEsT0FBRUEsR0FBV0EsUUFBUUEsQ0FBQ0E7WUFDdEJBLFNBQUlBLEdBQVdBLFlBQVlBLENBQUNBO1lBQzVCQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUN6QkEsYUFBUUEsR0FBWUEsSUFBSUEsQ0FBQ0E7WUFDekJBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUFERCx3QkFBQ0E7SUFBREEsQ0FBQ0EsQUFQREosRUFBZ0NBLCtCQUFlQSxFQU85Q0E7SUFFREEsK0JBQWVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDakRBLENBQUNBLEVBdkRNLGVBQWUsS0FBZixlQUFlLFFBdURyQiJ9