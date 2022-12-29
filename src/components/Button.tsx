import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button(props: buttonProps){
  const Component = props.asChild ? Slot : 'button'

  return(
    <Component 
      className='px-4 py-2 rounded bg-violet-500 text-white font-bold'
      {...props}
    />
  )
}