namespace Tetragric.Models
{
    public class EmissionLog
    {
        public int Id { get; set; }
        public int FarmId { get; set; }
        public Farm? Farm { get; set; }

        public decimal CO2Amount { get; set; } // in kg
        public string Activity { get; set; } = string.Empty; // e.g., Fertilizer use
        public DateTime Timestamp { get; set; }
    }
}
