export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-zinc-200 dark:text-zinc-800 mb-4">404</div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-zinc-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
