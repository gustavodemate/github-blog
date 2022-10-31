import ReactMarkdown from "react-markdown";
import { PostAdditionalInfo } from "../PostHeader/styles";
import { PostContainer } from "./styles";


interface PostContent {
    content: string;
}

export function PostContent({ content }: PostContent) {
    return (
        <PostContainer>
            <ReactMarkdown children={content}/>            
        </PostContainer>
    )
}