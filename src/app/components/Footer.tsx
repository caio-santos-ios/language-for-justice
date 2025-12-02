export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Language For Justice. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}