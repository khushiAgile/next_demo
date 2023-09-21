import Dashbord from './dashbord/dashbord'
import { options } from './api/auth/[...nextauth]/option'
import { getServerSession } from 'next-auth'

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <>
      {session ? <Dashbord /> : <h1>You Shall Not Pass!</h1>}
    </>
  )
}
