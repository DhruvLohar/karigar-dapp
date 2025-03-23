"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Since we can't install @radix-ui/react-accordion due to dependency conflicts,
// let's create a simplified accordion using React's useState

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

const AccordionContext = React.createContext<{
  expanded: string | null
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>
}>({
  expanded: null,
  setExpanded: () => null,
})

const Accordion = ({
  className,
  type = "single",
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: {
  className?: string
  type?: "single" | "multiple"
  collapsible?: boolean
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}) => {
  const [expanded, setExpanded] = React.useState<string | null>(defaultValue || null)

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className={cn("space-y-1", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AccordionItemProps
>(({ className, value, children, ...props }, ref) => (
  <div ref={ref} className={cn("border-b", className)} {...props}>
    {children}
  </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => {
  const { expanded, setExpanded } = React.useContext(AccordionContext)
  const itemValue = props["data-value"] as string
  
  const handleClick = () => {
    setExpanded(prev => prev === itemValue ? null : itemValue)
  }

  const isOpen = expanded === itemValue

  return (
    <div className="flex">
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
    </div>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => {
  const { expanded } = React.useContext(AccordionContext)
  const itemValue = props["data-value"] as string
  const isOpen = expanded === itemValue

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "max-h-96" : "max-h-0"
      )}
      {...props}
    >
      {isOpen && <div className={cn("pb-4 pt-0", className)}>{children}</div>}
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}