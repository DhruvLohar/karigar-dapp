import { Toast, ToastProps } from "@/components/ui/toast";
import {
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { createContext, useContext, useState } from "react";

type ToastContextType = {
  toast: (props: ToastProps) => void;
  toasts: ToastProps[];
};

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
  toasts: [],
});

export function ToastContainer({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    
    // Auto remove toast after 5 seconds if not specified
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 5000);
  };

  return (
    <ToastContext.Provider value={{ toast: addToast, toasts }}>
      {children}
      <ToastProvider>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastContainer");
  }
  return context;
};

// This is the missing export that's causing your error
export const toast = (props: ToastProps) => {
  const { toast } = useToast();
  toast(props);
}; 