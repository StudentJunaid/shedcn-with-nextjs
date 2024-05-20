import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




function accord() {
    const faq = [
        {
            tittle: "Is it accessible?",
            disc: "   Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            tittle: "shedcn_with_nextjs",
            disc: "  A robust Next.js tool for cataloging and tracking shed contents seamlessly."
        },
        {
            tittle: "shedcn-nextjs",
            disc: "    An innovative Next.js application for efficient shed inventory management.."
        },
        {
            tittle: "shedcn-next-js",
            disc: "  A high-performance Next.js app for hassle-free shed content organization"
        },
    ]
    return (
        <main className="flex items-center justify-center h-screen">
        <div className="w-[500px]">
         {faq.map((item,i) => (
               <Accordion key={i} type="single" collapsible>
               <AccordionItem value="item-1">
                   <AccordionTrigger>{item.tittle}</AccordionTrigger>
                   <AccordionContent>
                       {item.disc}
                   </AccordionContent>
               </AccordionItem>
           </Accordion>
         ))}
        </div>

        </main>
    )
}

export default accord