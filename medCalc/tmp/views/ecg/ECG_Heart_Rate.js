var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ECG_Heart_Rate = (function (_super) {
        __extends(ECG_Heart_Rate, _super);
        function ECG_Heart_Rate() {
            _super.apply(this, arguments);
            this.description = new ECG_Heart_RateDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                ECG_HRQRS2QRSmm: 21,
                ECG_Cycles: 1,
                ECG_PaperSpeed: 25
            };
            this.fields = [
                {
                    id: 'ECG_HRQRS2QRSmm',
                    name: 'Απόσταση από QRS σε QRS(mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 5,
                        max: 100
                    }
                }, {
                    id: 'ECG_Cycles',
                    name: 'Αριθμός κύκλων',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 10
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
        ECG_Heart_Rate.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '60*ECG_PaperSpeed/ECG_HRQRS2QRSmm/ECG_Cycles';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.suffix = ' BPM';
            ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            return ret;
        };
        ;
        return ECG_Heart_Rate;
    })(CalculatorViews.View);
    var ECG_Heart_RateDescription = (function (_super) {
        __extends(ECG_Heart_RateDescription, _super);
        function ECG_Heart_RateDescription() {
            _super.apply(this, arguments);
            this.type = ECG_Heart_Rate;
            this.id = 'ECG_Heart_Rate';
            this.name = 'Καρδιακή Συχνότητα';
            this.category = 'ΗΚΓ';
            this.tags = 'af';
        }
        return ECG_Heart_RateDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ECG_Heart_RateDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUNHX0hlYXJ0X1JhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL2VjZy9FQ0dfSGVhcnRfUmF0ZS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuRUNHX0hlYXJ0X1JhdGUiLCJDYWxjdWxhdG9yVmlld3MuRUNHX0hlYXJ0X1JhdGUuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuRUNHX0hlYXJ0X1JhdGUuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5FQ0dfSGVhcnRfUmF0ZURlc2NyaXB0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19IZWFydF9SYXRlRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBK0RyQjtBQS9ERCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUE2QkMsa0NBQUlBO1FBQWpDQTtZQUE2QkMsOEJBQUlBO1lBQzdCQSxnQkFBV0EsR0FBR0EsSUFBSUEseUJBQXlCQSxFQUFFQSxDQUFDQTtZQUU5Q0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxlQUFlQSxFQUFFQSxFQUFFQTtnQkFDbkJBLFVBQVVBLEVBQUVBLENBQUNBO2dCQUNiQSxjQUFjQSxFQUFFQSxFQUFFQTthQUNyQkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSxpQkFBaUJBO29CQUNyQkEsSUFBSUEsRUFBRUEsNkJBQTZCQTtvQkFDbkNBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxHQUFHQTtxQkFDWEE7aUJBQ0pBLEVBQUVBO29CQUNDQSxFQUFFQSxFQUFFQSxZQUFZQTtvQkFDaEJBLElBQUlBLEVBQUVBLGdCQUFnQkE7b0JBQ3RCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLENBQUNBO3dCQUNQQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsZ0JBQWdCQTtvQkFDcEJBLElBQUlBLEVBQUVBLDJCQUEyQkE7b0JBQ2pDQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLE9BQU9BLEVBQUVBOzRCQUNMQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQTs0QkFDekJBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUVBO3lCQUM1QkE7cUJBQ0pBO2lCQUNKQTtnQkFDREEsMkJBQVdBO2FBQ2RBLENBQUNBO1FBVU5BLENBQUNBO1FBVEdELG1DQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtZQUNiRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxzQkFBTUEsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLDhDQUE4Q0EsQ0FBQ0E7WUFDN0RBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLG9CQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLEdBQUdBLENBQUNBLE9BQU9BLEdBQUdBLG9CQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3JEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUNwQkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBO1lBQzdDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTs7UUFDTEYscUJBQUNBO0lBQURBLENBQUNBLEFBbERERCxFQUE2QkEsb0JBQUlBLEVBa0RoQ0E7SUFDREE7UUFBd0NJLDZDQUFlQTtRQUF2REE7WUFBd0NDLDhCQUFlQTtZQUNuREEsU0FBSUEsR0FBZ0JBLGNBQWNBLENBQUNBO1lBQ25DQSxPQUFFQSxHQUFXQSxnQkFBZ0JBLENBQUNBO1lBQzlCQSxTQUFJQSxHQUFXQSxvQkFBb0JBLENBQUNBO1lBQ3BDQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUN6QkEsU0FBSUEsR0FBV0EsSUFBSUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQURELGdDQUFDQTtJQUFEQSxDQUFDQSxBQU5ESixFQUF3Q0EsK0JBQWVBLEVBTXREQTtJQUVEQSwrQkFBZUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEseUJBQXlCQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUN6REEsQ0FBQ0EsRUEvRE0sZUFBZSxLQUFmLGVBQWUsUUErRHJCIn0=