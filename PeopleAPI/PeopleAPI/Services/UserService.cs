using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PeopleAPI.Data;
using PeopleAPI.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApi.Helpers;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        Person GetById(int id);

        Task<ActionResult<IEnumerable<Person>>> GetPeople();
    }

    public class UserService : IUserService
    {

        private readonly AppDbContext _context;

        private readonly AppSettings _appSettings;

        public UserService(AppDbContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public  AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var person =  _context.People.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);

            // return null if user not found
            if (person == null) return null;

            // authentication successful so generate jwt token
            var token = generateJwtToken(person);

            return new AuthenticateResponse(person, token);
        }

        public async Task<ActionResult<IEnumerable<Person>>> GetPeople()
        {
            return await _context.People.ToListAsync();
        }

        public Person GetById(int id)
        {
            return _context.People.FirstOrDefault(x => x.PersonId == id);
        }

        // helper methods

        private string generateJwtToken(Person person)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var vlaue = _appSettings.Secret;
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", person.PersonId.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}