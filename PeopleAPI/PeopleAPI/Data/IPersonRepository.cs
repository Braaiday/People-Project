using PeopleAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Data
{
    public interface IPersonRepository : IRepositoryBase<Person>
    {
        Person GetPersonDetails(int id);

    }
}
