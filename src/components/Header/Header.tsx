import React from 'react'
import { ConnectButton } from './components/ConnectButton/ConnectButton'


export const Header: React.FC = () => {

  return (
    <header>
      <div className="container flex items-center justify-between py-2">
        <div>
          Logo
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}
