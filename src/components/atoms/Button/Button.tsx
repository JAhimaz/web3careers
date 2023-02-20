import { useTheme } from '@emotion/react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

type ButtonElementType = Extract<React.ElementType, 'button' | 'a'> | typeof Link

type PolymorphicButtonProps<T extends ButtonElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  hidden?: boolean
}

export type ButtonProps<T extends ButtonElementType> = PolymorphicButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof PolymorphicButtonProps<T>>

const Button = <T extends ButtonElementType>({
  as = 'button' as T,
  variant,
  hidden,
  ...props
}: ButtonProps<T>) => {
  const theme = useTheme()
  const disabled = props.disabled || hidden

  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return {
          'backgroundColor': theme.primary,
        }
      case 'secondary':
        return {
          'backgroundColor': theme.secondary,
          '&:hover': {
            'backgroundColor': theme.primary,
          },
        }
      case undefined:
        return {
          'backgroundColor': theme.primary,
        }
    }
  }, [theme.primary, theme.secondary, variant])

  const variantDisabledStyle = useMemo(() => {
    switch (variant) {
      case undefined: 
        return {
          'backgroundColor': theme.dim,
        }
      default:
        return {
          'backgroundColor': theme.dim,
        }
    }
  }, [theme.dim, variant])

  const Component = as

  return (
    <Component
      {...props as any}
      disabled={disabled}
      css={[
        {
          'display': 'block',
          'padding': '1rem 1.25rem',
          'border': 'none',
          'borderRadius': '1rem',
          'cursor': 'pointer',
          'color': theme.white,
          'transition': '.25s',
          'fontWeight': '600',
          'fontSize': '1.125rem',
          'fontFamily': 'inherit',
          ...variantStyle,
          ...(disabled ? { ':hover': undefined} : {}),
        },
        props.disabled && [{ cursor: 'not-allowed' }, variantDisabledStyle],
        hidden && { cursor: 'default', PointerEvents: 'none', opacity: 0},
      ]}
    >
      <span css={{ display: 'inline-block' }}>
        {props.children}
      </span>
    </Component>
  )
}

export default Button