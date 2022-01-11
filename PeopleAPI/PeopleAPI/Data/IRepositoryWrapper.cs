using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleAPI.Data
{
    public interface IRepositoryWrapper
    {
        IPersonRepository Person { get; }
    }
}
