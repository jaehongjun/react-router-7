import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  Settings2Icon,
  User2Icon,
} from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '~/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './components/ui/navigation-menu'
import { Separator } from './components/ui/separator'

const navigationItems = [
  {
    name: 'Products',
    to: '/products',
    items: [
      {
        name: 'Leaderboards',
        discription:
          'A leaderboard is a list of users sorted by a specific metric, such as points, goals, or time. It can be used to track progress, competition, or achievement.',
        to: '/products/leaderboards',
      },
      {
        name: 'Categories',
        discription: 'Categories are a way to group products together.',
        to: '/products/categories',
      },
      {
        name: 'Search',
        discription: 'Search for a product by name or description.',
        to: '/products/search',
      },
      {
        name: 'Submit',
        discription: 'Submit a new product to the leaderboard.',
        to: '/products/submit',
      },
      {
        name: 'Promote',
        discription: 'Promote a product to the leaderboard.',
        to: '/products/promote',
      },
    ],
  },
  {
    name: 'Jobs',
    to: '/jobs',
    items: [
      {
        name: 'Remote Jobs',
        discription: 'View all remote jobs.',
        to: '/jobs?location=remote',
      },
      {
        name: 'Full-time Jobs',
        discription: 'View all full-time jobs.',
        to: '/jobs?type=full-time',
      },
      {
        name: 'Freelance Jobs',
        discription: 'View all freelance jobs.',
        to: '/jobs?type=freelance',
      },
      {
        name: 'Submit a Job',
        discription: 'Submit a new job to the jobs board.',
        to: '/jobs/submit',
      },
    ],
  },
  {
    name: 'Community',
    to: '/community',
    items: [
      {
        name: 'All posts',
        discription: 'View all posts.',
        to: '/community/posts',
      },
      {
        name: 'Top posts',
        discription: 'View the top posts.',
        to: '/community?sort=top',
      },
      {
        name: 'New posts',
        discription: 'View the new posts.',
        to: '/community?sort=new',
      },
      {
        name: 'Create a post',
        discription: 'Create a new post to the community.',
        to: '/community/create',
      },
    ],
  },
  {
    name: 'IdeasGPT',
    to: '/ideas',
  },
  {
    name: 'Teams',
    to: '/teams',
    items: [
      {
        name: 'All teams',
        discription: 'View all teams.',
        to: '/teams',
      },
      {
        name: 'Create a team',
        discription: 'Create a new team.',
        to: '/teams/create',
      },
    ],
  },
]

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean
  hasNotifications: boolean
  hasMessages: boolean
}) {
  return (
    <nav className='flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50'>
      <div className='flex items-center'>
        <Link to='/' className='font-bold tracking-tighter text-lg'>
          wemake
        </Link>
        <Separator orientation='vertical' className='h-6 mx-4' />
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map(item =>
              item?.items ? (
                <NavigationMenuItem
                  key={item.name}
                  className={cn([
                    'select-none rounded-md transition-colors focus:bg-accent hover:bg-accent',
                    item.to === '/products/promote' &&
                      'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20',
                    item.to === '/jobs/submit' &&
                      'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20',
                  ])}
                >
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[600px] font-light gap-3 p-4 grid-cols-2'>
                      {item.items?.map(item => (
                        <NavigationMenuItem key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              className='p-3 bg-primary space-y-1 block leading-none no-underline outline-none'
                              to={item.to}
                              key={item.name}
                            >
                              <span className='bg-primary-foreground text-sm font-medium'>
                                {item.name}
                              </span>
                              <p className='text-sm text-muted-foreground'>{item.discription}</p>
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name} className={navigationMenuTriggerStyle()}>
                  <NavigationMenuLink asChild>
                    <Link to={item.to}>{item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className='flex gap-2 items-center'>
          <Button size='icon' variant='ghost' asChild className='relative'>
            <Link to='/my/notifications'>
              <BellIcon className='size-4' />
              {hasNotifications && (
                <span className='absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500' />
              )}
            </Link>
          </Button>
          <Button size='icon' variant='ghost' asChild className='relative'>
            <Link to='/my/messages'>
              <MessageCircleIcon className='size-4' />
              {hasMessages && (
                <span className='absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500' />
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src='https://github.com/jaehongjun.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <DropdownMenuLabel>
                  <span className='text-sm font-medium'>Jaehong</span>
                  <span className='text-sm text-muted-foreground'>@username</span>
                </DropdownMenuLabel>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className='cursor-pointer'>
                  <Link to='/my/dashboard'>
                    <BarChart3Icon className='size-4 mr-2' />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className='cursor-pointer'>
                  <Link to='/my/profile'>
                    <User2Icon className='size-4 mr-2' />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className='cursor-pointer'>
                  <Link to='/my/settings'>
                    <Settings2Icon className='size-4 mr-2' />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className='cursor-pointer'>
                <Link to='/auth/logout'>
                  <LogOutIcon className='size-4 mr-2' />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className='flex gap-4 items-center'>
          <Button asChild variant='secondary'>
            <Link to='/auth/login'>Login</Link>
          </Button>
          <Button asChild>
            <Link to='/auth/signup'>Signup</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
