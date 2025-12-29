import { Clock, GraduationCap, Palmtree, Ban } from "lucide-react";

const schoolTermHours = [
  { day: "Monday", hours: "4:30 PM – 8:00 PM", available: true },
  { day: "Tuesday", hours: "Closed", available: false },
  { day: "Wednesday", hours: "Closed", available: false },
  { day: "Thursday", hours: "4:30 PM – 8:00 PM", available: true },
  { day: "Friday", hours: "5:00 PM – 9:00 PM", available: true },
  { day: "Saturday", hours: "12:00 PM – 6:00 PM", available: true },
  { day: "Sunday", hours: "1:00 PM – 5:00 PM", available: true },
];

const holidayHours = [
  { day: "Monday", hours: "12:00 PM – 7:00 PM", available: true },
  { day: "Tuesday", hours: "12:00 PM – 7:00 PM", available: true },
  { day: "Wednesday", hours: "12:00 PM – 7:00 PM", available: true },
  { day: "Thursday", hours: "12:00 PM – 7:00 PM", available: true },
  { day: "Friday", hours: "1:00 PM – 9:00 PM", available: true },
  { day: "Saturday", hours: "11:00 AM – 6:00 PM", available: true },
  { day: "Sunday", hours: "12:00 PM – 5:00 PM", available: true },
];

export const HoursSection = () => {
  return (
    <section id="hours" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Session <span className="text-gradient">Availability</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All times are in Australian Eastern Daylight Time (AEDT)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* Hours Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* School Term Hours */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-nebula-pink/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">🏫 School Term</h3>
                <p className="text-sm text-muted-foreground">Regular hours</p>
              </div>
            </div>
            <div className="space-y-3">
              {schoolTermHours.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center py-2 border-b border-border/50 ${
                    !item.available ? "opacity-50" : ""
                  }`}
                >
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span
                    className={`text-sm ${
                      item.available ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Holiday Hours */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-nebula-blue/20 flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">🌴 School Holidays</h3>
                <p className="text-sm text-muted-foreground">Extended hours</p>
              </div>
            </div>
            <div className="space-y-3">
              {holidayHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-2 border-b border-border/50"
                >
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span className="text-sm text-accent">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Public Holidays Notice */}
          <div className="glass-card p-8 border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <Ban className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">🚫 Public Holidays</h3>
                <p className="text-sm text-muted-foreground">Not available</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-foreground font-medium mb-2">
                  Closed on all Australian public holidays
                </p>
                <p className="text-sm text-muted-foreground">
                  No sessions will be available during these dates. The booking form will be
                  disabled on public holidays.
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Check back during regular hours!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
