var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_Stroke_Volume = (function (_super) {
        __extends(Triplex_Stroke_Volume, _super);
        function Triplex_Stroke_Volume() {
            _super.apply(this, arguments);
            this.description = new Triplex_Stroke_VolumeDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Diameter: 20,
                Triplex_LVOT_VTI: 20,
            };
            this.fields = [
                {
                    id: 'Triplex_LVOT_Diameter',
                    name: 'Διάμετρος LVOT (mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'Triplex_LVOT_VTI',
                    name: 'LVOT VTI<sub>1</sub> (cm)',
                    description: 'Υποβαλβιδικό Ολοκλήρωμα',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, CalculatorViews.resultField
            ];
        }
        Triplex_Stroke_Volume.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.suffix = 'cm<sup>3</sup>';
            if (ret.result < 60) {
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else {
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_Stroke_Volume;
    })(CalculatorViews.View);
    var Triplex_Stroke_VolumeDescription = (function (_super) {
        __extends(Triplex_Stroke_VolumeDescription, _super);
        function Triplex_Stroke_VolumeDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_Stroke_Volume';
            this.name = 'Stroke Volume (SV)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = '';
            this.type = Triplex_Stroke_Volume;
        }
        return Triplex_Stroke_VolumeDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_Stroke_VolumeDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9TdHJva2VfVm9sdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy90cmlwbGV4L1RyaXBsZXhfU3Ryb2tlX1ZvbHVtZS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9TdHJva2VfVm9sdW1lIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfU3Ryb2tlX1ZvbHVtZS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWUuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWVEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWVEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0EwRHJCO0FBMURELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBQ2JBO1FBQW9DQyx5Q0FBSUE7UUFBeENBO1lBQW9DQyw4QkFBSUE7WUFDcENBLGdCQUFXQSxHQUFHQSxJQUFJQSxnQ0FBZ0NBLEVBQUVBLENBQUNBO1lBQ3JEQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLHFCQUFxQkEsRUFBRUEsRUFBRUE7Z0JBQ3pCQSxnQkFBZ0JBLEVBQUVBLEVBQUVBO2FBQ3ZCQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLHVCQUF1QkE7b0JBQzNCQSxJQUFJQSxFQUFFQSxxQkFBcUJBO29CQUMzQkEsS0FBS0EsRUFBRUE7d0JBQ0hBLElBQUlBLEVBQUVBLFFBQVFBO3dCQUNkQSxJQUFJQSxFQUFFQSxDQUFDQTt3QkFDUEEsR0FBR0EsRUFBRUEsQ0FBQ0E7d0JBQ05BLEdBQUdBLEVBQUVBLEVBQUVBO3FCQUNWQTtpQkFDSkEsRUFBRUE7b0JBQ0NBLEVBQUVBLEVBQUVBLGtCQUFrQkE7b0JBQ3RCQSxJQUFJQSxFQUFFQSwyQkFBMkJBO29CQUNqQ0EsV0FBV0EsRUFBRUEseUJBQXlCQTtvQkFDdENBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUNOQSxHQUFHQSxFQUFFQSxHQUFHQTtxQkFDWEE7aUJBQ0pBLEVBQUVBLDJCQUFXQTthQUNqQkEsQ0FBQ0E7UUFnQk5BLENBQUNBO1FBZkdELDBDQUFVQSxHQUFWQSxVQUFXQSxNQUFNQTtZQUNiRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxzQkFBTUEsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLG1FQUFtRUEsQ0FBQ0E7WUFDbEZBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLG9CQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLEdBQUdBLENBQUNBLE9BQU9BLEdBQUdBLG9CQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBRXJEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxnQkFBZ0JBLENBQUFBO1lBRTdCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbEJBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNuREEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNqREEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7O1FBQ0xGLDRCQUFDQTtJQUFEQSxDQUFDQSxBQTVDREQsRUFBb0NBLG9CQUFJQSxFQTRDdkNBO0lBRURBO1FBQStDSSxvREFBZUE7UUFBOURBO1lBQStDQyw4QkFBZUE7WUFDMURBLE9BQUVBLEdBQVdBLHVCQUF1QkEsQ0FBQ0E7WUFDckNBLFNBQUlBLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7WUFDcENBLGFBQVFBLEdBQVdBLHNCQUFzQkEsQ0FBQ0E7WUFDMUNBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO1lBQ2xCQSxTQUFJQSxHQUFnQkEscUJBQXFCQSxDQUFDQTtRQUM5Q0EsQ0FBQ0E7UUFBREQsdUNBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQStDQSwrQkFBZUEsRUFNN0RBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxnQ0FBZ0NBLEVBQUVBLENBQUNBLENBQUNBO0FBRWhFQSxDQUFDQSxFQTFETSxlQUFlLEtBQWYsZUFBZSxRQTBEckIifQ==