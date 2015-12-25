var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_Continuity_Equation = (function (_super) {
        __extends(Triplex_Continuity_Equation, _super);
        function Triplex_Continuity_Equation() {
            _super.apply(this, arguments);
            this.description = new Triplex_Continuity_EquationDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_Continuity_Equation_A1_Diameter: 20,
                Triplex_Continuity_Equation_VTI1: 20,
                Triplex_Continuity_Equation_VTI2: 40
            };
            this.fields = [
                {
                    id: 'Triplex_Continuity_Equation_A1_Diameter',
                    name: 'Διάμετρος A<sub>1</sub> (mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'Triplex_Continuity_Equation_VTI1',
                    name: 'VTI<sub>1</sub> (cm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, {
                    id: 'Triplex_Continuity_Equation_VTI2',
                    name: 'VTI<sub>2</sub> (cm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/VR.png'
                }
            ];
        }
        Triplex_Continuity_Equation.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '(pi * ((Triplex_Continuity_Equation_A1_Diameter / 10) / 2) ^ 2) * Triplex_Continuity_Equation_VTI1 / Triplex_Continuity_Equation_VTI2';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula), 2);
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.suffix = 'cm<sup>2</sup>';
            return ret;
        };
        ;
        return Triplex_Continuity_Equation;
    })(CalculatorViews.View);
    var Triplex_Continuity_EquationDescription = (function (_super) {
        __extends(Triplex_Continuity_EquationDescription, _super);
        function Triplex_Continuity_EquationDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_Continuity_Equation';
            this.name = 'Εξίσωση Συνεχείας';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = '';
            this.type = Triplex_Continuity_Equation;
        }
        return Triplex_Continuity_EquationDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_Continuity_EquationDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Db250aW51aXR5X0VxdWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy90cmlwbGV4L1RyaXBsZXhfQ29udGludWl0eV9FcXVhdGlvbi50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Db250aW51aXR5X0VxdWF0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQ29udGludWl0eV9FcXVhdGlvbi5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0NvbnRpbnVpdHlfRXF1YXRpb24uY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0NvbnRpbnVpdHlfRXF1YXRpb25EZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0NvbnRpbnVpdHlfRXF1YXRpb25EZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0FvRXJCO0FBcEVELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQTBDQywrQ0FBSUE7UUFBOUNBO1lBQTBDQyw4QkFBSUE7WUFDMUNBLGdCQUFXQSxHQUFHQSxJQUFJQSxzQ0FBc0NBLEVBQUVBLENBQUNBO1lBRTNEQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLHVDQUF1Q0EsRUFBRUEsRUFBRUE7Z0JBQzNDQSxnQ0FBZ0NBLEVBQUVBLEVBQUVBO2dCQUNwQ0EsZ0NBQWdDQSxFQUFFQSxFQUFFQTthQUN2Q0EsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSx5Q0FBeUNBO29CQUM3Q0EsSUFBSUEsRUFBRUEsOEJBQThCQTtvQkFDcENBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxFQUFFQTtxQkFDVkE7aUJBQ0pBLEVBQUVBO29CQUNDQSxFQUFFQSxFQUFFQSxrQ0FBa0NBO29CQUN0Q0EsSUFBSUEsRUFBRUEsc0JBQXNCQTtvQkFDNUJBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxHQUFHQTtxQkFDWEE7aUJBQ0pBLEVBQUVBO29CQUNDQSxFQUFFQSxFQUFFQSxrQ0FBa0NBO29CQUN0Q0EsSUFBSUEsRUFBRUEsc0JBQXNCQTtvQkFDNUJBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxHQUFHQTtxQkFDWEE7aUJBQ0pBLEVBQUVBLDJCQUFXQSxFQUFFQTtvQkFDWkEsRUFBRUEsRUFBRUEsT0FBT0E7b0JBQ1hBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxPQUFPQTtxQkFDaEJBO29CQUNEQSxHQUFHQSxFQUFFQSxlQUFlQTtpQkFDdkJBO2FBQ0pBLENBQUNBO1FBVU5BLENBQUNBO1FBVEdELGdEQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtZQUNiRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxzQkFBTUEsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLHVJQUF1SUEsQ0FBQ0E7WUFDdEpBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLG9CQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLEdBQUdBLENBQUNBLE9BQU9BLEdBQUdBLG9CQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBRXREQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxnQkFBZ0JBLENBQUFBO1lBQzVCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTs7UUFDTEYsa0NBQUNBO0lBQURBLENBQUNBLEFBdERERCxFQUEwQ0Esb0JBQUlBLEVBc0Q3Q0E7SUFFREE7UUFBcURJLDBEQUFlQTtRQUFwRUE7WUFBcURDLDhCQUFlQTtZQUNoRUEsT0FBRUEsR0FBV0EsNkJBQTZCQSxDQUFDQTtZQUMzQ0EsU0FBSUEsR0FBV0EsbUJBQW1CQSxDQUFDQTtZQUNuQ0EsYUFBUUEsR0FBV0Esc0JBQXNCQSxDQUFDQTtZQUMxQ0EsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7WUFDbEJBLFNBQUlBLEdBQWdCQSwyQkFBMkJBLENBQUNBO1FBQ3BEQSxDQUFDQTtRQUFERCw2Q0FBQ0E7SUFBREEsQ0FBQ0EsQUFOREosRUFBcURBLCtCQUFlQSxFQU1uRUE7SUFFREEsK0JBQWVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLHNDQUFzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDdEVBLENBQUNBLEVBcEVNLGVBQWUsS0FBZixlQUFlLFFBb0VyQiJ9