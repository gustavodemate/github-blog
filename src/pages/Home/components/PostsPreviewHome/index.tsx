import { PostData } from "../..";
import { PostPreviewContainer, SectionTitleContainer } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


interface PostProps {
    post: PostData;
}

export function PostPreview({ post }: PostProps) {

    return (
        <PostPreviewContainer to={`/post/${post.number}`}>
            <div>
                <SectionTitleContainer>
                    <h2>{post.title}</h2>
                    <span>{formatDistanceToNow(new Date(post?.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                    })}</span>
                </SectionTitleContainer>

                <p>{post.body}</p>
            </div>

        </PostPreviewContainer>
    )
}