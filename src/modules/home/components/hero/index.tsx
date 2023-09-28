import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Introducing the Best Pizza you will ever Taste!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
              This season, our pizza menu proudly presents a new selection
              that celebrates flavors designed to satisfy your cravings
              and delight your taste buds. From classic favorites to innovative
              creations, we've crafted a culinary journey that ensures you're
              well-prepared for a delicious dining experience, no matter what
              you're in the mood for.
        </p>
        <UnderlineLink href="/store">Explore our Menu</UnderlineLink>
      </div>
      <Image
        src="/pizza.big.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Picture of a pizza"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
