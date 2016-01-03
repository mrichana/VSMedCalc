/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="views.ts"/>

module CalculatorViews {
	'use strict';
	export interface ICategory {
		name: string;
		categories: { [index: string]: any};
		views: { [index: string]: IView };
	}

	export interface IViewsCollection {
		filter(filterText: string): IFilteredViews;
	}

	export interface IFilteredViews {
		filter: string;
		views: { [index: string]: IView };
		categories: ICategory;
		viewsList: (topLevelCategory: ICategory) => IView[];
	}

	class Category implements ICategory {
		name: string = '';
		categories: { [index: string]: any } = {};
		views: { [index: string]: IView } = {};
		constructor(name: string = '') {
			this.name = name;
		}
	}

	export class ViewsCollection implements IViewsCollection {
		/* Private Members*/
		private static __viewDescriptions: { [index: string]: IViewDescription } = {};
		private _views: { [index: string]: IView } = {};
		private _categories: ICategory = { name: '', categories: {}, views: {} };
		private _viewsList: IView[] = new Array<IView>();

		public static add(viewDescription: IViewDescription): void {
			ViewsCollection.__viewDescriptions[viewDescription.id] = viewDescription;
		}

		constructor(values: any) {
			_.forEach(ViewsCollection.__viewDescriptions, (viewDescription: IViewDescription) => {
				var view = viewDescription.factory(values);
				_.each(view.fields, function (field) {
					if (field.calculator) {
						var calculator = ViewsCollection.__viewDescriptions[field.calculator];
						if (calculator) {
							field.calculatorView = calculator.factory(values);
						}
					}
				});
				this._views[view.description.id] = view;
			});
			this._categories = this.prepareCategories(this.views);
			this._viewsList = ViewsCollection.prepareViewsList(this._categories);
		}

		get views(): { [index: string]: IView }  { return this._views; };

		public filter(filterText: string): IFilteredViews {
			if (!filterText) {
				return {
					filter: filterText,
					views: this._views,
					categories: this._categories,
					viewsList: ViewsCollection.prepareViewsList
				};
			};
			var regEx = new RegExp(filterText, 'i');
			var filteredviews: { [index: string]: IView } = {};
			_.forEach(this._views, (view: IView) => {
				if (regEx.test(view.description.name + '|' + view.description.category[0] + '|' + view.description.category[1] + '|' + view.description.category[2])) {
					filteredviews[view.description.id] = view;
				}
			}, this);
			var filteredCategories: ICategory = this.prepareCategories(filteredviews);
			var filteredViewsList: IView[] = ViewsCollection.prepareViewsList(filteredCategories);

			return {
				filter: filterText,
				views: filteredviews,
				categories: filteredCategories,
				viewsList: ViewsCollection.prepareViewsList
			};
		};



		private prepareCategories(views: { [index: string]: IView}): ICategory {
			var ret = new Category();
			_.forEach(views, (view: IView) => {
				if (!view.description.isHelper) {
					if (view.description.category[0]) {
						if (!ret.categories[view.description.category[0]]) {
							ret.categories[view.description.category[0]] = new Category(view.description.category[0]);
						}
					}
					if (view.description.category[1]) {
						if (!ret.categories[view.description.category[0]].categories[view.description.category[1]]) {
							ret.categories[view.description.category[0]].categories[view.description.category[1]] = new Category(view.description.category[1]);
						}
					}
					if (view.description.category[2]) {
						if (!ret.categories[view.description.category[0]].categories[view.description.category[1]].categories[view.description.category[2]]) {
							ret.categories[view.description.category[0]].categories[view.description.category[1]].categories[view.description.category[2]] = new Category(view.description.category[2]);
						}
					}

					if (view.description.category[2]) {
						ret.categories[view.description.category[0]].categories[view.description.category[1]].categories[view.description.category[2]].views[view.description.id] = view;
					} else if (view.description.category[1]) {
							ret.categories[view.description.category[0]].categories[view.description.category[1]].views[view.description.id] = view;
					} else if(view.description.category[0]) {
								ret.categories[view.description.category[0]].views[view.description.id] = view;
							}
				}
			}, this);
			return ret;
		}
		private static prepareViewsList(topLevelCategory): IView[] {
			var ret = [];
			_.forEach(topLevelCategory.views, (view: IView) => {
				ret.push(view);
			});
			_.forEach(topLevelCategory.categories, (category: ICategory) => {
				ret = ret.concat(ViewsCollection.prepareViewsList(category));
			});
			return ret;
		}
	}



