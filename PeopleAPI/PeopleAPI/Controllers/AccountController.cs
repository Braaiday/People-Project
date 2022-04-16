using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PeopleAPI.Data;
using PeopleAPI.Models;

namespace PeopleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AccountController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/Login/pierre.putter@gmail.com/123
        [HttpGet("login/{username}/{.}")]
        public async Task<ActionResult<String>> Login(string username, string password)
        {

            string curPassword;
            string curUsername;
            string role = null;
            Boolean foundPersonWithCred = false;
            List<Person> people = await _context.People.ToListAsync();
            foreach (Person thePerson in people)
            {
                curUsername = thePerson.Username;
                curPassword = thePerson.Password;
                if ((username == curUsername) && (password == curPassword))
                {
                    foundPersonWithCred = true;
                    role = thePerson.Role;
                }
            }
            if (foundPersonWithCred == false)
            {
                return "notfound";
            }
            if (role == null)
            {
                return "notfound";
            }
            else return role;
        }
    }
}
