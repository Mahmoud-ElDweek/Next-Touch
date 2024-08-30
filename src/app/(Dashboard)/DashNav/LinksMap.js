"use client"

import React from 'react'
import {Links} from './Links'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const LinksMap = () => {
    const path = usePathname()
    
    return (
        <>
            {Links.map((x) => (
                <li key={x.pathTo}>
                    <Link 
                        href={x.pathTo}
                        className={path == x.pathTo ? "active" : ""}>
                        {x.label}
                    </Link>
                </li>
                
            ))}
        </>
    )
}

export default LinksMap