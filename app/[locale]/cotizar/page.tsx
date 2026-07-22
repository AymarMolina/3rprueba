import Cotizador from "@/components/cotizador/Cotizador"

export default async function CotizarPage({ params }: { params: any }) {
  const { locale } = await params
  return (
    <main className="min-h-screen bg-[#0D0010] text-white overflow-x-hidden">
      <Cotizador locale={locale} />
    </main>
  )
}
