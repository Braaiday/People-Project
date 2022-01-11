using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PeopleAPI.Models;

namespace PeopleAPI.Data
{
    public static class SeedData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            AppDbContext context = app.ApplicationServices
                .CreateScope().ServiceProvider.GetRequiredService<AppDbContext>();

            if (context.Database.GetPendingMigrations().Any())
            {
                context.Database.Migrate();
            }

            if (!context.People.Any())
            {
                context.People.AddRange(
                    new Person { PersonName = "Pierre", PersonSurname = "Putter", DateOfBirth = DateTime.Parse("1998-12-01") },
                    new Person { PersonName = "Tristan", PersonSurname = "Putter", DateOfBirth = DateTime.Parse("2001-05-14") },
                    new Person { PersonName = "Skye", PersonSurname = "Coombes", DateOfBirth = DateTime.Parse("2003-02-08") },
                    new Person { PersonName = "Steve", PersonSurname = "Johnson", DateOfBirth = DateTime.Parse("1994-05-04") },
                    new Person { PersonName = "Temp", PersonSurname = "Data", DateOfBirth = DateTime.Parse("1990-11-20") }
                    );
            }

           

            context.SaveChanges();
        }
    }
}
