import { DotIcon, EyeIcon, HeartHandshakeIcon, LockIcon } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '~/common/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card'

interface IdeaCardProps {
  id: string
  title: string
  viewCount: number
  createdAt: string
  likeCount: number
  claimed: boolean
}

export function IdeaCard({ id, title, viewCount, createdAt, likeCount, claimed }: IdeaCardProps) {
  return (
    <Card>
      <Link to={`/ideas/${id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className='flex items-center text-sm'>
        <div className='flex items-center gap-1'>
          <EyeIcon className='w-4 h-4' />
          <span>{viewCount}</span>
        </div>
        <DotIcon className='w-4 h-4' />
        <span>{createdAt}</span>
      </CardContent>
      <CardFooter className='flex justify-end gap-2'>
        <Button variant='outline'>
          <HeartHandshakeIcon className='w-4 h-4' />
          <span>{likeCount}</span>
        </Button>
        <Button asChild>
          <Link to={`/ideas/${id}`}>Explore idea &rarr;</Link>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant='outline' disabled className='cursor-not-allowed'>
            <LockIcon className='size-4'></LockIcon>Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
