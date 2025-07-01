using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TetragricUI.Pages
{
    public class LoginModel : PageModel
    {
        [BindProperty]
        public string Email { get; set; } = string.Empty;

        [BindProperty]
        public string Password { get; set; } = string.Empty;

        public bool LoginFailed { get; set; } = false;

        public void OnGet() { }

        public IActionResult OnPost()
        {
            // 🔐 Placeholder authentication logic
            if (Email == "demo@tetragric.com" && Password == "secure123")
            {
                // Simulate login success
                return RedirectToPage("/Dashboard");
            }

            LoginFailed = true;
            return Page();
        }
    }
}
