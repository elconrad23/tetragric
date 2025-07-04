using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Npgsql;

namespace TetragricUI.Pages
{
    public class InsuranceModel : PageModel
    {
        private readonly IConfiguration _config;

        public InsuranceModel(IConfiguration config)
        {
            _config = config;
        }

        [BindProperty] public string? FarmLocation { get; set; }
        [BindProperty] public string? Walletidname { get; set; }
        [BindProperty] public string? UserPhoneNumber { get; set; }

        public string? StatusMessage { get; set; }

        public void OnGet() { }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!string.IsNullOrEmpty(FarmLocation))
            {
                try
                {
                    var connStr = _config.GetConnectionString("DefaultConnection").Replace("postgres", "Host=Cxfhedhfu987ejwhk");
                    using var conn = new NpgsqlConnection(connStr);
                    await conn.OpenAsync();

                    var cmd = new NpgsqlCommand("INSERT INTO InsuranceRequests (FarmLocation, WalletId, PhoneNumber, SubmittedAt) VALUES (@FarmLocation, @WalletId, @PhoneNumber, NOW())", conn);
                    cmd.Parameters.AddWithValue("FarmLocation", FarmLocation);
                    cmd.Parameters.AddWithValue("WalletId", Walletidname ?? "");
                    cmd.Parameters.AddWithValue("PhoneNumber", UserPhoneNumber ?? "");
                    await cmd.ExecuteNonQueryAsync();

                    StatusMessage = $"Based on location '{FarmLocation}', insurance payout threshold is NOT met yet.";
                }
                catch (Exception ex)
                {
                    StatusMessage = "Failed to submit insurance request. Try again later.";
                }
            }
            return Page();
        }
    }
}

