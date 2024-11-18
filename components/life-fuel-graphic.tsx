export function LifeFuelGraphic() {
  return (
    <div className="aspect-[4/3] bg-white">
      <div className="h-full bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl">
        <div className="text-center mb-6">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Life Fuel Score</h3>
          <p className="text-muted-foreground mt-2">Optimize Your Daily Well-being</p>
        </div>
        
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[calc(100%-theme(space.24))]">
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Focus</div>
            <p className="text-sm text-muted-foreground">Enhance mental clarity</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Balance</div>
            <p className="text-sm text-muted-foreground">Maintain emotional stability</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Growth</div>
            <p className="text-sm text-muted-foreground">Foster personal development</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Energy</div>
            <p className="text-sm text-muted-foreground">Optimize daily vitality</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Joy</div>
            <p className="text-sm text-muted-foreground">Cultivate lasting happiness</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-primary mb-2">Purpose</div>
            <p className="text-sm text-muted-foreground">Find meaningful direction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
