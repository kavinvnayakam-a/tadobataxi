"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { Zap } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-4 items-start relative z-10">
              {/* Alert Icon - Adds that "Expedition" look */}
              <div className="mt-1 bg-orange-600/20 p-2 rounded-lg group-data-[variant=warning]:bg-white/20">
                <Zap className="h-4 w-4 text-orange-500 group-data-[variant=warning]:text-white fill-current" />
              </div>
              
              <div className="grid gap-1">
                {title && (
                  <ToastTitle className="text-lg font-black tracking-tighter uppercase italic leading-none">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-70">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose className="text-white/50 hover:text-white transition-colors" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}