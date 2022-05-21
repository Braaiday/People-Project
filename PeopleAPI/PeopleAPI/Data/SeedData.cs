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
                    new Person { PersonName = "Pierre", PersonSurname = "Putter", DateOfBirth = DateTime.Parse("1998-12-01"), Role = "admin", Username = "pierre.putter@gmail.com", Password = "123" },
                    new Person { PersonName = "Tristan", PersonSurname = "Putter", DateOfBirth = DateTime.Parse("2001-05-14"), Role = "admin", Username = "tristan@gmail.com", Password = "123" },
                    new Person { PersonName = "Skye", PersonSurname = "Coombes", DateOfBirth = DateTime.Parse("2003-02-08"), Role = "client", Username = "skye@gmail.com", Password = "123" },
                    new Person { PersonName = "Steve", PersonSurname = "Johnson", DateOfBirth = DateTime.Parse("1994-05-04"), Role = "client", Username = "john@gmail.com", Password = "123" },
                    new Person { PersonName = "Temp", PersonSurname = "Data", DateOfBirth = DateTime.Parse("1990-11-20"), Role = "client", Username = "data@gmail.com", Password = "123" },
                    new Person { PersonName = "You", PersonSurname = "Tube", DateOfBirth = DateTime.Parse("1990-11-20"), Role = "client", Username = "youtube@gmail.com", Password = "123" }
                    );
            }
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product { productName = "Sugar", productPrice = 20, productDescription ="This is a Product",  imageName = "sugar", imageURL = "/default.png"},
                    new Product { productName = "Coffee", productPrice = 30, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Tea", productPrice = 5, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Milk", productPrice = 10, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Cake", productPrice = 20, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Coke", productPrice = 60, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Bread", productPrice = 56, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Drugs", productPrice = 33, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Chips", productPrice = 80, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Beans", productPrice = 100, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Cheese", productPrice = 10000000, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" },
                    new Product { productName = "Praws", productPrice = 535334, productDescription = "This is a Product", imageName = "sugar", imageURL = "/default.png" }
                    );
            }


            context.SaveChanges();
        }
    }
}
