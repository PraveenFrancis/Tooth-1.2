// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
// import { AuthenticationLayoutComponent } from './common/authentication-layout.component';
import { LoginComponent } from './common/login.component';
import { Page404Component } from './common/page404.component';
import { Page500Component } from './common/page500.component';
import { SignupComponent } from './common/signup.component';
export const AppRoutes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '500',
        component: Page500Component
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
                // runGuardsAndResolvers: 'always',
            },
            {
                path: 'super-admin',
                loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule),
                // runGuardsAndResolvers: 'always',
            },
            {
                path: 'company',
                loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
                runGuardsAndResolvers: 'always',
            },
            {
                path: 'shop',
                loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
                runGuardsAndResolvers: 'always',
            },
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                runGuardsAndResolvers: 'always',
            },
        ]
    },
    {
        path: '**',
        component: Page404Component
    }
];
//# sourceMappingURL=app.routing.js.map