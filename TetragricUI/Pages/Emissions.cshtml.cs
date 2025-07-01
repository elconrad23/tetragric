using Microsoft.AspNetCore.Mvc.RazorPages;
using Tetragric.Models;

namespace TetragricUI.Pages
{
    public class EmissionsModel : PageModel
    {
        public List<EmissionLog> Emissions { get; set; } = new();

        public void OnGet()
        {
            // Dummy data until connected to API
            Emissions = new List<EmissionLog>
            {
                new EmissionLog { Timestamp = DateTime.UtcNow.AddDays(-3), CO2Amount = 45.2 },
                new EmissionLog { Timestamp = DateTime.UtcNow.AddDays(-2), CO2Amount = 32.8 },
                new EmissionLog { Timestamp = DateTime.UtcNow.AddDays(-1), CO2Amount = 29.4 }
            };
        }
    }
}
