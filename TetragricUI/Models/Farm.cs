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
}
