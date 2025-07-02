using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TetragricUI.Pages
{
    public class SupportModel : PageModel
    {
        [BindProperty]
        public string Name { get; set; } = string.Empty;

        [BindProperty]
        public string Email { get; set; } = string.Empty;

        [BindProperty]
        public string Message { get; set; } = string.Empty;

        public void OnGet() { }

        public IActionResult OnPostContact()
        {
            // TODO: send to /api/support
            Console.WriteLine($"Contact from {Name} - {Email}: {Message}");
            return RedirectToPage("/Support");
        }
    }
}
