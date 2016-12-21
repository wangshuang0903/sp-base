import App from '../containers/App'
import { PageNotFound } from '../features/common'
import {route as homeRoute} from '../features/home'
import {route as profileRoute} from '../features/profile'
import {route as accountRoute} from '../features/account'

const routes = [{
    path: '/',
    component: App,
    childRoutes: [
        profileRoute,
        homeRoute,
        accountRoute,
        { path: '*', name: 'Page not found', component: PageNotFound }
    ]
}]

// 处理默认路由

// Handle isIndex property of route config:
//  1. remove the first child with isIndex=true from childRoutes
//  2. assign it to the indexRoute property of the parent.
function handleIndexRoute(route) {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }

    route.childRoutes = route.childRoutes.filter(child => { // eslint-disable-line
        if (child.isIndex) {
            /* istanbul ignore next */
            if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
                console.error('More than one index route: ', route);
            }

            /* istanbul ignore else */
            if (!route.indexRoute) {
                delete child.path; // eslint-disable-line
                route.indexRoute = child; // eslint-disable-line
                return false;
            }
        }
        return true;
    });

    route.childRoutes.forEach(handleIndexRoute);
}
routes.forEach(handleIndexRoute);

export default routes