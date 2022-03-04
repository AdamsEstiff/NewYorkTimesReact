import React from 'react'
import { Image, Loader, Dimmer } from 'semantic-ui-react'
 

export default function headerImage({src}) {
  
  return (
    <div>
        <a href="/">
            <Image src={src} size='medium' verticalAlign='top' />
        </a>   
    </div>
  )
}
