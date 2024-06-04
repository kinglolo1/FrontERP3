import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { SalesOrdersComponent } from './sales-orders/sales-orders.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'Users',
				component: UsersComponent
			},
			{
				path: 'Category',
				component: CategoryComponent
			},
			{
				path: 'Products',
				component: ProductsComponent
			},
			{
				path: 'Barcode',
				component: BarcodeComponent
			},
			{
				path: 'Purchase-Orders',
				component: PurchaseOrdersComponent
			},
			{
				path: 'Sales-Orders',
				component: SalesOrdersComponent
			},
			{
				path: 'Reports',
				component: ReportsComponent
			},
			{
				path: 'login',
				component: LoginComponent
			}
		]
	}
];
