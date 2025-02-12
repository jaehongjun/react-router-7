import { type MetaFunction } from 'react-router'
import { Hero } from '~/common/components/hero'
import { CategoryCard } from '../components/category-card'
import ProductPagination from '../components/product-pagination'
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
      <Hero title='Developer Tools' description='Browse developer tools by category' />
      <div className='grid grid-cols-4 gap-10'>
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={`categoryId-${index}`}
            name={`Category Name ${index}`}
            description={`Category Description ${index}`}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  )
}
