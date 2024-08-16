import OrgControl from './_components/org-control'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}
