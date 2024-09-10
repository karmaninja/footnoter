export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center text-sm">
          Footnoter © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }