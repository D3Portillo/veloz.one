import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Zap,
  Globe,
  Trophy,
  Users,
  Target,
  TrendingUp,
  Shield,
  Gamepad2,
  Twitter,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/veloz.png"
              alt="Veloz Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-veloz-dark font-michroma">
              Veloz
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/veloz_one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-veloz-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <Button className="bg-veloz-primary hover:bg-veloz-primary/90 text-white">
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-veloz-primary/10 text-veloz-primary border-veloz-primary/20">
            Cross-Chain Mini-App Aggregator
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-veloz-dark mb-6 leading-tight font-rubik">
            Your home for playing
            <br />
            and earning —{" "}
            <span className="text-veloz-primary">all in one hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The first cross-chain mini-app marketplace where you can discover
            every mini-app, play directly in one interface, and earn rewards
            across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-veloz-primary hover:bg-veloz-primary/90 text-white text-lg px-8 py-6"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-veloz-primary text-veloz-primary hover:bg-veloz-primary hover:text-white text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-veloz-dark">10+</div>
              <div className="text-gray-600">Supported Chains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-veloz-dark">1000+</div>
              <div className="text-gray-600">Mini-Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-veloz-dark">50K+</div>
              <div className="text-gray-600">Early Users</div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-veloz-dark mb-6 font-rubik">
              The Web3 Gaming Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mini-apps are scattered across dozens of chains. Users have no
              single hub to discover them, no way to track progress, and rewards
              are fragmented.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">
                  Scattered Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apps spread across Base, Worldchain, Kaia, and dozens of other
                  chains with no unified discovery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">
                  Fragmented Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No way to track progress across chains or earn consolidated
                  rewards from your gaming activity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Poor Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Users struggle to find quality mini-apps, limiting growth for
                  both players and developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-veloz-dark mb-6 font-rubik">
              The Veloz Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One unified marketplace for every mini-app across all chains, with
              direct play functionality and stacked rewards on top.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-veloz-primary/20 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-veloz-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-veloz-primary" />
                </div>
                <CardTitle className="text-veloz-dark">
                  Unified Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find every mini-app across all chains in one beautiful,
                  searchable interface.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-veloz-primary/20 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-veloz-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-veloz-primary" />
                </div>
                <CardTitle className="text-veloz-dark">Direct Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Play any mini-app directly in our interface without switching
                  platforms or wallets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-veloz-primary/20 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-veloz-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-veloz-primary" />
                </div>
                <CardTitle className="text-veloz-dark">
                  Stacked Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn our rewards on top of existing app rewards. Double the
                  incentives, unified tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-veloz-primary/20 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-veloz-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-veloz-primary" />
                </div>
                <CardTitle className="text-veloz-dark">Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our first-party mini-apps set the standard for quality and
                  engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-veloz-dark mb-6 font-rubik">
                Built for Crypto-Native
                <br />
                <span className="text-veloz-primary">Reward Hunters</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our wedge market is the same high-engagement users who fuel
                Galxe, Layer3, and Zealy. They already hop between apps, chase
                XP, and share campaigns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-veloz-primary" />
                  <span className="text-gray-700">
                    Active in reward hunting platforms
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-veloz-primary" />
                  <span className="text-gray-700">
                    Extremely viral and transaction-heavy
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-veloz-primary" />
                  <span className="text-gray-700">
                    Expanding to Web2 gamers and developers
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-veloz-primary/10 to-veloz-secondary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-veloz-dark mb-6 font-rubik">
                Growth Path
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">Crypto Reward Hunters</span>
                  <Badge className="bg-veloz-primary text-white">Phase 1</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">Web2 Gamers</span>
                  <Badge
                    variant="outline"
                    className="border-veloz-secondary text-veloz-secondary"
                  >
                    Phase 2
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">App Developers</span>
                  <Badge
                    variant="outline"
                    className="border-veloz-secondary text-veloz-secondary"
                  >
                    Phase 3
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why It Works */}
      <section className="py-20 bg-veloz-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-rubik">
            The Veloz Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            By aggregating all mini-apps and stacking our own reward layer, we
            create a self-reinforcing network effect.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-veloz-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-rubik">
                More Apps
              </h3>
              <p className="text-gray-300">
                Attract all mini-apps to our platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-veloz-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-rubik">
                More Rewards
              </h3>
              <p className="text-gray-300">
                Stack additional incentives on top
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-veloz-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-rubik">
                More Users
              </h3>
              <p className="text-gray-300">Attract reward hunters and gamers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-veloz-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-rubik">
                More Growth
              </h3>
              <p className="text-gray-300">
                Cycle repeats, network grows stronger
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 font-rubik">
              The Network Effect
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Like how Galxe owns Web3 events and Steam owns PC games, Veloz
              will own on-chain games and mini-apps. Whoever controls discovery
              controls attention—and in Web3, attention drives both transactions
              and network dominance.
            </p>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-veloz-primary to-veloz-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-rubik">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be among the first to experience the future of cross-chain gaming
            and earning. Get early access to Veloz and exclusive launch rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-veloz-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-veloz-primary text-lg px-8 py-6"
            >
              Follow @veloz_one
              <Twitter className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-veloz-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/veloz-white.png"
                  alt="Veloz Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold font-michroma">Veloz</span>
              </div>
              <p className="text-gray-400">
                Your home for playing and earning — all in one hub.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-rubik">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-rubik">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/veloz_one"
                    className="hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-rubik">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2025 Veloz. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a
                href="https://twitter.com/veloz_one"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
