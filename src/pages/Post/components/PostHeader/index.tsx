import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import  ptBR  from "date-fns/locale/pt-BR";
import { NavLink } from "react-router-dom";
import { PostData } from "../../../Home";
import { PostAdditionalInfo, PostHeaderContainer, PostInfoContainer } from "./styles";

interface PostHeaderProps{
    post: PostData;
}


export function PostHeader({ post }: PostHeaderProps) {
    
    return (
        
        <PostInfoContainer>
            <div>
                <PostHeaderContainer>
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <NavLink to='/'> VOLTAR </NavLink>
                    </div>

                    <div>
                        <a href={post.html_url}>VER NO GITHUB</a>
                        <FontAwesomeIcon icon= {faUpRightFromSquare} />
                    </div>
                </PostHeaderContainer>    

                    <h1>{post.title}</h1>

                    <PostAdditionalInfo>
                        <div>
                            <FontAwesomeIcon icon= {faGithub} color='#3A536B'/>
                            <span>{post.user?.login}</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faCalendarDay} color='#3A536B'/>
                            <span>{post.created_at &&
                             formatDistanceToNow(new Date(post.created_at), {
                                addSuffix: true,
                                locale: ptBR,
                             })}</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faComment} color='#3A536B' />
                            <span>{post.comments}</span>
                        </div>
                    </PostAdditionalInfo>
            </div>

        </PostInfoContainer>
    )
}