using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Models
{
    public class Person
    {
        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public string PersonSurname { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Role { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}
