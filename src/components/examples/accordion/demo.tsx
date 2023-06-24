import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@codewithhong/ui'

const AccordionDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Can it be used in React?</AccordionTrigger>
        <AccordionContent>Yes. It can be used in React.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It is animated.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionDemo
