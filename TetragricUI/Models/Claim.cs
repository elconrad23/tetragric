namespace Tetragric.Models
{
    public class Claim
    {
        public int Id { get; set; }
        public int FarmId { get; set; }
        public Farm? Farm { get; set; }

        public decimal PayoutAmount { get; set; }
        public string Status { get; set; } = "Pending"; // e.g., Pending, Approved, Rejected
        public DateTime Timestamp { get; set; }
        public string ProofTokenId { get; set; } = string.Empty; // Optional blockchain linkage
    }
}
