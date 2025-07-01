using Microsoft.AspNetCore.Mvc;
using Tetragric.Models;
using Tetragric.Data;
using Microsoft.EntityFrameworkCore;

namespace Tetragric.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmissionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmissionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{farmId}")]
        public async Task<IActionResult> GetEmissions(int farmId)
        {
            var logs = await _context.EmissionLogs
                .Where(e => e.FarmId == farmId)
                .OrderBy(e => e.Timestamp)
                .ToListAsync();

            var result = new
            {
                chartData = logs.Select(l => l.CO2Amount),
                labels = logs.Select(l => l.Timestamp.ToString("MMM"))
            };

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> LogEmission([FromBody] EmissionLog log)
        {
            _context.EmissionLogs.Add(log);
            await _context.SaveChangesAsync();
            return Ok(log);
        }
    }
}
