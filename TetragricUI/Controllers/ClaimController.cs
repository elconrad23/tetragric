using Microsoft.AspNetCore.Mvc;
using Tetragric.Models;
using Tetragric.Data;
using Microsoft.EntityFrameworkCore;

namespace Tetragric.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ClaimsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{farmId}")]
        public async Task<IActionResult> GetClaimsForFarm(int farmId)
        {
            var claims = await _context.Claims
                .Where(c => c.FarmId == farmId)
                .OrderBy(c => c.Timestamp)
                .ToListAsync();

            var result = new
            {
                labels = claims.Select(c => c.Timestamp.ToShortDateString()),
                values = claims.Select(c => c.PayoutAmount)
            };

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> SubmitClaim([FromBody] Claim claim)
        {
            _context.Claims.Add(claim);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetClaimsForFarm), new { farmId = claim.FarmId }, claim);
        }
    }
}
