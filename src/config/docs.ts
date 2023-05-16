type Item = {
  title: string
  href: string
}

type Docs = {
  mainNav: Item[]
  sidebarNav: {
    title: string
    items: Item[]
  }[]
}

export const docs: Docs = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Components',
      href: '/docs/components/accordion',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
        },
        {
          title: 'Alert Dialog',
          href: '/docs/components/alert-dialog',
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
        },
        {
          title: 'Aspect Ratio',
          href: '/docs/components/aspect-ratio',
        },
        {
          title: 'Avatar',
          href: '/docs/components/avatar',
        },
        {
          title: 'Button',
          href: '/docs/components/button',
        },
        {
          title: 'Checkbox',
          href: '/docs/components/checkbox',
        },
        {
          title: 'Collapsible',
          href: '/docs/components/collapsible',
        },
        {
          title: 'Command',
          href: '/docs/components/command',
        },
        {
          title: 'Context Menu',
          href: '/docs/components/context-menu',
        },
        {
          title: 'Dialog',
          href: '/docs/components/dialog',
        },
        {
          title: 'Dropdown Menu',
          href: '/docs/components/dropdown-menu',
        },
        {
          title: 'Hover Card',
          href: '/docs/components/hover-card',
        },
        {
          title: 'Input',
          href: '/docs/components/input',
        },
        {
          title: 'Kbd',
          href: '/docs/components/kbd',
        },
        {
          title: 'Label',
          href: '/docs/components/label',
        },
        {
          title: 'Menubar',
          href: '/docs/components/menubar',
        },
        {
          title: 'Navigation Menu',
          href: '/docs/components/navigation-menu',
        },
        {
          title: 'Popover',
          href: '/docs/components/popover',
        },
        {
          title: 'Progress',
          href: '/docs/components/progress',
        },
        {
          title: 'Radio Group',
          href: '/docs/components/radio-group',
        },
        {
          title: 'Scroll Area',
          href: '/docs/components/scroll-area',
        },
        {
          title: 'Select',
          href: '/docs/components/select',
        },
        {
          title: 'Separator',
          href: '/docs/components/separator',
        },
        {
          title: 'Skeleton',
          href: '/docs/components/skeleton',
        },
        {
          title: 'Slider',
          href: '/docs/components/slider',
        },
        {
          title: 'Switch',
          href: '/docs/components/switch',
        },
        {
          title: 'Tabs',
          href: '/docs/components/tabs',
        },
        {
          title: 'Textarea',
          href: '/docs/components/textarea',
        },
        {
          title: 'Toggle',
          href: '/docs/components/toggle',
        },
        {
          title: 'Tooltip',
          href: '/docs/components/tooltip',
        },
      ],
    },
  ],
}
