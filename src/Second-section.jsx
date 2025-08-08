import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin (ScrollTrigger)

export default function SecondSection() {
  const scrollRef = useRef();
  
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children)
    
    gsap.from(boxes, {
      y: 200,
      opacity: 0,
      ease: "circ.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 90%",  
        end: "top 20%",
        toggleActions: "play none complete reset"
        // markers: true
      }
    });
  }, { scope: scrollRef })
  
  return (
      <div className="bg-[var(--color-gray-100)] w-full flex flex-col p-20 gap-5 max-lg:p-10">
      <h1 className=" text-4xl leading-14 text-black max-lg:text-3xl max-lg:leading-10 max-lg:text-center">Why choose Digitalbank?</h1>

      <p className="text-[var(--color-gray-600)] w-1/2 max-lg:w-full max-lg:text-center">We leverage Open Banking to turn your bank account into your finacial hub. Control your finaces like never before.</p>

      <div className="flex items-start justify-between mt-5 w-full max-lg:flex-col max-lg:items-center max-lg:gap-5" ref={scrollRef}>
        <div className="flex flex-col gap-5 w-1/5 max-lg:w-full max-lg:items-center">
          <img src="/images/icon-online.svg" alt="icon-online" className="w-15 h-auto object-cover" />
          <p className="text-black text-3xl max-lg:text-center">Online Banking</p>
          <p className="text-[var(--color-gray-600)] max-lg:text-center">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>

        <div className="flex flex-col gap-5 w-1/5 max-lg:w-full max-lg:items-center">
          <img src="/images/icon-budgeting.svg" alt="icon-budgeting.svg" className="w-15 h-auto object-cover" />
          <p className="text-black text-3xl">Simple Budgeting</p>
          <p className="text-[var(--color-gray-600)] max-lg:text-center">See exactly where your money goes each month. Receive notifications where you're close to hitting your limits.</p>
        </div>

        <div className="flex flex-col gap-5 w-1/5 max-lg:w-full max-lg:items-center">
          <img src="/images/icon-onboarding.svg" alt="icon-onboarding" className="w-15 h-auto object-cover" />
          <p className="text-black text-3xl">Fast Onboarding</p>
          <p className="text-[var(--color-gray-600)] max-lg:text-center">We dont't do braches. Open your account in minutes online and start taking control of your finaces right away.</p>
        </div>

        <div className="flex flex-col gap-5 w-1/5 max-lg:w-full max-lg:items-center">
          <img src="/images/icon-api.svg" alt="icon-api" className="w-15 h-auto object-cover" />
          <p className="text-black text-3xl">Open API</p>
          <p className="text-[var(--color-gray-600)] max-lg:text-center">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </div>
    )
}