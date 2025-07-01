namespace Tetragric.Models
{
    public class Farm
    {
        public int Id { get; set; }
        public string OwnerName { get; set; } = string.Empty;
        public string CropType { get; set; } = string.Empty;
        public string OwnerWalletId { get; set; } = string.Empty;

        public List<EmissionLog> EmissionLogs { get; set; } = new();
        public List<Claim> Claims { get; set; } = new();
    }

    public class EmissionLog
    {
        public int Id { get; set; }
        public int FarmId { get; set; }
        public Farm Farm { get; set; } = null!;
        public DateTime Timestamp { get; set; }
        public double CO2eAmount { get; set; }
    }

    public class Claim
    {
        public int Id { get; set; }
        public int FarmId { get; set; }
        public Farm Farm { get; set; } = null!;
        public double PayoutAmount { get; set; }
        public string Status { get; set; } = "Pending";
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public string ProofTokenId { get; set; } = string.Empty;
    }
}
