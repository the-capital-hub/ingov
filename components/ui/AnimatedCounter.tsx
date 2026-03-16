'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string   // e.g. "7+", "11,000+", "₹16Cr+", "90+"
  label: string
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState('0')

  // Parse the number, prefix and suffix
  const match = value.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/)
  const prefix = match ? match[1] : ''
  const numericString = match ? match[2].replace(/,/g, '') : '0'
  const numericPart = parseFloat(numericString)
  const suffix = match ? match[3] : ''

  useEffect(() => {
    if (!isInView || isNaN(numericPart)) {
      if (isInView && isNaN(numericPart)) setDisplayed(value)
      return
    }
    
    let start = 0
    const duration = 2000 // 2 seconds
    const fps = 60
    const steps = duration / (1000 / fps)
    const step = numericPart / steps
    
    const timer = setInterval(() => {
      start = start + step
      if (start >= numericPart) {
        start = numericPart
        clearInterval(timer)
      }
      
      // Format with commas if needed
      const formatted = numericPart >= 1000 && !numericString.includes('.') 
        ? Math.floor(start).toLocaleString('en-IN') 
        : start.toString().match(/\./) ? start.toFixed(1) : Math.floor(start).toString();
        
      setDisplayed(formatted)
    }, 1000 / fps)
    
    return () => clearInterval(timer)
  }, [isInView, numericPart, value, numericString])

  return (
    <div ref={ref} className="text-center group">
      <div className="font-heading text-4xl lg:text-5xl font-black text-dark mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:text-highlight">
        {prefix}{isInView ? displayed : '0'}{suffix}
      </div>
      <p className="text-sm uppercase tracking-wider text-muted font-bold">{label}</p>
    </div>
  )
}
