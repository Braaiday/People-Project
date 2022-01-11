using PeopleAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PeopleAPI.Data
{
    public class EFPersonRepository : RepositoryBase<Person>, IPersonRepository
    {
        public EFPersonRepository(AppDbContext appDbContext)
            : base(appDbContext)
        {
        }
        public Person GetPersonDetails(int id)
        {
            return _appDbContext.People
       
                .FirstOrDefault(p => p.PersonId == id);
        }
    }
}
