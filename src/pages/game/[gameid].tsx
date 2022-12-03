import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'

const Post = () => {
    const router = useRouter()
    const { gameid } = router.query as { gameid: string }

    const { data: game } = trpc.game.getAll.useQuery({ id: gameid })

    return <p>Post: { }</p>
}

export default Post
