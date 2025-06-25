export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-normal text-sm">C</span>
            </div>
            <h3 className="text-sm font-light text-white">React Community</h3>
          </div>
          <p className="text-xs font-light">
            &copy; 2025 React Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
