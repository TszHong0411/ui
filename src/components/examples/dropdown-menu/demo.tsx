import {
  Button,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@codewithhong/ui'
import React from 'react'

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [theme, setTheme] = React.useState('light')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type='button'>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value='light'>
            Light mode
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>Dark mode</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuItem>
              <span>New Team</span>
            </DropdownMenuItem>
            <DropdownMenuSubTrigger>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Log out</span>
        </DropdownMenuItem>
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuDemo
