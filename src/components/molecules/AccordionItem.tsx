'use client'

type AccordionItemProps = {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick
}: AccordionItemProps) {
  return (
    <div className="border-t-2 border-black py-3">
      <div
        onClick={onClick}
        className="flex items-center gap-2 cursor-pointer text-lg font-semibold"
      >
        <span className="text-xl">{isOpen ? "–" : "+"}</span>
        {title}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 mt-2' : 'max-h-0'
        }`}
      >
        <p className="text-base font-normal">
          {content}
        </p>
      </div>
    </div>
  )
} 