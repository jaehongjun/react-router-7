import { Link } from 'react-router'
import { Badge } from '~/common/components/ui/badge'
import { Button } from '~/common/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card'

interface JobCardProps {
  id: string
  companyName: string
  companyLogoUrl: string
  postedAt: string
  title: string
  employmentType: string
  locationType: string
  salaryRange: string
  applicantCount: number
}

export function JobCard({
  id,
  companyName,
  companyLogoUrl,
  postedAt,
  title,
  employmentType,
  locationType,
  salaryRange,
  applicantCount,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className='bg-transparent hover:bg-card/50 transition-colors'>
        <CardHeader>
          <div className='flex items-center gap-4 mb-4'>
            <img
              src={companyLogoUrl}
              alt={`${companyName} Logo`}
              className='size-10 rounded-full'
            />
            <div className='space-x-2'>
              <span className='text-sm font-medium text-accent-foreground'>{companyName}</span>
              <span className='text-xs text-muted-foreground'>{postedAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant='outline'>{employmentType}</Badge>
          <Badge variant='outline'>{locationType}</Badge>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium text-accent-foreground'>{salaryRange}</span>
            <span className='text-xs text-muted-foreground'>
              <span className='text-accent-foreground'>{applicantCount}</span> applicants
            </span>
          </div>
          <Button variant='secondary' size='sm'>
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
