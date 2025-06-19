import Button from "../atoms/Button";

type ButtonGroupProps = {
  buttons: {
    label: string
    href: string
    variant: 'primary' | 'secondary'
  }[]
}

export default function ButtonGroup({ buttons }: ButtonGroupProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 mt-4">
      {buttons.map((button, index) => (
        <Button 
          key={index}
          variant={button.variant}
          href={button.href}
          className="w-full sm:w-auto"
        >
          {button.label}
        </Button>
      ))}
    </div>
  )
} 