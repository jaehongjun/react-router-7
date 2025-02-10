import { Link, type MetaFunction } from 'react-router'
import { PostCard } from '~/features/community/components/post-card'
import { IdeaCard } from '~/features/ideas/components/idea-card'
import { JobCard } from '~/features/jobs/components/job-card'
import { ProductCard } from '~/features/products/components/product-card'
import { TeamCard } from '~/features/teams/components/team-card'
import { Button } from '../components/ui/button'
import type { Route } from './+types/home-page'

export const meta: MetaFunction = () => {
  return [{ title: 'Home | Product Hunt' }];
};

export function loader({ }: Route.LoaderArgs) {
  return {};
}

export function action({ }: Route.ActionArgs) {
  return {};
}

export default function HomePage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className='px-20 space-y-40'>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>Today's Products</h2>
          <p className='text-xl font-light text-foreground'>The best products for your home.</p>
          <Button variant='link' asChild className='text-lg p-0'>
            <Link to='/products/leaderboard'>Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
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
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>Latest Discussions</h2>
          <p className='text-xl font-light text-foreground'>
            The best products for your community.
          </p>
          <Button variant='link' asChild className='text-lg p-0'>
            <Link to='/products/leaderboard'>Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            key={index}
            id='postId'
            title='Discussion Title'
            author='Hong'
            productName='Product Name'
            authorAvatarUrl='https://github.com/shadcn.png'
            createdAt='12 hours ago'
          />
        ))}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>Latest Discussions</h2>
          <p className='text-xl font-light text-foreground'>Find Ideas for your next project.</p>
          <Button variant='link' asChild className='text-lg p-0'>
            <Link to='/ideas/leaderboard'>Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <IdeaCard
            key={index}
            id='ideaId'
            title="A startup that helps you find ideas for your next project with AI , helping
                entrepreneurs and developers brainstorm innovative solutions and validate market
                opportunities quickly and efficiently. Our AI-powered platform analyzes market
                trends, user needs, and emerging technologies to suggest viable business concepts
                and project ideas tailored to your interests and expertise. Whether you're looking
                to build a SaaS product, mobile app, or physical product, we can help you find your
                next big idea"
            viewCount={123}
            createdAt='12 hours ago'
            likeCount={12}
            claimed={true}
          />
        ))}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>Latest Discussions</h2>
          <p className='text-xl font-light text-foreground'>Find your dream job.</p>
          <Button variant='link' asChild className='text-lg p-0'>
            <Link to='/jobs'>Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            key={index}
            id='jobsId'
            companyName='Bitcoin'
            companyLogoUrl='https://github.com/bitcoin.png'
            postedAt='12 hours ago'
            title='Software Engineer'
            employmentType='Full-time'
            locationType='Remote'
            salaryRange='$100,000 - $120,000'
            applicantCount={12}
          />
        ))}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>Find a team mate</h2>
          <p className='text-xl font-light text-foreground'>Join a team looking for a team mate.</p>
          <Button variant='link' asChild className='text-lg p-0'>
            <Link to='/teams'>Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <TeamCard
            key={index}
            id='teamId'
            username='lynn'
            avatarUrl='https://github.com/inthetiger.png'
            roles={['React Developer', 'PM']}
            location='🇺🇸'
            projectType='SaaS'
            projectDescription='a SaaS product'
          />
        ))}
      </div>
    </div>
  )
}
