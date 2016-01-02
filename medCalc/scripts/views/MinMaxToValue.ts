/// <reference path="views.ts"/>

module CalculatorViews {
	'use strict';

	interface IValueLimit {
		value?: number;
		result: CalculatorViews.IResult;
	}

	export class MinMaxToValue {
		private _valueLimits: IValueLimit[];
		constructor(values: IValueLimit[]) {
			this._valueLimits = _.sortBy(values, 'value');
		}


		value(number: number): CalculatorViews.IResult {
			var ret = _.find(this._valueLimits, (valueLimit: IValueLimit) => {
				return (valueLimit.value ? valueLimit.value > number : true);
			});
			return ret.result;
		}
	}
}