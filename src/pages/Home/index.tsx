import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostPreview } from './components/PostsPreviewHome'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostListContainer } from './styles'

interface User {
    login: string
}

export interface PostData {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: User;                     
}

export function Home() {
    
    const [posts, setPosts] = useState<PostData[]>([])

    const fetchPosts = useCallback (async (query?:string) => {
    const response = await api.get(`/search/issues?q=${
        query ? query + '%20' : ''
      }repo:gustavodemate/github-blog`)

        setPosts(response.data.items);
        console.log(posts)
    }, [])

    const publicationsAmount = posts.length


    useEffect(() => {
        fetchPosts()
    }, []);
    
    return (
        <HomeContainer>
            <Profile/>
            <SearchForm
                fetchPosts={fetchPosts}
                publicationsAmount = {publicationsAmount}
            />
            <PostListContainer>
            {posts.map((post) => (
                <PostPreview key={post.number} post={post}/>
            ))}
            </PostListContainer>
        </HomeContainer>
    )
}