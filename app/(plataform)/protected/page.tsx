import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function page() {
const user = await currentUser()

  return (
    <div>{user?.firstName}</div>
  )
}
