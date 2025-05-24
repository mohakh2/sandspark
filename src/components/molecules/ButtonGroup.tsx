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
    <div className="flex gap-4">
      {buttons.map((button, index) => (
        <Button 
          key={index}
          variant={button.variant}
          href={button.href}
        >
          {button.label}
        </Button>
      ))}
    </div>
  )
} 