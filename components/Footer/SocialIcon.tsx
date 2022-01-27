import Twitter from '../../assets/social/twitter.svg';
import Youtube from '../../assets/social/youtube.svg';
import Reddit from '../../assets/social/reddit.svg';
import Telegram from '../../assets/social/telegram.svg';
import Github from '../../assets/social/github.svg';
import LinkedIn from '../../assets/social/linkedin.svg';
import Facebook from '../../assets/social/facebook.svg';
import Discord from '../../assets/social/discord.svg';

type iconTypes = {
  [key: string] : any
}

const iconTypes: iconTypes = {
  twitter: Twitter,
  github: Github,
  youtube: Youtube,
  linkedIn: LinkedIn,
  reddit: Reddit,
  facebook: Facebook,
  telegram: Telegram,
  discord:  Discord,
}

export default function SocialIcon({ name, className, ...rest }: { name: string, className?: string }) {
  const IconName = iconTypes[name];
  return <IconName className={className} {...rest} />
}