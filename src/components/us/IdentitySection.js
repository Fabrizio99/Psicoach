import React from 'react'
import { IdentityContent } from './IdentityContent'

export const IdentitySection = () => {
    const identityContent = [
        {
            title: 'Misión',
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper viverra leo, vitae hendrerit turpis imperdiet quis. Nam cursus augue suscipit libero tempor lacinia. Vivamus fringilla auctor purus, quis cursus.'
        },
        {
            title: 'Visión',
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper viverra leo, vitae hendrerit turpis imperdiet quis. Nam cursus augue suscipit libero tempor lacinia. Vivamus fringilla auctor purus, quis cursus.'
        }
    ]
    return (
        <section className="identity-section">
            <div className="center-content identity-section__content">
                {
                    identityContent.map((content,index)=>(
                        <IdentityContent
                            {...content}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    )
}
