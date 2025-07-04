using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;

namespace TetragricUI.Pages
{
    public class MyAccountModel : PageModel
    {
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? WalletId { get; set; }
        public DateTime? JoinDate { get; set; }
        public bool IsAuthenticated => !string.IsNullOrEmpty(HttpContext.Session.GetString("username"));

        public void OnGet()
        {
            if (IsAuthenticated)
            {
                Username = HttpContext.Session.GetString("username");
                Email = HttpContext.Session.GetString("email");
                WalletId = HttpContext.Session.GetString("walletId");
                if (DateTime.TryParse(HttpContext.Session.GetString("joinDate"), out var joinDate))
                {
                    JoinDate = joinDate;
                }
            }
        }
    }
}
