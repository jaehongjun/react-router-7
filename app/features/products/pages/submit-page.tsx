import { Form } from 'react-router'
import { Hero } from '~/common/components/hero'
import InputPair from '~/common/components/input-pair'
import type { Route } from './+types/submit-page'

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Submit Product | Product Hunt' }]
}

export function loader({}: Route.LoaderArgs) {
  return {}
}

export default function SubmitPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div>
      <Hero title='Submit Product' description='Submit a product to Product Hunt' />
      <Form className='grid grid-cols-2 gap-10 max-w-screen-1g mx-auto'>
        <InputPair
          id='name'
          name='name'
          label='Name'
          description='This is the name of your product'
          type='text'
        />
      </Form>
    </div>
  )
}
