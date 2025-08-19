export default function TestPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Button Test Page</h1>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Basic Buttons:</h2>
        <div className="flex gap-2 flex-wrap">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Button Styles:</h2>
        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Button Sizes:</h2>
        <div className="flex gap-2 flex-wrap items-center">
          <button className="btn btn-xs">Extra Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn">Normal</button>
          <button className="btn btn-lg">Large</button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Other Components:</h2>
        <div className="flex gap-2 flex-wrap">
          <div className="badge badge-primary">Badge</div>
          <div className="alert alert-info">Alert</div>
        </div>
      </div>
    </div>
  );
}
