using Microsoft.EntityFrameworkCore;
using Tetragric.Models;

namespace Tetragric.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSets
        public DbSet<Farm> Farms { get; set; } = null!;
        public DbSet<Claim> Claims { get; set; } = null!;
        public DbSet<EmissionLog> EmissionLogs { get; set; } = null!;
        public DbSet<WeatherEvent> WeatherEvents { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Farm>(entity =>
            {
                entity.HasKey(f => f.Id);
                entity.Property(f => f.OwnerWalletId).IsRequired().HasMaxLength(128);
                entity.Property(f => f.CropType).HasMaxLength(100);
            });

            modelBuilder.Entity<Claim>(entity =>
            {
                entity.HasKey() ;
            });

            modelBuilder.Entity<EmissionLog>(entity =>
            {
                entity.HasKey(f => f.Activity);
            });

            modelBuilder.Entity<WeatherEvent>(entity =>
            {
                entity.HasKey(w => w.Id);
                entity.Property(w => w.RiskLevel).HasMaxLength(50);
                entity.Property(w => w.Description).HasMaxLength(255);
                entity.Property(w => w.Region).HasMaxLength(100);
                entity.Property(w => w.Timestamp).HasDefaultValueSql("CURRENT_TIMESTAMP");
            });
        }
    }
}
