import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@codewithhong/ui'

const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <div className='grid gap-4 pb-6 pt-2'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <Button type='submit' className='ml-auto'>
          Save changes
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDemo
