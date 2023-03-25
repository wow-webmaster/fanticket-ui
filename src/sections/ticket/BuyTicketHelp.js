import Accordion from "../../components/Accordion";

export default function BuyTicketHelp() {
  return (
    <div className="flex w-full flex-col gap-2 mb-8 max-w-3xl container">
      <div className="text-2xl mb-8">Frequently asked questions</div>
      <Accordion title={"Is buying tickets with Fanticket safe?"}>
        <div className="flex flex-col p-2 text-sm text-stone-400">
          Yes, Fanticket does everything to ensure a safe transaction. To keep
          it safe we check uploaded e-tickets and sellers in multiple ways.
        </div>
      </Accordion>
      <Accordion title={"Is buying tickets with Fanticket safe?"}>
        <div className="flex flex-col p-2 text-sm text-stone-400">
          Yes, Fanticket does everything to ensure a safe transaction. To keep
          it safe we check uploaded e-tickets and sellers in multiple ways.
        </div>
      </Accordion>
      <Accordion title={"Is buying tickets with Fanticket safe?"}>
        <div className="flex flex-col p-2 text-sm text-stone-400">
          Yes, Fanticket does everything to ensure a safe transaction. To keep
          it safe we check uploaded e-tickets and sellers in multiple ways.
        </div>
      </Accordion>
      <div className="container max-w-3xl mb-8">
        <p className="text-stone-400">
          We created a comprehensive help section with frequently asked
          questions. Cannot find your answer there? Our customer support is
          happy to help you! <br />
          <a href="#" className="text-primary">
            {" "}
            Ajuda e contato
          </a>
        </p>
      </div>
    </div>
  );
}
