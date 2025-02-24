import type { InputHTMLAttributes } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function InputPair({
  label,
  description,
  ...rest
}: {
  label: string
  description: string
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='space-y-2 flex flex-col'>
      <Label htmlFor={rest.id} className='flex flex-col'>
        {label}
        <small className='text-muted-foreground'>This is the name of your product</small>
      </Label>
      <Input {...rest} />
    </div>
  )
}
