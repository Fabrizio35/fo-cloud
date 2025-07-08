interface AuthTitleProps {
  title: string
}

const AuthTitle = ({ title }: AuthTitleProps) => {
  return (
    <h2 className="text-third font-bold text-3xl sm:text-5xl text-center">
      {title}
    </h2>
  )
}

export default AuthTitle
