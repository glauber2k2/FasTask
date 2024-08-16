import { OrganizationSwitcher } from '@clerk/nextjs'

export default function page() {
  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  )
}
