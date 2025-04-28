"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

type NavMainItem = {
  title: string
  url: string
  icon?: Icon
  items?: NavMainSubItem[]
}

type NavMainSubItem = {
  title: string
  url: string
  isActive?: boolean
}

export function NavMain({
  items,
}: { items: NavMainItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
            {items.map((item: NavMainItem) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              </SidebarMenuButton>
              {item.items?.length ? (
                <SidebarMenuSub>
                {item.items.map((subItem: NavMainSubItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                    <a href={subItem.url}>{subItem.title}</a>
                  </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
