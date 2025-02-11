import { DateTime } from 'luxon'
import { data, Link } from 'react-router'
import { z } from 'zod'
import { Hero } from '~/common/components/hero'
import { Button } from '~/common/components/ui/button'
import { ProductCard } from '../components/product-card'
import ProductPagination from '../components/product-pagination'
import type { Route } from './+types/monthly-leaderboard-page'

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
})

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Weekly Leaderboard | Product Hunt' }]
}

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramSchema.safeParse(params)
  if (!success) {
    throw data(
      {
        error: 'Invalid date',
        status: 400,
      },
      {
        status: 400,
      },
    )
  }
  const date = DateTime.fromObject({
    year: parsedParams.year,
    month: parsedParams.month,
  }).setZone('Asia/Seoul')
  if (!date.isValid) {
    throw data(
      {
        error: 'Invalid date',
        status: 400,
      },
      {
        status: 400,
      },
    )
  }
  const today = DateTime.now().setZone('Asia/Seoul')
  if (date > today) {
    throw data(
      {
        error: 'Invalid date',
        status: 400,
      },
      {
        status: 400,
      },
    )
  }

  return { ...parsedParams }
}

export function action({}: Route.ActionArgs) {
  return {}
}

export default function MonthlyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  })
  const previousMonth = urlDate.minus({ month: 1 })
  const nextMonth = urlDate.plus({ month: 1 })
  const todayMonth = urlDate.equals(DateTime.now().startOf('month'))

  return (
    <div>
      <Hero
        title={`The best products of ${urlDate.toLocaleString({ year: '2-digit', month: 'long' })}`}
        description='The best products for your home.'
      />
      <div className='flex items-center gap-4 justify-center pb-4'>
        <Button variant='secondary' asChild>
          <Link to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}>
            &larr; {previousMonth.startOf('month').toLocaleString(DateTime.DATE_MED)}
          </Link>
        </Button>
        {DateTime.now().startOf('month') >= nextMonth.startOf('month') ? (
          <Button variant='secondary' asChild>
            <Link to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}>
              {nextMonth.startOf('month').toLocaleString(DateTime.DATE_MED)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className='space-y-5 w-full max-w-screen-md mx-auto'>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name={`Product ${index}`}
            description={`Description ${index}`}
            commentCount={index}
            upvoteCount={index}
            viewCount={index}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  )
}
