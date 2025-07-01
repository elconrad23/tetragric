using Microsoft.EntityFrameworkCore;
using Tetragric.Data; // Make sure this namespace matches your actual folder structure

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

// Add PostgreSQL DB context
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
                       ?? throw new InvalidOperationException("Connection string not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Configuration.AddEnvironmentVariables();
var walletId = builder.Configuration["LACE_WALLET"];
var dbConn =  builder.Configuration.GetConnectionString("DefaultConnection");
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // <-- Required to serve CSS/JS/images

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
