import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Daily Leaderboard | Product Hunt" }];
};

export function loader({ params }: Route.LoaderArgs) {
    return {
        year: params.year,
        month: params.month,
        day: params.day
    };
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export function DailyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold">Daily Leaderboard {loaderData.month}/{loaderData.day}/{loaderData.year}</h1>
        </div>
    );
} 