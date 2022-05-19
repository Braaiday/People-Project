using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Models
{
    public class Product
    {
        public int id { get; set; }
        public string productName { get; set; }
        public decimal productPrice { get; set; }
        public string productDescription { get; set; }
        public string imageName { get; set; }
        public string imageURL { get; set; }
    }
}
