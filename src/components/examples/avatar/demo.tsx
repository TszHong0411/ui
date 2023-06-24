import { Avatar, AvatarFallback, AvatarImage } from '@codewithhong/ui'

const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/codewithhong.png'
        alt='@codewithhong'
      />
      <AvatarFallback>TH</AvatarFallback>
    </Avatar>
  )
}

export default AvatarDemo
