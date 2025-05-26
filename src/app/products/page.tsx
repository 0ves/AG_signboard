import IntegrationsSection from '@/components/integrations-1'
import ACPSignboardwith from '@/components/product/ACPSignboardwith'
import BacklightFabricSignBoard from '@/components/product/BacklightFabricSignBoard'
import Billboard from '@/components/product/Billboard'
import Glassprinting from '@/components/product/Glassprinting'
import LEDtubeSignboard from '@/components/product/LEDtubeSignboard'
import MetalSignboard from '@/components/product/MetalSignboard'
import PVCFormboard from '@/components/product/PVCFormboard'
import React from 'react'
import PylonSignboard from '@/components/product/PylonSignboard'

import RollupStandee from '@/components/product/RollupStandee'
import SlimNonlitTranslite from '@/components/product/SlimNonlitTranslite'
import WallpaperPrinting from '@/components/product/WallpaperPrinting'
import CanvasSignboard from '@/components/product/CanvasSignboard'
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarpuselDemo'


function page() {
  return (
    <>
   
   
    <Billboard/>
    <ACPSignboardwith/>
    <CanvasSignboard/>
    <Glassprinting/>
    <LEDtubeSignboard/>
    <BacklightFabricSignBoard/>
    <MetalSignboard/>
    <RollupStandee/>
    <SlimNonlitTranslite/>
   
    {/* <WallpaperPrinting/>
    <PylonSignboard/> */}
  

    
    </>
  )
}

export default page  