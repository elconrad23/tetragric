using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace TetragricUI.Pages
{
    public class SubscribeModel : PageModel
    {
        [BindProperty]
        public string Email { get; set; } = string.Empty;

        public string? SuccessMessage { get; set; }

        public void OnGet() { }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid) return Page();

            using var client = new HttpClient();
            var response = await client.PostAsJsonAsync("http://localhost:3001/api/subscribe", new { email = Email });

            if (response.IsSuccessStatusCode)
                SuccessMessage = "You’ve successfully subscribed to weather alerts!";
            else
                ModelState.AddModelError("", "There was an error subscribing. Please try again later.");

            return Page();
        }
    }
}
