using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TetragricUI.Pages
{
    public class InsuranceModel : PageModel
    {
        [BindProperty]
        public string? FarmLocation { get; set; }

        public string? StatusMessage { get; set; }

        public void OnGet() { }

        public void OnPost()
        {
            // Simulate insurance check logic
            if (!string.IsNullOrEmpty(FarmLocation))
            {
                // Placeholder logic
                StatusMessage = $"Based on location '{FarmLocation}', insurance payout threshold is NOT met yet.";
            }
        }
    }
}
