var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var GlasgowComaScale = (function (_super) {
        __extends(GlasgowComaScale, _super);
        function GlasgowComaScale() {
            _super.apply(this, arguments);
            this.description = new GlasgowComaScaleDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                GlasgowComaScale_Eyes: 4,
                GlasgowComaScale_Speech: 5,
                GlasgowComaScale_Mobility: 6
            };
            this.fields = [
                {
                    id: 'GlasgowComaScale_Eyes',
                    name: 'Μάτια',
                    input: {
                        type: 'select',
                        options: [{
                                value: 1,
                                name: 'Παραμένουν κλειστά'
                            }, {
                                value: 2,
                                name: 'Ανοίγουν στον πόνο'
                            }, {
                                value: 3,
                                name: 'Ανοίγουν στην εντολή'
                            }, {
                                value: 4,
                                name: 'Ανοικτά'
                            }]
                    }
                }, {
                    id: 'GlasgowComaScale_Speech',
                    name: 'Ομιλία',
                    input: {
                        type: 'select',
                        options: [{
                                value: 1,
                                name: 'Κανένας ήχος'
                            }, {
                                value: 2,
                                name: 'Άναρθρες κραυγές'
                            }, {
                                value: 3,
                                name: 'Ομιλία με ασάφεια'
                            }, {
                                value: 4,
                                name: 'Αποπροσανατολισμένος'
                            }, {
                                value: 5,
                                name: 'Φυσιολογική Επικοινωνία'
                            }]
                    }
                }, {
                    id: 'GlasgowComaScale_Mobility',
                    name: 'Κινητικότητα',
                    input: {
                        type: 'select',
                        options: [{
                                value: 1,
                                name: 'Καμία κινητικότητα'
                            }, {
                                value: 2,
                                name: 'Εκτείνει στον πόνο(απεγκεφαλισμός)'
                            }, {
                                value: 3,
                                name: 'Κάμπτει στον πόνο (αποφλοίωση)'
                            }, {
                                value: 4,
                                name: 'Αποσύρει στα επώδυνα ερεθίσματα'
                            }, {
                                value: 5,
                                name: 'Εντοπίζει τα επώδυνα ερεθίσματα'
                            }, {
                                value: 6,
                                name: 'Εκτελεί εντολές'
                            }]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        GlasgowComaScale.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = values.GlasgowComaScale_Eyes * 1 +
                values.GlasgowComaScale_Speech * 1 +
                values.GlasgowComaScale_Mobility * 1;
            if (ret.result > 13) {
                ret.explanation = 'Καμμία ή Μικρή Βαθμού Εγκεφαλική Βλαβη';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result > 8) {
                ret.explanation = 'Μέτριου Βαθμού Εγκεφαλική Βλάβη';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result > 0) {
                ret.explanation = 'Σοβαρού Βαθμού Εγκεφαλική Βλάβη (Διασωλήνωση)';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else {
                ret.explanation = '';
            }
            return ret;
        };
        ;
        return GlasgowComaScale;
    })(CalculatorViews.View);
    var GlasgowComaScaleDescription = (function (_super) {
        __extends(GlasgowComaScaleDescription, _super);
        function GlasgowComaScaleDescription() {
            _super.apply(this, arguments);
            this.type = GlasgowComaScale;
            this.id = 'GlasgowComaScale';
            this.name = 'Κλίμακα Γλασκόβης';
            this.category = 'Παθολογία';
            this.tags = '';
        }
        return GlasgowComaScaleDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new GlasgowComaScaleDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xhc2dvd0NvbWFTY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvaW50ZXJuYWxNZWRpY2luZS9HbGFzZ293Q29tYVNjYWxlLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5HbGFzZ293Q29tYVNjYWxlIiwiQ2FsY3VsYXRvclZpZXdzLkdsYXNnb3dDb21hU2NhbGUuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuR2xhc2dvd0NvbWFTY2FsZS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkdsYXNnb3dDb21hU2NhbGVEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5HbGFzZ293Q29tYVNjYWxlRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBa0hyQjtBQWxIRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUErQkMsb0NBQUlBO1FBQW5DQTtZQUErQkMsOEJBQUlBO1lBQy9CQSxnQkFBV0EsR0FBR0EsSUFBSUEsMkJBQTJCQSxFQUFFQSxDQUFDQTtZQUVoREEsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxxQkFBcUJBLEVBQUVBLENBQUNBO2dCQUN4QkEsdUJBQXVCQSxFQUFFQSxDQUFDQTtnQkFDMUJBLHlCQUF5QkEsRUFBRUEsQ0FBQ0E7YUFDL0JBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsdUJBQXVCQTtvQkFDM0JBLElBQUlBLEVBQUVBLE9BQU9BO29CQUNiQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLE9BQU9BLEVBQUVBLENBQUNBO2dDQUNOQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsb0JBQW9CQTs2QkFDN0JBLEVBQUVBO2dDQUNLQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsb0JBQW9CQTs2QkFDN0JBLEVBQUVBO2dDQUNDQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsc0JBQXNCQTs2QkFDL0JBLEVBQUVBO2dDQUNDQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsU0FBU0E7NkJBQ2xCQSxDQUFDQTtxQkFDVEE7aUJBQ0pBLEVBQUVBO29CQUNDQSxFQUFFQSxFQUFFQSx5QkFBeUJBO29CQUM3QkEsSUFBSUEsRUFBRUEsUUFBUUE7b0JBQ2RBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0NBQ05BLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxjQUFjQTs2QkFDdkJBLEVBQUVBO2dDQUNLQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsa0JBQWtCQTs2QkFDM0JBLEVBQUVBO2dDQUNDQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsbUJBQW1CQTs2QkFDNUJBLEVBQUVBO2dDQUNDQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEsc0JBQXNCQTs2QkFDL0JBLEVBQUVBO2dDQUNDQSxLQUFLQSxFQUFFQSxDQUFDQTtnQ0FDUkEsSUFBSUEsRUFBRUEseUJBQXlCQTs2QkFDbENBLENBQUNBO3FCQUNUQTtpQkFDSkEsRUFBRUE7b0JBQ0NBLEVBQUVBLEVBQUVBLDJCQUEyQkE7b0JBQy9CQSxJQUFJQSxFQUFFQSxjQUFjQTtvQkFDcEJBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFRQTt3QkFDZEEsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0NBQ05BLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxvQkFBb0JBOzZCQUM3QkEsRUFBRUE7Z0NBQ0tBLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxvQ0FBb0NBOzZCQUM3Q0EsRUFBRUE7Z0NBQ0NBLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxnQ0FBZ0NBOzZCQUN6Q0EsRUFBRUE7Z0NBQ0NBLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxpQ0FBaUNBOzZCQUMxQ0EsRUFBRUE7Z0NBQ0NBLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxpQ0FBaUNBOzZCQUMxQ0EsRUFBRUE7Z0NBQ0NBLEtBQUtBLEVBQUVBLENBQUNBO2dDQUNSQSxJQUFJQSxFQUFFQSxpQkFBaUJBOzZCQUMxQkEsQ0FBQ0E7cUJBQ1RBO2lCQUNKQTtnQkFDREEsMkJBQVdBO2FBQ2RBLENBQUNBO1FBdUJOQSxDQUFDQTtRQXRCR0QscUNBQVVBLEdBQVZBLFVBQVdBLE1BQU1BO1lBQ2JFLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLHNCQUFNQSxFQUFFQSxDQUFDQTtZQUN2QkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxDQUFDQTtnQkFDekNBLE1BQU1BLENBQUNBLHVCQUF1QkEsR0FBR0EsQ0FBQ0E7Z0JBQ2xDQSxNQUFNQSxDQUFDQSx5QkFBeUJBLEdBQUdBLENBQUNBLENBQUNBO1lBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbEJBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHdDQUF3Q0EsQ0FBQ0E7Z0JBQzNEQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4QkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsaUNBQWlDQSxDQUFDQTtnQkFDcERBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQTtZQUN2REEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSwrQ0FBK0NBLENBQUNBO2dCQUNsRUEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBO1lBQ25EQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDekJBLENBQUNBO1lBR0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBOztRQUNMRix1QkFBQ0E7SUFBREEsQ0FBQ0EsQUFyR0RELEVBQStCQSxvQkFBSUEsRUFxR2xDQTtJQUNEQTtRQUEwQ0ksK0NBQWVBO1FBQXpEQTtZQUEwQ0MsOEJBQWVBO1lBQ3JEQSxTQUFJQSxHQUFnQkEsZ0JBQWdCQSxDQUFDQTtZQUNyQ0EsT0FBRUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUNoQ0EsU0FBSUEsR0FBV0EsbUJBQW1CQSxDQUFDQTtZQUNuQ0EsYUFBUUEsR0FBV0EsV0FBV0EsQ0FBQ0E7WUFDL0JBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUFERCxrQ0FBQ0E7SUFBREEsQ0FBQ0EsQUFOREosRUFBMENBLCtCQUFlQSxFQU14REE7SUFFREEsK0JBQWVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLDJCQUEyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDM0RBLENBQUNBLEVBbEhNLGVBQWUsS0FBZixlQUFlLFFBa0hyQiJ9