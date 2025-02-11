import { Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/daily-leaderboard-page";

export const meta: Route.MetaFunction = () => {
    return [{ title: "Leaderboard | Product Hunt" }];
};

export function loader({ }: Route.LoaderArgs) {
    return {};
}

export function action({ }: Route.ActionArgs) {
    return {};
}

export default function LeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
    return (
        <div>
            <Hero
                title="Leaderboard"
                description="The best products for your home."
            />
            <div className='grid grid-cols-3 gap-4'>
                <div className="px-5">
                    <h2 className='text-5xl font-bold leading-tight tracking-tight'>Daily Leaderboard</h2>
                    <p className='text-xl font-light text-foreground'>The best products for your home.</p>
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                        key={index}
                        id='productId'
                        name='Product Name'
                        description='The best products for your home.'
                        commentCount={12}
                        viewCount={12}
                        upvoteCount={120}
                    />
                ))}
                <Button variant='link' asChild className='text-lg self-center'>
                    <Link to='/products/leaderboards/daily'>Explore all products &rarr;</Link>
                </Button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h2 className='text-5xl font-bold leading-tight tracking-tight'>Weekly Leaderboard</h2>
                    <p className='text-xl font-light text-foreground'>The best products for your home.</p>
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                        key={index}
                        id='productId'
                        name='Product Name'
                        description='The best products for your home.'
                        commentCount={12}
                        viewCount={12}
                        upvoteCount={120}
                    />
                ))}
                <Button variant='link' asChild className='text-lg self-center'>
                    <Link to='/products/leaderboards/weekly'>Explore all products &rarr;</Link>
                </Button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h2 className='text-5xl font-bold leading-tight tracking-tight'>Monthly Leaderboard</h2>
                    <p className='text-xl font-light text-foreground'>The best products for your home.</p>
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                        key={index}
                        id='productId'
                        name='Product Name'
                        description='The best products for your home.'
                        commentCount={12}
                        viewCount={12}
                        upvoteCount={120}
                    />
                ))}
                <Button variant='link' asChild className='text-lg self-center'>
                    <Link to='/products/leaderboards/monthly'>Explore all products &rarr;</Link>
                </Button>
            </div>
        </div>
    );
} 