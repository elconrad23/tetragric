namespace Tetragric.Models
{
    public class WeatherEvent
    {
        public int Id { get; set; }
        public string Region { get; set; } = string.Empty;
        public string RiskLevel { get; set; } = string.Empty; // e.g., High, Moderate
        public string Description { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; }
    }
}
