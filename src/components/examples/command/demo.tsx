import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@codewithhong/ui'
import {
  IconCalculator,
  IconCalendar,
  IconCreditCard,
  IconMoodSmile,
  IconSettings,
  IconUser,
} from '@tabler/icons-react'

const CommandDemo = () => {
  return (
    <Command className='rounded-lg border border-accent-2'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <IconCalendar size={16} className='mr-2' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <IconMoodSmile size={16} className='mr-2' />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <IconCalculator size={16} className='mr-2' />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <IconUser size={16} className='mr-2' />
            <span>Profile</span>
            <CommandShortcut meta>P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCreditCard size={16} className='mr-2' />
            <span>Billing</span>
            <CommandShortcut meta>B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconSettings size={16} className='mr-2' />
            <span>Settings</span>
            <CommandShortcut meta>S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default CommandDemo
