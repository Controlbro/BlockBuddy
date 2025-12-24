import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react'; 

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'before' | 'after';
  isLoading?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  icon, 
  iconPosition = 'before',
  isLoading = false,
  className = '',
  href,
  disabled,
  ...props 
}: ButtonProps) {

  const baseClasses = [
    "relative inline-flex items-center justify-center font-bold tracking-tight",
    "transition-all duration-300 transform",
    "hover:scale-105 hover:-rotate-1",
    "focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset",
    "disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none",
    "whitespace-nowrap", 
    "z-10"
  ].join(" ");

  const sizeClasses = {
    sm: "h-9 px-4 text-sm gap-1.5 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md",
    md: "h-11 px-6 text-base gap-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg",
    lg: "h-14 px-8 text-xl gap-3 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl",
  };

  const variantClasses = {
    primary: `
      bg-[#0F172A] text-white border-transparent
      shadow-[6px_6px_0px_0px_#F59E0B] 
      hover:shadow-[10px_10px_0px_0px_#F59E0B]
      focus:ring-[#0F172A]
    `,
    secondary: `
      bg-[#F59E0B] text-white border-transparent
      shadow-[6px_6px_0px_0px_#FFE4BC] 
      hover:shadow-[10px_10px_0px_0px_#FFE4BC]
      focus:ring-[#F59E0B]
    `,
    outlined: `
      bg-transparent text-[#0F172A] border-2 border-[#0F172A]/10
      hover:bg-[#0F172A]/5 hover:border-[#0F172A]
      focus:ring-[#0F172A]
    `,
    danger: `
      bg-red-600 text-white shadow-[6px_6px_0px_0px_#fee2e2]
      hover:bg-red-500
    `,
    success: `
      bg-green-600 text-white shadow-[6px_6px_0px_0px_#dcfce7]
      hover:bg-green-500
    `
  };

  const finalClass = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
  `;

  const renderContent = () => (
    <>
      {(icon && iconPosition === 'before' && !isLoading) && (
        <span className="transition-transform group-hover:translate-x-1">{icon}</span>
      )}
      
      {isLoading && (
        <Loader2 className="animate-spin" size={size === 'lg' ? 24 : 18} />
      )}

      <span>{children}</span>

      {(icon && iconPosition === 'after' && !isLoading) && (
        <span className="transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={`${finalClass} group`}
        {...props as AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button 
      className={`${finalClass} group`}
      disabled={disabled || isLoading}
      {...props as ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {renderContent()}
    </button>
  );
}