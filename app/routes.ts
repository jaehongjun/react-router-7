import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes'

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx",
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx",
      ),
      route("/:period", "features/products/pages/leaderboards-redirection-page.tsx"),
    ]),
    route("/categories", "features/products/pages/categories-page.tsx"),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix('jobs', [
      route('/', 'features/jobs/pages/jobs-page.tsx'),
      route('/submit', 'features/jobs/pages/submit-job-page.tsx')
    ]),
    ...prefix('community', [
      route('/', 'features/community/pages/community-page.tsx'),
      route('/posts', 'features/community/pages/posts-page.tsx'),
      route('/create', 'features/community/pages/create-post-page.tsx')
    ]),
    ...prefix('ideas', [route('/', 'features/ideas/pages/ideas-page.tsx')]),
    ...prefix('teams', [
      route('/', 'features/teams/pages/teams-page.tsx'),
      route('/create', 'features/teams/pages/create-team-page.tsx')
    ]),
    ...prefix('ideasgpt', [route('/', 'features/ideasgpt/pages/ideasgpt-page.tsx')]),
  ]),
  ...prefix("my", [
    route("/dashboard", "features/dashboard/pages/dashboard-page.tsx"),
    route("/profile", "features/profile/pages/profile-page.tsx"),
    route("/settings", "features/settings/pages/settings-page.tsx"),
    route("/notifications", "features/notifications/pages/notifications-page.tsx"),
    route("/messages", "features/messages/pages/messages-page.tsx"),
  ]),
  ...prefix("auth", [
    route("/login", "features/auth/pages/login-page.tsx"),
    route("/signup", "features/auth/pages/signup-page.tsx"),
    route("/logout", "features/auth/pages/logout-page.tsx"),
  ]),
] satisfies RouteConfig
