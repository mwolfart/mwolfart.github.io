import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cx from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends PropsWithChildren<ButtonProps> {
  variant?: 'primary'
}

export const Button: FC<Props> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const classes = cx(
    'transition hover:text-primary text-md px-4 my-4',
    className,
  )
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
