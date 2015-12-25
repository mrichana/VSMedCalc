var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_Modified_Bernoulli_Equation = (function (_super) {
        __extends(Triplex_Modified_Bernoulli_Equation, _super);
        function Triplex_Modified_Bernoulli_Equation() {
            _super.apply(this, arguments);
            this.description = new Triplex_Modified_Bernoulli_EquationDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_Modified_Bernoulli_Equation_V1: 0,
                Triplex_Modified_Bernoulli_Equation_V2: 2
            };
            this.fields = [
                {
                    id: 'Triplex_Modified_Bernoulli_Equation_V1',
                    name: 'V<sub>1</sub> (m/sec)',
                    input: {
                        type: 'number',
                        step: 0.01,
                        min: 0,
                        max: 10
                    }
                }, {
                    id: 'Triplex_Modified_Bernoulli_Equation_V2',
                    name: 'V<sub>2</sub> (m/sec)',
                    input: {
                        type: 'number',
                        step: 0.01,
                        min: 0,
                        max: 10
                    }
                }, CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/bernoulli.png'
                }
            ];
        }
        Triplex_Modified_Bernoulli_Equation.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '4 * ((Triplex_Modified_Bernoulli_Equation_V2 ^ 2) - (Triplex_Modified_Bernoulli_Equation_V1 ^ 2))';
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.suffix = 'mmHg';
            return ret;
        };
        ;
        return Triplex_Modified_Bernoulli_Equation;
    })(CalculatorViews.View);
    var Triplex_Modified_Bernoulli_EquationDescription = (function (_super) {
        __extends(Triplex_Modified_Bernoulli_EquationDescription, _super);
        function Triplex_Modified_Bernoulli_EquationDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_Modified_Bernoulli_Equation;
            this.id = 'Triplex_Modified_Bernoulli_Equation';
            this.name = 'Τροποποιημένη Εξίσωση Bernoulli';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = '';
        }
        return Triplex_Modified_Bernoulli_EquationDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_Modified_Bernoulli_EquationDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Nb2RpZmllZF9CZXJub3VsbGlfRXF1YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL3RyaXBsZXgvVHJpcGxleF9Nb2RpZmllZF9CZXJub3VsbGlfRXF1YXRpb24udHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTW9kaWZpZWRfQmVybm91bGxpX0VxdWF0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTW9kaWZpZWRfQmVybm91bGxpX0VxdWF0aW9uLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfTW9kaWZpZWRfQmVybm91bGxpX0VxdWF0aW9uLmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Nb2RpZmllZF9CZXJub3VsbGlfRXF1YXRpb25EZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X01vZGlmaWVkX0Jlcm5vdWxsaV9FcXVhdGlvbkRlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXlEckI7QUF6REQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBa0RDLHVEQUFJQTtRQUF0REE7WUFBa0RDLDhCQUFJQTtZQUNsREEsZ0JBQVdBLEdBQUdBLElBQUlBLDhDQUE4Q0EsRUFBRUEsQ0FBQ0E7WUFFbkVBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsc0NBQXNDQSxFQUFFQSxDQUFDQTtnQkFDekNBLHNDQUFzQ0EsRUFBRUEsQ0FBQ0E7YUFDNUNBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsd0NBQXdDQTtvQkFDNUNBLElBQUlBLEVBQUVBLHVCQUF1QkE7b0JBQzdCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLElBQUlBO3dCQUNWQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsd0NBQXdDQTtvQkFDNUNBLElBQUlBLEVBQUVBLHVCQUF1QkE7b0JBQzdCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLElBQUlBO3dCQUNWQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDTkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBO2lCQUNKQSxFQUFFQSwyQkFBV0EsRUFBRUE7b0JBQ1pBLEVBQUVBLEVBQUVBLE9BQU9BO29CQUNYQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsT0FBT0E7cUJBQ2hCQTtvQkFDREEsR0FBR0EsRUFBRUEsc0JBQXNCQTtpQkFDOUJBO2FBQ0pBLENBQUNBO1FBVU5BLENBQUNBO1FBVEdELHdEQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtZQUNiRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxzQkFBTUEsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLG1HQUFtR0EsQ0FBQ0E7WUFDbEhBLEdBQUdBLENBQUNBLE9BQU9BLEdBQUdBLG9CQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBRXJEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxvQkFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQzVEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFBQTtZQUNuQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7O1FBQ0xGLDBDQUFDQTtJQUFEQSxDQUFDQSxBQTVDREQsRUFBa0RBLG9CQUFJQSxFQTRDckRBO0lBQ0RBO1FBQTZESSxrRUFBZUE7UUFBNUVBO1lBQTZEQyw4QkFBZUE7WUFDeEVBLFNBQUlBLEdBQWdCQSxtQ0FBbUNBLENBQUNBO1lBQ3hEQSxPQUFFQSxHQUFXQSxxQ0FBcUNBLENBQUNBO1lBQ25EQSxTQUFJQSxHQUFXQSxpQ0FBaUNBLENBQUNBO1lBQ2pEQSxhQUFRQSxHQUFXQSxzQkFBc0JBLENBQUNBO1lBQzFDQSxTQUFJQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFBREQscURBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQTZEQSwrQkFBZUEsRUFNM0VBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSw4Q0FBOENBLEVBQUVBLENBQUNBLENBQUNBO0FBQzlFQSxDQUFDQSxFQXpETSxlQUFlLEtBQWYsZUFBZSxRQXlEckIifQ==