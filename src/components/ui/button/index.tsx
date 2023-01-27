import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cx from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends PropsWithChildren<ButtonProps> {
  variant?: 'primary' | 'outlined'
}

export const Button: FC<Props> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const classes = cx(
    'transition hover:text-primary text-sm sm:text-md px-4 my-4',
    variant === 'outlined' && 'border hover:border-primary py-2 px-8',
    className,
  )
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
