import { Link } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar'
import { Badge } from '~/common/components/ui/badge'
import { Button } from '~/common/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card'

interface TeamCardProps {
  id: string
  username: string
  avatarUrl?: string
  roles: string[]
  location: string
  projectType: string
  projectDescription: string
}

export function TeamCard({
  id,
  username,
  avatarUrl,
  roles,
  location,
  projectType,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className='bg-transparent hover:bg-card/50 transition-colors'>
        <CardHeader className='flex flex-row items-center'>
          <CardTitle className='text-base leading-loose'>
            <Badge variant='secondary' className='inline-flex items-center shadow-sm gap-1'>
              <span>@{username}</span>
              <Avatar className='size-5'>
                <AvatarFallback>{username.slice(0, 1).toUpperCase()}</AvatarFallback>
                <AvatarImage src={avatarUrl} />
              </Avatar>
            </Badge>
            <span className='text-sm text-muted-foreground'>is looking for</span>
            {roles.map(role => (
              <Badge
                key={role}
                variant='secondary'
                className='inline-flex items-center shadow-sm gap-1'
              >
                {role}
              </Badge>
            ))}
            <Badge variant='secondary' className='inline-flex items-center shadow-sm gap-1'>
              <span>{location}</span>
            </Badge>
            <div className='flex flex-col gap-1'>
              <span>to build</span>
              <span>{projectDescription}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className='flex justify-end'>
          <Button variant='link'>Join Team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
