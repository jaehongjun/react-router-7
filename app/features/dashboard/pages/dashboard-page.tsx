import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Dashboard | Product Hunt" }];
};

export function loader({ }: Route.LoaderArgs) {
    return {};
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export function DashboardPage({ loaderData, actionData }: Route.ComponentProps) {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
    );
} 