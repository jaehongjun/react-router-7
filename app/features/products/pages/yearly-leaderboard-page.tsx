import { DateTime } from 'luxon'
import { data, Link } from 'react-router'
import { z } from 'zod'
import { Hero } from '~/common/components/hero'
import { Button } from '~/common/components/ui/button'
import { ProductCard } from '../components/product-card'
import ProductPagination from '../components/product-pagination'
import type { Route } from './+types/yearly-leaderboard-page'

const paramSchema = z.object({
  year: z.coerce.number(),
})

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Yearly Leaderboard | Product Hunt' }]
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

export default function YearlyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  })
  const previousYear = urlDate.minus({ year: 1 })
  const nextYear = urlDate.plus({ year: 1 })
  const todayYear = urlDate.equals(DateTime.now().startOf('year'))

  return (
    <div>
      <Hero
        title={`The best products of ${urlDate.toLocaleString({ year: '2-digit' })}`}
        description='The best products for your home.'
      />
      <div className='flex items-center gap-4 justify-center pb-4'>
        <Button variant='secondary' asChild>
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            &larr; {previousYear.startOf('year').toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {DateTime.now().startOf('year') >= nextYear.startOf('year') ? (
          <Button variant='secondary' asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.startOf('year').toLocaleString(DateTime.DATE_SHORT)} &rarr;
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
