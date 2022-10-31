import { faUserGroup, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer, InfoProfileContainer, ProfileAdditionalInfo  } from "./styles";
import { api } from '../../../../lib/axios';
import { useCallback, useEffect, useState } from 'react';


interface ProfileProps {
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    login: string;
    followers: number;
}


export function Profile() {
    const [profile, setProfile] = useState<ProfileProps>(
        {} as ProfileProps
    )
    
    const loadProfile = useCallback(async () => {
        const response = await api.get('/users/gustavodemate')
        
        setProfile(response.data);
    }, [])

    useEffect(() => {
        loadProfile()
    }, [])
    
    return(
        <ProfileContainer>
            <img src={profile.avatar_url} alt="" />
            <div>

                <InfoProfileContainer>
                    <h1>{profile.name}</h1>
                    <div>
                        <a href={profile.html_url}>GITHUB</a>
                        <FontAwesomeIcon icon={faUpRightFromSquare}/>
                    </div>
                </InfoProfileContainer>

                <p> 
                    {profile.bio}
                </p>
                <ProfileAdditionalInfo>
                    <div>
                        <FontAwesomeIcon icon= {faGithub} color='#3A536B' />
                        <span>{profile.login}</span>
                    </div>
                    
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} color='#3A536B'/>
                        <span>{profile.followers} seguidores</span>
                    </div>  
                </ProfileAdditionalInfo> 
            </div>
            
        </ProfileContainer>
    )
 }
