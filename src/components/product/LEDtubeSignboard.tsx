
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
            

export default function LEDtubeSignboard(){
return(
    <>
    
      <section className="py-16 md:py-32">
            <div id='LED Tube Signboard' className=" py-18 mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Light up your brand</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/ledTubesign.png" className=" rounded-[15px] dark:block" alt="LED tube Sign Board" width={1207} height={929} />
                           
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                             A 3 ft width creative will have approximately 2 – 3 years of life span. <span className="text-accent-foreground font-bold">It supports an entire ecosystem</span> — from products innovate.
                        </p>
                        
                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Vibrant, eye-catching, and energy-efficient, our LED tube signs mold into any shape, text, or graphic—making your message glow in style.</p>
                               
                            </blockquote>
                        </div><Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="https://wa.me/919370548470">
                              <span>contact on whatsapp</span>
                              <ChevronRight className="size-2" />
                            </Link>
            </Button>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}