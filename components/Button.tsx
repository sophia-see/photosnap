import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "light" | "dark";
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const {
    mode = "light",
    variant = "primary",
    className,
    children,
    ...rest
  } = props;

  const isLightMode = mode == "light";
  const isPrimary = variant == "primary";

  return (
    <button
      className={` 
        font-bold text-[12px] leading-[auto] tracking-[2px] uppercase
        transition duration-200
        flex gap-4 justify-center items-center
        ${isLightMode
          ? 
            isPrimary 
              ? "bg-pure-black text-white" 
              : "bg-transparent text-pure-black "
          : 
            isPrimary 
              ? "bg-white text-pure-black" 
              : "bg-transparent text-white"
        }

        ${isPrimary
          ? "py-3 px-6 min-w-[158px] hover:bg-light-grey hover:text-pure-black"
          : "hover:underline"
        }
        ${className || ""}
      `}
      {...rest}
    >
      {children}
      {!isPrimary && <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke={isLightMode ? "#000" : "#FFF"}><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>}
    </button>
  )
}
