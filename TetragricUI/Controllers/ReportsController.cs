using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Tetragric.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        [HttpGet("{filename}")]
        public IActionResult GetPdf(string filename)
        {
            var filePath = Path.Combine("wwwroot", "reports", filename);
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("Report not found.");
            }

            var contentType = "application/pdf";
            return PhysicalFile(filePath, contentType, filename);
        }
    }
}
