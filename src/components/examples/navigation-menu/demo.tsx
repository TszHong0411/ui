import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@codewithhong/ui'
import { cx } from '@codewithhong/utils'
import { IconBrandRadixUi } from '@tabler/icons-react'
import React from 'react'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='m-0 grid list-none gap-x-2 p-6 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]'>
              <li className='row-span-3 grid'>
                <NavigationMenuLink asChild>
                  <a
                    href='https://www.radix-ui.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-full w-full flex-col justify-end rounded-md p-4 transition-colors duration-150 hover:bg-hover'
                  >
                    <IconBrandRadixUi size={32} />
                    <div className='mb-2 mt-4 font-medium'>
                      Radix Primitives
                    </div>
                    <p className='text-sm text-accent-5'>
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='https://stitches.dev/' title='Stitches'>
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href='https://www.radix-ui.com/colors' title='Colors'>
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href='https://icons.radix-ui.com/' title='Icons'>
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='m-0 grid list-none gap-x-2 p-6 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3'>
              <ListItem
                title='Introduction'
                href='https://www.radix-ui.com/docs/primitives/overview/introduction'
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title='Getting started'
                href='https://www.radix-ui.com/docs/primitives/overview/getting-started'
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title='Styling'
                href='https://www.radix-ui.com/docs/primitives/overview/styling'
              >
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title='Animation'
                href='https://www.radix-ui.com/docs/primitives/overview/animation'
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title='Accessibility'
                href='https://www.radix-ui.com/docs/primitives/overview/accessibility'
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title='Releases'
                href='https://www.radix-ui.com/docs/primitives/overview/releases'
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href='https://github.com/radix-ui'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>((props, ref) => {
  const { className, children, title, ...rest } = props

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cx(
            'block rounded-md p-3 transition-colors duration-150 hover:bg-hover',
            className
          )}
          target='_blank'
          rel='noopener noreferrer'
          {...rest}
        >
          <div className='font-medium'>{title}</div>
          <p className='text-sm text-accent-5'>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'

export default NavigationMenuDemo
