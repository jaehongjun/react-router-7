import { data, useNavigate, useSearchParams } from 'react-router'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/common/components/ui/pagination'

interface ProductPaginationProps {
  totalPages: number
}

export default function ProductPagination({ totalPages }: ProductPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') ?? 1)
  const navigate = useNavigate()
  if (isNaN(page) || page < 1 || page > totalPages) {
    throw data({
      error: 'Invalid page',
      status: 400,
    })
  }

  const onClick = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams, {
      preventScrollReset: false,
    })
    navigate(location.pathname + '?' + searchParams.toString(), {
      replace: true,
    })
  }

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {page === 1 ? null : (
            <>
              <PaginationItem>
                <PaginationPrevious
                  onClick={event => {
                    event.preventDefault()
                    onClick(page - 1)
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={event => {
                    event.preventDefault()
                    onClick(page - 1)
                  }}
                >
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationLink
              isActive
              onClick={event => {
                event.preventDefault()
                onClick(page)
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {page === totalPages ? null : (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={event => {
                    event.preventDefault()
                    onClick(page + 1)
                  }}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
              {page + 1 === totalPages ? null : (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={event => {
                    event.preventDefault()
                    onClick(page + 1)
                  }}
                />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
