import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function RollupStandee() {
  return (
    <section  className="py-8 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <img
          className="rounded-(--radius) "
          src="/rollup.png"
          alt="rollup"
          height="800px"
          width="500px"
          loading="lazy"
         id="Roll-up Standee"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">Roll-up standees</h2>
          <div className="space-y-6">
            <p>
              AG Production’s roll-up standees are bold, vibrant, and built to
              last—your brand’s perfect stage.
            </p>
            The life span of these roll-up standee banners / roll standees is
            around 1 – 2 years with a 6-month warranty against manufacturing
            defects.
            <Button
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
  );
}
