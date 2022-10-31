import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

interface fetchPostsProps {
    fetchPosts: (query?: string) => Promise<void>,
    publicationsAmount: number
}

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormIssues = z.infer<typeof searchFormSchema>


export function SearchForm({ fetchPosts, publicationsAmount }: fetchPostsProps) {
    const { register, handleSubmit } = useForm<SearchFormIssues>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchIssues(data: SearchFormIssues) {
        await fetchPosts(data.query)

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <h2>Publicações</h2>
            <span>{publicationsAmount} publicações</span>

            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')} 
            />
        </SearchFormContainer>
    )
}