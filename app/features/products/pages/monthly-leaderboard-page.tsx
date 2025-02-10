import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Monthly Leaderboard | Product Hunt" }];
};

export function loader({ params }: Route.LoaderArgs) {
    return {
        year: params.year,
        month: params.month
    };
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export function MonthlyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold">Monthly Leaderboard {loaderData.month}/{loaderData.year}</h1>
        </div>
    );
} 