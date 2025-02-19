'use client'

import Link from 'next/link'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { useLocalStorage } from 'usehooks-ts'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion } from '@/components/ui/accordion'

interface SidebarProps {
  storageKey?: string
}

export default function sidebar({
  storageKey = 't-sidebar-state',
}: SidebarProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  )
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization()
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key)
      }

      return acc
    },
    [],
  )

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }))
  }

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    )
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span>Workspaces</span>
        <Button
          asChild
          type="button"
          size={'icon'}
          variant="ghost"
          className="ml-auto"
        >
          <Link href={'/select-org'}>
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  )
}
