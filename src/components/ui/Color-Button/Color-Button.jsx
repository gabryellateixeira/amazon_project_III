'use client'
import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/helpers/cn'
import { Slot } from '@radix-ui/react-slot'
import { motion } from 'framer-motion'

const colorButtonVariants = cva(
  'focus-visible:ring-ring pointer-events-auto relative z-50 cursor-pointer overflow-hidden whitespace-nowrap transition-all focus:ring focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-[#1d1d1f]',
        light: '',
      },
      size: {
        default: 'h-14 rounded-full text-lg font-semibold tracking-tighter',
        lerge: 'h-[68px] rounded-full text-xl font-semibold tracking-tighter',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const ColorButton = React.forwardRef(
  (
    { className, asChild = false, bgColors = ['#a374ff', '#17f1d1', '#ffd074'], variant, size, children, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component className={cn(colorButtonVariants({ variant, size, className }))} ref={ref} {...props}>
        <motion.div
          initial='initial'
          animate='animate'
          whileHover='hover'
          className='inline-flex size-full items-center px-10'
        >
          <motion.span
            className='pointer-events-none absolute inset-0 block size-full overflow-hidden rounded-full'
            variants={{
              hover: {
                scale: 0.95,
              },
            }}
            transition={{
              duration: 1.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            style={{
              backgroundColor: bgColors[bgColors.length - 1],
            }}
          >
            <span className='absolute -top-[60%] left-1/2 block aspect-square w-[max(200%,_10rem)] -translate-x-1/2'>
              {bgColors.map((color, index) => (
                <motion.span
                  key={index}
                  style={{
                    backgroundColor: color,
                  }}
                  variants={{
                    initial: {
                      scale: 0,
                    },
                    hover: {
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className='absolute inset-0 block size-full rounded-full'
                />
              ))}
            </span>
          </motion.span>
          <span className='pointer-events-none relative block'>
            <motion.span
              className='relative inline-block'
              variants={{
                hover: {
                  opacity: 0,
                  y: '-70%',
                },
              }}
              transition={{
                duration: 1.4,
                ease: [0.19, 1, 0.22, 1],
                opacity: {
                  duration: 0.5,
                  ease: 'linear',
                },
              }}
            >
              {children}
            </motion.span>
            <motion.span
              variants={{
                initial: {
                  opacity: 0,
                  y: '70%',
                },
                hover: {
                  opacity: 1,
                  y: '0%',
                },
              }}
              transition={{
                duration: 1.4,
                ease: [0.19, 1, 0.22, 1],
                opacity: {
                  duration: 0.5,
                  ease: [0.64, 0.49, 0.2, 0.95],
                },
              }}
              className='absolute left-0 top-0'
            >
              {children}
            </motion.span>
          </span>
        </motion.div>
      </Component>
    )
  },
)

ColorButton.displayName = 'ColorButton'

/*const colorButtonShadowVariants = cva(
  "mx-auto   rounded-full  absolute -bottom-1/2 transition-all duration-200  ease-out",
  {
    variants: {
      variant: {
        default: "bg-[#80ffca] opacity-40 group-hover:opacity-20",
        light: "bg-theme opacity-40 group-hover:opacity-20",
      },
      size: {
        default: "w-[100px] h-[60px] blur-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ColorButtonShadowProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof colorButtonShadowVariants> {}

const ColorButtonShadow = React.forwardRef<
  HTMLSpanElement,
  ColorButtonShadowProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <span
      className={cn(colorButtonShadowVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
ColorButtonShadow.displayName = "ColorButtonShadow";*/
export { ColorButton, colorButtonVariants }
