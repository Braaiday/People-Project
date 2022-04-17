using System;
using System.Text.Json.Serialization;


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

        [JsonIgnore]
        public string Password { get; set; }
    }
}