	//export interface IViewDescriptions {
	//	views: _.Dictionary<CalculatorViews.IView>;
	//	categories: any;
	//}

	//export class viewsCollection {
	//	private static __viewDescriptions: _.Dictionary<CalculatorViews.IViewDescription> = {};

	//	static add(viewDescription: CalculatorViews.IViewDescription): void {
	//		viewsCollection.__viewDescriptions[viewDescription.id] = viewDescription;
	//	};

	//	private _views: _.Dictionary<CalculatorViews.IView> = {};
	//	private _categories: any = {};

	//	private _categoriesList: any = [];

	//	constructor(values: any) {
	//		_.each(viewsCollection.__viewDescriptions, (viewDescription: IViewDescription) => {
	//			var view = viewDescription.factory(values);
	//			_.each(view.fields, function (field) {
	//				if (field.calculator) {
	//					var calculator = viewsCollection.__viewDescriptions[field.calculator];
	//					if (calculator) {
	//						field.calculatorView = calculator.factory(values);
	//					}
	//				}
	//			});
	//			this._views[view.description.id] = view;
	//			viewsCollection.__prepareCategories(view, this._categories);
	//			viewsCollection.__prepareCategoriesList(view, this._categoriesList);
	//		});
	//	};

	//	private static __prepareCategories(view: IView, categories: any = {})  {
	//		if (!view.description.isHelper && view.description.category) {
	//			var descCategories: string[] = view.description.category;

	//			var recursiveCategories = categories;
	//			_.each(descCategories, (descCategory: string, index: number) => {
	//				if (!_.has(recursiveCategories, descCategory)) {
	//					recursiveCategories[descCategory] = { name: descCategory };
	//				}
	//				recursiveCategories = recursiveCategories[descCategory];
	//			});
	//			recursiveCategories[view.description.id] = view;
	//		}
	//		return categories;        
	//	}

	//	private static __prepareCategoriesList(view: IView, categoriesList: any = {}) {
	//		if (!view.description.isHelper && view.description.category) {
	//			_.each(view.description.category, (category: string, index: number) => {
	//				if (!_.has(categoriesList, category)) {
	//					categoriesList[category] = { name: category };
	//				}
	//			}
	//		}

	//	}

	//	get views() {
	//		return this._views;
	//	};
	//	get categories() {
	//		return this._categories;
	//	};

	//	get allViewDescriptions(): IViewDescriptions {
	//		return {
	//			views: this.views,
	//			categories: this.categories, 
	//		};
	//	}

	//	private filterCache: _.Dictionary<IViewDescriptions> = {};
	//	private filterCacheFunc(filterString: string): _.Dictionary<IView> {
	//		if (!filterString) return this.views;
	//		if (_.has(this.filterCache, filterString)) return this.filterCache[filterString].views;
	//		return this.filterCacheFunc(filterString.slice(0, -1));

	//	};
	//	filter(filterString: string): IViewDescriptions {
	//		var ret: IViewDescriptions;
	//		if (filterString) {
	//			filterString = filterString.toLocaleLowerCase();

	//			if (_.has(this.filterCache, filterString)) {
	//				return this.filterCache[filterString];
	//			}

	//			var regex = new RegExp(filterString, 'i');

	//			var categories: { name: string, categories: _.Dictionary<_.Dictionary<IView>> }[] = [];
	//			var views = _.pick(this.filterCacheFunc(filterString), function (view: IView) {
	//				if (view.description.isHelper) {
	//					return false;
	//				}
	//				if (regex.test(view.description.name) || _.any(view.description.category, (category) => { return regex.test(category) }) || regex.test(view.description.tags)) {
	//					viewsCollection.__prepareCategories(view, categories);
	//					return true;
	//				}
	//				return false;
	//			});
	//			ret = {
	//				views: views,
	//				categories: categories,
	//			};
	//			this.filterCache[filterString] = ret;
	//		} else {
	//			var views = _.omit(this.views, function (view: IView) {
	//				return view.description.isHelper;
	//			});
	//			ret = {
	//				views: views,
	//				categories: this.categories,
	//			};
	//		};
	//		return ret;
	//	};
	//};


}
