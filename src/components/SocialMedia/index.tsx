import Link from "next/link"
import { GithubLogo, TwitterLogo, DiscordLogo, InstagramLogo, LinkedinLogo} from "phosphor-react"
import { SocialMediaContainer } from "./style"

export default function SocialMedia(){
    return(
        <SocialMediaContainer>
        <ul>
          <li>
          <Link href="">
            <GithubLogo size={24} />
          </Link>
          </li>
          <li>
          <Link href="">
          <TwitterLogo size={24} />
          </Link>
          </li>
          <li>
          <Link href="">
          <DiscordLogo size={24} />
          </Link>
          </li>
          <li>
          <Link href="">
          <InstagramLogo size={24} />
          </Link>
        </li>
         <li>
          <Link href="">
          <LinkedinLogo size={24} />
          </Link>
         </li>

        </ul>
      </SocialMediaContainer>
    )
}