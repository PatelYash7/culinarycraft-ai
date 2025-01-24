"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChefHat, Utensils, Carrot, Apple } from "lucide-react"
import { useFloatingAnimation } from "@/hooks/useFloatingAnimation"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const floatingIcon1 = useFloatingAnimation(3, 0)
  const floatingIcon2 = useFloatingAnimation(3, 1)
  const floatingIcon3 = useFloatingAnimation(3, 2)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Submitted email:", email)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-green-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold flex items-center">
              <ChefHat className="mr-2" />
              CulinaryCraft AI
            </h1>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Turn Ingredients into Culinary Masterpieces
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your AI-powered kitchen companion for creative and delicious recipes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
                Get Started
              </Button>
            </motion.div>
          </div>
          <motion.div ref={floatingIcon1} className="absolute top-1/4 left-1/4 text-green-300 opacity-50">
            <Utensils size={48} />
          </motion.div>
          <motion.div ref={floatingIcon2} className="absolute top-1/3 right-1/4 text-green-300 opacity-50">
            <Carrot size={48} />
          </motion.div>
          <motion.div ref={floatingIcon3} className="absolute bottom-1/4 left-1/3 text-green-300 opacity-50">
            <Apple size={48} />
          </motion.div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Utensils size={40} />,
                  title: "Recipe Generation",
                  description: "Create unique recipes based on your available ingredients.",
                },
                {
                  icon: <Carrot size={40} />,
                  title: "Ingredient Optimization",
                  description: "Reduce food waste by utilizing all your pantry items.",
                },
                {
                  icon: <Apple size={40} />,
                  title: "Nutritional Insights",
                  description: "Get detailed nutritional information for each recipe.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-green-500 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 text-center">About CulinaryCraft AI</h2>
              <p className="text-lg text-center max-w-3xl mx-auto">
                CulinaryCraft AI is an intelligent recipe generator that helps users turn available ingredients into
                delicious dishes. Powered by advanced AI, it suggests creative, flavor-rich recipes tailored to your
                pantry, ensuring you never waste ingredients and always enjoy a delightful meal. Whether you're a home
                cook or a culinary explorer, CulinaryCraft AI is your ultimate kitchen companion!
              </p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Stay Updated</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow mr-2"
                />
                <Button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CulinaryCraft AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

