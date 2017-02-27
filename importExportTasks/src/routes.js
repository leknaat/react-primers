import Route from './components/app/route'

import Landing from './components/landing'
import importExportTasks from './components/importExportTasks'

export const routes = [
  { path: 'importExportTasks' }
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
