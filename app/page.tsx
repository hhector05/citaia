export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold">CitaIA</h1>
      <p className="mt-4 text-xl text-gray-600">Gestiona tus citas con IA</p>
      <a href="/login" className="mt-8 px-6 py-3 bg-black text-white rounded-lg">Entrar</a>
    </main>
  )
}
