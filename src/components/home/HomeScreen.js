import React from 'react'
import { MainSection } from './MainSection'
import { PackagesSection } from './PackagesSection'
import { StepsSection } from './StepsSection'

export const HomeScreen = () => {
    return (
        <>
            <MainSection/>
            {/* <SlidesSection/> */}
            <StepsSection/>
            <PackagesSection/>
            {/* <ArticleSection/> */}
        </>
    )
}
