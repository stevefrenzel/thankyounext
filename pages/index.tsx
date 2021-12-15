import type { NextPage } from 'next'
import DeleteMe from 'components/DeleteMe'

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
}

const Home: NextPage = () => {
  return (
    <>
      <DeleteMe />
    </>
  )
}

export default Home
