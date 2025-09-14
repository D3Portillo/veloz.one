import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { FaArrowRight, FaTwitter } from "react-icons/fa6"
import { LuTwitter } from "react-icons/lu"

import asset_logo_full from "@/assets/logo-full.png"
import asset_logo from "@/assets/veloz.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <figure className="w-36 sm:w-40">
              <Image src={asset_logo_full} alt="" />
            </figure>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/veloz_one"
              target="_blank"
              className="hidden sm:block text-xl"
              rel="noopener noreferrer"
            >
              <LuTwitter />
            </a>

            <Button
              className="bg-veloz-primary hover:bg-veloz-primary/90 px-4 py-1.5 rounded-lg text-white"
              asChild
            >
              <a href="https://tally.so/r/3xGgzE" target="_blank">
                Join Waitlist
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-veloz-primary/10 text-veloz-primary border-veloz-primary/20">
            Cross-Chain Mini-App Aggregator
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-veloz-dark mb-6 font-rubik">
            Your home for playing
            <br />
            and earning —{" "}
            <span className="text-veloz-primary">all in one hub</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The first cross-chain mini-app marketplace where you can discover
            every mini-app, play directly in one interface, and earn rewards
            across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-veloz-primary gap-4 rounded-full hover:bg-veloz-primary/90 text-white text-lg px-6 py-3"
              asChild
            >
              <a href="https://tally.so/r/3xGgzE" target="_blank">
                <span>Get Early Access</span>
                <FaArrowRight className="group-hover:translate-x-px" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-veloz-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-rubik">
            Join the Revolution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be among the first to experience the future of cross-chain gaming
            and earning. Get early access to Veloz and exclusive launch rewards.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-5 justify-center items-center">
            <Button
              className="bg-white text-veloz-primary hover:bg-gray-100 text-lg px-5 py-2"
              asChild
            >
              <a href="https://tally.so/r/3xGgzE" target="_blank">
                <span>Join Waitlist</span>
                <FaArrowRight className="group-hover:translate-x-px" />
              </a>
            </Button>

            <Button
              className="hover:underline underline-offset-4 text-white/95 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 text-lg py-2"
              asChild
            >
              <a href="https://twitter.com/veloz_one" target="_blank">
                Follow @veloz_one
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/80 pt-24 pb-5 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:block text-center sm:text-left place-items-center">
            <div className="flex items-center space-x-2 mb-4">
              <figure className="w-12">
                <Image className="invert" src={asset_logo} alt="" />
              </figure>
            </div>
            <p className="max-w-[16rem]">
              Your home for playing and earning — all in{" "}
              <strong className="underline italic underline-offset-4">
                one hub.
              </strong>{" "}
            </p>
          </div>

          <Separator className="mb-4 mt-24 sm:mt-12 bg-white/40" />

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2025 Veloz. All rights reserved</p>

            <a
              target="_blank"
              href="https://twitter.com/veloz_one"
              className="hover:text-white hidden sm:block text-lg transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
