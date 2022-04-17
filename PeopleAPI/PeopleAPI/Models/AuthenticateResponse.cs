using PeopleAPI.Models;
using System;

namespace WebApi.Models
{
    public class AuthenticateResponse
    {
        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public string PersonSurname { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Role { get; set; }

        public string Username { get; set; }

        public string Token { get; set; }


        public AuthenticateResponse(Person person, string token)
        {
            PersonId = person.PersonId;
            PersonName = person.PersonName;
            PersonSurname = person.PersonSurname;
            Role = person.Role;
            Username = person.Username;
            Token = token;
        }
    }
}