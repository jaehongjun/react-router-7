import { Form } from 'react-router'
import { z } from 'zod'
import { Hero } from '~/common/components/hero'
import { Button } from '~/common/components/ui/button'
import { Input } from '~/common/components/ui/input'
import type { Route } from './+types/search-page'

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Search Products | Product Hunt' }]
}

const paramsSchema = z.object({
  query: z.string().optional().default(''),
  page: z.coerce.number().optional().default(1),
})

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)

  const { success, data: searchParamsData } = paramsSchema.safeParse(
    Object.fromEntries(searchParams),
  )

  if (!success) {
    throw new Response('Invalid search parameters', { status: 400 })
  }

  return { ...searchParamsData }
}

export function action({}: Route.ActionArgs) {
  return {}
}

export default function SearchPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div>
      <Hero title='Search Products' description='Search for products by name or description' />
      <Form method='get' className='flex items-center gap-2'>
        <Input name='query' placeholder='Search for products' className='text-lg' />
        <Button type='submit'>Search</Button>
      </Form>
      <div className='container mx-auto py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-bold'>Product 1</h2>
            <p className='text-gray-600'>Description of Product 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
