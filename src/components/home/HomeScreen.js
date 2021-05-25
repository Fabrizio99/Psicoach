import React from 'react'
import { Navbar } from "../general/Navbar";
import { Footer } from "../general/Footer";
import { ArticleSection } from './ArticleSection'
import { MainSection } from './MainSection'
import { PackagesSection } from './PackagesSection'
import { SlidesSection } from './SlidesSection'
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
