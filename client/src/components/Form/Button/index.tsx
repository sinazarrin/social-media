import { CustomButton } from "./styled"


const Button = ({variant, children, ...props}) => {
  return (
    <CustomButton variant={variant} {...props} >{children}</CustomButton>
  )
}

export default Button