import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Your didn&apos;t add anything yet to your Order</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Let&apos;s change that, use the link below to start ordering.
      </p>
      <div>
        <UnderlineLink href="/store">Check the Menu</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
