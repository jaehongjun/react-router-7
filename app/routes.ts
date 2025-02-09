import { type RouteConfig, index } from '@react-router/dev/routes'

export default [
  index('common/pages/home-page.tsx'),
  // ...prefix('products', [
  //   index('features/products/pages/products-page.tsx'),
  //   ...prefix('leaderboards', [
  //     index('features/products/pages/leaderboard-page.tsx'),
  //     route('/yearly/:year', 'features/products/pages/leaderboard-page.tsx'),
  //     route('/monthly/ :year/:month', 'features/products/pages/leaderboard-page.tsx'),
  //     route('/daily/ :year/:month/:day', 'features/products/pages/leaderboard-page.tsx'),
  //     route('/weekly/: year/:week', 'features/products/pages/leaderboard-page.tsx'),
  //   ]),
  //   ...prefix('jobs', [route('/', 'features/jobs/pages/jobs-page.tsx')]),
  //   ...prefix('community', [route('/', 'features/community/pages/community-page.tsx')]),
  //   ...prefix('ideas', [route('/', 'features/ideas/pages/ideas-page.tsx')]),
  //   ...prefix('teams', [route('/', 'features/teams/pages/teams-page.tsx')]),
  //   ...prefix('ideasgpt', [route('/', 'features/ideasgpt/pages/ideasgpt-page.tsx')]),
  // ]),
] satisfies RouteConfig
