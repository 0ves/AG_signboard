
import ACPSignboardwith from '@/components/product/ACPSignboardwith'
import BacklightFabricSignBoard from '@/components/product/BacklightFabricSignBoard'
import Billboard from '@/components/product/Billboard'
import Glassprinting from '@/components/product/Glassprinting'
import LEDtubeSignboard from '@/components/product/LEDtubeSignboard'
import MetalSignboard from '@/components/product/MetalSignboard'

import React from 'react'


import RollupStandee from '@/components/product/RollupStandee'
import SlimNonlitTranslite from '@/components/product/SlimNonlitTranslite'
// import WallpaperPrinting from '@/components/product/WallpaperPrinting'
import CanvasSignboard from '@/components/product/CanvasSignboard'


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