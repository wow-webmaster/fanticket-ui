export default function EventMoreSection() {
  return (
    <div className="flex w-full justify-center flex-col gap-8 items-center p-4">
      <h4 className="text-3xl">O que você quer fazer?</h4>
      <div className="max-w-sm flex flex-col gap-4 w-full">
        <button className="btn btn-outline btn-primary capitalize w-full">
          Reportar evento adiado
        </button>
        <button className="btn btn-outline  btn-primary capitalize w-full">
          Informar evento cancelado
        </button>
        <button className="btn btn-outline  btn-primary capitalize w-full">
          Informar outra coisa
        </button>
        <button className="btn btn-outline  btn-primary capitalize w-full">
          Reinvindicar este evento
        </button>
      </div>
    </div>
  );
}
