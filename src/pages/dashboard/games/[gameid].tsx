import { useRouter } from 'next/router'
import { trpc } from '../../..//utils/trpc'

const Post = () => {
    const router = useRouter()
    const { gameid } = router.query as { gameid: string }

    return <p>Post: {gameid}</p>
}

export default Post
