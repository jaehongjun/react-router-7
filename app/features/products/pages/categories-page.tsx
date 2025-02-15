import { type MetaFunction } from 'react-router'
import { Hero } from '~/common/components/hero'
import { CategoryCard } from '../components/category-card'
import type { Route } from './+types/categories-page'

export const meta: MetaFunction = () => {
  return [{ title: 'Categories | Product Hunt' }]
}

export function loader({}: Route.LoaderArgs) {
  return {}
}

export function action({}: Route.ActionArgs) {
  return {}
}

export default function CategoriesPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className='space-y-10'>
      <Hero title='Categories' description='Browse products by category' />
      <div className='grid grid-cols-4 gap-10'>
        <CategoryCard id='categoryId' name='Category Name' description='Category Description' />
      </div>
    </div>
  )
}
