import { DateTime } from 'luxon'
import { data, Link } from 'react-router'
import { z } from 'zod'
import { Hero } from '~/common/components/hero'
import { Button } from '~/common/components/ui/button'
import { ProductCard } from '../components/product-card'
import ProductPagination from '../components/product-pagination'
import type { Route } from './+types/weekly-leaderboard-page'

const paramSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
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
    weekYear: parsedParams.year,
    weekNumber: parsedParams.week,
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

export default function DailyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  })
  const previousWeek = urlDate.minus({ week: 1 })
  const nextWeek = urlDate.plus({ week: 1 })
  const todayWeek = urlDate.equals(DateTime.now().startOf('week'))

  console.log(nextWeek.startOf('week').toLocaleString(DateTime.DATE_MED))
  console.log(DateTime.now().startOf('week').toLocaleString(DateTime.DATE_MED))
  return (
    <div>
      <Hero
        title={`The best products of ${urlDate
          .startOf('week')
          .toLocaleString(DateTime.DATE_MED)} ~ ${urlDate
          .endOf('week')
          .toLocaleString(DateTime.DATE_MED)}`}
        description='The best products for your home.'
      />
      <div className='flex items-center gap-4 justify-center pb-4'>
        <Button variant='secondary' asChild>
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            &larr; {previousWeek.startOf('week').toLocaleString(DateTime.DATE_MED)}
          </Link>
        </Button>
        {DateTime.now().startOf('week') >= nextWeek.startOf('week') ? (
          <Button variant='secondary' asChild>
            <Link to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}>
              {nextWeek.startOf('week').toLocaleString(DateTime.DATE_MED)} &rarr;
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
