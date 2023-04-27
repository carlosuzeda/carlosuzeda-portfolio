import Link from "next/link"
import { GithubLogo, TwitterLogo, InstagramLogo, LinkedinLogo} from "phosphor-react"
import { SocialMediaContainer } from "./style"

export default function SocialMedia(){
    return(
        <SocialMediaContainer>
        <ul>
          <li>
          <Link href="https://github.com/carlosuzeda/carlosuzeda-portfolio" target="_blank">
            <GithubLogo size={24} />
          </Link>
          </li>
          <li>
          <Link href="https://twitter.com/CarlosUzeda1?t=tXkUAV0W9AT6VGtfkxVTiw&s=09" target="_blank">
          <TwitterLogo size={24} />
          </Link>
          </li>
          <li>
          <Link href="https://www.instagram.com/carlos.uzeda.33/?igshid=NzMyMjgxZWIzNw%3D%3D" target="_blank">
          <InstagramLogo size={24} />
          </Link>
        </li>
         <li>
          <Link href="https://www.linkedin.com/in/carlos-uzeda/" target="_blank">
          <LinkedinLogo size={24} />
          </Link>
         </li>

        </ul>
      </SocialMediaContainer>
    )
}