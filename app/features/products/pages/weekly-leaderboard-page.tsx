import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Weekly Leaderboard | Product Hunt" }];
};

export function loader({ params }: Route.LoaderArgs) {
    return {
        year: params.year,
        week: params.week
    };
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export function WeeklyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold">Weekly Leaderboard Week {loaderData.week}, {loaderData.year}</h1>
        </div>
    );
} 