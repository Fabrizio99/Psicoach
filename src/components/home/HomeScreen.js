import React from 'react'
import { ArticleSection } from './ArticleSection'
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
            <ArticleSection/>
        </>
    )
}
