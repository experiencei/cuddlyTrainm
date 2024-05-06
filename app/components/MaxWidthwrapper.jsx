import { cn } from '@/lib/utils'

// The maxwidthwrapper for keeping components to a certain width and if needs be for readjustments

const MaxWidthWrapper = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </div>
  )
}


export default MaxWidthWrapper
