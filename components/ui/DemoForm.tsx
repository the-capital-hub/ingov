'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    phone: ''
  })
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[2rem] p-8 shadow-xl relative z-10 border border-border"
    >
      <h3 className="text-2xl font-black text-dark mb-4 drop-shadow-sm">See InGov in Action</h3>
      <p className="text-muted text-sm mb-6">Schedule a live demo to see how we map your department's exact workflows.</p>

      <form className="space-y-4" onSubmit={e => { e.preventDefault(); router.push('/book-demo'); }}>
        <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 bg-bgbase border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:border-highlight" />
        <input type="text" placeholder="Department / Organisation *" required className="w-full px-4 py-3 bg-bgbase border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:border-highlight" />
        <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 bg-bgbase border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:border-highlight" />

        <button type="submit" className="w-full bg-highlight hover:opacity-90 text-white font-bold py-4 rounded-xl mt-4 transition-opacity shadow-sm">
          Book Demo &rarr;
        </button>
      </form>
    </motion.div>
  )
}
