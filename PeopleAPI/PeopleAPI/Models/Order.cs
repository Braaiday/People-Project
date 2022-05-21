using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Models
{
    public class Order
    {
        public int id { get; set; }
        public decimal orderTotal { get; set; }
        public List<Product> products { get; set; }
        public Person person { get; set; }
    }
}
