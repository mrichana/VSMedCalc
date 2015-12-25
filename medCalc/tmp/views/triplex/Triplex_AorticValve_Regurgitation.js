var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_Regurgitation_VC = (function (_super) {
        __extends(Triplex_AorticValve_Regurgitation_VC, _super);
        function Triplex_AorticValve_Regurgitation_VC() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_Regurgitation_VCDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_AorticValve_Regurgitation_VenaContracta_Width: 0.0,
            };
            this.fields = [
                {
                    id: 'Triplex_AorticValve_Regurgitation_VenaContracta_Width',
                    name: 'Vena Contracta Width (cm)',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.0,
                        max: 1.5
                    }
                },
                CalculatorViews.resultField
            ];
        }
        Triplex_AorticValve_Regurgitation_VC.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = values.Triplex_AorticValve_Regurgitation_VenaContracta_Width;
            if (values.Triplex_AorticValve_Regurgitation_VenaContracta_Width > 0.6) {
                ret.explanation = 'Σοβαρή Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (values.Triplex_AorticValve_Regurgitation_VenaContracta_Width > 0.3) {
                ret.explanation = 'Μέτρια Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = 'Μικρή Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_AorticValve_Regurgitation_VC;
    })(CalculatorViews.View);
    var Triplex_AorticValve_Regurgitation_VCDescription = (function (_super) {
        __extends(Triplex_AorticValve_Regurgitation_VCDescription, _super);
        function Triplex_AorticValve_Regurgitation_VCDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_AorticValve_Regurgitation_VC;
            this.id = 'Triplex_AorticValve_Regurgitation_VC';
            this.name = 'Aortic Valve Regurgitation (Vena Contracta)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\regurgitation';
        }
        return Triplex_AorticValve_Regurgitation_VCDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_Regurgitation_VCDescription());
    var Triplex_AorticValve_Regurgitation_PHT = (function (_super) {
        __extends(Triplex_AorticValve_Regurgitation_PHT, _super);
        function Triplex_AorticValve_Regurgitation_PHT() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_Regurgitation_PHTDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_AorticValve_Regurgitation_PHT: 550
            };
            this.fields = [
                {
                    id: 'Triplex_AorticValve_Regurgitation_PHT',
                    name: 'Pressure Half Time (ms)',
                    input: {
                        type: 'number',
                        step: 10,
                        min: 10,
                        max: 1000
                    }
                }, CalculatorViews.resultField
            ];
        }
        Triplex_AorticValve_Regurgitation_PHT.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = values.Triplex_AorticValve_Regurgitation_PHT;
            if (values.Triplex_AorticValve_Regurgitation_PHT < 200) {
                ret.explanation = 'Σοβαρή Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (values.Triplex_AorticValve_Regurgitation_PHT < 500) {
                ret.explanation = 'Μέτρια Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = 'Μικρή Ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_AorticValve_Regurgitation_PHT;
    })(CalculatorViews.View);
    var Triplex_AorticValve_Regurgitation_PHTDescription = (function (_super) {
        __extends(Triplex_AorticValve_Regurgitation_PHTDescription, _super);
        function Triplex_AorticValve_Regurgitation_PHTDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_AorticValve_Regurgitation_PHT;
            this.id = 'Triplex_AorticValve_Regurgitation_PHT';
            this.name = 'Aortic Valve Regurgitation (PHT)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\regurgitation';
        }
        return Triplex_AorticValve_Regurgitation_PHTDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_Regurgitation_PHTDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9SZWd1cmdpdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy90cmlwbGV4L1RyaXBsZXhfQW9ydGljVmFsdmVfUmVndXJnaXRhdGlvbi50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9SZWd1cmdpdGF0aW9uX1ZDIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfUmVndXJnaXRhdGlvbl9WQy5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1JlZ3VyZ2l0YXRpb25fVkMuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1JlZ3VyZ2l0YXRpb25fVkNEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1JlZ3VyZ2l0YXRpb25fVkNEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1JlZ3VyZ2l0YXRpb25fUEhUIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfUmVndXJnaXRhdGlvbl9QSFQuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9SZWd1cmdpdGF0aW9uX1BIVC5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfUmVndXJnaXRhdGlvbl9QSFREZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1JlZ3VyZ2l0YXRpb25fUEhURGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBZ0dyQjtBQWhHRCxX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