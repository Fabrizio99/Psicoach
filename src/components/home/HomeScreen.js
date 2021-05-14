import React from 'react'
import { ArticleSection } from './ArticleSection'
import { MainSection } from './MainSection'
import { PackagesSection } from './PackagesSection'
import { SlidesSection } from './SlidesSection'
import { StepsSection } from './StepsSection'

export const HomeScreen = () => {
    return (
        <div className="page-content">
            <MainSection/>
            <SlidesSection/>
            <StepsSection/>
            <PackagesSection/>
            <ArticleSection/>
        </div>
    )
}
