import { Avatar } from '@radix-ui/react-avatar'
import { Link } from 'react-router'
import { AvatarFallback, AvatarImage } from '~/common/components/ui/avatar'
import { Button } from '~/common/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card'

interface PostCardProps {
  id: string
  title: string
  author: string
  productName: string
  authorAvatarUrl?: string
  createdAt: string
}

export function PostCard({
  id,
  title,
  author,
  productName,
  authorAvatarUrl,
  createdAt,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className='bg-transparent hover:bg-card/50 transition-colors'>
        <CardHeader className='flex flex-row items-center gap-2'>
          <Avatar className='size-14'>
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className='space-y-2'>
            <CardTitle>{title}</CardTitle>
            <div className='flex gap-2 text-xsmleading-tight text-muted-foreground'>
              <span>{author} on</span>
              <span>{productName}</span>
              <span>•</span>
              <span>{createdAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className='flex justify-end'>
          <Button variant='link' asChild>
            <Link to={`/community/${id}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
