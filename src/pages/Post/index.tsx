import { PostHeader } from "./components/PostHeader";
import { PostContent } from "./components/PostContent";
import { useState, useEffect, useCallback } from 'react';
import { PostData } from "../Home";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

export function Post() {
    const [postsData, setPostsData] = useState<PostData>({} as PostData);

    const { id } = useParams();

    const PostComplete = useCallback( async (query?:string) => {
        const response = await api.get(`/repos/gustavodemate/github-blog/issues/${id}`)

        setPostsData(response.data);
    }, [])


    useEffect(() => {
        PostComplete()
    }, []);

    return (
        <>
        <PostHeader post = {postsData}/>
        <PostContent content = {postsData.body}/>
        </>
       
    )
}